import { protocolosItems } from '../../content/sections'
import './Protocolos.css'

const Protocolos = () => {

  return (
    <section id="protocolos" className="protocolos">
      <div className="container">
        <h2 className="section-title">Protocolos clave</h2>
        <div className="protocolos-grid">
          {protocolosItems.map((protocolo, index) => (
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

