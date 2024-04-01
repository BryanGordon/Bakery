import Productos from '../productos.json'
import { useState, useEffect } from 'react'

export const Producto = () => {
  const [producto, setProducto] = useState([])

  const obtenerProductos = () => {
    const data = Productos
    setProducto(data)
  }

  useEffect(() => {
    obtenerProductos()
  }, [])

  return (
    <section>
      <h2 id='lista-productos'>Lista de postres</h2>
      {
        producto.map((item) => (
          <div className='container-productos' key={item.nombre_producto}>
            <img src={`../assets/${item.imagen}, import.meta.url`.href} alt={item.nombre_producto} width='190' height='150' />
            <div>
              <label id='nombre-producto'>{item.nombre_producto}</label>
              <p>{item.descripcion_producto}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}
