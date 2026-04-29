/* ═══════════════════════════════════════════════════════
   SHARED UTILITIES FOR ALL PAGES
═══════════════════════════════════════════════════════ */

// ── PRELOADER ──
const preloader = document.getElementById('preloader');
if (preloader) {
    const hidePreloader = () => {
        preloader.style.opacity = '0';
        preloader.style.pointerEvents = 'none';
        preloader.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    };
    
    // Hide on load event
    window.addEventListener('load', hidePreloader);
    
    // Fallback: hide after 3 seconds
    setTimeout(hidePreloader, 3000);
}

// ── CUSTOM CURSOR ──
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

if (cursorDot && cursorRing) {
    let curX = 0, curY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        curX = e.clientX;
        curY = e.clientY;
    });

    function updateCursor() {
        cursorDot.style.transform = `translate(${curX - 4}px, ${curY - 4}px)`;
        ringX += (curX - ringX) * 0.12;
        ringY += (curY - ringY) * 0.12;
        cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Hover state
    document.querySelectorAll('a, button, .btn, [data-magnetic]').forEach(el => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });
}

// ── NAVBAR SCROLL STATE ──
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ── MOBILE NAV TOGGLE ──
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
}

// ── PAGE TRANSITION ON NAV CLICKS ──
const pageTransition = document.getElementById('page-transition');

if (pageTransition) {
    document.querySelectorAll('[data-nav]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || href === '#' || href === window.location.pathname.split('/').pop()) return;
            e.preventDefault();

            pageTransition.style.transformOrigin = 'bottom';
            pageTransition.style.transform = 'scaleY(0)';
            pageTransition.style.transition = 'transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)';

            requestAnimationFrame(() => {
                pageTransition.style.transform = 'scaleY(1)';
            });

            setTimeout(() => {
                window.location.href = href;
            }, 550);
        });
    });

    window.addEventListener('load', () => {
        pageTransition.style.transformOrigin = 'top';
        pageTransition.style.transform = 'scaleY(1)';
        requestAnimationFrame(() => {
            pageTransition.style.transition = 'transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)';
            requestAnimationFrame(() => {
                pageTransition.style.transform = 'scaleY(0)';
            });
        });
    });
}

// ── SCROLL PROGRESS BAR ──
const scrollProg = document.getElementById('scroll-progress');
if (scrollProg) {
    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        if (h > 0) scrollProg.style.width = (window.scrollY / h * 100) + '%';
    }, { passive: true });
}

// ── 3D TILT EFFECT ON CARDS ──
function initTiltCards(selector) {
    document.querySelectorAll(selector).forEach(card => {
        card.classList.add('tilt-card');
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.03)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(600px) rotateY(0) rotateX(0) scale(1)';
        });
    });
}

// ── MAGNETIC BUTTONS ──
function initMagneticButtons(selector) {
    document.querySelectorAll(selector).forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}
