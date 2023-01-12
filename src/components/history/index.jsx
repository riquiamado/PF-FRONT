import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Order } from "../order";
import "./history.css";

const History = () => {
  let orders = useSelector((state) => state.orders);
  let cont = 0;
  orders?.map((e) => {
    cont = cont + e.history.length;
  });

  if (cont === 0) {
    return (
      <div className="rateSettings container-fluid shadow p-3 mb-4 mt-4  bg-body rounded">
          <h1 className="pt-4 fs-3 mb-2 pb-4 text-md-start border-bottom border-dark"><i className="bi bi-bag-heart fs-4"></i> Recent Orders</h1>
          <div className="container-fluid text-center shadow p-3 mb-4 mt-4 rounded">
          <br />
          <h2 className="pt-4 pb-4 mb-4"><i className="bi bi-bag-x mb-1"></i><br /> You don't have orders yet!</h2>
          </div>
      </div>
    );
    } else {
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
  }
};

export default History;
