import React from 'react'

import productos from '../../Productos/productos.json'

//-----------COMPONENTES-----------
import CardProduct from '../../Productos/CardProduct'

const LorealView = () => {
  
    
  return (
    <div className='div-target'>
        
    {
        productos.map( producto =>{
          if (producto.marca === "LOREAL"){
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

export default LorealView