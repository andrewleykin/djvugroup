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
// Открытие\закрытие модалки под меню
$('.header__burger-menu').on('click', function(){
  $('.header__menu').addClass('active')
})

$('.header__burger-close').on('click', function(){
  $('.header__menu').removeClass('active')
})
