"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[580],{3931:function(e,t,n){n.d(t,{L:function(){return a}});var a=n(1074).default.div.withConfig({displayName:"Flex__FlexCenter",componentId:"sc-k0b6ri-0"})(["display:flex;align-items:center;"])},8487:function(e,t,n){var a=n(5444),i=n(1074),r=n(1561),l=(0,i.default)(a.Link).withConfig({displayName:"Link__StyledLink",componentId:"sc-8n0531-0"})(["color:inherit;&:hover{color:",";}"],r.Z.FONT_PRIMARY);t.Z=l},7829:function(e,t,n){n.d(t,{E:function(){return a}});var a=n(1074).default.div.withConfig({displayName:"PageInfo__Date",componentId:"sc-3id7ir-0"})(["font-size:0.85em;color:#888;"])},6687:function(e,t,n){var a=n(7294),i=n(1074),r=n(8487),l=n(3931),o=n(7829),c=n(2041),s=n(1561),d=n(7388),m=i.default.div.withConfig({displayName:"Article__Header",componentId:"sc-tka9ql-0"})(["display:flex;flex-direction:column;"]),u=i.default.div.withConfig({displayName:"Article__ArticleTitle",componentId:"sc-tka9ql-1"})(["margin-right:1em;color:",";& a:hover{color:",";}"],s.Z.FONT_BLACK,s.Z.FONT_PRIMARY),f=(0,i.default)(o.E).withConfig({displayName:"Article__ArticleDate",componentId:"sc-tka9ql-2"})(["margin-top:0.5em;"]),p=i.default.div.withConfig({displayName:"Article__Content",componentId:"sc-tka9ql-3"})(["padding:0.8em 0;"]);t.Z=function(e){var t=e.post,n=e.showTags,i=t.frontmatter.title||t.fields.slug,o=""+d.Z.ARTICLES+t.fields.slug,s=t.frontmatter.tags||[];return a.createElement("div",{className:"box"},a.createElement(m,null,a.createElement(l.L,null,a.createElement(u,null,a.createElement(r.Z,{to:o},a.createElement("strong",null,i))),n&&a.createElement(c.Z,{tags:s})),a.createElement(f,null,t.frontmatter.date)),a.createElement(p,null,t.frontmatter.description||t.excerpt),a.createElement("div",null,a.createElement(r.Z,{to:o},a.createElement("button",{className:"button is-small"},"继续阅读 >"))))}},3502:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(7294),i=n(1074),r=n(5444),l=n(6125),o=n(8487),c=n(3931),s=n(7388),d=n(1561),m=i.default.div.withConfig({displayName:"Header__Root",componentId:"sc-1cu4mdf-0"})(["width:100%;min-width:1200px;position:fixed;z-index:10;background-color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0.6em 10em;box-shadow:0 1px 2px rgba(0,0,0,0.05);"]),u=i.default.div.withConfig({displayName:"Header__BlogTitle",componentId:"sc-1cu4mdf-1"})(["margin:0 2em 0 0.5em;font-weight:bold;font-size:1.2em;color:",";"],d.Z.FONT_BLACK),f=i.default.div.withConfig({displayName:"Header__BannerWrap",componentId:"sc-1cu4mdf-2"})(["display:flex;flex-direction:row;"]),p=i.default.div.withConfig({displayName:"Header__BannerItem",componentId:"sc-1cu4mdf-3"})(["margin-right:2em;& a{color:",";}"],(function(e){return e.isActive?d.Z.FONT_PRIMARY:d.Z.FONT_GREY})),g=i.default.div.withConfig({displayName:"Header__Rss",componentId:"sc-1cu4mdf-4"})(["width:38px;height:38px;line-height:40px;border-radius:50%;background-color:#f15d5d;font-size:0.9em;font-weight:bold;color:#fff;text-align:center;"]),h=[{label:"Home",route:s.Z.HOME},{label:"Articles",route:s.Z.ARTICLES},{label:"Archives",route:s.Z.ARCHIVES},{label:"Tags",route:s.Z.TAGS},{label:"Reviews",route:s.Z.REVIEWS},{label:"About",route:s.Z.ABOUT}],E=function(e){var t=e.location,n=(0,r.useStaticQuery)("946521183"),i=n.avatar,d=n.githubLogo,E=n.site.siteMetadata,w=E.social,v=E.siteUrl,b=E.author;return a.createElement(m,null,a.createElement(c.L,null,a.createElement(l.G,{image:i.childImageSharp.gatsbyImageData,alt:"avatar"}),a.createElement(u,null,b,"的博客"),a.createElement(f,null,h.map((function(e){var n=e.label,i=e.route,l=(0,r.withPrefix)(i)===(0,r.withPrefix)(s.Z.HOME)&&t.pathname===(0,r.withPrefix)(s.Z.HOME)||(0,r.withPrefix)(i)!==(0,r.withPrefix)(s.Z.HOME)&&t.pathname.startsWith((0,r.withPrefix)(i));return a.createElement(p,{key:n,isActive:l},a.createElement(o.Z,{to:i.endsWith("/")?i:i+"/"},a.createElement("strong",null,n)))})))),a.createElement(c.L,null,a.createElement("a",{href:w.github,target:"__blank"},a.createElement(l.G,{image:d.childImageSharp.gatsbyImageData,alt:"github"})),a.createElement("a",{href:v+"/rss.xml",target:"__blank"},a.createElement(g,null,"RSS"))))},w=i.default.div.withConfig({displayName:"Footer__Root",componentId:"sc-1acqhx4-0"})(["padding:2em 0;border-top:1px solid #eceff2;text-align:center;background-color:",";"],d.Z.GREY),v=function(){var e=(0,r.useStaticQuery)("440568431").site.siteMetadata.author;return a.createElement(w,null,"© ",(new Date).getFullYear()," ",e,a.createElement("br",null),"Powered by ",a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"__blank"},"Gatsby")," ")},b=(0,i.default)(c.L).withConfig({displayName:"BreadCrumbs__Root",componentId:"sc-1ep7we2-0"})(["padding:1em 0;"]),_=i.default.span.withConfig({displayName:"BreadCrumbs__Crumb",componentId:"sc-1ep7we2-1"})(["font-weight:bold;"]),y=i.default.span.withConfig({displayName:"BreadCrumbs__Slash",componentId:"sc-1ep7we2-2"})(["padding:0 0.8em;"]),C=a.useState,x=a.useEffect,I=function(e){var t=e.location,n=C([]),i=n[0],l=n[1];x((function(){var e=t.pathname,n=decodeURIComponent(e).split("/").filter((function(e){return e})),a=[];n.forEach((function(e,t){var i="/"+n.slice(1,t+1).join("/");a.push({label:e,route:i.endsWith("/")?i:i+"/"})})),a.length||a.push({label:"home",route:"/"}),l(a)}),[]);var o=i.length;return a.createElement(b,null,i.map((function(e,t){var n=e.label,i=e.route,l=t===o-1;return a.createElement("div",{key:t},a.createElement(_,{isLastCrumb:l},a.createElement(r.Link,{to:i},n)),l?null:a.createElement(y,null,"/"))})))},N=i.default.div.withConfig({displayName:"ScrollToTop__Icon",componentId:"sc-1ifcmjw-0"})(["position:fixed;bottom:3em;right:2em;width:2.5em;height:2.5em;line-height:2em;text-align:center;border-radius:2px;color:#fff;background-color:rgba(50,115,220,0.7);cursor:pointer;&:hover{background-color:rgba(50,115,220,1);}"]),Z=a.useState,k=a.useEffect,R=function(){var e=Z(!1),t=e[0],n=e[1],i=function(){window.scrollY>450?n(!0):n(!1)};return k((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[]),t&&a.createElement(N,{onClick:function(){return window.scrollTo(0,0)}},"↑")},A=i.default.div.withConfig({displayName:"Layout__Root",componentId:"sc-1maeqt4-0"})(['display:flex;flex-direction:column;min-height:100vh;min-width:1200px;font:16px "open sans","Helvetica Neue","Microsoft Yahei",Helvetica,Arial,sans-serif;color:',";"],d.Z.FONT_GREY),T=i.default.div.withConfig({displayName:"Layout__Content",componentId:"sc-1maeqt4-1"})(["padding:0 10em 2em;margin-top:70px;flex:1;background-color:",";"],d.Z.GREY),S=function(e){var t=e.children,n=e.location;return a.createElement(A,null,a.createElement(E,{location:n}),a.createElement(T,null,a.createElement(I,{location:n}),a.createElement("div",{className:"content"},t)),a.createElement(v,null),a.createElement(R,null))}},2041:function(e,t,n){var a=n(7294),i=n(5330);t.Z=function(e){var t=e.tags,n=void 0===t?[]:t;return a.createElement("div",{className:"tags"},n.map((function(e,t){return a.createElement("span",{key:t,className:"tag "+i.Z[e]},a.createElement("strong",null,e))})))}},1561:function(e,t){var n={GREY:"#f5f8f9",FONT_BLACK:"#333",FONT_GREY:"#777",FONT_PRIMARY:"#3273dc"};t.Z=n},7388:function(e,t,n){var a="/",i={HOME:a,ARTICLES:"/"+"articles",ARCHIVES:"/"+"archives",TAGS:"/"+"tags",REVIEWS:"/"+"reviews",ABOUT:"/"+"about"};t.Z=i},5330:function(e,t){t.Z={typescript:"is-primary",javascript:"is-warning",webpack:"is-link","网络":"is-info","浏览器":"is-success","Node.js":"is-danger","摘抄":"is-primary",CSS:"is-warning","面试":"is-info",todo:"is-danger","算法与数据结构":"is-success","阅读写作":"is-primary","编辑器":"is-link","工程化":"is-danger",react:"is-warning","设计模式":"is-danger"}},3226:function(e,t,n){n.r(t);var a=n(7294),i=n(1074),r=n(3502),l=n(6687),o=i.default.div.withConfig({displayName:"tag-posts__PostWrap",componentId:"sc-14u1rup-0"})(["margin:0 0 40px;"]);t.default=function(e){var t=e.data.site.siteMetadata.title,n=e.pageContext.posts;return a.createElement(r.Z,{location:e.location,title:t},a.createElement(o,null,n.map((function(e,t){var n=e.node;return a.createElement(l.Z,{post:n,key:t,showTags:!0})}))))}}}]);
//# sourceMappingURL=component---src-templates-tag-posts-js-f2f0e1804d2446140d3a.js.map