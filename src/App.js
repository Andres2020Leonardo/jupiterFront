
import './App.css'

import Navbar from './components/Navbar';
import { useCookies } from 'react-cookie';
import Admin from './components/Admin';
import PaginaInicio from './components/PaginaInicio';
import React, { useEffect, useState, useRef } from 'react';
import User from './components/User';
import { toast, ToastContainer } from 'react-toastify';
const customId = "custom-id-yes";
function App() {
  const [loading, setLoading] = useState(false)
  const [cookies] = useCookies(['login']);
  const [estadoCookies] = useState(cookies.vali === "true");
  const [vali, setVali] = useState(false);

  const notify = () => {
    toast.success("Pagina cargada", {
      toastId: customId,
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: "🚀"
    });
    
  }

  function admin() {
    if (vali) {
      return <Admin></Admin>
    }
  }
  function user() {
    if (!vali) {
      return <User />
    }
  }
  function paginaInicio() {
    if (!estadoCookies) {
      return <PaginaInicio />
    }

  }


  function useAsync(asyncFn, onSuccess) {
    useEffect(() => {

      if (cookies.rol === "") {
        setVali(false);
        console.log(vali)

      }
      if (cookies.rol === '1') {
        setVali(true);
        console.log(vali)

      }
      if (cookies.rol === '2') {
        setVali(false);
        console.log(vali)

      }

    }, [asyncFn, onSuccess])
  }
  useAsync();

  return (

    <div className="App"  onLoad={notify}>
       
      <ToastContainer></ToastContainer>
      <Navbar>
      </Navbar>
      <div id="divContent" >
        <div>

        </div>
        {estadoCookies ? <>{vali ? <>{admin()}</> : <>{user()}</>}</> : <>{paginaInicio()}</>}
        
      </div>
    </div>
  );
}

export default App;
