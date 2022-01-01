import React from "react";
import { Form, Col, Row } from "react-bootstrap";
function Signup() {
  return (
    <>
      <div className="container-fluid rounded-pill">
        <div className="container mt-4 bg-light p-2   ">
          <div>
            <div className="col">
              <figure className="figure ">
                <img
                  src="https://icon-library.com/images/signup-icon/signup-icon-13.jpg"
                  className=" figure-img img-fluid rounded"
                  alt="signup"
                />
              </figure>
              <figcaption>
                <h2>Candidate Profile</h2>
              </figcaption>
            </div>
          </div>

          <div className="row align-items-center ">
            <div className="col ">
              <Row>
                <Form.Label column lg={1}>
                  FullName
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="FullName" />
                </Col>

                <Form.Label column lg={1}>
                  Username
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Username" />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column lg={1}>
                  Mobile
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Mobile" />
                </Col>
                <Form.Label column lg={1}>
                  D.O.B
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder=" Date of Birth" />
                </Col>
              </Row>
              <br />

              <form className="row g-3">
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
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    placeholder="Password"
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
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
                <div className="col-12">
                  <label for="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="City"
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
                    <option>...</option>
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
                <div className="col-12">
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
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
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
    </>
  );
}

export default Signup;
