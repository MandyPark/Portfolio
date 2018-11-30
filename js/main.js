$(function(){
	// 미리보기 그림 숨기기
	$(".pfImg").hide();
	$(".idx0").show();

	// 윈도우 세로값
	var ht = $(window).height()/2;
	
	// 커서 위치에 따라 흔들거리는 미리보기메뉴
	$(window).on("mousemove",function(){
		var x = event.pageX;
		var y = event.pageY;
		if (y<ht){
			var ny = ht - y;
			$("#pfList").stop().css({"transform":"skewY("+-5+"deg)"});
			/*,"margin-top":"+="+10*/
		} else {
			var ny = y - ht;
			$("#pfList").stop().css({"transform":"skewY("+5+"deg)"});
			/*,"margin-top":"-="+10*/
		}

		// 미리보기메뉴에 마우스오버하면 왼쪽으로 나오기
		$("#pfList li").mouseenter(function(){
			$("#pfList li").css({"margin-left":0});
			$(this).css({"margin-left":-20});
		});
		$("#pfList li").stop().mouseleave(function(){
			$("#pfList li").css({"margin-left":0});
		});

		// Web site
		$(".idx0 li").eq(0).css({"top":-117+y/120,"right":55+x/900+"%"});
		$(".idx0 li").eq(1).css({"top":60-y/150,"right":55+x/1200+"%"});
		$(".idx0 li").eq(2).css({"top":-120-y/130,"right":75+x/1600+"%"});
		$("#pfList li").eq(0).mouseenter(function(){
			$(".pfImg").stop().fadeOut(300);
			$(".idx0").stop().fadeIn(2000);
		});		
		// Promotion
		$(".idx1 li").eq(0).css({"bottom":-228+y/120,"right":85.1+x/900+"%"});
		$(".idx1 li").eq(1).css({"bottom":-228-y/150,"right":80.1+x/1200+"%"});
		$(".idx1 li").eq(2).css({"bottom":-228-y/100,"right":71.2-x/1500+"%"});
		$(".idx1 li").eq(3).css({"bottom":-228+y/90,"right":67.8-x/900+"%"});
		$(".idx1 li").eq(4).css({"bottom":-228-y/180,"right":62-x/1500+"%"});
		$(".idx1 li").eq(5).css({"bottom":-228-y/80,"right":55.8-x/800+"%"});
		$("#pfList li").eq(1).mouseenter(function(){
			$(".pfImg").stop().fadeOut(300);
			$(".idx1").stop().fadeIn(2000);		
		});
		// Typography
		$(".idx2 li").eq(0).css({"top":-60+y/120,"right":50.6-x/900+"%"});
		$(".idx2 li").eq(1).css({"top":64-y/100,"right":70.6+x/500+"%"});
		$("#pfList li").eq(2).mouseenter(function(){
			$(".pfImg").stop().fadeOut(300);
			$(".idx2").stop().fadeIn(2000);
		});
		// Emblem
		$(".idx3 li").eq(0).css({"top":-48+y/60,"right":82.5+x/900+"%"});
		$(".idx3 li").eq(1).css({"top":-50-y/50,"right":67.1+x/800+"%"});
		$(".idx3 li").eq(2).css({"top":3+7-y/50,"right":52-x/700+"%"});
		$(".idx3 li").eq(3).css({"top":180+y/90,"right":74.7-x/900+"%"});
		$(".idx3 li").eq(4).css({"top":116-y/80,"right":58.3+x/1000+"%"});
		$("#pfList li").eq(3).mouseenter(function(){
			$(".pfImg").stop().fadeOut(300);
			$(".idx3").stop().fadeIn(2000);
		});
		// Poster
		$(".idx4 li").eq(0).css({"top":-200-y/50,"right":70+x/800+"%"});
		$(".idx4 li").eq(1).css({"top":-150+y/60,"right":51+x/900+"%"});
		$("#pfList li").eq(4).mouseenter(function(){
			$(".pfImg").stop().fadeOut(300);
			$(".idx4").stop().fadeIn(2000);
		});
		// Magazine
		$(".idx5 li").eq(0).css({"top":-100+y/60,"right":50.8+x/800+"%"});
		$("#pfList li").eq(5).mouseenter(function(){
			$(".pfImg").stop().fadeOut(300);
			$(".idx5").stop().fadeIn(2000);		
		});
		// Banner
		$(".idx6 li").eq(0).css({"top":-120+y/80,"right":68.25+x/900+"%"});
		$(".idx6 li").eq(1).css({"top":-20-y/100,"right":43.75+x/800+"%"});
		$(".idx6 li").eq(2).css({"top":125-y/90,"right":71.5-x/900+"%"});
		$("#pfList li").eq(6).mouseenter(function(){
			$(".pfImg").stop().fadeOut(300);
			$(".idx6").stop().fadeIn(2000);
		});
	});
});