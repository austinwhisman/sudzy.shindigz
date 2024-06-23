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