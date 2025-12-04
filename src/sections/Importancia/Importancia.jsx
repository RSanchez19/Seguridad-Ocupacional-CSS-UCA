import { importanciaItems } from '../../content/sections'
import './Importancia.css'

const Importancia = () => {

  return (
    <section id="importancia" className="importancia">
      <div className="container">
        <h2 className="section-title">¿Por qué es importante?</h2>
        <div className="importancia-grid">
          {importanciaItems.map((item, index) => (
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

