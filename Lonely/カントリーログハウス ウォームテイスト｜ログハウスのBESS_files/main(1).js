(function(){var t=function(t,n){return function(){return t.apply(n,arguments)}};window.Main=function(){function n(){this.onResize=t(this.onResize,this),this.onScroll=t(this.onScroll,this);var n,e,a,i,o,r,s,l;-1!==navigator.userAgent.indexOf("iPad")&&$("meta[name=viewport]").length>0&&(o=document.querySelector("meta[name=viewport]"),o.setAttribute("content","width=1020,initial-scale=0.75,maximum-scale=0.75,minimum-scale=0.75,user-scalable=no,minimal-ui")),i=location.href,n="http://www.facebook.com/sharer.php?u="+i,e=encodeURIComponent("BESS | "+$("title").text().replace("｜ログハウスのBESS","")),a="http://twitter.com/share?url="+i+"&text="+e,$("#fb-share-button").attr("href",n).click(function(){return function(t){return window.open($(t.target).parent("a").attr("href"),"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600"),!1}}(this)),$("#tw-share-button").attr("href",a).click(function(){return function(t){return window.open($(t.target).parent("a").attr("href"),"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600"),!1}}(this)),Header&&(this.header=new Header),"undefined"!=typeof BessForm&&null!==BessForm&&(this.form=new BessForm),"undefined"!=typeof SurveyForm&&null!==SurveyForm&&(this.surveyform=new SurveyForm),"undefined"!=typeof Products&&null!==Products&&(this.products=new Products),r=document.documentElement.clientWidth,r>this.wFlag?("function"==typeof(s=this.header).pcInit&&s.pcInit(),"undefined"!=typeof Top&&null!==Top&&(this.topjs=new Top),"undefined"!=typeof Slide&&null!==Slide&&(this.slide=new Slide("#prev","#next","#slideWrapper","#slideImage",378,"easeOutExpo",550,!1))):("function"==typeof(l=this.header).spInit&&l.spInit(),"undefined"!=typeof Top_sp&&null!==Top_sp&&(this.topjs=new Top_sp),"undefined"!=typeof Slide_sp&&null!==Slide_sp&&(this.slide=new Slide_sp("#slideWrapper","#slideImage",90,189,"easeOutExpo",400,!1)),"undefined"!=typeof Recruit_sp&&null!==Recruit_sp&&(this.recruit=new Recruit_sp)),this.onResize(),window.onresize=this.onResize,window.onscroll=this.onScroll}return n.prototype.wFlag=760,n.prototype.header=null,n.prototype.topjs=null,n.prototype.form=null,n.prototype.surveyform=null,n.prototype.recruit=null,n.prototype.onScroll=function(){null!=this.topjs&&null!=this.topjs.onScroll&&this.topjs.onScroll(),null!=this.products&&this.products.onScroll()},n.prototype.onResize=function(){null!=this.header&&this.header.onResize(),null!=this.topjs&&this.topjs.setPosition(),null!=this.products&&this.products.setSize()},n}(),jQuery(function(){var t;t=new Main})}).call(this);//# sourceMappingURL=main.js.map