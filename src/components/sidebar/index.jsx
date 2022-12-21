import React, { useState } from 'react';
import { SidebarData } from './index.js';
import { useDispatch, useSelector } from 'react-redux';
import { UilSignout } from '@iconscout/react-unicons'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import LoginButton from '../LoginButton/index.jsx';
import './sidebar.css';

const SideBar = () => {
    const userSessionLocal = useSelector((state) => state.userSession);
    //const { user } = useAuth0()
    const { name, picture, email} = userSessionLocal;
    const [selected, setSelected] =useState(0)

    return(
        <div className='sidebar'>
            <div className='logo'>
                <img src="https://img.icons8.com/ios-filled/512/user-male-circle.png" alt="profile-pic"/>
                {/* TODO: Should pass user name */}
                <span>{ name }</span> 
            </div>
            <div className='menu'>
                {SidebarData.map((item, index) => {
                    return(
                        <div className={selected === index?'menuItem active': 'menuItem'} 
                        key={index}
                        onClick={() => setSelected(index)}>
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
                
                <div className='menuItem'>
                    <UilSignout/>
                </div>
            </div>
        </div>

    )
}

export default SideBar;