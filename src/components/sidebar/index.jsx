import React from 'react';
import './sidebar.css'

const SideBar = () => {
    return(
        <div className='sidebar'>
            <div className='logo'>
                <img src="https://img.icons8.com/ios-filled/512/user-male-circle.png" alt="profile-pic"/>
                {/* TODO: Should pass user name */}
                <span>User</span> 
            </div>
            <div className='menu'>
                <div className='menu-item'>
                    <div>
                        Icon
                    </div>
                    <span>Dashboard-Item</span>
                </div>
            </div>
        </div>

    )
}

export default SideBar;