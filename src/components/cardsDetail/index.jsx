import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { clean, getProvidersDetails } from '../../redux/actions/actions'


const CardDetails = () => {
 const dispatch= useDispatch()
  const details= useSelector((state)=> state.details)
  console.log(details)
  const {_id}=useParams()
  console.log(_id)
  
  useEffect(() => {
    dispatch(getProvidersDetails(_id))
      return dispatch(clean())
  }, [dispatch,_id])
  
  return   details && details._id?(
    <div>
        <Link to={"/home"}>
        <button>Volver</button>
        </Link>
        <div>
            <div>
                {/* <img src={details.image} alt={details.image} /> */}
               
                <h1>{details.name}</h1>
                <label htmlFor="">Email</label>
                <h3>{details.email}</h3>
                <label htmlFor="">service</label>
                <h3>{details.service}</h3>
            </div>
        </div>
    </div>
  ):
  (<h1>Loading...</h1>)
}

export default CardDetails