import './Reportes.css'

const Reportes = () => {
  const tipos = [
    'Condición insegura — algo que podría causar un incidente.',
    'Incidente — evento sin lesión significativa.',
    'Accidente — evento con lesión/daño.'
  ]

  return (
    <section id="reportes" className="reportes">
      <div className="container">
        <div className="reportes-card">
          <div className="reportes-content">
            <h2 className="section-title">Reportes e incidentes</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="tipos-list">
              {tipos.map((tipo, index) => (
                <li key={index} className="tipo-item">
                  <span className="tipo-icon">✓</span>
                  <span>{tipo}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reportes-image">
            <div className="image-placeholder">Ilustración de reporte</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reportes

