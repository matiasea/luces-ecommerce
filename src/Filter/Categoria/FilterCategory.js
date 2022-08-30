import React from 'react'

//-------------Estilos-----------------
import "./FilterCategory.css"

const FilterCategory = () => {
  return (
    <div>
    <div className='div-category'>
        <p className='p'>------------------------------------------------------------------------------------------  
        <span className='titulo'> CETEGORIAS </span>
         ------------------------------------------------------------------------------------------
         </p>
    </div>
    <div className='div-button'>
         <button className='button-category-lavado'> LAVADO Y NUTRICIÓN </button>
         <button className='button-category-capilares'> CAPILARES </button>
         <button className='button-category-coloracion'> COLORACIÓN </button>
         <button className='button-category-instrumentos'> INSTRUMENTOS </button>
    </div>
    </div>    
  )
}

export default FilterCategory