// ============================================================================
// FÁTIMA QUEVEDO | RRHH & CARRERA
// Configuración limpia y directa a WhatsApp
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const currentYear = document.getElementById('current-year');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});
