import React from 'react'
import { useHistory } from "react-router-dom"

export const Order = ({orderId, name, serviceId, image}) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/rate/${orderId}/${name}/${serviceId}`)
  }
  return (
    <div>
      {/* <img src={image}  /> */}
      <p><b>Service:</b></p>
      <p><i>{name}</i></p>
      <button onClick={()=>handleClick()}>Rate</button>
    </div>
  )
}
