// ============================================================================
// CONFIGURACIÓN DE MARCA PERSONAL — FÁTIMA QUEVEDO (RRHH & EMPLEABILIDAD)
// Basado 100% en MARCA.md
// ============================================================================
const CONFIG = {
  // Contacto directo por WhatsApp (Prioritario)
  whatsappNumber: "5492612556719",

  // Correo de contacto
  email: "fatimaquevedom@outlook.com",

  // Redes Sociales (@fatima.rrhh y LinkedIn Profesional)
  linkedinUrl: "https://www.linkedin.com/in/fatimaquevedom",
  instagramUrl: "https://www.instagram.com/fatima.rrhh",

  // Agendamiento Directo (Calendly) y Relevamiento (Google Forms)
  // Si aún no hay URL pública cargada, redirige automáticamente a WhatsApp con el mensaje predefinido
  calendlyUrl: "",
  googleFormsUrl: "",

  // Links de cobro de Mercado Pago para cada servicio (opcional):
  mercadoPagoLinks: {
    cv: "",
    cv_linkedin: "",
    sesion_1a1: "",
    combo_completo: ""
  }
};

// ============================================================================
// ARQUITECTURA DE SERVICIOS Y PRECIOS EXACTOS (MARCA.md)
// ============================================================================
const SERVICES_DATA = {
  // Servicio 1: Servicio Gancho — Armado de CV Optimizado
  cv: {
    title: "Armado de CV Optimizado",
    category: "SERVICIO GANCHO · PRECIO LANZAMIENTO (10 CUPOS)",
    launchPrice: "$12.000 ARS / $10 USD",
    regularPriceHtml: "Precio Regular: <s>$20.000 ARS</s> / <s>$18 USD</s>",
    desc: "Redacción de CV optimizado para filtros ATS (formato editable + PDF) + llamada corta de 10-15 minutos o devolución en video (Loom) + consultas por chat.",
    features: [
      "Redacción de CV optimizado para superar filtros ATS reales y lectura de reclutadores.",
      "Entrega en formato editable (Word / Google Docs) + archivo PDF listo para postular.",
      "Llamada corta de 10-15 minutos o devolución personalizada en video (Loom).",
      "Consultas y acompañamiento por chat para despejar tus dudas.",
      "Relevamiento ordenado mediante formulario de Google Forms post-contratación."
    ],
    duration: "48 hs hábiles (con info completa)",
    modality: "Online · Forms + Loom / Llamada",
    hasCalendly: false,
    isCommunity: false,
    waMessage: "¡Hola Fátima! Quiero aprovechar el Precio Lanzamiento ($12.000 ARS / $10 USD) del servicio Armado de CV Optimizado. ¿Cómo comenzamos?"
  },

  // Servicio 2: Servicio Core — Pack CV + LinkedIn Optimizado
  cv_linkedin: {
    title: "Pack CV + LinkedIn Optimizado",
    category: "SERVICIO CORE · PRECIO LANZAMIENTO (10 CUPOS)",
    launchPrice: "$35.000 ARS / $30 USD",
    regularPriceHtml: "Precio Regular: <s>$45.000 ARS</s> / <s>$40 USD</s>",
    desc: "CV optimizado para filtros ATS (editable + PDF) + optimización integral de perfil de LinkedIn (Titular SEO, Acerca de con storytelling, experiencias y palabras clave) + guía de uso + consultas por chat + 1 revisión incluida.",
    features: [
      "CV optimizado para filtros ATS en formato editable + PDF.",
      "Optimización integral de perfil de LinkedIn: Titular SEO, sección 'Acerca de' con storytelling, experiencias y palabras clave estratégicas.",
      "Guía práctica de uso para sacarle provecho a tu perfil y atraer reclutadores.",
      "Consultas por chat durante el proceso.",
      "1 revisión incluida para ajustar detalles.",
      "Relevamiento inicial mediante formulario de Google Forms post-contratación."
    ],
    duration: "48 hs hábiles (con info completa)",
    modality: "100% Online · Forms + Chat",
    hasCalendly: false,
    isCommunity: false,
    waMessage: "¡Hola Fátima! Me interesa el Pack CV + LinkedIn Optimizado a Precio Lanzamiento ($35.000 ARS / $30 USD). ¿Cómo coordinamos?"
  },

  // Servicio 3: Sesión 1:1 de Estrategia o Entrevistas (60 min)
  sesion_1a1: {
    title: "Sesión 1:1 de Estrategia o Entrevistas (60 min)",
    category: "SESIÓN 1:1 EN VIVO · PRECIO LANZAMIENTO (10 CUPOS)",
    launchPrice: "$25.000 ARS / $22 USD",
    regularPriceHtml: "Precio Regular: <s>$40.000 ARS</s> / <s>$35 USD</s>",
    desc: "Videollamada personalizada por Google Meet (60 minutos) enfocada en simulacro de entrevista con feedback real o planificación de cambio de rumbo laboral + resumen escrito post-sesión con plan de acción.",
    features: [
      "Videollamada personalizada 1:1 de 60 minutos por Google Meet.",
      "Simulacro de entrevista con feedback real desde la mirada de selección en consultora.",
      "O planificación estratégica de cambio de rumbo laboral / transición de carrera.",
      "Resumen escrito post-sesión con plan de acción claro y accionable.",
      "Agendamiento directo según tu disponibilidad."
    ],
    duration: "60 minutos en vivo + Resumen escrito",
    modality: "Google Meet (1:1)",
    hasCalendly: true,
    isCommunity: false,
    waMessage: "¡Hola Fátima! Quiero reservar una Sesión 1:1 de Estrategia o Entrevistas (60 min) a Precio Lanzamiento ($25.000 ARS / $22 USD). ¿Qué horarios tenés disponibles?"
  },

  // Servicio 4 (Destacado / Más Elegido): Combo Completo (Pack + Sesión 1:1)
  combo_completo: {
    title: "Combo Completo (Pack CV + LinkedIn + Sesión 1:1)",
    category: "⭐ MÁS ELEGIDO · PRECIO LANZAMIENTO (10 CUPOS)",
    launchPrice: "$40.000 ARS / $35 USD",
    regularPriceHtml: "Precio Regular: <s>$75.000 ARS</s> / <s>$65 USD</s>",
    desc: "Incluye todo el Pack CV + LinkedIn Optimizado (entrega en 48 hs hábiles + 1 revisión) + Sesión 1:1 en vivo de 60 minutos por Google Meet + resumen escrito y soporte por chat.",
    features: [
      "Pack completo de CV optimizado para filtros ATS (editable + PDF).",
      "Optimización integral de perfil de LinkedIn (Titular SEO, Acerca de con storytelling, experiencias y palabras clave) + guía de uso + 1 revisión.",
      "Entrega de materiales en 48 hs hábiles (una vez recibida la información completa en Google Forms).",
      "Sesión 1:1 en vivo de 60 minutos por Google Meet (simulacro de entrevista o estrategia de carrera).",
      "Resumen escrito post-sesión con plan de acción + soporte directo por chat."
    ],
    duration: "Entrega 48 hs hábiles + Sesión 60 min",
    modality: "Google Meet + Forms + Chat",
    hasCalendly: true,
    isCommunity: false,
    waMessage: "¡Hola Fátima! Quiero reservar un cupo del Combo Completo (Pack CV + LinkedIn + Sesión 1:1) a Precio Lanzamiento ($40.000 ARS / $35 USD). ¿Cómo empezamos?"
  },

  // Sección Especial / Aporte Comunitario: Orientación para Emigrar / Working Holiday (Ad Honorem)
  australia_ad_honorem: {
    title: "Orientación para Emigrar / Working Holiday (Ad Honorem)",
    category: "🌱 100% GRATUITO · APORTE A LA COMUNIDAD",
    launchPrice: "100% Gratuito (Ad Honorem)",
    regularPriceHtml: "Por convicción ética y espíritu comunitario",
    desc: "Acompañamiento solidario basado en experiencia real viviendo y trabajando 2 años en Australia. Incluye consejos reales sobre búsqueda laboral en el exterior y armado de CV simple para trabajos operativos / hospitality (sin costo, por convicción ética y espíritu comunitario).",
    features: [
      "Modalidad 100% Gratuita / Aporte a la Comunidad (Ad Honorem).",
      "Orientación real basada en mi experiencia viviendo y trabajando 2 años en Australia.",
      "Consejos prácticos sobre cómo encarar la búsqueda laboral en el exterior desde cero.",
      "Guía y criterios para el armado de CV simple (formato Aussie resume) enfocado en trabajos operativos / hospitality.",
      "Espacio cercano y empático para sacarte miedos antes de viajar o al recién llegar."
    ],
    duration: "A coordinar según disponibilidad",
    modality: "100% Gratuito · Online / WhatsApp",
    hasCalendly: false,
    isCommunity: true,
    waMessage: "¡Hola Fátima! Vi en tu web el espacio de Orientación para Emigrar / Working Holiday (Ad Honorem) y me encantaría hacerte unas consultas sobre tu experiencia en Australia."
  }
};

