import { importanciaItems } from '../../content/sections'
import Card from '../../components/ui/Card'
import './Importancia.css'

const Importancia = () => {

  return (
    <section id="importancia" className="importancia">
      <div className="container">
        <h2 className="section-title">¿Por qué es importante?</h2>
        <div className="importancia-grid">
          {importanciaItems.map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              align="center"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Importancia

