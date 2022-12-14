import React from 'react';
import './userSettings.css';

const UserSettings = () => {
    return(
        <div className='userSettings'>
            <h1>Settings</h1>
            <h3>Update User Name</h3>
            <div>
                <label htmlFor="">New User Name:</label>
                <input
                type="text"
                value=""
                name="name"
                />
            </div>
            <h3>Update Email</h3>
            <div>
                <label htmlFor="">New Email:</label>
                <input
                type="text"
                value=""
                name="email"
                />
            </div>
            <h3>Update Password</h3>
            <div>
                <label htmlFor="">New Password:</label>
                <input
                type="text"
                value=""
                name="password"
                />
            </div>
        </div>
    )
}

export default UserSettings;