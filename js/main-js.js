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

    $('.menu-dropdown>span').click(function() {
        $(this).next().next('ul').slideToggle();
        $(this).closest('li').siblings('li').find('ul').slideUp();        
    });
    
    $('.menu-btn').on('click', function() {
		$(this).toggleClass('menu-btn_active');
		$('.top-menu').slideToggle();
    });
    
    //fixed menu
    $(window).scroll(function(){
        let winTop = $(window).scrollTop();
        let heightMenu = $('.fixed-header').height();
        let heightHeader = $('.fixed-header').outerHeight(true);
        if(winTop >= heightMenu){
        $(".fixed-header").addClass("sticky");
        $('.header').css('padding-top', heightHeader);
        }else{
        $(".fixed-header").removeClass("sticky");
        $('.header').css('padding-top', 0);
        }
    });

    //accordion
    $('.accordion>li>h2').click(function () {
        $(this).toggleClass('open').next('article').slideToggle();
        $(this).closest('li').siblings('li').removeClass('open').find('article').slideUp();
    });

});
