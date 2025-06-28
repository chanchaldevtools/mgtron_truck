import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faCalendarDays,faPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const vehicleDetailsData = [
  {
    id: 1,
    number: "WB541747",
    date: "28.10.2025",
    source: "Gulabbagh",
    dest: "Durgapur",
    tripId: "454878",
    show: false,
  },
  {
    id: 2,
    number: "WB541747",
    date: "28.10.2025",
    source: "Gulabbagh",
    dest: "Burdwan",
    tripId: "454878",
    show: false,
  },
];

function VehicleDetailsPage() {
  const [details, setDetails] = useState(vehicleDetailsData);

  return (
    <>
      <section className="top-sec1">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2><FontAwesomeIcon icon={faCar} /> WB541747</h2>
          <Link to="/add-transport" className="add-trans"><FontAwesomeIcon icon={faPlus} /> Add Transport</Link>
        </div>
        {details.map((veh, idx) => (
          <div key={veh.id} className="trip-vehicle">
            <div className="numbering">
              <span>{veh.id}</span>
            </div>
            <div className="add-vehicle01">
              <div className="d-flex align-items-center gap-2 mb-1">
                <h4>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </h4>
                <span>{veh.date} </span>
                <span className="trip-id">ID : {veh.tripId}</span>
              </div>
            </div>
             <hr />
            <div className="d-flex align-items-center justify-content-between gap-2">
              <div className="transport-det">
                <span>{veh.source}</span>
              </div>
              <span>- To -</span>
              <div className="transport-det">
                <span>{veh.dest}</span>
              </div>
            </div>
            <hr />
            <div className="mt-2">
              {/* <Link as={Link} className="show-det-btn">
                View Receiving
              </Link>
              <Link as={Link} className="show-det-btn">
                View Bill
              </Link> */}
              <Button as={Link} to="/show-vehicle-details" className="show-det-btn">
                Show Details
              </Button>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default VehicleDetailsPage;
