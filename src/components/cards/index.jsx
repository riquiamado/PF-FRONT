import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from '../../redux/actions/actions';
import { getServicesDetails, clean, resetAllServices } from "../../redux/actions/actions";

import "./cards.css";


function Cards({ _id, name, description, image }) {
const dispatch = useDispatch()
const details = useSelector((state) => state.details)

  useEffect(() => {
    dispatch(getServicesDetails(_id))
    return dispatch(clean())
}, [dispatch, _id])



  
 
  const handleAddToCart = () => {
    console.log(details)
    dispatch(addToCart(details))   //enviamos el servicio seleccinado a cart
    }

 

  return (
    <Link
      to={`services/${_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
    <div className="vvnsdknvdk">
      <div class="card-group shadow mb-2 mt-2 bg-body rounded">
        <div class="card">
          <img src={image} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title border-bottom border-muted pb-2">{name.charAt(0).toUpperCase() + name.slice(1)}</h5>
            <p class="card-text">{description.charAt(0).toUpperCase() + description.slice(1)}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            
            {<button class="btn btn-lg btn-primary" onClick={() => handleAddToCart()}>Add to Cart</button>}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Cards;
