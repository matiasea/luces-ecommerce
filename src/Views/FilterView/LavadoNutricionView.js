import React from 'react'
import productos from '../../Productos/productos.json'

//-----------COMPONENTES-----------
import CardProduct from '../../Productos/CardProduct'

const LavadoNutricionView = () => {
  
    
  return (
    <div className='div-target'>
        
    {
        productos.map( producto =>{
          if (producto.categoria === "LAVADO"){
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

export default LavadoNutricionView