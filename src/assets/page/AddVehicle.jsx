import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

function AddVehicle() {
  const formFields = [
    { label: "Date", type: "date", controlId: "date" },
    { label: "Source", type: "text", controlId: "source" },
    { label: "Destination", type: "text", controlId: "destination" },
    { label: "Receiving", type: "text", controlId: "receiving" },
    { label: "Day Limit", type: "text", controlId: "dayLimit" },
  ];

  const fairInputs = [
    { label: "Fair(40)", controlId: "fair40" },
    { label: "Fair(1300)", controlId: "fair1300" },
  ];

  return (
    <>
      <section className="top-sec1 add-vehicle">
        <Container fluid>
          <div className="mb-3">
            <h2>
              <FontAwesomeIcon icon={faCar} className="me-2" />
              Add Vehicle
            </h2>
          </div>

          <Form>
            {formFields.slice(0, 3).map((field, idx) => (
              <Form.Group key={idx} className="mb-2">
                <Form.Label className="form-label">{field.label}</Form.Label>
                <Form.Control type={field.type} id={field.controlId} className="form-control" />
              </Form.Group>
            ))}

            <Row>
              {fairInputs.map((input, idx) => (
                <Col xs={6} md={6} key={idx}>
                  <Form.Group className="mb-2">
                    <Form.Label className="form-label">{input.label}</Form.Label>
                    <Form.Control type="text" id={input.controlId} className="form-control" />
                  </Form.Group>
                </Col>
              ))}
            </Row>

            <InputGroup className="mb-3">
              <InputGroup.Text>Total</InputGroup.Text>
              <Form.Control type="text" readOnly className="form-control" />
            </InputGroup>

            {formFields.slice(3).map((field, idx) => (
              <Form.Group key={idx} className="mb-3">
                <Form.Label className="form-label">{field.label}</Form.Label>
                <Form.Control type={field.type} id={field.controlId} className="form-control" />
              </Form.Group>
            ))}

            <Button type="submit" className="login-btn">Submit</Button>
          </Form>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default AddVehicle;
