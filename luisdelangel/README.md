# 🌐 Luis Ricardo Del Angel - Portfolio Website

Sitio web profesional para servicios freelance de Cloud Architecture, DevOps y Kubernetes.

## 📋 Información del Sitio

- **URL Temporal:** https://jhejq3fxxcwn6.ok.kimi.link
- **Tecnologías:** React + TypeScript + Tailwind CSS + Vite
- **Estado:** ✅ Listo para producción

---

## 🚀 GUÍA DE PUBLICACIÓN

### OPCIÓN 1: Netlify (Recomendada - Gratis)

#### Paso 1: Crear cuenta
1. Ve a [netlify.com](https://www.netlify.com)
2. Regístrate con GitHub
3. Verifica tu email

#### Paso 2: Subir sitio
1. En el dashboard de Netlify, arrastra la carpeta `dist/`
2. Espera a que se despliegue (30 segundos)
3. Tu sitio estará en: `https://[nombre].netlify.app`

#### Paso 3: Conectar dominio personalizado
1. Ve a **Site settings** → **Domain management**
2. Click en **"Add custom domain"**
3. Ingresa: `luisdelangel.cloud`
4. Sigue las instrucciones de DNS

### OPCIÓN 2: GitHub Pages (Gratis)

#### Paso 1: Crear repositorio
1. Ve a [github.com](https://github.com)
2. Crea repositorio: `luisdelangel.github.io`
3. Hazlo público

#### Paso 2: Subir archivos
```bash
cd dist
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/luisdelangel.github.io.git
git push -u origin main
```

#### Paso 3: Habilitar GitHub Pages
1. Ve a **Settings** → **Pages**
2. Source: Deploy from a branch
3. Branch: `main` / `root`
4. Guardar

---

## 📧 CONFIGURACIÓN DE EMAIL PROFESIONAL

### Zoho Mail (Gratis - 5 usuarios)

1. Ve a [zoho.com/mail](https://www.zoho.com/mail/)
2. Elige **"Forever Free Plan"**
3. Regístrate con tu dominio
4. Verifica dominio con registro TXT
5. Configura MX records

**Tus emails:**
- `contacto@luisdelangel.cloud`
- `luis@luisdelangel.cloud`

---

## 📊 GOOGLE ANALYTICS

### Paso 1: Crear propiedad
1. Ve a [analytics.google.com](https://analytics.google.com)
2. Click **"Start measuring"**
3. Crea propiedad: "Luis Del Angel Portfolio"

### Paso 2: Obtener Measurement ID
1. Ve a **Admin** → **Data Streams** → **Web**
2. Ingresa tu URL
3. Copia el ID: `G-XXXXXXXXXX`

### Paso 3: Actualizar sitio
1. Edita `index.html`
2. Reemplaza `G-XXXXXXXXXX` con tu ID real
3. Reconstruye: `npm run build`
4. Vuelve a subir a Netlify

---

## 🔍 GOOGLE SEARCH CONSOLE

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega propiedad: `luisdelangel.cloud`
3. Verifica con registro DNS TXT
4. Sube tu sitemap.xml (opcional)

---

## 🛠️ CÓMO ACTUALIZAR TU SITIO

### Método 1: Edición Simple (Sin código)

Si solo necesitas cambiar textos:
1. Edita los archivos en `src/sections/`
2. Cambia los textos directamente
3. Ejecuta: `npm run build`
4. Sube la nueva carpeta `dist/` a Netlify

### Método 2: Desarrollo Completo

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abre http://localhost:5173

# 4. Haz tus cambios

# 5. Construir para producción
npm run build

# 6. La carpeta dist/ contiene tu sitio listo
```

---

## 📁 ESTRUCTURA DEL PROYECTO

```
mi-sitio/
├── 📁 src/
│   ├── 📁 sections/           # Secciones de la página
│   │   ├── Hero.tsx          # Sección principal
│   │   ├── Services.tsx      # Servicios ofrecidos
│   │   ├── Experience.tsx    # Experiencia laboral
│   │   ├── Certifications.tsx # Certificaciones
│   │   ├── Contact.tsx       # Formulario de contacto
│   │   ├── Navigation.tsx    # Barra de navegación
│   │   └── Footer.tsx        # Pie de página
│   ├── 📁 components/         # Componentes UI
│   ├── App.tsx               # Componente principal
│   ├── index.css             # Estilos globales
│   └── main.tsx              # Punto de entrada
├── 📁 public/                 # Assets estáticos
│   └── hero-bg.jpg           # Imagen de fondo
├── 📁 dist/                   # Build de producción
├── index.html                 # HTML principal
├── package.json              # Dependencias
├── tailwind.config.js        # Configuración Tailwind
└── vite.config.ts            # Configuración Vite
```

---

## 🎨 PERSONALIZACIÓN

### Cambiar colores
Edita `src/index.css`:
```css
:root {
  --primary: 190 90% 50%;      /* Cyan */
  --accent: 190 90% 50%;       /* Cyan */
}
```

### Cambiar texto del Hero
Edita `src/sections/Hero.tsx`:
```tsx
<h1>Luis Ricardo Del Angel Gtz.</h1>
<p>Senior Cloud Architect Certificado</p>
```

### Actualizar experiencia laboral
Edita `src/sections/Experience.tsx`:
```tsx
const experiences = [
  {
    company: 'Nueva Empresa',
    position: 'Nuevo Cargo',
    // ...
  }
];
```

### Agregar nueva certificación
Edita `src/sections/Certifications.tsx`:
```tsx
const certifications = [
  {
    name: 'Nueva Certificación',
    level: 'Nivel',
    year: '2025',
    url: 'https://...',
    color: 'cyan'
  }
];
```

---

## 🔧 COMANDOS ÚTILES

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview

# Verificar errores
npm run lint
```

---

## 📱 RESPONSIVE

El sitio es completamente responsive:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large Desktop (1440px+)

---

## 🔒 SEGURIDAD

- ✅ HTTPS automático (Netlify/GitHub Pages)
- ✅ Headers de seguridad configurados
- ✅ No expone información sensible

---

## 📞 SOPORTE

Si necesitas ayuda:
1. Revisa esta documentación
2. Consulta la documentación de [Netlify](https://docs.netlify.com)
3. Documentación de [React](https://react.dev)
4. Documentación de [Tailwind CSS](https://tailwindcss.com)

---

## 📄 LICENCIA

Este proyecto es de uso personal para Luis Ricardo Del Angel.

---

**Última actualización:** Marzo 2026
**Versión:** 1.0.0
