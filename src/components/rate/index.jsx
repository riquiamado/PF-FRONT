import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { login, getOrders } from "../../redux/actions/actions";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios"
import "./rate.css";

function Validate(input) {
  let errors = [];
  if (!input.rating) {
    errors.rating =
      "Rating can't be empty";
  }
  if (!input.review) {
    errors.review = "Review can't be empty!";
  }
  return errors;
}


export const Rate = () => {
  const userName = JSON.parse(window.localStorage.getItem("name"));
  const loggedUser = window.localStorage.getItem("session");
  const { orderId, name, serviceId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    rating: "",
    review: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(el) {
    setInput({
      ...input,
      [el.target.name]: el.target.value,
    });
    setErrors(
      Validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );
  }

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 3050); 
  });

  const handleSubmit = async (el) => {
    el.preventDefault();
    setErrors(
      Validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );

    if (Object.values(errors).length === 0) {
      //Con esta información se actualizarán los propiedadas del rating y reviews del servicio
      const dataService = {serviceId, userName, rating:input.rating, review:input.review}; 
      await axios.put(`https://pf-back-production-b443.up.railway.app/service/rate`, dataService)

      //Con esta información se actualizará la propiedad services de la orden, hay que sacar el id del servicio, del arreglo.
      const dataOrder = {orderId, serviceId};
      await axios.put(`https://pf-back-production-b443.up.railway.app/orders`, dataOrder)
      // console.log(dataOrder)
      toast.success("Rating has been sent!"), {
        duration: 3000 
      };
      myPromise.then(() => {
        history.push("/");
      })
      setInput({
        rating: "",
        review: "",
      });

    } else {
      toast.error("Incomplete data");
    }

    /* alert("Thanks for your review")
    history.push("/") */
  };

  useEffect(() => {
    dispatch(login(loggedUser));
    // dispatch(getOrders(users[0]._id)); 
  }, []);

  return (
    <div className="loginnds">
      <div className="container-sm shadow p-3 mb-4 mt-4 bg-body rounded">
        <h2 className="fs-3 fw-semibold pb-2 text-start border-bottom border-muted">
          <i className="bi bi-arrow-down-circle-fill h4 fs-3 pb-2 mb-4 me-2"> Hello {userName.split(" ", 1)}!</i>
        </h2>
        <div>
        <h3 className="mt-4">You are rating the service</h3>
        <h2 className="">{name.charAt(0).toUpperCase() + name.slice(1) }</h2>
        <br />
        <form  className="form-control form-control-lg me-2 pt-2 pb-4 mb-4" onSubmit={(el) => handleSubmit(el, input)}>
        <h2>
          <i className="bi bi-chat-text-fill fs-1"></i>
          <br />
          Tell us about how your service was...</h2>
          <hr />
          <h3 className="text-start ms-4 mt-4"><i className="bi bi-star-half fs-4"></i> Rating</h3>
        <h4 className="text-start fs-5 text-muted ms-4 me-4 mb-4">
          For this section, rate from one to five. With this section you help other users to know how to choose a good service.</h4>
        <input
          onChange={(el) => handleChange(el)}
          className="form-control mb-4 ms-4 fs-3 fw-bold"
          placeholder="0"
          type="number"
          max={5}
          min={0}
          name="rating"
          value={input.rating}
          style={{height: 50, width: 200}}
        />
        <br />
        <h3 className="text-start mt-4 ms-4"><i className="bi bi-chat-quote fs-4"></i> Review</h3>
        <h4 className="text-start fs-5 text-muted mb-4 ms-4 me-4">
          For this section, make a comment about the service and help other users to know how it was.</h4>
        <div className="form-floating">
          <textarea 
            className="form-control mb-4 ms-2 me-4 pe-2 fs-4 fw-bold" 
            placeholder="Leave a comment here" 
            id="floatingTextarea2"
            onChange={(el) => handleChange(el)}
            cols="30"
            rows="10"
            name="review"
            value={input.review} 
            style={{height: 100}}></textarea>
          <label className="me-4 pt-1 text-muted ms-4" htmlFor="floatingTextarea2">Comments</label>
        </div>
        <div className="divivvi">
          <input 
            type="submit"
            value="Send"
            className="mt-4 text-center fs-4 pe-4 ps-4 rounded-pill border border-1"
          />
        </div>
      </form>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

