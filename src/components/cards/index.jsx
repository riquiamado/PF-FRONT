import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from "react";
import { Link } from "react-router-dom";
import { getServicesDetails, clean, resetAllServices } from "../../redux/actions/actions";
import "./cards.css";

function Cards({ _id, name, description, image, price }) {
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServicesDetails(_id))
    return dispatch(clean())
}, [dispatch, _id])

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
            <p class="card-text"><small class="text">Price: ${price}</small></p>
            {<button class="btn btn-lg btn-primary">View more</button>}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Cards;
