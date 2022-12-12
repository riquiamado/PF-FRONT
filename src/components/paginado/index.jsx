import React from "react";
import "./paginado.css";

function Paginate({ servicesPerPage, allServices, paginado }) {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(allServices / servicesPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <nav>
      <div className="paginas">
        {pageNumber &&
          pageNumber.map((number) => {
            return (
              <div className="paginas" key={number}>
                <button className="btnPag" onClick={() => paginado(number)}>
                  {number}
                </button>
              </div>
            );
          })}
      </div>
    </nav>
  );
}

export default Paginate;
