webpackJsonp([3],{eerB:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("mvHQ"),i=s.n(n),r=s("Dd8w"),c=s.n(r),o=s("JaHG"),l=s("NYxO"),u={name:"Index",data:function(){return{url:""}},computed:c()({},Object(l.d)({currentUrl:"url"}),Object(l.b)(["getOptions"])),methods:c()({handleClick:function(e){Object(o.b)(this.url)?(this.changeUrl(this.url),this.$router.push({name:e,params:{options:encodeURIComponent(i()(this.getOptions))}})):this.$message({showClose:!0,message:"请输入正确的观看地址",type:"warning"})}},Object(l.c)(["changeUrl"])),mounted:function(){this.url=this.currentUrl||"https://view.csslcloud.net/api/view/index?roomid=D4A2E14A89D372399C33DC5901307461&userid=2876043E67CBDC9D"}},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("span",[this._v("请访问: ")]),t("a",{attrs:{href:"//dl.csslcloud.net/live/web/custom/zh/index.html#/live?roomid=&userid="}},[this._v("https://dl.csslcloud.net/live/web/custom/zh/index.html#/live?roomid=&userid=")])])}]};var d=s("VU/8")(u,a,!1,function(e){s("vTSo")},"data-v-b77bdabc",null);t.default=d.exports},vTSo:function(e,t){}});