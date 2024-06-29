let lastScrollY = window.scrollY;

const onScroll = () => {
    const header = document.querySelector('.custom-navbar');
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 160) {
        header.classList.add('navbar-scrolled');
    } else {
        header.classList.remove('navbar-scrolled');
    }
};

window.addEventListener('scroll', () => {
    if (window.scrollY !== lastScrollY) {
        lastScrollY = window.scrollY;
        window.requestAnimationFrame(onScroll);
    }
});

class NavigationHelper {

    constructor() {
        this.scrollPosition = window.scrollY;
        this.lastPosition = window.scrollY;
        this.header = document.querySelector('.custom-navbar');

        this.onScroll = () => {
            this.setScrollPosition();

            if (this.scrollPosition >= 160) {
                this.header.classList.add('navbar-scrolled');
            } else {
                this.header.classList.remove('navbar-scrolled');
            }
        };
    }

    setScrollPosition() {
        this.scrollPosition = window.scrollY;
    }

    setLastScrollPosition(pos) {
        this.lastPosition = pos; 
    }

    checkNav() {
        if (window.scrollY !== this.lastPosition) {
            this.setLastScrollPosition(window.scrollY);
            window.requestAnimationFrame(this.onScroll());
        }
    }
}