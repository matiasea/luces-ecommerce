import productos from "./productos.json"

import { CarritoContext } from '../CarritoContext/CarritoContext'

//-----------------ESTILOS----------------
import "./Productos.css"
import { useContext } from "react"

const CardProduct = ({producto}) => {
  const {agregarAlCarrito, contador} = useContext(CarritoContext);

  const agregarAlCarritoFuncion = () => {
    const detalle = { ...producto, amount: contador };
    agregarAlCarrito(detalle);
  };




  return (
    
      <div >
        <div className='img-prod'>{producto.img} </div>        
        <p className='bold'> {producto.producto} </p>
        <p > {producto.descripcion} </p >
        <p className='bold'> $ {producto.precio} </p>
        <button className='button-add' onClick={agregarAlCarritoFuncion}> AGREGAR EL CARRITO </button>
    </div>  
   
  )
}

export default CardProduct