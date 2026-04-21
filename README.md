# Magdalena por el Cambio — Sitio Web Regional de Campaña
### Iván Cepeda & Aida Quilcué · Presidencia 2026 · Pacto Histórico

---

## Descripción del Proyecto

Sitio web regional de campaña presidencial para el departamento del Magdalena.
Desarrollado como un único archivo HTML auto-contenido, listo para subir a cualquier servidor o servicio de hosting estático.

---

## Estructura del Proyecto

```
campana-magdalena/
│
├── index.html              ← Archivo principal (todo el sitio en uno)
│
├── assets/
│   ├── css/
│   │   └── styles.css      ← (Opcional) Estilos separados si se refactoriza
│   ├── js/
│   │   └── main.js         ← (Opcional) Scripts separados si se refactoriza
│   └── images/
│       ├── ivan-cepeda.jpg         ← PENDIENTE: Foto oficial Iván Cepeda
│       ├── aida-quilcue.jpg        ← PENDIENTE: Foto oficial Aida Quilcué
│       ├── logo-pacto-historico.png ← PENDIENTE: Logo del Pacto Histórico
│       ├── mapa-magdalena.svg      ← PENDIENTE: SVG del mapa del departamento
│       ├── qr-whatsapp-voluntarios.png ← PENDIENTE: QR grupo voluntarios
│       ├── qr-whatsapp-testigos.png    ← PENDIENTE: QR grupo testigos
│       └── eventos/                ← PENDIENTE: Fotos de eventos
│           ├── evento-01.jpg
│           ├── evento-02.jpg
│           └── ...
│
├── README.md               ← Este archivo
└── AJUSTES_PENDIENTES.md   ← Lista de tareas para el desarrollador
```

---

## Secciones del Sitio

| Pestaña | ID | Descripción |
|---|---|---|
| Inicio | `portada` | Presentación de los candidatos, hero, estadísticas y biografías |
| Logros | `logros` | Logros nacionales y del Magdalena con acordeón interactivo |
| Difusión | `difusion` | Eventos realizados en el departamento y galería de fotos |
| Voluntariado | `voluntariado` | Registro de voluntarios y testigos electorales + WhatsApp |

---

## Paleta de Colores

| Variable CSS | Valor | Uso |
|---|---|---|
| `--red` | `#e8320a` | Color primario de campaña |
| `--red-dark` | `#b91c0a` | Hover y acentos oscuros |
| `--red-dim` | `rgba(232,50,10,0.15)` | Fondos sutiles |
| `--bg0` | `#080e1a` | Fondo principal |
| `--bg1` | `#0d1726` | Secciones secundarias |
| `--bg2` | `#111f35` | Tarjetas y paneles |
| `--surface` | `#1a2d4a` | Superficies elevadas |
| `--gold` | `#f0c040` | Acento dorado (stripe superior) |
| `--txt` | `#f0f4fa` | Texto principal |
| `--txt2` | `#8fa3bf` | Texto secundario |

---

## Tipografías (Google Fonts)

- **Bebas Neue** → Títulos grandes y números estadísticos
- **Barlow Condensed** (300, 400, 600, 700) → Subtítulos, etiquetas y navegación
- **Barlow** (400, 500, 600, italic) → Texto de cuerpo y descripciones

---

## Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas (sin frameworks externos)
- JavaScript vanilla (sin dependencias)
- Google Fonts (carga externa)
- Totalmente responsive (mobile-first)
- Sin backend requerido (sitio estático)

---

## Despliegue

El sitio funciona como **archivo estático**. Se puede publicar en:

- **GitHub Pages** (gratis)
- **Netlify** (gratis, drag & drop)
- **Vercel** (gratis)
- **Cualquier hosting compartido** (subir `index.html` a la carpeta `public_html`)

---

## Contacto del Proyecto

Campaña Regional Magdalena · Pacto Histórico  
Web oficial de la campaña: https://www.presidenteivancepeda.com  
Registro de voluntarios: https://michi.movimientopactohistorico.co
