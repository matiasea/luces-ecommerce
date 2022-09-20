import React from 'react'

//---------COMPONENTES----------
import Carrousel from '../Header/Carrousel/Carrousel';
import FilterMarca from '../Filter/Marca/FilterMarca';
import ProductosDestacados from '../ProductosDestacados/ProductosDestacados';
import FilterCategory from '../Filter/Categoria/FilterCategory';
import Productos from '../Productos/Productos';
import Consultas from '../Consultas/Consultas';


const HomeView = () => {
  return (
    <div>
      <Carrousel/>
        <div className='App-main'>
          <FilterMarca/>
          <ProductosDestacados/>
          <Productos/>
          <FilterCategory/>
          <Consultas/> 
        </div>
    </div>
  )
}

export default HomeView