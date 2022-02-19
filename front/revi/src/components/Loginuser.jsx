
import { useContext, useState } from "react";
import "../RegisterUser.css";
import { Link } from "react-router-dom";
import axios from "axios";


import { useNavigate } from "react-router";

export const Loginuser = () => {
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:2345/login", formData)
          .then((res) =>
              navigate("/Home")).catch((err) => console.log(err))
  }

  

  return (
    <>
      <div className="container">
        <div className="main-container">
          <div className="container2">
            <p>Log in</p>

            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                className="input-box"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Password"
                className="input-box"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit" className="submit-btn">
                Log in
              </button>
            </form>
            
          </div>
          <div className="not-having-an-account">
            New user? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};