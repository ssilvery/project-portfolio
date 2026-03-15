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
	$('.btnSchOpen a').on('click', function() {
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
	
	$('.weekSearch a:last').on('blur', function() {
		$('.btnSchOpen a').click();
		//$('.btnSchOpen a').focus();
	});

	// 메인 메뉴
	$('.gnb .depth01 > a').on('mouseenter focus', function() {
		var $subMenu = $(this).next(),
			$siblingsMenu = $(this).parent().siblings().find('.subMenu');
		$subMenu.show();
		$siblingsMenu.hide();
	}).parent().on('mouseleave', function() {
		var $subMenu = $('.subMenu', this);
		$subMenu.hide();
	});
	$('.gnb li a:last').on('blur', function() {
		$('.gnb .subMenu').hide();
	});
	
	// 메인 슬라이드
	$('.main-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
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

	// 메인 메뉴 슬라이드
	$('.main-menu-slider').slick({
	  dots: false,
	  speed: 500,
	  slidesToShow: 10,
	  arrows: true,

	  responsive: [{
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 6,
	        infinite: true
	      }
	    }, {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3,
	        dots: true
	      }
	    }]
	});

	var cntLi = $('.mainCon01-slider li').length;
	// con01 슬라이드
	$(function () {
		'use strict';
		var $mainConSlider = $('.mainCon01-slider');
		//로딩시 페이지 표시
		$mainConSlider.on('init', function(event, slick) {
			var nowIdx = $('.mainCon01-slider li.slick-slide.slick-active').data('slick-index')+1;
			$('.set-num').text(nowIdx+' / '+cntLi);
		});
		//자동 슬라이드 변경시 페이지 표시
		$mainConSlider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
			var nowIdx = $('.mainCon01-slider li.slick-slide.slick-active').data('slick-index')+1;
			$('.set-num').text(nowIdx+' / '+cntLi);
		});

		$mainConSlider.slick({
		  dots: false,
		  autoplay: true,
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  infinite: true,
		  speed: 300,

			responsive: [{
		      breakpoint: 360,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true
		      }
		    }]
		});
		//멈춤 버튼 클릭 
		$('#pause').click(function() {
			$('.mainCon01-slider').slick('slickPause');
			setNum();
		});
		//이전 버튼 클릭
		$('#prev').click(function() {
			$('.mainCon01-slider').slick('slickPrev');
			setNum();
		});
		//다음 버튼 클릭
		$('#next').click(function() {
			$('.mainCon01-slider').slick('slickNext');
			setNum();
		});

		function setNum(){
			var currentSlide = $('.mainCon01-slider').slick('slickCurrentSlide')+1;
			$('.set-num').text(currentSlide+' / '+cntLi);
		};
	});/*
	// con01 슬라이드
	$(function () {
		'use strict';
		var $mainConSlider = $('.mainCon01-slider');
		//로딩시 페이지 표시
		$mainConSlider.on('init', function(event, slick) {
			var cntIdx = $('.mainCon01-slider li.slick-slide').length,
				nowIdx = $('.mainCon01-slider li.slick-slide.slick-active').data('slick-index')+1;
			$('.set-num').text(nowIdx+' / '+cntIdx);
		});
		//자동 슬라이드 변경시 페이지 표시
		$mainConSlider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
			var cntIdx = $('.mainCon01-slider li.slick-slide').length,
				nowIdx = $('.mainCon01-slider li.slick-slide.slick-active').data('slick-index')+1;
			$('.set-num').text(nowIdx+' / '+cntIdx);
		});

		$mainConSlider.slick({
		  dots: false,
		  autoplay: true,
		  pauseOnDotsHover:false,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear'
		});
		//멈춤 버튼 클릭 
		$('#pause').click(function() {
			$('.mainCon01-slider').slick('slickPause');
			setNum();
		});
		//이전 버튼 클릭
		$('#prev').click(function() {
			$('.mainCon01-slider').slick('slickPrev');
			setNum();
		});
		//다음 버튼 클릭
		$('#next').click(function() {
			$('.mainCon01-slider').slick('slickNext');
			setNum();
		});

		function setNum(){
			var mainConIdxCnt = $('.mainCon01-slider li.slick-slide').length,
				currentSlide = $('.mainCon01-slider').slick('slickCurrentSlide')+1;
			$('.set-num').text(currentSlide+' / '+mainConIdxCnt);
		};
	});*/

	//con02 용산구 소식 tab 이동
	$('.main-con02-sub01 > li > p:first-child > a').on('mouseenter focus', function() {
		var subList = $(this).parent().next(),
			siblingsList = $(this).parent().parent().siblings().find('.sub01-tab-con');

			subList.show();
			siblingsList.hide();
			$(this).parent().addClass('on').parent().addClass('active');
			$(this).parent().parent().siblings().removeClass('active').children('p:first-child').removeClass('on');
	});

	// bottom tab 슬라이드
	$(function () {
		'use strict';

		var $swipeTabsContainer = $('.swipe-tabs'),
			$swipeTabs = $('.swipe-tab'),
			$swipeTabsContentContainer = $('.swipe-tabs-container'),
			currentIndex = 0,
			activeTabClassName = 'active-tab';

		var cntSlickIndex = $('.swipe-tab').length-1;

		$swipeTabsContainer.on('init', function(event, slick) {
			$swipeTabsContentContainer.removeClass('invisible');
			$swipeTabsContainer.removeClass('invisible');

			currentIndex = slick.getCurrent();
			$swipeTabs.removeClass(activeTabClassName);
	       	$('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
		});

		$swipeTabsContainer.slick({
			//slidesToShow: 3.25,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			swipeToSlide: true,
			touchThreshold: 10
		});

		$swipeTabsContentContainer.slick({
			asNavFor: $swipeTabsContainer,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			swipeToSlide: true,
	    	draggable: false,
			touchThreshold: 10
		});

		function moveSlide(){
			$swipeTabs.removeClass(activeTabClassName);
	        $('.swipe-tab[data-slick-index=' + currentIndex +']').addClass(activeTabClassName);
	        $swipeTabsContainer.slick('slickGoTo', currentIndex);
	        $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
		}

		$swipeTabs.on('click', function(event) {
	        // gets index of clicked tab
	        currentIndex = $(this).data('slick-index');
	        moveSlide();
	    });

	    //initializes slick navigation tabs swipe handler
	    $swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
	    	currentIndex = $(this).slick('slickCurrentSlide');
			$swipeTabs.removeClass(activeTabClassName);
			$('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
		});
		//arrow prev
	    $('#bt-prev').on('click', function(event) {
			if(currentIndex === 0) return false;
			currentIndex -= 1;
	        moveSlide();
		});
		//arrow next
		$('#bt-next').on('click', function(event) {
			if(currentIndex === cntSlickIndex) return false;
			currentIndex +=1;
	        moveSlide();
		});
	});

	
	// bottom-listBox 슬라이드
	$('.listBox-slide').slick({
	  infinite: true,
	  speed: 300,
	  cssEase: 'linear'
	});


	// 하단배너
	$('.banner-slide').slick({
	  dots: false,
	  autoplay: true,
	  speed: 500,
	  slidesToShow: 5,
	  arrows: true,
	  variableWidth: true
	});
	//멈춤 버튼 클릭 
	$('.btnPS').click(function() {
		$('.banner-slide').slick('slickPause');
	});
	//이전 버튼 클릭
	$('.btnPrev').click(function() {
		$('.banner-slide').slick('slickPrev');
	});
	//다음 버튼 클릭
	$('.btnNext').click(function() {
		$('.banner-slide').slick('slickNext');
	});
			
});