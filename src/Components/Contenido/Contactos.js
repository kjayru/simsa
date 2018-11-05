import React, {Component} from 'react';

class Contactos extends Component{
    render(){
        return(
        <div>
            <div id="contactotitulo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titulo">
                                Trabajamos de la mano con empresas como:<br/>
                                Arteche y Tecnologías - EOS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contactologos">
                <div className="container">
                    <div className="row logos">
                        <div className="col-md-4 col">
                            <img src="/images/logo1.png" className="img-fluid"/>
                        </div>
                        <div className="col-md-4 col">
                            <img src="/images/logo2.png" className="img-fluid"/>
                        </div>
                        <div className="col-md-4 col">
                            <img src="/images/logo3.png" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>

            <div id="mapa">
                <div className="container">
                    <div className="row map row justify-content-md-center">
                        <div className="col-md-4 lienzo text-left">
                            <h2>SIMSA</h2>
                            <address>
                            <p>Olivo 1618 Col. Moderna<br/>
                            Monterrey, NL México,<br/>
                            CP 64530
                            </p>
                            <div className="telefono">
                            +52 (81) 8372 6431<br/>
                            +52 (81) 8372 6439
                            </div>
                            <a href="mailto:webmaster@example.com" className="correo-contacto"> ventas@simsa-mx.com</a>
                            </address>
                            <a className="btn btn-default btn-contacto">Contactanos</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Contactos;