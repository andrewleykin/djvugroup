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
