// Importa las dependencias necesarias
import { React, useState } from 'react';
import { useEffect } from 'react'
//import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteToCart } from '../../redux/actions/actions'

const Cart = () => {
  const dispatch = useDispatch()
  const CartContent = useSelector((state) => state.cart)

  function removeCart(arg) {
   dispatch(deleteToCart(arg));
  }
let Totales =0;
  return (
  <>
 
 {CartContent.map((idx) => (
 <div>
 <p>Service:    {idx.name}   <button type="button" class="btn btn-warning" key={idx._id} onClick={(e) => removeCart(idx._id)}>x</button></p>
 <img src={idx.image.secure_url} style={{width: "100px", height: "60px"}} />
 
 <p>Price: {idx.price} </p>
 {Totales += idx.price}
 <hr />
 </div>
 ))
 }
<hr />
<p>Total: {Totales} </p>

      
      <button type="button" class="btn btn-warning">Contract</button>
</>
  ); 

}
export default Cart;