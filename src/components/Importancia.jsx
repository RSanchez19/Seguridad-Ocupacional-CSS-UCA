import './Importancia.css'

const Importancia = () => {
  const items = [
    {
      icon: '⚠️',
      title: 'Prevención',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum nunc at ligula.'
    },
    {
      icon: '❓',
      title: 'Conocimiento',
      description: 'Mauris aliquet, lacus nec rutrum pharetra, tortor lorem varius sapien, eget semper nisl.'
    },
    {
      icon: '⬇️',
      title: 'Recursos',
      description: 'Cras efficitur, metus vel volutpat facilisis, ipsum odio porttitor justo, vitae luctus odio.'
    },
    {
      icon: '📍',
      title: 'Orientación',
      description: 'Sed euismod, nisl in suscipit viverra, justo arcu gravida orci, sit amet vehicula urna.'
    }
  ]

  return (
    <section id="importancia" className="importancia">
      <div className="container">
        <h2 className="section-title">¿Por qué es importante?</h2>
        <div className="importancia-grid">
          {items.map((item, index) => (
            <div key={index} className="importancia-card">
              <div className="icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Importancia

