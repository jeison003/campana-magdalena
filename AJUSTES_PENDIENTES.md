# AJUSTES PENDIENTES PARA EL DESARROLLADOR
### Sitio Web — Magdalena por el Cambio · Iván Cepeda & Aida Quilcué

---

## 🔴 PRIORIDAD ALTA — Antes de publicar

### 1. Fotos de los candidatos

Actualmente hay placeholders con texto. Reemplazar en `index.html`:

**Iván Cepeda Castro** — Buscar en el HTML el comentario:
```html
<!-- CANDIDATO: IVÁN CEPEDA -->
```
La foto debe ser `assets/images/ivan-cepeda.jpg` (recomendado: 260×320px mínimo).

**Aida Quilcué** — Buscar:
```html
<!-- CANDIDATO: AIDA QUILCUÉ -->
```
La foto debe ser `assets/images/aida-quilcue.jpg` (mismo tamaño).

Para implementar, cambiar el bloque `.cand-photo` en cada tarjeta por:
```html
<div class="cand-photo">
  <img src="assets/images/ivan-cepeda.jpg" alt="Iván Cepeda Castro" style="width:100%;height:100%;object-fit:cover;object-position:top;">
</div>
```

---

### 2. Enlaces de WhatsApp

En el archivo `index.html`, buscar y reemplazar:

| Texto a buscar | Reemplazar con |
|---|---|
| `ENLACE_VOLUNTARIOS_MAGDALENA` | El link real del grupo de voluntarios |
| `ENLACE_TESTIGOS_MAGDALENA` | El link real del grupo de testigos |

Ejemplo:
```html
href="https://chat.whatsapp.com/ABC123XYZ..."
```

---

### 3. Código QR de WhatsApp

En la sección de voluntariado hay un QR de placeholder (dibujado en SVG).
Reemplazar con imagen real:

```html
<!-- REEMPLAZAR este bloque SVG: -->
<div class="qr-placeholder">
  <svg ...>...</svg>
</div>

<!-- POR esto: -->
<div class="qr-placeholder">
  <img src="assets/images/qr-whatsapp-voluntarios.png" alt="QR WhatsApp Voluntarios" style="width:160px;height:160px;border-radius:8px;">
</div>
```

---

### 4. Número del Tarjetón Electoral

En la sección del tarjetón (pestaña Inicio), el número **"3"** es ilustrativo.
Verificar con la Registraduría el número oficial asignado al Pacto Histórico y actualizarlo:

```html
<div class="tarjeton-number">3</div>  ← Cambiar por número real
```

---

## 🟡 PRIORIDAD MEDIA — Mejoras recomendadas

### 5. Fotos de eventos (pestaña Difusión)

Hay 6 tarjetas de eventos con placeholders grises. Para agregar fotos reales:

```html
<!-- Dentro de cada .evento-img, reemplazar el div placeholder por: -->
<img src="assets/images/eventos/evento-01.jpg" 
     alt="Descripción del evento"
     style="width:100%;height:100%;object-fit:cover;">
```

También actualizar los textos de título, fecha, municipio y descripción de cada evento.

---

### 6. Formulario de contacto (backend)

Actualmente el formulario muestra un toast (notificación) pero NO envía datos a ningún servidor.
Para hacerlo funcional, opciones recomendadas:

- **Formspree** (gratis): https://formspree.io — Agregar `action="https://formspree.io/f/XXXXXX"` al form
- **Google Forms embebido**: Reemplazar el form por un iframe de Google Forms
- **Backend propio**: Conectar al endpoint deseado vía `fetch()` en el script

---

### 7. Galería de fotos (pestaña Difusión)

La galería tiene 8 celdas placeholder. Para agregar imágenes reales:

```html
<!-- Reemplazar cada .galeria-item por: -->
<div class="galeria-item" style="padding:0;overflow:hidden;">
  <img src="assets/images/eventos/galeria-01.jpg" 
       alt="Descripción" 
       style="width:100%;height:100%;object-fit:cover;border-radius:6px;">
</div>
```

---

### 8. Meta tags SEO

Agregar dentro del `<head>` para mejorar el posicionamiento y compartir en redes:

```html
<meta name="description" content="Campaña presidencial Iván Cepeda y Aida Quilcué en el Magdalena. Logros del Gobierno del Cambio y programa para continuar la transformación.">
<meta name="keywords" content="Iván Cepeda, Aida Quilcué, Magdalena, Pacto Histórico, Presidente 2026, Colombia">
<meta property="og:title" content="Magdalena por el Cambio · Iván Cepeda Presidente">
<meta property="og:description" content="El cambio no se detiene. Conoce los logros en el Magdalena y únete al equipo.">
<meta property="og:image" content="URL_DE_IMAGEN_PARA_REDES_SOCIALES">
<meta property="og:url" content="URL_DEL_SITIO">
<meta name="twitter:card" content="summary_large_image">
```

---

## 🟢 PRIORIDAD BAJA — Mejoras opcionales

### 9. Analytics

Para medir visitas, agregar antes del `</head>`:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### 10. Favicon

Agregar dentro del `<head>`:
```html
<link rel="icon" type="image/png" href="assets/images/favicon.png">
```

---

### 11. Mapa del Magdalena más detallado

El mapa actual es una silueta SVG simplificada. Se puede reemplazar por:
- Un SVG oficial del IGAC (Instituto Geográfico Agustín Codazzi)
- O una integración con Leaflet.js o Google Maps para mapa interactivo

---

### 12. Animaciones de scroll

Para activar animaciones cuando el usuario hace scroll (efecto "aparece al bajar"), 
agregar la librería **Intersection Observer** o **AOS** (Animate on Scroll):

```html
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>AOS.init({ duration: 600, once: true });</script>
```

Luego agregar `data-aos="fade-up"` a los elementos que se quieran animar.

---

## 📋 CHECKLIST FINAL ANTES DE PUBLICAR

- [ ] Fotos de Iván Cepeda y Aida Quilcué insertadas
- [ ] Enlace WhatsApp voluntarios actualizado
- [ ] Enlace WhatsApp testigos actualizado
- [ ] QR real de WhatsApp insertado
- [ ] Número del tarjetón verificado con la Registraduría
- [ ] Fotos de al menos 3 eventos reales cargadas
- [ ] Formulario de contacto conectado a un backend o servicio de formularios
- [ ] Meta tags SEO completados con URL real del sitio
- [ ] Favicon agregado
- [ ] Prueba en móvil (Chrome DevTools → modo dispositivo)
- [ ] Prueba en Safari (iOS) y Chrome (Android)

---

*Documento generado para el equipo de desarrollo · Campaña Magdalena por el Cambio · Abril 2026*
