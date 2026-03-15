$(document).ready(function(){
	$('li.depth01 > a').on('mouseover focus', function(){
		$('.depth02, .subMenu').slideDown();
	});
	$('.subMenu').on('mouseleave', function() {
		$('.depth02, .subMenu').slideUp();
	});
	$('.depth02 a:last').on('blur', function() {
		$('.depth02, .subMenu').slideUp();
	});
	
	// 메인 슬라이드
	$('.main-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});

	// 메인 카드 슬라이드
	$('.main-card-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});

	// 메인 하단 슬라이드
	$('.main-vb-slider').slick({
	  dots: true,
	  /*autoplay: true,*/
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  speed: 300,

      responsive: [{
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        infinite: true
	      }
	  }]
	});

	// 모바일 메뉴
    $('#nav-expander').on('click',function(e){
  		e.preventDefault();
  		$('body').toggleClass('nav-expanded');
  	});
  	$('#nav-close').on('click',function(e){
  		e.preventDefault();
  		$('body').removeClass('nav-expanded');
  	});
  	$('.m-mask').on('click',function(e){
  		e.preventDefault();
  		$('body').removeClass('nav-expanded');
  	});

			
});