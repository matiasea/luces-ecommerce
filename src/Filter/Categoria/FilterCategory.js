import React from 'react'

//---------ROUTES---------------
import { Link } from 'react-router-dom'

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
      <Link to="/LavadoNutricion" className='button-category-lavado' ><button className='button-category-lavado'> LAVADO Y NUTRICIÓN </button></Link>  
      <Link to="/Capilares" className='button-category-capilares' ><button className='button-category-capilares'> CAPILARES </button> </Link>
      <Link to="/Coloracion" className='button-category-coloracion'> <button className='button-category-coloracion'> COLORACIÓN </button></Link>
      <Link to="/Intrumentos" className='button-category-instrumentos' ><button className='button-category-instrumentos'> INSTRUMENTOS </button></Link>
    </div>
    </div>    
  )
}

export default FilterCategory