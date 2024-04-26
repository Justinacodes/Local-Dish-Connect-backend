import { Form, Alert } from 'react-bootstrap';
import { useState } from 'react';
import Buttons from '../layout/Buttons';

function VendorForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email");
      return;
    } else {
      console.log('Password:', password);
      setError('');
    }

  }
  return (
    <>
      <div id="login">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="form" onSubmit={handleSubmit}>
          <h1 clasName="header">Forget Password</h1>
          <div>
            <p>Input your email address to create a new password</p>
          </div>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control 
              required
              type="password" 
              placeholder="example@gmail.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>
          <div style={{ marginBottom: "20px" }}>
              <Buttons type="submit" size='lg' style={{
                width: "100%", backgroundColor: '#FDC55E',
                border: 'none',
                margin: '20px 0',
                color: "#000"
              }}>SEND <img src="/images/arrow-right.svg" alt="" /> </Buttons>
          </div>
        </Form>
        <div >
          <img className="vendorloginImage" src="\images\vendorforgotpassword.png" alt="food-image" />
        </div>
      </div>
      
    </>
  );
}

export default VendorForgotPassword;