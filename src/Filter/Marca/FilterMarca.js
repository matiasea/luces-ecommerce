import React from 'react'
import { Link } from 'react-router-dom'

//---------Estilos------------------
import "./FilterMarca.css"


const FilterMarca = () => {
  return (
    <div className='filtros'>
        <Link to="/Garnier" ><button className='button'> GARNIER </button></Link>
        <Link to="/Loreal" ><button className='button'> LOREAL </button></Link>
        <Link to="/Adidas" ><button className='button'> ADIDAS </button></Link> 
    </div>
  )
}

export default FilterMarca