import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './userSettings.css';

const UserSettings = () => {
    
    const userLogin = useSelector(state => state.users)
    console.log(userLogin)
    

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = event => {
        setInput({
            ...input,
            [event.target]: event.target.value
        })
    };

    return(
        <div className='userSettings'>
            <h1>Settings</h1>
            <h3>Update User Name</h3>
            <div>
                <label htmlFor="">New User Name:</label>
                <input
                type="text"
                value={ input.name }
                name="name"
                onChange={e => handleChange(e)}
                />
            </div>
            <h3>Update Email</h3>
            <div>
                <label htmlFor="">New Email:</label>
                <input
                type="text"
                value={ input.email }
                name="email"
                onChange={e => handleChange(e)}
                />
            </div>
            <h3>Update Password</h3>
            <div>
                <label htmlFor="">New Password:</label>
                <input
                type="text"
                value={ input.password }
                name="password"
                onChange={e => handleChange(e)}
                />
            </div>
        </div>
    )
}

export default UserSettings;