/* ═══════════════════════════════════════════════════════
   SKILLS PAGE INTERACTIONS
═══════════════════════════════════════════════════════ */

// Initialize tilt cards for skill cards
initTiltCards('.skill-card, .category-header');

// Initialize magnetic buttons
initMagneticButtons('[data-magnetic]');

// Add hover glow effect to skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});

