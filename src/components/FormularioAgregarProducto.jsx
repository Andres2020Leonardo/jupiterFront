import axios from 'axios';
import React, { useContext, useState, ReactDOM } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Pagina.css'
import $ from "jquery";
export default function FormularioAgregarProducto(props) {
   
    
    $(function () {
        // Sidebar toggle behavior

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar, #content').toggleClass('active');
            $("#sidebarCollapse").blur(); 
        });

       

    });
 
    const [nombreProducto, setNombreProducto] = useState('')
    const [descripcionProducto, setDescripcionProducto] = useState('')
    const [modalShow, setModalShow] = useState(false);
    
    const agregarProducto = async (e) => {
        e.preventDefault();
        const customId = "custom-id-yes";
        try {
            const res = await axios.post('http://localhost:1075/products/', { nombreProducto, descripcionProducto });

            const result = (res.data);
            if (result.vali) {
                toast.success('Producto agregado', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    toastId: customId
                });
                document.getElementById('cerrarModal').click();

            } else {
                toast.warn('Error en procedimiento ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    toastId: customId
                });
            }
        } catch (error) {

        }
    }
    const cerrarModal = async () => {
        setModalShow(false)
    }

   


    return (
        <> <ToastContainer />
            <li className="nav-item rounded-top " role="presentation" id="navsSelectted">

                <button type="button" className=" nav-link h6 bg-primary text-light shadow-sm " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Agregar Producto
                </button>
            </li>
            <li className="nav-item rounded-top " role="presentation" id="navsSelectted">
                <button id="sidebarCollapse" className="nav-link h6 borber borber-primary shadow-sm bg-primary text-light" type="button" >Realizar Transacciones</button>
            </li>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Registro de productos</h5>
                            <button id='cerrarModal' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={agregarProducto}>
                            <div className="modal-body">

                                <div className="mb-3 row mx-auto">
                                    <label for="staticEmail" className="col-sm-3 col-form-label">Nombre</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputTextNombre" onChange={e => setNombreProducto(e.target.value)} />
                                    </div>
                                </div>
                                <div className="mb-3 row row mx-auto">
                                    <label for="inputPassword" className="col-sm-3 col-form-label">Descripcion</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputDescripcion" onChange={e => setDescripcionProducto(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn btn-primary" onClick={props.action} >Registrar</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div></>
    )

}
