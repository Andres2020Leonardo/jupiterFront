import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import $ from "jquery";
function InfoFactura() {
    $(function () {
        // Sidebar toggle behavior

        $('#sidebarCollapseCerrarX').on('click', function () {
            $('#sidebar, #content').toggleClass('active');
            $("#sidebarCollapseCerrarX").blur(); 
        });

       

    });
    const fechaActual = new Date();
    return (
        <>
            <div className="row m-0">
                <div className="col-12 p-0 row">
                    <h3 className="text-start text-success col-10">Transacciones</h3>
                    <button id="sidebarCollapseCerrarX" className=" text-end col bg-transparent border-0 bg-none " type="button" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-left text-success" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                    </svg></button>
                </div>

            </div>
            <div className="row m-0 mt-2 justify-content-center col-sm">
                <div className="col-4 m-0 p-0">
                    <table className="table table-bordered m-0">
                        <thead>
                            <tr className="text-center">
                                <th className="p-1 bg-primary text-light">DIA</th>
                                <th className="p-1 bg-primary text-light">MES</th>
                                <th className="p-1 bg-primary text-light">AÑO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center p-1 ">{fechaActual.getDate()}</td>
                                <td className="text-center p-1">{fechaActual.getMonth() + 1}</td>
                                <td className="text-center p-1">{fechaActual.getFullYear()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col ms-3 p-0">
                    <div className="row m-0">

                        <div className="col m-0 ms-3 border p-2">
                            <h3 className="text-danger text-center m-0">N° 0123</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InfoFactura
