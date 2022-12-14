import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addServices } from "../../redux/actions/actions";
import styles from "./createServices.module.css";
import { useAuth0 } from "@auth0/auth0-react";

function Validate(input) {
  let errors = [];
  if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
    errors.name =
      "Nombre no puede tener numeros,caracteres especiales o tildes";
  } else if (input.name.length < 3) {
    errors.name = "invalid name";
  }
  if (!input.description) {
    errors.description = "invalid description";
  }
  return errors;
}

const CreateServices = () => {
  const { user } = useAuth0();

  const dispacth = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const handleImage = (el) => {
    setImage(el.target.files[0]);
  };

  const [errors, setErrors] = useState({});

  function handleChange(el) {
    setInput({
      ...input,
      [el.target.name]: el.target.value,
    });
    setErrors(
      Validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );
  }

  function handleSubmit(el, image) {
    el.preventDefault();

    setErrors(
      Validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );

    const formData = new FormData();
    formData.append("userName", user.name);
    formData.append("userImage", user.picture);
    formData.append("userEmail", user.email);
    formData.append("image", image);
    formData.append("name", input.name);
    formData.append("description", input.description);

    if (Object.values(errors).length === 0) {
      dispacth(addServices(formData));
      alert("servicio creado!");
      setInput({
        name: "",
        description: "",
      });
      setImage(null);
      history.push("/");
    } else {
      alert("deve completar todos los datos...");
    }
  }

  return (
    <div className={styles.page}>
      <Link to={"/"}>
        <button>Cancel</button>
      </Link>
      <div>
        <form onSubmit={(el) => handleSubmit(el, image, input)}>
          <div className="formu">
            <label htmlFor="">
              Service name:<br></br>
            </label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(el) => handleChange(el)}
            />
            <br />
            {errors.name ? <label>{errors.name}</label> : null}
          </div>
          <div className="">
            <label htmlFor="">
              Description:<br></br>
            </label>
            <input
              type="text"
              value={input.description}
              name="description"
              onChange={(el) => handleChange(el)}
            />
            <br />
            {errors.description ? <label>{errors.description}</label> : null}
          </div>
          <div>
            <label htmlFor="">Image</label>
            <input type="file" onChange={(el) => handleImage(el)} />
          </div>
          <input
            className={styles.create}
            type="submit"
            value={"create services"}
          />
        </form>
      </div>
    </div>
  );
};

export default CreateServices;
