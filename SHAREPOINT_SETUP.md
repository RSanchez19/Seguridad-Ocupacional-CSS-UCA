# Configuración del Formulario de SharePoint

Este documento explica cómo configurar el formulario de registro de SharePoint en la aplicación.

## Configuración Básica

### Opción 1: Variable de Entorno (Recomendado)

1. **Crear archivo `.env` en la raíz del proyecto:**
   ```env
   VITE_SHAREPOINT_FORM_URL=https://tu-empresa.sharepoint.com/sites/tu-sitio/Lists/TuLista/NewForm.aspx
   ```

2. **Reiniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

### Opción 2: Editar Directamente el Componente

Edita `src/components/Registro.jsx` y reemplaza la URL vacía:
```javascript
const sharepointFormUrl = import.meta.env.VITE_SHAREPOINT_FORM_URL || 
  'https://tu-empresa.sharepoint.com/sites/tu-sitio/Lists/TuLista/NewForm.aspx'
```

## Obtener la URL del Formulario de SharePoint

### Método 1: Formulario de Lista de SharePoint

1. Ve a tu sitio de SharePoint
2. Accede a la lista que contiene el formulario
3. Haz clic en **"Nuevo"** o **"New"** para abrir el formulario
4. Copia la URL completa de la barra de direcciones

   La URL debería verse así:
   ```
   https://tu-empresa.sharepoint.com/sites/tu-sitio/Lists/TuLista/NewForm.aspx
   ```

### Método 2: Microsoft Forms

1. Ve a [Microsoft Forms](https://forms.office.com)
2. Crea un nuevo formulario con los campos necesarios
3. Haz clic en **"..."** (más opciones) y selecciona **"Insertar"** o **"Embed"**
4. Usa la URL del formulario directamente

   La URL debería verse así:
   ```
   https://forms.office.com/r/XXXXXXXXXX
   ```

### Método 3: Power Apps

Para formularios más personalizados:

1. Crea una Power App en [Power Apps](https://make.powerapps.com)
2. Publica la aplicación
3. Obtén la URL de incrustación
4. Úsala en el componente

## Configuración de Permisos

Para que el formulario funcione correctamente:

- **Permisos de la Lista:** Los usuarios deben tener permisos para agregar elementos
- **Autenticación:** El usuario debe estar autenticado en SharePoint (si el sitio no es público)
- **CORS:** Si tienes problemas de CORS, considera usar Microsoft Forms o Power Apps

## Personalización

### Modificar la Altura del Iframe

En `src/components/Registro.css`, ajusta `min-height`:
```css
.sharepoint-form-iframe {
  min-height: 800px; /* Ajusta según necesites */
}
```

## Solución de Problemas

### El formulario no se muestra

1. Verifica que la URL sea correcta
2. Asegúrate de tener permisos para acceder al formulario
3. Revisa la consola del navegador para errores
4. Prueba abrir la URL directamente en el navegador

### Problemas de CORS

Si encuentras errores de CORS:
- Usa Microsoft Forms en lugar de listas de SharePoint
- O configura un proxy en tu servidor
- O usa Power Apps para el formulario

### El formulario se ve cortado

Aumenta el `min-height` en el archivo `Registro.css`.

## Notas Importantes

- **Seguridad:** Nunca expongas URLs con tokens de autenticación en el código
- **Responsive:** El iframe se adapta automáticamente a diferentes tamaños de pantalla
- **Accesibilidad:** El componente incluye un enlace alternativo si el iframe no carga

