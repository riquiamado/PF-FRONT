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
      <p><b>Service:</b></p>
      <p><i>{name}</i></p>
      <img classname="images" src={image} alt="imagen" height="100px" width="100px"/>
      <button onClick={()=>handleClick()}>Rate</button>
    </div>
  )
}
