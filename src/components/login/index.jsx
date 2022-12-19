import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/actions";
import LoginLocalBtn from "../loginLocalBtn";
import LogoutLocalBtn from "../logoutLocalBtn";

const LoginLocal = () => {

    const [user, setUser] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('userSession');
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUser(user);
            dispatch(login(user));
        }
    },[dispatch])  

  return (
    <div>{user ? <LogoutLocalBtn /> : <LoginLocalBtn />}</div>
  )
}

export default LoginLocal;