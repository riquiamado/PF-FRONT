import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserByEmail, login } from '../../redux/actions/actions';
import "./serviceDash.css"

const ServicesDash = () => {

    const users = useSelector(state => state.users)
    const email = JSON.parse(window.localStorage.getItem("session"));
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getUserByEmail(email));
        dispatch(login(email))
    },[dispatch])

    return(
        <div>
            <h1 className='title'>These are your services!</h1>
            {users[0]?.services ? users[0]?.services.map((item, index) => {
                return(
                    <div className='service-cards' key={index}>
                        <p>#{index}</p>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <Link to={`servicesEdit/${item._id}`}>
                            <p className='edit-btn'>Edit</p>
                        </Link>
                        <div>
                            <p className='delete-btn'>Delete</p>
                        </div>
                    </div>
                )
            }) : <div>
                    <h1>No cuentas con ningun servicio.</h1>
                </div>
            }
        </div>  
    )
}

export default ServicesDash;