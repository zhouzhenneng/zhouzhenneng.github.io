(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[989],{7829:function(e,t,n){"use strict";n.d(t,{E:function(){return r}});var r=n(9).default.div.withConfig({displayName:"PageInfo__Date",componentId:"sc-3id7ir-0"})(["font-size:0.85em;color:#888;"])},2041:function(e,t,n){"use strict";var r=n(7294),i=n(5330);t.Z=function(e){var t=e.tags,n=void 0===t?[]:t;return r.createElement("div",{className:"tags"},n.map((function(e,t){return r.createElement("span",{key:t,className:"tag "+i.Z[e]},r.createElement("strong",null,e))})))}},6415:function(e,t,n){"use strict";var r=n(7294),i=r.memo((function(e){var t=e.title,n=(0,r.useRef)();return(0,r.useEffect)((function(){if("undefined"!=typeof window){var e=document.createElement("script");return e.src="https://utteranc.es/client.js",e.async=!0,e.setAttribute("repo","uniquemo/gatsby-blog"),e.setAttribute("issue-term",t),e.setAttribute("label","Comment"),e.setAttribute("theme","github-light"),e.setAttribute("crossorigin","anonymous"),n.current&&n.current.appendChild(e),function(){e.remove()}}}),[t]),r.createElement("section",{key:t,className:"section",ref:n})}));t.Z=i},5330:function(e,t){"use strict";t.Z={typescript:"is-primary",javascript:"is-warning",webpack:"is-link","网络":"is-info","浏览器":"is-success","Node.js":"is-danger","摘抄":"is-primary","英语":"is-warning","面试":"is-info",todo:"is-danger","算法与数据结构":"is-success","阅读写作":"is-primary","编辑器":"is-link","工程化":"is-danger",react:"is-warning","设计模式":"is-danger"}},4870:function(e,t,n){"use strict";n.r(t);var r=n(3552),i=n(7294),s=n(5444),a=n(1274),l=n(9),o=n(2335),c=n(4826),m=n(3502),u=n(6415),d=n(2041),p=n(8384),f=n(3931),g=n(7829),E=n(5713),b=n(7388),y=(0,l.default)(g.E).withConfig({displayName:"blog-post__ArticleDate",componentId:"sc-7rm6jt-0"})(["margin:0.5em 0 1em;"]),v=l.default.div.withConfig({displayName:"blog-post__PrevNextWrap",componentId:"sc-7rm6jt-1"})(["display:flex;align-items:center;justify-content:space-between;margin:2em 0;font-weight:bold;"]),h=l.default.div.withConfig({displayName:"blog-post__TagsWrap",componentId:"sc-7rm6jt-2"})(["margin-left:1em;"]),w=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data.mdx,t=e.frontmatter,n=t.title,r=t.tags||[],l=e.fields.readingTime,g=this.props.data.site.siteMetadata.title,w=this.props.pageContext,Z=w.previous,C=w.next;return i.createElement(m.Z,{location:this.props.location,title:g},i.createElement(o.Z,{title:n,description:e.frontmatter.description||e.excerpt}),i.createElement("div",{className:"box"},i.createElement(f.L,null,i.createElement(p.V,null,n),i.createElement(h,null,i.createElement(d.Z,{tags:r}))),i.createElement(y,null,e.frontmatter.date," ",i.createElement("span",null,"总共 "+l.words+" words, "+l.text)),i.createElement(a.MDXRenderer,null,e.body),i.createElement("hr",{style:{marginBottom:(0,E.qZ)(.8)}}),i.createElement(c.Z,null),i.createElement(v,null,i.createElement("div",null,Z&&i.createElement(s.Link,{to:""+b.Z.ARTICLES+Z.fields.slug,rel:"prev"},"上一篇: "+Z.frontmatter.title)),i.createElement("div",null,C&&i.createElement(s.Link,{to:""+b.Z.ARTICLES+C.fields.slug,rel:"next"},"下一篇: "+C.frontmatter.title))),i.createElement(u.Z,{title:n})))},t}(i.Component);t.default=w}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2c587573aa36532f8355.js.map