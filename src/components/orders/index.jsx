import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Order } from "../order";
import "./orders.css";

const Orders = () => {
  let orders = useSelector((state) => state.orders);
  let cont = 0;
  orders?.map((e) => {
    cont = cont + e.services.length;
  });

  if (cont === 0) {
    return (
      <div>
        <h1>Orders to qualify</h1>
        <br /><br /><br />
        <h2>No services to qualify</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Orders to qualify</h1>
        {orders?.map((order, i) => {
          return (
            <div key={i}>
              {order.services.length === 0 ? (
                <div></div>
              ) : (
                <div>
                  <p>{`Order ${i + 1}`}</p>
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
  }
};

export default Orders;
