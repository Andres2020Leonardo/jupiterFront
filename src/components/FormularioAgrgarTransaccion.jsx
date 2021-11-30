import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import axios from 'axios';
export default function FormularioAgrgarTransaccion() {
    const [show, setShow] = useState(false);
    
    const [tipoTransaccion, setTipoTransaccion] = useState('');
    const [codigoPro, setCodigoPro]= useState('');
    const [valor,setValor]=useState('');
    const [cantidad, setCantidad]= useState('');
    const [descripcion , setDescripcion]=useState('');
    const transaccion = [tipoTransaccion,codigoPro,valor,cantidad,descripcion]
    const eventoDef = async (e) => {
        e.preventDefault();
        const res = await axios.post('https://backend-jupiter-sena.herokuapp.com/products/',transaccion);
        const result = (res.data);
        
        

    }
    function ModalConfirm() {
        
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        

        return (

            <>
                <div className="row m-0 mt-3 justify-content-end">
                    <div className="col-5 p-0">
                        <div className="row m-0">
                            <Button variant="primary" onClick={handleShow}>
                                Realizar transacción
                            </Button>

                        </div>
                    </div>
                </div>
                
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <form onSubmit={eventoDef}>
                        <Modal.Header closeButton>
                            <Modal.Title>Desea realizar la siguiente transaccion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            I will not close if you click outside me. Don't even try to press
                            escape key.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <button type="submit" class="btn btn-primary" >
                                Realizar
                            </button>
                        </Modal.Footer>
                        </form>
                    </Modal>
                
            </>
        );
    }



    
    
    return (
        <div className="m-0 mt-3 p-0 col-sm">

            <table className="table table-bordered m-0 col-sm">
                <thead>
                    <tr className="col-sm">
                        <th className="text-center  bg-primary text-light" colSpan='2'> <h5>Informacion de transación</h5></th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=" text-center"><h6>Tipo Transaccion</h6></td>
                        <td className=" text-center">
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" value="entrada" onClick={e=>{setTipoTransaccion(e.target.value)}} />
                                <label className="btn btn-outline-primary" htmlFor="btnradio1" >Entrada</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" value="salida" onClick={e=>{setTipoTransaccion(e.target.value)}}/>
                                <label className="btn btn-outline-primary" htmlFor="btnradio2">Salida</label>


                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className=" text-center"><h6>Codigo Producto</h6></td>
                        <td className=" text-center">

                            <input type="number" className="form-control mx-auto divsInventario" id="codigoProductoInventario"  onChange={e=>{setCodigoPro(e.target.value)}} />

                        </td>
                    </tr>
                    <tr>
                        <td className=" text-center"><h6>Valor Unitario</h6></td>
                        <td className=" text-center">
                            <input type="number" className="form-control mx-auto divsInventario" step="0.01" id="ValorUnitarioInventario" onChange={e=>{setValor(e.target.value)}} />
                        </td>
                    </tr>
                    <tr>
                        <td className=" text-center"><h6>Cantidad</h6></td>
                        <td className=" text-center">
                            <input type="number" className="form-control mx-auto divsInventario" id="CantidadInvetario" onChange={e=>{setCantidad(e.target.value)}}/>
                        </td>

                    </tr>

                    <tr>
                        <td className=" text-center"><h6>Descripción</h6></td>
                        <td className=" text-center">
                            <input type="text" className="form-control mx-auto divsInventario" id="DescripcionInventario" onChange={e=>{setDescripcion(e.target.value)}} />
                        </td>

                    </tr>

                </tbody>
            </table>



            <ModalConfirm />

        </div>
    )
}
