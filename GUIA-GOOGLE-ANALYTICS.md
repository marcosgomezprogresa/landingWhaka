# 📊 Guía de Google Analytics 4 - Landing Whaka

## ✅ Implementación Completada

Google Analytics 4 está ahora **completamente integrado** en tu landing page. En 24 horas empezarás a ver datos completos.

---

## 🎯 ¿Qué se está midiendo automáticamente?

### 📈 Métricas Automáticas (Medición Mejorada)
- ✅ **Visitas a la página** - Cada vez que alguien entra
- ✅ **Usuarios únicos** - Visitantes nuevos vs recurrentes
- ✅ **Tiempo en la página** - Cuánto tiempo permanecen
- ✅ **Páginas por sesión** - Cuántas páginas ven
- ✅ **Desplazamientos (scroll)** - Qué tan abajo llegan
- ✅ **Clics de salida** - Enlaces externos
- ✅ **Ubicación geográfica** - País, ciudad de tus visitantes
- ✅ **Dispositivos** - Móvil, tablet, desktop
- ✅ **Navegadores** - Chrome, Safari, Firefox, etc.

### 🎯 Eventos Personalizados Configurados

#### 1. **Envío del Formulario** (`generate_lead`, `form_submit_success`)
   - Se activa cuando alguien completa y envía el formulario
   - Registra: nombre y email del lead
   - **Esto es tu conversión principal** 🎉

#### 2. **Click en Teléfono** (`phone_click`)
   - Se activa al hacer clic en +34 678 513 800
   - Categoría: Contacto
   - Registra el número marcado

#### 3. **Click en Botón "Solicitar Catálogo"** (`click_catalog_button`)
   - Se activa antes de enviar el formulario
   - Categoría: CTA
   - Mide interés antes de conversión

#### 4. **Scroll Profundo** (`scroll_depth`)
   - Se activa cuando el usuario llega al 75% de la página
   - Categoría: Engagement
   - Indica interés real en el contenido

#### 5. **Tiempo en Página - 30 segundos** (`time_on_page`)
   - Se activa si el usuario permanece 30+ segundos
   - Categoría: Engagement
   - Separa visitantes serios de rebotes

#### 6. **Click en Categorías/Productos** (`click_product_category`)
   - Se activa al hacer clic en las tarjetas de producto
   - Categoría: Productos
   - Registra qué productos interesan más

---

## 📱 Cómo Ver tus Datos en Google Analytics

### 🔴 Ver datos en **TIEMPO REAL** (ahora mismo):

1. Ve a: https://analytics.google.com
2. Selecciona tu propiedad **"Landing Whaka"**
3. En el menú izquierdo: **Informes → Tiempo real**

**Aquí verás al instante:**
- Usuarios activos ahora
- Páginas que están viendo
- De qué país/ciudad vienen
- Qué dispositivo usan
- Eventos que disparan (formularios, clicks, etc.)

**Prueba ahora:**
- Abre tu landing en otra ventana: https://landing-whaka.vercel.app
- Rellena el formulario de prueba
- En 5-10 segundos verás el evento `form_submit_success` en Tiempo Real

---

### 📊 Ver datos **HISTÓRICOS** (últimos 7/30 días):

**1. Visión General (Dashboard Principal):**
   - **Informes → Ciclo de vida → Interacción → Visión general**
   - Aquí ves: usuarios, sesiones, tasa de rebote, duración promedio

**2. Ver Conversiones (Envíos de Formulario):**
   - **Informes → Ciclo de vida → Interacción → Conversiones**
   - Aquí verás cuántos leads generaste
   - Filtra por `generate_lead` o `form_submit_success`

**3. Ver Todos los Eventos:**
   - **Informes → Ciclo de vida → Interacción → Eventos**
   - Lista completa de todos los eventos disparados:
     * `generate_lead` - Formularios completados ✅
     * `phone_click` - Clicks en teléfono 📞
     * `click_catalog_button` - Clicks en botón CTA 🖱️
     * `scroll_depth` - Scroll profundo 📜
     * `time_on_page` - Tiempo de permanencia ⏱️
     * `click_product_category` - Interés en productos 📦

**4. Ver Tráfico por País/Ciudad:**
   - **Informes → Ciclo de vida → Adquisición → Adquisición de usuarios**
   - Cambiar dimensión a "País" o "Ciudad"

**5. Ver Dispositivos (Móvil vs Desktop):**
   - **Informes → Ciclo de vida → Tecnología → Información general de tecnología**
   - Verás: Desktop, Mobile, Tablet

---

## 🎯 Métricas Clave a Vigilar (KPIs)

