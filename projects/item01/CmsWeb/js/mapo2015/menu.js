$(document).ready(function(){
	$(".contents_lf > ul > li > a").mouseover(function(){
		$(".eazy_table").css({display:"none"});
		$(this).next(".eazy_table").css({display:"block"});
		
		var id = $(this).attr('id');
		for(var a=1;a<5;a++){
			if(id == ("contents_lf_"+a)){
				$("#contents_lf_"+a).css({color:"#323232",fontSize:"16px"});
				$("#eazy_table_"+a).show();
			}else{
				$("#contents_lf_"+a).css({color:"#555555",fontSize:"14px"});
				$("#eazy_table_"+a).hide();
			}
		}
	});
	$(".contents_lf > ul > li > a").focus(function(){
		$(".eazy_table").css({display:"none"});
		$(".contents_lf > ul > li .eazy_po").hide();
		$(this).next(".eazy_table").css({display:"block"}).next().show();
		
		var id = $(this).attr('id');
		for(var a=1;a<5;a++){
			if(id == ("contents_lf_"+a)){
				$("#contents_lf_"+a).css({color:"#323232",fontSize:"16px"});
				$("#eazy_table_"+a).show();
			}else{
				$("#contents_lf_"+a).css({color:"#555555",fontSize:"14px"});
				$("#eazy_table_"+a).hide();
			}
		}
	});

	$(".contents_mid > ul > li > a").mouseover(function(){
		$(".eazy_photo").css({display:"none"});
		$(this).next(".eazy_photo").css({display:"block"});
		
		var id = $(this).attr('id');
		for(var a=1;a<3;a++){
			if(id == ("contents_mid_"+a)){
				$("#contents_mid_"+a).css({color:"#323232",fontSize:"16px"});
				$("#eazy_po2_table_"+a).show();
			}else{
				$("#contents_mid_"+a).css({color:"#555555",fontSize:"14px"});
				$("#eazy_po2_table_"+a).hide();
			}
		}
	});
	$(".contents_mid > ul > li > a").focus(function(){
		$(".eazy_photo").css({display:"none"});
		$(this).next(".eazy_photo").css({display:"block"});
		
		var id = $(this).attr('id');
		for(var a=1;a<3;a++){
			if(id == ("contents_mid_"+a)){
				$("#contents_mid_"+a).css({color:"#323232",fontSize:"16px"});
				$("#eazy_po2_table_"+a).show();
			}else{
				$("#contents_mid_"+a).css({color:"#555555",fontSize:"14px"});
				$("#eazy_po2_table_"+a).hide();
			}
		}
	});
	
	//메인 교육서비스/주민참여 탭 변경
	$(".contents_rt > ul.cts_rt_tBox > li > a").on("mouseenter focus", function(){
		var next = $(this).next(".contents_rt_con");

		next.addClass('active');
		$(this).parent().siblings().removeClass('active');
		$(this).parent().siblings().find('.contents_rt_con').removeClass('active');
	}).on('mouseleave', function(){
		$(this).parent().addClass('active');
	});


	//메인 중앙 슬라이드
	var cntSum = $('.mainCon01-slider li').length;
	//로딩시 페이지 표시
	$('.mainCon01-slider').on('init', function(event, slick) {
		var nowIdx = $('.mainCon01-slider li.slick-slide.slick-active').data('slick-index')+1;
		$('.set-num').text(nowIdx+' / '+cntSum);
	});
	//자동 슬라이드 변경시 페이지 표시
	$('.mainCon01-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
		var nowIdx = $('.mainCon01-slider li.slick-slide.slick-active').data('slick-index')+1;
		$('.set-num').text(nowIdx+' / '+cntSum);
	});

	$('.mainCon01-slider').slick({
	  dots: false,
	  autoplay: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  infinite: true,
	  arrows: false,
	  speed: 300
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
	//중앙 슬라이드 카운트
	function setNum(){
		var currentSlide = $('.mainCon01-slider').slick('slickCurrentSlide')+1;
		$('.set-num').text(currentSlide+' / '+cntSum);
	};


	$(".content_about3_rt > ul > li").mouseover(function(){
		var num=$(this).index();
		if(num == 0 || num == 2){
			var n_num=num+1;
			$(".ftbk_bor").css({display:"none"});
			$(this).children(".ftbk_bor").css({display:"block"});
			var this_img=$(this).find("img").attr("src");
			var this_src=this_img.substring(0,47);
			for(var a=1;a<4;a++){
				if(a==n_num){
					$("#ftbk_"+n_num).attr("src","CmsWeb/resource/image/mapo/mapo2015/main/ftbk_"+n_num+"_on.png");
				}else{
					$("#ftbk_"+a).attr("src","CmsWeb/resource/image/mapo/mapo2015/main/ftbk_"+a+"_off.png");
				}
			}
			//$(this).children('a').find("img").attr("src",this_src+n_num+"_"+"on"+".gif");
		}
	});
	$(".content_about3_rt > ul > li").mouseleave(function(){
		var num=$(this).index();
		if(num != 3){
			var n_num=num+1;
			var this_img=$(this).find("img").attr("src");
			var this_src=this_img.substring(0,47);
			//$(this).children('a').find("img").attr("src",this_src+n_num+"_"+"off"+".gif");
		}
	});
	$(".menu_daph1 > li").mouseover(function(){
		var num=$(this).index();
		var n_num=num+1;
		if(n_num == "1"){
			$(this).children("a").css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_a_bg_1.gif) repeat-x left top",color:"#ffffff"});
		}else if(n_num == "2"){
			$(this).children("a").css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_a_bg_2.gif) repeat-x left top",color:"#ffffff"});
		}else if(n_num == "3"){
			$(this).children("a").css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_a_bg_3.gif) repeat-x left top",color:"#ffffff"});
		}
		else if(n_num == "4"){
			$(this).children("a").css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_a_bg_4.gif) repeat-x left top",color:"#ffffff"});
		}
		else if(n_num == "5"){
			$(this).children("a").css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_a_bg_5.gif) repeat-x left top",color:"#ffffff"});
		}
		$(this).children(".menu_daph2_bg").slideDown("fast");
	});
	$(".menu_daph1 > li").mouseleave(function(){
		$(this).children("a").css({background:"none",color:""});
		$(this).children(".menu_daph2_bg").stop(true,true).slideUp("fast");
		$(".menu_daph1 > li > a.last").css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_last_bg.gif) repeat-x left top"});
	});
	$(".menu_daph1 > li > a").focus(function(){
		$(".menu_daph2_bg").stop(true,true).slideUp("fast");
		$(".menu_daph1 > li > a").css({background:"none",color:""});
		var num=$(this).parent('li').index();
		var n_num=num+1;
		if(n_num == "1"){
			$(this).css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_a_bg_1.gif) repeat-x left top",color:"#ffffff"});
		}else if(n_num == "2"){
			$(this).css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_a_bg_2.gif) repeat-x left top",color:"#ffffff"});
		}else if(n_num == "3"){
			$(this).css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_a_bg_3.gif) repeat-x left top",color:"#ffffff"});
		}
		else if(n_num == "4"){
			$(this).css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_a_bg_4.gif) repeat-x left top",color:"#ffffff"});
		}
		else if(n_num == "5"){
			$(this).css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_a_bg_5.gif) repeat-x left top",color:"#ffffff"});
		}
		$(".menu_daph1 > li > a.last").css({background:"url(CmsWeb/resource/image/mapo/mapo2015/main/menu_last_bg.gif) repeat-x left top"});
		$(this).next(".menu_daph2_bg").slideDown("fast");

	})
	/*
	$(".last_blur").blur(function(){
		$(".menu_daph2_bg").stop(true,true).slideUp("fast");
	});
	*/
	/*
	$(".menu_daph2_close").click(function(){
		$(this).parent(".menu_daph2_bg").slideUp("fast");
	});
	*/
	$(".menu_daph2_close").click(function(){
		$(this).parent(".menu_daph2_bg").slideUp("fast");
		
		if($(this).parents("li").next("li").length > 0){
			$(this).parents("li").next().find("a").first().focus();
		}else{
			$("#mainImageList").find("a").focus();
		}
	});


	/*
	//서브 left메뉴
	$(".left_daph1 > li a").click(function(){
		if ( $(this).hasClass('left_dd') )
		{
			$(this).next(".left_daph2").slideUp("fast");
			$(this).removeClass('left_dd');
		}else{
			$(".left_daph2").slideUp("fast");
			$(".left_daph1 > li a").removeClass('left_dd');
			$(this).next(".left_daph2").slideDown("fast");
			$(this).addClass('left_dd');
		}
	});
	*/
});
$(window).load(function() {

	$('#slider001').flexslider({
		animation: "fade",
		animationLoop: true,
		smoothHeight: false,
		slideshow: true,
		slideshowSpeed:3000,
		animationSpeed: 600,
		controlNav: true,
		directionNav: true,
		prevText: ".",
		nextText: ".",
		pausePlay: true,
		pauseOnHover: true //마우스 해당커서 올라갔을때 정지
	});

	$('.flexslider').each(function(k,e){
		$(".slides > li > a",e).each(function(c,v){
			$(v).focus(function(){
			
				//$(".flex-control-nav  a",e).eq(c).click();
				
				
				$(".flex-control-nav  a.flex-active",e).removeClass("flex-active");
				$(".flex-control-nav a",e).eq(c).addClass("flex-active");
				
				$(".slides li.flex-active-slide",e).stop().animate({
					opacity:"0"
				},600).css("z-index","1").removeClass("flex-active-slide");
				
				$(this).parent("li").stop().animate({
					opacity:"1"
				},600).css("z-index","2").addClass("flex-active-slide");
				
			});
			
		});
	});
	
	$("#mainImageList > a").focus(function(){
		$(".menu_daph2_bg").stop(true,true).slideUp("fast");
	});
	
});