// 탑배너
$(".topbtn>li").click(function(){
	var idx = $(this).index();
	$(".topbtn>li").removeClass("btnon");
	$(this).addClass("btnon");
	$(".topimg>li").removeClass();
	$(".topimg>li").addClass("backword");
	$(".topimg>li").eq(idx).addClass("forword");
});

// 모바일 탑배너 자동 롤링
var midx = 0;

setInterval(function(){
	midx +=1;
	if(midx<=2){
		$(".mtopimg>li").removeClass().addClass("backword");
		$(".mtopimg>li").eq(midx).addClass("forword");
	} else {
		midx = 0;
		$(".mtopimg>li").removeClass().addClass("backword");
		$(".mtopimg>li").eq(midx).addClass("forword");
	}	
},5000);



// 모바일 메뉴버튼 클릭하면
$(".gnb").hide();
$(".gnbbtn").click(function(){
	// =모양이 x모양으로 바뀌고
	$(".gnbbtn span:nth-child(1)").toggleClass("onx1");
	$(".gnbbtn span:nth-child(2)").toggleClass("onx2");
	$(".gnb").slideToggle();
});

// 모바일 메인 프랜차이즈 텍스트박스 영역
var imght = $(".frachimg").height();
$(".frachise li").css({"height":imght});
$(".frachtxt").css({"height":imght});
$(window).resize(function(){
	var imght = $(".frachimg").height();
	$(".frachise li").css({"height":imght});
	$(".frachtxt").css({"height":imght});
});

// 스크롤을 내리면 TOP버튼 생김
$(".go_top").hide();
$(window).scroll(function(){
	var st = $(this).scrollTop();
	if(st>=150){
		$(".go_top").fadeIn();
	} else {
		$(".go_top").fadeOut();
	}
});