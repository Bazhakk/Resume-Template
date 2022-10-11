$(document).ready(function(){

  // Slick-slider
  $('.slider').slick({
    prevArrow: $('.slider__prev'),
    nextArrow: $('.slider__next')
  });

  // AOS init
  AOS.init({
    once: true
  });
});