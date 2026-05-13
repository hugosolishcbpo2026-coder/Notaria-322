# NOTARÍA PÚBLICA 322 — Sitio Oficial

> **Seguridad Jurídica y Confianza**
> Col. Del Valle, Benito Juárez · Ciudad de México · C.P. 03103

Sitio web cinematográfico, premium y completamente responsivo construido con **React + Vite + TailwindCSS + Framer Motion**.

---

## ✨ Características

- 🖤 Estética legal de lujo (negro, charcoal, dorado, marfil)
- 🎬 Sección Hero cinematográfica con video de fondo y fallback en mobile
- 🧭 Navegación con scroll suave, sección activa resaltada y menú móvil
- 💎 Animaciones Framer Motion (fade-ins, parallax, hover, scroll reveals)
- 🪞 Glassmorphism + efectos de glow dorado
- 📱 Mobile-first y totalmente responsivo
- 🗺️ Mapa embebido (Google Maps)
- ✉️ Formulario de contacto con validación
- ⚡ Optimizado para SEO, Open Graph y lazy loading
- 🚀 Listo para desplegar en **Vercel** o **GitHub Pages**

---

## 📁 Estructura del proyecto

```
notaria-322/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── README.md          ← agregar aquí hero.mp4 y hero-poster.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── SectionDivider.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Nosotros.jsx
│   │   ├── Servicios.jsx
│   │   ├── Experiencia.jsx
│   │   ├── Ubicacion.jsx
│   │   └── Contacto.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

---

## 🛠️ Inicio rápido (local)

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Vista previa local de producción
npm run preview
```

El sitio quedará disponible en `http://localhost:5173`.

---

## 🎨 Personalizar la paleta

Todos los colores viven en `tailwind.config.js`. Edite los valores y todo el sitio se actualizará:

```js
colors: {
  obsidian: '#050505',
  charcoal: '#1B1B1B',
  gold:     { DEFAULT: '#C8A96B', light: '#E0C68A', dark: '#9B7F4A' },
  ivory:    '#F5F1E8',
  ruby:     '#7A1E2C',
  emerald:  '#0F5C4D',
  navy:     '#0F172A',
  silver:   '#A8A8A8',
  'soft-gray': '#D1D5DB',
}
```

### Tipografía

Cargadas desde Google Fonts en `index.html`:

- **Cinzel** (display / títulos)
- **Inter** (cuerpo de texto)

---

## 🎬 Agregar el video del Hero

1. Coloque su video en `public/hero.mp4` (formato MP4 H.264, sin audio, máx. 6 MB recomendado).
2. Coloque la imagen de respaldo en `public/hero-poster.jpg`.
3. ¡Listo! Sin necesidad de tocar código. Si no se proporciona video, el Hero usa un degradado cinematográfico de respaldo.

---

## 📞 Conectar el formulario de contacto

El formulario actualmente simula el envío. Para conectarlo a un servicio real, edite `src/sections/Contacto.jsx` y reemplace el bloque `await new Promise…` por una llamada a su backend, **Formspree**, **EmailJS**, o **Resend**. Por ejemplo:

```js
await fetch('https://formspree.io/f/SU_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

---

## 🗺️ Actualizar la dirección del mapa

En `src/sections/Ubicacion.jsx` reemplace la URL del `<iframe>` con la dirección exacta cuando esté disponible:

```jsx
src="https://www.google.com/maps?q=DIRECCIÓN+EXACTA&output=embed"
```

---

## ☎️ Agregar teléfono / correo

Cuando tenga los datos, busque y reemplace las cadenas `"Próximamente"` en:

- `src/sections/Ubicacion.jsx`
- `src/components/Footer.jsx`

---

## 🚀 Despliegue en Vercel

### Opción A — Desde la web (recomendado)

1. Suba el proyecto a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Notaría 322"
   git branch -M main
   git remote add origin https://github.com/SU-USUARIO/notaria-322.git
   git push -u origin main
   ```
2. Ingrese a [vercel.com](https://vercel.com), haga clic en **Add New → Project**, importe el repositorio.
3. Vercel detectará automáticamente Vite. Solo presione **Deploy**.

### Opción B — Desde la terminal

```bash
npm i -g vercel
vercel        # primera vez
vercel --prod # producción
```

El archivo `vercel.json` ya está configurado con:
- Build command (`npm run build`)
- Output directory (`dist`)
- SPA rewrites
- Cache headers para imágenes/video/fuentes

---

## 🧭 Navegación

Todas las pestañas funcionan con scroll suave hacia su sección correspondiente:

| Tab          | Ancla         | Componente            |
|--------------|---------------|-----------------------|
| Inicio       | `#inicio`     | `Hero.jsx`            |
| Nosotros     | `#nosotros`   | `Nosotros.jsx`        |
| Servicios    | `#servicios`  | `Servicios.jsx`       |
| Experiencia  | `#experiencia`| `Experiencia.jsx`     |
| Ubicación    | `#ubicacion`  | `Ubicacion.jsx`       |
| Contacto     | `#contacto`   | `Contacto.jsx`        |

El `Navbar.jsx` usa un `IntersectionObserver` para resaltar la pestaña activa según la sección visible.

---

## 📝 Licencia

© Notaría Pública 322. Todos los derechos reservados.
