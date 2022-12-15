// Importa las dependencias necesarias
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';



const Cart = () => {
  return (
    <>
    <Alert variant='info'>
          Your Shopping cart
        </Alert>


      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>
        Contracted Service
        </Card.Text>
      </Card.Body>
    </Card>

    <Button variant="primary">Purchase Service</Button>
        <Button variant="primary">Continue Buying</Button>

 </>
  ); 

}
export default Cart;