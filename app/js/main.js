$(document).ready(function() {

  // Main Slider
  $(".owl-carousel.main-slider__owl").owlCarousel({
    nav: false,
    navSpeed: 1000,
    dots: true,
    dotsSpeed: 1000,
    loop: true,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 10000,
    dragEndSpeed: 1000,
    items: 1,
    navText: ['', '']
  });

  // Menu Slider
  $(".owl-carousel.menu-slider__owl").owlCarousel({
    nav: true,
    navSpeed: 1000,
    dots: false,
    dotsSpeed: 1000,
    loop: true,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 10000,
    dragEndSpeed: 1000,
    navText: ['', ''],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 480 up
      501: {
        items: 3
      },
      // breakpoint from 768 up
      768: {
        items: 4
      }
    }
  });

  // E-commerce Slider
  $(".owl-carousel.ecommerce-slider__owl").owlCarousel({
    nav: true,
    navSpeed: 1000,
    dots: false,
    dotsSpeed: 1000,
    loop: true,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 10000,
    dragEndSpeed: 1000,
    items: 1,
    navText: ['', '']
  });

});
//End of Document Ready


//****************
//FUNCTIONS
//****************
