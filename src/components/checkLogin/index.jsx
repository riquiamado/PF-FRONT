import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import CreateServices from "../createServices"
import { Link } from 'react-router-dom';
import  a from "./checkLogin.module.css"

export const checkLogin = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className={a.login}>
      {isAuthenticated? <CreateServices /> : <div> <h1>Please Login</h1> <Link to={"/"} > <button>volver</button> </Link></div>}
    </div>
  )
}
