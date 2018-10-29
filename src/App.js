import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Contenido/Home';
import Quehacemos from './Components/Contenido/Quehacemos';
import Productos from './Components/Contenido/Productos';
import Servicios from './Components/Contenido/Servicios';
import Contactos from './Components/Contenido/Contactos';


class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Quehacemos></Quehacemos>
      <Servicios></Servicios>
      <Productos></Productos> 
      <Contactos></Contactos>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
