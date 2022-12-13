import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices, clean, orderByRatings } from "../../redux/actions/actions";
import Cards from "../cards";
import SearchBar from "../searchBar";
import { orderByServices } from "../../redux/actions/actions";
import Paginate from "../paginado";
import "./home.css";

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

  useEffect(() => {
    dispatch(getServices());
    return dispatch(clean());
  }, [dispatch]);

  return (
    <div>
      <div className="home">
        <div className="filters">
          <select className="select" onChange={(e) => handleSortRating(e)}>
            <option value="all">By Rating</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
          </select>
          <select className="select" onChange={(e) => handleSortName(e)}>
            <option value={"All"}>Search and Sort</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
          <Paginate
            servicesPerPage={servicesPerPage}
            allServices={allServices.length}
            paginado={paginado}
          />
        </div>
        <div className="">
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
              )
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
