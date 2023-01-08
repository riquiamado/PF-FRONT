import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/actions';

const Payment = () => {
    const loggedUser = window.localStorage.getItem("session")
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(login(loggedUser))
    }, [])
    
    return(
        <div>
            <h1>Thanks for your purchase!</h1>
            <Link to={"/ratingForm"}><button>service qualification</button></Link>
        </div>
    )
}

export default Payment;