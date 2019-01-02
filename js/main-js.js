$(document).ready(function() {
    $('.slider-story-success').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        infinite: true,
        // autoplay: true,
        dots: true
    });

    $('.menu-dropdown').on('click', function() {
		$('.menu-dropdown>ul').slideToggle();
    });
    
    $('.menu-btn').on('click', function() {
		$(this).toggleClass('menu-btn_active');
		$('.top-menu').slideToggle();
	});

});
