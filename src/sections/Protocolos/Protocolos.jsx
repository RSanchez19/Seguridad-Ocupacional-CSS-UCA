import { protocolosItems } from '../../content/sections'
import Card from '../../components/ui/Card'
import './Protocolos.css'

const Protocolos = () => {
  return (
    <section id="protocolos" className="protocolos">
      <div className="container">
        <h2 className="section-title">Protocolos clave</h2>
        <div className="protocolos-grid">
          {protocolosItems.map((protocolo) => (
            <Card
              key={protocolo.title}
              icon={
                protocolo.iconUrl ? (
                  <img
                    src={protocolo.iconUrl}
                    alt={protocolo.iconAlt || protocolo.title}
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                ) : (
                  protocolo.icon
                )
              }
              title={protocolo.title}
              description={protocolo.description}
              align="center"
              footer={
                <button className="btn-guia" type="button">
                  Guía
                </button>
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Protocolos

