import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
  const [validacionCreate, setValidacionCreate] = useState(false);
  const [documento, setDocumento] = useState('');
  const [nombres, setNombres] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const inputPass = useRef();
  const inputPassRepeat = useRef();

  const formSignup = async (e) => {
    e.preventDefault();
    const registro = { documento, nombres, descripcion, password };
    const res = await axios.post("http://localhost:1075/usuario", registro);
    const result = (res.data);
    if (result.vali) {
      setValidacionCreate(true)
    }

  }

  let [ubiViewVali, setUbiValiView] = useState(false);
  let [ubiViewValiRepeat, setUbiViewValiRepeat] = useState(false);
  const passOptions = async () => {
    setUbiValiView(!ubiViewVali);
  }
  let [passVali, setPassVali] = useState(false);
  const passIguales = async () => {
    if (password.toLowerCase() === passwordRepeat.toLowerCase()) {
      setPassVali(false);
    } else {
      setPassVali(true);
    }

  }
  function passOptionsRepeat() {
    setUbiViewValiRepeat(!ubiViewValiRepeat);
  }

  const styleBoton = {
    background: 'rgba(16, 190, 54, 1)',
    color: 'white',

  };
  
  
  return (
    <div className="container col-sm-3 col-md-6 m-x-auto styleApp  position-fixed top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded"  >
      <form className={!validacionCreate ? "" : ""} onSubmit={formSignup}>
        <div className='mb-4'>
          <h2>Registrar usuario</h2>
        </div>
        <div className="mb-4 input-group">
          <span className="input-group-text bg-primary text-light border border-primary col-sm input-group-text  ">Documento</span>
          <input type="number" className="form-control col-sm" id="SignupDocumento" required onChange={e => setDocumento(e.target.value)} />

        </div>
        <div className="mb-4 input-group">
          <span className="input-group-text bg-primary text-light border border-primary col-sm input-group-text ">Nombres</span>
          <input type="text" className="form-control col-sm" id="SignupNombres" required onChange={e => setNombres(e.target.value)} />

        </div>
        <div className="mb-4 input-group">
          <span className="input-group-text bg-primary text-light border border-primary col-sm input-group-text ">Descripcion</span>
          <input type="text" className="form-control col-sm" id="SignupDescripcion" required onChange={e => setDescripcion(e.target.value)} />

        </div>
        <div className="input-group mb-4 ">
          <span className="input-group-text bg-primary text-light border border-primary">Password</span>

          <input autoComplete='' ref={inputPass} type={!ubiViewVali ? "password" : "text"} className={!passVali ? "form-control col-sm border-end-0 border border-primary" : "form-control col-sm border-end-0 border border-danger"} id="SignupPass" required onChange={e => setPassword(e.target.value)} placeholder='Password' />
          <button onClick={passOptions} className="btn btn-outline-secondary border-start-0 border bg-light border-primary rounded-end" type="button" >

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={ubiViewVali ? " text-primary bi bi-eye-fill" : "d-none"} viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={!ubiViewVali ? "text-primary bi bi-eye-slash-fill" : "d-none"} viewBox="0 0 16 16">
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
            </svg>
          </button>

          <input autoComplete='' ref={inputPassRepeat} type={!ubiViewValiRepeat ? "password" : "text"} className={!passVali ? "form-control col-sm border-end-0 border border-primary" : "form-control col-sm border-end-0 border border-danger"} id="SignupPassRepeat" required onChange={e => setPasswordRepeat(e.target.value)} placeholder='RepeatPassword' onBlur={passIguales} />
          <button onClick={passOptionsRepeat} className="btn btn-outline-secondary border-start-0 border bg-light border-primary rounded-end" type="button" >

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={ubiViewValiRepeat ? " text-primary bi bi-eye-fill" : "d-none"} viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={!ubiViewValiRepeat ? "text-primary bi bi-eye-slash-fill" : "d-none"} viewBox="0 0 16 16">
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
            </svg>
          </button>


        </div>
        <div className={passVali ? passVali ? "alert alert-danger" : "d-none" : "d-none"} role="alert">
          Los password no son iguales
        </div>


        <button type="submit" className="btn  mt-3 w-50 w-sm-75" style={styleBoton}><h5 className="col-sm">Login</h5></button>
      </form>
      <div>
        <div className="mb-3">
          <label htmlFor="redirecionLogin" className="form-label text-success"><h3>Usuario Ingresado correctamente</h3></label>
          
          <Link className='form-control badge bg-primary text-light' to='/login'><h4>Iniciar Sesion</h4></Link>
        </div>
      </div>
      
    </div>
  )

}




