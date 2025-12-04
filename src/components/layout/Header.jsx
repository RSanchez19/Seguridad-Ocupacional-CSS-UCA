import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>UCA · Seguridad Ocupacional</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#importancia" onClick={() => setIsMenuOpen(false)}>Importancia</a>
          <a href="#que-es" onClick={() => setIsMenuOpen(false)}>¿Qué es?</a>
          <a href="#protocolos" onClick={() => setIsMenuOpen(false)}>Protocolos</a>
          <a href="#epp" onClick={() => setIsMenuOpen(false)}>EPP</a>
          <a href="#riesgos" onClick={() => setIsMenuOpen(false)}>Riesgos</a>
          <a href="#reportes" onClick={() => setIsMenuOpen(false)}>Reportes</a>
          <a href="#registro" onClick={() => setIsMenuOpen(false)}>Registro</a>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
