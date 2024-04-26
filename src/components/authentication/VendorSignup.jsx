import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { FaCheckSquare, FaHome, FaSquare, FaSquareFull } from 'react-icons/fa'
import Buttons from '../layout/Buttons';
import { Link } from 'react-router-dom';


function VendorSignup() {
  // use useState hook to set the email, password and throw error incase of an error
  const [restaurantName, setRestaurantName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('')
  const [error, setError] = useState('');
 restaurantName, foodType, address, time, people;
  // Event handler function for the form so it submits before refreshing the page
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      // This condition checks that you enter a valid email and password
      setError("Please enter username, email and password");
      return;
    } else if (name !== available) {
      setError("Username not available");
      return;
    } else if (!validEmail(email)) {
      setError("Please enter a valid email address");
      return;
    } else {
      // Send the name, email and password saved in memory to the console
      console.log('name:', name);
      console.log('email:', email);
      console.log('Password:', password);
      // then clear the error message and set it to blank
      setError('');
    }

  }

  // validate the email so the user has to input a correct email and in the right formart
  const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
      
        <div id='signup'>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form id="form" onSubmit={handleSubmit} >
            <h1>Sign Up</h1>
            <div id="social-logins">
              <p>Signup using social networks</p>
              <div id="login-icons">
                <img className="login-icon" src="\images\flat-color-icons_google.png" alt="food-image" />
                <img className="login-icon" src="\images\ri_facebook-fill.png" alt="food-image" />
                <img className="login-icon" src="\images\x 1.png" alt="food-image" />
              </div>
              <div id="or">
                <hr style={{width:"220px"}}></hr><span>Or</span><hr style={{width:"220px"}}></hr>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>Business Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>Retype Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
              />
            </Form.Group>
            <div style={{marginBottom: "20px"}}>
              <Buttons type="submit" size='lg' style={{
                width: "100%", backgroundColor: '#FDC55E',
                border: 'none',
                margin: '20px 0',
                color: "#000"
              }}><Link to='/vendorsdashboard' style={{textDecoration: 'none', color: 'black'}} >Sign up <img src="/images/arrow-right.svg" alt="" /></Link></Buttons>
              <h5 style={{textAlign: 'center', fontSize: "20px", fontWeight: 500, lineHeight: "30px"}}>CONTINUE A GUEST</h5>
            </div>
          </Form>
          <div className="vendorloginImage">
            <img  src="\images\vendorsignup.png" alt="food-image" />
          </div>
        </div>
        <div className='vendorsignup-tagline'>
          <h3>Showcase your delicious food and connect with a vibrant community of local customers.</h3>
        </div>
      
    </>
  );
}

export default VendorSignup;