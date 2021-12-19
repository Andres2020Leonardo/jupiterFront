import axios from 'axios';
import React, { Component } from 'react';

class Producto extends Component {
    constructor(props) {
        super(props);
        this.paginacionMas = this.paginacionMas.bind(this);
        this.paginacionMenos = this.paginacionMenos.bind(this);
    }

    
    state = {
        productos: [],
        saldos:[],
        vali: false,
        limites: [0, 10],
        limiteSuperior: [0],
        validarLimita: false,
        saldo:0,
    }

    paginacionMas() {
        const limite1 = this.state.limites[0];
        const limite2 = this.state.limites[1];
        let limites = []
        if (this.state.limites.length === 0) {
            limites = [(0), (limite2 + 10)]
        } else {
            limites = [(limite1 + 10), (limite2 + 10)]
        }
        this.setState({ limites })
        
        console.log(this.state.limites[0]+"<"+this.state.limiteSuperior+"<"+this.state.limites[1])
        console.log(this.state.validarLimita)
    }
    paginacionMenos() {
        const limite1 = this.state.limites[0];
        const limite2 = this.state.limites[1];
        let limites = []
        if (this.state.limites[0] < 10) {
            limites = [(0), (10)]
        } else {
            limites = [(limite1 - 10), (limite2 - 10)]
        }
        this.setState({ limites })
    }

    componentDidMount() {
  
    
        const limites = this.state.limites;
        const inicial = limites[0];
        const final = limites[1];
             axios.get("http://localhost:1075/products/count/",)
            .then(res => {

                const usuarios = res.data;
                const count = [usuarios]
                const limiteSuperior = [count[0]][0].length;
                this.setState({ limiteSuperior })

            })
            axios.get("http://localhost:1075/products/?inicial=" + inicial + "")
            .then(res => {
                const productos = res.data;
                this.setState({ productos });
            })
            axios.get("http://localhost:1075/products/?inicial=" + inicial + "")
            .then(res => {
                const productos = res.data;
                this.setState({ productos });
            })
            
            
    }
    componentDidUpdate(prevProps, prevState){
        
        if(prevState.limites !== this.state.limites || prevProps.reset !== this.props.reset ){
        const limites = this.state.limites;
        const inicial = limites[0];
        const final = limites[1];
        axios.get("http://localhost:1075/products/count/",)
            .then(res => {

                const usuarios = res.data;
                const count = [usuarios]
                const limiteSuperior = [count[0]][0].length;
                this.setState({ limiteSuperior })

            })
            axios.get("http://localhost:1075/products/?inicial=" + inicial + "")
            .then(res => {
                const productos = res.data;
                this.setState({ productos });
            })
            
        }
    }

    handler() {
        if(this.state.reset = 0){
            this.setState({
                reset: 1
            });
        }else{
            this.setState({
                reset: 0
            });
        }
        
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
                                <td></td>
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
                    <thead className="bg-warning bg-opacity-75 text-light rounded">
                        <tr className="text-center rounded">
                            <th className="py-2">N°</th>
                            <th className="py-2">CODIGO</th>
                            <th className="py-2">NOMBRE</th>
                            <th className="py-2">DESCRIPCION</th>
                            <th className="py-2">SALDO</th>
                            <th className="py-2">OP.</th>
                        </tr>
                    </thead>


                    {this.renderProductos()}


                </table>
                <div className="btn-group end-0" role="group" aria-label="Basic example">
                    <button onClick={this.paginacionMenos}  type="button" className={(this.state.limites.length <= 0) || (this.state.limites[0] < 10) ? "d-none" : "btn btn-primary"}>Anterior</button>
                  
                    <button onClick={this.paginacionMas} type="button" className={!(this.state.limites[0] <= (this.state.limiteSuperior - 10))  ? "d-none" : "btn btn-primary"}>Siguente</button>
                </div>
            </div>

        );
    }
}

export default Producto;
