import React from "react";
import SearchBar from "../searchBar";

import { Link } from "react-router-dom";
import { orderByServices } from "../../redux/actions/actions";
import { useDispatch } from "react-redux"
import { useState } from "react";

function NavBar() {
  const dispatch = useDispatch()
  const [orden, setOrden] = useState("")

  function handleSortName(e) {
    dispatch(orderByServices(e.target.value));
    setOrden(`orden ${e.target.value}`);
  }
  return (
    <div>
      <div>

        <SearchBar />
        <Link to={"/users"}>
          <button>Create user</button>
        </Link>
        <Link to={"/services"}>
          <button>Create services</button>
        </Link>
      </div>
      <div>
        <div>
          <label htmlFor="">Orden Alfabético: </label>
          <select onChange={(e) => handleSortName(e)}>
            <option value={"All"}>All</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
