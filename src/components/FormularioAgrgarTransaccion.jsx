import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import SelectProducts from './SelectProducts'
import { useState } from 'react';
import axios from 'axios';
import $ from "jquery";
import { toast, ToastContainer } from 'react-toastify';
export default function FormularioAgrgarTransaccion(props) {


    $(function () {
        // Sidebar toggle behavior
        $('#sidebarCollapseCerrar').on('click', function () {
            $('#sidebar, #content').toggleClass('active');
        });
    });
    const [show, setShow] = useState(false);

    const [tipoTransaccion, setTipoTransaccion] = useState('');
    const [codigoPro, setCodigoPro] = useState('');
    const [valor, setValor] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const transaccion = { tipoTransaccion, codigoPro, valor, cantidad, descripcion }
    const customId = "custom-id-yes";
    
    const registroTransaccion = async (e) => {
        e.preventDefault();
        console.log(codigoPro)
        const res = await axios.post('http://localhost:1075/movi/', transaccion);

        const result = (res.data);
        if (!result.vali) {
            toast.warn(result.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } else {
            toast.success(tipoTransaccion + " realizada con exito", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            document.getElementById('botonReiniciarConsulta').click();
            document.getElementById('botonCerrarModal').click();
        }


    }
    const notify = () => {
        toast.info('Faltan datos para realizar la transaccion', {
            toastId: customId,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        });

    }

    function ModalConfirm(valor) {

        const handleClose = () => setShow(false);
        const handleShow = () => {
            if ((tipoTransaccion !== "") && (codigoPro !== "") && (valor !== "") && (cantidad !== "") && (descripcion !== "")) {
                setShow(true);
            } else {

                notify();

            }
        }


        return (

            <>  <ToastContainer></ToastContainer>
                <button id="botonReiniciarConsulta" type="button" className='d-none' onClick={props.action}></button>
                <div className="row m-0 mt-3 justify-content-end">
                    <div class="container">
                        <div class="row align-items-start">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button id="sidebarCollapseCerrar" type="button" class="btn btn-success">Cerrar</button>
                                <button type="button" class="btn btn-primary" onClick={handleShow}>Realizar transacción</button>
                            </div>

                        </div>
                    </div>



                </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <form onSubmit={registroTransaccion}>
                        <Modal.Header closeButton>
                            <Modal.Title>Desea realizar la siguiente transaccion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Esta seguro de realizar la transaccion
                        </Modal.Body>
                        <Modal.Footer>
                            <Button id="botonCerrarModal" variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <button onClick={registroTransaccion} type="submit" class="btn btn-primary" >
                                Realizar
                            </button>
                        </Modal.Footer>
                    </form>
                </Modal>

            </>
        );
    }





    return (
        <div className=" mt-1 p-0 col-sm border-5" id="tranparenteTrnasaccion">

            <table className="table table-bordered m-0 col-sm" >
                <thead>
                    <tr className="col-sm">
                        <th className="text-center  bg-primary text-light" colSpan='2'> <h5>Informacion de transación</h5></th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=" text-center"><h6>Tipo Transaccion</h6>

                        </td>
                        <td className=" text-center">
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" value="entrada" onClick={e => { setTipoTransaccion(e.target.value) }} />
                                <label className="btn btn-outline-primary" htmlFor="btnradio1" >Entrada</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" value="salida" onClick={e => { setTipoTransaccion(e.target.value) }} />
                                <label className="btn btn-outline-primary" htmlFor="btnradio2">Salida</label>


                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className=" text-center"><h6>Codigo Producto</h6>

                        </td>
                        <td className=" text-center" >
                        <input onChange={e => { setCodigoPro(e.target.value) }} list="brow"className="form-control mx-auto divsInventario" id="CantidadInvetario"  />
                            <datalist id="brow"  >
                                 
                               <SelectProducts ></SelectProducts>
                            </datalist >
                           

                        </td>
                    </tr>
                    <tr>
                        <td className=" text-center"><h6>Valor Unitario</h6></td>
                        <td className=" text-center">
                            <input type="number" className="form-control mx-auto divsInventario" step="0.01" id="ValorUnitarioInventario" onChange={e => { setValor(e.target.value) }} />
                        </td>
                    </tr>
                    <tr>
                        <td className=" text-center"><h6>Cantidad</h6></td>
                        <td className=" text-center">
                            <input type="number" className="form-control mx-auto divsInventario" id="CantidadInvetario" onChange={e => { setCantidad(e.target.value) }} />
                        </td>

                    </tr>

                    <tr>
                        <td className=" text-center"><h6>Descripción</h6></td>
                        <td className=" text-center">


                            <input type="text" className="form-control mx-auto divsInventario" id="DescripcionInventario" onChange={e => { setDescripcion(e.target.value) }} />
                        </td>

                    </tr>

                </tbody>
            </table>



            <ModalConfirm />

        </div>
    )
}
