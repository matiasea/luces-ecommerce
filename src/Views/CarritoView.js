//-----------CONTEXT------------------
import React, { useContext } from 'react';
import { CarritoContext } from "../CarritoContext/CarritoContext"
import ItemsCart from '../CarritoContext/itemsCart';

//--------------ESTILOS------------------
import "./View.css"

//---------ROUTES---------------
import { Link } from 'react-router-dom'

const CarritoView = () => {
  const { carrito, limpiarCarrito, totalProducto } = useContext(CarritoContext);
  if (carrito.length === 0) {
    return (
      <div>
      <div className='div-carrito '>
        <h3>Tu carrito está vacio</h3>
      </div>
      <div className='div-carrito '>
        <Link to="/"><h5>Ir a comprar</h5></Link>
      </div>
      </div>
    )
  }

  return (
    <div>
    <div className='div-carrito'>
      <div className='celda'>Imagen</div>
      <div className='celda'>Descripcion</div>
      <div className='celda'>Cantidad</div>
      <div className='celda'>Precio</div>
      <div className='celda'>  </div>
    </div>
    <ItemsCart />
    
    <div className='div-carrito'>
      <button onClick={limpiarCarrito}> Vaciar carrito</button>
      <button> Terminar compra</button>
      <h2> $ {totalProducto(carrito)} </h2>

    </div>    
        
       
    </div>
  )
}

export default CarritoView