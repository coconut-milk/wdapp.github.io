webpackJsonp([6],{ERTG:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:"PlayerHeader,PlayerFooter,PlayerControl,Header,ChatTabs,HDPraise,Slide"}},[t("router-view")],1)],1)},staticRenderFns:[]};var r=i("VU/8")({name:"App"},a,!1,function(e){i("w8IW")},null,null).exports,o=i("/ocq");n.default.use(o.a);var l=new o.a({routes:[{path:"/",name:"Index",component:function(){return Promise.all([i.e(0),i.e(3)]).then(i.bind(null,"eerB"))}},{path:"/live/:options",name:"Live",component:function(){return Promise.all([i.e(0),i.e(1)]).then(i.bind(null,"cTNL"))}},{path:"/replay/:options",name:"Replay",component:function(){return Promise.all([i.e(0),i.e(2)]).then(i.bind(null,"vhRK"))}},{path:"/transfer/:options",name:"Transfer",component:function(){return Promise.all([i.e(0),i.e(4)]).then(i.bind(null,"B7C1"))}}]}),s=i("NYxO"),u={url:function(){var e="";try{e=localStorage.url}catch(e){}return e}(),viewer:{},template:{},options:{},playerStatus:!1,lists:[{title:"获得场景视频测试直播间",subhead:"8月15日  15:00 - 16:00 CC詹姆斯",tip:"直播中",status:!0,name:"Live",url:"https://view.csslcloud.net/api/view/index?roomid=D4A2E14A89D372399C33DC5901307461&userid=2876043E67CBDC9D"},{title:"CC视频测试回放（第1期）",subhead:"8月14日  15:00 - 16:00 王波波",tip:"已结束",status:!1,name:"Replay",url:"https://view.csslcloud.net/api/view/callback?roomid=3115C441D8B66A719C33DC5901307461&userid=B27039502337407C&liveid=9FBB8D3402787184&recordid=96C0454B9E3CE464&name=123456789"},{title:"中药一闭关刷题直播（第1期）",subhead:"8月15日  15:00 - 16:00 王波波",tip:"直播中",status:!0,name:"Live",url:"https://view.csslcloud.net/api/view/index?roomid=20E2BEC88BEF3EEB9C33DC5901307461&userid=B693062ABB8020E0&name=hello wrold"},{title:"获得场景视频测试回放（第2期）",subhead:"8月16日  15:00 - 16:00 王波波",tip:"已结束",status:!1,name:"Replay",url:"http://view.csslcloud.net/api/view/callback?roomid=8435F7E261F04EB69C33DC5901307461&userid=920022FE264A70C1&liveid=CBDA6492291E5AD0&recordid=D606FBAFE0000829&name=密码拼接到观看连接中即可"},{title:"中药一闭关刷题直播（第23432423432432423423432432期）",subhead:"8月17日  15:00 - 16:00 王波波",tip:"直播中",status:!0,name:"Live",url:"https://view.csslcloud.net/api/view/index?roomid=EE66140EDA3F25CC9C33DC5901307461&userid=B693062ABB8020E0&name=第四个直播间"}]};var p={changeUrl:function(e,t){e.url=t;try{localStorage.url=t}catch(e){}},setViewer:function(e,t){e.viewer=t},setTemplate:function(e,t){e.template=t},setOptions:function(e,t){e.options=t},changePlayerStatus:function(e,t){e.playerStatus=t}},d={getOptions:function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e&&"string"!=typeof e)return!1;if(!e.split("?")[1])return!1;var t=e.split("?")[1].split("&");if(0===t.length)return!1;var i={};t.forEach(function(e){var t=e.split("=")[0],n=e.split("=")[1];i[t]=n}),void 0!==i.isH5play&&("false"===i.isH5play&&(i.isH5play=!1),"true"===i.isH5play&&(i.isH5play=!0));void 0!==i.fastMode&&("false"===i.fastMode&&(i.fastMode=!1),"true"===i.fastMode&&(i.fastMode=!0));return i}(e.url)}};n.default.use(s.a);var c=new s.a.Store({state:u,mutations:p,getters:d}),m=i("zL8q"),f=i.n(m),v=i("7QTg"),h=i.n(v);i("UHcj"),i("ERTG"),i("oPmM"),i("v2ns"),i("tvR6");n.default.use(f.a),n.default.use(h.a),n.default.config.productionTip=!1,n.default.prototype.bus=new n.default,new n.default({el:"#app",router:l,store:c,components:{App:r},template:"<App/>"})},UHcj:function(e,t){!function(e,t){var i,n=e.document,a=n.documentElement,r=n.querySelector('meta[name="viewport"]'),o=n.querySelector('meta[name="flexible"]'),l=0,s=0,u=t.flexible||(t.flexible={});if(r){var p=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(s=parseFloat(p[1]),l=parseInt(1/s))}else if(o){var d=o.getAttribute("content");if(d){var c=d.match(/initial\-dpr=([\d\.]+)/),m=d.match(/maximum\-dpr=([\d\.]+)/);c&&(l=parseFloat(c[1]),s=parseFloat((1/l).toFixed(2))),m&&(l=parseFloat(m[1]),s=parseFloat((1/l).toFixed(2)))}}if(!l&&!s){e.navigator.appVersion.match(/android/gi);var f=e.navigator.appVersion.match(/iphone/gi),v=e.devicePixelRatio;s=1/(l=f?v>=3&&(!l||l>=3)?3:v>=2&&(!l||l>=2)?2:1:1)}if(a.setAttribute("data-dpr",l),!r)if((r=n.createElement("meta")).setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(r);else{var h=n.createElement("div");h.appendChild(r),n.write(h.innerHTML)}function C(){var t=a.getBoundingClientRect().width;t>1920&&(t=1920),t<1440&&(t=1440),t/l>1920&&(t=1920*l);var i=t/10;a.style.fontSize=i+"px",u.rem=e.rem=i}e.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(C,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(C,300))},!1),"complete"===n.readyState?n.body.style.fontSize=12*l+"px":n.addEventListener("DOMContentLoaded",function(e){n.body.style.fontSize=12*l+"px"},!1),C(),u.dpr=e.dpr=l,u.refreshRem=C,u.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},u.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},oPmM:function(e,t){},tvR6:function(e,t){},v2ns:function(e,t){},w8IW:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c51703faee89195f2ac8.js.map