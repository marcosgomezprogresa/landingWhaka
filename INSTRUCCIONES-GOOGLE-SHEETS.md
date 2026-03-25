# 📋 Integración Google Sheets - Formulario Landing Whaka

## ✅ Configuración Paso a Paso

### PASO 1️⃣: Crear la hoja de Google Sheets

1. Abre Google Sheets: https://sheets.google.com
2. Crea una hoja nueva
3. Dale un nombre, por ejemplo: **"Leads Landing Whaka"**
4. **NO agregues encabezados** - el script los creará automáticamente

### PASO 2️⃣: Configurar Google Apps Script

1. En tu hoja de Google Sheets, ve al menú: **Extensiones → Apps Script**
2. Se abrirá un editor con código por defecto
3. **Borra todo** el código que aparece
4. Abre el archivo `google-apps-script.js` de este proyecto
5. **Copia TODO el código** y pégalo en el editor de Apps Script
6. Haz clic en el icono de **💾 Guardar** (o Ctrl+S)
7. Dale un nombre al proyecto, por ejemplo: "WebApp Leads Whaka"

### PASO 3️⃣: Desplegar como Aplicación Web

1. En el editor de Apps Script, haz clic en **Implementar** (botón azul arriba a la derecha)
2. Selecciona **Nueva implementación**
3. Haz clic en el icono de ⚙️ junto a "Selecciona el tipo"
4. Selecciona **Aplicación web**
5. Configura así:
   - **Descripción**: "Webhook formulario landing"
   - **Ejecutar como**: **Yo** (tu cuenta de Google)
   - **Quién tiene acceso**: **Cualquier persona**
6. Haz clic en **Implementar**
7. Te pedirá autorización:
   - Haz clic en **Autorizar acceso**
   - Selecciona tu cuenta de Google
   - Si aparece advertencia "Google no verificó esta app", haz clic en **Avanzado** → **Ir a [nombre del proyecto] (no seguro)**
   - Haz clic en **Permitir**

### PASO 4️⃣: Copiar la URL del Web App

1. Después de autorizar, te mostrará una página con **URL de aplicación web**
2. **Copia esa URL completa** (será algo como):
   ```
   https://script.google.com/macros/s/AKfycbz...ABC123.../exec
   ```
3. ⚠️ **IMPORTANTE**: Asegúrate de copiar la URL que termina en `/exec` (NO la de desarrollo)

### PASO 5️⃣: Pegar la URL en el código JavaScript

1. Abre el archivo `script.js` de este proyecto
2. Busca la línea que dice:
   ```javascript
   const googleScriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
   ```
3. Reemplaza `'YOUR_GOOGLE_SCRIPT_URL'` con tu URL copiada:
   ```javascript
   const googleScriptURL = 'https://script.google.com/macros/s/AKfycbz...ABC123.../exec';
   ```
4. Guarda el archivo

### PASO 6️⃣: Subir cambios y probar

1. Haz commit y push de los cambios:
   ```bash
   git add .
   git commit -m "Integrar formulario con Google Sheets"
   git push
   ```

2. Espera a que se despliegue en Vercel (1-2 minutos)

3. **Prueba el formulario**:
   - Ve a tu landing: https://landing-whaka.vercel.app
   - Rellena el formulario con datos de prueba
   - Haz clic en "Solicitar Catálogo"
   - Ve a tu Google Sheet y verás la nueva fila con:
     - Fecha y hora
     - Nombre completo
     - Email

---

## 🔍 Verificación y Troubleshooting

### ✅ Cómo saber si funciona:

1. **En la consola del navegador** (F12 → Console):
   - Deberías ver: `✅ Datos enviados a Google Sheets: {name: "...", email: "..."}`

2. **En Google Sheets**:
   - Aparecerá una nueva fila con los datos
   - La primera fila tendrá encabezados morados

### ❌ Si NO funciona:

**Problema 1**: No aparecen datos en la hoja
- Verifica que la URL en `script.js` sea correcta (debe terminar en `/exec`)
- Asegúrate de haber autorizado la aplicación correctamente
- Abre el editor de Apps Script → Ver → Registros de ejecución (para ver errores)

**Problema 2**: Error de CORS en la consola
- Es normal con `mode: 'no-cors'` - los datos se envían igualmente
- Verifica en Google Sheets si llegaron los datos

**Problema 3**: Sale "Hubo un error al enviar el formulario"
- Revisa que la URL del script sea correcta
- Verifica tu conexión a internet
- Abre la consola del navegador (F12) para ver el error específico

---

## 📊 Estructura de la Hoja de Google Sheets

La tabla tendrá estas columnas:

| Fecha | Nombre Completo | Email |
|-------|-----------------|-------|
| 25/03/2026 14:30:15 | Juan Pérez | juan@empresa.com |
| 25/03/2026 15:12:45 | María García | maria@negocio.es |

---

## 🔄 Si necesitas hacer cambios al script:

1. Actualiza el código en el editor de Apps Script
2. Guarda los cambios
3. NO necesitas hacer nueva implementación - los cambios se aplican automáticamente
4. Si cambias la configuración de la implementación, necesitarás una nueva URL

---

## 📧 Notificaciones por email (OPCIONAL)

Si quieres recibir un email cada vez que alguien rellena el formulario, agrega este código al final de la función `doPost` en Google Apps Script (antes del return):

```javascript
// Enviar notificación por email
MailApp.sendEmail({
  to: 'tu-email@empresa.com',
  subject: '🔔 Nuevo lead en Landing Whaka',
  body: `
    Nuevo contacto recibido:
    
    📅 Fecha: ${timestamp}
    👤 Nombre: ${name}
    📧 Email: ${email}
    
    Revisa la hoja: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
  `
});
```

Recuerda reemplazar `'tu-email@empresa.com'` con tu email real.

---

## ✅ ¡Listo!

Tu formulario ahora guarda automáticamente todos los leads en Google Sheets. Los datos se guardan en tiempo real y puedes:

- Exportar a Excel/CSV
- Crear gráficos y análisis
- Conectar con otras herramientas (Zapier, Make, etc.)
- Compartir con tu equipo

Cualquier duda, revisa los registros de ejecución en Apps Script.
