
import React, { useState } from 'react';
import { Form, Button, Alert, Image, InputGroup } from 'react-bootstrap';
import Logo from '../Images/logo.png';
import { Link } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone === '9876543210' && password === 'admin123') {
      alert('Login successful!');
    } else {
      setError('Invalid phone number or password');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <div className="login-header">
        <Image src={Logo} alt="logo" className="img-logo" />
        <h2>Let's get something</h2>
        <p class="mb-2">Good to see you back</p>
        <div className="underline" />
      </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formPhone">
            <InputGroup>
              <InputGroup.Text>+91</InputGroup.Text>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Button type="submit" className="login-btn">Request OTP</Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
