import React, { useState } from "react";

import updatecls from "./ProfileUpdate.module.css";
let initialvalue = {
  name: "",
  age: "",
  education: "",
  place: "",
  email: "",
  phone: "",
  gender: "",
  about: "",
};
const ProfileUpdate = () => {
  const [obj, setobj] = useState(initialvalue);
  const eventHandler = (e) => {
    e.preventDefault();
    setobj({ ...obj, [e.target.name]: e.target.value });
  };
  const buttonHandler = (event) => {
    event.preventDefault();
    console.log(obj);
    // setobj({ ...initialvalue });
  };
  return (
    <div className={updatecls.container}>
      <div className={updatecls.main}>
        <form className={updatecls.formss} onSubmit={buttonHandler}>
          <h2>
            <span>Update </span> Profile
          </h2>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={eventHandler}
          ></input>
          <label>Age</label>
          <input
            type="text"
            placeholder="Enter age"
            name="age"
            onChange={eventHandler}
          ></input>

          <label>Education</label>
          <input type="text" name="education" onChange={eventHandler}></input>

          <label>Place</label>
          <input type="text" name="place" onChange={eventHandler}></input>

          <label>Email</label>
          <input type="text" name="email" onChange={eventHandler}></input>

          <label>Phone</label>
          <input type="text" name="phone" onChange={eventHandler}></input>

          <div className={updatecls.radiobox}>
            <p>Gender:</p>
            <label>Male</label>
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={eventHandler}
            ></input>
            <label>Female</label>
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={eventHandler}
            ></input>
          </div>
          <label>About</label>
          <textarea
            type="text"
            placeholder="min-50 words"
            name="about"
            onChange={eventHandler}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
