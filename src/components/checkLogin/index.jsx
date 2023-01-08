import React from 'react'
import CreateServices from "../createServices"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import  a from "./checkLogin.module.css"

export const checkLogin = () => {
  const session = useSelector((state) => state.session);
  // console.log(session)
  return (
    <div className={a.login}>
      {session ? <div> <h1>Please Login</h1> <Link to={"/"} > <button>volver</button> </Link></div> : <CreateServices />}
    </div>
  )
}
