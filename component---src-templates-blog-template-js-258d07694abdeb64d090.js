(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8Us3":function(e,t,_){"use strict";var n=_("vOnD"),a=_("cqnt"),o=n.b.div.withConfig({displayName:"postMeta__PostMeta",componentId:"sc-34sjp3-0"})(["margin:8px 0px;font-size:16px;color:",";"],a.c);t.a=o},I880:function(e,t,_){"use strict";var n=_("vOnD"),a=_("q1tI"),o=_.n(a),r=_("Wbzz"),i=n.b.div.withConfig({displayName:"postHeader__OuterContainer",componentId:"oyona5-0"})(["margin-bottom:24px;"]),c=n.b.div.withConfig({displayName:"postHeader__HeaderContainer",componentId:"oyona5-1"})(["width:100%;height:48px;border-bottom-style:solid;border-bottom-width:1px;display:flex;flex-direction:row;"]),s=n.b.div.withConfig({displayName:"postHeader__LeftTitle",componentId:"oyona5-2"})(["line-height:48px;color:#1A2D5A;font-weight:bold;font-size:24px;padding-left:24px;margin-right:auto;&:hover{cursor:pointer;}"]),l=n.b.div.withConfig({displayName:"postHeader__RightArea",componentId:"oyona5-3"})(["padding-right:24px;display:flex;"]),d=n.b.div.withConfig({displayName:"postHeader__RightButton",componentId:"oyona5-4"})(["height:48px;line-height:48px;color:2E406E;margin-left:auto;padding-left:12px;padding-right:12px;font-size:16px;&:hover{cursor:pointer;}"]);t.a=function(e){var t=e.headerImage,_=function(e){Object(r.navigate)("/")},n=function(e){Object(r.navigate)("/aboutme")},a=function(e){Object(r.navigate)("/rss")};return o.a.createElement(r.StaticQuery,{query:"3159585216",render:function(e){return o.a.createElement(i,null,o.a.createElement(c,null,o.a.createElement(s,{onClick:_},e.site.siteMetadata.title),o.a.createElement(l,null,o.a.createElement(d,{onClick:n},"关于我"),o.a.createElement(d,{onClick:a},"RSS"))),t)}})}},SHbd:function(e,t,_){"use strict";var n=_("vOnD").b.div.withConfig({displayName:"headerImagePlaceHolder__HeaderImagePlaceHolder",componentId:"sc-1qlbqq3-0"})(["background-color:rgb(245,247,249);height:280px;"]);t.a=n},ZTNT:function(e,t,_){"use strict";var n=_("vOnD").b.div.withConfig({displayName:"blogPost__BlogPost",componentId:"iw2loi-0"})(["font-size:18px;line-height:1.5em;.blog-post-content{margin-top:18px;color:#1A2D5A;h1,h2{font-size:22px;margin-bottom:12px;}}"]);t.a=n},ap0H:function(e,t,_){"use strict";var n=_("q1tI"),a=_.n(n),o=_("Wbzz"),r=_("vOnD"),i=_("cqnt"),c=r.b.span.withConfig({displayName:"Title__TitleContainer",componentId:"sc-1vvpuk6-0"})(["font-weight:500;font-size:24px;color:",";&:hover{border-bottom:solid "," 2px;}"],i.a,i.a);t.a=function(e){var t=e.to,_=e.children;return a.a.createElement(o.Link,{to:t,style:{textDecoration:"none"}},a.a.createElement(c,null,_))}},b4ge:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Template}));var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("KQm4"),_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("dI71"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),moment__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("wd/R"),moment__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__),_components_layout__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("Bl7J"),_components_seo__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("vrFN"),_components_Title__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("ap0H"),_components_postMeta__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("8Us3"),_components_blogPost__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("ZTNT"),_components_headerImagePlaceHolder__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("SHbd"),_components_articleLayout__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("yHM+"),_components_postHeader__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("I880");function betterDate(e){return moment__WEBPACK_IMPORTED_MODULE_3___default()(e).format("YYYY-MM-DD")}var Disqus=function(_Component){function Disqus(){return _Component.apply(this,arguments)||this}Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.a)(Disqus,_Component);var _proto=Disqus.prototype;return _proto.componentDidMount=function componentDidMount(){var _this$props=this.props,pageId=_this$props.pageId,pageUrl=_this$props.pageUrl;window.disqus_config=function(){this.page.url=pageUrl,this.page.identifier=pageId},eval("\n      (function() { // DON'T EDIT BELOW THIS LINE\n      var d = document, s = d.createElement('script');\n      s.src = 'https://vincentdchan.disqus.com/embed.js';\n      s.setAttribute('data-timestamp', +new Date());\n      (d.head || d.body).appendChild(s);\n      })();\n    ")},_proto.componentWillUnmount=function(){delete window.disqus_config},_proto.render=function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{id:"disqus_thread"})},Disqus}(react__WEBPACK_IMPORTED_MODULE_2__.Component);function Template(e){var t=e.data.markdownRemark,_=t.frontmatter,n=t.html,a=_.path;if(!a){var o=new Date(_.date),r=o.getFullYear().toString(),i=(o.getMonth()+1).toString();i.length<2&&(i="0"+i),a="/"+r+"/"+i+"/"+_.permalink}return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__.a,{header:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_postHeader__WEBPACK_IMPORTED_MODULE_11__.a,{headerImage:_.headerImage&&react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img",{src:_.headerImage,alt:"",style:{margin:"0px"}})})},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_5__.a,{title:_.title,keywords:["blog","technology","photography"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_.tags||[]))}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"blog-post-container"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_blogPost__WEBPACK_IMPORTED_MODULE_8__.a,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_6__.a,{to:a},_.title),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_postMeta__WEBPACK_IMPORTED_MODULE_7__.a,null,"Posted at ",betterDate(_.date)),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:n}}))),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Disqus,{pageUrl:"https://diverse.space"+a,pageId:a}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_articleLayout__WEBPACK_IMPORTED_MODULE_10__.a,null))}var pageQuery="2400456537"},"yHM+":function(e,t,_){"use strict";_.d(t,"a",(function(){return E}));var n=_("dI71"),a=_("q1tI"),o=_.n(a),r=_("vOnD");function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var _=[],n=!0,a=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(n=(r=i.next()).done)&&(_.push(r.value),!t||_.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return _}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e){var t,_=e.scale*(0===(t=e.offset)?t:t>0?1:0),n="horizontal"===e.mode?"translateX":"translateY";return o.a.createElement("div",{className:"react-fish-eye-item","data-scale":e.scale,"data-offset":e.offset,style:{transform:"scale(".concat(e.scale+1,") ").concat(n,"(").concat(10*_,"px)"),transformOrigin:"horizontal"===e.mode?"50% 100%":"0% 50%"},onMouseOver:function(t){e.onMouseOver(t)}},e.children)}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6,_=e;return t*Math.exp(-1*_*_)}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vertical";return"horizontal"===e?{display:"flex"}:{}}function d(e){var t=i(Object(a.useState)("selectedOne"),2),_=t[0],n=t[1],r=e.data,d=e.multiple,p=void 0===d?.6:d,u=e.mode,m=e.data.map((function(e){return e.key})).indexOf(_);return m<0&&(m=-16),o.a.createElement("div",{className:"react-fisheye-container",onMouseOut:function(){n("<unknown>")},style:l(u)},r.map((function(t,a){return o.a.createElement(c,{key:t.key,data:t,scale:s(a-m,p),offset:a-m,isSelected:_===t.key,onMouseOver:function(){return n(t.key)},mode:u},e.render(t,a))})))}var p=r.b.div.withConfig({displayName:"articleLayout__Container",componentId:"hg7yoy-0"})(["position:fixed;left:0px;top:80px;"]),u=r.b.div.withConfig({displayName:"articleLayout__Item",componentId:"hg7yoy-1"})(["font-size:14px;padding-left:12px;color:#1a2d5ac2;&:hover{cursor:pointer;color:#1A2D5A;}&.h1{font-size:16px;}&.h2{font-size:16px;padding-left:24px;}&.h3{padding-left:36px;}"]),m=["h1","h2","h3"],E=function(e){function t(t){var _;return(_=e.call(this,t)||this).windowSizeChanged=function(){_.setState({visible:window.innerWidth>=1024})},_.handleIndexOnClick=function(e){var t=_.state.headings[e];t&&t.elem&&t.elem.scrollIntoView({behavior:"smooth"})},_.state={headings:[],visible:!0},_}Object(n.a)(t,e);var _=t.prototype;return _.componentDidMount=function(){var e=document.querySelector(".blog-post-content");if(e){this.windowSizeChanged();for(var t=[],_=0;_<e.children.length;_++){var n=e.children.item(_),a=n.tagName.toLowerCase();m.includes(a)&&t.push({type:a,value:n.textContent,key:n.textContent,elem:n})}this.setState({headings:t}),window.addEventListener("resize",this.windowSizeChanged,this.windowSizeChanged)}},_.componentWillUnmount=function(){window.removeEventListener("resize",this.windowSizeChanged,this.windowSizeChanged)},_.renderContent=function(){var e=this;return o.a.createElement(d,{multiple:.35,data:this.state.headings,render:function(t,_){var n=t.type,a=t.value;return o.a.createElement(u,{key:a,className:n,onClick:function(){return e.handleIndexOnClick(_)}},a)}})},_.render=function(){return o.a.createElement(p,{style:{display:this.state.visible?"block":"none"}},this.renderContent())},t}(a.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-258d07694abdeb64d090.js.map