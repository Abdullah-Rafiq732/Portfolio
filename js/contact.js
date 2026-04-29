/* ═══════════════════════════════════════════════════════
   CONTACT PAGE INTERACTIONS
═══════════════════════════════════════════════════════ */

// Initialize tilt cards
initTiltCards('.contact-card, .contact-info-card');

// Form field glow effect
document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
    field.addEventListener('focus', () => {
        field.parentElement.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.15)';
    });
    field.addEventListener('blur', () => {
        field.parentElement.style.boxShadow = 'none';
    });
});

// Initialize magnetic buttons
initMagneticButtons('[data-magnetic]');

