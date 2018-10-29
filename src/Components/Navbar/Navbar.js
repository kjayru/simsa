import React, { Component } from 'react';

class Navbar extends Component{
 render (){
     return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src="/images/logomini.png" ></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">PRODUCTOS </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">NOSOTROS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">QUE HACEMOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACTO</a>
                    </li>
                
                    <li className="nav-item">
                        <a className="nav-link " href="#">COTIZA HOY</a>
                    </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
     )
   }
}

export default Navbar;
