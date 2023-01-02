// Importa las dependencias necesarias
import { React, useState } from 'react';
import { useEffect } from 'react'
//import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteToCart } from '../../redux/actions/actions'

import axios from 'axios';

const Cart = () => {
  const dispatch = useDispatch()
  const CartContent = useSelector((state) => state.cart)

  function removeCart(arg) {
    dispatch(deleteToCart(arg));
  }

  const handlePayment = async (value) => {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3001/create-order',
      data: {
        value,
        description: "servicio"
      }
    });
    console.log(response.data.links[1]);
    window.open(response.data.links[1].href, "_blank", "toolbar=yes,top=500,left=500,width=850,height=700")
    //window.location.href = response.data.links[1].href
  }

  let Totales = 0;
  return (
    <>

      {CartContent ?.map((idx) => (
        <div>
          <p>Service:    {idx.name}   <button type="button" class="btn btn-warning" key={idx._id} onClick={(e) => removeCart(idx._id)}>x</button></p>
          <img src={idx.image.secure_url} style={{ width: "100px", height: "60px" }} />

          <p>Price: {idx.price} </p>
          <element hidden> {Totales += idx.price} </element>
          <hr />
        </div>
      ))
      }
      <hr />
      <p>Total: {Totales} </p>
    
      <button type="button" class="btn btn-warning" onClick={() => handlePayment(Totales)}>Contract</button>
    </>
  );

}
export default Cart;