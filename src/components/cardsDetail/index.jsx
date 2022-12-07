import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { clean, getServicesDetails } from '../../redux/actions/actions'


const CardDetails = () => {
 const dispatch= useDispatch()
  const details= useSelector((state)=> state.details)
  console.log(details)
  const {id}=useParams()
  console.log(id)
  
  useEffect(() => {
    dispatch(getServicesDetails(id))
      return dispatch(clean())
  }, [dispatch,id])
  
  return   details && details.id?(
    <div>
        <Link to={"/home"}>
        <button>Volver</button>
        </Link>
        <div>
            <div>
                {/* <img src={details.image} alt={details.image} /> */}
               
                <h1>{details.name}</h1>
                <label htmlFor="">Email</label>
                <h3>{details.description}</h3>
                {/* <label htmlFor="">city</label> */}
                {/* <h3>{details.city}</h3>
                <label htmlFor=""></label> */}

                
                
            </div>
        </div>
    </div>
  ):
  (<h1>Loading...</h1>)
}

export default CardDetails