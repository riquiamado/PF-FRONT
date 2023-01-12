// Importa las dependencias necesarias
import { React, useState } from "react";
import { useEffect } from "react";
//import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { cleanCart, deleteToCart, getServicesDetails } from "../../redux/actions/actions";

import axios from "axios";

const Cart = () => {
  const cartLS = JSON.parse(window.localStorage.getItem("cart"));
  const mail = JSON.parse(window.localStorage.getItem("session"));
  const dispatch = useDispatch();
  const CartContent = useSelector((state) => state.cart);

  function removeCart(arg) {
    dispatch(deleteToCart(arg));
    let cartRemoval = JSON.parse(window.localStorage.getItem("cart"));
    let cartfiltered = cartRemoval.filter((e) => !e._id.includes(arg));
    window.localStorage.setItem("cart", JSON.stringify(cartfiltered));
    console.log(cartfiltered);
  }

  const handlePayment = async (value, userMail, services) => {
    const response = await axios({
      method: "post",
      url: "https://pf-back-production-b443.up.railway.app/create-order",
      data: {
        value,
        description: JSON.stringify(services.concat(userMail)),
      },
    });
    //window.open(response.data.links[1].href, "_blank", "toolbar=yes,top=500,left=500,width=850,height=700")
    window.location.href = response.data.links[1].href;
    window.localStorage.setItem("cart", JSON.stringify([]));
    dispatch(cleanCart())
  };

  let Totales = 0;
  return (
    <>
      {cartLS?.map((idx) => (
        <div>
          <p>
            Service: {idx.name}{" "}
            <button
              type="button"
              class="btn btn-warning"
              key={idx._id}
              onClick={(e) => removeCart(idx._id)}
            >
              x
            </button>
          </p>
          <img
            src={idx.image.secure_url}
            style={{ width: "100px", height: "60px" }}
          />

          <p>Price: {idx.price} </p>
          <element hidden> {(Totales += idx.price)} </element>
          <hr />
        </div>
      ))}
      <hr />
      <p>Total: {Totales} </p>

      <button
        type="button"
        class="btn btn-warning"
        onClick={() =>
          handlePayment(
            Totales,
            mail,
            CartContent?.map((el) => el._id)
          )
        }
      >
        Pay
      </button>
    </>
  );
};
export default Cart;
