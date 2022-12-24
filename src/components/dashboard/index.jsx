import React, { useState, useEffect } from 'react';
import { getComponents, clean } from '../../redux/actions/actions.jsx';
import SideBar from '../sidebar/index.jsx';
import MainDash from '../maindash/index.jsx';
import Orders from '../orders/index'
import UserSettings from '../userSettings/index.jsx';


import "./dashboard.css"
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {

    const componentName = useSelector(state => state.components);
    const [component, setComponent] = useState(<MainDash/>)

    let isComponent = JSON.stringify(componentName)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComponents());
        return dispatch(clean());
    }, [dispatch])

    if(isComponent === "Orders") setComponent(<Orders/>);
    if(isComponent === "Settings") setComponent(<UserSettings/>);
    console.log(isComponent);

    // if(!isComponent) {
    //     return(
    //         <div className='dashboard'>
    //             <div className='glass'>
    //                 <SideBar/>
    //                 <MainDash/>
    //             </div>
    //         </div>
    //     )
    // } else if(isComponent === 'Orders') {
    //     return(
    //         <div className='dashboard'>
    //             <div className='glass'>
    //                 <SideBar/>
    //                 <Orders/>
    //             </div>
    //         </div>
    //     )
    // } else if(isComponent === 'Settings') {
    //     return(
    //         <div className='dashboard'>
    //             <div className='glass'>
    //                 <SideBar/>
    //                 <UserSettings/>
    //             </div>
    //         </div>
    //     )
    // } 



    return(
        <div className='dashboard'>
            <div className='glass'>
                <SideBar />
                {component}
                <div></div>
                <div></div>
    
            </div>
        </div>
    )
} 

export default Dashboard;