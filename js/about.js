/* ═══════════════════════════════════════════════════════
   ABOUT PAGE INTERACTIONS
═══════════════════════════════════════════════════════ */

// Initialize tilt cards for About page
initTiltCards('.value-card, .bio-detail, .journey-item');

// Initialize magnetic buttons
initMagneticButtons('[data-magnetic]');

/* ═══════════════════════════════════════════════════════
   ABOUT PAGE ANIMATIONS
   Fix: all content starts at opacity:0 — GSAP drives
   the reveal so nothing stays hidden.
═══════════════════════════════════════════════════════ */
(function () {
    // Guard: GSAP may not be loaded yet if called too early
    if (typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    /* ── HERO ENTRY (runs immediately after preloader) ── */
    function runAboutEntry() {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
            .to('.section-label', {
                opacity: 1, x: 0, duration: 0.8
            })
            .to('.about-hero h1 .line-inner', {
                y: '0%', duration: 1.1, stagger: 0.15
            }, '-=0.5')
            .to('.about-hero-text', {
                opacity: 1, y: 0, duration: 0.9
            }, '-=0.4');
    }

    // Run after preloader hides (shared.js triggers on 'load')
    window.addEventListener('load', () => {
        // Small delay so preloader fade-out finishes first
        setTimeout(runAboutEntry, 600);
    });

    /* ── BIO SECTION ── */
    ScrollTrigger.create({
        trigger: '.bio-section',
        start: 'top 80%',
        onEnter: () => {
            gsap.to('.bio-portrait',  { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' });
            gsap.to('.bio-text-col',  { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.15 });
        }
    });

    /* ── JOURNEY SECTION ── */
    gsap.to('.journey-heading', {
        scrollTrigger: { trigger: '.journey', start: 'top 80%', toggleActions: 'play none none reverse' },
        opacity: 1, duration: 0.8, ease: 'power2.out'
    });
    document.querySelectorAll('.journey-item').forEach((item, i) => {
        gsap.to(item, {
            scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none reverse',
                onEnter: () => item.classList.add('visible'),
                onLeaveBack: () => item.classList.remove('visible')
            },
            opacity: 1, y: 0, duration: 0.7, delay: i * 0.1, ease: 'power2.out'
        });
    });

    /* ── VALUES SECTION ── */
    gsap.to('.values-heading', {
        scrollTrigger: { trigger: '.values', start: 'top 80%', toggleActions: 'play none none reverse' },
        opacity: 1, duration: 0.8, ease: 'power2.out'
    });
    document.querySelectorAll('.value-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none reverse' },
            opacity: 1, y: 0, duration: 0.7, delay: i * 0.08, ease: 'power2.out'
        });
    });

    /* ── APPROACH SECTION ── */
    gsap.to('.approach-heading', {
        scrollTrigger: { trigger: '.approach', start: 'top 80%', toggleActions: 'play none none reverse' },
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out'
    });
    gsap.to('.approach-desc', {
        scrollTrigger: { trigger: '.approach', start: 'top 75%', toggleActions: 'play none none reverse' },
        opacity: 1, y: 0, duration: 0.8, delay: 0.12, ease: 'power2.out'
    });
    document.querySelectorAll('.approach-step').forEach((step, i) => {
        gsap.to(step, {
            scrollTrigger: { trigger: step, start: 'top 90%', toggleActions: 'play none none reverse' },
            opacity: 1, y: 0, duration: 0.7, delay: i * 0.1, ease: 'power2.out'
        });
    });

    /* ── FALLBACK: force-reveal anything still hidden after 4 s ── */
    setTimeout(() => {
        document.querySelectorAll(
            '.section-label, .about-hero h1 .line-inner, .about-hero-text, ' +
            '.bio-portrait, .bio-text-col, .journey-heading, .journey-item, ' +
            '.values-heading, .value-card, .approach-heading, .approach-desc, .approach-step'
        ).forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }, 4000);
}());

