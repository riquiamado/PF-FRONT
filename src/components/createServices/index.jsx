import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { addServices } from '../../redux/actions/actions';

function Validate(input) {
    let errors = [];
    if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
        errors.name = 'Nombre no puede tener numeros,caracteres especiales o tildes'
    } else if (input.name.length < 3) {
        errors.name = "invalid name"
    }

    if (!input.description) {
        errors.description = "invalid description"
    }

    if (!input.online) {
        errors.online = "te falta seleccionar esta opcion"
    }



    // if (!input.users.length === 0) {
    //     errors.users = "deves elegir un usuario"
    // }
    return errors
}

const CreateServices = () => {
    const dispacth = useDispatch()
    const services = useSelector((state) => state.services)
    const history = useHistory()

    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        online: "",
        users: []
    })

    const [errors, setErrors] = useState({})

    function handleChange(el) {

        setInput({
            ...input,
            [el.target.name]: el.target.value,

        });
        setErrors(
            Validate({
                ...input,
                [el.target.name]: el.target.value,
            }),
        );
    }

    function handleSubmit(el) {
        el.preventDefault();
        setErrors(
            Validate({
                ...input,
                [el.target.name]: el.target.value,
            }),
        );
        if (Object.values(errors).length === 0) {
            dispacth(addServices(input))
            alert("servivio creado!");
            setInput({
                name: "",
                image: "",
                description: "",
                online: "",
                users: []
            })
            history.push("/home")
        } else {
            alert("deve completar todos los datos...")
        }
    }


    return (
        <div>
            <Link to={"/home"}>
                <button>Volver</button>
            </Link>
            <div>
                <form onSubmit={(el) => handleSubmit(el)} >
                    <div className="formu">
                        <label htmlFor="">Name:<br></br>
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
                        <label htmlFor="">description:<br></br>
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
                        <label htmlFor="">true <input type="radio" value={true} name="online" onChange={(el) => handleChange(el)} /></label>
                        <label htmlFor="">false <input type="radio" value={false} name="online" onChange={(el) => handleChange(el)} /></label>
                        <br />
                        {errors.online ? <label>{errors.online}</label> : null}
                    </div>

                    <div>
                        <label htmlFor="">image(url)</label>
                        <input type="url" />
                    </div>
                    <div>
                        <label htmlFor="">id <input type="text" value={input.id} name="id"
                            min={"1"} max={"30"} onChange={(el) => handleChange(el)} /></label>

                    </div>
                    <input type="submit" value={"crear services"} />
                </form>
            </div>
        </div>
    )
}

export default CreateServices