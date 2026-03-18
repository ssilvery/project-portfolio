$(document).ready(function(){
	// 전체메뉴	
	$('.all-menu').on('click', function() {
		var id = $(this).attr('href');
		$(id).show();
		return false;
	});
	$('#allMenu .btn-Close').on('click', function() {
		$('#allMenu').hide();
		$('.all-menu').focus();
		return false;
	});
	$('#allMenu a:last').on('blur', function() {
		$('#allMenu').hide();
		$('.all-menu').focus();
		return false;
	});

	// 검색영역
	$('.btnSchOpen').on('click', function() {
		var id = $(this).attr('href');
		$(this).toggleClass('open');
		$(id).toggle();

		/*var txt = '';
		if ($(this).hasClass('open')) {
			$(id).show();
			txt = '검색 닫기';
		} else {
			$(id).hide();
			txt = '검색 열기';
		}*/
		var txt = ($(this).hasClass('open')) ? '검색 닫기' : '검색 열기';
		$(this).text(txt).attr('title', txt);
		$('#qt').val('');
		return false;
	});
	
	//메인메뉴
	$('.gnb li.depth01 > a').on('mouseover focus', function(){
		$(this).next().show();
		$(this).css('color','#2b4c8e');
	}).parent().on('mouseleave', function() {
		var $sub = $('.depth02', this);
		$sub.hide();
		$('.gnb li.depth01 > a').css('color','#333');
	});
	$('.gnb .depth02').on('mouseleave', function() {
		$(this).hide();
	});
	$('.gnb .depth02 a:last').on('blur', function() {
		$('.gnb .depth02').hide();
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