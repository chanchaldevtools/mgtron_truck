import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { fetchVehicles } from "../services/apiService";

const VehicleCard = ({ model, number, type, name, phone }) => (
  <div className="vehicle">
    <Row className="align-items-center">
      <Col xs={2} className="left-vech">
        <div className="vehicle-img">
          <svg width="35px" height="35px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28 28C28 26.344 26.656 25 25 25C23.344 25 22 26.344 22 28C22 29.656 23.344 31 25 31C26.656 31 28 29.656 28 28ZM28 28H31V19C31 18 30 17 29 17M11 28C11 26.344 9.656 25 8 25C6.344 25 5 26.344 5 28C5 29.656 6.344 31 8 31C9.656 31 11 29.656 11 28ZM11 28H19V2C19 1.484 18.515 1 18 1H3C1.656 1 0.797 1.344 1.078 3L2 9M29 17H22M29 17L28 6C27.906 5.266 27.531 5 27 5H22M8 16H2M9 20H3M7 12H1"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Col>
      <Col xs={10}>
        <div className="vehicle-det">
          <p>Vehicle no : <span>{number}</span></p>
          <p>Driver Name : <span>{name}</span></p>
          <p>Driver Phone : <span>{phone}</span></p>
          <div className="right-sec">
            <Link to="/vehicle-details" className="btn btn-view">View</Link>
            <Link to="#" type="button" className="btn btn-edit">
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
            <Link to="#" type="button" className="btn btn-trash">
              <FontAwesomeIcon icon={faTrash} />
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const observer = useRef();
  const loadingRef = useRef(false); // Additional ref to prevent duplicate loads

  const loadVehicles = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;
    
    loadingRef.current = true;
    setLoading(true);
    setError(null);
    
    try {
      const { vehicles: newVehicles, hasMore: moreAvailable } = await fetchVehicles(page);
      
      setVehicles(prev => [...prev, ...newVehicles]);
      setHasMore(moreAvailable);
      if (moreAvailable) {
        setPage(prev => prev + 1);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [page, hasMore]);

  const lastVehicleRef = useCallback(node => {
    if (loadingRef.current) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !loadingRef.current) {
        loadVehicles();
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px'
    });
    
    if (node) observer.current.observe(node);
  }, [hasMore, loadVehicles]);

  useEffect(() => {
    // Initial load
    loadVehicles();

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <section className="top-sec">
        <Container fluid>
          {error && (
            <div className="alert alert-danger">
              Error loading vehicles: {error}
              <button 
                onClick={() => {
                  setPage(1);
                  setVehicles([]);
                  setHasMore(true);
                  loadVehicles();
                }}
                className="btn btn-sm btn-primary ms-2"
              >
                Retry
              </button>
            </div>
          )}
          
          {vehicles.map((vehicle, index) => (
            <div 
              key={`${vehicle.id}-${index}`}
              ref={index === vehicles.length - 1 ? lastVehicleRef : null}
            >
              <VehicleCard
                model={vehicle.vehicle_model}
                number={vehicle.vehicle_number}
                type={vehicle.vehicle_type}
                name={vehicle.driver_name}
                phone={vehicle.driver_number}
              />
            </div>
          ))}
          
          {loading && (
            <div className="text-center my-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          
          {!hasMore && vehicles.length > 0 && (
            <div className="text-center my-3 text-muted">
              No more vehicles to load
            </div>
          )}
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Home;