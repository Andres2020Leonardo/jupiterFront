import React from 'react';
import '../navbar.css';
export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 rounded" id="nav">
            <div className="col-11">
                <img src="icono.png" alt="icon " className="" id="icoNavbar" />
                <h3 className="text-success aling-left">Inventario Panelera J</h3>
            </div>


            <div className="collapse navbar-collapse col" id="" >
            <button type="button" className="btn btn-outline-success" id="contentNavbarUser">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-square col" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                    </svg>
                </button>


            </div>
        </nav>

    )
}
