// 탑배너
$(".topbtn>li").click(function(){
	var idx = $(this).index();
	$(".topbtn>li").removeClass("btnon");
	$(this).addClass("btnon");
	$(".topimg>li").removeClass();
	$(".topimg>li").addClass("backword");
	$(".topimg>li").eq(idx).addClass("forword");
});