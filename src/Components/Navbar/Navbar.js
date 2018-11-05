import React, { Component } from 'react';

class Navbar extends Component{
 render (){
     return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#inicio"><img src="/images/logomini.png" ></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#productos">PRODUCTOS </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#nosotros">NOSOTROS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#quehacemos">QUE HACEMOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#mapa">CONTACTO</a>
                    </li>
                    </ul>
                    <div className="d-none d-sm-block">
                    <ul className="navbar-nav only">
                    <li >
                        <a className="cotiza-hoy" href="#">COTIZA HOY</a>
                    </li>
                    </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
     )
   }
}

export default Navbar;
