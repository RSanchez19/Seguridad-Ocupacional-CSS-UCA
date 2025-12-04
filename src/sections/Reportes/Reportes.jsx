import { reportesContent } from '../../content/sections'
import './Reportes.css'

const Reportes = () => {

  return (
    <section id="reportes" className="reportes">
      <div className="container">
        <div className="reportes-card">
          <div className="reportes-content">
            <h2 className="section-title">Reportes e incidentes</h2>
            <p className="description">{reportesContent.description}</p>
            <ul className="tipos-list">
              {reportesContent.tipos.map((tipo, index) => (
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

