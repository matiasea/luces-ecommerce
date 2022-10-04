import React, {createContext, useContext, useState} from 'react'
import Productos from '../Productos/Productos';

export const CarritoContext = createContext();

/* export const UseCarritoContext = () => {
    return useContext(CarritoContext);
  } */




export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState ([]);
    const [contador, setContador] = useState(1)

    //const estaEnElCarrito = (id) => carrito.find(productos => productos.id === id) ? true : false;

    const IdProd = (id) => {
        const idEncontrado = carrito.find((product) => product.id === id);
        return idEncontrado === undefined ? false : true;
      };

      const agregarAlCarrito = (obj) => {
        if (!IdProd(obj.id)) {
          setCarrito([...carrito, obj]);
        } else {
          carrito.forEach((product, index) => {
            if ([product.id === obj.id]) {
              carrito[index].amount = product.amount + obj.amount;
              setCarrito([...carrito]);
            }
          });
          console.log(carrito)
          console.log(carrito.length)
        }
      };
    

    

    //limpiar Carrito
    const limpiarCarrito = () => setCarrito([]);

    //eliminar del Carrito
    const eliminarDelCarrito = (id) => setCarrito(carrito.filter(productos => productos.id !== id));




    const masUnProducto = () => {
        setContador(contador + 1)
      }
    
      const menosUnProducto = () => {
        if (contador >= 2) {
          setContador(contador - 1)
        }
      }

    const totalProducto = () => {
        let total = 0;
        carrito.forEach(({ amount, precio }) => {
          total = total + amount * precio;
        });
        return total;
      };

    const contadorProductosCarrito = () => {
        carrito.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    }
    





  return (
    
        <CarritoContext.Provider value={{ 
            agregarAlCarrito,
            masUnProducto, 
            menosUnProducto, 
            IdProd,
            eliminarDelCarrito, 
            limpiarCarrito,
            totalProducto,
            contadorProductosCarrito,
            carrito,
            contador}}>
            {children}
        </CarritoContext.Provider>
    
  )
}

