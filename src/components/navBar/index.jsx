import React from "react";
import SearchBar from "../searchBar";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./navBar.css";

function NavBar() {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const classIsActive = isActive ? "is-active" : "";

  return (
    <div className="navbar">
          <Link to="/home" className="navbar-item">
            <img src="/images/logo.png" width="auto" height="28" />
          </Link>
          <SearchBar theText={"Search"} />


              {/* <div className="buttons"> */}
                <Link to={"/services"}>
                  <button className="button">Create services</button>
                </Link>
                <Link to="/users" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <a className="button is-light">Log in</a>
              {/* </div> */}

    </div>
  );
}

export default NavBar;
