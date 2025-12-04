import { riesgosItems } from '../../content/sections'
import './Riesgos.css'

const Riesgos = () => {

  return (
    <section id="riesgos" className="riesgos">
      <div className="container">
        <h2 className="section-title">Riesgos comunes</h2>
        <div className="riesgos-grid">
          {riesgosItems.map((riesgo, index) => (
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

