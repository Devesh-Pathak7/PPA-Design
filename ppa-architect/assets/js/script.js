/* ============================================
   PPA ARCHITECT - MINIMAL JAVASCRIPT
   Clean, Fast, Production-Ready
   ============================================ */

const CONFIG = {
    whatsappNumber: '919595787780',
    whatsappMessage: 'Hello Piyush Pore Architects, I would like to discuss a project.',
    mobileBreakpoint: 768
};

const DOM = {
    navbar: document.getElementById('navbar'),
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav-link'),
    whatsappLinks: document.querySelectorAll('.whatsapp-link'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    galleryItems: document.querySelectorAll('.gallery-item'),
    lightbox: document.getElementById('lightbox'),
    lightboxImage: document.getElementById('lightboxImage'),
    lightboxTitle: document.getElementById('lightboxTitle'),
    lightboxDesc: document.getElementById('lightboxDesc'),
    lightboxClose: document.getElementById('lightboxClose'),
    mobileBar: document.getElementById('mobileBar'),
    floatingWhatsapp: document.getElementById('floatingWhatsapp')
};

/**
 * Encode WhatsApp message
 */
function encodeWhatsAppMsg(msg) {
    return encodeURIComponent(msg);
}

/**
 * Get WhatsApp URL
 */
function getWhatsAppUrl(customMsg = null) {
    const msg = customMsg || CONFIG.whatsappMessage;
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeWhatsAppMsg(msg)}`;
}

/**
 * Initialize WhatsApp links
 */
function initWhatsApp() {
    DOM.whatsappLinks.forEach(link => {
        link.href = getWhatsAppUrl();
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    });
}

/**
 * Toggle menu
 */
function toggleMenu() {
    DOM.menuToggle.classList.toggle('active');
    DOM.navMenu.classList.toggle('active');
}

function closeMenu() {
    DOM.menuToggle.classList.remove('active');
    DOM.navMenu.classList.remove('active');
}

/**
 * Initialize menu
 */
function initMenu() {
    DOM.menuToggle.addEventListener('click', toggleMenu);
    
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            closeMenu();
        }
    });
}

/**
 * Navbar scroll effect
 */
function initNavbarScroll() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            DOM.navbar.classList.add('scrolled');
        } else {
            DOM.navbar.classList.remove('scrolled');
        }
        lastScroll = window.scrollY;
    });
}

/**
 * Scroll reveal animation
 */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.fade-in-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || '0s';
                entry.target.style.animationDelay = delay;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

/**
 * Filter gallery
 */
function initGalleryFilter() {
    if (DOM.filterBtns.length === 0) return;
    
    DOM.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            DOM.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            const filter = btn.dataset.filter;
            DOM.galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

/**
 * Lightbox functionality
 */
function initLightbox() {
    if (DOM.galleryItems.length === 0) return;
    
    DOM.galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const img = item.querySelector('img');
            const overlay = item.querySelector('.gallery-overlay');
            
            DOM.lightboxImage.src = img.src;
            DOM.lightboxImage.alt = img.alt;
            DOM.lightboxTitle.textContent = overlay.querySelector('h3').textContent;
            DOM.lightboxDesc.textContent = overlay.querySelector('p').textContent;
            
            DOM.lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    DOM.lightboxClose.addEventListener('click', closeLightbox);
    DOM.lightbox.addEventListener('click', (e) => {
        if (e.target === DOM.lightbox) {
            closeLightbox();
        }
    });
    
    // ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    DOM.lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * Mobile bar visibility
 */
function initMobileBar() {
    const updateBar = () => {
        if (window.innerWidth <= CONFIG.mobileBreakpoint) {
            DOM.mobileBar.classList.add('active');
            if (DOM.floatingWhatsapp) {
                DOM.floatingWhatsapp.style.display = 'none';
            }
        } else {
            DOM.mobileBar.classList.remove('active');
            if (DOM.floatingWhatsapp) {
                DOM.floatingWhatsapp.style.display = 'flex';
            }
        }
    };
    
    updateBar();
    window.addEventListener('resize', updateBar);
}

/**
 * Smooth scroll for data-scroll links
 */
function initSmoothScroll() {
    document.querySelectorAll('[data-scroll]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    closeMenu();
                }
            }
        });
    });
}

/**
 * Initialize all
 */
function init() {
    initWhatsApp();
    initMenu();
    initNavbarScroll();
    initScrollReveal();
    initGalleryFilter();
    initLightbox();
    initMobileBar();
    initSmoothScroll();
    
    console.log('PPA - Initialized');
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
