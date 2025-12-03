import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Imágenes stock relacionadas con seguridad ocupacional
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop',
      alt: 'Seguridad ocupacional - Equipo de protección'
    },
    {
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop',
      alt: 'Seguridad en el trabajo - Trabajador con casco'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
      alt: 'Salud ocupacional - Ambiente seguro'
    },
    {
      url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop',
      alt: 'Prevención de riesgos laborales'
    }
  ]

  // Auto-avanzar el carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image.url} alt={image.alt} />
            <div className="hero-overlay"></div>
          </div>
        ))}

        {/* Indicadores */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Seguridad Ocupacional en la UCA</h1>
        <p className="hero-subtitle">
          Planificamos, ejecutamos y medimos iniciativas que priorizan la seguridad ocupacional sobre la salud general: identificación temprana de peligros, controles de ingeniería y respuesta inmediata para que cada actividad académica concluya sin incidentes.
        </p>
        <div className="hero-buttons">
          <a href="#protocolos" className="btn-link">Ver protocolos</a>
          <a href="#registro" className="btn-link">Registrarme</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
