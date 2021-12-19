import axios from 'axios';
import React, { Component } from 'react';

class SelectProducts extends Component {
    constructor(props) {
        super(props);


    }
    state = {
        selects: []
    }
    componentDidMount() {
        axios.get("http://localhost:1075/products/count/",)
            .then(res => {

                const usuarios = res.data;
                const count = [usuarios]
                const selects = count[0];
                this.setState({ selects })
                console.log(this.state.selects)
            })
    }
    render() {
        return (
            <>
               
                    {this.state.selects.map(selects =>{
                        return <option key={selects.idProdcuto} value={selects.idProdcuto}>{selects.idProdcuto}-{selects.nombre}</option>
                    })}
                  
    
            </>
        );
    }
}

export default SelectProducts;