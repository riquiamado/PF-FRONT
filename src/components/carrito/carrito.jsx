import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



const Cart = () => {
  const dispatch = useDispatch()
  const carts = useSelector((state) => state.cart)

  return (
    <div>
      <h1>My Shopping Cart</h1>
      <select name="" id="">
      {carts.map((product) => (
             <li key={product.id}>{product.name}</li>
           ))}
      </select>
    </div>
  )
  

}

export default Cart;