import axios from 'axios';
import React, { Component } from 'react';
class Transaccion extends Component {
    constructor(props){
        super(props);
        this.paginacionMas = this.paginacionMas.bind(this);
        this.paginacionMenos = this.paginacionMenos.bind(this);
        this.renderTransacion = this.renderTransacion.bind(this);
    }

    state = {
        transacciones: [],
        vali: false,
        limites: [0,10],
        limiteSuperior: [0],
       
       
    }

    paginacionMas(){
        const limite1 = this.state.limites[0];
        const limite2 = this.state.limites[1];
        let limites = []
        if (this.state.limites.length === 0) {
            limites = [(0), (limite2 + 10)]
        } else {
            limites = [(limite1 + 10), (limite2 + 10)]
        }
        this.setState({limites})
    }
    paginacionMenos(){
        const limite1 = this.state.limites[0];
        const limite2 = this.state.limites[1];
        let limites = []
        if (this.state.limites[0] < 10) {
            limites = [(0), (10)]
        } else {
            limites = [(limite1 - 10), (limite2 - 10)]
        }
        this.setState({limites})
    }

    componentDidMount() {
   
        
        const limites = this.state.limites;
        const inicial = limites[0];
        const final = limites[1];
        axios.get("http://localhost:1075/movi/count/", )
        .then(res => {

            const transacciones = res.data;
            const count = [transacciones]
            const limiteSuperior = [count[0]][0].length;
            this.setState({limiteSuperior})
           
        })
        axios.get("http://localhost:1075/movi/?inicial="+inicial+"", )
            .then(res => {
                const transacciones = res.data;               
                this.setState({ transacciones });
            })
        const validacionUser = this.props.mostrar;
        if (validacionUser === "admin") {
            const vali = false;
            this.setState({ vali })
        }
    }

    componentDidUpdate(prevProps, prevState) {
            if(prevState.limites !== this.state.limites || prevProps.reset !== this.props.reset){
                console.log(this.state.limiteSuperior);
                const limites = this.state.limites;
                const inicial = limites[0];
                const final = limites[1];
        
                axios.get("http://localhost:1075/movi/?inicial="+inicial+"&final="+final+"", )
                    .then(res => {                        
                        const transacciones = res.data;                      
                        this.setState({ transacciones });
                    })
                
            }
        
    }


    renderTransacion() {
        var cont = 0;
        return (
            <tbody id="contenttransacciones" className="text-center"  >
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
            <div className={this.state.vali ? "tab-pane fade show active p-3" : "tab-pane fade show  p-3"} id="profile" role="tabpanel" aria-labelledby="profile-tab">

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
                    {this.renderTransacion()}
                </table>
                <div className="btn-group end-0" role="group" aria-label="Basic example">
                    <button onClick={this.paginacionMenos}  type="button" className={(this.state.limites.length <= 0) || (this.state.limites[0] < 10) ? "d-none" : "btn btn-primary"}>Anterior</button>
                  
                    <button onClick={this.paginacionMas} type="button" className={!(this.state.limites[0] <= (this.state.limiteSuperior - 10))  ? "d-none" : "btn btn-primary"}>Siguente</button>
                </div>
            </div>
        );
    }
}

export default Transaccion;
