
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {getServices,clean} from '../../redux/actions/actions'
import Cards from '../cards'
import NavBar from '../navBar'




function Home() {

    const allServices = useSelector((state) => state.services)
    const services = useSelector((state)=> state.allServices)
     console.log(allServices)
    const dispatch = useDispatch()

    useEffect(() => {
        if(allServices.length===services.length){

            dispatch(getServices())
        }
        return dispatch(clean())

    }, [dispatch])


    return (
        <div>
           <NavBar/>
           <Link to={"/users"} ><button>Create user</button></Link>
            <div>
                {
                   allServices?.map((el,index)=>  {
                        return(
                            <div key={index}>
                             <Cards
                             id={el.id}
                             name={el.name}
                             email={el.description}
                            
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