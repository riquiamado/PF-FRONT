import React from "react";
import SearchBar from "../searchBar";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="navbar">
          <Link to="/home" className="navbar-item">
            <img src="/images/logo.png" width="auto" height="" />
          </Link>
            <SearchBar theText={"Search"} />  
              <Link to={"/services"}>
                <button className="button">Create services</button>
              </Link>          
        {isAuthenticated? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

export default NavBar;
