// ============================================
// PORTFOLIO VÍCTOR FLÓREZ - MAIN SCRIPT
// ============================================

// Strict mode for better error catching
'use strict';

// Configuration
const CONFIG = {
    isDevelopment: false, // Set to false for production
    emailJS: {
        publicKey: "Amqfsv_SSlZM5P7cs",
        serviceId: "service_bbio25o",
        templateId: "template_8h1wxlu"
    }
};

// Utility: Safe console logging
const logger = {
    log: (...args) => CONFIG.isDevelopment && console.log(...args),
    error: (...args) => CONFIG.isDevelopment && console.error(...args),
    warn: (...args) => CONFIG.isDevelopment && console.warn(...args)
};

// ============================================
// GSAP ANIMATIONS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        try {
            // Register ScrollTrigger plugin
            gsap.registerPlugin(ScrollTrigger);
            
            // === HERO ANIMATIONS - ENHANCED ===
            
            // Create master timeline for orchestrated animations
            const heroTimeline = gsap.timeline({
                defaults: { ease: "power3.out" }
            });
            
            // Set initial states
            gsap.set('.hero-label', { opacity: 0, y: -20 });
            gsap.set('.hero h1 span', { opacity: 0, y: 30, rotationX: -15 });
            gsap.set('.hero-subtitle', { opacity: 0, y: 20 });
            gsap.set('.profile-image', { opacity: 0, scale: 0.8, rotationY: -25 });
            gsap.set(['.cta-group .btn-primary', '.cta-group .btn-secondary'], { opacity: 0, y: 20, scale: 0.9 });
            
            // Orchestrated sequence
            heroTimeline
                // 1. Hero label slides down with fade
                .to('.hero-label', {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "back.out(1.2)"
                })
                // 2. Name appears word by word with 3D rotation
                .to('.hero h1 span', {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.5)",
                    clearProps: 'transform'
                }, "-=0.3")
                // 3. Profile image zooms in with 3D flip
                .to('.profile-image', {
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 1,
                    ease: "power3.out",
                    clearProps: 'transform'
                }, "-=0.6")
                // 4. Subtitle fades up
                .to('.hero-subtitle', {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out"
                }, "-=0.5")
                // 5. CTA buttons bounce in with stagger
                .to(['.cta-group .btn-primary', '.cta-group .btn-secondary'], {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "back.out(1.7)"
                }, "-=0.3");
            
            // Parallax effect on scroll (only if ScrollTrigger is available)
            if (typeof ScrollTrigger !== 'undefined') {
                const profileContainer = document.querySelector('.profile-container');
                if (profileContainer) {
                    gsap.to(profileContainer, {
                        y: 50,
                        scrollTrigger: {
                            trigger: '.hero',
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 1
                        }
                    });
                }
                
                // === BACKGROUND ANIMATIONS ===
                
                // Animate gradient orbs with slow, continuous movement
                const bgOrb1 = document.querySelector('.bg-orb-1');
                if (bgOrb1) {
                    gsap.to(bgOrb1, {
                        x: -100,
                        y: 100,
                        duration: 20,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut'
                    });
                }
                
                const bgOrb2 = document.querySelector('.bg-orb-2');
                if (bgOrb2) {
                    gsap.to(bgOrb2, {
                        x: 80,
                        y: -80,
                        duration: 25,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut'
                    });
                }
                
                const bgOrb3 = document.querySelector('.bg-orb-3');
                if (bgOrb3) {
                    gsap.to(bgOrb3, {
                        scale: 1.2,
                        duration: 15,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut'
                    });
                }
                
                // Subtle parallax on grid based on scroll
                const bgGrid = document.querySelector('.bg-grid');
                if (bgGrid) {
                    gsap.to(bgGrid, {
                        y: -200,
                        scrollTrigger: {
                            trigger: 'body',
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 1
                        }
                    });
                }
                
                // Mouse movement parallax effect (very subtle, throttled for performance)
                const orb1 = document.querySelector('.bg-orb-1');
                const orb2 = document.querySelector('.bg-orb-2');
                
                if (orb1 || orb2) {
                    let mouseTimeout;
                    document.addEventListener('mousemove', (e) => {
                        if (mouseTimeout) return;
                        mouseTimeout = setTimeout(() => {
                            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
                            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
                            
                            if (orb1) {
                                gsap.to(orb1, {
                                    x: moveX * 2,
                                    y: moveY * 2,
                                    duration: 2,
                                    ease: 'power2.out'
                                });
                            }
                            
                            if (orb2) {
                                gsap.to(orb2, {
                                    x: -moveX * 1.5,
                                    y: -moveY * 1.5,
                                    duration: 2,
                                    ease: 'power2.out'
                                });
                            }
                            
                            mouseTimeout = null;
                        }, 50);
                    });
                }
                
                // === SCROLL REVEAL ANIMATIONS ===
                
                // Animate section headers
                gsap.utils.toArray('.section-header').forEach(header => {
                    gsap.from(header.querySelector('.section-label'), {
                        opacity: 0,
                        y: 10,
                        duration: 0.25,
                        ease: "power2.out",
                        clearProps: 'all',
                        scrollTrigger: {
                            trigger: header,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        }
                    });
                    
                    gsap.from(header.querySelector('.section-title'), {
                        opacity: 0,
                        y: 10,
                        duration: 0.25,
                        delay: 0.01,
                        ease: "power2.out",
                        clearProps: 'all',
                        scrollTrigger: {
                            trigger: header,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        }
                    });
                    
                    const description = header.querySelector('.section-description');
                    if (description) {
                        gsap.from(description, {
                            opacity: 0,
                            y: 10,
                            duration: 0.25,
                            delay: 0.02,
                            ease: "power2.out",
                            clearProps: 'all',
                            scrollTrigger: {
                                trigger: header,
                                start: 'top 90%',
                                toggleActions: 'play none none none'
                            }
                        });
                    }
                });
                
                // Animate service cards with stagger
                gsap.from('.service-card', {
                    opacity: 0,
                    y: 20,
                    duration: 0.3,
                    stagger: 0.04,
                    ease: "power2.out",
                    clearProps: 'all',
                    scrollTrigger: {
                        trigger: '.services-grid',
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
                
                // Animate service numbers with scale and rotation
                gsap.from('.service-number', {
                    scale: 0,
                    rotation: -180,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                    clearProps: 'all',
                    scrollTrigger: {
                        trigger: '.services-grid',
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                });
                
                // Animate project cards with stagger
                gsap.from('.project-card', {
                    opacity: 0,
                    y: 20,
                    scale: 0.98,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "power2.out",
                    clearProps: 'all',
                    scrollTrigger: {
                        trigger: '.projects-grid',
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
                
                // Animate testimonial cards with advanced stagger
                gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
                    const timeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        }
                    });
                    
                    // Card container fade and slide up
                    timeline.from(card, {
                        opacity: 0,
                        y: 20,
                        duration: 0.25,
                        ease: "power2.out"
                    });
                    
                    // Quote icon bounce
                    timeline.from(card.querySelector('.quote-icon'), {
                        scale: 0,
                        rotation: -180,
                        duration: 0.2,
                        ease: "back.out(2)",
                        clearProps: 'all'
                    }, "-=0.2");
                    
                    // Testimonial text fade in
                    timeline.from(card.querySelector('.testimonial-text'), {
                        opacity: 0,
                        y: 10,
                        duration: 0.2,
                        ease: "power2.out",
                        clearProps: 'all'
                    }, "-=0.1");
                    
                    // Author section slide from left
                    timeline.from(card.querySelector('.testimonial-author'), {
                        opacity: 0,
                        x: -15,
                        duration: 0.2,
                        ease: "power2.out",
                        clearProps: 'all'
                    }, "-=0.1");
                    
                    // Avatar pop
                    timeline.from(card.querySelector('.author-avatar'), {
                        scale: 0,
                        duration: 0.2,
                        ease: "back.out(2)",
                        clearProps: 'all'
                    }, "-=0.15");
                });
                
                // Animate contact form
                gsap.from('.contact-form', {
                    opacity: 0,
                    x: -15,
                    duration: 0.3,
                    ease: "power2.out",
                    clearProps: 'all',
                    scrollTrigger: {
                        trigger: '.contact-container',
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
                
                gsap.from('.contact-info', {
                    opacity: 0,
                    x: 15,
                    duration: 0.3,
                    ease: "power2.out",
                    clearProps: 'all',
                    scrollTrigger: {
                        trigger: '.contact-container',
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            }
        } catch (error) {
            logger.error('GSAP animation error:', error);
            // Ensure all elements are visible if animation fails
            const elements = document.querySelectorAll('.hero h1, .hero-label, .hero-subtitle, .cta-group .btn-primary, .cta-group .btn-secondary, .profile-image');
            elements.forEach(el => {
                if (el) {
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                }
            });
        }
    } else {
        // GSAP not loaded - ensure all content is visible
        logger.log('GSAP not loaded, showing all content');
    }
}); // Close GSAP DOMContentLoaded

// ============================================
// LANGUAGE TOGGLE
// ============================================
const LanguageManager = (() => {
    let currentLang = 'es';
    
    const updateElements = () => {
        document.querySelectorAll('[data-es]').forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = el.getAttribute('data-' + currentLang);
            } else {
                el.textContent = el.getAttribute('data-' + currentLang);
            }
        });
    };
    
    const toggle = () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        const langBtn = document.querySelector('.lang-switch');
        if (langBtn) langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
        updateElements();
    };
    
    const getCurrent = () => currentLang;
    
    return { toggle, getCurrent };
})();

