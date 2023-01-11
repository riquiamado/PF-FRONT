import React from 'react'

const AdminService = ({name,description,image,price}) => {
  return (
    <div>
        <div>
            <label htmlFor="">name</label>
            <h3>{name}</h3>
            <img src={image} alt={image} />
            <label htmlFor="">description</label>
            <h3>{description}</h3>
            <label htmlFor="">price</label>
            <h3>{price}</h3>
        </div>
    </div>
  )
}

export default AdminService