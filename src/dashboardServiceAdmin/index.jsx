import React from 'react'

const AdminService = ({name,description,image,price}) => {
  return (
    <div className="container-fluid shadow p-3 mb-4 mt-4  bg-body rounded">
        <div >
            <h3 className="text-capitalize fw-bolder border-bottom border-muted pb-2">{name}</h3>
            <img 
              className="images rounded-circle mb-2 shadow bg-body-tertiary"
              src={image}
              alt={image}
              height="100px"
              width="100px"
              />
              <br />
            <label className="text-muted mb-1"htmlFor="">Description</label>
            <h3 className="text-capitalize fs-4">{description}</h3>
            <h4><i className="bi bi-currency-dollar"></i>{price}</h4>
        </div>
    </div>
  )
}

export default AdminService