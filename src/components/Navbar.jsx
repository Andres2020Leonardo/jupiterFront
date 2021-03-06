import React from 'react';
import '../navbar.css';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar() {
    const [cookies, setCookie] = useCookies(['login']);
   
    const hola = () => {
        setCookie('nombres', "", { path: '/' });
        setCookie('docu', "", { path: '/' });
        setCookie('rol', "", { path: '/' });
        setCookie('estado', "", { path: '/' });
        setCookie('pass', "", { path: '/' });
        setCookie('vali', "", { path: '/' });
        alert('si')
    }
    if (cookies.vali === "") {
        setCookie('vali', false, { path: '/' });

    }
    const [sesion, setSesion] = useState(cookies.vali === "true");
 
    const loginClick = async () => {
        document.getElementById('login').click();
    }
    const signupClick = async () => {
        document.getElementById('signup').click();
    }
    return (

        <nav className="navbar fixed-top navbar-light shadow p-3  rounded " id="nav">
            <div className="col-sm-11 " id="container-navbar">
                <div className="" id="divImg"><img src="icono.png" alt="icon " className="" id="icoNavbar" /></div>
                <div className={!sesion ? "h3 text-success ms-sm-5 " : "h3 text-success  "}  id="divNombre">Inventario Panelera J</div>

                <div className={!sesion ? "btn-group col-sm-2" : "d-none"} role="group" aria-label="Basic example">
                    <button onClick={loginClick} type="button" className="btn btn-primary opacity-100 rounded-star">Iniciar Sesion</button>
                    <button onClick={signupClick} type="button" className="btn btn-primary opacity-100 rounded-end">Regustrar Usuario</button>
                    <Link to='/login' id='login'></Link>
                    <Link to='/signup' id='signup'></Link>
                </div>
                <div className={!sesion ? "d-none" : ""} id="divBoton"><button onClick={hola} type="button" className="btn btn-success" id="botonNavbar" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-square " viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                    </svg>
                </button></div>



            </div>



        </nav>

    )
}
