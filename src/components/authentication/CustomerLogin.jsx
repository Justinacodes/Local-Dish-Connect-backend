import { Form, Alert } from "react-bootstrap";
import Vector from "../vector/Vector";
import { useState, useEffect } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import Buttons from "../layout/Buttons";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    // Check if the user is already logged in (optional)
    // Add your logic here if needed
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    } else if (!validEmail(email)) {
      setError("Please enter a valid email address");
      return;
    } else {
      try {
        const response = await axios.post(
          "https://dishcorner.onrender.com/api/v1/auth/login",
          {
            email: email,
            password: password,
          }
        );
        console.log("Response:", response.data);
        if (response.data.success) {
          // Redirect to dashboard or landing page upon successful login
          history.push(""); // Replace '/dashboard' with the actual route
        } else {
          setError("Invalid email or password. Please try again.");
        }
      } catch (error) {
        console.error("An error occurred:", error.response);
        setError("An error occurred. Please try again.");
      }
    }
  };

  const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const buttonStyle = {
    backgroundColor: "#FDC55E",
    border: "none",
  };

  return (
    <>
      <div id="login">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="form" onSubmit={handleSubmit}>
          <h1 className="header">Log in</h1>
          {/* Rest of your form code */}
        </Form>
        <Vector />
      </div>
      <div className="loginImage">
        <img src="\images\Login image.png" alt="food-image" />
      </div>
      <div id="tagline">
        <h3>Eat your favourite meal at the nearest Restaurant close to you</h3>
        <p>We connect our customers to food Vendors in their neighbourhood</p>
      </div>
    </>
  );
}

export default CustomerLogin;
