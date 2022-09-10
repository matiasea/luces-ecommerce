import React from 'react';

import productos from "./productos.json"

//------------ESTILOS---------------
import "./Productos.css"

//-----------COMPONENTES-------------
import CardProduct from './CardProduct';


const Productos = () => {
    
  return (
    <div className='div-target'>
        
    {
        productos.map( producto =>{
            return(
                <div>
                    <div className='target'>
                    <CardProduct producto={producto}/>
                    </div>
                </div>
            )
        }
            )
    }
    </div>
  )
}

export default Productos