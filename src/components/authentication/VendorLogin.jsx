import { Form, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { FaRegCheckSquare } from 'react-icons/fa'
import Buttons from '../layout/Buttons';
import { Link } from 'react-router-dom';



function VendorLogin() {
  // use useState hook to set the email, password and throw error incase of an error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

// Event handler function for the form so it submits before refreshing the page
  const handleSubmit = (e) => {
    e.preventDefault();
      // This condition checks if the email and password you used matches what is in memory
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    } else if (!validEmail(email)) {
      setError("Please enter a valid email address");
      return;
    } else if (password !== 'password') {
      setError("Incorrect password.Please enter the correct password");
      return;
    } else {
      // Send the email and password saved in memory to the console
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
      <div id='vendorLogin'>
        <div id="login">
          {error && <Alert variant="danger">{error}</Alert>}
          <Form id="form" onSubmit={handleSubmit}>
            <h1>Log in</h1>
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
              <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>BUSINESS EMAIL</Form.Label>
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
                <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>PASSWORD</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
                />
            </Form.Group>
            <div style={{display: "flex", alignItems: 'center', justifyContent: "space-between"}}>
              <div style={{display: "flex", alignItems: 'center', gap: "10px"}}>
                  <span><FaRegCheckSquare /></span> 
                  Remember me <span id="forgotPassword"> </span> 
              </div>
              <p style={{color: "rgba(255, 118, 34, 1)", fontSize: "14px", fontWeight: 400}}>Forgot Password</p>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Buttons onClick={handleSubmit} type="submit" size='lg' style={{
                width: "100%", backgroundColor: '#FDC55E',
                border: 'none',
                margin: '20px 0',
                color: "#000"
              }}><Link to='/customerlogin' style={{textDecoration: 'none', color: 'black'}}  >LOG IN <img src="/images/arrow-right.svg" alt="" /></Link> </Buttons>
            </div>
          
            <div style={{fontSize: "16px", fontWeight: 700, textAlign: "center", marginBottom: "30px" }}>
              {"Don’t"} have an account? <Link to="/signup" style={{color: "rgba(255, 51, 38, 1)", fontWeight: 500}}>Sign up</Link>
            </div>
          </Form>
          <div className="vendorloginImage">
            <img  src="\images\vendorlogin.png" alt="food-image" />
          </div>
          
        </div>
        <div className='vendor-tagline'>
          <h3>Welcome back! Manage your profile, update your menu, and connect with customer</h3>
        </div>
      </div>
      
    </>
  );
}

export default VendorLogin;