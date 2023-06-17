jQuery(document).ready(function ( $ ) {

  // Slick-slider
  //Project
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true
  });

  // AOS init
  AOS.init({
    once: true
  });
});