// ============================================
// MOBILE MENU
// ============================================
const MobileMenu = (() => {
    const toggle = () => {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        if (navLinks && menuToggle) {
            const isActive = navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        }
    };
    
    const close = () => {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        if (navLinks && menuToggle) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    };
    
    const init = () => {
        // Menu toggle button
        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', toggle);
        }
        
        // Close menu when clicking links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', close);
        });
    };
    
    return { init, toggle, close };
})();

// ============================================
// PROJECT CARDS
// ============================================
const ProjectCards = (() => {
    const handleClick = (e) => {
        const card = e.currentTarget;
        const url = card.dataset.url;
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e);
        }
    };
    
    const init = () => {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', handleClick);
            card.addEventListener('keypress', handleKeyPress);
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'link');
        });
    };
    
    return { init };
})();

// ============================================
// EMAIL SERVICE
// ============================================
const EmailService = (() => {
    const init = () => {
        if (typeof emailjs !== 'undefined') {
            emailjs.init({
                publicKey: CONFIG.emailJS.publicKey,
            });
        } else {
            logger.error('EmailJS not loaded');
        }
    };
    
    const send = (form) => {
        return new Promise((resolve, reject) => {
            if (typeof emailjs === 'undefined') {
                reject(new Error('EmailJS not available'));
                return;
            }
            
            emailjs.sendForm(CONFIG.emailJS.serviceId, CONFIG.emailJS.templateId, form)
                .then(response => {
                    logger.log('Email sent successfully:', response.status, response.text);
                    resolve(response);
                })
                .catch(error => {
                    logger.error('Email sending failed:', error);
                    reject(error);
                });
        });
    };
    
    return { init, send };
})();

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================
const ContactForm = (() => {
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return re.test(email);
    };
    
    const validateForm = (formData) => {
        const errors = [];
        
        if (!formData.name || formData.name.trim().length < 2) {
            errors.push('El nombre debe tener al menos 2 caracteres');
        }
        
        if (!validateEmail(formData.email)) {
            errors.push('Email inválido');
        }
        
        if (!formData.subject || formData.subject.trim().length < 3) {
            errors.push('El asunto debe tener al menos 3 caracteres');
        }
        
        if (!formData.message || formData.message.trim().length < 10) {
            errors.push('El mensaje debe tener al menos 10 caracteres');
        }
        
        return errors;
    };
    
    const showMessage = (elementId, show = true) => {
        const element = document.getElementById(elementId);
        if (element) {
            if (show) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = document.getElementById('submitBtn');
        const successMsg = document.getElementById('successMessage');
        const errorMsg = document.getElementById('errorMessage');
        
        // Hide previous messages
        showMessage('successMessage', false);
        showMessage('errorMessage', false);
        
        // Get form data
        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };
        
        // Validate
        const errors = validateForm(formData);
        if (errors.length > 0) {
            if (errorMsg) {
                errorMsg.querySelector('span').textContent = `✗ ${errors[0]}`;
                showMessage('errorMessage', true);
            }
            return;
        }
        
        // Disable button and show loading
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        const currentLang = LanguageManager.getCurrent();
        submitBtn.innerHTML = currentLang === 'es' ? 
            'Enviando... <span class="loading-spinner"></span>' : 
            'Sending... <span class="loading-spinner"></span>';
        
        try {
            await EmailService.send(form);
            
            // Show success message
            showMessage('successMessage', true);
            
            // Reset form
            form.reset();
            
            // Hide success message after 8 seconds
            setTimeout(() => showMessage('successMessage', false), 8000);
            
        } catch (error) {
            // Show error message
            showMessage('errorMessage', true);
            
            // Hide error message after 10 seconds
            setTimeout(() => showMessage('errorMessage', false), 10000);
            
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    };
    
    const init = () => {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', handleSubmit);
        }
    };
    
    return { init };
})();

