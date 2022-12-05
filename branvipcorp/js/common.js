$(function(){
  $("#gnb").mouseenter(function(){
    $("#header").addClass("on");
  })
  $("#gnb").mouseleave(function(){
    $("#header").removeClass("on");
  })

  $(".gnb > ul > li > ul.service_gnb > li > a").click(function(){
    var ofs = $(this).attr("data-move");
    scrMove(ofs);
    // $(window).scrollTop(ofs)
  })

  $(".tab_btn a").click(function(){
    var idx = $(this).index()+1;
    $(".tab_btn a").removeClass("on");
    $(this).addClass("on");
    $(".tab").removeClass("on");
    $(".tab"+idx).addClass("on");
  })

  $(".btn_open").click(function(){
    var txt = $(this).text();
    if(txt == "close"){
      $(this).text("more +")
    }else{
      $(this).text("close")
    }
      $(this).toggleClass("open");
  })

  $(window).resize(function(){
    $("#gnb_mo").removeClass("on");
  })

  $(window).scroll(function(){
    var hd_ht = $("#header").height();
    var scrT = $(window).scrollTop();
    
    if(scrT > hd_ht){
      $("#header").addClass("fx");
    }else{
      $("#header").removeClass("fx");
    }

    var logoTrigger = $("#company .sec1 .tit h3").offset().top - 200;

    if(scrT > logoTrigger){
      $(".logo_1").addClass("logoMove1");
      $(".logo_3").addClass("logoMove3");
      $("#beforeLogo").addClass("act");
      $("#afterLogo").addClass("act");
    }else{
      $(".logo_1").removeClass("logoMove1");
      $(".logo_3").removeClass("logoMove3");
      $("#beforeLogo").removeClass("act");
      $("#afterLogo").removeClass("act");
    }
    console.log(scrT);

 

  })


  const swiper = new Swiper('#company .banner .swiper', {
    effect: 'fade',
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    slidesPerView: '1',
    initialSlide: 0,
    // disableOnInteraction:false,
    // noSwiping:false,
});


const swiper_img= new Swiper('#service .swiper_img', {
  // effect: 'fade',
  spaceBetween: 0,
  speed:1500,
  autoplay: {
    delay: 3000,
    // pauseOnMouseEnter:true,
  },
  loop: true,
  slidesPerView: '1',
  initialSlide: 0,
  pagination: {
    el: '.cont-pagi',
    clickable: true,
    renderBullet: function (index, className) {
      var txt = ['로고상표 검색', '원하는 스타일 선택', '상표 상세 데이터 확인','서비스 의뢰']
      return '<div class="' + className + '"><span>' + (index+1) + '</span><p>'+(txt[index])+'</p></div>';
      
    },
  },
});
const swiper_txt= new Swiper('#service .swiper_txt', {
  effect: 'fade',
  spaceBetween: 0,
  // autoplay: {
  //   delay: 3000,
  // },
  loop: true,
  slidesPerView: '1',
  initialSlide: 0,
  noSwiping:true,
  speed:1000,
});
  swiper_img.controller.control = swiper_txt;
  swiper_txt.controller.control = swiper_img;	



})
function scrMove(ofs){
  var hd_ht = $("#header").height() + 30;
  var scrOfs = $(ofs).offset().top - hd_ht;
  $("html,body").animate({scrollTop:scrOfs},500);
  $("#gnb_mo").removeClass("on");
  $("html").removeClass("ovh");
}
function scrMove2(ofs){
  $("#gnb_mo").removeClass("on");
  $("html").removeClass("ovh");
}
function menu(){
  $("#gnb_mo").toggleClass("on");
  $("html").toggleClass("ovh");
}








// #company sec2 스크롤 애니메이션 효과 삭제
// #company sec2 스크롤 애니메이션 효과 다시 복귀
// #company sec2 스크롤 애니메이션 효과 다시 삭제 221117
// $(document).ready(function(){ // wait for document ready
//   // init
//   var controller = new ScrollMagic.Controller({
//   });
//   // init

//   var txtFadeOut_1 = new TimelineMax()
//   .fromTo("#company #sec2 .txt_eft1", 1, {x:"0%"}, {x:"-200%"})
//   .fromTo("#company #sec2 .txt_eft1", 1, {opacity: 1}, {opacity: 0})
  

//   var txtFadeIn_2 = new TimelineMax()
//   .fromTo("#company #sec2 .txt_eft2", 1, {y:"20%"}, {y:"0%"})
//   .fromTo("#company #sec2 .txt_eft2", 1, {opacity: 0}, {opacity: 1})

  	


//   //배경이미지고정 
//   var scene = new ScrollMagic.Scene({
//     triggerElement: "#company #trigger1",
//     duration: '80%',
//     triggerHook: 0
//   })
//   .setPin("#company #sec2")
//   .addTo(controller);
  


//   //배경이미지고정 
//   var scene1 = new ScrollMagic.Scene({
//     triggerElement: "#company #sec2",
//     duration: '30%',
//     triggerHook: 0
//   })
//   .setTween(txtFadeOut_1)
//   .addTo(controller);

//   //배경이미지고정 
//   var scene2 = new ScrollMagic.Scene({
//     triggerElement: "#company #sec2",
//     duration: '70%',
//     triggerHook: 0
//   })
//   .setTween(txtFadeIn_2)
//   .addTo(controller);

  

// });