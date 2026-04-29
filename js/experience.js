/* ═══════════════════════════════════════════════════════
   EXPERIENCE PAGE INTERACTIONS
═══════════════════════════════════════════════════════ */

// Initialize tilt cards for timeline and education items
initTiltCards('.timeline-item, .education-card, .certification-badge, .experience-card');

// Initialize magnetic buttons
initMagneticButtons('[data-magnetic]');

// Add stagger animation delays to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.animationDelay = (index * 0.08) + 's';
});

