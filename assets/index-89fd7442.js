(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function vh(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Rt={},vr=[],ze=()=>{},Cw=()=>!1,Pw=/^on[^a-z]/,gc=e=>Pw.test(e),Eh=e=>e.startsWith("onUpdate:"),zt=Object.assign,Th=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ow=Object.prototype.hasOwnProperty,mt=(e,t)=>Ow.call(e,t),tt=Array.isArray,Er=e=>_c(e)==="[object Map]",Bg=e=>_c(e)==="[object Set]",at=e=>typeof e=="function",Ht=e=>typeof e=="string",wh=e=>typeof e=="symbol",Ot=e=>e!==null&&typeof e=="object",jg=e=>Ot(e)&&at(e.then)&&at(e.catch),qg=Object.prototype.toString,_c=e=>qg.call(e),Nw=e=>_c(e).slice(8,-1),Hg=e=>_c(e)==="[object Object]",Ah=e=>Ht(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,va=vh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yc=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Dw=/-(\w)/g,_n=yc(e=>e.replace(Dw,(t,n)=>n?n.toUpperCase():"")),kw=/\B([A-Z])/g,Xr=yc(e=>e.replace(kw,"-$1").toLowerCase()),vc=yc(e=>e.charAt(0).toUpperCase()+e.slice(1)),Il=yc(e=>e?`on${vc(e)}`:""),Bi=(e,t)=>!Object.is(e,t),bl=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},La=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xw=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Mf;const gu=()=>Mf||(Mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ih(e){if(tt(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=Ht(s)?Uw(s):Ih(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(Ht(e))return e;if(Ot(e))return e}}const Lw=/;(?![^(]*\))/g,Vw=/:([^]+)/,Mw=/\/\*[^]*?\*\//g;function Uw(e){const t={};return e.replace(Mw,"").split(Lw).forEach(n=>{if(n){const s=n.split(Vw);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function bh(e){let t="";if(Ht(e))t=e;else if(tt(e))for(let n=0;n<e.length;n++){const s=bh(e[n]);s&&(t+=s+" ")}else if(Ot(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Fw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$w=vh(Fw);function Wg(e){return!!e||e===""}const qo=e=>Ht(e)?e:e==null?"":tt(e)||Ot(e)&&(e.toString===qg||!at(e.toString))?JSON.stringify(e,Kg,2):String(e),Kg=(e,t)=>t&&t.__v_isRef?Kg(e,t.value):Er(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Bg(t)?{[`Set(${t.size})`]:[...t.values()]}:Ot(t)&&!tt(t)&&!Hg(t)?String(t):t;let Ce;class zg{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Gg(e){return new zg(e)}function Bw(e,t=Ce){t&&t.active&&t.effects.push(e)}function Qg(){return Ce}function jw(e){Ce&&Ce.cleanups.push(e)}const Rh=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yg=e=>(e.w&as)>0,Xg=e=>(e.n&as)>0,qw=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=as},Hw=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Yg(r)&&!Xg(r)?r.delete(e):t[n++]=r,r.w&=~as,r.n&=~as}t.length=n}},Va=new WeakMap;let Ei=0,as=1;const _u=30;let We;const Ds=Symbol(""),yu=Symbol("");class Sh{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bw(this,s)}run(){if(!this.active)return this.fn();let t=We,n=es;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=We,We=this,es=!0,as=1<<++Ei,Ei<=_u?qw(this):Uf(this),this.fn()}finally{Ei<=_u&&Hw(this),as=1<<--Ei,We=this.parent,es=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(Uf(this),this.onStop&&this.onStop(),this.active=!1)}}function Uf(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let es=!0;const Jg=[];function Jr(){Jg.push(es),es=!1}function Zr(){const e=Jg.pop();es=e===void 0?!0:e}function Ae(e,t,n){if(es&&We){let s=Va.get(e);s||Va.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Rh()),Zg(r)}}function Zg(e,t){let n=!1;Ei<=_u?Xg(e)||(e.n|=as,n=!Yg(e)):n=!e.has(We),n&&(e.add(We),We.deps.push(e))}function On(e,t,n,s,r,i){const o=Va.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&tt(e)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":tt(e)?Ah(n)&&a.push(o.get("length")):(a.push(o.get(Ds)),Er(e)&&a.push(o.get(yu)));break;case"delete":tt(e)||(a.push(o.get(Ds)),Er(e)&&a.push(o.get(yu)));break;case"set":Er(e)&&a.push(o.get(Ds));break}if(a.length===1)a[0]&&vu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);vu(Rh(c))}}function vu(e,t){const n=tt(e)?e:[...e];for(const s of n)s.computed&&Ff(s);for(const s of n)s.computed||Ff(s)}function Ff(e,t){(e!==We||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Ww(e,t){var n;return(n=Va.get(e))==null?void 0:n.get(t)}const Kw=vh("__proto__,__v_isRef,__isVue"),t_=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wh)),zw=Ch(),Gw=Ch(!1,!0),Qw=Ch(!0),$f=Yw();function Yw(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=gt(this);for(let i=0,o=this.length;i<o;i++)Ae(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(gt)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jr();const s=gt(this)[t].apply(this,n);return Zr(),s}}),e}function Xw(e){const t=gt(this);return Ae(t,"has",e),t.hasOwnProperty(e)}function Ch(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?fA:i_:t?r_:s_).get(s))return s;const o=tt(s);if(!e){if(o&&mt($f,r))return Reflect.get($f,r,i);if(r==="hasOwnProperty")return Xw}const a=Reflect.get(s,r,i);return(wh(r)?t_.has(r):Kw(r))||(e||Ae(s,"get",r),t)?a:Lt(a)?o&&Ah(r)?a:a.value:Ot(a)?e?a_(a):po(a):a}}const Jw=e_(),Zw=e_(!0);function e_(e=!1){return function(n,s,r,i){let o=n[s];if(Pr(o)&&Lt(o)&&!Lt(r))return!1;if(!e&&(!Ma(r)&&!Pr(r)&&(o=gt(o),r=gt(r)),!tt(n)&&Lt(o)&&!Lt(r)))return o.value=r,!0;const a=tt(n)&&Ah(s)?Number(s)<n.length:mt(n,s),c=Reflect.set(n,s,r,i);return n===gt(i)&&(a?Bi(r,o)&&On(n,"set",s,r):On(n,"add",s,r)),c}}function tA(e,t){const n=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&On(e,"delete",t,void 0),s}function eA(e,t){const n=Reflect.has(e,t);return(!wh(t)||!t_.has(t))&&Ae(e,"has",t),n}function nA(e){return Ae(e,"iterate",tt(e)?"length":Ds),Reflect.ownKeys(e)}const n_={get:zw,set:Jw,deleteProperty:tA,has:eA,ownKeys:nA},sA={get:Qw,set(e,t){return!0},deleteProperty(e,t){return!0}},rA=zt({},n_,{get:Gw,set:Zw}),Ph=e=>e,Ec=e=>Reflect.getPrototypeOf(e);function Ho(e,t,n=!1,s=!1){e=e.__v_raw;const r=gt(e),i=gt(t);n||(t!==i&&Ae(r,"get",t),Ae(r,"get",i));const{has:o}=Ec(r),a=s?Ph:n?Dh:ji;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function Wo(e,t=!1){const n=this.__v_raw,s=gt(n),r=gt(e);return t||(e!==r&&Ae(s,"has",e),Ae(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Ko(e,t=!1){return e=e.__v_raw,!t&&Ae(gt(e),"iterate",Ds),Reflect.get(e,"size",e)}function Bf(e){e=gt(e);const t=gt(this);return Ec(t).has.call(t,e)||(t.add(e),On(t,"add",e,e)),this}function jf(e,t){t=gt(t);const n=gt(this),{has:s,get:r}=Ec(n);let i=s.call(n,e);i||(e=gt(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?Bi(t,o)&&On(n,"set",e,t):On(n,"add",e,t),this}function qf(e){const t=gt(this),{has:n,get:s}=Ec(t);let r=n.call(t,e);r||(e=gt(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&On(t,"delete",e,void 0),i}function Hf(){const e=gt(this),t=e.size!==0,n=e.clear();return t&&On(e,"clear",void 0,void 0),n}function zo(e,t){return function(s,r){const i=this,o=i.__v_raw,a=gt(o),c=t?Ph:e?Dh:ji;return!e&&Ae(a,"iterate",Ds),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Go(e,t,n){return function(...s){const r=this.__v_raw,i=gt(r),o=Er(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...s),u=n?Ph:t?Dh:ji;return!t&&Ae(i,"iterate",c?yu:Ds),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function jn(e){return function(...t){return e==="delete"?!1:this}}function iA(){const e={get(i){return Ho(this,i)},get size(){return Ko(this)},has:Wo,add:Bf,set:jf,delete:qf,clear:Hf,forEach:zo(!1,!1)},t={get(i){return Ho(this,i,!1,!0)},get size(){return Ko(this)},has:Wo,add:Bf,set:jf,delete:qf,clear:Hf,forEach:zo(!1,!0)},n={get(i){return Ho(this,i,!0)},get size(){return Ko(this,!0)},has(i){return Wo.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:zo(!0,!1)},s={get(i){return Ho(this,i,!0,!0)},get size(){return Ko(this,!0)},has(i){return Wo.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:zo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Go(i,!1,!1),n[i]=Go(i,!0,!1),t[i]=Go(i,!1,!0),s[i]=Go(i,!0,!0)}),[e,n,t,s]}const[oA,aA,cA,lA]=iA();function Oh(e,t){const n=t?e?lA:cA:e?aA:oA;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(mt(n,r)&&r in s?n:s,r,i)}const uA={get:Oh(!1,!1)},hA={get:Oh(!1,!0)},dA={get:Oh(!0,!1)},s_=new WeakMap,r_=new WeakMap,i_=new WeakMap,fA=new WeakMap;function pA(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mA(e){return e.__v_skip||!Object.isExtensible(e)?0:pA(Nw(e))}function po(e){return Pr(e)?e:Nh(e,!1,n_,uA,s_)}function o_(e){return Nh(e,!1,rA,hA,r_)}function a_(e){return Nh(e,!0,sA,dA,i_)}function Nh(e,t,n,s,r){if(!Ot(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=mA(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function ns(e){return Pr(e)?ns(e.__v_raw):!!(e&&e.__v_isReactive)}function Pr(e){return!!(e&&e.__v_isReadonly)}function Ma(e){return!!(e&&e.__v_isShallow)}function c_(e){return ns(e)||Pr(e)}function gt(e){const t=e&&e.__v_raw;return t?gt(t):e}function Tc(e){return La(e,"__v_skip",!0),e}const ji=e=>Ot(e)?po(e):e,Dh=e=>Ot(e)?a_(e):e;function l_(e){es&&We&&(e=gt(e),Zg(e.dep||(e.dep=Rh())))}function u_(e,t){e=gt(e);const n=e.dep;n&&vu(n)}function Lt(e){return!!(e&&e.__v_isRef===!0)}function kh(e){return h_(e,!1)}function gA(e){return h_(e,!0)}function h_(e,t){return Lt(e)?e:new _A(e,t)}class _A{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:gt(t),this._value=n?t:ji(t)}get value(){return l_(this),this._value}set value(t){const n=this.__v_isShallow||Ma(t)||Pr(t);t=n?t:gt(t),Bi(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ji(t),u_(this))}}function Ve(e){return Lt(e)?e.value:e}const yA={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Lt(r)&&!Lt(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function d_(e){return ns(e)?e:new Proxy(e,yA)}function vA(e){const t=tt(e)?new Array(e.length):{};for(const n in e)t[n]=TA(e,n);return t}class EA{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ww(gt(this._object),this._key)}}function TA(e,t,n){const s=e[t];return Lt(s)?s:new EA(e,t,n)}class wA{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sh(t,()=>{this._dirty||(this._dirty=!0,u_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=gt(this);return l_(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function AA(e,t,n=!1){let s,r;const i=at(e);return i?(s=e,r=ze):(s=e.get,r=e.set),new wA(s,r,i||!r,n)}function ss(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){wc(i,t,n)}return r}function Ge(e,t,n,s){if(at(e)){const i=ss(e,t,n,s);return i&&jg(i)&&i.catch(o=>{wc(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(Ge(e[i],t,n,s));return r}function wc(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){ss(c,null,10,[e,o,a]);return}}IA(e,n,r,s)}function IA(e,t,n,s=!0){console.error(e)}let qi=!1,Eu=!1;const re=[];let on=0;const Tr=[];let wn=null,Is=0;const f_=Promise.resolve();let xh=null;function Lh(e){const t=xh||f_;return e?t.then(this?e.bind(this):e):t}function bA(e){let t=on+1,n=re.length;for(;t<n;){const s=t+n>>>1;Hi(re[s])<e?t=s+1:n=s}return t}function Vh(e){(!re.length||!re.includes(e,qi&&e.allowRecurse?on+1:on))&&(e.id==null?re.push(e):re.splice(bA(e.id),0,e),p_())}function p_(){!qi&&!Eu&&(Eu=!0,xh=f_.then(g_))}function RA(e){const t=re.indexOf(e);t>on&&re.splice(t,1)}function SA(e){tt(e)?Tr.push(...e):(!wn||!wn.includes(e,e.allowRecurse?Is+1:Is))&&Tr.push(e),p_()}function Wf(e,t=qi?on+1:0){for(;t<re.length;t++){const n=re[t];n&&n.pre&&(re.splice(t,1),t--,n())}}function m_(e){if(Tr.length){const t=[...new Set(Tr)];if(Tr.length=0,wn){wn.push(...t);return}for(wn=t,wn.sort((n,s)=>Hi(n)-Hi(s)),Is=0;Is<wn.length;Is++)wn[Is]();wn=null,Is=0}}const Hi=e=>e.id==null?1/0:e.id,CA=(e,t)=>{const n=Hi(e)-Hi(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function g_(e){Eu=!1,qi=!0,re.sort(CA);const t=ze;try{for(on=0;on<re.length;on++){const n=re[on];n&&n.active!==!1&&ss(n,null,14)}}finally{on=0,re.length=0,m_(),qi=!1,xh=null,(re.length||Tr.length)&&g_()}}function PA(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Rt;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Rt;d&&(r=n.map(f=>Ht(f)?f.trim():f)),h&&(r=n.map(xw))}let a,c=s[a=Il(t)]||s[a=Il(_n(t))];!c&&i&&(c=s[a=Il(Xr(t))]),c&&Ge(c,e,6,r);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ge(l,e,6,r)}}function __(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!at(e)){const c=l=>{const u=__(l,t,!0);u&&(a=!0,zt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(Ot(e)&&s.set(e,null),null):(tt(i)?i.forEach(c=>o[c]=null):zt(o,i),Ot(e)&&s.set(e,o),o)}function Ac(e,t){return!e||!gc(t)?!1:(t=t.slice(2).replace(/Once$/,""),mt(e,t[0].toLowerCase()+t.slice(1))||mt(e,Xr(t))||mt(e,t))}let Pe=null,y_=null;function Ua(e){const t=Pe;return Pe=e,y_=e&&e.type.__scopeId||null,t}function v_(e,t=Pe,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&np(-1);const i=Ua(t);let o;try{o=e(...r)}finally{Ua(i),s._d&&np(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Rl(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=e;let v,A;const R=Ua(e);try{if(n.shapeFlag&4){const w=r||s;v=rn(u.call(w,w,h,i,f,d,g)),A=c}else{const w=t;v=rn(w.length>1?w(i,{attrs:c,slots:a,emit:l}):w(i,null)),A=t.props?c:OA(c)}}catch(w){Pi.length=0,wc(w,e,1),v=Zt(Fs)}let N=v;if(A&&y!==!1){const w=Object.keys(A),{shapeFlag:U}=N;w.length&&U&7&&(o&&w.some(Eh)&&(A=NA(A,o)),N=Or(N,A))}return n.dirs&&(N=Or(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),v=N,Ua(R),v}const OA=e=>{let t;for(const n in e)(n==="class"||n==="style"||gc(n))&&((t||(t={}))[n]=e[n]);return t},NA=(e,t)=>{const n={};for(const s in e)(!Eh(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function DA(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Kf(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ac(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Kf(s,o,l):!0:!!o;return!1}function Kf(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!Ac(n,i))return!0}return!1}function kA({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const xA=e=>e.__isSuspense;function LA(e,t){t&&t.pendingBranch?tt(e)?t.effects.push(...e):t.effects.push(e):SA(e)}const Qo={};function Si(e,t,n){return E_(e,t,n)}function E_(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Rt){var a;const c=Qg()===((a=Kt)==null?void 0:a.scope)?Kt:null;let l,u=!1,h=!1;if(Lt(e)?(l=()=>e.value,u=Ma(e)):ns(e)?(l=()=>e,s=!0):tt(e)?(h=!0,u=e.some(w=>ns(w)||Ma(w)),l=()=>e.map(w=>{if(Lt(w))return w.value;if(ns(w))return Rs(w);if(at(w))return ss(w,c,2)})):at(e)?t?l=()=>ss(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Ge(e,c,3,[f])}:l=ze,t&&s){const w=l;l=()=>Rs(w())}let d,f=w=>{d=R.onStop=()=>{ss(w,c,4)}},g;if(zi)if(f=ze,t?n&&Ge(t,c,3,[l(),h?[]:void 0,f]):l(),r==="sync"){const w=OI();g=w.__watcherHandles||(w.__watcherHandles=[])}else return ze;let y=h?new Array(e.length).fill(Qo):Qo;const v=()=>{if(R.active)if(t){const w=R.run();(s||u||(h?w.some((U,$)=>Bi(U,y[$])):Bi(w,y)))&&(d&&d(),Ge(t,c,3,[w,y===Qo?void 0:h&&y[0]===Qo?[]:y,f]),y=w)}else R.run()};v.allowRecurse=!!t;let A;r==="sync"?A=v:r==="post"?A=()=>ye(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),A=()=>Vh(v));const R=new Sh(l,A);t?n?v():y=R.run():r==="post"?ye(R.run.bind(R),c&&c.suspense):R.run();const N=()=>{R.stop(),c&&c.scope&&Th(c.scope.effects,R)};return g&&g.push(N),N}function VA(e,t,n){const s=this.proxy,r=Ht(e)?e.includes(".")?T_(s,e):()=>s[e]:e.bind(s,s);let i;at(t)?i=t:(i=t.handler,n=t);const o=Kt;Nr(this);const a=E_(r,i.bind(s),n);return o?Nr(o):xs(),a}function T_(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Rs(e,t){if(!Ot(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Lt(e))Rs(e.value,t);else if(tt(e))for(let n=0;n<e.length;n++)Rs(e[n],t);else if(Bg(e)||Er(e))e.forEach(n=>{Rs(n,t)});else if(Hg(e))for(const n in e)Rs(e[n],t);return e}function KU(e,t){const n=Pe;if(n===null)return e;const s=Cc(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=Rt]=t[i];o&&(at(o)&&(o={mounted:o,updated:o}),o.deep&&Rs(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Ts(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Jr(),Ge(c,n,8,[e.el,a,e,t]),Zr())}}function w_(e,t){return at(e)?(()=>zt({name:e.name},t,{setup:e}))():e}const Ea=e=>!!e.type.__asyncLoader,A_=e=>e.type.__isKeepAlive;function MA(e,t){I_(e,"a",t)}function UA(e,t){I_(e,"da",t)}function I_(e,t,n=Kt){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ic(t,s,n),n){let r=n.parent;for(;r&&r.parent;)A_(r.parent.vnode)&&FA(s,t,n,r),r=r.parent}}function FA(e,t,n,s){const r=Ic(t,e,s,!0);R_(()=>{Th(s[t],r)},n)}function Ic(e,t,n=Kt,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Jr(),Nr(n);const a=Ge(t,n,e,o);return xs(),Zr(),a});return s?r.unshift(i):r.push(i),i}}const Fn=e=>(t,n=Kt)=>(!zi||e==="sp")&&Ic(e,(...s)=>t(...s),n),$A=Fn("bm"),b_=Fn("m"),BA=Fn("bu"),jA=Fn("u"),qA=Fn("bum"),R_=Fn("um"),HA=Fn("sp"),WA=Fn("rtg"),KA=Fn("rtc");function zA(e,t=Kt){Ic("ec",e,t)}const S_="components";function C_(e,t){return QA(S_,e,!0,t)||e}const GA=Symbol.for("v-ndc");function QA(e,t,n=!0,s=!1){const r=Pe||Kt;if(r){const i=r.type;if(e===S_){const a=SI(i,!1);if(a&&(a===t||a===_n(t)||a===vc(_n(t))))return i}const o=zf(r[e]||i[e],t)||zf(r.appContext[e],t);return!o&&s?i:o}}function zf(e,t){return e&&(e[t]||e[_n(t)]||e[vc(_n(t))])}function YA(e,t,n,s){let r;const i=n&&n[s];if(tt(e)||Ht(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(Ot(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=t(e[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Tu=e=>e?F_(e)?Cc(e)||e.proxy:Tu(e.parent):null,Ci=zt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tu(e.parent),$root:e=>Tu(e.root),$emit:e=>e.emit,$options:e=>Mh(e),$forceUpdate:e=>e.f||(e.f=()=>Vh(e.update)),$nextTick:e=>e.n||(e.n=Lh.bind(e.proxy)),$watch:e=>VA.bind(e)}),Sl=(e,t)=>e!==Rt&&!e.__isScriptSetup&&mt(e,t),XA={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Sl(s,t))return o[t]=1,s[t];if(r!==Rt&&mt(r,t))return o[t]=2,r[t];if((l=e.propsOptions[0])&&mt(l,t))return o[t]=3,i[t];if(n!==Rt&&mt(n,t))return o[t]=4,n[t];wu&&(o[t]=0)}}const u=Ci[t];let h,d;if(u)return t==="$attrs"&&Ae(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==Rt&&mt(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,mt(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Sl(r,t)?(r[t]=n,!0):s!==Rt&&mt(s,t)?(s[t]=n,!0):mt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==Rt&&mt(e,o)||Sl(t,o)||(a=i[0])&&mt(a,o)||mt(s,o)||mt(Ci,o)||mt(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:mt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Gf(e){return tt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let wu=!0;function JA(e){const t=Mh(e),n=e.proxy,s=e.ctx;wu=!1,t.beforeCreate&&Qf(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:v,beforeDestroy:A,beforeUnmount:R,destroyed:N,unmounted:w,render:U,renderTracked:$,renderTriggered:Y,errorCaptured:q,serverPrefetch:j,expose:J,inheritAttrs:pt,components:bt,directives:At,filters:he}=t;if(l&&ZA(l,s,null),o)for(const ct in o){const ht=o[ct];at(ht)&&(s[ct]=ht.bind(n))}if(r){const ct=r.call(n,n);Ot(ct)&&(e.data=po(ct))}if(wu=!0,i)for(const ct in i){const ht=i[ct],Yt=at(ht)?ht.bind(n,n):at(ht.get)?ht.get.bind(n,n):ze,Ie=!at(ht)&&at(ht.set)?ht.set.bind(n):ze,_e=Me({get:Yt,set:Ie});Object.defineProperty(s,ct,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Mt=>_e.value=Mt})}if(a)for(const ct in a)P_(a[ct],s,n,ct);if(c){const ct=at(c)?c.call(n):c;Reflect.ownKeys(ct).forEach(ht=>{Ta(ht,ct[ht])})}u&&Qf(u,e,"c");function et(ct,ht){tt(ht)?ht.forEach(Yt=>ct(Yt.bind(n))):ht&&ct(ht.bind(n))}if(et($A,h),et(b_,d),et(BA,f),et(jA,g),et(MA,y),et(UA,v),et(zA,q),et(KA,$),et(WA,Y),et(qA,R),et(R_,w),et(HA,j),tt(J))if(J.length){const ct=e.exposed||(e.exposed={});J.forEach(ht=>{Object.defineProperty(ct,ht,{get:()=>n[ht],set:Yt=>n[ht]=Yt})})}else e.exposed||(e.exposed={});U&&e.render===ze&&(e.render=U),pt!=null&&(e.inheritAttrs=pt),bt&&(e.components=bt),At&&(e.directives=At)}function ZA(e,t,n=ze){tt(e)&&(e=Au(e));for(const s in e){const r=e[s];let i;Ot(r)?"default"in r?i=Qe(r.from||s,r.default,!0):i=Qe(r.from||s):i=Qe(r),Lt(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function Qf(e,t,n){Ge(tt(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function P_(e,t,n,s){const r=s.includes(".")?T_(n,s):()=>n[s];if(Ht(e)){const i=t[e];at(i)&&Si(r,i)}else if(at(e))Si(r,e.bind(n));else if(Ot(e))if(tt(e))e.forEach(i=>P_(i,t,n,s));else{const i=at(e.handler)?e.handler.bind(n):t[e.handler];at(i)&&Si(r,i,e)}}function Mh(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(l=>Fa(c,l,o,!0)),Fa(c,t,o)),Ot(t)&&i.set(t,c),c}function Fa(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Fa(e,i,n,!0),r&&r.forEach(o=>Fa(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=tI[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const tI={data:Yf,props:Xf,emits:Xf,methods:Ti,computed:Ti,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Ti,directives:Ti,watch:nI,provide:Yf,inject:eI};function Yf(e,t){return t?e?function(){return zt(at(e)?e.call(this,this):e,at(t)?t.call(this,this):t)}:t:e}function eI(e,t){return Ti(Au(e),Au(t))}function Au(e){if(tt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ti(e,t){return e?zt(Object.create(null),e,t):t}function Xf(e,t){return e?tt(e)&&tt(t)?[...new Set([...e,...t])]:zt(Object.create(null),Gf(e),Gf(t??{})):t}function nI(e,t){if(!e)return t;if(!t)return e;const n=zt(Object.create(null),e);for(const s in t)n[s]=fe(e[s],t[s]);return n}function O_(){return{app:null,config:{isNativeTag:Cw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sI=0;function rI(e,t){return function(s,r=null){at(s)||(s=zt({},s)),r!=null&&!Ot(r)&&(r=null);const i=O_(),o=new Set;let a=!1;const c=i.app={_uid:sI++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:NI,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&at(l.install)?(o.add(l),l.install(c,...u)):at(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Zt(s,r);return d.appContext=i,u&&t?t(d,l):e(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Cc(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Wi=c;try{return l()}finally{Wi=null}}};return c}}let Wi=null;function Ta(e,t){if(Kt){let n=Kt.provides;const s=Kt.parent&&Kt.parent.provides;s===n&&(n=Kt.provides=Object.create(s)),n[e]=t}}function Qe(e,t,n=!1){const s=Kt||Pe;if(s||Wi){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Wi._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&at(t)?t.call(s&&s.proxy):t}}function iI(){return!!(Kt||Pe||Wi)}function oI(e,t,n,s=!1){const r={},i={};La(i,Rc,1),e.propsDefaults=Object.create(null),N_(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:o_(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function aI(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=gt(r),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ac(e.emitsOptions,d))continue;const f=t[d];if(c)if(mt(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const g=_n(d);r[g]=Iu(c,a,g,f,e,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{N_(e,t,r,i)&&(l=!0);let u;for(const h in a)(!t||!mt(t,h)&&((u=Xr(h))===h||!mt(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Iu(c,a,h,void 0,e,!0)):delete r[h]);if(i!==a)for(const h in i)(!t||!mt(t,h))&&(delete i[h],l=!0)}l&&On(e,"set","$attrs")}function N_(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(va(c))continue;const l=t[c];let u;r&&mt(r,u=_n(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ac(e.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=gt(n),l=a||Rt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Iu(r,c,h,l[h],e,!mt(l,h))}}return o}function Iu(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=mt(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&at(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Nr(r),s=l[n]=c.call(null,t),xs())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Xr(n))&&(s=!0))}return s}function D_(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!at(e)){const u=h=>{c=!0;const[d,f]=D_(h,t,!0);zt(o,d),f&&a.push(...f)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return Ot(e)&&s.set(e,vr),vr;if(tt(i))for(let u=0;u<i.length;u++){const h=_n(i[u]);Jf(h)&&(o[h]=Rt)}else if(i)for(const u in i){const h=_n(u);if(Jf(h)){const d=i[u],f=o[h]=tt(d)||at(d)?{type:d}:zt({},d);if(f){const g=ep(Boolean,f.type),y=ep(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||mt(f,"default"))&&a.push(h)}}}const l=[o,a];return Ot(e)&&s.set(e,l),l}function Jf(e){return e[0]!=="$"}function Zf(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function tp(e,t){return Zf(e)===Zf(t)}function ep(e,t){return tt(t)?t.findIndex(n=>tp(n,e)):at(t)&&tp(t,e)?0:-1}const k_=e=>e[0]==="_"||e==="$stable",Uh=e=>tt(e)?e.map(rn):[rn(e)],cI=(e,t,n)=>{if(t._n)return t;const s=v_((...r)=>Uh(t(...r)),n);return s._c=!1,s},x_=(e,t,n)=>{const s=e._ctx;for(const r in e){if(k_(r))continue;const i=e[r];if(at(i))t[r]=cI(r,i,s);else if(i!=null){const o=Uh(i);t[r]=()=>o}}},L_=(e,t)=>{const n=Uh(t);e.slots.default=()=>n},lI=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=gt(t),La(t,"_",n)):x_(t,e.slots={})}else e.slots={},t&&L_(e,t);La(e.slots,Rc,1)},uI=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=Rt;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(zt(r,t),!n&&a===1&&delete r._):(i=!t.$stable,x_(t,r)),o=t}else t&&(L_(e,t),o={default:1});if(i)for(const a in r)!k_(a)&&!(a in o)&&delete r[a]};function bu(e,t,n,s,r=!1){if(tt(e)){e.forEach((d,f)=>bu(d,t&&(tt(t)?t[f]:t),n,s,r));return}if(Ea(s)&&!r)return;const i=s.shapeFlag&4?Cc(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===Rt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ht(l)?(u[l]=null,mt(h,l)&&(h[l]=null)):Lt(l)&&(l.value=null)),at(c))ss(c,a,12,[o,u]);else{const d=Ht(c),f=Lt(c);if(d||f){const g=()=>{if(e.f){const y=d?mt(h,c)?h[c]:u[c]:c.value;r?tt(y)&&Th(y,i):tt(y)?y.includes(i)||y.push(i):d?(u[c]=[i],mt(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else d?(u[c]=o,mt(h,c)&&(h[c]=o)):f&&(c.value=o,e.k&&(u[e.k]=o))};o?(g.id=-1,ye(g,n)):g()}}}const ye=LA;function hI(e){return dI(e)}function dI(e,t){const n=gu();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=ze,insertStaticContent:g}=e,y=(p,m,_,E=null,b=null,S=null,F=!1,D=null,k=!!m.dynamicChildren)=>{if(p===m)return;p&&!di(p,m)&&(E=I(p),Mt(p,b,S,!0),p=null),m.patchFlag===-2&&(k=!1,m.dynamicChildren=null);const{type:P,ref:z,shapeFlag:B}=m;switch(P){case bc:v(p,m,_,E);break;case Fs:A(p,m,_,E);break;case wa:p==null&&R(m,_,E,F);break;case sn:bt(p,m,_,E,b,S,F,D,k);break;default:B&1?U(p,m,_,E,b,S,F,D,k):B&6?At(p,m,_,E,b,S,F,D,k):(B&64||B&128)&&P.process(p,m,_,E,b,S,F,D,k,x)}z!=null&&b&&bu(z,p&&p.ref,S,m||p,!m)},v=(p,m,_,E)=>{if(p==null)s(m.el=a(m.children),_,E);else{const b=m.el=p.el;m.children!==p.children&&l(b,m.children)}},A=(p,m,_,E)=>{p==null?s(m.el=c(m.children||""),_,E):m.el=p.el},R=(p,m,_,E)=>{[p.el,p.anchor]=g(p.children,m,_,E,p.el,p.anchor)},N=({el:p,anchor:m},_,E)=>{let b;for(;p&&p!==m;)b=d(p),s(p,_,E),p=b;s(m,_,E)},w=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),r(p),p=_;r(m)},U=(p,m,_,E,b,S,F,D,k)=>{F=F||m.type==="svg",p==null?$(m,_,E,b,S,F,D,k):j(p,m,b,S,F,D,k)},$=(p,m,_,E,b,S,F,D)=>{let k,P;const{type:z,props:B,shapeFlag:K,transition:X,dirs:lt}=p;if(k=p.el=o(p.type,S,B&&B.is,B),K&8?u(k,p.children):K&16&&q(p.children,k,null,E,b,S&&z!=="foreignObject",F,D),lt&&Ts(p,null,E,"created"),Y(k,p,p.scopeId,F,E),B){for(const yt in B)yt!=="value"&&!va(yt)&&i(k,yt,null,B[yt],S,p.children,E,b,kt);"value"in B&&i(k,"value",null,B.value),(P=B.onVnodeBeforeMount)&&nn(P,E,p)}lt&&Ts(p,null,E,"beforeMount");const Et=(!b||b&&!b.pendingBranch)&&X&&!X.persisted;Et&&X.beforeEnter(k),s(k,m,_),((P=B&&B.onVnodeMounted)||Et||lt)&&ye(()=>{P&&nn(P,E,p),Et&&X.enter(k),lt&&Ts(p,null,E,"mounted")},b)},Y=(p,m,_,E,b)=>{if(_&&f(p,_),E)for(let S=0;S<E.length;S++)f(p,E[S]);if(b){let S=b.subTree;if(m===S){const F=b.vnode;Y(p,F,F.scopeId,F.slotScopeIds,b.parent)}}},q=(p,m,_,E,b,S,F,D,k=0)=>{for(let P=k;P<p.length;P++){const z=p[P]=D?zn(p[P]):rn(p[P]);y(null,z,m,_,E,b,S,F,D)}},j=(p,m,_,E,b,S,F)=>{const D=m.el=p.el;let{patchFlag:k,dynamicChildren:P,dirs:z}=m;k|=p.patchFlag&16;const B=p.props||Rt,K=m.props||Rt;let X;_&&ws(_,!1),(X=K.onVnodeBeforeUpdate)&&nn(X,_,m,p),z&&Ts(m,p,_,"beforeUpdate"),_&&ws(_,!0);const lt=b&&m.type!=="foreignObject";if(P?J(p.dynamicChildren,P,D,_,E,lt,S):F||ht(p,m,D,null,_,E,lt,S,!1),k>0){if(k&16)pt(D,m,B,K,_,E,b);else if(k&2&&B.class!==K.class&&i(D,"class",null,K.class,b),k&4&&i(D,"style",B.style,K.style,b),k&8){const Et=m.dynamicProps;for(let yt=0;yt<Et.length;yt++){const Ut=Et[yt],He=B[Ut],nr=K[Ut];(nr!==He||Ut==="value")&&i(D,Ut,He,nr,b,p.children,_,E,kt)}}k&1&&p.children!==m.children&&u(D,m.children)}else!F&&P==null&&pt(D,m,B,K,_,E,b);((X=K.onVnodeUpdated)||z)&&ye(()=>{X&&nn(X,_,m,p),z&&Ts(m,p,_,"updated")},E)},J=(p,m,_,E,b,S,F)=>{for(let D=0;D<m.length;D++){const k=p[D],P=m[D],z=k.el&&(k.type===sn||!di(k,P)||k.shapeFlag&70)?h(k.el):_;y(k,P,z,null,E,b,S,F,!0)}},pt=(p,m,_,E,b,S,F)=>{if(_!==E){if(_!==Rt)for(const D in _)!va(D)&&!(D in E)&&i(p,D,_[D],null,F,m.children,b,S,kt);for(const D in E){if(va(D))continue;const k=E[D],P=_[D];k!==P&&D!=="value"&&i(p,D,P,k,F,m.children,b,S,kt)}"value"in E&&i(p,"value",_.value,E.value)}},bt=(p,m,_,E,b,S,F,D,k)=>{const P=m.el=p?p.el:a(""),z=m.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:K,slotScopeIds:X}=m;X&&(D=D?D.concat(X):X),p==null?(s(P,_,E),s(z,_,E),q(m.children,_,z,b,S,F,D,k)):B>0&&B&64&&K&&p.dynamicChildren?(J(p.dynamicChildren,K,_,b,S,F,D),(m.key!=null||b&&m===b.subTree)&&V_(p,m,!0)):ht(p,m,_,z,b,S,F,D,k)},At=(p,m,_,E,b,S,F,D,k)=>{m.slotScopeIds=D,p==null?m.shapeFlag&512?b.ctx.activate(m,_,E,F,k):he(m,_,E,b,S,F,k):Vt(p,m,k)},he=(p,m,_,E,b,S,F)=>{const D=p.component=wI(p,E,b);if(A_(p)&&(D.ctx.renderer=x),AI(D),D.asyncDep){if(b&&b.registerDep(D,et),!p.el){const k=D.subTree=Zt(Fs);A(null,k,m,_)}return}et(D,p,m,_,b,S,F)},Vt=(p,m,_)=>{const E=m.component=p.component;if(DA(p,m,_))if(E.asyncDep&&!E.asyncResolved){ct(E,m,_);return}else E.next=m,RA(E.update),E.update();else m.el=p.el,E.vnode=m},et=(p,m,_,E,b,S,F)=>{const D=()=>{if(p.isMounted){let{next:z,bu:B,u:K,parent:X,vnode:lt}=p,Et=z,yt;ws(p,!1),z?(z.el=lt.el,ct(p,z,F)):z=lt,B&&bl(B),(yt=z.props&&z.props.onVnodeBeforeUpdate)&&nn(yt,X,z,lt),ws(p,!0);const Ut=Rl(p),He=p.subTree;p.subTree=Ut,y(He,Ut,h(He.el),I(He),p,b,S),z.el=Ut.el,Et===null&&kA(p,Ut.el),K&&ye(K,b),(yt=z.props&&z.props.onVnodeUpdated)&&ye(()=>nn(yt,X,z,lt),b)}else{let z;const{el:B,props:K}=m,{bm:X,m:lt,parent:Et}=p,yt=Ea(m);if(ws(p,!1),X&&bl(X),!yt&&(z=K&&K.onVnodeBeforeMount)&&nn(z,Et,m),ws(p,!0),B&&dt){const Ut=()=>{p.subTree=Rl(p),dt(B,p.subTree,p,b,null)};yt?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ut()):Ut()}else{const Ut=p.subTree=Rl(p);y(null,Ut,_,E,p,b,S),m.el=Ut.el}if(lt&&ye(lt,b),!yt&&(z=K&&K.onVnodeMounted)){const Ut=m;ye(()=>nn(z,Et,Ut),b)}(m.shapeFlag&256||Et&&Ea(Et.vnode)&&Et.vnode.shapeFlag&256)&&p.a&&ye(p.a,b),p.isMounted=!0,m=_=E=null}},k=p.effect=new Sh(D,()=>Vh(P),p.scope),P=p.update=()=>k.run();P.id=p.uid,ws(p,!0),P()},ct=(p,m,_)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,aI(p,m.props,E,_),uI(p,m.children,_),Jr(),Wf(),Zr()},ht=(p,m,_,E,b,S,F,D,k=!1)=>{const P=p&&p.children,z=p?p.shapeFlag:0,B=m.children,{patchFlag:K,shapeFlag:X}=m;if(K>0){if(K&128){Ie(P,B,_,E,b,S,F,D,k);return}else if(K&256){Yt(P,B,_,E,b,S,F,D,k);return}}X&8?(z&16&&kt(P,b,S),B!==P&&u(_,B)):z&16?X&16?Ie(P,B,_,E,b,S,F,D,k):kt(P,b,S,!0):(z&8&&u(_,""),X&16&&q(B,_,E,b,S,F,D,k))},Yt=(p,m,_,E,b,S,F,D,k)=>{p=p||vr,m=m||vr;const P=p.length,z=m.length,B=Math.min(P,z);let K;for(K=0;K<B;K++){const X=m[K]=k?zn(m[K]):rn(m[K]);y(p[K],X,_,null,b,S,F,D,k)}P>z?kt(p,b,S,!0,!1,B):q(m,_,E,b,S,F,D,k,B)},Ie=(p,m,_,E,b,S,F,D,k)=>{let P=0;const z=m.length;let B=p.length-1,K=z-1;for(;P<=B&&P<=K;){const X=p[P],lt=m[P]=k?zn(m[P]):rn(m[P]);if(di(X,lt))y(X,lt,_,null,b,S,F,D,k);else break;P++}for(;P<=B&&P<=K;){const X=p[B],lt=m[K]=k?zn(m[K]):rn(m[K]);if(di(X,lt))y(X,lt,_,null,b,S,F,D,k);else break;B--,K--}if(P>B){if(P<=K){const X=K+1,lt=X<z?m[X].el:E;for(;P<=K;)y(null,m[P]=k?zn(m[P]):rn(m[P]),_,lt,b,S,F,D,k),P++}}else if(P>K)for(;P<=B;)Mt(p[P],b,S,!0),P++;else{const X=P,lt=P,Et=new Map;for(P=lt;P<=K;P++){const Se=m[P]=k?zn(m[P]):rn(m[P]);Se.key!=null&&Et.set(Se.key,P)}let yt,Ut=0;const He=K-lt+1;let nr=!1,xf=0;const hi=new Array(He);for(P=0;P<He;P++)hi[P]=0;for(P=X;P<=B;P++){const Se=p[P];if(Ut>=He){Mt(Se,b,S,!0);continue}let en;if(Se.key!=null)en=Et.get(Se.key);else for(yt=lt;yt<=K;yt++)if(hi[yt-lt]===0&&di(Se,m[yt])){en=yt;break}en===void 0?Mt(Se,b,S,!0):(hi[en-lt]=P+1,en>=xf?xf=en:nr=!0,y(Se,m[en],_,null,b,S,F,D,k),Ut++)}const Lf=nr?fI(hi):vr;for(yt=Lf.length-1,P=He-1;P>=0;P--){const Se=lt+P,en=m[Se],Vf=Se+1<z?m[Se+1].el:E;hi[P]===0?y(null,en,_,Vf,b,S,F,D,k):nr&&(yt<0||P!==Lf[yt]?_e(en,_,Vf,2):yt--)}}},_e=(p,m,_,E,b=null)=>{const{el:S,type:F,transition:D,children:k,shapeFlag:P}=p;if(P&6){_e(p.component.subTree,m,_,E);return}if(P&128){p.suspense.move(m,_,E);return}if(P&64){F.move(p,m,_,x);return}if(F===sn){s(S,m,_);for(let B=0;B<k.length;B++)_e(k[B],m,_,E);s(p.anchor,m,_);return}if(F===wa){N(p,m,_);return}if(E!==2&&P&1&&D)if(E===0)D.beforeEnter(S),s(S,m,_),ye(()=>D.enter(S),b);else{const{leave:B,delayLeave:K,afterLeave:X}=D,lt=()=>s(S,m,_),Et=()=>{B(S,()=>{lt(),X&&X()})};K?K(S,lt,Et):Et()}else s(S,m,_)},Mt=(p,m,_,E=!1,b=!1)=>{const{type:S,props:F,ref:D,children:k,dynamicChildren:P,shapeFlag:z,patchFlag:B,dirs:K}=p;if(D!=null&&bu(D,null,_,p,!0),z&256){m.ctx.deactivate(p);return}const X=z&1&&K,lt=!Ea(p);let Et;if(lt&&(Et=F&&F.onVnodeBeforeUnmount)&&nn(Et,m,p),z&6)Re(p.component,_,E);else{if(z&128){p.suspense.unmount(_,E);return}X&&Ts(p,null,m,"beforeUnmount"),z&64?p.type.remove(p,m,_,b,x,E):P&&(S!==sn||B>0&&B&64)?kt(P,m,_,!1,!0):(S===sn&&B&384||!b&&z&16)&&kt(k,m,_),E&&qe(p)}(lt&&(Et=F&&F.onVnodeUnmounted)||X)&&ye(()=>{Et&&nn(Et,m,p),X&&Ts(p,null,m,"unmounted")},_)},qe=p=>{const{type:m,el:_,anchor:E,transition:b}=p;if(m===sn){be(_,E);return}if(m===wa){w(p);return}const S=()=>{r(_),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(p.shapeFlag&1&&b&&!b.persisted){const{leave:F,delayLeave:D}=b,k=()=>F(_,S);D?D(p.el,S,k):k()}else S()},be=(p,m)=>{let _;for(;p!==m;)_=d(p),r(p),p=_;r(m)},Re=(p,m,_)=>{const{bum:E,scope:b,update:S,subTree:F,um:D}=p;E&&bl(E),b.stop(),S&&(S.active=!1,Mt(F,p,m,_)),D&&ye(D,m),ye(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},kt=(p,m,_,E=!1,b=!1,S=0)=>{for(let F=S;F<p.length;F++)Mt(p[F],m,_,E,b)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),M=(p,m,_)=>{p==null?m._vnode&&Mt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,_),Wf(),m_(),m._vnode=p},x={p:y,um:Mt,m:_e,r:qe,mt:he,mc:q,pc:ht,pbc:J,n:I,o:e};let W,dt;return t&&([W,dt]=t(x)),{render:M,hydrate:W,createApp:rI(M,W)}}function ws({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function V_(e,t,n=!1){const s=e.children,r=t.children;if(tt(s)&&tt(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=zn(r[i]),a.el=o.el),n||V_(o,a)),a.type===bc&&(a.el=o.el)}}function fI(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(r=n[n.length-1],e[r]<l){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const pI=e=>e.__isTeleport,sn=Symbol.for("v-fgt"),bc=Symbol.for("v-txt"),Fs=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),Pi=[];let Ke=null;function ks(e=!1){Pi.push(Ke=e?null:[])}function mI(){Pi.pop(),Ke=Pi[Pi.length-1]||null}let Ki=1;function np(e){Ki+=e}function M_(e){return e.dynamicChildren=Ki>0?Ke||vr:null,mI(),Ki>0&&Ke&&Ke.push(e),e}function $a(e,t,n,s,r,i){return M_(it(e,t,n,s,r,i,!0))}function Fh(e,t,n,s,r){return M_(Zt(e,t,n,s,r,!0))}function Ru(e){return e?e.__v_isVNode===!0:!1}function di(e,t){return e.type===t.type&&e.key===t.key}const Rc="__vInternal",U_=({key:e})=>e??null,Aa=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ht(e)||Lt(e)||at(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function it(e,t=null,n=null,s=0,r=null,i=e===sn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&U_(t),ref:t&&Aa(t),scopeId:y_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return a?($h(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Ht(n)?8:16),Ki>0&&!o&&Ke&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ke.push(c),c}const Zt=gI;function gI(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===GA)&&(e=Fs),Ru(e)){const a=Or(e,t,!0);return n&&$h(a,n),Ki>0&&!i&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(e)]=a:Ke.push(a)),a.patchFlag|=-2,a}if(CI(e)&&(e=e.__vccOpts),t){t=_I(t);let{class:a,style:c}=t;a&&!Ht(a)&&(t.class=bh(a)),Ot(c)&&(c_(c)&&!tt(c)&&(c=zt({},c)),t.style=Ih(c))}const o=Ht(e)?1:xA(e)?128:pI(e)?64:Ot(e)?4:at(e)?2:0;return it(e,t,n,s,r,o,i,!0)}function _I(e){return e?c_(e)||Rc in e?zt({},e):e:null}function Or(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?vI(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&U_(a),ref:t&&t.ref?n&&r?tt(r)?r.concat(Aa(t)):[r,Aa(t)]:Aa(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==sn?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Or(e.ssContent),ssFallback:e.ssFallback&&Or(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function yI(e=" ",t=0){return Zt(bc,null,e,t)}function Sc(e,t){const n=Zt(wa,null,e);return n.staticCount=t,n}function zU(e="",t=!1){return t?(ks(),Fh(Fs,null,e)):Zt(Fs,null,e)}function rn(e){return e==null||typeof e=="boolean"?Zt(Fs):tt(e)?Zt(sn,null,e.slice()):typeof e=="object"?zn(e):Zt(bc,null,String(e))}function zn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Or(e)}function $h(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(tt(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),$h(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Rc in t)?t._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else at(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),s&64?(n=16,t=[yI(t)]):n=8);e.children=t,e.shapeFlag|=n}function vI(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=bh([t.class,s.class]));else if(r==="style")t.style=Ih([t.style,s.style]);else if(gc(r)){const i=t[r],o=s[r];o&&i!==o&&!(tt(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function nn(e,t,n,s=null){Ge(e,t,7,[n,s])}const EI=O_();let TI=0;function wI(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||EI,i={uid:TI++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new zg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:D_(s,r),emitsOptions:__(s,r),emit:null,emitted:null,propsDefaults:Rt,inheritAttrs:s.inheritAttrs,ctx:Rt,data:Rt,props:Rt,attrs:Rt,slots:Rt,refs:Rt,setupState:Rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=PA.bind(null,i),e.ce&&e.ce(i),i}let Kt=null,Bh,sr,sp="__VUE_INSTANCE_SETTERS__";(sr=gu()[sp])||(sr=gu()[sp]=[]),sr.push(e=>Kt=e),Bh=e=>{sr.length>1?sr.forEach(t=>t(e)):sr[0](e)};const Nr=e=>{Bh(e),e.scope.on()},xs=()=>{Kt&&Kt.scope.off(),Bh(null)};function F_(e){return e.vnode.shapeFlag&4}let zi=!1;function AI(e,t=!1){zi=t;const{props:n,children:s}=e.vnode,r=F_(e);oI(e,n,r,t),lI(e,s);const i=r?II(e,t):void 0;return zi=!1,i}function II(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Tc(new Proxy(e.ctx,XA));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?RI(e):null;Nr(e),Jr();const i=ss(s,e,0,[e.props,r]);if(Zr(),xs(),jg(i)){if(i.then(xs,xs),t)return i.then(o=>{rp(e,o,t)}).catch(o=>{wc(o,e,0)});e.asyncDep=i}else rp(e,i,t)}else $_(e,t)}function rp(e,t,n){at(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ot(t)&&(e.setupState=d_(t)),$_(e,n)}let ip;function $_(e,t,n){const s=e.type;if(!e.render){if(!t&&ip&&!s.render){const r=s.template||Mh(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,l=zt(zt({isCustomElement:i,delimiters:a},o),c);s.render=ip(r,l)}}e.render=s.render||ze}Nr(e),Jr(),JA(e),Zr(),xs()}function bI(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}}))}function RI(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return bI(e)},slots:e.slots,emit:e.emit,expose:t}}function Cc(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(d_(Tc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ci)return Ci[n](e)},has(t,n){return n in t||n in Ci}}))}function SI(e,t=!0){return at(e)?e.displayName||e.name:e.name||t&&e.__name}function CI(e){return at(e)&&"__vccOpts"in e}const Me=(e,t)=>AA(e,t,zi);function B_(e,t,n){const s=arguments.length;return s===2?Ot(t)&&!tt(t)?Ru(t)?Zt(e,null,[t]):Zt(e,t):Zt(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ru(n)&&(n=[n]),Zt(e,t,n))}const PI=Symbol.for("v-scx"),OI=()=>Qe(PI),NI="3.3.4",DI="http://www.w3.org/2000/svg",bs=typeof document<"u"?document:null,op=bs&&bs.createElement("template"),kI={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?bs.createElementNS(DI,e):bs.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>bs.createTextNode(e),createComment:e=>bs.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bs.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{op.innerHTML=s?`<svg>${e}</svg>`:e;const a=op.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function xI(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function LI(e,t,n){const s=e.style,r=Ht(n);if(n&&!r){if(t&&!Ht(t))for(const i in t)n[i]==null&&Su(s,i,"");for(const i in n)Su(s,i,n[i])}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const ap=/\s*!important$/;function Su(e,t,n){if(tt(n))n.forEach(s=>Su(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=VI(e,t);ap.test(n)?e.setProperty(Xr(s),n.replace(ap,""),"important"):e[s]=n}}const cp=["Webkit","Moz","ms"],Cl={};function VI(e,t){const n=Cl[t];if(n)return n;let s=_n(t);if(s!=="filter"&&s in e)return Cl[t]=s;s=vc(s);for(let r=0;r<cp.length;r++){const i=cp[r]+s;if(i in e)return Cl[t]=i}return t}const lp="http://www.w3.org/1999/xlink";function MI(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(lp,t.slice(6,t.length)):e.setAttributeNS(lp,t,n);else{const i=$w(t);n==null||i&&!Wg(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function UI(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Wg(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function FI(e,t,n,s){e.addEventListener(t,n,s)}function $I(e,t,n,s){e.removeEventListener(t,n,s)}function BI(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=jI(t);if(s){const l=i[t]=WI(s,r);FI(e,a,l,c)}else o&&($I(e,a,o,c),i[t]=void 0)}}const up=/(?:Once|Passive|Capture)$/;function jI(e){let t;if(up.test(e)){t={};let s;for(;s=e.match(up);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xr(e.slice(2)),t]}let Pl=0;const qI=Promise.resolve(),HI=()=>Pl||(qI.then(()=>Pl=0),Pl=Date.now());function WI(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ge(KI(s,n.value),t,5,[s])};return n.value=e,n.attached=HI(),n}function KI(e,t){if(tt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const hp=/^on[a-z]/,zI=(e,t,n,s,r=!1,i,o,a,c)=>{t==="class"?xI(e,s,r):t==="style"?LI(e,n,s):gc(t)?Eh(t)||BI(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):GI(e,t,s,r))?UI(e,t,s,i,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),MI(e,t,s,r))};function GI(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&hp.test(t)&&at(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||hp.test(t)&&Ht(n)?!1:t in e}const QI=["ctrl","shift","alt","meta"],YI={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>QI.some(n=>e[`${n}Key`]&&!t.includes(n))},GU=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const i=YI[t[r]];if(i&&i(n,t))return}return e(n,...s)},QU={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):fi(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),fi(e,!0),s.enter(e)):s.leave(e,()=>{fi(e,!1)}):fi(e,t))},beforeUnmount(e,{value:t}){fi(e,t)}};function fi(e,t){e.style.display=t?e._vod:"none"}const XI=zt({patchProp:zI},kI);let dp;function JI(){return dp||(dp=hI(XI))}const ZI=(...e)=>{const t=JI().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=tb(s);if(!r)return;const i=t._component;!at(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function tb(e){return Ht(e)?document.querySelector(e):e}var eb=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let j_;const Pc=e=>j_=e,q_=Symbol();function Cu(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Oi;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Oi||(Oi={}));function nb(){const e=Gg(!0),t=e.run(()=>kh({}));let n=[],s=[];const r=Tc({install(i){Pc(r),r._a=i,i.provide(q_,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!eb?s.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const H_=()=>{};function fp(e,t,n,s=H_){e.push(t);const r=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),s())};return!n&&Qg()&&jw(r),r}function rr(e,...t){e.slice().forEach(n=>{n(...t)})}const sb=e=>e();function Pu(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],r=e[n];Cu(r)&&Cu(s)&&e.hasOwnProperty(n)&&!Lt(s)&&!ns(s)?e[n]=Pu(r,s):e[n]=s}return e}const rb=Symbol();function ib(e){return!Cu(e)||!e.hasOwnProperty(rb)}const{assign:Kn}=Object;function ob(e){return!!(Lt(e)&&e.effect)}function ab(e,t,n,s){const{state:r,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=r?r():{});const u=vA(n.state.value[e]);return Kn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Tc(Me(()=>{Pc(n);const f=n._s.get(e);return o[d].call(f,f)})),h),{}))}return c=W_(e,l,t,n,s,!0),c}function W_(e,t,n={},s,r,i){let o;const a=Kn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const g=s.state.value[e];!i&&!g&&(s.state.value[e]={}),kh({});let y;function v(q){let j;l=u=!1,typeof q=="function"?(q(s.state.value[e]),j={type:Oi.patchFunction,storeId:e,events:f}):(Pu(s.state.value[e],q),j={type:Oi.patchObject,payload:q,storeId:e,events:f});const J=y=Symbol();Lh().then(()=>{y===J&&(l=!0)}),u=!0,rr(h,j,s.state.value[e])}const A=i?function(){const{state:j}=n,J=j?j():{};this.$patch(pt=>{Kn(pt,J)})}:H_;function R(){o.stop(),h=[],d=[],s._s.delete(e)}function N(q,j){return function(){Pc(s);const J=Array.from(arguments),pt=[],bt=[];function At(et){pt.push(et)}function he(et){bt.push(et)}rr(d,{args:J,name:q,store:U,after:At,onError:he});let Vt;try{Vt=j.apply(this&&this.$id===e?this:U,J)}catch(et){throw rr(bt,et),et}return Vt instanceof Promise?Vt.then(et=>(rr(pt,et),et)).catch(et=>(rr(bt,et),Promise.reject(et))):(rr(pt,Vt),Vt)}}const w={_p:s,$id:e,$onAction:fp.bind(null,d),$patch:v,$reset:A,$subscribe(q,j={}){const J=fp(h,q,j.detached,()=>pt()),pt=o.run(()=>Si(()=>s.state.value[e],bt=>{(j.flush==="sync"?u:l)&&q({storeId:e,type:Oi.direct,events:f},bt)},Kn({},c,j)));return J},$dispose:R},U=po(w);s._s.set(e,U);const $=s._a&&s._a.runWithContext||sb,Y=s._e.run(()=>(o=Gg(),$(()=>o.run(t))));for(const q in Y){const j=Y[q];if(Lt(j)&&!ob(j)||ns(j))i||(g&&ib(j)&&(Lt(j)?j.value=g[q]:Pu(j,g[q])),s.state.value[e][q]=j);else if(typeof j=="function"){const J=N(q,j);Y[q]=J,a.actions[q]=j}}return Kn(U,Y),Kn(gt(U),Y),Object.defineProperty(U,"$state",{get:()=>s.state.value[e],set:q=>{v(j=>{Kn(j,q)})}}),s._p.forEach(q=>{Kn(U,o.run(()=>q({store:U,app:s._a,pinia:s,options:a})))}),g&&i&&n.hydrate&&n.hydrate(U.$state,g),l=!0,u=!0,U}function cb(e,t,n){let s,r;const i=typeof t=="function";typeof e=="string"?(s=e,r=i?n:t):(r=e,s=e.id);function o(a,c){const l=iI();return a=a||(l?Qe(q_,null):null),a&&Pc(a),a=j_,a._s.has(s)||(i?W_(s,t,r,a):ab(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const lr=typeof window<"u";function lb(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Tt=Object.assign;function Ol(e,t){const n={};for(const s in t){const r=t[s];n[s]=Xe(r)?r.map(e):e(r)}return n}const Ni=()=>{},Xe=Array.isArray,ub=/\/$/,hb=e=>e.replace(ub,"");function Nl(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),r=e(i)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=mb(s??t,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function db(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function pp(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fb(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Dr(t.matched[s],n.matched[r])&&K_(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Dr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function K_(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!pb(e[n],t[n]))return!1;return!0}function pb(e,t){return Xe(e)?mp(e,t):Xe(t)?mp(t,e):e===t}function mp(e,t){return Xe(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function mb(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Gi;(function(e){e.pop="pop",e.push="push"})(Gi||(Gi={}));var Di;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Di||(Di={}));function gb(e){if(!e)if(lr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hb(e)}const _b=/^[^#]+#/;function yb(e,t){return e.replace(_b,"#")+t}function vb(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Oc=()=>({left:window.pageXOffset,top:window.pageYOffset});function Eb(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=vb(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function gp(e,t){return(history.state?history.state.position-t:-1)+e}const Ou=new Map;function Tb(e,t){Ou.set(e,t)}function wb(e){const t=Ou.get(e);return Ou.delete(e),t}let Ab=()=>location.protocol+"//"+location.host;function z_(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let a=r.includes(e.slice(i))?e.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),pp(c,"")}return pp(n,e)+s+r}function Ib(e,t,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const f=z_(e,location),g=n.value,y=t.value;let v=0;if(d){if(n.value=f,t.value=d,o&&o===g){o=null;return}v=y?d.position-y.position:0}else s(f);r.forEach(A=>{A(n.value,g,{delta:v,type:Gi.pop,direction:v?v>0?Di.forward:Di.back:Di.unknown})})};function c(){o=n.value}function l(d){r.push(d);const f=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Tt({},d.state,{scroll:Oc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function _p(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Oc():null}}function bb(e){const{history:t,location:n}=window,s={value:z_(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:Ab()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Tt({},t.state,_p(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Tt({},r.value,t.state,{forward:c,scroll:Oc()});i(u.current,u,!0);const h=Tt({},_p(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Rb(e){e=gb(e);const t=bb(e),n=Ib(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Tt({location:"",base:e,go:s,createHref:yb.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Sb(e){return typeof e=="string"||e&&typeof e=="object"}function G_(e){return typeof e=="string"||typeof e=="symbol"}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q_=Symbol("");var yp;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(yp||(yp={}));function kr(e,t){return Tt(new Error,{type:e,[Q_]:!0},t)}function Tn(e,t){return e instanceof Error&&Q_ in e&&(t==null||!!(e.type&t))}const vp="[^/]+?",Cb={sensitive:!1,strict:!1,start:!0,end:!0},Pb=/[.+*?^${}()[\]/\\]/g;function Ob(e,t){const n=Tt({},Cb,t),s=[];let r=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Pb,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:v,regexp:A}=d;i.push({name:g,repeatable:y,optional:v});const R=A||vp;if(R!==vp){f+=10;try{new RegExp(`(${R})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${R}): `+w.message)}}let N=y?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(N=v&&l.length<2?`(?:/${N})`:"/"+N),v&&(N+="?"),r+=N,f+=20,v&&(f+=-8),y&&(f+=-20),R===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:v}=f,A=g in l?l[g]:"";if(Xe(A)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const R=Xe(A)?A.join("/"):A;if(!R)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Nb(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Db(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Nb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ep(s))return 1;if(Ep(r))return-1}return r.length-s.length}function Ep(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const kb={type:0,value:""},xb=/[a-zA-Z0-9_]/;function Lb(e){if(!e)return[[]];if(e==="/")return[[kb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:xb.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Vb(e,t,n){const s=Ob(Lb(e.path),n),r=Tt(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Mb(e,t){const n=[],s=new Map;t=Ap({strict:!1,end:!0,sensitive:!1},t);function r(u){return s.get(u)}function i(u,h,d){const f=!d,g=Ub(u);g.aliasOf=d&&d.record;const y=Ap(t,u),v=[g];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of N)v.push(Tt({},g,{components:d?d.record.components:g.components,path:w,aliasOf:d?d.record:g}))}let A,R;for(const N of v){const{path:w}=N;if(h&&w[0]!=="/"){const U=h.record.path,$=U[U.length-1]==="/"?"":"/";N.path=h.record.path+(w&&$+w)}if(A=Vb(N,h,y),d?d.alias.push(A):(R=R||A,R!==A&&R.alias.push(A),f&&u.name&&!wp(A)&&o(u.name)),g.children){const U=g.children;for(let $=0;$<U.length;$++)i(U[$],A,d&&d.children[$])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return R?()=>{o(R)}:Ni}function o(u){if(G_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Db(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Y_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wp(u)&&s.set(u.record.name,u)}function l(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw kr(1,{location:u});y=d.record.name,f=Tt(Tp(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&Tp(u.params,d.keys.map(R=>R.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(R=>R.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(R=>R.re.test(h.path)),!d)throw kr(1,{location:u,currentLocation:h});y=d.record.name,f=Tt({},h.params,u.params),g=d.stringify(f)}const v=[];let A=d;for(;A;)v.unshift(A.record),A=A.parent;return{name:y,path:g,params:f,matched:v,meta:$b(v)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Tp(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Ub(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Fb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Fb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function wp(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $b(e){return e.reduce((t,n)=>Tt(t,n.meta),{})}function Ap(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Y_(e,t){return t.children.some(n=>n===e||Y_(e,n))}const X_=/#/g,Bb=/&/g,jb=/\//g,qb=/=/g,Hb=/\?/g,J_=/\+/g,Wb=/%5B/g,Kb=/%5D/g,Z_=/%5E/g,zb=/%60/g,ty=/%7B/g,Gb=/%7C/g,ey=/%7D/g,Qb=/%20/g;function jh(e){return encodeURI(""+e).replace(Gb,"|").replace(Wb,"[").replace(Kb,"]")}function Yb(e){return jh(e).replace(ty,"{").replace(ey,"}").replace(Z_,"^")}function Nu(e){return jh(e).replace(J_,"%2B").replace(Qb,"+").replace(X_,"%23").replace(Bb,"%26").replace(zb,"`").replace(ty,"{").replace(ey,"}").replace(Z_,"^")}function Xb(e){return Nu(e).replace(qb,"%3D")}function Jb(e){return jh(e).replace(X_,"%23").replace(Hb,"%3F")}function Zb(e){return e==null?"":Jb(e).replace(jb,"%2F")}function Ba(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function tR(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(J_," "),o=i.indexOf("="),a=Ba(o<0?i:i.slice(0,o)),c=o<0?null:Ba(i.slice(o+1));if(a in t){let l=t[a];Xe(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Ip(e){let t="";for(let n in e){const s=e[n];if(n=Xb(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Xe(s)?s.map(i=>i&&Nu(i)):[s&&Nu(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function eR(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Xe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const nR=Symbol(""),bp=Symbol(""),qh=Symbol(""),Hh=Symbol(""),Du=Symbol("");function pi(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Gn(e,t,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(kr(4,{from:n,to:t})):h instanceof Error?a(h):Sb(h)?a(kr(2,{from:t,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=e.call(s&&s.instances[r],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Dl(e,t,n,s){const r=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(sR(a)){const l=(a.__vccOpts||a)[t];l&&r.push(Gn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=lb(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[t];return d&&Gn(d,n,s,i,o)()}))}}return r}function sR(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Rp(e){const t=Qe(qh),n=Qe(Hh),s=Me(()=>t.resolve(Ve(e.to))),r=Me(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Dr.bind(null,u));if(d>-1)return d;const f=Sp(c[l-2]);return l>1&&Sp(u)===f&&h[h.length-1].path!==f?h.findIndex(Dr.bind(null,c[l-2])):d}),i=Me(()=>r.value>-1&&aR(n.params,s.value.params)),o=Me(()=>r.value>-1&&r.value===n.matched.length-1&&K_(n.params,s.value.params));function a(c={}){return oR(c)?t[Ve(e.replace)?"replace":"push"](Ve(e.to)).catch(Ni):Promise.resolve()}return{route:s,href:Me(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const rR=w_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rp,setup(e,{slots:t}){const n=po(Rp(e)),{options:s}=Qe(qh),r=Me(()=>({[Cp(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Cp(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:B_("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),iR=rR;function oR(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function aR(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Xe(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Sp(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Cp=(e,t,n)=>e??t??n,cR=w_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Qe(Du),r=Me(()=>e.route||s.value),i=Qe(bp,0),o=Me(()=>{let l=Ve(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Me(()=>r.value.matched[o.value]);Ta(bp,Me(()=>o.value+1)),Ta(nR,a),Ta(Du,r);const c=kh();return Si(()=>[c.value,a.value,e.name],([l,u,h],[d,f,g])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Dr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=e.name,h=a.value,d=h&&h.components[u];if(!d)return Pp(n.default,{Component:d,route:l});const f=h.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,v=B_(d,Tt({},g,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Pp(n.default,{Component:v,route:l})||v}}});function Pp(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ny=cR;function lR(e){const t=Mb(e.routes,e),n=e.parseQuery||tR,s=e.stringifyQuery||Ip,r=e.history,i=pi(),o=pi(),a=pi(),c=gA(qn);let l=qn;lr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ol.bind(null,I=>""+I),h=Ol.bind(null,Zb),d=Ol.bind(null,Ba);function f(I,M){let x,W;return G_(I)?(x=t.getRecordMatcher(I),W=M):W=I,t.addRoute(W,x)}function g(I){const M=t.getRecordMatcher(I);M&&t.removeRoute(M)}function y(){return t.getRoutes().map(I=>I.record)}function v(I){return!!t.getRecordMatcher(I)}function A(I,M){if(M=Tt({},M||c.value),typeof I=="string"){const _=Nl(n,I,M.path),E=t.resolve({path:_.path},M),b=r.createHref(_.fullPath);return Tt(_,E,{params:d(E.params),hash:Ba(_.hash),redirectedFrom:void 0,href:b})}let x;if("path"in I)x=Tt({},I,{path:Nl(n,I.path,M.path).path});else{const _=Tt({},I.params);for(const E in _)_[E]==null&&delete _[E];x=Tt({},I,{params:h(_)}),M.params=h(M.params)}const W=t.resolve(x,M),dt=I.hash||"";W.params=u(d(W.params));const p=db(s,Tt({},I,{hash:Yb(dt),path:W.path})),m=r.createHref(p);return Tt({fullPath:p,hash:dt,query:s===Ip?eR(I.query):I.query||{}},W,{redirectedFrom:void 0,href:m})}function R(I){return typeof I=="string"?Nl(n,I,c.value.path):Tt({},I)}function N(I,M){if(l!==I)return kr(8,{from:M,to:I})}function w(I){return Y(I)}function U(I){return w(Tt(R(I),{replace:!0}))}function $(I){const M=I.matched[I.matched.length-1];if(M&&M.redirect){const{redirect:x}=M;let W=typeof x=="function"?x(I):x;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=R(W):{path:W},W.params={}),Tt({query:I.query,hash:I.hash,params:"path"in W?{}:I.params},W)}}function Y(I,M){const x=l=A(I),W=c.value,dt=I.state,p=I.force,m=I.replace===!0,_=$(x);if(_)return Y(Tt(R(_),{state:typeof _=="object"?Tt({},dt,_.state):dt,force:p,replace:m}),M||x);const E=x;E.redirectedFrom=M;let b;return!p&&fb(s,W,x)&&(b=kr(16,{to:E,from:W}),_e(W,W,!0,!1)),(b?Promise.resolve(b):J(E,W)).catch(S=>Tn(S)?Tn(S,2)?S:Ie(S):ht(S,E,W)).then(S=>{if(S){if(Tn(S,2))return Y(Tt({replace:m},R(S.to),{state:typeof S.to=="object"?Tt({},dt,S.to.state):dt,force:p}),M||E)}else S=bt(E,W,!0,m,dt);return pt(E,W,S),S})}function q(I,M){const x=N(I,M);return x?Promise.reject(x):Promise.resolve()}function j(I){const M=be.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(I):I()}function J(I,M){let x;const[W,dt,p]=uR(I,M);x=Dl(W.reverse(),"beforeRouteLeave",I,M);for(const _ of W)_.leaveGuards.forEach(E=>{x.push(Gn(E,I,M))});const m=q.bind(null,I,M);return x.push(m),kt(x).then(()=>{x=[];for(const _ of i.list())x.push(Gn(_,I,M));return x.push(m),kt(x)}).then(()=>{x=Dl(dt,"beforeRouteUpdate",I,M);for(const _ of dt)_.updateGuards.forEach(E=>{x.push(Gn(E,I,M))});return x.push(m),kt(x)}).then(()=>{x=[];for(const _ of p)if(_.beforeEnter)if(Xe(_.beforeEnter))for(const E of _.beforeEnter)x.push(Gn(E,I,M));else x.push(Gn(_.beforeEnter,I,M));return x.push(m),kt(x)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),x=Dl(p,"beforeRouteEnter",I,M),x.push(m),kt(x))).then(()=>{x=[];for(const _ of o.list())x.push(Gn(_,I,M));return x.push(m),kt(x)}).catch(_=>Tn(_,8)?_:Promise.reject(_))}function pt(I,M,x){a.list().forEach(W=>j(()=>W(I,M,x)))}function bt(I,M,x,W,dt){const p=N(I,M);if(p)return p;const m=M===qn,_=lr?history.state:{};x&&(W||m?r.replace(I.fullPath,Tt({scroll:m&&_&&_.scroll},dt)):r.push(I.fullPath,dt)),c.value=I,_e(I,M,x,m),Ie()}let At;function he(){At||(At=r.listen((I,M,x)=>{if(!Re.listening)return;const W=A(I),dt=$(W);if(dt){Y(Tt(dt,{replace:!0}),W).catch(Ni);return}l=W;const p=c.value;lr&&Tb(gp(p.fullPath,x.delta),Oc()),J(W,p).catch(m=>Tn(m,12)?m:Tn(m,2)?(Y(m.to,W).then(_=>{Tn(_,20)&&!x.delta&&x.type===Gi.pop&&r.go(-1,!1)}).catch(Ni),Promise.reject()):(x.delta&&r.go(-x.delta,!1),ht(m,W,p))).then(m=>{m=m||bt(W,p,!1),m&&(x.delta&&!Tn(m,8)?r.go(-x.delta,!1):x.type===Gi.pop&&Tn(m,20)&&r.go(-1,!1)),pt(W,p,m)}).catch(Ni)}))}let Vt=pi(),et=pi(),ct;function ht(I,M,x){Ie(I);const W=et.list();return W.length?W.forEach(dt=>dt(I,M,x)):console.error(I),Promise.reject(I)}function Yt(){return ct&&c.value!==qn?Promise.resolve():new Promise((I,M)=>{Vt.add([I,M])})}function Ie(I){return ct||(ct=!I,he(),Vt.list().forEach(([M,x])=>I?x(I):M()),Vt.reset()),I}function _e(I,M,x,W){const{scrollBehavior:dt}=e;if(!lr||!dt)return Promise.resolve();const p=!x&&wb(gp(I.fullPath,0))||(W||!x)&&history.state&&history.state.scroll||null;return Lh().then(()=>dt(I,M,p)).then(m=>m&&Eb(m)).catch(m=>ht(m,I,M))}const Mt=I=>r.go(I);let qe;const be=new Set,Re={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:v,getRoutes:y,resolve:A,options:e,push:w,replace:U,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:et.add,isReady:Yt,install(I){const M=this;I.component("RouterLink",iR),I.component("RouterView",ny),I.config.globalProperties.$router=M,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(c)}),lr&&!qe&&c.value===qn&&(qe=!0,w(r.location).catch(dt=>{}));const x={};for(const dt in qn)Object.defineProperty(x,dt,{get:()=>c.value[dt],enumerable:!0});I.provide(qh,M),I.provide(Hh,o_(x)),I.provide(Du,c);const W=I.unmount;be.add(I),I.unmount=function(){be.delete(I),be.size<1&&(l=qn,At&&At(),At=null,c.value=qn,qe=!1,ct=!1),W()}}};function kt(I){return I.reduce((M,x)=>M.then(()=>j(x)),Promise.resolve())}return Re}function uR(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Dr(l,a))?s.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Dr(l,c))||r.push(c))}return[n,s,r]}function YU(){return Qe(Hh)}const hR={__name:"App",setup(e){return(t,n)=>(ks(),Fh(Ve(ny)))}},dR="modulepreload",fR=function(e){return"/"+e},Op={},Np=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=fR(i),i in Op)return;Op[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":dR,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},pR="/assets/cincenta-f29c178e.jpg",mR="/assets/1-5aad1b01.jpg",gR="/assets/2-6c6fe12e.jpg",_R="/assets/3-c25a1509.jpg",yR="/assets/navbar-logo-a681098e.svg",vR=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},ER={},TR={class:"navbar navbar-expand-lg navbar-info bg-info fixed-top",id:"mainNav"},wR=Sc('<div class="container-fluid"><a class="navbar-brand" href="#inicio"><img src="'+yR+'" alt="..."></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> Menú <i class="fas fa-bars ms-1"></i></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0"><li class="nav-item"><a class="nav-link" href="#programa">Programación</a></li><li class="nav-item"><a class="nav-link" href="#danthea">Compañia</a></li><li class="nav-item"><a class="nav-link" href="#escola">Escola</a></li><li class="nav-item"><a class="nav-link" href="#equipo">Equipo</a></li><li class="nav-item"><a class="nav-link" href="#mapa">Onde estamos</a></li><li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li></ul></div></div>',1),AR=[wR];function IR(e,t){return ks(),$a("nav",TR,AR)}const bR=vR(ER,[["render",IR]]),RR={class:"card",style:{width:"18rem"}},SR=["src"],CR={class:"card-body"},PR={class:"card-title text-uppercase text-center"},OR={class:"card-text text-uppercase text-center",style:{"font-family":"'Courier New'"}},NR={class:"text-center"},DR={class:"text-center"},kR=it("div",{class:"text-center"},null,-1),xR={__name:"BaseTarjeta",props:{obra:{type:Object,required:!0}},setup(e){return(t,n)=>{const s=C_("router-link");return ks(),$a("div",RR,[Zt(s,{to:{name:"detalle",params:{id:e.obra.id}}},{default:v_(()=>[it("img",{src:e.obra.photo,class:"card-img-top",alt:""},null,8,SR)]),_:1},8,["to"]),it("div",CR,[it("h5",PR,qo(e.obra.company),1),it("p",OR,qo(e.obra.title),1),it("p",NR,qo(e.obra.age),1),it("p",DR,qo(e.obra.date),1),kR])])}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},LR=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ry={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(sy(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):LR(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new VR;const d=i<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class VR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MR=function(e){const t=sy(e);return ry.encodeByteArray(t,!0)},ja=function(e){return MR(e).replace(/\./g,"")},iy=function(e){try{return ry.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=()=>UR().__FIREBASE_DEFAULTS__,$R=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},BR=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&iy(e[1]);return t&&JSON.parse(t)},Nc=()=>{try{return FR()||$R()||BR()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},oy=e=>{var t,n;return(n=(t=Nc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ay=e=>{const t=oy(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},cy=()=>{var e;return(e=Nc())===null||e===void 0?void 0:e.config},ly=e=>{var t;return(t=Nc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ja(JSON.stringify(n)),ja(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function HR(){var e;const t=(e=Nc())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WR(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function KR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zR(){const e=le();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function GR(){try{return typeof indexedDB=="object"}catch{return!1}}function QR(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR="FirebaseError";class En extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=YR,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?XR(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new En(r,a,s)}}function XR(e,t){return e.replace(JR,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const JR=/\{\$([^}]+)}/g;function ZR(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qa(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Dp(i)&&Dp(o)){if(!qa(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Dp(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function t0(e,t){const n=new e0(e,t);return n.subscribe.bind(n)}class e0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let r;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");n0(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:s},r.next===void 0&&(r.next=kl),r.error===void 0&&(r.error=kl),r.complete===void 0&&(r.complete=kl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function kl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){return e&&e._delegate?e._delegate:e}class cs{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new jR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(i0(t))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=As){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=As){return this.instances.has(t)}getOptions(t=As){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:r0(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=As){return this.component?this.component.multipleInstances?t:As:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r0(e){return e===As?void 0:e}function i0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new s0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_t||(_t={}));const a0={debug:_t.DEBUG,verbose:_t.VERBOSE,info:_t.INFO,warn:_t.WARN,error:_t.ERROR,silent:_t.SILENT},c0=_t.INFO,l0={[_t.DEBUG]:"log",[_t.VERBOSE]:"log",[_t.INFO]:"info",[_t.WARN]:"warn",[_t.ERROR]:"error"},u0=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=l0[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wh{constructor(t){this.name=t,this._logLevel=c0,this._logHandler=u0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?a0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_t.DEBUG,...t),this._logHandler(this,_t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_t.VERBOSE,...t),this._logHandler(this,_t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_t.INFO,...t),this._logHandler(this,_t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_t.WARN,...t),this._logHandler(this,_t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_t.ERROR,...t),this._logHandler(this,_t.ERROR,...t)}}const h0=(e,t)=>t.some(n=>e instanceof n);let kp,xp;function d0(){return kp||(kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f0(){return xp||(xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hy=new WeakMap,ku=new WeakMap,dy=new WeakMap,xl=new WeakMap,Kh=new WeakMap;function p0(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(rs(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&hy.set(n,e)}).catch(()=>{}),Kh.set(t,e),t}function m0(e){if(ku.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ku.set(e,t)}let xu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ku.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dy.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rs(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function g0(e){xu=e(xu)}function _0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ll(this),t,...n);return dy.set(s,t.sort?t.sort():[t]),rs(s)}:f0().includes(e)?function(...t){return e.apply(Ll(this),t),rs(hy.get(this))}:function(...t){return rs(e.apply(Ll(this),t))}}function y0(e){return typeof e=="function"?_0(e):(e instanceof IDBTransaction&&m0(e),h0(e,d0())?new Proxy(e,xu):e)}function rs(e){if(e instanceof IDBRequest)return p0(e);if(xl.has(e))return xl.get(e);const t=y0(e);return t!==e&&(xl.set(e,t),Kh.set(t,e)),t}const Ll=e=>Kh.get(e);function v0(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=rs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(rs(o.result),c.oldVersion,c.newVersion,rs(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const E0=["get","getKey","getAll","getAllKeys","count"],T0=["put","add","delete","clear"],Vl=new Map;function Lp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Vl.get(t))return Vl.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=T0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||E0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Vl.set(t,i),i}g0(e=>({...e,get:(t,n,s)=>Lp(t,n)||e.get(t,n,s),has:(t,n)=>!!Lp(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function A0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Lu="@firebase/app",Vp="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Wh("@firebase/app"),I0="@firebase/app-compat",b0="@firebase/analytics-compat",R0="@firebase/analytics",S0="@firebase/app-check-compat",C0="@firebase/app-check",P0="@firebase/auth",O0="@firebase/auth-compat",N0="@firebase/database",D0="@firebase/database-compat",k0="@firebase/functions",x0="@firebase/functions-compat",L0="@firebase/installations",V0="@firebase/installations-compat",M0="@firebase/messaging",U0="@firebase/messaging-compat",F0="@firebase/performance",$0="@firebase/performance-compat",B0="@firebase/remote-config",j0="@firebase/remote-config-compat",q0="@firebase/storage",H0="@firebase/storage-compat",W0="@firebase/firestore",K0="@firebase/firestore-compat",z0="firebase",G0="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="[DEFAULT]",Q0={[Lu]:"fire-core",[I0]:"fire-core-compat",[R0]:"fire-analytics",[b0]:"fire-analytics-compat",[C0]:"fire-app-check",[S0]:"fire-app-check-compat",[P0]:"fire-auth",[O0]:"fire-auth-compat",[N0]:"fire-rtdb",[D0]:"fire-rtdb-compat",[k0]:"fire-fn",[x0]:"fire-fn-compat",[L0]:"fire-iid",[V0]:"fire-iid-compat",[M0]:"fire-fcm",[U0]:"fire-fcm-compat",[F0]:"fire-perf",[$0]:"fire-perf-compat",[B0]:"fire-rc",[j0]:"fire-rc-compat",[q0]:"fire-gcs",[H0]:"fire-gcs-compat",[W0]:"fire-fst",[K0]:"fire-fst-compat","fire-js":"fire-js",[z0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new Map,Mu=new Map;function Y0(e,t){try{e.container.addComponent(t)}catch(n){$s.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Bs(e){const t=e.name;if(Mu.has(t))return $s.debug(`There were multiple attempts to register component ${t}.`),!1;Mu.set(t,e);for(const n of Ha.values())Y0(n,e);return!0}function Dc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},is=new mo("app","Firebase",X0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=G0;function zh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Vu,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw is.create("bad-app-name",{appName:String(r)});if(n||(n=cy()),!n)throw is.create("no-options");const i=Ha.get(r);if(i){if(qa(n,i.options)&&qa(s,i.config))return i;throw is.create("duplicate-app",{appName:r})}const o=new o0(r);for(const c of Mu.values())o.addComponent(c);const a=new J0(n,s,o);return Ha.set(r,a),a}function Gh(e=Vu){const t=Ha.get(e);if(!t&&e===Vu&&cy())return zh();if(!t)throw is.create("no-app",{appName:e});return t}function hn(e,t,n){var s;let r=(s=Q0[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$s.warn(a.join(" "));return}Bs(new cs(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="firebase-heartbeat-database",tS=1,Qi="firebase-heartbeat-store";let Ml=null;function fy(){return Ml||(Ml=v0(Z0,tS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qi)}}}).catch(e=>{throw is.create("idb-open",{originalErrorMessage:e.message})})),Ml}async function eS(e){try{return await(await fy()).transaction(Qi).objectStore(Qi).get(py(e))}catch(t){if(t instanceof En)$s.warn(t.message);else{const n=is.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$s.warn(n.message)}}}async function Mp(e,t){try{const s=(await fy()).transaction(Qi,"readwrite");await s.objectStore(Qi).put(t,py(e)),await s.done}catch(n){if(n instanceof En)$s.warn(n.message);else{const s=is.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$s.warn(s.message)}}}function py(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=1024,sS=30*24*60*60*1e3;class rS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Up();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=sS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Up(),{heartbeatsToSend:n,unsentEntries:s}=iS(this._heartbeatsCache.heartbeats),r=ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Up(){return new Date().toISOString().substring(0,10)}function iS(e,t=nS){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Fp(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Fp(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class oS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GR()?QR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Fp(e){return ja(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(e){Bs(new cs("platform-logger",t=>new w0(t),"PRIVATE")),Bs(new cs("heartbeat",t=>new rS(t),"PRIVATE")),hn(Lu,Vp,e),hn(Lu,Vp,"esm2017"),hn("fire-js","")}aS("");var cS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Qh=Qh||{},nt=cS||self;function kc(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function _o(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function lS(e){return Object.prototype.hasOwnProperty.call(e,Ul)&&e[Ul]||(e[Ul]=++uS)}var Ul="closure_uid_"+(1e9*Math.random()>>>0),uS=0;function hS(e,t,n){return e.call.apply(e.bind,arguments)}function dS(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function oe(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?oe=hS:oe=dS,oe.apply(null,arguments)}function Yo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Qt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function ms(){this.s=this.s,this.o=this.o}var fS=0;ms.prototype.s=!1;ms.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fS!=0)&&lS(this)};ms.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const my=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Yh(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function $p(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(kc(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function ae(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var pS=function(){if(!nt.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{nt.addEventListener("test",()=>{},t),nt.removeEventListener("test",()=>{},t)}catch{}return e}();function Yi(e){return/^[\s\xa0]*$/.test(e)}function xc(){var e=nt.navigator;return e&&(e=e.userAgent)?e:""}function an(e){return xc().indexOf(e)!=-1}function Xh(e){return Xh[" "](e),e}Xh[" "]=function(){};function mS(e,t){var n=aC;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var gS=an("Opera"),xr=an("Trident")||an("MSIE"),gy=an("Edge"),Uu=gy||xr,_y=an("Gecko")&&!(xc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),_S=xc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function yy(){var e=nt.document;return e?e.documentMode:void 0}var Fu;t:{var Fl="",$l=function(){var e=xc();if(_y)return/rv:([^\);]+)(\)|;)/.exec(e);if(gy)return/Edge\/([\d\.]+)/.exec(e);if(xr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(_S)return/WebKit\/(\S+)/.exec(e);if(gS)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if($l&&(Fl=$l?$l[1]:""),xr){var Bl=yy();if(Bl!=null&&Bl>parseFloat(Fl)){Fu=String(Bl);break t}}Fu=Fl}var $u;if(nt.document&&xr){var Bp=yy();$u=Bp||parseInt(Fu,10)||void 0}else $u=void 0;var yS=$u;function Xi(e,t){if(ae.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(_y){t:{try{Xh(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:vS[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Xi.$.h.call(this)}}Qt(Xi,ae);var vS={2:"touch",3:"pen",4:"mouse"};Xi.prototype.h=function(){Xi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var yo="closure_listenable_"+(1e6*Math.random()|0),ES=0;function TS(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=r,this.key=++ES,this.fa=this.ia=!1}function Lc(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Jh(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function wS(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function vy(e){const t={};for(const n in e)t[n]=e[n];return t}const jp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ey(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<jp.length;i++)n=jp[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Vc(e){this.src=e,this.g={},this.h=0}Vc.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ju(e,t,s,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new TS(t,this.src,i,!!s,r),t.ia=n,e.push(t)),t};function Bu(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=my(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Lc(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ju(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==s)return r}return-1}var Zh="closure_lm_"+(1e6*Math.random()|0),jl={};function Ty(e,t,n,s,r){if(s&&s.once)return Ay(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ty(e,t[i],n,s,r);return null}return n=nd(n),e&&e[yo]?e.O(t,n,_o(s)?!!s.capture:!!s,r):wy(e,t,n,!1,s,r)}function wy(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=_o(r)?!!r.capture:!!r,a=ed(e);if(a||(e[Zh]=a=new Vc(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=AS(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)pS||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(by(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AS(){function e(n){return t.call(e.src,e.listener,n)}const t=IS;return e}function Ay(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ay(e,t[i],n,s,r);return null}return n=nd(n),e&&e[yo]?e.P(t,n,_o(s)?!!s.capture:!!s,r):wy(e,t,n,!0,s,r)}function Iy(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Iy(e,t[i],n,s,r);else s=_o(s)?!!s.capture:!!s,n=nd(n),e&&e[yo]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ju(i,n,s,r),-1<n&&(Lc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=ed(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ju(t,n,s,r)),(n=-1<e?t[e]:null)&&td(n))}function td(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[yo])Bu(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(by(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ed(t))?(Bu(n,e),n.h==0&&(n.src=null,t[Zh]=null)):Lc(e)}}}function by(e){return e in jl?jl[e]:jl[e]="on"+e}function IS(e,t){if(e.fa)e=!0;else{t=new Xi(t,this);var n=e.listener,s=e.la||e.src;e.ia&&td(e),e=n.call(s,t)}return e}function ed(e){return e=e[Zh],e instanceof Vc?e:null}var ql="__closure_events_fn_"+(1e9*Math.random()>>>0);function nd(e){return typeof e=="function"?e:(e[ql]||(e[ql]=function(t){return e.handleEvent(t)}),e[ql])}function Gt(){ms.call(this),this.i=new Vc(this),this.S=this,this.J=null}Qt(Gt,ms);Gt.prototype[yo]=!0;Gt.prototype.removeEventListener=function(e,t,n,s){Iy(this,e,t,n,s)};function te(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new ae(t,e);else if(t instanceof ae)t.target=t.target||e;else{var r=t;t=new ae(s,e),Ey(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Xo(o,s,!0,t)&&r}if(o=t.g=e,r=Xo(o,s,!0,t)&&r,r=Xo(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Xo(o,s,!1,t)&&r}Gt.prototype.N=function(){if(Gt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Lc(n[s]);delete e.g[t],e.h--}}this.J=null};Gt.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};Gt.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Xo(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Bu(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var sd=nt.JSON.stringify;class bS{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function RS(){var e=rd;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class SS{constructor(){this.h=this.g=null}add(t,n){const s=Ry.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ry=new bS(()=>new CS,e=>e.reset());class CS{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function PS(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function OS(e){nt.setTimeout(()=>{throw e},0)}let Ji,Zi=!1,rd=new SS,Sy=()=>{const e=nt.Promise.resolve(void 0);Ji=()=>{e.then(NS)}};var NS=()=>{for(var e;e=RS();){try{e.h.call(e.g)}catch(n){OS(n)}var t=Ry;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Zi=!1};function Mc(e,t){Gt.call(this),this.h=e||1,this.g=t||nt,this.j=oe(this.qb,this),this.l=Date.now()}Qt(Mc,Gt);V=Mc.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),te(this,"tick"),this.ga&&(id(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function id(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}V.N=function(){Mc.$.N.call(this),id(this),delete this.g};function od(e,t,n){if(typeof e=="function")n&&(e=oe(e,n));else if(e&&typeof e.handleEvent=="function")e=oe(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:nt.setTimeout(e,t||0)}function Cy(e){e.g=od(()=>{e.g=null,e.i&&(e.i=!1,Cy(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class DS extends ms{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Cy(this)}N(){super.N(),this.g&&(nt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function to(e){ms.call(this),this.h=e,this.g={}}Qt(to,ms);var qp=[];function Py(e,t,n,s){Array.isArray(n)||(n&&(qp[0]=n.toString()),n=qp);for(var r=0;r<n.length;r++){var i=Ty(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Oy(e){Jh(e.g,function(t,n){this.g.hasOwnProperty(n)&&td(t)},e),e.g={}}to.prototype.N=function(){to.$.N.call(this),Oy(this)};to.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Uc(){this.g=!0}Uc.prototype.Ea=function(){this.g=!1};function kS(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function xS(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function gr(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+VS(e,n)+(s?" "+s:"")})}function LS(e,t){e.info(function(){return"TIMEOUT: "+t})}Uc.prototype.info=function(){};function VS(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return sd(n)}catch{return t}}var Ys={},Hp=null;function Fc(){return Hp=Hp||new Gt}Ys.Ta="serverreachability";function Ny(e){ae.call(this,Ys.Ta,e)}Qt(Ny,ae);function eo(e){const t=Fc();te(t,new Ny(t))}Ys.STAT_EVENT="statevent";function Dy(e,t){ae.call(this,Ys.STAT_EVENT,e),this.stat=t}Qt(Dy,ae);function pe(e){const t=Fc();te(t,new Dy(t,e))}Ys.Ua="timingevent";function ky(e,t){ae.call(this,Ys.Ua,e),this.size=t}Qt(ky,ae);function vo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return nt.setTimeout(function(){e()},t)}var $c={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ad(){}ad.prototype.h=null;function Wp(e){return e.h||(e.h=e.i())}function Ly(){}var Eo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function cd(){ae.call(this,"d")}Qt(cd,ae);function ld(){ae.call(this,"c")}Qt(ld,ae);var qu;function Bc(){}Qt(Bc,ad);Bc.prototype.g=function(){return new XMLHttpRequest};Bc.prototype.i=function(){return{}};qu=new Bc;function To(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new to(this),this.P=MS,e=Uu?125:void 0,this.V=new Mc(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Vy}function Vy(){this.i=null,this.g="",this.h=!1}var MS=45e3,Hu={},Wa={};V=To.prototype;V.setTimeout=function(e){this.P=e};function Wu(e,t,n){e.L=1,e.v=qc(Nn(t)),e.s=n,e.S=!0,My(e,null)}function My(e,t){e.G=Date.now(),wo(e),e.A=Nn(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),Wy(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Vy,e.g=dv(e.l,n?t:null,!e.s),0<e.O&&(e.M=new DS(oe(e.Pa,e,e.g),e.O)),Py(e.U,e.g,"readystatechange",e.nb),t=e.I?vy(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),eo(),kS(e.j,e.u,e.A,e.m,e.W,e.s)}V.nb=function(e){e=e.target;const t=this.M;t&&cn(e)==3?t.l():this.Pa(e)};V.Pa=function(e){try{if(e==this.g)t:{const u=cn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Uu||this.g&&(this.h.h||this.g.ja()||Qp(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?eo(3):eo(2)),jc(this);var n=this.g.da();this.ca=n;e:if(Uy(this)){var s=Qp(this.g);e="";var r=s.length,i=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ss(this),ki(this);var o="";break e}this.h.i=new nt.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,xS(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yi(a)){var l=a;break e}}l=null}if(n=l)gr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ku(this,n);else{this.i=!1,this.o=3,pe(12),Ss(this),ki(this);break t}}this.S?(Fy(this,u,o),Uu&&this.i&&u==3&&(Py(this.U,this.V,"tick",this.mb),this.V.start())):(gr(this.j,this.m,o,null),Ku(this,o)),u==4&&Ss(this),this.i&&!this.J&&(u==4?cv(this.l,this):(this.i=!1,wo(this)))}else rC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pe(12)):(this.o=0,pe(13)),Ss(this),ki(this)}}}catch{}finally{}};function Uy(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Fy(e,t,n){let s=!0,r;for(;!e.J&&e.C<n.length;)if(r=US(e,n),r==Wa){t==4&&(e.o=4,pe(14),s=!1),gr(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Hu){e.o=4,pe(15),gr(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else gr(e.j,e.m,r,null),Ku(e,r);Uy(e)&&r!=Wa&&r!=Hu&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,pe(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),md(t),t.M=!0,pe(11))):(gr(e.j,e.m,n,"[Invalid Chunked Response]"),Ss(e),ki(e))}V.mb=function(){if(this.g){var e=cn(this.g),t=this.g.ja();this.C<t.length&&(jc(this),Fy(this,e,t),this.i&&e!=4&&wo(this))}};function US(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Wa:(n=Number(t.substring(n,s)),isNaN(n)?Hu:(s+=1,s+n>t.length?Wa:(t=t.slice(s,s+n),e.C=s+n,t)))}V.cancel=function(){this.J=!0,Ss(this)};function wo(e){e.Y=Date.now()+e.P,$y(e,e.P)}function $y(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=vo(oe(e.lb,e),t)}function jc(e){e.B&&(nt.clearTimeout(e.B),e.B=null)}V.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(LS(this.j,this.A),this.L!=2&&(eo(),pe(17)),Ss(this),this.o=2,ki(this)):$y(this,this.Y-e)};function ki(e){e.l.H==0||e.J||cv(e.l,e)}function Ss(e){jc(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,id(e.V),Oy(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ku(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||zu(n.i,e))){if(!e.K&&zu(n.i,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ga(n),zc(n);else break t;pd(n),pe(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=vo(oe(n.ib,n),6e3));if(1>=Gy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Cs(n,11)}else if((e.K||n.g==e)&&Ga(n),!Yi(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=e.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ud(i,i.h),i.h=null))}if(s.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,St(s.I,s.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=hv(s,s.J?s.pa:null,s.Y),o.K){Qy(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(jc(a),wo(a)),s.g=o}else ov(s);0<n.j.length&&Gc(n)}else l[0]!="stop"&&l[0]!="close"||Cs(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Cs(n,7):fd(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}eo(4)}catch{}}function FS(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(kc(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function $S(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(kc(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function By(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(kc(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=$S(e),s=FS(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var jy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BS(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ls(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ls){this.h=e.h,Ka(this,e.j),this.s=e.s,this.g=e.g,za(this,e.m),this.l=e.l;var t=e.i,n=new no;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Kp(this,n),this.o=e.o}else e&&(t=String(e).match(jy))?(this.h=!1,Ka(this,t[1]||"",!0),this.s=wi(t[2]||""),this.g=wi(t[3]||"",!0),za(this,t[4]),this.l=wi(t[5]||"",!0),Kp(this,t[6]||"",!0),this.o=wi(t[7]||"")):(this.h=!1,this.i=new no(null,this.h))}Ls.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ai(t,zp,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ai(t,zp,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ai(n,n.charAt(0)=="/"?HS:qS,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ai(n,KS)),e.join("")};function Nn(e){return new Ls(e)}function Ka(e,t,n){e.j=n?wi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function za(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Kp(e,t,n){t instanceof no?(e.i=t,zS(e.i,e.h)):(n||(t=Ai(t,WS)),e.i=new no(t,e.h))}function St(e,t,n){e.i.set(t,n)}function qc(e){return St(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ai(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,jS),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jS(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var zp=/[#\/\?@]/g,qS=/[#\?:]/g,HS=/[#\?]/g,WS=/[#\?@]/g,KS=/#/g;function no(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function gs(e){e.g||(e.g=new Map,e.h=0,e.i&&BS(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}V=no.prototype;V.add=function(e,t){gs(this),this.i=null,e=ti(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function qy(e,t){gs(e),t=ti(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Hy(e,t){return gs(e),t=ti(e,t),e.g.has(t)}V.forEach=function(e,t){gs(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};V.ta=function(){gs(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};V.Z=function(e){gs(this);let t=[];if(typeof e=="string")Hy(this,e)&&(t=t.concat(this.g.get(ti(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};V.set=function(e,t){return gs(this),this.i=null,e=ti(this,e),Hy(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};V.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Wy(e,t,n){qy(e,t),0<n.length&&(e.i=null,e.g.set(ti(e,t),Yh(n)),e.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function ti(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function zS(e,t){t&&!e.j&&(gs(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(qy(this,s),Wy(this,r,n))},e)),e.j=t}var GS=class{constructor(e,t){this.g=e,this.map=t}};function Ky(e){this.l=e||QS,nt.PerformanceNavigationTiming?(e=nt.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(nt.g&&nt.g.Ka&&nt.g.Ka()&&nt.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QS=10;function zy(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Gy(e){return e.h?1:e.g?e.g.size:0}function zu(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ud(e,t){e.g?e.g.add(t):e.h=t}function Qy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ky.prototype.cancel=function(){if(this.i=Yy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Yy(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Yh(e.i)}var YS=class{stringify(e){return nt.JSON.stringify(e,void 0)}parse(e){return nt.JSON.parse(e,void 0)}};function XS(){this.g=new YS}function JS(e,t,n){const s=n||"";try{By(e,function(r,i){let o=r;_o(r)&&(o=sd(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function ZS(e,t){const n=new Uc;if(nt.Image){const s=new Image;s.onload=Yo(Jo,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Yo(Jo,n,s,"TestLoadImage: error",!1,t),s.onabort=Yo(Jo,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Yo(Jo,n,s,"TestLoadImage: timeout",!1,t),nt.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Jo(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Hc(e){this.l=e.fc||null,this.j=e.ob||!1}Qt(Hc,ad);Hc.prototype.g=function(){return new Wc(this.l,this.j)};Hc.prototype.i=function(e){return function(){return e}}({});function Wc(e,t){Gt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=hd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qt(Wc,Gt);var hd=0;V=Wc.prototype;V.open=function(e,t){if(this.readyState!=hd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,so(this)};V.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||nt).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ao(this)),this.readyState=hd};V.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,so(this)),this.g&&(this.readyState=3,so(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof nt.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xy(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Xy(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}V.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ao(this):so(this),this.readyState==3&&Xy(this)}};V.Za=function(e){this.g&&(this.response=this.responseText=e,Ao(this))};V.Ya=function(e){this.g&&(this.response=e,Ao(this))};V.ka=function(){this.g&&Ao(this)};function Ao(e){e.readyState=4,e.l=null,e.j=null,e.A=null,so(e)}V.setRequestHeader=function(e,t){this.v.append(e,t)};V.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function so(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Wc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var tC=nt.JSON.parse;function xt(e){Gt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Jy,this.L=this.M=!1}Qt(xt,Gt);var Jy="",eC=/^https?$/i,nC=["POST","PUT"];V=xt.prototype;V.Oa=function(e){this.M=e};V.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qu.g(),this.C=this.u?Wp(this.u):Wp(qu),this.g.onreadystatechange=oe(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Gp(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=nt.FormData&&e instanceof nt.FormData,!(0<=my(nC,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ev(this),0<this.B&&((this.L=sC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=oe(this.ua,this)):this.A=od(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Gp(this,i)}};function sC(e){return xr&&typeof e.timeout=="number"&&e.ontimeout!==void 0}V.ua=function(){typeof Qh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,te(this,"timeout"),this.abort(8))};function Gp(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Zy(e),Kc(e)}function Zy(e){e.F||(e.F=!0,te(e,"complete"),te(e,"error"))}V.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Kc(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kc(this,!0)),xt.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?tv(this):this.kb())};V.kb=function(){tv(this)};function tv(e){if(e.h&&typeof Qh<"u"&&(!e.C[1]||cn(e)!=4||e.da()!=2)){if(e.v&&cn(e)==4)od(e.La,0,e);else if(te(e,"readystatechange"),cn(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=o===0){var r=String(e.I).match(jy)[1]||null;!r&&nt.self&&nt.self.location&&(r=nt.self.location.protocol.slice(0,-1)),s=!eC.test(r?r.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var i=2<cn(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Zy(e)}}finally{Kc(e)}}}}function Kc(e,t){if(e.g){ev(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||te(e,"ready");try{n.onreadystatechange=s}catch{}}}function ev(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(nt.clearTimeout(e.A),e.A=null)}V.isActive=function(){return!!this.g};function cn(e){return e.g?e.g.readyState:0}V.da=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),tC(t)}};function Qp(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Jy:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function rC(e){const t={};e=(e.g&&2<=cn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<e.length;s++){if(Yi(e[s]))continue;var n=PS(e[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[r]||[];t[r]=i,i.push(n)}wS(t,function(s){return s.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nv(e){let t="";return Jh(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function dd(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=nv(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):St(e,t,n))}function mi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function sv(e){this.Ga=0,this.j=[],this.l=new Uc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=mi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=mi("baseRetryDelayMs",5e3,e),this.hb=mi("retryDelaySeedMs",1e4,e),this.eb=mi("forwardChannelMaxRetries",2,e),this.xa=mi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ky(e&&e.concurrentRequestLimit),this.Ja=new XS,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=sv.prototype;V.ra=8;V.H=1;function fd(e){if(rv(e),e.H==3){var t=e.W++,n=Nn(e.I);if(St(n,"SID",e.K),St(n,"RID",t),St(n,"TYPE","terminate"),Io(e,n),t=new To(e,e.l,t),t.L=2,t.v=qc(Nn(n)),n=!1,nt.navigator&&nt.navigator.sendBeacon)try{n=nt.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&nt.Image&&(new Image().src=t.v,n=!0),n||(t.g=dv(t.l,null),t.g.ha(t.v)),t.G=Date.now(),wo(t)}uv(e)}function zc(e){e.g&&(md(e),e.g.cancel(),e.g=null)}function rv(e){zc(e),e.u&&(nt.clearTimeout(e.u),e.u=null),Ga(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&nt.clearTimeout(e.m),e.m=null)}function Gc(e){if(!zy(e.i)&&!e.m){e.m=!0;var t=e.Na;Ji||Sy(),Zi||(Ji(),Zi=!0),rd.add(t,e),e.C=0}}function iC(e,t){return Gy(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=vo(oe(e.Na,e,t),lv(e,e.C)),e.C++,!0)}V.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new To(this,this.l,e);let i=this.s;if(this.U&&(i?(i=vy(i),Ey(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=iv(this,r,t),n=Nn(this.I),St(n,"RID",e),St(n,"CVER",22),this.F&&St(n,"X-HTTP-Session-Id",this.F),Io(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(nv(i)))+"&"+t:this.o&&dd(n,this.o,i)),ud(this.i,r),this.bb&&St(n,"TYPE","init"),this.P?(St(n,"$req",t),St(n,"SID","null"),r.aa=!0,Wu(r,n,null)):Wu(r,n,t),this.H=2}}else this.H==3&&(e?Yp(this,e):this.j.length==0||zy(this.i)||Yp(this))};function Yp(e,t){var n;t?n=t.m:n=e.W++;const s=Nn(e.I);St(s,"SID",e.K),St(s,"RID",n),St(s,"AID",e.V),Io(e,s),e.o&&e.s&&dd(s,e.o,e.s),n=new To(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=iv(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ud(e.i,n),Wu(n,s,t)}function Io(e,t){e.na&&Jh(e.na,function(n,s){St(t,s,n)}),e.h&&By({},function(n,s){St(t,s,n)})}function iv(e,t,n){n=Math.min(e.j.length,n);var s=e.h?oe(e.h.Va,e.h,e):null;t:{var r=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{JS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,s}function ov(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ji||Sy(),Zi||(Ji(),Zi=!0),rd.add(t,e),e.A=0}}function pd(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=vo(oe(e.Ma,e),lv(e,e.A)),e.A++,!0)}V.Ma=function(){if(this.u=null,av(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=vo(oe(this.jb,this),e)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pe(10),zc(this),av(this))};function md(e){e.B!=null&&(nt.clearTimeout(e.B),e.B=null)}function av(e){e.g=new To(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Nn(e.wa);St(t,"RID","rpc"),St(t,"SID",e.K),St(t,"AID",e.V),St(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&St(t,"TO",e.qa),St(t,"TYPE","xmlhttp"),Io(e,t),e.o&&e.s&&dd(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=qc(Nn(t)),n.s=null,n.S=!0,My(n,e)}V.ib=function(){this.v!=null&&(this.v=null,zc(this),pd(this),pe(19))};function Ga(e){e.v!=null&&(nt.clearTimeout(e.v),e.v=null)}function cv(e,t){var n=null;if(e.g==t){Ga(e),md(e),e.g=null;var s=2}else if(zu(e.i,t))n=t.F,Qy(e.i,t),s=1;else return;if(e.H!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;s=Fc(),te(s,new ky(s,n)),Gc(e)}else ov(e);else if(r=t.o,r==3||r==0&&0<t.ca||!(s==1&&iC(e,t)||s==2&&pd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Cs(e,5);break;case 4:Cs(e,10);break;case 3:Cs(e,6);break;default:Cs(e,2)}}}function lv(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Cs(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var s=oe(e.pb,e);n||(n=new Ls("//www.google.com/images/cleardot.gif"),nt.location&&nt.location.protocol=="http"||Ka(n,"https"),qc(n)),ZS(n.toString(),s)}else pe(2);e.H=0,e.h&&e.h.za(t),uv(e),rv(e)}V.pb=function(e){e?(this.l.info("Successfully pinged google.com"),pe(2)):(this.l.info("Failed to ping google.com"),pe(1))};function uv(e){if(e.H=0,e.ma=[],e.h){const t=Yy(e.i);(t.length!=0||e.j.length!=0)&&($p(e.ma,t),$p(e.ma,e.j),e.i.i.length=0,Yh(e.j),e.j.length=0),e.h.ya()}}function hv(e,t,n){var s=n instanceof Ls?Nn(n):new Ls(n);if(s.g!="")t&&(s.g=t+"."+s.g),za(s,s.m);else{var r=nt.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Ls(null);s&&Ka(i,s),t&&(i.g=t),r&&za(i,r),n&&(i.l=n),s=i}return n=e.F,t=e.Da,n&&t&&St(s,n,t),St(s,"VER",e.ra),Io(e,s),s}function dv(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new xt(new Hc({ob:!0})):new xt(e.va),t.Oa(e.J),t}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function fv(){}V=fv.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Qa(){if(xr&&!(10<=Number(yS)))throw Error("Environmental error: no available transport.")}Qa.prototype.g=function(e,t){return new De(e,t)};function De(e,t){Gt.call(this),this.g=new sv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Yi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Yi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ei(this)}Qt(De,Gt);De.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;pe(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=hv(e,null,e.Y),Gc(e)};De.prototype.close=function(){fd(this.g)};De.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=sd(e),e=n);t.j.push(new GS(t.fb++,e)),t.H==3&&Gc(t)};De.prototype.N=function(){this.g.h=null,delete this.j,fd(this.g),delete this.g,De.$.N.call(this)};function pv(e){cd.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Qt(pv,cd);function mv(){ld.call(this),this.status=1}Qt(mv,ld);function ei(e){this.g=e}Qt(ei,fv);ei.prototype.Ba=function(){te(this.g,"a")};ei.prototype.Aa=function(e){te(this.g,new pv(e))};ei.prototype.za=function(e){te(this.g,new mv)};ei.prototype.ya=function(){te(this.g,"b")};function oC(){this.blockSize=-1}function Je(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qt(Je,oC);Je.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hl(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var i=e.g[3],o=t+(i^n&(r^i))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^i&(n^r))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^i)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~i))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+i&4294967295}Je.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,r=this.h,i=0;i<t;){if(r==0)for(;i<=n;)Hl(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[r++]=e.charCodeAt(i++),r==this.blockSize){Hl(this,s),r=0;break}}else for(;i<t;)if(s[r++]=e[i++],r==this.blockSize){Hl(this,s),r=0;break}}this.h=r,this.i+=t};Je.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function wt(e,t){this.h=t;for(var n=[],s=!0,r=e.length-1;0<=r;r--){var i=e[r]|0;s&&i==t||(n[r]=i,s=!1)}this.g=n}var aC={};function gd(e){return-128<=e&&128>e?mS(e,function(t){return new wt([t|0],0>t?-1:0)}):new wt([e|0],0>e?-1:0)}function ln(e){if(isNaN(e)||!isFinite(e))return wr;if(0>e)return Jt(ln(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Gu;return new wt(t,0)}function gv(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Jt(gv(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ln(Math.pow(t,8)),s=wr,r=0;r<e.length;r+=8){var i=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+i),t);8>i?(i=ln(Math.pow(t,i)),s=s.R(i).add(ln(o))):(s=s.R(n),s=s.add(ln(o)))}return s}var Gu=4294967296,wr=gd(0),Qu=gd(1),Xp=gd(16777216);V=wt.prototype;V.ea=function(){if(Ue(this))return-Jt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Gu+s)*t,t*=Gu}return e};V.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(An(this))return"0";if(Ue(this))return"-"+Jt(this).toString(e);for(var t=ln(Math.pow(e,6)),n=this,s="";;){var r=Xa(n,t).g;n=Ya(n,r.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,An(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};V.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function An(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ue(e){return e.h==-1}V.X=function(e){return e=Ya(this,e),Ue(e)?-1:An(e)?0:1};function Jt(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new wt(n,~e.h).add(Qu)}V.abs=function(){return Ue(this)?Jt(this):this};V.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,r=0;r<=t;r++){var i=s+(this.D(r)&65535)+(e.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new wt(n,n[n.length-1]&-2147483648?-1:0)};function Ya(e,t){return e.add(Jt(t))}V.R=function(e){if(An(this)||An(e))return wr;if(Ue(this))return Ue(e)?Jt(this).R(Jt(e)):Jt(Jt(this).R(e));if(Ue(e))return Jt(this.R(Jt(e)));if(0>this.X(Xp)&&0>e.X(Xp))return ln(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<e.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(r)>>>16,c=e.D(r)&65535;n[2*s+2*r]+=o*c,Zo(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Zo(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Zo(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Zo(n,2*s+2*r+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new wt(n,0)};function Zo(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function gi(e,t){this.g=e,this.h=t}function Xa(e,t){if(An(t))throw Error("division by zero");if(An(e))return new gi(wr,wr);if(Ue(e))return t=Xa(Jt(e),t),new gi(Jt(t.g),Jt(t.h));if(Ue(t))return t=Xa(e,Jt(t)),new gi(Jt(t.g),t.h);if(30<e.g.length){if(Ue(e)||Ue(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Qu,s=t;0>=s.X(e);)n=Jp(n),s=Jp(s);var r=ir(n,1),i=ir(s,1);for(s=ir(s,2),n=ir(n,2);!An(s);){var o=i.add(s);0>=o.X(e)&&(r=r.add(n),i=o),s=ir(s,1),n=ir(n,1)}return t=Ya(e,r.R(t)),new gi(r,t)}for(r=wr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=ln(n),o=i.R(t);Ue(o)||0<o.X(e);)n-=s,i=ln(n),o=i.R(t);An(i)&&(i=Qu),r=r.add(i),e=Ya(e,o)}return new gi(r,e)}V.gb=function(e){return Xa(this,e).h};V.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new wt(n,this.h&e.h)};V.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new wt(n,this.h|e.h)};V.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new wt(n,this.h^e.h)};function Jp(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new wt(n,e.h)}function ir(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,r=[],i=0;i<s;i++)r[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new wt(r,e.h)}Qa.prototype.createWebChannel=Qa.prototype.g;De.prototype.send=De.prototype.u;De.prototype.open=De.prototype.m;De.prototype.close=De.prototype.close;$c.NO_ERROR=0;$c.TIMEOUT=8;$c.HTTP_ERROR=6;xy.COMPLETE="complete";Ly.EventType=Eo;Eo.OPEN="a";Eo.CLOSE="b";Eo.ERROR="c";Eo.MESSAGE="d";Gt.prototype.listen=Gt.prototype.O;xt.prototype.listenOnce=xt.prototype.P;xt.prototype.getLastError=xt.prototype.Sa;xt.prototype.getLastErrorCode=xt.prototype.Ia;xt.prototype.getStatus=xt.prototype.da;xt.prototype.getResponseJson=xt.prototype.Wa;xt.prototype.getResponseText=xt.prototype.ja;xt.prototype.send=xt.prototype.ha;xt.prototype.setWithCredentials=xt.prototype.Oa;Je.prototype.digest=Je.prototype.l;Je.prototype.reset=Je.prototype.reset;Je.prototype.update=Je.prototype.j;wt.prototype.add=wt.prototype.add;wt.prototype.multiply=wt.prototype.R;wt.prototype.modulo=wt.prototype.gb;wt.prototype.compare=wt.prototype.X;wt.prototype.toNumber=wt.prototype.ea;wt.prototype.toString=wt.prototype.toString;wt.prototype.getBits=wt.prototype.D;wt.fromNumber=ln;wt.fromString=gv;var cC=function(){return new Qa},lC=function(){return Fc()},Wl=$c,uC=xy,hC=Ys,Zp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ta=Ly,dC=xt,fC=Je,Ar=wt;const tm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ne.UNAUTHENTICATED=new ne(null),ne.GOOGLE_CREDENTIALS=new ne("google-credentials-uid"),ne.FIRST_PARTY=new ne("first-party-uid"),ne.MOCK_USER=new ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Wh("@firebase/firestore");function em(){return js.logLevel}function H(e,...t){if(js.logLevel<=_t.DEBUG){const n=t.map(_d);js.debug(`Firestore (${ni}): ${e}`,...n)}}function Dn(e,...t){if(js.logLevel<=_t.ERROR){const n=t.map(_d);js.error(`Firestore (${ni}): ${e}`,...n)}}function Lr(e,...t){if(js.logLevel<=_t.WARN){const n=t.map(_d);js.warn(`Firestore (${ni}): ${e}`,...n)}}function _d(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e="Unexpected state"){const t=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: `+e;throw Dn(t),new Error(t)}function Ct(e,t){e||Z()}function ot(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends En{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ne.UNAUTHENTICATED))}shutdown(){}}class mC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gC{constructor(t){this.t=t,this.currentUser=ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ct(typeof s.accessToken=="string"),new _v(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ct(t===null||typeof t=="string"),new ne(t)}}class _C{constructor(t,n,s){this.l=t,this.h=n,this.P=s,this.type="FirstParty",this.user=ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yC{constructor(t,n,s){this.l=t,this.h=n,this.P=s}getToken(){return Promise.resolve(new _C(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vC{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EC{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const s=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ct(typeof n.token=="string"),this.R=n.token,new vC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=TC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function vt(e,t){return e<t?-1:e>t?1:0}function Vr(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return qt.fromMillis(Date.now())}static fromDate(t){return qt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new qt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?vt(this.nanoseconds,t.nanoseconds):vt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.timestamp=t}static fromTimestamp(t){return new st(t)}static min(){return new st(new qt(0,0))}static max(){return new st(new qt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,n,s){n===void 0?n=0:n>t.length&&Z(),s===void 0?s=t.length-n:s>t.length-n&&Z(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ro.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ro?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class It extends ro{construct(t,n,s){return new It(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new L(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new It(n)}static emptyPath(){return new It([])}}const wC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends ro{construct(t,n,s){return new ie(t,n,s)}static isValidIdentifier(t){return wC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ie(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new L(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new L(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ie(n)}static emptyPath(){return new ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(It.fromString(t))}static fromName(t){return new G(It.fromString(t).popFirst(5))}static empty(){return new G(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&It.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return It.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new It(t.slice()))}}function AC(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=st.fromTimestamp(s===1e9?new qt(n+1,0):new qt(n,s));return new ls(r,G.empty(),t)}function IC(e){return new ls(e.readTime,e.key,-1)}class ls{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new ls(st.min(),G.empty(),-1)}static max(){return new ls(st.max(),G.empty(),-1)}}function bC(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=G.comparator(e.documentKey,t.documentKey),n!==0?n:vt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==RC)throw e;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new O((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):O.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):O.reject(n)}static resolve(t){return new O((n,s)=>{n(t)})}static reject(t){return new O((n,s)=>{s(t)})}static waitFor(t){return new O((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=O.resolve(!1);for(const s of t)n=n.next(r=>r?O.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new O((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(t,n){return new O((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Ro(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}yd.ae=-1;function Qc(e){return e==null}function Ja(e){return e===0&&1/e==-1/0}function CC(e){return typeof e=="number"&&Number.isInteger(e)&&!Ja(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Xs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function vv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,n){this.comparator=t,this.root=n||Xt.EMPTY}insert(t,n){return new Nt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(t){return new Nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ea(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ea(this.root,t,this.comparator,!1)}getReverseIterator(){return new ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ea(this.root,t,this.comparator,!0)}}class ea{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xt{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??Xt.RED,this.left=r??Xt.EMPTY,this.right=i??Xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new Xt(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return Xt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const t=this.left.check();if(t!==this.right.check())throw Z();return t+(this.isRed()?0:1)}}Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,n,s,r,i){return this}insert(t,n,s){return new Xt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.comparator=t,this.data=new Nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new sm(this.data.getIterator())}getIteratorFrom(t){return new sm(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof ce)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ce(this.comparator);return n.data=t,n}}class sm{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.fields=t,t.sort(ie.comparator)}static empty(){return new Oe([])}unionWith(t){let n=new ce(ie.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Oe(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Vr(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ev("Invalid base64 string: "+i):i}}(t);return new ue(n)}static fromUint8Array(t){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new ue(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return vt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const PC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function us(e){if(Ct(!!e),typeof e=="string"){let t=0;const n=PC.exec(e);if(Ct(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:$t(e.seconds),nanos:$t(e.nanos)}}function $t(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qs(e){return typeof e=="string"?ue.fromBase64String(e):ue.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vd(e){const t=e.mapValue.fields.__previous_value__;return Yc(t)?vd(t):t}function io(e){const t=us(e.mapValue.fields.__local_write_time__.timestampValue);return new qt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(t,n,s,r,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class oo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof oo&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Yc(e)?4:NC(e)?9007199254740991:10:Z()}function yn(e,t){if(e===t)return!0;const n=Hs(e);if(n!==Hs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return io(e).isEqual(io(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=us(r.timestampValue),a=us(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return qs(r.bytesValue).isEqual(qs(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return $t(r.geoPointValue.latitude)===$t(i.geoPointValue.latitude)&&$t(r.geoPointValue.longitude)===$t(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return $t(r.integerValue)===$t(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=$t(r.doubleValue),a=$t(i.doubleValue);return o===a?Ja(o)===Ja(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Vr(e.arrayValue.values||[],t.arrayValue.values||[],yn);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(nm(o)!==nm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!yn(o[c],a[c])))return!1;return!0}(e,t);default:return Z()}}function ao(e,t){return(e.values||[]).find(n=>yn(n,t))!==void 0}function Mr(e,t){if(e===t)return 0;const n=Hs(e),s=Hs(t);if(n!==s)return vt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return vt(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=$t(i.integerValue||i.doubleValue),c=$t(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return rm(e.timestampValue,t.timestampValue);case 4:return rm(io(e),io(t));case 5:return vt(e.stringValue,t.stringValue);case 6:return function(i,o){const a=qs(i),c=qs(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=vt(a[l],c[l]);if(u!==0)return u}return vt(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=vt($t(i.latitude),$t(o.latitude));return a!==0?a:vt($t(i.longitude),$t(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Mr(a[l],c[l]);if(u)return u}return vt(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===na.mapValue&&o===na.mapValue)return 0;if(i===na.mapValue)return 1;if(o===na.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=vt(c[h],u[h]);if(d!==0)return d;const f=Mr(a[c[h]],l[u[h]]);if(f!==0)return f}return vt(c.length,u.length)}(e.mapValue,t.mapValue);default:throw Z()}}function rm(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return vt(e,t);const n=us(e),s=us(t),r=vt(n.seconds,s.seconds);return r!==0?r:vt(n.nanos,s.nanos)}function Ur(e){return Yu(e)}function Yu(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const s=us(n);return`time(${s.seconds},${s.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return qs(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return G.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Yu(i);return s+"]"}(e.arrayValue):"mapValue"in e?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Yu(n.fields[o])}`;return r+"}"}(e.mapValue):Z()}function Za(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Xu(e){return!!e&&"integerValue"in e}function Ed(e){return!!e&&"arrayValue"in e}function im(e){return!!e&&"nullValue"in e}function om(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ia(e){return!!e&&"mapValue"in e}function xi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Xs(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=xi(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xi(e.arrayValue.values[n]);return t}return Object.assign({},e)}function NC(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.value=t}static empty(){return new Ee({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ia(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=xi(n)}setAll(t){let n=ie.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=xi(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Ia(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Ia(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Xs(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new Ee(xi(this.value))}}function Tv(e){const t=[];return Xs(e.fields,(n,s)=>{const r=new ie([n]);if(Ia(s)){const i=Tv(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new Oe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new se(t,0,st.min(),st.min(),st.min(),Ee.empty(),0)}static newFoundDocument(t,n,s,r){return new se(t,1,n,st.min(),s,r,0)}static newNoDocument(t,n){return new se(t,2,n,st.min(),st.min(),Ee.empty(),0)}static newUnknownDocument(t,n){return new se(t,3,n,st.min(),st.min(),Ee.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(st.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=st.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof se&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,n){this.position=t,this.inclusive=n}}function am(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=G.comparator(G.fromName(o.referenceValue),n.key):s=Mr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function cm(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,n="asc"){this.field=t,this.dir=n}}function DC(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{}class Bt extends wv{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new xC(t,n,s):n==="array-contains"?new MC(t,s):n==="in"?new UC(t,s):n==="not-in"?new FC(t,s):n==="array-contains-any"?new $C(t,s):new Bt(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new LC(t,s):new VC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mr(n,this.value)):n!==null&&Hs(this.value)===Hs(n)&&this.matchesComparison(Mr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ze extends wv{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Ze(t,n)}matches(t){return Av(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Av(e){return e.op==="and"}function Iv(e){return kC(e)&&Av(e)}function kC(e){for(const t of e.filters)if(t instanceof Ze)return!1;return!0}function Ju(e){if(e instanceof Bt)return e.field.canonicalString()+e.op.toString()+Ur(e.value);if(Iv(e))return e.filters.map(t=>Ju(t)).join(",");{const t=e.filters.map(n=>Ju(n)).join(",");return`${e.op}(${t})`}}function bv(e,t){return e instanceof Bt?function(s,r){return r instanceof Bt&&s.op===r.op&&s.field.isEqual(r.field)&&yn(s.value,r.value)}(e,t):e instanceof Ze?function(s,r){return r instanceof Ze&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&bv(o,r.filters[a]),!0):!1}(e,t):void Z()}function Rv(e){return e instanceof Bt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ur(n.value)}`}(e):e instanceof Ze?function(n){return n.op.toString()+" {"+n.getFilters().map(Rv).join(" ,")+"}"}(e):"Filter"}class xC extends Bt{constructor(t,n,s){super(t,n,s),this.key=G.fromName(s.referenceValue)}matches(t){const n=G.comparator(t.key,this.key);return this.matchesComparison(n)}}class LC extends Bt{constructor(t,n){super(t,"in",n),this.keys=Sv("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class VC extends Bt{constructor(t,n){super(t,"not-in",n),this.keys=Sv("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Sv(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>G.fromName(s.referenceValue))}class MC extends Bt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ed(n)&&ao(n.arrayValue,this.value)}}class UC extends Bt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ao(this.value.arrayValue,n)}}class FC extends Bt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ao(this.value.arrayValue,n)}}class $C extends Bt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ed(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ao(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function lm(e,t=null,n=[],s=[],r=null,i=null,o=null){return new BC(e,t,n,s,r,i,o)}function Td(e){const t=ot(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Ju(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Qc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ur(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ur(s)).join(",")),t.he=n}return t.he}function wd(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!DC(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!bv(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!cm(e.startAt,t.startAt)&&cm(e.endAt,t.endAt)}function Zu(e){return G.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function jC(e,t,n,s,r,i,o,a){return new Js(e,t,n,s,r,i,o,a)}function Ad(e){return new Js(e)}function um(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Id(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Xc(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function bd(e){return e.collectionGroup!==null}function br(e){const t=ot(e);if(t.Pe===null){t.Pe=[];const n=Xc(t),s=Id(t);if(n!==null&&s===null)n.isKeyField()||t.Pe.push(new Ir(n)),t.Pe.push(new Ir(ie.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Ir(ie.keyField(),i))}}}return t.Pe}function kn(e){const t=ot(e);return t.Ie||(t.Ie=qC(t,br(e))),t.Ie}function qC(e,t){if(e.limitType==="F")return lm(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Ir(r.field,i)});const n=e.endAt?new Fr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Fr(e.startAt.position,e.startAt.inclusive):null;return lm(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}}function th(e,t){t.getFirstInequalityField(),Xc(e);const n=e.filters.concat([t]);return new Js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tc(e,t,n){return new Js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Jc(e,t){return wd(kn(e),kn(t))&&e.limitType===t.limitType}function Cv(e){return`${Td(kn(e))}|lt:${e.limitType}`}function eh(e){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>Rv(r)).join(", ")}]`),Qc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Ur(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Ur(r)).join(",")),`Target(${s})`}(kn(e))}; limitType=${e.limitType})`}function Zc(e,t){return t.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):G.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(e,t)&&function(s,r){for(const i of br(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(s,r){return!(s.startAt&&!function(o,a,c){const l=am(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,br(s),r)||s.endAt&&!function(o,a,c){const l=am(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,br(s),r))}(e,t)}function HC(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Pv(e){return(t,n)=>{let s=!1;for(const r of br(e)){const i=WC(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function WC(e,t,n){const s=e.field.isKeyField()?G.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Mr(c,l):Z()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Xs(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return vv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new Nt(G.comparator);function xn(){return KC}const Ov=new Nt(G.comparator);function Ii(...e){let t=Ov;for(const n of e)t=t.insert(n.key,n);return t}function Nv(e){let t=Ov;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ps(){return Li()}function Dv(){return Li()}function Li(){return new si(e=>e.toString(),(e,t)=>e.isEqual(t))}const zC=new Nt(G.comparator),GC=new ce(G.comparator);function ut(...e){let t=GC;for(const n of e)t=t.add(n);return t}const QC=new ce(vt);function YC(){return QC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ja(t)?"-0":t}}function xv(e){return{integerValue:""+e}}function XC(e,t){return CC(t)?xv(t):kv(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this._=void 0}}function JC(e,t,n){return e instanceof ec?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Yc(i)&&(i=vd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof co?Vv(e,t):e instanceof lo?Mv(e,t):function(r,i){const o=Lv(r,i),a=hm(o)+hm(r.Ee);return Xu(o)&&Xu(r.Ee)?xv(a):kv(r.serializer,a)}(e,t)}function ZC(e,t,n){return e instanceof co?Vv(e,t):e instanceof lo?Mv(e,t):n}function Lv(e,t){return e instanceof nc?function(s){return Xu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(t)?t:{integerValue:0}:null}class ec extends tl{}class co extends tl{constructor(t){super(),this.elements=t}}function Vv(e,t){const n=Uv(t);for(const s of e.elements)n.some(r=>yn(r,s))||n.push(s);return{arrayValue:{values:n}}}class lo extends tl{constructor(t){super(),this.elements=t}}function Mv(e,t){let n=Uv(t);for(const s of e.elements)n=n.filter(r=>!yn(r,s));return{arrayValue:{values:n}}}class nc extends tl{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function hm(e){return $t(e.integerValue||e.doubleValue)}function Uv(e){return Ed(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function tP(e,t){return e.field.isEqual(t.field)&&function(s,r){return s instanceof co&&r instanceof co||s instanceof lo&&r instanceof lo?Vr(s.elements,r.elements,yn):s instanceof nc&&r instanceof nc?yn(s.Ee,r.Ee):s instanceof ec&&r instanceof ec}(e.transform,t.transform)}class eP{constructor(t,n){this.version=t,this.transformResults=n}}class Ye{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ye}static exists(t){return new Ye(void 0,t)}static updateTime(t){return new Ye(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ba(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class el{}function Fv(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Rd(e.key,Ye.none()):new So(e.key,e.data,Ye.none());{const n=e.data,s=Ee.empty();let r=new ce(ie.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new _s(e.key,s,new Oe(r.toArray()),Ye.none())}}function nP(e,t,n){e instanceof So?function(r,i,o){const a=r.value.clone(),c=fm(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof _s?function(r,i,o){if(!ba(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=fm(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll($v(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Vi(e,t,n,s){return e instanceof So?function(i,o,a,c){if(!ba(i.precondition,o))return a;const l=i.value.clone(),u=pm(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,s):e instanceof _s?function(i,o,a,c){if(!ba(i.precondition,o))return a;const l=pm(i.fieldTransforms,c,o),u=o.data;return u.setAll($v(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,o,a){return ba(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function sP(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Lv(s.transform,r||null);i!=null&&(n===null&&(n=Ee.empty()),n.set(s.field,i))}return n||null}function dm(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Vr(s,r,(i,o)=>tP(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class So extends el{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _s extends el{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $v(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function fm(e,t,n){const s=new Map;Ct(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,ZC(o,a,n[r]))}return s}function pm(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,JC(i,o,t))}return s}class Rd extends el{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rP extends el{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&nP(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Vi(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Vi(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Dv();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Fv(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(st.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ut())}isEqual(t){return this.batchId===t.batchId&&Vr(this.mutations,t.mutations,(n,s)=>dm(n,s))&&Vr(this.baseMutations,t.baseMutations,(n,s)=>dm(n,s))}}class Sd{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){Ct(t.mutations.length===s.length);let r=function(){return zC}();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Sd(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft,ft;function cP(e){switch(e){default:return Z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Bv(e){if(e===void 0)return Dn("GRPC error has no .code"),T.UNKNOWN;switch(e){case Ft.OK:return T.OK;case Ft.CANCELLED:return T.CANCELLED;case Ft.UNKNOWN:return T.UNKNOWN;case Ft.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ft.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ft.INTERNAL:return T.INTERNAL;case Ft.UNAVAILABLE:return T.UNAVAILABLE;case Ft.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ft.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ft.NOT_FOUND:return T.NOT_FOUND;case Ft.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ft.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ft.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ft.ABORTED:return T.ABORTED;case Ft.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ft.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ft.DATA_LOSS:return T.DATA_LOSS;default:return Z()}}(ft=Ft||(Ft={}))[ft.OK=0]="OK",ft[ft.CANCELLED=1]="CANCELLED",ft[ft.UNKNOWN=2]="UNKNOWN",ft[ft.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ft[ft.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ft[ft.NOT_FOUND=5]="NOT_FOUND",ft[ft.ALREADY_EXISTS=6]="ALREADY_EXISTS",ft[ft.PERMISSION_DENIED=7]="PERMISSION_DENIED",ft[ft.UNAUTHENTICATED=16]="UNAUTHENTICATED",ft[ft.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ft[ft.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ft[ft.ABORTED=10]="ABORTED",ft[ft.OUT_OF_RANGE=11]="OUT_OF_RANGE",ft[ft.UNIMPLEMENTED=12]="UNIMPLEMENTED",ft[ft.INTERNAL=13]="INTERNAL",ft[ft.UNAVAILABLE=14]="UNAVAILABLE",ft[ft.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new Ar([4294967295,4294967295],0);function mm(e){const t=lP().encode(e),n=new fC;return n.update(t),new Uint8Array(n.digest())}function gm(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ar([n,s],0),new Ar([r,i],0)]}class Cd{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new bi(`Invalid padding: ${n}`);if(s<0)throw new bi(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new bi(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new bi(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*t.length-n,this.Re=Ar.fromNumber(this.Ae)}Ve(t,n,s){let r=t.add(n.multiply(Ar.fromNumber(s)));return r.compare(uP)===1&&(r=new Ar([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const n=mm(t),[s,r]=gm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(s,r,i);if(!this.me(o))return!1}return!0}static create(t,n,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Cd(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const n=mm(t),[s,r]=gm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(s,r,i);this.fe(o)}}fe(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,Co.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new nl(st.min(),r,new Nt(vt),xn(),ut())}}class Co{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Co(s,n,ut(),ut(),ut())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,n,s,r){this.ge=t,this.removedTargetIds=n,this.key=s,this.pe=r}}class jv{constructor(t,n){this.targetId=t,this.ye=n}}class qv{constructor(t,n,s=ue.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class _m{constructor(){this.we=0,this.Se=vm(),this.be=ue.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(t){t.approximateByteSize()>0&&(this.ve=!0,this.be=t)}xe(){let t=ut(),n=ut(),s=ut();return this.Se.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Z()}}),new Co(this.be,this.De,t,n,s)}Oe(){this.ve=!1,this.Se=vm()}Ne(t,n){this.ve=!0,this.Se=this.Se.insert(t,n)}Be(t){this.ve=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class hP{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=xn(),this.Ue=ym(),this.We=new Nt(vt)}Ge(t){for(const n of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(n,t.pe):this.je(n,t.key,t.pe);for(const n of t.removedTargetIds)this.je(n,t.key,t.pe)}He(t){this.forEachTarget(t,n=>{const s=this.Je(n);switch(t.state){case 0:this.Ye(n)&&s.Me(t.resumeToken);break;case 1:s.ke(),s.Ce||s.Oe(),s.Me(t.resumeToken);break;case 2:s.ke(),s.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(s.qe(),s.Me(t.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),s.Me(t.resumeToken));break;default:Z()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ke.forEach((s,r)=>{this.Ye(r)&&n(r)})}Xe(t){const n=t.targetId,s=t.ye.count,r=this.et(n);if(r){const i=r.target;if(Zu(i))if(s===0){const o=new G(i.path);this.je(n,o,se.newNoDocument(o,st.min()))}else Ct(s===1);else{const o=this.tt(n);if(o!==s){const a=this.nt(t),c=a?this.rt(a,t,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(t){const n=t.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=qs(s).toUint8Array()}catch(c){if(c instanceof Ev)return Lr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Cd(o,r,i)}catch(c){return Lr(c instanceof bi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(t,n,s){return n.ye.count===s-this.ot(t,n.targetId)?0:2}ot(t,n){const s=this.Qe.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.je(n,i,null),r++)}),r}_t(t){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Zu(a.target)){const c=new G(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,se.newNoDocument(c,t))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let s=ut();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(t));const r=new nl(t,n,this.We,this.$e,s);return this.$e=xn(),this.Ue=ym(),this.We=new Nt(vt),r}ze(t,n){if(!this.Ye(t))return;const s=this.ut(t,n.key)?2:0;this.Je(t).Ne(n.key,s),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}je(t,n,s){if(!this.Ye(t))return;const r=this.Je(t);this.ut(t,n)?r.Ne(n,1):r.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),s&&(this.$e=this.$e.insert(n,s))}removeTarget(t){this.Ke.delete(t)}tt(t){const n=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let n=this.Ke.get(t);return n||(n=new _m,this.Ke.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new ce(vt),this.Ue=this.Ue.insert(t,n)),n}Ye(t){const n=this.et(t)!==null;return n||H("WatchChangeAggregator","Detected inactive target",t),n}et(t){const n=this.Ke.get(t);return n&&n.Ce?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new _m),this.Qe.getRemoteKeysForTarget(t).forEach(n=>{this.je(t,n,null)})}ut(t,n){return this.Qe.getRemoteKeysForTarget(t).has(n)}}function ym(){return new Nt(G.comparator)}function vm(){return new Nt(G.comparator)}const dP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pP=(()=>({and:"AND",or:"OR"}))();class mP{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function nh(e,t){return e.useProto3Json||Qc(t)?t:{value:t}}function sc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hv(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function gP(e,t){return sc(e,t.toTimestamp())}function dn(e){return Ct(!!e),st.fromTimestamp(function(n){const s=us(n);return new qt(s.seconds,s.nanos)}(e))}function Pd(e,t){return function(s){return new It(["projects",s.projectId,"databases",s.database])}(e).child("documents").child(t).canonicalString()}function Wv(e){const t=It.fromString(e);return Ct(Qv(t)),t}function sh(e,t){return Pd(e.databaseId,t.path)}function Kl(e,t){const n=Wv(t);if(n.get(1)!==e.databaseId.projectId)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G(Kv(n))}function rh(e,t){return Pd(e.databaseId,t)}function _P(e){const t=Wv(e);return t.length===4?It.emptyPath():Kv(t)}function ih(e){return new It(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Kv(e){return Ct(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Em(e,t,n){return{name:sh(e,t),fields:n.value.mapValue.fields}}function yP(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ct(u===void 0||typeof u=="string"),ue.fromBase64String(u||"")):(Ct(u===void 0||u instanceof Uint8Array),ue.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:Bv(l.code);return new L(u,l.message||"")}(o);n=new qv(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Kl(e,s.document.name),i=dn(s.document.updateTime),o=s.document.createTime?dn(s.document.createTime):st.min(),a=new Ee({mapValue:{fields:s.document.fields}}),c=se.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ra(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Kl(e,s.document),i=s.readTime?dn(s.readTime):st.min(),o=se.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ra([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Kl(e,s.document),i=s.removedTargetIds||[];n=new Ra([],i,r,null)}else{if(!("filter"in t))return Z();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new aP(r,i),a=s.targetId;n=new jv(a,o)}}return n}function vP(e,t){let n;if(t instanceof So)n={update:Em(e,t.key,t.value)};else if(t instanceof Rd)n={delete:sh(e,t.key)};else if(t instanceof _s)n={update:Em(e,t.key,t.data),updateMask:CP(t.fieldMask)};else{if(!(t instanceof rP))return Z();n={verify:sh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof ec)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nc)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw Z()}(0,s))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:gP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(e,t.precondition)),n}function EP(e,t){return e&&e.length>0?(Ct(t!==void 0),e.map(n=>function(r,i){let o=r.updateTime?dn(r.updateTime):dn(i);return o.isEqual(st.min())&&(o=dn(i)),new eP(o,r.transformResults||[])}(n,t))):[]}function TP(e,t){return{documents:[rh(e,t.path)]}}function wP(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=rh(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=rh(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Gv(Ze.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:ur(h.field),direction:bP(h.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=nh(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function AP(e){let t=_P(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ct(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=zv(h);return d instanceof Ze&&Iv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Ir(hr(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Qc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Fr(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Fr(f,d)}(n.endAt)),jC(t,r,o,i,a,"F",c,l)}function IP(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function zv(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=hr(n.unaryFilter.field);return Bt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=hr(n.unaryFilter.field);return Bt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hr(n.unaryFilter.field);return Bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hr(n.unaryFilter.field);return Bt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(e):e.fieldFilter!==void 0?function(n){return Bt.create(hr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Ze.create(n.compositeFilter.filters.map(s=>zv(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(e):Z()}function bP(e){return dP[e]}function RP(e){return fP[e]}function SP(e){return pP[e]}function ur(e){return{fieldPath:e.canonicalString()}}function hr(e){return ie.fromServerFormat(e.fieldPath)}function Gv(e){return e instanceof Bt?function(n){if(n.op==="=="){if(om(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NAN"}};if(im(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(om(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NOT_NAN"}};if(im(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ur(n.field),op:RP(n.op),value:n.value}}}(e):e instanceof Ze?function(n){const s=n.getFilters().map(r=>Gv(r));return s.length===1?s[0]:{compositeFilter:{op:SP(n.op),filters:s}}}(e):Z()}function CP(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Qv(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,n,s,r,i=st.min(),o=st.min(),a=ue.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new ts(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(t){this.ht=t}}function OP(e){const t=AP({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?tc(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(){this._n=new DP}addToCollectionParentIndex(t,n){return this._n.add(n),O.resolve()}getCollectionParents(t,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return O.resolve()}deleteFieldIndex(t,n){return O.resolve()}getDocumentsMatchingTarget(t,n){return O.resolve(null)}getIndexType(t,n){return O.resolve(0)}getFieldIndexes(t,n){return O.resolve([])}getNextCollectionGroupToUpdate(t){return O.resolve(null)}getMinOffset(t,n){return O.resolve(ls.min())}getMinOffsetFromCollectionGroup(t,n){return O.resolve(ls.min())}updateCollectionGroup(t,n,s){return O.resolve()}updateIndexEntries(t,n){return O.resolve()}}class DP{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new ce(It.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new ce(It.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new $r(0)}static Bn(){return new $r(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(){this.changes=new si(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,se.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?O.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Vi(s.mutation,r,Oe.empty(),qt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,ut()).next(()=>s))}getLocalViewOfDocuments(t,n,s=ut()){const r=Ps();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Ii();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Ps();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,ut()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=xn();const o=Li(),a=function(){return Li()}();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof _s)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Vi(u.mutation,l,u.mutation.getFieldMask(),qt.now())):o.set(l.key,Oe.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new xP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Li();let r=new Nt((o,a)=>o-a),i=ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Oe.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ut()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Dv();u.forEach(d=>{if(!i.has(d)){const f=Fv(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return O.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return G.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):bd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):O.resolve(Ps());let a=-1,c=i;return o.next(l=>O.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?O.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,ut())).next(u=>({batchId:a,changes:Nv(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new G(n)).next(s=>{let r=Ii();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Ii();return this.indexManager.getCollectionParents(t,r).next(o=>O.forEach(o,a=>{const c=function(u,h){return new Js(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,se.newInvalidDocument(l)))});let o=Ii();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Vi(l.mutation,c,Oe.empty(),qt.now()),Zc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:dn(r.createTime)}}(n)),O.resolve()}getNamedQuery(t,n){return O.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(r){return{name:r.name,query:OP(r.bundledQuery),readTime:dn(r.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(){this.overlays=new Nt(G.comparator),this.hr=new Map}getOverlay(t,n){return O.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ps();return O.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.It(t,n,i)}),O.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.hr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(s)),O.resolve()}getOverlaysForCollection(t,n,s){const r=Ps(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return O.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new Nt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Ps(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ps(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return O.resolve(a)}It(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hr.get(r.largestBatchId).delete(s.key);this.hr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new oP(n,s));let i=this.hr.get(n);i===void 0&&(i=ut(),this.hr.set(n,i)),this.hr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.Pr=new ce(Wt.Ir),this.Tr=new ce(Wt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const s=new Wt(t,n);this.Pr=this.Pr.add(s),this.Tr=this.Tr.add(s)}dr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ar(new Wt(t,n))}Rr(t,n){t.forEach(s=>this.removeReference(s,n))}Vr(t){const n=new G(new It([])),s=new Wt(n,t),r=new Wt(n,t+1),i=[];return this.Tr.forEachInRange([s,r],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new G(new It([])),s=new Wt(n,t),r=new Wt(n,t+1);let i=ut();return this.Tr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Wt(t,0),s=this.Pr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Wt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return G.comparator(t.key,n.key)||vt(t.pr,n.pr)}static Er(t,n){return vt(t.pr,n.pr)||G.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ce(Wt.Ir)}checkEmpty(t){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iP(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.wr=this.wr.add(new Wt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(t,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.br(s),i=r<0?0:r;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Wt(n,0),r=new Wt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([s,r],o=>{const a=this.Sr(o.pr);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new ce(vt);return n.forEach(r=>{const i=new Wt(r,0),o=new Wt(r,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{s=s.add(a.pr)})}),O.resolve(this.Dr(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;G.isDocumentKey(i)||(i=i.child(""));const o=new Wt(new G(i),0);let a=new ce(vt);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(s=>{const r=this.Sr(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){Ct(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.wr;return O.forEach(n.mutations,r=>{const i=new Wt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.wr=s})}Mn(t){}containsKey(t,n){const s=new Wt(n,0),r=this.wr.firstAfterOrEqual(s);return O.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,O.resolve()}vr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(t){this.Cr=t,this.docs=function(){return new Nt(G.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return O.resolve(s?s.document.mutableCopy():se.newInvalidDocument(n))}getEntries(t,n){let s=xn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():se.newInvalidDocument(r))}),O.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=xn();const o=n.path,a=new G(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||bC(IC(u),s)<=0||(r.has(u.key)||Zc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(t,n,s,r){Z()}Fr(t,n){return O.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new $P(this)}getSize(t){return O.resolve(this.size)}}class $P extends kP{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.ar.addEntry(t,r)):this.ar.removeEntry(s)}),O.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(t){this.persistence=t,this.Mr=new si(n=>Td(n),wd),this.lastRemoteSnapshotVersion=st.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Od,this.targetCount=0,this.Br=$r.Nn()}forEachTarget(t,n){return this.Mr.forEach((s,r)=>n(r)),O.resolve()}getLastRemoteSnapshotVersion(t){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return O.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Or&&(this.Or=n),O.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new $r(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(t,n){return this.qn(n),O.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),O.waitFor(i).next(()=>r)}getTargetCount(t){return O.resolve(this.targetCount)}getTargetData(t,n){const s=this.Mr.get(n)||null;return O.resolve(s)}addMatchingKeys(t,n,s){return this.Nr.dr(n,s),O.resolve()}removeMatchingKeys(t,n,s){this.Nr.Rr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Nr.gr(n);return O.resolve(s)}containsKey(t,n){return O.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(t,n){this.Lr={},this.overlays={},this.kr=new yd(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new BP(this),this.indexManager=new NP,this.remoteDocumentCache=function(r){return new FP(r)}(s=>this.referenceDelegate.Kr(s)),this.serializer=new PP(n),this.$r=new VP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new MP,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Lr[t.toKey()];return s||(s=new UP(n,this.referenceDelegate),this.Lr[t.toKey()]=s),s}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,s){H("MemoryPersistence","Starting transaction:",t);const r=new qP(this.kr.next());return this.referenceDelegate.Ur(),s(r).next(i=>this.referenceDelegate.Wr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gr(t,n){return O.or(Object.values(this.Lr).map(s=>()=>s.containsKey(t,n)))}}class qP extends SC{constructor(t){super(),this.currentSequenceNumber=t}}class Nd{constructor(t){this.persistence=t,this.zr=new Od,this.jr=null}static Hr(t){return new Nd(t)}get Jr(){if(this.jr)return this.jr;throw Z()}addReference(t,n,s){return this.zr.addReference(s,n),this.Jr.delete(s.toString()),O.resolve()}removeReference(t,n,s){return this.zr.removeReference(s,n),this.Jr.add(s.toString()),O.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(r=>this.Jr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Jr.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,s=>{const r=G.fromPath(s);return this.Yr(t,r).next(i=>{i||n.removeEntry(r,st.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(s=>{s?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.qi=s,this.Qi=r}static Ki(t,n){let s=ut(),r=ut();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Dd(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.$i=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Wi(t,n).next(i=>i||this.Gi(t,n,r,s)).next(i=>i||this.zi(t,n))}Wi(t,n){if(um(n))return O.resolve(null);let s=kn(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=tc(n,null,"F"),s=kn(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=ut(...i);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(t,tc(n,null,"F")):this.Ji(t,l,n,c)}))})))}Gi(t,n,s,r){return um(n)||r.isEqual(st.min())?this.zi(t,n):this.Ui.getDocuments(t,s).next(i=>{const o=this.ji(n,i);return this.Hi(n,o,s,r)?this.zi(t,n):(em()<=_t.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),eh(n)),this.Ji(t,o,n,AC(r,-1)))})}ji(t,n){let s=new ce(Pv(t));return n.forEach((r,i)=>{Zc(t,i)&&(s=s.add(i))}),s}Hi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}zi(t,n){return em()<=_t.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",eh(n)),this.Ui.getDocumentsMatchingQuery(t,n,ls.min())}Ji(t,n,s,r){return this.Ui.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(t,n,s,r){this.persistence=t,this.Yi=n,this.serializer=r,this.Zi=new Nt(vt),this.Xi=new si(i=>Td(i),wd),this.es=new Map,this.ts=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this.ns(s)}ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new LP(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Zi))}}function KP(e,t,n,s){return new WP(e,t,n,s)}async function Yv(e,t){const n=ot(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.ns(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ut();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function zP(e,t){const n=ot(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=O.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(c,g)).next(y=>{const v=l.docVersions.get(g);Ct(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ut();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function Xv(e){const t=ot(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function GP(e,t){const n=ot(e),s=t.snapshotVersion;let r=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});r=n.Zi;const a=[];t.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(ue.EMPTY_BYTE_STRING,st.min()).withLastLimboFreeSnapshotVersion(st.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(y,v,A){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(i,f))});let c=xn(),l=ut();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(QP(i,o,t.documentUpdates).next(u=>{c=u.ss,l=u.os})),!s.isEqual(st.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Zi=r,i))}function QP(e,t,n){let s=ut(),r=ut();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=xn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(st.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:r}})}function YP(e,t){const n=ot(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function XP(e,t){const n=ot(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Qr.getTargetData(s,t).next(i=>i?(r=i,O.resolve(r)):n.Qr.allocateTargetId(s).next(o=>(r=new ts(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Zi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(s.targetId,s),n.Xi.set(t,s.targetId)),s})}async function oh(e,t,n){const s=ot(e),r=s.Zi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ro(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Zi=s.Zi.remove(t),s.Xi.delete(r.target)}function Tm(e,t,n){const s=ot(e);let r=st.min(),i=ut();return s.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=ot(c),d=h.Xi.get(u);return d!==void 0?O.resolve(h.Zi.get(d)):h.Qr.getTargetData(l,u)}(s,o,kn(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Yi.getDocumentsMatchingQuery(o,t,n?r:st.min(),n?i:ut())).next(a=>(JP(s,HC(t),a),{documents:a,_s:i})))}function JP(e,t,n){let s=e.es.get(t)||st.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.es.set(t,s)}class wm{constructor(){this.activeTargetIds=YC()}Is(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ts(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ps(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ZP{constructor(){this.Ys=new wm,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Ys.Is(t),this.Zs[t]||"not-current"}updateQueryState(t,n,s){this.Zs[t]=n}removeLocalQueryTarget(t){this.Ys.Ts(t)}isLocalQueryTarget(t){return this.Ys.activeTargetIds.has(t)}clearQueryState(t){delete this.Zs[t]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(t){return this.Ys.activeTargetIds.has(t)}start(){return this.Ys=new wm,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{Xs(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}io(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa=null;function zl(){return sa===null?sa=function(){return 268435456+Math.round(2147483648*Math.random())}():sa++,"0x"+sa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(t){this._o=t._o,this.ao=t.ao}uo(t){this.co=t}lo(t){this.ho=t}onMessage(t){this.Po=t}close(){this.ao()}send(t){this._o(t)}Io(){this.co()}To(t){this.ho(t)}Eo(t){this.Po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="WebChannelConnection";class sO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ao=s+"://"+n.host,this.Ro=`projects/${r}/databases/${i}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get mo(){return!1}fo(n,s,r,i,o){const a=zl(),c=this.po(n,s);H("RestConnection",`Sending RPC '${n}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,i,o),this.wo(n,c,l,r).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Lr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",r),u})}So(n,s,r,i,o,a){return this.fo(n,s,r,i,o)}yo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ni}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}po(n,s){const r=eO[n];return`${this.Ao}/v1/${s}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}wo(t,n,s,r){const i=zl();return new Promise((o,a)=>{const c=new dC;c.setWithCredentials(!0),c.listenOnce(uC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Wl.NO_ERROR:const u=c.getResponseJson();H(ee,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Wl.TIMEOUT:H(ee,`RPC '${t}' ${i} timed out`),a(new L(T.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const h=c.getStatus();if(H(ee,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const A=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(A)>=0?A:T.UNKNOWN}(f.status);a(new L(g,f.message))}else a(new L(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new L(T.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(ee,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(r);H(ee,`RPC '${t}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}bo(t,n,s){const r=zl(),i=[this.Ao,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=cC(),a=lC(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");H(ee,`Creating RPC '${t}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new nO({_o:v=>{f?H(ee,`Not sending because RPC '${t}' stream ${r} is closed:`,v):(d||(H(ee,`Opening RPC '${t}' stream ${r} transport.`),h.open(),d=!0),H(ee,`RPC '${t}' stream ${r} sending:`,v),h.send(v))},ao:()=>h.close()}),y=(v,A,R)=>{v.listen(A,N=>{try{R(N)}catch(w){setTimeout(()=>{throw w},0)}})};return y(h,ta.EventType.OPEN,()=>{f||H(ee,`RPC '${t}' stream ${r} transport opened.`)}),y(h,ta.EventType.CLOSE,()=>{f||(f=!0,H(ee,`RPC '${t}' stream ${r} transport closed`),g.To())}),y(h,ta.EventType.ERROR,v=>{f||(f=!0,Lr(ee,`RPC '${t}' stream ${r} transport errored:`,v),g.To(new L(T.UNAVAILABLE,"The operation could not be completed")))}),y(h,ta.EventType.MESSAGE,v=>{var A;if(!f){const R=v.data[0];Ct(!!R);const N=R,w=N.error||((A=N[0])===null||A===void 0?void 0:A.error);if(w){H(ee,`RPC '${t}' stream ${r} received error:`,w);const U=w.status;let $=function(j){const J=Ft[j];if(J!==void 0)return Bv(J)}(U),Y=w.message;$===void 0&&($=T.INTERNAL,Y="Unknown error status: "+U+" with message "+w.message),f=!0,g.To(new L($,Y)),h.close()}else H(ee,`RPC '${t}' stream ${r} received:`,R),g.Eo(R)}}),y(a,hC.STAT_EVENT,v=>{v.stat===Zp.PROXY?H(ee,`RPC '${t}' stream ${r} detected buffering proxy`):v.stat===Zp.NOPROXY&&H(ee,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.Io()},0),g}}function Gl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(e){return new mP(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(t,n,s=1e3,r=1.5,i=6e4){this.oi=t,this.timerId=n,this.Do=s,this.vo=r,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(t){this.cancel();const n=Math.floor(this.Fo+this.Bo()),s=Math.max(0,Date.now()-this.xo),r=Math.max(0,n-s);r>0&&H("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.xo=Date.now(),t())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(t,n,s,r,i,o,a,c){this.oi=t,this.ko=s,this.qo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new Jv(t,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(t){this.Zo(),this.stream.send(t)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(t,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,t!==4?this.Uo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.lo(n)}e_(){}auth(){this.state=1;const t=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Qo===n&&this.n_(s,r)},s=>{t(()=>{const r=new L(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.r_(r)})})}n_(t,n){const s=this.t_(this.Qo);this.stream=this.i_(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(r=>{s(()=>this.r_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(t){return H("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}t_(t){return n=>{this.oi.enqueueAndForget(()=>this.Qo===t?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rO extends Zv{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}i_(t,n){return this.connection.bo("Listen",t,n)}onMessage(t){this.Uo.reset();const n=yP(this.serializer,t),s=function(i){if(!("targetChange"in i))return st.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?st.min():o.readTime?dn(o.readTime):st.min()}(t);return this.listener.s_(n,s)}o_(t){const n={};n.database=ih(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Zu(c)?{documents:TP(i,c)}:{query:wP(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Hv(i,o.resumeToken);const l=nh(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(st.min())>0){a.readTime=sc(i,o.snapshotVersion.toTimestamp());const l=nh(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const s=IP(this.serializer,t);s&&(n.labels=s),this.Yo(n)}__(t){const n={};n.database=ih(this.serializer),n.removeTarget=t,this.Yo(n)}}class iO extends Zv{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(t,n){return this.connection.bo("Write",t,n)}onMessage(t){if(Ct(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_){this.Uo.reset();const n=EP(t.writeResults,t.commitTime),s=dn(t.commitTime);return this.listener.l_(s,n)}return Ct(!t.writeResults||t.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const t={};t.database=ih(this.serializer),this.Yo(t)}c_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>vP(this.serializer,s))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.I_=!1}T_(){if(this.I_)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}fo(t,n,s){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.fo(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(T.UNKNOWN,r.toString())})}So(t,n,s,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(T.UNKNOWN,i.toString())})}terminate(){this.I_=!0}}class aO{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(t){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.m_("Offline")))}set(t){this.p_(),this.d_=0,t==="Online"&&(this.R_=!1),this.m_(t)}m_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}f_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Dn(n),this.R_=!1):H("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(o=>{s.enqueueAndForget(async()=>{Zs(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ot(c);l.S_.add(4),await Po(l),l.v_.set("Unknown"),l.S_.delete(4),await rl(l)}(this))})}),this.v_=new aO(s,r)}}async function rl(e){if(Zs(e))for(const t of e.b_)await t(!0)}async function Po(e){for(const t of e.b_)await t(!1)}function tE(e,t){const n=ot(e);n.w_.has(t.targetId)||(n.w_.set(t.targetId,t),Ld(n)?xd(n):ri(n).Go()&&kd(n,t))}function eE(e,t){const n=ot(e),s=ri(n);n.w_.delete(t),s.Go()&&nE(n,t),n.w_.size===0&&(s.Go()?s.Ho():Zs(n)&&n.v_.set("Unknown"))}function kd(e,t){if(e.C_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(st.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ri(e).o_(t)}function nE(e,t){e.C_.Le(t),ri(e).__(t)}function xd(e){e.C_=new hP({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.w_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),ri(e).start(),e.v_.V_()}function Ld(e){return Zs(e)&&!ri(e).Wo()&&e.w_.size>0}function Zs(e){return ot(e).S_.size===0}function sE(e){e.C_=void 0}async function lO(e){e.w_.forEach((t,n)=>{kd(e,t)})}async function uO(e,t){sE(e),Ld(e)?(e.v_.g_(t),xd(e)):e.v_.set("Unknown")}async function hO(e,t,n){if(e.v_.set("Online"),t instanceof qv&&t.state===2&&t.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.w_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.w_.delete(a),r.C_.removeTarget(a))}(e,t)}catch(s){H("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await rc(e,s)}else if(t instanceof Ra?e.C_.Ge(t):t instanceof jv?e.C_.Xe(t):e.C_.He(t),!n.isEqual(st.min()))try{const s=await Xv(e.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.w_.get(l);u&&i.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.w_.get(c);if(!u)return;i.w_.set(c,u.withResumeToken(ue.EMPTY_BYTE_STRING,u.snapshotVersion)),nE(i,c);const h=new ts(u.target,c,l,u.sequenceNumber);kd(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(s){H("RemoteStore","Failed to raise snapshot:",s),await rc(e,s)}}async function rc(e,t,n){if(!Ro(t))throw t;e.S_.add(1),await Po(e),e.v_.set("Offline"),n||(n=()=>Xv(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),e.S_.delete(1),await rl(e)})}function rE(e,t){return t().catch(n=>rc(e,n,t))}async function il(e){const t=ot(e),n=hs(t);let s=t.y_.length>0?t.y_[t.y_.length-1].batchId:-1;for(;dO(t);)try{const r=await YP(t.localStore,s);if(r===null){t.y_.length===0&&n.Ho();break}s=r.batchId,fO(t,r)}catch(r){await rc(t,r)}iE(t)&&oE(t)}function dO(e){return Zs(e)&&e.y_.length<10}function fO(e,t){e.y_.push(t);const n=hs(e);n.Go()&&n.u_&&n.c_(t.mutations)}function iE(e){return Zs(e)&&!hs(e).Wo()&&e.y_.length>0}function oE(e){hs(e).start()}async function pO(e){hs(e).P_()}async function mO(e){const t=hs(e);for(const n of e.y_)t.c_(n.mutations)}async function gO(e,t,n){const s=e.y_.shift(),r=Sd.from(s,t,n);await rE(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await il(e)}async function _O(e,t){t&&hs(e).u_&&await async function(s,r){if(function(o){return cP(o)&&o!==T.ABORTED}(r.code)){const i=s.y_.shift();hs(s).jo(),await rE(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await il(s)}}(e,t),iE(e)&&oE(e)}async function Im(e,t){const n=ot(e);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const s=Zs(n);n.S_.add(3),await Po(n),s&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.S_.delete(3),await rl(n)}async function yO(e,t){const n=ot(e);t?(n.S_.delete(2),await rl(n)):t||(n.S_.add(2),await Po(n),n.v_.set("Unknown"))}function ri(e){return e.F_||(e.F_=function(n,s,r){const i=ot(n);return i.T_(),new rO(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{uo:lO.bind(null,e),lo:uO.bind(null,e),s_:hO.bind(null,e)}),e.b_.push(async t=>{t?(e.F_.jo(),Ld(e)?xd(e):e.v_.set("Unknown")):(await e.F_.stop(),sE(e))})),e.F_}function hs(e){return e.M_||(e.M_=function(n,s,r){const i=ot(n);return i.T_(),new iO(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{uo:pO.bind(null,e),lo:_O.bind(null,e),h_:mO.bind(null,e),l_:gO.bind(null,e)}),e.b_.push(async t=>{t?(e.M_.jo(),await il(e)):(await e.M_.stop(),e.y_.length>0&&(H("RemoteStore",`Stopping write stream with ${e.y_.length} pending writes`),e.y_=[]))})),e.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Vd(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(e,t){if(Dn("AsyncQueue",`${t}: ${e}`),Ro(e))return new L(T.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t){this.comparator=t?(n,s)=>t(n,s)||G.comparator(n.key,s.key):(n,s)=>G.comparator(n.key,s.key),this.keyedMap=Ii(),this.sortedSet=new Nt(this.comparator)}static emptySet(t){return new Rr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Rr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Rr;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.x_=new Nt(G.comparator)}track(t){const n=t.doc.key,s=this.x_.get(n);s?t.type!==0&&s.type===3?this.x_=this.x_.insert(n,t):t.type===3&&s.type!==1?this.x_=this.x_.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.x_=this.x_.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.x_=this.x_.remove(n):t.type===1&&s.type===2?this.x_=this.x_.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):Z():this.x_=this.x_.insert(n,t)}O_(){const t=[];return this.x_.inorderTraversal((n,s)=>{t.push(s)}),t}}class Br{constructor(t,n,s,r,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Br(t,n,Rr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.N_=void 0,this.listeners=[]}}class EO{constructor(){this.queries=new si(t=>Cv(t),Jc),this.onlineState="Unknown",this.B_=new Set}}async function aE(e,t){const n=ot(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new vO),r)try{i.N_=await n.onListen(s)}catch(o){const a=Md(o,`Initialization of query '${eh(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.L_(n.onlineState),i.N_&&t.k_(i.N_)&&Ud(n)}async function cE(e,t){const n=ot(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function TO(e,t){const n=ot(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.k_(r)&&(s=!0);o.N_=r}}s&&Ud(n)}function wO(e,t,n){const s=ot(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Ud(e){e.B_.forEach(t=>{t.next()})}class lE{constructor(t,n,s){this.query=t,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=s||{}}k_(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Br(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Q_?this.U_(t)&&(this.q_.next(t),n=!0):this.W_(t,this.onlineState)&&(this.G_(t),n=!0),this.K_=t,n}onError(t){this.q_.error(t)}L_(t){this.onlineState=t;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,t)&&(this.G_(this.K_),n=!0),n}W_(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.z_||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}U_(t){if(t.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(t){t=Br.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Q_=!0,this.q_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t){this.key=t}}class hE{constructor(t){this.key=t}}class AO{constructor(t,n){this.query=t,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=ut(),this.mutatedKeys=ut(),this.ia=Pv(t),this.sa=new Rr(this.ia)}get oa(){return this.ta}_a(t,n){const s=n?n.aa:new bm,r=n?n.sa:this.sa;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((u,h)=>{const d=r.get(u),f=Zc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(s.track({type:3,doc:f}),v=!0):this.ua(d,f)||(s.track({type:2,doc:f}),v=!0,(c&&this.ia(f,c)>0||l&&this.ia(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{sa:o,aa:s,Hi:a,mutatedKeys:i}}ua(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.sa;this.sa=t.sa,this.mutatedKeys=t.mutatedKeys;const i=t.aa.O_();i.sort((l,u)=>function(d,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return g(d)-g(f)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(s);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,i.length!==0||c?{snapshot:new Br(this.query,t.sa,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new bm,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(t){return!this.ta.has(t)&&!!this.sa.has(t)&&!this.sa.get(t).hasLocalMutations}ca(t){t&&(t.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=t.current)}la(){if(!this.current)return[];const t=this.ra;this.ra=ut(),this.sa.forEach(s=>{this.Pa(s.key)&&(this.ra=this.ra.add(s.key))});const n=[];return t.forEach(s=>{this.ra.has(s)||n.push(new hE(s))}),this.ra.forEach(s=>{t.has(s)||n.push(new uE(s))}),n}Ia(t){this.ta=t._s,this.ra=ut();const n=this._a(t.documents);return this.applyChanges(n,!0)}Ta(){return Br.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class IO{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class bO{constructor(t){this.key=t,this.Ea=!1}}class RO{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new si(a=>Cv(a),Jc),this.Ra=new Map,this.Va=new Set,this.ma=new Nt(G.comparator),this.fa=new Map,this.ga=new Od,this.pa={},this.ya=new Map,this.wa=$r.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function SO(e,t){const n=MO(e);let s,r;const i=n.Aa.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Ta();else{const o=await XP(n.localStore,kn(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await CO(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&tE(n.remoteStore,o)}return r}async function CO(e,t,n,s,r){e.ba=(h,d,f)=>async function(y,v,A,R){let N=v.view._a(A);N.Hi&&(N=await Tm(y.localStore,v.query,!1).then(({documents:$})=>v.view._a($,N)));const w=R&&R.targetChanges.get(v.targetId),U=v.view.applyChanges(N,y.isPrimaryClient,w);return Sm(y,v.targetId,U.ha),U.snapshot}(e,h,d,f);const i=await Tm(e.localStore,t,!0),o=new AO(t,i._s),a=o._a(i.documents),c=Co.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),l=o.applyChanges(a,e.isPrimaryClient,c);Sm(e,n,l.ha);const u=new IO(t,n,o);return e.Aa.set(t,u),e.Ra.has(n)?e.Ra.get(n).push(t):e.Ra.set(n,[t]),l.snapshot}async function PO(e,t){const n=ot(e),s=n.Aa.get(t),r=n.Ra.get(s.targetId);if(r.length>1)return n.Ra.set(s.targetId,r.filter(i=>!Jc(i,t))),void n.Aa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await oh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),eE(n.remoteStore,s.targetId),ah(n,s.targetId)}).catch(bo)):(ah(n,s.targetId),await oh(n.localStore,s.targetId,!0))}async function OO(e,t,n){const s=UO(e);try{const r=await function(o,a){const c=ot(o),l=qt.now(),u=a.reduce((f,g)=>f.add(g.key),ut());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=xn(),y=ut();return c.ts.getEntries(f,u).next(v=>{g=v,g.forEach((A,R)=>{R.isValidDocument()||(y=y.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const A=[];for(const R of a){const N=sP(R,h.get(R.key).overlayedDocument);N!=null&&A.push(new _s(R.key,N,Tv(N.value.mapValue),Ye.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,A,a)}).next(v=>{d=v;const A=v.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(f,v.batchId,A)})}).then(()=>({batchId:d.batchId,changes:Nv(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new Nt(vt)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(s,r.batchId,n),await Oo(s,r.changes),await il(s.remoteStore)}catch(r){const i=Md(r,"Failed to persist write");n.reject(i)}}async function dE(e,t){const n=ot(e);try{const s=await GP(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.fa.get(i);o&&(Ct(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ea=!0:r.modifiedDocuments.size>0?Ct(o.Ea):r.removedDocuments.size>0&&(Ct(o.Ea),o.Ea=!1))}),await Oo(n,s,t)}catch(s){await bo(s)}}function Rm(e,t,n){const s=ot(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Aa.forEach((i,o)=>{const a=o.view.L_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=ot(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.L_(a)&&(l=!0)}),l&&Ud(c)}(s.eventManager,t),r.length&&s.da.s_(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function NO(e,t,n){const s=ot(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.fa.get(t),i=r&&r.key;if(i){let o=new Nt(G.comparator);o=o.insert(i,se.newNoDocument(i,st.min()));const a=ut().add(i),c=new nl(st.min(),new Map,new Nt(vt),o,a);await dE(s,c),s.ma=s.ma.remove(i),s.fa.delete(t),Fd(s)}else await oh(s.localStore,t,!1).then(()=>ah(s,t,n)).catch(bo)}async function DO(e,t){const n=ot(e),s=t.batch.batchId;try{const r=await zP(n.localStore,t);pE(n,s,null),fE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Oo(n,r)}catch(r){await bo(r)}}async function kO(e,t,n){const s=ot(e);try{const r=await function(o,a){const c=ot(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ct(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(s.localStore,t);pE(s,t,n),fE(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Oo(s,r)}catch(r){await bo(r)}}function fE(e,t){(e.ya.get(t)||[]).forEach(n=>{n.resolve()}),e.ya.delete(t)}function pE(e,t,n){const s=ot(e);let r=s.pa[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.pa[s.currentUser.toKey()]=r}}function ah(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Ra.get(t))e.Aa.delete(s),n&&e.da.Da(s,n);e.Ra.delete(t),e.isPrimaryClient&&e.ga.Vr(t).forEach(s=>{e.ga.containsKey(s)||mE(e,s)})}function mE(e,t){e.Va.delete(t.path.canonicalString());const n=e.ma.get(t);n!==null&&(eE(e.remoteStore,n),e.ma=e.ma.remove(t),e.fa.delete(n),Fd(e))}function Sm(e,t,n){for(const s of n)s instanceof uE?(e.ga.addReference(s.key,t),xO(e,s)):s instanceof hE?(H("SyncEngine","Document no longer in limbo: "+s.key),e.ga.removeReference(s.key,t),e.ga.containsKey(s.key)||mE(e,s.key)):Z()}function xO(e,t){const n=t.key,s=n.path.canonicalString();e.ma.get(n)||e.Va.has(s)||(H("SyncEngine","New document in limbo: "+n),e.Va.add(s),Fd(e))}function Fd(e){for(;e.Va.size>0&&e.ma.size<e.maxConcurrentLimboResolutions;){const t=e.Va.values().next().value;e.Va.delete(t);const n=new G(It.fromString(t)),s=e.wa.next();e.fa.set(s,new bO(n)),e.ma=e.ma.insert(n,s),tE(e.remoteStore,new ts(kn(Ad(n.path)),s,"TargetPurposeLimboResolution",yd.ae))}}async function Oo(e,t,n){const s=ot(e),r=[],i=[],o=[];s.Aa.isEmpty()||(s.Aa.forEach((a,c)=>{o.push(s.ba(c,t,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Dd.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.da.s_(r),await async function(c,l){const u=ot(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(l,d=>O.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>O.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ro(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.Zi.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Zi=u.Zi.insert(d,y)}}}(s.localStore,i))}async function LO(e,t){const n=ot(e);if(!n.currentUser.isEqual(t)){H("SyncEngine","User change. New user:",t.toKey());const s=await Yv(n.localStore,t);n.currentUser=t,function(i,o){i.ya.forEach(a=>{a.forEach(c=>{c.reject(new L(T.CANCELLED,o))})}),i.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Oo(n,s.rs)}}function VO(e,t){const n=ot(e),s=n.fa.get(t);if(s&&s.Ea)return ut().add(s.key);{let r=ut();const i=n.Ra.get(t);if(!i)return r;for(const o of i){const a=n.Aa.get(o);r=r.unionWith(a.view.oa)}return r}}function MO(e){const t=ot(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=dE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=VO.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=NO.bind(null,t),t.da.s_=TO.bind(null,t.eventManager),t.da.Da=wO.bind(null,t.eventManager),t}function UO(e){const t=ot(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=DO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kO.bind(null,t),t}class Cm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=sl(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return KP(this.persistence,new HP,t.initialUser,this.serializer)}createPersistence(t){return new jP(Nd.Hr,this.serializer)}createSharedClientState(t){return new ZP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FO{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=LO.bind(null,this.syncEngine),await yO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new EO}()}createDatastore(t){const n=sl(t.databaseInfo.databaseId),s=function(i){return new sO(i)}(t.databaseInfo);return function(i,o,a,c){return new oO(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,r,i,o,a){return new cO(s,r,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Rm(this.syncEngine,n,0),function(){return Am.v()?new Am:new tO}())}createSyncEngine(t,n){return function(r,i,o,a,c,l,u){const h=new RO(r,i,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=ot(n);H("RemoteStore","RemoteStore shutting down."),s.S_.add(5),await Po(s),s.D_.shutdown(),s.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Fa(this.observer.next,t)}error(t){this.observer.error?this.Fa(this.observer.error,t):Dn("Uncaught Error in snapshot listener:",t.toString())}Ma(){this.muted=!0}Fa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ne.UNAUTHENTICATED,this.clientId=yv.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Md(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ql(e,t){e.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Yv(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Pm(e,t){e.asyncQueue.verifyOperationInProgress();const n=await jO(e);H("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Im(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Im(t.remoteStore,i)),e._onlineComponents=t}function BO(e){return e.name==="FirebaseError"?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function jO(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ql(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!BO(n))throw n;Lr("Error using user provided cache. Falling back to memory cache: "+n),await Ql(e,new Cm)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Ql(e,new Cm);return e._offlineComponents}async function _E(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Pm(e,e._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Pm(e,new FO))),e._onlineComponents}function qO(e){return _E(e).then(t=>t.syncEngine)}async function yE(e){const t=await _E(e),n=t.eventManager;return n.onListen=SO.bind(null,t.syncEngine),n.onUnlisten=PO.bind(null,t.syncEngine),n}function HO(e,t,n={}){const s=new Rn;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new gE({next:d=>{o.enqueueAndForget(()=>cE(i,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new L(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new L(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new lE(Ad(a.path),u,{includeMetadataChanges:!0,z_:!0});return aE(i,h)}(await yE(e),e.asyncQueue,t,n,s)),s.promise}function WO(e,t,n={}){const s=new Rn;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new gE({next:d=>{o.enqueueAndForget(()=>cE(i,h)),d.fromCache&&c.source==="server"?l.reject(new L(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new lE(a,u,{includeMetadataChanges:!0,z_:!0});return aE(i,h)}(await yE(e),e.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(e,t,n){if(!n)throw new L(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function KO(e,t,n,s){if(t===!0&&s===!0)throw new L(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Nm(e){if(!G.isDocumentKey(e))throw new L(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Dm(e){if(G.isDocumentKey(e))throw new L(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ol(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Z()}function Ln(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ol(e);throw new L(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function zO(e,t){if(t<=0)throw new L(T.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new L(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}KO("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vE((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class al{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new km({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new km(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new pC;switch(s.type){case"firstParty":return new yC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new L(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Om.get(n);s&&(H("ComponentProvider","Removing Datastore"),Om.delete(n),s.terminate())}(this),Promise.resolve()}}function GO(e,t,n,s={}){var r;const i=(e=Ln(e,al))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ne.MOCK_USER;else{a=uy(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new L(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ne(l)}e._authCredentials=new mC(new _v(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new $n(this.firestore,t,this._query)}}class we{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new we(this.firestore,t,this._key)}}class os extends $n{constructor(t,n,s){super(t,n,Ad(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new we(this.firestore,null,new G(t))}withConverter(t){return new os(this.firestore,t,this._path)}}function ra(e,t,...n){if(e=jt(e),EE("collection","path",t),e instanceof al){const s=It.fromString(t,...n);return Dm(s),new os(e,null,s)}{if(!(e instanceof we||e instanceof os))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(It.fromString(t,...n));return Dm(s),new os(e.firestore,null,s)}}function QO(e,t,...n){if(e=jt(e),arguments.length===1&&(t=yv.V()),EE("doc","path",t),e instanceof al){const s=It.fromString(t,...n);return Nm(s),new we(e,null,new G(s))}{if(!(e instanceof we||e instanceof os))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(It.fromString(t,...n));return Nm(s),new we(e.firestore,e instanceof os?e.converter:null,new G(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new Jv(this,"async_queue_retry"),this.tu=()=>{const n=Gl();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const t=Gl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nu(),this.ru(t)}enterRestrictedMode(t){if(!this.Ha){this.Ha=!0,this.Xa=t||!1;const n=Gl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(t){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Rn;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ja.push(t),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(t){if(!Ro(t))throw t;H("AsyncQueue","Operation failed with retryable error: "+t)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(t){const n=this.za.then(()=>(this.Za=!0,t().catch(s=>{this.Ya=s,this.Za=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Dn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Za=!1,s))));return this.za=n,n}enqueueAfterDelay(t,n,s){this.nu(),this.eu.indexOf(t)>-1&&(n=0);const r=Vd.createAndSchedule(this,t,n,s,i=>this.su(i));return this.Ja.push(r),r}nu(){this.Ya&&Z()}verifyOperationInProgress(){}async ou(){let t;do t=this.za,await t;while(t!==this.za)}_u(t){for(const n of this.Ja)if(n.timerId===t)return!0;return!1}au(t){return this.ou().then(()=>{this.Ja.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ou()})}uu(t){this.eu.push(t)}su(t){const n=this.Ja.indexOf(t);this.Ja.splice(n,1)}}class ii extends al{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=function(){return new YO}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TE(this),this._firestoreClient.terminate()}}function XO(e,t){const n=typeof e=="object"?e:Gh(),s=typeof e=="string"?e:t||"(default)",r=Dc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ay("firestore");i&&GO(r,...i)}return r}function $d(e){return e._firestoreClient||TE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function TE(e){var t,n,s;const r=e._freezeSettings(),i=function(a,c,l,u){return new OC(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,vE(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new $O(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new jr(ue.fromBase64String(t))}catch(n){throw new L(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new jr(ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new L(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new L(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new L(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return vt(this._lat,t._lat)||vt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=/^__.*__$/;class ZO{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new _s(t,this.data,this.fieldMask,n,this.fieldTransforms):new So(t,this.data,n,this.fieldTransforms)}}class wE{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new _s(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function AE(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class qd{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(t){return new qd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.hu({path:s,Iu:!1});return r.Tu(t),r}Eu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.hu({path:s,Iu:!1});return r.cu(),r}du(t){return this.hu({path:void 0,Iu:!0})}Au(t){return ic(t,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Tu(this.path.get(t))}Tu(t){if(t.length===0)throw this.Au("Document fields must not be empty");if(AE(this.lu)&&JO.test(t))throw this.Au('Document fields cannot begin and end with "__"')}}class tN{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||sl(t)}mu(t,n,s,r=!1){return new qd({lu:t,methodName:n,Vu:s,path:ie.emptyPath(),Iu:!1,Ru:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ll(e){const t=e._freezeSettings(),n=sl(e._databaseId);return new tN(e._databaseId,!!t.ignoreUndefinedProperties,n)}function eN(e,t,n,s,r,i={}){const o=e.mu(i.merge||i.mergeFields?2:0,t,n,r);Hd("Data must be an object, but it was:",o,s);const a=bE(s,o);let c,l;if(i.merge)c=new Oe(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=ch(t,h,n);if(!o.contains(d))throw new L(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);SE(u,d)||u.push(d)}c=new Oe(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ZO(new Ee(a),c,l)}class ul extends Bd{_toFieldTransform(t){if(t.lu!==2)throw t.lu===1?t.Au(`${this._methodName}() can only appear at the top level of your update data`):t.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ul}}function nN(e,t,n,s){const r=e.mu(1,t,n);Hd("Data must be an object, but it was:",r,s);const i=[],o=Ee.empty();Xs(s,(c,l)=>{const u=Wd(t,c,n);l=jt(l);const h=r.Eu(u);if(l instanceof ul)i.push(u);else{const d=No(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Oe(i);return new wE(o,a,r.fieldTransforms)}function sN(e,t,n,s,r,i){const o=e.mu(1,t,n),a=[ch(t,s,n)],c=[r];if(i.length%2!=0)throw new L(T.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ch(t,i[d])),c.push(i[d+1]);const l=[],u=Ee.empty();for(let d=a.length-1;d>=0;--d)if(!SE(l,a[d])){const f=a[d];let g=c[d];g=jt(g);const y=o.Eu(f);if(g instanceof ul)l.push(f);else{const v=No(g,y);v!=null&&(l.push(f),u.set(f,v))}}const h=new Oe(l);return new wE(u,h,o.fieldTransforms)}function IE(e,t,n,s=!1){return No(n,e.mu(s?4:3,t))}function No(e,t){if(RE(e=jt(e)))return Hd("Unsupported field value:",t,e),bE(e,t);if(e instanceof Bd)return function(s,r){if(!AE(r.lu))throw r.Au(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Au(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Iu&&t.lu!==4)throw t.Au("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=No(a,r.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(s,r){if((s=jt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return XC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=qt.fromDate(s);return{timestampValue:sc(r.serializer,i)}}if(s instanceof qt){const i=new qt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sc(r.serializer,i)}}if(s instanceof jd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof jr)return{bytesValue:Hv(r.serializer,s._byteString)};if(s instanceof we){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pd(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.Au(`Unsupported field value: ${ol(s)}`)}(e,t)}function bE(e,t){const n={};return vv(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xs(e,(s,r)=>{const i=No(r,t.Pu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function RE(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof qt||e instanceof jd||e instanceof jr||e instanceof we||e instanceof Bd)}function Hd(e,t,n){if(!RE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=ol(n);throw s==="an object"?t.Au(e+" a custom object"):t.Au(e+" "+s)}}function ch(e,t,n){if((t=jt(t))instanceof cl)return t._internalPath;if(typeof t=="string")return Wd(e,t);throw ic("Field path arguments must be of type string or ",e,!1,void 0,n)}const rN=new RegExp("[~\\*/\\[\\]]");function Wd(e,t,n){if(t.search(rN)>=0)throw ic(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new cl(...t.split("."))._internalPath}catch{throw ic(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ic(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new L(T.INVALID_ARGUMENT,a+e+c)}function SE(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(zd("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iN extends Kd{data(){return super.data()}}function zd(e,t){return typeof t=="string"?Wd(e,t):t instanceof cl?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new L(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gd{}class hl extends Gd{}function ia(e,t,...n){let s=[];t instanceof Gd&&s.push(t),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof Yd).length,a=i.filter(c=>c instanceof Qd).length;if(o>1||o>0&&a>0)throw new L(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class Qd extends hl{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Qd(t,n,s)}_apply(t){const n=this._parse(t);return CE(t._query,n),new $n(t.firestore,t.converter,th(t._query,n))}_parse(t){const n=ll(t.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Vm(h,u);const f=[];for(const g of h)f.push(Lm(c,i,g));d={arrayValue:{values:f}}}else d=Lm(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Vm(h,u),d=IE(a,o,h,u==="in"||u==="not-in");return Bt.create(l,u,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Yd extends Gd{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Yd(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Ze.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)CE(o,c),o=th(o,c)}(t._query,n),new $n(t.firestore,t.converter,th(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xd extends hl{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Xd(t,n)}_apply(t){const n=function(r,i,o){if(r.startAt!==null)throw new L(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new L(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ir(i,o);return function(l,u){if(Id(l)===null){const h=Xc(l);h!==null&&PE(l,h,u.field)}}(r,a),a}(t._query,this._field,this._direction);return new $n(t.firestore,t.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Js(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,n))}}function oa(e,t="asc"){const n=t,s=zd("orderBy",e);return Xd._create(s,n)}class Jd extends hl{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new Jd(t,n,s)}_apply(t){return new $n(t.firestore,t.converter,tc(t._query,this._limit,this._limitType))}}function xm(e){return zO("limit",e),Jd._create("limit",e,"F")}class Zd extends hl{constructor(t,n,s){super(),this.type=t,this._docOrFields=n,this._inclusive=s}static _create(t,n,s){return new Zd(t,n,s)}_apply(t){const n=cN(t,this.type,this._docOrFields,this._inclusive);return new $n(t.firestore,t.converter,function(r,i){return new Js(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(t._query,n))}}function aN(...e){return Zd._create("startAfter",e,!1)}function cN(e,t,n,s){if(n[0]=jt(n[0]),n[0]instanceof Kd)return function(i,o,a,c,l){if(!c)throw new L(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const h of br(i))if(h.field.isKeyField())u.push(Za(o,c.key));else{const d=c.data.field(h.field);if(Yc(d))throw new L(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new L(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(d)}return new Fr(u,l)}(e._query,e.firestore._databaseId,t,n[0]._document,s);{const r=ll(e.firestore);return function(o,a,c,l,u,h){const d=o.explicitOrderBy;if(u.length>d.length)throw new L(T.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<u.length;g++){const y=u[g];if(d[g].field.isKeyField()){if(typeof y!="string")throw new L(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof y}`);if(!bd(o)&&y.indexOf("/")!==-1)throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${y}' contains a slash.`);const v=o.path.child(It.fromString(y));if(!G.isDocumentKey(v))throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const A=new G(v);f.push(Za(a,A))}else{const v=IE(c,l,y);f.push(v)}}return new Fr(f,h)}(e._query,e.firestore._databaseId,r,t,n,s)}}function Lm(e,t,n){if(typeof(n=jt(n))=="string"){if(n==="")throw new L(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bd(t)&&n.indexOf("/")!==-1)throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(It.fromString(n));if(!G.isDocumentKey(s))throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Za(e,new G(s))}if(n instanceof we)return Za(e,n._key);throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ol(n)}.`)}function Vm(e,t){if(!Array.isArray(e)||e.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function CE(e,t){if(t.isInequality()){const s=Xc(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new L(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Id(e);i!==null&&PE(e,r,i)}const n=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new L(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function PE(e,t,n){if(!n.isEqual(t))throw new L(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class lN{convertValue(t,n="none"){switch(Hs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $t(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Z()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Xs(t,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new jd($t(t.latitude),$t(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=vd(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(io(t));default:return null}}convertTimestamp(t){const n=us(t);return new qt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=It.fromString(t);Ct(Qv(s));const r=new oo(s.get(1),s.get(3)),i=new G(s.popFirst(5));return r.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class OE extends Kd{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(zd("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Sa extends OE{data(t={}){return super.data(t)}}class hN{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ri(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Sa(this._firestore,this._userDataWriter,s.key,s,new Ri(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new Sa(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ri(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Sa(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ri(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:dN(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dN(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(e){e=Ln(e,we);const t=Ln(e.firestore,ii);return HO($d(t),e._key).then(n=>fN(t,e,n))}class NE extends lN{constructor(t){super(),this.firestore=t}convertBytes(t){return new jr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new we(this.firestore,null,n)}}function aa(e){e=Ln(e,$n);const t=Ln(e.firestore,ii),n=$d(t),s=new NE(t);return oN(e._query),WO(n,e._query).then(r=>new hN(t,s,e,r))}function eF(e,t,n,...s){e=Ln(e,we);const r=Ln(e.firestore,ii),i=ll(r);let o;return o=typeof(t=jt(t))=="string"||t instanceof cl?sN(i,"updateDoc",e._key,t,n,s):nN(i,"updateDoc",e._key,t),tf(r,[o.toMutation(e._key,Ye.exists(!0))])}function nF(e){return tf(Ln(e.firestore,ii),[new Rd(e._key,Ye.none())])}function sF(e,t){const n=Ln(e.firestore,ii),s=QO(e),r=uN(e.converter,t);return tf(n,[eN(ll(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,Ye.exists(!1))]).then(()=>s)}function tf(e,t){return function(s,r){const i=new Rn;return s.asyncQueue.enqueueAndForget(async()=>OO(await qO(s),r,i)),i.promise}($d(e),t)}function fN(e,t,n){const s=n.docs.get(t._key),r=new NE(e);return new OE(e,r,t._key,s,new Ri(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(r){ni=r})(Qs),Bs(new cs("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new ii(new gC(s.getProvider("auth-internal")),new EC(s.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new L(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(l.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),hn(tm,"4.1.2",t),hn(tm,"4.1.2","esm2017")})();var pN="firebase",mN="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(pN,mN,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="firebasestorage.googleapis.com",kE="storageBucket",gN=2*60*1e3,_N=10*60*1e3,yN=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends En{constructor(t,n,s=0){super(Yl(t),`Firebase Storage: ${n} (${Yl(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Yl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pt||(Pt={}));function Yl(e){return"storage/"+e}function ef(){const e="An unknown error occurred, please check the error payload for server response.";return new Dt(Pt.UNKNOWN,e)}function vN(e){return new Dt(Pt.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function EN(e){return new Dt(Pt.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TN(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Dt(Pt.UNAUTHENTICATED,e)}function wN(){return new Dt(Pt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AN(e){return new Dt(Pt.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function xE(){return new Dt(Pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function LE(){return new Dt(Pt.CANCELED,"User canceled the upload/download.")}function IN(e){return new Dt(Pt.INVALID_URL,"Invalid URL '"+e+"'.")}function bN(e){return new Dt(Pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function RN(){return new Dt(Pt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kE+"' property when initializing the app?")}function VE(){return new Dt(Pt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function SN(){return new Dt(Pt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function CN(){return new Dt(Pt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function PN(e){return new Dt(Pt.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lh(e){return new Dt(Pt.INVALID_ARGUMENT,e)}function ME(){return new Dt(Pt.APP_DELETED,"The Firebase app was deleted.")}function ON(e){return new Dt(Pt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Mi(e,t){return new Dt(Pt.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function _i(e){throw new Dt(Pt.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=Ne.makeFromUrl(t,n)}catch{return new Ne(t,"")}if(s.path==="")return s;throw bN(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},y=n===DE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",A=new RegExp(`^https?://${y}/${r}/${v}`,"i"),N=[{regex:a,indices:c,postModify:i},{regex:f,indices:g,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let w=0;w<N.length;w++){const U=N[w],$=U.regex.exec(t);if($){const Y=$[U.indices.bucket];let q=$[U.indices.path];q||(q=""),s=new Ne(Y,q),U.postModify(s);break}}if(s==null)throw IN(t);return s}}class NN{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(e,t,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,t.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,e(f,c())},v)}function d(){i&&clearTimeout(i)}function f(v,...A){if(l){d();return}if(v){d(),u.call(null,v,...A);return}if(c()||o){d(),u.call(null,v,...A);return}s<64&&(s*=2);let N;a===1?(a=2,N=0):N=(s+Math.random())*1e3,h(N)}let g=!1;function y(v){g||(g=!0,d(),!l&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function kN(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(e){return e!==void 0}function LN(e){return typeof e=="function"}function VN(e){return typeof e=="object"&&!Array.isArray(e)}function dl(e){return typeof e=="string"||e instanceof String}function Mm(e){return nf()&&e instanceof Blob}function nf(){return typeof Blob<"u"&&!HR()}function Um(e,t,n,s){if(s<t)throw lh(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw lh(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function UE(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vs;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Vs||(Vs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(t,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new ca(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Vs.NO_ERROR,c=i.getStatus();if(!a||FE(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Vs.ABORT;s(!1,new ca(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ca(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());xN(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=ef();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?ME():LE();o(c)}else{const c=xE();o(c)}};this.canceled_?n(!1,new ca(!1,null,!0)):this.backoffId_=DN(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&kN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ca{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function UN(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function FN(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function $N(e,t){t&&(e["X-Firebase-GMPID"]=t)}function BN(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function jN(e,t,n,s,r,i,o=!0){const a=UE(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return $N(l,t),UN(l,n),FN(l,i),BN(l,s),new MN(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function HN(...e){const t=qN();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(nf())return new Blob(e);throw new Dt(Pt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function WN(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(e){if(typeof atob>"u")throw PN("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xl{constructor(t,n){this.data=t,this.contentType=n||null}}function zN(e,t){switch(e){case un.RAW:return new Xl($E(t));case un.BASE64:case un.BASE64URL:return new Xl(BE(e,t));case un.DATA_URL:return new Xl(QN(t),YN(t))}throw ef()}function $E(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=s,o=e.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function GN(e){let t;try{t=decodeURIComponent(e)}catch{throw Mi(un.DATA_URL,"Malformed data URL.")}return $E(t)}function BE(e,t){switch(e){case un.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw Mi(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case un.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw Mi(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=KN(t)}catch(r){throw r.message.includes("polyfill")?r:Mi(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class jE{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Mi(un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=XN(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function QN(e){const t=new jE(e);return t.base64?BE(un.BASE64,t.rest):GN(t.rest)}function YN(e){return new jE(e).contentType}function XN(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,n){let s=0,r="";Mm(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Mm(this.data_)){const s=this.data_,r=WN(s,t,n);return r===null?null:new Qn(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new Qn(s,!0)}}static getBlob(...t){if(nf()){const n=t.map(s=>s instanceof Qn?s.data_:s);return new Qn(HN.apply(null,n))}else{const n=t.map(o=>dl(o)?zN(un.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Qn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e){let t;try{t=JSON.parse(e)}catch{return null}return VN(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function ZN(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function HE(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(e,t){return t}class de{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||tD}}let la=null;function eD(e){return!dl(e)||e.length<2?e:HE(e)}function WE(){if(la)return la;const e=[];e.push(new de("bucket")),e.push(new de("generation")),e.push(new de("metageneration")),e.push(new de("name","fullPath",!0));function t(i,o){return eD(o)}const n=new de("name");n.xform=t,e.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new de("size");return r.xform=s,e.push(r),e.push(new de("timeCreated")),e.push(new de("updated")),e.push(new de("md5Hash",null,!0)),e.push(new de("cacheControl",null,!0)),e.push(new de("contentDisposition",null,!0)),e.push(new de("contentEncoding",null,!0)),e.push(new de("contentLanguage",null,!0)),e.push(new de("contentType",null,!0)),e.push(new de("metadata","customMetadata",!0)),la=e,la}function nD(e,t){function n(){const s=e.bucket,r=e.fullPath,i=new Ne(s,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function sD(e,t,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,t[o.server])}return nD(s,e),s}function KE(e,t,n){const s=qE(t);return s===null?null:sD(e,s,n)}function rD(e,t,n,s){const r=qE(t);if(r===null||!dl(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=e.bucket,h=e.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Do(d,n,s),g=UE({alt:"media",token:l});return f+g})[0]}function zE(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class oi{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e){if(!e)throw ef()}function sf(e,t){function n(s,r){const i=KE(e,r,t);return Sn(i!==null),i}return n}function iD(e,t){function n(s,r){const i=KE(e,r,t);return Sn(i!==null),rD(i,r,e.host,e._protocol)}return n}function ko(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=wN():r=TN():n.getStatus()===402?r=EN(e.bucket):n.getStatus()===403?r=AN(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function GE(e){const t=ko(e);function n(s,r){let i=t(s,r);return s.getStatus()===404&&(i=vN(e.path)),i.serverResponse=r.serverResponse,i}return n}function oD(e,t,n){const s=t.fullServerUrl(),r=Do(s,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new oi(r,i,sf(e,n),o);return a.errorHandler=GE(t),a}function aD(e,t,n){const s=t.fullServerUrl(),r=Do(s,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new oi(r,i,iD(e,n),o);return a.errorHandler=GE(t),a}function cD(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function QE(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=cD(null,t)),s}function lD(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let w=0;w<2;w++)N=N+Math.random().toString().slice(2);return N}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=QE(t,s,r),u=zE(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Qn.getBlob(h,s,d);if(f===null)throw VE();const g={name:l.fullPath},y=Do(i,e.host,e._protocol),v="POST",A=e.maxUploadRetryTime,R=new oi(y,v,sf(e,n),A);return R.urlParams=g,R.headers=o,R.body=f.uploadData(),R.errorHandler=ko(t),R}class oc{constructor(t,n,s,r){this.current=t,this.total=n,this.finalized=!!s,this.metadata=r||null}}function rf(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{Sn(!1)}return Sn(!!n&&(t||["active"]).indexOf(n)!==-1),n}function uD(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),o=QE(t,s,r),a={name:o.fullPath},c=Do(i,e.host,e._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=zE(o,n),d=e.maxUploadRetryTime;function f(y){rf(y);let v;try{v=y.getResponseHeader("X-Goog-Upload-URL")}catch{Sn(!1)}return Sn(dl(v)),v}const g=new oi(c,l,f,d);return g.urlParams=a,g.headers=u,g.body=h,g.errorHandler=ko(t),g}function hD(e,t,n,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const u=rf(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Sn(!1)}h||Sn(!1);const d=Number(h);return Sn(!isNaN(d)),new oc(d,s.size(),u==="final")}const o="POST",a=e.maxUploadRetryTime,c=new oi(n,o,i,a);return c.headers=r,c.errorHandler=ko(t),c}const Fm=256*1024;function dD(e,t,n,s,r,i,o,a){const c=new oc(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw SN();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const h=c.current,d=h+u;let f="";u===0?f="finalize":l===u?f="upload, finalize":f="upload";const g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},y=s.slice(h,d);if(y===null)throw VE();function v(w,U){const $=rf(w,["active","final"]),Y=c.current+u,q=s.size();let j;return $==="final"?j=sf(t,i)(w,U):j=null,new oc(Y,q,$==="final",j)}const A="POST",R=t.maxUploadRetryTime,N=new oi(n,A,v,R);return N.headers=g,N.body=y.uploadData(),N.progressCallback=a||null,N.errorHandler=ko(e),N}const ve={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Jl(e){switch(e){case"running":case"pausing":case"canceling":return ve.RUNNING;case"paused":return ve.PAUSED;case"success":return ve.SUCCESS;case"canceled":return ve.CANCELED;case"error":return ve.ERROR;default:return ve.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(t,n,s){if(LN(t)||n!=null||s!=null)this.next=t,this.error=n??void 0,this.complete=s??void 0;else{const i=t;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class pD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vs.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vs.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vs.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw _i("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _i("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _i("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _i("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _i("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class mD extends pD{initXhr(){this.xhr_.responseType="text"}}function dr(){return new mD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(t,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=s,this._mappings=WE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(Pt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(FE(r.status,[]))if(i)r=xE();else{this.sleepTime=Math.max(this.sleepTime*2,yN),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(Pt.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":t(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const s=uD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,dr,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,s)=>{const r=hD(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,dr,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Fm*this._chunkMultiplier,n=new oc(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=dD(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,dr,r,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Fm*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const s=oD(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,dr,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const s=lD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,dr,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=LE(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Jl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,s,r){const i=new fD(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Jl(this._state)){case ve.SUCCESS:or(this._resolve.bind(null,this.snapshot))();break;case ve.CANCELED:case ve.ERROR:const n=this._reject;or(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Jl(this._state)){case ve.RUNNING:case ve.PAUSED:t.next&&or(t.next.bind(t,this.snapshot))();break;case ve.SUCCESS:t.complete&&or(t.complete.bind(t))();break;case ve.CANCELED:case ve.ERROR:t.error&&or(t.error.bind(t,this._error))();break;default:t.error&&or(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,n){this._service=t,n instanceof Ne?this._location=n:this._location=Ne.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Ws(t,n)}get root(){const t=new Ne(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HE(this._location.path)}get storage(){return this._service}get parent(){const t=JN(this._location.path);if(t===null)return null;const n=new Ne(this._location.bucket,t);return new Ws(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw ON(t)}}function _D(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new gD(e,new Qn(t),n)}function yD(e){e._throwIfRoot("getDownloadURL");const t=aD(e.storage,e._location,WE());return e.storage.makeRequestWithTokens(t,dr).then(n=>{if(n===null)throw CN();return n})}function vD(e,t){const n=ZN(e._location.path,t),s=new Ne(e._location.bucket,n);return new Ws(e.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(e){return/^[A-Za-z]+:\/\//.test(e)}function TD(e,t){return new Ws(e,t)}function YE(e,t){if(e instanceof of){const n=e;if(n._bucket==null)throw RN();const s=new Ws(n,n._bucket);return t!=null?YE(s,t):s}else return t!==void 0?vD(e,t):e}function wD(e,t){if(t&&ED(t)){if(e instanceof of)return TD(e,t);throw lh("To use ref(service, url), the first argument must be a Storage instance.")}else return YE(e,t)}function $m(e,t){const n=t==null?void 0:t[kE];return n==null?null:Ne.makeFromBucketSpec(n,e)}function AD(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:uy(r,e.app.options.projectId))}class of{constructor(t,n,s,r,i){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=DE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gN,this._maxUploadRetryTime=_N,this._requests=new Set,r!=null?this._bucket=Ne.makeFromBucketSpec(r,this._host):this._bucket=$m(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ne.makeFromBucketSpec(this._url,t):this._bucket=$m(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Um("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Um("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ws(this,t)}_makeRequest(t,n,s,r,i=!0){if(this._deleted)return new NN(ME());{const o=jN(t,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const Bm="@firebase/storage",jm="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="storage";function rF(e,t,n){return e=jt(e),_D(e,t,n)}function iF(e){return e=jt(e),yD(e)}function oF(e,t){return e=jt(e),wD(e,t)}function ID(e=Gh(),t){e=jt(e);const s=Dc(e,XE).getImmediate({identifier:t}),r=ay("storage");return r&&bD(s,...r),s}function bD(e,t,n,s={}){AD(e,t,n,s)}function RD(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new of(n,s,r,t,Qs)}function SD(){Bs(new cs(XE,RD,"PUBLIC").setMultipleInstances(!0)),hn(Bm,jm,""),hn(Bm,jm,"esm2017")}SD();function af(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}function JE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CD=JE,ZE=new mo("auth","Firebase",JE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Wh("@firebase/auth");function PD(e,...t){ac.logLevel<=_t.WARN&&ac.warn(`Auth (${Qs}): ${e}`,...t)}function Ca(e,...t){ac.logLevel<=_t.ERROR&&ac.error(`Auth (${Qs}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e,...t){throw cf(e,...t)}function fn(e,...t){return cf(e,...t)}function OD(e,t,n){const s=Object.assign(Object.assign({},CD()),{[t]:n});return new mo("auth","Firebase",s).create(t,{appName:e.name})}function cf(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return ZE.create(e,...t)}function rt(e,t,...n){if(!e)throw cf(t,...n)}function In(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ca(t),new Error(t)}function Mn(e,t){e||In(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ND(){return qm()==="http:"||qm()==="https:"}function qm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ND()||WR()||"connection"in navigator)?navigator.onLine:!0}function kD(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Mn(n>t,"Short delay should be less than long delay!"),this.isMobile=qR()||KR()}get(){return DD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(e,t){Mn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=new xo(3e4,6e4);function eT(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Lo(e,t,n,s,r={}){return nT(e,r,async()=>{let i={},o={};s&&(t==="GET"?o=s:i={body:JSON.stringify(s)});const a=go(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),tT.fetch()(sT(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function nT(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},xD),t);try{const r=new MD(e),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ua(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ua(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw ua(e,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw OD(e,u,l);Vn(e,u)}}catch(r){if(r instanceof En)throw r;Vn(e,"network-request-failed",{message:String(r)})}}async function VD(e,t,n,s,r={}){const i=await Lo(e,t,n,s,r);return"mfaPendingCredential"in i&&Vn(e,"multi-factor-auth-required",{_serverResponse:i}),i}function sT(e,t,n,s){const r=`${t}${n}?${s}`;return e.config.emulator?lf(e.config,r):`${e.config.apiScheme}://${r}`}class MD{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(fn(this.auth,"network-request-failed")),LD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ua(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=fn(e,t,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(e,t){return Lo(e,"POST","/v1/accounts:delete",t)}async function FD(e,t){return Lo(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function $D(e,t=!1){const n=jt(e),s=await n.getIdToken(t),r=uf(s);rt(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ui(Zl(r.auth_time)),issuedAtTime:Ui(Zl(r.iat)),expirationTime:Ui(Zl(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zl(e){return Number(e)*1e3}function uf(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return Ca("JWT malformed, contained fewer than 3 sections"),null;try{const r=iy(n);return r?JSON.parse(r):(Ca("Failed to decode base64 JWT payload"),null)}catch(r){return Ca("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function BD(e){const t=uf(e);return rt(t,"internal-error"),rt(typeof t.exp<"u","internal-error"),rt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof En&&jD(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function jD({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(e){var t;const n=e.auth,s=await e.getIdToken(),r=await uo(e,FD(n,{idToken:s}));rt(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?KD(i.providerUserInfo):[],a=WD(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rT(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function HD(e){const t=jt(e);await cc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function WD(e,t){return[...e.filter(s=>!t.some(r=>r.providerId===s.providerId)),...t]}function KD(e){return e.map(t=>{var{providerId:n}=t,s=af(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD(e,t){const n=await nT(e,{},async()=>{const s=go({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=sT(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tT.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){rt(t.idToken,"internal-error"),rt(typeof t.idToken<"u","internal-error"),rt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):BD(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return rt(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await zD(t,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ho;return s&&(rt(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),r&&(rt(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),i&&(rt(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e,t){rt(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ms{constructor(t){var{uid:n,auth:s,stsTokenManager:r}=t,i=af(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rT(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await uo(this,this.stsTokenManager.getToken(this.auth,t));return rt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return $D(this,t)}reload(){return HD(this)}_assign(t){this!==t&&(rt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ms(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){rt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await uo(this,UD(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:w,isAnonymous:U,providerData:$,stsTokenManager:Y}=n;rt(N&&Y,t,"internal-error");const q=ho.fromJSON(this.name,Y);rt(typeof N=="string",t,"internal-error"),Hn(h,t.name),Hn(d,t.name),rt(typeof w=="boolean",t,"internal-error"),rt(typeof U=="boolean",t,"internal-error"),Hn(f,t.name),Hn(g,t.name),Hn(y,t.name),Hn(v,t.name),Hn(A,t.name),Hn(R,t.name);const j=new Ms({uid:N,auth:t,email:d,emailVerified:w,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:q,createdAt:A,lastLoginAt:R});return $&&Array.isArray($)&&(j.providerData=$.map(J=>Object.assign({},J))),v&&(j._redirectEventId=v),j}static async _fromIdTokenResponse(t,n,s=!1){const r=new ho;r.updateFromServerResponse(n);const i=new Ms({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await cc(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new Map;function bn(e){Mn(e instanceof Function,"Expected a class definition");let t=Hm.get(e);return t?(Mn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Hm.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}iT.type="NONE";const Wm=iT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e,t,n){return`firebase:${e}:${t}:${n}`}class Sr{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Pa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Pa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ms._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Sr(bn(Wm),t,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||bn(Wm);const o=Pa(s,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ms._fromJSON(t,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Sr(i,t,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Sr(i,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(cT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(oT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(uT(t))return"Blackberry";if(hT(t))return"Webos";if(hf(t))return"Safari";if((t.includes("chrome/")||aT(t))&&!t.includes("edge/"))return"Chrome";if(lT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function oT(e=le()){return/firefox\//i.test(e)}function hf(e=le()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function aT(e=le()){return/crios\//i.test(e)}function cT(e=le()){return/iemobile/i.test(e)}function lT(e=le()){return/android/i.test(e)}function uT(e=le()){return/blackberry/i.test(e)}function hT(e=le()){return/webos/i.test(e)}function fl(e=le()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function GD(e=le()){var t;return fl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function QD(){return zR()&&document.documentMode===10}function dT(e=le()){return fl(e)||lT(e)||hT(e)||uT(e)||/windows phone/i.test(e)||cT(e)}function YD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(e,t=[]){let n;switch(e){case"Browser":n=Km(le());break;case"Worker":n=`${Km(le())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(e,t={}){return Lo(e,"GET","/v2/passwordPolicy",eT(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=6;class tk{constructor(t){var n,s,r,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),r&&(n.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<t.length;r++)s=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(t,n,s,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new XD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Sr.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return rt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await cc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=kD()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?jt(t):null;return n&&rt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&rt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await JD(this),n=new tk(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new mo("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&bn(t)||this._popupRedirectResolver;rt(n,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(rt(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return rt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=fT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&PD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function df(e){return jt(e)}class zm{constructor(t){this.auth=t,this.observer=null,this.addObserver=t0(n=>this.observer=n)}get next(){return rt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function sk(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=r=>{const i=fn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",nk().appendChild(s)})}function rk(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(e,t){const n=Dc(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(qa(i,t??{}))return r;Vn(r,"already-initialized")}return n.initialize({options:t})}function ok(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(bn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function ak(e,t,n){const s=df(e);rt(s._canInitEmulator,s,"emulator-config-failed"),rt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=pT(t),{host:o,port:a}=ck(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||lk()}function pT(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ck(e){const t=pT(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Gm(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Gm(o)}}}function Gm(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function lk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(t){return In("not implemented")}_linkToIdToken(t,n){return In("not implemented")}_getReauthenticationResolver(t){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(e,t){return VD(e,"POST","/v1/accounts:signInWithIdp",eT(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="http://localhost";class Ks extends mT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ks(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r}=n,i=af(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ks(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Cr(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Cr(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Cr(t,n)}buildRequest(){const t={requestUri:uk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=go(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends gT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Vo{constructor(){super("facebook.com")}static credential(t){return Ks._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yn.credentialFromTaggedObject(t)}static credentialFromError(t){return Yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yn.credential(t.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ks._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Xn.credentialFromTaggedObject(t)}static credentialFromError(t){return Xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Xn.credential(n,s)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Vo{constructor(){super("github.com")}static credential(t){return Ks._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jn.credential(t.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Vo{constructor(){super("twitter.com")}static credential(t,n){return Ks._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Zn.credentialFromTaggedObject(t)}static credentialFromError(t){return Zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Zn.credential(n,s)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,r=!1){const i=await Ms._fromIdTokenResponse(t,s,r),o=Qm(s);return new qr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const r=Qm(s);return new qr({user:t,providerId:r,_tokenResponse:s,operationType:n})}}function Qm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends En{constructor(t,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,r){return new lc(t,n,s,r)}}function _T(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(e,i,t,s):i})}async function hk(e,t,n=!1){const s=await uo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qr._forOperation(e,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(e,t,n=!1){const{auth:s}=e,r="reauthenticate";try{const i=await uo(e,_T(s,r,t,e),n);rt(i.idToken,s,"internal-error");const o=uf(i.idToken);rt(o,s,"internal-error");const{sub:a}=o;return rt(e.uid===a,s,"user-mismatch"),qr._forOperation(e,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(e,t,n=!1){const s="signIn",r=await _T(e,s,t),i=await qr._fromIdTokenResponse(e,s,r);return n||await e._updateCurrentUser(i.user),i}function pk(e,t,n,s){return jt(e).onIdTokenChanged(t,n,s)}function mk(e,t,n){return jt(e).beforeAuthStateChanged(t,n)}const uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(){const e=le();return hf(e)||fl(e)}const _k=1e3,yk=10;class vT extends yT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gk()&&YD(),this.fallbackToPolling=dT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&t(n,r,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(s,t.newValue):this.storage.removeItem(s);else if(this.localCache[s]===t.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);QD()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,yk):r()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},_k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}vT.type="LOCAL";const vk=vT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET extends yT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ET.type="SESSION";const TT=ET;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const s=new pl(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ek(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ff("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function wk(e){pn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function Ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ik(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function bk(){return wT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="firebaseLocalStorageDb",Rk=1,hc="firebaseLocalStorage",IT="fbase_key";class Mo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ml(e,t){return e.transaction([hc],t?"readwrite":"readonly").objectStore(hc)}function Sk(){const e=indexedDB.deleteDatabase(AT);return new Mo(e).toPromise()}function hh(){const e=indexedDB.open(AT,Rk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(hc,{keyPath:IT})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(hc)?t(s):(s.close(),await Sk(),t(await hh()))})})}async function Ym(e,t,n){const s=ml(e,!0).put({[IT]:t,value:n});return new Mo(s).toPromise()}async function Ck(e,t){const n=ml(e,!1).get(t),s=await new Mo(n).toPromise();return s===void 0?null:s.value}function Xm(e,t){const n=ml(e,!0).delete(t);return new Mo(n).toPromise()}const Pk=800,Ok=3;class bT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hh(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>Ok)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(bk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Ak(),!this.activeServiceWorker)return;this.sender=new Tk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Ik()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hh();return await Ym(t,uc,"1"),await Xm(t,uc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ym(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>Ck(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xm(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const i=ml(r,!1).getAll();return new Mo(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bT.type="LOCAL";const Nk=bT;new xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(e,t){return t?bn(t):(rt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends mT{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Cr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Cr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Cr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function kk(e){return fk(e.auth,new pf(e),e.bypassAuthState)}function xk(e){const{auth:t,user:n}=e;return rt(n,t,"internal-error"),dk(n,new pf(e),e.bypassAuthState)}async function Lk(e){const{auth:t,user:n}=e;return rt(n,t,"internal-error"),hk(n,new pf(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(t,n,s,r,i=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kk;case"linkViaPopup":case"linkViaRedirect":return Lk;case"reauthViaPopup":case"reauthViaRedirect":return xk;default:Vn(this.auth,"internal-error")}}resolve(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=new xo(2e3,1e4);class _r extends RT{constructor(t,n,s,r,i){super(t,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return rt(t,this.auth,"internal-error"),t}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const t=ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Vk.get())};t()}}_r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="pendingRedirect",Oa=new Map;class Uk extends RT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Oa.get(this.auth._key());if(!t){try{const s=await Fk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Oa.set(this.auth._key(),t)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fk(e,t){const n=jk(t),s=Bk(e);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function $k(e,t){Oa.set(e._key(),t)}function Bk(e){return bn(e._redirectPersistence)}function jk(e){return Pa(Mk,e.config.apiKey,e.name)}async function qk(e,t,n=!1){const s=df(e),r=Dk(s,t),o=await new Uk(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=10*60*1e3;class Wk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Kk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!ST(t)){const r=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jm(t))}saveEventToCache(t){this.cachedEventUids.add(Jm(t)),this.lastProcessedEventTime=Date.now()}}function Jm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ST({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Kk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ST(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(e,t={}){return Lo(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qk=/^https?/;async function Yk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await zk(e);for(const n of t)try{if(Xk(n))return}catch{}Vn(e,"unauthorized-domain")}function Xk(e){const t=uh(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Qk.test(n))return!1;if(Gk.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=new xo(3e4,6e4);function Zm(){const e=pn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Zk(e){return new Promise((t,n)=>{var s,r,i;function o(){Zm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Zm(),n(fn(e,"network-request-failed"))},timeout:Jk.get()})}if(!((r=(s=pn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const a=rk("iframefcb");return pn()[a]=()=>{gapi.load?o():n(fn(e,"network-request-failed"))},sk(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Na=null,t})}let Na=null;function tx(e){return Na=Na||Zk(e),Na}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=new xo(5e3,15e3),nx="__/auth/iframe",sx="emulator/auth/iframe",rx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ix=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ox(e){const t=e.config;rt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?lf(t,sx):`https://${e.config.authDomain}/${nx}`,s={apiKey:t.apiKey,appName:e.name,v:Qs},r=ix.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${go(s).slice(1)}`}async function ax(e){const t=await tx(e),n=pn().gapi;return rt(n,e,"internal-error"),t.open({where:document.body,url:ox(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rx,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=fn(e,"network-request-failed"),a=pn().setTimeout(()=>{i(o)},ex.get());function c(){pn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lx=500,ux=600,hx="_blank",dx="http://localhost";class tg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fx(e,t,n,s=lx,r=ux){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},cx),{width:s.toString(),height:r.toString(),top:i,left:o}),l=le().toLowerCase();n&&(a=aT(l)?hx:n),oT(l)&&(t=t||dx,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(GD(l)&&a!=="_self")return px(t||"",a),new tg(null);const h=window.open(t||"",a,u);rt(h,e,"popup-blocked");try{h.focus()}catch{}return new tg(h)}function px(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="__/auth/handler",gx="emulator/auth/handler",_x=encodeURIComponent("fac");async function eg(e,t,n,s,r,i){rt(e.config.authDomain,e,"auth-domain-config-required"),rt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:Qs,eventId:r};if(t instanceof gT){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ZR(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(t instanceof Vo){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${_x}=${encodeURIComponent(c)}`:"";return`${yx(e)}?${go(a).slice(1)}${l}`}function yx({config:e}){return e.emulator?lf(e,gx):`https://${e.authDomain}/${mx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="webStorageSupport";class vx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TT,this._completeRedirectFn=qk,this._overrideRedirectResult=$k}async _openPopup(t,n,s,r){var i;Mn((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await eg(t,n,s,uh(),r);return fx(t,o,ff())}async _openRedirect(t,n,s,r){await this._originValidation(t);const i=await eg(t,n,s,uh(),r);return wk(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Mn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await ax(t),s=new Wk(t);return n.register("authEvent",r=>(rt(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(tu,{type:tu},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[tu];o!==void 0&&n(!!o),Vn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return dT()||hf()||fl()}}const Ex=vx;var ng="@firebase/auth",sg="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){rt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ax(e){Bs(new cs("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;rt(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fT(e)},l=new ek(s,r,i,c);return ok(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Bs(new cs("auth-internal",t=>{const n=df(t.getProvider("auth").getImmediate());return(s=>new Tx(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(ng,sg,wx(e)),hn(ng,sg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=5*60,bx=ly("authIdTokenMaxAge")||Ix;let rg=null;const Rx=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>bx)return;const r=n==null?void 0:n.token;rg!==r&&(rg=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Sx(e=Gh()){const t=Dc(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ik(e,{popupRedirectResolver:Ex,persistence:[Nk,vk,TT]}),s=ly("authTokenSyncURL");if(s){const i=Rx(s);mk(n,i,()=>i(n.currentUser)),pk(n,o=>i(o))}const r=oy("auth");return r&&ak(n,`http://${r}`),n}Ax("Browser");const CT={apiKey:"AIzaSyAkt3AmCaXbu0jEPoyhIj-WcXHlTnaxOHM",authDomain:"sala-61df8.firebaseapp.com",projectId:"sala-61df8",storageBucket:"sala-61df8.appspot.com",messagingSenderId:"86157962154",appId:"1:86157962154:web:341a5b22ce70022e69d9d3"},Cx=zh(CT),aF=ID(Cx),Px=zh(CT),ha=XO(Px);Sx();const Ox=cb({id:"main",state:()=>({total:"",paginas:"",limit:3,page:1,firstVisible:"",obras:[]}),actions:{async obtenerDatos(){this.obras=[];const e=await ia(ra(ha,"obras"),oa("date","desc")),n=(await aa(e)).docs.length;this.total=n,this.paginas=Math.ceil(this.total/this.limit);const s=await ia(ra(ha,"obras"),oa("date","desc"),xm(this.limit));(await aa(s)).forEach(i=>{let o=i.data();o.id=i.id,this.obras.push(o),console.log(i)})},async siguiente(){const e=await ia(ra(ha,"obras"),oa("date","desc")),n=(await aa(e)).docs[this.limit*(this.page-1)-1]||this.obtenerDatos();this.firstVisible=n;const s=await ia(ra(ha,"obras"),oa("date","desc"),xm(this.limit),aN(this.firstVisible));this.obras=[],console.log("array",this.obras),(await aa(s)).forEach(i=>{let o=i.data();o.id=i.id,this.obras.push(o),console.log(i)})}}}),Nx=Sc('<header class="masthead" id="inicio"><div class="container"><div class="masthead-subheading">¡O teatro do barrio!</div><div class="masthead-heading text-uppercase">Sala Gurugú</div><a class="btn btn-info btn-xl text-uppercase" href="#programa">Programación</a></div></header>',1),Dx={class:"page-section bg-light",id:"programa"},kx={class:"container"},xx={class:"text-center"},Lx=it("h2",{class:"section-heading text-uppercase"},"Programación",-1),Vx=it("h3",{class:"section-subheading text-muted"},"Artes Éscenicas.",-1),Mx={class:"row justify-content-center"},Ux={class:"text-center"},Fx=Sc('<section class="page-section bg-light" id="danthea"><div class="container"><div class="text-center"><h2 class="section-heading text-uppercase">Danthea</h2><h3 class="section-subheading text-muted">Compañia de teatro.</h3><p class="section-subheading text-muted">Actividad y actualidad de la Sala: dedicada al ámbito del Teatro y de los Títeres. </p><p class="section-subheading text-muted"> Situada en la calle Agra do Orzán nº3 de A Coruña. </p><p class="section-subheading text-muted"> Asociada a Unima Galicia, vinculada a Danthea Teatro y a la Asociación Socio-cultural de las Artes Escénicas EXEMPLA. </p><p class="section-subheading text-muted"> Pertenece a la Red Galega de Salas do AGADIC. </p><div class="center"><div class="card" style="width:18rem;"><img src="'+pR+'" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title text-uppercase text-center">Danthea</h5><p class="card-text text-uppercase text-center" style="font-family:&#39;Courier New&#39;;">Cincenta</p><p class="text-center">Maiores de 4 anos</p><div class="text-center"></div></div></div></div></div></div></section><section class="page-section" id="escola"><div class="container"><div class="text-center"><h2 class="section-heading text-uppercase">Escola de teatro</h2><h3 class="section-subheading text-muted">Motaxe de espetáculos.</h3></div><div class="row text-center"><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-info"></i><i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i></span><h4 class="my-3">Infantil</h4><p class="text-muted">Grupos reducidos de 8 a 12 anos.</p></div><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-info"></i><i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i></span><h4 class="my-3">Xuvenil</h4><p class="text-muted">Grupos reducidos de 12 a 18 anos.</p></div><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-info"></i><i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i></span><h4 class="my-3">Adultos</h4><p class="text-muted">Maiores de 18 años.</p></div></div></div></section><section class="page-section bg-light" id="equipo"><div class="container"><div class="text-center"><h2 class="section-heading text-uppercase">O noso equipo</h2><h3 class="section-subheading text-muted"> Forma parte da nosa familia. </h3></div><div class="row"><div class="col-lg-4"><div class="team-member"><img class="mx-auto rounded-circle" src="'+mR+'" alt="..."><h4>Carlos Clemente</h4><p class="text-muted">Director</p><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a></div></div><div class="col-lg-4"><div class="team-member"><img class="mx-auto rounded-circle" src="'+gR+'" alt="..."><h4>Carlos Miranda</h4><p class="text-muted">Audiovisuais</p><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a></div></div><div class="col-lg-4"><div class="team-member"><img class="mx-auto rounded-circle" src="'+_R+'" alt="..."><h4>Maria López</h4><p class="text-muted">Escenografía / Iluminación</p><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a></div></div></div><div class="row"><div class="col-lg-8 mx-auto text-center"><p class="large text-muted"> Colabora con nós e disfruta da paixón das artes. </p></div></div></div></section>',3),$x=it("section",{class:"page-section bg-light",id:"mapa"},[it("div",{class:"container"},[it("div",{class:"text-center"},[it("h2",{class:"section-heading text-uppercase"},"Onde estamos"),it("h3",{class:"section-subheading text-muted"}," Rúa Agra do Orzán, 3, 15010 A Coruña "),it("div",null,[it("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.6452877107786!2d-8.420194585289988!3d43.363529779132705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c8b2994e30b%3A0x4975dc047bc16b9a!2sC.%20Agra%20del%20Orzan%2C%203%2C%2015010%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1649268505895!5m2!1ses!2ses",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])])])],-1),Bx=it("section",{class:"page-section",id:"contact"},[it("div",{class:"container"},[it("div",{class:"text-center"},[it("h2",{class:"section-heading text-uppercase"},"Contactanós"),it("h3",{class:"section-subheading text-muted"}," Consultanós calquera dúbida. ")]),it("div",{class:"container"},[it("form",{id:"contactForm",target:"_blank",action:"https://formsubmit.co/444cuatro@gmail.com",method:"POST"},[it("div",{class:"row align-items-stretch mb-5"},[it("div",{class:"col-md-6"},[it("div",{class:"form-group"},[it("input",{type:"text",name:"name",class:"form-control",placeholder:"O teu nome",required:""})]),it("div",{class:"form-group"},[it("input",{type:"email",name:"email",class:"form-control",placeholder:"O teu correo",required:""})]),it("div",{class:"form-group mb-md-0"},[it("input",{type:"text",name:"phone",class:"form-control",placeholder:"O teu teléfono",required:""})])]),it("div",{class:"col-md-6"},[it("div",{class:"form-group form-group-textarea mb-md-0"},[it("textarea",{placeholder:"A tua mensaxe",class:"form-control",name:"message",rows:"10",required:""})])])]),it("div",{class:"text-center mb-3"},[it("button",{type:"submit",class:"btn btn-lg btn-info text-white btn-block"},"Enviar")])])])])],-1),jx=Sc('<footer class="footer py-4"><div class="container"><div class="row align-items-center"><div class="col-lg-4 text-lg-start"> Copyright © Your Website 2022 </div><div class="col-lg-4 my-3 my-lg-0"><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></div><div class="col-lg-4 text-lg-end"><a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a><a class="link-dark text-decoration-none" href="#!">Terms of Use</a></div></div></div></footer>',1),qx={__name:"Sala",setup(e){const t=Ox();return b_(()=>{t.obtenerDatos()}),(n,s)=>{const r=C_("v-pagination");return ks(),$a("main",null,[Zt(bR),Nx,it("section",Dx,[it("div",kx,[it("div",xx,[Lx,Vx,it("div",Mx,[(ks(!0),$a(sn,null,YA(Ve(t).obras,i=>(ks(),Fh(xR,{class:"col-4 m-2",key:i.id,obra:i},null,8,["obra"]))),128))])]),it("div",Ux,[Zt(r,{modelValue:Ve(t).page,"onUpdate:modelValue":s[0]||(s[0]=i=>Ve(t).page=i),length:Ve(t).paginas,onClick:Ve(t).siguiente},null,8,["modelValue","length","onClick"])])])]),Fx,$x,Bx,jx])}}},Hx=lR({history:Rb("/"),routes:[{path:"/",name:"sala",component:qx},{path:"/detalle/:id",name:"detalle",props:!0,component:()=>Np(()=>import("./Detalle-190176d8.js"),[])},{path:"/formulario",name:"formulario",component:()=>Np(()=>import("./Formulario-50611fbe.js"),[])}]});var me="top",ke="bottom",xe="right",ge="left",gl="auto",ai=[me,ke,xe,ge],zs="start",Hr="end",PT="clippingParents",mf="viewport",fr="popper",OT="reference",dh=ai.reduce(function(e,t){return e.concat([t+"-"+zs,t+"-"+Hr])},[]),gf=[].concat(ai,[gl]).reduce(function(e,t){return e.concat([t,t+"-"+zs,t+"-"+Hr])},[]),NT="beforeRead",DT="read",kT="afterRead",xT="beforeMain",LT="main",VT="afterMain",MT="beforeWrite",UT="write",FT="afterWrite",$T=[NT,DT,kT,xT,LT,VT,MT,UT,FT];function vn(e){return e?(e.nodeName||"").toLowerCase():null}function Le(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Gs(e){var t=Le(e).Element;return e instanceof t||e instanceof Element}function Fe(e){var t=Le(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _f(e){if(typeof ShadowRoot>"u")return!1;var t=Le(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Wx(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var s=t.styles[n]||{},r=t.attributes[n]||{},i=t.elements[n];!Fe(i)||!vn(i)||(Object.assign(i.style,s),Object.keys(r).forEach(function(o){var a=r[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function Kx(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(s){var r=t.elements[s],i=t.attributes[s]||{},o=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:n[s]),a=o.reduce(function(c,l){return c[l]="",c},{});!Fe(r)||!vn(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(c){r.removeAttribute(c)}))})}}const yf={name:"applyStyles",enabled:!0,phase:"write",fn:Wx,effect:Kx,requires:["computeStyles"]};function mn(e){return e.split("-")[0]}var Us=Math.max,dc=Math.min,Wr=Math.round;function fh(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function BT(){return!/^((?!chrome|android).)*safari/i.test(fh())}function Kr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var s=e.getBoundingClientRect(),r=1,i=1;t&&Fe(e)&&(r=e.offsetWidth>0&&Wr(s.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Wr(s.height)/e.offsetHeight||1);var o=Gs(e)?Le(e):window,a=o.visualViewport,c=!BT()&&n,l=(s.left+(c&&a?a.offsetLeft:0))/r,u=(s.top+(c&&a?a.offsetTop:0))/i,h=s.width/r,d=s.height/i;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function vf(e){var t=Kr(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}function jT(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_f(n)){var s=t;do{if(s&&e.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function Un(e){return Le(e).getComputedStyle(e)}function zx(e){return["table","td","th"].indexOf(vn(e))>=0}function ys(e){return((Gs(e)?e.ownerDocument:e.document)||window.document).documentElement}function _l(e){return vn(e)==="html"?e:e.assignedSlot||e.parentNode||(_f(e)?e.host:null)||ys(e)}function ig(e){return!Fe(e)||Un(e).position==="fixed"?null:e.offsetParent}function Gx(e){var t=/firefox/i.test(fh()),n=/Trident/i.test(fh());if(n&&Fe(e)){var s=Un(e);if(s.position==="fixed")return null}var r=_l(e);for(_f(r)&&(r=r.host);Fe(r)&&["html","body"].indexOf(vn(r))<0;){var i=Un(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function Uo(e){for(var t=Le(e),n=ig(e);n&&zx(n)&&Un(n).position==="static";)n=ig(n);return n&&(vn(n)==="html"||vn(n)==="body"&&Un(n).position==="static")?t:n||Gx(e)||t}function Ef(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Fi(e,t,n){return Us(e,dc(t,n))}function Qx(e,t,n){var s=Fi(e,t,n);return s>n?n:s}function qT(){return{top:0,right:0,bottom:0,left:0}}function HT(e){return Object.assign({},qT(),e)}function WT(e,t){return t.reduce(function(n,s){return n[s]=e,n},{})}var Yx=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,HT(typeof t!="number"?t:WT(t,ai))};function Xx(e){var t,n=e.state,s=e.name,r=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=mn(n.placement),c=Ef(a),l=[ge,xe].indexOf(a)>=0,u=l?"height":"width";if(!(!i||!o)){var h=Yx(r.padding,n),d=vf(i),f=c==="y"?me:ge,g=c==="y"?ke:xe,y=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],v=o[c]-n.rects.reference[c],A=Uo(i),R=A?c==="y"?A.clientHeight||0:A.clientWidth||0:0,N=y/2-v/2,w=h[f],U=R-d[u]-h[g],$=R/2-d[u]/2+N,Y=Fi(w,$,U),q=c;n.modifiersData[s]=(t={},t[q]=Y,t.centerOffset=Y-$,t)}}function Jx(e){var t=e.state,n=e.options,s=n.element,r=s===void 0?"[data-popper-arrow]":s;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||jT(t.elements.popper,r)&&(t.elements.arrow=r))}const KT={name:"arrow",enabled:!0,phase:"main",fn:Xx,effect:Jx,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function zr(e){return e.split("-")[1]}var Zx={top:"auto",right:"auto",bottom:"auto",left:"auto"};function t1(e,t){var n=e.x,s=e.y,r=t.devicePixelRatio||1;return{x:Wr(n*r)/r||0,y:Wr(s*r)/r||0}}function og(e){var t,n=e.popper,s=e.popperRect,r=e.placement,i=e.variation,o=e.offsets,a=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,h=e.isFixed,d=o.x,f=d===void 0?0:d,g=o.y,y=g===void 0?0:g,v=typeof u=="function"?u({x:f,y}):{x:f,y};f=v.x,y=v.y;var A=o.hasOwnProperty("x"),R=o.hasOwnProperty("y"),N=ge,w=me,U=window;if(l){var $=Uo(n),Y="clientHeight",q="clientWidth";if($===Le(n)&&($=ys(n),Un($).position!=="static"&&a==="absolute"&&(Y="scrollHeight",q="scrollWidth")),$=$,r===me||(r===ge||r===xe)&&i===Hr){w=ke;var j=h&&$===U&&U.visualViewport?U.visualViewport.height:$[Y];y-=j-s.height,y*=c?1:-1}if(r===ge||(r===me||r===ke)&&i===Hr){N=xe;var J=h&&$===U&&U.visualViewport?U.visualViewport.width:$[q];f-=J-s.width,f*=c?1:-1}}var pt=Object.assign({position:a},l&&Zx),bt=u===!0?t1({x:f,y},Le(n)):{x:f,y};if(f=bt.x,y=bt.y,c){var At;return Object.assign({},pt,(At={},At[w]=R?"0":"",At[N]=A?"0":"",At.transform=(U.devicePixelRatio||1)<=1?"translate("+f+"px, "+y+"px)":"translate3d("+f+"px, "+y+"px, 0)",At))}return Object.assign({},pt,(t={},t[w]=R?y+"px":"",t[N]=A?f+"px":"",t.transform="",t))}function e1(e){var t=e.state,n=e.options,s=n.gpuAcceleration,r=s===void 0?!0:s,i=n.adaptive,o=i===void 0?!0:i,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:mn(t.placement),variation:zr(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,og(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,og(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Tf={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:e1,data:{}};var da={passive:!0};function n1(e){var t=e.state,n=e.instance,s=e.options,r=s.scroll,i=r===void 0?!0:r,o=s.resize,a=o===void 0?!0:o,c=Le(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",n.update,da)}),a&&c.addEventListener("resize",n.update,da),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",n.update,da)}),a&&c.removeEventListener("resize",n.update,da)}}const wf={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:n1,data:{}};var s1={left:"right",right:"left",bottom:"top",top:"bottom"};function Da(e){return e.replace(/left|right|bottom|top/g,function(t){return s1[t]})}var r1={start:"end",end:"start"};function ag(e){return e.replace(/start|end/g,function(t){return r1[t]})}function Af(e){var t=Le(e),n=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:n,scrollTop:s}}function If(e){return Kr(ys(e)).left+Af(e).scrollLeft}function i1(e,t){var n=Le(e),s=ys(e),r=n.visualViewport,i=s.clientWidth,o=s.clientHeight,a=0,c=0;if(r){i=r.width,o=r.height;var l=BT();(l||!l&&t==="fixed")&&(a=r.offsetLeft,c=r.offsetTop)}return{width:i,height:o,x:a+If(e),y:c}}function o1(e){var t,n=ys(e),s=Af(e),r=(t=e.ownerDocument)==null?void 0:t.body,i=Us(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Us(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-s.scrollLeft+If(e),c=-s.scrollTop;return Un(r||n).direction==="rtl"&&(a+=Us(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:a,y:c}}function bf(e){var t=Un(e),n=t.overflow,s=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+s)}function zT(e){return["html","body","#document"].indexOf(vn(e))>=0?e.ownerDocument.body:Fe(e)&&bf(e)?e:zT(_l(e))}function $i(e,t){var n;t===void 0&&(t=[]);var s=zT(e),r=s===((n=e.ownerDocument)==null?void 0:n.body),i=Le(s),o=r?[i].concat(i.visualViewport||[],bf(s)?s:[]):s,a=t.concat(o);return r?a:a.concat($i(_l(o)))}function ph(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function a1(e,t){var n=Kr(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function cg(e,t,n){return t===mf?ph(i1(e,n)):Gs(t)?a1(t,n):ph(o1(ys(e)))}function c1(e){var t=$i(_l(e)),n=["absolute","fixed"].indexOf(Un(e).position)>=0,s=n&&Fe(e)?Uo(e):e;return Gs(s)?t.filter(function(r){return Gs(r)&&jT(r,s)&&vn(r)!=="body"}):[]}function l1(e,t,n,s){var r=t==="clippingParents"?c1(e):[].concat(t),i=[].concat(r,[n]),o=i[0],a=i.reduce(function(c,l){var u=cg(e,l,s);return c.top=Us(u.top,c.top),c.right=dc(u.right,c.right),c.bottom=dc(u.bottom,c.bottom),c.left=Us(u.left,c.left),c},cg(e,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function GT(e){var t=e.reference,n=e.element,s=e.placement,r=s?mn(s):null,i=s?zr(s):null,o=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,c;switch(r){case me:c={x:o,y:t.y-n.height};break;case ke:c={x:o,y:t.y+t.height};break;case xe:c={x:t.x+t.width,y:a};break;case ge:c={x:t.x-n.width,y:a};break;default:c={x:t.x,y:t.y}}var l=r?Ef(r):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case zs:c[l]=c[l]-(t[u]/2-n[u]/2);break;case Hr:c[l]=c[l]+(t[u]/2-n[u]/2);break}}return c}function Gr(e,t){t===void 0&&(t={});var n=t,s=n.placement,r=s===void 0?e.placement:s,i=n.strategy,o=i===void 0?e.strategy:i,a=n.boundary,c=a===void 0?PT:a,l=n.rootBoundary,u=l===void 0?mf:l,h=n.elementContext,d=h===void 0?fr:h,f=n.altBoundary,g=f===void 0?!1:f,y=n.padding,v=y===void 0?0:y,A=HT(typeof v!="number"?v:WT(v,ai)),R=d===fr?OT:fr,N=e.rects.popper,w=e.elements[g?R:d],U=l1(Gs(w)?w:w.contextElement||ys(e.elements.popper),c,u,o),$=Kr(e.elements.reference),Y=GT({reference:$,element:N,strategy:"absolute",placement:r}),q=ph(Object.assign({},N,Y)),j=d===fr?q:$,J={top:U.top-j.top+A.top,bottom:j.bottom-U.bottom+A.bottom,left:U.left-j.left+A.left,right:j.right-U.right+A.right},pt=e.modifiersData.offset;if(d===fr&&pt){var bt=pt[r];Object.keys(J).forEach(function(At){var he=[xe,ke].indexOf(At)>=0?1:-1,Vt=[me,ke].indexOf(At)>=0?"y":"x";J[At]+=bt[Vt]*he})}return J}function u1(e,t){t===void 0&&(t={});var n=t,s=n.placement,r=n.boundary,i=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?gf:c,u=zr(s),h=u?a?dh:dh.filter(function(g){return zr(g)===u}):ai,d=h.filter(function(g){return l.indexOf(g)>=0});d.length===0&&(d=h);var f=d.reduce(function(g,y){return g[y]=Gr(e,{placement:y,boundary:r,rootBoundary:i,padding:o})[mn(y)],g},{});return Object.keys(f).sort(function(g,y){return f[g]-f[y]})}function h1(e){if(mn(e)===gl)return[];var t=Da(e);return[ag(e),t,ag(t)]}function d1(e){var t=e.state,n=e.options,s=e.name;if(!t.modifiersData[s]._skip){for(var r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,g=f===void 0?!0:f,y=n.allowedAutoPlacements,v=t.options.placement,A=mn(v),R=A===v,N=c||(R||!g?[Da(v)]:h1(v)),w=[v].concat(N).reduce(function(be,Re){return be.concat(mn(Re)===gl?u1(t,{placement:Re,boundary:u,rootBoundary:h,padding:l,flipVariations:g,allowedAutoPlacements:y}):Re)},[]),U=t.rects.reference,$=t.rects.popper,Y=new Map,q=!0,j=w[0],J=0;J<w.length;J++){var pt=w[J],bt=mn(pt),At=zr(pt)===zs,he=[me,ke].indexOf(bt)>=0,Vt=he?"width":"height",et=Gr(t,{placement:pt,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),ct=he?At?xe:ge:At?ke:me;U[Vt]>$[Vt]&&(ct=Da(ct));var ht=Da(ct),Yt=[];if(i&&Yt.push(et[bt]<=0),a&&Yt.push(et[ct]<=0,et[ht]<=0),Yt.every(function(be){return be})){j=pt,q=!1;break}Y.set(pt,Yt)}if(q)for(var Ie=g?3:1,_e=function(Re){var kt=w.find(function(I){var M=Y.get(I);if(M)return M.slice(0,Re).every(function(x){return x})});if(kt)return j=kt,"break"},Mt=Ie;Mt>0;Mt--){var qe=_e(Mt);if(qe==="break")break}t.placement!==j&&(t.modifiersData[s]._skip=!0,t.placement=j,t.reset=!0)}}const QT={name:"flip",enabled:!0,phase:"main",fn:d1,requiresIfExists:["offset"],data:{_skip:!1}};function lg(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ug(e){return[me,xe,ke,ge].some(function(t){return e[t]>=0})}function f1(e){var t=e.state,n=e.name,s=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,o=Gr(t,{elementContext:"reference"}),a=Gr(t,{altBoundary:!0}),c=lg(o,s),l=lg(a,r,i),u=ug(c),h=ug(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const YT={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:f1};function p1(e,t,n){var s=mn(e),r=[ge,me].indexOf(s)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=i[0],a=i[1];return o=o||0,a=(a||0)*r,[ge,xe].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function m1(e){var t=e.state,n=e.options,s=e.name,r=n.offset,i=r===void 0?[0,0]:r,o=gf.reduce(function(u,h){return u[h]=p1(h,t.rects,i),u},{}),a=o[t.placement],c=a.x,l=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[s]=o}const XT={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:m1};function g1(e){var t=e.state,n=e.name;t.modifiersData[n]=GT({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Rf={name:"popperOffsets",enabled:!0,phase:"read",fn:g1,data:{}};function _1(e){return e==="x"?"y":"x"}function y1(e){var t=e.state,n=e.options,s=e.name,r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,g=n.tetherOffset,y=g===void 0?0:g,v=Gr(t,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),A=mn(t.placement),R=zr(t.placement),N=!R,w=Ef(A),U=_1(w),$=t.modifiersData.popperOffsets,Y=t.rects.reference,q=t.rects.popper,j=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,J=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),pt=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,bt={x:0,y:0};if($){if(i){var At,he=w==="y"?me:ge,Vt=w==="y"?ke:xe,et=w==="y"?"height":"width",ct=$[w],ht=ct+v[he],Yt=ct-v[Vt],Ie=f?-q[et]/2:0,_e=R===zs?Y[et]:q[et],Mt=R===zs?-q[et]:-Y[et],qe=t.elements.arrow,be=f&&qe?vf(qe):{width:0,height:0},Re=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:qT(),kt=Re[he],I=Re[Vt],M=Fi(0,Y[et],be[et]),x=N?Y[et]/2-Ie-M-kt-J.mainAxis:_e-M-kt-J.mainAxis,W=N?-Y[et]/2+Ie+M+I+J.mainAxis:Mt+M+I+J.mainAxis,dt=t.elements.arrow&&Uo(t.elements.arrow),p=dt?w==="y"?dt.clientTop||0:dt.clientLeft||0:0,m=(At=pt==null?void 0:pt[w])!=null?At:0,_=ct+x-m-p,E=ct+W-m,b=Fi(f?dc(ht,_):ht,ct,f?Us(Yt,E):Yt);$[w]=b,bt[w]=b-ct}if(a){var S,F=w==="x"?me:ge,D=w==="x"?ke:xe,k=$[U],P=U==="y"?"height":"width",z=k+v[F],B=k-v[D],K=[me,ge].indexOf(A)!==-1,X=(S=pt==null?void 0:pt[U])!=null?S:0,lt=K?z:k-Y[P]-q[P]-X+J.altAxis,Et=K?k+Y[P]+q[P]-X-J.altAxis:B,yt=f&&K?Qx(lt,k,Et):Fi(f?lt:z,k,f?Et:B);$[U]=yt,bt[U]=yt-k}t.modifiersData[s]=bt}}const JT={name:"preventOverflow",enabled:!0,phase:"main",fn:y1,requiresIfExists:["offset"]};function v1(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function E1(e){return e===Le(e)||!Fe(e)?Af(e):v1(e)}function T1(e){var t=e.getBoundingClientRect(),n=Wr(t.width)/e.offsetWidth||1,s=Wr(t.height)/e.offsetHeight||1;return n!==1||s!==1}function w1(e,t,n){n===void 0&&(n=!1);var s=Fe(t),r=Fe(t)&&T1(t),i=ys(t),o=Kr(e,r,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!n)&&((vn(t)!=="body"||bf(i))&&(a=E1(t)),Fe(t)?(c=Kr(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=If(i))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function A1(e){var t=new Map,n=new Set,s=[];e.forEach(function(i){t.set(i.name,i)});function r(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=t.get(a);c&&r(c)}}),s.push(i)}return e.forEach(function(i){n.has(i.name)||r(i)}),s}function I1(e){var t=A1(e);return $T.reduce(function(n,s){return n.concat(t.filter(function(r){return r.phase===s}))},[])}function b1(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function R1(e){var t=e.reduce(function(n,s){var r=n[s.name];return n[s.name]=r?Object.assign({},r,s,{options:Object.assign({},r.options,s.options),data:Object.assign({},r.data,s.data)}):s,n},{});return Object.keys(t).map(function(n){return t[n]})}var hg={placement:"bottom",modifiers:[],strategy:"absolute"};function dg(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function yl(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,s=n===void 0?[]:n,r=t.defaultOptions,i=r===void 0?hg:r;return function(a,c,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},hg,i),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(A){var R=typeof A=="function"?A(u.options):A;y(),u.options=Object.assign({},i,u.options,R),u.scrollParents={reference:Gs(a)?$i(a):a.contextElement?$i(a.contextElement):[],popper:$i(c)};var N=I1(R1([].concat(s,u.options.modifiers)));return u.orderedModifiers=N.filter(function(w){return w.enabled}),g(),f.update()},forceUpdate:function(){if(!d){var A=u.elements,R=A.reference,N=A.popper;if(dg(R,N)){u.rects={reference:w1(R,Uo(N),u.options.strategy==="fixed"),popper:vf(N)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(J){return u.modifiersData[J.name]=Object.assign({},J.data)});for(var w=0;w<u.orderedModifiers.length;w++){if(u.reset===!0){u.reset=!1,w=-1;continue}var U=u.orderedModifiers[w],$=U.fn,Y=U.options,q=Y===void 0?{}:Y,j=U.name;typeof $=="function"&&(u=$({state:u,options:q,name:j,instance:f})||u)}}}},update:b1(function(){return new Promise(function(v){f.forceUpdate(),v(u)})}),destroy:function(){y(),d=!0}};if(!dg(a,c))return f;f.setOptions(l).then(function(v){!d&&l.onFirstUpdate&&l.onFirstUpdate(v)});function g(){u.orderedModifiers.forEach(function(v){var A=v.name,R=v.options,N=R===void 0?{}:R,w=v.effect;if(typeof w=="function"){var U=w({state:u,name:A,instance:f,options:N}),$=function(){};h.push(U||$)}})}function y(){h.forEach(function(v){return v()}),h=[]}return f}}var S1=yl(),C1=[wf,Rf,Tf,yf],P1=yl({defaultModifiers:C1}),O1=[wf,Rf,Tf,yf,XT,QT,JT,KT,YT],Sf=yl({defaultModifiers:O1});const ZT=Object.freeze(Object.defineProperty({__proto__:null,afterMain:VT,afterRead:kT,afterWrite:FT,applyStyles:yf,arrow:KT,auto:gl,basePlacements:ai,beforeMain:xT,beforeRead:NT,beforeWrite:MT,bottom:ke,clippingParents:PT,computeStyles:Tf,createPopper:Sf,createPopperBase:S1,createPopperLite:P1,detectOverflow:Gr,end:Hr,eventListeners:wf,flip:QT,hide:YT,left:ge,main:LT,modifierPhases:$T,offset:XT,placements:gf,popper:fr,popperGenerator:yl,popperOffsets:Rf,preventOverflow:JT,read:DT,reference:OT,right:xe,start:zs,top:me,variationPlacements:dh,viewport:mf,write:UT},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Wn=new Map,eu={set(e,t,n){Wn.has(e)||Wn.set(e,new Map);const s=Wn.get(e);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,n)},get(e,t){return Wn.has(e)&&Wn.get(e).get(t)||null},remove(e,t){if(!Wn.has(e))return;const n=Wn.get(e);n.delete(t),n.size===0&&Wn.delete(e)}},N1=1e6,D1=1e3,mh="transitionend",tw=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,n)=>`#${CSS.escape(n)}`)),e),k1=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),x1=e=>{do e+=Math.floor(Math.random()*N1);while(document.getElementById(e));return e},L1=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),r=Number.parseFloat(n);return!s&&!r?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*D1)},ew=e=>{e.dispatchEvent(new Event(mh))},Cn=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),ds=e=>Cn(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(tw(e)):null,ci=e=>{if(!Cn(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const s=e.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return t},fs=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",nw=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?nw(e.parentNode):null},fc=()=>{},Fo=e=>{e.offsetHeight},sw=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,nu=[],V1=e=>{document.readyState==="loading"?(nu.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of nu)t()}),nu.push(e)):e()},$e=()=>document.documentElement.dir==="rtl",je=e=>{V1(()=>{const t=sw();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},Te=(e,t=[],n=e)=>typeof e=="function"?e(...t):n,rw=(e,t,n=!0)=>{if(!n){Te(e);return}const s=5,r=L1(t)+s;let i=!1;const o=({target:a})=>{a===t&&(i=!0,t.removeEventListener(mh,o),Te(e))};t.addEventListener(mh,o),setTimeout(()=>{i||ew(t)},r)},Cf=(e,t,n,s)=>{const r=e.length;let i=e.indexOf(t);return i===-1?!n&&s?e[r-1]:e[0]:(i+=n?1:-1,s&&(i=(i+r)%r),e[Math.max(0,Math.min(i,r-1))])},M1=/[^.]*(?=\..*)\.|.*/,U1=/\..*/,F1=/::\d+$/,su={};let fg=1;const iw={mouseenter:"mouseover",mouseleave:"mouseout"},$1=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ow(e,t){return t&&`${t}::${fg++}`||e.uidEvent||fg++}function aw(e){const t=ow(e);return e.uidEvent=t,su[t]=su[t]||{},su[t]}function B1(e,t){return function n(s){return Pf(s,{delegateTarget:e}),n.oneOff&&C.off(e,s.type,t),t.apply(e,[s])}}function j1(e,t,n){return function s(r){const i=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return Pf(r,{delegateTarget:o}),s.oneOff&&C.off(e,r.type,t,n),n.apply(o,[r])}}function cw(e,t,n=null){return Object.values(e).find(s=>s.callable===t&&s.delegationSelector===n)}function lw(e,t,n){const s=typeof t=="string",r=s?n:t||n;let i=uw(e);return $1.has(i)||(i=e),[s,r,i]}function pg(e,t,n,s,r){if(typeof t!="string"||!e)return;let[i,o,a]=lw(t,n,s);t in iw&&(o=(g=>function(y){if(!y.relatedTarget||y.relatedTarget!==y.delegateTarget&&!y.delegateTarget.contains(y.relatedTarget))return g.call(this,y)})(o));const c=aw(e),l=c[a]||(c[a]={}),u=cw(l,o,i?n:null);if(u){u.oneOff=u.oneOff&&r;return}const h=ow(o,t.replace(M1,"")),d=i?j1(e,n,o):B1(e,o);d.delegationSelector=i?n:null,d.callable=o,d.oneOff=r,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,i)}function gh(e,t,n,s,r){const i=cw(t[n],s,r);i&&(e.removeEventListener(n,i,!!r),delete t[n][i.uidEvent])}function q1(e,t,n,s){const r=t[n]||{};for(const[i,o]of Object.entries(r))i.includes(s)&&gh(e,t,n,o.callable,o.delegationSelector)}function uw(e){return e=e.replace(U1,""),iw[e]||e}const C={on(e,t,n,s){pg(e,t,n,s,!1)},one(e,t,n,s){pg(e,t,n,s,!0)},off(e,t,n,s){if(typeof t!="string"||!e)return;const[r,i,o]=lw(t,n,s),a=o!==t,c=aw(e),l=c[o]||{},u=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(l).length)return;gh(e,c,o,i,r?n:null);return}if(u)for(const h of Object.keys(c))q1(e,c,h,t.slice(1));for(const[h,d]of Object.entries(l)){const f=h.replace(F1,"");(!a||t.includes(f))&&gh(e,c,o,d.callable,d.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const s=sw(),r=uw(t),i=t!==r;let o=null,a=!0,c=!0,l=!1;i&&s&&(o=s.Event(t,n),s(e).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=Pf(new Event(t,{bubbles:a,cancelable:!0}),n);return l&&u.preventDefault(),c&&e.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Pf(e,t={}){for(const[n,s]of Object.entries(t))try{e[n]=s}catch{Object.defineProperty(e,n,{configurable:!0,get(){return s}})}return e}function mg(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function ru(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Pn={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${ru(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${ru(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let r=s.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=mg(e.dataset[s])}return t},getDataAttribute(e,t){return mg(e.getAttribute(`data-bs-${ru(t)}`))}};class $o{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const s=Cn(n)?Pn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...Cn(n)?Pn.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const[s,r]of Object.entries(n)){const i=t[s],o=Cn(i)?"element":k1(i);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${r}".`)}}}const H1="5.3.1";class tn extends $o{constructor(t,n){super(),t=ds(t),t&&(this._element=t,this._config=this._getConfig(n),eu.set(this._element,this.constructor.DATA_KEY,this))}dispose(){eu.remove(this._element,this.constructor.DATA_KEY),C.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,s=!0){rw(t,n,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return eu.get(ds(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return H1}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const iu=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return tw(t)},Q={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let s=e.parentNode.closest(t);for(;s;)n.push(s),s=s.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!fs(n)&&ci(n))},getSelectorFromElement(e){const t=iu(e);return t&&Q.findOne(t)?t:null},getElementFromSelector(e){const t=iu(e);return t?Q.findOne(t):null},getMultipleElementsFromSelector(e){const t=iu(e);return t?Q.find(t):[]}},vl=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,s=e.NAME;C.on(document,n,`[data-bs-dismiss="${s}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),fs(this))return;const i=Q.getElementFromSelector(this)||this.closest(`.${s}`);e.getOrCreateInstance(i)[t]()})},W1="alert",K1="bs.alert",hw=`.${K1}`,z1=`close${hw}`,G1=`closed${hw}`,Q1="fade",Y1="show";class El extends tn{static get NAME(){return W1}close(){if(C.trigger(this._element,z1).defaultPrevented)return;this._element.classList.remove(Y1);const n=this._element.classList.contains(Q1);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),C.trigger(this._element,G1),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=El.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}vl(El,"close");je(El);const X1="button",J1="bs.button",Z1=`.${J1}`,tL=".data-api",eL="active",gg='[data-bs-toggle="button"]',nL=`click${Z1}${tL}`;class Tl extends tn{static get NAME(){return X1}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(eL))}static jQueryInterface(t){return this.each(function(){const n=Tl.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}C.on(document,nL,gg,e=>{e.preventDefault();const t=e.target.closest(gg);Tl.getOrCreateInstance(t).toggle()});je(Tl);const sL="swipe",li=".bs.swipe",rL=`touchstart${li}`,iL=`touchmove${li}`,oL=`touchend${li}`,aL=`pointerdown${li}`,cL=`pointerup${li}`,lL="touch",uL="pen",hL="pointer-event",dL=40,fL={endCallback:null,leftCallback:null,rightCallback:null},pL={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class pc extends $o{constructor(t,n){super(),this._element=t,!(!t||!pc.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return fL}static get DefaultType(){return pL}static get NAME(){return sL}dispose(){C.off(this._element,li)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Te(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=dL)return;const n=t/this._deltaX;this._deltaX=0,n&&Te(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(C.on(this._element,aL,t=>this._start(t)),C.on(this._element,cL,t=>this._end(t)),this._element.classList.add(hL)):(C.on(this._element,rL,t=>this._start(t)),C.on(this._element,iL,t=>this._move(t)),C.on(this._element,oL,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===uL||t.pointerType===lL)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const mL="carousel",gL="bs.carousel",vs=`.${gL}`,dw=".data-api",_L="ArrowLeft",yL="ArrowRight",vL=500,yi="next",ar="prev",pr="left",ka="right",EL=`slide${vs}`,ou=`slid${vs}`,TL=`keydown${vs}`,wL=`mouseenter${vs}`,AL=`mouseleave${vs}`,IL=`dragstart${vs}`,bL=`load${vs}${dw}`,RL=`click${vs}${dw}`,fw="carousel",fa="active",SL="slide",CL="carousel-item-end",PL="carousel-item-start",OL="carousel-item-next",NL="carousel-item-prev",pw=".active",mw=".carousel-item",DL=pw+mw,kL=".carousel-item img",xL=".carousel-indicators",LL="[data-bs-slide], [data-bs-slide-to]",VL='[data-bs-ride="carousel"]',ML={[_L]:ka,[yL]:pr},UL={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},FL={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Bo extends tn{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(xL,this._element),this._addEventListeners(),this._config.ride===fw&&this.cycle()}static get Default(){return UL}static get DefaultType(){return FL}static get NAME(){return mL}next(){this._slide(yi)}nextWhenVisible(){!document.hidden&&ci(this._element)&&this.next()}prev(){this._slide(ar)}pause(){this._isSliding&&ew(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){C.one(this._element,ou,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){C.one(this._element,ou,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const r=t>s?yi:ar;this._slide(r,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&C.on(this._element,TL,t=>this._keydown(t)),this._config.pause==="hover"&&(C.on(this._element,wL,()=>this.pause()),C.on(this._element,AL,()=>this._maybeEnableCycle())),this._config.touch&&pc.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of Q.find(kL,this._element))C.on(s,IL,r=>r.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(pr)),rightCallback:()=>this._slide(this._directionToOrder(ka)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),vL+this._config.interval))}};this._swipeHelper=new pc(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=ML[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=Q.findOne(pw,this._indicatorsElement);n.classList.remove(fa),n.removeAttribute("aria-current");const s=Q.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(fa),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const s=this._getActive(),r=t===yi,i=n||Cf(this._getItems(),s,r,this._config.wrap);if(i===s)return;const o=this._getItemIndex(i),a=f=>C.trigger(this._element,f,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:o});if(a(EL).defaultPrevented||!s||!i)return;const l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const u=r?PL:CL,h=r?OL:NL;i.classList.add(h),Fo(i),s.classList.add(u),i.classList.add(u);const d=()=>{i.classList.remove(u,h),i.classList.add(fa),s.classList.remove(fa,h,u),this._isSliding=!1,a(ou)};this._queueCallback(d,s,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(SL)}_getActive(){return Q.findOne(DL,this._element)}_getItems(){return Q.find(mw,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return $e()?t===pr?ar:yi:t===pr?yi:ar}_orderToDirection(t){return $e()?t===ar?pr:ka:t===ar?ka:pr}static jQueryInterface(t){return this.each(function(){const n=Bo.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}C.on(document,RL,LL,function(e){const t=Q.getElementFromSelector(this);if(!t||!t.classList.contains(fw))return;e.preventDefault();const n=Bo.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(Pn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});C.on(window,bL,()=>{const e=Q.find(VL);for(const t of e)Bo.getOrCreateInstance(t)});je(Bo);const $L="collapse",BL="bs.collapse",jo=`.${BL}`,jL=".data-api",qL=`show${jo}`,HL=`shown${jo}`,WL=`hide${jo}`,KL=`hidden${jo}`,zL=`click${jo}${jL}`,au="show",yr="collapse",pa="collapsing",GL="collapsed",QL=`:scope .${yr} .${yr}`,YL="collapse-horizontal",XL="width",JL="height",ZL=".collapse.show, .collapse.collapsing",_h='[data-bs-toggle="collapse"]',tV={parent:null,toggle:!0},eV={parent:"(null|element)",toggle:"boolean"};class fo extends tn{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const s=Q.find(_h);for(const r of s){const i=Q.getSelectorFromElement(r),o=Q.find(i).filter(a=>a===this._element);i!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return tV}static get DefaultType(){return eV}static get NAME(){return $L}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(ZL).filter(a=>a!==this._element).map(a=>fo.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||C.trigger(this._element,qL).defaultPrevented)return;for(const a of t)a.hide();const s=this._getDimension();this._element.classList.remove(yr),this._element.classList.add(pa),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(pa),this._element.classList.add(yr,au),this._element.style[s]="",C.trigger(this._element,HL)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||C.trigger(this._element,WL).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Fo(this._element),this._element.classList.add(pa),this._element.classList.remove(yr,au);for(const r of this._triggerArray){const i=Q.getElementFromSelector(r);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(pa),this._element.classList.add(yr),C.trigger(this._element,KL)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(au)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=ds(t.parent),t}_getDimension(){return this._element.classList.contains(YL)?XL:JL}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(_h);for(const n of t){const s=Q.getElementFromSelector(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(t){const n=Q.find(QL,this._config.parent);return Q.find(t,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const s of t)s.classList.toggle(GL,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const s=fo.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}C.on(document,zL,_h,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const t of Q.getMultipleElementsFromSelector(this))fo.getOrCreateInstance(t,{toggle:!1}).toggle()});je(fo);const _g="dropdown",nV="bs.dropdown",tr=`.${nV}`,Of=".data-api",sV="Escape",yg="Tab",rV="ArrowUp",vg="ArrowDown",iV=2,oV=`hide${tr}`,aV=`hidden${tr}`,cV=`show${tr}`,lV=`shown${tr}`,gw=`click${tr}${Of}`,_w=`keydown${tr}${Of}`,uV=`keyup${tr}${Of}`,mr="show",hV="dropup",dV="dropend",fV="dropstart",pV="dropup-center",mV="dropdown-center",Os='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',gV=`${Os}.${mr}`,xa=".dropdown-menu",_V=".navbar",yV=".navbar-nav",vV=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",EV=$e()?"top-end":"top-start",TV=$e()?"top-start":"top-end",wV=$e()?"bottom-end":"bottom-start",AV=$e()?"bottom-start":"bottom-end",IV=$e()?"left-start":"right-start",bV=$e()?"right-start":"left-start",RV="top",SV="bottom",CV={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},PV={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class gn extends tn{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,xa)[0]||Q.prev(this._element,xa)[0]||Q.findOne(xa,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return CV}static get DefaultType(){return PV}static get NAME(){return _g}toggle(){return this._isShown()?this.hide():this.show()}show(){if(fs(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!C.trigger(this._element,cV,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(yV))for(const s of[].concat(...document.body.children))C.on(s,"mouseover",fc);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(mr),this._element.classList.add(mr),C.trigger(this._element,lV,t)}}hide(){if(fs(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!C.trigger(this._element,oV,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))C.off(s,"mouseover",fc);this._popper&&this._popper.destroy(),this._menu.classList.remove(mr),this._element.classList.remove(mr),this._element.setAttribute("aria-expanded","false"),Pn.removeDataAttribute(this._menu,"popper"),C.trigger(this._element,aV,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Cn(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${_g.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof ZT>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:Cn(this._config.reference)?t=ds(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=Sf(t,this._menu,n)}_isShown(){return this._menu.classList.contains(mr)}_getPlacement(){const t=this._parent;if(t.classList.contains(dV))return IV;if(t.classList.contains(fV))return bV;if(t.classList.contains(pV))return RV;if(t.classList.contains(mV))return SV;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(hV)?n?TV:EV:n?AV:wV}_detectNavbar(){return this._element.closest(_V)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Pn.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...Te(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:n}){const s=Q.find(vV,this._menu).filter(r=>ci(r));s.length&&Cf(s,n,t===vg,!s.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=gn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===iV||t.type==="keyup"&&t.key!==yg)return;const n=Q.find(gV);for(const s of n){const r=gn.getInstance(s);if(!r||r._config.autoClose===!1)continue;const i=t.composedPath(),o=i.includes(r._menu);if(i.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(t.target)&&(t.type==="keyup"&&t.key===yg||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:r._element};t.type==="click"&&(a.clickEvent=t),r._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),s=t.key===sV,r=[rV,vg].includes(t.key);if(!r&&!s||n&&!s)return;t.preventDefault();const i=this.matches(Os)?this:Q.prev(this,Os)[0]||Q.next(this,Os)[0]||Q.findOne(Os,t.delegateTarget.parentNode),o=gn.getOrCreateInstance(i);if(r){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),i.focus())}}C.on(document,_w,Os,gn.dataApiKeydownHandler);C.on(document,_w,xa,gn.dataApiKeydownHandler);C.on(document,gw,gn.clearMenus);C.on(document,uV,gn.clearMenus);C.on(document,gw,Os,function(e){e.preventDefault(),gn.getOrCreateInstance(this).toggle()});je(gn);const yw="backdrop",OV="fade",Eg="show",Tg=`mousedown.bs.${yw}`,NV={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},DV={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class vw extends $o{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return NV}static get DefaultType(){return DV}static get NAME(){return yw}show(t){if(!this._config.isVisible){Te(t);return}this._append();const n=this._getElement();this._config.isAnimated&&Fo(n),n.classList.add(Eg),this._emulateAnimation(()=>{Te(t)})}hide(t){if(!this._config.isVisible){Te(t);return}this._getElement().classList.remove(Eg),this._emulateAnimation(()=>{this.dispose(),Te(t)})}dispose(){this._isAppended&&(C.off(this._element,Tg),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(OV),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=ds(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),C.on(t,Tg,()=>{Te(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){rw(t,this._getElement(),this._config.isAnimated)}}const kV="focustrap",xV="bs.focustrap",mc=`.${xV}`,LV=`focusin${mc}`,VV=`keydown.tab${mc}`,MV="Tab",UV="forward",wg="backward",FV={autofocus:!0,trapElement:null},$V={autofocus:"boolean",trapElement:"element"};class Ew extends $o{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return FV}static get DefaultType(){return $V}static get NAME(){return kV}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),C.off(document,mc),C.on(document,LV,t=>this._handleFocusin(t)),C.on(document,VV,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,C.off(document,mc))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const s=Q.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===wg?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===MV&&(this._lastTabNavDirection=t.shiftKey?wg:UV)}}const Ag=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ig=".sticky-top",ma="padding-right",bg="margin-right";class yh{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ma,n=>n+t),this._setElementAttributes(Ag,ma,n=>n+t),this._setElementAttributes(Ig,bg,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ma),this._resetElementAttributes(Ag,ma),this._resetElementAttributes(Ig,bg)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,s){const r=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,n){const s=t.style.getPropertyValue(n);s&&Pn.setDataAttribute(t,n,s)}_resetElementAttributes(t,n){const s=r=>{const i=Pn.getDataAttribute(r,n);if(i===null){r.style.removeProperty(n);return}Pn.removeDataAttribute(r,n),r.style.setProperty(n,i)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,n){if(Cn(t)){n(t);return}for(const s of Q.find(t,this._element))n(s)}}const BV="modal",jV="bs.modal",Be=`.${jV}`,qV=".data-api",HV="Escape",WV=`hide${Be}`,KV=`hidePrevented${Be}`,Tw=`hidden${Be}`,ww=`show${Be}`,zV=`shown${Be}`,GV=`resize${Be}`,QV=`click.dismiss${Be}`,YV=`mousedown.dismiss${Be}`,XV=`keydown.dismiss${Be}`,JV=`click${Be}${qV}`,Rg="modal-open",ZV="fade",Sg="show",cu="modal-static",tM=".modal.show",eM=".modal-dialog",nM=".modal-body",sM='[data-bs-toggle="modal"]',rM={backdrop:!0,focus:!0,keyboard:!0},iM={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Qr extends tn{constructor(t,n){super(t,n),this._dialog=Q.findOne(eM,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new yh,this._addEventListeners()}static get Default(){return rM}static get DefaultType(){return iM}static get NAME(){return BV}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||C.trigger(this._element,ww,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Rg),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||C.trigger(this._element,WV).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Sg),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){C.off(window,Be),C.off(this._dialog,Be),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new vw({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ew({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=Q.findOne(nM,this._dialog);n&&(n.scrollTop=0),Fo(this._element),this._element.classList.add(Sg);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,C.trigger(this._element,zV,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){C.on(this._element,XV,t=>{if(t.key===HV){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),C.on(window,GV,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),C.on(this._element,YV,t=>{C.one(this._element,QV,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Rg),this._resetAdjustments(),this._scrollBar.reset(),C.trigger(this._element,Tw)})}_isAnimated(){return this._element.classList.contains(ZV)}_triggerBackdropTransition(){if(C.trigger(this._element,KV).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(cu)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(cu),this._queueCallback(()=>{this._element.classList.remove(cu),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!t){const r=$e()?"paddingLeft":"paddingRight";this._element.style[r]=`${n}px`}if(!s&&t){const r=$e()?"paddingRight":"paddingLeft";this._element.style[r]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const s=Qr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](n)}})}}C.on(document,JV,sM,function(e){const t=Q.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),C.one(t,ww,r=>{r.defaultPrevented||C.one(t,Tw,()=>{ci(this)&&this.focus()})});const n=Q.findOne(tM);n&&Qr.getInstance(n).hide(),Qr.getOrCreateInstance(t).toggle(this)});vl(Qr);je(Qr);const oM="offcanvas",aM="bs.offcanvas",Bn=`.${aM}`,Aw=".data-api",cM=`load${Bn}${Aw}`,lM="Escape",Cg="show",Pg="showing",Og="hiding",uM="offcanvas-backdrop",Iw=".offcanvas.show",hM=`show${Bn}`,dM=`shown${Bn}`,fM=`hide${Bn}`,Ng=`hidePrevented${Bn}`,bw=`hidden${Bn}`,pM=`resize${Bn}`,mM=`click${Bn}${Aw}`,gM=`keydown.dismiss${Bn}`,_M='[data-bs-toggle="offcanvas"]',yM={backdrop:!0,keyboard:!0,scroll:!1},vM={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ps extends tn{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return yM}static get DefaultType(){return vM}static get NAME(){return oM}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||C.trigger(this._element,hM,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new yh().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Pg);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Cg),this._element.classList.remove(Pg),C.trigger(this._element,dM,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||C.trigger(this._element,fM).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Og),this._backdrop.hide();const n=()=>{this._element.classList.remove(Cg,Og),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new yh().reset(),C.trigger(this._element,bw)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){C.trigger(this._element,Ng);return}this.hide()},n=!!this._config.backdrop;return new vw({className:uM,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new Ew({trapElement:this._element})}_addEventListeners(){C.on(this._element,gM,t=>{if(t.key===lM){if(this._config.keyboard){this.hide();return}C.trigger(this._element,Ng)}})}static jQueryInterface(t){return this.each(function(){const n=ps.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}C.on(document,mM,_M,function(e){const t=Q.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),fs(this))return;C.one(t,bw,()=>{ci(this)&&this.focus()});const n=Q.findOne(Iw);n&&n!==t&&ps.getInstance(n).hide(),ps.getOrCreateInstance(t).toggle(this)});C.on(window,cM,()=>{for(const e of Q.find(Iw))ps.getOrCreateInstance(e).show()});C.on(window,pM,()=>{for(const e of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&ps.getOrCreateInstance(e).hide()});vl(ps);je(ps);const EM=/^aria-[\w-]*$/i,Rw={"*":["class","dir","id","lang","role",EM],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},TM=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),wM=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,AM=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?TM.has(n)?!!wM.test(e.nodeValue):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(n))};function IM(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const r=new window.DOMParser().parseFromString(e,"text/html"),i=[].concat(...r.body.querySelectorAll("*"));for(const o of i){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),l=[].concat(t["*"]||[],t[a]||[]);for(const u of c)AM(u,l)||o.removeAttribute(u.nodeName)}return r.body.innerHTML}const bM="TemplateFactory",RM={allowList:Rw,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},SM={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},CM={entry:"(string|element|function|null)",selector:"(string|element)"};class PM extends $o{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return RM}static get DefaultType(){return SM}static get NAME(){return bM}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(t,i,r);const n=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,s]of Object.entries(t))super._typeCheckConfig({selector:n,entry:s},CM)}_setContent(t,n,s){const r=Q.findOne(s,t);if(r){if(n=this._resolvePossibleFunction(n),!n){r.remove();return}if(Cn(n)){this._putElementInTemplate(ds(n),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(n);return}r.textContent=n}}_maybeSanitize(t){return this._config.sanitize?IM(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return Te(t,[this])}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const OM="tooltip",NM=new Set(["sanitize","allowList","sanitizeFn"]),lu="fade",DM="modal",ga="show",kM=".tooltip-inner",Dg=`.${DM}`,kg="hide.bs.modal",vi="hover",uu="focus",xM="click",LM="manual",VM="hide",MM="hidden",UM="show",FM="shown",$M="inserted",BM="click",jM="focusin",qM="focusout",HM="mouseenter",WM="mouseleave",KM={AUTO:"auto",TOP:"top",RIGHT:$e()?"left":"right",BOTTOM:"bottom",LEFT:$e()?"right":"left"},zM={allowList:Rw,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},GM={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ui extends tn{constructor(t,n){if(typeof ZT>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return zM}static get DefaultType(){return GM}static get NAME(){return OM}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),C.off(this._element.closest(Dg),kg,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=C.trigger(this._element,this.constructor.eventName(UM)),s=(nw(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),C.trigger(this._element,this.constructor.eventName($M))),this._popper=this._createPopper(r),r.classList.add(ga),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))C.on(a,"mouseover",fc);const o=()=>{C.trigger(this._element,this.constructor.eventName(FM)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||C.trigger(this._element,this.constructor.eventName(VM)).defaultPrevented)return;if(this._getTipElement().classList.remove(ga),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))C.off(r,"mouseover",fc);this._activeTrigger[xM]=!1,this._activeTrigger[uu]=!1,this._activeTrigger[vi]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),C.trigger(this._element,this.constructor.eventName(MM)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(lu,ga),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=x1(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(lu),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new PM({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[kM]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(lu)}_isShown(){return this.tip&&this.tip.classList.contains(ga)}_createPopper(t){const n=Te(this._config.placement,[this,t,this._element]),s=KM[n.toUpperCase()];return Sf(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return Te(t,[this._element])}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...Te(this._config.popperConfig,[n])}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")C.on(this._element,this.constructor.eventName(BM),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==LM){const s=n===vi?this.constructor.eventName(HM):this.constructor.eventName(jM),r=n===vi?this.constructor.eventName(WM):this.constructor.eventName(qM);C.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?uu:vi]=!0,o._enter()}),C.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?uu:vi]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},C.on(this._element.closest(Dg),kg,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=Pn.getDataAttributes(this._element);for(const s of Object.keys(n))NM.has(s)&&delete n[s];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:ds(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[n,s]of Object.entries(this._config))this.constructor.Default[n]!==s&&(t[n]=s);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=ui.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}je(ui);const QM="popover",YM=".popover-header",XM=".popover-body",JM={...ui.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ZM={...ui.DefaultType,content:"(null|string|element|function)"};class Nf extends ui{static get Default(){return JM}static get DefaultType(){return ZM}static get NAME(){return QM}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[YM]:this._getTitle(),[XM]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=Nf.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}je(Nf);const tU="scrollspy",eU="bs.scrollspy",Df=`.${eU}`,nU=".data-api",sU=`activate${Df}`,xg=`click${Df}`,rU=`load${Df}${nU}`,iU="dropdown-item",cr="active",oU='[data-bs-spy="scroll"]',hu="[href]",aU=".nav, .list-group",Lg=".nav-link",cU=".nav-item",lU=".list-group-item",uU=`${Lg}, ${cU} > ${Lg}, ${lU}`,hU=".dropdown",dU=".dropdown-toggle",fU={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},pU={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class wl extends tn{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return fU}static get DefaultType(){return pU}static get NAME(){return tU}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=ds(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(C.off(this._config.target,xg),C.on(this._config.target,xg,hu,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const s=this._rootElement||window,r=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:r,behavior:"smooth"});return}s.scrollTop=r}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&a){if(s(o),!r)return;continue}!i&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Q.find(hu,this._config.target);for(const n of t){if(!n.hash||fs(n))continue;const s=Q.findOne(decodeURI(n.hash),this._element);ci(s)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(cr),this._activateParents(t),C.trigger(this._element,sU,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(iU)){Q.findOne(dU,t.closest(hU)).classList.add(cr);return}for(const n of Q.parents(t,aU))for(const s of Q.prev(n,uU))s.classList.add(cr)}_clearActiveClass(t){t.classList.remove(cr);const n=Q.find(`${hu}.${cr}`,t);for(const s of n)s.classList.remove(cr)}static jQueryInterface(t){return this.each(function(){const n=wl.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}C.on(window,rU,()=>{for(const e of Q.find(oU))wl.getOrCreateInstance(e)});je(wl);const mU="tab",gU="bs.tab",er=`.${gU}`,_U=`hide${er}`,yU=`hidden${er}`,vU=`show${er}`,EU=`shown${er}`,TU=`click${er}`,wU=`keydown${er}`,AU=`load${er}`,IU="ArrowLeft",Vg="ArrowRight",bU="ArrowUp",Mg="ArrowDown",du="Home",Ug="End",Ns="active",Fg="fade",fu="show",RU="dropdown",SU=".dropdown-toggle",CU=".dropdown-menu",pu=":not(.dropdown-toggle)",PU='.list-group, .nav, [role="tablist"]',OU=".nav-item, .list-group-item",NU=`.nav-link${pu}, .list-group-item${pu}, [role="tab"]${pu}`,Sw='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',mu=`${NU}, ${Sw}`,DU=`.${Ns}[data-bs-toggle="tab"], .${Ns}[data-bs-toggle="pill"], .${Ns}[data-bs-toggle="list"]`;class Yr extends tn{constructor(t){super(t),this._parent=this._element.closest(PU),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),C.on(this._element,wU,n=>this._keydown(n)))}static get NAME(){return mU}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),s=n?C.trigger(n,_U,{relatedTarget:t}):null;C.trigger(t,vU,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(Ns),this._activate(Q.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(fu);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),C.trigger(t,EU,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Fg))}_deactivate(t,n){if(!t)return;t.classList.remove(Ns),t.blur(),this._deactivate(Q.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(fu);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),C.trigger(t,yU,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Fg))}_keydown(t){if(![IU,Vg,bU,Mg,du,Ug].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=this._getChildren().filter(r=>!fs(r));let s;if([du,Ug].includes(t.key))s=n[t.key===du?0:n.length-1];else{const r=[Vg,Mg].includes(t.key);s=Cf(n,t.target,r,!0)}s&&(s.focus({preventScroll:!0}),Yr.getOrCreateInstance(s).show())}_getChildren(){return Q.find(mu,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",n),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=Q.getElementFromSelector(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,n){const s=this._getOuterElement(t);if(!s.classList.contains(RU))return;const r=(i,o)=>{const a=Q.findOne(i,s);a&&a.classList.toggle(o,n)};r(SU,Ns),r(CU,fu),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,s){t.hasAttribute(n)||t.setAttribute(n,s)}_elemIsActive(t){return t.classList.contains(Ns)}_getInnerElement(t){return t.matches(mu)?t:Q.findOne(mu,t)}_getOuterElement(t){return t.closest(OU)||t}static jQueryInterface(t){return this.each(function(){const n=Yr.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}C.on(document,TU,Sw,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!fs(this)&&Yr.getOrCreateInstance(this).show()});C.on(window,AU,()=>{for(const e of Q.find(DU))Yr.getOrCreateInstance(e)});je(Yr);const kU="toast",xU="bs.toast",Es=`.${xU}`,LU=`mouseover${Es}`,VU=`mouseout${Es}`,MU=`focusin${Es}`,UU=`focusout${Es}`,FU=`hide${Es}`,$U=`hidden${Es}`,BU=`show${Es}`,jU=`shown${Es}`,qU="fade",$g="hide",_a="show",ya="showing",HU={animation:"boolean",autohide:"boolean",delay:"number"},WU={animation:!0,autohide:!0,delay:5e3};class Al extends tn{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return WU}static get DefaultType(){return HU}static get NAME(){return kU}show(){if(C.trigger(this._element,BU).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(qU);const n=()=>{this._element.classList.remove(ya),C.trigger(this._element,jU),this._maybeScheduleHide()};this._element.classList.remove($g),Fo(this._element),this._element.classList.add(_a,ya),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||C.trigger(this._element,FU).defaultPrevented)return;const n=()=>{this._element.classList.add($g),this._element.classList.remove(ya,_a),C.trigger(this._element,$U)};this._element.classList.add(ya),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(_a),super.dispose()}isShown(){return this._element.classList.contains(_a)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){C.on(this._element,LU,t=>this._onInteraction(t,!0)),C.on(this._element,VU,t=>this._onInteraction(t,!1)),C.on(this._element,MU,t=>this._onInteraction(t,!0)),C.on(this._element,UU,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=Al.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}vl(Al);je(Al);const kf=ZI(hR);kf.use(nb());kf.use(Hx);kf.mount("#app");export{eF as A,Ve as B,KU as C,QU as D,GU as E,sn as F,bR as N,it as a,zU as b,$a as c,b_ as d,C_ as e,Zt as f,QO as g,tF as h,yI as i,ha as j,YA as k,cb as l,vI as m,aa as n,ks as o,ra as p,nF as q,po as r,oF as s,qo as t,YU as u,aF as v,v_ as w,rF as x,iF as y,sF as z};
