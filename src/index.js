import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';
import Signup from './components/Signup';
import FormularioLogin from './components/FormularioLogin';
import { toast, ToastContainer } from 'react-toastify';
import Preload from './Preload';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Preload />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<FormularioLogin />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
