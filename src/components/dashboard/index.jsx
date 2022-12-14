import React from 'react';
import SideBar from '../sidebar/index.jsx';
import UserSettings from '../userSettings/index.jsx';

import "./dashboard.css"

const Dashboard = () => {
    return(
        <div className='dashboard'>
            <div className='glass'>
                <SideBar />
                <UserSettings />
                <div></div>
                <div></div>
    
            </div>
        </div>
    )
} 

export default Dashboard;