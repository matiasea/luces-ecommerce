import React from 'react'

//---------ROUTES---------------
import { Link } from 'react-router-dom'

//-----------Import Imagenes
import cart from "../img/cart.jpg"
import logo from "../img/logo.png"

//----------Estilos-----------------------
import "./Navigation.css"

const Navigation = () => {
  return (
    <div>
        <ul className='item-ul'>
            <Link to="/"><img src={logo} className='item-logo' /></Link>
            <Link to="/LaEmpresa"  className='item'>LA EMPRESA</Link>
            <Link to="/ComoComprar" className='item'> ¿COMO COMPRAR?</Link>
            <Link to="/Contacto" className='item'>CONTACTO</Link>
            <Link to="/Carrito" className='item'>< img src={cart} className="img-cart" /></Link>
        </ul>
    </div>
  )
}

export default Navigation