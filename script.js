// ============================================================================
// CONFIGURACIÓN PERSONALIZABLE DE FÁTIMA QUEVEDO
// Puedes modificar tus enlaces, número de WhatsApp y precios aquí mismo:
// ============================================================================
const CONFIG = {
  // Tu número de WhatsApp con código de país (Ej: 54911... para Argentina)
  // Reemplaza "5491123456789" por tu número real cuando lo desees:
  whatsappNumber: "5491123456789",

  // Correo de contacto
  email: "fatimaquevedom@outlook.com",

  // Redes Sociales
  linkedinUrl: "https://www.linkedin.com/in/fatimaquevedom",
  instagramUrl: "https://www.instagram.com/",

  // Links de cobro de Mercado Pago para cada servicio:
  // (Pega aquí tus links de Mercado Pago como https://mpago.la/xxxxxx)
  mercadoPagoLinks: {
    asesoria: "",      // Ejemplo: "https://mpago.la/1A2B3C"
    cv: "",            // Ejemplo: "https://mpago.la/4D5E6F"
    cv_linkedin: "",   // Ejemplo: "https://mpago.la/7G8H9I"
    talleres: ""       // Ejemplo: "https://mpago.la/0J1K2L"
  },

  // Precios sugeridos (puedes cambiarlos cuando quieras):
  prices: {
    asesoria: "$35.000 ARS",
    cv: "$28.000 ARS",
    cv_linkedin: "$45.000 ARS",
    talleres: "Consultar cupos"
  }
};

