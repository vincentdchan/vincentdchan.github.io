(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{149:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return Template}),__webpack_require__.d(__webpack_exports__,"pageQuery",function(){return pageQuery});var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(165),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),moment__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(166),moment__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__),react_progressive_image__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(168),react_progressive_image__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_progressive_image__WEBPACK_IMPORTED_MODULE_4__),_components_layout__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(158),_components_seo__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(159),_components_Title__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(162),_components_postMeta__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(163),_components_blogPost__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(185),_components_headerImagePlaceHolder__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(164);function betterDate(e){return moment__WEBPACK_IMPORTED_MODULE_3___default()(e).format("YYYY-MM-DD")}var Disqus=function(_Component){function Disqus(){return _Component.apply(this,arguments)||this}_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Disqus,_Component);var _proto=Disqus.prototype;return _proto.componentDidMount=function componentDidMount(){var _this$props=this.props,pageId=_this$props.pageId,pageUrl=_this$props.pageUrl;window.disqus_config=function(){this.page.url=pageUrl,this.page.identifier=pageId},eval("\n      (function() { // DON'T EDIT BELOW THIS LINE\n      var d = document, s = d.createElement('script');\n      s.src = 'https://vincentdchan.disqus.com/embed.js';\n      s.setAttribute('data-timestamp', +new Date());\n      (d.head || d.body).appendChild(s);\n      })();\n    ")},_proto.componentWillUnmount=function(){delete window.disqus_config},_proto.render=function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{id:"disqus_thread"})},Disqus}(react__WEBPACK_IMPORTED_MODULE_2__.Component);function Template(e){var _=e.data.markdownRemark,t=_.frontmatter,a=_.html,n=t.path;if(!n){var r=new Date(t.date),o=r.getFullYear().toString(),i=(r.getMonth()+1).toString();i.length<2&&(i="0"+i),n="/"+o+"/"+i+"/"+t.permalink}return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__.a,{headerImage:t.headerImage&&react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_progressive_image__WEBPACK_IMPORTED_MODULE_4___default.a,{src:t.headerImage,placeholder:""},function(e,_){return _?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_headerImagePlaceHolder__WEBPACK_IMPORTED_MODULE_10__.a,null):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img",{src:e,alt:"",style:{margin:"0px"}})})},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_6__.a,{title:t.title,keywords:["blog","technology","photography"]}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"blog-post-container"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_blogPost__WEBPACK_IMPORTED_MODULE_9__.a,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_7__.a,{to:n},t.title),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_postMeta__WEBPACK_IMPORTED_MODULE_8__.a,null,"Posted at ",betterDate(t.date)),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:a}}))),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Disqus,{pageUrl:"https://diverse.space"+n,pageId:n}))}var pageQuery="1014400351"},155:function(e,_,t){"use strict";t.d(_,"a",function(){return a}),t.d(_,"b",function(){return n});var a="#1A2D5A",n="#2E406E"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Vincent Chan 的巴士站 🚉"}}}}},157:function(e,_,t){},158:function(e,_,t){"use strict";var a=t(156),n=t(0),r=t.n(n),o=t(1),i=t.n(o),s=t(36),c=t(154),l=t(155),p=c.a.div.withConfig({displayName:"navigation__Navigation",componentId:"sc-1rnzhl3-0"})(["padding-left:0px;padding-right:0px;padding-top:4px;padding-bottom:36px;"]),d=c.a.span.withConfig({displayName:"header__SubTitle",componentId:"sc-31ozxh-0"})(["margin-right:12px;font-weight:500;color:",";&:hover{border-bottom:2px solid ",";}"],l.b,l.b),E=c.a.h1.withConfig({displayName:"header__BigTitle",componentId:"sc-31ozxh-1"})(["color:",";margin:0;"],l.a),u=function(e){var _=e.siteTitle;return r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,paddingTop:"1.45rem",paddingBottom:"0rem",paddingLeft:"1rem",paddingRight:"1rem"}},r.a.createElement(E,null,_),r.a.createElement(p,null,r.a.createElement(s.Link,{to:"/",style:{textDecoration:"none"}},r.a.createElement(d,null,"首页")),r.a.createElement(s.Link,{to:"/aboutme",style:{textDecoration:"none"}},r.a.createElement(d,null,"关于我")))))};u.propTypes={siteTitle:i.a.string},u.defaultProps={siteTitle:""};var m=u,g=(t(157),c.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-0"})(["color:",";"],l.b)),D=function(e){var _=e.headerImage,t=e.children;return r.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(n.Fragment,null,_,r.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,r.a.createElement(g,null,"© 2019, Built with ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})};D.propTypes={children:i.a.node.isRequired};_.a=D},159:function(e,_,t){"use strict";var a=t(160),n=t(0),r=t.n(n),o=t(1),i=t.n(o),s=t(161),c=t.n(s),l=t(36);function p(e){var _=e.description,t=e.lang,n=e.meta,o=e.keywords,i=e.title;return r.a.createElement(l.StaticQuery,{query:d,render:function(e){var a=_||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:i},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},_.a=p;var d="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Vincent Chan 的巴士站 🚉",description:"Vincent Chan's personal blog",author:"@cdz_solo"}}}}},162:function(e,_,t){"use strict";var a=t(0),n=t.n(a),r=t(36),o=t(154),i=t(155),s=o.a.span.withConfig({displayName:"Title__TitleContainer",componentId:"sc-1vvpuk6-0"})(["font-weight:500;font-size:24px;color:",";&:hover{border-bottom:solid "," 2px;}"],i.a,i.a);_.a=function(e){var _=e.to,t=e.children;return n.a.createElement(r.Link,{to:_,style:{textDecoration:"none"}},n.a.createElement(s,null,t))}},163:function(e,_,t){"use strict";var a=t(154),n=t(155),r=a.a.div.withConfig({displayName:"postMeta__PostMeta",componentId:"sc-34sjp3-0"})(["margin:8px 0px;font-size:16px;color:",";"],n.b);_.a=r},164:function(e,_,t){"use strict";var a=t(154).a.div.withConfig({displayName:"headerImagePlaceHolder__HeaderImagePlaceHolder",componentId:"sc-1qlbqq3-0"})(["background-color:rgb(245,247,249);height:280px;"]);_.a=a},185:function(e,_,t){"use strict";var a=t(154).a.div.withConfig({displayName:"blogPost__BlogPost",componentId:"iw2loi-0"})(["font-size:18px;line-height:1.5em;"]);_.a=a}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-7af0bd6fdc9314a93f03.js.map