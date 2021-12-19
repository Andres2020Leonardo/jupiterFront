import React, { useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import './Login.css'
import { Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export default function FormularioLogin() {

    const [cookies, setCookie] = useCookies(['login']);

    let [ubiViewVali , setUbiValiView] = useState(false);
    const passOptions= async () =>{
       setUbiValiView(!ubiViewVali);
    }
    
    const [documento, setDocumento] = useState('');
    const [password, setPassword] = useState('');

    

    const loginform = async (e) => {
        e.preventDefault();
       try {
     

        const login = { documento, password };
       
        const res = await axios.post('http://localhost:1075/login/', login);
        const result = (res.data);
        
        let user = result.user;
        
        if (result.val) {
            
            
            setCookie('nombres', user.nombres, { path: '/' });
            setCookie('docu', user.documento, { path: '/' });
            setCookie('rol', user.idRol, { path: '/' });
            setCookie('estado', user.estado, { path: '/' });
            setCookie('pass', user.password, { path: '/' });
            setCookie('vali', true, { path: '/' });
            document.getElementById('loginTerminado').click();
            
        } else {
            
            toast.warn('Documento y/o contraseña incorrento/s', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
           
             
            setCookie('nombres', "", { path: '/' });
            setCookie('docu', "", { path: '/' });
            setCookie('rol', "", { path: '/' });
            setCookie('estado', "", { path: '/' });
            setCookie('pass', "", { path: '/' });
            setCookie('vali', "", { path: '/' });
            
        }
       } catch (error) {
        toast.error('Error en la api', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
       }

    }
  
   
   
    const styleBoton = {
        background: 'rgba(16, 190, 54, 1)',
        color: 'white',

    };
    return (
        <>
     <ToastContainer></ToastContainer>
        <div className="container col-sm-3 m-x-auto styleApp  position-fixed top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded"  >
        
            <form onSubmit={loginform}>
                <div className="mb-3 ">
                    <label className="form-label col-sm "><h4 className="col-sm">Documento</h4></label>
                    <input type="number" className="form-control col-sm border border-primary" id="LoginDocumento" required onChange={e => setDocumento(e.target.value)} />

                </div>
                <label className="form-label col-sm"><h4 className="col-sm">Password</h4></label>
                <div className="mb-3 input-group">
                    
                    <input autoComplete="" type={!ubiViewVali ? "password" : "text"} className="form-control border-end-0 border border-primary" id="LoginPassword" required onChange={e => setPassword(e.target.value)} />
                
                
                <button onClick={passOptions} className="btn btn-outline-secondary border-start-0 border bg-light border-primary rounded-end" type="button" id="button-addon2">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={ubiViewVali ? " text-primary bi bi-eye-fill" : "d-none"} viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={!ubiViewVali ? "text-primary bi bi-eye-slash-fill" : "d-none"} viewBox="0 0 16 16">
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                </button>
                </div>
                
                <button type="submit" className="btn  mt-3 w-50 w-sm-75" style={styleBoton}><h5 className="col-sm">Login</h5></button>
            </form>
            <Link to='/' id='loginTerminado'></Link>
        </div>
        </>
        
    )


}
