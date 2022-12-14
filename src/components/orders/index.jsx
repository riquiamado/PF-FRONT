import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Order } from "../order";
import "./orders.css";

const Orders = () => {
  let orders = useSelector((state) => state.orders);

  console.log(orders);
  return (
    <div>
      <h1>This are the Orders</h1>
      {orders?.map((order, i) => {
        return (
          <div key={i}>
            <p>{`Order ${i + 1}`}</p>
            {order.services.length === 0 ? (
              <div>
                <p>Your services were rated</p>
              </div>
            ) : (
              <div>
                {order.services.map((e, i) => {
                  return (
                    <Order
                      key={i}
                      orderId={order._id}
                      name={e.name}
                      serviceId={e._id}
                      image={e.image.secure_url}
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
