document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.dest-card');
    const slider = document.getElementById('destSlider');

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentSlide = index;
        slider.style.transform = `translateX(-${index * 100}%)`;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    window.moveSlide = function(step) {
        showSlide(currentSlide + step);
    };

    showSlide(0);
});