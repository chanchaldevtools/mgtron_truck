import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import StatusFooter from "../components/StatusFooter";

const transactions = [
  {
    id: "TXN123456790",
    from: "Durgapur City",
    to: "Burdwan Station",
    amount: "1000.00",
    vehicleNo: "WB39B7426",
    Trip: "MAIN",
    status: "Approved",
  },
  {
    id: "TXN123456791",
    from: "Durgapur City",
    to: "Burdwan Station",
    amount: "1000.00",
    vehicleNo: "WB39B7426",
    Trip: "MAIN",
    status: "Approved",
  },
  {
    id: "TXN123456792",
    from: "Durgapur City",
    to: "Burdwan Station",
    amount: "1000.00",
    vehicleNo: "WB39B7426",
    Trip: "MAIN",
    status: "Approved",
  },
];

const TransactionCard = ({ data }) => (
  <div className="trans">
    <div className="source">
      <FontAwesomeIcon icon={faCar} /> <span>{data.from}</span>
      <FontAwesomeIcon icon={faArrowRight} /> <span>{data.to}</span>
    </div>
    <div className="d-flex align-items-center justify-content-between">
      <h4>Vehicle No: {data.vehicleNo}</h4> <small>TRIP ID: 214744</small>
    </div>
    <hr />
    <Row className="mode align-items-center">
      <Col md={4} xs={7}>
        <h3>₹ {data.amount}</h3>
      </Col>
      <Col md={4} xs={5} className="text-center">
        <div className="text-center">
          <p>TRIP: {data.Trip}</p>
          <span className={`status-badge ${data.status.toLowerCase()}`}>
            {data.status}
          </span>
        </div>
      </Col>
    </Row>
  </div>
);

const Approved = () => (
  <>
    <section className="top-sec">
      <Container fluid>
        {transactions.map((txn) => (
          <TransactionCard key={txn.id} data={txn} />
        ))}
      </Container>
    </section>

    <StatusFooter status="approved" />
  </>
);

export default Approved;
