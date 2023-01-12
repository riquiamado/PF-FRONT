import React, { useState, useEffect } from 'react';
import { getComponents, clean, getUsers, getServices } from '../../redux/actions/actions.jsx';
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../sidebar/index.jsx';
import MainDash from '../maindash/index.jsx';
import Orders from '../orders/index'
import Customers from '../customers/index.jsx';
import ServicesDash from '../servicesDash/index.jsx';
import UserSettings from '../userSettings/index.jsx';
import History from '../history/index.jsx';

import "./dashboardAdmin.css"
import UserAdmin from '../../dashboardCardAdmin/index.jsx';
import AdminService from '../../dashboardServiceAdmin/index.jsx';


const DashboardAdmin = () => {

    const componentName = useSelector(state => state.components);
    const [component, setcomponent] = useState({
        main: true,
        orders: false,
        customers: false,
        services: false,
        history: false,
        settings: false,
    }) 
    // const [component, setcomponent] = useState({
    //     main: true,
    //     orders: false,
    //     customers: false,
    //     services: false,
    //     history: false,
    //     settings: false,
    // });
   
    const dispatch = useDispatch()
    
     const handleDelete = () =>{

     }
    useEffect(() => {
        dispatch(getComponents());
        dispatch(getUsers())
        dispatch(getServices())
        
        if(componentName === "Dashboard") setcomponent({
            main: true,
            orders: false,
            customers: false,
            services: false,
            history: false,
            settings: false,
        })

        if(componentName === "Rate your services") setcomponent({
            main: false,
            orders: true,
            customers: false,
            services: false,
            history: false,
            settings: false,
        })

        if(componentName === "Shopping history") setcomponent({
            main: false,
            orders: false,
            customers: false,
            services: false,
            history: true,
            settings: false,
        })

        if(componentName === "Customers") setcomponent({
            main: false,
            orders: false,
            customers: true,
            services: false,
            history: false,
            settings: false,
        })

        if(componentName === "Services") setcomponent({
            main: false,
            orders: false,
            customers: false,
            services: true,
            history: false,
            settings: false,
        })

        // if(componentName === "Analytics") setcomponent({
        //     main: false,
        //     orders: false,
        //     customers: false,
        //     services: false,
        //     history: true,
        //     settings: false,
        // })

        if(componentName === "Settings") setcomponent({
            main: false,
            orders: false,
            customers: false,
            services: false,
            history: false,
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
                <div className={component.orders ? "visible" : "hidden"}><Orders/></div>
                <div className={component.customers ? "visible" : "hidden"}><UserAdmin /></div>
                <div className={component.services ? "visible" : "hidden"}><ServicesDash/></div>
                <div className={component.history ? "visible" : "hidden"}><History /></div>
                <div className={component.settings ? "visible" : "hidden"}><UserSettings /></div>
            </div>
        </div>
    )
} 

export default DashboardAdmin;