import './App.css'
import { Inicio } from './components/Inicio'
import { Producto } from './components/Producto'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'

function App () {
  return (
    <div>
      <Inicio />
      <article className='container'>
        <Producto />
        <Contacto />
      </article>
      <Footer />
    </div>
  )
}

export default App
