import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import UserAdmin from '../../dashboardCardAdmin/index.jsx';
import AdminService from '../../dashboardServiceAdmin/index.jsx';
import "./maindash.css"



const MainDash = () => {

    const users = useSelector((state)=>state.users);
    const services = useSelector((state)=>state.services);
    const dispatch = useDispatch();

    const handleEnable = id =>{

    }

    const handleDisable = id =>{
    }

    return(
        <div className="container-fluid shadow p-3 mb-4 mt-4 bg-body rounded">
            <h1 className="shhhh pt-4 fs-3 mb-2 pb-2 text-md-start border-bottom border-dark"><i className="bi bi-stopwatch-fill fs-5"></i> This are all the services!</h1>
            {/* {users?.map((e,i)=>{
                        return (
                            <div key={i}>
                                <UserAdmin
                                name={e.name}
                                email={e.email}/>
                            </div>
                        )
                    })} */}
            {services?.map((serv,i)=>{
                        return(
                            <div className='table-services' key={i}>
                                <AdminService
                                name={serv.name}
                                description={serv.description}
                                image={serv.image.secure_url}
                                price={serv.price}/>
                                
                                <div className='text-center'>
                                    <button className="btn btn-primary me-2" onClick={() => handleEnable(serv._id)}>Enable</button>
                                    <button className="btn btn-primary" onClick={() => handleDisable(serv._id)}>Disable</button>
                                </div>
                            </div>
                        )
                    })}
            
        </div>
    )
}

export default MainDash