/*
* lm 1.9.1
*
**************************************
*
* Number Convert
* Image hover
* Image hover and active
* Child hover
* Filter hover
* Opacity Change hover
* Notice hover
* Inner Link
* Add "nolink" class to Heading without a[href]
* Tab Navigation
* Menu List Add Class "first" and "last" - use to ul
* Menu List Add Class "first" and "last" - use to div
* Subpage Link
* Cookie
*
**************************************/
"use strict";

// *** Debug ***
if (typeof window.console != 'object'){
  window.console = {log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){}};
}

jQuery(function($) {
// Initialization
$.lm = {
  init: function() {
    for (var func in $.lm) {
      if ($.lm[func].init)
        $.lm[func].init();
    }
  }
};

// Number Convert
$.lm.convertNum = function(from) {
    var han = ['1','2','3','4','5','6','7','8','9','0'];
    var zen = ['１','２','３','４','５','６','７','８','９','０'];
    var to = [];
    for( var i = 0 ; i < from.length ; i++ ) {
        for(var j = 0 ; j < zen.length ; j++ ) {
            if (from.charAt(i) == zen[j]) {
                to.push( han[j] );
                break;
            }
        }
        if (j == zen.length ) {
            to.push( from.charAt(i) );
        }
    }
    return to.join('');
}


// Image hover
$.lm.hover = {
  init: function() {
    $(document)
      .on('mouseover', '.hover', this.enter)
      .on('mouseout', '.hover', this.exit)
      .on('focus', '.hover', this.enter)
      .on('blur', '.hover', this.exit);
    $('.hover').each(this.preload);
  },

  preload: function() {
    this.preloaded = new Image;
    this.preloaded.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_o$2");
  },

  enter: function() {
    if (!this.src.match(/^(.+)_o(\.[a-z]+)$/) && !this.src.match(/^(.+)_a(\.[a-z]+)$/)){
      this.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_o$2");
    }
  },

  exit: function() {
    if (this.src.match(/^(.+)_o(\.[a-z]+)$/)){
      this.src = this.src.replace(/^(.+)_o(\.[a-z]+)$/, "$1$2");
    } else {
      this.src = this.src.replace(/^(.+)_a(\.[a-z]+)$/, "$1$2");
    }
  }
};


// Image hover and active
$.lm.hover2 = {
  init: function() {
    $(document)
      .on('mouseover', '.hover2', this.enter)
      .on('mouseout', '.hover2', this.exit)
      .on('focus', '.hover2', this.enter)
      .on('blur', '.hover2', this.exit)
      .on('mousedown', '.hover2', this.down)
      .on('mouseup', '.hover2', this.up);
    $('.hover2').each(this.preload);
  },

  preload: function() {
    this.preloaded = new Image;
    this.preloaded.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_o$2");
    this.preloaded2 = new Image;
    this.preloaded2.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_a$2");
  },

  enter: function() {
    if (!this.src.match(/^(.+)_o(\.[a-z]+)$/) && !this.src.match(/^(.+)_a(\.[a-z]+)$/)){
      this.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_o$2");
    }
  },

  exit: function() {
    if (this.src.match(/^(.+)_o(\.[a-z]+)$/)){
      this.src = this.src.replace(/^(.+)_o(\.[a-z]+)$/, "$1$2");
    } else {
      this.src = this.src.replace(/^(.+)_a(\.[a-z]+)$/, "$1$2");
    }
  },

  down: function() {
    if (this.src.match(/^(.+)_o(\.[a-z]+)$/)){
      this.src = this.src.replace(/^(.+)_o(\.[a-z]+)$/, "$1_a$2");
    }
  },

  up: function() {
    if (this.src.match(/^(.+)_a(\.[a-z]+)$/)){
      this.src = this.src.replace(/^(.+)_a(\.[a-z]+)$/, "$1_o$2");
    }
  }
};


// Filter hover
$.lm.fHover = {
  init: function() {
    $('.fHover').hover(function(){
      $(this)
        .css("display", "block")
        .css("position", "relative")
        .append("<div id='hoverFilter' style='position: absolute; margin: 0; top: 0; left: 0; width: " + $(this).find("img").attr("width") + "px; height: " + $(this).find("img").attr("height") + "px; background-color: #ffffff; opacity: 0.45; filter: alpha(opacity=45)'></div>");
      $("div#hoverFilter").delay(100).fadeOut("normal", function(){
        $("div#hoverFilter").remove();
      });
    },
    function(){
      $("div#hoverFilter").remove();
    });
  }
};


// Opacity Change hover
$.lm.oHover = {
  init: function() {
    $(".oHover").hover(this.enter, this.exit);
    $(document)
      .on('focus', '.oHover', this.enter)
      .on('blur', '.oHover', this.exit);
  },

  enter: function() {
    $(this).stop(true,true).animate({opacity: 0.7}, 200);
  },

  exit: function() {
    $(this).stop(true,true).animate({opacity: 1}, 200);
  }
};

// Notice hover
$.lm.nHover = {
  init: function() {
    $(document)
      .on('mouseover', 'img.nHover', this.enter)
      .on('mouseout', 'img.nHover', this.exit)
      .on('focus', 'img.nHover', this.enter)
      .on('blur', 'img.nHover', this.exit);
    $(document)
      .on('mouseover', 'a.nHover', this.aenter)
      .on('mouseout', 'a.nHover', this.aexit)
      .on('focus', 'a.nHover', this.aenter)
      .on('blur', 'a.nHover', this.aexit);
  },

  enter: function() {
    $(this).animate({opacity: 0.5}, 0).animate({opacity: 1}, 500);
  },

  exit: function() {
  },

  aenter: function() {
    $(this).find("img").animate({opacity: 0.5}, 0).animate({opacity: 1}, 500);
  },

  aexit: function() {
  }
};

// Child hover
$.lm.cHover = {
  init: function() {
    $('.cHover').hover(function(){
      $(this).find("img.over").fadeIn("normal");
    },
    function(){
      $(this).find("img.over").fadeOut("normal");
    });
  }
};

// Inner Link
$.lm.innerLink = {
  init: function() {
    $("a[href]").click(function(){
      if($(this).attr("href").indexOf("#") == 0 && $(this).attr("href").length > 1){
        var wWidth = document.documentElement.clientWidth;
        var target = $(this).attr("href");
        var speed = 800;
        var href= $(this).attr("href");
        var tElem = $(target);
        var position = tElem.offset().top;
        if(wWidth > 760 && $(this).hasClass("product")) position -= 100;
        if(wWidth <= 760 && $(this).hasClass("product")) position -= 120;
        var elem = 'html';
        var ua = navigator.userAgent;
        if(ua.indexOf("Safari") != -1 || ua.indexOf("Chrome") != -1) elem = 'body';
        $(elem).animate({scrollTop:position}, speed, 'easeOutExpo');

        return false;
      }
    });
  }
};


// Add "nolink" class to Heading without a[href]
$.lm.noLink = {
  init: function() {
    $("a:not([href])").parent("h2").addClass("nolink");
    $("a:not([href])").parent("h3").addClass("nolink");
    $("a:not([href])").parent("h4").addClass("nolink");
  }
};


$.lm.hideError = function(){
  $("#filter").fadeOut("slow", function(){
    $("#filter").remove();
  });
  $("#error").fadeOut("slow", function(){
    $("#error").remove();
  });
}


// Tab Navigation
$.lm.tab = {
  init: function() {
    if($(".tabBlock").length > 0){
      $(".tabBlock img").each(this.preload);
      $(document).on('click', ".tabBlock a", this.clicked);
    }
  },

  preload: function() {
    this.preloaded = new Image;
    if(this.src.indexOf("_s.") != -1){
      this.preloaded.src = this.src.replace(/^(.+)_s(\.[a-z]+)$/, "$1$2");
    } else {
      this.preloaded.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_s$2");
    }
  },

  clicked: function() {
    var id = "#" + $(this).attr("id") + "Panel";
    if(!$(this).hasClass("stay")){
      $(".tab").removeClass("stay");
      $(".tabPanel").hide();

      $(this).addClass("stay");
      $(id).show();
    }
    return false;
  }
};

// Subpage Link
$.lm.subPage = {
  init: function() {
    $(document)
      .on("click", "a.subPage", this.openWindow)
      .on("keypress", "a.subPage", this.openWindow);
  },

  openWindow: function() {
    window.open($(this).attr("href"), "subPage", "width=1024, menubar=no, toolbar=no, scrollbars=yes");
    return false;
  }
};


// Cookie
$.lm.getExpDate = function(days, hours, minutes){
  var expDate = new Date();
  if(typeof days == "number" && typeof hours == "number" && typeof minutes == "number"){
    expDate.setDate(expDate.getDate() + parseInt(days));
    expDate.setHours(expDate.getHours() + parseInt(hours));
    expDate.setMinutes(expDate.getMinutes() + parseInt(minutes));
    return expDate.toGMTString();
  }
}

$.lm.getCookieVal = function(offset){
  var endstr = document.cookie.indexOf(";", offset);
  if(endstr == -1) {
    endstr = document.cookie.length;
  }
  return unescape(document.cookie.substring(offset, endstr));
}

$.lm.getCookie = function(name){
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while(i < clen){
    var j = i + alen;
    if(document.cookie.substring(i, j) == arg){
      return $.lm.getCookieVal(j);
    }
    i = document.cookie.indexOf(" ", i) + 1;
    if(i == 0) break;
  }
  return "";
}

$.lm.setCookie = function(name, value, expires, path, domain, secure){ // expiresはgetExpDate()で得る
  document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

$.lm.deleteCookie = function(name, path, domain) {
  if($.lm.getCookie(name)){
    document.cookie = name + "=" +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01-0Jan-70 00:00:01 GMT";
  }
}

$.lm.string2Array = function(str){
  var arr = new Array();
  if(str.charAt(0) == ","){
    str = str.substring(1);
  }
  if(str.charAt(str.length - 1) == ","){
    str = str.substring(0, str.length - 2);
  }
  str = str.replace(" ","");
  var flag = 0;
  while(flag == 0){
    if(str.indexOf(",") != -1){
      arr.push(str.substring(0, str.indexOf(",")));
      str = str.substring(str.indexOf(",") + 1);
    } else {
      arr.push(str);
      flag = 1;
    }
  }
  return arr;
}

$.lm.array2String = function(arr){
  var str = "";
  var flag = 0;
  for(i in arr){
    if(flag != 0){
      str += ",";
    } else {
      flag = 1;
    }
    str += arr[i];
  }
  return str;
}

/* onload ***********************************************/
$.lm.init();

});

// Menu List Add Class "first" and "last" - use to ul
(function($) {
  jQuery.fn.addClassFL = function(colNum) {
    return this.children("li").each(function(i){
      if (i % colNum == 0){
        $(this).addClass("first");
      }
      if (i % colNum == colNum - 1){
        $(this).addClass("last");
      }
    });
  };
})(jQuery);


// Menu List Add Class "first" and "last" - use to div
(function($) {
  jQuery.fn.addDivClassFL = function(colNum) {
    return this.children("div").each(function(i){
      if (i % colNum == 0){
        $(this).addClass("first");
      }
      if (i % colNum == colNum - 1){
        $(this).addClass("last");
      }
    });
  };
})(jQuery);


