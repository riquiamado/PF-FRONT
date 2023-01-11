import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices, clean, getCategories, login } from "../../redux/actions/actions";
import Cards from "../cards";
import Paginate from "../paginado";
import "./home.css";
import { useHistory } from "react-router-dom";
import combinedFilters from "./filters";

function Home() {
  const allServices = useSelector((state) => state.services);
  const servicess = useSelector((state) => state.allServices);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const history = useHistory();
  const [filters, setFilters] = useState({
    country: "",
    name: "",
    rating: "",
    price: "",
  });
  const loggedUser = window.localStorage.getItem("session")
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;
  const indexLastServices = currentPage * servicesPerPage;
  const indexFirstServices = indexLastServices - servicesPerPage;

  const services = combinedFilters(allServices, filters);
  const currentServices = services.slice(indexFirstServices, indexLastServices);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    if(e.target.value === ''){
      setCurrentPage(1)
    }
    if (currentPage !== 1 || filters.country !== '' || filters.name !== '' || filters.price !== '') {
      setCurrentPage(1)
    }
  };

  const handleCreateService = () => {
    dispatch(getServices());
    history.push("/create");
  };

  useEffect(() => {
    //if (allServices.length === 0) {
      if (allServices.length === servicess.length) {
        dispatch(getServices());
        dispatch(getCategories());
        dispatch(login(loggedUser))
      }
    //}
    /* return dispatch(clean()); */
  }, [dispatch, filters]);

  return (
    <>
      <div className="container-fluid mt-3 shadow p-3 mb-3 bg-body rounded">
        <div className="row g-3 pb-0">
          <div className="col-sm">
            <div className="form-floating">
              <select
                className="form-select border border-1 shadow-sm p-3 mb-5 bg-body rounded"
                id="floatingSelectGrid"
                onChange={(e) => handleChange(e)}
                name="name"
              >
                <option value="">Category</option>
                {categories.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-floating">
              <select
                className="form-select border border-1 shadow-sm p-3 mb-5 bg-body rounded"
                id="floatingSelectGrid"
                onChange={(e) => handleChange(e)}
                name="country"
              >
                <option value="">Country</option>
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
                <option value="México">México</option>
              </select>
            </div>
          </div>
          <div className="col-sm pb-0">
            <div className="form-floating pb-0">
              <select
                className="form-select border border-1 shadow-sm p-3 mb-5 bg-body rounded"
                id="floatingSelectGrid"
                onChange={(e) => handleChange(e)}
                name="price"
              >
                <option value="">Price</option>
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
      <div className="container-fluid mt-2 shadow p-4 mb-4 pb-4 bg-body rounded">
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
                  average={el.average}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container-fluid mt-2 shadow p-4 mb-4 pb-4 bg-body rounded text-center">
        <p className="text-center text-uppercase fs-2 fw-semibold font-monospace text-primary pb-2 mb-4 border-bottom border-muted">
          Create your first service now!
        </p>
          <button id="sdsfs" className="btn btn-primary mw-40 h-100 text-center" onClick={() => handleCreateService()}>
            Create Services
          </button>
      </div>
    </>
  );
}

export default Home;
