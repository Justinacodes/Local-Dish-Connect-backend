import { Form, Button, Alert } from 'react-bootstrap';
import Vector from '../vector/Vector';
import { useState } from 'react';
import Buttons from '../layout/Buttons';

function CustomerChangePassword() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      setError("Please enter a valid password");
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
          <h1 clasName="header">Change Password</h1>
          <div>
            <p>Please enter your new password</p>
          </div>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control 
              required
              type="password" 
              placeholder="*********" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>RETYPE PASSWORD</Form.Label>
            <Form.Control 
              required
              type="password" 
              placeholder="************" 
              value={confirm} 
              onChange={(e) => setConfirm(e.target.value)} 
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
        <Vector />
      </div>
      <div className="forgetpasswordImage">
        <img  src="\images\Forgot password image.png" alt="food-image" />
      </div>
    </>
  );
}

export default CustomerChangePassword;