import React from "react";
import SearchBar from "../searchBar";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

function NavBar() {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const classIsActive = isActive ? "is-active" : "";

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/home" className="navbar-item">
            <img src="/images/logo.png" width="auto" height="28" />
          </Link>

          <a
            role="button"
            className={"navbar-burger " + classIsActive}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={(e) => {
              setIsActive(!isActive);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={"navbar-menu " + classIsActive}>
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to={"/services"}>
                <button className="button">Create services</button>
              </Link>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/users" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
