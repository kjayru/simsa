import React,{Component} from 'react';

class Quehacemos extends Component{
    render(){
        return(
            <div id="quehacemos">
                <div className="container-fluid">
                  <div className="row">
                        <div className="col-md-6">
                            <div className="bloque25">
                                <p className="bq1">Liderando</p>
                                <p className="bq2"><span>el</span> Mercado</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12 text-left">
                            <h1>¿Quienes somos?</h1>
                            <h3>Servicios Integrales en Medición</h3>
                            <p>
                                Con más de 25 años de experiencia
                                industria eléctrica, nos caracterizamos por 
                                asesorar a nuestros clientes en el campo de la
                                medición de energía.
                            </p>

                            <ul>
                                <li className="li1">Liderazgo</li>
                                <li className="li2">Servicio</li>
                                <li className="li3">Transparencia</li>
                            </ul>
                            <a class="btn btn-default btn-contactos">CONTACTANOS</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quehacemos;