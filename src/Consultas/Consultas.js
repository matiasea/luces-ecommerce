import React from 'react'

//-------------ESTILOS-----------------
import "./Consultas.css"

//-------------IMAGENES----------------
import envio from "./img/envio.png"
import consulta from "./img/consulta.png"
import tarjeta from "./img/tarjeta.png"


const Consultas = () => {
  return (
    <div className='div-cons'>
      <div className='div-consultas'>
        <img src={envio} className="img-consultas" />
        <p className='titulo-consultas'>ENVIOS A TODO EL PAIS</p>
        <p className='parrafo-consultas'> Comprá en Luces, recibí tu pedido en cualquier punto del país y en la puerta de tu casa. Si tenes dudas de como comprar, te recomendamos que visites nuestra sección: Cómo Comprar.</p>
      </div>
      <div className='div-consultas'>
        <img src={tarjeta} className="img-consultas" />
        <p className='titulo-consultas'>PAGA CON TUS TARJETAS</p>
        <p className='parrafo-consultas'> Tarjeta de crédito o débito. Pagá en cuotas sin interés o hacelo al contado con tu tarjeta de débito. ¿Preferís pagar en efectivo?</p>
      </div>
      <div className='div-consultas'>
        <img src={consulta} className="img-consultas" />
        <p className='titulo-consultas'>TENES DUDAS? CONSULTANOS</p>
        <p className='parrafo-consultas'> Comunícate con nosotros. ¿No encuentras la solución que estás buscando? Aquí te explicamos cómo obtener ayuda de nuestros expertos.</p>
      </div>
    </div>
  )
}

export default Consultas