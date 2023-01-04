import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getServicesByName } from "../../redux/actions/actions";
import "./search.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

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
    }
  };

  return (
      <form className="search" onSubmit={(el) => handleSubmit(el)}>
        <input
          className="input"
          type="text"
          onChange={(el) => handleChange(el)}
          value={name}
          placeholder={"Search"}
        />
        <input
          type="submit"
          className="submit"
          value={"🔍"}
        />
      </form>
  );
};

export default SearchBar;