// ============================================================================
// INFORMACIÓN DE LOS SERVICIOS Y POP-UPS
// ============================================================================
const SERVICES_DATA = {
  asesoria: {
    title: "Asesoría Laboral 1:1",
    category: "SESIÓN INDIVIDUAL",
    priceKey: "asesoria",
    desc: "Sesión personalizada de 60 minutos enfocada 100% en tus metas laborales para potenciar tu seguridad y destacar en entrevistas.",
    features: [
      "Diagnóstico profundo de tu perfil y momento profesional actual.",
      "Simulación de entrevistas por competencias utilizando el método STAR.",
      "Feedback constructivo sobre tu comunicación verbal y no verbal.",
      "Estrategia personalizada para negociación salarial y preguntas difíciles.",
      "Plan de acción con pasos concretos para tus próximas postulaciones."
    ],
    duration: "60 minutos (En vivo)",
    modality: "Google Meet o Zoom",
    waMessage: "¡Hola Fátima! Me interesa agendar la Asesoría Laboral 1:1. ¿Qué días y horarios tienes disponibles?"
  },

  cv: {
    title: "Optimización Estratégica de CV",
    category: "REDACCIÓN & DISEÑO",
    priceKey: "cv",
    desc: "Transformamos tu CV en una herramienta de alto impacto optimizada para superar los filtros ATS y captar el interés de reclutadores en los primeros 6 segundos.",
    features: [
      "Estructura moderna y 100% compatible con filtros ATS (Applicant Tracking Systems).",
      "Redacción estratégica enfocada en logros medibles, funciones clave y palabras clave.",
      "Eliminación de información redundante para lograr un CV conciso de 1 o 2 páginas.",
      "Entrega en formato PDF listo para enviar y formato editable (Word/Google Docs).",
      "1 ronda de revisiones y ajustes incluida."
    ],
    duration: "Entrega en 3 a 5 días hábiles",
    modality: "100% Online (Asincrónico)",
    waMessage: "¡Hola Fátima! Quiero optimizar mi CV para tener más entrevistas. ¿Cómo comenzamos?"
  },

  cv_linkedin: {
    title: "Pack Completo: CV + LinkedIn ⭐",
    category: "TRANSFORMACIÓN INTEGRAL",
    priceKey: "cv_linkedin",
    desc: "La solución definitiva para que no solo postules con éxito, sino para que sean los reclutadores quienes te encuentren y te contacten primero.",
    features: [
      "Todo lo incluido en la Optimización Estratégica de CV.",
      "Optimización integral de tu perfil de LinkedIn (Titular magnético y sección 'Acerca de').",
      "Estrategia de palabras clave SEO para posicionarte en las búsquedas de reclutadores.",
      "Estructuración de tu experiencia, aptitudes y recomendaciones.",
      "Guía práctica de networking efectivo para conectar con decisores en tu área."
    ],
    duration: "Entrega en 5 a 7 días hábiles",
    modality: "100% Online",
    waMessage: "¡Hola Fátima! Me gustaría contratar el Pack Completo de CV + LinkedIn. ¿Cómo coordinamos?"
  },

  talleres: {
    title: "Talleres de CV (Workshops Grupales)",
    category: "CAPACITACIÓN & PRÁCTICA",
    priceKey: "talleres",
    desc: "Workshops prácticos e interactivos en vivo donde aprenderás los secretos del reclutamiento actual para armar tu CV ganador.",
    features: [
      "Clase online en vivo de 2 horas con espacio para dudas y preguntas.",
      "Análisis de casos reales y errores comunes que descartan candidatos.",
      "Plantillas descargables en formatos profesionales y editables.",
      "Checklist paso a paso para auditar tu propio CV.",
      "Grabación del taller con acceso durante 30 días."
    ],
    duration: "2 horas en vivo",
    modality: "Vía Zoom / Google Meet",
    waMessage: "¡Hola Fátima! Quisiera consultar por las próximas fechas y cupos disponibles para el Taller de CV."
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
const modalDesc = document.getElementById('modal-desc');
const modalFeatures = document.getElementById('modal-features');
const modalDuration = document.getElementById('modal-duration');
const modalModality = document.getElementById('modal-modality');
const modalMpBtn = document.getElementById('modal-mp-btn');
const modalWaBtn = document.getElementById('modal-wa-btn');

// Redes sociales principales
const socialWa = document.getElementById('social-wa');
const socialLi = document.getElementById('social-li');
const socialIg = document.getElementById('social-ig');
const socialMail = document.getElementById('social-mail');

// Contacto modal
const directWaLink = document.getElementById('direct-wa-link');
const directLiLink = document.getElementById('direct-li-link');
const directMailLink = document.getElementById('direct-mail-link');
const displayEmail = document.getElementById('display-email');
const currentYear = document.getElementById('current-year');

// ============================================================================
// INICIALIZACIÓN DE ENLACES
// ============================================================================
function initLinks() {
  const defaultWaText = encodeURIComponent("¡Hola Fátima! Me comunico desde tu página web para hacerte una consulta.");
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${defaultWaText}`;
  const mailUrl = `mailto:${CONFIG.email}`;

  if (socialWa) socialWa.href = waUrl;
  if (socialLi) socialLi.href = CONFIG.linkedinUrl;
  if (socialIg) socialIg.href = CONFIG.instagramUrl;
  if (socialMail) socialMail.href = mailUrl;

  if (directWaLink) directWaLink.href = waUrl;
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
  modalPrice.textContent = CONFIG.prices[service.priceKey] || "Consultar";
  modalDesc.textContent = service.desc;
  modalDuration.textContent = service.duration;
  modalModality.textContent = service.modality;

  // Llenar la lista de beneficios con tildes verdes
  modalFeatures.innerHTML = service.features.map(feat => `
    <li>
      <span class="check-icon">✓</span>
      <span>${escapeHtml(feat)}</span>
    </li>
  `).join('');

  // Configurar botón de WhatsApp
  const waEncoded = encodeURIComponent(service.waMessage);
  modalWaBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waEncoded}`;

  // Configurar botón de Mercado Pago
  const mpLink = CONFIG.mercadoPagoLinks[serviceKey];
  if (mpLink && mpLink.trim() !== "") {
    modalMpBtn.href = mpLink;
    modalMpBtn.style.display = "flex";
  } else {
    // Si aún no ha configurado el link de Mercado Pago, redirige amablemente a WhatsApp para coordinar el pago
    const mpWaText = encodeURIComponent(`¡Hola Fátima! Deseo contratar "${service.title}" y pagar mediante Mercado Pago. ¿Me envías el link de pago?`);
    modalMpBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${mpWaText}`;
    modalMpBtn.style.display = "flex";
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
