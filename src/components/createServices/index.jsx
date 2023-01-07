import React, {useEffect} from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addServices } from "../../redux/actions/actions";
import styles from "./createServices.module.css";

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
  const session = useSelector((state) => state.session);
  const userName = JSON.parse(window.localStorage.getItem("name"))
  const userEmail = JSON.parse(window.localStorage.getItem("session"))
  const dispacth = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    country: "",
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
    formData.append("userName", userName );
    formData.append("userEmail", userEmail);
    formData.append("image", image);
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("price", input.price);
    formData.append("country", input.country);
    console.log(formData);
    if (Object.values(errors).length === 0) {
      dispacth(addServices(formData));
      alert("servicio creado!");
      setInput({
        name: "",
        description: "",
        price: "",
        country: "",
      });
      setImage(null);
      history.push("/");
    } else {
      alert("debe completar todos los datos...");
    }
  }

  const handleClick = () => {
    history.push("/");
  };
  
  return  (
    <div>
      {
        session? <div className={styles.page}>
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
              <label> Price: </label>
              <div>
                <input
                  type="number"
                  value={input.price}
                  placeholder="$"
                  name="price"
                  onChange={(el) => handleChange(el)}
                />
              </div>
            </div>
            <select
              className="form-select border border-1 shadow-sm p-3 mb-5 bg-body rounded"
              id="floatingSelectGrid"
              onChange={(el) => handleChange(el)}
              name="country"
            >
              <option value="">Country: </option>
              <option value="Argentina">Argentina</option>
              <option value="Colombia">Colombia</option>
              <option value="México">México</option>
            </select>
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
      </div> : <div className={styles.loginnds}>
                  <p>
                    <i class="bi bi-balloon h4 pb-2 mb-4 text-danger border-bottom border-danger"></i>
                    <br /><br /> Please, <b class="pb-2 mb-4 text-danger border-bottom border-danger">Login</b> to Create a New Service.
                    <br /><br />
                    <a onClick={() => handleClick()} id="buttt" class="btn btn-lg btn-danger border border-0 text-nowrap">
                      Back
                    </a>
                  </p>
                </div>
      }
    </div>
    
  );
};

export default CreateServices;
