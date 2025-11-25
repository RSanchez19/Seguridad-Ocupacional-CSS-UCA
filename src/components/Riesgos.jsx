import './Riesgos.css'

const Riesgos = () => {
  const riesgos = [
    {
      icon: '⚠️',
      title: 'Físicos',
      description: 'Temperatura, ruido, caídas, golpes.'
    },
    {
      icon: '🧪',
      title: 'Químicos',
      description: 'Sustancias, vapores, derrames.'
    },
    {
      icon: '🦠',
      title: 'Biológicos',
      description: 'Microorganismos y material biológico.'
    }
  ]

  return (
    <section id="riesgos" className="riesgos">
      <div className="container">
        <h2 className="section-title">Riesgos comunes</h2>
        <div className="riesgos-grid">
          {riesgos.map((riesgo, index) => (
            <div key={index} className="riesgo-card">
              <div className="riesgo-icon">{riesgo.icon}</div>
              <h3 className="card-title">{riesgo.title}</h3>
              <p className="card-description">{riesgo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Riesgos

