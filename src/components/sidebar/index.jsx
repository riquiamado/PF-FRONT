import React, { useState, useEffect } from 'react';
import { SidebarData } from './index.js';
import { useDispatch, useSelector } from 'react-redux';
import { UilSignout } from '@iconscout/react-unicons'

// import LoginButton from '../LoginButton/index.jsx';
import './sidebar.css';
import { getComponents } from '../../redux/actions/actions.jsx';

const SideBar = () => {

    const userSessionLocal = useSelector((state) => state.userSession);
    //const { user } = useAuth0()
    const { name, picture, email} = userSessionLocal;
    const [selected, setSelected] = useState(0);

    //Auth0
    // const { user, logout } = useAuth0()
    // const { name, picture, email} = user;

    //element selected
    // const [selected, setSelected] = useState(0);

  
    const dispatch = useDispatch()
    // useEffect(() => {
    //     // dispatch(getComponents(SidebarData.map(el => el.heading)));
    //     dispatch(getComponents())
    // }, [dispatch])

    const handleComponent = name => {
        dispatch(getComponents(name))
    }

    return(
        <div className='sidebar'>
            <div className='logo'>
                <img src="https://img.icons8.com/ios-filled/512/user-male-circle.png" alt="profile-pic"/>
                <span>{ name }</span> 
            </div>
            <div className='menu'>
                {SidebarData.map((item, index) => {
                    return(
                        <div className={selected === index?'menuItem active': 'menuItem'} 
                        key={index}
                        onClick={() => {
                            //Switches classname and render
                            setSelected(index);
                            handleComponent(item.heading);
                            }}>
                                
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
                
                <div className='menuItem' onClick={() => logout({ returnTo: window.location.origin })}>
                    <UilSignout/>
                </div>
            </div>
        </div>

    )
}

export default SideBar;