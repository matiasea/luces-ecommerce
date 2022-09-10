import './App.css';

//---------COMPONENTES----------
import Carrousel from './Header/Carrousel/Carrousel';
import Navigation from './Header/Navigation/Navigation';
import Footer from './Footer/Footer';
import FilterMarca from './Filter/Marca/FilterMarca';
import ProductosDestacados from './ProductosDestacados/ProductosDestacados';
import FilterCategory from './Filter/Categoria/FilterCategory';
import Productos from './Productos/Productos';
import Consultas from './Consultas/Consultas';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation/>
        <Carrousel/>
        <div className='App-main'>
        <FilterMarca/>
        <ProductosDestacados/>
        <Productos/>
        <FilterCategory/>
        <Consultas/>
        </div>
        
        <Footer/>
      </header>
    </div>
  );
}

export default App;
