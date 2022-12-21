import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getUserById, logout } from '../../redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ProfileLocal = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState({});
    const userById = useSelector((state) => state.userSession);

    console.log(userById)

    const handleLogout = () => {
        window.localStorage.removeItem('userSession');
        dispatch(logout());
        alert("Logged out succesfully, returning to main page.");
        history.push("/");
    }

    useEffect(() => {
        setUser(userById);
    }, [])

    const loggedUserJSON = window.localStorage.getItem('userSession');

    return (
        <div>
            {<div>
                    <label>User: {user.name}</label>
                    <br></br>
                    <label>E-Mail: {(user.email) ? user.email : loggedUserJSON}</label>
                    {/* <br></br>
                    <label>City: {user.city}</label>
                    <br></br>
                    <label>Address: {user.address}</label>
                    <br></br>
                    <label>Phone: {user.phone}</label> */}
                </div>
            }            
            <Link to={'/updateProfile'}><button>Update Profile</button></Link>
            <br></br>
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}