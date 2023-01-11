import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios"

export const Rate = () => {
  const userName = JSON.parse(window.localStorage.getItem("name"));
  const { orderId, name, serviceId } = useParams();
  const history = useHistory()
  const [input, setInput] = useState({
    rating: "",
    review: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    //Con esta información se actualizarán los propiedadas del rating y reviews del servicio
    const dataService = {serviceId, userName, rating:input.rating, review:input.review};

    await axios.put(`http://localhost:3001/service/rate`, dataService)
    
    
    //Con esta información se actualizará la propiedad services de la orden, hay que sacar el id del servicio, del arreglo.

    const dataOrder = {orderId, serviceId};
    await axios.put(`http://localhost:3001/orders`, dataOrder)
    // console.log(dataOrder)

    setInput({
      rating: "",
      review: "",
    })
    alert("Thanks for your review")
    history.push("/")
  };

  return (
    <div>
      <h1>{`Service: ${name}`}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Rating</label>
        <input
          onChange={(e) => handleChange(e)}
          type="number"
          max={5}
          min={0}
          name="rating"
          value={input.rating}
        />
        <label>Review</label>
        <textarea
          onChange={(e) => handleChange(e)}
          cols="30"
          rows="10"
          name="review"
          value={input.review}
        ></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
