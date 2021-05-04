$(document).ready(function () {
   $('.slider-principal').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
   });

   // menu mobile
   $('.menu-toggle').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('active');
      $('.header-2').toggleClass('active');
   });

});
