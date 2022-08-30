import './App.css';

//---------COMPONENTES----------
import Carrousel from './Header/Carrousel/Carrousel';
import Navigation from './Header/Navigation/Navigation';
import Footer from './Footer/Footer';
import FilterMarca from './Filter/Marca/FilterMarca';
import ProductosDestacados from './ProductosDestacados/ProductosDestacados';
import FilterCategory from './Filter/Categoria/FilterCategory';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation/>
        <Carrousel/>
        <div className='App-main'>
        <FilterMarca/>
        <ProductosDestacados/>
        <FilterCategory/>
        </div>
        <h1>Luces E-commerce</h1>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
