import React from 'react'
//--------------ESTILOS------------------
import "./View.css"

const CarritoView = () => {
  return (
    <div className='div-carrito'>
      <div className='celda'>Imagen</div>
      <div className='celda'>Descripcion</div>
      <div className='celda'>Cantidad</div>
      <div className='celda'>Precio</div>
      <div className='celda'>  </div>
    </div>
  )
}

export default CarritoView