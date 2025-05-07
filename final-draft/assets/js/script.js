$(document).ready(function() {
    // Initialize each telescope section slider
    $('').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 4000,
      appendDots: $('telescope-slider .slider-dots'),
      prevArrow: '<button class="prev-btn">←</button>',
      nextArrow: '<button class="next-btn">→</button>'
    });

    $('.telescope-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
      

    
  });