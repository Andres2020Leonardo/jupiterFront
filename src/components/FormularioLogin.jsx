import React, { useState } from 'react'
import axios from 'axios'
export default function FormularioLogin() {
    const [documento, setDocumento] = useState('');
    const [password, setPassword]= useState('');
    const loginform= async(e)=>{
        e.preventDefault();
        alert('si');
        const login = {documento,password};
        const res = await axios.post('https://backend-jupiter-sena.herokuapp.com/api/',login);
    }
   return (
    <div className="container col-3  position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded"  >
            <form onSubmit={loginform}>
                <div className="mb-3">
                    <label for="LoginDocumento" className="form-label"><h4>Documento</h4></label>
                    <input type="number" className="form-control" id="LoginDocumento" required onChange={e=>setDocumento(e.target.value)}/>
                   
                </div>
                <div NameName="mb-3">
                    <label for="LoginPassword" className="form-label"><h4>Password</h4></label>
                    <input type="password" className="form-control" id="LoginPassword" required onChange={e=>setPassword(e.target.value)}/>
                </div>
                
                <button type="submit" className="btn btn-primary mt-3 w-50"><h5>Login</h5></button>
            </form>
       
    </div>
  )
}
