import React, {Component} from 'react';

class Productos extends Component{
    render(){
        return(
            <div id="productos">
               <div className="container">
                    <div className="row product left">
                        <div className="col-md-6">
                            <h2>Transformadores
                                de instrumento tipo poste
                            </h2>
                            <p>Transformadores integrados de Medición
                                para diferentes niveles en media tensión.

                            </p>
                            <p>En rangos de corriente homologados por 
                                CFE - LAPEM tipo KM17, KM24, KM36, 
                                entre otros.
                            </p>
                            <a href="#" className="btn btn-default btn-cotiza">COTIZA HOY</a>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/producto1.png"  className="img-fluid"/>
                        </div>
                    </div>

                    <div className="row product right">
                        <div className="col-md-6">
                        <img src="/images/producto2.png"  className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <h2>Transformadores
                                de tipo pedestal
                            </h2>
                            <p>Transformadores para medición subterráneo o
                                pedestal en media tensión.

                            </p>
                            <p>Con rangos homologados por CFE - LAPEM o de fabricación 
                                especial tipo MI17, MI24, entre otros.
                            </p>
                            <a href="#" className="btn btn-default btn-cotiza">COTIZA HOY</a>
                        </div>
                    </div>


                    <div className="row product left">
                        <div className="col-md-6">
                            <h2>Transformadores de instrumento
                                de alta tensión </h2>
                            <p>Transformadores de Potencial y Transformadores
                                de corriente para medición en alta tensión.
                            </p>
                            <p>Homologados por CFE y de fabricación especial a
                                las necesidades del proyecto. Tipo UTE123, UTE145, 
                                UTF245, UTP245, CA123, CA245, entre otros.
                            </p>
                            <a href="#" className="btn btn-default btn-cotiza">COTIZA HOY</a>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/producto3.png"  className="img-fluid"/>
                        </div>
                    </div>


                    <div className="row product right">
                        <div className="col-md-6">
                            <img src="/images/producto4.png"  className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <h2>Transformadores de 
                                instrumento para baja tensión </h2>
                            <p>Transformadores de corriente tipo dona para baja tensión en rangos
                                homologados por CFE - LAPEM.
                            </p>
                           
                            <a href="#" className="btn btn-default btn-cotiza">COTIZA HOY</a>
                        </div>
                    </div>


                    <div className="row product left">
                        <div className="col-md-6">
                            <h2>Watthorímetros</h2>
                            <p>Medidores residenciales, comerciales e indsutriales
                                tipo bidireccional con capacidad de telemedición.
                            </p>
                            <p>Homologados por CFE o para medición interna en las formas
                                9S, 12S, 16S, entre otros.
                            </p>
                            <a href="#" className="btn btn-default btn-cotiza">COTIZA HOY</a>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/producto5.png"  className="img-fluid"/>
                        </div>
                    </div>


                    <div className="row product right">
                        <div className="col-md-6">
                            <img src="/images/producto6.png"  className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <h2>Calidad de energía</h2>
                            <p>Dimensionamiento y suministro de filtros de armónicas y bancos de capacitores
                                para control de factor de potencia y mejora en la calidad de
                                energía apegados al código de red de CFE.
                            </p>
                            <p>Estudios y análisis de calidad en el suministro eléctrico
                            </p>
                            <a href="#" className="btn btn-default btn-cotiza">COTIZA HOY</a>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Productos;