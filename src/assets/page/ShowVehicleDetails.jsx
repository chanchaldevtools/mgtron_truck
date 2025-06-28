import React, { useState } from "react";
import { Button, Row, Col, Container, Modal, InputGroup, Form  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faCalendarAlt,
  faMapMarkerAlt,
  faExchangeAlt,
  faRupeeSign,
  faCar,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ShowVehicleDetails = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAdvanceModal, setShowAdvanceModal] = useState(false);
  const [showDriverModal, setShowDriverModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const vehicleDetails = [
    { label: "Fair(40x1300)", value: "52000" },
    { label: "Day Limit", value: "2day" },
    {
      label: "Advance A/C",
      value: (
        <>
          <Link to="/" className="pending">
            Pending
          </Link>
          <Link to="/" className="vehicle-delete">
            <FontAwesomeIcon icon={faTrash} />
          </Link>
          <Link className="vehicle-edit">
            <FontAwesomeIcon icon={faEdit} onClick={setShowAdvanceModal} />
          </Link>
          <span>20000</span>
        </>
      ),
    },
    {
      label: "Driver Cash",
      value: (
        <>
          <Link to="/" className="vehicle-delete">
            <FontAwesomeIcon icon={faTrash} />
          </Link>
          <Link className="vehicle-edit">
            <FontAwesomeIcon icon={faEdit} onClick={setShowDriverModal} />
          </Link>
          <span>20000</span>
        </>
      ),
    },
    {
      label: "Driver A/C By Company",
      value: (
        <>
          <Link to="/" className="vehicle-delete">
            <FontAwesomeIcon icon={faTrash} />
          </Link>
          <Link className="vehicle-edit">
            <FontAwesomeIcon icon={faEdit}/>
          </Link>
          <span>20000</span>
        </>
      ),
    },
  ];

  const driverExpenses = [
    { label: "Driver Exp", value: "30000" },
    { label: "Loading", value: "3000" },
    { label: "Tripal Rassa", value: "1000" },
    { label: "Parking", value: "500" },
    { label: "Police", value: "2000" },
    { label: "Cash Toll", value: "800" },
    { label: "Urea", value: "1000" },
    { label: "Unloading/Kata", value: "900" },
  ];

  const VehicleExpenses = [
    { label: "Vehicle Exp", value: "30000" },
    { label: "Loading", value: "3000" },
    { label: "Tripal Rassa", value: "1000" },
    { label: "Parking", value: "500" },
    { label: "Police", value: "2000" },
    { label: "Cash Toll", value: "800" },
    { label: "Urea", value: "1000" },
    { label: "Unloading/Kata", value: "900" },
  ];

  return (
    <>
      <Container fluid>
        <section fluid className="top-sec1">
          <h2>
            <FontAwesomeIcon icon={faCar} /> WB541747
          </h2>
          <Row className="mt-3">
            {[
              { icon: faCalendarAlt, label: "Date", value: "3/24/2025" },
              { icon: faMapMarkerAlt, label: "Source", value: "Gulabbagh" },
              { icon: faExchangeAlt, label: "Destination", value: "Kharagpur" },
              { icon: faRupeeSign, label: "Receiving", value: "12000" },
            ].map((item, index) => (
              <Col xs={6} key={index}>
                <div className="transport-det-show">
                  <div className="transport-icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <p className="mb-0">{item.label}</p>
                    <span>{item.value}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <div className="my-vehicle-details">
            {vehicleDetails.map((detail, index) => (
              <ul key={index}>
                <li>{detail.label} :</li>
                <li className="d-flex gap-2">{detail.value}</li>
              </ul>
            ))}
            <ul>
              <li>
                <Link className="btn-add">
                  <FontAwesomeIcon icon={faPlus} onClick={handleShow}/> Advance AC
                </Link>
              </li>
              <li className="d-flex gap-2">
                <Link className="btn-add">
                  <FontAwesomeIcon icon={faPlus} onClick={handleShow}/> Driver Cash
                </Link>
              </li>
            </ul>
          </div>

          <div className="my-vehicle-details01">
            <div className="my-vehicle-details-icon">
              <svg
                width="55px"
                height="55px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 28C28 26.344 26.656 25 25 25C23.344 25 22 26.344 22 28C22 29.656 23.344 31 25 31C26.656 31 28 29.656 28 28ZM28 28H31V19C31 18 30 17 29 17M11 28C11 26.344 9.656 25 8 25C6.344 25 5 26.344 5 28C5 29.656 6.344 31 8 31C9.656 31 11 29.656 11 28ZM11 28H19V2C19 1.484 18.515 1 18 1H3C1.656 1 0.797 1.344 1.078 3L2 9M29 17H22M29 17L28 6C27.906 5.266 27.531 5 27 5H22M8 16H2M9 20H3M7 12H1"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="driverAllDetails">
              <div className="show-all">
                {driverExpenses.map((expense, index) => (
                  <ul className="driverDetails" key={index}>
                    <li>{expense.label}</li>
                    <li>{expense.value}</li>
                  </ul>
                ))}
                <ul className="driverDetails total">
                  <li></li>
                  <li>Balance : 500000</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-vehicle-details01">
             <div className="driverAllDetails mt-2">
              <div className="show-all">
                {VehicleExpenses.map((expense, index) => (
                  <ul className="driverDetails" key={index}>
                    <li>{expense.label}</li>
                    <li>{expense.value}</li>
                  </ul>
                ))}
                <ul className="driverDetails total">
                  <li></li>
                  <li>Balance : 500000</li>
                </ul>
              </div>
            </div>
          </div>

          <Row>
            <Col>
              <Button as={Link} to="/" className="login-btn">
                Add Vehicle EXP
              </Button>
            </Col>
            <Col>
              <Button as={Link} to="/" className="login-trip">
                Go To Sub Trip
              </Button>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />

      {/* Modal */}
     <Modal show={showAdvanceModal} onHide={() => setShowAdvanceModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Pay Advance A/C</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <InputGroup className="mb-3">
      <InputGroup.Text>
        <FontAwesomeIcon icon={faRupeeSign} />
      </InputGroup.Text>
      <Form.Control placeholder="Enter Amount" />
    </InputGroup>
  </Modal.Body>
  <Modal.Footer>
    <Button className="login-btn" onClick={() => setShowAdvanceModal(false)}>Submit</Button>
  </Modal.Footer>
</Modal>

<Modal show={showDriverModal} onHide={() => setShowDriverModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Pay Driver Cash</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <InputGroup className="mb-3">
      <InputGroup.Text>
        <FontAwesomeIcon icon={faRupeeSign} />
      </InputGroup.Text>
      <Form.Control placeholder="Enter Amount" />
    </InputGroup>
  </Modal.Body>
  <Modal.Footer>
    <Button className="login-btn" onClick={() => setShowDriverModal(false)}>Submit</Button>
  </Modal.Footer>
</Modal>


    </>
  );
};

export default ShowVehicleDetails;
