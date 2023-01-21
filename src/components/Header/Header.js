import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthsliceAction } from "../../storecontainer/Authslice";

import headercls from "./Header.module.css";

const Header = () => {
  const [toggle, settoggle] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const menuhandler = () => {
    settoggle(!toggle);
  };
  const logoutHandler = () => {
    localStorage.clear();
    history.push("/login");

    dispatch(AuthsliceAction.logout());
  };
  return (
    <div className={headercls.main}>
      <div className={headercls.all}>
        <h1>
          {" "}
          <span>Sharp</span>ener
        </h1>
        <ul style={(toggle && { right: "100%" }) || {}}>
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
          <Link to="/update">
            <li>update</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/welcome">
            <li>About</li>
          </Link>
        </ul>
        <div>
          <button onClick={logoutHandler}>Logout</button>
        </div>
        <div className={headercls.menu}>
          <button onClick={menuhandler}>Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
