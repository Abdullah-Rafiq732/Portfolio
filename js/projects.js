/* ═══════════════════════════════════════════════════════
   PROJECTS PAGE INTERACTIONS
═══════════════════════════════════════════════════════ */

// Initialize tilt cards for project and showcase cards
initTiltCards('.project-card, .showcase-card, .featured-project-card');

// Initialize magnetic buttons
initMagneticButtons('[data-magnetic]');

// Project card stagger animation on scroll
const projectCards = document.querySelectorAll('.project-card, .showcase-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.1) + 's';
});

