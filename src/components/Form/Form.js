import React, { useEffect, useRef, useState } from "react";
import formcls from "./Form.module.css";
// import useFetch from "../customHook/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { AuthsliceAction } from "../../storecontainer/Authslice";
import { MiddlewarAuth } from "../../storecontainer/Thunks";
import imagelogin from "./../../asserts/imagelogin.jpeg";

const Form = () => {
  const [inpuError, setinpuError] = useState(false);
  const [toggle, settoggle] = useState(true);
  const print = useSelector((state) => state.auth.name);
  const dispatch = useDispatch();
  const EnteredMail = useRef(null);
  const EnteredPassword = useRef(null);
  const EnteredConfirm = useRef(null);
  const bordercolor = {
    // border: inpuError ? "1px solid red" : "none",
    backgroundColor: inpuError ? "red" : " rgb(220, 255, 25)",
  };

  useEffect(() => {
    setTimeout(() => {
      setinpuError(false);
    }, 2000);
  }, [inpuError]);

  const togglehandler = () => {
    settoggle(!toggle);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      email: EnteredMail.current.value,
      password: EnteredPassword.current.value,
      returnSecureToken: true,
    };
    if (toggle == false && obj.password === EnteredConfirm.current.value) {
      console.log(obj);
      dispatch(MiddlewarAuth({ obj, text: "signup" }));
    }
    if (toggle == false && obj.password !== EnteredConfirm.current.value) {
      setinpuError(true);
    }
    if (toggle !== false) {
      dispatch(MiddlewarAuth({ obj, text: "login" }));
    }
  };
  return (
    <div className={formcls.main}>
      <div className={formcls.container}>
        <div className={formcls.logimage}>
          <img src={imagelogin} alt="emailpic" className={formcls.images}></img>
        </div>

        <div className={formcls.forms}>
          <form onSubmit={submitHandler}>
            <h1>welcome</h1>
            <label>Email</label>
            <input type="text" ref={EnteredMail}></input>
            <label>Passowrd</label>
            <input type="text" ref={EnteredPassword}></input>
            {!toggle && <label>Confirm Passowrd</label>}
            {!toggle && (
              <input
                type="text"
                ref={EnteredConfirm}
                style={bordercolor}
              ></input>
            )}
            <button> {!toggle ? "singup" : "Login"}</button>
            <h2 onClick={togglehandler}>{!toggle ? "Login" : "Singup"}</h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
