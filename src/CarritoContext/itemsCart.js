import React, { useContext } from "react";
import { CarritoContext } from "../CarritoContext/CarritoContext"

import ItemCart from './ItemCart';

const ItemsCart = () => {
    const { carrito } = useContext(CarritoContext);
  return (
    <div>
        {
        carrito.map( itemCarrito =>{
            return(
                <div>
                    <div className='target'>
                    <ItemCart key={itemCarrito.id} itemCarrito={itemCarrito}/>
                    </div>
                </div>
            )
        }
            )
    }
    </div>
  )
}

export default ItemsCart