import React, { useState } from 'react';
import { Form, Button, Alert, Image } from 'react-bootstrap';
import Logo from '../Images/logo.png';
import OtpInput from 'react-otp-input';

function VerifyOTP() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 4) {
      setError('Please enter a valid 4-digit OTP');
    } else {
      setError('');
      console.log('Entered OTP:', otp);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <div className="login-header text-center">
          <Image src={Logo} alt="logo" className="img-logo" />
          <h2>Verification Code</h2>
          <p className="mb-2">Enter OTP</p>
          <div className="underline" />
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formOtp">
            <div className='d-flex justify-content-center'>
                <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="mx-2">-</span>}
              renderInput={(props) => <input {...props} className="otp-input" />}
              inputStyle={{
                width: '3rem',
                height: '3rem',
                fontSize: '1.5rem',
                textAlign: 'center',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
            </div>
          </Form.Group>

          <Button type="submit" className="login-btn w-100">
            Verify OTP
          </Button>
        </Form>

        <div className="text-center mt-3">
          <small>
            Don’t have an account?{' '}
            <a href="#" className="signup-link">
              Sign up
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;
