import React, { useState, useEffect } from 'react';
import { getComponents, clean } from '../../redux/actions/actions.jsx';
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../sidebar/index.jsx';
import MainDash from '../maindash/index.jsx';
import Orders from '../orders/index'
import Customers from '../customers/index.jsx';
import ServicesDash from '../servicesDash/index.jsx';
import UserSettings from '../userSettings/index.jsx';
import Analytics from '../analytics/index.jsx';

import "./dashboard.css"


const Dashboard = () => {

    const componentName = useSelector(state => state.components);
    const [component, setcomponent] = useState({
        main: true,
        orders: false,
        customers: false,
        services: false,
        analytics: false,
        settings: false,
    });
   
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getComponents());
        
        if(componentName === "Dashboard") setcomponent({
            main: true,
            orders: false,
            customers: false,
            services: false,
            analytics: false,
            settings: false,
        })

        if(componentName === "Orders") setcomponent({
            main: false,
            orders: true,
            customers: false,
            services: false,
            analytics: false,
            settings: false,
        })

        if(componentName === "Customers") setcomponent({
            main: false,
            orders: false,
            customers: true,
            services: false,
            analytics: false,
            settings: false,
        })

        if(componentName === "Services") setcomponent({
            main: false,
            orders: false,
            customers: false,
            services: true,
            analytics: false,
            settings: false,
        })

        if(componentName === "Analytics") setcomponent({
            main: false,
            orders: false,
            customers: false,
            services: false,
            analytics: true,
            settings: false,
        })

        if(componentName === "Settings") setcomponent({
            main: false,
            orders: false,
            customers: false,
            services: false,
            analytics: false,
            settings: true,
        })
        // setcomponent(current => {
        //     return {
        //         ...current,
        //         main: componentName === "Dashboard" || componentName === undefined ? true : false,
        //         orders: componentName === "Orders" ? true : false,
        //         customers: componentName === "Customers" ? true : false,
        //         services: componentName === "Services" ? true : false,
        //          analytics: componentName === "Analytics" ? true : false,
        //         settings: componentName === "Settings" ? true : false,   
        //     }
        // })
        dispatch(clean)
        //return dispatch(clean());
    }, [componentName])

    return(
        <div className='dashboard'>
            <div className='glass'>
                <div><SideBar/></div>
                <div className={component.main ? "visible" : "hidden"}><MainDash /></div>
                <div className={component.orders ? "visible" : "hidden"}><Orders /></div>
                {/* <div className={component.customers ? "visible" : "hidden"}><Customers /></div> */}
                <div className={component.services ? "visible" : "hidden"}><ServicesDash /></div>
                {/* <div className={component.analytics ? "visible" : "hidden"}><Analytics /></div> */}
                <div className={component.settings ? "visible" : "hidden"}><UserSettings /></div>
            </div>
        </div>
    )
} 

export default Dashboard;