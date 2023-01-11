import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getServicesByName } from "../../redux/actions/actions";
import { useHistory } from "react-router-dom";
import "./search.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    if (!name) {
      return alert("Ingresa un nombre");
    } else {
      dispatch(getServicesByName(name));
      setName("");
      history.push("/");
    }
  };

  return (
      <form className="search1" onSubmit={(el) => handleSubmit(el)}>
        <input
          className="input1"
          type="text"
          onChange={(el) => handleChange(el)}
          value={name}
          placeholder={"Search"}
        />
        <input
          type="submit"
          className="submit1"
          value={"🔍"}
        />
      </form>
  );
};

export default SearchBar;