// ============================================================================
// ELEMENTOS DEL DOM
// ============================================================================
const serviceModal = document.getElementById('service-modal');
const contactModal = document.getElementById('contact-modal');

const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalPrice = document.getElementById('modal-price');
const modalPriceRegular = document.getElementById('modal-price-regular');
const modalDesc = document.getElementById('modal-desc');
const modalFeatures = document.getElementById('modal-features');
const modalDuration = document.getElementById('modal-duration');
const modalModality = document.getElementById('modal-modality');
const modalMpBtn = document.getElementById('modal-mp-btn');
const modalCalendlyBtn = document.getElementById('modal-calendly-btn');
const modalWaBtn = document.getElementById('modal-wa-btn');
const modalWaText = document.getElementById('modal-wa-text');

// Redes sociales principales
const socialWa = document.getElementById('social-wa');
const socialLi = document.getElementById('social-li');
const socialIg = document.getElementById('social-ig');
const socialMail = document.getElementById('social-mail');
const heroWaBtn = document.getElementById('hero-wa-btn');
const floatingWaBtn = document.getElementById('floating-wa-btn');

// Contacto modal
const directWaLink = document.getElementById('direct-wa-link');
const directIgLink = document.getElementById('direct-ig-link');
const directLiLink = document.getElementById('direct-li-link');
const directMailLink = document.getElementById('direct-mail-link');
const displayEmail = document.getElementById('display-email');
const currentYear = document.getElementById('current-year');

