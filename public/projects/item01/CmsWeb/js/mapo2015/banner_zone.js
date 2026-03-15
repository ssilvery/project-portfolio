$(document).ready(function() {

	if ( $(".bannerArea").length ) bannerArea();

});

function bannerArea() {

	var $bannerArea = $(".bannerArea"),
		$controlArea = $bannerArea.children(".controlArea"),
		$prev = $controlArea.find(".controlPrev").children("a"),
		$next = $controlArea.find(".controlNext").children("a"),
		$play = $controlArea.find(".controlPlay").children("a"),
		$stop = $controlArea.find(".controlStop").children("a"),
		$outerWrap = $("<div />",{"class" : "outerWrap"}).appendTo($bannerArea),
		$innerWrap = $bannerArea.children(".banner").appendTo($outerWrap),
		$item = $innerWrap.find("li"),
		itemLength = $item.length,
		movingWidth = $item.first().width(),
		currentIdx = 0,
		visibleItem = 4,
		lastIdx = itemLength - visibleItem - 1,
		rollTimer,
		rollDelay = 2000,	
		clickable = true,
		rolling = true;

	if ( itemLength > visibleItem ) mainFunc();

	// mainFunc
	function mainFunc() {

		if ( rollTimer ) rollTimer;
		rollTimer = setInterval(rollingDirect, rollDelay);

		$stop.on({
			click : function() {
				clearInterval(rollTimer);
				rolling =  false;				
				return false;
			}
		});
		
		$play.on({
			click : function() {
				if ( !rolling ) {
					if ( rollTimer ) rollTimer;
					rollTimer = setInterval(rollingDirect, rollDelay);
				}
				return false;
			}
		});

		$prev.on({
			click : function() {
				if ( clickable ) {
					clearInterval(rollTimer);
					rolling = false;				
					rollReverse();
				}
				return false;
			}
		});

		$next.on({
			click : function() {
				if ( clickable ) {
					clearInterval(rollTimer);
					rolling = false;				
					rollingDirect();
				}
				return false;
			}
		});
		
		// 자동롤릴 필요하면 주석처리해야함
		clearInterval(rollTimer);
		rolling =  false;				
		return false;
		
	}

	// rolling
	function rollingDirect() {
		var move_obj = $(this);
		clickable = false;
		currentIdx += 1;		
		if ( currentIdx == itemLength ) currentIdx = 0;
		$innerWrap.stop(true, true).animate({
			//"margin-left" : - movingWidth
			"margin-left" : move_obj
		}, 250, function() {
			//$(this).find("li").first().appendTo($(this)); //한개씩 롤링
			//4개씩 롤링 시작
			for(var z = 1; z <5; z++){
				$(this).find("li").first().clone().appendTo($(this));
				$(this).find("li").first().remove();
			}
			//4개씩 롤링 끝
			$(this).css("margin-left",0);
			clickable = true;
		});
	}

	// rollReverse
	function rollReverse() {
		var move_obj = $(this);
		clickable = false;
		currentIdx -= 1;
		if ( currentIdx < 0 ) currentIdx = $item.length - 1;
		//$innerWrap.find("li").last().prependTo($innerWrap); //한개씩 롤링
		//$innerWrap.css("margin-left", - movingWidth);
		$innerWrap.css("margin-left", move_obj);
		$innerWrap.stop(true, true).animate({
			"margin-left" : 0
		}, 250, function() {
			//4개씩 롤링 시작
			for(var z = 1; z <5; z++){
				$(this).find("li").last().clone().prependTo($(this));
				$(this).find("li").last().remove();
			}
			//4개씩 롤링 끝
			clickable = true;
		});
	}

	// setButton
	function setButton() {

	}


}