import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices, clean, orderByRatings, orderByCategory, resetAllServices } from "../../redux/actions/actions";
import Cards from "../cards";
import SearchBar from "../searchBar";
import { orderByServices } from "../../redux/actions/actions";
import Paginate from "../paginado";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const allServices = useSelector((state) => state.services);

  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage, setServicesPerPage] = useState(8);
  const indexLastServices = currentPage * servicesPerPage;
  const indexFirstServices = indexLastServices - servicesPerPage;
  const currentServices = allServices.slice(
    indexFirstServices,
    indexLastServices
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleSortName(e) {
    if (e.target.value !== "Search and Sort") {
      dispatch(orderByServices(e.target.value));
      setOrden(`orden ${e.target.value}`);
      console.log(e.target.value);
    }
  }

  const handleSortRating = e => {
    dispatch(orderByRatings(e.target.value))
    setOrden(`orden ${e.target.value}`)
  }

  const handleSortCategory = e => {
    dispatch(orderByCategory(e.target.value))
  }

  useEffect(() => {
    dispatch(getServices());
    return dispatch(clean());
  }, [dispatch]);

  return (
    <>
    <div class="container-fluid mt-3 shadow p-3 mb-3 bg-body rounded">
      <div class="row g-3 pb-0">
      <div class="col-sm pb-0">
        <div class="form-floating pb-0">
          <select class="form-select border border-1 shadow-sm p-3 mb-5 bg-body rounded" id="floatingSelectGrid" onChange={(e) => handleSortRating(e)}>
              <option class="ps-2"selected>Order by rating</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
          </select> 
        </div>
      </div>
      <div class="col-sm">
        <div class="form-floating">
          <select class="form-select border border-1 shadow-sm p-3 mb-5 bg-body rounded" id="floatingSelectGrid" onChange={(e) => handleSortName(e)}>
            <option selected>Order by sort</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
      </div>
      <div class="col-sm">
        <div class="form-floating">
          <select class="form-select border border-1 shadow-sm p-3 mb-5 bg-body rounded" id="floatingSelectGrid" onChange={(e) => handleSortCategory(e)}>
            <option selected>Order by category</option>
            <option value={"All"}>Category</option>
              {allServices.map((idx) => (<option key={idx.id} value={idx.id}>{idx.name}</option>))}
          </select>
        </div>
      </div>
    </div>
        <Paginate
          servicesPerPage={servicesPerPage}
          allServices={allServices.length}
          paginado={paginado}
        />
    </div>
    <div class="container-fluid mt-2 shadow p-3 mb-4 bg-body rounded">
      <div className="cards-home">
        {currentServices?.map((el, index) => {
          return (
            <div key={index}>
              <Cards
                _id={el._id}
                name={el.name}
                description={el.description}
                image={el.image ? el.image.secure_url : ""}
              />
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default Home;
