import React from 'react'

function ListaSeleccion() {
  return (
    <>
     
      
      <li className="nav-item rounded-top " role="presentation" id="navsSelectted">
        <button className=" nav-link active h6" id="tab-user" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Usuarios</button>
      </li>
      <li className="nav-item rounded-top " role="presentation" id="navsSelectted">
        <button className="nav-link h6" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Transacciones</button>
      </li>
      <li className="nav-item rounded-top" role="presentation" id="navsSelectted">
        <button className="nav-link h6" id="tab-pro" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Productos</button>
      </li>
    
     
    </>
  )
}

export default ListaSeleccion
