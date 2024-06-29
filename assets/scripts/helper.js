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

    addFunctionToDomEvent(domEvent, callback) {
        document.addEventListener(domEvent, callback);
    }

    addFunctionToWindowEvent(windowEvent, callback) {
        window.addEventListener(windowEvent, callback);
    }
}
