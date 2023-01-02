import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchBar";
import LoginButton from "../LoginButton";
import CreateUser from "../createUser";
import LogoutButton from "../LogoutButton";
//import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/actions";
import LoginLocal from "../login";
import { ProfileLocal } from "../profileLocal";
import "./navBar.css";

function NavBar() {
  const [user , setUser] = useState({});
  const dispatch = useDispatch();
  const userSessionLocal = useSelector((state) => state.userSession);

  console.log(user)
  console.log(userSessionLocal)
  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('userSession');
    if (loggedUserJSON) {
       const parsed = JSON.parse(loggedUserJSON)
       let user = {
          email: parsed
        }
       if(parsed.google){
        user = {
          email: parsed.email
        }}
        setUser(user);
        dispatch(login(user));
    }
  },[dispatch])

  return (
    <nav class="navbar shadow-sm">
      <div class="container-fluid" className="logo">
        <Link to="/">
          <img className="img" src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1672693337/pruebas/logo_x83pht.png" />
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#fafafa"}}>
          <h4 id="csdcs">Freelance Workers</h4>
        </Link>
      </div>
      <SearchBar theText={"Search"} />
      <div className="btns">
        <Link to={"/checkLogin"}>
          <button className="Btn">Create Services</button>
        </Link>
        <Link to={"/dashboard"}>
          {!(Object.values(userSessionLocal).length === 0) ? (
            <button className="Btn">Dash board</button>
          ) : (
            <span></span>
          )}
        </Link>
      </div>
      {(Object.values(userSessionLocal).length === 0) ? (
        <LoginLocal />
      ) : (
        <Link to="/profile">
          <button>{userSessionLocal.user ? userSessionLocal.user.name : userSessionLocal.name}</button>
        </Link>
      )}
    </nav>
  );
}

export default NavBar;
