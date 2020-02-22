// Начальная функция
$('.hero__pag-item').first().addClass('active');
$('.hero__pag-item').on('click', function(){
	$('.hero__pag-item').each(function(){
		$(this).removeClass('active')
	});
	$(this).addClass('active');
	$('.hero__pag-item').each(function(index){
		if($(this).hasClass('active')) {
			$('.hero__slider').css('left', -100 * index + "%")
		}
	})
})

