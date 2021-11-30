import axios from 'axios';
import React, { Component } from 'react';

class Transaccion extends Component {
    state = {
        transacciones: []
    }

    componentDidMount() {
        axios.get('https://backend-jupiter-sena.herokuapp.com/movi/')
            .then(res => {
                const transacciones = res.data;
                this.setState({ transacciones });
            })
    }

    renderTransacion() {

        var cont = 0;
        return (
            <tbody id="contenttransacciones" className="text-center" >
                {this.state.transacciones.map((transacion) => {
                    cont = cont + 1;
                    return <tr key={transacion.idTransaccion}>
                        <td>{cont}</td>
                            <td >{transacion.idTransaccion}</td>                      
                            <td >{transacion.tipoTransaccion}</td>
                            <td >{transacion.fechaTransaccion}</td>
                            <td >{transacion.idProdcuto}</td>
                            <td >{transacion.valorUnitario} </td>
                            <td >{transacion.Cantidad}</td>
                            <td >{transacion.valorTotal} </td>
                            <td>{transacion.descripcion}</td>
                            <td >{transacion.saldo}</td>                         
                        <td>
                            <button value={transacion.idTransaccion} className="btn btn-info py-0 px-2" ><b>i</b></button>
                            
                        </td>
                    </tr>
                })}

            </tbody>

        );




    }
    render() {
        return (
            <div className="tab-pane fade p-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                <table className="table table-bordered table-sm rounded">
                    <thead className="bg-success text-light">
                        <tr className="text-center">
                            <th className="py-2">N°</th>
                            <th className="py-2">id</th>
                            <th className="py-2">TIPO</th>
                            <th className="py-2">FECHA</th>
                            <th className="py-2">PRODUCTO</th>
                            <th className="py-2">VALOR</th>
                            <th className="py-2">CANTIDAD</th>
                            <th className="py-2">TOTAL</th>
                            <th className="py-2">descripcion</th>
                            <th className="py-2">SALDO</th>
                            <th className="py-2 ">OP.</th>
                        </tr>
                    </thead>
                    {this.renderTransacion() }
                </table>
                <div className="row justify-content-end m-0">
                    <button className="btn btn-success col-2"><b>AGREGAR</b></button>
                </div>

            </div>
        );
    }
}

export default Transaccion;
