
$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000
    });

    $('.quotes').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      arrows: false, /*arrows around are hidden*/

      autoplaySpeed: 500,
      fade: true,
      cssEase: 'linear'
    });


});