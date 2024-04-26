import { Form, Alert } from 'react-bootstrap';
import Vector from '../vector/Vector';
import { useState } from 'react';
import { FaRegCheckSquare } from 'react-icons/fa';
import Buttons from '../layout/Buttons';
import { Link } from 'react-router-dom';


function CustomerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const api = "https://dishcorner.onrender.com/api/v1/auth/login";

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError("Please enter email and password");
    return;
  } else if (!validEmail(email)) {
    setError("Please enter a valid email address");
    return;
  }

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle error response
      if (data && data.error) {
        setError(data.error);
      } else {
        setError("Invalid email or password");
      }
    } else {
      // Login successful, you can redirect or perform any other action here
      console.log("Login successful");
      setError("");
      // Redirect to landing page, you can use react-router-dom's useHistory hook here
      // history.push('/landing');
    }
  } catch (error) {
    console.error("Error:", error);
    setError("Invalid email or password");
  }
};

  const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  // Directing the login button to go to the landingpage
  // history.push('/landing');

  // Styling for the button
  const buttonStyle = {
    backgroundColor: '#FDC55E',
    border: 'none'
  };
  return (
    <>
      <div id="login">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="form" onSubmit={handleSubmit}>
          <h1 className="header">Log in</h1>
          <div id="social-logins">
            <p>Log in using social networks</p>
            <div id="login-icons">
              <img className="login-icon" src="\images\flat-color-icons_google.png" alt="food-image" />
              <img className="login-icon" src="\images\ri_facebook-fill.png" alt="food-image" />
              <img className="login-icon" src="\images\x 1.png" alt="food-image" />
            </div>
            <div id="or">
            <hr style={{width:"220px"}}></hr><span>Or</span><hr style={{width:"220px"}}></hr>
            </div>
          </div>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              required 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              required
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <div id="remember-me">
              <span><FaRegCheckSquare /></span> 
              <p>Remember me <span id="forgotPassword"> Forgot Password</span> </p>
          </div>
          </Form.Group>
          <div className="d-grid gap-2">
            <Buttons type="submit" size='lg' style= {buttonStyle} ><Link to='/landing' style={{textDecoration: 'none', color: 'black'}}  >LOG IN <img src="/images/arrow-right.svg" alt="" /></Link></Buttons>
          </div>
          <p style={{marginTop:"20px"}}>Don't have an account? <Link to="/customersignup" style={{color:"#FF3326"}}>Sign up</Link></p>
        </Form>
        <Vector />
      </div>
      <div className="loginImage">
        <img  src="\images\Login image.png" alt="food-image" />
      </div>
      <div id="tagline">
        <h3>Eat your favourite meal at the nearest Restaurant close to  you</h3>
        <p>We connect our customers to food Vendors  in their neighbourhood</p>
      </div>

    </>
  );
}

export default CustomerLogin;