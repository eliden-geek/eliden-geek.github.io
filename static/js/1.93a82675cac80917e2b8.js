webpackJsonp([1],{j3WW:function(t,s){},mjoe:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"Cover",data:function(){return{isLoading:!0,endLeft:!1,endRight:!1}},methods:{toNextCover:function(){var t=this,s=this.$refs.coverbox.offsetHeight,i=setInterval(function(){var e=t.getScrollTop(),o=(s-e)/8;e<s-10?window.scrollTo(0,e+o):e<s?window.scrollTo(0,s):clearInterval(i)},20)},toPhotos:function(){this.$router.push({name:"photos"})},getScrollTop:function(){var t=0;return document.documentElement&&document.documentElement.scrollTop?t=document.documentElement.scrollTop:document.body&&(t=document.body.scrollTop),t},movecircleLightBox:function(t){console.log(t),console.log(t.offsetX),console.log(t.offsetY)},endLoader:function(){var t=this;setTimeout(function(){t.isLoading=!1,t.endLeft=!0,t.endRight=!0},1e3)}},mounted:function(){this.endLoader()}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"coverbox",staticClass:"cover"},[i("div",{staticClass:"loaderbox"},[i("div",{staticClass:"loader-left",class:{endLeftLoader:t.endLeft}}),t._v(" "),i("div",{staticClass:"loader-right",class:{endRightLoader:t.endRight}}),t._v(" "),t.isLoading?i("div",{staticClass:"loader-circe"},[i("div",{staticClass:"loader loader1"}),t._v(" "),i("div",{staticClass:"loader loader2"}),t._v(" "),i("div",{staticClass:"loader loader3"})]):t._e()]),t._v(" "),i("div",{staticClass:"cover1"},[i("div",{staticClass:"mask"}),t._v(" "),i("div",{staticClass:"bg-swiper"}),t._v(" "),i("div",{staticClass:"title"},[i("div",{staticClass:"circleLight",on:{mousemove:function(s){t.movecircleLightBox(s)}}},[i("p",[t._v("您好，我的名字是【何鹏飞】，我是")]),t._v(" "),i("h1",[t._v("WEB前端开发人员")]),t._v(" "),i("p",[t._v("这是我的个人博客")])])]),t._v(" "),i("div",{staticClass:"arrow-down",on:{click:function(s){return s.stopPropagation(),t.toNextCover(s)}}},[i("i",{staticClass:"iconfont icon-xiajiantou"})])]),t._v(" "),i("div",{staticClass:"cover2"},[t._m(0),t._v(" "),i("div",{staticClass:"container"},[i("h2",[t._v("真正的快乐")]),t._v(" "),i("div",{staticClass:"row-line"}),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"list clear"},[t._m(2),t._v(" "),t._m(3),t._v(" "),i("div",{staticClass:"list-libox",on:{click:function(s){return s.stopPropagation(),t.toPhotos(s)}}},[t._m(4)]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"topbar"},[s("div",{staticClass:"container"},[s("p",{staticClass:"name"},[this._v("Eliden·何鹏飞")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"describe"},[this._v("\n          One needs 3 things to be truly happy living in the world: some thing to do, some one to love, some thing to hope for.\n          "),s("br"),this._v("\n          要得到真正的快乐，我们只需拥有三样东西：有想做的事，有值得爱的人，有美丽的梦。\n        ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"https://eliden123.github.io/",alt:"文章列表"}},[s("div",{staticClass:"list-libox"},[s("div",{staticClass:"list-li"},[s("div",{staticClass:"iconbox-icon"},[s("i",{staticClass:"iconfont icon-navicon-wzgl"})]),this._v(" "),s("div",{staticClass:"iconbox-text"},[s("h3",[this._v("文章列表")]),this._v(" "),s("p",{staticClass:"desc"},[this._v("所有文章的列表")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"https://eliden123.github.io/categories/",alt:"文章分类列表"}},[s("div",{staticClass:"list-libox"},[s("div",{staticClass:"list-li"},[s("div",{staticClass:"iconbox-icon"},[s("i",{staticClass:"iconfont icon-fenlei"})]),this._v(" "),s("div",{staticClass:"iconbox-text"},[s("h3",[this._v("文章分类")]),this._v(" "),s("p",{staticClass:"desc"},[this._v("文章分类列表")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"list-li"},[s("div",{staticClass:"iconbox-icon"},[s("i",{staticClass:"iconfont icon-xiangce"})]),this._v(" "),s("div",{staticClass:"iconbox-text"},[s("h3",[this._v("我的相册")]),this._v(" "),s("p",{staticClass:"desc"},[this._v("查看我的相册")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"https://eliden123.github.io/about/"}},[s("div",{staticClass:"list-libox"},[s("div",{staticClass:"list-li"},[s("div",{staticClass:"iconbox-icon"},[s("i",{staticClass:"iconfont icon-guanyuwomen"})]),this._v(" "),s("div",{staticClass:"iconbox-text"},[s("h3",[this._v("有关于我")]),this._v(" "),s("p",{staticClass:"desc"},[this._v("获取我的信息")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"footer"},[s("div",{staticClass:"desc"}),this._v(" "),s("div",{staticClass:"copyright"},[s("p",[this._v("© 2018 | Eliden")])])])}]};var a=i("VU/8")(e,o,!1,function(t){i("j3WW")},"data-v-8c848d7e",null);s.default=a.exports}});
//# sourceMappingURL=1.93a82675cac80917e2b8.js.map