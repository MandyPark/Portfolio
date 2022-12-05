
<style>
#header{
	background: rgba(255,255,255,.85);
	transition: all .8s;
}

#header #logo svg path{
	fill: #215C4D;
}
#header #gnb > ul > li > a{
	color:#323232!Important;
}
#header #gnb > ul > li > a::after{
	background-color: #323232;
	transition: none;
  display: none;
}
#header #menuOpen span{
  background-color: #323232;
}

</style>

<div id="company" class="main location">

  <section class="sec sec6">
    <div class="wr">
      <div class="tit">
        <h3>
          <span class="ptColor1">Address</span>
          위치                
        </h3>
        <p>
          서울특별시 강남구 역삼로 160, 501호(역삼동)
        </p>
      </div>
      <div class="cont">
        <img src="<?=$hostUrl?>/img/map.png" alt="">
        <div class="map_wr">
          <div id="map" style="width: 100%; height:1000px;"></div>
        </div>
      </div>
    </div>
  </section>        
</div>

<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=16svsge9km"></script>
<script>

  // NAVER MAP API
            var mapCenter = new naver.maps.LatLng(37.4947417, 127.0367316),
                map = new naver.maps.Map('map', {
                    center: mapCenter,
                    zoom: 17
                }),
                marker = new naver.maps.Marker({
                    map: map,
                    position: mapCenter
                });

            var contentString = [
                '<div class="iw_inner">',
                '   <h3>브랜빕</h3>',
                '   <p>서울특별시 강남구 역삼로 160, 501호(역삼동)</p>',
                '</div>'
            ].join('');

            var infowindow = new naver.maps.InfoWindow({
                content: contentString,
                maxWidth: 240,
                backgroundColor: "#fff",
                borderColor: "#255b4c",
                borderWidth: 1,
                anchorSize: new naver.maps.Size(30, 30),
                anchorSkew: true,
                anchorColor: "#fff",
                pixelOffset: new naver.maps.Point(20, 0)
            });

            infowindow.open(map, marker);

            naver.maps.Event.addListener(marker, "click", function(e) {
                if (infowindow.getMap()) {
                    infowindow.close();
                } else {
                    infowindow.open(map, marker);
                }
            });



  </script>