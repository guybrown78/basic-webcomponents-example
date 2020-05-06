var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="transform-web-components";var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=0;var c=false;var v=typeof window!=="undefined"?window:{};var d=v.CSS;var h=v.document||{head:{}};var m={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var p=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=function(e){return Promise.resolve(e)};var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b=function(e,r,t,n){if(t){t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=R(e,n);var o=w(r,i);var l=N(n);m.ael(s,a,o,l);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return m.rel(s,a,o,l)}))}))}};var w=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,t])}}}};var R=function(e,r){if(r&8)return v;if(r&32)return h.body;return e};var N=function(e){return(e&2)!==0};var S="{visibility:hidden}.hydrated{visibility:inherit}";var _=function(e,r){if(r===void 0){r=""}{return function(){return}}};var x=function(e,r){{return function(){return}}};var L=new WeakMap;var T=function(e,r,t){var n=qe.get(e);if(y&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}qe.set(e,n)};var j=function(e,r,t,n){var a=E(r.$tagName$);var i=qe.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=L.get(e);var o=void 0;if(!s){L.set(e,s=new Set)}if(!s.has(a)){{if(m.$cssShim$){o=m.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=h.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var C=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=_("attachStyles",r.$tagName$);var i=j(p&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var E=function(e,r){return"sc-"+e};var k={};var M="http://www.w3.org/2000/svg";var P="http://www.w3.org/1999/xhtml";var A=function(e){return e!=null};var O=function(e){e=typeof e;return e==="object"||e==="function"};var U=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var I=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=false;var o=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!O(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?B(null,a):a)}o=s}}};f(t);if(r){if(r.name){i=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,l,H)}var u=B(e,null);u.$attrs$=r;if(l.length>0){u.$children$=l}{u.$name$=i}return u}));var B=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$name$=null}return t};var q={};var z=function(e){return e&&e.$tag$===q};var H={forEach:function(e,r){return e.map(V).forEach(r)},map:function(e,r){return e.map(V).map(r).map(F)}};var V=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var F=function(e){var r=B(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var W=function(e,r,t,n,a,i){if(t!==n){var s=Oe(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=Q(t);var $=Q(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Oe(v,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){m.rel(e,r,t,false)}if(n){m.ael(e,r,n,false)}}else{var c=O(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(h){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var G=/\s/;var Q=function(e){return!e?[]:e.split(G)};var D=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||k;var s=r.$attrs$||k;{for(n in i){if(!(n in s)){W(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){W(a,n,i[n],s[n],t,r.$flags$)}};var J=function(e,r,t,n){var l=r.$children$[t];var u=0;var c;var v;var d;if(!o){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=h.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=h.createTextNode("")}else{if(!$){$=l.$tag$==="svg"}c=l.$elm$=h.createElementNS($?M:P,l.$flags$&2?"slot-fb":l.$tag$);if($&&l.$tag$==="foreignObject"){$=false}{D(null,l,$)}if(A(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=J(e,l,u,c);if(v){c.appendChild(v)}}}{if(l.$tag$==="svg"){$=false}else if(c.tagName==="foreignObject"){$=true}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===l.$tag$&&e.$elm$){K(e.$elm$,false)}}}return c};var K=function(e,r){m.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){te(a).insertBefore(a,re(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){K(a,r)}}m.$flags$&=~1};var X=function(e,r,t,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=J(null,t,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,re(r))}}}};var Y=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;le(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{K(a,true)}}a.remove()}}};var Z=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=n.length-1;var $=n[0];var u=n[f];var c;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if($==null){$=n[++i]}else if(u==null){u=n[--f]}else if(ee(o,$)){ne(o,$);o=r[++a];$=n[++i]}else if(ee(l,u)){ne(l,u);l=r[--s];u=n[--f]}else if(ee(o,u)){if(o.$tag$==="slot"||u.$tag$==="slot"){K(o.$elm$.parentNode,false)}ne(o,u);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];u=n[--f]}else if(ee(l,$)){if(o.$tag$==="slot"||u.$tag$==="slot"){K(l.$elm$.parentNode,false)}ne(l,$);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];$=n[++i]}else{{c=J(r&&r[i],t,i,e);$=n[++i]}if(c){{te(o.$elm$).insertBefore(c,re(o.$elm$))}}}}if(a>s){X(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){Y(r,a,s)}};var ee=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var re=function(e){return e&&e["s-ol"]||e};var te=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ne=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{$=i==="svg"?true:i==="foreignObject"?false:$}{if(i==="slot");else{D(e,r,$)}}if(n!==null&&a!==null){Z(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}X(t,null,r,a,0,a.length-1)}else if(n!==null){Y(n,0,n.length-1)}if($&&i==="svg"){$=false}}else if(o=t["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var ae=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}ae(t)}}};var ie=[];var se=function(e){var r;var t;var n;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(oe(t,a)){i=ie.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{ie.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){ie.map((function(e){if(oe(e.$nodeToRelocate$,t["s-sn"])){i=ie.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!ie.some((function(e){return e.$nodeToRelocate$===t}))){ie.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){se(r)}}};var oe=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var le=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(le)}};var fe=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||B(null,null);var u=z(r)?r:I(null,null,r);s=t.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return u.$attrs$[n]=t[r]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];o=p&&(n.$flags$&1)!==0;l=false}ne($,u);{m.$flags$|=1;if(f){se(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<ie.length;w++){c=ie[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(w=0;w<ie.length;w++){c=ie[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){b=d["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){ae(u.$elm$)}m.$flags$&=~1;ie.length=0}};var $e=e("g",(function(e){return Me(e).$hostElement$}));var ue=e("c",(function(e,r,t){var n=$e(e);return{emit:function(e){return ce(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var ce=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var ve=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var de=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=_("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return he(e,a,r)};ve(e,n);var s;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],t=e[1];return be(a,r,t)}));e.$queuedListeners$=null}}{s=be(a,"componentWillLoad")}}t();return we(s,(function(){return Je(i)}))};var he=function(e,r,t){var n=e.$hostElement$;var a=_("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){C(e)}var s=_("render",e.$cmpMeta$.$tagName$);{{fe(e,me(r))}}if(m.$cssShim$){m.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return pe(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var me=function(e){try{e=e.render()}catch(r){Ue(r)}return e};var pe=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=_("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{Re(t)}n();{e.$onReadyResolve$(t);if(!a){ye()}}}else{n()}{e.$onInstanceResolve$(t)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){De((function(){return de(e,false)}))}e.$flags$&=~(4|512)}};var ge=function(e){{var r=Me(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){de(r,false)}return t}};var ye=function(e){{Re(h.documentElement)}{m.$flags$|=2}De((function(){return ce(v,"appload",{detail:{namespace:n}})}))};var be=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){Ue(n)}}return undefined};var we=function(e,r){return e&&e.then?e.then(r):r()};var Re=function(e){return e.classList.add("hydrated")};var Ne=function(e,r){if(e!=null&&!O(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var Se=function(e,r){return Me(e).$instanceValues$.get(r)};var _e=function(e,r,t,n){var a=Me(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=Ne(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[r];if(l){l.map((function(e){try{o[e](t,i,r)}catch(n){Ue(n)}}))}}if((s&(2|16))===2){de(a,false)}}}};var xe=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return Se(this,n)},set:function(e){_e(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=Me(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;m.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var Le=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,l,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Be(a);if(!s.then)return[3,2];e=x();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}xe(s,a,2);s.isProxied=true}t=_("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){Ue(c)}{n.$flags$&=~8}{n.$flags$|=128}t();i=E(a.$tagName$);if(!(!qe.has(i)&&s.style))return[3,5];o=_("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-f470e2bd.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=u.sent();u.label=4;case 4:T(i,l,!!(a.$flags$&1));o();u.label=5;case 5:f=n.$ancestorComponent$;$=function(){return de(n,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var Te=function(e){if((m.$flags$&1)===0){var r=Me(e);var t=r.$cmpMeta$;var n=_("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){je(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ve(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{De((function(){return Le(e,r,t)}))}}else{b(e,r,t.$listeners$)}n()}};var je=function(e){var r=e["s-cr"]=h.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Ce=function(e){if((m.$flags$&1)===0){var r=Me(e);{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(m.$cssShim$){m.$cssShim$.removeHost(e)}}};var Ee=e("b",(function(e,r){if(r===void 0){r={}}var t=_();var n=[];var a=r.exclude||[];var i=v.customElements;var s=h.head;var o=s.querySelector("meta[charset]");var l=h.createElement("style");var f=[];var $;var u=true;Object.assign(m,r);m.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;{if(r.syncQueue){m.$flags$|=4}}e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!p&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Ae(r,t);if(t.$flags$&1){if(p){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{m.jmp((function(){return Te(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return Ce(e)}))};r.prototype.forceUpdate=function(){ge(this)};r.prototype.componentOnReady=function(){return Me(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,xe(o,t,1))}}))}));{l.innerHTML=n+S;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{m.jmp((function(){return $=setTimeout(ye,30)}))}}t()}));var ke=new WeakMap;var Me=function(e){return ke.get(e)};var Pe=e("r",(function(e,r){return ke.set(r.$lazyInstance$=e,r)}));var Ae=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}b(e,t,r.$listeners$);return ke.set(e,t)};var Oe=function(e,r){return r in e};var Ue=function(e){return console.error(e)};var Ie=new Map;var Be=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=Ie.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Ie.set(i,e)}return e[a]}),Ue)};var qe=new Map;var ze=[];var He=[];var Ve=[];var Fe=function(e,r){return function(t){e.push(t);if(!c){c=true;if(r&&m.$flags$&4){De(Qe)}else{m.raf(Qe)}}}};var We=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){Ue(t)}}e.length=0};var Ge=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){Ue(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var Qe=function(){{u++}We(ze);{var e=(m.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;Ge(He,e);Ge(Ve,e);if(He.length>0){Ve.push.apply(Ve,He);He.length=0}if(c=ze.length+He.length+Ve.length>0){m.raf(Qe)}else{u=0}}};var De=function(e){return g().then(e)};var Je=Fe(He,true);var Ke=e("a",(function(){if(!(d&&d.supports&&d.supports("color","var(--c)"))){return r.import("./p-67aa728f.system.js").then((function(){if(m.$cssShim$=v.__cssshim){return m.$cssShim$.i()}else{return 0}}))}return g()}));var Xe=e("p",(function(){{m.$cssShim$=v.__cssshim}var e=Array.from(h.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,v.location.href)).href;{Ye(t.resourcesUrl,e)}if(!v.customElements){return r.import("./p-f9a9f5d0.system.js").then((function(){return t}))}}return g(t)}));var Ye=function(e,r){var t=U(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;v[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=h.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(v[t].m);o.remove()}}));a.set(i,s);h.head.appendChild(o)}return s}}}}}}));