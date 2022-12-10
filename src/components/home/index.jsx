

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices, clean } from "../../redux/actions/actions";
import Cards from "../cards";
import SearchBar from "../searchBar";
import { orderByServices } from "../../redux/actions/actions";

function Home() {
  const allServices = useSelector((state) => state.services);
  const services = useSelector((state) => state.allServices);

  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");


  function handleSortName(e) {
    
    dispatch(orderByServices(e.target.value));
    
    setOrden(`orden ${e.target.value}`);
    console.log(e.target.value)
  }

  useEffect(() => {
    if (allServices.length === services.length) {
      dispatch(getServices());
    }
    return dispatch(clean());
  }, [allServices.length, services.length, dispatch]);

  return (
    <div>
      <div className="columns">
        <div className="column is-one-third">
          <nav className="panel">
            <p className="panel-heading">Repositories</p>
            <div className="panel-block">
              <p className="control has-icons-left">
              </p>
                <SearchBar theText={"Search"} />
            </div>

            <div className="panel-block">
              <div className="select is-fullwidth">
                <select onChange={(e) => handleSortName(e)}>
                  <option value={"All"}>All</option>
                  <option value="asc">Ascendente</option>
                  <option value="desc">Descendente</option>
                </select>
              </div>
            </div>
          </nav>
        </div>
        <div className="column is-two-thirds">
          <div>
            {allServices?.map((el, index) => {
              return (
                <div key={index}>
                  <Cards
                    _id={el._id}
                    name={el.name}
                    description={el.description}
                    image={el.image?el.image.secure_url:""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
