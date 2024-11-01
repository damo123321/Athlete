document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.explore');
    const hoverSound = document.getElementById('hover-sound');
    const hamburger = document.getElementById('hamburger');
    const fullPageMenu = document.getElementById('full-page-menu');

    button.addEventListener('mouseover', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    hamburger.addEventListener('click', () => {
        fullPageMenu.classList.toggle('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === fullPageMenu) {
            fullPageMenu.classList.remove('active');
        }
    });

    const menuOptions = document.querySelectorAll('.menu-option .circle');
    menuOptions.forEach(circle => {
        circle.addEventListener('mouseover', () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });

    fullPageMenu.addEventListener('click', (e) => {
        const targetId = e.target.closest('.menu-option')?.id; 
        if (targetId) {
            fullPageMenu.classList.remove('active'); 
            const targetSection = document.getElementById(targetId + '-section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    const exploreButton = document.querySelector('.explore');
    const exploreSection = document.getElementById('explore-section');

    exploreButton.addEventListener('click', () => {
        exploreSection.style.display = 'flex';
        exploreSection.scrollIntoView({ behavior: 'smooth' });
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-image');
    const descriptionElement = document.getElementById('explore-info');
    const descriptions = [
        "WEIGHT LIFTING",
        "POWER LIFTING",
        "CALISTHENICS"
    ];

    function updateSlide() {
        const totalSlides = slides.length;
        const slideWidth = slides[0].clientWidth;
        const offset = -currentSlide * slideWidth;

        document.querySelector('.carousel-slide').style.transform = `translateX(${offset}px)`;
        descriptionElement.textContent = descriptions[currentSlide];
    }

    window.moveSlide = function (direction) {
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        updateSlide();
    };
});
