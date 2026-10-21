# Fátima Quevedo | Linktree & Servicios de RRHH

Sitio web estilo Linktree elegante y profesional diseñado especialmente para **Fátima Quevedo (Recursos Humanos & Career Coach)**. 

Cuenta con tarjetas interactivas que abren **pop-ups / bottom sheets (push-ups)** con información detallada de cada servicio, botón directo a **WhatsApp** y botón de pago con **Mercado Pago**.

---

## ✨ Servicios Incluidos
1. **Asesoría Laboral 1:1** — Diagnóstico, simulación de entrevistas STAR y plan de carrera.
2. **Optimización Estratégica de CV** — Formato compatible con ATS, redacción de impacto y métricas.
3. **Pack Completo: CV + LinkedIn (⭐ Más Elegido)** — Transformación de CV y optimización SEO de LinkedIn.
4. **Talleres de CV (Workshops)** — Capacitaciones grupales, plantillas y práctica en vivo.
5. **Pop-up de Contacto Directo** — Acceso a WhatsApp, LinkedIn y Correo.

---

## ⚙️ Cómo personalizar tus enlaces y Mercado Pago

En el archivo `script.js` (en las primeras líneas), tienes el bloque `CONFIG`:

```javascript
const CONFIG = {
  // 1. Coloca tu número de WhatsApp real (con código de país sin el + ni guiones)
  whatsappNumber: "5491123456789",

  // 2. Tu correo y redes
  email: "fatimaquevedom@outlook.com",
  linkedinUrl: "https://www.linkedin.com/in/tu-usuario",
  instagramUrl: "https://www.instagram.com/tu-usuario",

  // 3. Tus links de cobro de Mercado Pago (generados desde tu app de Mercado Pago)
  mercadoPagoLinks: {
    asesoria: "https://mpago.la/xxxxxx",
    cv: "https://mpago.la/xxxxxx",
    cv_linkedin: "https://mpago.la/xxxxxx",
    talleres: "https://mpago.la/xxxxxx"
  },

  // 4. Precios visibles en la web
  prices: {
    asesoria: "$35.000 ARS",
    cv: "$28.000 ARS",
    cv_linkedin: "$45.000 ARS",
    talleres: "Consultar cupos"
  }
};
```

*(Si dejas los links de Mercado Pago vacíos por el momento, el botón de Mercado Pago llevará automáticamente al usuario a tu WhatsApp con un mensaje solicitándote el link de pago para que no pierdas ninguna venta).*

---

## 📸 Cómo poner tu foto de perfil
Si quieres poner una foto tuya:
1. Guarda tu foto en esta misma carpeta con el nombre `foto.jpg`.
2. En `index.html`, en la línea que dice `<div class="avatar-placeholder" id="avatar-container">`, puedes agregar:
   `<img src="foto.jpg" alt="Fátima Quevedo">` en lugar de las iniciales.
