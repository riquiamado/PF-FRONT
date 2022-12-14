import React from 'react';
import SideBar from '../sidebar';

import "./dashboard.css"

const Dashboard = () => {
    return(
        <div className='dashboard'>
            <div className='glass'>
                <SideBar />
                <div></div>
                <div></div>
                <div></div>
    
            </div>
        </div>
    )
} 

export default Dashboard;