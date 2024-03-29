import Productos from '../productos.json'
import { useState, useEffect } from 'react'

export const Producto = () => {
  const [producto, setProducto] = useState([])

  const obtenerProductos = () => {
    const data = Productos
    setProducto(data)
  }
 //////////////////////////// Cambiar el codigo de las imagenes y dejarlo como antes,
 /////////////////////////// Cambiar las imagenes a la carpeta public
  useEffect(() => {
    obtenerProductos()
  }, [])

  return (
    <section>
      <h2 id='lista-productos'>Lista de postres</h2>
      {
        producto.map((item) => (
          <div className='container-productos' key={item.nombre_producto}>
            <img src={`../assets/${item.imagen}, import.meta.url`.href} alt='Brazo Gitano' width='190' height='150' />
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
