import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { logout } from '../../redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ProfileLocal = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userMail = useSelector((state) => state.userSession);
    const [user, setUser] = useState({})

    const getData = () => {
        const userJSON = window.localStorage.getItem('userSession');
        const userParsed = JSON.parse(userJSON);
        return userParsed
    }

    useEffect(() => {
        setUser(userMail);
    }, [])

    const handleLogout = () => {
        window.localStorage.removeItem('userSession');
        dispatch(logout());
        alert("Logged out succesfully, returning to main page.");
        history.push("/");
    }

    return (
        <div>
            <label>User: {user ? user.name : ''}</label>            
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}