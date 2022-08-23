import React from 'react'
//-----------Import Imagenes
import cart from "../img/cart.jpg"
import logo from "../img/logo.png"

//----------Estilos-----------------------
import "./Navigation.css"

const Navigation = () => {
  return (
    <div>
        <ul className='item-ul'>
            <img src={logo} className='item-logo' />
            <li className='item'>LA EMPRESA</li>
            <li className='item'>¿COMO COMPRAR?</li>
            <li className='item'>CONTACTO</li>
            <li className='item'>< img src={cart} className="img-cart" /></li>
        </ul>
    </div>
  )
}

export default Navigation