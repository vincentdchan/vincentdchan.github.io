(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(e,t,n){"use strict";n.r(t);n(164);var r=n(0),a=n.n(r),o=n(165),i=n.n(o),c=n(183),l=n.n(c),s=n(158),u=n(159),p=n(162),m=n(163),d=n(156),f=n.n(d),g=n(157);function y(){var e=f()(["\nfont-size: 18px;\nline-height: 1.5em;\n"]);return y=function(){return e},e}var h=g.a.div(y());function v(){var e=f()(["\nbackground-color: rgb(245, 247, 249);\nheight: 300px;\n"]);return v=function(){return e},e}var b=g.a.div(v());function w(e){var t,n=e.data.markdownRemark,r=n.frontmatter,o=n.html,c=r.path;if(!c){var d=new Date(r.date),f=d.getFullYear().toString(),g=(d.getMonth()+1).toString();g.length<2&&(g="0"+g),c="/"+f+"/"+g+"/"+r.permalink}return a.a.createElement(s.a,{headerImage:r.headerImage&&a.a.createElement(l.a,{src:r.headerImage,placeholder:""},function(e,t){return t?a.a.createElement(b,null):a.a.createElement("img",{src:e,alt:"",style:{margin:"0px"}})})},a.a.createElement(u.a,{title:r.title,keywords:["blog","technology","photography"]}),a.a.createElement("div",{className:"blog-post-container"},a.a.createElement(h,null,a.a.createElement(p.a,{to:c},r.title),a.a.createElement(m.a,null,"Posted at ",(t=r.date,i()(t).format("YYYY-MM-DD"))),a.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:o}}))))}n.d(t,"default",function(){return w}),n.d(t,"pageQuery",function(){return E});var E="1014400351"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Vincent Chan 的公交站 🚉"}}}}},155:function(e,t,n){},158:function(e,t,n){"use strict";var r=n(154),a=n(0),o=n.n(a),i=n(1),c=n.n(i),l=n(36),s=function(e){var t=e.siteTitle;return o.a.createElement("div",null,o.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.Link,{to:"/",style:{textDecoration:"none"}},t))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var u=s,p=(n(155),function(e){var t=e.headerImage,n=e.children;return o.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(a.Fragment,null,t,o.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n,o.a.createElement("footer",null,"© 2018, Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});p.propTypes={children:c.a.node.isRequired};t.a=p},159:function(e,t,n){"use strict";var r=n(160),a=n(0),o=n.n(a),i=n(1),c=n.n(i),l=n(161),s=n.n(l),u=n(36);function p(e){var t=e.description,n=e.lang,a=e.meta,i=e.keywords,c=e.title;return o.a.createElement(u.StaticQuery,{query:m,render:function(e){var r=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:r})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=p;var m="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Vincent Chan 的公交站 🚉",description:"Vincent Chan's personal blog",author:"@cdz_solo"}}}}},162:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(36);t.a=function(e){var t=e.to,n=e.children;return a.a.createElement(o.Link,{to:t,style:{fontWeight:"500",fontSize:"24px",color:"#2e405b",borderBottom:"solid #2e405b 2px",textDecoration:"none"}},n)}},163:function(e,t,n){"use strict";var r=n(156),a=n.n(r);function o(){var e=a()(["\nmargin: 10px 0px;\nfont-size: 16px;\ncolor: rgb(46, 64, 91);\n"]);return o=function(){return e},e}var i=n(157).a.div(o());t.a=i},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=i(t).call(this,e),n=!o||"object"!==a(o)&&"function"!=typeof o?l(r):o,s(l(l(n)),"image",void 0),s(l(l(n)),"loadImage",function(e,t){n.image&&(n.image.onload=null,n.image.onerror=null);var r=new Image;n.image=r,r.onload=n.onLoad,r.onerror=n.onError,r.src=e,t&&(r.srcset=t.srcSet,r.sizes=t.sizes)}),s(l(l(n)),"onLoad",function(){n.props.delay?n.setImageWithDelay():n.setImage()}),s(l(l(n)),"setImageWithDelay",function(){setTimeout(function(){n.setImage()},n.props.delay)}),s(l(l(n)),"setImage",function(){n.setState({image:n.image.src,loading:!1,srcSetData:{srcSet:n.image.srcset||"",sizes:n.image.sizes||""}})}),s(l(l(n)),"onError",function(e){var t=n.props.onError;t&&t(e)}),n.state={image:e.placeholder,loading:!0,srcSetData:{srcSet:"",sizes:""}},n}var n,u,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r.Component),n=t,(u=[{key:"componentDidMount",value:function(){var e=this.props,t=e.src,n=e.srcSetData;this.loadImage(t,n)}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props,r=n.src,a=n.placeholder,o=n.srcSetData;r!==e.src&&this.setState({image:a,loading:!0},function(){t.loadImage(r,o)})}},{key:"componentWillUnmount",value:function(){this.image&&(this.image.onload=null,this.image.onerror=null)}},{key:"render",value:function(){var e=this.state,t=e.image,n=e.loading,r=e.srcSetData,a=this.props.children;if(!a||"function"!=typeof a)throw new Error("ProgressiveImage requires a function as its only child");return a(t,n,r)}}])&&o(n.prototype,u),p&&o(n,p),t}();t.default=u}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-2a9c45b2951c3c90b62c.js.map