### 🥇 **Tasa de Conversión**
```
Conversiones / Visitantes totales × 100
```
**Objetivo:** 2-5% es bueno para B2B
- Si ves 100 visitantes y 3 formularios → 3% conversión ✅

### 📞 **CTR de Teléfono (Click-Through Rate)**
```
Clicks en teléfono / Visitantes totales × 100
```
**Objetivo:** 1-3%
- Indica cuántos prefieren llamar vs formulario

### 📜 **Tasa de Engagement (Scroll + Tiempo)**
```
(Scroll 75% + Tiempo 30s) / Visitantes totales × 100
```
**Objetivo:** 30-50%
- Indica qué porcentaje realmente lee tu contenido

### 🚪 **Tasa de Rebote**
```
Sesiones de 1 página sin interacción / Total sesiones × 100
```
**Objetivo:** <60% es bueno
- Si es muy alta (>70%), tu tráfico no es calificado

---

## 📈 Informes Recomendados para Crear

### 1. **Informe de Conversiones Semanal**
   - Ve a: **Explorar → Crear exploración en blanco**
   - Dimensiones: Semana, Fuente/medio
   - Métricas: `generate_lead`, Usuarios
   - Te dirá cuántos leads generas cada semana

### 2. **Embudo de Conversión**
   - Explorar → Embudo de exploración
   - Pasos:
     1. Vista de página (inicio)
     2. `click_catalog_button` (interés)
     3. `generate_lead` (conversión)
   - Te muestra dónde pierdes usuarios

### 3. **Comparativa Móvil vs Desktop**
   - Explorar → Formato libre
   - Dimensión: Categoría de dispositivo
   - Métricas: Usuarios, Conversiones, Duración media
   - Optimiza según qué dispositivo convierte mejor

---

## 🔔 Configurar Alertas Personalizadas (Opcional)

1. Ve a **Administrar → Propiedad → Alertas personalizadas**
2. Crear alerta nueva:
   - **Nombre:** "Nueva conversión diaria"
   - **Condición:** `generate_lead` > 0
   - **Frecuencia:** Diaria
   - **Email:** Tu correo

Recibirás email cada día que haya conversiones.

---

## 🎓 Cómo Interpretar los Datos

### ✅ **Señales POSITIVAS:**
- Tasa de conversión >2%
- Tiempo promedio >1 minuto
- Scroll depth >50% de visitantes
- Tasa de rebote <60%
- Clicks en teléfono consistentes

### ⚠️ **Señales de ALERTA:**
- Tasa de conversión <1% → Revisar formulario/CTA
- Tiempo promedio <30 segundos → Tráfico no calificado
- Tasa de rebote >70% → Mejorar primera impresión
- Sin eventos de engagement → Contenido no atractivo

---

## 🚀 Próximos Pasos Recomendados

### 1. **Espera 7 días** - Acumula datos suficientes
### 2. **Revisa Tiempo Real** - Asegúrate de que todo funciona
### 3. **Analiza el primer reporte semanal**:
   - ¿De dónde vienen tus visitantes?
   - ¿Qué dispositivos usan?
   - ¿Cuántos se convierten?
### 4. **Optimiza según datos**:
   - Si móvil convierte menos → Mejora experiencia móvil
   - Si rebote es alto → Mejora velocidad/diseño
   - Si conversión baja → A/B test el formulario

---

## 🎯 Objetivos a Configurar (Opcional pero Recomendado)

1. Ve a **Administrar → Propiedad → Eventos**
2. Busca el evento `generate_lead`
3. Activa el switch **"Marcar como conversión"**
4. Ahora GA4 lo contará como conversión oficial

**Repite para:**
- `form_submit_success`
- `phone_click` (si quieres contar llamadas como conversión)

---

## 📞 Soporte

Si tienes dudas sobre los datos en Analytics:
- Documentación oficial: https://support.google.com/analytics/
- Centro de aprendizaje GA4: https://skillshop.withgoogle.com/analytics

---

## ✅ Checklist de Verificación

- [ ] Visitar landing y ver tu visita en Tiempo Real
- [ ] Enviar formulario de prueba y ver evento `generate_lead`
- [ ] Hacer clic en teléfono y ver evento `phone_click`
- [ ] Esperar 24 horas para datos históricos
- [ ] Revisar informe de eventos semanalmente
- [ ] Configurar alerta de conversiones
- [ ] Marcar `generate_lead` como conversión oficial

---

🎉 **¡Todo está configurado y funcionando!**

En 24-48 horas tendrás suficientes datos para tomar decisiones informadas sobre tu landing page.
