import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getServices,
  clean,
  orderByRatings,
  getCategories,
} from "../../redux/actions/actions";
import Cards from "../cards";
import Paginate from "../paginado";
import "./home.css";
import { Link } from "react-router-dom";
import combinedFilters from "./filters";

function Home() {
  const allServices = useSelector((state) => state.services);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    country: "",
    name: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;
  const indexLastServices = currentPage * servicesPerPage;
  const indexFirstServices = indexLastServices - servicesPerPage;

  const services = combinedFilters(allServices, filters);
  const currentServices = services.slice(indexFirstServices, indexLastServices);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategory = (e) => {
    setFilters({ ...filters, name: e.target.value });
  };

  const handleCountry = (e) => {
    setFilters({ ...filters, country: e.target.value });
  };

  const handleSortRating = (e) => {
    dispatch(orderByRatings(e.target.value));
    setOrden(`orden ${e.target.value}`);
  };

  useEffect(() => {
    if (allServices.length === 0) {
      dispatch(getServices());
      dispatch(getCategories());
    }
    return dispatch(clean());
  }, [dispatch]);

  return (
    <>
      <div class="container-fluid mt-3 shadow p-3 mb-3 bg-body rounded">
        <div class="row g-3 pb-0">
          <div class="col-sm">
            <div class="form-floating">
              <select
                class="form-select border border-1 shadow-sm p-3 mb-5 bg-body rounded"
                id="floatingSelectGrid"
                onChange={(e) => handleCategory(e)}
              >
                <option value="">Order by category</option>
                {categories.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div class="col-sm">
            <div class="form-floating">
              <select
                class="form-select border border-1 shadow-sm p-3 mb-5 bg-body rounded"
                id="floatingSelectGrid"
                onChange={(e) => handleCountry(e)}
              >
                <option value="">Order by country</option>
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
                <option value="México">México</option>
              </select>
            </div>
          </div>
          <div class="col-sm pb-0">
            <div class="form-floating pb-0">
              <select
                class="form-select border border-1 shadow-sm p-3 mb-5 bg-body rounded"
                id="floatingSelectGrid"
                onChange={(e) => handleSortRating(e)}
              >
                <option selected class="ps-2">
                  Order by rating
                </option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
              </select>
            </div>
          </div>
        </div>
        <Paginate
          servicesPerPage={servicesPerPage}
          allServices={services.length}
          paginado={paginado}
        />
      </div>

      <div class="container-fluid mt-2 shadow p-4 mb-4 pb-4 bg-body rounded">
        <div className="cards-home">
          {currentServices?.map((el, index) => {
            return (
              <div key={el._id}>
                <Cards
                  _id={el._id}
                  name={el.name}
                  description={el.description}
                  image={el.image ? el.image.secure_url : ""}
                  price={el.price}
                  country={el.country}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div class="container-fluid mt-2 shadow p-4 mb-4 pb-4 bg-body rounded text-center">
        <p class="text-center text-uppercase fs-2 fw-semibold font-monospace text-primary pb-2 mb-4 border-bottom border-muted">
          Create your first service now!
        </p>
        <Link to={"/checkLogin"}>
          <button id="sdsfs" class="btn btn-primary mw-40 h-100 text-center">
            Create Services
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
