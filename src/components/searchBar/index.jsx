import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getServicesByName } from "../../redux/actions/actions";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
<<<<<<< HEAD

=======
>>>>>>> 3d67bfeed419c04606d5b190bd3295e1492df087

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (el) => {
<<<<<<< HEAD
    el.preventDefault()
    if (!name) {
      return alert("Ingresa un nombre")
    } else {
      dispatch(getServicesByName(name))
      setName("")
    }

  };
  return (
    <div>
      <div >
        <input
          type="text"
          placeholder='Ingrese un name'
          value={name}
          onChange={(el => handleChange(el))}
          className='inputSearch'
        />

        <button type='submit' className='boton' onClick={((el) => handleSubmit(el))} >Buscar Servicio</button>
      </div>

=======
    el.preventDefault();
    if (!name) {
      return alert("Ingresa un nombre");
    } else {
      dispatch(getServicesByName(name));
      setName("");
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Type a name"
          value={name}
          onChange={(el) => handleChange(el)}
          className="inputSearch"
        />

        {/* <button
          type="submit"
          className="boton"
          onClick={(el) => handleSubmit(el)}
        >
          Search Service
        </button> */}
        <button
          class="btn btn-outline-success"
          type="submit"
          onClick={(el) => handleSubmit(el)}
        >
          Search Service
        </button>
      </div>
>>>>>>> 3d67bfeed419c04606d5b190bd3295e1492df087
    </div>
  );
};

export default SearchBar;
