# 🥥 Whaka Açaí - Landing Page

Landing page premium para Whaka, marca especializada en productos de açaí de alta calidad para distribución B2B.

## 🌟 Características

- ✅ **Diseño Premium**: Interfaz moderna con gradientes y animaciones suaves
- ✅ **100% Responsive**: Optimizado para móvil, tablet y desktop
- ✅ **Lead Generation**: Formulario de contacto optimizado para conversión
- ✅ **Sin Dependencias**: Vanilla JavaScript puro, HTML5 y CSS3
- ✅ **Fácil Personalización**: Configuración centralizada en `config.js`

## 🚀 Despliegue

### Vercel (Recomendado)

1. Sube el proyecto a GitHub
2. Ve a [Vercel](https://vercel.com/)
3. Importa el repositorio
4. Deploy automático ✨

### Hosting tradicional

Simplemente sube todos los archivos al servidor web.

## 📁 Estructura

```
├── index.html          # HTML principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── config.js           # Configuración
├── whaka-logo.svg      # Logo Whaka
└── images/             # Imágenes del proyecto
```

## ⚙️ Configuración

Edita `config.js` para personalizar:
- Textos y títulos
- Productos/categorías
- Testimonios
- Información de contacto
- Colores de marca

## 📧 Contacto

Para consultas sobre açaí premium: comercial@wakaacai.com

---

**Desarrollado con 💜 para Whaka Açaí**

    colors: {
        primary: '#8B1538',    // Color vino tinto
        secondary: '#2C1810'   
    },
    hero: {
        title: 'Vino español premium',
        highlight: 'directo de bodega',
        subtitle: 'Para distribuidores que buscan calidad excepcional',
        // ... más configuración
    }
    // ... resto de la configuración
};
```

### Opción 2: Crear Múltiples Configuraciones

Si tienes varios clientes, puedes crear diferentes objetos de configuración en `config.js`:

```javascript
// Al final de config.js hay ejemplos

const landingConfigWaka = { /* ... */ };
const landingConfigBodega = { /* ... */ };

// Para activar una configuración específica:
const landingConfig = landingConfigWaka;
```

## 🖼️ Imágenes

### Cómo Agregar Imágenes:

1. Crea una carpeta `images/` en el mismo directorio
2. Agrega tus imágenes (JPG, PNG, WebP)
3. Actualiza las rutas en `config.js`:

```javascript
categories: [
    {
        title: 'Categoría 1',
        image: 'images/categoria-1.jpg',  // ← Ruta a tu imagen
        // ...
    }
]
```

### Tamaños Recomendados:

- **Logo**: 200x60px (PNG con fondo transparente)
- **Categorías**: 800x600px (ratio 4:3)
- **Iconos de beneficios**: 200x200px

## 🎨 Colores Personalizados

Puedes cambiar los colores principales editando `config.js`:

```javascript
colors: {
    primary: '#FF6B35',    // Color de botones, acentos
    secondary: '#004E89'   // Color del hero section
}
```

O editando directamente las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #FF6B35;
    --secondary-color: #004E89;
}
```

## 📝 Secciones de la Landing

### 1. Hero Section
- Título impactante con parte resaltada
- Subtítulo descriptivo
- Estadísticas (3 números clave)
- Beneficios con checkmarks
- **Formulario de captura** (CTA principal)

### 2. Categorías/Productos
- Grid responsive de categorías
- Imagen + título + descripción + lista de características
- Hover effects

### 3. Beneficios
- "¿Qué consigues trabajando con nosotros?"
- 4 beneficios principales con iconos
- Explicación detallada del valor

### 4. Testimonios
- Prueba social con clientes reales
- Sistema de 5 estrellas
- Nombre, rol, empresa

### 5. CTA Final
- Llamada a la acción final
- Botón que lleva al formulario

### 6. Footer
- Info de contacto
- Links de navegación
- Redes sociales
- Legal (Aviso Legal, Privacidad, Cookies)

## 📧 Integración con Backend

El formulario actualmente solo registra en consola. Para enviar los datos a tu backend:

