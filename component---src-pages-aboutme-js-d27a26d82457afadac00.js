/*! For license information please see component---src-pages-aboutme-js-d27a26d82457afadac00.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7O5W":function(n,t,e){"use strict";(function(n,a){e.d(t,"a",(function(){return On})),e.d(t,"b",(function(){return En}));e("E9XD");function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),a.forEach((function(t){o(n,t,e[t])}))}return n}function l(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],a=!0,r=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(a=(o=c.next()).done)&&(e.push(o.value),!t||e.length!==t);a=!0);}catch(l){r=!0,i=l}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(){},f={},u={},m={mark:s,measure:s};try{"undefined"!=typeof window&&(f=window),"undefined"!=typeof document&&(u=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(m=performance)}catch(In){}var d=(f.navigator||{}).userAgent,p=void 0===d?"":d,h=f,g=u,y=m,b=(h.document,!!g.documentElement&&!!g.head&&"function"==typeof g.addEventListener&&"function"==typeof g.createElement),v=(~p.indexOf("MSIE")||p.indexOf("Trident/"),function(){try{}catch(In){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),w=v.concat([11,12,13,14,15,16,17,18,19,20]),x={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},k=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",x.GROUP,x.SWAP_OPACITY,x.PRIMARY,x.SECONDARY].concat(v.map((function(n){return"".concat(n,"x")}))).concat(w.map((function(n){return"w-".concat(n)}))),h.FontAwesomeConfig||{});if(g&&"function"==typeof g.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=l(n,2),e=t[0],a=t[1],r=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=g.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));null!=r&&(k[a]=r)}))}var _=c({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},k);_.autoReplaceSvg||(_.observeMutations=!1);var E=c({},_);h.FontAwesomeConfig=E;var O=h||{};O.___FONT_AWESOME___||(O.___FONT_AWESOME___={}),O.___FONT_AWESOME___.styles||(O.___FONT_AWESOME___.styles={}),O.___FONT_AWESOME___.hooks||(O.___FONT_AWESOME___.hooks={}),O.___FONT_AWESOME___.shims||(O.___FONT_AWESOME___.shims=[]);var I=O.___FONT_AWESOME___,C=[];b&&((g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState)||g.addEventListener("DOMContentLoaded",(function n(){g.removeEventListener("DOMContentLoaded",n),1,C.map((function(n){return n()}))})));var j,T=function(){},z=void 0!==n&&void 0!==n.process&&"function"==typeof n.process.emit,M=void 0===a?setTimeout:a,A=[];function P(){for(var n=0;n<A.length;n++)A[n][0](A[n][1]);A=[],j=!1}function S(n,t){A.push([n,t]),j||(j=!0,M(P,0))}function N(n){var t=n.owner,e=t._state,a=t._data,r=n[e],i=n.then;if("function"==typeof r){e="fulfilled";try{a=r(a)}catch(In){W(i,In)}}L(i,a)||("fulfilled"===e&&D(i,a),"rejected"===e&&W(i,a))}function L(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===r(t))){var a=t.then;if("function"==typeof a)return a.call(t,(function(a){e||(e=!0,t===a?R(n,a):D(n,a))}),(function(t){e||(e=!0,W(n,t))})),!0}}catch(In){return e||W(n,In),!0}return!1}function D(n,t){n!==t&&L(n,t)||R(n,t)}function R(n,t){"pending"===n._state&&(n._state="settled",n._data=t,S(B,n))}function W(n,t){"pending"===n._state&&(n._state="settled",n._data=t,S(Y,n))}function F(n){n._then=n._then.forEach(N)}function B(n){n._state="fulfilled",F(n)}function Y(t){t._state="rejected",F(t),!t._handled&&z&&n.process.emit("unhandledRejection",t._data,t)}function q(t){n.process.emit("rejectionHandled",t)}function X(n){if("function"!=typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof X==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){W(t,n)}try{n((function(n){D(t,n)}),e)}catch(In){e(In)}}(n,this)}X.prototype={constructor:X,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(T),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,"rejected"===this._state&&z&&S(q,this)),"fulfilled"===this._state||"rejected"===this._state?S(N,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},X.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new X((function(t,e){var a=[],r=0;function i(n){return r++,function(e){a[n]=e,--r||t(a)}}for(var o,c=0;c<n.length;c++)(o=n[c])&&"function"==typeof o.then?o.then(i(c),e):a[c]=o;r||t(a)}))},X.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new X((function(t,e){for(var a,r=0;r<n.length;r++)(a=n[r])&&"function"==typeof a.then?a.then(t,e):t(a)}))},X.resolve=function(n){return n&&"object"===r(n)&&n.constructor===X?n:new X((function(t){t(n)}))},X.reject=function(n){return new X((function(t,e){e(n)}))};var U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function H(n){if(n&&b){var t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=g.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(t,a),n}}function G(){for(var n=12,t="";n-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function J(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function V(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function K(n){return n.size!==U.size||n.x!==U.x||n.y!==U.y||n.rotate!==U.rotate||n.flipX||n.flipY}function Q(n){var t=n.transform,e=n.containerWidth,a=n.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var $={x:0,y:0,width:"100%",height:"100%"};function Z(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function nn(n){var t=n.icons,e=t.main,a=t.mask,r=n.prefix,i=n.iconName,o=n.transform,l=n.symbol,s=n.title,f=n.maskId,u=n.titleId,m=n.extra,d=n.watchable,p=void 0!==d&&d,h=a.found?a:e,g=h.width,y=h.height,b="fak"===r,v=b?"":"fa-w-".concat(Math.ceil(g/y*16)),w=[E.replacementClass,i?"".concat(E.familyPrefix,"-").concat(i):"",v].filter((function(n){return-1===m.classes.indexOf(n)})).filter((function(n){return""!==n||!!n})).concat(m.classes).join(" "),x={children:[],attributes:c({},m.attributes,{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(y)})},k=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/y*16*.0625,"em")}:{};p&&(x.attributes["data-fa-i2svg"]=""),s&&x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||G())},children:[s]});var _=c({},x,{prefix:r,iconName:i,main:e,mask:a,maskId:f,transform:o,symbol:l,styles:c({},k,m.styles)}),O=a.found&&e.found?function(n){var t,e=n.children,a=n.attributes,r=n.main,i=n.mask,o=n.maskId,l=n.transform,s=r.width,f=r.icon,u=i.width,m=i.icon,d=Q({transform:l,containerWidth:u,iconWidth:s}),p={tag:"rect",attributes:c({},$,{fill:"white"})},h=f.children?{children:f.children.map(Z)}:{},g={tag:"g",attributes:c({},d.inner),children:[Z(c({tag:f.tag,attributes:c({},f.attributes,d.path)},h))]},y={tag:"g",attributes:c({},d.outer),children:[g]},b="mask-".concat(o||G()),v="clip-".concat(o||G()),w={tag:"mask",attributes:c({},$,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,y]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=m,"g"===t.tag?t.children:[t])},w]};return e.push(x,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},$)}),{children:e,attributes:a}}(_):function(n){var t=n.children,e=n.attributes,a=n.main,r=n.transform,i=V(n.styles);if(i.length>0&&(e.style=i),K(r)){var o=Q({transform:r,containerWidth:a.width,iconWidth:a.width});t.push({tag:"g",attributes:c({},o.outer),children:[{tag:"g",attributes:c({},o.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c({},a.icon.attributes,o.path)}]}]})}else t.push(a.icon);return{children:t,attributes:e}}(_),I=O.children,C=O.attributes;return _.children=I,_.attributes=C,l?function(n){var t=n.prefix,e=n.iconName,a=n.children,r=n.attributes,i=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c({},r,{id:!0===i?"".concat(t,"-").concat(E.familyPrefix,"-").concat(e):i}),children:a}]}]}(_):function(n){var t=n.children,e=n.main,a=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(K(o)&&e.found&&!a.found){var l={x:e.width/e.height/2,y:.5};r.style=V(c({},i,{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}(_)}var tn=function(){},en=(E.measurePerformance&&y&&y.mark&&y.measure,function(n,t,e,a){var r,i,o,c=Object.keys(n),l=c.length,s=void 0!==a?function(n,t){return function(e,a,r,i){return n.call(t,e,a,r,i)}}(t,a):t;for(void 0===e?(r=1,o=n[c[0]]):(r=0,o=e);r<l;r++)o=s(o,n[i=c[r]],i,n);return o});function an(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.skipHooks,r=void 0!==a&&a,i=Object.keys(t).reduce((function(n,e){var a=t[e];return!!a.icon?n[a.iconName]=a.icon:n[e]=a,n}),{});"function"!=typeof I.hooks.addPack||r?I.styles[n]=c({},I.styles[n]||{},i):I.hooks.addPack(n,i),"fas"===n&&an("fa",t)}var rn=I.styles,on=I.shims,cn=function(){var n=function(n){return en(rn,(function(t,e,a){return t[a]=en(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var a=t[2];return n[e]=e,a.forEach((function(t){n[t]=e})),n}));var t="far"in rn;en(on,(function(n,e){var a=e[0],r=e[1],i=e[2];return"far"!==r||t||(r="fas"),n[a]={prefix:r,iconName:i},n}),{})};cn();I.styles;function ln(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function sn(n){var t=n.tag,e=n.attributes,a=void 0===e?{}:e,r=n.children,i=void 0===r?[]:r;return"string"==typeof n?J(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(J(n[e]),'" ')}),"").trim()}(a),">").concat(i.map(sn).join(""),"</").concat(t,">")}var fn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),a=e[0],r=e.slice(1).join("-");if(a&&"h"===r)return n.flipX=!0,n;if(a&&"v"===r)return n.flipY=!0,n;if(r=parseFloat(r),isNaN(r))return n;switch(a){case"grow":n.size=n.size+r;break;case"shrink":n.size=n.size-r;break;case"left":n.x=n.x-r;break;case"right":n.x=n.x+r;break;case"up":n.y=n.y-r;break;case"down":n.y=n.y+r;break;case"rotate":n.rotate=n.rotate+r}return n}),t):t};function un(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}un.prototype=Object.create(Error.prototype),un.prototype.constructor=un;var mn={fill:"currentColor"},dn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},pn={tag:"path",attributes:c({},mn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},hn=c({},dn,{attributeName:"opacity"});c({},mn,{cx:"256",cy:"364",r:"28"}),c({},dn,{attributeName:"r",values:"28;14;28;28;14;28;"}),c({},hn,{values:"1;0;1;1;0;1;"}),c({},mn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),c({},hn,{values:"1;0;0;0;0;1;"}),c({},mn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),c({},hn,{values:"0;0;1;1;0;0;"}),I.styles;function gn(n){var t=n[0],e=n[1],a=l(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(a)?{tag:"g",attributes:{class:"".concat(E.familyPrefix,"-").concat(x.GROUP)},children:[{tag:"path",attributes:{class:"".concat(E.familyPrefix,"-").concat(x.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(E.familyPrefix,"-").concat(x.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}}}}I.styles;function yn(){var n="svg-inline--fa",t=E.familyPrefix,e=E.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if("fa"!==t||e!==n){var r=new RegExp("\\.".concat("fa","\\-"),"g"),i=new RegExp("\\--".concat("fa","\\-"),"g"),o=new RegExp("\\.".concat(n),"g");a=a.replace(r,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(o,".".concat(e))}return a}function bn(){E.autoAddCss&&!_n&&(H(yn()),_n=!0)}function vn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return sn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(b){var t=g.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function wn(n){var t=n.prefix,e=void 0===t?"fa":t,a=n.iconName;if(a)return ln(kn.definitions,e,a)||ln(I.styles,e,a)}var xn,kn=new(function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,a;return t=n,(e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];var r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach((function(t){n.definitions[t]=c({},n.definitions[t]||{},r[t]),an(t,r[t]),cn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var a=e[t],r=a.prefix,i=a.iconName,o=a.icon;n[r]||(n[r]={}),n[r][i]=o})),n}}])&&i(t.prototype,e),a&&i(t,a),n}()),_n=!1,En={transform:function(n){return fn(n)}},On=(xn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,a=void 0===e?U:e,r=t.symbol,i=void 0!==r&&r,o=t.mask,l=void 0===o?null:o,s=t.maskId,f=void 0===s?null:s,u=t.title,m=void 0===u?null:u,d=t.titleId,p=void 0===d?null:d,h=t.classes,g=void 0===h?[]:h,y=t.attributes,b=void 0===y?{}:y,v=t.styles,w=void 0===v?{}:v;if(n){var x=n.prefix,k=n.iconName,_=n.icon;return vn(c({type:"icon"},n),(function(){return bn(),E.autoA11y&&(m?b["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(p||G()):(b["aria-hidden"]="true",b.focusable="false")),nn({icons:{main:gn(_),mask:l?gn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:c({},U,a),symbol:i,title:m,maskId:f,titleId:p,extra:{attributes:b,styles:w,classes:g}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:wn(n||{}),a=t.mask;return a&&(a=(a||{}).icon?a:wn(a||{})),xn(e,c({},t,{mask:a}))})}).call(this,e("yLpj"),e("URgk").setImmediate)},"8ypT":function(n,t,e){},Bl7J:function(n,t,e){"use strict";var a=e("q1tI"),r=e.n(a),i=e("Wbzz"),o=e("vOnD"),c=e("cqnt"),l=o.b.div.withConfig({displayName:"navigation__Navigation",componentId:"sc-1rnzhl3-0"})(["padding-left:0px;padding-right:0px;padding-top:8px;padding-bottom:32px;"]),s=o.b.span.withConfig({displayName:"header__SubTitle",componentId:"sc-31ozxh-0"})(["margin-right:12px;font-weight:500;color:",";&:hover{border-bottom:2px solid ",";}"],c.c,c.c),f=o.b.h1.withConfig({displayName:"header__BigTitle",componentId:"sc-31ozxh-1"})(["color:",";margin:0;"],c.a),u=function(n){var t=n.siteTitle;return r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,paddingTop:"1.45rem",paddingBottom:"0rem",paddingLeft:"1rem",paddingRight:"1rem"}},r.a.createElement(f,null,t),r.a.createElement(l,null,r.a.createElement(i.Link,{to:"/",style:{textDecoration:"none"}},r.a.createElement(s,null,"首页")),r.a.createElement(i.Link,{to:"/articles",style:{textDecoration:"none"}},r.a.createElement(s,null,"文章")),r.a.createElement(i.Link,{to:"/aboutme",style:{textDecoration:"none"}},r.a.createElement(s,null,"关于我")),r.a.createElement("a",{href:"/rss",onClick:function(n){n.preventDefault(),"undefined"!=typeof window&&(window.location.href="/rss")},style:{textDecoration:"none"}},r.a.createElement(s,null,"RSS")))))};u.defaultProps={siteTitle:""};var m=u,d=(e("8ypT"),o.b.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-0"})(["color:",";margin-bottom:56px;"],c.c));t.a=function(n){var t=n.headerImage,e=n.children,o=n.header;return r.a.createElement(i.StaticQuery,{query:"3649515864",render:function(n){return r.a.createElement(a.Fragment,null,o||r.a.createElement(r.a.Fragment,null,t,r.a.createElement(m,{siteTitle:n.site.siteMetadata.title})),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,r.a.createElement(d,null,"© 2019, Built with ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}})}},URgk:function(n,t,e){(function(n){var a=void 0!==n&&n||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(n,t){this._id=n,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(n){n&&n.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(n,t){clearTimeout(n._idleTimeoutId),n._idleTimeout=t},t.unenroll=function(n){clearTimeout(n._idleTimeoutId),n._idleTimeout=-1},t._unrefActive=t.active=function(n){clearTimeout(n._idleTimeoutId);var t=n._idleTimeout;t>=0&&(n._idleTimeoutId=setTimeout((function(){n._onTimeout&&n._onTimeout()}),t))},e("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==n&&n.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==n&&n.clearImmediate||this&&this.clearImmediate}).call(this,e("yLpj"))},YBdB:function(n,t,e){(function(n,t){!function(n,e){"use strict";if(!n.setImmediate){var a,r,i,o,c,l=1,s={},f=!1,u=n.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(n);m=m&&m.setTimeout?m:n,"[object process]"==={}.toString.call(n.process)?a=function(n){t.nextTick((function(){p(n)}))}:!function(){if(n.postMessage&&!n.importScripts){var t=!0,e=n.onmessage;return n.onmessage=function(){t=!1},n.postMessage("","*"),n.onmessage=e,t}}()?n.MessageChannel?((i=new MessageChannel).port1.onmessage=function(n){p(n.data)},a=function(n){i.port2.postMessage(n)}):u&&"onreadystatechange"in u.createElement("script")?(r=u.documentElement,a=function(n){var t=u.createElement("script");t.onreadystatechange=function(){p(n),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):a=function(n){setTimeout(p,0,n)}:(o="setImmediate$"+Math.random()+"$",c=function(t){t.source===n&&"string"==typeof t.data&&0===t.data.indexOf(o)&&p(+t.data.slice(o.length))},n.addEventListener?n.addEventListener("message",c,!1):n.attachEvent("onmessage",c),a=function(t){n.postMessage(o+t,"*")}),m.setImmediate=function(n){"function"!=typeof n&&(n=new Function(""+n));for(var t=new Array(arguments.length-1),e=0;e<t.length;e++)t[e]=arguments[e+1];var r={callback:n,args:t};return s[l]=r,a(l),l++},m.clearImmediate=d}function d(n){delete s[n]}function p(n){if(f)setTimeout(p,0,n);else{var t=s[n];if(t){f=!0;try{!function(n){var t=n.callback,e=n.args;switch(e.length){case 0:t();break;case 1:t(e[0]);break;case 2:t(e[0],e[1]);break;case 3:t(e[0],e[1],e[2]);break;default:t.apply(void 0,e)}}(t)}finally{d(n),f=!1}}}}}("undefined"==typeof self?void 0===n?this:n:self)}).call(this,e("yLpj"),e("8oxB"))},cqnt:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return i}));var a="#1A2D5A",r="#2E406E",i="#42537E"},tknL:function(n,t,e){"use strict";e.r(t);var a=e("q1tI"),r=e.n(a),i=(e("E9XD"),e("7O5W")),o=e("17x9"),c=e.n(o);function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function f(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){s(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function m(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}function d(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(n){return t=n,(t-=0)==t?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1);var t}function h(n){return n.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,a=t.indexOf(":"),r=p(t.slice(0,a)),i=t.slice(a+1).trim();return r.startsWith("webkit")?n[(e=r,e.charAt(0).toUpperCase()+e.slice(1))]=i:n[r]=i,n}),{})}var g=!1;try{g=!0}catch(S){}function y(n){return null===n?null:"object"===l(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function b(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},n,t):{}}function v(n){var t=n.forwardedRef,e=m(n,["forwardedRef"]),a=e.icon,r=e.mask,o=e.symbol,c=e.className,l=e.title,f=y(a),p=b("classes",[].concat(d(function(n){var t,e=n.spin,a=n.pulse,r=n.fixedWidth,i=n.inverse,o=n.border,c=n.listItem,l=n.flip,f=n.size,u=n.rotation,m=n.pull,d=(s(t={"fa-spin":e,"fa-pulse":a,"fa-fw":r,"fa-inverse":i,"fa-border":o,"fa-li":c,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(f),null!=f),s(t,"fa-rotate-".concat(u),null!=u&&0!==u),s(t,"fa-pull-".concat(m),null!=m),s(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(d).map((function(n){return d[n]?n:null})).filter((function(n){return n}))}(e)),d(c.split(" ")))),h=b("transform","string"==typeof e.transform?i.b.transform(e.transform):e.transform),x=b("mask",y(r)),k=Object(i.a)(f,u({},p,{},h,{},x,{symbol:o,title:l}));if(!k)return function(){var n;!g&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",f),null;var _=k.abstract,E={ref:t};return Object.keys(e).forEach((function(n){v.defaultProps.hasOwnProperty(n)||(E[n]=e[n])})),w(_[0],E)}v.displayName="FontAwesomeIcon",v.propTypes={border:c.a.bool,className:c.a.string,mask:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),fixedWidth:c.a.bool,inverse:c.a.bool,flip:c.a.oneOf(["horizontal","vertical","both"]),icon:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),listItem:c.a.bool,pull:c.a.oneOf(["right","left"]),pulse:c.a.bool,rotation:c.a.oneOf([0,90,180,270]),size:c.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c.a.bool,symbol:c.a.oneOfType([c.a.bool,c.a.string]),title:c.a.string,transform:c.a.oneOfType([c.a.string,c.a.object]),swapOpacity:c.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function n(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var r=(e.children||[]).map((function(e){return n(t,e)})),i=Object.keys(e.attributes||{}).reduce((function(n,t){var a=e.attributes[t];switch(t){case"class":n.attrs.className=a,delete e.attributes.class;break;case"style":n.attrs.style=h(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=a:n.attrs[p(t)]=a}return n}),{attrs:{}}),o=a.style,c=void 0===o?{}:o,l=m(a,["style"]);return i.attrs.style=u({},i.attrs.style,{},c),t.apply(void 0,[e.tag,u({},i.attrs,{},l)].concat(d(r)))}.bind(null,r.a.createElement),x=e("wHSu"),k=e("8tEE"),_=e("Bl7J"),E=e("vOnD"),O=e("cqnt"),I=E.b.h2.withConfig({displayName:"aboutMeContainer__NameContainer",componentId:"hovyq8-0"})(["color:",";margin-top:0.96rem;margin-bottom:0rem;"],O.a),C=E.b.div.withConfig({displayName:"aboutMeContainer__SocialContainer",componentId:"hovyq8-1"})(["display:inline-block;margin-right:8px;"]),j=E.b.div.withConfig({displayName:"aboutMeContainer__Content",componentId:"hovyq8-2"})(["color:",";margin:4px 0px;"],O.c),T=E.b.p.withConfig({displayName:"aboutMeContainer__Geolocation",componentId:"hovyq8-3"})(["color:",";margin-top:4px;margin-bottom:4px;opacity:0.84;font-size:14px;svg{margin-right:4px;}"],O.c),z=E.b.div.withConfig({displayName:"aboutMeContainer",componentId:"hovyq8-4"})(["padding:84px 0px;text-align:center;min-height:480px;"]),M=E.b.div.withConfig({displayName:"avatar__AvatarContainer",componentId:"anjdml-0"})(["display:inline-block;width:128px;height:128px;"]),A=function(n){return r.a.createElement(M,null,r.a.createElement("img",Object.assign({style:{borderRadius:"50%",margin:"0px"}},n)))},P=E.b.a.withConfig({displayName:"aboutme__SocialLink",componentId:"sc-1dtjyvr-0"})(["text-decoration:none;&:hover{border-bottom:2px solid rgb(46,64,91);}svg{margin-right:4px;}"]);t.default=function(){return r.a.createElement(_.a,null,r.a.createElement(z,null,r.a.createElement(A,{src:"/images/avatar.png",alt:"avatar"}),r.a.createElement(I,null,"Vincent Chan"),r.a.createElement(T,null,r.a.createElement(v,{icon:x.d}),r.a.createElement("i",null,"Guangzhou"),"  ",r.a.createElement(v,{icon:x.d}),r.a.createElement("i",null,"Shenzhen"),"  ",r.a.createElement(v,{icon:x.a}),r.a.createElement("i",null,"Bytedance")),r.a.createElement(j,null,r.a.createElement("span",null,"Frontend Developer / Photographer")),r.a.createElement(j,null,r.a.createElement(C,null,r.a.createElement(P,{href:"https://unsplash.com/@okcdz"},r.a.createElement(v,{icon:x.b}),"Unsplash")),r.a.createElement(C,null,r.a.createElement(P,{href:"mailto:okcdz@diverse.space"},r.a.createElement(v,{icon:x.c}),"Email")),r.a.createElement(C,null,r.a.createElement(P,{href:"https://github.com/vincentdchan"},r.a.createElement(v,{icon:k.a}),"Github")),r.a.createElement(C,null,r.a.createElement(P,{href:"https://twitter.com/cdz_solo"},r.a.createElement(v,{icon:k.b}),"Twitter(Eng)")))))}}}]);
//# sourceMappingURL=component---src-pages-aboutme-js-d27a26d82457afadac00.js.map