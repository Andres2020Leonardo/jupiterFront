import React from 'react'
import { useState } from 'react';
import { lazy, Suspense } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';

import './App.css';
const App = lazy(() => import('./App'));
export default function Preload() {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <>
            <Suspense fallback={
                <div className='  position-absolute top-50 start-50 translate-middle bg-light col-sm-12 h-100 '>
                    <div className='position-absolute top-50 start-50 row text-center'>
                   
                        <Spinner className="mx-auto" animation="border" role="status" variant="primary" size='small'>
                        
                        </Spinner>
                        <span className="mx-auto">Cargando...</span>
                    </div>
                </div>




            }>
                <App></App>
            </Suspense>

        </>
    )
}

