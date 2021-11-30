import React, { useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';

export default function FormularioLogin() {

        const [cookies, setCookie] = useCookies(['login']);
    

    const [documento, setDocumento] = useState('');
    const [password, setPassword]= useState('');
    const loginform= async(e)=>{
        e.preventDefault();
        
        const login = {documento,password};
        const res = await axios.post('https://backend-jupiter-sena.herokuapp.com/login/',login);
        const result = (res.data);
        

        let user=result.user;
      
        if(result.val){
            
            setCookie('nombres', user.nombres, { path: '/' });
            setCookie('docu', user.documento, { path: '/' });
            setCookie('rol', user.idRol, { path: '/' });
            setCookie('estado', user.estado, { path: '/' });            
            setCookie('pass', user.password, { path: '/' });
            setCookie('vali', true, { path: '/' });
            window.location.replace('');
        }else{
            setCookie('nombres', "", { path: '/' });
            setCookie('docu', "", { path: '/' });
            setCookie('rol', "", { path: '/' });
            setCookie('estado', "", { path: '/' });            
            setCookie('pass', "", { path: '/' });
            setCookie('vali', "", { path: '/' });
        }

    }
    if(cookies){
        
    }
        const styleBoton = {
            background: 'rgba(16, 190, 54, 1)',
            color: 'white',
          
        };
        return (
            <div className="container col-sm-3 m-x-auto   position-fixed top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded"  >
                    <form onSubmit={loginform}>
                        <div className="mb-3">
                            <label className="form-label col-sm"><h4 className="col-sm">Documento</h4></label>
                            <input type="number" className="form-control col-sm" id="LoginDocumento" required onChange={e=>setDocumento(e.target.value)}/>
                           
                        </div>
                        <div className="mb-3">
                            <label  className="form-label col-sm"><h4 className="col-sm">Password</h4></label>
                            <input type="password" className="form-control" id="LoginPassword" required onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        
                        <button type="submit" className="btn  mt-3 w-50 w-sm-75" style={styleBoton}><h5 className="col-sm">Login</h5></button>
                    </form>
               
            </div>
          )
   
   
}
