var slides = document.querySelectorAll('.slider__show .slider__foto');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slider__foto';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider__foto-showing';
}
