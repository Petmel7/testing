function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    const button = document.querySelector('.scroll-to-top');
    const main = document.querySelector('main');
    const sidebarRight = document.querySelector('.sidebar-right');
    const triggerPoint = main.offsetTop + main.clientHeight - window.innerHeight;

    if (window.scrollY > triggerPoint) {
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
});

document.querySelector('.scroll-to-top').addEventListener('click', scrollToTop);