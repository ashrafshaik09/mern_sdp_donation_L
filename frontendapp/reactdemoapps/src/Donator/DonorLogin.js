import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // If you're using CSS icons, include this

const DonorLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    try {
      const response = await axios.post('http://localhost:2014/checkdonorlogin', formData);
      if (response.data != null) {
        console.log(response.data);
        // navigate("/jobseekerhome");
        window.location.href = "http://localhost:3000/donate";
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  // this is for CSS only
  const myStyle = {
    backgroundImage: "url('/donate1.jpg')", // Assuming donate1.jpg is directly inside the public folder
    height: "100vh",
    marginTop: "-30px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='login'>
      <div className="wrapper">
        <div className={`login-text ${isExpanded ? 'expand' : ''}`}>
          <button className="cta" onClick={toggleExpand}>
            <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} fa-1x`}></i>
          </button>
          <div className={`text ${isExpanded ? 'show-hide' : ''}`}>
            <form onSubmit={handleSubmit}>
            <a href='' >Login</a>
                        <hr />
                        <br />

              <input type="text" placeholder="Username" name="email" value={formData.email} onChange={handleChange} />
              <br />
              <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
              <br />
              <button type="submit" className="login-btn">Log In</button>
              <button className="signup-btn">Register</button>
            </form>
          </div>
        </div>
        <div className="call-text">
          <h1>
            <span>"Login to Donate</span> and Make a Difference!"
          </h1>
          <button onClick={toggleExpand}>Login to the Donor Community</button>
        </div>
      </div>
    </div>
  );
}

export default DonorLogin;