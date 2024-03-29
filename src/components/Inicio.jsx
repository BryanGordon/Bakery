import logo from '../assets/logo.jpg'

export const Inicio = () => {
  return (
    <header className='inicio' id='inicio'>
      <div className='logo'>
        <img src={logo} alt='Bakery' width='100px' height='90px' />
      </div>
      <label id='nombre-local'>Bakery</label>
      <label>Tus postres de manera sencilla</label>
    </header>
  )
}
