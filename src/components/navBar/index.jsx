import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchBar";
import LoginButton from "../LoginButton";
import CreateUser from "../createUser";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/actions";
import LoginLocal from "../login";
import { ProfileLocal } from "../profileLocal";
import "./navBar.css";

function NavBar() {
  const userSessionLocal = useSelector((state) => state.userSession);
  const [savedData, setSavedData] = useState(false);

  const { isAuthenticated } = useAuth0();

  return (
    <nav class="navbar">
      <div class="container-fluid" className="logo">
        <Link to="/">
          <img className="img" src="/images/logo.png" />
        </Link>
        <Link
          to="/"
          className="csdcs"
          style={{ textDecoration: "none", color: "#fafafa" }}
        >
          <h2>Freelance Workers</h2>
        </Link>
      </div>
      <SearchBar theText={"Search"} />
      <div className="btns">
        <Link to={"/checkLogin"}>
          <button className="Btn">Create Services</button>
        </Link>
        <Link to={"/dashboard"}>
          {isAuthenticated ? (
            <button className="Btn">Dash board</button>
          ) : (
            <span></span>
          )}
        </Link>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
      {Object.values(userSessionLocal).length === 0 ? (
        <LoginLocal />
      ) : (
        <Link to="/profile">
          <button>{userSessionLocal.name}</button>
        </Link>
      )}
    </nav>
  );
}

export default NavBar;
