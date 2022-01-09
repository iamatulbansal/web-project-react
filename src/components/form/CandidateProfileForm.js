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
    // document.write(JSON.stringify(data));
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
                {/* firstname */}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    First Name
                  </label>
                  <input
                    {...register("name.firstname")}
                    id={"firstname"}
                    type="text"
                    placeholder="First Name"
                    className="form-control "
                  />
                </div>
                {/* lastname */}
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Last Name
                  </label>
                  <input
                    {...register("name.lastname")}
                    type="text"
                    placeholder="Last Name"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                {/* email */}
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                {/* mobile */}
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Mobile
                  </label>
                  <input
                    {...register("mobile")}
                    type="number"
                    placeholder="1234567890"
                    className="form-control "
                  />
                </div>
                {/* dob */}
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    D.O.B
                  </label>
                  <input
                    {...register("dob")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                {/* country */}
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Country
                  </label>
                  <select
                    {...register("country")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
                  >
                    <option value="none">Choose...</option>
                    <option value="India">India</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Russia">Russia</option>
                  </select>
                </div>
                {/* city */}
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    {...register("city")}
                    type="text"
                    placeholder="Delhi"
                    className="form-control "
                    id="inputCity"
                  />
                </div>
                {/* address */}
                <div className="col-md-6">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    {...register("address")}
                    type="text"
                    className="form-control "
                    id="inputAddress"
                    placeholder=" Address"
                  />
                </div>
                {/* about */}
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
                {/* joblocations */}
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    Job Locations
                  </label>
                  <select
                    {...register("joblocations")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
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
                    Job Type
                  </label>
                  <select
                    {...register("jobtype")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">Full Time</option>
                    <option value="2">Part Time</option>
                    <option value="3">Contract </option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    Work Location
                  </label>
                  <select
                    {...register("loctype")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">Any</option>
                    <option value="2">Remote</option>
                    <option value="3">Office</option>
                    <option value="4">100% Remote</option>
                    <option value="5">Hybrid </option>
                  </select>
                </div>
                <div className="col-md-12 ">
                  <span className="col-md-6">Expected salary</span>
                  <div className="form-check col-md-6  ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register("expSalary.any")}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Any
                    </label>
                  </div>
                  <div className="form-check col-md-6 ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register("expSalary.negotiable")}
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Negotiable
                    </label>
                  </div>
                  <div className="input-group  col-md-6 ">
                    <span className="input-group-text">₹</span>
                    <input
                      placeholder="50000"
                      type="number"
                      {...register("expSalary.salary")}
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <label htmlFor="inputState" className="form-label">
                    Job Experience
                  </label>
                  <select
                    {...register("shift")}
                    id="inputState"
                    placeholder="4.5"
                    className="form-select "
                  >
                    <option value="1">0-1 years</option>
                    <option value="2">1-3 years</option>
                    <option value="2">3-5 years</option>
                    <option value="2">5-10 years</option>
                    <option value="2">10-20 years</option>
                    <option value="2">20+ years</option>
                  </select>
                </div>{" "}
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    Shift
                  </label>
                  <select
                    {...register("shift")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="0">Any</option>
                    <option value="1">Day Shift</option>
                    <option value="2">Night Shift</option>
                    <option value="3">Morning shift</option>
                  </select>
                </div>
                <div className="form-check col-md-4 mt-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("relocate")}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Willingness to relocate
                  </label>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    When can you join
                  </label>
                  <select
                    {...register("joining")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">within a week (immediate)</option>
                    <option value="2">1 month</option>
                    <option value="3">2 months</option>
                    <option value="4">3 months</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Joining Date
                  </label>
                  <input
                    {...register("joiningdate")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    linkdin
                  </span>
                  <input
                    {...register("linkedin")}
                    type="text"
                    className="form-control"
                    placeholder="linkedin"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <div className="input-group flex-nowrap ">
                  <span className="input-group-text" id="addon-wrapping">
                    gitHub
                  </span>
                  <input
                    {...register("github")}
                    type="text"
                    className="form-control"
                    placeholder="github"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputState" className="form-label">
                    Open source community contribution
                  </label>
                  <select
                    {...register("community")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">https://github.com/</option>
                    <option value="2">https://stackoverflow.com/</option>
                    <option value="1">https://github.com/</option>
                    <option value="2">https://stackoverflow.com/</option>
                    <option value="2">https://stackoverflow.com/</option>
                  </select>
                </div>
                <span>Education: </span>{" "}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    College/University
                  </label>
                  <input
                    {...register("education.college")}
                    id={"college"}
                    type="text"
                    placeholder="college"
                    className="form-control "
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Degree
                  </label>
                  <select
                    {...register("education.degree")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">Bachelor's</option>
                    <option value="2">Masters</option>
                    <option value="3">Diploma etc</option>
                  </select>
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Other Degree
                  </label>
                  <input
                    {...register("education.otherdegree")}
                    id={"degree"}
                    type="text"
                    placeholder="other degree"
                    className="form-control "
                  />
                </div>{" "}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    course
                  </label>
                  <input
                    {...register("education.course")}
                    id={"degree"}
                    type="text"
                    placeholder="course"
                    className="form-control "
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    from
                  </label>
                  <input
                    {...register("education.from")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    to
                  </label>
                  <input
                    {...register("education.to")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="form-check col-md-4 mt-5   ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("education.atpresent")}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Atpresent
                  </label>
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Percentage %
                  </label>
                  <input
                    {...register("education.pct")}
                    id={"degree"}
                    type="number"
                    placeholder="%"
                    className="form-control "
                  />
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    CGPA %
                  </label>
                  <input
                    {...register("education.cgpa")}
                    id={"degree"}
                    type="number"
                    placeholder=" %"
                    className="form-control "
                  />
                </div>
                <span>Highest Schooling</span>{" "}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    School Name
                  </label>
                  <input
                    {...register("schooling.name")}
                    id={"degree"}
                    type="text"
                    placeholder="school name"
                    className="form-control "
                  />
                </div>{" "}
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Class Name
                  </label>
                  <select
                    {...register("schooling.class")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">High School</option>
                    <option value="2">Intermediate</option>
                  </select>
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Board
                  </label>
                  <input
                    {...register("schooling.board")}
                    id={"degree"}
                    type="text"
                    placeholder="board"
                    className="form-control "
                  />
                </div>{" "}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Percentage %
                  </label>
                  <input
                    {...register("schooling.pct")}
                    id={"degree"}
                    type="number"
                    placeholder="%"
                    className="form-control "
                  />
                </div>
                <span>Break</span>{" "}
                <div className="col-md-12  ">
                  <label htmlFor="firstname " className="form-label">
                    Reason
                  </label>
                  <input
                    {...register("break.reason")}
                    id={"degree"}
                    type="text"
                    placeholder="Example ,etc,Preparing for MBA exams"
                    className="form-control "
                  />
                </div>
                <span></span>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    From
                  </label>
                  <input
                    {...register("break.from")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    To
                  </label>
                  <input
                    {...register("break.to")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <span>Job History </span>{" "}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Job Title
                  </label>
                  <input
                    {...register("jobs.title")}
                    id={"college"}
                    type="text"
                    placeholder="title"
                    className="form-control "
                  />
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Company Name
                  </label>
                  <input
                    {...register("jobs.company")}
                    id={"college"}
                    type="text"
                    placeholder="company"
                    className="form-control "
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    From
                  </label>
                  <input
                    {...register("jobs.from")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    To
                  </label>
                  <input
                    {...register("jobs.to")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Locations
                  </label>
                  <select
                    {...register("jobs.location")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
                  >
                    <option value="none">Choose...</option>
                    <option value="Noida">Noida</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="pune">pune</option>
                    <option value="bhopal">bhopal</option>
                    <option value="Gujrat">Gujrat</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Roles/Responbilities
                  </label>
                  <select
                    {...register("jobs.roles")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
                  >
                    <option value="none">Choose...</option>
                    <option value="Noida">Web Developer</option>
                    <option value="Mumbai">Java Developer</option>
                    <option value="pune">php Developer</option>
                    <option value="bhopal">backend developer</option>
                    <option value="Gujrat">Frontend developer</option>
                  </select>
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    CTC
                  </label>
                  <input
                    {...register("jobs.ctc")}
                    id={"college"}
                    type="text"
                    placeholder="ctc"
                    className="form-control "
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Skills/Tools
                  </label>
                  <select
                    {...register("skills.name")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
                  >
                    <option value="none">Choose...</option>
                    <option value="Noida">Javascript</option>
                    <option value="Mumbai">Java</option>
                    <option value="pune">Php</option>
                    <option value="bhopal">Node </option>
                    <option value="Gujrat">Phython </option>
                  </select>
                </div>
                <div className="col-md-6 ">
                  <label htmlFor="inputState" className="form-label">
                    Experience
                  </label>
                  <select
                    {...register("skills.experience")}
                    id="inputState"
                    placeholder="4.5"
                    className="form-select "
                  >
                    <option value="1">0-1 years</option>
                    <option value="2">1-3 years</option>
                    <option value="2">3-5 years</option>
                    <option value="2">5-10 years</option>
                    <option value="2">10-20 years</option>
                    <option value="2">20+ years</option>
                  </select>
                </div>
                {/* ///////// */}
                <div className="col-">
                  <button
                    type="submit"
                    className="btn btn-light  bg-primary text-white "
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
{
  /* <select
class="form-select"
multiple
aria-label="multiple select example"
>
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select> */
}
