import { riesgosItems } from '../../content/sections'
import Card from '../../components/ui/Card'
import './Riesgos.css'

const Riesgos = () => {
  return (
    <section id="riesgos" className="riesgos">
      <div className="container">
        <h2 className="section-title">Riesgos comunes</h2>
        <div className="riesgos-grid">
          {riesgosItems.map((riesgo) => (
            <Card
              key={riesgo.title}
              icon={riesgo.icon}
              title={riesgo.title}
              description={riesgo.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Riesgos

