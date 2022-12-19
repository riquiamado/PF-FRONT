// Importa las dependencias necesarias
import { React, useState } from 'react';
import { useEffect } from 'react'
//import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cart = () => {
  const dispatch = useDispatch()
  const CartContent = useSelector((state) => state.cart)

// console.log(CartContent); // para saber si recibe state.cart


  return (
  
    <>
      



      <h3>Service</h3>
      <h6>{CartContent.name}</h6>
      <h3>Price</h3>
      <h3>Total $</h3>
      

{/* CartContent.map((idx) => (<h3>{idx.name}</h3>))*/}
{
Object.entries(CartContent).forEach(([key, value]) => {

  console.log("result:" + value)
	})
}
      
      
      
      

      <button type="button" class="btn btn-warning">x</button>
      <button type="button" class="btn btn-warning">Contract</button>


 </>
  ); 

}
export default Cart;