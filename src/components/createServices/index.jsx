import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addServices } from "../../redux/actions/actions";

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

  if (!input.online) {
    errors.online = "te falta seleccionar esta opcion";
  }

  return errors;
}

const CreateServices = () => {
  const dispacth = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    description: "",
    online: "",
    id: "",
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
    formData.append("image", image);
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("online", input.online);
    formData.append("id", input.id);

    if (Object.values(errors).length === 0) {
      dispacth(addServices(formData));
      alert("servicio creado!");
      setInput({
        name: "",
        description: "",
        online: "",
        id: "",
      });
      setImage(null);
      history.push("/home");
    } else {
      alert("deve completar todos los datos...");
    }
  }

  return (
    <div>
      <Link to={"/home"}>
        <button>Volver</button>
      </Link>
      <div>
        <form onSubmit={(el) => handleSubmit(el, image, input)}>
          <div className="formu">
            <label htmlFor="">
              Name:<br></br>
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
              description:<br></br>
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
            <label htmlFor="">Online</label>
            <br />
            <div>
              <div>
                <label htmlFor="">true</label>
                <input
                  type="radio"
                  value={true}
                  name="online"
                  onChange={(el) => handleChange(el)}
                />
              </div>
              <div>
                <label htmlFor="">false</label>
                <input
                  type="radio"
                  value={false}
                  name="online"
                  onChange={(el) => handleChange(el)}
                />
              </div>
              <br />
              {errors.online ? <label>{errors.online}</label> : null}
            </div>
          </div>

          <div>
            <label htmlFor="">id</label>
            <input
              type="text"
              value={input.id}
              name="id"
              min={"1"}
              max={"30"}
              onChange={(el) => handleChange(el)}
            />
          </div>
          <div>
            <label htmlFor="">image(url)</label>
            <input type="file" onChange={(el) => handleImage(el)} />
          </div>
          <input type="submit" value={"crear services"} />
        </form>
      </div>
    </div>
  );
};

export default CreateServices;
