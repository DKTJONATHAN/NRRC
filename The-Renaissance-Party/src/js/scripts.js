document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
        revealSections();
    }, 3000);

    function revealSections() {
        const sections = document.querySelectorAll('.slide-in');
        sections.forEach(section => {
            section.classList.add('visible');
        });
    }

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});