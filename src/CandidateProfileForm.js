import React from "react";
import { Form, Col, Row } from "react-bootstrap";
function CandidateProfileForm() {
  return (
    <>
      <div className="container-fluid rounded-pill mt-2">
        <div className="container  bg-info p-2   ">
          <div className="container  p-5">
            <div>
              <div className="col">
                <figure className="figure ">
                  <img
                    src="https://icon-library.com/images/signup-icon/signup-icon-13.jpg"
                    className=" figure-img img-fluid rounded"
                    alt="CandidateProfileForm"
                  />
                </figure>
                <figcaption>
                  <h2>Candidate Profile</h2>
                </figcaption>
              </div>
            </div>

            <div className="row align-items-center ">
              <div className="col ">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      Firstname
                    </label>
                    <input
                      type="text"
                      placeholder="Charanjeet"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      Lastname
                    </label>
                    <input
                      type="text"
                      placeholder="singh"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Charanjeet_singh"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      Mobile
                    </label>
                    <input
                      type="number"
                      placeholder="1234567890"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      D.O.B
                    </label>
                    <input
                      type="text"
                      placeholder="01/01/2022"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  {/* <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      placeholder="Password"
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div> */}
                  <div className="col-12">
                    <label for="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder=" Address"
                    />
                  </div>
                  {/* <div className="col-12">
                    <label for="inputAddress2" className="form-label">
                      Address 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div> */}
                  <div className="col-md-6">
                    <label for="inputCity" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Delhi"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="inputState" className="form-label">
                      State
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Choose...</option>
                      <option>Nagaland</option>
                      <option>Telangana</option>
                      <option>Madhya Pradesh</option>
                      <option>Andhra Pradesh</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label for="inputState" className="form-label">
                      Country
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Choose...</option>
                      <option>India</option>
                      <option>Ireland</option>
                      <option>Italy</option>
                      <option>Japan</option>
                      <option>Russia</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label for="inputZip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      placeholder="Zip"
                      className="form-control"
                      id="inputZip"
                    />
                  </div>
                  {/* <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div> */}
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      About
                    </label>
                    <textarea
                      placeholder="Enter details about me"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateProfileForm;
