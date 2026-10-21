// Datos de Vacantes de ejemplo
const jobListings = [
  {
    id: 1,
    title: "HR Business Partner (HRBP)",
    category: "rrhh",
    modality: "Híbrido",
    modalityClass: "badge-hybrid",
    location: "Buenos Aires, Argentina",
    type: "Jornada Completa",
    description: "Buscamos un/a profesional para liderar la alineación entre las estrategias de personas y los objetivos de negocio de nuestros clientes tecnológicos.",
    tags: ["Estrategia RRHH", "People Analytics", "Gestión de Talento", "Inglés Avanzado"]
  },
  {
    id: 2,
    title: "Senior Fullstack Developer (Node.js & React)",
    category: "tecnologia",
    modality: "Remoto",
    modalityClass: "badge-remote",
    location: "Latinoamérica (Remoto)",
    type: "Full-time",
    description: "Importante fintech internacional busca desarrollador Senior con sólida experiencia en arquitecturas escalables en la nube y microservicios.",
    tags: ["Node.js", "React", "TypeScript", "AWS", "Docker"]
  },
  {
    id: 3,
    title: "Especialista en Atracción y Selección IT",
    category: "rrhh",
    modality: "Remoto",
    modalityClass: "badge-remote",
    location: "Remoto",
    type: "Full-time",
    description: "Responsable de hunting técnico, filtrado de perfiles IT especializados y acompañamiento en todo el embudo de reclutamiento.",
    tags: ["IT Recruitment", "Sourcing", "LinkedIn Recruiter", "Psicología"]
  },
  {
    id: 4,
    title: "Account Executive B2B - Soluciones SaaS",
    category: "ventas",
    modality: "Híbrido",
    modalityClass: "badge-hybrid",
    location: "Córdoba, Argentina",
    type: "Full-time",
    description: "Buscamos un perfil comercial con experiencia en venta consultiva de software para empresas medianas y corporativas.",
    tags: ["Ventas B2B", "CRM HubSpot", "Negociación", "Cierre de Cuentas"]
  },
  {
    id: 5,
    title: "Analista Senior de Finanzas y Control de Gestión",
    category: "finanzas",
    modality: "Presencial",
    modalityClass: "badge-onsite",
    location: "Buenos Aires, Argentina",
    type: "Full-time",
    description: "Encargado de presupuestación anual, análisis de desvíos, flujos de fondos y reporting financiero a la dirección.",
    tags: ["Modelos Financieros", "Power BI", "Excel Avanzado", "Auditoría"]
  },
  {
    id: 6,
    title: "Product Designer (UI/UX Senior)",
    category: "tecnologia",
    modality: "Remoto",
    modalityClass: "badge-remote",
    location: "Latinoamérica (Remoto)",
    type: "Full-time",
    description: "Diseño centrado en el usuario para aplicaciones web y mobile. Creación de Design Systems, prototipado y pruebas con usuarios.",
    tags: ["Figma", "Design Systems", "User Research", "Wireframing"]
  }
];

// Elementos del DOM
const jobsContainer = document.getElementById('jobs-container');
const searchInput = document.getElementById('job-search-input');
const filterPills = document.getElementById('filter-pills');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const applyModal = document.getElementById('apply-modal');
const modalTitle = document.getElementById('modal-title');
const modalJobTitle = document.getElementById('modal-job-title');
const applyForm = document.getElementById('apply-form');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const currentYearSpan = document.getElementById('current-year');

// Establecer año actual en el footer
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// Variables de estado
let activeCategory = 'all';
let searchQuery = '';

// Renderizar vacantes
function renderJobs() {
  if (!jobsContainer) return;

  const filteredJobs = jobListings.filter(job => {
    const matchesCategory = activeCategory === 'all' || job.category === activeCategory;
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (filteredJobs.length === 0) {
    jobsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; background: #ffffff; border-radius: 12px; border: 1px dashed var(--border-color);">
        <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 1rem;">No se encontraron vacantes con los criterios seleccionados.</p>
        <button class="btn btn-secondary" onclick="resetFilters()">Restablecer Filtros</button>
      </div>
    `;
    return;
  }

  jobsContainer.innerHTML = filteredJobs.map(job => `
    <article class="job-item">
      <div class="job-info">
        <div class="job-header-row">
          <h3 class="job-title">${escapeHtml(job.title)}</h3>
          <span class="job-badge ${job.modalityClass}">${job.modality}</span>
        </div>
        <div class="job-meta">
          <span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${escapeHtml(job.location)}
          </span>
          <span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            ${escapeHtml(job.type)}
          </span>
        </div>
        <p class="job-description">${escapeHtml(job.description)}</p>
        <div class="job-tags">
          ${job.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
      <div>
        <button class="btn btn-primary" onclick="openApplyModal('${escapeHtml(job.title)}')">
          Postularme
        </button>
      </div>
    </article>
  `).join('');
}

// Filtros por categoría
if (filterPills) {
  filterPills.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.getAttribute('data-category');
      renderJobs();
    }
  });
}

// Búsqueda por texto
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderJobs();
  });
}

// Restablecer filtros
window.resetFilters = function() {
  activeCategory = 'all';
  searchQuery = '';
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === 'all');
  });
  renderJobs();
};

// Menú móvil responsive
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

// Modal de postulación
window.openApplyModal = function(jobTitle) {
  if (!applyModal) return;
  modalTitle.textContent = `Postular a: ${jobTitle}`;
  modalJobTitle.value = jobTitle;
  applyModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeApplyModal = function() {
  if (!applyModal) return;
  applyModal.classList.remove('active');
  document.body.style.overflow = '';
  if (applyForm) applyForm.reset();
};

// Cerrar modal al hacer clic en el backdrop
if (applyModal) {
  applyModal.addEventListener('click', (e) => {
    if (e.target === applyModal) {
      closeApplyModal();
    }
  });
}

// Envío del formulario de postulación
if (applyForm) {
  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const applicantName = document.getElementById('applicant-name').value;
    const position = modalJobTitle.value;

    closeApplyModal();
    showToast(`¡Gracias ${applicantName}! Tu postulación para "${position}" ha sido enviada con éxito.`);
  });
}

// Envío del formulario de contacto
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    showToast(`¡Gracias ${name}! Hemos recibido tu consulta. Nos contactaremos a la brevedad.`);
    contactForm.reset();
  });
}

// Mostrar Toast
function showToast(message) {
  if (!toast) return;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

// Utilidad para prevenir inyecciones XSS
function escapeHtml(string) {
  if (!string) return '';
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', () => {
  renderJobs();
});
