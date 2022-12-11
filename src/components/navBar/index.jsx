import React from "react";
import SearchBar from "../searchBar";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="img" src="/images/logo.png" />
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#472183" }}>
          <h2>Freelance Workers</h2>
        </Link>
      </div>
      <SearchBar theText={"Search"} />
      <div className="btns">
        <Link to={"/checkLogin"}>
          <button className="Btn">Create services</button>
        </Link>
     
      {isAuthenticated ? <LogoutButton /> : <LoginButton />} 
      </div>
    </nav>
  );
}

export default NavBar;
