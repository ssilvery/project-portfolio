
$(document).ready(function(){
	//높이조절
	$(".content").css("height", $(window).height()-101);
	$(".second-bottom").css("height", $(window).height()-182);
	$(".second_search_list").css("height", $(window).height()-300);
	$(window).resize(function(){
		$(".content").css("height", $(window).height()-101);
	});

	//좌측메뉴(검색, 주제별 지도 등) 선택시 분류 페이지 변경
	$(".sub_menu li").click(function(){
		var index = $(".sub_menu li").index(this);
		var second_menu = $("#side_second div.side_second:eq("+ index +")");
		var con = second_menu.siblings('.side_second');
		var menu_t = $(this).siblings();

		second_menu.addClass("on");
		$(this).addClass("on");

		if( second_menu.hasClass("on") ){
			con.removeClass("on");
			menu_t.removeClass("on");
		} return;
	});

	//second box 여닫기
	$(".btn_second_open").click(function(){
		$(this).toggleClass("on");

		$(this).each(function(){
	  		var src;
	  		var img = $(this).children('img');

		  	if($(this).hasClass('on')){
		  		$("#side_second").animate({left:'95px'},400)
				$('#side_second').css('box-shadow','0 15px 15px 0px rgba(0, 0, 0, 0.7)');
				src = img.attr('src').replace('_on.','_off.');
		  	}else{
				$("#side_second").animate({left:'-225px'},500);
				$('#side_second').css('box-shadow','none');
				src = img.attr('src').replace('_off.','_on.');
		  	}
		  	img.attr('src',src);
	  	});
	});

	//second-bottom list-dep01 이미지버튼 클릭 시 여닫기
	$(".list-dep01-tit img").click(function(){

		var dep01 = $(this).closest('p');

        function slideDown(target) {
		    slideUp();
		    $(dep01).next('div').find('.list-dep03').addClass('on');
		    $(target).addClass('on').next().slideDown();
		  }

	  	function slideUp() {
	  		$(dep01).next('div').find('.list-dep03').removeClass('on');
	    	$(dep01).removeClass('on').next().slideUp();
	    	$(dep01).children('img').attr('src',$(dep01).children('img').attr('src').replace('_close.','_open.'));
	  	}

	  	$(dep01).hasClass('on') ? slideUp() : slideDown(dep01);


	  	$(dep01).each(function(){
	  		var src;
	  		var img = $(this).children('img');
		  	if($(this).hasClass('on')){
				src = img.attr('src').replace('_open.','_close.');
		  	}else{
				src = img.attr('src').replace('_close.','_open.');
		  	}
		  	img.attr('src',src);
	  	});
	});

	//second-bottom list-dep01 체크박스 아코디언
	$('input:checkbox[name="dep-01"]').each(function() {

    	var dep01 = $(this).closest('p');
 		var dep01_Img = $(dep01).children('img');

    	$(this).click(function(){
	 		
	 		var chk_box = $(this).closest('p').next('div').children('ul').find('input');
	 		var dep03 = $(this).closest('p').next('div').children('ul').find('.list-dep03');
			$(this).checked = true;

			function slideDown(target) {
			    slideUp();
			    $(chk_box).prop('checked',true);
	            $(dep01_Img).attr('src',$(dep01_Img).attr('src').replace('_open.','_close.'));
			    $(target).closest('p').addClass('on').next().slideDown();
			    $(target).closest('p').next('div').children('ul').find('.list-dep03').addClass('on');
		  	}

		  	function slideUp() {
		  		$(dep03).removeClass('on');
		    	$(dep01).removeClass('on').next().slideUp();
		    	$(chk_box).prop('checked',false);
		  	}

		  	if(this.checked){//checked 처리된 항목의 값
	    		/*slideDown(this);*/
	    		$(chk_box).prop('checked',true);
	    		$(dep03).addClass('on');
	    	}else{
	    		$(chk_box).prop('checked',false);
	            /*$(dep01_Img).attr('src',$(dep01_Img).attr('src').replace('_close.','_open.'));*/
	            /*slideUp();*/
	    	}
    	});
 	});

	//second-bottom list-dep02 체크박스 관련 아코디언
	$('input:checkbox[name="dep-02"]').each(function() {

    	$(this).click(function(){
	 		var dep02 = $(this).closest('p').next('ul');
	 		var dep03 = $(dep02).find('input:checkbox[name="dep-03"]');
			$(this).checked = true;

			function slideDown(target) {
		    	$(dep03).prop('checked',true);
			    target.slideDown();
		  	}
		  	function slideUp() {
		    	dep02.removeClass('on').slideUp();
		    	$(dep03).prop('checked',false);
		  	}

			if(this.checked){//checked 처리된 항목의 값
				dep02.addClass('on');
	    		slideDown(dep02);
	    	}else{
	            slideUp();
	    	}
    	});
 	});

});

