class UtilityHelper {

    constructor() {
        console.log('helper initialized');
    }

    initFadeInListener() {
        this.fadeInListener();
    }

    fadeInListener() {
        const faders = document.querySelectorAll('.fade-in');

        const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -50px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    initNavNightTimeEffect() {
        const navNode = document.querySelector('.custom-navbar');
        const glowSection = document.querySelector('.glow-section.hero-section');

        if (!navNode || !glowSection) {
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.65
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navNode.classList.add('night-time');
                } else {
                    navNode.classList.remove('night-time');
                }
            });
        }, observerOptions);

        observer.observe(glowSection);
    }

    addFunctionToDomEvent(domEvent, callback) {
        document.addEventListener(domEvent, callback);
    }

    addFunctionToWindowEvent(windowEvent, callback) {
        window.addEventListener(windowEvent, callback);
    }
}