// ============================================
// SMOOTH SCROLL
// ============================================
const SmoothScroll = (() => {
    const handleClick = (e) => {
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };
    
    const init = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleClick);
        });
    };
    
    return { init };
})();

// ============================================
// NAVIGATION SCROLL EFFECTS
// ============================================
const NavigationScroll = (() => {
    const nav = document.querySelector('nav');
    let lastScroll = 0;
    let isScrolled = false;

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        
        // Change nav style when scrolled down
        if (currentScroll > 50 && !isScrolled) {
            isScrolled = true;
            
            if (typeof gsap !== 'undefined') {
                // Animate to scrolled state
                gsap.to(nav, {
                    background: 'rgba(10, 10, 15, 0.98)',
                    duration: 0.3,
                    ease: 'power2.out',
                    onStart: () => {
                        nav.style.boxShadow = '0 8px 30px rgba(22, 163, 74, 0.15), 0 2px 10px rgba(0, 0, 0, 0.3)';
                        nav.style.borderBottom = '1px solid rgba(22, 163, 74, 0.2)';
                    }
                });
            } else {
                nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                nav.style.background = 'rgba(10, 10, 15, 0.98)';
                nav.style.borderBottom = '1px solid rgba(4, 120, 87, 0.2)';
            }
            
        } else if (currentScroll <= 50 && isScrolled) {
            isScrolled = false;
            
            if (typeof gsap !== 'undefined') {
                // Animate back to top state
                gsap.to(nav, {
                    background: 'rgba(10, 10, 15, 0.95)',
                    duration: 0.3,
                    ease: 'power2.out',
                    onStart: () => {
                        nav.style.boxShadow = 'none';
                        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
                    }
                });
            } else {
                nav.style.boxShadow = 'none';
                nav.style.background = 'rgba(10, 10, 15, 0.95)';
                nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
            }
        }
        
        lastScroll = currentScroll;
    };
    
    const initHoverEffects = () => {
        if (typeof gsap === 'undefined') return;
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    scale: 1.08,
                    color: '#16a34a',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            link.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    scale: 1,
                    color: '#b0b0b0',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    };
    
    const init = () => {
        window.addEventListener('scroll', handleScroll);
        initHoverEffects();
    };
    
    return { init };
})();

// ============================================
// APP INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language toggle
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', LanguageManager.toggle);
    }
    
    // Initialize all modules
    MobileMenu.init();
    ProjectCards.init();
    EmailService.init();
    ContactForm.init();
    SmoothScroll.init();
    NavigationScroll.init();
    
    logger.log('Portfolio initialized successfully');
});
