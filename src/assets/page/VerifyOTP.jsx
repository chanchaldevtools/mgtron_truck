import React, { useState } from 'react';
import { Form, Button, Alert, Image, Spinner } from 'react-bootstrap';
import Logo from '../Images/logo.png';
import OtpInput from 'react-otp-input';
import { verifyOTP } from '../services/apiService'; 
import { useNavigate, useLocation } from 'react-router-dom';
function VerifyOTP() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state?.token || '';
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (otp.length !== 4) {
      setError('Please enter a valid 4-digit OTP');
      return;
    }
    setIsLoading(true);
    try {
      const response = await verifyOTP(token, otp);
      if(response.success){
        setSuccess(response.message);
        localStorage.setItem('userData', JSON.stringify(response.user || {}));
        localStorage.setItem('authToken', response.user.id);
        setTimeout(() => {
        navigate('/home');
      }, 1000);
      }else{
        setError(err.message || 'Invalid OTP. Please try again.');
      }
    } catch (err) {
      console.error('Verification error:', err);
      setError(err.message || 'Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
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
        {success && <Alert variant="success">{success}</Alert>}

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
                shouldAutoFocus
              />
            </div>
          </Form.Group>

          <Button type="submit" className="login-btn w-100" disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="ms-2">Verifying...</span>
              </>
            ) : (
              'Verify OTP'
            )}
          </Button>
        </Form>

        
      </div>
    </div>
  );
}

export default VerifyOTP;