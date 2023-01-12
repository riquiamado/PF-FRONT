import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Order } from "../order";
import "./history.css";

const History = () => {
  let orders = useSelector((state) => state.orders);

  return (
    <div className=" container-fluid shadow p-3 mb-4 mt-4 bg-body rounded">
      <h1 className="shhhh pt-4 fs-3 mb-2 pb-4 text-md-start border-bottom border-dark"><i className="bi bi-bag-plus fs-4"></i> Recent Orders</h1>
      {orders?.map((order, i) => {
        return (
          <div className="rateSettings container-fluid shadow p-3 mb-4 mt-4 rounded" key={i}>
            <p className="fw-semibold mb-2 pb-1 text-md-start"><i className="bi bi-handbag"></i> {`Order ${i + 1}`}</p>
            <div>
              {order.history?.map((e, i) => {
                return (
                  <div className="table">
                    <p>
                      <b>Service:</b>
                    </p>
                    <p className="text-capitalize">
                      <i>{e.name}</i>
                    </p>
                    <img
                      className="images rounded-circle mb-1 shadow bg-body-tertiary"
                      src={e.image.secure_url}
                      alt="imagen"
                      height="100px"
                      width="100px"
                    />
                    <p>
                      <i>${e.price}</i>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
