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
                        <div className="col-md-4">
                            <img src="/images/logo1.png" className="img-fluid"/>
                        </div>
                        <div className="col-md-4">
                            <img src="/images/logo2.png" className="img-fluid"/>
                        </div>
                        <div className="col-md-4">
                            <img src="/images/logo3.png" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>

            <div id="mapa">
                <div className="container">
                    <div className="row map row justify-content-md-center">
                        <div className="col-md-4 lienzo">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Contactos;