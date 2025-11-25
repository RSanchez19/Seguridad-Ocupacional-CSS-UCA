import './EPP.css'

const EPP = () => {
  const eppItems = [
    {
      icon: '⛑️',
      title: 'Cabecera',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: '🧤',
      title: 'Manos',
      description: 'Quisque placerat sapien a orci eleifend, nec convallis.'
    },
    {
      icon: '👢',
      title: 'Calzado',
      description: 'Morbi rhoncus risus id nunc bibendum feugiat.'
    }
  ]

  return (
    <section id="epp" className="epp">
      <div className="container">
        <h2 className="section-title">Equipos de Protección Personal (EPP)</h2>
        <div className="epp-grid">
          {eppItems.map((item, index) => (
            <div key={index} className="epp-card">
              <div className="epp-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EPP

