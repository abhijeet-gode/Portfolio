document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('visible');
            } else {
                slide.classList.remove('visible');
            }
        });
    };

    // Show the first slide initially
    showSlide(currentIndex);

    // Detect scroll and show the next slide
    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        slides.forEach((slide, i) => {
            const slideTop = slide.getBoundingClientRect().top;
            if (slideTop < viewportHeight - 100) {
                slide.classList.add('visible');
            } else {
                slide.classList.remove('visible');
            }
        });
    });
});


window.addEventListener('scroll', function() {
    var aboutSection = document.querySelector('.about-section-container');
    var sectionPosition = aboutSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3; // Trigger the effect when the section is 1/3 into the viewport

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('visible');
    }
});

window.addEventListener('scroll', function() {
    var aboutSection = document.querySelector('.about-container');
    var detailsSection = document.querySelector('.about-details-container');
    var sectionPosition = aboutSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('visible');
        detailsSection.classList.add('visible');
    }
});


// Example for scroll-based visibility trigger
window.addEventListener('scroll', function() {
    const aboutDetails = document.querySelectorAll('.about-details-container');
    aboutDetails.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});


window.addEventListener('scroll', function() {
    const educationContainers = document.querySelectorAll('.education-container, .education-entry');
    educationContainers.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});
