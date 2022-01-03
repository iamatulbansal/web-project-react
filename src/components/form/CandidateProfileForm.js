import React from "react";

import { useForm } from "react-hook-form";
import css from "./CandidateProfileForm.module.css";

function CandidateProfileForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const submitBtn = (data) => {
    console.log(data);
    document.write(JSON.stringify(data));
    // console.log(JSON.stringify(data));
  };

  return (
    <React.Fragment>
      <div className={("container-md  bg-light p-2 ", css.root)}>
        <div className="text-secondary m-5">
          <h1>Candidate Registration Form</h1>
        </div>
        <div className={("container", css.border_radius)}>
          <div className="row align-items-center">
            <div className="col ">
              <form className="row g-3 " onSubmit={handleSubmit(submitBtn)}>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    First Name
                  </label>
                  <input
                    id={"firstname"}
                    type="text"
                    placeholder="First Name"
                    className="form-control rounded-pill"
                    {...register("name.firstname", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />

                  {/* logic firstname */}
                  {errors?.firstName?.type === "required" && (
                    <p>This field is required</p>
                  )}
                  {errors?.firstName?.type === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                  )}
                  {errors?.firstName?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                    {...register("name.lastname", { pattern: /^[A-Za-z]+$/i })}
                  />
                  {/* Logic last name */}
                  {errors?.lastName?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    User Name
                  </label>
                  <input
                    {...register("username")}
                    type="text"
                    placeholder="username"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Mobile
                  </label>
                  <input
                    {...register("mobile")}
                    type="number"
                    placeholder="1234567890"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    D.O.B
                  </label>
                  <input
                    {...register("dob")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    {...register("address")}
                    type="text"
                    className="form-control rounded-pill"
                    id="inputAddress"
                    placeholder=" Address"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    {...register("city")}
                    type="text"
                    placeholder="Delhi"
                    className="form-control rounded-pill"
                    id="inputCity"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <select
                    {...register("state")}
                    id="inputState"
                    defaultValue="choose"
                    className="form-select rounded-pill"
                  >
                    <option value="none">Choose...</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    Country
                  </label>
                  <select
                    {...register("country")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select rounded-pill"
                  >
                    <option value="none">Choose...</option>
                    <option value="India">India</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Russia">Russia</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">
                    Zip
                  </label>
                  <input
                    {...register("zip")}
                    type="text"
                    placeholder="Zip"
                    className="form-control rounded-pill"
                    id="inputZip"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    About
                  </label>
                  <textarea
                    {...register("about")}
                    placeholder="Enter details about me"
                    className="form-control rounded-4"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    Joblocations
                  </label>
                  <select
                    {...register("joblocations")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select rounded-pill"
                  >
                    <option value="none">Choose...</option>
                    <option value="Noida">Noida</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="pune">pune</option>
                    <option value="bhopal">bhopal</option>
                    <option value="Gujrat">Gujrat</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    jobtype
                  </label>
                  <select
                    {...register("jobtype")}
                    id="inputState"
                    className="form-select rounded-pill"
                  >
                    <option value="1">Full Time</option>
                    <option value="2">Part Time</option>
                    <option value="3">Permanent </option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    loctype
                  </label>
                  <select
                    {...register("loctype")}
                    id="inputState"
                    className="form-select rounded-pill"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="col-">
                  <button
                    type="submit"
                    className="btn btn-light rounded-pill bg-secondary text-white "
                  >
                    Register/Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CandidateProfileForm;
