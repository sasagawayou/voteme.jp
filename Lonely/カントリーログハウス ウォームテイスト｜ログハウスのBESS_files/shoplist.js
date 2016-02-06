/*
* shoplist.js
*
*********************************************************/

var shopimgs = [];
for(var imgnum = 0; imgnum < 18; imgnum++){
  shopimgs[imgnum] = new Image();
}
shopimgs[0].src = "/shared/img/icn_map_cc.png";
shopimgs[1].src = "/shared/img/icn_map_cw.png";
shopimgs[2].src = "/shared/img/icn_map_f.png";
shopimgs[3].src = "/shared/img/icn_map_a.png";
shopimgs[4].src = "/shared/img/icn_map_g.png";
shopimgs[5].src = "/shared/img/icn_map_w.png";
shopimgs[6].src = "/shared/img/icn_map_j.png";
shopimgs[7].src = "/shared/img/icn_map_d.png";
shopimgs[8].src = "/shared/img/icn_map_h.png";
shopimgs[9].src = "/shared/img/icn_balloon_cc.png";
shopimgs[10].src = "/shared/img/icn_balloon_cw.png";
shopimgs[11].src = "/shared/img/icn_balloon_f.png";
shopimgs[12].src = "/shared/img/icn_balloon_a.png";
shopimgs[13].src = "/shared/img/icn_balloon_g.png";
shopimgs[14].src = "/shared/img/icn_balloon_w.png";
shopimgs[15].src = "/shared/img/icn_balloon_j.png";
shopimgs[16].src = "/shared/img/icn_balloon_d.png";
shopimgs[17].src = "/shared/img/icn_balloon_h.png";
var shoplist = {};
var exhiData = [];

$(document).ready(function(){
  shoplist.init();
  $("#zoomInButton img").click(shoplist.zoomIn);
  $("#zoomOutButton img").click(shoplist.zoomOut);
});

