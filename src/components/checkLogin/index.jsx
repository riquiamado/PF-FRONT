import React from 'react'
//import { useAuth0 } from "@auth0/auth0-react";
import CreateServices from "../createServices"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import  a from "./checkLogin.module.css"

export const checkLogin = () => {
  //const { isAuthenticated } = useAuth0();
  const userSessionLocal = useSelector((state) => state.userSession);
  return (
    <div className={a.login}>
      {Object.values(userSessionLocal).length === 0 ? <div> <h1>Please Login</h1> <Link to={"/"} > <button>volver</button> </Link></div> : <CreateServices />}
    </div>
  )
}
