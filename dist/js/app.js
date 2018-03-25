$('.navigation').on('click','a', function(event){
	event.preventDefault();
	
	var id = $(this).attr("href"),
			top = $(id).offset().top;
	$('body,html').animate({scrollTop: top},1500);
});
(function($) {
$(function() {
$('ul.catalog__container_tabs').on('click', 'li:not(.active)', function(){
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.catalog__container').find('div.catalog__container_tab').removeClass('active').eq($(this).index()).addClass('active');
    });
 
});
})(jQuery);
$('#navi_open').click(function(){
    $('.header__menu, #navi_close').fadeIn(400); 
    $('#navi_open').fadeOut(400); 
  });
$(' #navi_close').click(function(){
			$('.header__menu, #navi_open').fadeOut(400); 
			$('#navi_close').fadeOut(400); 
	$('#navi_open').fadeIn(400);
		});

$('.slide').owlCarousel({
		loop:true,
    margin:10,
    nav:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.portfolio-box,.patron-box').owlCarousel({
		loop:true,
    margin:5,
    nav:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});