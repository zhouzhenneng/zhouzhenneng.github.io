(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},3931:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var r=n(9).default.div.withConfig({displayName:"Flex__FlexCenter",componentId:"k0b6ri-0"})(["display:flex;align-items:center;"])},8487:function(e,t,n){"use strict";var r=n(5444),o=n(9),i=n(1561),a=(0,o.default)(r.Link).withConfig({displayName:"Link__StyledLink",componentId:"sc-8n0531-0"})(["color:inherit;&:hover{color:",";}"],i.Z.FONT_PRIMARY);t.Z=a},3502:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(7294),o=n(9),i=n(5444),a=n(6125),c=n(8487),u=n(3931),l=n(7388),s=n(1561),f=o.default.div.withConfig({displayName:"Header__Root",componentId:"sc-1cu4mdf-0"})(["width:100%;min-width:1200px;position:fixed;z-index:10;background-color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0.6em 10em;box-shadow:0 1px 2px rgba(0,0,0,0.05);"]),d=o.default.div.withConfig({displayName:"Header__BlogTitle",componentId:"sc-1cu4mdf-1"})(["margin:0 2em 0 0.5em;font-weight:bold;font-size:1.2em;color:",";"],s.Z.FONT_BLACK),p=o.default.div.withConfig({displayName:"Header__BannerWrap",componentId:"sc-1cu4mdf-2"})(["display:flex;flex-direction:row;"]),m=o.default.div.withConfig({displayName:"Header__BannerItem",componentId:"sc-1cu4mdf-3"})(["margin-right:2em;& a{color:",";}"],(function(e){return e.isActive?s.Z.FONT_PRIMARY:s.Z.FONT_GREY})),h=o.default.div.withConfig({displayName:"Header__Rss",componentId:"sc-1cu4mdf-4"})(["width:38px;height:38px;line-height:40px;border-radius:50%;background-color:#f15d5d;font-size:0.9em;font-weight:bold;color:#fff;text-align:center;"]),y=[{label:"Home",route:l.Z.HOME},{label:"Articles",route:l.Z.ARTICLES},{label:"Archives",route:l.Z.ARCHIVES},{label:"Tags",route:l.Z.TAGS},{label:"Reviews",route:l.Z.REVIEWS},{label:"About",route:l.Z.ABOUT}],b=function(e){var t=e.location,n=(0,i.useStaticQuery)("946521183"),o=n.avatar,s=n.githubLogo,b=n.site.siteMetadata,g=b.social,v=b.siteUrl,w=b.author;return r.createElement(f,null,r.createElement(u.L,null,r.createElement(a.G,{image:o.childImageSharp.gatsbyImageData,alt:"avatar"}),r.createElement(d,null,w,"的博客"),r.createElement(p,null,y.map((function(e){var n=e.label,o=e.route,a=(0,i.withPrefix)(o)===(0,i.withPrefix)(l.Z.HOME)&&t.pathname===(0,i.withPrefix)(l.Z.HOME)||(0,i.withPrefix)(o)!==(0,i.withPrefix)(l.Z.HOME)&&t.pathname.startsWith((0,i.withPrefix)(o));return r.createElement(m,{key:n,isActive:a},r.createElement(c.Z,{to:o.endsWith("/")?o:o+"/"},r.createElement("strong",null,n)))})))),r.createElement(u.L,null,r.createElement("a",{href:g.github,target:"__blank"},r.createElement(a.G,{image:s.childImageSharp.gatsbyImageData,alt:"github"})),r.createElement("a",{href:v+"/rss.xml",target:"__blank"},r.createElement(h,null,"RSS"))))},g=o.default.div.withConfig({displayName:"Footer__Root",componentId:"sc-1acqhx4-0"})(["padding:2em 0;border-top:1px solid #eceff2;text-align:center;background-color:",";"],s.Z.GREY),v=function(){var e=(0,i.useStaticQuery)("440568431").site.siteMetadata.author;return r.createElement(g,null,"© ",(new Date).getFullYear()," ",e,r.createElement("br",null),"Powered by ",r.createElement("a",{href:"https://www.gatsbyjs.org/",target:"__blank"},"Gatsby")," ")},w=(0,o.default)(u.L).withConfig({displayName:"BreadCrumbs__Root",componentId:"sc-1ep7we2-0"})(["padding:1em 0;"]),T=o.default.span.withConfig({displayName:"BreadCrumbs__Crumb",componentId:"sc-1ep7we2-1"})(["font-weight:bold;"]),E=o.default.span.withConfig({displayName:"BreadCrumbs__Slash",componentId:"sc-1ep7we2-2"})(["padding:0 0.8em;"]),C=r.useState,A=r.useEffect,O=function(e){var t=e.location,n=C([]),o=n[0],a=n[1];A((function(){var e=t.pathname,n=decodeURIComponent(e).split("/").filter((function(e){return e})),r=[];n.forEach((function(e,t){var o="/"+n.slice(1,t+1).join("/");r.push({label:e,route:o.endsWith("/")?o:o+"/"})})),r.length||r.push({label:"home",route:"/"}),a(r)}),[]);var c=o.length;return r.createElement(w,null,o.map((function(e,t){var n=e.label,o=e.route,a=t===c-1;return r.createElement("div",{key:t},r.createElement(T,{isLastCrumb:a},r.createElement(i.Link,{to:o},n)),a?null:r.createElement(E,null,"/"))})))},S=o.default.div.withConfig({displayName:"ScrollToTop__Icon",componentId:"sc-1ifcmjw-0"})(["position:fixed;bottom:3em;right:2em;width:2.5em;height:2.5em;line-height:2em;text-align:center;border-radius:2px;color:#fff;background-color:rgba(50,115,220,0.7);cursor:pointer;&:hover{background-color:rgba(50,115,220,1);}"]),x=r.useState,I=r.useEffect,k=function(){var e=x(!1),t=e[0],n=e[1],o=function(){window.scrollY>450?n(!0):n(!1)};return I((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),t&&r.createElement(S,{onClick:function(){return window.scrollTo(0,0)}},"↑")},_=o.default.div.withConfig({displayName:"Layout__Root",componentId:"sc-1maeqt4-0"})(['display:flex;flex-direction:column;min-height:100vh;min-width:1200px;font:16px "open sans","Helvetica Neue","Microsoft Yahei",Helvetica,Arial,sans-serif;color:',";"],s.Z.FONT_GREY),L=o.default.div.withConfig({displayName:"Layout__Content",componentId:"sc-1maeqt4-1"})(["padding:0 10em 2em;margin-top:70px;flex:1;background-color:",";"],s.Z.GREY),j=function(e){var t=e.children,n=e.location;return r.createElement(_,null,r.createElement(b,{location:n}),r.createElement(L,null,r.createElement(O,{location:n}),r.createElement("div",{className:"content"},t)),r.createElement(v,null),r.createElement(k,null))}},2335:function(e,t,n){"use strict";n.d(t,{Z:function(){return ge}});var r,o,i,a,c=n(7294),u=n(5697),l=n.n(u),s=n(4839),f=n.n(s),d=n(2993),p=n.n(d),m=n(6494),h=n.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",C="http-equiv",A="innerHTML",O="itemprop",S="name",x="property",I="rel",k="src",_="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",P="defer",N="encodeSpecialCharacters",R="onChangeClientState",M="titleTemplate",H=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],Y="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,v.TITLE),n=J(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,j);return t||r||void 0},K=function(e){return J(e,R)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===I&&"canonical"===e[n].toLowerCase()||u===I&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==A&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=h()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ue(v.BODY,r),ue(v.HTML,o),ce(f,d);var p={baseTag:le(v.BASE,n),linkTags:le(v.LINK,i),metaTags:le(v.META,a),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),u(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(v.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Y),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Y):n.getAttribute(Y)!==a.join(",")&&n.setAttribute(Y,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Y,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Y]=!0,o=fe(n,r),[c.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+z(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Y]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(b,o,r),link:de(v.LINK,i,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,u,r),style:de(v.STYLE,l,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},me=f()((function(e){return{baseTag:Q([E,_],e),bodyAttributes:V(y,e),defer:J(e,P),encode:J(e,N),htmlAttributes:V(b,e),linkTags:$(v.LINK,[I,E],e),metaTags:$(v.META,[S,w,C,x,O],e),noscriptTags:$(v.NOSCRIPT,[A],e),onChangeClientState:K(e),scriptTags:$(v.SCRIPT,[k,A],e),styleTags:$(v.STYLE,[T],e),title:W(e),titleAttributes:V(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return Z(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return q({},o,((t={})[r.type]=a,t.titleAttributes=q({},i),t));case v.BODY:return q({},o,{bodyAttributes:q({},i)});case v.HTML:return q({},o,{htmlAttributes:q({},i)})}return q({},o,((n={})[r.type]=q({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},D(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=n(5444),be=function(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,i=e.title,a=(0,ye.useStaticQuery)("63159454").site,u=t||a.siteMetadata.description;return c.createElement(he,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})};be.defaultProps={lang:"en",meta:[],keywords:[],description:""};var ge=be},1561:function(e,t){"use strict";var n={GREY:"#f5f8f9",FONT_BLACK:"#333",FONT_GREY:"#777",FONT_PRIMARY:"#3273dc"};t.Z=n},7388:function(e,t,n){"use strict";var r="/",o={HOME:r,ARTICLES:"/"+"articles",ARCHIVES:"/"+"archives",TAGS:"/"+"tags",REVIEWS:"/"+"reviews",ABOUT:"/"+"about"};t.Z=o}}]);
//# sourceMappingURL=commons-5ee1c26e2f91e1beda35.js.map