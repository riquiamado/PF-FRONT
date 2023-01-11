import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, getOrders } from "../../redux/actions/actions";
import "./payment.css";

const Payment = () => {
  const loggedUser = window.localStorage.getItem("session");
  const name = JSON.parse(window.localStorage.getItem("name"));
  const User = JSON.parse(window.localStorage.getItem("user"));

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login(loggedUser));
    // dispatch(getOrders(users[0]._id));
    dispatch(getOrders(User._id))
  }, []);

  return (
    <div className="loginnds">
      <div className="container-sm shadow p-3 mb-4 mt-4 bg-body rounded">
        <h1 className="fs-2 fw-semibold pb-2 border-bottom border-muted">
          <i className="bi bi-emoji-laughing h4 pb-2 mb-4 me-2"></i>
          <i className="bi bi-box2-heart-fill h4 pb-2 mb-4 me-4 ms-4"></i>
          <i className="bi bi-emoji-laughing h4 pb-2 mb-4 me-2"></i>
        </h1>
        <div>
          <label className="text-muted mb-2 mt-4" htmlFor="">
            Hello {name.split(" ", 1)}, thanks for your purchase!
          </label>
          <br />
          <label className="text-muted mb-2 mt-4" htmlFor="">
            <i className="bi bi-chat-left-text">
              <h3>Please, Don't forget to rate your service.</h3>
            </i>
          </label>
        </div>
        <div className="mb-4 fs-5">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