shoplist.map = "";
shoplist.geocoder = "";
shoplist.markers = [];
shoplist.windows = [];
shoplist.init = function(){
  // 展示場データ生成
  for(var i in exhiName){
    for(var j in shopData){
      if(exhiName[i] == shopData[j].name){
        exhiData.push(shopData[j]);
      }
    }
  }

  // 地図中央位置
  var latlng = new google.maps.LatLng(36.700, 136.044);
  // マップオプション
  var mapOptions = {
    zoom: 5,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    scrollwheel: false
  };
  // マップ生成
  shoplist.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // マップスタイル変更
  var mapStyle = [{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{"color":"#a0d6d1"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#dedede"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#dedede"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]
  }];
  var styledMapOption = {
    map: shoplist.map,
    name: "default"
  }
  var styledMapType = new google.maps.StyledMapType(mapStyle, styledMapOption);
  shoplist.map.mapTypes.set('default', styledMapType);
  shoplist.map.setMapTypeId('default');

  // ジオコーディング用
  shoplist.geocoder = new google.maps.Geocoder();

  // マーカー生成
  var location;
  var content;
  var marker;
  var info;
  var i;
  for(i=0, k=exhiData.length; i<k; i++){
    // InfoWindowコンテンツ
    content = '<div class="block-inner">' +
      '<div class="title"><h3>' + exhiData[i].name + '</h3><div class="link1"><a href="' + exhiData[i].siteurl + '" target="_blank">展示場サイトへ</a></div><div class="link2"><a href="' + exhiData[i].mapurl + '" target="_blank">MAP</a></div></div>';
    if (exhiData[i].notice != undefined){
      content = content + '<p>' + exhiData[i].notice + '</p>';
    }
    content = content + '<dl><dt>住所</dt><dd>' + exhiData[i].address + '</dd><dt>TEL</dt><dd>' + exhiData[i].tel + '</dd></dl><div class="icons">';
    for (var j in exhiData[i].products) {
      if(exhiData[i].products[j] == "cc") {
        content = content + '<div id="iconcc"><img src="/shared/img/icn_map_cc.png" alt="カントリーログハウス【クールテイスト】" width="46" height="18" /><img class="balloon" src="/shared/img/icn_balloon_cc.png" alt="" width="138" height="58" /></div>';
      } else if(exhiData[i].products[j] == "cw") {
        content = content + '<div id="iconcw"><img src="/shared/img/icn_map_cw.png" alt="カントリーログハウス【ウォームテイスト】" width="46" height="18" /><img class="balloon" src="/shared/img/icn_balloon_cw.png" alt="" width="138" height="58" /></div>';
      } else if(exhiData[i].products[j] == "f") {
        content = content + '<div id="iconf"><img src="/shared/img/icn_map_f.png" alt="ファインカットログハウス" width="46" height="18" /><img class="balloon" src="/shared/img/icn_balloon_f.png" alt="" width="158" height="40" /></div>';
      } else if(exhiData[i].products[j] == "a") {
        content = content + '<div id="icona"><img src="/shared/img/icn_map_a.png" alt="あきつログハウス「季感の家」" width="46" height="18" /><img class="balloon" src="/shared/img/icn_balloon_a.png" alt="" width="114" height="57" /></div>';
      } else if(exhiData[i].products[j] == "g") {
        content = content + '<div id="icong"><img src="/shared/img/icn_map_g.png" alt="G-LOG" width="46" height="18" /><img class="balloon" src="/shared/img/icn_balloon_g.png" alt="" width="66" height="40" /></div>';
      } else if(exhiData[i].products[j] == "w") {
        content = content + '<div id="iconw"><img src="/shared/img/icn_map_w.png" alt="ワンダーデバイス" width="46" height="18" /><img class="balloon" src="/shared/img/icn_balloon_w.png" alt="" width="123" height="40" /></div>';
      } else if(exhiData[i].products[j] == "j") {
        content = content + '<div id="iconj"><img src="/shared/img/icn_map_j.png" alt="ジャパネスクハウス「程々の家」" width="46" height="18" /><img class="balloon" src="/shared/img/icn_balloon_j.png" alt="" width="134" height="57" /></div>';
      } else if(exhiData[i].products[j] == "d") {
        content = content + '<div id="icond"><img src="/shared/img/icn_map_d.png" alt="BESS DOME" width="46" height="18" /><img class="balloon" src="/shared/img/icn_balloon_d.png" alt="" width="106" height="40" /></div>';
      } else if(exhiData[i].products[j] == "h") {
        content = content + '<div id="iconh"><img src="/shared/img/icn_map_h.png" alt="ハンドヒューンログハウス" width="46" height="18" /><img class="balloon" src="/shared/img/icn_balloon_h.png" alt="" width="174" height="40" /></div>';
      }
    }
    content = content + '</div></div>';

    // InfoWindow生成
    shoplist.windows[i] = new InfoBox({
      content: content,
      alignBottom: false,
      closeBoxURL: "",
      pixelOffset: new google.maps.Size(-525,-28),
      boxClass: "infoBox"
    });
    // マーカーロケーション
    location = new google.maps.LatLng(exhiData[i].lat, exhiData[i].lon);
    // マーカー生成
    shoplist.markers[i] = new google.maps.Marker({
      position: location,
      map: shoplist.map,
      icon: productMapMarker,
      title: exhiData[i].name
    });
    // マーカーとInfoWindow関連付け
    shoplist.markers[i].info = shoplist.windows[i];
    shoplist.markers[i].flag = 0;
    // マーカークリックイベント
    google.maps.event.addListener(shoplist.markers[i], 'click', function(target) {
      if(this.flag == 0){
        this.flag = 1;
        this.info.open(shoplist.map, this);
      } else {
        this.flag = 0;
        this.info.close();
      }
    });
    // アイコンマウスオーバーイベント
  }
}

shoplist.zoomIn = function(){
  var current = shoplist.map.getZoom();
  current++;
  shoplist.map.setZoom(current);
}

shoplist.zoomOut = function(){
  var current = shoplist.map.getZoom();
  current--;
  shoplist.map.setZoom(current);
}
