import axios from 'axios';
import React, { Component } from 'react';

class Usuario extends Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        axios.get('https://backend-jupiter-sena.herokuapp.com/usuario/')
            .then(res => {
                const usuarios = res.data;
                this.setState({ usuarios });
            })
    }

    renderUsuario() {

        var cont = 0;
        return (
            <tbody id="contentUsuarios" className="text-center" >
                {this.state.usuarios.map((usuario) => {
                    cont = cont + 1;
                    return <tr key={usuario.documento}> 
                                <td>{cont}</td>
                                <td>{usuario.documento}</td>
                                <td>{usuario.nombres}</td>
                                <td>{usuario.idRol}</td>
                                <td>{usuario.descripcion}</td>                                
                                <td>{usuario.estado === 'true' ? 'Activo' : 'Inactivo' }</td>
                                
                                <td>
                                    <button value={usuario.documento} className="btn btn-info py-0 px-2" ><b>i</b></button>
                                    <button value={usuario.documento} className="btn btn-danger py-0 px-2"  > <b>X</b> </button>
                                </td>
                            </tr>
                })}

            </tbody>

        );




    }

    render() {
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
                {this.renderUsuario()}
            </table>
            <div className="row justify-content-end m-0">
                <button className="btn btn-primary col-2"><b>AGREGAR</b></button>
            </div>

        </div>
        );
    }
}

export default Usuario;