import React from 'react'
import productos from "./productos.json"

//-----------------ESTILOS----------------
import "./Productos.css"

const CardProduct = ({producto}) => {
  return (
    
      <div >
        <div className='img-prod'>{producto.img} </div>        
        <p className='bold'> {producto.producto} </p>
        <p > {producto.descripcion} </p >
        <p className='bold'> $ {producto.precio} </p>
        <button className='button-add'> AGREGAR EL CARRITO </button>
    </div>  
   
  )
}

export default CardProduct