import React, {Component} from 'react';

class Servicios extends Component
{
    render(){
        return(
            <div id="servicios">
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-left">
                            <h1>Nuestro servicios</h1>
                            <h2>Medición de energía Eléctrica</h2>
                        </div>
                        <div className="col-md-6 text-left">
                            <p>Ofrecemos a nuestro clientes soluciones en 
                                medición de energía para el área residencial,
                                comerial e industrial. Así como el diseño de redes de 
                                telemedición distribuidas.
                            </p>
                            <p>Asesorando al cliente y gestionando ante las dependencias suminstradoras 
                                de energía para facilitar la contratación y alimentación.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li>
                                    <img src="/images/icono4.png"/>
                                    <span>Residencial</span>
                                </li>
                                <li>
                                    <img src="/images/icono5.png"/>
                                    <span>Comercial</span>
                                </li>
                                <li>
                                    <img src="/images/icono6.png"/>
                                    <span>Industrial</span>
                                </li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Servicios;