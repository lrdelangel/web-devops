# 🌐 CONFIGURACIÓN DNS

## Registros para Netlify + Zoho Mail

### 📋 REGISTROS A (Netlify)

| Tipo | Host | Valor | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | Automático |
| A | @ | 99.83.231.61 | Automático |

### 📋 REGISTRO CNAME (WWW)

| Tipo | Host | Valor | TTL |
|------|------|-------|-----|
| CNAME | www | [tu-sitio].netlify.app | Automático |

> Reemplaza `[tu-sitio]` con el nombre que te da Netlify (ej: `amazing-cactus-123456.netlify.app`)

---

## 📧 REGISTROS MX (Zoho Mail)

| Prioridad | Host | Valor | TTL |
|-----------|------|-------|-----|
| 10 | @ | mx.zoho.com | Automático |
| 20 | @ | mx2.zoho.com | Automático |
| 50 | @ | mx3.zoho.com | Automático |

---

## 🔍 REGISTRO TXT (Verificación Zoho)

| Tipo | Host | Valor | TTL |
|------|------|-------|-----|
| TXT | @ | zoho-verification=XXXXXXXXXX | Automático |

> Zoho te dará el valor exacto durante el registro

---

## 🔍 REGISTRO TXT (Google Search Console)

| Tipo | Host | Valor | TTL |
|------|------|-------|-----|
| TXT | @ | google-site-verification=XXXXXXXXXX | Automático |

> Google te dará el valor exacto durante la verificación

---

## 📋 CONFIGURACIÓN COMPLETA (Ejemplo)

Si tu dominio es `luisdelangel.cloud` y tu sitio Netlify es `amazing-cactus-123456.netlify.app`:

### En Namecheap (Advanced DNS):

```
# Registros A (Root domain)
A Record | @ | 75.2.60.5 | Automatic
A Record | @ | 99.83.231.61 | Automatic

# Registro CNAME (WWW)
CNAME Record | www | amazing-cactus-123456.netlify.app | Automatic

# Registros MX (Email)
MX Record | @ | mx.zoho.com | 10 | Automatic
MX Record | @ | mx2.zoho.com | 20 | Automatic
MX Record | @ | mx3.zoho.com | 50 | Automatic

# Verificación Zoho
TXT Record | @ | zoho-verification=abc123xyz | Automatic

# Verificación Google
TXT Record | @ | google-site-verification=def456uvw | Automatic

# SPF Record (Anti-spam)
TXT Record | @ | v=spf1 include:zoho.com ~all | Automatic
```

---

## ⚠️ NOTAS IMPORTANTES

1. **NO agregues registros URL Redirect** - pueden causar problemas con Netlify
2. **Borra los registros por defecto** de Namecheap antes de agregar los nuevos
3. **TTL en Automático** - permite cambios rápidos si es necesario
4. **Propagación DNS** - puede tomar de 15 minutos a 48 horas

---

## 🔧 COMANDO PARA VERIFICAR DNS

Desde tu terminal:

```bash
# Ver registros A
dig luisdelangel.cloud A

# Ver registros MX
dig luisdelangel.cloud MX

# Ver registros TXT
dig luisdelangel.cloud TXT

# Ver todos los registros
dig luisdelangel.cloud ANY
```

---

## ✅ VERIFICACIÓN

Después de configurar, verifica en:

1. **Netlify:** Domain management debe mostrar "DNS verification successful"
2. **Zoho Mail:** Domain verification debe mostrar "Verified"
3. **Google Search Console:** Verificación debe ser exitosa
4. **Navegador:** `https://luisdelangel.cloud` debe cargar tu sitio

---

## 🆘 PROBLEMAS COMUNES

### "Domain already in use"
- Elimina el dominio de otros servicios (Vercel, Heroku, etc.)
- Espera 24 horas y vuelve a intentar

### "DNS propagation pending"
- Normal, espera hasta 48 horas
- Usa [whatsmydns.net](https://whatsmydns.net) para verificar propagación

### "SSL certificate pending"
- Netlify genera certificados automáticamente
- Puede tomar hasta 24 horas
- Forzar HTTPS en Site settings

---

## 📚 RECURSOS

- [Netlify Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
- [Namecheap DNS Setup](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/)
- [Zoho Mail DNS Setup](https://www.zoho.com/mail/help/adminconsole/configure-email-delivery.html)
