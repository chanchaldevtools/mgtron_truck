import React, { useState } from 'react';
import { Form, Button, Alert, Image, InputGroup, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logo from '../Images/logo.png';
import { login } from '../services/apiService';

function Login() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!phone || phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setIsLoading(true);
    try {
      const response = await login(phone);
      localStorage.setItem('loginResponse', JSON.stringify(response));
      if(response.success){
        navigate('/verify-otp', { 
        state: { 
          token: response.token, 
        } 
      });
      }else{
        setError(response.message);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <div className="login-header">
          <Image src={Logo} alt="logo" className="img-logo" />
          <h2>Let's get something</h2>
          <p className="mb-2">Good to see you back</p>
          <div className="underline" />
        </div>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formPhone">
            <InputGroup>
              <InputGroup.Text>+91</InputGroup.Text>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setPhone(value);
                  setError('');
                }}
                
                maxLength={10}
              />
            </InputGroup>
          </Form.Group>

          <Button 
            type="submit" 
            className="login-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="ms-2">Sending OTP...</span>
              </>
            ) : (
              'Request OTP'
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;