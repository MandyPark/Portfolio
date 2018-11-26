
// 상단메뉴 오버시 하위메뉴 보이기
$(".gnb li").mouseenter(function(){
	var menuIdx = $(this).index();
	$(".menu").hide();
	$("#menu"+menuIdx).fadeIn();
});
$(".menuBg").mouseleave(function(){
	$(".menu").hide();
});

// 모바일 메뉴버튼 클릭시 왼쪽에서 슬라이드
$(".go_menu").click(function(){
	$(".mmenubg").css({"margin-left":0});
});
// 메뉴 닫기버튼 클릭시 왼쪽으로 슬라이드
$(".close").click(function(){
	$(".mmenubg").css({"margin-left":-100+"%"});
});

// 검색창 클릭하면 기본 글자 사라짐
$(".search").click(function(){
	$(this).attr("value","");
});

// 상품 좋아요 버튼
$(".wish").click(function(){
	$(this).toggleClass("wishon");
});

// 모바일 검색창 width
var schwt = $(".msearchbox").width();
$(".msearch").css({"width":schwt});