import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faHouse,
  faGear,
  faTruckMonster,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();

   const navigate = useNavigate();

  return (
    <footer className="fixed-bottom my-footer">
      <Container fluid>
        <Row className="text-center py-1">
          <Col>
            <div className="back-page" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </Col>
          <Col>
            <Link
              to="/pending-payment"
              className={
                location.pathname === "/pending-payment" ? "active" : ""
              }
            >
              <FontAwesomeIcon icon={faCreditCard} />
            </Link>
          </Col>
          <Col>
            <Link
              to="/home"
              className={
                location.pathname === "/home" ||
                location.pathname === "/vehicle-details" ||
                location.pathname === "/show-vehicle-details" ||
                location.pathname === "/add-transport"
                  ? "active"
                  : ""
              }
            >
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </Col>
          <Col>
            <Link
              to="/settings"
              className={location.pathname === "/settings" ? "active" : ""}
            >
              <FontAwesomeIcon icon={faGear} />
            </Link>
          </Col>
          <Col>
            <Link
              to="/add-vehicle"
              className={location.pathname === "/add-vehicle" ? "active" : ""}
            >
              <FontAwesomeIcon icon={faTruckMonster} />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
