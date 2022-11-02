"use strict";var lt=Object.create;var Ae=Object.defineProperty;var ft=Object.getOwnPropertyDescriptor;var dt=Object.getOwnPropertyNames;var ht=Object.getPrototypeOf,pt=Object.prototype.hasOwnProperty;var mt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var gt=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of dt(e))!pt.call(t,r)&&r!==n&&Ae(t,r,{get:()=>e[r],enumerable:!(i=ft(e,r))||i.enumerable});return t};var wt=(t,e,n)=>(n=t!=null?lt(ht(t)):{},gt(e||!t||!t.__esModule?Ae(n,"default",{value:t,enumerable:!0}):n,t));var je=mt((Pn,ce)=>{"use strict";var Mt=Object.prototype.hasOwnProperty,v="~";function R(){}Object.create&&(R.prototype=Object.create(null),new R().__proto__||(v=!1));function It(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function $e(t,e,n,i,r){if(typeof n!="function")throw new TypeError("The listener must be a function");var o=new It(n,i||t,r),c=v?v+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],o]:t._events[c].push(o):(t._events[c]=o,t._eventsCount++),t}function V(t,e){--t._eventsCount===0?t._events=new R:delete t._events[e]}function y(){this._events=new R,this._eventsCount=0}y.prototype.eventNames=function(){var e=[],n,i;if(this._eventsCount===0)return e;for(i in n=this._events)Mt.call(n,i)&&e.push(v?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(n)):e};y.prototype.listeners=function(e){var n=v?v+e:e,i=this._events[n];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,o=i.length,c=new Array(o);r<o;r++)c[r]=i[r].fn;return c};y.prototype.listenerCount=function(e){var n=v?v+e:e,i=this._events[n];return i?i.fn?1:i.length:0};y.prototype.emit=function(e,n,i,r,o,c){var u=v?v+e:e;if(!this._events[u])return!1;var s=this._events[u],f=arguments.length,g,l;if(s.fn){switch(s.once&&this.removeListener(e,s.fn,void 0,!0),f){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,n),!0;case 3:return s.fn.call(s.context,n,i),!0;case 4:return s.fn.call(s.context,n,i,r),!0;case 5:return s.fn.call(s.context,n,i,r,o),!0;case 6:return s.fn.call(s.context,n,i,r,o,c),!0}for(l=1,g=new Array(f-1);l<f;l++)g[l-1]=arguments[l];s.fn.apply(s.context,g)}else{var oe=s.length,M;for(l=0;l<oe;l++)switch(s[l].once&&this.removeListener(e,s[l].fn,void 0,!0),f){case 1:s[l].fn.call(s[l].context);break;case 2:s[l].fn.call(s[l].context,n);break;case 3:s[l].fn.call(s[l].context,n,i);break;case 4:s[l].fn.call(s[l].context,n,i,r);break;default:if(!g)for(M=1,g=new Array(f-1);M<f;M++)g[M-1]=arguments[M];s[l].fn.apply(s[l].context,g)}}return!0};y.prototype.on=function(e,n,i){return $e(this,e,n,i,!1)};y.prototype.once=function(e,n,i){return $e(this,e,n,i,!0)};y.prototype.removeListener=function(e,n,i,r){var o=v?v+e:e;if(!this._events[o])return this;if(!n)return V(this,o),this;var c=this._events[o];if(c.fn)c.fn===n&&(!r||c.once)&&(!i||c.context===i)&&V(this,o);else{for(var u=0,s=[],f=c.length;u<f;u++)(c[u].fn!==n||r&&!c[u].once||i&&c[u].context!==i)&&s.push(c[u]);s.length?this._events[o]=s.length===1?s[0]:s:V(this,o)}return this};y.prototype.removeAllListeners=function(e){var n;return e?(n=v?v+e:e,this._events[n]&&V(this,n)):(this._events=new R,this._eventsCount=0),this};y.prototype.off=y.prototype.removeListener;y.prototype.addListener=y.prototype.on;y.prefixed=v;y.EventEmitter=y;typeof ce<"u"&&(ce.exports=y)});var Se="/Users/marcosmoura/Projects/personal/dotfiles/packages/phoenix/src/assets/icon-reload.png";var I=["command","option"],A=["command","option","control"],z=[...I,"shift"],vt=[...A,"shift"],We=1.25,Le=["Displaperture","Console"],w=16,se=w/2,Ce=3,h={moveWindowToNextScreen:["left",A],moveWindowToPreviousScreen:["right",A],reloadConfig:["r",A],reloadSpace:["l",z],reloadLayout:["l",vt],reloadYabai:["y",A],toggleMaximized:["m",z],toggleGrid:["g",z],toggleColumn:["c",z],toggleRow:["r",z],maximize:["up",A],centralize:["down",A],alignToTop:["up",I],alignToBottom:["down",I],alignToRight:["right",I],alignToLeft:["left",I],lockScreen:["l",A]};var Fe="/Users/marcosmoura/Projects/personal/dotfiles/packages/phoenix/src/assets/icon-window.png";function _t(t,e=Fe){let n=new Modal;return n.animationDuration=0,n.duration=We,n.text=t,n.weight=24,e&&(n.icon=Image.fromFile(e)),n}function S(t,e){let n=_t(t,e),{height:i,width:r}=n.frame(),o=Screen.main().visibleFrame();return n.origin={x:o.x+o.width/2-r/2,y:o.y+o.height/2-i/2},n.show(),n}function d(t,e=I,n){let i=Array.isArray(e)?e:[e];Key.on(t,i,n)}function Me(t){let e="Caps";return t?`${e} On`:`${e} Off`}function Pt(){let t,e=!1;d("capslock",[],()=>{e=!e,t?(t.text=Me(e),t.show()):t=S(Me(e))})}var Ie=Pt;function Tt(){d(...h.lockScreen,()=>{let t=["-e",'tell application "System Events" to keystroke "q" using {control down, command down}'];Task.run("/usr/bin/osascript",t)})}var Qe=Tt;function bt(){d(...h.reloadConfig,()=>Phoenix.reload())}var Oe=bt;function ke(t,e){let n=t.frame(),i=t.screen().flippedVisibleFrame(),r=e.flippedVisibleFrame(),o=r.width/i.width,c=r.height/i.height;t.setFrame({width:n.width*o,height:n.height*c,x:(n.x-i.x)*o+r.x,y:(n.y-i.y)*c+r.y})}function Et(t=Window.focused()){let e=t.screen().next();ke(t,e)}function At(t=Window.focused()){let e=t.screen().previous();ke(t,e)}function St(){d(...h.moveWindowToNextScreen,()=>At()),d(...h.moveWindowToPreviousScreen,()=>Et())}var ze=St;var Wt=new Set(["Finder"]);function Lt(){let t,e=0,n=!1,i;function r(){e=0,n=!1,clearTimeout(i),d("q","cmd",()=>{let o=App.focused();!o||Wt.has(o.name())||(t&&t.close(),n||(t=S("\u2318Q",null)),clearTimeout(i),e<15?(e++,i=setTimeout(()=>{e=0},50)):(n||(n=App.focused().terminate()),i=setTimeout(()=>r(),50)))})}r()}var Re=Lt;var ae=De;function De(){var t=[].slice.call(arguments),e=!1;typeof t[0]=="boolean"&&(e=t.shift());var n=t[0];if(Ne(n))throw new Error("extendee must be an object");for(var i=t.slice(1),r=i.length,o=0;o<r;o++){var c=i[o];for(var u in c)if(Object.prototype.hasOwnProperty.call(c,u)){var s=c[u];if(e&&Ct(s)){var f=Array.isArray(s)?[]:{};n[u]=De(!0,Object.prototype.hasOwnProperty.call(n,u)&&!Ne(n[u])?n[u]:f,s)}else n[u]=s}}return n}function Ct(t){return Array.isArray(t)||{}.toString.call(t)=="[object Object]"}function Ne(t){return!t||typeof t!="object"&&typeof t!="function"}var Ke=Ft;function Ft(t,e){if(!Array.isArray(t))throw new Error("expected an array for the first argument");if(e!=null&&typeof e!="number")throw new Error("expected a number or null/undefined for the second argument");e=e??t.length;for(var n=t.length,i=[],r=0;r<n;r+=e)i.push(t.slice(r,r+e));return i}var Xe=wt(je(),1);var N=class extends Error{constructor(e){super(e),this.name="TimeoutError"}},ue=class extends Error{constructor(e){super(),this.name="AbortError",this.message=e}},qe=t=>globalThis.DOMException===void 0?new ue(t):new DOMException(t),Be=t=>{let e=t.reason===void 0?qe("This operation was aborted."):t.reason;return e instanceof Error?e:qe(e)};function le(t,e,n,i){let r,o=new Promise((c,u)=>{if(typeof e!="number"||Math.sign(e)!==1)throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${e}\``);if(e===Number.POSITIVE_INFINITY){c(t);return}if(i={customTimers:{setTimeout,clearTimeout},...i},i.signal){let{signal:s}=i;s.aborted&&u(Be(s)),s.addEventListener("abort",()=>{u(Be(s))})}r=i.customTimers.setTimeout.call(void 0,()=>{if(typeof n=="function"){try{c(n())}catch(g){u(g)}return}let s=typeof n=="string"?n:`Promise timed out after ${e} milliseconds`,f=n instanceof Error?n:new N(s);typeof t.cancel=="function"&&t.cancel(),u(f)},e),(async()=>{try{c(await t)}catch(s){u(s)}finally{i.customTimers.clearTimeout.call(void 0,r)}})()});return o.clear=()=>{clearTimeout(r),r=void 0},o}function fe(t,e,n){let i=0,r=t.length;for(;r>0;){let o=Math.trunc(r/2),c=i+o;n(t[c],e)<=0?(i=++c,r-=o+1):r=o}return i}var Q=function(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)},E,D=class{constructor(){E.set(this,[])}enqueue(e,n){n={priority:0,...n};let i={priority:n.priority,run:e};if(this.size&&Q(this,E,"f")[this.size-1].priority>=n.priority){Q(this,E,"f").push(i);return}let r=fe(Q(this,E,"f"),i,(o,c)=>c.priority-o.priority);Q(this,E,"f").splice(r,0,i)}dequeue(){let e=Q(this,E,"f").shift();return e?.run}filter(e){return Q(this,E,"f").filter(n=>n.priority===e.priority).map(n=>n.run)}get size(){return Q(this,E,"f").length}};E=new WeakMap;var p=function(t,e,n,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(t,n):r?r.value=n:e.set(t,n),n},a=function(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)},m,$,j,L,Z,q,Y,b,K,P,U,T,B,W,H,Ge,Ve,Je,Ye,Ue,He,J,de,he,ee,X,Qt=new N,pe=class extends Error{},G=class extends Xe.default{constructor(e){var n,i,r,o;if(super(),m.add(this),$.set(this,void 0),j.set(this,void 0),L.set(this,0),Z.set(this,void 0),q.set(this,void 0),Y.set(this,0),b.set(this,void 0),K.set(this,void 0),P.set(this,void 0),U.set(this,void 0),T.set(this,0),B.set(this,void 0),W.set(this,void 0),H.set(this,void 0),Object.defineProperty(this,"timeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),e={carryoverConcurrencyCount:!1,intervalCap:Number.POSITIVE_INFINITY,interval:0,concurrency:Number.POSITIVE_INFINITY,autoStart:!0,queueClass:D,...e},!(typeof e.intervalCap=="number"&&e.intervalCap>=1))throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(i=(n=e.intervalCap)===null||n===void 0?void 0:n.toString())!==null&&i!==void 0?i:""}\` (${typeof e.intervalCap})`);if(e.interval===void 0||!(Number.isFinite(e.interval)&&e.interval>=0))throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(o=(r=e.interval)===null||r===void 0?void 0:r.toString())!==null&&o!==void 0?o:""}\` (${typeof e.interval})`);p(this,$,e.carryoverConcurrencyCount,"f"),p(this,j,e.intervalCap===Number.POSITIVE_INFINITY||e.interval===0,"f"),p(this,Z,e.intervalCap,"f"),p(this,q,e.interval,"f"),p(this,P,new e.queueClass,"f"),p(this,U,e.queueClass,"f"),this.concurrency=e.concurrency,this.timeout=e.timeout,p(this,H,e.throwOnTimeout===!0,"f"),p(this,W,e.autoStart===!1,"f")}get concurrency(){return a(this,B,"f")}set concurrency(e){if(!(typeof e=="number"&&e>=1))throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);p(this,B,e,"f"),a(this,m,"m",ee).call(this)}async add(e,n={}){return new Promise((i,r)=>{let o=async()=>{var c,u,s;p(this,T,(u=a(this,T,"f"),u++,u),"f"),p(this,L,(s=a(this,L,"f"),s++,s),"f");try{if(!((c=n.signal)===null||c===void 0)&&c.aborted){r(new pe("The task was aborted."));return}let g=await(this.timeout===void 0&&n.timeout===void 0?e({signal:n.signal}):le(Promise.resolve(e({signal:n.signal})),n.timeout===void 0?this.timeout:n.timeout,()=>{(n.throwOnTimeout===void 0?a(this,H,"f"):n.throwOnTimeout)&&r(Qt)}));i(g),this.emit("completed",g)}catch(f){r(f),this.emit("error",f)}a(this,m,"m",Je).call(this)};a(this,P,"f").enqueue(o,n),a(this,m,"m",J).call(this),this.emit("add")})}async addAll(e,n){return Promise.all(e.map(async i=>this.add(i,n)))}start(){return a(this,W,"f")?(p(this,W,!1,"f"),a(this,m,"m",ee).call(this),this):this}pause(){p(this,W,!0,"f")}clear(){p(this,P,new(a(this,U,"f")),"f")}async onEmpty(){a(this,P,"f").size!==0&&await a(this,m,"m",X).call(this,"empty")}async onSizeLessThan(e){a(this,P,"f").size<e||await a(this,m,"m",X).call(this,"next",()=>a(this,P,"f").size<e)}async onIdle(){a(this,T,"f")===0&&a(this,P,"f").size===0||await a(this,m,"m",X).call(this,"idle")}get size(){return a(this,P,"f").size}sizeBy(e){return a(this,P,"f").filter(e).length}get pending(){return a(this,T,"f")}get isPaused(){return a(this,W,"f")}};$=new WeakMap,j=new WeakMap,L=new WeakMap,Z=new WeakMap,q=new WeakMap,Y=new WeakMap,b=new WeakMap,K=new WeakMap,P=new WeakMap,U=new WeakMap,T=new WeakMap,B=new WeakMap,W=new WeakMap,H=new WeakMap,m=new WeakSet,Ge=function(){return a(this,j,"f")||a(this,L,"f")<a(this,Z,"f")},Ve=function(){return a(this,T,"f")<a(this,B,"f")},Je=function(){var e;p(this,T,(e=a(this,T,"f"),e--,e),"f"),a(this,m,"m",J).call(this),this.emit("next")},Ye=function(){this.emit("empty"),a(this,T,"f")===0&&this.emit("idle")},Ue=function(){a(this,m,"m",he).call(this),a(this,m,"m",de).call(this),p(this,K,void 0,"f")},He=function(){let e=Date.now();if(a(this,b,"f")===void 0){let n=a(this,Y,"f")-e;if(n<0)p(this,L,a(this,$,"f")?a(this,T,"f"):0,"f");else return a(this,K,"f")===void 0&&p(this,K,setTimeout(()=>{a(this,m,"m",Ue).call(this)},n),"f"),!0}return!1},J=function(){if(a(this,P,"f").size===0)return a(this,b,"f")&&clearInterval(a(this,b,"f")),p(this,b,void 0,"f"),a(this,m,"m",Ye).call(this),!1;if(!a(this,W,"f")){let e=!a(this,m,"a",He);if(a(this,m,"a",Ge)&&a(this,m,"a",Ve)){let n=a(this,P,"f").dequeue();return n?(this.emit("active"),n(),e&&a(this,m,"m",de).call(this),!0):!1}}return!1},de=function(){a(this,j,"f")||a(this,b,"f")!==void 0||(p(this,b,setInterval(()=>{a(this,m,"m",he).call(this)},a(this,q,"f")),"f"),p(this,Y,Date.now()+a(this,q,"f"),"f"))},he=function(){a(this,L,"f")===0&&a(this,T,"f")===0&&a(this,b,"f")&&(clearInterval(a(this,b,"f")),p(this,b,void 0,"f")),p(this,L,a(this,$,"f")?a(this,T,"f"):0,"f"),a(this,m,"m",ee).call(this)},ee=function(){for(;a(this,m,"m",J).call(this););},X=async function(e,n){return new Promise(i=>{let r=()=>{n&&!n()||(this.off(e,r),i())};this.on(e,r)})};function C(t,e){Array.isArray(t)?t.forEach(n=>Event.on(n,e)):Event.on(t,e)}function me(t=Window.focused().screen()){return t.flippedVisibleFrame()}function ge(t){return{width:t.width-w*2,height:t.height-w*2,x:t.x+w,y:t.y+w}}function F(t,e){let n=ge(me(t)),{width:i,height:r,x:o,y:c}=n;return["right","left"].includes(e)?(i=i/2-se,e==="right"&&(o=o+i+w)):["top","bottom"].includes(e)&&(r=r/2-se,e==="bottom"&&(c=c+r+w)),{width:i,height:r,x:o,y:c}}function we(t){for(let e of Object.getOwnPropertyNames(t))delete t[e]}function Ze(t,e){return{window:t||Window.focused(),frame:e||ge(me())}}function O(t,e,n){let{window:i}=Ze(e),r=n||F(i.screen(),t);i.setFrame(r)}function Ot(t){O("top",t)}function kt(t){O("right",t)}function zt(t){O("bottom",t)}function Rt(t){O("left",t)}function ye(t,e){O("full",t,e)}function ve(t,e){let{window:n,frame:i}=Ze(t,e),r=1920,o=1080,c=n.frame(),u=c.width<r&&c.height<o,s=u?c.width:r,f=u?c.height:o,g=i.x+i.width/2-s/2,l=i.y+i.height/2-f/2;n.setFrame({width:s,height:f,x:g,y:l})}function Nt(){d(...h.maximize,()=>ye()),d(...h.centralize,()=>ve()),d(...h.alignToTop,()=>Ot()),d(...h.alignToBottom,()=>zt()),d(...h.alignToRight,()=>kt()),d(...h.alignToLeft,()=>Rt())}var et=Nt;var k={space:0,tiling:{mode:"grid",position:"full",maxGridCells:Ce}},xe={},re={},_e=new G({concurrency:1,autoStart:!0});function tt(){we(xe),we(re),_e.clear()}function Dt(t,e){let n=t.windows({visible:!0});if(n.length>0){let i=n.length,r=n[0].screen(),o=F(r,e.position);n.forEach((c,u)=>{let s=(o.width-w*(i-1))/i,f=o.height,g=o.x+(s+w)*u,l=o.y;c.setFrame({width:s,height:f,x:g,y:l})})}}function Kt(t,e){let n=t.windows({visible:!0});if(n.length>0){let i=n.length,r=n[0].screen(),o=F(r,e.position);n.forEach((c,u)=>{let s=o.width,f=(o.height-w*(i-1))/i,g=o.x,l=o.y+(f+w)*u;c.setFrame({width:s,height:f,x:g,y:l})})}}function $t(t,e){let n=t.windows({visible:!0});if(n.length>0){let i=F(n[0].screen(),e.position);n.forEach(r=>ye(r,i))}}function nt(t,e){let n=t.windows({visible:!0});if(n.length>0){let i=F(n[0].screen(),e.position);n.forEach(r=>ve(r,i))}}function jt(t,e){let n=t.windows({visible:!0});n.length>0&&(e.frame?n.forEach(i=>O(null,i,e.frame)):nt(t,e))}function qt(t,{position:e,maxGridCells:n}){let i=t.windows({visible:!0});if(i.length>0){let r=i[0].screen(),o=F(r,e),c=i.length>Math.round(n*1.4)?n:2,u=Ke(i,c),s=u.length;u.forEach((f,g)=>{let l=f.length;f.forEach((oe,M)=>{let be=(o.width-w*(l-1))/l,Ee=(o.height-w*(s-1))/s,ct=o.x+(be+w)*M,ut=o.y+(Ee+w)*g;oe.setFrame({width:be,height:Ee,x:ct,y:ut})})})}}function it(t){return Le.map(e=>e.toLowerCase()).includes(t.toLowerCase())}function Bt(t){return App.all().filter(i=>{let r=i.name();return r.match(t)&&!it(r)})}function Gt(t,e){let n=Space.all(),i=null;e===0?i=Space.active()??(t.mainWindow().spaces()[0]||n[0]):i=n[e-1],i&&(i.removeWindows(t.windows()),t.focus(),i.addWindows(t.windows()))}function ie(t,e=k.space,n=k.tiling,i=!1){switch(i&&Gt(t,e),re[t.name()]={space:e,tiling:n},n.mode){case"column":Dt(t,n);break;case"row":Kt(t,n);break;case"maximized":$t(t,n);break;case"centered":nt(t,n);break;case"grid":qt(t,n);break;case"floating":jt(t,n);break;default:break}}function x(t,e=k){let n=ae(!0,{},k,e),i=Bt(t);xe[t]=n,i.length>0&&i.forEach(r=>{_e.add(()=>new Promise(o=>{setTimeout(()=>{ie(r,n.space,n.tiling,!0),o(!0)},25)}))})}function Pe(t,e=!1){let n=t.name();if(it(n))return;let i=re[n];i?ie(t,i.space,i.tiling,e):Object.entries(xe).forEach(([r,o])=>{new RegExp(r).test(n)&&ie(t,o.space,o.tiling,e)})}function te(){Space.active().windows().forEach(t=>Pe(t.app()))}function Vt(){S("Reloading layouts");let t={};Space.all().forEach(e=>{_e.add(()=>new Promise(n=>{setTimeout(()=>{e.windows().filter(r=>t[r.app().name()]).forEach(r=>Pe(r.app(),!0)),n(!0)},25)}))})}function ne(t){return()=>{let e=App.focused(),n=e.name(),i=re[n],r=0,o=k.tiling;i?(r=i.space,o=i.tiling):(r=0,o=k.tiling),ie(e,r,ae(!0,{},o,t))}}function Yt(){C(["appDidLaunch","appDidTerminate","appDidShow","appDidHide","appDidActivate"],t=>Pe(t)),C(["windowDidUnminimize","windowDidMinimize","windowDidOpen","windowDidClose"],te),C("spaceDidChange",te),C("screensDidChange",te),d(...h.reloadSpace,te),d(...h.reloadLayout,Vt),d(...h.toggleMaximized,ne({mode:"maximized"})),d(...h.toggleGrid,ne({mode:"grid"})),d(...h.toggleColumn,ne({mode:"column"})),d(...h.toggleRow,ne({mode:"row"}))}var rt=Yt;function ot(t){return new Promise((e,n)=>{Task.run("/bin/sh",["-c",`echo ${t}`],({status:i,output:r})=>{if(i===0)return e(r.trim());n(`Could not execute command to fetch '${r}'`)})})}function st(t){return ot(`"${t}"`)}function at(t){return ot(`$(which ${t})`)}Phoenix.set({openAtLogin:!0});Ie();Qe();Oe();ze();Re();rt();et();var _={tiling:{mode:"centered"}};function Te(){tt(),x("WhatsApp",{..._,space:4}),x("Discord",{..._,space:4}),x("(Copy|Bin|About This Mac|Info)",_),x("Activity Monitor",_),x("Calculator",_),x("Contexts",_),x("IINA",_),x("Opening",_),x("Preferences",_),x("Preview",_),x("Steam",_),x("System Preferences",_),x("Tone Room",_),x("VLC",_)}Te();C("screensDidChange",Te);d(...h.reloadYabai,async()=>{let t=await st("$HOME"),e=await at("zsh");Task.run(e,[`${t}/.zsh/modules/tools/scripts/reload-yabai.zsh`])});C("appDidLaunch",Te);S("Phoenix reloaded!",Se);
