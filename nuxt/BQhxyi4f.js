const __vite__fileDeps=["./CYwVUCvc.js","./B6xwUs71.js","./De7LHH5r.js","./cesium.CACPMLEj.css","./-eeYLi0d.js","./BNWiTnc2.js","./EnObK0ic.js","./t-pFliWO.js","./DArCjZZA.js","./CiVcrqGH.js","./DYyw1tOo.js","./Hi_Tb6BP.js","./pvwI0XUi.js","./DzWSY_RA.js","./381ZnP_V.js","./pkwIHzWh.js","./CPw8LjwA.js","./BvRb_DUk.js","./C3lttrD6.js","./DxYSYNlj.js","./D3OFD00l.js","./BdDgS6ZD.js","./cI_fw6Fh.js","./nK14u351.js","./DyKiVdfb.js","./ijZjvOQH.js","./d9HcxmMm.js","./BpjhJoGR.js","./BIKakt-i.js","./BJ0Qnn8n.js","./B8xFkYCm.js","./CjF7NCwV.js","./_nuxt.C_Mhy-2j.css","./YnJx62rr.js","./BLEwYmyZ.js","./CwrTdVTk.js","./CVtkxrq9.js","./DLLyxCdW.js","./Dc3cb4aw.js","./C7G7RxV5.js","./CLC8zCN6.js","./TWKSbLMs.js","./COrwOm18.js","./CuDSDkaK.js","./ssV7Ittj.js","./nuxt-icon.21rEsXrQ.css","./BSSBD8FZ.js","./index.C_ax9adP.css","./tailwindcss.DPtcP_Z5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
/* empty css        */import{s as Xe,m as Ge,c as Qe,_ as Ye}from"./BpjhJoGR.js";import{g as Ze,e as M}from"./YnJx62rr.js";import{z as Je,r as G,A as He,y as et,j as F,B as Ne,s as z,k as I,C as le,h as P,K as tt,D as nt,E as at,d as O,c as U,F as ot,m as rt,G as st,H as ce,i as it,S as ue,n as fe,T as Ae,u as w,I as lt,o as N,a as ct,e as _e,w as Be,J as A,L as ut,M as ft,N as we,O as dt,P as ht,Q as pt,R as mt}from"./d9HcxmMm.js";import{j as Ie,w as yt,h as $,p as de,i as vt,a as he,b as Oe,c as ke,d as gt,e as _t,f as wt}from"./BLEwYmyZ.js";import{$ as kt}from"./CwrTdVTk.js";import{c as Rt}from"./B8xFkYCm.js";import{c as te}from"./DLLyxCdW.js";import{d as ne}from"./CVtkxrq9.js";import{p as bt}from"./Dc3cb4aw.js";import{d as xt,a as $e}from"./C7G7RxV5.js";import{c as Pt}from"./CLC8zCN6.js";import{c as Ct,s as St,r as Et}from"./BIKakt-i.js";import{S as ae,c as Tt,a as Lt,b as Ht,R as Nt,u as At}from"./TWKSbLMs.js";import{p as Bt}from"./COrwOm18.js";import{L as It,a as Ot}from"./CuDSDkaK.js";import{p as $t}from"./BSSBD8FZ.js";import"./BQhxyi4f.js";import"./CjF7NCwV.js";import"./BJ0Qnn8n.js";import"./ijZjvOQH.js";import"./ssV7Ittj.js";const Ut=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},X=Ut().app,jt=()=>X.baseURL,Mt=()=>X.buildAssetsDir,pe=(...e)=>Ie(Ue(),Mt(),...e),Ue=(...e)=>{const t=X.cdnURL||X.baseURL;return e.length?Ie(t,...e):t};globalThis.__buildAssetsURL=pe,globalThis.__publicAssetsURL=Ue;globalThis.$fetch||(globalThis.$fetch=kt.create({baseURL:jt()}));const je=Ze("nuxt-app",{asyncContext:!1}),Dt="__nuxt_plugin";function Kt(e){let t=0;const n={_scope:Je(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.11.2"},get vue(){return n.vueApp.version}},payload:G({data:{},state:{},once:new Set,_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:o=>n._scope.run(()=>Vt(n,o)),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let o=!1;return()=>{if(!o&&(o=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...e};n.hooks=Rt(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(o,r)=>{const l="$"+o;q(n,l,r),q(n.vueApp.config.globalProperties,l,r)},q(n.vueApp,"$nuxt",n),q(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",r=>{n.callHook("app:chunkError",{error:r.payload})}),window.useNuxtApp=window.useNuxtApp||m;const o=n.hook("app:error",(...r)=>{console.error("[nuxt] error caught during app initialization",...r)});n.hook("app:mounted",o)}const a=n.payload.config;return n.provide("config",a),n}async function qt(e,t){if(t.hooks&&e.hooks.addHooks(t.hooks),typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const a in n)e.provide(a,n[a])}}async function Wt(e,t){const n=[],a=[],o=[],r=[];let l=0;async function s(i){var c;const f=((c=i.dependsOn)==null?void 0:c.filter(u=>t.some(d=>d._name===u)&&!n.includes(u)))??[];if(f.length>0)a.push([new Set(f),i]);else{const u=qt(e,i).then(async()=>{i._name&&(n.push(i._name),await Promise.all(a.map(async([d,y])=>{d.has(i._name)&&(d.delete(i._name),d.size===0&&(l++,await s(y)))})))});i.parallel?o.push(u.catch(d=>r.push(d))):await u}}for(const i of t)await s(i);if(await Promise.all(o),l)for(let i=0;i<l;i++)await Promise.all(o);if(r.length)throw r[0]}function H(e){if(typeof e=="function")return e;const t=e._name||e.name;return delete e.name,Object.assign(e.setup||(()=>{}),e,{[Dt]:!0,_name:t})}function Vt(e,t,n){const a=()=>t();return je.set(e),e.vueApp.runWithContext(a)}function Ft(){var t;let e;return He()&&(e=(t=et())==null?void 0:t.appContext.app.$nuxt),e=e||je.tryUse(),e||null}function m(){const e=Ft();if(!e)throw new Error("[nuxt] instance unavailable");return e}function Q(e){return m().$config}function q(e,t,n){Object.defineProperty(e,t,{get:()=>n})}const Me=Symbol("layout-meta"),D=Symbol("route"),C=()=>{var e;return(e=m())==null?void 0:e.$router},me=()=>He()?F(D,m()._route):m()._route;const zt=()=>{try{if(m()._processingMiddleware)return!0}catch{return!1}return!1},Xt=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:yt(e.path||"/",e.query||{})+(e.hash||"");if(t!=null&&t.open){const{target:s="_blank",windowFeatures:i={}}=t.open,f=Object.entries(i).filter(([c,u])=>u!==void 0).map(([c,u])=>`${c.toLowerCase()}=${u}`).join(", ");return open(n,s,f),Promise.resolve()}const a=(t==null?void 0:t.external)||$(n,{acceptRelative:!0});if(a){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const s=de(n).protocol;if(s&&vt(s))throw new Error(`Cannot navigate to a URL with '${s}' protocol.`)}const o=zt();if(!a&&o)return e;const r=C(),l=m();return a?(l._scope.stop(),t!=null&&t.replace?location.replace(n):location.href=n,o?l.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?r.replace(e):r.push(e)},De="__nuxt_error",Y=()=>Ne(m().payload,"error"),B=e=>{const t=Z(e);try{const n=m(),a=Y();n.hooks.callHook("app:error",t),a.value=a.value||t}catch{throw t}return t},Gt=async(e={})=>{const t=m(),n=Y();t.callHook("app:error:cleared",e),e.redirect&&await C().replace(e.redirect),n.value=null},Qt=e=>!!e&&typeof e=="object"&&De in e,Z=e=>{const t=te(e);return Object.defineProperty(t,De,{value:!0,configurable:!1,writable:!1}),t},Yt={nuxt:{buildId:"11f10549-7a44-4b08-a4a7-2cee14607011"},ui:{primary:"green",gray:"cool",colors:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"],strategy:"merge"}},Zt=xt(Yt);function Ke(){const e=m();return e._appConfig||(e._appConfig=G(Zt)),e._appConfig}const Jt=!1,oe=!1,en=!1,tn={componentName:"NuxtLink"},nn="#__nuxt";let V,qe;function an(){var t;const e=(t=Ke().nuxt)==null?void 0:t.buildId;return V=$fetch(pe(`builds/meta/${e}.json`)),V.then(n=>{qe=Pt(n.matcher)}),V}function J(){return V||an()}async function ye(e){return await J(),$e({},...qe.matchAll(e).reverse())}function Re(e,t={}){const n=rn(e,t),a=m(),o=a._payloadCache=a._payloadCache||{};return n in o||(o[n]=sn(e).then(r=>r?We(n).then(l=>l||(delete o[n],null)):(o[n]=null,null))),o[n]}const on="_payload.json";function rn(e,t={}){var o;const n=new URL(e,"http://localhost");if(n.host!=="localhost"||$(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const a=t.hash||(t.fresh?Date.now():(o=Ke().nuxt)==null?void 0:o.buildId);return he(Q().app.baseURL,n.pathname,on+(a?`?${a}`:""))}async function We(e){const t=fetch(e).then(n=>n.text().then(Ve));try{return await t}catch(n){console.warn("[nuxt] Cannot load payload ",e,n)}return null}async function sn(e=me().path){if(e=Oe(e),(await J()).prerendered.includes(e))return!0;const n=await ye(e);return!!n.prerender&&!n.redirect}let W=null;async function ln(){if(W)return W;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=await Ve(e.textContent||""),n=e.dataset.src?await We(e.dataset.src):void 0;return W={...t,...n,...window.__NUXT__},W}async function Ve(e){return await bt(e,m()._payloadRevivers)}function cn(e,t){m()._payloadRevivers[e]=t}const be={NuxtError:e=>Z(e),EmptyShallowRef:e=>z(e==="_"?void 0:e==="0n"?BigInt(0):ne(e)),EmptyRef:e=>I(e==="_"?void 0:e==="0n"?BigInt(0):ne(e)),ShallowRef:e=>z(e),ShallowReactive:e=>le(e),Ref:e=>I(e),Reactive:e=>G(e)},un=H({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const a in be)cn(a,be[a]);Object.assign(e.payload,([t,n]=M(()=>e.runWithContext(ln)),t=await t,n(),t)),window.__NUXT__=e.payload}}),fn=[],dn=H({name:"nuxt:head",enforce:"pre",setup(e){const t=Ct({plugins:fn});St(()=>m().vueApp._context.provides.usehead),e.vueApp.use(t);{let n=!0;const a=async()=>{n=!1,await Et(t)};t.hooks.hook("dom:beforeRender",o=>{o.shouldRender=!n}),e.hooks.hook("page:start",()=>{n=!0}),e.hooks.hook("page:finish",()=>{e.isHydrating||a()}),e.hooks.hook("app:error",a),e.hooks.hook("app:suspense:resolve",a)}}}),hn=(e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var a;return((a=e.params[n.slice(1)])==null?void 0:a.toString())||""}),re=(e,t)=>{const n=e.route.matched.find(o=>{var r;return((r=o.components)==null?void 0:r.default)===e.Component.type}),a=t??(n==null?void 0:n.meta.key)??(n&&hn(e.route,n));return typeof a=="function"?a(e.route):a},pn=(e,t)=>({default:()=>e?P(tt,e===!0?{}:e,t):t});function ve(e){return Array.isArray(e)?e:[e]}const mn="modulepreload",yn=function(e,t){return e[0]==="."?new URL(e,t).href:e},xe={},vn=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),s=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.all(n.map(i=>{if(i=yn(i,a),i in xe)return;xe[i]=!0;const f=i.endsWith(".css"),c=f?'[rel="stylesheet"]':"";if(!!a)for(let y=r.length-1;y>=0;y--){const h=r[y];if(h.href===i&&(!f||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":mn,f||(d.as="script",d.crossOrigin=""),d.href=i,s&&d.setAttribute("nonce",s),document.head.appendChild(d),f)return new Promise((y,h)=>{d.addEventListener("load",y),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>t()).catch(r=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r})},se=(...e)=>vn(...e).catch(t=>{const n=new Event("nuxt.preloadError");throw n.payload=t,window.dispatchEvent(n),t}),ee=null,Pe=[{name:"index",path:"/",meta:{},alias:[],redirect:ee==null?void 0:ee.redirect,component:()=>se(()=>import("./CYwVUCvc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]),import.meta.url).then(e=>e.default||e)}],Fe=(e,t,n)=>(t=t===!0?{}:t,{default:()=>{var a;return t?P(e,t,n):(a=n.default)==null?void 0:a.call(n)}});function Ce(e){const t=(e==null?void 0:e.meta.key)??e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var a;return((a=e.params[n.slice(1)])==null?void 0:a.toString())||""});return typeof t=="function"?t(e):t}function gn(e,t){return e===t||t===ae?!1:Ce(e)!==Ce(t)?!0:!e.matched.every((a,o)=>{var r,l;return a.components&&a.components.default===((l=(r=t.matched[o])==null?void 0:r.components)==null?void 0:l.default)})}const _n={scrollBehavior(e,t,n){var f;const a=m(),o=((f=C().options)==null?void 0:f.scrollBehaviorType)??"auto";let r=n||void 0;const l=typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,t):e.meta.scrollToTop;if(!r&&t&&e&&l!==!1&&gn(e,t)&&(r={left:0,top:0}),e.path===t.path)return t.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:Se(e.hash),behavior:o}:!1;const s=c=>!!(c.meta.pageTransition??oe),i=s(t)&&s(e)?"page:transition:finish":"page:finish";return new Promise(c=>{a.hooks.hookOnce(i,async()=>{await new Promise(u=>setTimeout(u,0)),e.hash&&(r={el:e.hash,top:Se(e.hash),behavior:o}),c(r)})})}};function Se(e){try{const t=document.querySelector(e);if(t)return parseFloat(getComputedStyle(t).scrollMarginTop)}catch{}return 0}const wn={hashMode:!1,scrollBehaviorType:"auto"},R={...wn,..._n},kn=async e=>{var i;let t,n;if(!((i=e.meta)!=null&&i.validate))return;const a=m(),o=C();if(([t,n]=M(()=>Promise.resolve(e.meta.validate(e))),t=await t,n(),t)===!0)return;const l=Z({statusCode:404,statusMessage:`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}}),s=o.beforeResolve(f=>{if(s(),f===e){const c=o.afterEach(async()=>{c(),await a.runWithContext(()=>B(l)),window.history.pushState({},"",e.fullPath)});return!1}})},Rn=async e=>{let t,n;const a=([t,n]=M(()=>ye(e.path)),t=await t,n(),t);if(a.redirect)return $(a.redirect,{acceptRelative:!0})?(window.location.href=a.redirect,!1):a.redirect},bn=[kn,Rn],j={};function xn(e,t,n){const{pathname:a,search:o,hash:r}=t,l=e.indexOf("#");if(l>-1){const f=r.includes(e.slice(l))?e.slice(l).length:1;let c=r.slice(f);return c[0]!=="/"&&(c="/"+c),ke(c,"")}const s=ke(a,e),i=!n||gt(s,n,{trailingSlash:!0})?s:n;return i+(i.includes("?")?"":o)+r}const Pn=H({name:"nuxt:router",enforce:"pre",async setup(e){var b,v;let t,n,a=Q().app.baseURL;R.hashMode&&!a.includes("#")&&(a+="#");const o=((b=R.history)==null?void 0:b.call(R,a))??(R.hashMode?Tt(a):Lt(a)),r=((v=R.routes)==null?void 0:v.call(R,Pe))??Pe;let l;const s=Ht({...R,scrollBehavior:(p,g,_)=>{if(g===ae){l=_;return}if(R.scrollBehavior){if(s.options.scrollBehavior=R.scrollBehavior,"scrollRestoration"in window.history){const E=s.beforeEach(()=>{E(),window.history.scrollRestoration="manual"})}return R.scrollBehavior(p,ae,l||_)}},history:o,routes:r});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),e.vueApp.use(s);const i=z(s.currentRoute.value);s.afterEach((p,g)=>{i.value=g}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>i.value});const f=xn(a,window.location,e.payload.path),c=z(s.currentRoute.value),u=()=>{c.value=s.currentRoute.value};e.hook("page:finish",u),s.afterEach((p,g)=>{var _,E,k,x;((E=(_=p.matched[0])==null?void 0:_.components)==null?void 0:E.default)===((x=(k=g.matched[0])==null?void 0:k.components)==null?void 0:x.default)&&u()});const d={};for(const p in c.value)Object.defineProperty(d,p,{get:()=>c.value[p]});e._route=le(d),e._middleware=e._middleware||{global:[],named:{}};try{[t,n]=M(()=>s.isReady()),await t,n()}catch(p){[t,n]=M(()=>e.runWithContext(()=>B(p))),await t,n()}const y=f!==s.currentRoute.value.fullPath?s.resolve(f):s.currentRoute.value;u();const h=e.payload.state._layout;s.beforeEach(async(p,g)=>{var _;await e.callHook("page:loading:start"),p.meta=G(p.meta),e.isHydrating&&h&&!nt(p.meta.layout)&&(p.meta.layout=h),e._processingMiddleware=!0;{const E=new Set([...bn,...e._middleware.global]);for(const k of p.matched){const x=k.meta.middleware;if(x)for(const T of ve(x))E.add(T)}{const k=await e.runWithContext(()=>ye(p.path));if(k.appMiddleware)for(const x in k.appMiddleware)k.appMiddleware[x]?E.add(x):E.delete(x)}for(const k of E){const x=typeof k=="string"?e._middleware.named[k]||await((_=j[k])==null?void 0:_.call(j).then(K=>K.default||K)):k;if(!x)throw new Error(`Unknown route middleware: '${k}'.`);const T=await e.runWithContext(()=>x(p,g));if(!e.payload.serverRendered&&e.isHydrating&&(T===!1||T instanceof Error)){const K=T||te({statusCode:404,statusMessage:`Page Not Found: ${f}`});return await e.runWithContext(()=>B(K)),!1}if(T!==!0&&(T||T===!1))return T}}}),s.onError(async()=>{delete e._processingMiddleware,await e.callHook("page:loading:end")});const S=Y();return s.afterEach(async(p,g,_)=>{delete e._processingMiddleware,!e.isHydrating&&S.value&&await e.runWithContext(Gt),_&&await e.callHook("page:loading:end"),p.matched.length===0&&await e.runWithContext(()=>B(te({statusCode:404,fatal:!1,statusMessage:`Page not found: ${p.fullPath}`,data:{path:p.fullPath}})))}),e.hooks.hookOnce("app:created",async()=>{try{"name"in y&&(y.name=void 0),await s.replace({...y,force:!0}),s.options.scrollBehavior=R.scrollBehavior}catch(p){await e.runWithContext(()=>B(p))}}),{provide:{router:s}}}}),ie=globalThis.requestIdleCallback||(e=>{const t=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(n)},1)}),Cn=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),ge=e=>{const t=m();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{ie(e)}):ie(e)},Sn=H({name:"nuxt:payload",setup(e){C().beforeResolve(async(t,n)=>{if(t.path===n.path)return;const a=await Re(t.path);a&&Object.assign(e.static.data,a.data)}),ge(()=>{var t;e.hooks.hook("link:prefetch",async n=>{de(n).protocol||await Re(n)}),((t=navigator.connection)==null?void 0:t.effectiveType)!=="slow-2g"&&setTimeout(J,1e3)})}}),En=H(e=>{let t;async function n(){const a=await J();t&&clearTimeout(t),t=setTimeout(n,1e3*60*60);try{const o=await $fetch(pe("builds/latest.json")+`?${Date.now()}`);o.id!==a.id&&e.hooks.callHook("app:manifest:update",o)}catch{}}ge(()=>{t=setTimeout(n,1e3*60*60)})}),wa=!1,Tn="$s";function ka(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,a]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(a!==void 0&&typeof a!="function")throw new Error("[nuxt] [useState] init must be a function: "+a);const o=Tn+n,r=m(),l=Ne(r.payload.state,o);if(l.value===void 0&&a){const s=a();if(at(s))return r.payload.state[o]=s,s;l.value=s}return l}async function ze(e,t=C()){const{path:n,matched:a}=t.resolve(e);if(!a.length||(t._routePreloaded||(t._routePreloaded=new Set),t._routePreloaded.has(n)))return;const o=t._preloadPromises=t._preloadPromises||[];if(o.length>4)return Promise.all(o).then(()=>ze(e,t));t._routePreloaded.add(n);const r=a.map(l=>{var s;return(s=l.components)==null?void 0:s.default}).filter(l=>typeof l=="function");for(const l of r){const s=Promise.resolve(l()).catch(()=>{}).finally(()=>o.splice(o.indexOf(s)));o.push(s)}await Promise.all(o)}function Ln(e={}){const t=e.path||window.location.pathname;let n={};try{n=ne(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:m().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const Hn=(...e)=>e.find(t=>t!==void 0);function Nn(e){const t=e.componentName||"NuxtLink";function n(a,o){if(!a||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return a;if(typeof a=="string")return Ee(a,e.trailingSlash);const r="path"in a&&a.path!==void 0?a.path:o(a).path;return{...a,name:void 0,path:Ee(r,e.trailingSlash)}}return O({name:t,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(a,{slots:o}){const r=C(),l=Q(),s=U(()=>{const h=a.to||a.href||"";return n(h,r.resolve)}),i=U(()=>typeof s.value=="string"&&$(s.value,{acceptRelative:!0})),f=U(()=>a.target&&a.target!=="_self"),c=U(()=>a.external||f.value?!0:typeof s.value=="object"?!1:s.value===""||i.value),u=I(!1),d=I(null),y=h=>{var S;d.value=a.custom?(S=h==null?void 0:h.$el)==null?void 0:S.nextElementSibling:h==null?void 0:h.$el};if(a.prefetch!==!1&&a.noPrefetch!==!0&&a.target!=="_blank"&&!Bn()){const S=m();let b,v=null;ot(()=>{const p=An();ge(()=>{b=ie(()=>{var g;(g=d==null?void 0:d.value)!=null&&g.tagName&&(v=p.observe(d.value,async()=>{v==null||v(),v=null;const _=typeof s.value=="string"?s.value:r.resolve(s.value).fullPath;await Promise.all([S.hooks.callHook("link:prefetch",_).catch(()=>{}),!c.value&&ze(s.value,r).catch(()=>{})]),u.value=!0}))})})}),rt(()=>{b&&Cn(b),v==null||v(),v=null})}return()=>{var v,p;if(!c.value){const g={ref:y,to:s.value,activeClass:a.activeClass||e.activeClass,exactActiveClass:a.exactActiveClass||e.exactActiveClass,replace:a.replace,ariaCurrentValue:a.ariaCurrentValue,custom:a.custom};return a.custom||(u.value&&(g.class=a.prefetchedClass||e.prefetchedClass),g.rel=a.rel||void 0),P(st("RouterLink"),g,o.default)}const h=typeof s.value=="object"?((v=r.resolve(s.value))==null?void 0:v.href)??null:s.value&&!a.external&&!i.value?n(he(l.app.baseURL,s.value),r.resolve):s.value||null,S=a.target||null,b=Hn(a.noRel?"":a.rel,e.externalRelAttribute,i.value||f.value?"noopener noreferrer":"")||null;if(a.custom){if(!o.default)return null;const g=()=>Xt(h,{replace:a.replace,external:a.external});return o.default({href:h,navigate:g,get route(){if(!h)return;const _=de(h);return{path:_.pathname,fullPath:_.pathname,get query(){return _t(_.search)},hash:_.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:h}},rel:b,target:S,isExternal:c.value,isActive:!1,isExactActive:!1})}return P("a",{ref:d,href:h,rel:b,target:S},(p=o.default)==null?void 0:p.call(o))}}})}const Ra=Nn(tn);function Ee(e,t){const n=t==="append"?wt:Oe;return $(e)&&!e.startsWith("http")?e:n(e,!0)}function An(){const e=m();if(e._observer)return e._observer;let t=null;const n=new Map,a=(r,l)=>(t||(t=new IntersectionObserver(s=>{for(const i of s){const f=n.get(i.target);(i.isIntersecting||i.intersectionRatio>0)&&f&&f()}})),n.set(r,l),t.observe(r),()=>{n.delete(r),t.unobserve(r),n.size===0&&(t.disconnect(),t=null)});return e._observer={observe:a}}function Bn(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const In=[["Icon",It],["IconCSS",Ot]],On=H({name:"nuxt:global-components",setup(e){for(const[t,n]of In)e.vueApp.component(t,n),e.vueApp.component("Lazy"+t,n)}}),L={},$n=H({name:"nuxt:prefetch",setup(e){const t=C();e.hooks.hook("app:mounted",()=>{t.beforeEach(async n=>{var o;const a=(o=n==null?void 0:n.meta)==null?void 0:o.layout;a&&typeof L[a]=="function"&&await L[a]()})}),e.hooks.hook("link:prefetch",n=>{if($(n))return;const a=t.resolve(n);if(!a)return;const o=a.meta.layout;let r=ve(a.meta.middleware);r=r.filter(l=>typeof l=="string");for(const l of r)typeof j[l]=="function"&&j[l]();o&&typeof L[o]=="function"&&L[o]()})}}),Un=H({name:"nuxt:chunk-reload",setup(e){const t=C(),n=Q(),a=new Set;t.beforeEach(()=>{a.clear()}),e.hook("app:chunkError",({error:r})=>{a.add(r)});function o(r){const s="href"in r&&r.href[0]==="#"?n.app.baseURL+r.href:he(n.app.baseURL,r.fullPath);Ln({path:s,persistState:!0})}e.hook("app:manifest:update",()=>{t.beforeResolve(o)}),t.onError((r,l)=>{a.has(r)&&o(l)})}}),jn=[un,dn,Pn,Sn,En,Bt,On,$n,Xe,Ge,Qe,$t,Un],Mn=O({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const t=e.renderKey,n=e.route,a={};for(const o in e.route)Object.defineProperty(a,o,{get:()=>t===e.renderKey?e.route[o]:n[o]});return ce(D,le(a)),()=>P(e.vnode,{ref:e.vnodeRef})}}),Dn=O({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t,expose:n}){const a=m(),o=I(),r=F(D,null);let l;n({pageRef:o});const s=F(Me,null);let i;const f=a.deferHydration();if(a.isHydrating){const c=a.hooks.hookOnce("app:error",f);C().beforeEach(c)}return e.pageKey&&it(()=>e.pageKey,(c,u)=>{c!==u&&a.callHook("page:loading:start")}),()=>P(Nt,{name:e.name,route:e.route,...t},{default:c=>{const u=qn(r,c.route,c.Component),d=r&&r.matched.length===c.route.matched.length;if(!c.Component){if(i&&!d)return i;f();return}if(i&&s&&!s.isCurrent(c.route))return i;if(u&&r&&(!s||s!=null&&s.isCurrent(r)))return d?i:null;const y=re(c,e.pageKey);!a.isHydrating&&!Wn(r,c.route,c.Component)&&l===y&&a.callHook("page:loading:end"),l=y;const h=!!(e.transition??c.route.meta.pageTransition??oe),S=h&&Kn([e.transition,c.route.meta.pageTransition,oe,{onAfterLeave:()=>{a.callHook("page:transition:finish",c.Component)}}].filter(Boolean)),b=e.keepalive??c.route.meta.keepalive??en;return i=Fe(Ae,h&&S,pn(b,P(ue,{suspensible:!0,onPending:()=>a.callHook("page:start",c.Component),onResolve:()=>{fe(()=>a.callHook("page:finish",c.Component).then(()=>a.callHook("page:loading:end")).finally(f))}},{default:()=>{const v=P(Mn,{key:y||void 0,vnode:c.Component,route:c.route,renderKey:y||void 0,trackRootNodes:h,vnodeRef:o});return b&&(v.type.name=c.Component.type.name||c.Component.type.__name||"RouteProvider"),v}}))).default(),i}})}});function Kn(e){const t=e.map(n=>({...n,onAfterLeave:n.onAfterLeave?ve(n.onAfterLeave):void 0}));return $e(...t)}function qn(e,t,n){if(!e)return!1;const a=t.matched.findIndex(o=>{var r;return((r=o.components)==null?void 0:r.default)===(n==null?void 0:n.type)});return!a||a===-1?!1:t.matched.slice(0,a).some((o,r)=>{var l,s,i;return((l=o.components)==null?void 0:l.default)!==((i=(s=e.matched[r])==null?void 0:s.components)==null?void 0:i.default)})||n&&re({route:t,Component:n})!==re({route:e,Component:n})}function Wn(e,t,n){return e?t.matched.findIndex(o=>{var r;return((r=o.components)==null?void 0:r.default)===(n==null?void 0:n.type)})<t.matched.length-1:!1}const Vn=O({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,t){const n=await L[e.name]().then(a=>a.default||a);return()=>P(n,e.layoutProps,t.slots)}}),Fn=O({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,t){const n=m(),a=F(D),o=a===me()?At():a,r=U(()=>{let i=w(e.name)??o.meta.layout??"default";return i&&!(i in L)&&e.fallback&&(i=w(e.fallback)),i}),l=I();t.expose({layoutRef:l});const s=n.deferHydration();if(n.isHydrating){const i=n.hooks.hookOnce("app:error",s);C().beforeEach(i)}return()=>{const i=r.value&&r.value in L,f=o.meta.layoutTransition??Jt;return Fe(Ae,i&&f,{default:()=>P(ue,{suspensible:!0,onResolve:()=>{fe(s)}},{default:()=>P(zn,{layoutProps:lt(t.attrs,{ref:l}),key:r.value||void 0,name:r.value,shouldProvide:!e.name,hasTransition:!!f},t.slots)})}).default()}}}),zn=O({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,t){const n=e.name;return e.shouldProvide&&ce(Me,{isCurrent:a=>n===(a.meta.layout??"default")}),()=>{var a,o;return!n||typeof n=="string"&&!(n in L)?(o=(a=t.slots).default)==null?void 0:o.call(a):P(Vn,{key:n,layoutProps:e.layoutProps,name:n},t.slots)}}}),Xn={};function Gn(e,t){const n=Dn,a=Fn;return N(),ct("div",null,[_e(a,null,{default:Be(()=>[_e(n)]),_:1})])}const Qn=Ye(Xn,[["render",Gn]]),Yn={__name:"nuxt-error-page",props:{error:Object},setup(e){const n=e.error;n.stack&&n.stack.split(`
`).splice(1).map(u=>({text:u.replace("webpack:/","").replace(".vue",".js").trim(),internal:u.includes("node_modules")&&!u.includes(".cache")||u.includes("internal")||u.includes("new Promise")})).map(u=>`<span class="stack${u.internal?" internal":""}">${u.text}</span>`).join(`
`);const a=Number(n.statusCode||500),o=a===404,r=n.statusMessage??(o?"Page Not Found":"Internal Server Error"),l=n.message||n.toString(),s=void 0,i=we(()=>se(()=>import("./BpjhJoGR.js").then(u=>u.e),__vite__mapDeps([27,26,28,29,30,31,32]),import.meta.url).then(u=>u.default||u)),f=we(()=>se(()=>import("./BpjhJoGR.js").then(u=>u.a),__vite__mapDeps([27,26,28,29,30,31,32]),import.meta.url).then(u=>u.default||u)),c=o?i:f;return(u,d)=>(N(),A(w(c),ut(ft({statusCode:w(a),statusMessage:w(r),description:w(l),stack:w(s)})),null,16))}},Te={__name:"nuxt-root",setup(e){const t=()=>null,n=m(),a=n.deferHydration();if(n.isHydrating){const s=n.hooks.hookOnce("app:error",a);C().beforeEach(s)}const o=!1;ce(D,me()),n.hooks.callHookWith(s=>s.map(i=>i()),"vue:setup");const r=Y();dt((s,i,f)=>{if(n.hooks.callHook("vue:error",s,i,f).catch(c=>console.error("[nuxt] Error in `vue:error` hook",c)),Qt(s)&&(s.fatal||s.unhandled))return n.runWithContext(()=>B(s)),!1});const l=!1;return(s,i)=>(N(),A(ue,{onResolve:w(a)},{default:Be(()=>[w(r)?(N(),A(w(Yn),{key:0,error:w(r)},null,8,["error"])):w(l)?(N(),A(w(t),{key:1,context:w(l)},null,8,["context"])):w(o)?(N(),A(ht(w(o)),{key:2})):(N(),A(w(Qn),{key:3}))]),_:1},8,["onResolve"]))}};let Le;{let e;Le=async function(){var l,s;if(e)return e;const a=!!((l=window.__NUXT__)!=null&&l.serverRendered||((s=document.getElementById("__NUXT_DATA__"))==null?void 0:s.dataset.ssr)==="true")?pt(Te):mt(Te),o=Kt({vueApp:a});async function r(i){await o.callHook("app:error",i),o.payload.error=o.payload.error||Z(i)}a.config.errorHandler=r;try{await Wt(o,jn)}catch(i){r(i)}try{await o.hooks.callHook("app:created",a),await o.hooks.callHook("app:beforeMount",a),a.mount(nn),await o.hooks.callHook("app:mounted",a),await fe()}catch(i){r(i)}return a.config.errorHandler===r&&(a.config.errorHandler=void 0),a},e=Le().catch(t=>{throw console.error("Error while mounting app:",t),t})}export{Ra as _,m as a,ka as b,C as c,H as d,se as e,wa as i,Ke as u};
