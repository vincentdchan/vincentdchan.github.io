(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,t,a){"use strict";a.r(t);a(165);var n=a(190),r=a(0),i=a.n(r),o=a(36),l=a(166),p=a.n(l),c=a(168),d=a.n(c),s=a(158),m=a(159),g=a(162),u=a(163),h=a(154),f=a(155),k=h.a.p.withConfig({displayName:"excerpt__Excerpt",componentId:"sc-1u2f8df-0"})(["font-size:16px;line-height:normal;margin-bottom:36px;color:",";"],f.b),x=a(164);t.default=function(){return i.a.createElement(o.StaticQuery,{query:"539435194",render:function(e){return i.a.createElement(s.a,{headerImage:i.a.createElement(d.a,{src:"/images/homepage.jpg",placeholder:""},function(e,t){return t?i.a.createElement(x.a,null):i.a.createElement("img",{src:e,alt:"",style:{margin:"0px"}})})},i.a.createElement(m.a,{title:"首页",keywords:["blog","technology","photography"]}),e.allMarkdownRemark.edges.map(function(e){var t=e.node,a=t.frontmatter.path;if(!a){var n=new Date(t.frontmatter.date),r=n.getFullYear().toString(),o=(n.getMonth()+1).toString();o.length<2&&(o="0"+o),a="/"+r+"/"+o+"/"+t.frontmatter.permalink}return i.a.createElement("div",{key:t.frontmatter.title},i.a.createElement(g.a,{to:a},t.frontmatter.title),i.a.createElement(u.a,null,"Posted at ",function(e){return p()(e).format("YYYY-MM-DD")}(t.frontmatter.date)),i.a.createElement(k,null,t.excerpt))}))},data:n})}},155:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n="#1A2D5A",r="#2E406E"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Vincent Chan 的巴士站 🚉"}}}}},157:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(1),l=a.n(o),p=a(36),c=a(154),d=a(155),s=c.a.div.withConfig({displayName:"navigation__Navigation",componentId:"sc-1rnzhl3-0"})(["padding-left:0px;padding-right:0px;padding-top:4px;padding-bottom:36px;"]),m=c.a.span.withConfig({displayName:"header__SubTitle",componentId:"sc-31ozxh-0"})(["margin-right:12px;font-weight:500;color:",";&:hover{border-bottom:2px solid ",";}"],d.b,d.b),g=c.a.h1.withConfig({displayName:"header__BigTitle",componentId:"sc-31ozxh-1"})(["color:",";margin:0;"],d.a),u=function(e){var t=e.siteTitle;return i.a.createElement("div",null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,paddingTop:"1.45rem",paddingBottom:"0rem",paddingLeft:"1rem",paddingRight:"1rem"}},i.a.createElement(g,null,t),i.a.createElement(s,null,i.a.createElement(p.Link,{to:"/",style:{textDecoration:"none"}},i.a.createElement(m,null,"首页")),i.a.createElement(p.Link,{to:"/aboutme",style:{textDecoration:"none"}},i.a.createElement(m,null,"关于我")))))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var h=u,f=(a(157),c.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-0"})(["color:",";"],d.b)),k=function(e){var t=e.headerImage,a=e.children;return i.a.createElement(p.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(r.Fragment,null,t,i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},a,i.a.createElement(f,null,"© 2019, Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};k.propTypes={children:l.a.node.isRequired};t.a=k},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(1),l=a.n(o),p=a(161),c=a.n(p),d=a(36);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(d.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s;var m="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Vincent Chan 的巴士站 🚉",description:"Vincent Chan's personal blog",author:"@cdz_solo"}}}}},162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(36),o=a(154),l=a(155),p=o.a.span.withConfig({displayName:"Title__TitleContainer",componentId:"sc-1vvpuk6-0"})(["font-weight:500;font-size:24px;color:",";&:hover{border-bottom:solid "," 2px;}"],l.a,l.a);t.a=function(e){var t=e.to,a=e.children;return r.a.createElement(i.Link,{to:t,style:{textDecoration:"none"}},r.a.createElement(p,null,a))}},163:function(e,t,a){"use strict";var n=a(154),r=a(155),i=n.a.div.withConfig({displayName:"postMeta__PostMeta",componentId:"sc-34sjp3-0"})(["margin:8px 0px;font-size:16px;color:",";"],r.b);t.a=i},164:function(e,t,a){"use strict";var n=a(154).a.div.withConfig({displayName:"headerImagePlaceHolder__HeaderImagePlaceHolder",componentId:"sc-1qlbqq3-0"})(["background-color:rgb(245,247,249);height:280px;"]);t.a=n},190:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"人生中一些很重要的时间段，往往会像细水那样慢慢流走，回过头来才发现，涓涓细水汇成了江河大海。对于我来说 2018 年就是这样的一年，回头一看觉得很平淡，但是不乏丰富的细节。 关键词：  GSoC，大四，实习 今年年底的时候我时常会回忆起 2017 年的 12 月，那时候刚来深圳，可能因为同是 12 月，渐渐变冷的天气…",frontmatter:{title:"2018 不停留",date:"2019-01-01",path:"/2019/01/2018-never-stops",permalink:null}}},{node:{excerpt:"自从 macOS 升级到 Mojave(10.14) 之后，编译 SpiderMonkey 变得有点不同。 有一点比较重要的变化是 libstdc++ 被替换成 libc++，这个修改是从 OS X 10.9 就开始有的修改，所以直接调用 ./configure 有这样的 warning 和报错： 很明显，报错原因是…",frontmatter:{title:"在 Mojave 下编译 SpiderMonkey",date:"2018-10-29T00:16:14.000Z",path:"/2018/10/在-Mojave-下编译-SpiderMonkey",permalink:null}}},{node:{excerpt:"Scala 中的 for 表达式非常强大，用起来很简单顺手，但是理解起来可能需要一些背景知识。这个 for 从名字上看让我们觉得它很像命令式语言中的那种 for statement，但是其实 Scala 的 for 是非常函数式的，它跟命令式语言中的 for 语句根本不是一个东西，因为它根本不支持 break 和 c…",frontmatter:{title:"理解 Scala 中的 for 表达式",date:"2018-06-10T02:58:33.000Z",path:null,permalink:"understanding-for-comprehansion-in-scala"}}},{node:{excerpt:"GSoC 2018 中，我的项目就在于给 webpack 实现深作用域分析（Deep Scope Analysis），主要还是为了改进 webpack 的 tree-shaking 工作。 前言 JS 的 tree-shaking 一直是前端开发中的痛点，大家都在想尽办法减少打包的代码体积。Tree shaking …",frontmatter:{title:"webpack 如何通过作用域分析消除无用代码",date:"2018-05-25T14:24:18.000Z",path:null,permalink:"better-tree-shaking-with-scope-analysis"}}},{node:{excerpt:"有幸被  webpack  选中参加今年的 GSoC，这次的 GSoC 我主要负责实现 Deep Scope Analysis，这个最后会被用到最新版本的 webpack 里面用于 Tree Shaking Github 项目地址： webpack-deep-scope-analysis-plugin 根据 webp…",frontmatter:{title:"GSoC 之旅",date:"2018-04-29T14:16:00.000Z",path:"/2018/04/beginning_gsoc_2018",permalink:"beginning_gsoc_2018"}}},{node:{excerpt:"当 Haskell 这些静态类型的函数式语言玩久了，就想尝试一下动态类型的函数式语言，比如 Lisp，最古老的编程语言之一。不过现在写 Lisp 是不现实，因为原始的 Lisp 是 dynamic scope 的，写起来会异常痛苦。所以我打算从 Lisp 的一些比较现代方言下手，比如说 Racket 这种广受赞誉的语…",frontmatter:{title:"初窥 Racket：解析一个数学表达式",date:"2018-01-28T19:09:00.000Z",path:null,permalink:"parsing-math-expression-by-racket"}}},{node:{excerpt:"此篇博文整理了我和  walkerlala  关于函数式相关问题的讨论 Vincent Chan 我觉得函数式很重要的一点是 Immutable，使得每一次更改都要重新生成一次整个数据结构（当然我们可以通过编译器优化来减少某些生成），但是immutable 也使得整个程序的状态可以被记录和更改。我之前写前端的时候就尝…",frontmatter:{title:"关于函数式",date:"2017-11-13T12:54:18.000Z",path:null,permalink:"some-opinions-about-fp"}}},{node:{excerpt:"最近在学习 Haskell，不得不说，这真的是一门令我着迷的语言，lazy 和纯函数式等特性都非常吸引我，不过短时间内还无法掌握得很好，最重要是思维的转变非常苦难。 学习一门语言最好的办法就是多实践，我还记得我写过一片文章 编译原理学习笔记1：解析数学表达式 \n来讲述怎样去解析数学表达式，但是我没有讲如何去实现，现在…",frontmatter:{title:"初窥 Haskell：解析一个数学表达式",date:"2017-10-30T20:26:27.000Z",path:null,permalink:"parsing-math-expression-by-haskell"}}},{node:{excerpt:"在写一个小游戏过程中，打算做一个饼状旋转的动画，于是打算用 Python 来生成这个动画，假设我们有这样一张图片 最后生成的动画是这个样子的 当然，中间会生成很多帧的动画 怎么去生成每一帧动画呢？其实关键就在于挖去一个饼状图形里面的像素 那我们只要遍历这张图片的所有元素，然后挖去在这个饼状范围内的像素即可，从这个思路…",frontmatter:{title:"用 Python 生成饼状旋转动画",date:"2017-10-29T01:53:48.000Z",path:null,permalink:"generating-spin-animation-using-python"}}},{node:{excerpt:"《黑客帝国》是我最喜欢的电影之一，我感觉《黑客帝国》里面的数字雨简直是一种艺术，非常好看，看上去非常高大上，而且和“雨”这种东西结合，非常有意思，于是想自己实现一下。 效果图: 在Canvas里面实现动画的思路其实很简单，在很短的时间里面刷新一次就行了。每次刷新的时候，字符都会下降，然而数字雨里面并不是整串“雨”往下…",frontmatter:{title:"HTML Canvas实现《黑客帝国》数字雨",date:"2017-06-19T00:00:00.000Z",path:null,permalink:"matrix-rain-by-html-canvas"}}},{node:{excerpt:"最近都在做一件事情，做一个光线追踪渲染器，一直很想揭开光线追踪渲染器的大门，于是跟着 Milo Yip 的步伐开撸了 用 JavaScript 玩转计算机图形学(一)光线追踪入门 渲染结果图：\n 其实制作的过程是非常坎坷的，我首先用 C# 按照博文的思路重写了一边，渲染出结果（1024x1024），总共耗时6秒，结果…",frontmatter:{title:"写一个光线追踪渲染器",date:"2017-05-18T00:01:00.000Z",path:null,permalink:"writing-a-ray-tracing-renderer"}}},{node:{excerpt:"刚开始写这个编辑器的时候，我是毫无思路的，就是完全不知道如何下手，后来去翻了一下 CodeMirror, ACEditor, VSCode 这些优秀编辑器的代码，但是我没有全看，因为我要我的编辑器大部分都是我自己想出来的，只有我想不到的时候才去看。\n首先我们需要一个数据结构来储存我们的文本，为什么要用数据结构而不直接…",frontmatter:{title:"从头打造一个 Markdown 编辑器（一）：数据结构和展现",date:"2017-01-03T10:26:00.000Z",path:null,permalink:"markdown-editor-1"}}},{node:{excerpt:"开始写文章之前，先打个小广告，就是小弟新鲜出炉的作品 MDE，一个完全免费的，开源的，基于 Electron 的 Markdown 编辑器 MDE Editor，点击链接 进入GitHub 截图为在 Windows 10 上运行的效果 支持的功能： 即时渲染 Markdown 语法高亮（Syntax Highligh…",frontmatter:{title:"从头打造一个 Markdown 编辑器（序章）",date:"2017-01-01T09:13:00.000Z",path:null,permalink:"markdown-editor-2"}}},{node:{excerpt:"前一篇blog讲述了如何给编辑器做Syntax Highlighting，可是做完之后要怎么样给视图更新才会做到更高效呢 毕竟我们采用这种Syntax Highlighting的方法， 就是要保证高效，如果不能好好利用，那么我们的这种方法就没有意义了。 我们知道，当一行改变了之后，这行下面的状态可能全部都会改变，所以…",frontmatter:{title:"Syntax Highlighting之后的视图更新",date:"2016-12-16T09:56:00.000Z",path:null,permalink:"views-update-after-syntax-highlighting"}}},{node:{excerpt:"最近正在尝试造一个Markdown编辑器的轮子  MDE  现在算是实现了简单的数据结构，用 chains of lines实现了，支持插入，删除，替换操作。 至于 Model 至视图（View）层面的更新就简单了，只要判断出插入、删除的那几行，去更新 DOM 里面那几行就可以了，也可以说是非常简单。 目前比较棘手的…",frontmatter:{title:"如何实现编辑器文本语法高亮着色",date:"2016-11-06T13:06:00.000Z",path:null,permalink:"how-to-hightlight-syntax-for-editor"}}},{node:{excerpt:"此文翻译自  Marijn Haverbeke  的  Faking an editable control in browser JavaScript 你当前的问题是：你正在写一个和文本输入控件（Text intput Filed）相似的Javascript 控件——它必须是 focusable 的，而且要支持复制…",frontmatter:{title:"（翻译）用 Javascript 在浏览器里面虚拟一个可编辑的控件",date:"2016-10-21T21:44:00.000Z",path:"/2016/10/（翻译）用Javascript在浏览器里面虚拟一个可编辑的控件",permalink:null}}},{node:{excerpt:"至于 Lexer 和 Parser 部分，教程和用法实在太多，实现起来也比较简单，所以也没什么好说的，这里说说如何实现一个虚拟机（Virtual Machine） 虚拟机的实现有很多种，常见的分为 Stack Machine 和 Register Machine 前者基于栈，后者基于寄存器。\n目前来说，基于栈的虚拟机…",frontmatter:{title:"编译原理学习笔记 3：实现一个虚拟机",date:"2016-08-13T21:00:00.000Z",path:null,permalink:"implement-a-vm"}}},{node:{excerpt:"文章的开始，先上一张图，打开 Siri，问 Siri：明天有什么安排？ 为什么 siri 知道我的课表？因为我把课表导入了 iPhone 的日历中去了。 因为不想再使用超级课程表等软件，加上华农宝不怎么好看，而且很麻烦的缘故，自己写了一个工具，可以把课程表导出到 ics  格式，可以把这个文件导入到系统的软件当中，比…",frontmatter:{title:"把正方系统的课表导出成 ics 文件",date:"2016-08-13T18:27:00.000Z",path:null,permalink:"export-zhengfang-course-to-ics"}}},{node:{excerpt:"上文中，提到如果解析一个数学表达式，并把它变成一棵树，我们把这个程序称为解释器，这次我要为这个解释器加一个功能：赋值操作 这里我们要区分左值(left-value)和右值（right-value) 右值是临时结果，而左值是一个变量。至于右面是一个表达式，表达式如何解析在上一篇文章已经详细说了，所以这里就不多说。 解析…",frontmatter:{title:"编译原理学习笔记 2：赋值操作",date:"2016-07-14T11:04:00.000Z",path:null,permalink:"assign-operation"}}},{node:{excerpt:"说到编译原理，是计算机科学里面很重要的一个学科，你可以说编译原理无处不在。但是一般人很少可以接触到这样的理论。编译原理分前端和后端，前端包括文本解析和类型检查，后端包括优化和代码生成等等。这篇日志里我主要讨论文本解析中一个最为简单的部分：数学表达式。 数学表达式：  1 + 1 * 3 * 3 + 4 / 4 * 5…",frontmatter:{title:"编译原理学习笔记 1：解析数学表达式",date:"2016-07-12T22:50:00.000Z",path:null,permalink:"parse-math-expression"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-1689350608b659ee131a.js.map