import React, { useState } from "react";

function Form() {
  const [getData, setGetData] = useState({
    fname: "",
    lname: "",
  });
  const [submit, setSubmit] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(getData);
    setGetData(getData);
    setSubmit(true);
  };

  const onInputChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    const value = e.target.value;
    const name = e.target.name;

    setGetData((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };
  return (
    <div className="containar-fluid">
      <div className="  text-center mt-5">
        {submit ? (
          <h2>
            First Name :-{getData.fname} <br /> Last Name :-{getData.lname}
          </h2>
        ) : (
          <h2>
            First Name :-{getData.fname} <br /> Last Name :-{getData.lname}
          </h2>
        )}
      </div>
      <div className="container mt-5 d-flex justify-content-center item-center bg-primary p-5 text-white  mx-auto col-md-4">
        <form onSubmit={onSubmit}>
          <label htmlFor="fname">First Name :- </label>
          <input
            type="text"
            id="fname"
            placeholder="firstname"
            name="fname"
            value={getData.fname}
            onChange={onInputChange}
          />
          <br />
          <br />
          <label htmlFor="lname">Last Name :- </label>
          <input
            type="text"
            id="lname"
            placeholder="lastname"
            name="lname"
            value={getData.lname}
            onChange={onInputChange}
          />
          <br />
          <br />
          <input type="submit" />
          &nbsp; &nbsp;
          <input type="reset" />
        </form>
      </div>
    </div>
  );
}

export default Form;
