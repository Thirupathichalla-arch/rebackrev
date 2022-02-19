import { useContext, useState } from "react";
import "../RegisterUser.css";
import { Link } from  "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };
    const navigate = useNavigate();

  const handleSubmit =  (e) => {
      e.preventDefault();
      axios.post("http://localhost:2345/register", formData)
          .then((res) =>
              navigate("/login")).catch((err) => console.log(err))
  };
  return (
    <>
      <div className="container">
        <div className="main-container">
          <div className="container1">
            Have an account? <Link to="/login">Log in</Link>
          </div>
          <div className="container2">
            <p>Sign up</p>

            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="input-box"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
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
                Create account
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};