(function(n){function e(e){for(var r,s,u=e[0],a=e[1],c=e[2],d=0,f=[];d<u.length;d++)s=u[d],o[s]&&f.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),n=s(s.s=t[0]))}return n}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)s.d(t,r,function(e){return n[e]}.bind(null,r));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/resume/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=a;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"0315":function(n,e,t){},"093c":function(n,e,t){"use strict";var r=t("917d"),o=t.n(r);o.a},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},i=[],s=(t("96cf"),t("3b8d")),u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}},[n._v("hah")]),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},a=[],c=t("c197"),l=t.n(c),d={name:"styleEditor",props:["code"],computed:{codeInStyleTag:function(){return"<style>".concat(this.code,"</style>")},highlightedCode:function(){return l.a.highlight(this.code,l.a.languages.css)}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}},f=d,h=(t("ccaa"),t("2877")),p=Object(h["a"])(f,u,a,!1,null,"65835bd4",null),m=p.exports,g=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},b=[],w=t("0e54"),v=t.n(w),y={props:["markdown","enableHtml"],computed:{result:function(){return this.enableHtml?v()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}},k=y,x=(t("efac"),Object(h["a"])(k,g,b,!1,null,"4ea60dc1",null)),E=x.exports,S=(t("b059"),{name:"app",components:{StyleEditor:m,ResumeEditor:E},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是Irelia\n* 如果你也觉得这份简历看起来很炫酷，请继续看下去\n* 先让我们来看一下所有的效果吧！\n*/\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"方应杭\n----\n资深前端工程师，资深前端讲师，现在在 [饥人谷](http://jirengu.com) 教前端课程。\n技能\n----\n* 前端开发\n* Rails 开发\n* Node.js 开发\n* 前端授课\n工作经历\n----\n1. [饥人谷](http://jirengu.com)\n2. 腾讯即时通讯平台部\n3. 阿里巴巴B2B部门\n4. 彩程知人项目组\n链接\n----\n* [GitHub](https://github.com/frankfang)\n* [我的文章](https://www.zhihu.com/people/zhihusucks/pins/posts)\n> 如果你喜欢这个效果，Fork [我的项目](https://github.com/jirengu-inc/animating-resume)，打造你自己的简历！\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){var n=Object(s["a"])(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}(),showHtml:function(){var n=this;return new Promise(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new Promise(function(t,r){var o=e.interval,i=Object(s["a"])(regeneratorRuntime.mark(function e(){var r,s,u,a,c,l=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n],r){e.next=3;break}return e.abrupt("return");case 3:s=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=s-r.length,this.currentStyle.length<s?(a=this.currentStyle.length-u,c=r.substring(a,a+1)||" ",this.currentStyle+=c,"\n"===r.substring(a-1,a)&&this.$refs.styleEditor&&this.$nextTick(function(){l.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new Promise(function(e,t){var r=n.fullMarkdown.length,o=n.interval,i=function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];var i=n.currentMarkdown[n.currentMarkdown.length-2];"\n"===i&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()};i()})}}}),M=S,T=(t("093c"),Object(h["a"])(M,o,i,!1,null,"dda6494a",null)),_=T.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(_)}}).$mount("#app")},6965:function(n,e,t){},"917d":function(n,e,t){},b059:function(n,e,t){},ccaa:function(n,e,t){"use strict";var r=t("0315"),o=t.n(r);o.a},efac:function(n,e,t){"use strict";var r=t("6965"),o=t.n(r);o.a}});
//# sourceMappingURL=app.35285f4d.js.map