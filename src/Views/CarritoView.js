//-----------CONTEXT------------------
import React, { useContext } from 'react';
import { CarritoContext } from "../CarritoContext/CarritoContext"
import ItemsCart from '../CarritoContext/itemsCart';

//--------------ESTILOS------------------
import "./View.css"

const CarritoView = () => {
  const { carrito } = useContext(CarritoContext);
  if (carrito.length === 0) {
    return (
      <div>
        <p> {carrito.length} </p>
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
    

    
      
      
    
        
       
    </div>
  )
}

export default CarritoView