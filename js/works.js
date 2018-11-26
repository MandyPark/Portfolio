$(function(){

	//리사이즈
	var worksWh = $(window).width() - 288;
	$(".wrap").css({"width":worksWh});
	$(window).resize(function(){
		var worksWh = $(window).width() - 288;
		$(".wrap").css({"width":worksWh});
	});

	// 이미지 중앙정렬
	// var imgWt = $(".workImg img").width();
	// var imgHt = $(".workImg img").height();
	// $(".workImg img").css({"width":imgWt,"height":imgHt});
	

	// next + prev 오버
	$(".prev").mouseenter(function(){
		$("#prev").attr("src","images/btn_prevhover.png");
	});
	$(".prev").mouseleave(function(){
		$("#prev").attr("src","images/btn_prev.png");
	});
	$(".next").mouseenter(function(){
		$("#next").attr("src","images/btn_nexthover.png");
	});
	$(".next").mouseleave(function(){
		$("#next").attr("src","images/btn_next.png");
	});
	
	// 페이지 기본 표기
	var pageNum = $(".workImg li").index()+1;
	$("p.now").text(pageNum);
	var pageTotal = $(".workImg li").last().index()+1;
	$("p.total").text(pageTotal);

	// next 버튼 누르면 다음 컨텐츠로
	$("#next").click(function(){
		// 다음 번호로 바뀜
		pageNum += 1;
		if(pageNum>pageTotal){ // 마지막페이지를 넘기면 첫페이지로
			$(".workImg li").first().appendTo(".workImg");
			$(".explain li").first().appendTo(".explain");
			$("p.now").text(pageNum);
		} else {
			// 다음 그림과 내용 + 인덱스로 바뀜
			$(".workImg li").first().appendTo(".workImg");
			$(".explain li").first().appendTo(".explain");
			$("p.now").text(pageNum);
		}
	});

	// prev 버튼 누르면 이전 컨텐츠로
	$("#prev").click(function(){
		// 이전 번호로 바뀜
		pageNum -= 1;
		if(pageNum<=0){ // 첫페이지를 더 안넘어가도록
			pageNum = 1;
		} else {
			// 이전 그림과 내용 + 인덱스로 바뀜
			$(".workImg li").last().prependTo(".workImg");
			$(".explain li").last().prependTo(".explain");
			$("p.now").text(pageNum);
		}
	});

});