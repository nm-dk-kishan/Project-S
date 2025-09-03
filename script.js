document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.dest-card');
    const slider = document.getElementById('destSlider');

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentSlide = index;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    window.moveSlide = function(step) {
        showSlide(currentSlide + step);
    };

    showSlide(0);

    let attrIndex = 0;
    const track = document.getElementById("attrTrack");
    const totalCards = document.querySelectorAll(".attr-card").length;
    const cardsPerView = 4;

    function moveAttrSlide(direction) {
        attrIndex += direction;
        if (attrIndex < 0) attrIndex = 0;
        if (attrIndex > totalCards - cardsPerView) {
            attrIndex = totalCards - cardsPerView;
        }
        const slideWidth = document.querySelector(".attr-card").offsetWidth + 20; // card + gap
        track.style.transform = `translateX(-${attrIndex * slideWidth}px)`;
    }

    window.moveAttrSlide = moveAttrSlide;
});