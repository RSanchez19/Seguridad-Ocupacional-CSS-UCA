import './Protocolos.css'

const Protocolos = () => {
  const protocolos = [
    {
      icon: '📈',
      title: 'Sismo',
      description: 'Lorem ipsum dolor sit amet. Protégete-cúbrete-agárrate.'
    },
    {
      icon: '🔥',
      title: 'Incendio',
      description: 'Alarma, extintor si es seguro, evacuar, reportar.'
    },
    {
      icon: '🧪',
      title: 'Laboratorios',
      description: 'EPP, señalización, duchas y botiquines.'
    },
    {
      icon: '🏔️',
      title: 'Trabajo de campo',
      description: 'Checklist previo y comunicación.'
    }
  ]

  return (
    <section id="protocolos" className="protocolos">
      <div className="container">
        <h2 className="section-title">Protocolos clave</h2>
        <div className="protocolos-grid">
          {protocolos.map((protocolo, index) => (
            <div key={index} className="protocolo-card">
              <div className="protocolo-icon">{protocolo.icon}</div>
              <h3 className="card-title">{protocolo.title}</h3>
              <p className="card-description">{protocolo.description}</p>
              <button className="btn-guia">Guía</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Protocolos

