import React from 'react'
import Producto from '../models/Producto'
import Transaccion from '../models/Transaccion'
import Usuario from '../models/Usuario'
import FormularioAgrgarTransaccion from './FormularioAgrgarTransaccion'
import './Inventario.css'
export default function Inventario() {
    return (
        <div className="container-fluid " id="contentFactura">

            <div>
                <div className="row m-0 pt-4 justify-content-center">
                    <div className="col-sm-10 col-lg-4 rounded border p-3" id="factura">
                        <div className="row m-0">
                            <div className="col-7 p-0">
                                <h3 className="text-center text-dark">Transacciones</h3>

                            </div>

                        </div>
                        <div className="row m-0 mt-2 justify-content-center col-sm">
                            <div className="col-4 m-0 p-0">
                                <table className="table table-bordered m-0">
                                    <thead>
                                        <tr className="text-center">
                                            <th className="p-1 bg-primary text-light">DIA</th>
                                            <th className="p-1 bg-primary text-light">MES</th>
                                            <th className="p-1 bg-primary text-light">AÑO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center p-1 ">00</td>
                                            <td className="text-center p-1">00</td>
                                            <td className="text-center p-1">00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col ms-3 p-0">
                                <div className="row m-0">

                                    <div className="col m-0 ms-3 border p-2">
                                        <h3 className="text-danger text-center m-0">N° 0123</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                      
                            
                            <FormularioAgrgarTransaccion></FormularioAgrgarTransaccion>
                     
                    </div>
                    <div className="col ms-3 p-0 mt-sm-3">

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item rounded-top " role="presentation" id="navsSelectted">
                                <button className=" nav-link active h5" id="tab-user" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Usuarios</button>
                            </li>
                            <li className="nav-item rounded-top " role="presentation" id="navsSelectted">
                                <button className="nav-link h5" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Transacciones</button>
                            </li>
                            <li className="nav-item rounded-top" role="presentation" id="navsSelectted">
                                <button className="nav-link h5" id="tab-pro" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Productos</button>
                            </li>
                        </ul>
                        <div className="tab-content borderCompleto h-95" id="myTabContent">
                            <Usuario />
                            <Transaccion />
                            <Producto />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
