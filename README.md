# Landing Page - Seguridad Ocupacional

Landing page moderna y responsive para servicios de Seguridad y Salud Ocupacional, construida con React y Vite.

## 🚀 Características

- **Diseño Responsive**: Adaptable a todos los tamaños de pantalla
- **Componentes Modulares**: Estructura organizada y mantenible
- **Navegación Suave**: Scroll suave entre secciones
- **Integración con SharePoint**: Formulario de registro integrado con SharePoint
- **Diseño Moderno**: UI/UX limpia y profesional

## 📋 Tecnologías

- **React 19**: Biblioteca JavaScript para interfaces de usuario
- **Vite**: Build tool rápido y moderno
- **CSS3**: Estilos modernos con responsive design
- **Tailwind CSS 4**: Framework CSS utility-first

## 📁 Estructura del Proyecto

```
seguridad-ocupacional-landing/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navegación principal
│   │   ├── Hero.jsx          # Sección hero con carrusel
│   │   ├── Importancia.jsx   # Sección de importancia
│   │   ├── QueEs.jsx         # Qué es la seguridad ocupacional
│   │   ├── Protocolos.jsx    # Protocolos clave
│   │   ├── EPP.jsx           # Equipos de protección personal
│   │   ├── Riesgos.jsx       # Riesgos comunes
│   │   ├── Reportes.jsx      # Reportes e incidentes
│   │   ├── Registro.jsx      # Formulario de registro SharePoint
│   │   ├── Footer.jsx        # Pie de página
│   │   └── *.css            # Estilos de cada componente
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globales de App
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales y Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── SHAREPOINT_SETUP.md      # Documentación de configuración SharePoint
└── env.example.txt          # Ejemplo de variables de entorno
```

## 🛠️ Instalación

1. **Navegar al directorio del proyecto:**
   ```bash
   cd seguridad-ocupacional-landing
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno (opcional):**
   - Copia `env.example.txt` a `.env`
   - Configura `VITE_SHAREPOINT_FORM_URL` con la URL de tu formulario
   - Consulta `SHAREPOINT_SETUP.md` para más detalles

4. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador:**
   - Abre `http://localhost:5173` en tu navegador

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la build de producción
- `npm run lint`: Ejecuta el linter

## 🎨 Secciones de la Landing Page

1. **Header**: Navegación fija con menú responsive
2. **Hero**: Sección principal con carrusel de imágenes
3. **Importancia**: ¿Por qué es importante la seguridad ocupacional?
4. **Qué es**: Definición y principios de seguridad ocupacional
5. **Protocolos**: Protocolos clave (Sismo, Incendio, Laboratorios, etc.)
6. **EPP**: Equipos de Protección Personal
7. **Riesgos**: Riesgos comunes en el trabajo
8. **Reportes**: Sistema de reportes e incidentes
9. **Registro**: Formulario de registro para capacitación (SharePoint)
10. **Footer**: Información de contacto institucional

## 🔧 Personalización

### Colores
Los colores principales están definidos en `src/index.css` como variables CSS:
- `--primary-color`: #3498db
- `--secondary-color`: #2c3e50
- `--text-color`: #2c3e50
- `--text-light`: #7f8c8d

### Contenido
Para modificar el contenido, edita los archivos de componentes en `src/components/`:
- Textos, títulos y descripciones están directamente en los componentes
- Iconos emoji pueden ser reemplazados por imágenes SVG

### Estilos
Cada componente tiene su propio archivo CSS para facilitar el mantenimiento.

## 📱 Responsive Design

La landing page está completamente optimizada para:
- Móviles (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Pantallas grandes (1200px+)

## 🌐 Navegación

La navegación utiliza anclas HTML (`#`) para scroll suave entre secciones. No se requiere React Router para la navegación básica.

## 🔗 Integración con SharePoint

El componente de registro está configurado para mostrar un formulario de SharePoint mediante un iframe. Para configurarlo:

1. Consulta el archivo `SHAREPOINT_SETUP.md` para instrucciones detalladas
2. Configura la variable de entorno `VITE_SHAREPOINT_FORM_URL` en tu archivo `.env`
3. O edita directamente `src/components/Registro.jsx` con la URL de tu formulario

## 📝 Próximas Mejoras

- [ ] Integrar formulario con backend
- [ ] Agregar animaciones más avanzadas
- [ ] Implementar modo oscuro
- [ ] Agregar más secciones (testimonios, portfolio, etc.)
- [ ] Optimización de imágenes
- [ ] SEO mejorado

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y comerciales.

## 👨‍💻 Desarrollo

Desarrollado con React 19 y Vite para una experiencia de desarrollo rápida y moderna.
