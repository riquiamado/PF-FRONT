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
      <div className="rateSettings container-fluid shadow p-3 mb-4 mt-4  bg-body rounded">
          <h1 className="pt-4 fs-3 mb-2 pb-4 text-md-start border-bottom border-dark"><i className="bi bi-bag-heart fs-4"></i> Orders to qualify</h1>
          <div className="container-fluid text-center shadow p-3 mb-4 mt-4 rounded">
          <br />
          <h2 className="pt-4 pb-4 mb-4"><i className="bi bi-bag-check-fill mb-1"></i><br /> No services to qualify!</h2>
          </div>
      </div>
    );
  } else {
    return (
      <div className="rateSettings container-fluid shadow p-3 mb-4 mt-4 bg-body rounded">
        <h1 className="pt-4 fs-3 mb-2 pb-4 text-md-start border-bottom border-dark"><i className="bi bi-bag-heart fs-4"></i> Orders to qualify</h1>
        {orders?.map((order, i) => {
          return (
            <div key={i}>
              {order.services.length === 0 ? (
                <div></div>
              ) : (
                <div className="container-fluid shadow p-3 mb-4 mt-4 rounded">
                  <p className="fw-semibold mb-2 pb-1 text-md-start border-bottom border-secondary"><i className="bi bi-bag-check fs-5"></i> {`Order ${i + 1}`}</p>
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
