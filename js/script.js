
/* ═══════════════════════════════════════════════════════
   INDEX PAGE INTERACTIONS
═══════════════════════════════════════════════════════ */

// Initialize tilt cards for index page
initTiltCards('.service-card, .project-card, .showcase-card, .testimonial-card, .process-step, .gateway-card, .stat-card');

// Initialize magnetic buttons
initMagneticButtons('.cta-primary, .cta-secondary, .cta-banner-actions .btn, [data-magnetic]');

// Marquee animation setup
document.addEventListener('DOMContentLoaded', () => {
    const marquees = document.querySelectorAll('.marquee-track.animate');
    marquees.forEach(marquee => {
        // Ensure infinite scroll animation works
        const itemWidth = marquee.querySelector('.marquee-item').offsetWidth;
        const gap = parseInt(window.getComputedStyle(marquee).gap) || 48;
        marquee.style.animationDuration = '40s';
    });
});

