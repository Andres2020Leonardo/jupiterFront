
import React, { Suspense } from 'react'
import { lazy } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../node_modules/react-toastify/dist/ReactToastify.css';

const ImagenKardex = lazy(()=>import('./ImagenKardex'))

export default function PaginaInicio() {
    
   
    const loginClick = async () => {
        document.getElementById('login').click();
    }
    const signupClick = async () => {
        document.getElementById('signup').click();
    }
    return (
        <div className='mt-5 rounded position-absolute top-50 start-50 translate-middle bg-light col-sm-10 h-75 mt-3'>
            <h1>Sistema de inventario</h1>
            
            <Suspense fallback={
                  <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
              </Spinner>
            }>
                <ImagenKardex></ImagenKardex>
            </Suspense>
            <h2>Te ayudara en el manejo de los productos de tu negocio</h2>
            <div className="btn-group " role="group" aria-label="Basic example">
                <button onClick={loginClick} type="button" className="btn btn-primary opacity-100 rounded-star">Iniciar Sesion</button>
                <button onClick={signupClick} type="button" className="btn btn-primary opacity-100 rounded-end">Regustrar Usuario</button>
                <Link to='/login' id='login'></Link>
                <Link to='/signup' id='signup'></Link>
            </div>
        </div>
    )
}
