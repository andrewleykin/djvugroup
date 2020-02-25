(function() {
  $('.hero__slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'hero__pag',
    customPaging: function() {
      return '<span"></span>'
    }
  })
})()

$(document).ready(function () {
    svg4everybody({});
});
// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();