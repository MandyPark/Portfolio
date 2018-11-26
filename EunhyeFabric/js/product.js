
$(window).scroll(function(){
	var st = $(this).scrollTop();
	var head = $("header").height();
	var nav = $("nav").height();
	var top = head + nav + 50;
	var info = $(".proInfo").height();
	var recom = $(".recomwrap").offset().top;
	var btm = recom - info - 140;
	// 우측인포
	if(st<=top){
		$(".proInfo").css({"position":"absolute","top":0});
	} else if(st>top && st<=btm){
		$(".proInfo").css({"position":"fixed","top":0});
	} else{
		$(".proInfo").css({"position":"absolute","top":"auto","bottom":0});
	} 
	
	// 모바일인포
	var foot = $("footer").offset().top;
	console.log(st);
	console.log(foot);
	if(st<foot && st<foot-796){
		$(".mproInfo").css({"position":"fixed"});
	} else{
		$(".mproInfo").css({"position":"relative"});
	}

});


// 해당상품 좋아요 버튼
$(".this_wish").click(function(){
	$(this).toggleClass("this_wishon");
});

// 상품상세 셀렉트
$("#size > li").click(function(){
	var click = $(this).attr("data-click");
	if(click=="false"){ //첫번째 클릭시
		$(this).attr("data-click","true");
		$("#size ul").css("display","block");
		$("#selecbtn").css("background","url(images/select_up.png) no-repeat center");
		console.log(ck);
	} else { //두번째 클릭시
		$(this).attr("data-click","false");
		$("#size ul").css("display","none");
		$("#selecbtn").css("background","url(images/select_down.png) no-repeat center");
	}
});

// 상품상세 셀렉트 모바일
$(".sizesel").click(function(){
	var click = $(this).attr("data-mclick");
	if(click=="false"){ //첫번째 클릭시
		$(this).attr("data-mclick","true");
		$(".moption").css("display","block");
		$(".sizesel #selecbtn").css("background","url(images/select_down.png) no-repeat center");
		console.log(ck);
	} else { //두번째 클릭시
		$(this).attr("data-mclick","false");
		$(".moption").css("display","none");
		$(".sizesel #selecbtn").css("background","url(images/select_up.png) no-repeat center");
	}
});