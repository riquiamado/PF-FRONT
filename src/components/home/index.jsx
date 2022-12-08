
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServices, clean } from '../../redux/actions/actions'
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


    return (
        <div>
            <NavBar />

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


        </div>
    )
}

export default Home