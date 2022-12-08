
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getServices, clean, orderByServices, filterServices } from '../../redux/actions/actions'
import Cards from '../cards'
import NavBar from '../navBar'




function Home() {

    const allServices = useSelector((state) => state.services)
    const services = useSelector((state) => state.allServices)
    console.log(allServices)
    const dispatch = useDispatch()
    const [orden, setOrden] = useState("")

    useEffect(() => {
        if (allServices.length === services.length) {

            dispatch(getServices())
        }
        return dispatch(clean())

    }, [dispatch])

    function handleSortName(e) {
        dispatch(orderByServices(e.target.value));
        setOrden(`orden ${e.target.value}`);
    }

    function handleChangeServices(e) {
        dispatch(filterServices(e.target.value))
    }

    return (
        <div>
            <NavBar />
            <Link to={"/users"} ><button>Create user</button></Link>
            <Link to={"/services"} ><button>Create services</button></Link>
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
            <div>
                {
                    allServices?.map((el, index) => {
                        return (
                            <div key={index}>
                                <Cards
                                    _id={el._id}
                                    name={el.name}
                                    description={el.description}
                                    image={el.image}

                                />
                            </div>
                        )
                    })
                }
            </div>
            <div>
                
                <label htmlFor="">buscar por servicios</label>
                <select name="" id="" onChange={el => handleChangeServices(el)} >
                    {allServices?.map((serv,index )=> (
                       
                        <option value={serv.name} key={index} >
                            {serv.name}
                        </option>
                        
                    ))}
                </select>
            </div>


        </div>
    )
}

export default Home