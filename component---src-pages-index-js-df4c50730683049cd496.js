(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(t,e,n){"use strict";n.r(e);n(164);var a=n(188),r=n(0),i=n.n(r),o=n(36),l=n(165),p=n.n(l),c=n(158),s=n(159),d=n(162),m=n(163),u=n(154),g=n.n(u);function h(){var t=g()(["\nfont-size: 16px;\nline-height: normal;\n"]);return h=function(){return t},t}var f=n(155).a.p(h());e.default=function(){return i.a.createElement(o.StaticQuery,{query:"539435194",render:function(t){return i.a.createElement(c.a,null,i.a.createElement(s.a,{title:"首页",keywords:["blog","technology","photography"]}),t.allMarkdownRemark.edges.map(function(t){var e=t.node,n=e.frontmatter.path;if(!n){var a=new Date(e.frontmatter.date),r=a.getFullYear().toString(),o=(a.getMonth()+1).toString();o.length<2&&(o="0"+o),n="/"+r+"/"+o+"/"+e.frontmatter.permalink}return i.a.createElement("div",{key:e.frontmatter.title},i.a.createElement(d.a,{to:n},e.frontmatter.title),i.a.createElement(m.a,null,"Posted at ",function(t){return p()(t).format("YYYY-MM-DD")}(e.frontmatter.date)),i.a.createElement(f,null,e.excerpt))}))},data:a})}},156:function(t){t.exports={data:{site:{siteMetadata:{title:"Vincent Chan 的公交站 🚉"}}}}},157:function(t,e,n){},158:function(t,e,n){"use strict";var a=n(156),r=n(0),i=n.n(r),o=n(1),l=n.n(o),p=n(36),c=n(154),s=n.n(c);function d(){var t=s()(["\n  padding: 18px 0px;\n"]);return d=function(){return t},t}var m=n(155).a.div(d()),u=function(t){var e=t.siteTitle;return i.a.createElement("div",null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,paddingTop:"1.45rem",paddingBottom:"0rem",paddingLeft:"1rem",paddingRight:"1rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(p.Link,{to:"/",style:{textDecoration:"none"}},e)),i.a.createElement(m,null,i.a.createElement(p.Link,{to:"/aboutme",style:{textDecoration:"none"}},i.a.createElement("strong",null,"关于我")))))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var g=u,h=(n(157),function(t){var e=t.headerImage,n=t.children;return i.a.createElement(p.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(r.Fragment,null,e,i.a.createElement(g,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n,i.a.createElement("footer",null,"© 2018, Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})});h.propTypes={children:l.a.node.isRequired};e.a=h},159:function(t,e,n){"use strict";var a=n(160),r=n(0),i=n.n(r),o=n(1),l=n.n(o),p=n(161),c=n.n(p),s=n(36);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,l=t.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},e.a=d;var m="1025518380"},160:function(t){t.exports={data:{site:{siteMetadata:{title:"Vincent Chan 的公交站 🚉",description:"Vincent Chan's personal blog",author:"@cdz_solo"}}}}},162:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(36);e.a=function(t){var e=t.to,n=t.children;return r.a.createElement(i.Link,{to:e,style:{fontWeight:"500",fontSize:"24px",color:"#2e405b",borderBottom:"solid #2e405b 2px",textDecoration:"none"}},n)}},163:function(t,e,n){"use strict";var a=n(154),r=n.n(a);function i(){var t=r()(["\nmargin: 10px 0px;\nfont-size: 16px;\ncolor: rgb(46, 64, 91);\n"]);return i=function(){return t},t}var o=n(155).a.div(i());e.a=o},188:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"人生中一些很重要的时间段，往往会像细水那样慢慢流走，回过头来才发现，涓涓细水汇成了江河大海。对于我来说 2018 年就是这样的一年，回头一看觉得很平淡，但是不乏丰富的细节。 关键词：  GSoC，大四，实习 今年年底的时候我时常会回忆起 2017 年的 12 月，那时候刚来深圳，可能因为同是 12 月，渐渐变冷的天气…",frontmatter:{title:"2018 不停留",date:"2019-01-01",path:"/2019/01/2018-never-stops",permalink:null}}},{node:{excerpt:"自从 macOS 升级到 Mojave(10.14) 之后，编译 SpiderMonkey 变得有点不同。 有一点比较重要的变化是 libstdc++ 被替换成 libc++，这个修改是从 OS X 10.9 就开始有的修改，所以直接调用 ./configure 有这样的 warning 和报错： 很明显，报错原因是…",frontmatter:{title:"在 Mojave 下编译 SpiderMonkey",date:"2018-10-29T00:16:14.000Z",path:"/2018/10/在-Mojave-下编译-SpiderMonkey",permalink:null}}},{node:{excerpt:"Scala 中的 for 表达式非常强大，用起来很简单顺手，但是理解起来可能需要一些背景知识。这个 for 从名字上看让我们觉得它很像命令式语言中的那种 for statement，但是其实 Scala 的 for 是非常函数式的，它跟命令式语言中的 for 语句根本不是一个东西，因为它根本不支持 break 和 c…",frontmatter:{title:"理解 Scala 中的 for 表达式",date:"2018-06-10T02:58:33.000Z",path:null,permalink:"understanding-for-comprehansion-in-scala"}}},{node:{excerpt:"GSoC 2018 中，我的项目就在于给 webpack 实现深作用域分析（Deep Scope Analysis），主要还是为了改进 webpack 的 tree-shaking 工作。 前言 JS 的 tree-shaking 一直是前端开发中的痛点，大家都在想尽办法减少打包的代码体积。Tree shaking …",frontmatter:{title:"webpack 如何通过作用域分析消除无用代码",date:"2018-05-25T14:24:18.000Z",path:null,permalink:"better-tree-shaking-with-scope-analysis"}}},{node:{excerpt:"有幸被  webpack  选中参加今年的 GSoC，这次的 GSoC 我主要负责实现 Deep Scope Analysis，这个最后会被用到最新版本的 webpack 里面用于 Tree Shaking Github 项目地址： webpack-deep-scope-analysis-plugin 根据 webp…",frontmatter:{title:"GSoC 之旅",date:"2018-04-29T14:16:00.000Z",path:"/2018/04/beginning_gsoc_2018",permalink:"beginning_gsoc_2018"}}},{node:{excerpt:"当 Haskell 这些静态类型的函数式语言玩久了，就想尝试一下动态类型的函数式语言，比如 Lisp，最古老的编程语言之一。不过现在写 Lisp 是不现实，因为原始的 Lisp 是 dynamic scope 的，写起来会异常痛苦。所以我打算从 Lisp 的一些比较现代方言下手，比如说 Racket 这种广受赞誉的语…",frontmatter:{title:"初窥 Racket：解析一个数学表达式",date:"2018-01-28T19:09:00.000Z",path:null,permalink:"parsing-math-expression-by-racket"}}},{node:{excerpt:"此篇博文整理了我和  walkerlala  关于函数式相关问题的讨论 Vincent Chan 我觉得函数式很重要的一点是 Immutable，使得每一次更改都要重新生成一次整个数据结构（当然我们可以通过编译器优化来减少某些生成），但是immutable 也使得整个程序的状态可以被记录和更改。我之前写前端的时候就尝…",frontmatter:{title:"关于函数式",date:"2017-11-13T12:54:18.000Z",path:null,permalink:"some-opinions-about-fp"}}},{node:{excerpt:"最近在学习 Haskell，不得不说，这真的是一门令我着迷的语言，lazy 和纯函数式等特性都非常吸引我，不过短时间内还无法掌握得很好，最重要是思维的转变非常苦难。 学习一门语言最好的办法就是多实践，我还记得我写过一片文章 编译原理学习笔记1：解析数学表达式 \n来讲述怎样去解析数学表达式，但是我没有讲如何去实现，现在…",frontmatter:{title:"初窥 Haskell：解析一个数学表达式",date:"2017-10-30T20:26:27.000Z",path:null,permalink:"parsing-math-expression-by-haskell"}}},{node:{excerpt:"在写一个小游戏过程中，打算做一个饼状旋转的动画，于是打算用 Python 来生成这个动画，假设我们有这样一张图片 最后生成的动画是这个样子的 当然，中间会生成很多帧的动画 怎么去生成每一帧动画呢？其实关键就在于挖去一个饼状图形里面的像素 那我们只要遍历这张图片的所有元素，然后挖去在这个饼状范围内的像素即可，从这个思路…",frontmatter:{title:"用 Python 生成饼状旋转动画",date:"2017-10-29T01:53:48.000Z",path:null,permalink:"generating-spin-animation-using-python"}}},{node:{excerpt:"《黑客帝国》是我最喜欢的电影之一，我感觉《黑客帝国》里面的数字雨简直是一种艺术，非常好看，看上去非常高大上，而且和“雨”这种东西结合，非常有意思，于是想自己实现一下。 效果图: 在Canvas里面实现动画的思路其实很简单，在很短的时间里面刷新一次就行了。每次刷新的时候，字符都会下降，然而数字雨里面并不是整串“雨”往下…",frontmatter:{title:"HTML Canvas实现《黑客帝国》数字雨",date:"2017-06-19T00:00:00.000Z",path:null,permalink:"matrix-rain-by-html-canvas"}}},{node:{excerpt:"最近都在做一件事情，做一个光线追踪渲染器，一直很想揭开光线追踪渲染器的大门，于是跟着 Milo Yip 的步伐开撸了 用 JavaScript 玩转计算机图形学(一)光线追踪入门 渲染结果图：\n 其实制作的过程是非常坎坷的，我首先用 C# 按照博文的思路重写了一边，渲染出结果（1024x1024），总共耗时6秒，结果…",frontmatter:{title:"写一个光线追踪渲染器",date:"2017-05-18T00:01:00.000Z",path:null,permalink:"writing-a-ray-tracing-renderer"}}},{node:{excerpt:"刚开始写这个编辑器的时候，我是毫无思路的，就是完全不知道如何下手，后来去翻了一下 CodeMirror, ACEditor, VSCode 这些优秀编辑器的代码，但是我没有全看，因为我要我的编辑器大部分都是我自己想出来的，只有我想不到的时候才去看。\n首先我们需要一个数据结构来储存我们的文本，为什么要用数据结构而不直接…",frontmatter:{title:"如何从头打造一个 Markdown 编辑器（一）：数据结构和展现",date:"2017-01-03T10:26:00.000Z",path:null,permalink:"markdown-editor-1"}}},{node:{excerpt:"开始写文章之前，先打个小广告，就是小弟新鲜出炉的作品 MDE，一个完全免费的，开源的，基于 Electron 的 Markdown 编辑器 MDE Editor，点击链接 进入GitHub 截图为在 Windows 10 上运行的效果 支持的功能： 即时渲染 Markdown 语法高亮（Syntax Highligh…",frontmatter:{title:"如何从头打造一个 Markdown 编辑器（序章）",date:"2017-01-01T09:13:00.000Z",path:null,permalink:"markdown-editor-2"}}},{node:{excerpt:"前一篇blog讲述了如何给编辑器做Syntax Highlighting，可是做完之后要怎么样给视图更新才会做到更高效呢 毕竟我们采用这种Syntax Highlighting的方法， 就是要保证高效，如果不能好好利用，那么我们的这种方法就没有意义了。 我们知道，当一行改变了之后，这行下面的状态可能全部都会改变，所以…",frontmatter:{title:"Syntax Highlighting之后的视图更新",date:"2016-12-16T09:56:00.000Z",path:null,permalink:"views-update-after-syntax-highlighting"}}},{node:{excerpt:"最近正在尝试造一个Markdown编辑器的轮子  MDE  现在算是实现了简单的数据结构，用 chains of lines实现了，支持插入，删除，替换操作。 至于 Model 至视图（View）层面的更新就简单了，只要判断出插入、删除的那几行，去更新 DOM 里面那几行就可以了，也可以说是非常简单。 目前比较棘手的…",frontmatter:{title:"如何实现编辑器文本语法高亮着色",date:"2016-11-06T13:06:00.000Z",path:null,permalink:"how-to-hightlight-syntax-for-editor"}}},{node:{excerpt:"此文翻译自  Marijn Haverbeke  的  Faking an editable control in browser JavaScript 你当前的问题是：你正在写一个和文本输入控件（Text intput Filed）相似的Javascript 控件——它必须是 focusable 的，而且要支持复制…",frontmatter:{title:"（翻译）用 Javascript 在浏览器里面虚拟一个可编辑的控件",date:"2016-10-21T21:44:00.000Z",path:"/2016/10/（翻译）用Javascript在浏览器里面虚拟一个可编辑的控件",permalink:null}}},{node:{excerpt:"至于 Lexer 和 Parser 部分，教程和用法实在太多，实现起来也比较简单，所以也没什么好说的，这里说说如何实现一个虚拟机（Virtual Machine） 虚拟机的实现有很多种，常见的分为 Stack Machine 和 Register Machine 前者基于栈，后者基于寄存器。\n目前来说，基于栈的虚拟机…",frontmatter:{title:"编译原理学习笔记 3：实现一个虚拟机",date:"2016-08-13T21:00:00.000Z",path:null,permalink:"implement-a-vm"}}},{node:{excerpt:"文章的开始，先上一张图，打开 Siri，问 Siri：明天有什么安排？ 为什么 siri 知道我的课表？因为我把课表导入了 iPhone 的日历中去了。 因为不想再使用超级课程表等软件，加上华农宝不怎么好看，而且很麻烦的缘故，自己写了一个工具，可以把课程表导出到 ics  格式，可以把这个文件导入到系统的软件当中，比…",frontmatter:{title:"如何把正方系统的课表导出成 ics 文件",date:"2016-08-13T18:27:00.000Z",path:null,permalink:"export-zhengfang-course-to-ics"}}},{node:{excerpt:"上文中，提到如果解析一个数学表达式，并把它变成一棵树，我们把这个程序称为解释器，这次我要为这个解释器加一个功能：赋值操作 这里我们要区分左值(left-value)和右值（right-value) 右值是临时结果，而左值是一个变量。至于右面是一个表达式，表达式如何解析在上一篇文章已经详细说了，所以这里就不多说。 解析…",frontmatter:{title:"编译原理学习笔记 2：赋值操作",date:"2016-07-14T11:04:00.000Z",path:null,permalink:"assign-operation"}}},{node:{excerpt:"说到编译原理，是计算机科学里面很重要的一个学科，你可以说编译原理无处不在。但是一般人很少可以接触到这样的理论。编译原理分前端和后端，前端包括文本解析和类型检查，后端包括优化和代码生成等等。这篇日志里我主要讨论文本解析中一个最为简单的部分：数学表达式。 数学表达式：  1 + 1 * 3 * 3 + 4 / 4 * 5…",frontmatter:{title:"编译原理学习笔记 1：解析数学表达式",date:"2016-07-12T22:50:00.000Z",path:null,permalink:"parse-math-expression"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-df4c50730683049cd496.js.map