(self.webpackChunkweb=self.webpackChunkweb||[]).push([[974],{9974:function(e,t,n){"use strict";n.r(t);var r=n(9439),o=n(2692),i=n(6106),a=n(914),c=n(9553),u=n(4964),s=n(2524),l=n.n(s),f=n(6031),d=n.n(f),p=n(4802),h=n(2791),m=n(7985),g=(n(4362),n(5671)),v=n(1839),y=n(6871),w=n(184),b=g.Z.Header,x=g.Z.Content;t.default=function(){var e=(0,h.useState)({qrSize:70,qrX:40,qrY:40,fontSize:10,agentX:10,agentY:10,dateX:20,dateY:20,color:"#ffffff",fileName:""}),t=(0,r.Z)(e,2),n=t[0],s=t[1],f=(0,h.useState)({text:"",date:"",url:""}),P=(0,r.Z)(f,2),E=P[0],Z=P[1],j=(0,y.UO)().id;(0,h.useEffect)((function(){(0,m.hV)({id:j}).then((function(e){s(e.data.sets),Z(e.data.data)}))}),[]);return(0,w.jsxs)(g.Z,{className:"content",style:{height:"100vh"},children:[(0,w.jsx)(b,{style:{width:"100%"},children:(0,w.jsx)(v.Z,{theme:"dark",mode:"horizontal"})}),(0,w.jsx)(x,{style:{padding:"10px 30px",background:"#fff"},children:(0,w.jsxs)(i.Z,{gutter:24,children:[(0,w.jsx)(a.Z,{span:6,style:{padding:0},children:(0,w.jsx)("div",{className:"imgBox",id:"download",children:(0,w.jsxs)(c.Z,{name:"img",listType:"picture-card",className:"avatar-uploader",disabled:!0,showUploadList:!1,children:[""!==n.fileName?(0,w.jsx)("img",{src:"/uploads/"+n.fileName,style:{display:"block",width:"100%"},alt:"avatar"}):"",(0,w.jsx)("div",{className:"code",style:{top:n.qrY+"%",left:n.qrX+"%"},children:(0,w.jsx)(l(),{id:"qrCode",value:E.url,size:n.qrSize,fgColor:"#000000",style:{margin:"auto"}})}),(0,w.jsx)("div",{className:"code",style:{fontSize:n.fontSize,top:n.agentY+"%",left:n.agentX+"%",color:n.color},children:E.text}),(0,w.jsx)("div",{className:"code",style:{fontSize:n.fontSize,top:n.dateY+"%",left:n.dateX+"%",color:n.color},children:E.date})]})})}),(0,w.jsx)(a.Z,{span:18,children:(0,w.jsx)(u.Z,{type:"primary",onClick:function(){var e=document.getElementById("download");d().toBlob(e).then((function(e){(0,p.saveAs)(e,"\u5ba3\u4f20\u56fe-".concat(j)),o.ZP.success("\u4e0b\u8f7d\u6210\u529f\uff01")}))},children:"\u4e0b\u8f7d"})})]})})]})}},7985:function(e,t,n){"use strict";n.d(t,{Wk:function(){return v},YX:function(){return g},Iq:function(){return w},z5:function(){return y},dq:function(){return j},hV:function(){return Z},NG:function(){return E},Ig:function(){return u},bK:function(){return b},ll:function(){return x},pk:function(){return s},P1:function(){return P},s0:function(){return p},E9:function(){return d},uX:function(){return m},U4:function(){return h},Wj:function(){return l},tN:function(){return f}});var r=n(4569),o=n.n(r),i=n(2692),a=o().create({baseURL:"/web/"});a.interceptors.request.use((function(e){return localStorage.__web_token&&(e.headers.Authorization="Bearer "+localStorage.__web_token),e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return e.data.message&&i.ZP.success(e.data.message),e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("__web_token"),console.log(window.location.pathname.indexOf("login")),-1===window.location.pathname.indexOf("login")&&(window.location.pathname="/login")),e.response.data?(i.ZP.error(e.response.data),Promise.reject(e)):Promise.reject(e)}));var c=a,u=function(e){return c.post("/login",e)},s=function(e){return c.post("/register",e)},l=function(){return c.get("/user")},f=function(e){return c.put("/user",e)},d=function(){return c.get("/url")},p=function(e){return c.post("/url",e)},h=function(e){return c.put("/url",e)},m=function(e){return c.delete("/url",{params:e})},g=function(){return c.get("/agent")},v=function(e){return c.post("/agent",e)},y=function(e){return c.put("/agent",e)},w=function(e){return c.delete("/agent",{params:e})},b=function(){return c.get("/promotion")},x=function(e){return c.post("/promotion",e)},P=function(e){return c.put("/stats",e)},E=function(){return c.get("/stats")},Z=function(e){return c.put("/common",e)},j=function(e){return c.post("/common",e)}},914:function(e,t,n){"use strict";var r=n(9752);t.Z=r.Z},9426:function(e,t,n){"use strict";var r=(0,n(2791).createContext)({});t.Z=r},9752:function(e,t,n){"use strict";var r=n(4942),o=n(7462),i=n(1002),a=n(2791),c=n(1694),u=n.n(c),s=n(9426),l=n(9077),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var d=["xs","sm","md","lg","xl","xxl"],p=a.forwardRef((function(e,t){var n,c=a.useContext(l.E_),p=c.getPrefixCls,h=c.direction,m=a.useContext(s.Z),g=m.gutter,v=m.wrap,y=m.supportFlexGap,w=e.prefixCls,b=e.span,x=e.order,P=e.offset,E=e.push,Z=e.pull,j=e.className,A=e.children,S=e.flex,C=e.style,T=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),O=p("col",w),R={};d.forEach((function(t){var n,a={},c=e[t];"number"===typeof c?a.span=c:"object"===(0,i.Z)(c)&&(a=c||{}),delete T[t],R=(0,o.Z)((0,o.Z)({},R),(n={},(0,r.Z)(n,"".concat(O,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,r.Z)(n,"".concat(O,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,r.Z)(n,"".concat(O,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,r.Z)(n,"".concat(O,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,r.Z)(n,"".concat(O,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,r.Z)(n,"".concat(O,"-rtl"),"rtl"===h),n))}));var L=u()(O,(n={},(0,r.Z)(n,"".concat(O,"-").concat(b),void 0!==b),(0,r.Z)(n,"".concat(O,"-order-").concat(x),x),(0,r.Z)(n,"".concat(O,"-offset-").concat(P),P),(0,r.Z)(n,"".concat(O,"-push-").concat(E),E),(0,r.Z)(n,"".concat(O,"-pull-").concat(Z),Z),n),j,R),k={};if(g&&g[0]>0){var U=g[0]/2;k.paddingLeft=U,k.paddingRight=U}if(g&&g[1]>0&&!y){var N=g[1]/2;k.paddingTop=N,k.paddingBottom=N}return S&&(k.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(S),!1!==v||k.minWidth||(k.minWidth=0)),a.createElement("div",(0,o.Z)({},T,{style:(0,o.Z)((0,o.Z)({},k),C),className:L,ref:t}),A)}));p.displayName="Col",t.Z=p},284:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r,o=n(7462),i=n(4942),a=n(1002),c=n(9439),u=n(2791),s=n(1694),l=n.n(s),f=n(9077),d=n(9426),p=n(9393),h=n(8295),m=n(4937),g=function(){if(!(0,m.Z)()||!window.document.documentElement)return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},y=((0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between"),u.forwardRef((function(e,t){var n,r=e.prefixCls,s=e.justify,p=e.align,m=e.className,y=e.style,w=e.children,b=e.gutter,x=void 0===b?0:b,P=e.wrap,E=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),Z=u.useContext(f.E_),j=Z.getPrefixCls,A=Z.direction,S=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),C=(0,c.Z)(S,2),T=C[0],O=C[1],R=function(){var e=u.useState(!1),t=(0,c.Z)(e,2),n=t[0],r=t[1];return u.useEffect((function(){r(g())}),[]),n}(),L=u.useRef(x);u.useEffect((function(){var e=h.ZP.subscribe((function(e){var t=L.current||0;(!Array.isArray(t)&&"object"===(0,a.Z)(t)||Array.isArray(t)&&("object"===(0,a.Z)(t[0])||"object"===(0,a.Z)(t[1])))&&O(e)}));return function(){return h.ZP.unsubscribe(e)}}),[]);var k=j("row",r),U=function(){var e=[0,0];return(Array.isArray(x)?x:[x,0]).forEach((function(t,n){if("object"===(0,a.Z)(t))for(var r=0;r<h.c4.length;r++){var o=h.c4[r];if(T[o]&&void 0!==t[o]){e[n]=t[o];break}}else e[n]=t||0})),e}(),N=l()(k,(n={},(0,i.Z)(n,"".concat(k,"-no-wrap"),!1===P),(0,i.Z)(n,"".concat(k,"-").concat(s),s),(0,i.Z)(n,"".concat(k,"-").concat(p),p),(0,i.Z)(n,"".concat(k,"-rtl"),"rtl"===A),n),m),B={},M=U[0]>0?U[0]/-2:void 0,D=U[1]>0?U[1]/-2:void 0;if(M&&(B.marginLeft=M,B.marginRight=M),R){var _=(0,c.Z)(U,2);B.rowGap=_[1]}else D&&(B.marginTop=D,B.marginBottom=D);var H=(0,c.Z)(U,2),I=H[0],q=H[1],X=u.useMemo((function(){return{gutter:[I,q],wrap:P,supportFlexGap:R}}),[I,q,P,R]);return u.createElement(d.Z.Provider,{value:X},u.createElement("div",(0,o.Z)({},E,{className:N,style:(0,o.Z)((0,o.Z)({},B),y),ref:t}),w))})));y.displayName="Row";var w=y},6106:function(e,t,n){"use strict";var r=n(284);t.Z=r.Z},6031:function(e){!function(t){"use strict";var n=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return function(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[n]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){var t=3e4;c.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());return new Promise((function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=a,o.ontimeout=u,o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),c.impl.options.imagePlaceholder){var i=c.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function a(){if(4===o.readyState)if(200===o.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(o.response)}else r?n(r):s("cannot fetch resource: "+e+", status: "+o.status)}function u(){r?n(r):s("timeout of "+t+"ms occured while fetching resource: "+e)}function s(e){console.error(e),n("")}}))},uid:function(){var e=0;return function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}(),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var n=t(e,"border-left-width"),r=t(e,"border-right-width");return e.scrollWidth+n+r},height:function(e){var n=t(e,"border-top-width"),r=t(e,"border-bottom-width");return e.scrollHeight+n+r}};function e(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function t(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,n,i){return a()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return o(t,e,n,i)}))})),r}));function a(){return!t(e)}},shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){for(var r,o=[];null!==(r=e.exec(t));)o.push(r[1]);return o.filter((function(e){return!n.isDataUrl(e)}))}function o(e,t,r,o){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(o||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")}))}}(),o=function(){return{resolveAll:function(){return e(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(e){var t=[];return e.forEach((function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(r){console.log("Error while reading CSS rules from "+e.href,r.toString())}})),t})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function t(o){return o instanceof Element?i(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map((function(e){return t(e)})))})):Promise.resolve(o);function i(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}},impl:{newImage:e}};function e(e){return{inline:function(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}}}(),a={imagePlaceholder:void 0,cacheBust:!1},c={toSvg:u,toPng:function(e,t){return s(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return s(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,t){return s(e,t||{}).then(n.canvasToBlob)},toPixelData:function(e,t){return s(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))},impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function u(e,t){return function(e){"undefined"===typeof e.imagePlaceholder?c.impl.options.imagePlaceholder=a.imagePlaceholder:c.impl.options.imagePlaceholder=e.imagePlaceholder;"undefined"===typeof e.cacheBust?c.impl.options.cacheBust=a.cacheBust:c.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then((function(e){return l(e,t.filter,!0)})).then(f).then(d).then((function(e){t.bgcolor&&(e.style.backgroundColor=t.bgcolor);t.width&&(e.style.width=t.width+"px");t.height&&(e.style.height=t.height+"px");t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]}));return e})).then((function(r){return function(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,t.width||n.width(e),t.height||n.height(e))}))}function s(e,t){return u(e,t).then(n.makeImage).then(n.delay(100)).then((function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o}))}function l(e,t,r){return r||!t||t(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(r){return function(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):i(t,n.asArray(o),r).then((function(){return t}));function i(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return l(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}}(e,r,t)})).then((function(t){return function(e,t){return t instanceof Element?Promise.resolve().then(r).then(o).then(i).then(a).then((function(){return t})):t;function r(){function r(e,t){function r(e,t){n.asArray(e).forEach((function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))}))}e.cssText?t.cssText=e.cssText:r(e,t)}r(window.getComputedStyle(e),t.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=n.uid();t.className=t.className+" "+a;var c=document.createElement("style");c.appendChild(u(a,r,o)),t.appendChild(c)}function u(e,t,r){var o="."+e+":"+t,i=r.cssText?a(r):c(r);return document.createTextNode(o+"{"+i+"}");function a(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function c(e){return n.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){r(e)}))}function i(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function a(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})))}}(e,t)})):Promise.resolve()}function f(e){return o.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function d(e){return i.inlineAll(e).then((function(){return e}))}e.exports=c}()},4802:function(e,t,n){var r,o,i;o=[],r=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){u(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,c=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var c=a.URL||a.webkitURL,u=document.createElement("a");t=t||e.name||"download",u.download=t,u.rel="noopener","string"==typeof e?(u.href=e,u.origin===location.origin?i(u):o(u.href)?r(e,t,n):i(u,u.target="_blank")):(u.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(u.href)}),4e4),setTimeout((function(){i(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),n);else if(o(e))r(e,n,a);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){i(c)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var i="application/octet-stream"===e.type,u=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&u||c)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},l.readAsDataURL(e)}else{var f=a.URL||a.webkitURL,d=f.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){f.revokeObjectURL(d)}),4e4)}});a.saveAs=u.saveAs=u,e.exports=u},void 0===(i="function"===typeof r?r.apply(t,o):r)||(e.exports=i)},4362:function(){}}]);
//# sourceMappingURL=974.c6d4481e.chunk.js.map