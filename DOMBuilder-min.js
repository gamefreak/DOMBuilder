/* 2013, JDMCreator, V 1.1*/
(function(e){var t=e.document,a=/^[a-z]+/i,r=/([.]{1}[^\[#.]+)|(#{1}[^\[#.]+)|(\[[ ]*[a-z_-]+[ ]*\])|(\[[ ]*[a-z_-]+[ ]*=[^\]]+\])/gi,n=/\[\s*name\s*=([^\]]+)\]/gi,s=/^\[[ ]?([\s\S]*)[ ]?\]$/i,i=/\[[ ]*([a-z_-]+)[ ]*=[ ]*([^\]]+)/gi,l=/^<!--([\S\s]*)-->$/gi,c=["httpEquiv","aLink","bgColor","vLink","acceptCharset","tabIndex","accessKey","readOnly","useMap","dateTime","isMap","codeBase","codeType","noHref","cellPadding","cellSpacing","chOff","vAlign","colSpan","noWrap","rowSpan","frameBorder","longDesc","marginHeight","marginWidth","noResize"],o="|"+c.join("|").toLowerCase()+"|",d=String.prototype.trim,f=function(e){d&&d.call(e)
for(var e=e.replace(/^\s\s*/,""),t=/\s/,a=e.length;t.test(e.charAt(--a)););return e.slice(0,a+1)},u=function(e){return e.replace(/(\-[a-z])/g,function(e){return e.toUpperCase().replace("-","")})},p=function(e){return Object.prototype.toString.call(e)==="[object Array]"}
isASingleton=function(e){return"|base|br|col|command|embed|hr|img|input|link|meta|param|source".indexOf("|"+e+"|")!=-1},xCreateElement=function(a,r,n,s){if(r.nodeType!=1)return r
var i=r.style,l=r.tagName.toLowerCase()
if("style"==l&&(n.content||n.text||n.css)){var c=n.css||n.content||n.text
if(r.styleSheet)r.styleSheet.cssText=c
else{var o=r.cloneNode(!0),d=t.createElement("head")
d.appendChild(o),o.styleSheet?(o.styleSheet.cssText=c,r=o.parentNode.removeChild(o)):r.appendChild(t.createTextNode(c))}}else if("script"==l&&(n.script||n.content||n.text))r.text=n.script||n.content||n.text
else if(!n.html&&!n.content||isASingleton(l))if(n.text&&!isASingleton(l))try{r.appendChild(t.createTextNode(n.text))}catch(f){}else!n.content||"input"!=l&&"textarea"!=l||(n.value=n.value||content)
else try{if("tr"==l&&r.outerHTML){var u=t.createElement("div")
for(u.innerHTML="<table><tbody><tr>"+(n.html||n.content)+"</tr></tbody></table>",u=u.getElementsByTagName("tr")[0];u.firstChild;)r.appendChild(u.firstChild)}else r.innerHTML=n.html||n.content}catch(f){try{var u=t.createElement("div")
for(u.innerHTML=n.html||n.content;u.firstChild;)r.appendChild(u.firstChild)}catch(f){}}if(n.style||n.cssText||n.css&&"style"!=l){var c=n.style||n.cssText||n.css
r.setAttribute("style",c),i.cssText=c}if(!n.value||"input"!=l&&"textarea"!=l||(r.defaultValue=value),n.on){var h=n.on,m=h.constructor.prototype,g=h.hasOwnProperty
for(var v in h)if(g&&g.call(h,v)||m[v]!==h[v])if(n.jQuery&&(typeof n.jQuery==typeof Function()||e.jQuery)){var y=n.jQuery=typeof n.jQuery==typeof Function()?n.jQuery:e.jQuery
y.on(v,h[v])}else r.addEventListener?r.addEventListener(v,h[v],!1):r.attachEvent&&r.attachEvent("on"+event,function(e,t){return function(){e.call(t)}}(h[v],r))}if(n.attr){var x=n.attr,m=x.constructor.prototype,g=x.hasOwnProperty
for(var v in x)(g&&g.call(x,v)||m[v]!==x[v])&&(s||"input"==l&&v.toLowerCase()=="name"||setAttribute(r,v,x[v]))}if(n.childNodes)for(var C,b=n.childNodes,b=p(b)?b:[b],v=0,T=b.length;T>v;v++)if(C=b[v],p(C)?C=DOMBuilder(C[0],C[1]):""+C===C&&(C=DOMBuilder(C)),"table"==l&&n.tableBeautifier!==!1&&n.tableBeautifier!==0){var A=r.firstChild,N=C.tagName
if(A&&"|TBODY|THEAD|TFOOT|".indexOf("|"+A.tagName+"|")!=-1||(A=r.appendChild(t.createElement("tbody"))),"tr"==N)A.appendChild(C)
else{var E=A.firstChild
if(E&&E.tagname=="TR"||(E=A.appendChild(t.createElement("tr"))),"td"==N||"th"==N)E.appendChild(C)
else{var L=E.firstChild
L&&L.tagName=="TD"&&L.tagName=="TH"||(L=E.appendChild(t.createElement("td"))),L.appendChild(C)}}}else r.appendChild(C)
if(n.documentFragment||n.fragment){var O=t.createDocumentFragment()
return O.appendChild(r),O}return r},setAttribute=function(e,t,a){if(t=f(t.toLowerCase()),/^data-/.test(t))e.dataset?e.dataset[u(t.substring(5))]=a:e.setAttribute(t,a)
else if("|style|class|classname|type|for|htmlfor|".indexOf("|"+t+"|")!=-1)switch(t){case"style":e.setAttribute(t,a),e.style.cssText=a
break
case"class":case"classname":if(e.classList)for(var r=a.split(/\s+/g),n=0;n<r.length;n++)e.classList.add(r[n])
else e.className=a
case"type":e.type=a
break
case"for":case"htmlfor":e.htmlFor=a
break
default:e.setAttribute(t,a,0)}else if(o.indexOf("|"+t+"|")!=-1)for(var s,i,n=0;n<c.length;n++){var s=c[n],i=s.toLowerCase()
i==t&&(e[s]=a)}else e.setAttribute(t,a,0)},DOMBuilder=function(e,c){e=f(e||"")
var o=null
if(!e)return null
l.lastIndex=0
var d=l.exec(e),u=e.charAt(0)
if(d&&d[1]){var p=t.createComment("")
p.nodeValue=d[1]}else if('"'!=u&&"'"!=u||e.charAt(e.length-1)!=u){var h=a.exec(e)||"div",p=t.createElement(h[0]),m=!1
if((""+h).toLowerCase()=="input"){var g,v=c&&c.attr?c.attr.name||c.attr.NAME:!1
if(!v){for(n.lastIndex=0;o=n.exec(e);)v=o[1]
v&&(v=f(v),g=v.charAt(0),"'"!=g&&'"'!=g||v.charAt(v.length-1)!=g||(v=v.substring(1,v.length-1)))}if(v){try{p=t.createElement('<input name = "'+v+'" >'),m=!0}catch(y){p=t.createElement("input"),p.name=v}p.tagName!="INPUT"&&(p=t.createElement("input"),p.name=v)}}for(;o=r.exec(e);)if(o[1]){var x=o[1].substring(1)
p.classList?p.classList.add(x):p.className?p.className+=" "+x:p.className=x}else if(o[2])p.id=o[2].substring(1)
else if(o[3]){var C=s.exec(o[3])
C&&C[1]&&(C=C[1],setAttribute(p,C,C))}else if(o[4]){i.lastIndex=0
var b=i.exec(o[4]),C=b[1],T=b[2],A=T.charAt(0),N=T.charAt(T.length-1)
"'"!=A&&'"'!=A||A!==N||(T=T.substring(1,T.length-1)),m||C.toLowerCase()=="name"&&p.tagName=="INPUT"||setAttribute(p,C,T)}}else var p=t.createTextNode(e.substring(1,e.length-1))
return c&&""+c===c&&(c={content:c}),c&&xCreateElement&&(p=xCreateElement(e,p,c,m)),p},e.DOMBuilder=DOMBuilder})(window)
