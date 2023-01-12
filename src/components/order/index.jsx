import React from 'react'
import { useHistory } from "react-router-dom"

export const Order = ({orderId, name, serviceId, image}) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/rate/${orderId}/${name}/${serviceId}`)
  }
  
  return (
    <div className='table'>
      {/* <img src={image}  /> */}
      <div>
      <img className="images rounded-circle mb-1 shadow-lg bg-body-tertiary" src={image} alt="imagen" height="100px" width="100px"/>
      <p className='text-capitalize mt-2'><b>Service:</b>{name}</p>
      </div>
      <button className="btn btn-warning" onClick={()=>handleClick()}>Rate</button>
    </div>
  )
}
