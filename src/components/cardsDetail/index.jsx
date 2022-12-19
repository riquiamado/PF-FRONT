import { React, useState } from 'react';
//import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
import { clean, getServicesDetails, deleteUser } from '../../redux/actions/actions'
import { addToCart } from '../../redux/actions/actions';
import { useAuth0 } from "@auth0/auth0-react";



import Cart from "../carrito";
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Nav, Navbar } from 'react-bootstrap';
import {  useLocation } from "react-router-dom";




const CardDetails = () => {
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)

    
    const history = useHistory()
    const { _id } = useParams()



const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleAddToCart = () => {
       // const data = { id: _id, email: user.email }  //nota: sera mejor bajar los datos en el cart ??
        dispatch(addToCart(details))   //enviamos el servicio seleccinado a cart
      
        //history.push("/cart")
        // console.log(data)
        // history.push("/cart")

    }

    useEffect(() => {
        dispatch(getServicesDetails(_id))
        return dispatch(clean())
    }, [dispatch, _id])

    return details && details._id ? (
        <div>
            <Link to={"/"}>
                <button>Return</button>
            </Link>

            <div>
                <div>
                    <img src={details.image.secure_url} alt={details.image.secure_url} />

                    <h1>{details.name}</h1>
                    <label htmlFor="">Description</label>
                    <h3>{details.description}</h3>
                    <label htmlFor="">Reviews</label>
                    <h3>{details.reviews}</h3>
                    <label htmlFor="">Rating</label>
                    <h3>{details.rating}</h3>
                </div>
                <div>

                    <h1>User Provider</h1>

                    <div >
                        <label htmlFor="">Name</label>
                        <h3>{details.user.name}</h3>
                        <label htmlFor="">Mail</label>
                        <h3>{details.user.email}</h3>

                    </div>

                    <div className="delete-container">

                    <button className="Btn" onClick={() => handleAddToCart()} >Add</button>
             <button className="Btn" onClick={handleShow}>Cart</button>
            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>My ShoppingCart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Cart />
            </Offcanvas.Body>
            </Offcanvas>

        

           {isAuthenticated && <button onClick={() => handleAddToCart()}>cart</button>}


                        {/* <div className="delete-container">
                        <button className='delete-btn' 
                                onClick={() => handleDelete()} >Delete User</button>
                    </div> */}
                    </div>
                </div>

            </div>
        </div>
            ) : (
            <h1>Loading...</h1>
            );
};

            export default CardDetails;