import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import {
  Hero,
  Importancia,
  QueEs,
  Protocolos,
  EPP,
  Riesgos,
  Reportes,
  Registro,
} from './sections'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Importancia />
      <QueEs />
      <Protocolos />
      <EPP />
      <Riesgos />
      <Reportes />
      <Registro />
      <Footer />
    </div>
  )
}

export default App
