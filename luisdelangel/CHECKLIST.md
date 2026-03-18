# ✅ CHECKLIST DE IMPLEMENTACIÓN

## FASE 1: DOMINIO (15 minutos)

- [ ] Ir a [namecheap.com](https://www.namecheap.com) o [porkbun.com](https://porkbun.com)
- [ ] Buscar dominio: `luisdelangel.cloud` o `luisdelangel.dev`
- [ ] Crear cuenta
- [ ] Comprar dominio (~$10-15 USD/año)
- [ ] Activar WhoisGuard (privacidad)
- [ ] Guardar credenciales de acceso

**Costo:** ~$10-15 USD/año

---

## FASE 2: HOSTING - NETLIFY (20 minutos)

- [ ] Ir a [netlify.com](https://www.netlify.com)
- [ ] Registrarse con GitHub
- [ ] Verificar email
- [ ] En el dashboard, arrastrar carpeta `dist/`
- [ ] Esperar deploy (30 segundos)
- [ ] Copiar URL temporal de Netlify
- [ ] Verificar que el sitio funciona

**Costo:** GRATIS

---

## FASE 3: CONectar DOMINIO (20 minutos)

### En Netlify:
- [ ] Ir a Site settings → Domain management
- [ ] Click "Add custom domain"
- [ ] Ingresar: `luisdelangel.cloud`
- [ ] Verificar dominio
- [ ] Copiar DNS records que muestra Netlify

### En Namecheap:
- [ ] Ir a Domain List → Manage
- [ ] Tab Advanced DNS
- [ ] Borrar registros existentes
- [ ] Agregar registros A y CNAME de Netlify
- [ ] Guardar cambios

### Verificación:
- [ ] Esperar 15-60 minutos
- [ ] Visitar `https://luisdelangel.cloud`
- [ ] Verificar que carga correctamente
- [ ] Verificar que tiene HTTPS (candado verde)

---

## FASE 4: EMAIL PROFESIONAL (30 minutos)

- [ ] Ir a [zoho.com/mail](https://www.zoho.com/mail/)
- [ ] Click "Sign Up Now"
- [ ] Elegir "Forever Free Plan"
- [ ] Registrarse con dominio: `luisdelangel.cloud`
- [ ] Verificar dominio (agregar registro TXT en DNS)
- [ ] Configurar MX records en DNS
- [ ] Crear usuario: `contacto@luisdelangel.cloud`
- [ ] Configurar contraseña
- [ ] Probar enviar/recibir emails

**Costo:** GRATIS (5 usuarios, 5GB cada uno)

---

## FASE 5: GOOGLE ANALYTICS (15 minutos)

- [ ] Ir a [analytics.google.com](https://analytics.google.com)
- [ ] Click "Start measuring"
- [ ] Crear cuenta: "Luis Del Angel"
- [ ] Crear propiedad: "Luis Del Angel Portfolio"
- [ ] Zona horaria: Mexico City
- [ ] Moneda: Mexican Peso
- [ ] Crear Data Stream → Web
- [ ] Ingresar URL: `https://luisdelangel.cloud`
- [ ] Copiar Measurement ID (G-XXXXXXXXXX)
- [ ] Editar `index.html` y reemplazar G-XXXXXXXXXX
- [ ] Reconstruir: `npm run build`
- [ ] Volver a subir a Netlify

**Costo:** GRATIS

---

## FASE 6: GOOGLE SEARCH CONSOLE (10 minutos)

- [ ] Ir a [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Click "Add property"
- [ ] Elegir "Domain"
- [ ] Ingresar: `luisdelangel.cloud`
- [ ] Copiar código de verificación TXT
- [ ] Agregar registro TXT en DNS (Namecheap)
- [ ] Click "Verify" en Search Console
- [ ] Esperar indexación (1-7 días)

**Costo:** GRATIS

---

## FASE 7: OPTIMIZACIONES OPCIONALES

### Favicon personalizado
- [ ] Crear favicon en [favicon.io](https://favicon.io)
- [ ] Subir a carpeta `public/`
- [ ] Actualizar `index.html`

### Imagen de preview (OG Image)
- [ ] Crear imagen 1200x630px
- [ ] Subir a `public/og-image.jpg`
- [ ] Actualizar meta tags en `index.html`

### Página 404 personalizada
- [ ] Crear `src/pages/NotFound.tsx`
- [ ] Configurar en `App.tsx`

---

## 📊 RESUMEN DE COSTOS

| Servicio | Costo |
|----------|-------|
| Dominio (.cloud o .dev) | ~$10-15 USD/año |
| Netlify Hosting | GRATIS |
| Zoho Mail (5 usuarios) | GRATIS |
| Google Analytics | GRATIS |
| Google Search Console | GRATIS |
| **TOTAL ANUAL** | **~$10-15 USD** |
| **TOTAL MENSUAL** | **~$1 USD** |

---

## 🎯 PRÓXIMOS PASOS DESPUÉS DEL LANZAMIENTO

### Inmediato (Día 1):
- [ ] Actualizar firma de email con nueva URL
- [ ] Actualizar perfil de LinkedIn
- [ ] Compartir en redes sociales
- [ ] Enviar a contactos clave

### Semana 1:
- [ ] Verificar Google Analytics está recibiendo datos
- [ ] Revisar Search Console por errores
- [ ] Probar todos los enlaces de contacto
- [ ] Pedir feedback a colegas

### Mes 1:
- [ ] Revisar estadísticas de Analytics
- [ ] Identificar páginas más visitadas
- [ ] Considerar mejoras basadas en datos
- [ ] Agregar nuevo contenido si es necesario

---

## 🔧 MANTENIMIENTO MENSUAL

- [ ] Revisar Analytics (tráfico, fuentes)
- [ ] Verificar Search Console (errores, indexación)
- [ ] Actualizar experiencia/certs si hay cambios
- [ ] Hacer backup del código fuente
- [ ] Revisar velocidad de carga

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### El sitio no carga:
1. Verificar DNS estén configurados correctamente
2. Esperar 48 horas máximo por propagación
3. Limpiar caché del navegador (Ctrl+Shift+R)
4. Probar en modo incógnito

### Email no funciona:
1. Verificar MX records en DNS
2. Esperar 24-48 horas
3. Verificar en Zoho Mail que dominio esté verificado

### HTTPS no aparece:
1. Netlify lo configura automático (esperar 24h)
2. Forzar HTTPS en Site settings → Domain management

---

## 📞 RECURSOS DE AYUDA

- **Netlify Docs:** https://docs.netlify.com
- **Namecheap DNS:** https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain
- **Zoho Mail:** https://www.zoho.com/mail/help/
- **Google Analytics:** https://support.google.com/analytics

---

**¡Éxito con tu sitio profesional! 🚀**
