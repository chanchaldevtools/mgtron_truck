import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faSpinner,
  faThumbsUp,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

function StatusFooter({ status = "pending" }) {
  const navigate = useNavigate();

  const isActive = (step) => step === status;

  return (
    <footer className="fixed-bottom my-footer status-footer">
      <Container fluid>
        <Row className="text-center align-items-center">
          <Col>
            <div className="back-page" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </Col>
          <Col>
          <Link to="/pending-payment">
            <div
              className={`status-item pending ${isActive("pending") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faSpinner} />
              <p>Pending</p>
            </div>
            </Link>
          </Col>
          <Col>
            <Link to="/approved-payment">
             <div
              className={`status-item approved ${isActive("approved") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              <p>Approved</p>
            </div>
            </Link>
          </Col>
          <Col>
          <Link to="/success-payment">
            <div
              className={`status-item success ${isActive("success") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
              <p>Success</p>
            </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default StatusFooter;
