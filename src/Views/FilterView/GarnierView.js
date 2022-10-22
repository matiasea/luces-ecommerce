import React from 'react'

import productos from '../../Productos/productos.json'

//-----------COMPONENTES-----------
import CardProduct from '../../Productos/CardProduct'

const GarnierView = () => {
  
    
  return (
    <div className='div-target'>
        
    {
        productos.map( producto =>{
          if (producto.marca === "GARNIER"){
            return(
                <div>
                    <div className='target'>
                    <CardProduct key={producto.id} producto={producto}/>
                    </div>
                </div>
            )
          }
        }
            )
    }
    </div>
  )
}

export default GarnierView