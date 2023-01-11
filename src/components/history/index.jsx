import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Order } from "../order";
import "./history.css";

const History = () => {
  let orders = useSelector((state) => state.orders);

  return (
    <div>
      <h1>Recent Orders</h1>
      {orders?.map((order, i) => {
        return (
          <div key={i}>
            <p>{`Order ${i + 1}`}</p>
            <div>
              {order.history?.map((e, i) => {
                return (
                  <div className="table">
                    <p>
                      <b>Service:</b>
                    </p>
                    <p>
                      <i>{e.name}</i>
                    </p>
                    <img
                      classname="images"
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
