import React, { useEffect } from "react";
import { getOrders, login } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./paymentDeclined.css";

const PaymentDeclined = () => {
    const loggedUser = window.localStorage.getItem("session");
    const name = JSON.parse(window.localStorage.getItem("name"));
    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = () => {
        history.push("/");
    };

    useEffect(() => {
        dispatch(login(loggedUser));
    }, []);

    return(
    <div className="loginndsded">
        <div className="container-sm shadow p-3 mb-4 mt-4 bg-body rounded">
        <h1 className="fs-2 fw-semibold pb-2 border-bottom border-muted">
            <i className="bi bi-emoji-frown h4 pb-2 mb-4 me-2"></i>
            <i className="bi bi-send-slash-fill h4 pb-2 mb-4 me-4 ms-4"></i>
            <i className="bi bi-emoji-frown h4 pb-2 mb-4 me-2"></i>
        </h1>
        <div>
            <label className="text-muted mb-2 mt-2" htmlFor="">
            <i className="bi bi-bag-x">
                <h3>¡Something went wrong!</h3>
            </i>
            </label>
            <br />
            <label className="text-muted mb-2 mt-4" htmlFor="">
            Sorry {name.split(" ", 1)}, We couldn't complete your purchase!
            </label>
        </div>
        <div className="mb-4 fs-5">
        <br />
            <a onClick={() => handleClick()} className="btn btn-lg btn-danger border border-0 text-nowrap">
                Back
            </a>
        </div>
        </div>
    </div>
    )
}

export default PaymentDeclined