export const Contacto = () => {
  return (
    <section className='section-contactos'>
      <div>
        <h2>Contactos</h2>
        <h3>Dirección</h3>
        <iframe
          title='ubicacion-local'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.813144473951!2d-78.43586008528415!3d-0.09228959993264801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58f1f6a132d5b%3A0x2c50a94a08166d1a!2sCapit%C3%A1n%20Giovanni%20Calles%2C%20Quito!5e0!3m2!1ses!2sec!4v1637601695933!5m2!1ses!2sec'
          loading='lazy'
        />
        <h3>Teléfono</h3>
        <p id='tele-contactos'>09931991</p>
        <div>
          <h3>Redes Sociales</h3>
          <a href='https://www.facebook.com/'>
            <i id='redes' className='fab fa-facebook-f fa-2x' />
          </a>
          <a href='https://www.instagram.com/?hl=es'>
            <i id='redes' className='fab fa-instagram fa-2x' />
          </a>
          <a href='https://www.gooogle.com'>
            <i id='redes' className='fab fa-whatsapp fa-2x' />
          </a>
        </div>
      </div>
    </section>
  )
}
