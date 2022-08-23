import './App.css';

//---------COMPONENTES----------
import Carrousel from './Header/Carrousel/Carrousel';
import Navigation from './Header/Navigation/Navigation';
import Footer from './Footer/Footer';
import FilterMarca from './Filter/Marca/FilterMarca';
import ProductosDestacados from './ProductosDestacados/ProductosDestacados';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation/>
        <Carrousel/>
        <FilterMarca/>
        <ProductosDestacados/>
        <h1>Luces E-commerce</h1>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
