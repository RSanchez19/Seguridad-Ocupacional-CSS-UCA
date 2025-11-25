import './Registro.css'

const Registro = () => {
  // URL del formulario de SharePoint
  // Configura esta variable en tu archivo .env o reemplázala directamente
  // Ver SHAREPOINT_SETUP.md para más información
  const sharepointFormUrl = import.meta.env.VITE_SHAREPOINT_FORM_URL || ''
  
  // Si no hay URL configurada, mostrar mensaje de configuración
  if (!sharepointFormUrl) {
    return (
      <section id="registro" className="registro">
        <div className="container">
          <h2 className="section-title">Registro para capacitación</h2>
          <div className="registro-wrapper">
            <div className="form-fallback">
              <p className="fallback-text">
                Por favor, configura la URL del formulario de SharePoint en el archivo <code>.env</code> 
                o edita directamente el componente <code>Registro.jsx</code>.
              </p>
              <p className="fallback-text">
                Consulta el archivo <code>SHAREPOINT_SETUP.md</code> para más información sobre cómo configurar el formulario.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="registro" className="registro">
      <div className="container">
        <h2 className="section-title">Registro para capacitación</h2>
        <div className="registro-wrapper">
          <div className="sharepoint-form-container">
            <iframe
              src={sharepointFormUrl}
              title="Formulario de Registro SharePoint"
              className="sharepoint-form-iframe"
              allow="geolocation; microphone; camera"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
          
          {/* Mensaje alternativo si el iframe no carga */}
          <div className="form-fallback">
            <p className="fallback-text">
              Si el formulario no se muestra correctamente, puedes acceder directamente haciendo clic en el siguiente enlace:
            </p>
            <a 
              href={sharepointFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="form-link"
            >
              Abrir formulario en nueva ventana
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registro
