"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[374],{5292:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),i=a(1074),l=a(8487),r=a(3931),s=i.default.div.withConfig({displayName:"PageInfo__Date",componentId:"sc-3id7ir-0"})(["font-size:0.85em;color:#888;"]),c=a(5330),o=function(e){var t=e.tags,a=void 0===t?[]:t;return n.createElement("div",{className:"tags"},a.map((function(e,t){return n.createElement("span",{key:t,className:"tag "+c.Z[e]},n.createElement("strong",null,e))})))},m=a(1561),d=a(7388),u=i.default.div.withConfig({displayName:"Article__Header",componentId:"sc-tka9ql-0"})(["display:flex;flex-direction:column;"]),f=i.default.div.withConfig({displayName:"Article__ArticleTitle",componentId:"sc-tka9ql-1"})(["margin-right:1em;color:",";& a:hover{color:",";}"],m.Z.FONT_BLACK,m.Z.FONT_PRIMARY),p=(0,i.default)(s).withConfig({displayName:"Article__ArticleDate",componentId:"sc-tka9ql-2"})(["margin-top:0.5em;"]),g=i.default.div.withConfig({displayName:"Article__Content",componentId:"sc-tka9ql-3"})(["padding:0.8em 0;"]),E=function(e){var t=e.post,a=e.showTags,i=t.frontmatter.title||t.fields.slug,s=""+d.Z.ARTICLES+t.fields.slug,c=t.frontmatter.tags||[];return n.createElement("div",{className:"box"},n.createElement(u,null,n.createElement(r.L,null,n.createElement(f,null,n.createElement(l.Z,{to:s},n.createElement("strong",null,i))),a&&n.createElement(o,{tags:c})),n.createElement(p,null,t.frontmatter.date)),n.createElement(g,null,t.frontmatter.description||t.excerpt),n.createElement("div",null,n.createElement(l.Z,{to:s},n.createElement("button",{className:"button is-small"},"继续阅读 >"))))}},5330:function(e,t){t.Z={typescript:"is-primary",javascript:"is-warning",webpack:"is-link","网络":"is-info","浏览器":"is-success","Node.js":"is-danger","摘抄":"is-primary","CSS":"is-warning","面试":"is-info",todo:"is-danger","算法与数据结构":"is-success","阅读写作":"is-primary","编辑器":"is-link","工程化":"is-danger",react:"is-warning","设计模式":"is-danger"}},2748:function(e,t,a){a.r(t);var n=a(7294),i=a(1074),l=a(3502),r=a(2335),s=a(5292),c=i.default.div.withConfig({displayName:"articles__PostWrap",componentId:"sc-15pr40d-0"})(["margin:0 0 40px;"]);t.default=function(e){var t=e.data,a=e.location,i=t.site.siteMetadata.title,o=t.allMdx.edges;return n.createElement(l.Z,{location:a,title:i},n.createElement(r.Z,{title:"All posts"}),n.createElement(c,null,o.map((function(e,t){var a=e.node;return n.createElement(s.Z,{post:a,key:t,showTags:!0})}))))}}}]);
//# sourceMappingURL=component---src-pages-articles-js-b2f5b2981f6ebcc8902c.js.map