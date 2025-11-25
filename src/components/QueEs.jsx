import './QueEs.css'

const QueEs = () => {
  const principios = [
    {
      icon: '⚠️',
      title: 'Principio 1',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: '❓',
      title: 'Principio 2',
      description: 'Consectetur adipiscing elit mattis.'
    },
    {
      icon: '⬇️',
      title: 'Principio 3',
      description: 'Vivamus suscipit convallis volutpat.'
    }
  ]

  return (
    <section id="que-es" className="que-es">
      <div className="container">
        <div className="que-es-content">
          <div className="que-es-text">
            <h2 className="section-title">¿Qué es la Seguridad Ocupacional?</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="principios-list">
              {principios.map((principio, index) => (
                <div key={index} className="principio-item">
                  <div className="principio-icon">{principio.icon}</div>
                  <div className="principio-text">
                    <h3>{principio.title}</h3>
                    <p>{principio.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="que-es-images">
            <div className="image-placeholder">Imagen 1</div>
            <div className="image-placeholder">Imagen 2</div>
            <div className="image-placeholder">Imagen 3</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QueEs

