import React, {useContext} from 'react'
import { CarritoContext } from './CarritoContext'

//---------------ESTILOS------------------
import "./carrito.css"

const ItemCart = ({ itemCarrito }) => {
    const { eliminarDelCarrito, } = useContext(CarritoContext)

  return (
        <div className='div-items'>
        <div className='celda-items'>{itemCarrito.img} </div>        
        <div className='celda-items'> {itemCarrito.producto} </div>
        <div className='celda-items' > {itemCarrito.amount} </div >
        <div className='celda-items'> $ {itemCarrito.precio * itemCarrito.amount} </div>
        <div>
        <button className='celda-items' onClick={eliminarDelCarrito}> X </button>
        </div>
        </div>
        )
}

export default ItemCart