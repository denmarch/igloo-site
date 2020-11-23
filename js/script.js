var slides = document.querySelectorAll('.slider__show .slider__foto');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
    slides[currentSlide].className = 'slider__foto';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider__foto slider__foto-showing';
}

var playing = true;
var pauseButton = document.getElementsByClassName('slider__controls-pause')[0];
console.log(pauseButton);

function pauseSlideshow(){
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide,5000);
}

pauseButton.onclick = function(){
    if(playing) {
    console.log('Сработало условие true');
    pauseSlideshow(); }
    else {
    console.log('Сработало условие false');
    playSlideshow(); }
};

$(document).ready(function(){
  $('.slick_carousel').slick();
});