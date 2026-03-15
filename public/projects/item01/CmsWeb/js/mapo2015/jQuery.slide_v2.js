; (function ($) {

	// 슬라이드 쇼 플러그인
	// 사용 법
	//$('#slidesContainer').slideShow({currentPosition:0, slideWidth: 260});
	//				==> {currentPosition:0, slideWidth: 210} 넣지 않을 경우 기본 값

	
	$.fn.slideShow = function(options) {

		var opts = jQuery.extend({}, jQuery.fn.slideShow.defaults, options);
		 
		return this.each(function() {
	
			/* 슬라이드 구성 */
			var $slides = $('.'+opts.slideId);				//슬라이드 자식들 가져오기			
			var numberOfSlides = $slides.length;		//슬라이드 자식들 갯수			
			var $upBtn = $('#'+opts.upBtnId);		//슬라이드 이전 버튼			
			var $downBtn = $('#'+opts.downBtnId);	//슬라이드 다음 버튼
			var strLoopWay = 'next';							//롤링 방향
			/* 슬라이드 구성 */

			/* 자동롤링 정보 */			
			var strAutoPlay = '';									//반복 Interval 정보	
			var $AutoDiv = $('#'+opts.AutoDivId);	//마우스 오버/ 아웃시 반복 멈추고 제시작할 div 
			/* 자동롤링 정보 */

			//반복하지 않고 시작점이 0 일 경우 왼쪽 버튼 숨기기   slideLoop : false 경우
			if( !opts.slideLoop && opts.currentPosition == 0 ) $upBtn.hide();
			if( !opts.slideLoop && opts.currentPosition == (numberOfSlides - 1) ) $downBtn.hide();

			//이전, 다음 버튼에 액션 추가
			$upBtn.click(function(){
				strLoopWay = 'pre';
				Slide();
				return false;
			});
			$downBtn.click(function(){
				strLoopWay = 'next';
				Slide();
				return false;
			});

			//자동 롤링 제어
			$AutoDiv.mouseover(function(){
				$playBtn.show();
				$pauseBtn.hide();
				AutoPlayStop();
			});


			//자식노드를 새로운 div 에 담기
			//익스플로러9 일 경우 예외
			/*if( navigator.appVersion.indexOf("MSIE 9") > -1 ) 
			{
				div = document.createElement("DIV");
				div.id = opts.slideShowId;

				$slides.wrapAll(div).css({'width' : opts.slideWidth, 'height': opts.slideHeight});
			} 
			else  
			{
				$slides.wrapAll('<div id="'+opts.slideShowId+'"></div>').css({'width' : opts.slideWidth, 'height': opts.slideHeight});
			}	*/		

			//새 객체 담기
			var $sliderInner = $('#'+opts.slideShowId);
			//$sliderInner.css('width', opts.slideWidth * numberOfSlides);

			//좌우 슬라이드 일 경우
			if( opts.slideWay == 'left' )
			{
				$slides.css({'float':'left'});
				$sliderInner.animate({
					'marginLeft' : opts.slideWidth * (-opts.currentPosition)
				});
			}
			else	//상하 슬라이드일 경우
			{
				$sliderInner.animate({
					'marginTop' : opts.slideHeight * (-opts.currentPosition)
				});
			}

			//버튼 클릭시 실행 함수
			function Slide() 
			{			
				if( strLoopWay == 'pre' )
				{
					opts.currentPosition = opts.currentPosition - 1;

					//루프이면서 현재 위치가 0보다 작을 경우
					if( opts.slideLoop )
					{
						if( opts.currentPosition < 0 )
						{
							opts.currentPosition = 1;
							
							if( opts.slideWay == 'left' ) $sliderInner.css( 'marginLeft', opts.slideWidth * (-opts.currentPosition) );
							else $sliderInner.css( 'marginTop', opts.slideHeight * (-opts.currentPosition) );

							$('#'+opts.slideShowId +' div:last-child').insertBefore($('#'+opts.slideShowId +' div:first-child'));
							opts.currentPosition = 0;
						}
					}
					else if( !opts.slideLoop && opts.currentPosition <= 0 )
					{
						opts.currentPosition = 0;
						$downBtn.show();
						$upBtn.hide();
					}
				}
				else
				{
					opts.currentPosition = opts.currentPosition + 1;
					
					//루프이면서 현재위치가 전체보다 클 경우
					if( opts.slideLoop )
					{
						if( opts.currentPosition > numberOfSlides - 1 )
						{
							opts.currentPosition = numberOfSlides - 2;

							if( opts.slideWay == 'left' ) $sliderInner.css( 'marginLeft', opts.slideWidth * (-opts.currentPosition) );
							else $sliderInner.css( 'marginTop', opts.slideHeight * (-opts.currentPosition) );

							$('#'+opts.slideShowId +' div:first-child').insertAfter($('#'+opts.slideShowId +' div:last-child'));
							opts.currentPosition = opts.currentPosition + 1;
						}
					}
					else if( !opts.slideLoop && opts.currentPosition >= numberOfSlides - 1 )
					{
						opts.currentPosition = numberOfSlides - 1;
						$upBtn.show();
						$downBtn.hide();
					}
				}

			}

			//자동롤링 시작
			function AutoPlayStart()
			{
				strAutoPlay = window.setInterval( function() {
					Slide();
				}, opts.AutoPlayTime);
			}

			//자동롤링 종료
			function AutoPlayStop()
			{
				window.clearInterval(strAutoPlay);
			}
			
			//자동 롤링 
			if( opts.slideAuto ){ AutoPlayStart();}

		});
	};

	//slideShow 플러그인의 기본 옵션들이다.
	jQuery.fn.slideShow.defaults = {
		currentPosition: 0,				//시작점
		slideWidth: 260,					//가로사이즈
		slideHeight: 0,					//세로사이즈
		slideId: 'twslide',						//자식노드 아이디
		upBtnId: 'twup',						//이전버튼 아이디
		downBtnId: 'twdown',				//다음버튼 아이디
		slideShowId: 'div_snstwitter',	//슬라이드 부모 생성할 아이디
		slideWay: '',					//슬라이드 방향(	빈값일 경우 위로)
		slideLoop: true,					//반복 여부  false 일 경우 스톱
		slideAuto: false,					//자동롤링 여부
		AutoDivId: 'slideshow',		//마우스 오버/아웃시 오토롤링 제어
		AutoPlayTime: 5000			//자동롤링 시간
	};

}) (jQuery);