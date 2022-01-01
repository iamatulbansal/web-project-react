import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Form.css";

function Registration_form() {
  const [register, setRegister] = useState("Register");
  const [data, setData] = useState([]);

  const submitFormData = (event) => {
    event.preventDefault();
  };
  return (
    <div className="register-component ">
      <div className="container">
        <div className="title">Candidate Profile</div>
        <form action="#" onSubmit={submitFormData}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name </span>
              <input type="text" placeholder="Name" required />
            </div>

            <div className="input-box">
              <span className="details">Username </span>
              <input type="text" placeholder="Username" required />
            </div>

            <div className="input-box">
              <span className="details">Email </span>
              <input type="text" placeholder="Email" required />
            </div>

            <div className="input-box">
              <span className="details">Mobile </span>
              <input type="text" placeholder="Mobile" required />
            </div>

            <div className="input-box">
              <span className="details">Date of Birth</span>
              <input type="text" placeholder="Date of Birth" required />
            </div>

            <div className="input-box">
              <span className="details">Password</span>
              <input type="text" placeholder="Password" required />
            </div>

           

            <div className="gender-details">
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="">
                  <span className="dot one"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="">
                  <span className="dot one"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" className="submit" value={register} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration_form;
