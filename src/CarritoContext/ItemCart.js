import React, {useContext} from 'react'
import { CarritoContext } from './CarritoContext'

//---------------ESTILOS------------------
import "./carrito.css"

const ItemCart = ({ itemCarrito }) => {
    const { eliminarDelCarrito, contador, masUnProducto, menosUnProducto,  } = useContext(CarritoContext)

  return (
        <div className='div-items'>
        <div className='celda-items'>{itemCarrito.img} </div>        
        <div className='celda-items'> {itemCarrito.producto} </div>
        <div className='celda-items' > <button 
          onClick={masUnProducto}
          >+</button>
          {contador} <button onClick={menosUnProducto}
          >-</button>
        </div >
        <div className='celda-items'> $ {itemCarrito.precio * contador} </div>
        <button className='celda-items' onClick={() => eliminarDelCarrito(itemCarrito.id)}> X </button>
        </div>
        
        )
}

export default ItemCart