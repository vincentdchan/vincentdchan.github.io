(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+8/h":function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),r=n.n(i),o=n("vOnD"),a=n("dI71");var s=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},c=n("XqMk"),u="object"==typeof self&&self&&self.Object===Object&&self,h=c.a||u||Function("return this")(),l=function(){return h.Date.now()},f=h.Symbol,d=Object.prototype,_=d.hasOwnProperty,g=d.toString,v=f?f.toStringTag:void 0;var p=function(t){var e=_.call(t,v),n=t[v];try{t[v]=void 0;var i=!0}catch(o){}var r=g.call(t);return i&&(e?t[v]=n:delete t[v]),r},m=Object.prototype.toString;var y=function(t){return m.call(t)},b=f?f.toStringTag:void 0;var w=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":b&&b in Object(t)?p(t):y(t)};var k=function(t){return null!=t&&"object"==typeof t};var x=function(t){return"symbol"==typeof t||k(t)&&"[object Symbol]"==w(t)},E=/^\s+|\s+$/g,B=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,R=/^0o[0-7]+$/i,S=parseInt;var W=function(t){if("number"==typeof t)return t;if(x(t))return NaN;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(E,"");var n=C.test(t);return n||R.test(t)?S(t.slice(2),n?2:8):B.test(t)?NaN:+t},j=Math.max,M=Math.min;var H=function(t,e,n){var i,r,o,a,c,u,h=0,f=!1,d=!1,_=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=i,o=r;return i=r=void 0,h=e,a=t.apply(o,n)}function v(t){return h=t,c=setTimeout(m,e),f?g(t):a}function p(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-h>=o}function m(){var t=l();if(p(t))return y(t);c=setTimeout(m,function(t){var n=e-(t-u);return d?M(n,o-(t-h)):n}(t))}function y(t){return c=void 0,_&&i?g(t):(i=r=void 0,a)}function b(){var t=l(),n=p(t);if(i=arguments,r=this,u=t,n){if(void 0===c)return v(u);if(d)return clearTimeout(c),c=setTimeout(m,e),g(u)}return void 0===c&&(c=setTimeout(m,e)),a}return e=W(e)||0,s(n)&&(f=!!n.leading,o=(d="maxWait"in n)?j(W(n.maxWait)||0,e):o,_="trailing"in n?!!n.trailing:_),b.cancel=function(){void 0!==c&&clearTimeout(c),h=0,i=u=r=c=void 0},b.flush=function(){return void 0===c?a:y(l())},b},D=function(t){function e(e){var n;return(n=t.call(this,e)||this).resetHeight=function(){n.containerRef.current.style.height=window.innerHeight+"px"},n.debounceResetHeight=H(n.resetHeight,200,{leading:!0}),n.containerRef=r.a.createRef(),"undefined"!=typeof window&&(n.pageHeight=window.innerHeight),n}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.debounceResetHeight),this.resetHeight()},n.componentWillUnmount=function(){window.removeEventListener("resize",this.debounceResetHeight)},n.render=function(){return r.a.createElement("div",{ref:this.containerRef,className:"full-page"},this.props.children)},e}(i.Component),O=n("uL9F"),A=n("vuIU"),L=function(){function t(e,n){this.body=O.Bodies.rectangle(e,n,t.width,t.height,{density:10,frictionAir:.035,friction:.1}),this.__img=new Image,this.__img.src="/images/brick.png"}var e=t.prototype;return e.draw=function(e){var n=this.body,i=n.position,r=n.angle;e.save(),e.translate(i.x,i.y),e.rotate(r),e.drawImage(this.__img,-1*t.width/2,-1*t.height/2,t.width,t.height),e.restore()},e.dispose=function(){},Object(A.a)(t,[{key:"position",get:function(){return this.body.position},set:function(t){var e=t.x,n=t.y;O.Body.set(this.body,{position:{x:e,y:n}})}}]),t}();L.width=42,L.height=24;var U=function(){function t(t,e,n,i){this.__width=n,this.__height=i,this.body=O.Bodies.rectangle(t,e,n,i,{isStatic:!0,friction:.99,frictionStatic:.99})}var e=t.prototype;return e.draw=function(t){var e=this.body.position,n=e.x,i=e.y;t.save(),t.fillStyle="black",t.translate(n,i),t.fillRect(-.5*this.__width,.5*-this.__height,this.__width,this.__height),t.restore()},e.dispose=function(){},t}(),z=n("Dded"),I=n.n(z);"undefined"!=typeof window&&(window.decomp=I.a);var N=function(){function t(t,e,n){void 0===n&&(n=.5),this.body=O.Bodies.fromVertices(t,e,[{x:306,y:8.5},{x:500,y:75},{x:505.5,y:162.5},{x:265.5,y:500.5},{x:14,y:304},{x:14,y:240},{x:306,y:8.5}],{density:200,frictionAir:.035,friction:.78}),this.__originalScale=n,this.scale=n,this.__img=new Image,this.__img.src="/images/large-brick-rect.png",this.isDragging=!1}var e=t.prototype;return e.update=function(){var e=this.body.position.x;if(e>=200&&e<t.EndX){var n=(t.EndX-e)/(t.EndX-200);this.__scale=this.__originalScale*n}},e.draw=function(e){var n=this.body,i=n.position,r=n.angle;e.save(),e.translate(i.x,i.y),e.rotate(r),e.drawImage(this.__img,-1*t.Width/2*this.__scale,-1*t.Height/2*this.__scale,t.Width*this.__scale,t.Height*this.__scale),e.fillStyle="black",e.fillText("x: "+i.x+" y: "+i.y,-1*t.Width/2*this.__scale,-1*t.Height/2*this.__scale),e.restore()},e.dispose=function(){},Object(A.a)(t,[{key:"scale",get:function(){return this.__scale},set:function(t){this.__scale=t,O.Body.scale(this.body,t,t)}}]),t}();N.Width=512,N.Height=512,N.EndX=680;var T=function(){function t(t,e){this.__x=t,this.__y=e,this.body=O.Bodies.fromVertices(t,e,[{x:31.5,y:34.5},{x:81.5,y:88},{x:126.5,y:47.5},{x:97.5,y:103.5},{x:56.5,y:103.5}],{isStatic:!0}),this.__img=new Image,this.__img.src="/images/MAN.png"}var e=t.prototype;return e.draw=function(e){e.save(0),e.translate(this.__x,this.__y),e.drawImage(this.__img,-1*t.Width/2+5,-1*t.Height/2-10,t.Width,t.Height),e.restore()},e.dispose=function(){},t}();T.Width=156,T.Height=156;var P=function(){function t(e){var n=this;this.handleMouseMove=function(t){if(n.__largeBrick&&n.__largeBrick.isDragging){var e=t.mouse.position,i=e.x,r=e.y;if(i>N.EndX-120){var o=new L(i,r);n.__bricks.push(o),n.__tmpBrick=o,n.resetLargeBrick()}}if(n.__tmpBrick){var a=t.mouse.position;n.__tmpBrick=a}},this.handleMouseUp=function(t){console.log(t),n.__tmpBrick&&O.World.add(n.__engine.world,n.__tmpBrick.body)},this.handleAfterUpdate=function(){n.__largeBrick.update();var e=n.__dom.getContext("2d");e.clearRect(0,0,L.width,L.height),e.fillStyle="#FFF3DE",e.fillRect(0,0,t.CanvasWidth,t.CanvasHeight),n.__bricks.forEach((function(t){return t.draw(e)}))},this.handleDragStart=function(t){n.__largeBrick&&t.body===n.__largeBrick.body&&(n.__largeBrick.isDragging=!0)},this.handleDragEnd=function(t){n.__largeBrick&&t.body===n.__largeBrick.body&&n.resetLargeBrick()},this.__dom=e,e.width=t.CanvasWidth,e.height=t.CanvasHeight,this.__world=O.World.create({bounds:{min:{x:0,y:0},max:{x:t.CanvasWidth,y:t.CanvasHeigh}}}),this.__engine=O.Engine.create({world:this.__world}),this.__mouse=O.Mouse.create(this.__dom),this.__mouseConstraint=O.MouseConstraint.create(this.__engine,{mouse:this.__mouse,constraint:{stiffness:.2,render:{visible:!1}}}),O.World.add(this.__engine.world,this.__mouseConstraint),this.__engine.world.gravity.y=1,this.__bricks=[],this.__ground=null,this.__lastTimeStamp=null,this.createGround(),this.createBodies(),this.resetLargeBrick()}var e=t.prototype;return e.setCanvasRatio=function(t){var e=t.getContext("2d"),n=(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1),i=t.width,r=t.height;t.width=i*n,t.height=r*n,t.style.width=i+"px",t.style.height=r+"px",e.scale(2*this.__ratio,2*this.__ratio),this.__ratio=n},e.createGround=function(){this.__ground=new U(480,420,t.CanvasWidth,10),this.__bricks.push(this.__ground)},e.createBodies=function(){for(var t=this,e=0;e<4;e++)for(var n=5-e,i=0;i<n;i++){var r=new L(620+L.width*(i+e/2),400-L.height*e);this.__bricks.push(r)}var o=new T(110,348);this.__bricks.push(o),this.__bricks.forEach((function(e){O.World.add(t.__engine.world,e.body)}))},e.loop=function(){O.Events.on(this.__engine,"afterUpdate",this.handleAfterUpdate),O.Events.on(this.__mouseConstraint,"mousemove",this.handleMouseMove),O.Events.on(this.__mouseConstraint,"mouseup",this.handleMouseUp),O.Events.on(this.__mouseConstraint,"startdrag",this.handleDragStart),O.Events.on(this.__mouseConstraint,"enddrag",this.handleDragEnd),O.Engine.run(this.__engine)},e.resetLargeBrick=function(){var t=this;this.__largeBrick&&(this.__largeBrick.dispose(),O.World.remove(this.__engine.world,this.__largeBrick.body),this.__bricks=this.__bricks.filter((function(e){return e!==t.__largeBrick}))),this.__largeBrick=new N(120,30),O.World.add(this.__engine.world,this.__largeBrick.body),this.__bricks=[this.__largeBrick].concat(this.__bricks)},e.dispose=function(){O.Engine.clear(this.__engine),this.__bricks.forEach((function(t){try{t.dispose()}catch(e){console.error(e)}}))},t}();P.CanvasWidth=920,P.CanvasHeight=480;var X=o.b.div.withConfig({displayName:"brick__Container",componentId:"sc-1dcdm0m-0"})(["display:flex;align-items:center;justify-content:center;"]),F=function(t){function e(e){var n;return(n=t.call(this,e)||this).resetSize=function(){n.worldContainerRef.current.style.width=window.innerWidth+"px",n.worldContainerRef.current.style.height=window.innerHeight+"px"},n.debounceResetSize=H(n.resetSize,200,{leading:!0}),n.worldContainerRef=r.a.createRef(),n.canvasRef=r.a.createRef(),n.controller=null,n}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.controller=new P(this.canvasRef.current),this.resetSize(),this.controller.loop(),window.addEventListener("resize",this.debounceResetSize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.debounceResetSize),this.controller&&(this.controller.dispose(),this.controller=null)},n.render=function(){return r.a.createElement(X,{ref:this.worldContainerRef,className:"brick-world"},r.a.createElement("canvas",{ref:this.canvasRef}))},e}(i.Component);function q(){var t,e,n=(t=["\n  body {\n    background-color: #FFF3DE;\n  }\n\n  .full-page {\n    overflow: hidden;\n  }\n"],e||(e=t.slice(0)),t.raw=e,t);return q=function(){return n},n}var V=Object(o.a)(q());e.default=function(){return r.a.createElement(i.Fragment,null,r.a.createElement(V,null),r.a.createElement(D,null,"Chen Duzhong 在做什么？"),r.a.createElement(D,null,r.a.createElement(F,null)))}},Dded:function(t,e){function n(t,e,n){n=n||0;var i,r,o,a,s,c,u,h=[0,0];return i=t[1][1]-t[0][1],r=t[0][0]-t[1][0],o=i*t[0][0]+r*t[0][1],a=e[1][1]-e[0][1],s=e[0][0]-e[1][0],c=a*e[0][0]+s*e[0][1],k(u=i*s-a*r,0,n)||(h[0]=(s*o-r*c)/u,h[1]=(i*c-a*o)/u),h}function i(t,e,n,i){var r=e[0]-t[0],o=e[1]-t[1],a=i[0]-n[0],s=i[1]-n[1];if(a*o-s*r==0)return!1;var c=(r*(n[1]-t[1])+o*(t[0]-n[0]))/(a*o-s*r),u=(a*(t[1]-n[1])+s*(n[0]-t[0]))/(s*r-a*o);return c>=0&&c<=1&&u>=0&&u<=1}function r(t,e,n){return(e[0]-t[0])*(n[1]-t[1])-(n[0]-t[0])*(e[1]-t[1])}function o(t,e,n){return r(t,e,n)>0}function a(t,e,n){return r(t,e,n)>=0}function s(t,e,n){return r(t,e,n)<0}function c(t,e,n){return r(t,e,n)<=0}t.exports={decomp:function(t){var e=function t(e){for(var n=[],i=[],r=[],o=[],a=Number.MAX_VALUE,s=0;s<e.length;++s)if(g(e,s))for(var c=0;c<e.length;++c)if(m(e,s,c)){i=t(b(e,s,c,o)),r=t(b(e,c,s,o));for(var u=0;u<r.length;u++)i.push(r[u]);i.length<a&&(n=i,a=i.length,n.push([d(e,s),d(e,c)]))}return n}(t);return e.length>0?function t(e,n){if(0===n.length)return[e];if(n instanceof Array&&n.length&&n[0]instanceof Array&&2===n[0].length&&n[0][0]instanceof Array){for(var i=[e],r=0;r<n.length;r++)for(var o=n[r],a=0;a<i.length;a++){var s=i[a],c=t(s,o);if(c){i.splice(a,1),i.push(c[0],c[1]);break}}return i}o=n,r=e.indexOf(o[0]),a=e.indexOf(o[1]);return-1!==r&&-1!==a&&[b(e,r,a),b(e,a,r)]}(t,e):[t]},quickDecomp:function t(e,n,i,r,u,h,l){h=h||100,l=l||0,u=u||25,n=void 0!==n?n:[],i=i||[],r=r||[];var v=[0,0],p=[0,0],m=[0,0],b=0,k=0,x=0,E=0,B=0,C=0,R=0,S=[],W=[],j=e,M=e;if(M.length<3)return n;if(++l>h)return console.warn("quickDecomp: max level ("+h+") reached."),n;for(var H=0;H<e.length;++H)if(g(j,H)){i.push(j[H]),b=k=Number.MAX_VALUE;for(var D=0;D<e.length;++D)o(d(j,H-1),d(j,H),d(j,D))&&c(d(j,H-1),d(j,H),d(j,D-1))&&(m=w(d(j,H-1),d(j,H),d(j,D),d(j,D-1)),s(d(j,H+1),d(j,H),m)&&(x=f(j[H],m))<k&&(k=x,p=m,C=D)),o(d(j,H+1),d(j,H),d(j,D+1))&&c(d(j,H+1),d(j,H),d(j,D))&&(m=w(d(j,H+1),d(j,H),d(j,D),d(j,D+1)),o(d(j,H-1),d(j,H),m)&&(x=f(j[H],m))<b&&(b=x,v=m,B=D));if(C===(B+1)%e.length)m[0]=(p[0]+v[0])/2,m[1]=(p[1]+v[1])/2,r.push(m),H<B?(_(S,j,H,B+1),S.push(m),W.push(m),0!==C&&_(W,j,C,j.length),_(W,j,0,H+1)):(0!==H&&_(S,j,H,j.length),_(S,j,0,B+1),S.push(m),W.push(m),_(W,j,C,H+1));else{if(C>B&&(B+=e.length),E=Number.MAX_VALUE,B<C)return n;for(D=C;D<=B;++D)a(d(j,H-1),d(j,H),d(j,D))&&c(d(j,H+1),d(j,H),d(j,D))&&(x=f(d(j,H),d(j,D)))<E&&y(j,H,D)&&(E=x,R=D%e.length);H<R?(_(S,j,H,R+1),0!==R&&_(W,j,R,M.length),_(W,j,0,H+1)):(0!==H&&_(S,j,H,M.length),_(S,j,0,R+1),_(W,j,R,H+1))}return S.length<W.length?(t(S,n,i,r,u,h,l),t(W,n,i,r,u,h,l)):(t(W,n,i,r,u,h,l),t(S,n,i,r,u,h,l)),n}return n.push(e),n},isSimple:function(t){var e,n=t;for(e=0;e<n.length-1;e++)for(var r=0;r<e-1;r++)if(i(n[e],n[e+1],n[r],n[r+1]))return!1;for(e=1;e<n.length-2;e++)if(i(n[0],n[n.length-1],n[e],n[e+1]))return!1;return!0},removeCollinearPoints:function(t,e){for(var n=0,i=t.length-1;t.length>3&&i>=0;--i)l(d(t,i-1),d(t,i),d(t,i+1),e)&&(t.splice(i%t.length,1),n++);return n},removeDuplicatePoints:function(t,e){for(var n=t.length-1;n>=1;--n)for(var i=t[n],r=n-1;r>=0;--r)x(i,t[r],e)&&t.splice(n,1)},makeCCW:function(t){for(var e=0,n=t,i=1;i<t.length;++i)(n[i][1]<n[e][1]||n[i][1]===n[e][1]&&n[i][0]>n[e][0])&&(e=i);return!o(d(t,e-1),d(t,e),d(t,e+1))&&(function(t){for(var e=[],n=t.length,i=0;i!==n;i++)e.push(t.pop());for(i=0;i!==n;i++)t[i]=e[i]}(t),!0)}};var u=[],h=[];function l(t,e,n,i){if(i){var o=u,a=h;o[0]=e[0]-t[0],o[1]=e[1]-t[1],a[0]=n[0]-e[0],a[1]=n[1]-e[1];var s=o[0]*a[0]+o[1]*a[1],c=Math.sqrt(o[0]*o[0]+o[1]*o[1]),l=Math.sqrt(a[0]*a[0]+a[1]*a[1]);return Math.acos(s/(c*l))<i}return 0===r(t,e,n)}function f(t,e){var n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i}function d(t,e){var n=t.length;return t[e<0?e%n+n:e%n]}function _(t,e,n,i){for(var r=n;r<i;r++)t.push(e[r])}function g(t,e){return s(d(t,e-1),d(t,e),d(t,e+1))}var v=[],p=[];function m(t,e,i){var r,o,s=v,u=p;if(a(d(t,e+1),d(t,e),d(t,i))&&c(d(t,e-1),d(t,e),d(t,i)))return!1;o=f(d(t,e),d(t,i));for(var h=0;h!==t.length;++h)if((h+1)%t.length!==e&&h!==e&&a(d(t,e),d(t,i),d(t,h+1))&&c(d(t,e),d(t,i),d(t,h))&&(s[0]=d(t,e),s[1]=d(t,i),u[0]=d(t,h),u[1]=d(t,h+1),r=n(s,u),f(d(t,e),r)<o))return!1;return!0}function y(t,e,n){for(var r=0;r!==t.length;++r)if(r!==e&&r!==n&&(r+1)%t.length!==e&&(r+1)%t.length!==n&&i(d(t,e),d(t,n),d(t,r),d(t,r+1)))return!1;return!0}function b(t,e,n,i){var r=i||[];if(function(t){t.length=0}(r),e<n)for(var o=e;o<=n;o++)r.push(t[o]);else{for(o=0;o<=n;o++)r.push(t[o]);for(o=e;o<t.length;o++)r.push(t[o])}return r}function w(t,e,n,i,r){r=r||0;var o=e[1]-t[1],a=t[0]-e[0],s=o*t[0]+a*t[1],c=i[1]-n[1],u=n[0]-i[0],h=c*n[0]+u*n[1],l=o*u-c*a;return k(l,0,r)?[0,0]:[(u*s-a*h)/l,(o*h-c*s)/l]}function k(t,e,n){return n=n||0,Math.abs(t-e)<=n}function x(t,e,n){return k(t[0],e[0],n)&&k(t[1],e[1],n)}},XqMk:function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n("yLpj"))},vuIU:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-what-am-i-doing-js-9d9363455559a598734f.js.map