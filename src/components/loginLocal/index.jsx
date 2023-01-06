import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

const LoginLocal = () => {

    const [user, setUser] = useState(null)
    const dispatch = useDispatch();
    const userSessionLocal = useSelector((state) => state.userSession);

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('userSession');
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUser(user);
            dispatch(login(user));
        }
    },[dispatch])  

  return (
    <div>{Object.values(userSessionLocal).length === 0 ? (
      <Link to={"/login"}>
            <button className="Btn">Login</button>
        </Link>
    ) : (
      <Link to="/profile">
        <button>{userSessionLocal.name}</button>
      </Link>
    )}</div>
  )
}

export default LoginLocal;