import React,{Component} from 'react';
import './footer.css';
class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="page-footer font-small  pt-4">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row justify-content-center">
                                
                               
                                <div className="col-md-5 mb-md-0 mb-5 text-center">
                                        <a href="#" className="linked"><i className="fab fa-linkedin-in"></i></a>

                                        <ul className="ft-link">
                                            <li><a href="#productos" >Productos</a></li>
                                            <li><a href="#nosotros" >Nosotros</a></li>
                                            <li><a href="#que-hacemos" >Que hacemos</a></li>
                                            <li><a href="#contactos" >Contactos</a></li>
                                        </ul>
                                </div>
                                
                        </div>
                    </div>      
                    <div className="footer-copyright text-center py-3">
                    Copyright © 2018. SIMSA All rights reserved<br/>
                    Design by: COBO’S
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;