import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchBar";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import CreateUser from "../createUser";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { login } from "../../redux/actions/actions";
import LoginLocal from "../login";
import { ProfileLocal } from "../profileLocal";

function NavBar() {
  const userSessionLocal = useSelector((state) => state.userSession);
  const[savedData, setSavedData] = useState(false);
  //console.log(userSessionLocal)
  // useEffect(() => {
    
  // },[])

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
      {Object.values(userSessionLocal).length === 0 ? <LoginLocal/> :
            <Link to="/profile">
                <button>{userSessionLocal.name}</button>
            </Link>
            }
    </nav>
  );
}

export default NavBar;
