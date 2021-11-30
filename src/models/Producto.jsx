import axios from 'axios';
import React, { Component } from 'react';

class Producto extends Component {
    state = {
        productos: []
    }

    componentDidMount() {
        axios.get('https://backend-jupiter-sena.herokuapp.com/products/')
            .then(res => {
                const productos = res.data;
                this.setState({ productos });
            })
    }

    renderProductos() {
      

        var cont = 0;
        return (
            <tbody id="contentUsuario" className="text-center" >
                {this.state.productos.map((producto) => {
                    cont = cont + 1;
                    return <tr key={producto.idProdcuto}> 
                                <td>{cont}</td>
                                <td>{producto.idProdcuto}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>
                                    <button value={producto.idProdcuto} className="btn btn-info py-0 px-2" ><b>i</b></button>
                                    <button value={producto.idProdcuto} className="btn btn-danger py-0 px-2"  > <b>X</b> </button>
                                </td>
                            </tr>
                })}

            </tbody>

        );




    }


    render() {


        return (

            <div className="tab-pane fade p-3" id="contact" role="tabpanel" aria-labelledby="tab-pro">

                <table className="table table-bordered table-sm rounded">
                    <thead className="bg-secondary text-light rounded">
                        <tr className="text-center rounded">
                            <th className="py-2">N°</th>
                            <th className="py-2">CODIGO</th>
                            <th className="py-2">NOMBRE</th>
                            <th className="py-2">DESCRIPCION</th>
                            <th className="py-2">OP.</th>
                        </tr>
                    </thead>


                    {this.renderProductos()}


                </table>
                <div className="row justify-content-end m-0">
                    <button className="btn btn-secondary col-2"><b>AGREGAR</b></button>
                </div>

            </div>

        );
    }
}

export default Producto;
