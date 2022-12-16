// Importa las dependencias necesarias
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cart = () => {
  return (
  
    <>
      
      <h3>Service</h3>
      <h3>Price</h3>

    <Button variant="primary">Continue</Button>
        <Button variant="primary">Delet</Button>

 </>
  ); 

}
export default Cart;