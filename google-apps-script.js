/**
 * INSTRUCCIONES DE CONFIGURACIÓN:
 * 
 * 1. Abre tu Google Sheet donde quieres guardar los datos
 * 2. Ve a: Extensiones → Apps Script
 * 3. Borra todo el código que aparece y pega este código completo
 * 4. Haz clic en "Implementar" → "Nueva implementación"
 * 5. Tipo: Aplicación web
 * 6. Ejecutar como: "Yo"
 * 7. Quién tiene acceso: "Cualquier persona"
 * 8. Haz clic en "Implementar"
 * 9. Copia la URL que te da (será algo como: https://script.google.com/macros/s/ABC123.../exec)
 * 10. Pega esa URL en el archivo script.js donde dice: YOUR_GOOGLE_SCRIPT_URL
 */

function doPost(e) {
  try {
    // Obtener la hoja activa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Si es la primera vez, crear encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Nombre Completo', 'Email']);
      // Dar formato a los encabezados
      const headerRange = sheet.getRange(1, 1, 1, 3);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#7B2CBF');
      headerRange.setFontColor('#FFFFFF');
    }
    
    // Parsear los datos recibidos
    const data = JSON.parse(e.postData.contents);
    
    // Obtener datos del formulario
    const timestamp = new Date();
    const name = data.name || '';
    const email = data.email || '';
    
    // Agregar nueva fila con los datos
    sheet.appendRow([
      timestamp,
      name,
      email
    ]);
    
    // Formatear fecha
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat('dd/mm/yyyy hh:mm:ss');
    
    // Ajustar anchos de columna automáticamente (solo la primera vez)
    if (lastRow === 2) {
      sheet.autoResizeColumns(1, 3);
    }
    
    // Respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Datos guardados correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función de prueba para verificar que todo funciona
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Juan Pérez (TEST)',
        email: 'juan.test@example.com'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
