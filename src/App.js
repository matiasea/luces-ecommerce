import './App.css';
//---------ROUTES---------------
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
//---------COMPONENTES----------
import Carrousel from './Header/Carrousel/Carrousel';
import Navigation from './Header/Navigation/Navigation';
import Footer from './Footer/Footer';
import FilterMarca from './Filter/Marca/FilterMarca';
import ProductosDestacados from './ProductosDestacados/ProductosDestacados';
import FilterCategory from './Filter/Categoria/FilterCategory';
import Productos from './Productos/Productos';
import Consultas from './Consultas/Consultas';

//-------------CONTEXT------------------
import {CarritoProvider} from './CarritoContext/CarritoContext';



//----------VIEWS---------------
import HomeView from './Views/HomeView';
import ComoComprarView from './Views/ComoComprarView';
import CarritoView from './Views/CarritoView';
import ContactoView from './Views/ContactoView';
import LaEmpresaView from './Views/LaEmpresaView';
import IntrumentosView from './Views/FilterView/IntrumentosView';
import CapilaresView from './Views/FilterView/CapilaresView';
import ColoracionView from './Views/FilterView/ColoracionView';
import LavadoNutricionView from './Views/FilterView/LavadoNutricionView';
import GarnierView from './Views/FilterView/GarnierView';
import LorealView from './Views/FilterView/LorealView';
import AdidasView from './Views/FilterView/AdidasView';





function App() {
  return (
    
    
    <BrowserRouter>
    <CarritoProvider>    
        <div className="App">          
          <header>
            <Navigation/>
          </header>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/ComoComprar" element={<ComoComprarView />} />
            <Route path='/Carrito' element={<CarritoView/>} />
            <Route path='/Contacto' element={<ContactoView/>}  />
            <Route path='/LaEmpresa' element={<LaEmpresaView/>}  />
            <Route path='/Capilares' element={<CapilaresView/>}  />
            <Route path='/Coloracion' element={<ColoracionView/>}  />
            <Route path='/Instrumentos' element={<IntrumentosView/>}  />
            <Route path='/LavadoNutricion' element={<LavadoNutricionView/>}  />
            <Route path='/Garnier' element={<GarnierView/>}  />
            <Route path='/Loreal' element={<LorealView/>}  />
            <Route path='/Adidas' element={<AdidasView/>}  />
          </Routes>
        </div>
    </CarritoProvider>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
