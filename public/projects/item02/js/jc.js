$(document).ready(function(){
    // GNB
	$('.gnb > li > a').on('mouseenter focus', function() {
		var $siblingsMenu = $('.gnb li').siblings().children('.depth02'),
			$bg_nav = $('.bg_nav');
		$bg_nav.addClass('on');
		$siblingsMenu.addClass('on');
	}).next('.depth02').on('mouseleave', function() {
		$('.gnb li').siblings().children('.depth02').removeClass('on');
		$('.bg_nav').removeClass('on');
	});
	$('.gnb li a:last').on('blur', function() {
		$('.gnb .depth02').removeClass('on');
		$('.bg_nav').removeClass('on');
	});

    $(function() {
        var Scroll = function(){
            var section = $('.wrap_sub_con'),
                article = $('.wrap_sub_con .inner'),
                top = $('#wrap'),
                winHeight = $(window).height(),
                docHeight = $(document).height(),
                currentIdx = 0;
            return {
                init : function (){
                    this.scrollEvent();
                },
                scrollEvent : function () {
                    $(window).on('scroll.wrap_sub_con', function() {
                        var st = $(window).scrollTop(),
                            startPoint = st + winHeight * 0.5,
                            endPoint = st + winHeight * 0.8;

                        article.each(function() {
                            var current = $(this);
                            if(current.offset().top < startPoint) {
                                current.addClass('animation');
                            }else if(current.offset().top > endPoint) {
                            	current.removeClass('animation');
                            }
                        });
                        // 가맹신청 플로팅 배너
                        top.each(function() {
                            var current = $(this);
                            if(st >= 1080 ) {
                                $('.floating_banner').fadeIn();
                            }else if(st <= 1081 ) {
                                $('.floating_banner').fadeOut();
                            }
                        });



                    }).trigger('scroll.wrap_sub_con');
                }
            }
        };

        var scroll = new Scroll();
        scroll.init();

    });
});