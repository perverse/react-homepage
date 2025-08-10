(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function Ug(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lg={exports:{}},Cc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx=Symbol.for("react.transitional.element"),gx=Symbol.for("react.fragment");function Ng(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:mx,type:e,key:i,ref:t!==void 0?t:null,props:n}}Cc.Fragment=gx;Cc.jsx=Ng;Cc.jsxs=Ng;Lg.exports=Cc;var Pt=Lg.exports,Og={exports:{}},Gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=Symbol.for("react.transitional.element"),_x=Symbol.for("react.portal"),vx=Symbol.for("react.fragment"),xx=Symbol.for("react.strict_mode"),Sx=Symbol.for("react.profiler"),Mx=Symbol.for("react.consumer"),yx=Symbol.for("react.context"),Ex=Symbol.for("react.forward_ref"),Tx=Symbol.for("react.suspense"),bx=Symbol.for("react.memo"),Pg=Symbol.for("react.lazy"),cp=Symbol.iterator;function Ax(e){return e===null||typeof e!="object"?null:(e=cp&&e[cp]||e["@@iterator"],typeof e=="function"?e:null)}var Bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zg=Object.assign,Ig={};function ps(e,t,n){this.props=e,this.context=t,this.refs=Ig,this.updater=n||Bg}ps.prototype.isReactComponent={};ps.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ps.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fg(){}Fg.prototype=ps.prototype;function jd(e,t,n){this.props=e,this.context=t,this.refs=Ig,this.updater=n||Bg}var Zd=jd.prototype=new Fg;Zd.constructor=jd;zg(Zd,ps.prototype);Zd.isPureReactComponent=!0;var up=Array.isArray,Me={H:null,A:null,T:null,S:null,V:null},Hg=Object.prototype.hasOwnProperty;function Kd(e,t,n,i,a,r){return n=r.ref,{$$typeof:Yd,type:e,key:t,ref:n!==void 0?n:null,props:r}}function Rx(e,t){return Kd(e.type,t,void 0,void 0,void 0,e.props)}function Qd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yd}function wx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fp=/\/+/g;function Jc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wx(""+e.key):t.toString(36)}function dp(){}function Cx(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(dp,dp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Tr(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Yd:case _x:s=!0;break;case Pg:return s=e._init,Tr(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+Jc(e,0):i,up(a)?(n="",s!=null&&(n=s.replace(fp,"$&/")+"/"),Tr(a,t,n,"",function(c){return c})):a!=null&&(Qd(a)&&(a=Rx(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(fp,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(up(e))for(var l=0;l<e.length;l++)i=e[l],r=o+Jc(i,l),s+=Tr(i,t,n,r,a);else if(l=Ax(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+Jc(i,l++),s+=Tr(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return Tr(Cx(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Yo(e,t,n){if(e==null)return e;var i=[],a=0;return Tr(e,i,"","",function(r){return t.call(n,r,a++)}),i}function Dx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var hp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ux(){}Gt.Children={map:Yo,forEach:function(e,t,n){Yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yo(e,function(){t++}),t},toArray:function(e){return Yo(e,function(t){return t})||[]},only:function(e){if(!Qd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Gt.Component=ps;Gt.Fragment=vx;Gt.Profiler=Sx;Gt.PureComponent=jd;Gt.StrictMode=xx;Gt.Suspense=Tx;Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;Gt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Me.H.useMemoCache(e)}};Gt.cache=function(e){return function(){return e.apply(null,arguments)}};Gt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=zg({},e.props),a=e.key,r=void 0;if(t!=null)for(s in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(a=""+t.key),t)!Hg.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return Kd(e.type,a,void 0,void 0,r,i)};Gt.createContext=function(e){return e={$$typeof:yx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Mx,_context:e},e};Gt.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Hg.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Kd(e,r,void 0,void 0,null,a)};Gt.createRef=function(){return{current:null}};Gt.forwardRef=function(e){return{$$typeof:Ex,render:e}};Gt.isValidElement=Qd;Gt.lazy=function(e){return{$$typeof:Pg,_payload:{_status:-1,_result:e},_init:Dx}};Gt.memo=function(e,t){return{$$typeof:bx,type:e,compare:t===void 0?null:t}};Gt.startTransition=function(e){var t=Me.T,n={};Me.T=n;try{var i=e(),a=Me.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ux,hp)}catch(r){hp(r)}finally{Me.T=t}};Gt.unstable_useCacheRefresh=function(){return Me.H.useCacheRefresh()};Gt.use=function(e){return Me.H.use(e)};Gt.useActionState=function(e,t,n){return Me.H.useActionState(e,t,n)};Gt.useCallback=function(e,t){return Me.H.useCallback(e,t)};Gt.useContext=function(e){return Me.H.useContext(e)};Gt.useDebugValue=function(){};Gt.useDeferredValue=function(e,t){return Me.H.useDeferredValue(e,t)};Gt.useEffect=function(e,t,n){var i=Me.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)};Gt.useId=function(){return Me.H.useId()};Gt.useImperativeHandle=function(e,t,n){return Me.H.useImperativeHandle(e,t,n)};Gt.useInsertionEffect=function(e,t){return Me.H.useInsertionEffect(e,t)};Gt.useLayoutEffect=function(e,t){return Me.H.useLayoutEffect(e,t)};Gt.useMemo=function(e,t){return Me.H.useMemo(e,t)};Gt.useOptimistic=function(e,t){return Me.H.useOptimistic(e,t)};Gt.useReducer=function(e,t,n){return Me.H.useReducer(e,t,n)};Gt.useRef=function(e){return Me.H.useRef(e)};Gt.useState=function(e){return Me.H.useState(e)};Gt.useSyncExternalStore=function(e,t,n){return Me.H.useSyncExternalStore(e,t,n)};Gt.useTransition=function(){return Me.H.useTransition()};Gt.version="19.1.0";Og.exports=Gt;var $t=Og.exports;const Jd=Ug($t);var Gg={exports:{}},Dc={},Vg={exports:{}},kg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,z){var O=L.length;L.push(z);t:for(;0<O;){var j=O-1>>>1,$=L[j];if(0<a($,z))L[j]=z,L[O]=$,O=j;else break t}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var z=L[0],O=L.pop();if(O!==z){L[0]=O;t:for(var j=0,$=L.length,dt=$>>>1;j<dt;){var Et=2*(j+1)-1,Lt=L[Et],Vt=Et+1,V=L[Vt];if(0>a(Lt,O))Vt<$&&0>a(V,Lt)?(L[j]=V,L[Vt]=O,j=Vt):(L[j]=Lt,L[Et]=O,j=Et);else if(Vt<$&&0>a(V,O))L[j]=V,L[Vt]=O,j=Vt;else break t}}return z}function a(L,z){var O=L.sortIndex-z.sortIndex;return O!==0?O:L.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,h=null,f=3,p=!1,x=!1,M=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function v(L){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=L)i(c),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(c)}}function b(L){if(M=!1,v(L),!x)if(n(l)!==null)x=!0,w||(w=!0,X());else{var z=n(c);z!==null&&K(b,z.startTime-L)}}var w=!1,R=-1,D=5,T=-1;function E(){return m?!0:!(e.unstable_now()-T<D)}function C(){if(m=!1,w){var L=e.unstable_now();T=L;var z=!0;try{t:{x=!1,M&&(M=!1,g(R),R=-1),p=!0;var O=f;try{e:{for(v(L),h=n(l);h!==null&&!(h.expirationTime>L&&E());){var j=h.callback;if(typeof j=="function"){h.callback=null,f=h.priorityLevel;var $=j(h.expirationTime<=L);if(L=e.unstable_now(),typeof $=="function"){h.callback=$,v(L),z=!0;break e}h===n(l)&&i(l),v(L)}else i(l);h=n(l)}if(h!==null)z=!0;else{var dt=n(c);dt!==null&&K(b,dt.startTime-L),z=!1}}break t}finally{h=null,f=O,p=!1}z=void 0}}finally{z?X():w=!1}}}var X;if(typeof _=="function")X=function(){_(C)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=C,X=function(){Y.postMessage(null)}}else X=function(){u(C,0)};function K(L,z){R=u(function(){L(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var O=f;f=z;try{return L()}finally{f=O}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var O=f;f=L;try{return z()}finally{f=O}},e.unstable_scheduleCallback=function(L,z,O){var j=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?j+O:j):O=j,L){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=O+$,L={id:d++,callback:z,priorityLevel:L,startTime:O,expirationTime:$,sortIndex:-1},O>j?(L.sortIndex=O,t(c,L),n(l)===null&&L===n(c)&&(M?(g(R),R=-1):M=!0,K(b,O-j))):(L.sortIndex=$,t(l,L),x||p||(x=!0,w||(w=!0,X()))),L},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(L){var z=f;return function(){var O=f;f=z;try{return L.apply(this,arguments)}finally{f=O}}}})(kg);Vg.exports=kg;var Lx=Vg.exports,Xg={exports:{}},sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nx=$t;function Wg(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Vi(){}var rn={d:{f:Vi,r:function(){throw Error(Wg(522))},D:Vi,C:Vi,L:Vi,m:Vi,X:Vi,S:Vi,M:Vi},p:0,findDOMNode:null},Ox=Symbol.for("react.portal");function Px(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ox,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var ks=Nx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Uc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=rn;sn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Wg(299));return Px(e,t,null,n)};sn.flushSync=function(e){var t=ks.T,n=rn.p;try{if(ks.T=null,rn.p=2,e)return e()}finally{ks.T=t,rn.p=n,rn.d.f()}};sn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,rn.d.C(e,t))};sn.prefetchDNS=function(e){typeof e=="string"&&rn.d.D(e)};sn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Uc(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?rn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&rn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};sn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Uc(t.as,t.crossOrigin);rn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&rn.d.M(e)};sn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Uc(n,t.crossOrigin);rn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};sn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Uc(t.as,t.crossOrigin);rn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else rn.d.m(e)};sn.requestFormReset=function(e){rn.d.r(e)};sn.unstable_batchedUpdates=function(e,t){return e(t)};sn.useFormState=function(e,t,n){return ks.H.useFormState(e,t,n)};sn.useFormStatus=function(){return ks.H.useHostTransitionStatus()};sn.version="19.1.0";function qg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qg)}catch(e){console.error(e)}}qg(),Xg.exports=sn;var Bx=Xg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=Lx,Yg=$t,zx=Bx;function Z(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function jg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Eo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pp(e){if(Eo(e)!==e)throw Error(Z(188))}function Ix(e){var t=e.alternate;if(!t){if(t=Eo(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return pp(a),e;if(r===i)return pp(a),t;r=r.sibling}throw Error(Z(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function Kg(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Kg(e),t!==null)return t;e=e.sibling}return null}var _e=Object.assign,Fx=Symbol.for("react.element"),jo=Symbol.for("react.transitional.element"),Is=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),Qg=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),Hx=Symbol.for("react.provider"),Jg=Symbol.for("react.consumer"),bi=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),hf=Symbol.for("react.suspense_list"),th=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy"),pf=Symbol.for("react.activity"),Gx=Symbol.for("react.memo_cache_sentinel"),mp=Symbol.iterator;function Ts(e){return e===null||typeof e!="object"?null:(e=mp&&e[mp]||e["@@iterator"],typeof e=="function"?e:null)}var Vx=Symbol.for("react.client.reference");function mf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Vx?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case ff:return"Profiler";case Qg:return"StrictMode";case df:return"Suspense";case hf:return"SuspenseList";case pf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Is:return"Portal";case bi:return(e.displayName||"Context")+".Provider";case Jg:return(e._context.displayName||"Context")+".Consumer";case $d:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case th:return t=e.displayName||null,t!==null?t:mf(e.type)||"Memo";case Qi:t=e._payload,e=e._init;try{return mf(e(t))}catch{}}return null}var Fs=Array.isArray,Ut=Yg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=zx.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Va={pending:!1,data:null,method:null,action:null},gf=[],Cr=-1;function fi(e){return{current:e}}function Ye(e){0>Cr||(e.current=gf[Cr],gf[Cr]=null,Cr--)}function ye(e,t){Cr++,gf[Cr]=e.current,e.current=t}var oi=fi(null),ao=fi(null),la=fi(null),Zl=fi(null);function Kl(e,t){switch(ye(la,t),ye(ao,e),ye(oi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Sm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Sm(t),e=m0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ye(oi),ye(oi,e)}function Jr(){Ye(oi),Ye(ao),Ye(la)}function _f(e){e.memoizedState!==null&&ye(Zl,e);var t=oi.current,n=m0(t,e.type);t!==n&&(ye(ao,e),ye(oi,n))}function Ql(e){ao.current===e&&(Ye(oi),Ye(ao)),Zl.current===e&&(Ye(Zl),mo._currentValue=Va)}var vf=Object.prototype.hasOwnProperty,eh=Fe.unstable_scheduleCallback,$c=Fe.unstable_cancelCallback,kx=Fe.unstable_shouldYield,Xx=Fe.unstable_requestPaint,li=Fe.unstable_now,Wx=Fe.unstable_getCurrentPriorityLevel,$g=Fe.unstable_ImmediatePriority,t_=Fe.unstable_UserBlockingPriority,Jl=Fe.unstable_NormalPriority,qx=Fe.unstable_LowPriority,e_=Fe.unstable_IdlePriority,Yx=Fe.log,jx=Fe.unstable_setDisableYieldValue,To=null,Tn=null;function aa(e){if(typeof Yx=="function"&&jx(e),Tn&&typeof Tn.setStrictMode=="function")try{Tn.setStrictMode(To,e)}catch{}}var bn=Math.clz32?Math.clz32:Qx,Zx=Math.log,Kx=Math.LN2;function Qx(e){return e>>>=0,e===0?32:31-(Zx(e)/Kx|0)|0}var Zo=256,Ko=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Na(i):(s&=o,s!==0?a=Na(s):n||(n=o&~e,n!==0&&(a=Na(n))))):(o=i&~r,o!==0?a=Na(o):s!==0?a=Na(s):n||(n=i&~e,n!==0&&(a=Na(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function bo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Jx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n_(){var e=Zo;return Zo<<=1,!(Zo&4194048)&&(Zo=256),e}function i_(){var e=Ko;return Ko<<=1,!(Ko&62914560)&&(Ko=4194304),e}function tu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ao(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $x(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var d=31-bn(n),h=1<<d;o[d]=0,l[d]=-1;var f=c[d];if(f!==null)for(c[d]=null,d=0;d<f.length;d++){var p=f[d];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&a_(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function a_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-bn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function r_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-bn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function nh(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ih(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function s_(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:b0(e.type))}function tS(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var ya=Math.random().toString(36).slice(2),$e="__reactFiber$"+ya,pn="__reactProps$"+ya,ms="__reactContainer$"+ya,xf="__reactEvents$"+ya,eS="__reactListeners$"+ya,nS="__reactHandles$"+ya,gp="__reactResources$"+ya,Ro="__reactMarker$"+ya;function ah(e){delete e[$e],delete e[pn],delete e[xf],delete e[eS],delete e[nS]}function Dr(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ms]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Em(e);e!==null;){if(n=e[$e])return n;e=Em(e)}return t}e=n,n=e.parentNode}return null}function gs(e){if(e=e[$e]||e[ms]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Hs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Z(33))}function Gr(e){var t=e[gp];return t||(t=e[gp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Ro]=!0}var o_=new Set,l_={};function nr(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(l_[e]=t,e=0;e<t.length;e++)o_.add(t[e])}var iS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_p={},vp={};function aS(e){return vf.call(vp,e)?!0:vf.call(_p,e)?!1:iS.test(e)?vp[e]=!0:(_p[e]=!0,!1)}function Dl(e,t,n){if(aS(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Qo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function pi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var eu,xp;function br(e){if(eu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);eu=t&&t[1]||"",xp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+eu+e+xp}var nu=!1;function iu(e,t){if(!e||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var f=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){f=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){f=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=a);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?br(n):""}function rS(e){switch(e.tag){case 26:case 27:case 5:return br(e.type);case 16:return br("Lazy");case 13:return br("Suspense");case 19:return br("SuspenseList");case 0:case 15:return iu(e.type,!1);case 11:return iu(e.type.render,!1);case 1:return iu(e.type,!0);case 31:return br("Activity");default:return""}}function Sp(e){try{var t="";do t+=rS(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function c_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sS(e){var t=c_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $l(e){e._valueTracker||(e._valueTracker=sS(e))}function u_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=c_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function tc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var oS=/[\n"\\]/g;function In(e){return e.replace(oS,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Sf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Pn(t)):e.value!==""+Pn(t)&&(e.value=""+Pn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Mf(e,s,Pn(t)):n!=null?Mf(e,s,Pn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Pn(o):e.removeAttribute("name")}function f_(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Pn(n):"",t=t!=null?""+Pn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function Mf(e,t,n){t==="number"&&tc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Vr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Pn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function d_(e,t,n){if(t!=null&&(t=""+Pn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Pn(n):""}function h_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Z(92));if(Fs(i)){if(1<i.length)throw Error(Z(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Pn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function ts(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||lS.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function p_(e,t,n){if(t!=null&&typeof t!="object")throw Error(Z(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Mp(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&Mp(e,r,t[r])}function rh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return uS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yf=null;function sh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,kr=null;function yp(e){var t=gs(e);if(t&&(e=t.stateNode)){var n=e[pn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Sf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+In(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[pn]||null;if(!a)throw Error(Z(90));Sf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&u_(i)}break t;case"textarea":d_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}}}var au=!1;function m_(e,t,n){if(au)return e(t,n);au=!0;try{var i=e(t);return i}finally{if(au=!1,(Ur!==null||kr!==null)&&(Vc(),Ur&&(t=Ur,e=kr,kr=Ur=null,yp(t),e)))for(t=0;t<e.length;t++)yp(e[t])}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var i=n[pn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=!1;if(Oi)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Ef=!1}var ra=null,oh=null,Ll=null;function g_(){if(Ll)return Ll;var e,t=oh,n=t.length,i,a="value"in ra?ra.value:ra.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Ll=a.slice(e,1<i?1-i:void 0)}function Nl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function Ep(){return!1}function mn(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Jo:Ep,this.isPropagationStopped=Ep,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=mn(ir),wo=_e({},ir,{view:0,detail:0}),fS=mn(wo),ru,su,As,Oc=_e({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==As&&(As&&e.type==="mousemove"?(ru=e.screenX-As.screenX,su=e.screenY-As.screenY):su=ru=0,As=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:su}}),Tp=mn(Oc),dS=_e({},Oc,{dataTransfer:0}),hS=mn(dS),pS=_e({},wo,{relatedTarget:0}),ou=mn(pS),mS=_e({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),gS=mn(mS),_S=_e({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vS=mn(_S),xS=_e({},ir,{data:0}),bp=mn(xS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ES(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yS[e])?!!t[e]:!1}function lh(){return ES}var TS=_e({},wo,{key:function(e){if(e.key){var t=SS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?MS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lh,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bS=mn(TS),AS=_e({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=mn(AS),RS=_e({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lh}),wS=mn(RS),CS=_e({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),DS=mn(CS),US=_e({},Oc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),LS=mn(US),NS=_e({},ir,{newState:0,oldState:0}),OS=mn(NS),PS=[9,13,27,32],ch=Oi&&"CompositionEvent"in window,Xs=null;Oi&&"documentMode"in document&&(Xs=document.documentMode);var BS=Oi&&"TextEvent"in window&&!Xs,__=Oi&&(!ch||Xs&&8<Xs&&11>=Xs),Rp=" ",wp=!1;function v_(e,t){switch(e){case"keyup":return PS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function zS(e,t){switch(e){case"compositionend":return x_(t);case"keypress":return t.which!==32?null:(wp=!0,Rp);case"textInput":return e=t.data,e===Rp&&wp?null:e;default:return null}}function IS(e,t){if(Lr)return e==="compositionend"||!ch&&v_(e,t)?(e=g_(),Ll=oh=ra=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return __&&t.locale!=="ko"?null:t.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!FS[e.type]:t==="textarea"}function S_(e,t,n,i){Ur?kr?kr.push(i):kr=[i]:Ur=i,t=vc(t,"onChange"),0<t.length&&(n=new Nc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ws=null,so=null;function HS(e){d0(e,0)}function Pc(e){var t=Hs(e);if(u_(t))return e}function Dp(e,t){if(e==="change")return t}var M_=!1;if(Oi){var lu;if(Oi){var cu="oninput"in document;if(!cu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),cu=typeof Up.oninput=="function"}lu=cu}else lu=!1;M_=lu&&(!document.documentMode||9<document.documentMode)}function Lp(){Ws&&(Ws.detachEvent("onpropertychange",y_),so=Ws=null)}function y_(e){if(e.propertyName==="value"&&Pc(so)){var t=[];S_(t,so,e,sh(e)),m_(HS,t)}}function GS(e,t,n){e==="focusin"?(Lp(),Ws=t,so=n,Ws.attachEvent("onpropertychange",y_)):e==="focusout"&&Lp()}function VS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pc(so)}function kS(e,t){if(e==="click")return Pc(t)}function XS(e,t){if(e==="input"||e==="change")return Pc(t)}function WS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Cn=typeof Object.is=="function"?Object.is:WS;function oo(e,t){if(Cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!vf.call(t,a)||!Cn(e[a],t[a]))return!1}return!0}function Np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Op(e,t){var n=Np(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Np(n)}}function E_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?E_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function T_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=tc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tc(e.document)}return t}function uh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qS=Oi&&"documentMode"in document&&11>=document.documentMode,Nr=null,Tf=null,qs=null,bf=!1;function Pp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bf||Nr==null||Nr!==tc(i)||(i=Nr,"selectionStart"in i&&uh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qs&&oo(qs,i)||(qs=i,i=vc(Tf,"onSelect"),0<i.length&&(t=new Nc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Nr)))}function Aa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Or={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},uu={},b_={};Oi&&(b_=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function ar(e){if(uu[e])return uu[e];if(!Or[e])return e;var t=Or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in b_)return uu[e]=t[n];return e}var A_=ar("animationend"),R_=ar("animationiteration"),w_=ar("animationstart"),YS=ar("transitionrun"),jS=ar("transitionstart"),ZS=ar("transitioncancel"),C_=ar("transitionend"),D_=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function Jn(e,t){D_.set(e,t),nr(t,[e])}var Bp=new WeakMap;function Fn(e,t){if(typeof e=="object"&&e!==null){var n=Bp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Sp(t)},Bp.set(e,t),t)}return{value:e,source:t,stack:Sp(t)}}var Nn=[],Pr=0,fh=0;function Bc(){for(var e=Pr,t=fh=Pr=0;t<e;){var n=Nn[t];Nn[t++]=null;var i=Nn[t];Nn[t++]=null;var a=Nn[t];Nn[t++]=null;var r=Nn[t];if(Nn[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&U_(n,a,r)}}function zc(e,t,n,i){Nn[Pr++]=e,Nn[Pr++]=t,Nn[Pr++]=n,Nn[Pr++]=i,fh|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function dh(e,t,n,i){return zc(e,t,n,i),ec(e)}function _s(e,t){return zc(e,null,null,t),ec(e)}function U_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-bn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function ec(e){if(50<no)throw no=0,Yf=null,Error(Z(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Br={};function KS(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(e,t,n,i){return new KS(e,t,n,i)}function hh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ui(e,t){var n=e.alternate;return n===null?(n=En(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function L_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ol(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")hh(e)&&(s=1);else if(typeof e=="string")s=JM(e,n,oi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case pf:return e=En(31,n,t,a),e.elementType=pf,e.lanes=r,e;case wr:return ka(n.children,a,r,t);case Qg:s=8,a|=24;break;case ff:return e=En(12,n,t,a|2),e.elementType=ff,e.lanes=r,e;case df:return e=En(13,n,t,a),e.elementType=df,e.lanes=r,e;case hf:return e=En(19,n,t,a),e.elementType=hf,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hx:case bi:s=10;break t;case Jg:s=9;break t;case $d:s=11;break t;case th:s=14;break t;case Qi:s=16,i=null;break t}s=29,n=Error(Z(130,e===null?"null":typeof e,"")),i=null}return t=En(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function ka(e,t,n,i){return e=En(7,e,i,t),e.lanes=n,e}function fu(e,t,n){return e=En(6,e,null,t),e.lanes=n,e}function du(e,t,n){return t=En(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zr=[],Ir=0,nc=null,ic=0,Bn=[],zn=0,Xa=null,Ai=1,Ri="";function Oa(e,t){zr[Ir++]=ic,zr[Ir++]=nc,nc=e,ic=t}function N_(e,t,n){Bn[zn++]=Ai,Bn[zn++]=Ri,Bn[zn++]=Xa,Xa=e;var i=Ai;e=Ri;var a=32-bn(i)-1;i&=~(1<<a),n+=1;var r=32-bn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ai=1<<32-bn(t)+a|n<<a|i,Ri=r+e}else Ai=1<<r|n<<a|i,Ri=e}function ph(e){e.return!==null&&(Oa(e,1),N_(e,1,0))}function mh(e){for(;e===nc;)nc=zr[--Ir],zr[Ir]=null,ic=zr[--Ir],zr[Ir]=null;for(;e===Xa;)Xa=Bn[--zn],Bn[zn]=null,Ri=Bn[--zn],Bn[zn]=null,Ai=Bn[--zn],Bn[zn]=null}var an=null,Re=null,te=!1,Wa=null,ni=!1,Rf=Error(Z(519));function Ka(e){var t=Error(Z(418,""));throw lo(Fn(t,e)),Rf}function zp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[pn]=i,n){case"dialog":Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":case"embed":Wt("load",t);break;case"video":case"audio":for(n=0;n<fo.length;n++)Wt(fo[n],t);break;case"source":Wt("error",t);break;case"img":case"image":case"link":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"input":Wt("invalid",t),f_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),$l(t);break;case"select":Wt("invalid",t);break;case"textarea":Wt("invalid",t),h_(t,i.value,i.defaultValue,i.children),$l(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||p0(t.textContent,n)?(i.popover!=null&&(Wt("beforetoggle",t),Wt("toggle",t)),i.onScroll!=null&&Wt("scroll",t),i.onScrollEnd!=null&&Wt("scrollend",t),i.onClick!=null&&(t.onclick=Wc),t=!0):t=!1,t||Ka(e)}function Ip(e){for(an=e.return;an;)switch(an.tag){case 5:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:an=an.return}}function Rs(e){if(e!==an)return!1;if(!te)return Ip(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||$f(e.type,e.memoizedProps)),n=!n),n&&Re&&Ka(e),Ip(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Re=Kn(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Re=null}}else t===27?(t=Re,Ea(e.type)?(e=nd,nd=null,Re=e):Re=t):Re=an?Kn(e.stateNode.nextSibling):null;return!0}function Co(){Re=an=null,te=!1}function Fp(){var e=Wa;return e!==null&&(fn===null?fn=e:fn.push.apply(fn,e),Wa=null),e}function lo(e){Wa===null?Wa=[e]:Wa.push(e)}var wf=fi(null),rr=null,wi=null;function $i(e,t,n){ye(wf,t._currentValue),t._currentValue=n}function Li(e){e._currentValue=wf.current,Ye(wf)}function Cf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Df(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Cf(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(Z(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Cf(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Do(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(Z(387));if(s=s.memoizedProps,s!==null){var o=a.type;Cn(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===Zl.current){if(s=a.alternate,s===null)throw Error(Z(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(mo):e=[mo])}a=a.return}e!==null&&Df(t,e,n,i),t.flags|=262144}function ac(e){for(e=e.firstContext;e!==null;){if(!Cn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){rr=e,wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tn(e){return O_(rr,e)}function $o(e,t){return rr===null&&Qa(e),O_(e,t)}function O_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},wi===null){if(e===null)throw Error(Z(308));wi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wi=wi.next=t;return n}var QS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},JS=Fe.unstable_scheduleCallback,$S=Fe.unstable_NormalPriority,Be={$$typeof:bi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gh(){return{controller:new QS,data:new Map,refCount:0}}function Uo(e){e.refCount--,e.refCount===0&&JS($S,function(){e.controller.abort()})}var Ys=null,Uf=0,es=0,Xr=null;function tM(e,t){if(Ys===null){var n=Ys=[];Uf=0,es=Fh(),Xr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Uf++,t.then(Hp,Hp),t}function Hp(){if(--Uf===0&&Ys!==null){Xr!==null&&(Xr.status="fulfilled");var e=Ys;Ys=null,es=0,Xr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function eM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Gp=Ut.S;Ut.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&tM(e,t),Gp!==null&&Gp(e,t)};var qa=fi(null);function _h(){var e=qa.current;return e!==null?e:me.pooledCache}function Pl(e,t){t===null?ye(qa,qa.current):ye(qa,t.pool)}function P_(){var e=_h();return e===null?null:{parent:Be._currentValue,pool:e}}var Lo=Error(Z(460)),B_=Error(Z(474)),Ic=Error(Z(542)),Lf={then:function(){}};function Vp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tl(){}function z_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(tl,tl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xp(e),e;default:if(typeof t.status=="string")t.then(tl,tl);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(Z(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xp(e),e}throw js=t,Lo}}var js=null;function kp(){if(js===null)throw Error(Z(459));var e=js;return js=null,e}function Xp(e){if(e===Lo||e===Ic)throw Error(Z(483))}var Ji=!1;function vh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ae&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=ec(e),U_(e,null,n),t}return zc(e,i,t,n),ec(e)}function Zs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,r_(e,n)}}function hu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Of=!1;function Ks(){if(Of){var e=Xr;if(e!==null)throw e}}function Qs(e,t,n,i){Of=!1;var a=e.updateQueue;Ji=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(r!==null){var h=a.baseState;s=0,d=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Zt&f)===f:(i&f)===f){f!==0&&f===es&&(Of=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var x=e,M=o;f=t;var m=n;switch(M.tag){case 1:if(x=M.payload,typeof x=="function"){h=x.call(m,h,f);break t}h=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,f=typeof x=="function"?x.call(m,h,f):x,f==null)break t;h=_e({},h,f);break t;case 2:Ji=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,r===null&&(a.shared.lanes=0),Sa|=s,e.lanes=s,e.memoizedState=h}}function I_(e,t){if(typeof e!="function")throw Error(Z(191,e));e.call(t)}function F_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)I_(n[e],t)}var ns=fi(null),rc=fi(0);function Wp(e,t){e=zi,ye(rc,e),ye(ns,t),zi=e|t.baseLanes}function Pf(){ye(rc,zi),ye(ns,ns.current)}function xh(){zi=rc.current,Ye(ns),Ye(rc)}var va=0,Xt=null,ce=null,Oe=null,sc=!1,Wr=!1,Ja=!1,oc=0,co=0,qr=null,nM=0;function De(){throw Error(Z(321))}function Sh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Cn(e[n],t[n]))return!1;return!0}function Mh(e,t,n,i,a,r){return va=r,Xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?gv:_v,Ja=!1,r=n(i,a),Ja=!1,Wr&&(r=G_(t,n,i,a)),H_(e),r}function H_(e){Ut.H=lc;var t=ce!==null&&ce.next!==null;if(va=0,Oe=ce=Xt=null,sc=!1,co=0,qr=null,t)throw Error(Z(300));e===null||qe||(e=e.dependencies,e!==null&&ac(e)&&(qe=!0))}function G_(e,t,n,i){Xt=e;var a=0;do{if(Wr&&(qr=null),co=0,Wr=!1,25<=a)throw Error(Z(301));if(a+=1,Oe=ce=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ut.H=cM,r=t(n,i)}while(Wr);return r}function iM(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?No(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(Xt.flags|=1024),t}function yh(){var e=oc!==0;return oc=0,e}function Eh(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Th(e){if(sc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}sc=!1}va=0,Oe=ce=Xt=null,Wr=!1,co=oc=0,qr=null}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Xt.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Pe(){if(ce===null){var e=Xt.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Oe===null?Xt.memoizedState:Oe.next;if(t!==null)Oe=t,ce=e;else{if(e===null)throw Xt.alternate===null?Error(Z(467)):Error(Z(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Oe===null?Xt.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function bh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=co;return co+=1,qr===null&&(qr=[]),e=z_(qr,e,t),t=Xt,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?gv:_v),e}function Fc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return No(e);if(e.$$typeof===bi)return tn(e)}throw Error(Z(438,String(e)))}function Ah(e){var t=null,n=Xt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Xt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=bh(),Xt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Gx;return t.index++,n}function Pi(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=Pe();return Rh(t,ce,e)}function Rh(e,t,n){var i=e.queue;if(i===null)throw Error(Z(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,d=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Zt&h)===h:(va&h)===h){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===es&&(d=!0);else if((va&f)===f){c=c.next,f===es&&(d=!0);continue}else h={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,Xt.lanes|=f,Sa|=f;h=c.action,Ja&&n(r,h),r=c.hasEagerState?c.eagerState:n(r,h)}else f={lane:h,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,Xt.lanes|=h,Sa|=h;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!Cn(r,e.memoizedState)&&(qe=!0,d&&(n=Xr,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function pu(e){var t=Pe(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);Cn(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function V_(e,t,n){var i=Xt,a=Pe(),r=te;if(r){if(n===void 0)throw Error(Z(407));n=n()}else n=t();var s=!Cn((ce||a).memoizedState,n);s&&(a.memoizedState=n,qe=!0),a=a.queue;var o=W_.bind(null,i,a,e);if(Oo(2048,8,o,[e]),a.getSnapshot!==t||s||Oe!==null&&Oe.memoizedState.tag&1){if(i.flags|=2048,is(9,Hc(),X_.bind(null,i,a,n,t),null),me===null)throw Error(Z(349));r||va&124||k_(i,t,n)}return n}function k_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xt.updateQueue,t===null?(t=bh(),Xt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function X_(e,t,n,i){t.value=n,t.getSnapshot=i,q_(t)&&Y_(e)}function W_(e,t,n){return n(function(){q_(t)&&Y_(e)})}function q_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cn(e,n)}catch{return!0}}function Y_(e){var t=_s(e,2);t!==null&&Rn(t,e,2)}function Bf(e){var t=cn();if(typeof e=="function"){var n=e;if(e=n(),Ja){aa(!0);try{n()}finally{aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t}function j_(e,t,n,i){return e.baseState=n,Rh(e,ce,typeof i=="function"?i:Pi)}function aM(e,t,n,i,a){if(Gc(e))throw Error(Z(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Ut.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,Z_(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Z_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Ut.T,s={};Ut.T=s;try{var o=n(a,i),l=Ut.S;l!==null&&l(s,o),qp(e,t,o)}catch(c){zf(e,t,c)}finally{Ut.T=r}}else try{r=n(a,i),qp(e,t,r)}catch(c){zf(e,t,c)}}function qp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Yp(e,t,i)},function(i){return zf(e,t,i)}):Yp(e,t,n)}function Yp(e,t,n){t.status="fulfilled",t.value=n,K_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Z_(e,n)))}function zf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,K_(t),t=t.next;while(t!==i)}e.action=null}function K_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Q_(e,t){return t}function jp(e,t){if(te){var n=me.formState;if(n!==null){t:{var i=Xt;if(te){if(Re){e:{for(var a=Re,r=ni;a.nodeType!==8;){if(!r){a=null;break e}if(a=Kn(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Re=Kn(a.nextSibling),i=a.data==="F!";break t}}Ka(i)}i=!1}i&&(t=n[0])}}return n=cn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Q_,lastRenderedState:t},n.queue=i,n=hv.bind(null,Xt,i),i.dispatch=n,i=Bf(!1),r=Uh.bind(null,Xt,!1,i.queue),i=cn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=aM.bind(null,Xt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Zp(e){var t=Pe();return J_(t,ce,e)}function J_(e,t,n){if(t=Rh(e,t,Q_)[0],e=Bl(Pi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=No(t)}catch(s){throw s===Lo?Ic:s}else i=t;t=Pe();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Xt.flags|=2048,is(9,Hc(),rM.bind(null,a,n),null)),[i,r,e]}function rM(e,t){e.action=t}function Kp(e){var t=Pe(),n=ce;if(n!==null)return J_(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function is(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Xt.updateQueue,t===null&&(t=bh(),Xt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Hc(){return{destroy:void 0,resource:void 0}}function $_(){return Pe().memoizedState}function zl(e,t,n,i){var a=cn();i=i===void 0?null:i,Xt.flags|=e,a.memoizedState=is(1|t,Hc(),n,i)}function Oo(e,t,n,i){var a=Pe();i=i===void 0?null:i;var r=a.memoizedState.inst;ce!==null&&i!==null&&Sh(i,ce.memoizedState.deps)?a.memoizedState=is(t,r,n,i):(Xt.flags|=e,a.memoizedState=is(1|t,r,n,i))}function Qp(e,t){zl(8390656,8,e,t)}function tv(e,t){Oo(2048,8,e,t)}function ev(e,t){return Oo(4,2,e,t)}function nv(e,t){return Oo(4,4,e,t)}function iv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function av(e,t,n){n=n!=null?n.concat([e]):null,Oo(4,4,iv.bind(null,t,e),n)}function wh(){}function rv(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Sh(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function sv(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Sh(t,i[1]))return i[0];if(i=e(),Ja){aa(!0);try{e()}finally{aa(!1)}}return n.memoizedState=[i,t],i}function Ch(e,t,n){return n===void 0||va&1073741824?e.memoizedState=t:(e.memoizedState=n,e=Kv(),Xt.lanes|=e,Sa|=e,n)}function ov(e,t,n,i){return Cn(n,t)?n:ns.current!==null?(e=Ch(e,n,i),Cn(e,t)||(qe=!0),e):va&42?(e=Kv(),Xt.lanes|=e,Sa|=e,t):(qe=!0,e.memoizedState=n)}function lv(e,t,n,i,a){var r=ee.p;ee.p=r!==0&&8>r?r:8;var s=Ut.T,o={};Ut.T=o,Uh(e,!1,t,n);try{var l=a(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=eM(l,i);Js(e,t,d,An(e))}else Js(e,t,i,An(e))}catch(h){Js(e,t,{then:function(){},status:"rejected",reason:h},An())}finally{ee.p=r,Ut.T=s}}function sM(){}function If(e,t,n,i){if(e.tag!==5)throw Error(Z(476));var a=cv(e).queue;lv(e,a,t,Va,n===null?sM:function(){return uv(e),n(i)})}function cv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Va,baseState:Va,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:Va},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uv(e){var t=cv(e).next.queue;Js(e,t,{},An())}function Dh(){return tn(mo)}function fv(){return Pe().memoizedState}function dv(){return Pe().memoizedState}function oM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=An();e=ca(n);var i=ua(t,e,n);i!==null&&(Rn(i,t,n),Zs(i,t,n)),t={cache:gh()},e.payload=t;return}t=t.return}}function lM(e,t,n){var i=An();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(e)?pv(t,n):(n=dh(e,t,n,i),n!==null&&(Rn(n,e,i),mv(n,t,i)))}function hv(e,t,n){var i=An();Js(e,t,n,i)}function Js(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))pv(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Cn(o,s))return zc(e,t,a,0),me===null&&Bc(),!1}catch{}finally{}if(n=dh(e,t,a,i),n!==null)return Rn(n,e,i),mv(n,t,i),!0}return!1}function Uh(e,t,n,i){if(i={lane:2,revertLane:Fh(),action:i,hasEagerState:!1,eagerState:null,next:null},Gc(e)){if(t)throw Error(Z(479))}else t=dh(e,n,i,2),t!==null&&Rn(t,e,2)}function Gc(e){var t=e.alternate;return e===Xt||t!==null&&t===Xt}function pv(e,t){Wr=sc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,r_(e,n)}}var lc={readContext:tn,use:Fc,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De},gv={readContext:tn,use:Fc,useCallback:function(e,t){return cn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:Qp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,zl(4194308,4,iv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zl(4194308,4,e,t)},useInsertionEffect:function(e,t){zl(4,2,e,t)},useMemo:function(e,t){var n=cn();t=t===void 0?null:t;var i=e();if(Ja){aa(!0);try{e()}finally{aa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=cn();if(n!==void 0){var a=n(t);if(Ja){aa(!0);try{n(t)}finally{aa(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=lM.bind(null,Xt,e),[i.memoizedState,e]},useRef:function(e){var t=cn();return e={current:e},t.memoizedState=e},useState:function(e){e=Bf(e);var t=e.queue,n=hv.bind(null,Xt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:wh,useDeferredValue:function(e,t){var n=cn();return Ch(n,e,t)},useTransition:function(){var e=Bf(!1);return e=lv.bind(null,Xt,e.queue,!0,!1),cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Xt,a=cn();if(te){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),me===null)throw Error(Z(349));Zt&124||k_(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Qp(W_.bind(null,i,r,e),[e]),i.flags|=2048,is(9,Hc(),X_.bind(null,i,r,n,t),null),n},useId:function(){var e=cn(),t=me.identifierPrefix;if(te){var n=Ri,i=Ai;n=(i&~(1<<32-bn(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=oc++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=nM++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Dh,useFormState:jp,useActionState:jp,useOptimistic:function(e){var t=cn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Uh.bind(null,Xt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ah,useCacheRefresh:function(){return cn().memoizedState=oM.bind(null,Xt)}},_v={readContext:tn,use:Fc,useCallback:rv,useContext:tn,useEffect:tv,useImperativeHandle:av,useInsertionEffect:ev,useLayoutEffect:nv,useMemo:sv,useReducer:Bl,useRef:$_,useState:function(){return Bl(Pi)},useDebugValue:wh,useDeferredValue:function(e,t){var n=Pe();return ov(n,ce.memoizedState,e,t)},useTransition:function(){var e=Bl(Pi)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:No(e),t]},useSyncExternalStore:V_,useId:fv,useHostTransitionStatus:Dh,useFormState:Zp,useActionState:Zp,useOptimistic:function(e,t){var n=Pe();return j_(n,ce,e,t)},useMemoCache:Ah,useCacheRefresh:dv},cM={readContext:tn,use:Fc,useCallback:rv,useContext:tn,useEffect:tv,useImperativeHandle:av,useInsertionEffect:ev,useLayoutEffect:nv,useMemo:sv,useReducer:pu,useRef:$_,useState:function(){return pu(Pi)},useDebugValue:wh,useDeferredValue:function(e,t){var n=Pe();return ce===null?Ch(n,e,t):ov(n,ce.memoizedState,e,t)},useTransition:function(){var e=pu(Pi)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:No(e),t]},useSyncExternalStore:V_,useId:fv,useHostTransitionStatus:Dh,useFormState:Kp,useActionState:Kp,useOptimistic:function(e,t){var n=Pe();return ce!==null?j_(n,ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ah,useCacheRefresh:dv},Yr=null,uo=0;function el(e){var t=uo;return uo+=1,Yr===null&&(Yr=[]),z_(Yr,e,t)}function ws(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function nl(e,t){throw t.$$typeof===Fx?Error(Z(525)):(e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jp(e){var t=e._init;return t(e._payload)}function vv(e){function t(u,g){if(e){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=Ui(u,g),u.index=0,u.sibling=null,u}function r(u,g,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=67108866,g):_):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function s(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,_,v){return g===null||g.tag!==6?(g=fu(_,u.mode,v),g.return=u,g):(g=a(g,_),g.return=u,g)}function l(u,g,_,v){var b=_.type;return b===wr?d(u,g,_.props.children,v,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Qi&&Jp(b)===g.type)?(g=a(g,_.props),ws(g,_),g.return=u,g):(g=Ol(_.type,_.key,_.props,null,u.mode,v),ws(g,_),g.return=u,g)}function c(u,g,_,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=du(_,u.mode,v),g.return=u,g):(g=a(g,_.children||[]),g.return=u,g)}function d(u,g,_,v,b){return g===null||g.tag!==7?(g=ka(_,u.mode,v,b),g.return=u,g):(g=a(g,_),g.return=u,g)}function h(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=fu(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case jo:return _=Ol(g.type,g.key,g.props,null,u.mode,_),ws(_,g),_.return=u,_;case Is:return g=du(g,u.mode,_),g.return=u,g;case Qi:var v=g._init;return g=v(g._payload),h(u,g,_)}if(Fs(g)||Ts(g))return g=ka(g,u.mode,_,null),g.return=u,g;if(typeof g.then=="function")return h(u,el(g),_);if(g.$$typeof===bi)return h(u,$o(u,g),_);nl(u,g)}return null}function f(u,g,_,v){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return b!==null?null:o(u,g,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:return _.key===b?l(u,g,_,v):null;case Is:return _.key===b?c(u,g,_,v):null;case Qi:return b=_._init,_=b(_._payload),f(u,g,_,v)}if(Fs(_)||Ts(_))return b!==null?null:d(u,g,_,v,null);if(typeof _.then=="function")return f(u,g,el(_),v);if(_.$$typeof===bi)return f(u,g,$o(u,_),v);nl(u,_)}return null}function p(u,g,_,v,b){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(_)||null,o(g,u,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case jo:return u=u.get(v.key===null?_:v.key)||null,l(g,u,v,b);case Is:return u=u.get(v.key===null?_:v.key)||null,c(g,u,v,b);case Qi:var w=v._init;return v=w(v._payload),p(u,g,_,v,b)}if(Fs(v)||Ts(v))return u=u.get(_)||null,d(g,u,v,b,null);if(typeof v.then=="function")return p(u,g,_,el(v),b);if(v.$$typeof===bi)return p(u,g,_,$o(g,v),b);nl(g,v)}return null}function x(u,g,_,v){for(var b=null,w=null,R=g,D=g=0,T=null;R!==null&&D<_.length;D++){R.index>D?(T=R,R=null):T=R.sibling;var E=f(u,R,_[D],v);if(E===null){R===null&&(R=T);break}e&&R&&E.alternate===null&&t(u,R),g=r(E,g,D),w===null?b=E:w.sibling=E,w=E,R=T}if(D===_.length)return n(u,R),te&&Oa(u,D),b;if(R===null){for(;D<_.length;D++)R=h(u,_[D],v),R!==null&&(g=r(R,g,D),w===null?b=R:w.sibling=R,w=R);return te&&Oa(u,D),b}for(R=i(R);D<_.length;D++)T=p(R,u,D,_[D],v),T!==null&&(e&&T.alternate!==null&&R.delete(T.key===null?D:T.key),g=r(T,g,D),w===null?b=T:w.sibling=T,w=T);return e&&R.forEach(function(C){return t(u,C)}),te&&Oa(u,D),b}function M(u,g,_,v){if(_==null)throw Error(Z(151));for(var b=null,w=null,R=g,D=g=0,T=null,E=_.next();R!==null&&!E.done;D++,E=_.next()){R.index>D?(T=R,R=null):T=R.sibling;var C=f(u,R,E.value,v);if(C===null){R===null&&(R=T);break}e&&R&&C.alternate===null&&t(u,R),g=r(C,g,D),w===null?b=C:w.sibling=C,w=C,R=T}if(E.done)return n(u,R),te&&Oa(u,D),b;if(R===null){for(;!E.done;D++,E=_.next())E=h(u,E.value,v),E!==null&&(g=r(E,g,D),w===null?b=E:w.sibling=E,w=E);return te&&Oa(u,D),b}for(R=i(R);!E.done;D++,E=_.next())E=p(R,u,D,E.value,v),E!==null&&(e&&E.alternate!==null&&R.delete(E.key===null?D:E.key),g=r(E,g,D),w===null?b=E:w.sibling=E,w=E);return e&&R.forEach(function(X){return t(u,X)}),te&&Oa(u,D),b}function m(u,g,_,v){if(typeof _=="object"&&_!==null&&_.type===wr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:t:{for(var b=_.key;g!==null;){if(g.key===b){if(b=_.type,b===wr){if(g.tag===7){n(u,g.sibling),v=a(g,_.props.children),v.return=u,u=v;break t}}else if(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Qi&&Jp(b)===g.type){n(u,g.sibling),v=a(g,_.props),ws(v,_),v.return=u,u=v;break t}n(u,g);break}else t(u,g);g=g.sibling}_.type===wr?(v=ka(_.props.children,u.mode,v,_.key),v.return=u,u=v):(v=Ol(_.type,_.key,_.props,null,u.mode,v),ws(v,_),v.return=u,u=v)}return s(u);case Is:t:{for(b=_.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),v=a(g,_.children||[]),v.return=u,u=v;break t}else{n(u,g);break}else t(u,g);g=g.sibling}v=du(_,u.mode,v),v.return=u,u=v}return s(u);case Qi:return b=_._init,_=b(_._payload),m(u,g,_,v)}if(Fs(_))return x(u,g,_,v);if(Ts(_)){if(b=Ts(_),typeof b!="function")throw Error(Z(150));return _=b.call(_),M(u,g,_,v)}if(typeof _.then=="function")return m(u,g,el(_),v);if(_.$$typeof===bi)return m(u,g,$o(u,_),v);nl(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),v=a(g,_),v.return=u,u=v):(n(u,g),v=fu(_,u.mode,v),v.return=u,u=v),s(u)):n(u,g)}return function(u,g,_,v){try{uo=0;var b=m(u,g,_,v);return Yr=null,b}catch(R){if(R===Lo||R===Ic)throw R;var w=En(29,R,null,u.mode);return w.lanes=v,w.return=u,w}finally{}}}var as=vv(!0),xv=vv(!1),Gn=fi(null),ci=null;function ta(e){var t=e.alternate;ye(ze,ze.current&1),ye(Gn,e),ci===null&&(t===null||ns.current!==null||t.memoizedState!==null)&&(ci=e)}function Sv(e){if(e.tag===22){if(ye(ze,ze.current),ye(Gn,e),ci===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ci=e)}}else ea()}function ea(){ye(ze,ze.current),ye(Gn,Gn.current)}function Ci(e){Ye(Gn),ci===e&&(ci=null),Ye(ze)}var ze=fi(0);function cc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||ed(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function mu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ff={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=An(),a=ca(i);a.payload=t,n!=null&&(a.callback=n),t=ua(e,a,i),t!==null&&(Rn(t,e,i),Zs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=An(),a=ca(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ua(e,a,i),t!==null&&(Rn(t,e,i),Zs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=An(),i=ca(n);i.tag=2,t!=null&&(i.callback=t),t=ua(e,i,n),t!==null&&(Rn(t,e,n),Zs(t,e,n))}};function $p(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!oo(n,i)||!oo(a,r):!0}function tm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ff.enqueueReplaceState(t,t.state,null)}function $a(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=_e({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var uc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Mv(e){uc(e)}function yv(e){console.error(e)}function Ev(e){uc(e)}function fc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function em(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Hf(e,t,n){return n=ca(n),n.tag=3,n.payload={element:null},n.callback=function(){fc(e,t)},n}function Tv(e){return e=ca(e),e.tag=3,e}function bv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){em(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){em(t,n,i),typeof a!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function uM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Do(t,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 13:return ci===null?jf():n.alternate===null&&we===0&&(we=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Lf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Au(e,i,a)),!1;case 22:return n.flags|=65536,i===Lf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Au(e,i,a)),!1}throw Error(Z(435,n.tag))}return Au(e,i,a),jf(),!1}if(te)return t=Gn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Rf&&(e=Error(Z(422),{cause:i}),lo(Fn(e,n)))):(i!==Rf&&(t=Error(Z(423),{cause:i}),lo(Fn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Fn(i,n),a=Hf(e.stateNode,i,a),hu(e,a),we!==4&&(we=2)),!1;var r=Error(Z(520),{cause:i});if(r=Fn(r,n),eo===null?eo=[r]:eo.push(r),we!==4&&(we=2),t===null)return!0;i=Fn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Hf(n.stateNode,i,e),hu(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(fa===null||!fa.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Tv(a),bv(a,e,n,i),hu(n,a),!1}n=n.return}while(n!==null);return!1}var Av=Error(Z(461)),qe=!1;function je(e,t,n,i){t.child=e===null?xv(t,null,n,i):as(t,e.child,n,i)}function nm(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Qa(t),i=Mh(e,t,n,s,r,a),o=yh(),e!==null&&!qe?(Eh(e,t,a),Bi(e,t,a)):(te&&o&&ph(t),t.flags|=1,je(e,t,i,a),t.child)}function im(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!hh(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Rv(e,t,r,i,a)):(e=Ol(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Lh(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(s,i)&&e.ref===t.ref)return Bi(e,t,a)}return t.flags|=1,e=Ui(r,i),e.ref=t.ref,e.return=t,t.child=e}function Rv(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(oo(r,i)&&e.ref===t.ref)if(qe=!1,t.pendingProps=i=r,Lh(e,a))e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,Bi(e,t,a)}return Gf(e,t,n,i,a)}function wv(e,t,n){var i=t.pendingProps,a=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if(t.flags&128){if(i=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return am(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(t,r!==null?r.cachePool:null),r!==null?Wp(t,r):Pf(),Sv(t);else return t.lanes=t.childLanes=536870912,am(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Pl(t,r.cachePool),Wp(t,r),ea(),t.memoizedState=null):(e!==null&&Pl(t,null),Pf(),ea());return je(e,t,a,n),t.child}function am(e,t,n,i){var a=_h();return a=a===null?null:{parent:Be._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Pl(t,null),Pf(),Sv(t),e!==null&&Do(e,t,i,!0),null}function Il(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Z(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Gf(e,t,n,i,a){return Qa(t),n=Mh(e,t,n,i,void 0,a),i=yh(),e!==null&&!qe?(Eh(e,t,a),Bi(e,t,a)):(te&&i&&ph(t),t.flags|=1,je(e,t,n,a),t.child)}function rm(e,t,n,i,a,r){return Qa(t),t.updateQueue=null,n=G_(t,i,n,a),H_(e),i=yh(),e!==null&&!qe?(Eh(e,t,r),Bi(e,t,r)):(te&&i&&ph(t),t.flags|=1,je(e,t,n,r),t.child)}function sm(e,t,n,i,a){if(Qa(t),t.stateNode===null){var r=Br,s=n.contextType;typeof s=="object"&&s!==null&&(r=tn(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ff,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},vh(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?tn(s):Br,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(mu(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Ff.enqueueReplaceState(r,r.state,null),Qs(t,i,r,a),Ks(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=$a(n,o);r.props=l;var c=r.context,d=n.contextType;s=Br,typeof d=="object"&&d!==null&&(s=tn(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&tm(t,r,i,s),Ji=!1;var f=t.memoizedState;r.state=f,Qs(t,i,r,a),Ks(),c=t.memoizedState,o||f!==c||Ji?(typeof h=="function"&&(mu(t,n,h,i),c=t.memoizedState),(l=Ji||$p(t,n,l,i,f,c,s))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Nf(e,t),s=t.memoizedProps,d=$a(n,s),r.props=d,h=t.pendingProps,f=r.context,c=n.contextType,l=Br,typeof c=="object"&&c!==null&&(l=tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||f!==l)&&tm(t,r,i,l),Ji=!1,f=t.memoizedState,r.state=f,Qs(t,i,r,a),Ks();var p=t.memoizedState;s!==h||f!==p||Ji||e!==null&&e.dependencies!==null&&ac(e.dependencies)?(typeof o=="function"&&(mu(t,n,o,i),p=t.memoizedState),(d=Ji||$p(t,n,d,i,f,p,l)||e!==null&&e.dependencies!==null&&ac(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=d):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Il(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=as(t,e.child,null,a),t.child=as(t,null,n,a)):je(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Bi(e,t,a),e}function om(e,t,n,i){return Co(),t.flags|=256,je(e,t,n,i),t.child}var gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _u(e){return{baseLanes:e,cachePool:P_()}}function vu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Hn),e}function Cv(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(a?ta(t):ea(),te){var o=Re,l;if(l=o){t:{for(l=o,o=ni;l.nodeType!==8;){if(!o){o=null;break t}if(l=Kn(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:Xa!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},l=En(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,an=t,Re=null,l=!0):l=!1}l||Ka(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return ed(o)?t.lanes=32:t.lanes=536870912,null;Ci(t)}return o=i.children,i=i.fallback,a?(ea(),a=t.mode,o=dc({mode:"hidden",children:o},a),i=ka(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=_u(n),a.childLanes=vu(e,s,n),t.memoizedState=gu,i):(ta(t),Vf(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(ta(t),t.flags&=-257,t=xu(e,t,n)):t.memoizedState!==null?(ea(),t.child=e.child,t.flags|=128,t=null):(ea(),a=i.fallback,o=t.mode,i=dc({mode:"visible",children:i.children},o),a=ka(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,as(t,e.child,null,n),i=t.child,i.memoizedState=_u(n),i.childLanes=vu(e,s,n),t.memoizedState=gu,t=a);else if(ta(t),ed(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(Z(419)),i.stack="",i.digest=s,lo({value:i,source:null,stack:null}),t=xu(e,t,n)}else if(qe||Do(e,t,n,!1),s=(n&e.childLanes)!==0,qe||s){if(s=me,s!==null&&(i=n&-n,i=i&42?1:nh(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,_s(e,i),Rn(s,e,i),Av;o.data==="$?"||jf(),t=xu(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Re=Kn(o.nextSibling),an=t,te=!0,Wa=null,ni=!1,e!==null&&(Bn[zn++]=Ai,Bn[zn++]=Ri,Bn[zn++]=Xa,Ai=e.id,Ri=e.overflow,Xa=t),t=Vf(t,i.children),t.flags|=4096);return t}return a?(ea(),a=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=Ui(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Ui(c,a):(a=ka(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=_u(n):(l=o.cachePool,l!==null?(c=Be._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=P_(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=vu(e,s,n),t.memoizedState=gu,i):(ta(t),n=e.child,e=n.sibling,n=Ui(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Vf(e,t){return t=dc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function dc(e,t){return e=En(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xu(e,t,n){return as(t,e.child,null,n),e=Vf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Cf(e.return,t,n)}function Su(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function Dv(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(je(e,t,i.children,n),i=ze.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lm(e,n,t);else if(e.tag===19)lm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(ye(ze,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&cc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Su(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&cc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Su(t,!0,n,null,r);break;case"together":Su(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,!(n&t.childLanes))if(e!==null){if(Do(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=Ui(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ui(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lh(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&ac(e)))}function fM(e,t,n){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),$i(t,Be,e.memoizedState.cache),Co();break;case 27:case 5:_f(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ta(t),t.flags|=128,null):n&t.child.childLanes?Cv(e,t,n):(ta(t),e=Bi(e,t,n),e!==null?e.sibling:null);ta(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Do(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Dv(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ye(ze,ze.current),i)break;return null;case 22:case 23:return t.lanes=0,wv(e,t,n);case 24:$i(t,Be,e.memoizedState.cache)}return Bi(e,t,n)}function Uv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Lh(e,n)&&!(t.flags&128))return qe=!1,fM(e,t,n);qe=!!(e.flags&131072)}else qe=!1,te&&t.flags&1048576&&N_(t,ic,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")hh(i)?(e=$a(i,e),t.tag=1,t=sm(null,t,i,e,n)):(t.tag=0,t=Gf(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===$d){t.tag=11,t=nm(null,t,i,e,n);break t}else if(a===th){t.tag=14,t=im(null,t,i,e,n);break t}}throw t=mf(i)||i,Error(Z(306,t,""))}}return t;case 0:return Gf(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=$a(i,t.pendingProps),sm(e,t,i,a,n);case 3:t:{if(Kl(t,t.stateNode.containerInfo),e===null)throw Error(Z(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Nf(e,t),Qs(t,i,null,n);var s=t.memoizedState;if(i=s.cache,$i(t,Be,i),i!==r.cache&&Df(t,[Be],n,!0),Ks(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=om(e,t,i,n);break t}else if(i!==a){a=Fn(Error(Z(424)),t),lo(a),t=om(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Kn(e.firstChild),an=t,te=!0,Wa=null,ni=!0,n=xv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Co(),i===a){t=Bi(e,t,n);break t}je(e,t,i,n)}t=t.child}return t;case 26:return Il(e,t),e===null?(n=bm(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(n=t.type,e=t.pendingProps,i=xc(la.current).createElement(n),i[$e]=t,i[pn]=e,Ke(i,n,e),We(i),t.stateNode=i):t.memoizedState=bm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _f(t),e===null&&te&&(i=t.stateNode=_0(t.type,t.pendingProps,la.current),an=t,ni=!0,a=Re,Ea(t.type)?(nd=a,Re=Kn(i.firstChild)):Re=a),je(e,t,t.pendingProps.children,n),Il(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((a=i=Re)&&(i=FM(i,t.type,t.pendingProps,ni),i!==null?(t.stateNode=i,an=t,Re=Kn(i.firstChild),ni=!1,a=!0):a=!1),a||Ka(t)),_f(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,$f(a,r)?i=null:s!==null&&$f(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Mh(e,t,iM,null,null,n),mo._currentValue=a),Il(e,t),je(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=Re)&&(n=HM(n,t.pendingProps,ni),n!==null?(t.stateNode=n,an=t,Re=null,e=!0):e=!1),e||Ka(t)),null;case 13:return Cv(e,t,n);case 4:return Kl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=as(t,null,i,n):je(e,t,i,n),t.child;case 11:return nm(e,t,t.type,t.pendingProps,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,$i(t,t.type,i.value),je(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Qa(t),a=tn(a),i=i(a),t.flags|=1,je(e,t,i,n),t.child;case 14:return im(e,t,t.type,t.pendingProps,n);case 15:return Rv(e,t,t.type,t.pendingProps,n);case 19:return Dv(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=dc(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ui(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return wv(e,t,n);case 24:return Qa(t),i=tn(Be),e===null?(a=_h(),a===null&&(a=me,r=gh(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},vh(t),$i(t,Be,a)):(e.lanes&n&&(Nf(e,t),Qs(t,null,null,n),Ks()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,Be,i)):(i=r.cache,$i(t,Be,i),i!==a.cache&&Df(t,[Be],n,!0))),je(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Z(156,t.tag))}function mi(e){e.flags|=4}function cm(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!S0(t)){if(t=Gn.current,t!==null&&((Zt&4194048)===Zt?ci!==null:(Zt&62914560)!==Zt&&!(Zt&536870912)||t!==ci))throw js=Lf,B_;e.flags|=8192}}function il(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?i_():536870912,e.lanes|=t,rs|=t)}function Cs(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function dM(e,t,n){var i=t.pendingProps;switch(mh(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Li(Be),Jr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Rs(t)?mi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fp())),be(t),null;case 26:return n=t.memoizedState,e===null?(mi(t),n!==null?(be(t),cm(t,n)):(be(t),t.flags&=-16777217)):n?n!==e.memoizedState?(mi(t),be(t),cm(t,n)):(be(t),t.flags&=-16777217):(e.memoizedProps!==i&&mi(t),be(t),t.flags&=-16777217),null;case 27:Ql(t),n=la.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&mi(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return be(t),null}e=oi.current,Rs(t)?zp(t):(e=_0(a,i,n),t.stateNode=e,mi(t))}return be(t),null;case 5:if(Ql(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&mi(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return be(t),null}if(e=oi.current,Rs(t))zp(t);else{switch(a=xc(la.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[$e]=t,e[pn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(Ke(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&mi(t)}}return be(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&mi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Z(166));if(e=la.current,Rs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=an,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||p0(e.nodeValue,n)),e||Ka(t)}else e=xc(e).createTextNode(i),e[$e]=t,t.stateNode=e}return be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Rs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(Z(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Z(317));a[$e]=t}else Co(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),a=!1}else a=Fp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ci(t),t):(Ci(t),null)}if(Ci(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),il(t,t.updateQueue),be(t),null;case 4:return Jr(),e===null&&Hh(t.stateNode.containerInfo),be(t),null;case 10:return Li(t.type),be(t),null;case 19:if(Ye(ze),a=t.memoizedState,a===null)return be(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Cs(a,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=cc(e),r!==null){for(t.flags|=128,Cs(a,!1),e=r.updateQueue,t.updateQueue=e,il(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)L_(n,e),n=n.sibling;return ye(ze,ze.current&1|2),t.child}e=e.sibling}a.tail!==null&&li()>pc&&(t.flags|=128,i=!0,Cs(a,!1),t.lanes=4194304)}else{if(!i)if(e=cc(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,il(t,e),Cs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!te)return be(t),null}else 2*li()-a.renderingStartTime>pc&&n!==536870912&&(t.flags|=128,i=!0,Cs(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=li(),t.sibling=null,e=ze.current,ye(ze,i?e&1|2:e&1),t):(be(t),null);case 22:case 23:return Ci(t),xh(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&il(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ye(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Li(Be),be(t),null;case 25:return null;case 30:return null}throw Error(Z(156,t.tag))}function hM(e,t){switch(mh(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Li(Be),Jr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ql(t),null;case 13:if(Ci(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));Co()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(ze),null;case 4:return Jr(),null;case 10:return Li(t.type),null;case 22:case 23:return Ci(t),xh(),e!==null&&Ye(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Li(Be),null;case 25:return null;default:return null}}function Lv(e,t){switch(mh(t),t.tag){case 3:Li(Be),Jr();break;case 26:case 27:case 5:Ql(t);break;case 4:Jr();break;case 13:Ci(t);break;case 19:Ye(ze);break;case 10:Li(t.type);break;case 22:case 23:Ci(t),xh(),e!==null&&Ye(qa);break;case 24:Li(Be)}}function Po(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){de(t,t.return,o)}}function xa(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(d){de(a,l,d)}}}i=i.next}while(i!==r)}}catch(d){de(t,t.return,d)}}function Nv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{F_(t,n)}catch(i){de(e,e.return,i)}}}function Ov(e,t,n){n.props=$a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){de(e,t,i)}}function $s(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){de(e,t,a)}}function ii(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){de(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){de(e,t,a)}else n.current=null}function Pv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){de(e,e.return,a)}}function Mu(e,t,n){try{var i=e.stateNode;OM(i,e.type,n,t),i[pn]=t}catch(a){de(e,e.return,a)}}function Bv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function yu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Bv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wc));else if(i!==4&&(i===27&&Ea(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(kf(e,t,n),e=e.sibling;e!==null;)kf(e,t,n),e=e.sibling}function hc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ea(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(hc(e,t,n),e=e.sibling;e!==null;)hc(e,t,n),e=e.sibling}function zv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ke(t,i,n),t[$e]=e,t[pn]=n}catch(r){de(e,e.return,r)}}var Ei=!1,Ue=!1,Eu=!1,um=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function pM(e,t){if(e=e.containerInfo,Qf=Ec,e=T_(e),uh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,d=0,h=e,f=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=s+a),h!==r||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break e;if(f===n&&++c===a&&(o=s),f===r&&++d===i&&(l=s),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jf={focusedElem:e,selectionRange:n},Ec=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=$a(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){de(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)td(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":td(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(Z(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function Iv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ki(e,n),i&4&&Po(5,n);break;case 1:if(ki(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){de(n,n.return,s)}else{var a=$a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){de(n,n.return,s)}}i&64&&Nv(n),i&512&&$s(n,n.return);break;case 3:if(ki(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{F_(e,t)}catch(s){de(n,n.return,s)}}break;case 27:t===null&&i&4&&zv(n);case 26:case 5:ki(e,n),t===null&&i&4&&Pv(n),i&512&&$s(n,n.return);break;case 12:ki(e,n);break;case 13:ki(e,n),i&4&&Gv(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=EM.bind(null,n),GM(e,n))));break;case 22:if(i=n.memoizedState!==null||Ei,!i){t=t!==null&&t.memoizedState!==null||Ue,a=Ei;var r=Ue;Ei=i,(Ue=t)&&!r?Ki(e,n,(n.subtreeFlags&8772)!==0):ki(e,n),Ei=a,Ue=r}break;case 30:break;default:ki(e,n)}}function Fv(e){var t=e.alternate;t!==null&&(e.alternate=null,Fv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ah(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,un=!1;function gi(e,t,n){for(n=n.child;n!==null;)Hv(e,t,n),n=n.sibling}function Hv(e,t,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 26:Ue||ii(n,t),gi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ue||ii(n,t);var i=Se,a=un;Ea(n.type)&&(Se=n.stateNode,un=!1),gi(e,t,n),io(n.stateNode),Se=i,un=a;break;case 5:Ue||ii(n,t);case 6:if(i=Se,a=un,Se=null,gi(e,t,n),Se=i,un=a,Se!==null)if(un)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(n.stateNode)}catch(r){de(n,t,r)}else try{Se.removeChild(n.stateNode)}catch(r){de(n,t,r)}break;case 18:Se!==null&&(un?(e=Se,ym(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vo(e)):ym(Se,n.stateNode));break;case 4:i=Se,a=un,Se=n.stateNode.containerInfo,un=!0,gi(e,t,n),Se=i,un=a;break;case 0:case 11:case 14:case 15:Ue||xa(2,n,t),Ue||xa(4,n,t),gi(e,t,n);break;case 1:Ue||(ii(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ov(n,t,i)),gi(e,t,n);break;case 21:gi(e,t,n);break;case 22:Ue=(i=Ue)||n.memoizedState!==null,gi(e,t,n),Ue=i;break;default:gi(e,t,n)}}function Gv(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(n){de(t,t.return,n)}}function mM(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new um),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new um),t;default:throw Error(Z(435,e.tag))}}function Tu(e,t){var n=mM(e);t.forEach(function(i){var a=TM.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function vn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(Ea(o.type)){Se=o.stateNode,un=!1;break t}break;case 5:Se=o.stateNode,un=!1;break t;case 3:case 4:Se=o.stateNode.containerInfo,un=!0;break t}o=o.return}if(Se===null)throw Error(Z(160));Hv(r,s,a),Se=null,un=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Vv(t,e),t=t.sibling}var qn=null;function Vv(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(t,e),xn(e),i&4&&(xa(3,e,e.return),Po(3,e),xa(5,e,e.return));break;case 1:vn(t,e),xn(e),i&512&&(Ue||n===null||ii(n,n.return)),i&64&&Ei&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=qn;if(vn(t,e),xn(e),i&512&&(Ue||n===null||ii(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Ro]||r[$e]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Ke(r,i,n),r[$e]=e,We(r),i=r;break t;case"link":var s=Rm("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),Ke(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Rm("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),Ke(r,i,n),a.head.appendChild(r);break;default:throw Error(Z(468,i))}r[$e]=e,We(r),i=r}e.stateNode=i}else wm(a,e.type,e.stateNode);else e.stateNode=Am(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?wm(a,e.type,e.stateNode):Am(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Mu(e,e.memoizedProps,n.memoizedProps)}break;case 27:vn(t,e),xn(e),i&512&&(Ue||n===null||ii(n,n.return)),n!==null&&i&4&&Mu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vn(t,e),xn(e),i&512&&(Ue||n===null||ii(n,n.return)),e.flags&32){a=e.stateNode;try{ts(a,"")}catch(p){de(e,e.return,p)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Mu(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Eu=!0);break;case 6:if(vn(t,e),xn(e),i&4){if(e.stateNode===null)throw Error(Z(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){de(e,e.return,p)}}break;case 3:if(Gl=null,a=qn,qn=Sc(t.containerInfo),vn(t,e),qn=a,xn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(p){de(e,e.return,p)}Eu&&(Eu=!1,kv(e));break;case 4:i=qn,qn=Sc(e.stateNode.containerInfo),vn(t,e),xn(e),qn=i;break;case 12:vn(t,e),xn(e);break;case 13:vn(t,e),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zh=li()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Tu(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ei,d=Ue;if(Ei=c||a,Ue=d||l,vn(t,e),Ue=d,Ei=c,xn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Ei||Ue||Pa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,f=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){de(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){de(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Tu(e,n))));break;case 19:vn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Tu(e,i)));break;case 30:break;case 21:break;default:vn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Bv(i)){n=i;break}i=i.return}if(n==null)throw Error(Z(160));switch(n.tag){case 27:var a=n.stateNode,r=yu(e);hc(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(ts(s,""),n.flags&=-33);var o=yu(e);hc(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=yu(e);kf(e,c,l);break;default:throw Error(Z(161))}}catch(d){de(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kv(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ki(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Iv(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),Pa(t);break;case 1:ii(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ov(t,t.return,n),Pa(t);break;case 27:io(t.stateNode);case 26:case 5:ii(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function Ki(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Ki(a,r,n),Po(4,r);break;case 1:if(Ki(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){de(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)I_(l[a],o)}catch(c){de(i,i.return,c)}}n&&s&64&&Nv(r),$s(r,r.return);break;case 27:zv(r);case 26:case 5:Ki(a,r,n),n&&i===null&&s&4&&Pv(r),$s(r,r.return);break;case 12:Ki(a,r,n);break;case 13:Ki(a,r,n),n&&s&4&&Gv(a,r);break;case 22:r.memoizedState===null&&Ki(a,r,n),$s(r,r.return);break;case 30:break;default:Ki(a,r,n)}t=t.sibling}}function Nh(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Uo(n))}function Oh(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Uo(e))}function ti(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xv(e,t,n,i),t=t.sibling}function Xv(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ti(e,t,n,i),a&2048&&Po(9,t);break;case 1:ti(e,t,n,i);break;case 3:ti(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Uo(e)));break;case 12:if(a&2048){ti(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){de(t,t.return,l)}}else ti(e,t,n,i);break;case 13:ti(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?ti(e,t,n,i):to(e,t):r._visibility&2?ti(e,t,n,i):(r._visibility|=2,Ar(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&Nh(s,t);break;case 24:ti(e,t,n,i),a&2048&&Oh(t.alternate,t);break;default:ti(e,t,n,i)}}function Ar(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Ar(r,s,o,l,a),Po(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState!==null?d._visibility&2?Ar(r,s,o,l,a):to(r,s):(d._visibility|=2,Ar(r,s,o,l,a)),a&&c&2048&&Nh(s.alternate,s);break;case 24:Ar(r,s,o,l,a),a&&c&2048&&Oh(s.alternate,s);break;default:Ar(r,s,o,l,a)}t=t.sibling}}function to(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:to(n,i),a&2048&&Nh(i.alternate,i);break;case 24:to(n,i),a&2048&&Oh(i.alternate,i);break;default:to(n,i)}t=t.sibling}}var Gs=8192;function lr(e){if(e.subtreeFlags&Gs)for(e=e.child;e!==null;)Wv(e),e=e.sibling}function Wv(e){switch(e.tag){case 26:lr(e),e.flags&Gs&&e.memoizedState!==null&&ty(qn,e.memoizedState,e.memoizedProps);break;case 5:lr(e);break;case 3:case 4:var t=qn;qn=Sc(e.stateNode.containerInfo),lr(e),qn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Gs,Gs=16777216,lr(e),Gs=t):lr(e));break;default:lr(e)}}function qv(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ds(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Xe=i,jv(i,e)}qv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yv(e),e=e.sibling}function Yv(e){switch(e.tag){case 0:case 11:case 15:Ds(e),e.flags&2048&&xa(9,e,e.return);break;case 3:Ds(e);break;case 12:Ds(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Ds(e);break;default:Ds(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Xe=i,jv(i,e)}qv(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function jv(e,t){for(;Xe!==null;){var n=Xe;switch(n.tag){case 0:case 11:case 15:xa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Uo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Xe=i;else t:for(n=e;Xe!==null;){i=Xe;var a=i.sibling,r=i.return;if(Fv(i),i===n){Xe=null;break t}if(a!==null){a.return=r,Xe=a;break t}Xe=r}}}var gM={getCacheForType:function(e){var t=tn(Be),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},_M=typeof WeakMap=="function"?WeakMap:Map,ae=0,me=null,qt=null,Zt=0,ie=0,yn=null,sa=!1,vs=!1,Ph=!1,zi=0,we=0,Sa=0,Ya=0,Bh=0,Hn=0,rs=0,eo=null,fn=null,Xf=!1,zh=0,pc=1/0,mc=null,fa=null,Ze=0,da=null,ss=null,jr=0,Wf=0,qf=null,Zv=null,no=0,Yf=null;function An(){if(ae&2&&Zt!==0)return Zt&-Zt;if(Ut.T!==null){var e=es;return e!==0?e:Fh()}return s_()}function Kv(){Hn===0&&(Hn=!(Zt&536870912)||te?n_():536870912);var e=Gn.current;return e!==null&&(e.flags|=32),Hn}function Rn(e,t,n){(e===me&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(os(e,0),oa(e,Zt,Hn,!1)),Ao(e,n),(!(ae&2)||e!==me)&&(e===me&&(!(ae&2)&&(Ya|=n),we===4&&oa(e,Zt,Hn,!1)),di(e))}function Qv(e,t,n){if(ae&6)throw Error(Z(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||bo(e,t),a=i?SM(e,t):bu(e,t,!0),r=i;do{if(a===0){vs&&!i&&oa(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!vM(n)){a=bu(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=eo;var l=o.current.memoizedState.isDehydrated;if(l&&(os(o,s).flags|=256),s=bu(o,s,!1),s!==2){if(Ph&&!l){o.errorRecoveryDisabledLanes|=r,Ya|=r,a=4;break t}r=fn,fn=a,r!==null&&(fn===null?fn=r:fn.push.apply(fn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){os(e,0),oa(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(Z(345));case 4:if((t&4194048)!==t)break;case 6:oa(i,t,Hn,!sa);break t;case 2:fn=null;break;case 3:case 5:break;default:throw Error(Z(329))}if((t&62914560)===t&&(a=zh+300-li(),10<a)){if(oa(i,t,Hn,!sa),Lc(i,0,!0)!==0)break t;i.timeoutHandle=g0(fm.bind(null,i,n,fn,mc,Xf,t,Hn,Ya,rs,sa,r,2,-0,0),a);break t}fm(i,n,fn,mc,Xf,t,Hn,Ya,rs,sa,r,0,-0,0)}}break}while(!0);di(e)}function fm(e,t,n,i,a,r,s,o,l,c,d,h,f,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,(h&8192||(h&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:$M},Wv(t),h=ey(),h!==null)){e.cancelPendingCommit=h(hm.bind(null,e,t,r,n,i,a,s,o,l,d,1,f,p)),oa(e,r,s,!c);return}hm(e,t,r,n,i,a,s,o,l)}function vM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Cn(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oa(e,t,n,i){t&=~Bh,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-bn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&a_(e,n,t)}function Vc(){return ae&6?!0:(Bo(0),!1)}function Ih(){if(qt!==null){if(ie===0)var e=qt.return;else e=qt,wi=rr=null,Th(e),Yr=null,uo=0,e=qt;for(;e!==null;)Lv(e.alternate,e),e=e.return;qt=null}}function os(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,BM(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ih(),me=e,qt=n=Ui(e.current,null),Zt=t,ie=0,yn=null,sa=!1,vs=bo(e,t),Ph=!1,rs=Hn=Bh=Ya=Sa=we=0,fn=eo=null,Xf=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-bn(i),r=1<<a;t|=e[a],i&=~r}return zi=t,Bc(),n}function Jv(e,t){Xt=null,Ut.H=lc,t===Lo||t===Ic?(t=kp(),ie=3):t===B_?(t=kp(),ie=4):ie=t===Av?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yn=t,qt===null&&(we=1,fc(e,Fn(t,e.current)))}function $v(){var e=Ut.H;return Ut.H=lc,e===null?lc:e}function t0(){var e=Ut.A;return Ut.A=gM,e}function jf(){we=4,sa||(Zt&4194048)!==Zt&&Gn.current!==null||(vs=!0),!(Sa&134217727)&&!(Ya&134217727)||me===null||oa(me,Zt,Hn,!1)}function bu(e,t,n){var i=ae;ae|=2;var a=$v(),r=t0();(me!==e||Zt!==t)&&(mc=null,os(e,t)),t=!1;var s=we;t:do try{if(ie!==0&&qt!==null){var o=qt,l=yn;switch(ie){case 8:Ih(),s=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(t=!0);var c=ie;if(ie=0,yn=null,Fr(e,o,l,c),n&&vs){s=0;break t}break;default:c=ie,ie=0,yn=null,Fr(e,o,l,c)}}xM(),s=we;break}catch(d){Jv(e,d)}while(!0);return t&&e.shellSuspendCounter++,wi=rr=null,ae=i,Ut.H=a,Ut.A=r,qt===null&&(me=null,Zt=0,Bc()),s}function xM(){for(;qt!==null;)e0(qt)}function SM(e,t){var n=ae;ae|=2;var i=$v(),a=t0();me!==e||Zt!==t?(mc=null,pc=li()+500,os(e,t)):vs=bo(e,t);t:do try{if(ie!==0&&qt!==null){t=qt;var r=yn;e:switch(ie){case 1:ie=0,yn=null,Fr(e,t,r,1);break;case 2:case 9:if(Vp(r)){ie=0,yn=null,dm(t);break}t=function(){ie!==2&&ie!==9||me!==e||(ie=7),di(e)},r.then(t,t);break t;case 3:ie=7;break t;case 4:ie=5;break t;case 7:Vp(r)?(ie=0,yn=null,dm(t)):(ie=0,yn=null,Fr(e,t,r,7));break;case 5:var s=null;switch(qt.tag){case 26:s=qt.memoizedState;case 5:case 27:var o=qt;if(!s||S0(s)){ie=0,yn=null;var l=o.sibling;if(l!==null)qt=l;else{var c=o.return;c!==null?(qt=c,kc(c)):qt=null}break e}}ie=0,yn=null,Fr(e,t,r,5);break;case 6:ie=0,yn=null,Fr(e,t,r,6);break;case 8:Ih(),we=6;break t;default:throw Error(Z(462))}}MM();break}catch(d){Jv(e,d)}while(!0);return wi=rr=null,Ut.H=i,Ut.A=a,ae=n,qt!==null?0:(me=null,Zt=0,Bc(),we)}function MM(){for(;qt!==null&&!kx();)e0(qt)}function e0(e){var t=Uv(e.alternate,e,zi);e.memoizedProps=e.pendingProps,t===null?kc(e):qt=t}function dm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=rm(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=rm(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:Th(t);default:Lv(n,t),t=qt=L_(t,zi),t=Uv(n,t,zi)}e.memoizedProps=e.pendingProps,t===null?kc(e):qt=t}function Fr(e,t,n,i){wi=rr=null,Th(t),Yr=null,uo=0;var a=t.return;try{if(uM(e,a,t,n,Zt)){we=1,fc(e,Fn(n,e.current)),qt=null;return}}catch(r){if(a!==null)throw qt=a,r;we=1,fc(e,Fn(n,e.current)),qt=null;return}t.flags&32768?(te||i===1?e=!0:vs||Zt&536870912?e=!1:(sa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),n0(t,e)):kc(t)}function kc(e){var t=e;do{if(t.flags&32768){n0(t,sa);return}e=t.return;var n=dM(t.alternate,t,zi);if(n!==null){qt=n;return}if(t=t.sibling,t!==null){qt=t;return}qt=t=e}while(t!==null);we===0&&(we=5)}function n0(e,t){do{var n=hM(e.alternate,e);if(n!==null){n.flags&=32767,qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){qt=e;return}qt=e=n}while(e!==null);we=6,qt=null}function hm(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do Xc();while(Ze!==0);if(ae&6)throw Error(Z(327));if(t!==null){if(t===e.current)throw Error(Z(177));if(r=t.lanes|t.childLanes,r|=fh,$x(e,n,r,s,o,l),e===me&&(qt=me=null,Zt=0),ss=t,da=e,jr=n,Wf=r,qf=a,Zv=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,bM(Jl,function(){return o0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Ut.T,Ut.T=null,a=ee.p,ee.p=2,s=ae,ae|=4;try{pM(e,t,n)}finally{ae=s,ee.p=a,Ut.T=i}}Ze=1,i0(),a0(),r0()}}function i0(){if(Ze===1){Ze=0;var e=da,t=ss,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Ut.T,Ut.T=null;var i=ee.p;ee.p=2;var a=ae;ae|=4;try{Vv(t,e);var r=Jf,s=T_(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&E_(o.ownerDocument.documentElement,o)){if(l!==null&&uh(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var p=f.getSelection(),x=o.textContent.length,M=Math.min(l.start,x),m=l.end===void 0?M:Math.min(l.end,x);!p.extend&&M>m&&(s=m,m=M,M=s);var u=Op(o,M),g=Op(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=h.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),M>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var v=h[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Ec=!!Qf,Jf=Qf=null}finally{ae=a,ee.p=i,Ut.T=n}}e.current=t,Ze=2}}function a0(){if(Ze===2){Ze=0;var e=da,t=ss,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Ut.T,Ut.T=null;var i=ee.p;ee.p=2;var a=ae;ae|=4;try{Iv(e,t.alternate,t)}finally{ae=a,ee.p=i,Ut.T=n}}Ze=3}}function r0(){if(Ze===4||Ze===3){Ze=0,Xx();var e=da,t=ss,n=jr,i=Zv;t.subtreeFlags&10256||t.flags&10256?Ze=5:(Ze=0,ss=da=null,s0(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(fa=null),ih(n),t=t.stateNode,Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(To,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ut.T,a=ee.p,ee.p=2,Ut.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Ut.T=t,ee.p=a}}jr&3&&Xc(),di(e),a=e.pendingLanes,n&4194090&&a&42?e===Yf?no++:(no=0,Yf=e):no=0,Bo(0)}}function s0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Uo(t)))}function Xc(e){return i0(),a0(),r0(),o0()}function o0(){if(Ze!==5)return!1;var e=da,t=Wf;Wf=0;var n=ih(jr),i=Ut.T,a=ee.p;try{ee.p=32>n?32:n,Ut.T=null,n=qf,qf=null;var r=da,s=jr;if(Ze=0,ss=da=null,jr=0,ae&6)throw Error(Z(331));var o=ae;if(ae|=4,Yv(r.current),Xv(r,r.current,s,n),ae=o,Bo(0,!1),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(To,r)}catch{}return!0}finally{ee.p=a,Ut.T=i,s0(e,t)}}function pm(e,t,n){t=Fn(n,t),t=Hf(e.stateNode,t,2),e=ua(e,t,2),e!==null&&(Ao(e,2),di(e))}function de(e,t,n){if(e.tag===3)pm(e,e,n);else for(;t!==null;){if(t.tag===3){pm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fa===null||!fa.has(i))){e=Fn(n,e),n=Tv(2),i=ua(t,n,2),i!==null&&(bv(n,i,t,e),Ao(i,2),di(i));break}}t=t.return}}function Au(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new _M;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Ph=!0,a.add(n),e=yM.bind(null,e,t,n),t.then(e,e))}function yM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,me===e&&(Zt&n)===n&&(we===4||we===3&&(Zt&62914560)===Zt&&300>li()-zh?!(ae&2)&&os(e,0):Bh|=n,rs===Zt&&(rs=0)),di(e)}function l0(e,t){t===0&&(t=i_()),e=_s(e,t),e!==null&&(Ao(e,t),di(e))}function EM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),l0(e,n)}function TM(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Z(314))}i!==null&&i.delete(t),l0(e,n)}function bM(e,t){return eh(e,t)}var gc=null,Rr=null,Zf=!1,_c=!1,Ru=!1,ja=0;function di(e){e!==Rr&&e.next===null&&(Rr===null?gc=Rr=e:Rr=Rr.next=e),_c=!0,Zf||(Zf=!0,RM())}function Bo(e,t){if(!Ru&&_c){Ru=!0;do for(var n=!1,i=gc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-bn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,mm(i,r))}else r=Zt,r=Lc(i,i===me?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||bo(i,r)||(n=!0,mm(i,r));i=i.next}while(n);Ru=!1}}function AM(){c0()}function c0(){_c=Zf=!1;var e=0;ja!==0&&(PM()&&(e=ja),ja=0);for(var t=li(),n=null,i=gc;i!==null;){var a=i.next,r=u0(i,t);r===0?(i.next=null,n===null?gc=a:n.next=a,a===null&&(Rr=n)):(n=i,(e!==0||r&3)&&(_c=!0)),i=a}Bo(e)}function u0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-bn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=Jx(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=me,n=Zt,n=Lc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&$c(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||bo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&$c(i),ih(n)){case 2:case 8:n=t_;break;case 32:n=Jl;break;case 268435456:n=e_;break;default:n=Jl}return i=f0.bind(null,e),n=eh(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&$c(i),e.callbackPriority=2,e.callbackNode=null,2}function f0(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Xc()&&e.callbackNode!==n)return null;var i=Zt;return i=Lc(e,e===me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Qv(e,i,t),u0(e,li()),e.callbackNode!=null&&e.callbackNode===n?f0.bind(null,e):null)}function mm(e,t){if(Xc())return null;Qv(e,t,!0)}function RM(){zM(function(){ae&6?eh($g,AM):c0()})}function Fh(){return ja===0&&(ja=n_()),ja}function gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function _m(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function wM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=gm((a[pn]||null).action),s=i.submitter;s&&(t=(t=s[pn]||null)?gm(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Nc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ja!==0){var l=s?_m(a,s):new FormData(a);If(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?_m(a,s):new FormData(a),If(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var wu=0;wu<Af.length;wu++){var Cu=Af[wu],CM=Cu.toLowerCase(),DM=Cu[0].toUpperCase()+Cu.slice(1);Jn(CM,"on"+DM)}Jn(A_,"onAnimationEnd");Jn(R_,"onAnimationIteration");Jn(w_,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(YS,"onTransitionRun");Jn(jS,"onTransitionStart");Jn(ZS,"onTransitionCancel");Jn(C_,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function d0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(d){uc(d)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(d){uc(d)}a.currentTarget=null,r=l}}}}function Wt(e,t){var n=t[xf];n===void 0&&(n=t[xf]=new Set);var i=e+"__bubble";n.has(i)||(h0(t,e,2,!1),n.add(i))}function Du(e,t,n){var i=0;t&&(i|=4),h0(n,e,i,t)}var al="_reactListening"+Math.random().toString(36).slice(2);function Hh(e){if(!e[al]){e[al]=!0,o_.forEach(function(n){n!=="selectionchange"&&(UM.has(n)||Du(n,!1,e),Du(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[al]||(t[al]=!0,Du("selectionchange",!1,t))}}function h0(e,t,n,i){switch(b0(t)){case 2:var a=ay;break;case 8:a=ry;break;default:a=Xh}n=a.bind(null,t,n,e),a=void 0,!Ef||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Uu(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Dr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}m_(function(){var c=r,d=sh(n),h=[];t:{var f=D_.get(e);if(f!==void 0){var p=Nc,x=e;switch(e){case"keypress":if(Nl(n)===0)break t;case"keydown":case"keyup":p=bS;break;case"focusin":x="focus",p=ou;break;case"focusout":x="blur",p=ou;break;case"beforeblur":case"afterblur":p=ou;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=wS;break;case A_:case R_:case w_:p=gS;break;case C_:p=DS;break;case"scroll":case"scrollend":p=fS;break;case"wheel":p=LS;break;case"copy":case"cut":case"paste":p=vS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ap;break;case"toggle":case"beforetoggle":p=OS}var M=(t&4)!==0,m=!M&&(e==="scroll"||e==="scrollend"),u=M?f!==null?f+"Capture":null:f;M=[];for(var g=c,_;g!==null;){var v=g;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||u===null||(v=ro(g,u),v!=null&&M.push(ho(g,v,_))),m)break;g=g.return}0<M.length&&(f=new p(f,x,null,n,d),h.push({event:f,listeners:M}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==yf&&(x=n.relatedTarget||n.fromElement)&&(Dr(x)||x[ms]))break t;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Dr(x):null,x!==null&&(m=Eo(x),M=x.tag,x!==m||M!==5&&M!==27&&M!==6)&&(x=null)):(p=null,x=c),p!==x)){if(M=Tp,v="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(M=Ap,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:Hs(p),_=x==null?f:Hs(x),f=new M(v,g+"leave",p,n,d),f.target=m,f.relatedTarget=_,v=null,Dr(d)===c&&(M=new M(u,g+"enter",x,n,d),M.target=_,M.relatedTarget=m,v=M),m=v,p&&x)e:{for(M=p,u=x,g=0,_=M;_;_=cr(_))g++;for(_=0,v=u;v;v=cr(v))_++;for(;0<g-_;)M=cr(M),g--;for(;0<_-g;)u=cr(u),_--;for(;g--;){if(M===u||u!==null&&M===u.alternate)break e;M=cr(M),u=cr(u)}M=null}else M=null;p!==null&&vm(h,f,p,M,!1),x!==null&&m!==null&&vm(h,m,x,M,!0)}}t:{if(f=c?Hs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=Dp;else if(Cp(f))if(M_)b=XS;else{b=VS;var w=GS}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&rh(c.elementType)&&(b=Dp):b=kS;if(b&&(b=b(e,c))){S_(h,b,n,d);break t}w&&w(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Mf(f,"number",f.value)}switch(w=c?Hs(c):window,e){case"focusin":(Cp(w)||w.contentEditable==="true")&&(Nr=w,Tf=c,qs=null);break;case"focusout":qs=Tf=Nr=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,Pp(h,n,d);break;case"selectionchange":if(qS)break;case"keydown":case"keyup":Pp(h,n,d)}var R;if(ch)t:{switch(e){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Lr?v_(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(__&&n.locale!=="ko"&&(Lr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Lr&&(R=g_()):(ra=d,oh="value"in ra?ra.value:ra.textContent,Lr=!0)),w=vc(c,D),0<w.length&&(D=new bp(D,e,null,n,d),h.push({event:D,listeners:w}),R?D.data=R:(R=x_(n),R!==null&&(D.data=R)))),(R=BS?zS(e,n):IS(e,n))&&(D=vc(c,"onBeforeInput"),0<D.length&&(w=new bp("onBeforeInput","beforeinput",null,n,d),h.push({event:w,listeners:D}),w.data=R)),wM(h,e,c,n,d)}d0(h,t)})}function ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ro(e,n),a!=null&&i.unshift(ho(e,a,r)),a=ro(e,t),a!=null&&i.push(ho(e,a,r))),e.tag===3)return i;e=e.return}return[]}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vm(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=ro(n,r),c!=null&&s.unshift(ho(n,c,l))):a||(c=ro(n,r),c!=null&&s.push(ho(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var LM=/\r\n?/g,NM=/\u0000|\uFFFD/g;function xm(e){return(typeof e=="string"?e:""+e).replace(LM,`
`).replace(NM,"")}function p0(e,t){return t=xm(t),xm(e)===t}function Wc(){}function le(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ts(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ts(e,""+i);break;case"className":Qo(e,"class",i);break;case"tabIndex":Qo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Qo(e,n,i);break;case"style":p_(e,i,r);break;case"data":if(t!=="object"){Qo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ul(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&le(e,t,"name",a.name,a,null),le(e,t,"formEncType",a.formEncType,a,null),le(e,t,"formMethod",a.formMethod,a,null),le(e,t,"formTarget",a.formTarget,a,null)):(le(e,t,"encType",a.encType,a,null),le(e,t,"method",a.method,a,null),le(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ul(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Wc);break;case"onScroll":i!=null&&Wt("scroll",e);break;case"onScrollEnd":i!=null&&Wt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ul(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Wt("beforetoggle",e),Wt("toggle",e),Dl(e,"popover",i);break;case"xlinkActuate":pi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":pi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":pi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":pi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":pi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":pi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":pi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":pi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":pi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Dl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=cS.get(n)||n,Dl(e,n,i))}}function Kf(e,t,n,i,a,r){switch(n){case"style":p_(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ts(e,i):(typeof i=="number"||typeof i=="bigint")&&ts(e,""+i);break;case"onScroll":i!=null&&Wt("scroll",e);break;case"onScrollEnd":i!=null&&Wt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Wc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!l_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[pn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Dl(e,n,i)}}}function Ke(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",e),Wt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:le(e,t,r,s,n,null)}}a&&le(e,t,"srcSet",n.srcSet,n,null),i&&le(e,t,"src",n.src,n,null);return;case"input":Wt("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Z(137,t));break;default:le(e,t,i,d,n,null)}}f_(e,r,o,l,c,s,a,!1),$l(e);return;case"select":Wt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:le(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Vr(e,!!i,t,!1):n!=null&&Vr(e,!!i,n,!0);return;case"textarea":Wt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Z(91));break;default:le(e,t,s,o,n,null)}h_(e,i,a,r),$l(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:le(e,t,l,i,n,null)}return;case"dialog":Wt("beforetoggle",e),Wt("toggle",e),Wt("cancel",e),Wt("close",e);break;case"iframe":case"object":Wt("load",e);break;case"video":case"audio":for(i=0;i<fo.length;i++)Wt(fo[i],e);break;case"image":Wt("error",e),Wt("load",e);break;case"details":Wt("toggle",e);break;case"embed":case"source":case"link":Wt("error",e),Wt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:le(e,t,c,i,n,null)}return;default:if(rh(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Kf(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&le(e,t,o,i,n,null))}function OM(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,d=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||le(e,t,p,null,i,h)}}for(var f in i){var p=i[f];if(h=n[f],i.hasOwnProperty(f)&&(p!=null||h!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Z(137,t));break;default:p!==h&&le(e,t,f,p,i,h)}}Sf(e,s,o,l,c,d,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||le(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&le(e,t,a,r,i,l)}t=o,n=s,i=p,f!=null?Vr(e,!!n,f,!1):!!i!=!!n&&(t!=null?Vr(e,!!n,t,!0):Vr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Z(91));break;default:a!==r&&le(e,t,s,a,i,r)}d_(e,f,p);return;case"option":for(var x in n)if(f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:le(e,t,x,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:le(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)f=n[M],n.hasOwnProperty(M)&&f!=null&&!i.hasOwnProperty(M)&&le(e,t,M,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Z(137,t));break;default:le(e,t,c,f,i,p)}return;default:if(rh(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Kf(e,t,m,void 0,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f===void 0&&p===void 0||Kf(e,t,d,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&le(e,t,u,null,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f==null&&p==null||le(e,t,h,f,i,p)}var Qf=null,Jf=null;function xc(e){return e.nodeType===9?e:e.ownerDocument}function Sm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $f(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lu=null;function PM(){var e=window.event;return e&&e.type==="popstate"?e===Lu?!1:(Lu=e,!0):(Lu=null,!1)}var g0=typeof setTimeout=="function"?setTimeout:void 0,BM=typeof clearTimeout=="function"?clearTimeout:void 0,Mm=typeof Promise=="function"?Promise:void 0,zM=typeof queueMicrotask=="function"?queueMicrotask:typeof Mm<"u"?function(e){return Mm.resolve(null).then(e).catch(IM)}:g0;function IM(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function ym(e,t){var n=t,i=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=e.ownerDocument;if(n&1&&io(s.documentElement),n&2&&io(s.body),n&4)for(n=s.head,io(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Ro]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){e.removeChild(r),vo(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);vo(t)}function td(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":td(n),ah(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function FM(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ro])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Kn(e.nextSibling),e===null)break}return null}function HM(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Kn(e.nextSibling),e===null))return null;return e}function ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function GM(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var nd=null;function Em(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function _0(e,t,n){switch(t=xc(n),e){case"html":if(e=t.documentElement,!e)throw Error(Z(452));return e;case"head":if(e=t.head,!e)throw Error(Z(453));return e;case"body":if(e=t.body,!e)throw Error(Z(454));return e;default:throw Error(Z(451))}}function io(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ah(e)}var Vn=new Map,Tm=new Set;function Sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gi=ee.d;ee.d={f:VM,r:kM,D:XM,C:WM,L:qM,m:YM,X:ZM,S:jM,M:KM};function VM(){var e=Gi.f(),t=Vc();return e||t}function kM(e){var t=gs(e);t!==null&&t.tag===5&&t.type==="form"?uv(t):Gi.r(e)}var xs=typeof document>"u"?null:document;function v0(e,t,n){var i=xs;if(i&&typeof t=="string"&&t){var a=In(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Tm.has(a)||(Tm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ke(t,"link",e),We(t),i.head.appendChild(t)))}}function XM(e){Gi.D(e),v0("dns-prefetch",e,null)}function WM(e,t){Gi.C(e,t),v0("preconnect",e,t)}function qM(e,t,n){Gi.L(e,t,n);var i=xs;if(i&&e&&t){var a='link[rel="preload"][as="'+In(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+In(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+In(n.imageSizes)+'"]')):a+='[href="'+In(e)+'"]';var r=a;switch(t){case"style":r=ls(e);break;case"script":r=Ss(e)}Vn.has(r)||(e=_e({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Vn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(zo(r))||t==="script"&&i.querySelector(Io(r))||(t=i.createElement("link"),Ke(t,"link",e),We(t),i.head.appendChild(t)))}}function YM(e,t){Gi.m(e,t);var n=xs;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+In(i)+'"][href="'+In(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ss(e)}if(!Vn.has(r)&&(e=_e({rel:"modulepreload",href:e},t),Vn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Io(r)))return}i=n.createElement("link"),Ke(i,"link",e),We(i),n.head.appendChild(i)}}}function jM(e,t,n){Gi.S(e,t,n);var i=xs;if(i&&e){var a=Gr(i).hoistableStyles,r=ls(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(zo(r)))o.loading=5;else{e=_e({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Vn.get(r))&&Gh(e,n);var l=s=i.createElement("link");We(l),Ke(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function ZM(e,t){Gi.X(e,t);var n=xs;if(n&&e){var i=Gr(n).hoistableScripts,a=Ss(e),r=i.get(a);r||(r=n.querySelector(Io(a)),r||(e=_e({src:e,async:!0},t),(t=Vn.get(a))&&Vh(e,t),r=n.createElement("script"),We(r),Ke(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function KM(e,t){Gi.M(e,t);var n=xs;if(n&&e){var i=Gr(n).hoistableScripts,a=Ss(e),r=i.get(a);r||(r=n.querySelector(Io(a)),r||(e=_e({src:e,async:!0,type:"module"},t),(t=Vn.get(a))&&Vh(e,t),r=n.createElement("script"),We(r),Ke(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function bm(e,t,n,i){var a=(a=la.current)?Sc(a):null;if(!a)throw Error(Z(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ls(n.href),n=Gr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ls(n.href);var r=Gr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(zo(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Vn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Vn.set(e,n),r||QM(a,e,n,s.state))),t&&i===null)throw Error(Z(528,""));return s}if(t&&i!==null)throw Error(Z(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ss(n),n=Gr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Z(444,e))}}function ls(e){return'href="'+In(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function x0(e){return _e({},e,{"data-precedence":e.precedence,precedence:null})}function QM(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ke(t,"link",n),We(t),e.head.appendChild(t))}function Ss(e){return'[src="'+In(e)+'"]'}function Io(e){return"script[async]"+e}function Am(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+In(n.href)+'"]');if(i)return t.instance=i,We(i),i;var a=_e({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),We(i),Ke(i,"style",a),Hl(i,n.precedence,e),t.instance=i;case"stylesheet":a=ls(n.href);var r=e.querySelector(zo(a));if(r)return t.state.loading|=4,t.instance=r,We(r),r;i=x0(n),(a=Vn.get(a))&&Gh(i,a),r=(e.ownerDocument||e).createElement("link"),We(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ke(r,"link",i),t.state.loading|=4,Hl(r,n.precedence,e),t.instance=r;case"script":return r=Ss(n.src),(a=e.querySelector(Io(r)))?(t.instance=a,We(a),a):(i=n,(a=Vn.get(r))&&(i=_e({},n),Vh(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),We(a),Ke(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(Z(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Hl(i,n.precedence,e));return t.instance}function Hl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gl=null;function Rm(e,t,n){if(Gl===null){var i=new Map,a=Gl=new Map;a.set(n,i)}else a=Gl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Ro]||r[$e]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function wm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function JM(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function S0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var po=null;function $M(){}function ty(e,t,n){if(po===null)throw Error(Z(475));var i=po;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=ls(n.href),r=e.querySelector(zo(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Mc.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,We(r);return}r=e.ownerDocument||e,n=x0(n),(a=Vn.get(a))&&Gh(n,a),r=r.createElement("link"),We(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ke(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=Mc.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function ey(){if(po===null)throw Error(Z(475));var e=po;return e.stylesheets&&e.count===0&&id(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&id(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Mc(){if(this.count--,this.count===0){if(this.stylesheets)id(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function id(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,t.forEach(ny,e),yc=null,Mc.call(e))}function ny(e,t){if(!(t.state.loading&4)){var n=yc.get(e);if(n)var i=n.get(null);else{n=new Map,yc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Mc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var mo={$$typeof:bi,Provider:null,Consumer:null,_currentValue:Va,_currentValue2:Va,_threadCount:0};function iy(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.hiddenUpdates=tu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function M0(e,t,n,i,a,r,s,o,l,c,d,h){return e=new iy(e,t,n,s,o,l,c,h),t=1,r===!0&&(t|=24),r=En(3,null,null,t),e.current=r,r.stateNode=e,t=gh(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},vh(r),e}function y0(e){return e?(e=Br,e):Br}function E0(e,t,n,i,a,r){a=y0(a),i.context===null?i.context=a:i.pendingContext=a,i=ca(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=ua(e,i,t),n!==null&&(Rn(n,e,t),Zs(n,e,t))}function Cm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kh(e,t){Cm(e,t),(e=e.alternate)&&Cm(e,t)}function T0(e){if(e.tag===13){var t=_s(e,67108864);t!==null&&Rn(t,e,67108864),kh(e,67108864)}}var Ec=!0;function ay(e,t,n,i){var a=Ut.T;Ut.T=null;var r=ee.p;try{ee.p=2,Xh(e,t,n,i)}finally{ee.p=r,Ut.T=a}}function ry(e,t,n,i){var a=Ut.T;Ut.T=null;var r=ee.p;try{ee.p=8,Xh(e,t,n,i)}finally{ee.p=r,Ut.T=a}}function Xh(e,t,n,i){if(Ec){var a=ad(i);if(a===null)Uu(e,t,i,Tc,n),Dm(e,i);else if(oy(a,e,t,n,i))i.stopPropagation();else if(Dm(e,i),t&4&&-1<sy.indexOf(e)){for(;a!==null;){var r=gs(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Na(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-bn(s);o.entanglements[1]|=l,s&=~l}di(r),!(ae&6)&&(pc=li()+500,Bo(0))}}break;case 13:o=_s(r,2),o!==null&&Rn(o,r,2),Vc(),kh(r,2)}if(r=ad(i),r===null&&Uu(e,t,i,Tc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Uu(e,t,i,null,n)}}function ad(e){return e=sh(e),Wh(e)}var Tc=null;function Wh(e){if(Tc=null,e=Dr(e),e!==null){var t=Eo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Zg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Tc=e,null}function b0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wx()){case $g:return 2;case t_:return 8;case Jl:case qx:return 32;case e_:return 268435456;default:return 32}default:return 32}}var rd=!1,ha=null,pa=null,ma=null,go=new Map,_o=new Map,na=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dm(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(t.pointerId)}}function Us(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=gs(t),t!==null&&T0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function oy(e,t,n,i,a){switch(t){case"focusin":return ha=Us(ha,e,t,n,i,a),!0;case"dragenter":return pa=Us(pa,e,t,n,i,a),!0;case"mouseover":return ma=Us(ma,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return go.set(r,Us(go.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,_o.set(r,Us(_o.get(r)||null,e,t,n,i,a)),!0}return!1}function A0(e){var t=Dr(e.target);if(t!==null){var n=Eo(t);if(n!==null){if(t=n.tag,t===13){if(t=Zg(n),t!==null){e.blockedOn=t,tS(e.priority,function(){if(n.tag===13){var i=An();i=nh(i);var a=_s(n,i);a!==null&&Rn(a,n,i),kh(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ad(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);yf=i,n.target.dispatchEvent(i),yf=null}else return t=gs(n),t!==null&&T0(t),e.blockedOn=n,!1;t.shift()}return!0}function Um(e,t,n){Vl(e)&&n.delete(t)}function ly(){rd=!1,ha!==null&&Vl(ha)&&(ha=null),pa!==null&&Vl(pa)&&(pa=null),ma!==null&&Vl(ma)&&(ma=null),go.forEach(Um),_o.forEach(Um)}function rl(e,t){e.blockedOn===t&&(e.blockedOn=null,rd||(rd=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,ly)))}var sl=null;function Lm(e){sl!==e&&(sl=e,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,function(){sl===e&&(sl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Wh(i||n)===null)continue;break}var r=gs(n);r!==null&&(e.splice(t,3),t-=3,If(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function vo(e){function t(l){return rl(l,e)}ha!==null&&rl(ha,e),pa!==null&&rl(pa,e),ma!==null&&rl(ma,e),go.forEach(t),_o.forEach(t);for(var n=0;n<na.length;n++){var i=na[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)A0(n),n.blockedOn===null&&na.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[pn]||null;if(typeof r=="function")s||Lm(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[pn]||null)o=s.formAction;else if(Wh(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Lm(n)}}}function qh(e){this._internalRoot=e}qc.prototype.render=qh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));var n=t.current,i=An();E0(n,i,e,t,null,null)};qc.prototype.unmount=qh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;E0(e.current,2,null,e,null,null),Vc(),t[ms]=null}};function qc(e){this._internalRoot=e}qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=s_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<na.length&&t!==0&&t<na[n].priority;n++);na.splice(n,0,e),n===0&&A0(e)}};var Nm=Yg.version;if(Nm!=="19.1.0")throw Error(Z(527,Nm,"19.1.0"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=Ix(t),e=e!==null?Kg(e):null,e=e===null?null:e.stateNode,e};var cy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{To=ol.inject(cy),Tn=ol}catch{}}Dc.createRoot=function(e,t){if(!jg(e))throw Error(Z(299));var n=!1,i="",a=Mv,r=yv,s=Ev,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=M0(e,1,!1,null,null,n,i,a,r,s,o,null),e[ms]=t.current,Hh(e),new qh(t)};Dc.hydrateRoot=function(e,t,n){if(!jg(e))throw Error(Z(299));var i=!1,a="",r=Mv,s=yv,o=Ev,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=M0(e,1,!0,t,n??null,i,a,r,s,o,l,c),t.context=y0(null),n=t.current,i=An(),i=nh(i),a=ca(i),a.callback=null,ua(n,a,i),n=i,t.current.lanes=n,Ao(t,n),di(t),e[ms]=t.current,Hh(e),new qc(t)};Dc.version="19.1.0";function R0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R0)}catch(e){console.error(e)}}R0(),Gg.exports=Dc;var uy=Gg.exports;const fy=Ug(uy),dy=e=>{const t=/(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\*\*[^*\n]+\*\*)/g;return((i,a)=>i.split(t).map((s,o)=>{const l=`${a}-${o}`;if(!s)return null;if(s.startsWith("**")&&s.endsWith("**")&&s.length>4){const c=s.slice(2,-2).trim();return Pt.jsx("strong",{className:"terminal-bold",children:c},l)}return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)?Pt.jsx("a",{href:`mailto:${s}`,className:"terminal-link",onClick:c=>c.stopPropagation(),children:s},l):/^https?:\/\/[^\s]+$/.test(s)?Pt.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"terminal-link",onClick:c=>c.stopPropagation(),children:s},l):s.includes(`
`)?s.split(`
`).map((c,d,h)=>Pt.jsxs(Jd.Fragment,{children:[c,d<h.length-1&&Pt.jsx("br",{})]},`${l}-line-${d}`)):s}).filter(Boolean))(e,0)},hy=({commands:e})=>Pt.jsx("div",{className:"space-y-3",children:e.map((t,n)=>Pt.jsxs("div",{className:"space-y-1",children:[Pt.jsxs("div",{className:"flex items-center",children:[Pt.jsx("span",{className:"text-[var(--terminal-prompt)] mr-2",children:"$"}),Pt.jsx("span",{className:"text-[var(--terminal-command)]",children:t.input})]}),Pt.jsx("div",{className:"text-[var(--terminal-output)] whitespace-pre-wrap pl-4",children:dy(t.output)})]},n))}),py=$t.forwardRef(({value:e,onChange:t,onKeyDown:n},i)=>Pt.jsxs("div",{className:"flex items-center",children:[Pt.jsx("span",{className:"text-[var(--terminal-prompt)] mr-2",children:"$"}),Pt.jsx("input",{ref:i,type:"text",value:e,onChange:a=>t(a.target.value),onKeyDown:n,className:"flex-1 bg-transparent outline-none text-[var(--terminal-command)] placeholder-[var(--terminal-text)]/50",spellCheck:"false",autoComplete:"off"})]})),Om={1:{name:"4mation Technologies AI Integration",description:"Leading AI integration projects and improving internal workflows using AWS Bedrock and other AI technologies.",techStack:["AWS Bedrock","ChatGPT","Python","TypeScript","React"],role:"Full Stack Software Engineer",period:"Feb 2024 - Present"},2:{name:"CreditorWatch Microservices Migration",description:"Led the migration of legacy monolith systems to a modern microservice-based AWS architecture, implementing pub/sub for high-throughput data streams.",techStack:["AWS","Microservices","PHP","Node.js","React"],role:"Senior Software Engineer",period:"Feb 2020 - July 2022"},3:{name:"Lendlease Barangaroo Digital Signage",description:"Developed digital signage DSP system for the Barangaroo development project.",techStack:["PHP","JavaScript","React","AWS"],role:"Freelance Developer",period:"Dec 2015 - Jun 2016"}},Pm=`
██████╗  ██████╗ ███╗   ██╗███╗   ██╗██╗███████╗██████╗ ██╗   ██╗███╗   ██╗███████╗
██╔══██╗██╔═══██╗████╗  ██║████╗  ██║██║██╔════╝██╔══██╗╚██╗ ██╔╝████╗  ██║██╔════╝
██████╔╝██║   ██║██╔██╗ ██║██╔██╗ ██║██║█████╗  ██████╔╝ ╚████╔╝ ██╔██╗ ██║█████╗  
██╔══██╗██║   ██║██║╚██╗██║██║╚██╗██║██║██╔══╝  ██╔═══╝   ╚██╔╝  ██║╚██╗██║██╔══╝  
██║  ██║╚██████╔╝██║ ╚████║██║ ╚████║██║███████╗██║        ██║   ██║ ╚████║███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚═╝╚══════╝╚═╝        ╚═╝   ╚═╝  ╚═══╝╚══════╝
                                                                                       
██████╗  ██████╗ ████████╗ ██████╗ ██████╗ ███╗   ███╗                              
██╔══██╗██╔═══██╗╚══██╔══╝██╔════╝██╔═══██╗████╗ ████║                              
██║  ██║██║   ██║   ██║   ██║     ██║   ██║██╔████╔██║                              
██║  ██║██║   ██║   ██║   ██║     ██║   ██║██║╚██╔╝██║                              
██████╔╝╚██████╔╝   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║                              
╚═════╝  ╚═════╝    ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝                              

Type 'help' to see available commands.`,my=`
ronniepyne.com

Type 'help' to see available commands.`,gy=["help","about","skills","projects","contact"],bc={title:{name:"title",description:"Display the title art",usage:"title",execute:()=>typeof window<"u"&&window.innerWidth<768?my:Pm,hidden:!0},help:{name:"help",description:"Show available commands",usage:"help",execute:()=>`Available commands:

${Object.entries(bc).filter(([t,n])=>!n.hidden).map(([t,n])=>`**${t}**: ${n.description}
   Usage: **${n.usage}**`).join(`

`)}`},about:{name:"about",description:"Learn about me",usage:"about",execute:()=>`Hi! I'm Ronnie Pyne, a Full Stack Software Engineer with extensive experience in web technologies.

Key Points:
• Full Stack Engineer with 20+ years of experience in web development
• Currently at 4mation Technologies, focusing on AI integration and mentoring
• Strong advocate for code quality and best practices
• Experienced in both technical leadership and hands-on development
• Passionate about leveraging AI to improve development workflows

I specialize in architecting and implementing scalable web solutions while mentoring teams and driving technical innovation.`},skills:{name:"skills",description:"View my technical skills",usage:"skills",execute:()=>`Technical Skills:

Languages & Core Technologies:
• PHP 4->8 (OOP/MVC), TypeScript, SQL
• JavaScript, Python, HTML5, CSS3
• SASS, LESS, XML, JSON

Frameworks & Libraries:
• Laravel 3-5, Symfony 2-5, Zend Framework, codeigniter, wordpress, Silverstripe
• React, Angular, Vue.js, Next.js
• Express, Sails.js, Django, Strapi
• Bootstrap, jQuery

Infrastructure & DevOps:
• AWS, Ubuntu, Apache, nginx
• MySQL, MongoDB, MSSQL, Redis
• Docker, TravisCI, Azure DevOps, Jenkins
• PHP-FPM, NodeJS, Memcache, Beanstalkd

Modern Development Tools:
• Git, VSCode, Docker
• ChatGPT, Github CoPilot
• LLMs & Generative AI
• Webpack, Vite, npm, yarn

Methodologies:
• Agile Development
• Microservices Architecture
• Test-Driven Development
• DevOps Practices`},projects:{name:"projects",description:"View my projects",usage:"projects [number]",execute:e=>{if(e.length===0)return`My Projects:

${Object.entries(Om).map(([i,a])=>`${i}. ${a.name} - ${a.description}`).join(`

`)}

Type 'projects <number>' for more details about a specific project.`;const t=parseInt(e[0]),n=Om[t];return n?`${n.name}

Role: ${n.role}
Period: ${n.period}

Description: ${n.description}

Tech Stack: ${n.techStack.join(", ")}`:`Project ${t} not found. Type 'projects' to see available projects.`}},contact:{name:"contact",description:"Get my contact information",usage:"contact",execute:()=>`Let's Connect!

Contact:
• Email: ronniepyne@gmail.com

Professional Profiles:
• Portfolio: https://www.ronniepyne.com
• GitHub: https://www.github.com/perverse
• LinkedIn: https://www.linkedin.com/in/ronnie-pyne-279b7383

I'm always interested in discussing new opportunities and collaborations!`},clear:{name:"clear",description:"Clear the terminal screen",usage:"clear",execute:()=>"Terminal cleared.",hidden:!0},theme:{name:"theme",description:"Switch visual theme and background",usage:"theme [line|matrix|hex]",execute:(e,t)=>{if(e.length===0)return`Available themes:
• **line** - Cyberpunk city skyline with cyan colors
• **matrix** - Digital rain with classic Matrix green
• **hex** - Hexagonal grid with purple/blue neon accents

Usage: **theme line** or **theme matrix** or **theme hex**`;const n=e[0].toLowerCase();return n!=="line"&&n!=="matrix"&&n!=="hex"?`Invalid theme: ${n}
Available themes: **line**, **matrix**, **hex**

Usage: **theme line** or **theme matrix** or **theme hex**`:t?(t(n),`Theme switched to: **${n}**

${n==="matrix"?`Welcome to the Matrix... 🟢
Green terminal colors and digital rain activated.`:n==="hex"?`Hex mode engaged ⬡
Purple/blue neon hex grid activated.`:`Back to the line cityscape 🏙️
Cyan terminal colors and city skyline activated.`}`):"Theme switching not available in this context."},excludeFromAll:!0},all:{name:"all",description:"Display all command outputs in sequence",usage:"all",execute:()=>{const e=typeof window<"u"&&window.innerWidth<768?36:50;return gy.map(t=>{const n=bc[t].execute([]);return`
${"-".repeat(e)}

$ ${t}

${n}`}).join(`
`)}}};function Ls(e,t){const[n,...i]=e.trim().toLowerCase().split(/\s+/);return n?n in bc?bc[n].execute(i,t):`Command not found: ${n}. Type 'help' for available commands.`:""}const _y={line:{"--terminal-bg":"#1a1b26","--terminal-border":"#292e42","--terminal-text":"#a9b1d6","--terminal-prompt":"#7aa2f7","--terminal-command":"#7dcfff","--terminal-output":"#c0caf5","--terminal-error":"#f7768e","--terminal-warning":"#e0af68","--terminal-success":"#9ece6a"},matrix:{"--terminal-bg":"#0a1a0a","--terminal-border":"#1a4d1a","--terminal-text":"#00ff41","--terminal-prompt":"#00cc33","--terminal-command":"#00ff66","--terminal-output":"#00dd44","--terminal-error":"#ff3333","--terminal-warning":"#ffaa00","--terminal-success":"#00ff88"},hex:{"--terminal-bg":"#14121f","--terminal-border":"#2b2442","--terminal-text":"#d6d0ff","--terminal-prompt":"#a78bfa","--terminal-command":"#8fbafc","--terminal-output":"#e2ddff","--terminal-error":"#ff6b8f","--terminal-warning":"#f1c078","--terminal-success":"#8be7a1"}},w0=$t.createContext(void 0),C0=()=>{const e=$t.useContext(w0);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},vy=({children:e})=>{const[t,n]=$t.useState(()=>{if(typeof window<"u"){const r=localStorage.getItem("theme");if(r&&(r==="line"||r==="matrix"||r==="hex"))return r}return"hex"}),i=r=>{const s=document.documentElement,o=_y[r];Object.entries(o).forEach(([l,c])=>{s.style.setProperty(l,c)})},a=r=>{n(r),i(r),typeof window<"u"&&localStorage.setItem("terminal-theme",r)};return $t.useEffect(()=>{i(t)},[]),Pt.jsx(w0.Provider,{value:{currentTheme:t,setTheme:a,applyTheme:i},children:e})},D0=$t.createContext(void 0),U0=()=>{const e=$t.useContext(D0);if(!e)throw new Error("useBackground must be used within a BackgroundProvider");return e},xy=({children:e})=>{const{currentTheme:t,setTheme:n}=C0(),[i,a]=$t.useState(()=>{if(typeof window<"u"){const s=localStorage.getItem("background");if(s&&(s==="line"||s==="matrix"||s==="hex"))return s}return"hex"}),r=s=>{a(s),n(s)};return Jd.useEffect(()=>{a(t)},[t]),Pt.jsx(D0.Provider,{value:{currentBackground:i,setBackground:r},children:e})};function Sy(){const[e,t]=$t.useState([]),[n,i]=$t.useState(""),[a,r]=$t.useState(-1),s=$t.useRef(null),o=$t.useRef(null),{setBackground:l}=U0(),{currentTheme:c}=C0();$t.useEffect(()=>{const m={input:"title",output:Ls("title",l)};t([m]);const u=setTimeout(()=>{var g;(g=s.current)==null||g.focus()},100);return()=>clearTimeout(u)},[]),$t.useEffect(()=>{o.current&&(o.current.scrollTop=o.current.scrollHeight)},[e]);const d=m=>{if(m.preventDefault(),!n.trim())return;const u=n.trim().toLowerCase();if(u==="all"){t(b=>b.map(w=>({...w,hidden:!0})));const _={input:"title",output:Ls("title",l)},v={input:u,output:Ls(u,l)};t(b=>[...b,_,v]),i(""),r(-1);return}if(u==="clear"){const _={input:u,output:Ls(u,l)};t(v=>[...v.map(b=>({...b,hidden:!0})),_]),i(""),r(-1);return}const g={input:n,output:Ls(n,l)};t(_=>[..._,g]),i(""),r(-1)},h=m=>{var g;const u=window.getSelection();if(!u||u.toString().length===0){const _=m.target;_.tagName!=="SPAN"&&_.tagName!=="PRE"&&!_.closest("pre")&&(m.preventDefault(),(g=s.current)==null||g.focus())}},f=m=>{if(m.key==="Enter")d(m);else if(m.key==="ArrowUp"){if(m.preventDefault(),a<e.length-1){const u=a+1;r(u),i(e[e.length-1-u].input)}}else if(m.key==="ArrowDown")if(m.preventDefault(),a>0){const u=a-1;r(u),i(e[e.length-1-u].input)}else r(-1),i("")},p=e.filter(m=>!m.hidden),M=c==="matrix"?{terminalBg:"rgba(2, 8, 2, 0.70)",headerBg:"rgba(5, 15, 5, 0.85)",glow:`
          0 0 20px rgba(0, 255, 65, 0.2),
          0 0 40px rgba(0, 255, 65, 0.1),
          0 0 80px rgba(0, 255, 65, 0.05)
        `}:{terminalBg:"rgba(8, 8, 16, 0.85)",headerBg:"rgba(45, 50, 65, 0.9)",glow:`
          0 0 20px rgba(41, 46, 66, 0.3),
          0 0 40px rgba(77, 204, 255, 0.15),
          0 0 80px rgba(77, 204, 255, 0.08)
        `};return Pt.jsx("section",{className:"py-20 h-[calc(100vh-53px)]",children:Pt.jsx("div",{className:"container mx-auto px-4 h-full",children:Pt.jsx("div",{className:"w-full h-full border border-[var(--terminal-border)] rounded-lg overflow-hidden font-mono text-sm shadow-lg backdrop-blur-md",onClick:h,style:{backgroundColor:M.terminalBg,backdropFilter:"blur(10px)",boxShadow:M.glow},children:Pt.jsxs("div",{className:"h-full flex flex-col",children:[Pt.jsxs("div",{className:"h-7 flex items-center justify-between px-4",style:{backgroundColor:M.headerBg,backdropFilter:"blur(5px)"},children:[Pt.jsxs("div",{className:"flex space-x-2",children:[Pt.jsx("div",{className:"w-3 h-3 rounded-full bg-[var(--terminal-error)]"}),Pt.jsx("div",{className:"w-3 h-3 rounded-full bg-[var(--terminal-warning)]"}),Pt.jsx("div",{className:"w-3 h-3 rounded-full bg-[var(--terminal-success)]"})]}),Pt.jsx("div",{className:"text-xs text-gray-300 font-medium select-none",style:{fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',fontSize:"11px",letterSpacing:"0.01em"},children:"ronniepyne.com"}),Pt.jsx("div",{className:"w-14"})," "]}),Pt.jsx("div",{ref:o,className:"flex-1 overflow-y-auto p-4 space-y-2 scroll-smooth text-[var(--terminal-text)] select-text terminal-scrollbar",style:{backgroundImage:"linear-gradient(to bottom, rgba(41, 46, 66, 0.1) 1px, transparent 1px)",backgroundSize:"100% 8px",backgroundPosition:"0 -4px",userSelect:"text",WebkitUserSelect:"text"},children:Pt.jsx(hy,{commands:p})}),Pt.jsx("form",{onSubmit:d,className:"p-4 border-t border-[var(--terminal-border)]",style:{backgroundColor:M.terminalBg.replace("0.85","0.8"),backdropFilter:"blur(5px)"},children:Pt.jsx(py,{ref:s,value:n,onChange:i,onSubmit:()=>d(new Event("submit")),onKeyDown:f})})]})})})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="179",My=0,Bm=1,yy=2,L0=1,Ey=2,yi=3,Ma=0,dn=1,Ti=2,ga=0,Zr=1,zm=2,Im=3,Fm=4,Ty=5,Ia=100,by=101,Ay=102,Ry=103,wy=104,Cy=200,Dy=201,Uy=202,Ly=203,sd=204,od=205,Ny=206,Oy=207,Py=208,By=209,zy=210,Iy=211,Fy=212,Hy=213,Gy=214,ld=0,cd=1,ud=2,cs=3,fd=4,dd=5,hd=6,pd=7,N0=0,Vy=1,ky=2,_a=0,Xy=1,Wy=2,qy=3,Yy=4,jy=5,Zy=6,Ky=7,O0=300,us=301,fs=302,md=303,gd=304,Yc=306,_d=1e3,Ha=1001,vd=1002,Qn=1003,Qy=1004,ll=1005,ai=1006,Nu=1007,Ga=1008,Ii=1009,P0=1010,B0=1011,xo=1012,jh=1013,tr=1014,Di=1015,Fo=1016,Zh=1017,Kh=1018,So=1020,z0=35902,I0=1021,F0=1022,Zn=1023,Mo=1026,yo=1027,H0=1028,Qh=1029,G0=1030,Jh=1031,$h=1033,kl=33776,Xl=33777,Wl=33778,ql=33779,xd=35840,Sd=35841,Md=35842,yd=35843,Ed=36196,Td=37492,bd=37496,Ad=37808,Rd=37809,wd=37810,Cd=37811,Dd=37812,Ud=37813,Ld=37814,Nd=37815,Od=37816,Pd=37817,Bd=37818,zd=37819,Id=37820,Fd=37821,Yl=36492,Hd=36494,Gd=36495,V0=36283,Vd=36284,kd=36285,Xd=36286,Jy=3200,$y=3201,tE=0,eE=1,ia="",On="srgb",ds="srgb-linear",Ac="linear",oe="srgb",ur=7680,Hm=519,nE=512,iE=513,aE=514,k0=515,rE=516,sE=517,oE=518,lE=519,Gm=35044,Vm="300 es",ri=2e3,Rc=2001;class Ms{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,Wd=180/Math.PI;function Ho(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[e&255]+Qe[e>>8&255]+Qe[e>>16&255]+Qe[e>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[n&63|128]+Qe[n>>8&255]+"-"+Qe[n>>16&255]+Qe[n>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function jt(e,t,n){return Math.max(t,Math.min(n,e))}function cE(e,t){return(e%t+t)%t}function Pu(e,t,n){return(1-n)*e+n*t}function Ns(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ln(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class re{constructor(t=0,n=0){re.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Go{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3];const f=r[s+0],p=r[s+1],x=r[s+2],M=r[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=d,t[n+3]=h;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=x,t[n+3]=M;return}if(h!==M||l!==f||c!==p||d!==x){let m=1-o;const u=l*f+c*p+d*x+h*M,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const b=Math.sqrt(_),w=Math.atan2(b,u*g);m=Math.sin(m*w)/b,o=Math.sin(o*w)/b}const v=o*g;if(l=l*m+f*v,c=c*m+p*v,d=d*m+x*v,h=h*m+M*v,m===1-o){const b=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=b,c*=b,d*=b,h*=b}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=r[s],f=r[s+1],p=r[s+2],x=r[s+3];return t[n]=o*x+d*h+l*p-c*f,t[n+1]=l*x+d*f+c*h-o*p,t[n+2]=c*x+d*p+o*f-l*h,t[n+3]=d*x-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(r/2),f=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"YXZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"ZXY":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"ZYX":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"YZX":this._x=f*d*h+c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h-f*p*x;break;case"XZY":this._x=f*d*h-c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=a*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,n=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(km.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(km.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),d=2*(o*n-r*a),h=2*(r*i-s*n);return this.x=n+l*c+s*h-o*d,this.y=i+l*d+o*c-r*h,this.z=a+l*h+r*d-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bu.copy(this).projectOnVector(t),this.sub(Bu)}reflect(t){return this.sub(Bu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bu=new G,km=new Go;class Ft{constructor(t,n,i,a,r,s,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],x=i[8],M=a[0],m=a[3],u=a[6],g=a[1],_=a[4],v=a[7],b=a[2],w=a[5],R=a[8];return r[0]=s*M+o*g+l*b,r[3]=s*m+o*_+l*w,r[6]=s*u+o*v+l*R,r[1]=c*M+d*g+h*b,r[4]=c*m+d*_+h*w,r[7]=c*u+d*v+h*R,r[2]=f*M+p*g+x*b,r[5]=f*m+p*_+x*w,r[8]=f*u+p*v+x*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*s*d-n*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*s-o*c,f=o*l-d*r,p=c*r-s*l,x=n*h+i*f+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return t[0]=h*M,t[1]=(a*c-d*i)*M,t[2]=(o*i-a*s)*M,t[3]=f*M,t[4]=(d*n-a*l)*M,t[5]=(a*r-o*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(s*n-i*r)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(zu.makeScale(t,n)),this}rotate(t){return this.premultiply(zu.makeRotation(-t)),this}translate(t,n){return this.premultiply(zu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zu=new Ft;function X0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function wc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function uE(){const e=wc("canvas");return e.style.display="block",e}const Xm={};function Kr(e){e in Xm||(Xm[e]=!0,console.warn(e))}function fE(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Wm=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qm=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const e={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===oe&&(a.r=Ni(a.r),a.g=Ni(a.g),a.b=Ni(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===oe&&(a.r=Qr(a.r),a.g=Qr(a.g),a.b=Qr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ia?Ac:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ds]:{primaries:t,whitePoint:i,transfer:Ac,toXYZ:Wm,fromXYZ:qm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:Wm,fromXYZ:qm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),e}const Qt=dE();function Ni(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Qr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let fr;class hE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fr===void 0&&(fr=wc("canvas")),fr.width=t.width,fr.height=t.height;const a=fr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=fr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=wc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Ni(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pE=0;class tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Ho(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Iu(a[s].image)):r.push(Iu(a[s]))}else r=Iu(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function Iu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?hE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mE=0;const Fu=new G;class hn extends Ms{constructor(t=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Ha,a=Ha,r=ai,s=Ga,o=Zn,l=Ii,c=hn.DEFAULT_ANISOTROPY,d=ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Ho(),this.name="",this.source=new tp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fu).x}get height(){return this.source.getSize(Fu).y}get depth(){return this.source.getSize(Fu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==O0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _d:t.x=t.x-Math.floor(t.x);break;case Ha:t.x=t.x<0?0:1;break;case vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _d:t.y=t.y-Math.floor(t.y);break;case Ha:t.y=t.y<0?0:1;break;case vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=O0;hn.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,n=0,i=0,a=1){Le.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],x=l[9],M=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+M)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,v=(p+1)/2,b=(u+1)/2,w=(d+f)/4,R=(h+M)/4,D=(x+m)/4;return _>v&&_>b?_<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(_),a=w/i,r=R/i):v>b?v<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),i=w/a,r=D/a):b<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(b),i=R/r,a=D/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-x)*(m-x)+(h-M)*(h-M)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(h-M)/g,this.z=(f-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this.w=jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this.w=jt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gE extends Ms{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Le(0,0,t,n),this.scissorTest=!1,this.viewport=new Le(0,0,t,n);const a={width:t,height:n,depth:i.depth},r=new hn(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new tp(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends gE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class W0 extends hn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _E extends hn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(kn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,kn):kn.fromBufferAttribute(r,s),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(t.matrixWorld),this.union(cl)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),ul.subVectors(this.max,Os),dr.subVectors(t.a,Os),hr.subVectors(t.b,Os),pr.subVectors(t.c,Os),Xi.subVectors(hr,dr),Wi.subVectors(pr,hr),Ra.subVectors(dr,pr);let n=[0,-Xi.z,Xi.y,0,-Wi.z,Wi.y,0,-Ra.z,Ra.y,Xi.z,0,-Xi.x,Wi.z,0,-Wi.x,Ra.z,0,-Ra.x,-Xi.y,Xi.x,0,-Wi.y,Wi.x,0,-Ra.y,Ra.x,0];return!Hu(n,dr,hr,pr,ul)||(n=[1,0,0,0,1,0,0,0,1],!Hu(n,dr,hr,pr,ul))?!1:(fl.crossVectors(Xi,Wi),n=[fl.x,fl.y,fl.z],Hu(n,dr,hr,pr,ul))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _i=[new G,new G,new G,new G,new G,new G,new G,new G],kn=new G,cl=new Vo,dr=new G,hr=new G,pr=new G,Xi=new G,Wi=new G,Ra=new G,Os=new G,ul=new G,fl=new G,wa=new G;function Hu(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){wa.fromArray(e,r);const o=a.x*Math.abs(wa.x)+a.y*Math.abs(wa.y)+a.z*Math.abs(wa.z),l=t.dot(wa),c=n.dot(wa),d=i.dot(wa);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const vE=new Vo,Ps=new G,Gu=new G;class ep{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):vE.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const n=Ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ps,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Gu)),this.expandByPoint(Ps.copy(t.center).sub(Gu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const vi=new G,Vu=new G,dl=new G,qi=new G,ku=new G,hl=new G,Xu=new G;class xE{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=vi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Vu.copy(t).add(n).multiplyScalar(.5),dl.copy(n).sub(t).normalize(),qi.copy(this.origin).sub(Vu);const r=t.distanceTo(n)*.5,s=-this.direction.dot(dl),o=qi.dot(this.direction),l=-qi.dot(dl),c=qi.lengthSq(),d=Math.abs(1-s*s);let h,f,p,x;if(d>0)if(h=s*l-o,f=s*o-l,x=r*d,h>=0)if(f>=-x)if(f<=x){const M=1/d;h*=M,f*=M,p=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Vu).addScaledVector(dl,f),p}intersectSphere(t,n){vi.subVectors(t.center,this.origin);const i=vi.dot(this.direction),a=vi.dot(vi)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,s=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,s=(t.min.y-f.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,n,i,a,r){ku.subVectors(n,t),hl.subVectors(i,t),Xu.crossVectors(ku,hl);let s=this.direction.dot(Xu),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;qi.subVectors(this.origin,t);const l=o*this.direction.dot(hl.crossVectors(qi,hl));if(l<0)return null;const c=o*this.direction.dot(ku.cross(qi));if(c<0||l+c>s)return null;const d=-o*qi.dot(Xu);return d<0?null:this.at(d/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,n,i,a,r,s,o,l,c,d,h,f,p,x,M,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,d,h,f,p,x,M,m)}set(t,n,i,a,r,s,o,l,c,d,h,f,p,x,M,m){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=x,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/mr.setFromMatrixColumn(t,0).length(),r=1/mr.setFromMatrixColumn(t,1).length(),s=1/mr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=s*d,p=s*h,x=o*d,M=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=x+p*c,n[10]=s*l}else if(t.order==="YXZ"){const f=l*d,p=l*h,x=c*d,M=c*h;n[0]=f+M*o,n[4]=x*o-p,n[8]=s*c,n[1]=s*h,n[5]=s*d,n[9]=-o,n[2]=p*o-x,n[6]=M+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*d,p=l*h,x=c*d,M=c*h;n[0]=f-M*o,n[4]=-s*h,n[8]=x+p*o,n[1]=p+x*o,n[5]=s*d,n[9]=M-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*d,p=s*h,x=o*d,M=o*h;n[0]=l*d,n[4]=x*c-p,n[8]=f*c+M,n[1]=l*h,n[5]=M*c+f,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,x=o*l,M=o*c;n[0]=l*d,n[4]=M-f*h,n[8]=x*h+p,n[1]=h,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+x,n[10]=f-M*h}else if(t.order==="XZY"){const f=s*l,p=s*c,x=o*l,M=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+M,n[5]=s*d,n[9]=p*h-x,n[2]=x*h-p,n[6]=o*d,n[10]=M*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SE,t,ME)}lookAt(t,n,i){const a=this.elements;return Sn.subVectors(t,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Yi.crossVectors(i,Sn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Yi.crossVectors(i,Sn)),Yi.normalize(),pl.crossVectors(Sn,Yi),a[0]=Yi.x,a[4]=pl.x,a[8]=Sn.x,a[1]=Yi.y,a[5]=pl.y,a[9]=Sn.y,a[2]=Yi.z,a[6]=pl.z,a[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],x=i[2],M=i[6],m=i[10],u=i[14],g=i[3],_=i[7],v=i[11],b=i[15],w=a[0],R=a[4],D=a[8],T=a[12],E=a[1],C=a[5],X=a[9],k=a[13],Y=a[2],K=a[6],L=a[10],z=a[14],O=a[3],j=a[7],$=a[11],dt=a[15];return r[0]=s*w+o*E+l*Y+c*O,r[4]=s*R+o*C+l*K+c*j,r[8]=s*D+o*X+l*L+c*$,r[12]=s*T+o*k+l*z+c*dt,r[1]=d*w+h*E+f*Y+p*O,r[5]=d*R+h*C+f*K+p*j,r[9]=d*D+h*X+f*L+p*$,r[13]=d*T+h*k+f*z+p*dt,r[2]=x*w+M*E+m*Y+u*O,r[6]=x*R+M*C+m*K+u*j,r[10]=x*D+M*X+m*L+u*$,r[14]=x*T+M*k+m*z+u*dt,r[3]=g*w+_*E+v*Y+b*O,r[7]=g*R+_*C+v*K+b*j,r[11]=g*D+_*X+v*L+b*$,r[15]=g*T+_*k+v*z+b*dt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],p=t[14],x=t[3],M=t[7],m=t[11],u=t[15];return x*(+r*l*h-a*c*h-r*o*f+i*c*f+a*o*p-i*l*p)+M*(+n*l*p-n*c*f+r*s*f-a*s*p+a*c*d-r*l*d)+m*(+n*c*h-n*o*p-r*s*h+i*s*p+r*o*d-i*c*d)+u*(-a*o*d-n*l*h+n*o*f+a*s*h-i*s*f+i*l*d)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],p=t[11],x=t[12],M=t[13],m=t[14],u=t[15],g=h*m*c-M*f*c+M*l*p-o*m*p-h*l*u+o*f*u,_=x*f*c-d*m*c-x*l*p+s*m*p+d*l*u-s*f*u,v=d*M*c-x*h*c+x*o*p-s*M*p-d*o*u+s*h*u,b=x*h*l-d*M*l-x*o*f+s*M*f+d*o*m-s*h*m,w=n*g+i*_+a*v+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=g*R,t[1]=(M*f*r-h*m*r-M*a*p+i*m*p+h*a*u-i*f*u)*R,t[2]=(o*m*r-M*l*r+M*a*c-i*m*c-o*a*u+i*l*u)*R,t[3]=(h*l*r-o*f*r-h*a*c+i*f*c+o*a*p-i*l*p)*R,t[4]=_*R,t[5]=(d*m*r-x*f*r+x*a*p-n*m*p-d*a*u+n*f*u)*R,t[6]=(x*l*r-s*m*r-x*a*c+n*m*c+s*a*u-n*l*u)*R,t[7]=(s*f*r-d*l*r+d*a*c-n*f*c-s*a*p+n*l*p)*R,t[8]=v*R,t[9]=(x*h*r-d*M*r-x*i*p+n*M*p+d*i*u-n*h*u)*R,t[10]=(s*M*r-x*o*r+x*i*c-n*M*c-s*i*u+n*o*u)*R,t[11]=(d*o*r-s*h*r-d*i*c+n*h*c+s*i*p-n*o*p)*R,t[12]=b*R,t[13]=(d*M*a-x*h*a+x*i*f-n*M*f-d*i*m+n*h*m)*R,t[14]=(x*o*a-s*M*a-x*i*l+n*M*l+s*i*m-n*o*m)*R,t[15]=(s*h*a-d*o*a+d*i*l-n*h*l-s*i*f+n*o*f)*R,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,d=s+s,h=o+o,f=r*c,p=r*d,x=r*h,M=s*d,m=s*h,u=o*h,g=l*c,_=l*d,v=l*h,b=i.x,w=i.y,R=i.z;return a[0]=(1-(M+u))*b,a[1]=(p+v)*b,a[2]=(x-_)*b,a[3]=0,a[4]=(p-v)*w,a[5]=(1-(f+u))*w,a[6]=(m+g)*w,a[7]=0,a[8]=(x+_)*R,a[9]=(m-g)*R,a[10]=(1-(f+M))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=mr.set(a[0],a[1],a[2]).length();const s=mr.set(a[4],a[5],a[6]).length(),o=mr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Xn.copy(this);const c=1/r,d=1/s,h=1/o;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=d,Xn.elements[5]*=d,Xn.elements[6]*=d,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,n.setFromRotationMatrix(Xn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=ri,l=!1){const c=this.elements,d=2*r/(n-t),h=2*r/(i-a),f=(n+t)/(n-t),p=(i+a)/(i-a);let x,M;if(l)x=r/(s-r),M=s*r/(s-r);else if(o===ri)x=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(o===Rc)x=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=ri,l=!1){const c=this.elements,d=2/(n-t),h=2/(i-a),f=-(n+t)/(n-t),p=-(i+a)/(i-a);let x,M;if(l)x=1/(s-r),M=s/(s-r);else if(o===ri)x=-2/(s-r),M=-(s+r)/(s-r);else if(o===Rc)x=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const mr=new G,Xn=new Ie,SE=new G(0,0,0),ME=new G(1,1,1),Yi=new G,pl=new G,Sn=new G,Ym=new Ie,jm=new Go;class Fi{constructor(t=0,n=0,i=0,a=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ym.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ym,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return jm.setFromEuler(this),this.setFromQuaternion(jm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class q0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yE=0;const Zm=new G,gr=new Go,xi=new Ie,ml=new G,Bs=new G,EE=new G,TE=new Go,Km=new G(1,0,0),Qm=new G(0,1,0),Jm=new G(0,0,1),$m={type:"added"},bE={type:"removed"},_r={type:"childadded",child:null},Wu={type:"childremoved",child:null};class wn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new G,n=new Fi,i=new Go,a=new G(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ft}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return gr.setFromAxisAngle(t,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,n){return gr.setFromAxisAngle(t,n),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(Km,t)}rotateY(t){return this.rotateOnAxis(Qm,t)}rotateZ(t){return this.rotateOnAxis(Jm,t)}translateOnAxis(t,n){return Zm.copy(t).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Km,t)}translateY(t){return this.translateOnAxis(Qm,t)}translateZ(t){return this.translateOnAxis(Jm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ml.copy(t):ml.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Bs,ml,this.up):xi.lookAt(ml,Bs,this.up),this.quaternion.setFromRotationMatrix(xi),a&&(xi.extractRotation(a.matrixWorld),gr.setFromRotationMatrix(xi),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($m),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(bE),Wu.child=t,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($m),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,EE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,TE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),d=s(t.images),h=s(t.shapes),f=s(t.skeletons),p=s(t.animations),x=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}wn.DEFAULT_UP=new G(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new G,Si=new G,qu=new G,Mi=new G,vr=new G,xr=new G,tg=new G,Yu=new G,ju=new G,Zu=new G,Ku=new Le,Qu=new Le,Ju=new Le;class jn{constructor(t=new G,n=new G,i=new G){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Wn.subVectors(t,n),a.cross(Wn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){Wn.subVectors(a,n),Si.subVectors(i,n),qu.subVectors(t,n);const s=Wn.dot(Wn),o=Wn.dot(Si),l=Wn.dot(qu),c=Si.dot(Si),d=Si.dot(qu),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*d)*f,x=(s*d-o*l)*f;return r.set(1-p-x,x,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(s,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return Ku.setScalar(0),Qu.setScalar(0),Ju.setScalar(0),Ku.fromBufferAttribute(t,n),Qu.fromBufferAttribute(t,i),Ju.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Ku,r.x),s.addScaledVector(Qu,r.y),s.addScaledVector(Ju,r.z),s}static isFrontFacing(t,n,i,a){return Wn.subVectors(i,n),Si.subVectors(t,n),Wn.cross(Si).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Wn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return jn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return jn.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;vr.subVectors(a,i),xr.subVectors(r,i),Yu.subVectors(t,i);const l=vr.dot(Yu),c=xr.dot(Yu);if(l<=0&&c<=0)return n.copy(i);ju.subVectors(t,a);const d=vr.dot(ju),h=xr.dot(ju);if(d>=0&&h<=d)return n.copy(a);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(vr,s);Zu.subVectors(t,r);const p=vr.dot(Zu),x=xr.dot(Zu);if(x>=0&&p<=x)return n.copy(r);const M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(xr,o);const m=d*x-p*h;if(m<=0&&h-d>=0&&p-x>=0)return tg.subVectors(r,a),o=(h-d)/(h-d+(p-x)),n.copy(a).addScaledVector(tg,o);const u=1/(m+M+f);return s=M*u,o=f*u,n.copy(i).addScaledVector(vr,s).addScaledVector(xr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},gl={h:0,s:0,l:0};function $u(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ue{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Qt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Qt.workingColorSpace){if(t=cE(t,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=$u(s,r,t+1/3),this.g=$u(s,r,t),this.b=$u(s,r,t-1/3)}return Qt.colorSpaceToWorking(this,a),this}setStyle(t,n=On){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=On){const i=Y0[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return Qt.workingToColorSpace(Je.copy(this),t),Math.round(jt(Je.r*255,0,255))*65536+Math.round(jt(Je.g*255,0,255))*256+Math.round(jt(Je.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Qt.workingColorSpace){Qt.workingToColorSpace(Je.copy(this),n);const i=Je.r,a=Je.g,r=Je.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=d<=.5?h/(s+o):h/(2-s-o),s){case i:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-i)/h+2;break;case r:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=Qt.workingColorSpace){return Qt.workingToColorSpace(Je.copy(this),n),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=On){Qt.workingToColorSpace(Je.copy(this),t);const n=Je.r,i=Je.g,a=Je.b;return t!==On?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+n,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ji),t.getHSL(gl);const i=Pu(ji.h,gl.h,n),a=Pu(ji.s,gl.s,n),r=Pu(ji.l,gl.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new ue;ue.NAMES=Y0;let AE=0;class jc extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Zr,this.side=Ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=od,this.blendEquation=Ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==Ma&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==od&&(i.blendDst=this.blendDst),this.blendEquation!==Ia&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class j0 extends jc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=N0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new G,_l=new re;let RE=0;class ui{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Gm,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(t),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix3(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix4(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyNormalMatrix(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.transformDirection(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ns(n,this.array)),n}setX(t,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ns(n,this.array)),n}setY(t,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ns(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ns(n,this.array)),n}setW(t,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),a=ln(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),a=ln(a,this.array),r=ln(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gm&&(t.usage=this.usage),t}}class Z0 extends ui{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class K0 extends ui{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Za extends ui{constructor(t,n,i){super(new Float32Array(t),n,i)}}let wE=0;const Ln=new Ie,tf=new wn,Sr=new G,Mn=new Vo,zs=new Vo,ke=new G;class sr extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(X0(t)?K0:Z0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,n,i){return Ln.makeTranslation(t,n,i),this.applyMatrix4(Ln),this}scale(t,n,i){return Ln.makeScale(t,n,i),this.applyMatrix4(Ln),this}lookAt(t){return tf.lookAt(t),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Za(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ep);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(Mn.min,zs.min),Mn.expandByPoint(ke),ke.addVectors(Mn.max,zs.max),Mn.expandByPoint(ke)):(Mn.expandByPoint(zs.min),Mn.expandByPoint(zs.max))}Mn.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)ke.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(ke));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ke.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(t,c),ke.add(Sr)),a=Math.max(a,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new G,l[D]=new G;const c=new G,d=new G,h=new G,f=new re,p=new re,x=new re,M=new G,m=new G;function u(D,T,E){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,E),d.sub(c),h.sub(c),p.sub(f),x.sub(f);const C=1/(p.x*x.y-x.x*p.y);isFinite(C)&&(M.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(C),o[D].add(M),o[T].add(M),o[E].add(M),l[D].add(m),l[T].add(m),l[E].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let D=0,T=g.length;D<T;++D){const E=g[D],C=E.start,X=E.count;for(let k=C,Y=C+X;k<Y;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const _=new G,v=new G,b=new G,w=new G;function R(D){b.fromBufferAttribute(a,D),w.copy(b);const T=o[D];_.copy(T),_.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(w,T);const C=v.dot(l[D])<0?-1:1;s.setXYZW(D,_.x,_.y,_.z,C)}for(let D=0,T=g.length;D<T;++D){const E=g[D],C=E.start,X=E.count;for(let k=C,Y=C+X;k<Y;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new G,r=new G,s=new G,o=new G,l=new G,c=new G,d=new G,h=new G;if(t)for(let f=0,p=t.count;f<p;f+=3){const x=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,m),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)ke.fromBufferAttribute(t,n),ke.normalize(),t.setXYZ(n,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let p=0,x=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let u=0;u<d;u++)f[x++]=c[p++]}return new ui(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sr,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(a[l]=d,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eg=new Ie,Ca=new xE,vl=new ep,ng=new G,xl=new G,Sl=new G,Ml=new G,ef=new G,yl=new G,ig=new G,El=new G;class si extends wn{constructor(t=new sr,n=new j0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){yl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(ef.fromBufferAttribute(h,t),s?yl.addScaledVector(ef,d):yl.addScaledVector(ef.sub(n),d))}n.add(yl)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),Ca.copy(t.ray).recast(t.near),!(vl.containsPoint(Ca.origin)===!1&&(Ca.intersectSphere(vl,ng)===null||Ca.origin.distanceToSquared(ng)>(t.far-t.near)**2))&&(eg.copy(r).invert(),Ca.copy(t.ray).applyMatrix4(eg),!(i.boundingBox!==null&&Ca.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ca)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,M=f.length;x<M;x++){const m=f[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,b=_;v<b;v+=3){const w=o.getX(v),R=o.getX(v+1),D=o.getX(v+2);a=Tl(this,u,t,i,c,d,h,w,R,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=x,u=M;m<u;m+=3){const g=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);a=Tl(this,s,t,i,c,d,h,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,M=f.length;x<M;x++){const m=f[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,b=_;v<b;v+=3){const w=v,R=v+1,D=v+2;a=Tl(this,u,t,i,c,d,h,w,R,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=x,u=M;m<u;m+=3){const g=m,_=m+1,v=m+2;a=Tl(this,s,t,i,c,d,h,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function CE(e,t,n,i,a,r,s,o){let l;if(t.side===dn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===Ma,o),l===null)return null;El.copy(o),El.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(El);return c<n.near||c>n.far?null:{distance:c,point:El.clone(),object:e}}function Tl(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,xl),e.getVertexPosition(l,Sl),e.getVertexPosition(c,Ml);const d=CE(e,t,n,i,xl,Sl,Ml,ig);if(d){const h=new G;jn.getBarycoord(ig,xl,Sl,Ml,h),a&&(d.uv=jn.getInterpolatedAttribute(a,o,l,c,h,new re)),r&&(d.uv1=jn.getInterpolatedAttribute(r,o,l,c,h,new re)),s&&(d.normal=jn.getInterpolatedAttribute(s,o,l,c,h,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};jn.getNormal(xl,Sl,Ml,f.normal),d.face=f,d.barycoord=h}return d}class ko extends sr{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,t,s,r,0),x("z","y","x",1,-1,i,n,-t,s,r,1),x("x","z","y",1,1,t,i,n,a,s,2),x("x","z","y",1,-1,t,i,-n,a,s,3),x("x","y","z",1,-1,t,n,i,a,r,4),x("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Za(c,3)),this.setAttribute("normal",new Za(d,3)),this.setAttribute("uv",new Za(h,2));function x(M,m,u,g,_,v,b,w,R,D,T){const E=v/R,C=b/D,X=v/2,k=b/2,Y=w/2,K=R+1,L=D+1;let z=0,O=0;const j=new G;for(let $=0;$<L;$++){const dt=$*C-k;for(let Et=0;Et<K;Et++){const Lt=Et*E-X;j[M]=Lt*g,j[m]=dt*_,j[u]=Y,c.push(j.x,j.y,j.z),j[M]=0,j[m]=0,j[u]=w>0?1:-1,d.push(j.x,j.y,j.z),h.push(Et/R),h.push(1-$/D),z+=1}}for(let $=0;$<D;$++)for(let dt=0;dt<R;dt++){const Et=f+dt+K*$,Lt=f+dt+K*($+1),Vt=f+(dt+1)+K*($+1),V=f+(dt+1)+K*$;l.push(Et,Lt,V),l.push(Lt,Vt,V),O+=6}o.addGroup(p,O,T),p+=O,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function nn(e){const t={};for(let n=0;n<e.length;n++){const i=hs(e[n]);for(const a in i)t[a]=i[a]}return t}function DE(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Q0(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const UE={clone:hs,merge:nn};var LE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends jc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LE,this.fragmentShader=NE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=DE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class J0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new G,ag=new re,rg=new re;class Yn extends J0{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,n){return this.getViewBounds(t,ag,rg),n.subVectors(rg,ag)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ou*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mr=-90,yr=1;class OE extends wn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Mr,yr,t,n);a.layers=this.layers,this.add(a);const r=new Yn(Mr,yr,t,n);r.layers=this.layers,this.add(r);const s=new Yn(Mr,yr,t,n);s.layers=this.layers,this.add(s);const o=new Yn(Mr,yr,t,n);o.layers=this.layers,this.add(o);const l=new Yn(Mr,yr,t,n);l.layers=this.layers,this.add(l);const c=new Yn(Mr,yr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),t.render(n,d),t.setRenderTarget(h,f,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class $0 extends hn{constructor(t=[],n=us,i,a,r,s,o,l,c,d){super(t,n,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class PE extends er{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new $0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ko(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:ga});r.uniforms.tEquirect.value=n;const s=new si(a,r),o=n.minFilter;return n.minFilter===Ga&&(n.minFilter=ai),new OE(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}class bl extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BE={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const M of t.hand.values()){const m=n.getJointPose(M,i),u=this._getHandJoint(c,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new bl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class zE extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const af=new G,IE=new G,FE=new Ft;class Ba{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=af.subVectors(i,n).cross(IE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(af),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||FE.getNormalMatrix(t),a=this.coplanarPoint(af).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Da=new ep,HE=new re(.5,.5),Al=new G;class tx{constructor(t=new Ba,n=new Ba,i=new Ba,a=new Ba,r=new Ba,s=new Ba){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ri,i=!1){const a=this.planes,r=t.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],f=r[6],p=r[7],x=r[8],M=r[9],m=r[10],u=r[11],g=r[12],_=r[13],v=r[14],b=r[15];if(a[0].setComponents(c-s,p-d,u-x,b-g).normalize(),a[1].setComponents(c+s,p+d,u+x,b+g).normalize(),a[2].setComponents(c+o,p+h,u+M,b+_).normalize(),a[3].setComponents(c-o,p-h,u-M,b-_).normalize(),i)a[4].setComponents(l,f,m,v).normalize(),a[5].setComponents(c-l,p-f,u-m,b-v).normalize();else if(a[4].setComponents(c-l,p-f,u-m,b-v).normalize(),n===ri)a[5].setComponents(c+l,p+f,u+m,b+v).normalize();else if(n===Rc)a[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Da.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Da)}intersectsSprite(t){Da.center.set(0,0,0);const n=HE.distanceTo(t.center);return Da.radius=.7071067811865476+n,Da.applyMatrix4(t.matrixWorld),this.intersectsSphere(Da)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Al.x=a.normal.x>0?t.max.x:t.min.x,Al.y=a.normal.y>0?t.max.y:t.min.y,Al.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Al)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ex extends hn{constructor(t,n,i=tr,a,r,s,o=Qn,l=Qn,c,d=Mo,h=1){if(d!==Mo&&d!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:h};super(f,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Xo extends sr{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=t/o,f=n/l,p=[],x=[],M=[],m=[];for(let u=0;u<d;u++){const g=u*f-s;for(let _=0;_<c;_++){const v=_*h-r;x.push(v,-g,0),M.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,v=g+c*(u+1),b=g+1+c*(u+1),w=g+1+c*u;p.push(_,v,w),p.push(v,b,w)}this.setIndex(p),this.setAttribute("position",new Za(x,3)),this.setAttribute("normal",new Za(M,3)),this.setAttribute("uv",new Za(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.width,t.height,t.widthSegments,t.heightSegments)}}class GE extends jc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VE extends jc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nx extends J0{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class kE extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function sg(e,t,n,i){const a=XE(i);switch(n){case I0:return e*t;case H0:return e*t/a.components*a.byteLength;case Qh:return e*t/a.components*a.byteLength;case G0:return e*t*2/a.components*a.byteLength;case Jh:return e*t*2/a.components*a.byteLength;case F0:return e*t*3/a.components*a.byteLength;case Zn:return e*t*4/a.components*a.byteLength;case $h:return e*t*4/a.components*a.byteLength;case kl:case Xl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wl:case ql:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sd:case yd:return Math.max(e,16)*Math.max(t,8)/4;case xd:case Md:return Math.max(e,8)*Math.max(t,8)/2;case Ed:case Td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case bd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Od:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case zd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Id:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Yl:case Hd:case Gd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case V0:case Vd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case kd:case Xd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function XE(e){switch(e){case Ii:case P0:return{byteLength:1,components:1};case xo:case B0:case Fo:return{byteLength:2,components:1};case Zh:case Kh:return{byteLength:2,components:4};case tr:case jh:case Di:return{byteLength:4,components:1};case z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ix(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function WE(e){const t=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(e.bindBuffer(c,o),h.length===0)e.bufferSubData(c,0,d);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],M=h[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,h[f]=M)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const M=h[p];e.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var qE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_T=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ST=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ET=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Db=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ob=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ib=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$b=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:qE,alphahash_pars_fragment:YE,alphamap_fragment:jE,alphamap_pars_fragment:ZE,alphatest_fragment:KE,alphatest_pars_fragment:QE,aomap_fragment:JE,aomap_pars_fragment:$E,batching_pars_vertex:tT,batching_vertex:eT,begin_vertex:nT,beginnormal_vertex:iT,bsdfs:aT,iridescence_fragment:rT,bumpmap_pars_fragment:sT,clipping_planes_fragment:oT,clipping_planes_pars_fragment:lT,clipping_planes_pars_vertex:cT,clipping_planes_vertex:uT,color_fragment:fT,color_pars_fragment:dT,color_pars_vertex:hT,color_vertex:pT,common:mT,cube_uv_reflection_fragment:gT,defaultnormal_vertex:_T,displacementmap_pars_vertex:vT,displacementmap_vertex:xT,emissivemap_fragment:ST,emissivemap_pars_fragment:MT,colorspace_fragment:yT,colorspace_pars_fragment:ET,envmap_fragment:TT,envmap_common_pars_fragment:bT,envmap_pars_fragment:AT,envmap_pars_vertex:RT,envmap_physical_pars_fragment:IT,envmap_vertex:wT,fog_vertex:CT,fog_pars_vertex:DT,fog_fragment:UT,fog_pars_fragment:LT,gradientmap_pars_fragment:NT,lightmap_pars_fragment:OT,lights_lambert_fragment:PT,lights_lambert_pars_fragment:BT,lights_pars_begin:zT,lights_toon_fragment:FT,lights_toon_pars_fragment:HT,lights_phong_fragment:GT,lights_phong_pars_fragment:VT,lights_physical_fragment:kT,lights_physical_pars_fragment:XT,lights_fragment_begin:WT,lights_fragment_maps:qT,lights_fragment_end:YT,logdepthbuf_fragment:jT,logdepthbuf_pars_fragment:ZT,logdepthbuf_pars_vertex:KT,logdepthbuf_vertex:QT,map_fragment:JT,map_pars_fragment:$T,map_particle_fragment:tb,map_particle_pars_fragment:eb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:ab,morphcolor_vertex:rb,morphnormal_vertex:sb,morphtarget_pars_vertex:ob,morphtarget_vertex:lb,normal_fragment_begin:cb,normal_fragment_maps:ub,normal_pars_fragment:fb,normal_pars_vertex:db,normal_vertex:hb,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:_b,iridescence_pars_fragment:vb,opaque_fragment:xb,packing:Sb,premultiplied_alpha_fragment:Mb,project_vertex:yb,dithering_fragment:Eb,dithering_pars_fragment:Tb,roughnessmap_fragment:bb,roughnessmap_pars_fragment:Ab,shadowmap_pars_fragment:Rb,shadowmap_pars_vertex:wb,shadowmap_vertex:Cb,shadowmask_pars_fragment:Db,skinbase_vertex:Ub,skinning_pars_vertex:Lb,skinning_vertex:Nb,skinnormal_vertex:Ob,specularmap_fragment:Pb,specularmap_pars_fragment:Bb,tonemapping_fragment:zb,tonemapping_pars_fragment:Ib,transmission_fragment:Fb,transmission_pars_fragment:Hb,uv_pars_fragment:Gb,uv_pars_vertex:Vb,uv_vertex:kb,worldpos_vertex:Xb,background_vert:Wb,background_frag:qb,backgroundCube_vert:Yb,backgroundCube_frag:jb,cube_vert:Zb,cube_frag:Kb,depth_vert:Qb,depth_frag:Jb,distanceRGBA_vert:$b,distanceRGBA_frag:tA,equirect_vert:eA,equirect_frag:nA,linedashed_vert:iA,linedashed_frag:aA,meshbasic_vert:rA,meshbasic_frag:sA,meshlambert_vert:oA,meshlambert_frag:lA,meshmatcap_vert:cA,meshmatcap_frag:uA,meshnormal_vert:fA,meshnormal_frag:dA,meshphong_vert:hA,meshphong_frag:pA,meshphysical_vert:mA,meshphysical_frag:gA,meshtoon_vert:_A,meshtoon_frag:vA,points_vert:xA,points_frag:SA,shadow_vert:MA,shadow_frag:yA,sprite_vert:EA,sprite_frag:TA},lt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},ei={basic:{uniforms:nn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:nn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:nn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:nn([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:nn([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:nn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:nn([lt.points,lt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:nn([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:nn([lt.common,lt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:nn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:nn([lt.sprite,lt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:nn([lt.common,lt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:nn([lt.lights,lt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};ei.physical={uniforms:nn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Rl={r:0,b:0,g:0},Ua=new Fi,bA=new Ie;function AA(e,t,n,i,a,r,s){const o=new ue(0);let l=r===!0?0:1,c,d,h=null,f=0,p=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:t).get(v)),v}function M(_){let v=!1;const b=x(_);b===null?u(o,l):b&&b.isColor&&(u(b,1),v=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,v){const b=x(v);b&&(b.isCubeTexture||b.mapping===Yc)?(d===void 0&&(d=new si(new ko(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:hs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Ua.copy(v.backgroundRotation),Ua.x*=-1,Ua.y*=-1,Ua.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ua.y*=-1,Ua.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(bA.makeRotationFromEuler(Ua)),d.material.toneMapped=Qt.getTransfer(b.colorSpace)!==oe,(h!==b||f!==b.version||p!==e.toneMapping)&&(d.material.needsUpdate=!0,h=b,f=b.version,p=e.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new si(new Xo(2,2),new Hi({name:"BackgroundMaterial",uniforms:hs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ma,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(Rl,Q0(e)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,v,s)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:M,addToRenderList:m,dispose:g}}function RA(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(E,C,X,k,Y){let K=!1;const L=h(k,X,C);r!==L&&(r=L,c(r.object)),K=p(E,k,X,Y),K&&x(E,k,X,Y),Y!==null&&t.update(Y,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,v(E,C,X,k),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return e.createVertexArray()}function c(E){return e.bindVertexArray(E)}function d(E){return e.deleteVertexArray(E)}function h(E,C,X){const k=X.wireframe===!0;let Y=i[E.id];Y===void 0&&(Y={},i[E.id]=Y);let K=Y[C.id];K===void 0&&(K={},Y[C.id]=K);let L=K[k];return L===void 0&&(L=f(l()),K[k]=L),L}function f(E){const C=[],X=[],k=[];for(let Y=0;Y<n;Y++)C[Y]=0,X[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:X,attributeDivisors:k,object:E,attributes:{},index:null}}function p(E,C,X,k){const Y=r.attributes,K=C.attributes;let L=0;const z=X.getAttributes();for(const O in z)if(z[O].location>=0){const $=Y[O];let dt=K[O];if(dt===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(dt=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(dt=E.instanceColor)),$===void 0||$.attribute!==dt||dt&&$.data!==dt.data)return!0;L++}return r.attributesNum!==L||r.index!==k}function x(E,C,X,k){const Y={},K=C.attributes;let L=0;const z=X.getAttributes();for(const O in z)if(z[O].location>=0){let $=K[O];$===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&($=E.instanceColor));const dt={};dt.attribute=$,$&&$.data&&(dt.data=$.data),Y[O]=dt,L++}r.attributes=Y,r.attributesNum=L,r.index=k}function M(){const E=r.newAttributes;for(let C=0,X=E.length;C<X;C++)E[C]=0}function m(E){u(E,0)}function u(E,C){const X=r.newAttributes,k=r.enabledAttributes,Y=r.attributeDivisors;X[E]=1,k[E]===0&&(e.enableVertexAttribArray(E),k[E]=1),Y[E]!==C&&(e.vertexAttribDivisor(E,C),Y[E]=C)}function g(){const E=r.newAttributes,C=r.enabledAttributes;for(let X=0,k=C.length;X<k;X++)C[X]!==E[X]&&(e.disableVertexAttribArray(X),C[X]=0)}function _(E,C,X,k,Y,K,L){L===!0?e.vertexAttribIPointer(E,C,X,Y,K):e.vertexAttribPointer(E,C,X,k,Y,K)}function v(E,C,X,k){M();const Y=k.attributes,K=X.getAttributes(),L=C.defaultAttributeValues;for(const z in K){const O=K[z];if(O.location>=0){let j=Y[z];if(j===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),j!==void 0){const $=j.normalized,dt=j.itemSize,Et=t.get(j);if(Et===void 0)continue;const Lt=Et.buffer,Vt=Et.type,V=Et.bytesPerElement,st=Vt===e.INT||Vt===e.UNSIGNED_INT||j.gpuType===jh;if(j.isInterleavedBufferAttribute){const nt=j.data,Mt=nt.stride,bt=j.offset;if(nt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<O.locationSize;Nt++)u(O.location+Nt,nt.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Nt=0;Nt<O.locationSize;Nt++)m(O.location+Nt);e.bindBuffer(e.ARRAY_BUFFER,Lt);for(let Nt=0;Nt<O.locationSize;Nt++)_(O.location+Nt,dt/O.locationSize,Vt,$,Mt*V,(bt+dt/O.locationSize*Nt)*V,st)}else{if(j.isInstancedBufferAttribute){for(let nt=0;nt<O.locationSize;nt++)u(O.location+nt,j.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let nt=0;nt<O.locationSize;nt++)m(O.location+nt);e.bindBuffer(e.ARRAY_BUFFER,Lt);for(let nt=0;nt<O.locationSize;nt++)_(O.location+nt,dt/O.locationSize,Vt,$,dt*V,dt/O.locationSize*nt*V,st)}}else if(L!==void 0){const $=L[z];if($!==void 0)switch($.length){case 2:e.vertexAttrib2fv(O.location,$);break;case 3:e.vertexAttrib3fv(O.location,$);break;case 4:e.vertexAttrib4fv(O.location,$);break;default:e.vertexAttrib1fv(O.location,$)}}}}g()}function b(){D();for(const E in i){const C=i[E];for(const X in C){const k=C[X];for(const Y in k)d(k[Y].object),delete k[Y];delete C[X]}delete i[E]}}function w(E){if(i[E.id]===void 0)return;const C=i[E.id];for(const X in C){const k=C[X];for(const Y in k)d(k[Y].object),delete k[Y];delete C[X]}delete i[E.id]}function R(E){for(const C in i){const X=i[C];if(X[E.id]===void 0)continue;const k=X[E.id];for(const Y in k)d(k[Y].object),delete k[Y];delete X[E.id]}}function D(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:g}}function wA(e,t,n){let i;function a(c){i=c}function r(c,d){e.drawArrays(i,c,d),n.update(d,i,1)}function s(c,d,h){h!==0&&(e.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=d[x];n.update(p,i,1)}function l(c,d,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],d[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let x=0;for(let M=0;M<h;M++)x+=d[M]*f[M];n.update(x,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function CA(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==Zn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===Fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ii&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Di&&!D)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=x>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:b,maxSamples:w}}function DA(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new Ba,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||a;return a=f,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,u=e.get(h);if(!a||x===null||x.length===0||r&&!m)r?d(null):c();else{const g=r?0:i,_=g*4;let v=u.clippingState||null;l.value=v,v=d(x,f,_,p);for(let b=0;b!==_;++b)v[b]=n[b];u.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,f,p,x){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,x!==!0||m===null){const u=p+M*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,v=p;_!==M;++_,v+=4)s.copy(h[_]).applyMatrix4(g,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function UA(e){let t=new WeakMap;function n(s,o){return o===md?s.mapping=us:o===gd&&(s.mapping=fs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===md||o===gd)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new PE(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Hr=4,og=[.125,.215,.35,.446,.526,.582],Fa=20,rf=new nx,lg=new ue;let sf=null,of=0,lf=0,cf=!1;const za=(1+Math.sqrt(5))/2,Er=1/za,cg=[new G(-za,Er,0),new G(za,Er,0),new G(-Er,0,za),new G(Er,0,za),new G(0,za,-Er),new G(0,za,Er),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],LA=new G;class ug{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=LA}=r;sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sf,of,lf),this._renderer.xr.enabled=cf,t.scissorTest=!1,wl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===us||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Fo,format:Zn,colorSpace:ds,depthBuffer:!1},a=fg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NA(r)),this._blurMaterial=OA(r,t,n)}return a}_compileMaterial(t){const n=new si(this._lodPlanes[0],t);this._renderer.compile(n,rf)}_sceneToCubeUV(t,n,i,a,r){const l=new Yn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(lg),h.toneMapping=_a,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null));const M=new j0({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new si(new ko,M);let u=!1;const g=t.background;g?g.isColor&&(M.color.copy(g),t.background=null,u=!0):(M.color.copy(lg),u=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[_]));const b=this._cubeSize;wl(a,v*b,_>2?b:0,b,b),h.setRenderTarget(a),u&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=g}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===us||t.mapping===fs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dg());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new si(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;wl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,rf)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cg[(a-r-1)%cg.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new si(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fa-1),M=r/x,m=isFinite(r)?1+Math.floor(d*M):Fa;m>Fa&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fa}`);const u=[];let g=0;for(let R=0;R<Fa;++R){const D=R/M,T=Math.exp(-D*D/2);u.push(T),R===0?g+=T:R<m&&(g+=2*T)}for(let R=0;R<u.length;R++)u[R]=u[R]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const v=this._sizeLods[a],b=3*v*(a>_-Hr?a-_+Hr:0),w=4*(this._cubeSize-v);wl(n,b,w,3*v,2*v),l.setRenderTarget(n),l.render(h,rf)}}function NA(e){const t=[],n=[],i=[];let a=e;const r=e-Hr+1+og.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-Hr?l=og[s-e+Hr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,x=6,M=3,m=2,u=1,g=new Float32Array(M*x*p),_=new Float32Array(m*x*p),v=new Float32Array(u*x*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,D=w>2?0:-1,T=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];g.set(T,M*x*w),_.set(f,m*x*w);const E=[w,w,w,w,w,w];v.set(E,u*x*w)}const b=new sr;b.setAttribute("position",new ui(g,M)),b.setAttribute("uv",new ui(_,m)),b.setAttribute("faceIndex",new ui(v,u)),t.push(b),a>Hr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function fg(e,t,n){const i=new er(e,t,n);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function OA(e,t,n){const i=new Float32Array(Fa),a=new G(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Fa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function dg(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function hg(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PA(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===md||l===gd,d=l===us||l===fs;if(c||d){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new ug(e)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&a(p)?(n===null&&(n=new ug(e)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function BA(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Kr("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function zA(e,t,n,i){const a={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,x=h.attributes.position;let M=0;if(p!==null){const g=p.array;M=p.version;for(let _=0,v=g.length;_<v;_+=3){const b=g[_+0],w=g[_+1],R=g[_+2];f.push(b,w,w,R,R,b)}}else if(x!==void 0){const g=x.array;M=x.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const b=_+0,w=_+1,R=_+2;f.push(b,w,w,R,R,b)}}else return;const m=new(X0(f)?K0:Z0)(f,1);m.version=M;const u=r.get(h);u&&t.remove(u),r.set(h,m)}function d(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function IA(e,t,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){e.drawElements(i,p,r,f*s),n.update(p,i,1)}function c(f,p,x){x!==0&&(e.drawElementsInstanced(i,p,r,f*s,x),n.update(p,i,x))}function d(f,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];n.update(m,i,1)}function h(f,p,x,M){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],M[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,M,0,x);let u=0;for(let g=0;g<x;g++)u+=p[g]*M[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function FA(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function HA(e,t,n){const i=new WeakMap,a=new Le;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let E=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*w*4*h),D=new W0(R,b,w,h);D.type=Di,D.needsUpdate=!0;const T=v*4;for(let C=0;C<h;C++){const X=u[C],k=g[C],Y=_[C],K=b*w*4*C;for(let L=0;L<X.count;L++){const z=L*T;x===!0&&(a.fromBufferAttribute(X,L),R[K+z+0]=a.x,R[K+z+1]=a.y,R[K+z+2]=a.z,R[K+z+3]=0),M===!0&&(a.fromBufferAttribute(k,L),R[K+z+4]=a.x,R[K+z+5]=a.y,R[K+z+6]=a.z,R[K+z+7]=0),m===!0&&(a.fromBufferAttribute(Y,L),R[K+z+8]=a.x,R[K+z+9]=a.y,R[K+z+10]=a.z,R[K+z+11]=Y.itemSize===4?a.w:1)}}f={count:h,texture:D,size:new re(b,w)},i.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const M=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function GA(e,t,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,h=t.get(l,d);if(a.get(h)!==c&&(t.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return h}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const ax=new hn,pg=new ex(1,1),rx=new W0,sx=new _E,ox=new $0,mg=[],gg=[],_g=new Float32Array(16),vg=new Float32Array(9),xg=new Float32Array(4);function ys(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=mg[a];if(r===void 0&&(r=new Float32Array(a),mg[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function He(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ge(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Zc(e,t){let n=gg[t];n===void 0&&(n=new Int32Array(t),gg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function VA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function kA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2fv(this.addr,t),Ge(n,t)}}function XA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(He(n,t))return;e.uniform3fv(this.addr,t),Ge(n,t)}}function WA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4fv(this.addr,t),Ge(n,t)}}function qA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;xg.set(i),e.uniformMatrix2fv(this.addr,!1,xg),Ge(n,i)}}function YA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;vg.set(i),e.uniformMatrix3fv(this.addr,!1,vg),Ge(n,i)}}function jA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;_g.set(i),e.uniformMatrix4fv(this.addr,!1,_g),Ge(n,i)}}function ZA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function KA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2iv(this.addr,t),Ge(n,t)}}function QA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(He(n,t))return;e.uniform3iv(this.addr,t),Ge(n,t)}}function JA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4iv(this.addr,t),Ge(n,t)}}function $A(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function t1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2uiv(this.addr,t),Ge(n,t)}}function e1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(He(n,t))return;e.uniform3uiv(this.addr,t),Ge(n,t)}}function n1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4uiv(this.addr,t),Ge(n,t)}}function i1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(pg.compareFunction=k0,r=pg):r=ax,n.setTexture2D(t||r,a)}function a1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||sx,a)}function r1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||ox,a)}function s1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||rx,a)}function o1(e){switch(e){case 5126:return VA;case 35664:return kA;case 35665:return XA;case 35666:return WA;case 35674:return qA;case 35675:return YA;case 35676:return jA;case 5124:case 35670:return ZA;case 35667:case 35671:return KA;case 35668:case 35672:return QA;case 35669:case 35673:return JA;case 5125:return $A;case 36294:return t1;case 36295:return e1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}function l1(e,t){e.uniform1fv(this.addr,t)}function c1(e,t){const n=ys(t,this.size,2);e.uniform2fv(this.addr,n)}function u1(e,t){const n=ys(t,this.size,3);e.uniform3fv(this.addr,n)}function f1(e,t){const n=ys(t,this.size,4);e.uniform4fv(this.addr,n)}function d1(e,t){const n=ys(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function h1(e,t){const n=ys(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function p1(e,t){const n=ys(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function m1(e,t){e.uniform1iv(this.addr,t)}function g1(e,t){e.uniform2iv(this.addr,t)}function _1(e,t){e.uniform3iv(this.addr,t)}function v1(e,t){e.uniform4iv(this.addr,t)}function x1(e,t){e.uniform1uiv(this.addr,t)}function S1(e,t){e.uniform2uiv(this.addr,t)}function M1(e,t){e.uniform3uiv(this.addr,t)}function y1(e,t){e.uniform4uiv(this.addr,t)}function E1(e,t,n){const i=this.cache,a=t.length,r=Zc(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||ax,r[s])}function T1(e,t,n){const i=this.cache,a=t.length,r=Zc(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||sx,r[s])}function b1(e,t,n){const i=this.cache,a=t.length,r=Zc(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||ox,r[s])}function A1(e,t,n){const i=this.cache,a=t.length,r=Zc(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||rx,r[s])}function R1(e){switch(e){case 5126:return l1;case 35664:return c1;case 35665:return u1;case 35666:return f1;case 35674:return d1;case 35675:return h1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return _1;case 35669:case 35673:return v1;case 5125:return x1;case 36294:return S1;case 36295:return M1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return A1}}class w1{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=o1(n.type)}}class C1{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=R1(n.type)}}class D1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const uf=/(\w+)(\])?(\[|\.)?/g;function Sg(e,t){e.seq.push(t),e.map[t.id]=t}function U1(e,t,n){const i=e.name,a=i.length;for(uf.lastIndex=0;;){const r=uf.exec(i),s=uf.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Sg(n,c===void 0?new w1(o,e,t):new C1(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new D1(o),Sg(n,h)),n=h}}}class jl{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);U1(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function Mg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const L1=37297;let N1=0;function O1(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const yg=new Ft;function P1(e){Qt._getMatrix(yg,Qt.workingColorSpace,e);const t=`mat3( ${yg.elements.map(n=>n.toFixed(4))} )`;switch(Qt.getTransfer(e)){case Ac:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Eg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+O1(e.getShaderSource(t),o)}else return r}function B1(e,t){const n=P1(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function z1(e,t){let n;switch(t){case Xy:n="Linear";break;case Wy:n="Reinhard";break;case qy:n="Cineon";break;case Yy:n="ACESFilmic";break;case Zy:n="AgX";break;case Ky:n="Neutral";break;case jy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new G;function I1(){Qt.getLuminanceCoefficients(Cl);const e=Cl.x.toFixed(4),t=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function H1(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function G1(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Vs(e){return e!==""}function Tg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V1=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(e){return e.replace(V1,X1)}const k1=new Map;function X1(e,t){let n=Ht[t];if(n===void 0){const i=k1.get(t);if(i!==void 0)n=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return qd(n)}const W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(e){return e.replace(W1,q1)}function q1(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Rg(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y1(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===L0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Ey?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function j1(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case us:case fs:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z1(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function K1(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case N0:t="ENVMAP_BLENDING_MULTIPLY";break;case Vy:t="ENVMAP_BLENDING_MIX";break;case ky:t="ENVMAP_BLENDING_ADD";break}return t}function Q1(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function J1(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=Y1(n),c=j1(n),d=Z1(n),h=K1(n),f=Q1(n),p=F1(n),x=H1(r),M=a.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vs).join(`
`),u.length>0&&(u+=`
`)):(m=[Rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),u=[Rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_a?"#define TONE_MAPPING":"",n.toneMapping!==_a?Ht.tonemapping_pars_fragment:"",n.toneMapping!==_a?z1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,B1("linearToOutputTexel",n.outputColorSpace),I1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vs).join(`
`)),s=qd(s),s=Tg(s,n),s=bg(s,n),o=qd(o),o=Tg(o,n),o=bg(o,n),s=Ag(s),o=Ag(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+s,v=g+u+o,b=Mg(a,a.VERTEX_SHADER,_),w=Mg(a,a.FRAGMENT_SHADER,v);a.attachShader(M,b),a.attachShader(M,w),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function R(C){if(e.debug.checkShaderErrors){const X=a.getProgramInfoLog(M)||"",k=a.getShaderInfoLog(b)||"",Y=a.getShaderInfoLog(w)||"",K=X.trim(),L=k.trim(),z=Y.trim();let O=!0,j=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(O=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,b,w);else{const $=Eg(a,b,"vertex"),dt=Eg(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+K+`
`+$+`
`+dt)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||z==="")&&(j=!1);j&&(C.diagnostics={runnable:O,programLog:K,vertexShader:{log:L,prefix:m},fragmentShader:{log:z,prefix:u}})}a.deleteShader(b),a.deleteShader(w),D=new jl(a,M),T=G1(a,M)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(M,L1)),E},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=N1++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=w,this}let $1=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new eR(t),n.set(t,i)),i}}class eR{constructor(t){this.id=$1++,this.code=t,this.usedTimes=0}}function nR(e,t,n,i,a,r,s){const o=new q0,l=new tR,c=new Set,d=[],h=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,E,C,X,k){const Y=X.fog,K=k.geometry,L=T.isMeshStandardMaterial?X.environment:null,z=(T.isMeshStandardMaterial?n:t).get(T.envMap||L),O=z&&z.mapping===Yc?z.image.height:null,j=x[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const $=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,dt=$!==void 0?$.length:0;let Et=0;K.morphAttributes.position!==void 0&&(Et=1),K.morphAttributes.normal!==void 0&&(Et=2),K.morphAttributes.color!==void 0&&(Et=3);let Lt,Vt,V,st;if(j){const ne=ei[j];Lt=ne.vertexShader,Vt=ne.fragmentShader}else Lt=T.vertexShader,Vt=T.fragmentShader,l.update(T),V=l.getVertexShaderID(T),st=l.getFragmentShaderID(T);const nt=e.getRenderTarget(),Mt=e.state.buffers.depth.getReversed(),bt=k.isInstancedMesh===!0,Nt=k.isBatchedMesh===!0,ve=!!T.map,Bt=!!T.matcap,U=!!z,he=!!T.aoMap,Rt=!!T.lightMap,Jt=!!T.bumpMap,Tt=!!T.normalMap,xe=!!T.displacementMap,mt=!!T.emissiveMap,kt=!!T.metalnessMap,Ve=!!T.roughnessMap,Ce=T.anisotropy>0,A=T.clearcoat>0,S=T.dispersion>0,I=T.iridescence>0,q=T.sheen>0,J=T.transmission>0,W=Ce&&!!T.anisotropyMap,yt=A&&!!T.clearcoatMap,rt=A&&!!T.clearcoatNormalMap,vt=A&&!!T.clearcoatRoughnessMap,xt=I&&!!T.iridescenceMap,it=I&&!!T.iridescenceThicknessMap,ft=q&&!!T.sheenColorMap,Dt=q&&!!T.sheenRoughnessMap,St=!!T.specularMap,ct=!!T.specularColorMap,It=!!T.specularIntensityMap,N=J&&!!T.transmissionMap,at=J&&!!T.thicknessMap,ot=!!T.gradientMap,pt=!!T.alphaMap,tt=T.alphaTest>0,Q=!!T.alphaHash,_t=!!T.extensions;let zt=_a;T.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(zt=e.toneMapping);const pe={shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:Lt,fragmentShader:Vt,defines:T.defines,customVertexShaderID:V,customFragmentShaderID:st,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&k._colorsTexture!==null,instancing:bt,instancingColor:bt&&k.instanceColor!==null,instancingMorph:bt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?e.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ds,alphaToCoverage:!!T.alphaToCoverage,map:ve,matcap:Bt,envMap:U,envMapMode:U&&z.mapping,envMapCubeUVHeight:O,aoMap:he,lightMap:Rt,bumpMap:Jt,normalMap:Tt,displacementMap:f&&xe,emissiveMap:mt,normalMapObjectSpace:Tt&&T.normalMapType===eE,normalMapTangentSpace:Tt&&T.normalMapType===tE,metalnessMap:kt,roughnessMap:Ve,anisotropy:Ce,anisotropyMap:W,clearcoat:A,clearcoatMap:yt,clearcoatNormalMap:rt,clearcoatRoughnessMap:vt,dispersion:S,iridescence:I,iridescenceMap:xt,iridescenceThicknessMap:it,sheen:q,sheenColorMap:ft,sheenRoughnessMap:Dt,specularMap:St,specularColorMap:ct,specularIntensityMap:It,transmission:J,transmissionMap:N,thicknessMap:at,gradientMap:ot,opaque:T.transparent===!1&&T.blending===Zr&&T.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:Q,combine:T.combine,mapUv:ve&&M(T.map.channel),aoMapUv:he&&M(T.aoMap.channel),lightMapUv:Rt&&M(T.lightMap.channel),bumpMapUv:Jt&&M(T.bumpMap.channel),normalMapUv:Tt&&M(T.normalMap.channel),displacementMapUv:xe&&M(T.displacementMap.channel),emissiveMapUv:mt&&M(T.emissiveMap.channel),metalnessMapUv:kt&&M(T.metalnessMap.channel),roughnessMapUv:Ve&&M(T.roughnessMap.channel),anisotropyMapUv:W&&M(T.anisotropyMap.channel),clearcoatMapUv:yt&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:rt&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:it&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&M(T.sheenRoughnessMap.channel),specularMapUv:St&&M(T.specularMap.channel),specularColorMapUv:ct&&M(T.specularColorMap.channel),specularIntensityMapUv:It&&M(T.specularIntensityMap.channel),transmissionMapUv:N&&M(T.transmissionMap.channel),thicknessMapUv:at&&M(T.thicknessMap.channel),alphaMapUv:pt&&M(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Tt||Ce),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(ve||pt),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Mt,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:zt,decodeVideoTexture:ve&&T.map.isVideoTexture===!0&&Qt.getTransfer(T.map.colorSpace)===oe,decodeVideoTextureEmissive:mt&&T.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(T.emissiveMap.colorSpace)===oe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ti,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:_t&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&T.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function u(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)E.push(C),E.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(g(E,T),_(E,T),E.push(e.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function g(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function _(T,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const E=x[T.type];let C;if(E){const X=ei[E];C=UE.clone(X.uniforms)}else C=T.uniforms;return C}function b(T,E){let C;for(let X=0,k=d.length;X<k;X++){const Y=d[X];if(Y.cacheKey===E){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new J1(e,E,T,r),d.push(C)),C}function w(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function R(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:R,programs:d,dispose:D}}function iR(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function aR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function wg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Cg(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(h,f,p,x,M,m){let u=e[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:M,group:m},e[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=M,u.group=m),t++,u}function o(h,f,p,x,M,m){const u=s(h,f,p,x,M,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(h,f,p,x,M,m){const u=s(h,f,p,x,M,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||aR),i.length>1&&i.sort(f||wg),a.length>1&&a.sort(f||wg)}function d(){for(let h=t,f=e.length;h<f;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:d,sort:c}}function rR(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new Cg,e.set(i,[s])):a>=r.length?(s=new Cg,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function sR(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new G,color:new ue};break;case"SpotLight":n={position:new G,direction:new G,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":n={color:new ue,position:new G,halfWidth:new G,halfHeight:new G};break}return e[t.id]=n,n}}}function oR(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let lR=0;function cR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function uR(e){const t=new sR,n=oR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const a=new G,r=new Ie,s=new Ie;function o(c){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,M=0,m=0,u=0,g=0,_=0,v=0,b=0,w=0,R=0;c.sort(cR);for(let T=0,E=c.length;T<E;T++){const C=c[T],X=C.color,k=C.intensity,Y=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=X.r*k,h+=X.g*k,f+=X.b*k;else if(C.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(C.sh.coefficients[L],k);R++}else if(C.isDirectionalLight){const L=t.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,O=n.get(C);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=C.shadow.matrix,g++}i.directional[p]=L,p++}else if(C.isSpotLight){const L=t.get(C);L.position.setFromMatrixPosition(C.matrixWorld),L.color.copy(X).multiplyScalar(k),L.distance=Y,L.coneCos=Math.cos(C.angle),L.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),L.decay=C.decay,i.spot[M]=L;const z=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,z.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[M]=z.matrix,C.castShadow){const O=n.get(C);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,i.spotShadow[M]=O,i.spotShadowMap[M]=K,v++}M++}else if(C.isRectAreaLight){const L=t.get(C);L.color.copy(X).multiplyScalar(k),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=L,m++}else if(C.isPointLight){const L=t.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),L.distance=C.distance,L.decay=C.decay,C.castShadow){const z=C.shadow,O=n.get(C);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,i.pointShadow[x]=O,i.pointShadowMap[x]=K,i.pointShadowMatrix[x]=C.shadow.matrix,_++}i.point[x]=L,x++}else if(C.isHemisphereLight){const L=t.get(C);L.skyColor.copy(C.color).multiplyScalar(k),L.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[u]=L,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==M||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==g||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==b||D.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,D.directionalLength=p,D.pointLength=x,D.spotLength=M,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=g,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=b,D.numLightProbes=R,i.version=lR++)}function l(c,d){let h=0,f=0,p=0,x=0,M=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),h++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),s.identity(),r.copy(_.matrixWorld),r.premultiply(m),s.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),x++}else if(_.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=i.hemi[M];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Dg(e){const t=new uR(e),n=[],i=[];function a(d){c.camera=d,n.length=0,i.length=0}function r(d){n.push(d)}function s(d){i.push(d)}function o(){t.setup(n)}function l(d){t.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function fR(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new Dg(e),t.set(a,[o])):r>=s.length?(o=new Dg(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pR(e,t,n){let i=new tx;const a=new re,r=new re,s=new Le,o=new GE({depthPacking:$y}),l=new VE,c={},d=n.maxTextureSize,h={[Ma]:dn,[dn]:Ma,[Ti]:Ti},f=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:dR,fragmentShader:hR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new sr;x.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new si(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L0;let u=this.type;this.render=function(w,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=e.getRenderTarget(),E=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),X=e.state;X.setBlending(ga),X.buffers.depth.getReversed()?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const k=u!==yi&&this.type===yi,Y=u===yi&&this.type!==yi;for(let K=0,L=w.length;K<L;K++){const z=w[K],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const j=O.getFrameExtents();if(a.multiply(j),r.copy(O.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/j.x),a.x=r.x*j.x,O.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/j.y),a.y=r.y*j.y,O.mapSize.y=r.y)),O.map===null||k===!0||Y===!0){const dt=this.type!==yi?{minFilter:Qn,magFilter:Qn}:{};O.map!==null&&O.map.dispose(),O.map=new er(a.x,a.y,dt),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}e.setRenderTarget(O.map),e.clear();const $=O.getViewportCount();for(let dt=0;dt<$;dt++){const Et=O.getViewport(dt);s.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),X.viewport(s),O.updateMatrices(z,dt),i=O.getFrustum(),v(R,D,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===yi&&g(O,D),O.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(T,E,C)};function g(w,R){const D=t.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new er(a.x,a.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(R,null,D,f,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(R,null,D,p,M,null)}function _(w,R,D,T){let E=null;const C=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)E=C;else if(E=D.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const X=E.uuid,k=R.uuid;let Y=c[X];Y===void 0&&(Y={},c[X]=Y);let K=Y[k];K===void 0&&(K=E.clone(),Y[k]=K,R.addEventListener("dispose",b)),E=K}if(E.visible=R.visible,E.wireframe=R.wireframe,T===yi?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:h[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const X=e.properties.get(E);X.light=D}return E}function v(w,R,D,T,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const k=t.update(w),Y=w.material;if(Array.isArray(Y)){const K=k.groups;for(let L=0,z=K.length;L<z;L++){const O=K[L],j=Y[O.materialIndex];if(j&&j.visible){const $=_(w,j,T,E);w.onBeforeShadow(e,w,R,D,k,$,O),e.renderBufferDirect(D,null,k,$,w,O),w.onAfterShadow(e,w,R,D,k,$,O)}}}else if(Y.visible){const K=_(w,Y,T,E);w.onBeforeShadow(e,w,R,D,k,K,null),e.renderBufferDirect(D,null,k,K,w,null),w.onAfterShadow(e,w,R,D,k,K,null)}}const X=w.children;for(let k=0,Y=X.length;k<Y;k++)v(X[k],R,D,T,E)}function b(w){w.target.removeEventListener("dispose",b);for(const D in c){const T=c[D],E=w.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const mR={[ld]:cd,[ud]:hd,[fd]:pd,[cs]:dd,[cd]:ld,[hd]:ud,[pd]:fd,[dd]:cs};function gR(e,t){function n(){let N=!1;const at=new Le;let ot=null;const pt=new Le(0,0,0,0);return{setMask:function(tt){ot!==tt&&!N&&(e.colorMask(tt,tt,tt,tt),ot=tt)},setLocked:function(tt){N=tt},setClear:function(tt,Q,_t,zt,pe){pe===!0&&(tt*=zt,Q*=zt,_t*=zt),at.set(tt,Q,_t,zt),pt.equals(at)===!1&&(e.clearColor(tt,Q,_t,zt),pt.copy(at))},reset:function(){N=!1,ot=null,pt.set(-1,0,0,0)}}}function i(){let N=!1,at=!1,ot=null,pt=null,tt=null;return{setReversed:function(Q){if(at!==Q){const _t=t.get("EXT_clip_control");Q?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),at=Q;const zt=tt;tt=null,this.setClear(zt)}},getReversed:function(){return at},setTest:function(Q){Q?nt(e.DEPTH_TEST):Mt(e.DEPTH_TEST)},setMask:function(Q){ot!==Q&&!N&&(e.depthMask(Q),ot=Q)},setFunc:function(Q){if(at&&(Q=mR[Q]),pt!==Q){switch(Q){case ld:e.depthFunc(e.NEVER);break;case cd:e.depthFunc(e.ALWAYS);break;case ud:e.depthFunc(e.LESS);break;case cs:e.depthFunc(e.LEQUAL);break;case fd:e.depthFunc(e.EQUAL);break;case dd:e.depthFunc(e.GEQUAL);break;case hd:e.depthFunc(e.GREATER);break;case pd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=Q}},setLocked:function(Q){N=Q},setClear:function(Q){tt!==Q&&(at&&(Q=1-Q),e.clearDepth(Q),tt=Q)},reset:function(){N=!1,ot=null,pt=null,tt=null,at=!1}}}function a(){let N=!1,at=null,ot=null,pt=null,tt=null,Q=null,_t=null,zt=null,pe=null;return{setTest:function(ne){N||(ne?nt(e.STENCIL_TEST):Mt(e.STENCIL_TEST))},setMask:function(ne){at!==ne&&!N&&(e.stencilMask(ne),at=ne)},setFunc:function(ne,hi,$n){(ot!==ne||pt!==hi||tt!==$n)&&(e.stencilFunc(ne,hi,$n),ot=ne,pt=hi,tt=$n)},setOp:function(ne,hi,$n){(Q!==ne||_t!==hi||zt!==$n)&&(e.stencilOp(ne,hi,$n),Q=ne,_t=hi,zt=$n)},setLocked:function(ne){N=ne},setClear:function(ne){pe!==ne&&(e.clearStencil(ne),pe=ne)},reset:function(){N=!1,at=null,ot=null,pt=null,tt=null,Q=null,_t=null,zt=null,pe=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],x=null,M=!1,m=null,u=null,g=null,_=null,v=null,b=null,w=null,R=new ue(0,0,0),D=0,T=!1,E=null,C=null,X=null,k=null,Y=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,z=0;const O=e.getParameter(e.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=z>=2);let j=null,$={};const dt=e.getParameter(e.SCISSOR_BOX),Et=e.getParameter(e.VIEWPORT),Lt=new Le().fromArray(dt),Vt=new Le().fromArray(Et);function V(N,at,ot,pt){const tt=new Uint8Array(4),Q=e.createTexture();e.bindTexture(N,Q),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let _t=0;_t<ot;_t++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,tt):e.texImage2D(at+_t,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,tt);return Q}const st={};st[e.TEXTURE_2D]=V(e.TEXTURE_2D,e.TEXTURE_2D,1),st[e.TEXTURE_CUBE_MAP]=V(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[e.TEXTURE_2D_ARRAY]=V(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),st[e.TEXTURE_3D]=V(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),nt(e.DEPTH_TEST),s.setFunc(cs),Jt(!1),Tt(Bm),nt(e.CULL_FACE),he(ga);function nt(N){d[N]!==!0&&(e.enable(N),d[N]=!0)}function Mt(N){d[N]!==!1&&(e.disable(N),d[N]=!1)}function bt(N,at){return h[N]!==at?(e.bindFramebuffer(N,at),h[N]=at,N===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=at),N===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=at),!0):!1}function Nt(N,at){let ot=p,pt=!1;if(N){ot=f.get(at),ot===void 0&&(ot=[],f.set(at,ot));const tt=N.textures;if(ot.length!==tt.length||ot[0]!==e.COLOR_ATTACHMENT0){for(let Q=0,_t=tt.length;Q<_t;Q++)ot[Q]=e.COLOR_ATTACHMENT0+Q;ot.length=tt.length,pt=!0}}else ot[0]!==e.BACK&&(ot[0]=e.BACK,pt=!0);pt&&e.drawBuffers(ot)}function ve(N){return x!==N?(e.useProgram(N),x=N,!0):!1}const Bt={[Ia]:e.FUNC_ADD,[by]:e.FUNC_SUBTRACT,[Ay]:e.FUNC_REVERSE_SUBTRACT};Bt[Ry]=e.MIN,Bt[wy]=e.MAX;const U={[Cy]:e.ZERO,[Dy]:e.ONE,[Uy]:e.SRC_COLOR,[sd]:e.SRC_ALPHA,[zy]:e.SRC_ALPHA_SATURATE,[Py]:e.DST_COLOR,[Ny]:e.DST_ALPHA,[Ly]:e.ONE_MINUS_SRC_COLOR,[od]:e.ONE_MINUS_SRC_ALPHA,[By]:e.ONE_MINUS_DST_COLOR,[Oy]:e.ONE_MINUS_DST_ALPHA,[Iy]:e.CONSTANT_COLOR,[Fy]:e.ONE_MINUS_CONSTANT_COLOR,[Hy]:e.CONSTANT_ALPHA,[Gy]:e.ONE_MINUS_CONSTANT_ALPHA};function he(N,at,ot,pt,tt,Q,_t,zt,pe,ne){if(N===ga){M===!0&&(Mt(e.BLEND),M=!1);return}if(M===!1&&(nt(e.BLEND),M=!0),N!==Ty){if(N!==m||ne!==T){if((u!==Ia||v!==Ia)&&(e.blendEquation(e.FUNC_ADD),u=Ia,v=Ia),ne)switch(N){case Zr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case zm:e.blendFunc(e.ONE,e.ONE);break;case Im:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Fm:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Zr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case zm:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Im:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,_=null,b=null,w=null,R.set(0,0,0),D=0,m=N,T=ne}return}tt=tt||at,Q=Q||ot,_t=_t||pt,(at!==u||tt!==v)&&(e.blendEquationSeparate(Bt[at],Bt[tt]),u=at,v=tt),(ot!==g||pt!==_||Q!==b||_t!==w)&&(e.blendFuncSeparate(U[ot],U[pt],U[Q],U[_t]),g=ot,_=pt,b=Q,w=_t),(zt.equals(R)===!1||pe!==D)&&(e.blendColor(zt.r,zt.g,zt.b,pe),R.copy(zt),D=pe),m=N,T=!1}function Rt(N,at){N.side===Ti?Mt(e.CULL_FACE):nt(e.CULL_FACE);let ot=N.side===dn;at&&(ot=!ot),Jt(ot),N.blending===Zr&&N.transparent===!1?he(ga):he(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const pt=N.stencilWrite;o.setTest(pt),pt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),mt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):Mt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(N){E!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),E=N)}function Tt(N){N!==My?(nt(e.CULL_FACE),N!==C&&(N===Bm?e.cullFace(e.BACK):N===yy?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Mt(e.CULL_FACE),C=N}function xe(N){N!==X&&(L&&e.lineWidth(N),X=N)}function mt(N,at,ot){N?(nt(e.POLYGON_OFFSET_FILL),(k!==at||Y!==ot)&&(e.polygonOffset(at,ot),k=at,Y=ot)):Mt(e.POLYGON_OFFSET_FILL)}function kt(N){N?nt(e.SCISSOR_TEST):Mt(e.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=e.TEXTURE0+K-1),j!==N&&(e.activeTexture(N),j=N)}function Ce(N,at,ot){ot===void 0&&(j===null?ot=e.TEXTURE0+K-1:ot=j);let pt=$[ot];pt===void 0&&(pt={type:void 0,texture:void 0},$[ot]=pt),(pt.type!==N||pt.texture!==at)&&(j!==ot&&(e.activeTexture(ot),j=ot),e.bindTexture(N,at||st[N]),pt.type=N,pt.texture=at)}function A(){const N=$[j];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{e.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{e.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{e.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{e.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{e.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{e.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{e.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(N){Lt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Lt.copy(N))}function Dt(N){Vt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Vt.copy(N))}function St(N,at){let ot=c.get(at);ot===void 0&&(ot=new WeakMap,c.set(at,ot));let pt=ot.get(N);pt===void 0&&(pt=e.getUniformBlockIndex(at,N.name),ot.set(N,pt))}function ct(N,at){const pt=c.get(at).get(N);l.get(at)!==pt&&(e.uniformBlockBinding(at,pt,N.__bindingPointIndex),l.set(at,pt))}function It(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},j=null,$={},h={},f=new WeakMap,p=[],x=null,M=!1,m=null,u=null,g=null,_=null,v=null,b=null,w=null,R=new ue(0,0,0),D=0,T=!1,E=null,C=null,X=null,k=null,Y=null,Lt.set(0,0,e.canvas.width,e.canvas.height),Vt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:nt,disable:Mt,bindFramebuffer:bt,drawBuffers:Nt,useProgram:ve,setBlending:he,setMaterial:Rt,setFlipSided:Jt,setCullFace:Tt,setLineWidth:xe,setPolygonOffset:mt,setScissorTest:kt,activeTexture:Ve,bindTexture:Ce,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:I,texImage2D:xt,texImage3D:it,updateUBOMapping:St,uniformBlockBinding:ct,texStorage2D:rt,texStorage3D:vt,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:yt,scissor:ft,viewport:Dt,reset:It}}function _R(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return p?new OffscreenCanvas(A,S):wc("canvas")}function M(A,S,I){let q=1;const J=Ce(A);if((J.width>I||J.height>I)&&(q=I/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(q*J.width),yt=Math.floor(q*J.height);h===void 0&&(h=x(W,yt));const rt=S?x(W,yt):h;return rt.width=W,rt.height=yt,rt.getContext("2d").drawImage(A,0,0,W,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+yt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(A,S,I,q,J=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=S;if(S===e.RED&&(I===e.FLOAT&&(W=e.R32F),I===e.HALF_FLOAT&&(W=e.R16F),I===e.UNSIGNED_BYTE&&(W=e.R8)),S===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.R8UI),I===e.UNSIGNED_SHORT&&(W=e.R16UI),I===e.UNSIGNED_INT&&(W=e.R32UI),I===e.BYTE&&(W=e.R8I),I===e.SHORT&&(W=e.R16I),I===e.INT&&(W=e.R32I)),S===e.RG&&(I===e.FLOAT&&(W=e.RG32F),I===e.HALF_FLOAT&&(W=e.RG16F),I===e.UNSIGNED_BYTE&&(W=e.RG8)),S===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RG8UI),I===e.UNSIGNED_SHORT&&(W=e.RG16UI),I===e.UNSIGNED_INT&&(W=e.RG32UI),I===e.BYTE&&(W=e.RG8I),I===e.SHORT&&(W=e.RG16I),I===e.INT&&(W=e.RG32I)),S===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RGB8UI),I===e.UNSIGNED_SHORT&&(W=e.RGB16UI),I===e.UNSIGNED_INT&&(W=e.RGB32UI),I===e.BYTE&&(W=e.RGB8I),I===e.SHORT&&(W=e.RGB16I),I===e.INT&&(W=e.RGB32I)),S===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),I===e.UNSIGNED_INT&&(W=e.RGBA32UI),I===e.BYTE&&(W=e.RGBA8I),I===e.SHORT&&(W=e.RGBA16I),I===e.INT&&(W=e.RGBA32I)),S===e.RGB&&I===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),S===e.RGBA){const yt=J?Ac:Qt.getTransfer(q);I===e.FLOAT&&(W=e.RGBA32F),I===e.HALF_FLOAT&&(W=e.RGBA16F),I===e.UNSIGNED_BYTE&&(W=yt===oe?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(A,S){let I;return A?S===null||S===tr||S===So?I=e.DEPTH24_STENCIL8:S===Di?I=e.DEPTH32F_STENCIL8:S===xo&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===tr||S===So?I=e.DEPTH_COMPONENT24:S===Di?I=e.DEPTH_COMPONENT32F:S===xo&&(I=e.DEPTH_COMPONENT16),I}function b(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Qn&&A.minFilter!==ai?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),D(S),S.isVideoTexture&&d.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),E(S)}function D(A){const S=i.get(A);if(S.__webglInit===void 0)return;const I=A.source,q=f.get(I);if(q){const J=q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(A),Object.keys(q).length===0&&f.delete(I)}i.remove(A)}function T(A){const S=i.get(A);e.deleteTexture(S.__webglTexture);const I=A.source,q=f.get(I);delete q[S.__cacheKey],s.memory.textures--}function E(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let J=0;J<S.__webglFramebuffer[q].length;J++)e.deleteFramebuffer(S.__webglFramebuffer[q][J]);else e.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)e.deleteFramebuffer(S.__webglFramebuffer[q]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=A.textures;for(let q=0,J=I.length;q<J;q++){const W=i.get(I[q]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),s.memory.textures--),i.remove(I[q])}i.remove(A)}let C=0;function X(){C=0}function k(){const A=C;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),C+=1,A}function Y(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function K(A,S){const I=i.get(A);if(A.isVideoTexture&&kt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&I.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(I,A,S);return}}else A.isExternalTexture&&(I.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+S)}function L(A,S){const I=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){st(I,A,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+S)}function z(A,S){const I=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){st(I,A,S);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+S)}function O(A,S){const I=i.get(A);if(A.version>0&&I.__version!==A.version){nt(I,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+S)}const j={[_d]:e.REPEAT,[Ha]:e.CLAMP_TO_EDGE,[vd]:e.MIRRORED_REPEAT},$={[Qn]:e.NEAREST,[Qy]:e.NEAREST_MIPMAP_NEAREST,[ll]:e.NEAREST_MIPMAP_LINEAR,[ai]:e.LINEAR,[Nu]:e.LINEAR_MIPMAP_NEAREST,[Ga]:e.LINEAR_MIPMAP_LINEAR},dt={[nE]:e.NEVER,[lE]:e.ALWAYS,[iE]:e.LESS,[k0]:e.LEQUAL,[aE]:e.EQUAL,[oE]:e.GEQUAL,[rE]:e.GREATER,[sE]:e.NOTEQUAL};function Et(A,S){if(S.type===Di&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ai||S.magFilter===Nu||S.magFilter===ll||S.magFilter===Ga||S.minFilter===ai||S.minFilter===Nu||S.minFilter===ll||S.minFilter===Ga)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,j[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,j[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,j[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,$[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,$[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,dt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qn||S.minFilter!==ll&&S.minFilter!==Ga||S.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Lt(A,S){let I=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const q=S.source;let J=f.get(q);J===void 0&&(J={},f.set(q,J));const W=Y(S);if(W!==A.__cacheKey){J[W]===void 0&&(J[W]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,I=!0),J[W].usedTimes++;const yt=J[A.__cacheKey];yt!==void 0&&(J[A.__cacheKey].usedTimes--,yt.usedTimes===0&&T(S)),A.__cacheKey=W,A.__webglTexture=J[W].texture}return I}function Vt(A,S,I){return Math.floor(Math.floor(A/I)/S)}function V(A,S,I,q){const W=A.updateRanges;if(W.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,I,q,S.data);else{W.sort((it,ft)=>it.start-ft.start);let yt=0;for(let it=1;it<W.length;it++){const ft=W[yt],Dt=W[it],St=ft.start+ft.count,ct=Vt(Dt.start,S.width,4),It=Vt(ft.start,S.width,4);Dt.start<=St+1&&ct===It&&Vt(Dt.start+Dt.count-1,S.width,4)===ct?ft.count=Math.max(ft.count,Dt.start+Dt.count-ft.start):(++yt,W[yt]=Dt)}W.length=yt+1;const rt=e.getParameter(e.UNPACK_ROW_LENGTH),vt=e.getParameter(e.UNPACK_SKIP_PIXELS),xt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let it=0,ft=W.length;it<ft;it++){const Dt=W[it],St=Math.floor(Dt.start/4),ct=Math.ceil(Dt.count/4),It=St%S.width,N=Math.floor(St/S.width),at=ct,ot=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,It),e.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,It,N,at,ot,I,q,S.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,rt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(e.UNPACK_SKIP_ROWS,xt)}}function st(A,S,I){let q=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=e.TEXTURE_3D);const J=Lt(A,S),W=S.source;n.bindTexture(q,A.__webglTexture,e.TEXTURE0+I);const yt=i.get(W);if(W.version!==yt.__version||J===!0){n.activeTexture(e.TEXTURE0+I);const rt=Qt.getPrimaries(Qt.workingColorSpace),vt=S.colorSpace===ia?null:Qt.getPrimaries(S.colorSpace),xt=S.colorSpace===ia||rt===vt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let it=M(S.image,!1,a.maxTextureSize);it=Ve(S,it);const ft=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type);let St=_(S.internalFormat,ft,Dt,S.colorSpace,S.isVideoTexture);Et(q,S);let ct;const It=S.mipmaps,N=S.isVideoTexture!==!0,at=yt.__version===void 0||J===!0,ot=W.dataReady,pt=b(S,it);if(S.isDepthTexture)St=v(S.format===yo,S.type),at&&(N?n.texStorage2D(e.TEXTURE_2D,1,St,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,St,it.width,it.height,0,ft,Dt,null));else if(S.isDataTexture)if(It.length>0){N&&at&&n.texStorage2D(e.TEXTURE_2D,pt,St,It[0].width,It[0].height);for(let tt=0,Q=It.length;tt<Q;tt++)ct=It[tt],N?ot&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,ct.width,ct.height,ft,Dt,ct.data):n.texImage2D(e.TEXTURE_2D,tt,St,ct.width,ct.height,0,ft,Dt,ct.data);S.generateMipmaps=!1}else N?(at&&n.texStorage2D(e.TEXTURE_2D,pt,St,it.width,it.height),ot&&V(S,it,ft,Dt)):n.texImage2D(e.TEXTURE_2D,0,St,it.width,it.height,0,ft,Dt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,St,It[0].width,It[0].height,it.depth);for(let tt=0,Q=It.length;tt<Q;tt++)if(ct=It[tt],S.format!==Zn)if(ft!==null)if(N){if(ot)if(S.layerUpdates.size>0){const _t=sg(ct.width,ct.height,S.format,S.type);for(const zt of S.layerUpdates){const pe=ct.data.subarray(zt*_t/ct.data.BYTES_PER_ELEMENT,(zt+1)*_t/ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,zt,ct.width,ct.height,1,ft,pe)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,it.depth,ft,ct.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,tt,St,ct.width,ct.height,it.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ot&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,it.depth,ft,Dt,ct.data):n.texImage3D(e.TEXTURE_2D_ARRAY,tt,St,ct.width,ct.height,it.depth,0,ft,Dt,ct.data)}else{N&&at&&n.texStorage2D(e.TEXTURE_2D,pt,St,It[0].width,It[0].height);for(let tt=0,Q=It.length;tt<Q;tt++)ct=It[tt],S.format!==Zn?ft!==null?N?ot&&n.compressedTexSubImage2D(e.TEXTURE_2D,tt,0,0,ct.width,ct.height,ft,ct.data):n.compressedTexImage2D(e.TEXTURE_2D,tt,St,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ot&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,ct.width,ct.height,ft,Dt,ct.data):n.texImage2D(e.TEXTURE_2D,tt,St,ct.width,ct.height,0,ft,Dt,ct.data)}else if(S.isDataArrayTexture)if(N){if(at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,St,it.width,it.height,it.depth),ot)if(S.layerUpdates.size>0){const tt=sg(it.width,it.height,S.format,S.type);for(const Q of S.layerUpdates){const _t=it.data.subarray(Q*tt/it.data.BYTES_PER_ELEMENT,(Q+1)*tt/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,ft,Dt,_t)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,Dt,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,St,it.width,it.height,it.depth,0,ft,Dt,it.data);else if(S.isData3DTexture)N?(at&&n.texStorage3D(e.TEXTURE_3D,pt,St,it.width,it.height,it.depth),ot&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,Dt,it.data)):n.texImage3D(e.TEXTURE_3D,0,St,it.width,it.height,it.depth,0,ft,Dt,it.data);else if(S.isFramebufferTexture){if(at)if(N)n.texStorage2D(e.TEXTURE_2D,pt,St,it.width,it.height);else{let tt=it.width,Q=it.height;for(let _t=0;_t<pt;_t++)n.texImage2D(e.TEXTURE_2D,_t,St,tt,Q,0,ft,Dt,null),tt>>=1,Q>>=1}}else if(It.length>0){if(N&&at){const tt=Ce(It[0]);n.texStorage2D(e.TEXTURE_2D,pt,St,tt.width,tt.height)}for(let tt=0,Q=It.length;tt<Q;tt++)ct=It[tt],N?ot&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,ft,Dt,ct):n.texImage2D(e.TEXTURE_2D,tt,St,ft,Dt,ct);S.generateMipmaps=!1}else if(N){if(at){const tt=Ce(it);n.texStorage2D(e.TEXTURE_2D,pt,St,tt.width,tt.height)}ot&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Dt,it)}else n.texImage2D(e.TEXTURE_2D,0,St,ft,Dt,it);m(S)&&u(q),yt.__version=W.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function nt(A,S,I){if(S.image.length!==6)return;const q=Lt(A,S),J=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+I);const W=i.get(J);if(J.version!==W.__version||q===!0){n.activeTexture(e.TEXTURE0+I);const yt=Qt.getPrimaries(Qt.workingColorSpace),rt=S.colorSpace===ia?null:Qt.getPrimaries(S.colorSpace),vt=S.colorSpace===ia||yt===rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const xt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let Q=0;Q<6;Q++)!xt&&!it?ft[Q]=M(S.image[Q],!0,a.maxCubemapSize):ft[Q]=it?S.image[Q].image:S.image[Q],ft[Q]=Ve(S,ft[Q]);const Dt=ft[0],St=r.convert(S.format,S.colorSpace),ct=r.convert(S.type),It=_(S.internalFormat,St,ct,S.colorSpace),N=S.isVideoTexture!==!0,at=W.__version===void 0||q===!0,ot=J.dataReady;let pt=b(S,Dt);Et(e.TEXTURE_CUBE_MAP,S);let tt;if(xt){N&&at&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,It,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){tt=ft[Q].mipmaps;for(let _t=0;_t<tt.length;_t++){const zt=tt[_t];S.format!==Zn?St!==null?N?ot&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,zt.width,zt.height,St,zt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,It,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,zt.width,zt.height,St,ct,zt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,It,zt.width,zt.height,0,St,ct,zt.data)}}}else{if(tt=S.mipmaps,N&&at){tt.length>0&&pt++;const Q=Ce(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,It,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){N?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ft[Q].width,ft[Q].height,St,ct,ft[Q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,ft[Q].width,ft[Q].height,0,St,ct,ft[Q].data);for(let _t=0;_t<tt.length;_t++){const pe=tt[_t].image[Q].image;N?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,pe.width,pe.height,St,ct,pe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,It,pe.width,pe.height,0,St,ct,pe.data)}}else{N?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St,ct,ft[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,St,ct,ft[Q]);for(let _t=0;_t<tt.length;_t++){const zt=tt[_t];N?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,St,ct,zt.image[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,It,St,ct,zt.image[Q])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),W.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Mt(A,S,I,q,J,W){const yt=r.convert(I.format,I.colorSpace),rt=r.convert(I.type),vt=_(I.internalFormat,yt,rt,I.colorSpace),xt=i.get(S),it=i.get(I);if(it.__renderTarget=S,!xt.__hasExternalTextures){const ft=Math.max(1,S.width>>W),Dt=Math.max(1,S.height>>W);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,W,vt,ft,Dt,S.depth,0,yt,rt,null):n.texImage2D(J,W,vt,ft,Dt,0,yt,rt,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),mt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,J,it.__webglTexture,0,xe(S)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,J,it.__webglTexture,W),n.bindFramebuffer(e.FRAMEBUFFER,null)}function bt(A,S,I){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){const q=S.depthTexture,J=q&&q.isDepthTexture?q.type:null,W=v(S.stencilBuffer,J),yt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=xe(S);mt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,rt,W,S.width,S.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,rt,W,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,W,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,yt,e.RENDERBUFFER,A)}else{const q=S.textures;for(let J=0;J<q.length;J++){const W=q[J],yt=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),vt=_(W.internalFormat,yt,rt,W.colorSpace),xt=xe(S);I&&mt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,vt,S.width,S.height):mt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xt,vt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,vt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Nt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const J=q.__webglTexture,W=xe(S);if(S.depthTexture.format===Mo)mt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(S.depthTexture.format===yo)mt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ve(A){const S=i.get(A),I=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?Nt(S.__webglFramebuffer[0],A):Nt(S.__webglFramebuffer,A)}else if(I){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=e.createRenderbuffer(),bt(S.__webglDepthbuffer[q],A,!1);else{const J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,W)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),bt(S.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,W)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Bt(A,S,I){const q=i.get(A);S!==void 0&&Mt(q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&ve(A)}function U(A){const S=A.texture,I=i.get(A),q=i.get(S);A.addEventListener("dispose",R);const J=A.textures,W=A.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=S.version,s.memory.textures++),W){I.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[rt]=[];for(let vt=0;vt<S.mipmaps.length;vt++)I.__webglFramebuffer[rt][vt]=e.createFramebuffer()}else I.__webglFramebuffer[rt]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)I.__webglFramebuffer[rt]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(yt)for(let rt=0,vt=J.length;rt<vt;rt++){const xt=i.get(J[rt]);xt.__webglTexture===void 0&&(xt.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&mt(A)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const vt=J[rt];I.__webglColorRenderbuffer[rt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[rt]);const xt=r.convert(vt.format,vt.colorSpace),it=r.convert(vt.type),ft=_(vt.internalFormat,xt,it,vt.colorSpace,A.isXRRenderTarget===!0),Dt=xe(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Dt,ft,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,I.__webglColorRenderbuffer[rt])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),bt(I.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Et(e.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)Mt(I.__webglFramebuffer[rt][vt],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt);else Mt(I.__webglFramebuffer[rt],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(yt){for(let rt=0,vt=J.length;rt<vt;rt++){const xt=J[rt],it=i.get(xt);let ft=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,it.__webglTexture),Et(ft,xt),Mt(I.__webglFramebuffer,A,xt,e.COLOR_ATTACHMENT0+rt,ft,0),m(xt)&&u(ft)}n.unbindTexture()}else{let rt=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(rt,q.__webglTexture),Et(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)Mt(I.__webglFramebuffer[vt],A,S,e.COLOR_ATTACHMENT0,rt,vt);else Mt(I.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,rt,0);m(S)&&u(rt),n.unbindTexture()}A.depthBuffer&&ve(A)}function he(A){const S=A.textures;for(let I=0,q=S.length;I<q;I++){const J=S[I];if(m(J)){const W=g(A),yt=i.get(J).__webglTexture;n.bindTexture(W,yt),u(W),n.unbindTexture()}}}const Rt=[],Jt=[];function Tt(A){if(A.samples>0){if(mt(A)===!1){const S=A.textures,I=A.width,q=A.height;let J=e.COLOR_BUFFER_BIT;const W=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,yt=i.get(A),rt=S.length>1;if(rt)for(let xt=0;xt<S.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const vt=A.texture.mipmaps;vt&&vt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),rt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);const it=i.get(S[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,it,0)}e.blitFramebuffer(0,0,I,q,0,0,I,q,J,e.NEAREST),l===!0&&(Rt.length=0,Jt.length=0,Rt.push(e.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Rt.push(W),Jt.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Jt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),rt)for(let xt=0;xt<S.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);const it=i.get(S[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,it,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function xe(A){return Math.min(a.maxSamples,A.samples)}function mt(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function kt(A){const S=s.render.frame;d.get(A)!==S&&(d.set(A,S),A.update())}function Ve(A,S){const I=A.colorSpace,q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||I!==ds&&I!==ia&&(Qt.getTransfer(I)===oe?(q!==Zn||J!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=X,this.setTexture2D=K,this.setTexture2DArray=L,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=Bt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=mt}function vR(e,t){function n(i,a=ia){let r;const s=Qt.getTransfer(a);if(i===Ii)return e.UNSIGNED_BYTE;if(i===Zh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Kh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===z0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===P0)return e.BYTE;if(i===B0)return e.SHORT;if(i===xo)return e.UNSIGNED_SHORT;if(i===jh)return e.INT;if(i===tr)return e.UNSIGNED_INT;if(i===Di)return e.FLOAT;if(i===Fo)return e.HALF_FLOAT;if(i===I0)return e.ALPHA;if(i===F0)return e.RGB;if(i===Zn)return e.RGBA;if(i===Mo)return e.DEPTH_COMPONENT;if(i===yo)return e.DEPTH_STENCIL;if(i===H0)return e.RED;if(i===Qh)return e.RED_INTEGER;if(i===G0)return e.RG;if(i===Jh)return e.RG_INTEGER;if(i===$h)return e.RGBA_INTEGER;if(i===kl||i===Xl||i===Wl||i===ql)if(s===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ql)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===Sd||i===Md||i===yd)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===Td||i===bd)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ed||i===Td)return s===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ad||i===Rd||i===wd||i===Cd||i===Dd||i===Ud||i===Ld||i===Nd||i===Od||i===Pd||i===Bd||i===zd||i===Id||i===Fd)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ad)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ud)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ld)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Od)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Id)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===Hd||i===Gd)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return s===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===V0||i===Vd||i===kd||i===Xd)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class lx extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const xR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new lx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Hi({vertexShader:xR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new Xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yR extends Ms{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,x=null;const M=new MR,m={},u=n.getContextAttributes();let g=null,_=null;const v=[],b=[],w=new re;let R=null;const D=new Yn;D.viewport=new Le;const T=new Yn;T.viewport=new Le;const E=[D,T],C=new kE;let X=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let st=v[V];return st===void 0&&(st=new nf,v[V]=st),st.getTargetRaySpace()},this.getControllerGrip=function(V){let st=v[V];return st===void 0&&(st=new nf,v[V]=st),st.getGripSpace()},this.getHand=function(V){let st=v[V];return st===void 0&&(st=new nf,v[V]=st),st.getHandSpace()};function Y(V){const st=b.indexOf(V.inputSource);if(st===-1)return;const nt=v[st];nt!==void 0&&(nt.update(V.inputSource,V.frame,c||s),nt.dispatchEvent({type:V.type,data:V.inputSource}))}function K(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",K),a.removeEventListener("inputsourceschange",L);for(let V=0;V<v.length;V++){const st=b[V];st!==null&&(b[V]=null,v[V].disconnect(st))}X=null,k=null,M.reset();for(const V in m)delete m[V];t.setRenderTarget(g),p=null,f=null,h=null,a=null,_=null,Vt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(V){if(a=V,a!==null){if(g=t.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",K),a.addEventListener("inputsourceschange",L),u.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(a,n)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Mt=null,bt=null;u.depth&&(bt=u.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,nt=u.stencil?yo:Mo,Mt=u.stencil?So:tr);const Nt={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:r};f=h.createProjectionLayer(Nt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new er(f.textureWidth,f.textureHeight,{format:Zn,type:Ii,depthTexture:new ex(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const nt={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,nt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new er(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Vt.setContext(a),Vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function L(V){for(let st=0;st<V.removed.length;st++){const nt=V.removed[st],Mt=b.indexOf(nt);Mt>=0&&(b[Mt]=null,v[Mt].disconnect(nt))}for(let st=0;st<V.added.length;st++){const nt=V.added[st];let Mt=b.indexOf(nt);if(Mt===-1){for(let Nt=0;Nt<v.length;Nt++)if(Nt>=b.length){b.push(nt),Mt=Nt;break}else if(b[Nt]===null){b[Nt]=nt,Mt=Nt;break}if(Mt===-1)break}const bt=v[Mt];bt&&bt.connect(nt)}}const z=new G,O=new G;function j(V,st,nt){z.setFromMatrixPosition(st.matrixWorld),O.setFromMatrixPosition(nt.matrixWorld);const Mt=z.distanceTo(O),bt=st.projectionMatrix.elements,Nt=nt.projectionMatrix.elements,ve=bt[14]/(bt[10]-1),Bt=bt[14]/(bt[10]+1),U=(bt[9]+1)/bt[5],he=(bt[9]-1)/bt[5],Rt=(bt[8]-1)/bt[0],Jt=(Nt[8]+1)/Nt[0],Tt=ve*Rt,xe=ve*Jt,mt=Mt/(-Rt+Jt),kt=mt*-Rt;if(st.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(kt),V.translateZ(mt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),bt[10]===-1)V.projectionMatrix.copy(st.projectionMatrix),V.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ve=ve+mt,Ce=Bt+mt,A=Tt-kt,S=xe+(Mt-kt),I=U*Bt/Ce*Ve,q=he*Bt/Ce*Ve;V.projectionMatrix.makePerspective(A,S,I,q,Ve,Ce),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function $(V,st){st===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(st.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(a===null)return;let st=V.near,nt=V.far;M.texture!==null&&(M.depthNear>0&&(st=M.depthNear),M.depthFar>0&&(nt=M.depthFar)),C.near=T.near=D.near=st,C.far=T.far=D.far=nt,(X!==C.near||k!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),X=C.near,k=C.far),C.layers.mask=V.layers.mask|6,D.layers.mask=C.layers.mask&3,T.layers.mask=C.layers.mask&5;const Mt=V.parent,bt=C.cameras;$(C,Mt);for(let Nt=0;Nt<bt.length;Nt++)$(bt[Nt],Mt);bt.length===2?j(C,D,T):C.projectionMatrix.copy(D.projectionMatrix),dt(V,C,Mt)};function dt(V,st,nt){nt===null?V.matrix.copy(st.matrixWorld):(V.matrix.copy(nt.matrixWorld),V.matrix.invert(),V.matrix.multiply(st.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(st.projectionMatrix),V.projectionMatrixInverse.copy(st.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Wd*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)},this.getCameraTexture=function(V){return m[V]};let Et=null;function Lt(V,st){if(d=st.getViewerPose(c||s),x=st,d!==null){const nt=d.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Mt=!1;nt.length!==C.cameras.length&&(C.cameras.length=0,Mt=!0);for(let Bt=0;Bt<nt.length;Bt++){const U=nt[Bt];let he=null;if(p!==null)he=p.getViewport(U);else{const Jt=h.getViewSubImage(f,U);he=Jt.viewport,Bt===0&&(t.setRenderTargetTextures(_,Jt.colorTexture,Jt.depthStencilTexture),t.setRenderTarget(_))}let Rt=E[Bt];Rt===void 0&&(Rt=new Yn,Rt.layers.enable(Bt),Rt.viewport=new Le,E[Bt]=Rt),Rt.matrix.fromArray(U.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(U.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(he.x,he.y,he.width,he.height),Bt===0&&(C.matrix.copy(Rt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Mt===!0&&C.cameras.push(Rt)}const bt=a.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&h){const Bt=h.getDepthInformation(nt[0]);Bt&&Bt.isValid&&Bt.texture&&M.init(Bt,a.renderState)}if(bt&&bt.includes("camera-access")&&(t.state.unbindTexture(),h))for(let Bt=0;Bt<nt.length;Bt++){const U=nt[Bt].camera;if(U){let he=m[U];he||(he=new lx,m[U]=he);const Rt=h.getCameraImage(U);he.sourceTexture=Rt}}}for(let nt=0;nt<v.length;nt++){const Mt=b[nt],bt=v[nt];Mt!==null&&bt!==void 0&&bt.update(Mt,st,c||s)}Et&&Et(V,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),x=null}const Vt=new ix;Vt.setAnimationLoop(Lt),this.setAnimationLoop=function(V){Et=V},this.dispose=function(){}}}const La=new Fi,ER=new Ie;function TR(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Q0(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),M(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===dn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===dn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=t.get(u),_=g.envMap,v=g.envMapRotation;_&&(m.envMap.value=_,La.copy(v),La.x*=-1,La.y*=-1,La.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(La.y*=-1,La.z*=-1),m.envMapRotation.value.setFromMatrix4(ER.makeRotationFromEuler(La)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===dn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function bR(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const v=_.program;i.uniformBlockBinding(g,v)}function c(g,_){let v=a[g.id];v===void 0&&(x(g),v=d(g),a[g.id]=v,g.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(g,b);const w=t.render.frame;r[g.id]!==w&&(f(g),r[g.id]=w)}function d(g){const _=h();g.__bindingPointIndex=_;const v=e.createBuffer(),b=g.__size,w=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,b,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function h(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=a[g.id],v=g.uniforms,b=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let w=0,R=v.length;w<R;w++){const D=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,E=D.length;T<E;T++){const C=D[T];if(p(C,w,T,b)===!0){const X=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let K=0;K<k.length;K++){const L=k[K],z=M(L);typeof L=="number"||typeof L=="boolean"?(C.__data[0]=L,e.bufferSubData(e.UNIFORM_BUFFER,X+Y,C.__data)):L.isMatrix3?(C.__data[0]=L.elements[0],C.__data[1]=L.elements[1],C.__data[2]=L.elements[2],C.__data[3]=0,C.__data[4]=L.elements[3],C.__data[5]=L.elements[4],C.__data[6]=L.elements[5],C.__data[7]=0,C.__data[8]=L.elements[6],C.__data[9]=L.elements[7],C.__data[10]=L.elements[8],C.__data[11]=0):(L.toArray(C.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,X,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,_,v,b){const w=g.value,R=_+"_"+v;if(b[R]===void 0)return typeof w=="number"||typeof w=="boolean"?b[R]=w:b[R]=w.clone(),!0;{const D=b[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return b[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function x(g){const _=g.uniforms;let v=0;const b=16;for(let R=0,D=_.length;R<D;R++){const T=Array.isArray(_[R])?_[R]:[_[R]];for(let E=0,C=T.length;E<C;E++){const X=T[E],k=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,K=k.length;Y<K;Y++){const L=k[Y],z=M(L),O=v%b,j=O%z.boundary,$=O+j;v+=j,$!==0&&b-$<z.storage&&(v+=b-$),X.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=z.storage}}}const w=v%b;return w>0&&(v+=b-w),g.__size=v,g.__cache={},this}function M(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const v=s.indexOf(_.__bindingPointIndex);s.splice(v,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete r[_.id]}function u(){for(const g in a)e.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class AR{constructor(t={}){const{canvas:n=uE(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const x=new Uint32Array(4),M=new Int32Array(4);let m=null,u=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=On;let w=0,R=0,D=null,T=-1,E=null;const C=new Le,X=new Le;let k=null;const Y=new ue(0);let K=0,L=n.width,z=n.height,O=1,j=null,$=null;const dt=new Le(0,0,L,z),Et=new Le(0,0,L,z);let Lt=!1;const Vt=new tx;let V=!1,st=!1;const nt=new Ie,Mt=new G,bt=new Le,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Bt(){return D===null?O:1}let U=i;function he(y,P){return n.getContext(y,P)}try{const y={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yh}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",pt,!1),n.addEventListener("webglcontextcreationerror",tt,!1),U===null){const P="webgl2";if(U=he(P,y),U===null)throw he(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Rt,Jt,Tt,xe,mt,kt,Ve,Ce,A,S,I,q,J,W,yt,rt,vt,xt,it,ft,Dt,St,ct,It;function N(){Rt=new BA(U),Rt.init(),St=new vR(U,Rt),Jt=new CA(U,Rt,t,St),Tt=new gR(U,Rt),Jt.reversedDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),xe=new FA(U),mt=new iR,kt=new _R(U,Rt,Tt,mt,Jt,St,xe),Ve=new UA(v),Ce=new PA(v),A=new WE(U),ct=new RA(U,A),S=new zA(U,A,xe,ct),I=new GA(U,S,A,xe),it=new HA(U,Jt,kt),rt=new DA(mt),q=new nR(v,Ve,Ce,Rt,Jt,ct,rt),J=new TR(v,mt),W=new rR,yt=new fR(Rt),xt=new AA(v,Ve,Ce,Tt,I,p,l),vt=new pR(v,I,Jt),It=new bR(U,xe,Jt,Tt),ft=new wA(U,Rt,xe),Dt=new IA(U,Rt,xe),xe.programs=q.programs,v.capabilities=Jt,v.extensions=Rt,v.properties=mt,v.renderLists=W,v.shadowMap=vt,v.state=Tt,v.info=xe}N();const at=new yR(v,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=Rt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Rt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(y){y!==void 0&&(O=y,this.setSize(L,z,!1))},this.getSize=function(y){return y.set(L,z)},this.setSize=function(y,P,F=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=y,z=P,n.width=Math.floor(y*O),n.height=Math.floor(P*O),F===!0&&(n.style.width=y+"px",n.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(L*O,z*O).floor()},this.setDrawingBufferSize=function(y,P,F){L=y,z=P,O=F,n.width=Math.floor(y*F),n.height=Math.floor(P*F),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(dt)},this.setViewport=function(y,P,F,H){y.isVector4?dt.set(y.x,y.y,y.z,y.w):dt.set(y,P,F,H),Tt.viewport(C.copy(dt).multiplyScalar(O).round())},this.getScissor=function(y){return y.copy(Et)},this.setScissor=function(y,P,F,H){y.isVector4?Et.set(y.x,y.y,y.z,y.w):Et.set(y,P,F,H),Tt.scissor(X.copy(Et).multiplyScalar(O).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(y){Tt.setScissorTest(Lt=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){$=y},this.getClearColor=function(y){return y.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,F=!0){let H=0;if(y){let B=!1;if(D!==null){const et=D.texture.format;B=et===$h||et===Jh||et===Qh}if(B){const et=D.texture.type,ut=et===Ii||et===tr||et===xo||et===So||et===Zh||et===Kh,gt=xt.getClearColor(),ht=xt.getClearAlpha(),Ct=gt.r,Ot=gt.g,At=gt.b;ut?(x[0]=Ct,x[1]=Ot,x[2]=At,x[3]=ht,U.clearBufferuiv(U.COLOR,0,x)):(M[0]=Ct,M[1]=Ot,M[2]=At,M[3]=ht,U.clearBufferiv(U.COLOR,0,M))}else H|=U.COLOR_BUFFER_BIT}P&&(H|=U.DEPTH_BUFFER_BIT),F&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",tt,!1),xt.dispose(),W.dispose(),yt.dispose(),mt.dispose(),Ve.dispose(),Ce.dispose(),I.dispose(),ct.dispose(),It.dispose(),q.dispose(),at.dispose(),at.removeEventListener("sessionstart",$n),at.removeEventListener("sessionend",ip),Ta.stop()};function ot(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const y=xe.autoReset,P=vt.enabled,F=vt.autoUpdate,H=vt.needsUpdate,B=vt.type;N(),xe.autoReset=y,vt.enabled=P,vt.autoUpdate=F,vt.needsUpdate=H,vt.type=B}function tt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Q(y){const P=y.target;P.removeEventListener("dispose",Q),_t(P)}function _t(y){zt(y),mt.remove(y)}function zt(y){const P=mt.get(y).programs;P!==void 0&&(P.forEach(function(F){q.releaseProgram(F)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,F,H,B,et){P===null&&(P=Nt);const ut=B.isMesh&&B.matrixWorld.determinant()<0,gt=cx(y,P,F,H,B);Tt.setMaterial(H,ut);let ht=F.index,Ct=1;if(H.wireframe===!0){if(ht=S.getWireframeAttribute(F),ht===void 0)return;Ct=2}const Ot=F.drawRange,At=F.attributes.position;let Yt=Ot.start*Ct,se=(Ot.start+Ot.count)*Ct;et!==null&&(Yt=Math.max(Yt,et.start*Ct),se=Math.min(se,(et.start+et.count)*Ct)),ht!==null?(Yt=Math.max(Yt,0),se=Math.min(se,ht.count)):At!=null&&(Yt=Math.max(Yt,0),se=Math.min(se,At.count));const Ae=se-Yt;if(Ae<0||Ae===1/0)return;ct.setup(B,H,gt,F,ht);let ge,fe=ft;if(ht!==null&&(ge=A.get(ht),fe=Dt,fe.setIndex(ge)),B.isMesh)H.wireframe===!0?(Tt.setLineWidth(H.wireframeLinewidth*Bt()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(B.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),Tt.setLineWidth(wt*Bt()),B.isLineSegments?fe.setMode(U.LINES):B.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else B.isPoints?fe.setMode(U.POINTS):B.isSprite&&fe.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))fe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const wt=B._multiDrawStarts,Ee=B._multiDrawCounts,Kt=B._multiDrawCount,gn=ht?A.get(ht).bytesPerElement:1,or=mt.get(H).currentProgram.getUniforms();for(let _n=0;_n<Kt;_n++)or.setValue(U,"_gl_DrawID",_n),fe.render(wt[_n]/gn,Ee[_n])}else if(B.isInstancedMesh)fe.renderInstances(Yt,Ae,B.count);else if(F.isInstancedBufferGeometry){const wt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ee=Math.min(F.instanceCount,wt);fe.renderInstances(Yt,Ae,Ee)}else fe.render(Yt,Ae)};function pe(y,P,F){y.transparent===!0&&y.side===Ti&&y.forceSinglePass===!1?(y.side=dn,y.needsUpdate=!0,qo(y,P,F),y.side=Ma,y.needsUpdate=!0,qo(y,P,F),y.side=Ti):qo(y,P,F)}this.compile=function(y,P,F=null){F===null&&(F=y),u=yt.get(F),u.init(P),_.push(u),F.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),y!==F&&y.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const H=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const et=B.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const gt=et[ut];pe(gt,F,B),H.add(gt)}else pe(et,F,B),H.add(et)}),u=_.pop(),H},this.compileAsync=function(y,P,F=null){const H=this.compile(y,P,F);return new Promise(B=>{function et(){if(H.forEach(function(ut){mt.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){B(y);return}setTimeout(et,10)}Rt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ne=null;function hi(y){ne&&ne(y)}function $n(){Ta.stop()}function ip(){Ta.start()}const Ta=new ix;Ta.setAnimationLoop(hi),typeof self<"u"&&Ta.setContext(self),this.setAnimationLoop=function(y){ne=y,at.setAnimationLoop(y),y===null?Ta.stop():Ta.start()},at.addEventListener("sessionstart",$n),at.addEventListener("sessionend",ip),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(P),P=at.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,P,D),u=yt.get(y,_.length),u.init(P),_.push(u),nt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Vt.setFromProjectionMatrix(nt,ri,P.reversedDepth),st=this.localClippingEnabled,V=rt.init(this.clippingPlanes,st),m=W.get(y,g.length),m.init(),g.push(m),at.enabled===!0&&at.isPresenting===!0){const et=v.xr.getDepthSensingMesh();et!==null&&Kc(et,P,-1/0,v.sortObjects)}Kc(y,P,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,$),ve=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,ve&&xt.addToRenderList(m,y),this.info.render.frame++,V===!0&&rt.beginShadows();const F=u.state.shadowsArray;vt.render(F,y,P),V===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,B=m.transmissive;if(u.setupLights(),P.isArrayCamera){const et=P.cameras;if(B.length>0)for(let ut=0,gt=et.length;ut<gt;ut++){const ht=et[ut];rp(H,B,y,ht)}ve&&xt.render(y);for(let ut=0,gt=et.length;ut<gt;ut++){const ht=et[ut];ap(m,y,ht,ht.viewport)}}else B.length>0&&rp(H,B,y,P),ve&&xt.render(y),ap(m,y,P);D!==null&&R===0&&(kt.updateMultisampleRenderTarget(D),kt.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(v,y,P),ct.resetDefaultState(),T=-1,E=null,_.pop(),_.length>0?(u=_[_.length-1],V===!0&&rt.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Kc(y,P,F,H){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Vt.intersectsSprite(y)){H&&bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(nt);const ut=I.update(y),gt=y.material;gt.visible&&m.push(y,ut,gt,F,bt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Vt.intersectsObject(y))){const ut=I.update(y),gt=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),bt.copy(y.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),bt.copy(ut.boundingSphere.center)),bt.applyMatrix4(y.matrixWorld).applyMatrix4(nt)),Array.isArray(gt)){const ht=ut.groups;for(let Ct=0,Ot=ht.length;Ct<Ot;Ct++){const At=ht[Ct],Yt=gt[At.materialIndex];Yt&&Yt.visible&&m.push(y,ut,Yt,F,bt.z,At)}}else gt.visible&&m.push(y,ut,gt,F,bt.z,null)}}const et=y.children;for(let ut=0,gt=et.length;ut<gt;ut++)Kc(et[ut],P,F,H)}function ap(y,P,F,H){const B=y.opaque,et=y.transmissive,ut=y.transparent;u.setupLightsView(F),V===!0&&rt.setGlobalState(v.clippingPlanes,F),H&&Tt.viewport(C.copy(H)),B.length>0&&Wo(B,P,F),et.length>0&&Wo(et,P,F),ut.length>0&&Wo(ut,P,F),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function rp(y,P,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new er(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?Fo:Ii,minFilter:Ga,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const et=u.state.transmissionRenderTarget[H.id],ut=H.viewport||C;et.setSize(ut.z*v.transmissionResolutionScale,ut.w*v.transmissionResolutionScale);const gt=v.getRenderTarget(),ht=v.getActiveCubeFace(),Ct=v.getActiveMipmapLevel();v.setRenderTarget(et),v.getClearColor(Y),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),ve&&xt.render(F);const Ot=v.toneMapping;v.toneMapping=_a;const At=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),V===!0&&rt.setGlobalState(v.clippingPlanes,H),Wo(y,F,H),kt.updateMultisampleRenderTarget(et),kt.updateRenderTargetMipmap(et),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let se=0,Ae=P.length;se<Ae;se++){const ge=P[se],fe=ge.object,wt=ge.geometry,Ee=ge.material,Kt=ge.group;if(Ee.side===Ti&&fe.layers.test(H.layers)){const gn=Ee.side;Ee.side=dn,Ee.needsUpdate=!0,sp(fe,F,H,wt,Ee,Kt),Ee.side=gn,Ee.needsUpdate=!0,Yt=!0}}Yt===!0&&(kt.updateMultisampleRenderTarget(et),kt.updateRenderTargetMipmap(et))}v.setRenderTarget(gt,ht,Ct),v.setClearColor(Y,K),At!==void 0&&(H.viewport=At),v.toneMapping=Ot}function Wo(y,P,F){const H=P.isScene===!0?P.overrideMaterial:null;for(let B=0,et=y.length;B<et;B++){const ut=y[B],gt=ut.object,ht=ut.geometry,Ct=ut.group;let Ot=ut.material;Ot.allowOverride===!0&&H!==null&&(Ot=H),gt.layers.test(F.layers)&&sp(gt,P,F,ht,Ot,Ct)}}function sp(y,P,F,H,B,et){y.onBeforeRender(v,P,F,H,B,et),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(v,P,F,H,y,et),B.transparent===!0&&B.side===Ti&&B.forceSinglePass===!1?(B.side=dn,B.needsUpdate=!0,v.renderBufferDirect(F,P,H,B,y,et),B.side=Ma,B.needsUpdate=!0,v.renderBufferDirect(F,P,H,B,y,et),B.side=Ti):v.renderBufferDirect(F,P,H,B,y,et),y.onAfterRender(v,P,F,H,B,et)}function qo(y,P,F){P.isScene!==!0&&(P=Nt);const H=mt.get(y),B=u.state.lights,et=u.state.shadowsArray,ut=B.state.version,gt=q.getParameters(y,B.state,et,P,F),ht=q.getProgramCacheKey(gt);let Ct=H.programs;H.environment=y.isMeshStandardMaterial?P.environment:null,H.fog=P.fog,H.envMap=(y.isMeshStandardMaterial?Ce:Ve).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Ct===void 0&&(y.addEventListener("dispose",Q),Ct=new Map,H.programs=Ct);let Ot=Ct.get(ht);if(Ot!==void 0){if(H.currentProgram===Ot&&H.lightsStateVersion===ut)return lp(y,gt),Ot}else gt.uniforms=q.getUniforms(y),y.onBeforeCompile(gt,v),Ot=q.acquireProgram(gt,ht),Ct.set(ht,Ot),H.uniforms=gt.uniforms;const At=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=rt.uniform),lp(y,gt),H.needsLights=fx(y),H.lightsStateVersion=ut,H.needsLights&&(At.ambientLightColor.value=B.state.ambient,At.lightProbe.value=B.state.probe,At.directionalLights.value=B.state.directional,At.directionalLightShadows.value=B.state.directionalShadow,At.spotLights.value=B.state.spot,At.spotLightShadows.value=B.state.spotShadow,At.rectAreaLights.value=B.state.rectArea,At.ltc_1.value=B.state.rectAreaLTC1,At.ltc_2.value=B.state.rectAreaLTC2,At.pointLights.value=B.state.point,At.pointLightShadows.value=B.state.pointShadow,At.hemisphereLights.value=B.state.hemi,At.directionalShadowMap.value=B.state.directionalShadowMap,At.directionalShadowMatrix.value=B.state.directionalShadowMatrix,At.spotShadowMap.value=B.state.spotShadowMap,At.spotLightMatrix.value=B.state.spotLightMatrix,At.spotLightMap.value=B.state.spotLightMap,At.pointShadowMap.value=B.state.pointShadowMap,At.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Ot,H.uniformsList=null,Ot}function op(y){if(y.uniformsList===null){const P=y.currentProgram.getUniforms();y.uniformsList=jl.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function lp(y,P){const F=mt.get(y);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function cx(y,P,F,H,B){P.isScene!==!0&&(P=Nt),kt.resetTextureUnits();const et=P.fog,ut=H.isMeshStandardMaterial?P.environment:null,gt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ds,ht=(H.isMeshStandardMaterial?Ce:Ve).get(H.envMap||ut),Ct=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ot=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!F.morphAttributes.position,Yt=!!F.morphAttributes.normal,se=!!F.morphAttributes.color;let Ae=_a;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const ge=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=ge!==void 0?ge.length:0,wt=mt.get(H),Ee=u.state.lights;if(V===!0&&(st===!0||y!==E)){const en=y===E&&H.id===T;rt.setState(H,y,en)}let Kt=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ee.state.version||wt.outputColorSpace!==gt||B.isBatchedMesh&&wt.batching===!1||!B.isBatchedMesh&&wt.batching===!0||B.isBatchedMesh&&wt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&wt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&wt.instancing===!1||!B.isInstancedMesh&&wt.instancing===!0||B.isSkinnedMesh&&wt.skinning===!1||!B.isSkinnedMesh&&wt.skinning===!0||B.isInstancedMesh&&wt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&wt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&wt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&wt.instancingMorph===!1&&B.morphTexture!==null||wt.envMap!==ht||H.fog===!0&&wt.fog!==et||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==rt.numPlanes||wt.numIntersection!==rt.numIntersection)||wt.vertexAlphas!==Ct||wt.vertexTangents!==Ot||wt.morphTargets!==At||wt.morphNormals!==Yt||wt.morphColors!==se||wt.toneMapping!==Ae||wt.morphTargetsCount!==fe)&&(Kt=!0):(Kt=!0,wt.__version=H.version);let gn=wt.currentProgram;Kt===!0&&(gn=qo(H,P,B));let or=!1,_n=!1,Es=!1;const Te=gn.getUniforms(),Dn=wt.uniforms;if(Tt.useProgram(gn.program)&&(or=!0,_n=!0,Es=!0),H.id!==T&&(T=H.id,_n=!0),or||E!==y){Tt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Te.setValue(U,"projectionMatrix",y.projectionMatrix),Te.setValue(U,"viewMatrix",y.matrixWorldInverse);const on=Te.map.cameraPosition;on!==void 0&&on.setValue(U,Mt.setFromMatrixPosition(y.matrixWorld)),Jt.logarithmicDepthBuffer&&Te.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Te.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,_n=!0,Es=!0)}if(B.isSkinnedMesh){Te.setOptional(U,B,"bindMatrix"),Te.setOptional(U,B,"bindMatrixInverse");const en=B.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Te.setValue(U,"boneTexture",en.boneTexture,kt))}B.isBatchedMesh&&(Te.setOptional(U,B,"batchingTexture"),Te.setValue(U,"batchingTexture",B._matricesTexture,kt),Te.setOptional(U,B,"batchingIdTexture"),Te.setValue(U,"batchingIdTexture",B._indirectTexture,kt),Te.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&Te.setValue(U,"batchingColorTexture",B._colorsTexture,kt));const Un=F.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&it.update(B,F,gn),(_n||wt.receiveShadow!==B.receiveShadow)&&(wt.receiveShadow=B.receiveShadow,Te.setValue(U,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Dn.envMap.value=ht,Dn.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&P.environment!==null&&(Dn.envMapIntensity.value=P.environmentIntensity),_n&&(Te.setValue(U,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&ux(Dn,Es),et&&H.fog===!0&&J.refreshFogUniforms(Dn,et),J.refreshMaterialUniforms(Dn,H,O,z,u.state.transmissionRenderTarget[y.id]),jl.upload(U,op(wt),Dn,kt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(jl.upload(U,op(wt),Dn,kt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Te.setValue(U,"center",B.center),Te.setValue(U,"modelViewMatrix",B.modelViewMatrix),Te.setValue(U,"normalMatrix",B.normalMatrix),Te.setValue(U,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const en=H.uniformsGroups;for(let on=0,Qc=en.length;on<Qc;on++){const ba=en[on];It.update(ba,gn),It.bind(ba,gn)}}return gn}function ux(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function fx(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,P,F){const H=mt.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),mt.get(y.texture).__webglTexture=P,mt.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:F,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){const F=mt.get(y);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0};const dx=U.createFramebuffer();this.setRenderTarget=function(y,P=0,F=0){D=y,w=P,R=F;let H=!0,B=null,et=!1,ut=!1;if(y){const ht=mt.get(y);if(ht.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(ht.__webglFramebuffer===void 0)kt.setupRenderTarget(y);else if(ht.__hasExternalTextures)kt.rebindTextures(y,mt.get(y.texture).__webglTexture,mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const At=y.depthTexture;if(ht.__boundDepthTexture!==At){if(At!==null&&mt.has(At)&&(y.width!==At.image.width||y.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(y)}}const Ct=y.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ut=!0);const Ot=mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ot[P])?B=Ot[P][F]:B=Ot[P],et=!0):y.samples>0&&kt.useMultisampledRTT(y)===!1?B=mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ot)?B=Ot[F]:B=Ot,C.copy(y.viewport),X.copy(y.scissor),k=y.scissorTest}else C.copy(dt).multiplyScalar(O).floor(),X.copy(Et).multiplyScalar(O).floor(),k=Lt;if(F!==0&&(B=dx),Tt.bindFramebuffer(U.FRAMEBUFFER,B)&&H&&Tt.drawBuffers(y,B),Tt.viewport(C),Tt.scissor(X),Tt.setScissorTest(k),et){const ht=mt.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,ht.__webglTexture,F)}else if(ut){const ht=P;for(let Ct=0;Ct<y.textures.length;Ct++){const Ot=mt.get(y.textures[Ct]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ct,Ot.__webglTexture,F,ht)}}else if(y!==null&&F!==0){const ht=mt.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,F)}T=-1},this.readRenderTargetPixels=function(y,P,F,H,B,et,ut,gt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ut!==void 0&&(ht=ht[ut]),ht){Tt.bindFramebuffer(U.FRAMEBUFFER,ht);try{const Ct=y.textures[gt],Ot=Ct.format,At=Ct.type;if(!Jt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-H&&F>=0&&F<=y.height-B&&(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt),U.readPixels(P,F,H,B,St.convert(Ot),St.convert(At),et))}finally{const Ct=D!==null?mt.get(D).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(y,P,F,H,B,et,ut,gt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ut!==void 0&&(ht=ht[ut]),ht)if(P>=0&&P<=y.width-H&&F>=0&&F<=y.height-B){Tt.bindFramebuffer(U.FRAMEBUFFER,ht);const Ct=y.textures[gt],Ot=Ct.format,At=Ct.type;if(!Jt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Yt),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt),U.readPixels(P,F,H,B,St.convert(Ot),St.convert(At),0);const se=D!==null?mt.get(D).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,se);const Ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await fE(U,Ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer(Yt),U.deleteSync(Ae),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,F=0){const H=Math.pow(2,-F),B=Math.floor(y.image.width*H),et=Math.floor(y.image.height*H),ut=P!==null?P.x:0,gt=P!==null?P.y:0;kt.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,ut,gt,B,et),Tt.unbindTexture()};const hx=U.createFramebuffer(),px=U.createFramebuffer();this.copyTextureToTexture=function(y,P,F=null,H=null,B=0,et=null){et===null&&(B!==0?(Kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=B,B=0):et=0);let ut,gt,ht,Ct,Ot,At,Yt,se,Ae;const ge=y.isCompressedTexture?y.mipmaps[et]:y.image;if(F!==null)ut=F.max.x-F.min.x,gt=F.max.y-F.min.y,ht=F.isBox3?F.max.z-F.min.z:1,Ct=F.min.x,Ot=F.min.y,At=F.isBox3?F.min.z:0;else{const Un=Math.pow(2,-B);ut=Math.floor(ge.width*Un),gt=Math.floor(ge.height*Un),y.isDataArrayTexture?ht=ge.depth:y.isData3DTexture?ht=Math.floor(ge.depth*Un):ht=1,Ct=0,Ot=0,At=0}H!==null?(Yt=H.x,se=H.y,Ae=H.z):(Yt=0,se=0,Ae=0);const fe=St.convert(P.format),wt=St.convert(P.type);let Ee;P.isData3DTexture?(kt.setTexture3D(P,0),Ee=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(kt.setTexture2DArray(P,0),Ee=U.TEXTURE_2D_ARRAY):(kt.setTexture2D(P,0),Ee=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const Kt=U.getParameter(U.UNPACK_ROW_LENGTH),gn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),or=U.getParameter(U.UNPACK_SKIP_PIXELS),_n=U.getParameter(U.UNPACK_SKIP_ROWS),Es=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,At);const Te=y.isDataArrayTexture||y.isData3DTexture,Dn=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){const Un=mt.get(y),en=mt.get(P),on=mt.get(Un.__renderTarget),Qc=mt.get(en.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,on.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qc.__webglFramebuffer);for(let ba=0;ba<ht;ba++)Te&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.get(y).__webglTexture,B,At+ba),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.get(P).__webglTexture,et,Ae+ba)),U.blitFramebuffer(Ct,Ot,ut,gt,Yt,se,ut,gt,U.DEPTH_BUFFER_BIT,U.NEAREST);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||mt.has(y)){const Un=mt.get(y),en=mt.get(P);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,hx),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,px);for(let on=0;on<ht;on++)Te?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Un.__webglTexture,B,At+on):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Un.__webglTexture,B),Dn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,et,Ae+on):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,et),B!==0?U.blitFramebuffer(Ct,Ot,ut,gt,Yt,se,ut,gt,U.COLOR_BUFFER_BIT,U.NEAREST):Dn?U.copyTexSubImage3D(Ee,et,Yt,se,Ae+on,Ct,Ot,ut,gt):U.copyTexSubImage2D(Ee,et,Yt,se,Ct,Ot,ut,gt);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Dn?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Ee,et,Yt,se,Ae,ut,gt,ht,fe,wt,ge.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,et,Yt,se,Ae,ut,gt,ht,fe,ge.data):U.texSubImage3D(Ee,et,Yt,se,Ae,ut,gt,ht,fe,wt,ge):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,et,Yt,se,ut,gt,fe,wt,ge.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,et,Yt,se,ge.width,ge.height,fe,ge.data):U.texSubImage2D(U.TEXTURE_2D,et,Yt,se,ut,gt,fe,wt,ge);U.pixelStorei(U.UNPACK_ROW_LENGTH,Kt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,or),U.pixelStorei(U.UNPACK_SKIP_ROWS,_n),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Es),et===0&&P.generateMipmaps&&U.generateMipmap(Ee),Tt.unbindTexture()},this.copyTextureToTexture3D=function(y,P,F=null,H=null,B=0){return Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,P,F,H,B)},this.initRenderTarget=function(y){mt.get(y).__webglFramebuffer===void 0&&kt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?kt.setTextureCube(y,0):y.isData3DTexture?kt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?kt.setTexture2DArray(y,0):kt.setTexture2D(y,0),Tt.unbindTexture()},this.resetState=function(){w=0,R=0,D=null,Tt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Qt._getUnpackColorSpace()}}const RR=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,wR=`
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uResolution;
  uniform float uTime;

  // Simple hash function for building heights
  float hash(float n) { 
    return fract(sin(n) * 43758.5453123); 
  }

  // Generate building height for a given building ID
  float buildingHeight(float id) {
    float baseline = 0.25; // Ground level (halfway between 0.15 and 0.35)
    
    // Every 3-6 buildings, return to baseline to establish ground (more frequent)
    float groundFreq = 3.0 + 3.0 * hash(floor(id / 5.0));
    if (mod(id, groundFreq) < 1.0) {
      return baseline;
    }
    
    // Normal building heights with minimum height difference
    float rawHeight = hash(id * 17.31);
    // Quantize to minimum steps for more building-like appearance
    float steps = 8.0; // Number of height levels
    float quantizedHeight = floor(rawHeight * steps) / steps;
    
    // Adjust building height calculation to maintain max height at ~0.9
    return baseline + 0.1 + 0.55 * quantizedHeight; // Max height remains ~0.9
  }



  // Distance to a line segment from point A to point B in screen space
  float distanceToSegment(vec2 p, vec2 a, vec2 b, vec2 resolution) {
    // Convert to screen space for consistent thickness
    vec2 screenP = p * resolution;
    vec2 screenA = a * resolution;
    vec2 screenB = b * resolution;
    
    vec2 pa = screenP - screenA;
    vec2 ba = screenB - screenA;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    float dist = length(pa - ba * h);
    
    // Convert back to UV space
    return dist / min(resolution.x, resolution.y);
  }

  // Check if point is inside a rectangle
  bool isInRect(vec2 p, vec2 center, vec2 size) {
    vec2 d = abs(p - center) - size * 0.5;
    return d.x <= 0.0 && d.y <= 0.0;
  }

  // Pseudo-random based on vec3
  float hash3(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453123);
  }

  // Generate window pattern for a building
  float getWindowBrightness(vec2 uv, float buildingId, float x1, float x2, float buildingTop) {
    float baseline = 0.25;
    
    // Only draw windows if building is tall enough and not at baseline
    if (buildingTop <= baseline + 0.05) return 0.0;
    
    // First check: is the current pixel actually inside the building bounds?
    if (uv.x < x1 || uv.x > x2 || uv.y < baseline || uv.y > buildingTop) {
      return 0.0; // Outside building bounds
    }
    
    // Window grid parameters
    vec2 windowSize = vec2(0.020, 0.050); // Large window dimensions (2.5:1 ratio)
    vec2 windowSpacing = vec2(0.022, 0.055); // Tight spacing for thin separator lines
    
    // Building dimensions
    float buildingWidth = x2 - x1;
    float buildingHeight = buildingTop - baseline;
    
    // Building dimensions with padding from edges
    vec2 padding = vec2(0.015, 0.020); // Horizontal and vertical padding from building edges
    float paddedWidth = buildingWidth - 2.0 * padding.x;
    float paddedHeight = buildingHeight - 2.0 * padding.y;
    
    // Skip if building too small for padded windows
    if (paddedWidth <= 0.0 || paddedHeight <= 0.0) return 0.0;
    
    // Calculate window grid within padded area
    float windowsPerRow = floor(paddedWidth / windowSpacing.x);
    float windowRows = floor(paddedHeight / windowSpacing.y);
    
    // Skip if building too small for windows
    if (windowsPerRow < 1.0 || windowRows < 1.0) return 0.0;
    
    // Check if we're within the padded window area
    vec2 paddedStart = vec2(x1 + padding.x, baseline + padding.y);
    vec2 paddedEnd = vec2(x2 - padding.x, buildingTop - padding.y);
    
    if (uv.x < paddedStart.x || uv.x > paddedEnd.x || uv.y < paddedStart.y || uv.y > paddedEnd.y) {
      return 0.0; // Outside padded window area
    }
    
    // Convert UV to padded building-local coordinates (0-1 range within padded area)
    vec2 buildingUV = vec2(
      (uv.x - paddedStart.x) / paddedWidth,
      (uv.y - paddedStart.y) / paddedHeight
    );
    
    // Window grid coordinates
    vec2 windowGrid = buildingUV * vec2(windowsPerRow, windowRows);
    vec2 windowIndex = floor(windowGrid);
    vec2 windowLocalUV = fract(windowGrid);
    
    // Center the window in its cell
    vec2 windowCenter = vec2(0.5);
    // Calculate window size to nearly fill the grid cell, leaving thin separator lines
    vec2 cellSize = vec2(paddedWidth / windowsPerRow, paddedHeight / windowRows);
    vec2 windowHalfSize = min(windowSize / cellSize, vec2(0.95)) * 0.5; // Fill 95% of cell size for thin separators
    
    if (isInRect(windowLocalUV, windowCenter, windowHalfSize)) {
      // Seed per window cell
      float windowSeed = buildingId * 100.0 + windowIndex.x * 10.0 + windowIndex.y;
      
      // Re-randomize every 5 seconds independently per window
      float period = 5.0;
      float cycleIndex = floor(uTime / period);
      float rnd = hash3(vec3(windowSeed, cycleIndex, windowSeed * 0.13));
      
      // 35% lit, 65% dark per cycle
      bool lit = rnd > 0.65;
      
      return lit ? 0.8 : 0.35;
    }
    
    return 0.0; // Not in a window
  }

  void main() {
    vec2 uv = vUv;
    
    // Dark background
    vec3 bgColor = vec3(0.05, 0.05, 0.1);
    vec3 lineColor = vec3(0.3, 0.8, 1.0); // Cyan line
    
    // Animation parameters
    float scrollSpeed = 0.05;
    float buildingWidth = 0.1;
    
    // Current scroll position
    float scroll = uTime * scrollSpeed;
    
    // Find which buildings are visible on screen
    float startBuilding = floor((scroll - buildingWidth) / buildingWidth);
    float endBuilding = ceil((scroll + 1.0 + buildingWidth) / buildingWidth);
    
    float minDist = 1000.0;
    float windowBrightness = 0.0;
    
    // Draw line segments and windows for each building transition
    for (float i = startBuilding; i <= endBuilding; i += 1.0) {
      float x1 = i * buildingWidth - scroll;
      float x2 = (i + 1.0) * buildingWidth - scroll;
      
      float h1 = buildingHeight(i);
      float h2 = buildingHeight(i + 1.0);
      
      // Only draw if segment is potentially visible
      if (x2 >= -0.1 && x1 <= 1.1) {
        // Check for windows in this building
        float buildingWindowBrightness = getWindowBrightness(uv, i, x1, x2, h1);
        windowBrightness = max(windowBrightness, buildingWindowBrightness);
        
        // Horizontal segment (rooftop)
        vec2 hStart = vec2(x1, h1);
        vec2 hEnd = vec2(x2, h1);
        float hDist = distanceToSegment(uv, hStart, hEnd, uResolution);
        minDist = min(minDist, hDist);
        
        // Vertical segment (building edge)
        vec2 vStart = vec2(x2, h1);
        vec2 vEnd = vec2(x2, h2);
        float vDist = distanceToSegment(uv, vStart, vEnd, uResolution);
        minDist = min(minDist, vDist);
      }
    }
    
    // Line thickness and anti-aliasing (now in normalized screen space)
    float lineWidth = 3.0 / min(uResolution.x, uResolution.y);
    float aa = 1.0 / min(uResolution.x, uResolution.y);
    
    // Create the line
    float line = 1.0 - smoothstep(lineWidth - aa, lineWidth + aa, minDist);
    
    // Final color combining background, line, and windows
    vec3 color = bgColor;
    
    // Add windows first (so line can draw over them)
    if (windowBrightness > 0.0) {
      vec3 windowColor = lineColor * windowBrightness;
      color = mix(color, windowColor, windowBrightness);
    }
    
    // Add the line on top
    color = mix(color, lineColor, line);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;function CR(){const e=$t.useRef(null),t=$t.useRef(null),n=$t.useRef(null),i=$t.useRef(null);return $t.useEffect(()=>{const a=e.current,r=new zE,s=window.innerWidth,o=window.innerHeight,l=new nx(-1,1,1,-1,.1,10);l.position.z=1;const c=new AR({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setSize(s,o),c.setClearColor(855322,1),t.current=c,a.appendChild(c.domElement);const d=new Xo(2,2),h=new Hi({uniforms:{uResolution:{value:new re(s,o)},uTime:{value:0}},vertexShader:RR,fragmentShader:wR,depthTest:!1,depthWrite:!1});n.current=h;const f=new si(d,h);r.add(f);const p=()=>{const m=window.innerWidth,u=window.innerHeight;c.setSize(m,u),h.uniforms.uResolution.value.set(m,u)};window.addEventListener("resize",p);const x=performance.now(),M=()=>{const u=(performance.now()-x)/1e3;n.current&&(n.current.uniforms.uTime.value=u),c.render(r,l),i.current=requestAnimationFrame(M)};return M(),()=>{i.current&&cancelAnimationFrame(i.current),window.removeEventListener("resize",p),t.current&&t.current.dispose(),n.current&&n.current.dispose(),d.dispose(),c.domElement.parentElement===a&&a.removeChild(c.domElement)}},[]),Pt.jsx("div",{ref:e,style:{position:"fixed",inset:0,zIndex:-1,background:"#0d0d1a",pointerEvents:"none"},"aria-hidden":"true"})}function DR(){const e=$t.useRef(null),t=$t.useRef(null);return $t.useEffect(()=>{const n=e.current,i=n.getContext("2d"),a=()=>{n.width=window.innerWidth,n.height=window.innerHeight};a(),window.addEventListener("resize",a);const s="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?".split(""),o=14,l=Math.floor(n.width/o),c=[];for(let p=0;p<l;p++)c[p]=Math.random()*-100;let d=0;const h=80,f=p=>{if(p-d<h){t.current=requestAnimationFrame(f);return}d=p,i.fillStyle="rgba(0, 0, 0, 0.08)",i.fillRect(0,0,n.width,n.height),i.fillStyle="#0F4",i.font=`${o}px 'Courier New', monospace`;for(let x=0;x<c.length;x++){const M=s[Math.floor(Math.random()*s.length)],m=x*o,u=c[x]*o,g=Math.random()*.5+.5;i.fillStyle=`rgba(0, 255, 68, ${g})`,i.fillText(M,m,u),u>n.height&&Math.random()>.985&&(c[x]=Math.random()*-50),c[x]+=.5}t.current=requestAnimationFrame(f)};return f(performance.now()),()=>{t.current&&cancelAnimationFrame(t.current),window.removeEventListener("resize",a)}},[]),Pt.jsx("div",{style:{position:"fixed",inset:0,zIndex:-1,background:"#000000",pointerEvents:"none"},"aria-hidden":"true",children:Pt.jsx("canvas",{ref:e,style:{display:"block",width:"100%",height:"100%"}})})}function UR(){const e=$t.useRef(null),t=$t.useRef(null),n=$t.useRef(null),i=$t.useRef(null);return $t.useEffect(()=>{const a=e.current,r=t.current,s=n.current,o=r.getContext("2d"),l=s.getContext("2d");let c=0,d=0,h=1,f=-1,p=-1,x=!1,M=26,m=Math.sqrt(3)*M,u=1.5*M,g=m,_=[],v=null;function b(L,z){return getComputedStyle(document.documentElement).getPropertyValue(L).trim()||z}function w(L){const z=new Path2D,O=Math.PI/3;for(let j=0;j<6;j++){const $=O*j-Math.PI/6,dt=L*Math.cos($),Et=L*Math.sin($);j===0?z.moveTo(dt,Et):z.lineTo(dt,Et)}return z.closePath(),z}function R(L){let z=L>>>0;return()=>{z+=1831565813;let O=Math.imul(z^z>>>15,1|z);return O^=O+Math.imul(O^O>>>7,61|O),((O^O>>>14)>>>0)/4294967296}}function D(L,z){L.width=Math.floor(c*h),L.height=Math.floor(d*h),L.style.width=`${c}px`,L.style.height=`${d}px`,z.setTransform(h,0,0,h,0,0)}let T=-1e9;function E(){var Et;const L=a.getBoundingClientRect();c=Math.max(1,Math.floor(L.width)),d=Math.max(1,Math.floor(L.height)),h=Math.min(window.devicePixelRatio||1,1.25),D(r,o),D(s,l),M=Math.max(28,Math.min(44,Math.floor(c/36))),m=Math.sqrt(3)*M,u=1.5*M,g=m,v=w(M),_=[];const O=Math.floor((((Et=window.performance)==null?void 0:Et.timeOrigin)||Date.now())%2147483647),j=R(2654435761^O),$=Math.ceil(c/u)+2,dt=Math.ceil(d/(g*.75))+2;for(let Lt=0;Lt<dt;Lt++){const Vt=Lt*(g*.75),V=Lt%2===0?0:u*.5;for(let st=0;st<$;st++){const nt=st*u+V,Mt=j()*Math.PI*2,bt=(j()-.5)*.35,Nt=j()*Math.PI*2,ve=.05+.03*j(),Bt=.05+.1*j();_.push({cx:nt,cy:Vt,phase:Mt,jitter:bt,ampPhase:Nt,ampSpeed:ve,driftSpeed:Bt})}}o.clearRect(0,0,c,d),o.save(),o.strokeStyle=b("--terminal-border","#2b2442"),o.globalAlpha=.12,o.lineWidth=1,o.lineJoin="round";for(const Lt of _)o.save(),o.translate(Lt.cx,Lt.cy),o.stroke(v),o.restore();o.restore(),C(performance.now())}function C(L){if(L<T&&(T=L-1e3/30),L-T<1e3/30)return;T=L;const z=b("--terminal-command","#8fbafc");l.clearRect(0,0,c,d),l.strokeStyle=z,l.lineJoin="round";const O=L*.001,j=Math.PI*2*.25,$=M*4,dt=1/Math.max(.001,$);for(let Et=0;Et<_.length;Et++){const Lt=_[Et],Vt=Math.sin(j*O+Lt.phase+Lt.driftSpeed*O)*.5+.5,V=Math.sin(Math.PI*2*Lt.ampSpeed*O+Lt.ampPhase)*.5+.5,st=.5+.9*V;let nt=.1+.7*Vt*Math.min(st,1.4),Mt=V;if(x){const bt=Lt.cx-f,Nt=Lt.cy-p;let Bt=1-Math.hypot(bt,Nt)*dt;Bt>0&&(Bt=Bt*Bt,nt=nt*(1-Bt)+1*Bt,Mt=Mt*(1-Bt)+1*Bt)}l.save(),l.globalAlpha=Math.min(1,nt*(.35+.3*Mt)),l.lineWidth=1.7+1.3*Mt,l.translate(Lt.cx,Lt.cy),l.stroke(v),l.restore(),l.save(),l.globalAlpha=Math.min(1,nt),l.lineWidth=.95,l.translate(Lt.cx,Lt.cy),l.stroke(v),l.restore()}}function X(L){C(L),i.current=requestAnimationFrame(X)}function k(L){const z=a.getBoundingClientRect(),O=L.clientX-z.left,j=L.clientY-z.top;O>=0&&j>=0&&O<=z.width&&j<=z.height?(f=O,p=j,x=!0):x=!1}function Y(){x=!1}E(),X(0),window.addEventListener("mousemove",k,{passive:!0}),window.addEventListener("mouseleave",Y);const K=()=>E();return window.addEventListener("resize",K),()=>{i.current&&cancelAnimationFrame(i.current),window.removeEventListener("mousemove",k),window.removeEventListener("mouseleave",Y),window.removeEventListener("resize",K)}},[]),Pt.jsxs("div",{ref:e,style:{position:"absolute",inset:0,pointerEvents:"none"},children:[Pt.jsx("canvas",{ref:t,style:{position:"absolute",inset:0}}),Pt.jsx("canvas",{ref:n,style:{position:"absolute",inset:0}})]})}function LR(){const{currentBackground:e}=U0(),t=e==="matrix"?DR:e==="hex"?UR:CR;return Pt.jsxs("main",{className:"relative w-full h-screen overflow-hidden",children:[Pt.jsx("div",{className:"fixed inset-0 z-0",children:Pt.jsx(t,{})}),Pt.jsx("div",{className:"relative z-10 h-full",children:Pt.jsx(Sy,{})})]})}function NR(){return Pt.jsx(vy,{children:Pt.jsx(xy,{children:Pt.jsx(LR,{})})})}fy.createRoot(document.getElementById("root")).render(Pt.jsx(Jd.StrictMode,{children:Pt.jsx(NR,{})}));