// ============================================================================
// INICIALIZACIÓN DE ENLACES
// ============================================================================
function initLinks() {
  const defaultWaText = encodeURIComponent("¡Hola Fátima! Vengo de tu web y me gustaría hacerte una consulta antes de contratar.");
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${defaultWaText}`;
  const mailUrl = `mailto:${CONFIG.email}`;

  if (socialWa) socialWa.href = waUrl;
  if (heroWaBtn) heroWaBtn.href = waUrl;
  if (floatingWaBtn) floatingWaBtn.href = waUrl;
  if (socialLi) socialLi.href = CONFIG.linkedinUrl;
  if (socialIg) socialIg.href = CONFIG.instagramUrl;
  if (socialMail) socialMail.href = mailUrl;

  if (directWaLink) directWaLink.href = waUrl;
  if (directIgLink) directIgLink.href = CONFIG.instagramUrl;
  if (directLiLink) directLiLink.href = CONFIG.linkedinUrl;
  if (directMailLink) directMailLink.href = mailUrl;
  if (displayEmail) displayEmail.textContent = CONFIG.email;

  if (currentYear) currentYear.textContent = new Date().getFullYear();
}

// ============================================================================
// FUNCIONES DEL MODAL DE SERVICIOS (PUSH-UP)
// ============================================================================
window.openServiceModal = function(serviceKey) {
  const service = SERVICES_DATA[serviceKey];
  if (!service) return;

  modalTitle.textContent = service.title;
  modalCategory.textContent = service.category;
  modalPrice.textContent = service.launchPrice;
  modalPriceRegular.innerHTML = service.regularPriceHtml || "";
  modalDesc.textContent = service.desc;
  modalDuration.textContent = service.duration;
  modalModality.textContent = service.modality;

  // Estilo de insignia según si es aporte comunitario o servicio con precio lanzamiento
  if (service.isCommunity) {
    modalCategory.classList.add('badge-community');
    modalPrice.classList.add('free-tag');
  } else {
    modalCategory.classList.remove('badge-community');
    modalPrice.classList.remove('free-tag');
  }

  // Llenar la lista de entregables
  modalFeatures.innerHTML = service.features.map(feat => `
    <li>
      <span class="check-icon">✓</span>
      <span>${escapeHtml(feat)}</span>
    </li>
  `).join('');

  // Configurar botón prioritario de WhatsApp
  const waEncoded = encodeURIComponent(service.waMessage);
  modalWaBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waEncoded}`;

  if (service.isCommunity) {
    // Modalidad Ad Honorem: solo botón de WhatsApp solidario
    if (modalWaText) modalWaText.textContent = "Escribir a Fátima por WhatsApp (Sin costo)";
    if (modalMpBtn) modalMpBtn.style.display = "none";
    if (modalCalendlyBtn) modalCalendlyBtn.style.display = "none";
  } else {
    if (modalWaText) modalWaText.textContent = "Hablar con Fátima o Reservar por WhatsApp";

    // Botón Calendly para sesiones 1:1 y Combo Completo
    if (modalCalendlyBtn) {
      if (service.hasCalendly) {
        if (CONFIG.calendlyUrl && CONFIG.calendlyUrl.trim() !== "") {
          modalCalendlyBtn.href = CONFIG.calendlyUrl;
        } else {
          const calWaText = encodeURIComponent(`¡Hola Fátima! Quiero agendar mi sesión en Calendly para "${service.title}". ¿Me compartís el link de reserva?`);
          modalCalendlyBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${calWaText}`;
        }
        modalCalendlyBtn.style.display = "flex";
      } else {
        modalCalendlyBtn.style.display = "none";
      }
    }

    // Botón de Pago (Mercado Pago / Exterior USD)
    if (modalMpBtn) {
      const mpLink = CONFIG.mercadoPagoLinks[serviceKey];
      if (mpLink && mpLink.trim() !== "") {
        modalMpBtn.href = mpLink;
      } else {
        const mpWaText = encodeURIComponent(`¡Hola Fátima! Quiero contratar "${service.title}" a Precio Lanzamiento (${service.launchPrice}). ¿Me enviás los datos de pago y el formulario de relevamiento?`);
        modalMpBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${mpWaText}`;
      }
      modalMpBtn.style.display = "flex";
    }
  }

  // Abrir modal con animación
  serviceModal.classList.add('active');
  serviceModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeServiceModal = function() {
  serviceModal.classList.remove('active');
  serviceModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

// ============================================================================
// MODAL DE CONTACTO
// ============================================================================
window.openContactModal = function() {
  contactModal.classList.add('active');
  contactModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeContactModal = function() {
  contactModal.classList.remove('active');
  contactModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

// ============================================================================
// CERRAR AL TOCAR EL BACKDROP O CON ESCAPAR
// ============================================================================
if (serviceModal) {
  serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) closeServiceModal();
  });
}

if (contactModal) {
  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) closeContactModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeServiceModal();
    closeContactModal();
  }
});

// Utilidad para seguridad
function escapeHtml(string) {
  if (!string) return '';
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  initLinks();
});
