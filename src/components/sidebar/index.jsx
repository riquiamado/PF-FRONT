import React, { useState, useEffect } from 'react';
import { SidebarData } from './index.js';
import { AdminData } from './admin.js';
import { useDispatch, useSelector } from 'react-redux';

import './sidebar.css';
import { getComponents } from '../../redux/actions/actions.jsx';

const SideBar = () => {


    const userSessionLocal = useSelector((state) => state.session);
    const name = JSON.parse(window.localStorage.getItem("name"));
    const admin = JSON.parse(window.localStorage.getItem("admin"));
    const [selected, setSelected] = useState(0);
  
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
                {admin === true ? AdminData.map((item, index) => {
                        return(
                            <div 
                            className={selected === index?'menuItem active': 'menuItem'} 
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
                    })
                : SidebarData.map((item, index) => {
                    return(
                        <div 
                        className={selected === index?'menuItem active': 'menuItem'} 
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
                })
            }
                <div></div>
            </div>
        </div>
    )
}

export default SideBar;