### Opción 1: Fetch API (JavaScript)

Edita `script.js`, busca la función `handleFormSubmit` y descomenta:

```javascript
await fetch('/api/submit-lead', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});
```

### Opción 2: Servicio de Email (Formspree, EmailJS)

**Con Formspree:**

1. Regístrate en [formspree.io](https://formspree.io)
2. Obtén tu endpoint
3. Edita `handleFormSubmit`:

```javascript
await fetch('https://formspree.io/f/TU_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Accept': 'application/json'
    }
});
```

### Opción 3: Google Sheets

Usa [Sheet.best](https://sheet.best/) o [SheetDB](https://sheetdb.io/) para guardar leads en Google Sheets.

## 📊 Integración con Analytics

### Google Analytics 4

Agrega antes del `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'TU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🚀 Deployment (Publicación)

### Opción 1: GitHub Pages (Gratis)

1. Sube tu proyecto a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main`
4. Tu landing estará en: `https://tuusuario.github.io/landing`

### Opción 2: Netlify (Gratis)

1. Arrastra la carpeta del proyecto a [netlify.com/drop](https://app.netlify.com/drop)
2. ¡Listo! URL instantánea

### Opción 3: Vercel (Gratis)

1. `npm install -g vercel`
2. `vercel` (desde la carpeta del proyecto)
3. Sigue las instrucciones

### Opción 4: Servidor Propio

Sube los archivos por FTP/SFTP a tu hosting. Cualquier hosting con soporte HTML/CSS/JS funciona.

## 🔧 Personalización Avanzada

### Cambiar Fuentes

Por defecto usa **Inter** de Google Fonts. Para cambiar:

1. Ve a [fonts.google.com](https://fonts.google.com)
2. Selecciona tu fuente
3. Reemplaza el link en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@400;600;700&display=swap" rel="stylesheet">
```

4. Actualiza en `styles.css`:

```css
body {
    font-family: 'TuFuente', sans-serif;
}
```

### Agregar Nueva Sección

1. Agregar HTML en `index.html`
2. Agregar estilos en `styles.css`
3. (Opcional) Agregar config en `config.js` y lógica en `script.js`

## 📱 Testing

### Responsiveness

Prueba en:
- Mobile: 375px (iPhone SE), 390px (iPhone 12/13)
- Tablet: 768px (iPad)
- Desktop: 1440px

**Herramientas:**
- Chrome DevTools (F12 → Toggle device toolbar)
- [Responsinator](https://www.responsinator.com/)
- [BrowserStack](https://www.browserstack.com/)

### Navegadores

Funciona en:
- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Mobile Safari (iOS 13+)
- ✅ Chrome Mobile (Android 8+)

## ⚡ Optimización

### Performance

- Comprime imágenes: usa [TinyPNG](https://tinypng.com/)
- Usa formato WebP para mejor compresión
- Minimiza CSS/JS para producción

### SEO

1. Actualiza el `<title>` y `<meta description>` en `index.html`
2. Agrega Open Graph tags para redes sociales:

```html
<meta property="og:title" content="Tu Título">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="https://tudominio.com/imagen.jpg">
```

## 🆘 Problemas Comunes

### "El formulario no muestra mis opciones personalizadas"

- Asegúrate de que `config.js` se carga ANTES que `script.js` en el HTML
- Verifica la consola del navegador (F12) para errores

### "Las imágenes no se muestran"

- Verifica las rutas en `config.js`
- Las rutas son relativas al archivo `index.html`
- Usa rutas como `images/foto.jpg` NO `./images/foto.jpg`

### "Los colores no cambian"

- Limpia la caché del navegador (Ctrl+Shift+R)
- Verifica que el formato de color sea correcto (`#FF6B35`)

## 📞 Contacto y Soporte

Si tienes dudas sobre el código, revisa los comentarios en cada archivo.

## 📄 Licencia

Este proyecto es de uso interno. Modifícalo según necesites para tus clientes.

---

**¡Buena suerte con tus landings! 🚀**