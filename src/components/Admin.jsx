import './Pagina.css'
import 'bootstrap-select';
import Producto from '../models/Producto'
import Transaccion from '../models/Transaccion'
import Usuario from '../models/Usuario'
import FormularioAgregarProducto from './FormularioAgregarProducto'
import FormularioAgrgarTransaccion from './FormularioAgrgarTransaccion'
import './Inventario.css'
import $ from "jquery";
import InfoFactura from './InfoFactura'
import ListaSeleccion from './ListaSeleccion'
import React, { Component } from 'react';
class Admin extends Component {
   
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        
    }
    state = {
        reset: 0,
        vali: true,

    }
    handler() {
        const reset = this.state.reset + 1;
        this.setState({ reset })

    }
       
   componentDidMount(){
    $(function () {
        $('select').selectpicker();
    });
    $(document).ready(resaltar);
    function resaltar(jQuery) {
            
        $('#sidebar, #content').toggleClass('active');
        
    
    
    }
   }




    render() {

        return (
            <>
                <div class="vertical-nav bg-white position-fixed " id="sidebar" >
                    <div className="col rounded border p-3" id="factura">

                        <InfoFactura /> 

                        <FormularioAgrgarTransaccion action={this.handler} count={0}></FormularioAgrgarTransaccion>

                    </div>
                </div>




                <div class="page-content " id="content">





                    <div className="row m-0 pt-4 justify-content-center">

                        <div className="col ms-3 p-0 mt-sm-3">

                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <ListaSeleccion></ListaSeleccion>

                                <FormularioAgregarProducto action={this.handler} />


                            </ul>
                            <div className="tab-content borderCompleto h-95" id="myTabContent">

                                <Usuario reset={this.state.reset} />
                                <Transaccion mostrar='admin' reset={this.state.reset} vali={true} />
                                <Producto reset={this.state.reset} />
                            </div>

                        </div>
                    </div>

                </div>
            </>

        );
    }
}

export default Admin;



