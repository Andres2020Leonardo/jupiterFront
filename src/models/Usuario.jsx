import axios from 'axios';
import React, { Component } from 'react';
class Usuario extends Component {


    constructor(props) {
        super(props);
        this.paginacionMas = this.paginacionMas.bind(this);
        this.paginacionMenos = this.paginacionMenos.bind(this);
    }

    

    state = {
        usuarios: [],
        vali: false,
        limites: [0, 10],
        limiteSuperior: [0],
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
        axios.get("http://localhost:1075/usuario/count/",)
            .then(res => {

                const transacciones = res.data;
                const count = [transacciones]
                const limiteSuperior = [count[0]][0].length;
                this.setState({ limiteSuperior })

            })
        axios.get("http://localhost:1075/usuario/?inicial=" + inicial + "")
            .then(res => {
                const usuarios = res.data;
                this.setState({ usuarios });
            })
    }
    componentDidUpdate(prevProps, prevState){
        
        if(prevState.limites !== this.state.limites || prevProps.reset !== this.props.reset){
        const limites = this.state.limites;
        const inicial = limites[0];
        const final = limites[1];
        axios.get("http://localhost:1075/usuario/count/",)
            .then(res => {

                const transacciones = res.data;
                const count = [transacciones]
                const limiteSuperior = [count[0]][0].length;
                this.setState({ limiteSuperior })

            })
        axios.get("http://localhost:1075/usuario/?inicial=" + inicial + "")
            .then(res => {
                const usuarios = res.data;
                this.setState({ usuarios });
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

    render() {
        var cont = 0;
        return (
            
            <div className="tab-pane fade show active p-3" id="home" role="tabpanel" aria-labelledby="tab-user">
                <table className="table table-bordered table-sm rounded">
                    <thead className="bg-primary text-light">
                        <tr className="text-center">
                            <th className="py-2">N°</th>
                            <th className="py-2">DOCUMENTO</th>
                            <th className="py-2">NOMBRES</th>
                            <th className="py-2">Rol</th>
                            <th className="py-2">Descripcion</th>
                            <th className="py-2">Estado</th>
                            <th className="py-2">OP.</th>
                        </tr>
                    </thead>
                    <tbody id="contentUsuarios" className="text-center" >
                {this.state.usuarios.map((usuario) => {
                    cont = cont + 1;
                    return <tr key={usuario.documento}>
                        <td>{cont}</td>
                        <td>{usuario.documento}</td>
                        <td>{usuario.nombres}</td>
                        <td>{usuario.idRol}</td>
                        <td>{usuario.descripcion}</td>
                        <td>{usuario.estado === 'true' ? 'Activo' : 'Inactivo'}</td>

                        <td>
                            <button value={usuario.documento} className="btn btn-info py-0 px-2" ><b>i</b></button>
                            <button value={usuario.documento} className="btn btn-danger py-0 px-2"  > <b>X</b> </button>
                        </td>
                    </tr>
                })}
           
            </tbody>
                </table>
                <div className="btn-group end-0" role="group" aria-label="Basic example">
                        <button onClick={this.paginacionMenos} type="button" className={(this.state.limites.length <= 0) || (this.state.limites[0] < 10) ? "d-none" : "btn btn-primary"}>Anterior</button>

                        <button onClick={this.paginacionMas} type="button" className={!(this.state.limites[0] <= (this.state.limiteSuperior - 10)) ? "d-none" : "btn btn-primary"}>Siguente</button>
                    </div>
                <div className="row justify-content-end m-0">
                    
                 
                </div>

            </div>
        );
    }
}

export default Usuario;