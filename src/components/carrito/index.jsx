// Importa las dependencias necesarias
import { React, useState } from "react";
import { useEffect } from "react";
//import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
      url: "http://localhost:3001/create-order",
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
        <div className="scascca container-fluid shadow p-3 mb-4 mt-4 bg-body rounded">
          <p className="fs-5 pb-1 fw border-bottom border-2 border-success">
            Service: {idx.name}{" "}
          </p>
          <img
            className="rounded"
            src={idx.image.secure_url}
            style={{ width: "120px", height: "80px" }}
          />
          <p className="mt-2 fs-6">Price: <i className="bi bi-currency-dollar fs-4"></i><b className="fs-4">{idx.price}</b></p>
          <element hidden> {(Totales += idx.price)} </element>
          <button
              type="button"
              className="btn btn-danger text-capitalize"
              key={idx._id}
              onClick={(e) => removeCart(idx._id)}
            >
              <i className="bi bi-trash3"></i>
            </button>
        </div>
      ))}
      <hr />
      <div className="mt-4">
        <h3 className="fs-4 ">This is the total of your purchase</h3>
        <p className="fs-2 fw-bolder"><i className="bi bi-currency-dollar"></i>{Totales} </p>
        <div className="sasdas text-center">
          <button
            type="button"
            className="scdcdsc btn btn-warning text-capitalize"
            onClick={() =>
              handlePayment(
                Totales,
                mail,
                CartContent?.map((el) => el._id)
              )
            }
          >
            Hire now!
          </button> 
        </div>
      </div>
    </>
  );
};
export default Cart;
