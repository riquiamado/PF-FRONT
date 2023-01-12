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
        <div>
            <h1>This are all the services</h1>
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
                            <div className='table-services'>
                                <AdminService
                                name={serv.name}
                                description={serv.description}
                                image={serv.image.secure_url}
                                price={serv.price}/>
                                <button onClick={() => handleEnable(serv._id)}>Enable</button>
                                <button onClick={() => handleDisable(serv._id)}>Disable</button>
                            </div>
                        )
                    })}
            
        </div>
    )
}

export default MainDash