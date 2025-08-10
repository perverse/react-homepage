(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function Dg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ug={exports:{}},Cc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=Symbol.for("react.transitional.element"),mx=Symbol.for("react.fragment");function Lg(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:px,type:t,key:i,ref:e!==void 0?e:null,props:n}}Cc.Fragment=mx;Cc.jsx=Lg;Cc.jsxs=Lg;Ug.exports=Cc;var De=Ug.exports,Ng={exports:{}},Ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=Symbol.for("react.transitional.element"),gx=Symbol.for("react.portal"),_x=Symbol.for("react.fragment"),vx=Symbol.for("react.strict_mode"),xx=Symbol.for("react.profiler"),Sx=Symbol.for("react.consumer"),yx=Symbol.for("react.context"),Mx=Symbol.for("react.forward_ref"),Ex=Symbol.for("react.suspense"),Tx=Symbol.for("react.memo"),Og=Symbol.for("react.lazy"),lp=Symbol.iterator;function bx(t){return t===null||typeof t!="object"?null:(t=lp&&t[lp]||t["@@iterator"],typeof t=="function"?t:null)}var Pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bg=Object.assign,zg={};function ps(t,e,n){this.props=t,this.context=e,this.refs=zg,this.updater=n||Pg}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ig(){}Ig.prototype=ps.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=zg,this.updater=n||Pg}var Zd=jd.prototype=new Ig;Zd.constructor=jd;Bg(Zd,ps.prototype);Zd.isPureReactComponent=!0;var cp=Array.isArray,yt={H:null,A:null,T:null,S:null,V:null},Fg=Object.prototype.hasOwnProperty;function Kd(t,e,n,i,a,r){return n=r.ref,{$$typeof:Yd,type:t,key:e,ref:n!==void 0?n:null,props:r}}function Ax(t,e){return Kd(t.type,e,void 0,void 0,void 0,t.props)}function Qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yd}function Rx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var up=/\/+/g;function Jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Rx(""+t.key):e.toString(36)}function fp(){}function wx(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(fp,fp):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Tr(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Yd:case gx:s=!0;break;case Og:return s=t._init,Tr(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+Jc(t,0):i,cp(a)?(n="",s!=null&&(n=s.replace(up,"$&/")+"/"),Tr(a,e,n,"",function(c){return c})):a!=null&&(Qd(a)&&(a=Ax(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(up,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(cp(t))for(var l=0;l<t.length;l++)i=t[l],r=o+Jc(i,l),s+=Tr(i,e,n,r,a);else if(l=bx(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+Jc(i,l++),s+=Tr(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return Tr(wx(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function Yo(t,e,n){if(t==null)return t;var i=[],a=0;return Tr(t,i,"","",function(r){return e.call(n,r,a++)}),i}function Cx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dp=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Dx(){}Ge.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!Qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=ps;Ge.Fragment=_x;Ge.Profiler=xx;Ge.PureComponent=jd;Ge.StrictMode=vx;Ge.Suspense=Ex;Ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=yt;Ge.__COMPILER_RUNTIME={__proto__:null,c:function(t){return yt.H.useMemoCache(t)}};Ge.cache=function(t){return function(){return t.apply(null,arguments)}};Ge.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Bg({},t.props),a=t.key,r=void 0;if(e!=null)for(s in e.ref!==void 0&&(r=void 0),e.key!==void 0&&(a=""+e.key),e)!Fg.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return Kd(t.type,a,void 0,void 0,r,i)};Ge.createContext=function(t){return t={$$typeof:yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Sx,_context:t},t};Ge.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)Fg.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Kd(t,r,void 0,void 0,null,a)};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Mx,render:t}};Ge.isValidElement=Qd;Ge.lazy=function(t){return{$$typeof:Og,_payload:{_status:-1,_result:t},_init:Cx}};Ge.memo=function(t,e){return{$$typeof:Tx,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=yt.T,n={};yt.T=n;try{var i=t(),a=yt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Dx,dp)}catch(r){dp(r)}finally{yt.T=e}};Ge.unstable_useCacheRefresh=function(){return yt.H.useCacheRefresh()};Ge.use=function(t){return yt.H.use(t)};Ge.useActionState=function(t,e,n){return yt.H.useActionState(t,e,n)};Ge.useCallback=function(t,e){return yt.H.useCallback(t,e)};Ge.useContext=function(t){return yt.H.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t,e){return yt.H.useDeferredValue(t,e)};Ge.useEffect=function(t,e,n){var i=yt.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(t,e)};Ge.useId=function(){return yt.H.useId()};Ge.useImperativeHandle=function(t,e,n){return yt.H.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return yt.H.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return yt.H.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return yt.H.useMemo(t,e)};Ge.useOptimistic=function(t,e){return yt.H.useOptimistic(t,e)};Ge.useReducer=function(t,e,n){return yt.H.useReducer(t,e,n)};Ge.useRef=function(t){return yt.H.useRef(t)};Ge.useState=function(t){return yt.H.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return yt.H.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return yt.H.useTransition()};Ge.version="19.1.0";Ng.exports=Ge;var Xe=Ng.exports;const Hg=Dg(Xe);var Gg={exports:{}},Dc={},Vg={exports:{}},kg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,z){var O=L.length;L.push(z);e:for(;0<O;){var Z=O-1>>>1,$=L[Z];if(0<a($,z))L[Z]=z,L[O]=$,O=Z;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var z=L[0],O=L.pop();if(O!==z){L[0]=O;e:for(var Z=0,$=L.length,de=$>>>1;Z<de;){var Ee=2*(Z+1)-1,Ne=L[Ee],Ve=Ee+1,X=L[Ve];if(0>a(Ne,O))Ve<$&&0>a(X,Ne)?(L[Z]=X,L[Ve]=O,Z=Ve):(L[Z]=Ne,L[Ee]=O,Z=Ee);else if(Ve<$&&0>a(X,O))L[Z]=X,L[Ve]=O,Z=Ve;else break e}}return z}function a(L,z){var O=L.sortIndex-z.sortIndex;return O!==0?O:L.id-z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],h=1,d=null,f=3,p=!1,x=!1,S=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function v(L){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=L)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function A(L){if(S=!1,v(L),!x)if(n(l)!==null)x=!0,C||(C=!0,F());else{var z=n(c);z!==null&&Y(A,z.startTime-L)}}var C=!1,b=-1,D=5,T=-1;function M(){return m?!0:!(t.unstable_now()-T<D)}function w(){if(m=!1,C){var L=t.unstable_now();T=L;var z=!0;try{e:{x=!1,S&&(S=!1,g(b),b=-1),p=!0;var O=f;try{t:{for(v(L),d=n(l);d!==null&&!(d.expirationTime>L&&M());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,f=d.priorityLevel;var $=Z(d.expirationTime<=L);if(L=t.unstable_now(),typeof $=="function"){d.callback=$,v(L),z=!0;break t}d===n(l)&&i(l),v(L)}else i(l);d=n(l)}if(d!==null)z=!0;else{var de=n(c);de!==null&&Y(A,de.startTime-L),z=!1}}break e}finally{d=null,f=O,p=!1}z=void 0}}finally{z?F():C=!1}}}var F;if(typeof _=="function")F=function(){_(w)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,W=k.port2;k.port1.onmessage=w,F=function(){W.postMessage(null)}}else F=function(){u(w,0)};function Y(L,z){b=u(function(){L(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var O=f;f=z;try{return L()}finally{f=O}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var O=f;f=L;try{return z()}finally{f=O}},t.unstable_scheduleCallback=function(L,z,O){var Z=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Z+O:Z):O=Z,L){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=O+$,L={id:h++,callback:z,priorityLevel:L,startTime:O,expirationTime:$,sortIndex:-1},O>Z?(L.sortIndex=O,e(c,L),n(l)===null&&L===n(c)&&(S?(g(b),b=-1):S=!0,Y(A,O-Z))):(L.sortIndex=$,e(l,L),x||p||(x=!0,C||(C=!0,F()))),L},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(L){var z=f;return function(){var O=f;f=z;try{return L.apply(this,arguments)}finally{f=O}}}})(kg);Vg.exports=kg;var Ux=Vg.exports,Xg={exports:{}},sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx=Xe;function Wg(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Vi(){}var rn={d:{f:Vi,r:function(){throw Error(Wg(522))},D:Vi,C:Vi,L:Vi,m:Vi,X:Vi,S:Vi,M:Vi},p:0,findDOMNode:null},Nx=Symbol.for("react.portal");function Ox(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nx,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var ks=Lx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Uc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=rn;sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Wg(299));return Ox(t,e,null,n)};sn.flushSync=function(t){var e=ks.T,n=rn.p;try{if(ks.T=null,rn.p=2,t)return t()}finally{ks.T=e,rn.p=n,rn.d.f()}};sn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,rn.d.C(t,e))};sn.prefetchDNS=function(t){typeof t=="string"&&rn.d.D(t)};sn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Uc(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?rn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&rn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};sn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Uc(e.as,e.crossOrigin);rn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&rn.d.M(t)};sn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Uc(n,e.crossOrigin);rn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};sn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Uc(e.as,e.crossOrigin);rn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else rn.d.m(t)};sn.requestFormReset=function(t){rn.d.r(t)};sn.unstable_batchedUpdates=function(t,e){return t(e)};sn.useFormState=function(t,e,n){return ks.H.useFormState(t,e,n)};sn.useFormStatus=function(){return ks.H.useHostTransitionStatus()};sn.version="19.1.0";function qg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qg)}catch(t){console.error(t)}}qg(),Xg.exports=sn;var Px=Xg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft=Ux,Yg=Xe,Bx=Px;function K(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function jg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hp(t){if(Eo(t)!==t)throw Error(K(188))}function zx(t){var e=t.alternate;if(!e){if(e=Eo(t),e===null)throw Error(K(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return hp(a),t;if(r===i)return hp(a),e;r=r.sibling}throw Error(K(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?t:e}function Kg(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Kg(t),e!==null)return e;t=t.sibling}return null}var _t=Object.assign,Ix=Symbol.for("react.element"),jo=Symbol.for("react.transitional.element"),Is=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),Qg=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),Fx=Symbol.for("react.provider"),Jg=Symbol.for("react.consumer"),bi=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),hf=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy"),pf=Symbol.for("react.activity"),Hx=Symbol.for("react.memo_cache_sentinel"),pp=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var Gx=Symbol.for("react.client.reference");function mf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Gx?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wr:return"Fragment";case ff:return"Profiler";case Qg:return"StrictMode";case df:return"Suspense";case hf:return"SuspenseList";case pf:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Is:return"Portal";case bi:return(t.displayName||"Context")+".Provider";case Jg:return(t._context.displayName||"Context")+".Consumer";case Jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $d:return e=t.displayName||null,e!==null?e:mf(t.type)||"Memo";case Qi:e=t._payload,t=t._init;try{return mf(t(e))}catch{}}return null}var Fs=Array.isArray,Le=Yg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=Bx.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Va={pending:!1,data:null,method:null,action:null},gf=[],Cr=-1;function fi(t){return{current:t}}function Yt(t){0>Cr||(t.current=gf[Cr],gf[Cr]=null,Cr--)}function Mt(t,e){Cr++,gf[Cr]=t.current,t.current=e}var oi=fi(null),ao=fi(null),la=fi(null),Zl=fi(null);function Kl(t,e){switch(Mt(la,e),Mt(ao,t),Mt(oi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?xm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=xm(e),t=mv(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Yt(oi),Mt(oi,t)}function Jr(){Yt(oi),Yt(ao),Yt(la)}function _f(t){t.memoizedState!==null&&Mt(Zl,t);var e=oi.current,n=mv(e,t.type);e!==n&&(Mt(ao,t),Mt(oi,n))}function Ql(t){ao.current===t&&(Yt(oi),Yt(ao)),Zl.current===t&&(Yt(Zl),mo._currentValue=Va)}var vf=Object.prototype.hasOwnProperty,eh=Ft.unstable_scheduleCallback,$c=Ft.unstable_cancelCallback,Vx=Ft.unstable_shouldYield,kx=Ft.unstable_requestPaint,li=Ft.unstable_now,Xx=Ft.unstable_getCurrentPriorityLevel,$g=Ft.unstable_ImmediatePriority,e0=Ft.unstable_UserBlockingPriority,Jl=Ft.unstable_NormalPriority,Wx=Ft.unstable_LowPriority,t0=Ft.unstable_IdlePriority,qx=Ft.log,Yx=Ft.unstable_setDisableYieldValue,To=null,Tn=null;function aa(t){if(typeof qx=="function"&&Yx(t),Tn&&typeof Tn.setStrictMode=="function")try{Tn.setStrictMode(To,t)}catch{}}var bn=Math.clz32?Math.clz32:Kx,jx=Math.log,Zx=Math.LN2;function Kx(t){return t>>>=0,t===0?32:31-(jx(t)/Zx|0)|0}var Zo=256,Ko=4194304;function Na(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Lc(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Na(i):(s&=o,s!==0?a=Na(s):n||(n=o&~t,n!==0&&(a=Na(n))))):(o=i&~r,o!==0?a=Na(o):s!==0?a=Na(s):n||(n=i&~t,n!==0&&(a=Na(n)))),a===0?0:e!==0&&e!==a&&!(e&r)&&(r=a&-a,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:a}function bo(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Qx(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n0(){var t=Zo;return Zo<<=1,!(Zo&4194048)&&(Zo=256),t}function i0(){var t=Ko;return Ko<<=1,!(Ko&62914560)&&(Ko=4194304),t}function eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Jx(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var h=31-bn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&a0(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function a0(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-bn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194090}function r0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-bn(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function th(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function nh(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function s0(){var t=tt.p;return t!==0?t:(t=window.event,t===void 0?32:bv(t.type))}function $x(t,e){var n=tt.p;try{return tt.p=t,e()}finally{tt.p=n}}var Ma=Math.random().toString(36).slice(2),$t="__reactFiber$"+Ma,pn="__reactProps$"+Ma,ms="__reactContainer$"+Ma,xf="__reactEvents$"+Ma,eS="__reactListeners$"+Ma,tS="__reactHandles$"+Ma,mp="__reactResources$"+Ma,Ro="__reactMarker$"+Ma;function ih(t){delete t[$t],delete t[pn],delete t[xf],delete t[eS],delete t[tS]}function Dr(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ms]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mm(t);t!==null;){if(n=t[$t])return n;t=Mm(t)}return e}t=n,n=t.parentNode}return null}function gs(t){if(t=t[$t]||t[ms]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Hs(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(K(33))}function Gr(t){var e=t[mp];return e||(e=t[mp]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Wt(t){t[Ro]=!0}var o0=new Set,l0={};function nr(t,e){$r(t,e),$r(t+"Capture",e)}function $r(t,e){for(l0[t]=e,t=0;t<e.length;t++)o0.add(e[t])}var nS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gp={},_p={};function iS(t){return vf.call(_p,t)?!0:vf.call(gp,t)?!1:nS.test(t)?_p[t]=!0:(gp[t]=!0,!1)}function Dl(t,e,n){if(iS(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Qo(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function pi(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}var tu,vp;function br(t){if(tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tu=e&&e[1]||"",vp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tu+t+vp}var nu=!1;function iu(t,e){if(!t||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(t,[],d)}else{try{d.call()}catch(p){f=p}t.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=t())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=i&&0<=a);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?br(n):""}function aS(t){switch(t.tag){case 26:case 27:case 5:return br(t.type);case 16:return br("Lazy");case 13:return br("Suspense");case 19:return br("SuspenseList");case 0:case 15:return iu(t.type,!1);case 11:return iu(t.type.render,!1);case 1:return iu(t.type,!0);case 31:return br("Activity");default:return""}}function xp(t){try{var e="";do e+=aS(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Pn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rS(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $l(t){t._valueTracker||(t._valueTracker=rS(t))}function u0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=c0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ec(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var sS=/[\n"\\]/g;function In(t){return t.replace(sS,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Sf(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Pn(e)):t.value!==""+Pn(e)&&(t.value=""+Pn(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?yf(t,s,Pn(e)):n!=null?yf(t,s,Pn(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Pn(o):t.removeAttribute("name")}function f0(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;n=n!=null?""+Pn(n):"",e=e!=null?""+Pn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function yf(t,e,n){e==="number"&&ec(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Vr(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Pn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function d0(t,e,n){if(e!=null&&(e=""+Pn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Pn(n):""}function h0(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(K(92));if(Fs(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Pn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function es(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sp(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||oS.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function p0(t,e,n){if(e!=null&&typeof e!="object")throw Error(K(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&Sp(t,a,i)}else for(var r in e)e.hasOwnProperty(r)&&Sp(t,r,e[r])}function ah(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(t){return cS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Mf=null;function rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ur=null,kr=null;function yp(t){var e=gs(t);if(e&&(t=e.stateNode)){var n=t[pn]||null;e:switch(t=e.stateNode,e.type){case"input":if(Sf(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+In(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[pn]||null;if(!a)throw Error(K(90));Sf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&u0(i)}break e;case"textarea":d0(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Vr(t,!!n.multiple,e,!1)}}}var au=!1;function m0(t,e,n){if(au)return t(e,n);au=!0;try{var i=t(e);return i}finally{if(au=!1,(Ur!==null||kr!==null)&&(Vc(),Ur&&(e=Ur,t=kr,kr=Ur=null,yp(e),t)))for(e=0;e<t.length;e++)yp(t[e])}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var i=n[pn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(K(231,e,typeof n));return n}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=!1;if(Oi)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Ef=!1}var ra=null,sh=null,Ll=null;function g0(){if(Ll)return Ll;var t,e=sh,n=e.length,i,a="value"in ra?ra.value:ra.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return Ll=a.slice(t,1<i?1-i:void 0)}function Nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function Mp(){return!1}function mn(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Jo:Mp,this.isPropagationStopped=Mp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=mn(ir),wo=_t({},ir,{view:0,detail:0}),uS=mn(wo),ru,su,As,Oc=_t({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(ru=t.screenX-As.screenX,su=t.screenY-As.screenY):su=ru=0,As=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),Ep=mn(Oc),fS=_t({},Oc,{dataTransfer:0}),dS=mn(fS),hS=_t({},wo,{relatedTarget:0}),ou=mn(hS),pS=_t({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),mS=mn(pS),gS=_t({},ir,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_S=mn(gS),vS=_t({},ir,{data:0}),Tp=mn(vS),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yS[t])?!!e[t]:!1}function oh(){return MS}var ES=_t({},wo,{key:function(t){if(t.key){var e=xS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TS=mn(ES),bS=_t({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=mn(bS),AS=_t({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),RS=mn(AS),wS=_t({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),CS=mn(wS),DS=_t({},Oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),US=mn(DS),LS=_t({},ir,{newState:0,oldState:0}),NS=mn(LS),OS=[9,13,27,32],lh=Oi&&"CompositionEvent"in window,Xs=null;Oi&&"documentMode"in document&&(Xs=document.documentMode);var PS=Oi&&"TextEvent"in window&&!Xs,_0=Oi&&(!lh||Xs&&8<Xs&&11>=Xs),Ap=" ",Rp=!1;function v0(t,e){switch(t){case"keyup":return OS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function BS(t,e){switch(t){case"compositionend":return x0(e);case"keypress":return e.which!==32?null:(Rp=!0,Ap);case"textInput":return t=e.data,t===Ap&&Rp?null:t;default:return null}}function zS(t,e){if(Lr)return t==="compositionend"||!lh&&v0(t,e)?(t=g0(),Ll=sh=ra=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _0&&e.locale!=="ko"?null:e.data;default:return null}}var IS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IS[t.type]:e==="textarea"}function S0(t,e,n,i){Ur?kr?kr.push(i):kr=[i]:Ur=i,e=vc(e,"onChange"),0<e.length&&(n=new Nc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ws=null,so=null;function FS(t){dv(t,0)}function Pc(t){var e=Hs(t);if(u0(e))return t}function Cp(t,e){if(t==="change")return e}var y0=!1;if(Oi){var lu;if(Oi){var cu="oninput"in document;if(!cu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),cu=typeof Dp.oninput=="function"}lu=cu}else lu=!1;y0=lu&&(!document.documentMode||9<document.documentMode)}function Up(){Ws&&(Ws.detachEvent("onpropertychange",M0),so=Ws=null)}function M0(t){if(t.propertyName==="value"&&Pc(so)){var e=[];S0(e,so,t,rh(t)),m0(FS,e)}}function HS(t,e,n){t==="focusin"?(Up(),Ws=e,so=n,Ws.attachEvent("onpropertychange",M0)):t==="focusout"&&Up()}function GS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pc(so)}function VS(t,e){if(t==="click")return Pc(e)}function kS(t,e){if(t==="input"||t==="change")return Pc(e)}function XS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Cn=typeof Object.is=="function"?Object.is:XS;function oo(t,e){if(Cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!vf.call(e,a)||!Cn(t[a],e[a]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Np(t,e){var n=Lp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lp(n)}}function E0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?E0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ec(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ec(t.document)}return e}function ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var WS=Oi&&"documentMode"in document&&11>=document.documentMode,Nr=null,Tf=null,qs=null,bf=!1;function Op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bf||Nr==null||Nr!==ec(i)||(i=Nr,"selectionStart"in i&&ch(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qs&&oo(qs,i)||(qs=i,i=vc(Tf,"onSelect"),0<i.length&&(e=new Nc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Nr)))}function Aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Or={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},uu={},b0={};Oi&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function ar(t){if(uu[t])return uu[t];if(!Or[t])return t;var e=Or[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in b0)return uu[t]=e[n];return t}var A0=ar("animationend"),R0=ar("animationiteration"),w0=ar("animationstart"),qS=ar("transitionrun"),YS=ar("transitionstart"),jS=ar("transitioncancel"),C0=ar("transitionend"),D0=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function Jn(t,e){D0.set(t,e),nr(e,[t])}var Pp=new WeakMap;function Fn(t,e){if(typeof t=="object"&&t!==null){var n=Pp.get(t);return n!==void 0?n:(e={value:t,source:e,stack:xp(e)},Pp.set(t,e),e)}return{value:t,source:e,stack:xp(e)}}var Nn=[],Pr=0,uh=0;function Bc(){for(var t=Pr,e=uh=Pr=0;e<t;){var n=Nn[e];Nn[e++]=null;var i=Nn[e];Nn[e++]=null;var a=Nn[e];Nn[e++]=null;var r=Nn[e];if(Nn[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&U0(n,a,r)}}function zc(t,e,n,i){Nn[Pr++]=t,Nn[Pr++]=e,Nn[Pr++]=n,Nn[Pr++]=i,uh|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function fh(t,e,n,i){return zc(t,e,n,i),tc(t)}function _s(t,e){return zc(t,null,null,e),tc(t)}function U0(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,a&&e!==null&&(a=31-bn(n),t=r.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),r):null}function tc(t){if(50<no)throw no=0,Yf=null,Error(K(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Br={};function ZS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new ZS(t,e,n,i)}function dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ui(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function L0(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ol(t,e,n,i,a,r){var s=0;if(i=t,typeof t=="function")dh(t)&&(s=1);else if(typeof t=="string")s=Qy(t,n,oi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case pf:return t=En(31,n,e,a),t.elementType=pf,t.lanes=r,t;case wr:return ka(n.children,a,r,e);case Qg:s=8,a|=24;break;case ff:return t=En(12,n,e,a|2),t.elementType=ff,t.lanes=r,t;case df:return t=En(13,n,e,a),t.elementType=df,t.lanes=r,t;case hf:return t=En(19,n,e,a),t.elementType=hf,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fx:case bi:s=10;break e;case Jg:s=9;break e;case Jd:s=11;break e;case $d:s=14;break e;case Qi:s=16,i=null;break e}s=29,n=Error(K(130,t===null?"null":typeof t,"")),i=null}return e=En(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function ka(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function fu(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function du(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var zr=[],Ir=0,nc=null,ic=0,Bn=[],zn=0,Xa=null,Ai=1,Ri="";function Oa(t,e){zr[Ir++]=ic,zr[Ir++]=nc,nc=t,ic=e}function N0(t,e,n){Bn[zn++]=Ai,Bn[zn++]=Ri,Bn[zn++]=Xa,Xa=t;var i=Ai;t=Ri;var a=32-bn(i)-1;i&=~(1<<a),n+=1;var r=32-bn(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ai=1<<32-bn(e)+a|n<<a|i,Ri=r+t}else Ai=1<<r|n<<a|i,Ri=t}function hh(t){t.return!==null&&(Oa(t,1),N0(t,1,0))}function ph(t){for(;t===nc;)nc=zr[--Ir],zr[Ir]=null,ic=zr[--Ir],zr[Ir]=null;for(;t===Xa;)Xa=Bn[--zn],Bn[zn]=null,Ri=Bn[--zn],Bn[zn]=null,Ai=Bn[--zn],Bn[zn]=null}var an=null,Rt=null,et=!1,Wa=null,ni=!1,Rf=Error(K(519));function Ka(t){var e=Error(K(418,""));throw lo(Fn(e,t)),Rf}function Bp(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[$t]=t,e[pn]=i,n){case"dialog":qe("cancel",e),qe("close",e);break;case"iframe":case"object":case"embed":qe("load",e);break;case"video":case"audio":for(n=0;n<fo.length;n++)qe(fo[n],e);break;case"source":qe("error",e);break;case"img":case"image":case"link":qe("error",e),qe("load",e);break;case"details":qe("toggle",e);break;case"input":qe("invalid",e),f0(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),$l(e);break;case"select":qe("invalid",e);break;case"textarea":qe("invalid",e),h0(e,i.value,i.defaultValue,i.children),$l(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||pv(e.textContent,n)?(i.popover!=null&&(qe("beforetoggle",e),qe("toggle",e)),i.onScroll!=null&&qe("scroll",e),i.onScrollEnd!=null&&qe("scrollend",e),i.onClick!=null&&(e.onclick=Wc),e=!0):e=!1,e||Ka(t)}function zp(t){for(an=t.return;an;)switch(an.tag){case 5:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:an=an.return}}function Rs(t){if(t!==an)return!1;if(!et)return zp(t),et=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||$f(t.type,t.memoizedProps)),n=!n),n&&Rt&&Ka(t),zp(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Rt=Kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Rt=null}}else e===27?(e=Rt,Ea(t.type)?(t=nd,nd=null,Rt=t):Rt=e):Rt=an?Kn(t.stateNode.nextSibling):null;return!0}function Co(){Rt=an=null,et=!1}function Ip(){var t=Wa;return t!==null&&(fn===null?fn=t:fn.push.apply(fn,t),Wa=null),t}function lo(t){Wa===null?Wa=[t]:Wa.push(t)}var wf=fi(null),rr=null,wi=null;function $i(t,e,n){Mt(wf,e._currentValue),e._currentValue=n}function Li(t){t._currentValue=wf.current,Yt(wf)}function Cf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Df(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Cf(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(K(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Cf(s,n,t),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Do(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(K(387));if(s=s.memoizedProps,s!==null){var o=a.type;Cn(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===Zl.current){if(s=a.alternate,s===null)throw Error(K(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(mo):t=[mo])}a=a.return}t!==null&&Df(e,t,n,i),e.flags|=262144}function ac(t){for(t=t.firstContext;t!==null;){if(!Cn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){rr=t,wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function en(t){return O0(rr,t)}function $o(t,e){return rr===null&&Qa(t),O0(t,e)}function O0(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},wi===null){if(t===null)throw Error(K(308));wi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else wi=wi.next=e;return n}var KS=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},QS=Ft.unstable_scheduleCallback,JS=Ft.unstable_NormalPriority,Bt={$$typeof:bi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mh(){return{controller:new KS,data:new Map,refCount:0}}function Uo(t){t.refCount--,t.refCount===0&&QS(JS,function(){t.controller.abort()})}var Ys=null,Uf=0,ts=0,Xr=null;function $S(t,e){if(Ys===null){var n=Ys=[];Uf=0,ts=Ih(),Xr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Uf++,e.then(Fp,Fp),e}function Fp(){if(--Uf===0&&Ys!==null){Xr!==null&&(Xr.status="fulfilled");var t=Ys;Ys=null,ts=0,Xr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function ey(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Hp=Le.S;Le.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&$S(t,e),Hp!==null&&Hp(t,e)};var qa=fi(null);function gh(){var t=qa.current;return t!==null?t:mt.pooledCache}function Pl(t,e){e===null?Mt(qa,qa.current):Mt(qa,e.pool)}function P0(){var t=gh();return t===null?null:{parent:Bt._currentValue,pool:t}}var Lo=Error(K(460)),B0=Error(K(474)),Ic=Error(K(542)),Lf={then:function(){}};function Gp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function el(){}function z0(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(el,el),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,kp(t),t;default:if(typeof e.status=="string")e.then(el,el);else{if(t=mt,t!==null&&100<t.shellSuspendCounter)throw Error(K(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,kp(t),t}throw js=e,Lo}}var js=null;function Vp(){if(js===null)throw Error(K(459));var t=js;return js=null,t}function kp(t){if(t===Lo||t===Ic)throw Error(K(483))}var Ji=!1;function _h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ua(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=tc(t),U0(t,null,n),e}return zc(t,i,e,n),tc(t)}function Zs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,r0(t,n)}}function hu(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Of=!1;function Ks(){if(Of){var t=Xr;if(t!==null)throw t}}function Qs(t,e,n,i){Of=!1;var a=t.updateQueue;Ji=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,h=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Ke&f)===f:(i&f)===f){f!==0&&f===ts&&(Of=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=t,S=o;f=e;var m=n;switch(S.tag){case 1:if(x=S.payload,typeof x=="function"){d=x.call(m,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,f=typeof x=="function"?x.call(m,d,f):x,f==null)break e;d=_t({},d,f);break e;case 2:Ji=!0}}f=o.callback,f!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,r===null&&(a.shared.lanes=0),Sa|=s,t.lanes=s,t.memoizedState=d}}function I0(t,e){if(typeof t!="function")throw Error(K(191,t));t.call(e)}function F0(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)I0(n[t],e)}var ns=fi(null),rc=fi(0);function Xp(t,e){t=zi,Mt(rc,t),Mt(ns,e),zi=t|e.baseLanes}function Pf(){Mt(rc,zi),Mt(ns,ns.current)}function vh(){zi=rc.current,Yt(ns),Yt(rc)}var va=0,We=null,ct=null,Ot=null,sc=!1,Wr=!1,Ja=!1,oc=0,co=0,qr=null,ty=0;function Dt(){throw Error(K(321))}function xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Cn(t[n],e[n]))return!1;return!0}function Sh(t,e,n,i,a,r){return va=r,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Le.H=t===null||t.memoizedState===null?g_:__,Ja=!1,r=n(i,a),Ja=!1,Wr&&(r=G0(e,n,i,a)),H0(t),r}function H0(t){Le.H=lc;var e=ct!==null&&ct.next!==null;if(va=0,Ot=ct=We=null,sc=!1,co=0,qr=null,e)throw Error(K(300));t===null||qt||(t=t.dependencies,t!==null&&ac(t)&&(qt=!0))}function G0(t,e,n,i){We=t;var a=0;do{if(Wr&&(qr=null),co=0,Wr=!1,25<=a)throw Error(K(301));if(a+=1,Ot=ct=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Le.H=ly,r=e(n,i)}while(Wr);return r}function ny(){var t=Le.H,e=t.useState()[0];return e=typeof e.then=="function"?No(e):e,t=t.useState()[0],(ct!==null?ct.memoizedState:null)!==t&&(We.flags|=1024),e}function yh(){var t=oc!==0;return oc=0,t}function Mh(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Eh(t){if(sc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}sc=!1}va=0,Ot=ct=We=null,Wr=!1,co=oc=0,qr=null}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?We.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Pt(){if(ct===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=Ot===null?We.memoizedState:Ot.next;if(e!==null)Ot=e,ct=t;else{if(t===null)throw We.alternate===null?Error(K(467)):Error(K(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Ot===null?We.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Th(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var e=co;return co+=1,qr===null&&(qr=[]),t=z0(qr,t,e),e=We,(Ot===null?e.memoizedState:Ot.next)===null&&(e=e.alternate,Le.H=e===null||e.memoizedState===null?g_:__),t}function Fc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===bi)return en(t)}throw Error(K(438,String(t)))}function bh(t){var e=null,n=We.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=We.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Th(),We.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=Hx;return e.index++,n}function Pi(t,e){return typeof e=="function"?e(t):e}function Bl(t){var e=Pt();return Ah(e,ct,t)}function Ah(t,e,n){var i=t.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,c=e,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Ke&d)===d:(va&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===ts&&(h=!0);else if((va&f)===f){c=c.next,f===ts&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,We.lanes|=f,Sa|=f;d=c.action,Ja&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else f={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,We.lanes|=d,Sa|=d;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=o,!Cn(r,t.memoizedState)&&(qt=!0,h&&(n=Xr,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function pu(t){var e=Pt(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);Cn(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function V0(t,e,n){var i=We,a=Pt(),r=et;if(r){if(n===void 0)throw Error(K(407));n=n()}else n=e();var s=!Cn((ct||a).memoizedState,n);s&&(a.memoizedState=n,qt=!0),a=a.queue;var o=W0.bind(null,i,a,t);if(Oo(2048,8,o,[t]),a.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(i.flags|=2048,is(9,Hc(),X0.bind(null,i,a,n,e),null),mt===null)throw Error(K(349));r||va&124||k0(i,e,n)}return n}function k0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e=Th(),We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function X0(t,e,n,i){e.value=n,e.getSnapshot=i,q0(e)&&Y0(t)}function W0(t,e,n){return n(function(){q0(e)&&Y0(t)})}function q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Cn(t,n)}catch{return!0}}function Y0(t){var e=_s(t,2);e!==null&&Rn(e,t,2)}function Bf(t){var e=cn();if(typeof t=="function"){var n=t;if(t=n(),Ja){aa(!0);try{n()}finally{aa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:t},e}function j0(t,e,n,i){return t.baseState=n,Ah(t,ct,typeof i=="function"?i:Pi)}function iy(t,e,n,i,a){if(Gc(t))throw Error(K(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Le.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,Z0(e,r)):(r.next=n.next,e.pending=n.next=r)}}function Z0(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=Le.T,s={};Le.T=s;try{var o=n(a,i),l=Le.S;l!==null&&l(s,o),Wp(t,e,o)}catch(c){zf(t,e,c)}finally{Le.T=r}}else try{r=n(a,i),Wp(t,e,r)}catch(c){zf(t,e,c)}}function Wp(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){qp(t,e,i)},function(i){return zf(t,e,i)}):qp(t,e,n)}function qp(t,e,n){e.status="fulfilled",e.value=n,K0(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Z0(t,n)))}function zf(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,K0(e),e=e.next;while(e!==i)}t.action=null}function K0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Q0(t,e){return e}function Yp(t,e){if(et){var n=mt.formState;if(n!==null){e:{var i=We;if(et){if(Rt){t:{for(var a=Rt,r=ni;a.nodeType!==8;){if(!r){a=null;break t}if(a=Kn(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Rt=Kn(a.nextSibling),i=a.data==="F!";break e}}Ka(i)}i=!1}i&&(e=n[0])}}return n=cn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Q0,lastRenderedState:e},n.queue=i,n=h_.bind(null,We,i),i.dispatch=n,i=Bf(!1),r=Dh.bind(null,We,!1,i.queue),i=cn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=iy.bind(null,We,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function jp(t){var e=Pt();return J0(e,ct,t)}function J0(t,e,n){if(e=Ah(t,e,Q0)[0],t=Bl(Pi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=No(e)}catch(s){throw s===Lo?Ic:s}else i=e;e=Pt();var a=e.queue,r=a.dispatch;return n!==e.memoizedState&&(We.flags|=2048,is(9,Hc(),ay.bind(null,a,n),null)),[i,r,t]}function ay(t,e){t.action=e}function Zp(t){var e=Pt(),n=ct;if(n!==null)return J0(e,n,t);Pt(),e=e.memoizedState,n=Pt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function is(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=We.updateQueue,e===null&&(e=Th(),We.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Hc(){return{destroy:void 0,resource:void 0}}function $0(){return Pt().memoizedState}function zl(t,e,n,i){var a=cn();i=i===void 0?null:i,We.flags|=t,a.memoizedState=is(1|e,Hc(),n,i)}function Oo(t,e,n,i){var a=Pt();i=i===void 0?null:i;var r=a.memoizedState.inst;ct!==null&&i!==null&&xh(i,ct.memoizedState.deps)?a.memoizedState=is(e,r,n,i):(We.flags|=t,a.memoizedState=is(1|e,r,n,i))}function Kp(t,e){zl(8390656,8,t,e)}function e_(t,e){Oo(2048,8,t,e)}function t_(t,e){return Oo(4,2,t,e)}function n_(t,e){return Oo(4,4,t,e)}function i_(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a_(t,e,n){n=n!=null?n.concat([t]):null,Oo(4,4,i_.bind(null,e,t),n)}function Rh(){}function r_(t,e){var n=Pt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&xh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function s_(t,e){var n=Pt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&xh(e,i[1]))return i[0];if(i=t(),Ja){aa(!0);try{t()}finally{aa(!1)}}return n.memoizedState=[i,e],i}function wh(t,e,n){return n===void 0||va&1073741824?t.memoizedState=e:(t.memoizedState=n,t=K_(),We.lanes|=t,Sa|=t,n)}function o_(t,e,n,i){return Cn(n,e)?n:ns.current!==null?(t=wh(t,n,i),Cn(t,e)||(qt=!0),t):va&42?(t=K_(),We.lanes|=t,Sa|=t,e):(qt=!0,t.memoizedState=n)}function l_(t,e,n,i,a){var r=tt.p;tt.p=r!==0&&8>r?r:8;var s=Le.T,o={};Le.T=o,Dh(t,!1,e,n);try{var l=a(),c=Le.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=ey(l,i);Js(t,e,h,An(t))}else Js(t,e,i,An(t))}catch(d){Js(t,e,{then:function(){},status:"rejected",reason:d},An())}finally{tt.p=r,Le.T=s}}function ry(){}function If(t,e,n,i){if(t.tag!==5)throw Error(K(476));var a=c_(t).queue;l_(t,a,e,Va,n===null?ry:function(){return u_(t),n(i)})}function c_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Va,baseState:Va,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:Va},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function u_(t){var e=c_(t).next.queue;Js(t,e,{},An())}function Ch(){return en(mo)}function f_(){return Pt().memoizedState}function d_(){return Pt().memoizedState}function sy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=An();t=ca(n);var i=ua(e,t,n);i!==null&&(Rn(i,e,n),Zs(i,e,n)),e={cache:mh()},t.payload=e;return}e=e.return}}function oy(t,e,n){var i=An();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(t)?p_(e,n):(n=fh(t,e,n,i),n!==null&&(Rn(n,t,i),m_(n,e,i)))}function h_(t,e,n){var i=An();Js(t,e,n,i)}function Js(t,e,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(t))p_(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Cn(o,s))return zc(t,e,a,0),mt===null&&Bc(),!1}catch{}finally{}if(n=fh(t,e,a,i),n!==null)return Rn(n,t,i),m_(n,e,i),!0}return!1}function Dh(t,e,n,i){if(i={lane:2,revertLane:Ih(),action:i,hasEagerState:!1,eagerState:null,next:null},Gc(t)){if(e)throw Error(K(479))}else e=fh(t,n,i,2),e!==null&&Rn(e,t,2)}function Gc(t){var e=t.alternate;return t===We||e!==null&&e===We}function p_(t,e){Wr=sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m_(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,r0(t,n)}}var lc={readContext:en,use:Fc,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},g_={readContext:en,use:Fc,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:Kp,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,zl(4194308,4,i_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zl(4194308,4,t,e)},useInsertionEffect:function(t,e){zl(4,2,t,e)},useMemo:function(t,e){var n=cn();e=e===void 0?null:e;var i=t();if(Ja){aa(!0);try{t()}finally{aa(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=cn();if(n!==void 0){var a=n(e);if(Ja){aa(!0);try{n(e)}finally{aa(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=oy.bind(null,We,t),[i.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:function(t){t=Bf(t);var e=t.queue,n=h_.bind(null,We,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Rh,useDeferredValue:function(t,e){var n=cn();return wh(n,t,e)},useTransition:function(){var t=Bf(!1);return t=l_.bind(null,We,t.queue,!0,!1),cn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=We,a=cn();if(et){if(n===void 0)throw Error(K(407));n=n()}else{if(n=e(),mt===null)throw Error(K(349));Ke&124||k0(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,Kp(W0.bind(null,i,r,t),[t]),i.flags|=2048,is(9,Hc(),X0.bind(null,i,r,n,e),null),n},useId:function(){var t=cn(),e=mt.identifierPrefix;if(et){var n=Ri,i=Ai;n=(i&~(1<<32-bn(i)-1)).toString(32)+n,e="«"+e+"R"+n,n=oc++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=ty++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Ch,useFormState:Yp,useActionState:Yp,useOptimistic:function(t){var e=cn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Dh.bind(null,We,!0,n),n.dispatch=e,[t,e]},useMemoCache:bh,useCacheRefresh:function(){return cn().memoizedState=sy.bind(null,We)}},__={readContext:en,use:Fc,useCallback:r_,useContext:en,useEffect:e_,useImperativeHandle:a_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:s_,useReducer:Bl,useRef:$0,useState:function(){return Bl(Pi)},useDebugValue:Rh,useDeferredValue:function(t,e){var n=Pt();return o_(n,ct.memoizedState,t,e)},useTransition:function(){var t=Bl(Pi)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:No(t),e]},useSyncExternalStore:V0,useId:f_,useHostTransitionStatus:Ch,useFormState:jp,useActionState:jp,useOptimistic:function(t,e){var n=Pt();return j0(n,ct,t,e)},useMemoCache:bh,useCacheRefresh:d_},ly={readContext:en,use:Fc,useCallback:r_,useContext:en,useEffect:e_,useImperativeHandle:a_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:s_,useReducer:pu,useRef:$0,useState:function(){return pu(Pi)},useDebugValue:Rh,useDeferredValue:function(t,e){var n=Pt();return ct===null?wh(n,t,e):o_(n,ct.memoizedState,t,e)},useTransition:function(){var t=pu(Pi)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:No(t),e]},useSyncExternalStore:V0,useId:f_,useHostTransitionStatus:Ch,useFormState:Zp,useActionState:Zp,useOptimistic:function(t,e){var n=Pt();return ct!==null?j0(n,ct,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:bh,useCacheRefresh:d_},Yr=null,uo=0;function tl(t){var e=uo;return uo+=1,Yr===null&&(Yr=[]),z0(Yr,t,e)}function ws(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function nl(t,e){throw e.$$typeof===Ix?Error(K(525)):(t=Object.prototype.toString.call(e),Error(K(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Qp(t){var e=t._init;return e(t._payload)}function v_(t){function e(u,g){if(t){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=Ui(u,g),u.index=0,u.sibling=null,u}function r(u,g,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=67108866,g):_):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function s(u){return t&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,_,v){return g===null||g.tag!==6?(g=fu(_,u.mode,v),g.return=u,g):(g=a(g,_),g.return=u,g)}function l(u,g,_,v){var A=_.type;return A===wr?h(u,g,_.props.children,v,_.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Qi&&Qp(A)===g.type)?(g=a(g,_.props),ws(g,_),g.return=u,g):(g=Ol(_.type,_.key,_.props,null,u.mode,v),ws(g,_),g.return=u,g)}function c(u,g,_,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=du(_,u.mode,v),g.return=u,g):(g=a(g,_.children||[]),g.return=u,g)}function h(u,g,_,v,A){return g===null||g.tag!==7?(g=ka(_,u.mode,v,A),g.return=u,g):(g=a(g,_),g.return=u,g)}function d(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=fu(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case jo:return _=Ol(g.type,g.key,g.props,null,u.mode,_),ws(_,g),_.return=u,_;case Is:return g=du(g,u.mode,_),g.return=u,g;case Qi:var v=g._init;return g=v(g._payload),d(u,g,_)}if(Fs(g)||Ts(g))return g=ka(g,u.mode,_,null),g.return=u,g;if(typeof g.then=="function")return d(u,tl(g),_);if(g.$$typeof===bi)return d(u,$o(u,g),_);nl(u,g)}return null}function f(u,g,_,v){var A=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A!==null?null:o(u,g,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:return _.key===A?l(u,g,_,v):null;case Is:return _.key===A?c(u,g,_,v):null;case Qi:return A=_._init,_=A(_._payload),f(u,g,_,v)}if(Fs(_)||Ts(_))return A!==null?null:h(u,g,_,v,null);if(typeof _.then=="function")return f(u,g,tl(_),v);if(_.$$typeof===bi)return f(u,g,$o(u,_),v);nl(u,_)}return null}function p(u,g,_,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(_)||null,o(g,u,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case jo:return u=u.get(v.key===null?_:v.key)||null,l(g,u,v,A);case Is:return u=u.get(v.key===null?_:v.key)||null,c(g,u,v,A);case Qi:var C=v._init;return v=C(v._payload),p(u,g,_,v,A)}if(Fs(v)||Ts(v))return u=u.get(_)||null,h(g,u,v,A,null);if(typeof v.then=="function")return p(u,g,_,tl(v),A);if(v.$$typeof===bi)return p(u,g,_,$o(g,v),A);nl(g,v)}return null}function x(u,g,_,v){for(var A=null,C=null,b=g,D=g=0,T=null;b!==null&&D<_.length;D++){b.index>D?(T=b,b=null):T=b.sibling;var M=f(u,b,_[D],v);if(M===null){b===null&&(b=T);break}t&&b&&M.alternate===null&&e(u,b),g=r(M,g,D),C===null?A=M:C.sibling=M,C=M,b=T}if(D===_.length)return n(u,b),et&&Oa(u,D),A;if(b===null){for(;D<_.length;D++)b=d(u,_[D],v),b!==null&&(g=r(b,g,D),C===null?A=b:C.sibling=b,C=b);return et&&Oa(u,D),A}for(b=i(b);D<_.length;D++)T=p(b,u,D,_[D],v),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?D:T.key),g=r(T,g,D),C===null?A=T:C.sibling=T,C=T);return t&&b.forEach(function(w){return e(u,w)}),et&&Oa(u,D),A}function S(u,g,_,v){if(_==null)throw Error(K(151));for(var A=null,C=null,b=g,D=g=0,T=null,M=_.next();b!==null&&!M.done;D++,M=_.next()){b.index>D?(T=b,b=null):T=b.sibling;var w=f(u,b,M.value,v);if(w===null){b===null&&(b=T);break}t&&b&&w.alternate===null&&e(u,b),g=r(w,g,D),C===null?A=w:C.sibling=w,C=w,b=T}if(M.done)return n(u,b),et&&Oa(u,D),A;if(b===null){for(;!M.done;D++,M=_.next())M=d(u,M.value,v),M!==null&&(g=r(M,g,D),C===null?A=M:C.sibling=M,C=M);return et&&Oa(u,D),A}for(b=i(b);!M.done;D++,M=_.next())M=p(b,u,D,M.value,v),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?D:M.key),g=r(M,g,D),C===null?A=M:C.sibling=M,C=M);return t&&b.forEach(function(F){return e(u,F)}),et&&Oa(u,D),A}function m(u,g,_,v){if(typeof _=="object"&&_!==null&&_.type===wr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:e:{for(var A=_.key;g!==null;){if(g.key===A){if(A=_.type,A===wr){if(g.tag===7){n(u,g.sibling),v=a(g,_.props.children),v.return=u,u=v;break e}}else if(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Qi&&Qp(A)===g.type){n(u,g.sibling),v=a(g,_.props),ws(v,_),v.return=u,u=v;break e}n(u,g);break}else e(u,g);g=g.sibling}_.type===wr?(v=ka(_.props.children,u.mode,v,_.key),v.return=u,u=v):(v=Ol(_.type,_.key,_.props,null,u.mode,v),ws(v,_),v.return=u,u=v)}return s(u);case Is:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),v=a(g,_.children||[]),v.return=u,u=v;break e}else{n(u,g);break}else e(u,g);g=g.sibling}v=du(_,u.mode,v),v.return=u,u=v}return s(u);case Qi:return A=_._init,_=A(_._payload),m(u,g,_,v)}if(Fs(_))return x(u,g,_,v);if(Ts(_)){if(A=Ts(_),typeof A!="function")throw Error(K(150));return _=A.call(_),S(u,g,_,v)}if(typeof _.then=="function")return m(u,g,tl(_),v);if(_.$$typeof===bi)return m(u,g,$o(u,_),v);nl(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),v=a(g,_),v.return=u,u=v):(n(u,g),v=fu(_,u.mode,v),v.return=u,u=v),s(u)):n(u,g)}return function(u,g,_,v){try{uo=0;var A=m(u,g,_,v);return Yr=null,A}catch(b){if(b===Lo||b===Ic)throw b;var C=En(29,b,null,u.mode);return C.lanes=v,C.return=u,C}finally{}}}var as=v_(!0),x_=v_(!1),Gn=fi(null),ci=null;function ea(t){var e=t.alternate;Mt(zt,zt.current&1),Mt(Gn,t),ci===null&&(e===null||ns.current!==null||e.memoizedState!==null)&&(ci=t)}function S_(t){if(t.tag===22){if(Mt(zt,zt.current),Mt(Gn,t),ci===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(ci=t)}}else ta()}function ta(){Mt(zt,zt.current),Mt(Gn,Gn.current)}function Ci(t){Yt(Gn),ci===t&&(ci=null),Yt(zt)}var zt=fi(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||td(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function mu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ff={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=An(),a=ca(i);a.payload=e,n!=null&&(a.callback=n),e=ua(t,a,i),e!==null&&(Rn(e,t,i),Zs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=An(),a=ca(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=ua(t,a,i),e!==null&&(Rn(e,t,i),Zs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=An(),i=ca(n);i.tag=2,e!=null&&(i.callback=e),e=ua(t,i,n),e!==null&&(Rn(e,t,n),Zs(e,t,n))}};function Jp(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!oo(n,i)||!oo(a,r):!0}function $p(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ff.enqueueReplaceState(e,e.state,null)}function $a(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=_t({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}var uc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function y_(t){uc(t)}function M_(t){console.error(t)}function E_(t){uc(t)}function fc(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function em(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Hf(t,e,n){return n=ca(n),n.tag=3,n.payload={element:null},n.callback=function(){fc(t,e)},n}function T_(t){return t=ca(t),t.tag=3,t}function b_(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){em(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){em(e,n,i),typeof a!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function cy(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Do(e,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 13:return ci===null?jf():n.alternate===null&&wt===0&&(wt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Lf?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Au(t,i,a)),!1;case 22:return n.flags|=65536,i===Lf?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Au(t,i,a)),!1}throw Error(K(435,n.tag))}return Au(t,i,a),jf(),!1}if(et)return e=Gn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==Rf&&(t=Error(K(422),{cause:i}),lo(Fn(t,n)))):(i!==Rf&&(e=Error(K(423),{cause:i}),lo(Fn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=Fn(i,n),a=Hf(t.stateNode,i,a),hu(t,a),wt!==4&&(wt=2)),!1;var r=Error(K(520),{cause:i});if(r=Fn(r,n),to===null?to=[r]:to.push(r),wt!==4&&(wt=2),e===null)return!0;i=Fn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Hf(n.stateNode,i,t),hu(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(fa===null||!fa.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=T_(a),b_(a,t,n,i),hu(n,a),!1}n=n.return}while(n!==null);return!1}var A_=Error(K(461)),qt=!1;function jt(t,e,n,i){e.child=t===null?x_(e,null,n,i):as(e,t.child,n,i)}function tm(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Qa(e),i=Sh(t,e,n,s,r,a),o=yh(),t!==null&&!qt?(Mh(t,e,a),Bi(t,e,a)):(et&&o&&hh(e),e.flags|=1,jt(t,e,i,a),e.child)}function nm(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!dh(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,R_(t,e,r,i,a)):(t=Ol(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Uh(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(s,i)&&t.ref===e.ref)return Bi(t,e,a)}return e.flags|=1,t=Ui(r,i),t.ref=e.ref,t.return=e,e.child=t}function R_(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(oo(r,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=r,Uh(t,a))t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,Bi(t,e,a)}return Gf(t,e,n,i,a)}function w_(t,e,n){var i=e.pendingProps,a=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if(e.flags&128){if(i=r!==null?r.baseLanes|n:n,t!==null){for(a=e.child=t.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;e.childLanes=r&~i}else e.childLanes=0,e.child=null;return im(t,e,i,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pl(e,r!==null?r.cachePool:null),r!==null?Xp(e,r):Pf(),S_(e);else return e.lanes=e.childLanes=536870912,im(t,e,r!==null?r.baseLanes|n:n,n)}else r!==null?(Pl(e,r.cachePool),Xp(e,r),ta(),e.memoizedState=null):(t!==null&&Pl(e,null),Pf(),ta());return jt(t,e,a,n),e.child}function im(t,e,n,i){var a=gh();return a=a===null?null:{parent:Bt._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&Pl(e,null),Pf(),S_(e),t!==null&&Do(t,e,i,!0),null}function Il(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Gf(t,e,n,i,a){return Qa(e),n=Sh(t,e,n,i,void 0,a),i=yh(),t!==null&&!qt?(Mh(t,e,a),Bi(t,e,a)):(et&&i&&hh(e),e.flags|=1,jt(t,e,n,a),e.child)}function am(t,e,n,i,a,r){return Qa(e),e.updateQueue=null,n=G0(e,i,n,a),H0(t),i=yh(),t!==null&&!qt?(Mh(t,e,r),Bi(t,e,r)):(et&&i&&hh(e),e.flags|=1,jt(t,e,n,r),e.child)}function rm(t,e,n,i,a){if(Qa(e),e.stateNode===null){var r=Br,s=n.contextType;typeof s=="object"&&s!==null&&(r=en(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ff,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},_h(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?en(s):Br,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(mu(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Ff.enqueueReplaceState(r,r.state,null),Qs(e,i,r,a),Ks(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=$a(n,o);r.props=l;var c=r.context,h=n.contextType;s=Br,typeof h=="object"&&h!==null&&(s=en(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&$p(e,r,i,s),Ji=!1;var f=e.memoizedState;r.state=f,Qs(e,i,r,a),Ks(),c=e.memoizedState,o||f!==c||Ji?(typeof d=="function"&&(mu(e,n,d,i),c=e.memoizedState),(l=Ji||Jp(e,n,l,i,f,c,s))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,Nf(t,e),s=e.memoizedProps,h=$a(n,s),r.props=h,d=e.pendingProps,f=r.context,c=n.contextType,l=Br,typeof c=="object"&&c!==null&&(l=en(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||f!==l)&&$p(e,r,i,l),Ji=!1,f=e.memoizedState,r.state=f,Qs(e,i,r,a),Ks();var p=e.memoizedState;s!==d||f!==p||Ji||t!==null&&t.dependencies!==null&&ac(t.dependencies)?(typeof o=="function"&&(mu(e,n,o,i),p=e.memoizedState),(h=Ji||Jp(e,n,h,i,f,p,l)||t!==null&&t.dependencies!==null&&ac(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),r.props=i,r.state=p,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,Il(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=as(e,t.child,null,a),e.child=as(e,null,n,a)):jt(t,e,n,a),e.memoizedState=r.state,t=e.child):t=Bi(t,e,a),t}function sm(t,e,n,i){return Co(),e.flags|=256,jt(t,e,n,i),e.child}var gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _u(t){return{baseLanes:t,cachePool:P0()}}function vu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Hn),t}function C_(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(zt.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(et){if(a?ea(e):ta(),et){var o=Rt,l;if(l=o){e:{for(l=o,o=ni;l.nodeType!==8;){if(!o){o=null;break e}if(l=Kn(l.nextSibling),l===null){o=null;break e}}o=l}o!==null?(e.memoizedState={dehydrated:o,treeContext:Xa!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},l=En(18,null,null,0),l.stateNode=o,l.return=e,e.child=l,an=e,Rt=null,l=!0):l=!1}l||Ka(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return td(o)?e.lanes=32:e.lanes=536870912,null;Ci(e)}return o=i.children,i=i.fallback,a?(ta(),a=e.mode,o=dc({mode:"hidden",children:o},a),i=ka(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,a=e.child,a.memoizedState=_u(n),a.childLanes=vu(t,s,n),e.memoizedState=gu,i):(ea(e),Vf(e,o))}if(l=t.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)e.flags&256?(ea(e),e.flags&=-257,e=xu(t,e,n)):e.memoizedState!==null?(ta(),e.child=t.child,e.flags|=128,e=null):(ta(),a=i.fallback,o=e.mode,i=dc({mode:"visible",children:i.children},o),a=ka(a,o,n,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,as(e,t.child,null,n),i=e.child,i.memoizedState=_u(n),i.childLanes=vu(t,s,n),e.memoizedState=gu,e=a);else if(ea(e),td(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(K(419)),i.stack="",i.digest=s,lo({value:i,source:null,stack:null}),e=xu(t,e,n)}else if(qt||Do(t,e,n,!1),s=(n&t.childLanes)!==0,qt||s){if(s=mt,s!==null&&(i=n&-n,i=i&42?1:th(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,_s(t,i),Rn(s,t,i),A_;o.data==="$?"||jf(),e=xu(t,e,n)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Rt=Kn(o.nextSibling),an=e,et=!0,Wa=null,ni=!1,t!==null&&(Bn[zn++]=Ai,Bn[zn++]=Ri,Bn[zn++]=Xa,Ai=t.id,Ri=t.overflow,Xa=e),e=Vf(e,i.children),e.flags|=4096);return e}return a?(ta(),a=i.fallback,o=e.mode,l=t.child,c=l.sibling,i=Ui(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Ui(c,a):(a=ka(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o===null?o=_u(n):(l=o.cachePool,l!==null?(c=Bt._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=P0(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=vu(t,s,n),e.memoizedState=gu,i):(ea(e),n=t.child,t=n.sibling,n=Ui(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function Vf(t,e){return e=dc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function dc(t,e){return t=En(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function xu(t,e,n){return as(e,t.child,null,n),t=Vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function om(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Cf(t.return,e,n)}function Su(t,e,n,i,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function D_(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;if(jt(t,e,i.children,n),i=zt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,n,e);else if(t.tag===19)om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(Mt(zt,i),a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Su(e,!1,a,n,r);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&cc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Su(e,!0,n,null,r);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sa|=e.lanes,!(n&e.childLanes))if(t!==null){if(Do(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(K(153));if(e.child!==null){for(t=e.child,n=Ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uh(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&ac(t)))}function uy(t,e,n){switch(e.tag){case 3:Kl(e,e.stateNode.containerInfo),$i(e,Bt,t.memoizedState.cache),Co();break;case 27:case 5:_f(e);break;case 4:Kl(e,e.stateNode.containerInfo);break;case 10:$i(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(ea(e),e.flags|=128,null):n&e.child.childLanes?C_(t,e,n):(ea(e),t=Bi(t,e,n),t!==null?t.sibling:null);ea(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Do(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return D_(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Mt(zt,zt.current),i)break;return null;case 22:case 23:return e.lanes=0,w_(t,e,n);case 24:$i(e,Bt,t.memoizedState.cache)}return Bi(t,e,n)}function U_(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!Uh(t,n)&&!(e.flags&128))return qt=!1,uy(t,e,n);qt=!!(t.flags&131072)}else qt=!1,et&&e.flags&1048576&&N0(e,ic,e.index);switch(e.lanes=0,e.tag){case 16:e:{t=e.pendingProps;var i=e.elementType,a=i._init;if(i=a(i._payload),e.type=i,typeof i=="function")dh(i)?(t=$a(i,t),e.tag=1,e=rm(null,e,i,t,n)):(e.tag=0,e=Gf(null,e,i,t,n));else{if(i!=null){if(a=i.$$typeof,a===Jd){e.tag=11,e=tm(null,e,i,t,n);break e}else if(a===$d){e.tag=14,e=nm(null,e,i,t,n);break e}}throw e=mf(i)||i,Error(K(306,e,""))}}return e;case 0:return Gf(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=$a(i,e.pendingProps),rm(t,e,i,a,n);case 3:e:{if(Kl(e,e.stateNode.containerInfo),t===null)throw Error(K(387));i=e.pendingProps;var r=e.memoizedState;a=r.element,Nf(t,e),Qs(e,i,null,n);var s=e.memoizedState;if(i=s.cache,$i(e,Bt,i),i!==r.cache&&Df(e,[Bt],n,!0),Ks(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=sm(t,e,i,n);break e}else if(i!==a){a=Fn(Error(K(424)),e),lo(a),e=sm(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Rt=Kn(t.firstChild),an=e,et=!0,Wa=null,ni=!0,n=x_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Co(),i===a){e=Bi(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 26:return Il(t,e),t===null?(n=Tm(e.type,null,e.pendingProps,null))?e.memoizedState=n:et||(n=e.type,t=e.pendingProps,i=xc(la.current).createElement(n),i[$t]=e,i[pn]=t,Kt(i,n,t),Wt(i),e.stateNode=i):e.memoizedState=Tm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return _f(e),t===null&&et&&(i=e.stateNode=_v(e.type,e.pendingProps,la.current),an=e,ni=!0,a=Rt,Ea(e.type)?(nd=a,Rt=Kn(i.firstChild)):Rt=a),jt(t,e,e.pendingProps.children,n),Il(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&et&&((a=i=Rt)&&(i=Iy(i,e.type,e.pendingProps,ni),i!==null?(e.stateNode=i,an=e,Rt=Kn(i.firstChild),ni=!1,a=!0):a=!1),a||Ka(e)),_f(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,$f(a,r)?i=null:s!==null&&$f(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=Sh(t,e,ny,null,null,n),mo._currentValue=a),Il(t,e),jt(t,e,i,n),e.child;case 6:return t===null&&et&&((t=n=Rt)&&(n=Fy(n,e.pendingProps,ni),n!==null?(e.stateNode=n,an=e,Rt=null,t=!0):t=!1),t||Ka(e)),null;case 13:return C_(t,e,n);case 4:return Kl(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=as(e,null,i,n):jt(t,e,i,n),e.child;case 11:return tm(t,e,e.type,e.pendingProps,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,$i(e,e.type,i.value),jt(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,Qa(e),a=en(a),i=i(a),e.flags|=1,jt(t,e,i,n),e.child;case 14:return nm(t,e,e.type,e.pendingProps,n);case 15:return R_(t,e,e.type,e.pendingProps,n);case 19:return D_(t,e,n);case 31:return i=e.pendingProps,n=e.mode,i={mode:i.mode,children:i.children},t===null?(n=dc(i,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Ui(t.child,i),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return w_(t,e,n);case 24:return Qa(e),i=en(Bt),t===null?(a=gh(),a===null&&(a=mt,r=mh(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},_h(e),$i(e,Bt,a)):(t.lanes&n&&(Nf(t,e),Qs(e,null,null,n),Ks()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),$i(e,Bt,i)):(i=r.cache,$i(e,Bt,i),i!==a.cache&&Df(e,[Bt],n,!0))),jt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(K(156,e.tag))}function mi(t){t.flags|=4}function lm(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Sv(e)){if(e=Gn.current,e!==null&&((Ke&4194048)===Ke?ci!==null:(Ke&62914560)!==Ke&&!(Ke&536870912)||e!==ci))throw js=Lf,B0;t.flags|=8192}}function il(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?i0():536870912,t.lanes|=e,rs|=e)}function Cs(t,e){if(!et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function fy(t,e,n){var i=e.pendingProps;switch(ph(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return bt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Li(Bt),Jr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Rs(e)?mi(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ip())),bt(e),null;case 26:return n=e.memoizedState,t===null?(mi(e),n!==null?(bt(e),lm(e,n)):(bt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(mi(e),bt(e),lm(e,n)):(bt(e),e.flags&=-16777217):(t.memoizedProps!==i&&mi(e),bt(e),e.flags&=-16777217),null;case 27:Ql(e),n=la.current;var a=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&mi(e);else{if(!i){if(e.stateNode===null)throw Error(K(166));return bt(e),null}t=oi.current,Rs(e)?Bp(e):(t=_v(a,i,n),e.stateNode=t,mi(e))}return bt(e),null;case 5:if(Ql(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&mi(e);else{if(!i){if(e.stateNode===null)throw Error(K(166));return bt(e),null}if(t=oi.current,Rs(e))Bp(e);else{switch(a=xc(la.current),t){case 1:t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}t[$t]=e,t[pn]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=t;e:switch(Kt(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&mi(e)}}return bt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&mi(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(K(166));if(t=la.current,Rs(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=an,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[$t]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||pv(t.nodeValue,n)),t||Ka(e)}else t=xc(t).createTextNode(i),t[$t]=e,e.stateNode=t}return bt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Rs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(K(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(K(317));a[$t]=e}else Co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bt(e),a=!1}else a=Ip(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Ci(e),e):(Ci(e),null)}if(Ci(e),e.flags&128)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),il(e,e.updateQueue),bt(e),null;case 4:return Jr(),t===null&&Fh(e.stateNode.containerInfo),bt(e),null;case 10:return Li(e.type),bt(e),null;case 19:if(Yt(zt),a=e.memoizedState,a===null)return bt(e),null;if(i=(e.flags&128)!==0,r=a.rendering,r===null)if(i)Cs(a,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=cc(t),r!==null){for(e.flags|=128,Cs(a,!1),t=r.updateQueue,e.updateQueue=t,il(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)L0(n,t),n=n.sibling;return Mt(zt,zt.current&1|2),e.child}t=t.sibling}a.tail!==null&&li()>pc&&(e.flags|=128,i=!0,Cs(a,!1),e.lanes=4194304)}else{if(!i)if(t=cc(r),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,il(e,t),Cs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!et)return bt(e),null}else 2*li()-a.renderingStartTime>pc&&n!==536870912&&(e.flags|=128,i=!0,Cs(a,!1),e.lanes=4194304);a.isBackwards?(r.sibling=e.child,e.child=r):(t=a.last,t!==null?t.sibling=r:e.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=li(),e.sibling=null,t=zt.current,Mt(zt,i?t&1|2:t&1),e):(bt(e),null);case 22:case 23:return Ci(e),vh(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),n=e.updateQueue,n!==null&&il(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Yt(qa),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Li(Bt),bt(e),null;case 25:return null;case 30:return null}throw Error(K(156,e.tag))}function dy(t,e){switch(ph(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Li(Bt),Jr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ql(e),null;case 13:if(Ci(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(K(340));Co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Yt(zt),null;case 4:return Jr(),null;case 10:return Li(e.type),null;case 22:case 23:return Ci(e),vh(),t!==null&&Yt(qa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Li(Bt),null;case 25:return null;default:return null}}function L_(t,e){switch(ph(e),e.tag){case 3:Li(Bt),Jr();break;case 26:case 27:case 5:Ql(e);break;case 4:Jr();break;case 13:Ci(e);break;case 19:Yt(zt);break;case 10:Li(e.type);break;case 22:case 23:Ci(e),vh(),t!==null&&Yt(qa);break;case 24:Li(Bt)}}function Po(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){dt(e,e.return,o)}}function xa(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(h){dt(a,l,h)}}}i=i.next}while(i!==r)}}catch(h){dt(e,e.return,h)}}function N_(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{F0(e,n)}catch(i){dt(t,t.return,i)}}}function O_(t,e,n){n.props=$a(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){dt(t,e,i)}}function $s(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){dt(t,e,a)}}function ii(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){dt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){dt(t,e,a)}else n.current=null}function P_(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){dt(t,t.return,a)}}function yu(t,e,n){try{var i=t.stateNode;Ny(i,t.type,n,e),i[pn]=e}catch(a){dt(t,t.return,a)}}function B_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function Mu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wc));else if(i!==4&&(i===27&&Ea(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}function hc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Ea(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(hc(t,e,n),t=t.sibling;t!==null;)hc(t,e,n),t=t.sibling}function z_(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Kt(e,i,n),e[$t]=t,e[pn]=n}catch(r){dt(t,t.return,r)}}var Ei=!1,Ut=!1,Eu=!1,cm=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function hy(t,e){if(t=t.containerInfo,Qf=Ec,t=T0(t),ch(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===a&&(o=s),f===r&&++h===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jf={focusedElem:t,selectionRange:n},Ec=!1,Xt=e;Xt!==null;)if(e=Xt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Xt=t;else for(;Xt!==null;){switch(e=Xt,r=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=$a(n.type,a,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(S){dt(n,n.return,S)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)ed(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ed(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(K(163))}if(t=e.sibling,t!==null){t.return=e.return,Xt=t;break}Xt=e.return}}function I_(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ki(t,n),i&4&&Po(5,n);break;case 1:if(ki(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){dt(n,n.return,s)}else{var a=$a(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){dt(n,n.return,s)}}i&64&&N_(n),i&512&&$s(n,n.return);break;case 3:if(ki(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{F0(t,e)}catch(s){dt(n,n.return,s)}}break;case 27:e===null&&i&4&&z_(n);case 26:case 5:ki(t,n),e===null&&i&4&&P_(n),i&512&&$s(n,n.return);break;case 12:ki(t,n);break;case 13:ki(t,n),i&4&&G_(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=My.bind(null,n),Hy(t,n))));break;case 22:if(i=n.memoizedState!==null||Ei,!i){e=e!==null&&e.memoizedState!==null||Ut,a=Ei;var r=Ut;Ei=i,(Ut=e)&&!r?Ki(t,n,(n.subtreeFlags&8772)!==0):ki(t,n),Ei=a,Ut=r}break;case 30:break;default:ki(t,n)}}function F_(t){var e=t.alternate;e!==null&&(t.alternate=null,F_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ih(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var St=null,un=!1;function gi(t,e,n){for(n=n.child;n!==null;)H_(t,e,n),n=n.sibling}function H_(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 26:Ut||ii(n,e),gi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ut||ii(n,e);var i=St,a=un;Ea(n.type)&&(St=n.stateNode,un=!1),gi(t,e,n),io(n.stateNode),St=i,un=a;break;case 5:Ut||ii(n,e);case 6:if(i=St,a=un,St=null,gi(t,e,n),St=i,un=a,St!==null)if(un)try{(St.nodeType===9?St.body:St.nodeName==="HTML"?St.ownerDocument.body:St).removeChild(n.stateNode)}catch(r){dt(n,e,r)}else try{St.removeChild(n.stateNode)}catch(r){dt(n,e,r)}break;case 18:St!==null&&(un?(t=St,ym(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),vo(t)):ym(St,n.stateNode));break;case 4:i=St,a=un,St=n.stateNode.containerInfo,un=!0,gi(t,e,n),St=i,un=a;break;case 0:case 11:case 14:case 15:Ut||xa(2,n,e),Ut||xa(4,n,e),gi(t,e,n);break;case 1:Ut||(ii(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&O_(n,e,i)),gi(t,e,n);break;case 21:gi(t,e,n);break;case 22:Ut=(i=Ut)||n.memoizedState!==null,gi(t,e,n),Ut=i;break;default:gi(t,e,n)}}function G_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vo(t)}catch(n){dt(e,e.return,n)}}function py(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new cm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new cm),e;default:throw Error(K(435,t.tag))}}function Tu(t,e){var n=py(t);e.forEach(function(i){var a=Ey.bind(null,t,i);n.has(i)||(n.add(i),i.then(a,a))})}function vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(Ea(o.type)){St=o.stateNode,un=!1;break e}break;case 5:St=o.stateNode,un=!1;break e;case 3:case 4:St=o.stateNode.containerInfo,un=!0;break e}o=o.return}if(St===null)throw Error(K(160));H_(r,s,a),St=null,un=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)V_(e,t),e=e.sibling}var qn=null;function V_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:vn(e,t),xn(t),i&4&&(xa(3,t,t.return),Po(3,t),xa(5,t,t.return));break;case 1:vn(e,t),xn(t),i&512&&(Ut||n===null||ii(n,n.return)),i&64&&Ei&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=qn;if(vn(e,t),xn(t),i&512&&(Ut||n===null||ii(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Ro]||r[$t]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Kt(r,i,n),r[$t]=t,Wt(r),i=r;break e;case"link":var s=Am("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}r=a.createElement(i),Kt(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Am("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}r=a.createElement(i),Kt(r,i,n),a.head.appendChild(r);break;default:throw Error(K(468,i))}r[$t]=t,Wt(r),i=r}t.stateNode=i}else Rm(a,t.type,t.stateNode);else t.stateNode=bm(a,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Rm(a,t.type,t.stateNode):bm(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&yu(t,t.memoizedProps,n.memoizedProps)}break;case 27:vn(e,t),xn(t),i&512&&(Ut||n===null||ii(n,n.return)),n!==null&&i&4&&yu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(vn(e,t),xn(t),i&512&&(Ut||n===null||ii(n,n.return)),t.flags&32){a=t.stateNode;try{es(a,"")}catch(p){dt(t,t.return,p)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,yu(t,a,n!==null?n.memoizedProps:a)),i&1024&&(Eu=!0);break;case 6:if(vn(e,t),xn(t),i&4){if(t.stateNode===null)throw Error(K(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(p){dt(t,t.return,p)}}break;case 3:if(Gl=null,a=qn,qn=Sc(e.containerInfo),vn(e,t),qn=a,xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(p){dt(t,t.return,p)}Eu&&(Eu=!1,k_(t));break;case 4:i=qn,qn=Sc(t.stateNode.containerInfo),vn(e,t),xn(t),qn=i;break;case 12:vn(e,t),xn(t);break;case 13:vn(e,t),xn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Bh=li()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Tu(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ei,h=Ut;if(Ei=c||a,Ut=h||l,vn(e,t),Ut=h,Ei=c,xn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||Ei||Ut||Pa(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){dt(l,l.return,p)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){dt(l,l.return,p)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Tu(t,n))));break;case 19:vn(e,t),xn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Tu(t,i)));break;case 30:break;case 21:break;default:vn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(B_(i)){n=i;break}i=i.return}if(n==null)throw Error(K(160));switch(n.tag){case 27:var a=n.stateNode,r=Mu(t);hc(t,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(es(s,""),n.flags&=-33);var o=Mu(t);hc(t,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Mu(t);kf(t,c,l);break;default:throw Error(K(161))}}catch(h){dt(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;k_(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ki(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)I_(t,e.alternate,e),e=e.sibling}function Pa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:xa(4,e,e.return),Pa(e);break;case 1:ii(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&O_(e,e.return,n),Pa(e);break;case 27:io(e.stateNode);case 26:case 5:ii(e,e.return),Pa(e);break;case 22:e.memoizedState===null&&Pa(e);break;case 30:Pa(e);break;default:Pa(e)}t=t.sibling}}function Ki(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags;switch(r.tag){case 0:case 11:case 15:Ki(a,r,n),Po(4,r);break;case 1:if(Ki(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){dt(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)I0(l[a],o)}catch(c){dt(i,i.return,c)}}n&&s&64&&N_(r),$s(r,r.return);break;case 27:z_(r);case 26:case 5:Ki(a,r,n),n&&i===null&&s&4&&P_(r),$s(r,r.return);break;case 12:Ki(a,r,n);break;case 13:Ki(a,r,n),n&&s&4&&G_(a,r);break;case 22:r.memoizedState===null&&Ki(a,r,n),$s(r,r.return);break;case 30:break;default:Ki(a,r,n)}e=e.sibling}}function Lh(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Uo(n))}function Nh(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Uo(t))}function ei(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)X_(t,e,n,i),e=e.sibling}function X_(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ei(t,e,n,i),a&2048&&Po(9,e);break;case 1:ei(t,e,n,i);break;case 3:ei(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Uo(t)));break;case 12:if(a&2048){ei(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){dt(e,e.return,l)}}else ei(t,e,n,i);break;case 13:ei(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,s=e.alternate,e.memoizedState!==null?r._visibility&2?ei(t,e,n,i):eo(t,e):r._visibility&2?ei(t,e,n,i):(r._visibility|=2,Ar(t,e,n,i,(e.subtreeFlags&10256)!==0)),a&2048&&Lh(s,e);break;case 24:ei(t,e,n,i),a&2048&&Nh(e.alternate,e);break;default:ei(t,e,n,i)}}function Ar(t,e,n,i,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=t,s=e,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Ar(r,s,o,l,a),Po(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?Ar(r,s,o,l,a):eo(r,s):(h._visibility|=2,Ar(r,s,o,l,a)),a&&c&2048&&Lh(s.alternate,s);break;case 24:Ar(r,s,o,l,a),a&&c&2048&&Nh(s.alternate,s);break;default:Ar(r,s,o,l,a)}e=e.sibling}}function eo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:eo(n,i),a&2048&&Lh(i.alternate,i);break;case 24:eo(n,i),a&2048&&Nh(i.alternate,i);break;default:eo(n,i)}e=e.sibling}}var Gs=8192;function lr(t){if(t.subtreeFlags&Gs)for(t=t.child;t!==null;)W_(t),t=t.sibling}function W_(t){switch(t.tag){case 26:lr(t),t.flags&Gs&&t.memoizedState!==null&&$y(qn,t.memoizedState,t.memoizedProps);break;case 5:lr(t);break;case 3:case 4:var e=qn;qn=Sc(t.stateNode.containerInfo),lr(t),qn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Gs,Gs=16777216,lr(t),Gs=e):lr(t));break;default:lr(t)}}function q_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ds(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Xt=i,j_(i,t)}q_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Y_(t),t=t.sibling}function Y_(t){switch(t.tag){case 0:case 11:case 15:Ds(t),t.flags&2048&&xa(9,t,t.return);break;case 3:Ds(t);break;case 12:Ds(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Fl(t)):Ds(t);break;default:Ds(t)}}function Fl(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Xt=i,j_(i,t)}q_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:xa(8,e,e.return),Fl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(e));break;default:Fl(e)}t=t.sibling}}function j_(t,e){for(;Xt!==null;){var n=Xt;switch(n.tag){case 0:case 11:case 15:xa(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Uo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Xt=i;else e:for(n=t;Xt!==null;){i=Xt;var a=i.sibling,r=i.return;if(F_(i),i===n){Xt=null;break e}if(a!==null){a.return=r,Xt=a;break e}Xt=r}}}var my={getCacheForType:function(t){var e=en(Bt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},gy=typeof WeakMap=="function"?WeakMap:Map,rt=0,mt=null,Ye=null,Ke=0,at=0,Mn=null,sa=!1,vs=!1,Oh=!1,zi=0,wt=0,Sa=0,Ya=0,Ph=0,Hn=0,rs=0,to=null,fn=null,Xf=!1,Bh=0,pc=1/0,mc=null,fa=null,Zt=0,da=null,ss=null,jr=0,Wf=0,qf=null,Z_=null,no=0,Yf=null;function An(){if(rt&2&&Ke!==0)return Ke&-Ke;if(Le.T!==null){var t=ts;return t!==0?t:Ih()}return s0()}function K_(){Hn===0&&(Hn=!(Ke&536870912)||et?n0():536870912);var t=Gn.current;return t!==null&&(t.flags|=32),Hn}function Rn(t,e,n){(t===mt&&(at===2||at===9)||t.cancelPendingCommit!==null)&&(os(t,0),oa(t,Ke,Hn,!1)),Ao(t,n),(!(rt&2)||t!==mt)&&(t===mt&&(!(rt&2)&&(Ya|=n),wt===4&&oa(t,Ke,Hn,!1)),di(t))}function Q_(t,e,n){if(rt&6)throw Error(K(327));var i=!n&&(e&124)===0&&(e&t.expiredLanes)===0||bo(t,e),a=i?xy(t,e):bu(t,e,!0),r=i;do{if(a===0){vs&&!i&&oa(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!_y(n)){a=bu(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=to;var l=o.current.memoizedState.isDehydrated;if(l&&(os(o,s).flags|=256),s=bu(o,s,!1),s!==2){if(Oh&&!l){o.errorRecoveryDisabledLanes|=r,Ya|=r,a=4;break e}r=fn,fn=a,r!==null&&(fn===null?fn=r:fn.push.apply(fn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){os(t,0),oa(t,e,0,!0);break}e:{switch(i=t,r=a,r){case 0:case 1:throw Error(K(345));case 4:if((e&4194048)!==e)break;case 6:oa(i,e,Hn,!sa);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(K(329))}if((e&62914560)===e&&(a=Bh+300-li(),10<a)){if(oa(i,e,Hn,!sa),Lc(i,0,!0)!==0)break e;i.timeoutHandle=gv(um.bind(null,i,n,fn,mc,Xf,e,Hn,Ya,rs,sa,r,2,-0,0),a);break e}um(i,n,fn,mc,Xf,e,Hn,Ya,rs,sa,r,0,-0,0)}}break}while(!0);di(t)}function um(t,e,n,i,a,r,s,o,l,c,h,d,f,p){if(t.timeoutHandle=-1,d=e.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:Jy},W_(e),d=eM(),d!==null)){t.cancelPendingCommit=d(dm.bind(null,t,e,r,n,i,a,s,o,l,h,1,f,p)),oa(t,r,s,!c);return}dm(t,e,r,n,i,a,s,o,l)}function _y(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Cn(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function oa(t,e,n,i){e&=~Ph,e&=~Ya,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-bn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&a0(t,n,e)}function Vc(){return rt&6?!0:(Bo(0),!1)}function zh(){if(Ye!==null){if(at===0)var t=Ye.return;else t=Ye,wi=rr=null,Eh(t),Yr=null,uo=0,t=Ye;for(;t!==null;)L_(t.alternate,t),t=t.return;Ye=null}}function os(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Py(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),zh(),mt=t,Ye=n=Ui(t.current,null),Ke=e,at=0,Mn=null,sa=!1,vs=bo(t,e),Oh=!1,rs=Hn=Ph=Ya=Sa=wt=0,fn=to=null,Xf=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-bn(i),r=1<<a;e|=t[a],i&=~r}return zi=e,Bc(),n}function J_(t,e){We=null,Le.H=lc,e===Lo||e===Ic?(e=Vp(),at=3):e===B0?(e=Vp(),at=4):at=e===A_?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Mn=e,Ye===null&&(wt=1,fc(t,Fn(e,t.current)))}function $_(){var t=Le.H;return Le.H=lc,t===null?lc:t}function ev(){var t=Le.A;return Le.A=my,t}function jf(){wt=4,sa||(Ke&4194048)!==Ke&&Gn.current!==null||(vs=!0),!(Sa&134217727)&&!(Ya&134217727)||mt===null||oa(mt,Ke,Hn,!1)}function bu(t,e,n){var i=rt;rt|=2;var a=$_(),r=ev();(mt!==t||Ke!==e)&&(mc=null,os(t,e)),e=!1;var s=wt;e:do try{if(at!==0&&Ye!==null){var o=Ye,l=Mn;switch(at){case 8:zh(),s=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(e=!0);var c=at;if(at=0,Mn=null,Fr(t,o,l,c),n&&vs){s=0;break e}break;default:c=at,at=0,Mn=null,Fr(t,o,l,c)}}vy(),s=wt;break}catch(h){J_(t,h)}while(!0);return e&&t.shellSuspendCounter++,wi=rr=null,rt=i,Le.H=a,Le.A=r,Ye===null&&(mt=null,Ke=0,Bc()),s}function vy(){for(;Ye!==null;)tv(Ye)}function xy(t,e){var n=rt;rt|=2;var i=$_(),a=ev();mt!==t||Ke!==e?(mc=null,pc=li()+500,os(t,e)):vs=bo(t,e);e:do try{if(at!==0&&Ye!==null){e=Ye;var r=Mn;t:switch(at){case 1:at=0,Mn=null,Fr(t,e,r,1);break;case 2:case 9:if(Gp(r)){at=0,Mn=null,fm(e);break}e=function(){at!==2&&at!==9||mt!==t||(at=7),di(t)},r.then(e,e);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:Gp(r)?(at=0,Mn=null,fm(e)):(at=0,Mn=null,Fr(t,e,r,7));break;case 5:var s=null;switch(Ye.tag){case 26:s=Ye.memoizedState;case 5:case 27:var o=Ye;if(!s||Sv(s)){at=0,Mn=null;var l=o.sibling;if(l!==null)Ye=l;else{var c=o.return;c!==null?(Ye=c,kc(c)):Ye=null}break t}}at=0,Mn=null,Fr(t,e,r,5);break;case 6:at=0,Mn=null,Fr(t,e,r,6);break;case 8:zh(),wt=6;break e;default:throw Error(K(462))}}Sy();break}catch(h){J_(t,h)}while(!0);return wi=rr=null,Le.H=i,Le.A=a,rt=n,Ye!==null?0:(mt=null,Ke=0,Bc(),wt)}function Sy(){for(;Ye!==null&&!Vx();)tv(Ye)}function tv(t){var e=U_(t.alternate,t,zi);t.memoizedProps=t.pendingProps,e===null?kc(t):Ye=e}function fm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=am(n,e,e.pendingProps,e.type,void 0,Ke);break;case 11:e=am(n,e,e.pendingProps,e.type.render,e.ref,Ke);break;case 5:Eh(e);default:L_(n,e),e=Ye=L0(e,zi),e=U_(n,e,zi)}t.memoizedProps=t.pendingProps,e===null?kc(t):Ye=e}function Fr(t,e,n,i){wi=rr=null,Eh(e),Yr=null,uo=0;var a=e.return;try{if(cy(t,a,e,n,Ke)){wt=1,fc(t,Fn(n,t.current)),Ye=null;return}}catch(r){if(a!==null)throw Ye=a,r;wt=1,fc(t,Fn(n,t.current)),Ye=null;return}e.flags&32768?(et||i===1?t=!0:vs||Ke&536870912?t=!1:(sa=t=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),nv(e,t)):kc(e)}function kc(t){var e=t;do{if(e.flags&32768){nv(e,sa);return}t=e.return;var n=fy(e.alternate,e,zi);if(n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);wt===0&&(wt=5)}function nv(t,e){do{var n=dy(t.alternate,t);if(n!==null){n.flags&=32767,Ye=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Ye=t;return}Ye=t=n}while(t!==null);wt=6,Ye=null}function dm(t,e,n,i,a,r,s,o,l){t.cancelPendingCommit=null;do Xc();while(Zt!==0);if(rt&6)throw Error(K(327));if(e!==null){if(e===t.current)throw Error(K(177));if(r=e.lanes|e.childLanes,r|=uh,Jx(t,n,r,s,o,l),t===mt&&(Ye=mt=null,Ke=0),ss=e,da=t,jr=n,Wf=r,qf=a,Z_=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,Ty(Jl,function(){return ov(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Le.T,Le.T=null,a=tt.p,tt.p=2,s=rt,rt|=4;try{hy(t,e,n)}finally{rt=s,tt.p=a,Le.T=i}}Zt=1,iv(),av(),rv()}}function iv(){if(Zt===1){Zt=0;var t=da,e=ss,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Le.T,Le.T=null;var i=tt.p;tt.p=2;var a=rt;rt|=4;try{V_(e,t);var r=Jf,s=T0(t.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&E0(o.ownerDocument.documentElement,o)){if(l!==null&&ch(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),x=o.textContent.length,S=Math.min(l.start,x),m=l.end===void 0?S:Math.min(l.end,x);!p.extend&&S>m&&(s=m,m=S,S=s);var u=Np(o,S),g=Np(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),S>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Ec=!!Qf,Jf=Qf=null}finally{rt=a,tt.p=i,Le.T=n}}t.current=e,Zt=2}}function av(){if(Zt===2){Zt=0;var t=da,e=ss,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Le.T,Le.T=null;var i=tt.p;tt.p=2;var a=rt;rt|=4;try{I_(t,e.alternate,e)}finally{rt=a,tt.p=i,Le.T=n}}Zt=3}}function rv(){if(Zt===4||Zt===3){Zt=0,kx();var t=da,e=ss,n=jr,i=Z_;e.subtreeFlags&10256||e.flags&10256?Zt=5:(Zt=0,ss=da=null,sv(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(fa=null),nh(n),e=e.stateNode,Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(To,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Le.T,a=tt.p,tt.p=2,Le.T=null;try{for(var r=t.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Le.T=e,tt.p=a}}jr&3&&Xc(),di(t),a=t.pendingLanes,n&4194090&&a&42?t===Yf?no++:(no=0,Yf=t):no=0,Bo(0)}}function sv(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Uo(e)))}function Xc(t){return iv(),av(),rv(),ov()}function ov(){if(Zt!==5)return!1;var t=da,e=Wf;Wf=0;var n=nh(jr),i=Le.T,a=tt.p;try{tt.p=32>n?32:n,Le.T=null,n=qf,qf=null;var r=da,s=jr;if(Zt=0,ss=da=null,jr=0,rt&6)throw Error(K(331));var o=rt;if(rt|=4,Y_(r.current),X_(r,r.current,s,n),rt=o,Bo(0,!1),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(To,r)}catch{}return!0}finally{tt.p=a,Le.T=i,sv(t,e)}}function hm(t,e,n){e=Fn(n,e),e=Hf(t.stateNode,e,2),t=ua(t,e,2),t!==null&&(Ao(t,2),di(t))}function dt(t,e,n){if(t.tag===3)hm(t,t,n);else for(;e!==null;){if(e.tag===3){hm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fa===null||!fa.has(i))){t=Fn(n,t),n=T_(2),i=ua(e,n,2),i!==null&&(b_(n,i,e,t),Ao(i,2),di(i));break}}e=e.return}}function Au(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new gy;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Oh=!0,a.add(n),t=yy.bind(null,t,e,n),e.then(t,t))}function yy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,mt===t&&(Ke&n)===n&&(wt===4||wt===3&&(Ke&62914560)===Ke&&300>li()-Bh?!(rt&2)&&os(t,0):Ph|=n,rs===Ke&&(rs=0)),di(t)}function lv(t,e){e===0&&(e=i0()),t=_s(t,e),t!==null&&(Ao(t,e),di(t))}function My(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lv(t,n)}function Ey(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(e),lv(t,n)}function Ty(t,e){return eh(t,e)}var gc=null,Rr=null,Zf=!1,_c=!1,Ru=!1,ja=0;function di(t){t!==Rr&&t.next===null&&(Rr===null?gc=Rr=t:Rr=Rr.next=t),_c=!0,Zf||(Zf=!0,Ay())}function Bo(t,e){if(!Ru&&_c){Ru=!0;do for(var n=!1,i=gc;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-bn(42|t)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,pm(i,r))}else r=Ke,r=Lc(i,i===mt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||bo(i,r)||(n=!0,pm(i,r));i=i.next}while(n);Ru=!1}}function by(){cv()}function cv(){_c=Zf=!1;var t=0;ja!==0&&(Oy()&&(t=ja),ja=0);for(var e=li(),n=null,i=gc;i!==null;){var a=i.next,r=uv(i,e);r===0?(i.next=null,n===null?gc=a:n.next=a,a===null&&(Rr=n)):(n=i,(t!==0||r&3)&&(_c=!0)),i=a}Bo(t)}function uv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-bn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=Qx(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=mt,n=Ke,n=Lc(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(at===2||at===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&$c(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||bo(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&$c(i),nh(n)){case 2:case 8:n=e0;break;case 32:n=Jl;break;case 268435456:n=t0;break;default:n=Jl}return i=fv.bind(null,t),n=eh(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&$c(i),t.callbackPriority=2,t.callbackNode=null,2}function fv(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Xc()&&t.callbackNode!==n)return null;var i=Ke;return i=Lc(t,t===mt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Q_(t,i,e),uv(t,li()),t.callbackNode!=null&&t.callbackNode===n?fv.bind(null,t):null)}function pm(t,e){if(Xc())return null;Q_(t,e,!0)}function Ay(){By(function(){rt&6?eh($g,by):cv()})}function Ih(){return ja===0&&(ja=n0()),ja}function mm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ul(""+t)}function gm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Ry(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=mm((a[pn]||null).action),s=i.submitter;s&&(e=(e=s[pn]||null)?mm(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new Nc("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ja!==0){var l=s?gm(a,s):new FormData(a);If(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?gm(a,s):new FormData(a),If(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var wu=0;wu<Af.length;wu++){var Cu=Af[wu],wy=Cu.toLowerCase(),Cy=Cu[0].toUpperCase()+Cu.slice(1);Jn(wy,"on"+Cy)}Jn(A0,"onAnimationEnd");Jn(R0,"onAnimationIteration");Jn(w0,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(qS,"onTransitionRun");Jn(YS,"onTransitionStart");Jn(jS,"onTransitionCancel");Jn(C0,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(h){uc(h)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(h){uc(h)}a.currentTarget=null,r=l}}}}function qe(t,e){var n=e[xf];n===void 0&&(n=e[xf]=new Set);var i=t+"__bubble";n.has(i)||(hv(e,t,2,!1),n.add(i))}function Du(t,e,n){var i=0;e&&(i|=4),hv(n,t,i,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function Fh(t){if(!t[al]){t[al]=!0,o0.forEach(function(n){n!=="selectionchange"&&(Dy.has(n)||Du(n,!1,t),Du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,Du("selectionchange",!1,e))}}function hv(t,e,n,i){switch(bv(e)){case 2:var a=iM;break;case 8:a=aM;break;default:a=kh}n=a.bind(null,e,n,t),a=void 0,!Ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Uu(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Dr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}m0(function(){var c=r,h=rh(n),d=[];e:{var f=D0.get(t);if(f!==void 0){var p=Nc,x=t;switch(t){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":p=TS;break;case"focusin":x="focus",p=ou;break;case"focusout":x="blur",p=ou;break;case"beforeblur":case"afterblur":p=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=RS;break;case A0:case R0:case w0:p=mS;break;case C0:p=CS;break;case"scroll":case"scrollend":p=uS;break;case"wheel":p=US;break;case"copy":case"cut":case"paste":p=_S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bp;break;case"toggle":case"beforetoggle":p=NS}var S=(e&4)!==0,m=!S&&(t==="scroll"||t==="scrollend"),u=S?f!==null?f+"Capture":null:f;S=[];for(var g=c,_;g!==null;){var v=g;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||u===null||(v=ro(g,u),v!=null&&S.push(ho(g,v,_))),m)break;g=g.return}0<S.length&&(f=new p(f,x,null,n,h),d.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Mf&&(x=n.relatedTarget||n.fromElement)&&(Dr(x)||x[ms]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Dr(x):null,x!==null&&(m=Eo(x),S=x.tag,x!==m||S!==5&&S!==27&&S!==6)&&(x=null)):(p=null,x=c),p!==x)){if(S=Ep,v="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=bp,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:Hs(p),_=x==null?f:Hs(x),f=new S(v,g+"leave",p,n,h),f.target=m,f.relatedTarget=_,v=null,Dr(h)===c&&(S=new S(u,g+"enter",x,n,h),S.target=_,S.relatedTarget=m,v=S),m=v,p&&x)t:{for(S=p,u=x,g=0,_=S;_;_=cr(_))g++;for(_=0,v=u;v;v=cr(v))_++;for(;0<g-_;)S=cr(S),g--;for(;0<_-g;)u=cr(u),_--;for(;g--;){if(S===u||u!==null&&S===u.alternate)break t;S=cr(S),u=cr(u)}S=null}else S=null;p!==null&&_m(d,f,p,S,!1),x!==null&&m!==null&&_m(d,m,x,S,!0)}}e:{if(f=c?Hs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=Cp;else if(wp(f))if(y0)A=kS;else{A=GS;var C=HS}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&ah(c.elementType)&&(A=Cp):A=VS;if(A&&(A=A(t,c))){S0(d,A,n,h);break e}C&&C(t,f,c),t==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&yf(f,"number",f.value)}switch(C=c?Hs(c):window,t){case"focusin":(wp(C)||C.contentEditable==="true")&&(Nr=C,Tf=c,qs=null);break;case"focusout":qs=Tf=Nr=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,Op(d,n,h);break;case"selectionchange":if(WS)break;case"keydown":case"keyup":Op(d,n,h)}var b;if(lh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Lr?v0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(_0&&n.locale!=="ko"&&(Lr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Lr&&(b=g0()):(ra=h,sh="value"in ra?ra.value:ra.textContent,Lr=!0)),C=vc(c,D),0<C.length&&(D=new Tp(D,t,null,n,h),d.push({event:D,listeners:C}),b?D.data=b:(b=x0(n),b!==null&&(D.data=b)))),(b=PS?BS(t,n):zS(t,n))&&(D=vc(c,"onBeforeInput"),0<D.length&&(C=new Tp("onBeforeInput","beforeinput",null,n,h),d.push({event:C,listeners:D}),C.data=b)),Ry(d,t,c,n,h)}dv(d,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ro(t,n),a!=null&&i.unshift(ho(t,a,r)),a=ro(t,e),a!=null&&i.push(ho(t,a,r))),t.tag===3)return i;t=t.return}return[]}function cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _m(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=ro(n,r),c!=null&&s.unshift(ho(n,c,l))):a||(c=ro(n,r),c!=null&&s.push(ho(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Uy=/\r\n?/g,Ly=/\u0000|\uFFFD/g;function vm(t){return(typeof t=="string"?t:""+t).replace(Uy,`
`).replace(Ly,"")}function pv(t,e){return e=vm(e),vm(t)===e}function Wc(){}function lt(t,e,n,i,a,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||es(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&es(t,""+i);break;case"className":Qo(t,"class",i);break;case"tabIndex":Qo(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Qo(t,n,i);break;case"style":p0(t,i,r);break;case"data":if(e!=="object"){Qo(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Ul(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&lt(t,e,"name",a.name,a,null),lt(t,e,"formEncType",a.formEncType,a,null),lt(t,e,"formMethod",a.formMethod,a,null),lt(t,e,"formTarget",a.formTarget,a,null)):(lt(t,e,"encType",a.encType,a,null),lt(t,e,"method",a.method,a,null),lt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Ul(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Wc);break;case"onScroll":i!=null&&qe("scroll",t);break;case"onScrollEnd":i!=null&&qe("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Ul(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":qe("beforetoggle",t),qe("toggle",t),Dl(t,"popover",i);break;case"xlinkActuate":pi(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":pi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":pi(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":pi(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":pi(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":pi(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":pi(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":pi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":pi(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Dl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=lS.get(n)||n,Dl(t,n,i))}}function Kf(t,e,n,i,a,r){switch(n){case"style":p0(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));t.innerHTML=n}}break;case"children":typeof i=="string"?es(t,i):(typeof i=="number"||typeof i=="bigint")&&es(t,""+i);break;case"onScroll":i!=null&&qe("scroll",t);break;case"onScrollEnd":i!=null&&qe("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Wc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!l0.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),r=t[pn]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Dl(t,n,i)}}}function Kt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qe("error",t),qe("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,e));default:lt(t,e,r,s,n,null)}}a&&lt(t,e,"srcSet",n.srcSet,n,null),i&&lt(t,e,"src",n.src,n,null);return;case"input":qe("invalid",t);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":s=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(K(137,e));break;default:lt(t,e,i,h,n,null)}}f0(t,r,o,l,c,s,a,!1),$l(t);return;case"select":qe("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:lt(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?Vr(t,!!i,e,!1):n!=null&&Vr(t,!!i,n,!0);return;case"textarea":qe("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:lt(t,e,s,o,n,null)}h0(t,i,a,r),$l(t);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:lt(t,e,l,i,n,null)}return;case"dialog":qe("beforetoggle",t),qe("toggle",t),qe("cancel",t),qe("close",t);break;case"iframe":case"object":qe("load",t);break;case"video":case"audio":for(i=0;i<fo.length;i++)qe(fo[i],t);break;case"image":qe("error",t),qe("load",t);break;case"details":qe("toggle",t);break;case"embed":case"source":case"link":qe("error",t),qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,e));default:lt(t,e,c,i,n,null)}return;default:if(ah(e)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Kf(t,e,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&lt(t,e,o,i,n,null))}function Ny(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||lt(t,e,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(K(137,e));break;default:p!==d&&lt(t,e,f,p,i,d)}}Sf(t,s,o,l,c,h,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||lt(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&lt(t,e,a,r,i,l)}e=o,n=s,i=p,f!=null?Vr(t,!!n,f,!1):!!i!=!!n&&(e!=null?Vr(t,!!n,e,!0):Vr(t,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:lt(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(K(91));break;default:a!==r&&lt(t,e,s,a,i,r)}d0(t,f,p);return;case"option":for(var x in n)if(f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x))switch(x){case"selected":t.selected=!1;break;default:lt(t,e,x,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:lt(t,e,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)f=n[S],n.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S)&&lt(t,e,S,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(K(137,e));break;default:lt(t,e,c,f,i,p)}return;default:if(ah(e)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Kf(t,e,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||Kf(t,e,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&lt(t,e,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||lt(t,e,d,f,i,p)}var Qf=null,Jf=null;function xc(t){return t.nodeType===9?t:t.ownerDocument}function xm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mv(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function $f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lu=null;function Oy(){var t=window.event;return t&&t.type==="popstate"?t===Lu?!1:(Lu=t,!0):(Lu=null,!1)}var gv=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(t){return Sm.resolve(null).then(t).catch(zy)}:gv;function zy(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function ym(t,e){var n=e,i=0,a=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=t.ownerDocument;if(n&1&&io(s.documentElement),n&2&&io(s.body),n&4)for(n=s.head,io(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Ro]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){t.removeChild(r),vo(e);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);vo(e)}function ed(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ed(n),ih(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Iy(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ro])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Kn(t.nextSibling),t===null)break}return null}function Fy(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Kn(t.nextSibling),t===null))return null;return t}function td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Hy(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var nd=null;function Mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function _v(t,e,n){switch(e=xc(n),t){case"html":if(t=e.documentElement,!t)throw Error(K(452));return t;case"head":if(t=e.head,!t)throw Error(K(453));return t;case"body":if(t=e.body,!t)throw Error(K(454));return t;default:throw Error(K(451))}}function io(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ih(t)}var Vn=new Map,Em=new Set;function Sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Gi=tt.d;tt.d={f:Gy,r:Vy,D:ky,C:Xy,L:Wy,m:qy,X:jy,S:Yy,M:Zy};function Gy(){var t=Gi.f(),e=Vc();return t||e}function Vy(t){var e=gs(t);e!==null&&e.tag===5&&e.type==="form"?u_(e):Gi.r(t)}var xs=typeof document>"u"?null:document;function vv(t,e,n){var i=xs;if(i&&typeof e=="string"&&e){var a=In(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Em.has(a)||(Em.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),Kt(e,"link",t),Wt(e),i.head.appendChild(e)))}}function ky(t){Gi.D(t),vv("dns-prefetch",t,null)}function Xy(t,e){Gi.C(t,e),vv("preconnect",t,e)}function Wy(t,e,n){Gi.L(t,e,n);var i=xs;if(i&&t&&e){var a='link[rel="preload"][as="'+In(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+In(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+In(n.imageSizes)+'"]')):a+='[href="'+In(t)+'"]';var r=a;switch(e){case"style":r=ls(t);break;case"script":r=Ss(t)}Vn.has(r)||(t=_t({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Vn.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(zo(r))||e==="script"&&i.querySelector(Io(r))||(e=i.createElement("link"),Kt(e,"link",t),Wt(e),i.head.appendChild(e)))}}function qy(t,e){Gi.m(t,e);var n=xs;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+In(i)+'"][href="'+In(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ss(t)}if(!Vn.has(r)&&(t=_t({rel:"modulepreload",href:t},e),Vn.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Io(r)))return}i=n.createElement("link"),Kt(i,"link",t),Wt(i),n.head.appendChild(i)}}}function Yy(t,e,n){Gi.S(t,e,n);var i=xs;if(i&&t){var a=Gr(i).hoistableStyles,r=ls(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(zo(r)))o.loading=5;else{t=_t({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Vn.get(r))&&Hh(t,n);var l=s=i.createElement("link");Wt(l),Kt(l,"link",t),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hl(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function jy(t,e){Gi.X(t,e);var n=xs;if(n&&t){var i=Gr(n).hoistableScripts,a=Ss(t),r=i.get(a);r||(r=n.querySelector(Io(a)),r||(t=_t({src:t,async:!0},e),(e=Vn.get(a))&&Gh(t,e),r=n.createElement("script"),Wt(r),Kt(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Zy(t,e){Gi.M(t,e);var n=xs;if(n&&t){var i=Gr(n).hoistableScripts,a=Ss(t),r=i.get(a);r||(r=n.querySelector(Io(a)),r||(t=_t({src:t,async:!0,type:"module"},e),(e=Vn.get(a))&&Gh(t,e),r=n.createElement("script"),Wt(r),Kt(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Tm(t,e,n,i){var a=(a=la.current)?Sc(a):null;if(!a)throw Error(K(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ls(n.href),n=Gr(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ls(n.href);var r=Gr(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(zo(t)))&&!r._p&&(s.instance=r,s.state.loading=5),Vn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Vn.set(t,n),r||Ky(a,t,n,s.state))),e&&i===null)throw Error(K(528,""));return s}if(e&&i!==null)throw Error(K(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ss(n),n=Gr(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,t))}}function ls(t){return'href="'+In(t)+'"'}function zo(t){return'link[rel="stylesheet"]['+t+"]"}function xv(t){return _t({},t,{"data-precedence":t.precedence,precedence:null})}function Ky(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Kt(e,"link",n),Wt(e),t.head.appendChild(e))}function Ss(t){return'[src="'+In(t)+'"]'}function Io(t){return"script[async]"+t}function bm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+In(n.href)+'"]');if(i)return e.instance=i,Wt(i),i;var a=_t({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Wt(i),Kt(i,"style",a),Hl(i,n.precedence,t),e.instance=i;case"stylesheet":a=ls(n.href);var r=t.querySelector(zo(a));if(r)return e.state.loading|=4,e.instance=r,Wt(r),r;i=xv(n),(a=Vn.get(a))&&Hh(i,a),r=(t.ownerDocument||t).createElement("link"),Wt(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Kt(r,"link",i),e.state.loading|=4,Hl(r,n.precedence,t),e.instance=r;case"script":return r=Ss(n.src),(a=t.querySelector(Io(r)))?(e.instance=a,Wt(a),a):(i=n,(a=Vn.get(r))&&(i=_t({},n),Gh(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Wt(a),Kt(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(K(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Hl(i,n.precedence,t));return e.instance}function Hl(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Hh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Gh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Gl=null;function Am(t,e,n){if(Gl===null){var i=new Map,a=Gl=new Map;a.set(n,i)}else a=Gl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[Ro]||r[$t]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Rm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Qy(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Sv(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var po=null;function Jy(){}function $y(t,e,n){if(po===null)throw Error(K(475));var i=po;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var a=ls(n.href),r=t.querySelector(zo(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=yc.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=r,Wt(r);return}r=t.ownerDocument||t,n=xv(n),(a=Vn.get(a))&&Hh(n,a),r=r.createElement("link"),Wt(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Kt(r,"link",n),e.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(i.count++,e=yc.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function eM(){if(po===null)throw Error(K(475));var t=po;return t.stylesheets&&t.count===0&&id(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&id(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function yc(){if(this.count--,this.count===0){if(this.stylesheets)id(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mc=null;function id(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mc=new Map,e.forEach(tM,t),Mc=null,yc.call(t))}function tM(t,e){if(!(e.state.loading&4)){var n=Mc.get(t);if(n)var i=n.get(null);else{n=new Map,Mc.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=yc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var mo={$$typeof:bi,Provider:null,Consumer:null,_currentValue:Va,_currentValue2:Va,_threadCount:0};function nM(t,e,n,i,a,r,s,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=eu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.hiddenUpdates=eu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function yv(t,e,n,i,a,r,s,o,l,c,h,d){return t=new nM(t,e,n,s,o,l,c,d),e=1,r===!0&&(e|=24),r=En(3,null,null,e),t.current=r,r.stateNode=t,e=mh(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},_h(r),t}function Mv(t){return t?(t=Br,t):Br}function Ev(t,e,n,i,a,r){a=Mv(a),i.context===null?i.context=a:i.pendingContext=a,i=ca(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=ua(t,i,e),n!==null&&(Rn(n,t,e),Zs(n,t,e))}function wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vh(t,e){wm(t,e),(t=t.alternate)&&wm(t,e)}function Tv(t){if(t.tag===13){var e=_s(t,67108864);e!==null&&Rn(e,t,67108864),Vh(t,67108864)}}var Ec=!0;function iM(t,e,n,i){var a=Le.T;Le.T=null;var r=tt.p;try{tt.p=2,kh(t,e,n,i)}finally{tt.p=r,Le.T=a}}function aM(t,e,n,i){var a=Le.T;Le.T=null;var r=tt.p;try{tt.p=8,kh(t,e,n,i)}finally{tt.p=r,Le.T=a}}function kh(t,e,n,i){if(Ec){var a=ad(i);if(a===null)Uu(t,e,i,Tc,n),Cm(t,i);else if(sM(a,t,e,n,i))i.stopPropagation();else if(Cm(t,i),e&4&&-1<rM.indexOf(t)){for(;a!==null;){var r=gs(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Na(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-bn(s);o.entanglements[1]|=l,s&=~l}di(r),!(rt&6)&&(pc=li()+500,Bo(0))}}break;case 13:o=_s(r,2),o!==null&&Rn(o,r,2),Vc(),Vh(r,2)}if(r=ad(i),r===null&&Uu(t,e,i,Tc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Uu(t,e,i,null,n)}}function ad(t){return t=rh(t),Xh(t)}var Tc=null;function Xh(t){if(Tc=null,t=Dr(t),t!==null){var e=Eo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Tc=t,null}function bv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xx()){case $g:return 2;case e0:return 8;case Jl:case Wx:return 32;case t0:return 268435456;default:return 32}default:return 32}}var rd=!1,ha=null,pa=null,ma=null,go=new Map,_o=new Map,na=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cm(t,e){switch(t){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function Us(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=gs(e),e!==null&&Tv(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function sM(t,e,n,i,a){switch(e){case"focusin":return ha=Us(ha,t,e,n,i,a),!0;case"dragenter":return pa=Us(pa,t,e,n,i,a),!0;case"mouseover":return ma=Us(ma,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return go.set(r,Us(go.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,_o.set(r,Us(_o.get(r)||null,t,e,n,i,a)),!0}return!1}function Av(t){var e=Dr(t.target);if(e!==null){var n=Eo(e);if(n!==null){if(e=n.tag,e===13){if(e=Zg(n),e!==null){t.blockedOn=e,$x(t.priority,function(){if(n.tag===13){var i=An();i=th(i);var a=_s(n,i);a!==null&&Rn(a,n,i),Vh(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ad(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mf=i,n.target.dispatchEvent(i),Mf=null}else return e=gs(n),e!==null&&Tv(e),t.blockedOn=n,!1;e.shift()}return!0}function Dm(t,e,n){Vl(t)&&n.delete(e)}function oM(){rd=!1,ha!==null&&Vl(ha)&&(ha=null),pa!==null&&Vl(pa)&&(pa=null),ma!==null&&Vl(ma)&&(ma=null),go.forEach(Dm),_o.forEach(Dm)}function rl(t,e){t.blockedOn===e&&(t.blockedOn=null,rd||(rd=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,oM)))}var sl=null;function Um(t){sl!==t&&(sl=t,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,function(){sl===t&&(sl=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Xh(i||n)===null)continue;break}var r=gs(n);r!==null&&(t.splice(e,3),e-=3,If(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function vo(t){function e(l){return rl(l,t)}ha!==null&&rl(ha,t),pa!==null&&rl(pa,t),ma!==null&&rl(ma,t),go.forEach(e),_o.forEach(e);for(var n=0;n<na.length;n++){var i=na[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)Av(n),n.blockedOn===null&&na.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[pn]||null;if(typeof r=="function")s||Um(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[pn]||null)o=s.formAction;else if(Xh(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Um(n)}}}function Wh(t){this._internalRoot=t}qc.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(K(409));var n=e.current,i=An();Ev(n,i,t,e,null,null)};qc.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ev(t.current,2,null,t,null,null),Vc(),e[ms]=null}};function qc(t){this._internalRoot=t}qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=s0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<na.length&&e!==0&&e<na[n].priority;n++);na.splice(n,0,t),n===0&&Av(t)}};var Lm=Yg.version;if(Lm!=="19.1.0")throw Error(K(527,Lm,"19.1.0"));tt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(K(188)):(t=Object.keys(t).join(","),Error(K(268,t)));return t=zx(e),t=t!==null?Kg(t):null,t=t===null?null:t.stateNode,t};var lM={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Le,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{To=ol.inject(lM),Tn=ol}catch{}}Dc.createRoot=function(t,e){if(!jg(t))throw Error(K(299));var n=!1,i="",a=y_,r=M_,s=E_,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=yv(t,1,!1,null,null,n,i,a,r,s,o,null),t[ms]=e.current,Fh(t),new Wh(e)};Dc.hydrateRoot=function(t,e,n){if(!jg(t))throw Error(K(299));var i=!1,a="",r=y_,s=M_,o=E_,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),e=yv(t,1,!0,e,n??null,i,a,r,s,o,l,c),e.context=Mv(null),n=e.current,i=An(),i=th(i),a=ca(i),a.callback=null,ua(n,a,i),n=i,e.current.lanes=n,Ao(e,n),di(e),t[ms]=e.current,Fh(t),new qc(e)};Dc.version="19.1.0";function Rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)}catch(t){console.error(t)}}Rv(),Gg.exports=Dc;var cM=Gg.exports;const uM=Dg(cM),fM=t=>{const e=/(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\*\*[^*\n]+\*\*)/g;return((i,a)=>i.split(e).map((s,o)=>{const l=`${a}-${o}`;if(!s)return null;if(s.startsWith("**")&&s.endsWith("**")&&s.length>4){const c=s.slice(2,-2).trim();return De.jsx("strong",{className:"terminal-bold",children:c},l)}return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)?De.jsx("a",{href:`mailto:${s}`,className:"terminal-link",onClick:c=>c.stopPropagation(),children:s},l):/^https?:\/\/[^\s]+$/.test(s)?De.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"terminal-link",onClick:c=>c.stopPropagation(),children:s},l):s.includes(`
`)?s.split(`
`).map((c,h,d)=>De.jsxs(Hg.Fragment,{children:[c,h<d.length-1&&De.jsx("br",{})]},`${l}-line-${h}`)):s}).filter(Boolean))(t,0)},dM=({commands:t})=>De.jsx("div",{className:"space-y-3",children:t.map((e,n)=>De.jsxs("div",{className:"space-y-1",children:[De.jsxs("div",{className:"flex items-center",children:[De.jsx("span",{className:"text-[var(--terminal-prompt)] mr-2",children:"$"}),De.jsx("span",{className:"text-[var(--terminal-command)]",children:e.input})]}),De.jsx("div",{className:"text-[var(--terminal-output)] whitespace-pre-wrap pl-4",children:fM(e.output)})]},n))}),hM=Xe.forwardRef(({value:t,onChange:e,onKeyDown:n},i)=>De.jsxs("div",{className:"flex items-center",children:[De.jsx("span",{className:"text-[var(--terminal-prompt)] mr-2",children:"$"}),De.jsx("input",{ref:i,type:"text",value:t,onChange:a=>e(a.target.value),onKeyDown:n,className:"flex-1 bg-transparent outline-none text-[var(--terminal-command)] placeholder-[var(--terminal-text)]/50",spellCheck:"false",autoComplete:"off"})]})),Nm={1:{name:"4mation Technologies AI Integration",description:"Leading AI integration projects and improving internal workflows using AWS Bedrock and other AI technologies.",techStack:["AWS Bedrock","ChatGPT","Python","TypeScript","React"],role:"Full Stack Software Engineer",period:"Feb 2024 - Present"},2:{name:"CreditorWatch Microservices Migration",description:"Led the migration of legacy monolith systems to a modern microservice-based AWS architecture, implementing pub/sub for high-throughput data streams.",techStack:["AWS","Microservices","PHP","Node.js","React"],role:"Senior Software Engineer",period:"Feb 2020 - July 2022"},3:{name:"Lendlease Barangaroo Digital Signage",description:"Developed digital signage DSP system for the Barangaroo development project.",techStack:["PHP","JavaScript","React","AWS"],role:"Freelance Developer",period:"Dec 2015 - Jun 2016"}},Om=`
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

Type 'help' to see available commands.`,pM=`
ronniepyne.com

Type 'help' to see available commands.`,mM=["help","about","skills","projects","contact"],bc={title:{name:"title",description:"Display the title art",usage:"title",execute:()=>typeof window<"u"&&window.innerWidth<768?pM:Om,hidden:!0},help:{name:"help",description:"Show available commands",usage:"help",execute:()=>`Available commands:

${Object.entries(bc).filter(([e,n])=>!n.hidden).map(([e,n])=>`**${e}**: ${n.description}
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
• DevOps Practices`},projects:{name:"projects",description:"View my projects",usage:"projects [number]",execute:t=>{if(t.length===0)return`My Projects:

${Object.entries(Nm).map(([i,a])=>`${i}. ${a.name} - ${a.description}`).join(`

`)}

Type 'projects <number>' for more details about a specific project.`;const e=parseInt(t[0]),n=Nm[e];return n?`${n.name}

Role: ${n.role}
Period: ${n.period}

Description: ${n.description}

Tech Stack: ${n.techStack.join(", ")}`:`Project ${e} not found. Type 'projects' to see available projects.`}},contact:{name:"contact",description:"Get my contact information",usage:"contact",execute:()=>`Let's Connect!

Contact:
• Email: ronniepyne@gmail.com

Professional Profiles:
• Portfolio: https://www.ronniepyne.com
• GitHub: https://www.github.com/perverse
• LinkedIn: https://www.linkedin.com/in/ronnie-pyne-279b7383

I'm always interested in discussing new opportunities and collaborations!`},clear:{name:"clear",description:"Clear the terminal screen",usage:"clear",execute:()=>"Terminal cleared.",hidden:!0},theme:{name:"theme",description:"Switch visual theme and background",usage:"theme [line|matrix|hex|aurora|kelp]",execute:(t,e)=>{if(t.length===0)return`Available themes:
• line - Cyberpunk city skyline with cyan colors
• matrix - Digital rain with classic Matrix green
• hex - Hexagonal grid with purple/blue neon accents
• aurora - Aurora Borealis animated background
• kelp - Underwater kelp forest with gentle sway

Usage: theme line | theme matrix | theme hex | theme aurora | theme kelp`;const n=t[0].toLowerCase();return n!=="line"&&n!=="matrix"&&n!=="hex"&&n!=="aurora"&&n!=="kelp"?`Invalid theme: ${n}
Available themes: **line**, **matrix**, **hex**, **aurora**, **kelp**

Usage: **theme line** or **theme matrix** or **theme hex** or **theme aurora** or **theme kelp**`:e?(e(n),`Theme switched to: **${n}**

${n==="matrix"?`Welcome to the Matrix... 🟢
Green terminal colors and digital rain activated.`:n==="hex"?`Hex mode engaged ⬡
Purple/blue neon hex grid activated.`:n==="aurora"?`Aurora Borealis mode 🌌
Enjoy the animated aurora lights!`:n==="kelp"?`Kelp mode �
Underwater vibes with gently swaying kelp.`:`Back to the line cityscape 🏙️
Cyan terminal colors and city skyline activated.`}`):"Theme switching not available in this context."},excludeFromAll:!0},all:{name:"all",description:"Display all command outputs in sequence",usage:"all",execute:()=>{const t=typeof window<"u"&&window.innerWidth<768?36:50;return mM.map(e=>{const n=bc[e].execute([]);return`
${"-".repeat(t)}

$ ${e}

${n}`}).join(`
`)}}};function Ls(t,e){const[n,...i]=t.trim().toLowerCase().split(/\s+/);return n?n in bc?bc[n].execute(i,e):`Command not found: ${n}. Type 'help' for available commands.`:""}const gM={line:{"--terminal-bg":"rgba(8, 8, 16, 0.85)","--terminal-header-bg":"rgba(45, 50, 65, 0.9)","--terminal-border":"#292e42","--terminal-text":"#a9b1d6","--terminal-prompt":"#7aa2f7","--terminal-command":"#7dcfff","--terminal-output":"#c0caf5","--terminal-error":"#f7768e","--terminal-warning":"#e0af68","--terminal-success":"#9ece6a","--terminal-input-bg":"rgba(8, 8, 16, 0.80)","--terminal-grid-line":"rgba(41, 46, 66, 0.1)","--terminal-glow":`
      0 0 20px rgba(41, 46, 66, 0.3),
      0 0 40px rgba(77, 204, 255, 0.15),
      0 0 80px rgba(77, 204, 255, 0.08)
    `},matrix:{"--terminal-bg":"rgba(2, 8, 2, 0.70)","--terminal-header-bg":"rgba(5, 15, 5, 0.85)","--terminal-border":"#1a4d1a","--terminal-text":"#00ff41","--terminal-prompt":"#00cc33","--terminal-command":"#00ff66","--terminal-output":"#00dd44","--terminal-error":"#ff3333","--terminal-warning":"#ffaa00","--terminal-success":"#00ff88","--terminal-input-bg":"rgba(2, 8, 2, 0.65)","--terminal-grid-line":"rgba(41, 46, 66, 0.1)","--terminal-glow":`
      0 0 20px rgba(0, 255, 65, 0.2),
      0 0 40px rgba(0, 255, 65, 0.1),
      0 0 80px rgba(0, 255, 65, 0.05)
    `},hex:{"--terminal-bg":"rgba(8, 8, 16, 0.85)","--terminal-header-bg":"rgba(45, 50, 65, 0.9)","--terminal-border":"#2b2442","--terminal-text":"#d6d0ff","--terminal-prompt":"#a78bfa","--terminal-command":"#8fbafc","--terminal-output":"#e2ddff","--terminal-error":"#ff6b8f","--terminal-warning":"#f1c078","--terminal-success":"#8be7a1","--terminal-input-bg":"rgba(8, 8, 16, 0.80)","--terminal-grid-line":"rgba(41, 46, 66, 0.1)","--terminal-glow":`
      0 0 20px rgba(41, 46, 66, 0.3),
      0 0 40px rgba(77, 204, 255, 0.15),
      0 0 80px rgba(77, 204, 255, 0.08)
    `},aurora:{"--terminal-bg":"rgba(12, 12, 14, 0.82)","--terminal-header-bg":"rgba(22, 22, 26, 0.88)","--terminal-border":"#2b2b2f","--terminal-text":"#e6e7ea","--terminal-prompt":"#f2f3f5","--terminal-command":"#d4d5d8","--terminal-output":"#f7f8fa","--terminal-error":"#ff8a8a","--terminal-warning":"#ffd58a","--terminal-success":"#9fe3b0","--terminal-input-bg":"rgba(12, 12, 14, 0.76)","--terminal-grid-line":"rgba(235, 235, 240, 0.05)","--terminal-glow":`
      0 0 16px rgba(255, 255, 255, 0.22),
      0 0 32px rgba(255, 255, 255, 0.14),
      0 0 64px rgba(255, 255, 255, 0.08)
    `},kelp:{"--terminal-bg":"rgba(6, 12, 10, 0.82)","--terminal-header-bg":"rgba(10, 18, 16, 0.88)","--terminal-border":"#1a2b22","--terminal-text":"#d6f5e1","--terminal-prompt":"#aef2c9","--terminal-command":"#8fe3b5","--terminal-output":"#e4fff2","--terminal-error":"#ff8a9a","--terminal-warning":"#ffe08a","--terminal-success":"#9fe3b0","--terminal-input-bg":"rgba(6, 12, 10, 0.76)","--terminal-grid-line":"rgba(100, 180, 140, 0.05)","--terminal-glow":`
      0 0 16px rgba(40, 180, 120, 0.22),
      0 0 32px rgba(60, 200, 140, 0.14),
      0 0 64px rgba(60, 200, 140, 0.08)
    `}},wv=Xe.createContext(void 0),Cv=()=>{const t=Xe.useContext(wv);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},_M=({children:t})=>{const[e,n]=Xe.useState(()=>{if(typeof window<"u"){const r=localStorage.getItem("theme");if(r&&(r==="line"||r==="matrix"||r==="hex"||r==="aurora"||r==="kelp"))return r}return"hex"}),i=r=>{const s=document.documentElement,o=gM[r];s.setAttribute("data-theme",r),Object.entries(o).forEach(([l,c])=>{s.style.setProperty(l,c)})},a=r=>{n(r),i(r),typeof window<"u"&&localStorage.setItem("theme",r)};return Xe.useLayoutEffect(()=>{i(e)},[]),De.jsx(wv.Provider,{value:{currentTheme:e,setTheme:a,applyTheme:i},children:t})};function vM(){const[t,e]=Xe.useState([]),[n,i]=Xe.useState(""),[a,r]=Xe.useState(-1),s=Xe.useRef(null),o=Xe.useRef(null),{setTheme:l}=Cv();Xe.useEffect(()=>{const p={input:"title",output:Ls("title",l)};e([p]);const x=setTimeout(()=>{var S;(S=s.current)==null||S.focus()},100);return()=>clearTimeout(x)},[]),Xe.useEffect(()=>{o.current&&(o.current.scrollTop=o.current.scrollHeight)},[t]);const c=p=>{if(p.preventDefault(),!n.trim())return;const x=n.trim().toLowerCase();if(x==="all"){e(g=>g.map(_=>({..._,hidden:!0})));const m={input:"title",output:Ls("title",l)},u={input:x,output:Ls(x,l)};e(g=>[...g,m,u]),i(""),r(-1);return}if(x==="clear"){const m={input:x,output:Ls(x,l)};e(u=>[...u.map(g=>({...g,hidden:!0})),m]),i(""),r(-1);return}const S={input:n,output:Ls(n,l)};e(m=>[...m,S]),i(""),r(-1)},h=p=>{var S;const x=window.getSelection();if(!x||x.toString().length===0){const m=p.target;m.tagName!=="SPAN"&&m.tagName!=="PRE"&&!m.closest("pre")&&(p.preventDefault(),(S=s.current)==null||S.focus())}},d=p=>{if(p.key==="Enter")c(p);else if(p.key==="ArrowUp"){if(p.preventDefault(),a<t.length-1){const x=a+1;r(x),i(t[t.length-1-x].input)}}else if(p.key==="ArrowDown")if(p.preventDefault(),a>0){const x=a-1;r(x),i(t[t.length-1-x].input)}else r(-1),i("")},f=t.filter(p=>!p.hidden);return De.jsx("section",{className:"py-20 h-[calc(100vh-53px)]",children:De.jsx("div",{className:"container mx-auto px-4 h-full",children:De.jsx("div",{className:"w-full h-full border border-[var(--terminal-border)] rounded-lg overflow-hidden font-mono text-sm backdrop-blur-md bg-[var(--terminal-bg)]",onClick:h,style:{boxShadow:"var(--terminal-glow)"},children:De.jsxs("div",{className:"h-full flex flex-col",children:[De.jsxs("div",{className:"h-7 flex items-center justify-between px-4 bg-[var(--terminal-header-bg)] backdrop-blur-sm",children:[De.jsxs("div",{className:"flex space-x-2",children:[De.jsx("div",{className:"w-3 h-3 rounded-full bg-[var(--terminal-error)]"}),De.jsx("div",{className:"w-3 h-3 rounded-full bg-[var(--terminal-warning)]"}),De.jsx("div",{className:"w-3 h-3 rounded-full bg-[var(--terminal-success)]"})]}),De.jsx("div",{className:"text-gray-300 font-medium select-none font-sans text-[11px] tracking-[0.01em]",children:"ronniepyne.com"}),De.jsx("div",{className:"w-14"})," "]}),De.jsx("div",{ref:o,className:"flex-1 overflow-y-auto p-4 space-y-2 scroll-smooth text-[var(--terminal-text)] select-text terminal-scrollbar bg-[linear-gradient(to_bottom,var(--terminal-grid-line)_1px,transparent_1px)] bg-[length:100%_8px] bg-[position:0_-4px]",children:De.jsx(dM,{commands:f})}),De.jsx("form",{onSubmit:c,className:"p-4 border-t border-[var(--terminal-border)] bg-[var(--terminal-input-bg)] backdrop-blur-sm",children:De.jsx(hM,{ref:s,value:n,onChange:i,onSubmit:()=>c(new Event("submit")),onKeyDown:d})})]})})})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="179",xM=0,Pm=1,SM=2,Dv=1,yM=2,Mi=3,ya=0,dn=1,Ti=2,ga=0,Zr=1,Bm=2,zm=3,Im=4,MM=5,Ia=100,EM=101,TM=102,bM=103,AM=104,RM=200,wM=201,CM=202,DM=203,sd=204,od=205,UM=206,LM=207,NM=208,OM=209,PM=210,BM=211,zM=212,IM=213,FM=214,ld=0,cd=1,ud=2,cs=3,fd=4,dd=5,hd=6,pd=7,Uv=0,HM=1,GM=2,_a=0,VM=1,kM=2,XM=3,WM=4,qM=5,YM=6,jM=7,Lv=300,us=301,fs=302,md=303,gd=304,Yc=306,_d=1e3,Ha=1001,vd=1002,Qn=1003,ZM=1004,ll=1005,ai=1006,Nu=1007,Ga=1008,Ii=1009,Nv=1010,Ov=1011,xo=1012,Yh=1013,er=1014,Di=1015,Fo=1016,jh=1017,Zh=1018,So=1020,Pv=35902,Bv=1021,zv=1022,Zn=1023,yo=1026,Mo=1027,Iv=1028,Kh=1029,Fv=1030,Qh=1031,Jh=1033,kl=33776,Xl=33777,Wl=33778,ql=33779,xd=35840,Sd=35841,yd=35842,Md=35843,Ed=36196,Td=37492,bd=37496,Ad=37808,Rd=37809,wd=37810,Cd=37811,Dd=37812,Ud=37813,Ld=37814,Nd=37815,Od=37816,Pd=37817,Bd=37818,zd=37819,Id=37820,Fd=37821,Yl=36492,Hd=36494,Gd=36495,Hv=36283,Vd=36284,kd=36285,Xd=36286,KM=3200,QM=3201,JM=0,$M=1,ia="",On="srgb",ds="srgb-linear",Ac="linear",ot="srgb",ur=7680,Fm=519,eE=512,tE=513,nE=514,Gv=515,iE=516,aE=517,rE=518,sE=519,Hm=35044,Gm="300 es",ri=2e3,Rc=2001;class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,Wd=180/Math.PI;function Ho(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function oE(t,e){return(t%e+e)%e}function Pu(t,e,n){return(1-n)*t+n*e}function Ns(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Go{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3];const f=r[s+0],p=r[s+1],x=r[s+2],S=r[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=x,e[n+3]=S;return}if(d!==S||l!==f||c!==p||h!==x){let m=1-o;const u=l*f+c*p+h*x+d*S,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const A=Math.sqrt(_),C=Math.atan2(A,u*g);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}const v=o*g;if(l=l*m+f*v,c=c*m+p*v,h=h*m+x*v,d=d*m+S*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=r[s],f=r[s+1],p=r[s+2],x=r[s+3];return e[n]=o*x+h*d+l*p-c*f,e[n+1]=l*x+h*f+c*d-o*p,e[n+2]=c*x+h*p+o*f-l*d,e[n+3]=h*x-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(r/2),f=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=f*h*d+c*p*x,this._y=c*p*d-f*h*x,this._z=c*h*x+f*p*d,this._w=c*h*d-f*p*x;break;case"YXZ":this._x=f*h*d+c*p*x,this._y=c*p*d-f*h*x,this._z=c*h*x-f*p*d,this._w=c*h*d+f*p*x;break;case"ZXY":this._x=f*h*d-c*p*x,this._y=c*p*d+f*h*x,this._z=c*h*x+f*p*d,this._w=c*h*d-f*p*x;break;case"ZYX":this._x=f*h*d-c*p*x,this._y=c*p*d+f*h*x,this._z=c*h*x-f*p*d,this._w=c*h*d+f*p*x;break;case"YZX":this._x=f*h*d+c*p*x,this._y=c*p*d+f*h*x,this._z=c*h*x-f*p*d,this._w=c*h*d-f*p*x;break;case"XZY":this._x=f*h*d-c*p*x,this._y=c*p*d-f*h*x,this._z=c*h*x+f*p*d,this._w=c*h*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+a*c-r*l,this._y=a*h+s*l+r*o-i*c,this._z=r*h+s*c+i*l-a*o,this._w=s*h-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*e._w+i*e._x+a*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),h=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*c+s*d-o*h,this.y=i+l*h+o*c-r*d,this.z=a+l*d+r*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bu=new V,Vm=new Go;class Fe{constructor(e,n,i,a,r,s,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],x=i[8],S=a[0],m=a[3],u=a[6],g=a[1],_=a[4],v=a[7],A=a[2],C=a[5],b=a[8];return r[0]=s*S+o*g+l*A,r[3]=s*m+o*_+l*C,r[6]=s*u+o*v+l*b,r[1]=c*S+h*g+d*A,r[4]=c*m+h*_+d*C,r[7]=c*u+h*v+d*b,r[2]=f*S+p*g+x*A,r[5]=f*m+p*_+x*C,r[8]=f*u+p*v+x*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*s*h-n*o*c-i*r*h+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,f=o*l-h*r,p=c*r-s*l,x=n*d+i*f+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=d*S,e[1]=(a*c-h*i)*S,e[2]=(o*i-a*s)*S,e[3]=f*S,e[4]=(h*n-a*l)*S,e[5]=(a*r-o*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(s*n-i*r)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(zu.makeScale(e,n)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,n){return this.premultiply(zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zu=new Fe;function Vv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lE(){const t=wc("canvas");return t.style.display="block",t}const km={};function Kr(t){t in km||(km[t]=!0,console.warn(t))}function cE(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Xm=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wm=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uE(){const t={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ot&&(a.r=Ni(a.r),a.g=Ni(a.g),a.b=Ni(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ot&&(a.r=Qr(a.r),a.g=Qr(a.g),a.b=Qr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ia?Ac:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ds]:{primaries:e,whitePoint:i,transfer:Ac,toXYZ:Xm,fromXYZ:Wm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Xm,fromXYZ:Wm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const Je=uE();function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fr;class fE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fr===void 0&&(fr=wc("canvas")),fr.width=e.width,fr.height=e.height;const a=fr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=fr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Ni(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dE=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Iu(a[s].image)):r.push(Iu(a[s]))}else r=Iu(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function Iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hE=0;const Fu=new V;class hn extends ys{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Ha,a=Ha,r=ai,s=Ga,o=Zn,l=Ii,c=hn.DEFAULT_ANISOTROPY,h=ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Ho(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fu).x}get height(){return this.source.getSize(Fu).y}get depth(){return this.source.getSize(Fu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case Ha:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case Ha:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Lv;hn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,a=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],x=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,v=(p+1)/2,A=(u+1)/2,C=(h+f)/4,b=(d+S)/4,D=(x+m)/4;return _>v&&_>A?_<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(_),a=C/i,r=b/i):v>A?v<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),i=C/a,r=D/a):A<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(A),i=b/r,a=D/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-x)*(m-x)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-S)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pE extends ys{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const a={width:e,height:n,depth:i.depth},r=new hn(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new $h(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends pE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class kv extends hn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mE extends hn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,kn):kn.fromBufferAttribute(r,s),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),ul.subVectors(this.max,Os),dr.subVectors(e.a,Os),hr.subVectors(e.b,Os),pr.subVectors(e.c,Os),Xi.subVectors(hr,dr),Wi.subVectors(pr,hr),Ra.subVectors(dr,pr);let n=[0,-Xi.z,Xi.y,0,-Wi.z,Wi.y,0,-Ra.z,Ra.y,Xi.z,0,-Xi.x,Wi.z,0,-Wi.x,Ra.z,0,-Ra.x,-Xi.y,Xi.x,0,-Wi.y,Wi.x,0,-Ra.y,Ra.x,0];return!Hu(n,dr,hr,pr,ul)||(n=[1,0,0,0,1,0,0,0,1],!Hu(n,dr,hr,pr,ul))?!1:(fl.crossVectors(Xi,Wi),n=[fl.x,fl.y,fl.z],Hu(n,dr,hr,pr,ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new V,new V,new V,new V,new V,new V,new V,new V],kn=new V,cl=new Vo,dr=new V,hr=new V,pr=new V,Xi=new V,Wi=new V,Ra=new V,Os=new V,ul=new V,fl=new V,wa=new V;function Hu(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){wa.fromArray(t,r);const o=a.x*Math.abs(wa.x)+a.y*Math.abs(wa.y)+a.z*Math.abs(wa.z),l=e.dot(wa),c=n.dot(wa),h=i.dot(wa);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const gE=new Vo,Ps=new V,Gu=new V;class ep{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gE.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const n=Ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ps,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(Gu)),this.expandByPoint(Ps.copy(e.center).sub(Gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vi=new V,Vu=new V,dl=new V,qi=new V,ku=new V,hl=new V,Xu=new V;class _E{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Vu.copy(e).add(n).multiplyScalar(.5),dl.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(Vu);const r=e.distanceTo(n)*.5,s=-this.direction.dot(dl),o=qi.dot(this.direction),l=-qi.dot(dl),c=qi.lengthSq(),h=Math.abs(1-s*s);let d,f,p,x;if(h>0)if(d=s*l-o,f=s*o-l,x=r*h,d>=0)if(f>=-x)if(f<=x){const S=1/h;d*=S,f*=S,p=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-s*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(s*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=s>0?-r:r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Vu).addScaledVector(dl,f),p}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),a=vi.dot(vi)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,a,r){ku.subVectors(n,e),hl.subVectors(i,e),Xu.crossVectors(ku,hl);let s=this.direction.dot(Xu),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(hl.crossVectors(qi,hl));if(l<0)return null;const c=o*this.direction.dot(ku.cross(qi));if(c<0||l+c>s)return null;const h=-o*qi.dot(Xu);return h<0?null:this.at(h/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,i,a,r,s,o,l,c,h,d,f,p,x,S,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,h,d,f,p,x,S,m)}set(e,n,i,a,r,s,o,l,c,h,d,f,p,x,S,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=x,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,a=1/mr.setFromMatrixColumn(e,0).length(),r=1/mr.setFromMatrixColumn(e,1).length(),s=1/mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=s*h,p=s*d,x=o*h,S=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=f-S*c,n[9]=-o*l,n[2]=S-f*c,n[6]=x+p*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,x=c*h,S=c*d;n[0]=f+S*o,n[4]=x*o-p,n[8]=s*c,n[1]=s*d,n[5]=s*h,n[9]=-o,n[2]=p*o-x,n[6]=S+f*o,n[10]=s*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,x=c*h,S=c*d;n[0]=f-S*o,n[4]=-s*d,n[8]=x+p*o,n[1]=p+x*o,n[5]=s*h,n[9]=S-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const f=s*h,p=s*d,x=o*h,S=o*d;n[0]=l*h,n[4]=x*c-p,n[8]=f*c+S,n[1]=l*d,n[5]=S*c+f,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,x=o*l,S=o*c;n[0]=l*h,n[4]=S-f*d,n[8]=x*d+p,n[1]=d,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+x,n[10]=f-S*d}else if(e.order==="XZY"){const f=s*l,p=s*c,x=o*l,S=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+S,n[5]=s*h,n[9]=p*d-x,n[2]=x*d-p,n[6]=o*h,n[10]=S*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vE,e,xE)}lookAt(e,n,i){const a=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Yi.crossVectors(i,Sn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Yi.crossVectors(i,Sn)),Yi.normalize(),pl.crossVectors(Sn,Yi),a[0]=Yi.x,a[4]=pl.x,a[8]=Sn.x,a[1]=Yi.y,a[5]=pl.y,a[9]=Sn.y,a[2]=Yi.z,a[6]=pl.z,a[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],x=i[2],S=i[6],m=i[10],u=i[14],g=i[3],_=i[7],v=i[11],A=i[15],C=a[0],b=a[4],D=a[8],T=a[12],M=a[1],w=a[5],F=a[9],k=a[13],W=a[2],Y=a[6],L=a[10],z=a[14],O=a[3],Z=a[7],$=a[11],de=a[15];return r[0]=s*C+o*M+l*W+c*O,r[4]=s*b+o*w+l*Y+c*Z,r[8]=s*D+o*F+l*L+c*$,r[12]=s*T+o*k+l*z+c*de,r[1]=h*C+d*M+f*W+p*O,r[5]=h*b+d*w+f*Y+p*Z,r[9]=h*D+d*F+f*L+p*$,r[13]=h*T+d*k+f*z+p*de,r[2]=x*C+S*M+m*W+u*O,r[6]=x*b+S*w+m*Y+u*Z,r[10]=x*D+S*F+m*L+u*$,r[14]=x*T+S*k+m*z+u*de,r[3]=g*C+_*M+v*W+A*O,r[7]=g*b+_*w+v*Y+A*Z,r[11]=g*D+_*F+v*L+A*$,r[15]=g*T+_*k+v*z+A*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],x=e[3],S=e[7],m=e[11],u=e[15];return x*(+r*l*d-a*c*d-r*o*f+i*c*f+a*o*p-i*l*p)+S*(+n*l*p-n*c*f+r*s*f-a*s*p+a*c*h-r*l*h)+m*(+n*c*d-n*o*p-r*s*d+i*s*p+r*o*h-i*c*h)+u*(-a*o*h-n*l*d+n*o*f+a*s*d-i*s*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],x=e[12],S=e[13],m=e[14],u=e[15],g=d*m*c-S*f*c+S*l*p-o*m*p-d*l*u+o*f*u,_=x*f*c-h*m*c-x*l*p+s*m*p+h*l*u-s*f*u,v=h*S*c-x*d*c+x*o*p-s*S*p-h*o*u+s*d*u,A=x*d*l-h*S*l-x*o*f+s*S*f+h*o*m-s*d*m,C=n*g+i*_+a*v+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=g*b,e[1]=(S*f*r-d*m*r-S*a*p+i*m*p+d*a*u-i*f*u)*b,e[2]=(o*m*r-S*l*r+S*a*c-i*m*c-o*a*u+i*l*u)*b,e[3]=(d*l*r-o*f*r-d*a*c+i*f*c+o*a*p-i*l*p)*b,e[4]=_*b,e[5]=(h*m*r-x*f*r+x*a*p-n*m*p-h*a*u+n*f*u)*b,e[6]=(x*l*r-s*m*r-x*a*c+n*m*c+s*a*u-n*l*u)*b,e[7]=(s*f*r-h*l*r+h*a*c-n*f*c-s*a*p+n*l*p)*b,e[8]=v*b,e[9]=(x*d*r-h*S*r-x*i*p+n*S*p+h*i*u-n*d*u)*b,e[10]=(s*S*r-x*o*r+x*i*c-n*S*c-s*i*u+n*o*u)*b,e[11]=(h*o*r-s*d*r-h*i*c+n*d*c+s*i*p-n*o*p)*b,e[12]=A*b,e[13]=(h*S*a-x*d*a+x*i*f-n*S*f-h*i*m+n*d*m)*b,e[14]=(x*o*a-s*S*a-x*i*l+n*S*l+s*i*m-n*o*m)*b,e[15]=(s*d*a-h*o*a+h*i*l-n*d*l-s*i*f+n*o*f)*b,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,h=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*s,0,c*l-a*o,h*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,h=s+s,d=o+o,f=r*c,p=r*h,x=r*d,S=s*h,m=s*d,u=o*d,g=l*c,_=l*h,v=l*d,A=i.x,C=i.y,b=i.z;return a[0]=(1-(S+u))*A,a[1]=(p+v)*A,a[2]=(x-_)*A,a[3]=0,a[4]=(p-v)*C,a[5]=(1-(f+u))*C,a[6]=(m+g)*C,a[7]=0,a[8]=(x+_)*b,a[9]=(m-g)*b,a[10]=(1-(f+S))*b,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;let r=mr.set(a[0],a[1],a[2]).length();const s=mr.set(a[4],a[5],a[6]).length(),o=mr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],Xn.copy(this);const c=1/r,h=1/s,d=1/o;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,n.setFromRotationMatrix(Xn),i.x=r,i.y=s,i.z=o,this}makePerspective(e,n,i,a,r,s,o=ri,l=!1){const c=this.elements,h=2*r/(n-e),d=2*r/(i-a),f=(n+e)/(n-e),p=(i+a)/(i-a);let x,S;if(l)x=r/(s-r),S=s*r/(s-r);else if(o===ri)x=-(s+r)/(s-r),S=-2*s*r/(s-r);else if(o===Rc)x=-s/(s-r),S=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=ri,l=!1){const c=this.elements,h=2/(n-e),d=2/(i-a),f=-(n+e)/(n-e),p=-(i+a)/(i-a);let x,S;if(l)x=1/(s-r),S=s/(s-r);else if(o===ri)x=-2/(s-r),S=-(s+r)/(s-r);else if(o===Rc)x=-1/(s-r),S=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const mr=new V,Xn=new It,vE=new V(0,0,0),xE=new V(1,1,1),Yi=new V,pl=new V,Sn=new V,qm=new It,Ym=new Go;class Fi{constructor(e=0,n=0,i=0,a=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Xv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SE=0;const jm=new V,gr=new Go,xi=new It,ml=new V,Bs=new V,yE=new V,ME=new Go,Zm=new V(1,0,0),Km=new V(0,1,0),Qm=new V(0,0,1),Jm={type:"added"},EE={type:"removed"},_r={type:"childadded",child:null},Wu={type:"childremoved",child:null};class wn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new V,n=new Fi,i=new Go,a=new V(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new It},normalMatrix:{value:new Fe}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Km,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,n){return jm.copy(e).applyQuaternion(this.quaternion),this.position.add(jm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Km,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ml.copy(e):ml.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Bs,ml,this.up):xi.lookAt(ml,Bs,this.up),this.quaternion.setFromRotationMatrix(xi),a&&(xi.extractRotation(a.matrixWorld),gr.setFromRotationMatrix(xi),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EE),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,yE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,ME,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),f=s(e.skeletons),p=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}wn.DEFAULT_UP=new V(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new V,Si=new V,qu=new V,yi=new V,vr=new V,xr=new V,$m=new V,Yu=new V,ju=new V,Zu=new V,Ku=new Lt,Qu=new Lt,Ju=new Lt;class jn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),Wn.subVectors(e,n),a.cross(Wn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){Wn.subVectors(a,n),Si.subVectors(i,n),qu.subVectors(e,n);const s=Wn.dot(Wn),o=Wn.dot(Si),l=Wn.dot(qu),c=Si.dot(Si),h=Si.dot(qu),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,x=(s*h-o*l)*f;return r.set(1-p-x,x,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(s,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return Ku.setScalar(0),Qu.setScalar(0),Ju.setScalar(0),Ku.fromBufferAttribute(e,n),Qu.fromBufferAttribute(e,i),Ju.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ku,r.x),s.addScaledVector(Qu,r.y),s.addScaledVector(Ju,r.z),s}static isFrontFacing(e,n,i,a){return Wn.subVectors(i,n),Si.subVectors(e,n),Wn.cross(Si).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Wn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;vr.subVectors(a,i),xr.subVectors(r,i),Yu.subVectors(e,i);const l=vr.dot(Yu),c=xr.dot(Yu);if(l<=0&&c<=0)return n.copy(i);ju.subVectors(e,a);const h=vr.dot(ju),d=xr.dot(ju);if(h>=0&&d<=h)return n.copy(a);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(vr,s);Zu.subVectors(e,r);const p=vr.dot(Zu),x=xr.dot(Zu);if(x>=0&&p<=x)return n.copy(r);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(xr,o);const m=h*x-p*d;if(m<=0&&d-h>=0&&p-x>=0)return $m.subVectors(r,a),o=(d-h)/(d-h+(p-x)),n.copy(a).addScaledVector($m,o);const u=1/(m+S+f);return s=S*u,o=f*u,n.copy(i).addScaledVector(vr,s).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},gl={h:0,s:0,l:0};function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ut{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=Je.workingColorSpace){if(e=oE(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=$u(s,r,e+1/3),this.g=$u(s,r,e),this.b=$u(s,r,e-1/3)}return Je.colorSpaceToWorking(this,a),this}setStyle(e,n=On){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=Wv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Je.workingToColorSpace(Jt.copy(this),e),Math.round(Ze(Jt.r*255,0,255))*65536+Math.round(Ze(Jt.g*255,0,255))*256+Math.round(Ze(Jt.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,a=Jt.g,r=Jt.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=On){Je.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,a=Jt.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(gl);const i=Pu(ji.h,gl.h,n),a=Pu(ji.s,gl.s,n),r=Pu(ji.l,gl.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new ut;ut.NAMES=Wv;let TE=0;class jc extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Zr,this.side=ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=od,this.blendEquation=Ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==ya&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==od&&(i.blendDst=this.blendDst),this.blendEquation!==Ia&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qv extends jc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new V,_l=new nt;let bE=0;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hm,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ns(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ns(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ns(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ns(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),a=ln(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),a=ln(a,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hm&&(e.usage=this.usage),e}}class Yv extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jv extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Za extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let AE=0;const Ln=new It,ef=new wn,Sr=new V,yn=new Vo,zs=new Vo,kt=new V;class sr extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vv(e)?jv:Yv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Fe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return ef.lookAt(e),ef.updateMatrix(),this.applyMatrix4(ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Za(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ep);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(yn.min,zs.min),yn.expandByPoint(kt),kt.addVectors(yn.max,zs.max),yn.expandByPoint(kt)):(yn.expandByPoint(zs.min),yn.expandByPoint(zs.max))}yn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)kt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(kt));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(e,c),kt.add(Sr)),a=Math.max(a,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new V,l[D]=new V;const c=new V,h=new V,d=new V,f=new nt,p=new nt,x=new nt,S=new V,m=new V;function u(D,T,M){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),x.sub(f);const w=1/(p.x*x.y-x.x*p.y);isFinite(w)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(w),o[D].add(S),o[T].add(S),o[M].add(S),l[D].add(m),l[T].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let D=0,T=g.length;D<T;++D){const M=g[D],w=M.start,F=M.count;for(let k=w,W=w+F;k<W;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new V,v=new V,A=new V,C=new V;function b(D){A.fromBufferAttribute(a,D),C.copy(A);const T=o[D];_.copy(T),_.sub(A.multiplyScalar(A.dot(T))).normalize(),v.crossVectors(C,T);const w=v.dot(l[D])<0?-1:1;s.setXYZW(D,_.x,_.y,_.z,w)}for(let D=0,T=g.length;D<T;++D){const M=g[D],w=M.start,F=M.count;for(let k=w,W=w+F;k<W;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new V,r=new V,s=new V,o=new V,l=new V,c=new V,h=new V,d=new V;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,m),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let u=0;u<h;u++)f[x++]=c[p++]}return new ui(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sr,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(a[l]=h,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eg=new It,Ca=new _E,vl=new ep,tg=new V,xl=new V,Sl=new V,yl=new V,tf=new V,Ml=new V,ng=new V,El=new V;class si extends wn{constructor(e=new sr,n=new qv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Ml.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(tf.fromBufferAttribute(d,e),s?Ml.addScaledVector(tf,h):Ml.addScaledVector(tf.sub(n),h))}n.add(Ml)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),Ca.copy(e.ray).recast(e.near),!(vl.containsPoint(Ca.origin)===!1&&(Ca.intersectSphere(vl,tg)===null||Ca.origin.distanceToSquared(tg)>(e.far-e.near)**2))&&(eg.copy(r).invert(),Ca.copy(e.ray).applyMatrix4(eg),!(i.boundingBox!==null&&Ca.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ca)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,S=f.length;x<S;x++){const m=f[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,A=_;v<A;v+=3){const C=o.getX(v),b=o.getX(v+1),D=o.getX(v+2);a=Tl(this,u,e,i,c,h,d,C,b,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=x,u=S;m<u;m+=3){const g=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);a=Tl(this,s,e,i,c,h,d,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,S=f.length;x<S;x++){const m=f[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,A=_;v<A;v+=3){const C=v,b=v+1,D=v+2;a=Tl(this,u,e,i,c,h,d,C,b,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,u=S;m<u;m+=3){const g=m,_=m+1,v=m+2;a=Tl(this,s,e,i,c,h,d,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function RE(t,e,n,i,a,r,s,o){let l;if(e.side===dn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===ya,o),l===null)return null;El.copy(o),El.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(El);return c<n.near||c>n.far?null:{distance:c,point:El.clone(),object:t}}function Tl(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,xl),t.getVertexPosition(l,Sl),t.getVertexPosition(c,yl);const h=RE(t,e,n,i,xl,Sl,yl,ng);if(h){const d=new V;jn.getBarycoord(ng,xl,Sl,yl,d),a&&(h.uv=jn.getInterpolatedAttribute(a,o,l,c,d,new nt)),r&&(h.uv1=jn.getInterpolatedAttribute(r,o,l,c,d,new nt)),s&&(h.normal=jn.getInterpolatedAttribute(s,o,l,c,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};jn.getNormal(xl,Sl,yl,f.normal),h.face=f,h.barycoord=d}return h}class ko extends sr{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],d=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,e,s,r,0),x("z","y","x",1,-1,i,n,-e,s,r,1),x("x","z","y",1,1,e,i,n,a,s,2),x("x","z","y",1,-1,e,i,-n,a,s,3),x("x","y","z",1,-1,e,n,i,a,r,4),x("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Za(c,3)),this.setAttribute("normal",new Za(h,3)),this.setAttribute("uv",new Za(d,2));function x(S,m,u,g,_,v,A,C,b,D,T){const M=v/b,w=A/D,F=v/2,k=A/2,W=C/2,Y=b+1,L=D+1;let z=0,O=0;const Z=new V;for(let $=0;$<L;$++){const de=$*w-k;for(let Ee=0;Ee<Y;Ee++){const Ne=Ee*M-F;Z[S]=Ne*g,Z[m]=de*_,Z[u]=W,c.push(Z.x,Z.y,Z.z),Z[S]=0,Z[m]=0,Z[u]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Ee/b),d.push(1-$/D),z+=1}}for(let $=0;$<D;$++)for(let de=0;de<b;de++){const Ee=f+de+Y*$,Ne=f+de+Y*($+1),Ve=f+(de+1)+Y*($+1),X=f+(de+1)+Y*$;l.push(Ee,Ne,X),l.push(Ne,Ve,X),O+=6}o.addGroup(p,O,T),p+=O,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone():Array.isArray(a)?e[n][i]=a.slice():e[n][i]=a}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=hs(t[n]);for(const a in i)e[a]=i[a]}return e}function wE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const CE={clone:hs,merge:nn};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends jc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=wE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Kv extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new V,ig=new nt,ag=new nt;class Yn extends Kv{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,n){return this.getViewBounds(e,ig,ag),n.subVectors(ag,ig)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ou*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yr=-90,Mr=1;class LE extends wn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(yr,Mr,e,n);a.layers=this.layers,this.add(a);const r=new Yn(yr,Mr,e,n);r.layers=this.layers,this.add(r);const s=new Yn(yr,Mr,e,n);s.layers=this.layers,this.add(s);const o=new Yn(yr,Mr,e,n);o.layers=this.layers,this.add(o);const l=new Yn(yr,Mr,e,n);l.layers=this.layers,this.add(l);const c=new Yn(yr,Mr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(n,r),e.setRenderTarget(i,1,a),e.render(n,s),e.setRenderTarget(i,2,a),e.render(n,o),e.setRenderTarget(i,3,a),e.render(n,l),e.setRenderTarget(i,4,a),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,a),e.render(n,h),e.setRenderTarget(d,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Qv extends hn{constructor(e=[],n=us,i,a,r,s,o,l,c,h){super(e,n,i,a,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NE extends tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Qv(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ko(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:ga});r.uniforms.tEquirect.value=n;const s=new si(a,r),o=n.minFilter;return n.minFilter===Ga&&(n.minFilter=ai),new LE(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}class bl extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OE={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(OE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new bl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class PE extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const af=new V,BE=new V,zE=new Fe;class Ba{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=af.subVectors(i,n).cross(BE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(af),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zE.getNormalMatrix(e),a=this.coplanarPoint(af).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Da=new ep,IE=new nt(.5,.5),Al=new V;class Jv{constructor(e=new Ba,n=new Ba,i=new Ba,a=new Ba,r=new Ba,s=new Ba){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],p=r[7],x=r[8],S=r[9],m=r[10],u=r[11],g=r[12],_=r[13],v=r[14],A=r[15];if(a[0].setComponents(c-s,p-h,u-x,A-g).normalize(),a[1].setComponents(c+s,p+h,u+x,A+g).normalize(),a[2].setComponents(c+o,p+d,u+S,A+_).normalize(),a[3].setComponents(c-o,p-d,u-S,A-_).normalize(),i)a[4].setComponents(l,f,m,v).normalize(),a[5].setComponents(c-l,p-f,u-m,A-v).normalize();else if(a[4].setComponents(c-l,p-f,u-m,A-v).normalize(),n===ri)a[5].setComponents(c+l,p+f,u+m,A+v).normalize();else if(n===Rc)a[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Da.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Da)}intersectsSprite(e){Da.center.set(0,0,0);const n=IE.distanceTo(e.center);return Da.radius=.7071067811865476+n,Da.applyMatrix4(e.matrixWorld),this.intersectsSphere(Da)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Al.x=a.normal.x>0?e.max.x:e.min.x,Al.y=a.normal.y>0?e.max.y:e.min.y,Al.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $v extends hn{constructor(e,n,i=er,a,r,s,o=Qn,l=Qn,c,h=yo,d=1){if(h!==yo&&h!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,a,r,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Xo extends sr{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=e/o,f=n/l,p=[],x=[],S=[],m=[];for(let u=0;u<h;u++){const g=u*f-s;for(let _=0;_<c;_++){const v=_*d-r;x.push(v,-g,0),S.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,v=g+c*(u+1),A=g+1+c*(u+1),C=g+1+c*u;p.push(_,v,C),p.push(v,A,C)}this.setIndex(p),this.setAttribute("position",new Za(x,3)),this.setAttribute("normal",new Za(S,3)),this.setAttribute("uv",new Za(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class FE extends jc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HE extends jc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ex extends Kv{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class GE extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function rg(t,e,n,i){const a=VE(i);switch(n){case Bv:return t*e;case Iv:return t*e/a.components*a.byteLength;case Kh:return t*e/a.components*a.byteLength;case Fv:return t*e*2/a.components*a.byteLength;case Qh:return t*e*2/a.components*a.byteLength;case zv:return t*e*3/a.components*a.byteLength;case Zn:return t*e*4/a.components*a.byteLength;case Jh:return t*e*4/a.components*a.byteLength;case kl:case Xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wl:case ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:case Md:return Math.max(t,16)*Math.max(e,8)/4;case xd:case yd:return Math.max(t,8)*Math.max(e,8)/2;case Ed:case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Id:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Yl:case Hd:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hv:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kd:case Xd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VE(t){switch(t){case Ii:case Nv:return{byteLength:1,components:1};case xo:case Ov:case Fo:return{byteLength:2,components:1};case jh:case Zh:return{byteLength:2,components:4};case er:case Yh:case Di:return{byteLength:4,components:1};case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tx(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function kE(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){const x=d[f],S=d[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++f,d[f]=S)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){const S=d[p];t.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WE=`#ifdef USE_ALPHAHASH
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
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KE=`#ifdef USE_AOMAP
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
#endif`,QE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JE=`#ifdef USE_BATCHING
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
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iT=`#ifdef USE_IRIDESCENCE
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
#endif`,aT=`#ifdef USE_BUMPMAP
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hT=`#define PI 3.141592653589793
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
} // validated`,pT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mT=`vec3 transformedNormal = objectNormal;
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
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",yT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TT=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
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
#endif`,RT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UT=`#ifdef USE_GRADIENTMAP
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
}`,LT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
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
#endif`,BT=`#ifdef USE_ENVMAP
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
#endif`,zT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
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
#endif`,VT=`struct PhysicalMaterial {
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
}`,kT=`
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
#endif`,XT=`#if defined( RE_IndirectDiffuse )
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
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$T=`#if defined( USE_POINTS_UV )
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
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
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
#endif`,sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
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
#endif`,hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wb=`float getShadowMask() {
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
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
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
#endif`,Ib=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
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
}`,Kb=`#if DEPTH_PACKING == 3200
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
}`,Qb=`#define DISTANCE
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
}`,Jb=`#define DISTANCE
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#include <common>
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
}`,a1=`uniform vec3 diffuse;
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define LAMBERT
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
}`,o1=`#define MATCAP
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
}`,l1=`#define MATCAP
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
}`,c1=`#define NORMAL
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
}`,u1=`#define NORMAL
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
}`,f1=`#define PHONG
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
}`,d1=`#define PHONG
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
}`,h1=`#define STANDARD
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
}`,p1=`#define STANDARD
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
}`,m1=`#define TOON
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
}`,g1=`#define TOON
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
}`,_1=`uniform float size;
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
}`,v1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,S1=`uniform vec3 color;
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
}`,y1=`uniform float rotation;
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
}`,M1=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:XE,alphahash_pars_fragment:WE,alphamap_fragment:qE,alphamap_pars_fragment:YE,alphatest_fragment:jE,alphatest_pars_fragment:ZE,aomap_fragment:KE,aomap_pars_fragment:QE,batching_pars_vertex:JE,batching_vertex:$E,begin_vertex:eT,beginnormal_vertex:tT,bsdfs:nT,iridescence_fragment:iT,bumpmap_pars_fragment:aT,clipping_planes_fragment:rT,clipping_planes_pars_fragment:sT,clipping_planes_pars_vertex:oT,clipping_planes_vertex:lT,color_fragment:cT,color_pars_fragment:uT,color_pars_vertex:fT,color_vertex:dT,common:hT,cube_uv_reflection_fragment:pT,defaultnormal_vertex:mT,displacementmap_pars_vertex:gT,displacementmap_vertex:_T,emissivemap_fragment:vT,emissivemap_pars_fragment:xT,colorspace_fragment:ST,colorspace_pars_fragment:yT,envmap_fragment:MT,envmap_common_pars_fragment:ET,envmap_pars_fragment:TT,envmap_pars_vertex:bT,envmap_physical_pars_fragment:BT,envmap_vertex:AT,fog_vertex:RT,fog_pars_vertex:wT,fog_fragment:CT,fog_pars_fragment:DT,gradientmap_pars_fragment:UT,lightmap_pars_fragment:LT,lights_lambert_fragment:NT,lights_lambert_pars_fragment:OT,lights_pars_begin:PT,lights_toon_fragment:zT,lights_toon_pars_fragment:IT,lights_phong_fragment:FT,lights_phong_pars_fragment:HT,lights_physical_fragment:GT,lights_physical_pars_fragment:VT,lights_fragment_begin:kT,lights_fragment_maps:XT,lights_fragment_end:WT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:YT,logdepthbuf_pars_vertex:jT,logdepthbuf_vertex:ZT,map_fragment:KT,map_pars_fragment:QT,map_particle_fragment:JT,map_particle_pars_fragment:$T,metalnessmap_fragment:eb,metalnessmap_pars_fragment:tb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:ab,morphtarget_pars_vertex:rb,morphtarget_vertex:sb,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:hb,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:_b,packing:vb,premultiplied_alpha_fragment:xb,project_vertex:Sb,dithering_fragment:yb,dithering_pars_fragment:Mb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:Tb,shadowmap_pars_fragment:bb,shadowmap_pars_vertex:Ab,shadowmap_vertex:Rb,shadowmask_pars_fragment:wb,skinbase_vertex:Cb,skinning_pars_vertex:Db,skinning_vertex:Ub,skinnormal_vertex:Lb,specularmap_fragment:Nb,specularmap_pars_fragment:Ob,tonemapping_fragment:Pb,tonemapping_pars_fragment:Bb,transmission_fragment:zb,transmission_pars_fragment:Ib,uv_pars_fragment:Fb,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Vb,background_vert:kb,background_frag:Xb,backgroundCube_vert:Wb,backgroundCube_frag:qb,cube_vert:Yb,cube_frag:jb,depth_vert:Zb,depth_frag:Kb,distanceRGBA_vert:Qb,distanceRGBA_frag:Jb,equirect_vert:$b,equirect_frag:e1,linedashed_vert:t1,linedashed_frag:n1,meshbasic_vert:i1,meshbasic_frag:a1,meshlambert_vert:r1,meshlambert_frag:s1,meshmatcap_vert:o1,meshmatcap_frag:l1,meshnormal_vert:c1,meshnormal_frag:u1,meshphong_vert:f1,meshphong_frag:d1,meshphysical_vert:h1,meshphysical_frag:p1,meshtoon_vert:m1,meshtoon_frag:g1,points_vert:_1,points_frag:v1,shadow_vert:x1,shadow_frag:S1,sprite_vert:y1,sprite_frag:M1},le={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ti={basic:{uniforms:nn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:nn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ut(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:nn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:nn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:nn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ut(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:nn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:nn([le.points,le.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:nn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:nn([le.common,le.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:nn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:nn([le.sprite,le.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:nn([le.common,le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:nn([le.lights,le.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ti.physical={uniforms:nn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Rl={r:0,b:0,g:0},Ua=new Fi,E1=new It;function T1(t,e,n,i,a,r,s){const o=new ut(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function S(_){let v=!1;const A=x(_);A===null?u(o,l):A&&A.isColor&&(u(A,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const A=x(v);A&&(A.isCubeTexture||A.mapping===Yc)?(h===void 0&&(h=new si(new ko(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:hs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Ua.copy(v.backgroundRotation),Ua.x*=-1,Ua.y*=-1,Ua.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ua.y*=-1,Ua.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(Ua)),h.material.toneMapped=Je.getTransfer(A.colorSpace)!==ot,(d!==A||f!==A.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,p=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new si(new Xo(2,2),new Hi({name:"BackgroundMaterial",uniforms:hs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(A.colorSpace)!==ot,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(Rl,Zv(t)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,v,s)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:S,addToRenderList:m,dispose:g}}function b1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(M,w,F,k,W){let Y=!1;const L=d(k,F,w);r!==L&&(r=L,c(r.object)),Y=p(M,k,F,W),Y&&x(M,k,F,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,v(M,w,F,k),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function d(M,w,F){const k=F.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Y=W[w.id];Y===void 0&&(Y={},W[w.id]=Y);let L=Y[k];return L===void 0&&(L=f(l()),Y[k]=L),L}function f(M){const w=[],F=[],k=[];for(let W=0;W<n;W++)w[W]=0,F[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,w,F,k){const W=r.attributes,Y=w.attributes;let L=0;const z=F.getAttributes();for(const O in z)if(z[O].location>=0){const $=W[O];let de=Y[O];if(de===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),$===void 0||$.attribute!==de||de&&$.data!==de.data)return!0;L++}return r.attributesNum!==L||r.index!==k}function x(M,w,F,k){const W={},Y=w.attributes;let L=0;const z=F.getAttributes();for(const O in z)if(z[O].location>=0){let $=Y[O];$===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&($=M.instanceColor));const de={};de.attribute=$,$&&$.data&&(de.data=$.data),W[O]=de,L++}r.attributes=W,r.attributesNum=L,r.index=k}function S(){const M=r.newAttributes;for(let w=0,F=M.length;w<F;w++)M[w]=0}function m(M){u(M,0)}function u(M,w){const F=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;F[M]=1,k[M]===0&&(t.enableVertexAttribArray(M),k[M]=1),W[M]!==w&&(t.vertexAttribDivisor(M,w),W[M]=w)}function g(){const M=r.newAttributes,w=r.enabledAttributes;for(let F=0,k=w.length;F<k;F++)w[F]!==M[F]&&(t.disableVertexAttribArray(F),w[F]=0)}function _(M,w,F,k,W,Y,L){L===!0?t.vertexAttribIPointer(M,w,F,W,Y):t.vertexAttribPointer(M,w,F,k,W,Y)}function v(M,w,F,k){S();const W=k.attributes,Y=F.getAttributes(),L=w.defaultAttributeValues;for(const z in Y){const O=Y[z];if(O.location>=0){let Z=W[z];if(Z===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const $=Z.normalized,de=Z.itemSize,Ee=e.get(Z);if(Ee===void 0)continue;const Ne=Ee.buffer,Ve=Ee.type,X=Ee.bytesPerElement,se=Ve===t.INT||Ve===t.UNSIGNED_INT||Z.gpuType===Yh;if(Z.isInterleavedBufferAttribute){const ne=Z.data,ye=ne.stride,be=Z.offset;if(ne.isInstancedInterleavedBuffer){for(let Oe=0;Oe<O.locationSize;Oe++)u(O.location+Oe,ne.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Oe=0;Oe<O.locationSize;Oe++)m(O.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Oe=0;Oe<O.locationSize;Oe++)_(O.location+Oe,de/O.locationSize,Ve,$,ye*X,(be+de/O.locationSize*Oe)*X,se)}else{if(Z.isInstancedBufferAttribute){for(let ne=0;ne<O.locationSize;ne++)u(O.location+ne,Z.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ne=0;ne<O.locationSize;ne++)m(O.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let ne=0;ne<O.locationSize;ne++)_(O.location+ne,de/O.locationSize,Ve,$,de*X,de/O.locationSize*ne*X,se)}}else if(L!==void 0){const $=L[z];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(O.location,$);break;case 3:t.vertexAttrib3fv(O.location,$);break;case 4:t.vertexAttrib4fv(O.location,$);break;default:t.vertexAttrib1fv(O.location,$)}}}}g()}function A(){D();for(const M in i){const w=i[M];for(const F in w){const k=w[F];for(const W in k)h(k[W].object),delete k[W];delete w[F]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const w=i[M.id];for(const F in w){const k=w[F];for(const W in k)h(k[W].object),delete k[W];delete w[F]}delete i[M.id]}function b(M){for(const w in i){const F=i[w];if(F[M.id]===void 0)continue;const k=F[M.id];for(const W in k)h(k[W].object),delete k[W];delete F[M.id]}}function D(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function A1(t,e,n){let i;function a(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function s(c,h,d){d!==0&&(t.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let x=0;for(let S=0;S<d;S++)x+=h[S]*f[S];n.update(x,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function R1(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(b){return!(b!==Zn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const D=b===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ii&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Di&&!D)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function w1(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new Ba,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const x=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!a||x===null||x.length===0||r&&!m)r?h(null):c();else{const g=r?0:i,_=g*4;let v=u.clippingState||null;l.value=v,v=h(x,f,_,p);for(let A=0;A!==_;++A)v[A]=n[A];u.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,x){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const u=p+S*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,v=p;_!==S;++_,v+=4)s.copy(d[_]).applyMatrix4(g,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function C1(t){let e=new WeakMap;function n(s,o){return o===md?s.mapping=us:o===gd&&(s.mapping=fs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===md||o===gd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new NE(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Hr=4,sg=[.125,.215,.35,.446,.526,.582],Fa=20,rf=new ex,og=new ut;let sf=null,of=0,lf=0,cf=!1;const za=(1+Math.sqrt(5))/2,Er=1/za,lg=[new V(-za,Er,0),new V(za,Er,0),new V(-Er,0,za),new V(Er,0,za),new V(0,za,-Er),new V(0,za,Er),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],D1=new V;class cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=D1}=r;sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sf,of,lf),this._renderer.xr.enabled=cf,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Fo,format:Zn,colorSpace:ds,depthBuffer:!1},a=ug(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ug(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U1(r)),this._blurMaterial=L1(r,e,n)}return a}_compileMaterial(e){const n=new si(this._lodPlanes[0],e);this._renderer.compile(n,rf)}_sceneToCubeUV(e,n,i,a,r){const l=new Yn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(og),d.toneMapping=_a,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null));const S=new qv({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new si(new ko,S);let u=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,u=!0):(S.color.copy(og),u=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const A=this._cubeSize;wl(a,v*A,_>2?A:0,A,A),d.setRenderTarget(a),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===us||e.mapping===fs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fg());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new si(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;wl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,rf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lg[(a-r-1)%lg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new si(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fa-1),S=r/x,m=isFinite(r)?1+Math.floor(h*S):Fa;m>Fa&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fa}`);const u=[];let g=0;for(let b=0;b<Fa;++b){const D=b/S,T=Math.exp(-D*D/2);u.push(T),b===0?g+=T:b<m&&(g+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const v=this._sizeLods[a],A=3*v*(a>_-Hr?a-_+Hr:0),C=4*(this._cubeSize-v);wl(n,A,C,3*v,2*v),l.setRenderTarget(n),l.render(d,rf)}}function U1(t){const e=[],n=[],i=[];let a=t;const r=t-Hr+1+sg.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>t-Hr?l=sg[s-t+Hr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,S=3,m=2,u=1,g=new Float32Array(S*x*p),_=new Float32Array(m*x*p),v=new Float32Array(u*x*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,D=C>2?0:-1,T=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];g.set(T,S*x*C),_.set(f,m*x*C);const M=[C,C,C,C,C,C];v.set(M,u*x*C)}const A=new sr;A.setAttribute("position",new ui(g,S)),A.setAttribute("uv",new ui(_,m)),A.setAttribute("faceIndex",new ui(v,u)),e.push(A),a>Hr&&a--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ug(t,e,n){const i=new tr(t,e,n);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function L1(t,e,n){const i=new Float32Array(Fa),a=new V(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Fa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:tp(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function fg(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function dg(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function tp(){return`

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
	`}function N1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===md||l===gd,h=l===us||l===fs;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new cg(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&a(p)?(n===null&&(n=new cg(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function O1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=t.getExtension(i)}return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Kr("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function P1(t,e,n,i){const a={},r=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,x=d.attributes.position;let S=0;if(p!==null){const g=p.array;S=p.version;for(let _=0,v=g.length;_<v;_+=3){const A=g[_+0],C=g[_+1],b=g[_+2];f.push(A,C,C,b,b,A)}}else if(x!==void 0){const g=x.array;S=x.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const A=_+0,C=_+1,b=_+2;f.push(A,C,C,b,b,A)}}else return;const m=new(Vv(f)?jv:Yv)(f,1);m.version=S;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function B1(t,e,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){t.drawElements(i,p,r,f*s),n.update(p,i,1)}function c(f,p,x){x!==0&&(t.drawElementsInstanced(i,p,r,f*s,x),n.update(p,i,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];n.update(m,i,1)}function d(f,p,x,S){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,S,0,x);let u=0;for(let g=0;g<x;g++)u+=p[g]*S[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function z1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function I1(t,e,n){const i=new WeakMap,a=new Lt;function r(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let M=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),S===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*C*4*d),D=new kv(b,A,C,d);D.type=Di,D.needsUpdate=!0;const T=v*4;for(let w=0;w<d;w++){const F=u[w],k=g[w],W=_[w],Y=A*C*4*w;for(let L=0;L<F.count;L++){const z=L*T;x===!0&&(a.fromBufferAttribute(F,L),b[Y+z+0]=a.x,b[Y+z+1]=a.y,b[Y+z+2]=a.z,b[Y+z+3]=0),S===!0&&(a.fromBufferAttribute(k,L),b[Y+z+4]=a.x,b[Y+z+5]=a.y,b[Y+z+6]=a.z,b[Y+z+7]=0),m===!0&&(a.fromBufferAttribute(W,L),b[Y+z+8]=a.x,b[Y+z+9]=a.y,b[Y+z+10]=a.z,b[Y+z+11]=W.itemSize===4?a.w:1)}}f={count:d,texture:D,size:new nt(A,C)},i.set(o,f),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function F1(t,e,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const nx=new hn,hg=new $v(1,1),ix=new kv,ax=new mE,rx=new Qv,pg=[],mg=[],gg=new Float32Array(16),_g=new Float32Array(9),vg=new Float32Array(4);function Ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=pg[a];if(r===void 0&&(r=new Float32Array(a),pg[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zc(t,e){let n=mg[e];n===void 0&&(n=new Int32Array(e),mg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function H1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function X1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;vg.set(i),t.uniformMatrix2fv(this.addr,!1,vg),Gt(n,i)}}function W1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;_g.set(i),t.uniformMatrix3fv(this.addr,!1,_g),Gt(n,i)}}function q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;gg.set(i),t.uniformMatrix4fv(this.addr,!1,gg),Gt(n,i)}}function Y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function Q1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function tA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(hg.compareFunction=Gv,r=hg):r=nx,n.setTexture2D(e||r,a)}function nA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||ax,a)}function iA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||rx,a)}function aA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||ix,a)}function rA(t){switch(t){case 5126:return H1;case 35664:return G1;case 35665:return V1;case 35666:return k1;case 35674:return X1;case 35675:return W1;case 35676:return q1;case 5124:case 35670:return Y1;case 35667:case 35671:return j1;case 35668:case 35672:return Z1;case 35669:case 35673:return K1;case 5125:return Q1;case 36294:return J1;case 36295:return $1;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return aA}}function sA(t,e){t.uniform1fv(this.addr,e)}function oA(t,e){const n=Ms(e,this.size,2);t.uniform2fv(this.addr,n)}function lA(t,e){const n=Ms(e,this.size,3);t.uniform3fv(this.addr,n)}function cA(t,e){const n=Ms(e,this.size,4);t.uniform4fv(this.addr,n)}function uA(t,e){const n=Ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fA(t,e){const n=Ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dA(t,e){const n=Ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hA(t,e){t.uniform1iv(this.addr,e)}function pA(t,e){t.uniform2iv(this.addr,e)}function mA(t,e){t.uniform3iv(this.addr,e)}function gA(t,e){t.uniform4iv(this.addr,e)}function _A(t,e){t.uniform1uiv(this.addr,e)}function vA(t,e){t.uniform2uiv(this.addr,e)}function xA(t,e){t.uniform3uiv(this.addr,e)}function SA(t,e){t.uniform4uiv(this.addr,e)}function yA(t,e,n){const i=this.cache,a=e.length,r=Zc(n,a);Ht(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let s=0;s!==a;++s)n.setTexture2D(e[s]||nx,r[s])}function MA(t,e,n){const i=this.cache,a=e.length,r=Zc(n,a);Ht(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||ax,r[s])}function EA(t,e,n){const i=this.cache,a=e.length,r=Zc(n,a);Ht(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||rx,r[s])}function TA(t,e,n){const i=this.cache,a=e.length,r=Zc(n,a);Ht(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||ix,r[s])}function bA(t){switch(t){case 5126:return sA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return dA;case 5124:case 35670:return hA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return _A;case 36294:return vA;case 36295:return xA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return TA}}class AA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rA(n.type)}}class RA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bA(n.type)}}class wA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const uf=/(\w+)(\])?(\[|\.)?/g;function xg(t,e){t.seq.push(e),t.map[e.id]=e}function CA(t,e,n){const i=t.name,a=i.length;for(uf.lastIndex=0;;){const r=uf.exec(i),s=uf.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){xg(n,c===void 0?new AA(o,t,e):new RA(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new wA(o),xg(n,d)),n=d}}}class jl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=e.getActiveUniform(n,a),s=e.getUniformLocation(n,r.name);CA(r,s,this)}}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function Sg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DA=37297;let UA=0;function LA(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const yg=new Fe;function NA(t){Je._getMatrix(yg,Je.workingColorSpace,t);const e=`mat3( ${yg.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case Ac:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Mg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+LA(t.getShaderSource(e),o)}else return r}function OA(t,e){const n=NA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function PA(t,e){let n;switch(e){case VM:n="Linear";break;case kM:n="Reinhard";break;case XM:n="Cineon";break;case WM:n="ACESFilmic";break;case YM:n="AgX";break;case jM:n="Neutral";break;case qM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new V;function BA(){Je.getLuminanceCoefficients(Cl);const t=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function IA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function FA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function Vs(t){return t!==""}function Eg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HA=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(t){return t.replace(HA,VA)}const GA=new Map;function VA(t,e){let n=He[e];if(n===void 0){const i=GA.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qd(n)}const kA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bg(t){return t.replace(kA,XA)}function XA(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ag(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Dv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function qA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case us:case fs:e="ENVMAP_TYPE_CUBE";break;case Yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function jA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Uv:e="ENVMAP_BLENDING_MULTIPLY";break;case HM:e="ENVMAP_BLENDING_MIX";break;case GM:e="ENVMAP_BLENDING_ADD";break}return e}function ZA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function KA(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=WA(n),c=qA(n),h=YA(n),d=jA(n),f=ZA(n),p=zA(n),x=IA(r),S=a.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vs).join(`
`),u.length>0&&(u+=`
`)):(m=[Ag(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),u=[Ag(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_a?"#define TONE_MAPPING":"",n.toneMapping!==_a?He.tonemapping_pars_fragment:"",n.toneMapping!==_a?PA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,OA("linearToOutputTexel",n.outputColorSpace),BA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vs).join(`
`)),s=qd(s),s=Eg(s,n),s=Tg(s,n),o=qd(o),o=Eg(o,n),o=Tg(o,n),s=bg(s),o=bg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+s,v=g+u+o,A=Sg(a,a.VERTEX_SHADER,_),C=Sg(a,a.FRAGMENT_SHADER,v);a.attachShader(S,A),a.attachShader(S,C),n.index0AttributeName!==void 0?a.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function b(w){if(t.debug.checkShaderErrors){const F=a.getProgramInfoLog(S)||"",k=a.getShaderInfoLog(A)||"",W=a.getShaderInfoLog(C)||"",Y=F.trim(),L=k.trim(),z=W.trim();let O=!0,Z=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,S,A,C);else{const $=Mg(a,A,"vertex"),de=Mg(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+Y+`
`+$+`
`+de)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||z==="")&&(Z=!1);Z&&(w.diagnostics={runnable:O,programLog:Y,vertexShader:{log:L,prefix:m},fragmentShader:{log:z,prefix:u}})}a.deleteShader(A),a.deleteShader(C),D=new jl(a,S),T=FA(a,S)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(S,DA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UA++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=C,this}let QA=0;class JA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $A(e),n.set(e,i)),i}}class $A{constructor(e){this.id=QA++,this.code=e,this.usedTimes=0}}function eR(t,e,n,i,a,r,s){const o=new Xv,l=new JA,c=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,w,F,k){const W=F.fog,Y=k.geometry,L=T.isMeshStandardMaterial?F.environment:null,z=(T.isMeshStandardMaterial?n:e).get(T.envMap||L),O=z&&z.mapping===Yc?z.image.height:null,Z=x[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const $=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,de=$!==void 0?$.length:0;let Ee=0;Y.morphAttributes.position!==void 0&&(Ee=1),Y.morphAttributes.normal!==void 0&&(Ee=2),Y.morphAttributes.color!==void 0&&(Ee=3);let Ne,Ve,X,se;if(Z){const it=ti[Z];Ne=it.vertexShader,Ve=it.fragmentShader}else Ne=T.vertexShader,Ve=T.fragmentShader,l.update(T),X=l.getVertexShaderID(T),se=l.getFragmentShaderID(T);const ne=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),be=k.isInstancedMesh===!0,Oe=k.isBatchedMesh===!0,vt=!!T.map,Be=!!T.matcap,U=!!z,ht=!!T.aoMap,Re=!!T.lightMap,$e=!!T.bumpMap,Te=!!T.normalMap,xt=!!T.displacementMap,me=!!T.emissiveMap,ke=!!T.metalnessMap,Vt=!!T.roughnessMap,Ct=T.anisotropy>0,R=T.clearcoat>0,y=T.dispersion>0,I=T.iridescence>0,j=T.sheen>0,J=T.transmission>0,q=Ct&&!!T.anisotropyMap,Me=R&&!!T.clearcoatMap,re=R&&!!T.clearcoatNormalMap,ve=R&&!!T.clearcoatRoughnessMap,xe=I&&!!T.iridescenceMap,ie=I&&!!T.iridescenceThicknessMap,fe=j&&!!T.sheenColorMap,Ue=j&&!!T.sheenRoughnessMap,Se=!!T.specularMap,ce=!!T.specularColorMap,Ie=!!T.specularIntensityMap,N=J&&!!T.transmissionMap,ae=J&&!!T.thicknessMap,oe=!!T.gradientMap,pe=!!T.alphaMap,ee=T.alphaTest>0,Q=!!T.alphaHash,_e=!!T.extensions;let ze=_a;T.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ze=t.toneMapping);const pt={shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:Ne,fragmentShader:Ve,defines:T.defines,customVertexShaderID:X,customFragmentShaderID:se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&k._colorsTexture!==null,instancing:be,instancingColor:be&&k.instanceColor!==null,instancingMorph:be&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ds,alphaToCoverage:!!T.alphaToCoverage,map:vt,matcap:Be,envMap:U,envMapMode:U&&z.mapping,envMapCubeUVHeight:O,aoMap:ht,lightMap:Re,bumpMap:$e,normalMap:Te,displacementMap:f&&xt,emissiveMap:me,normalMapObjectSpace:Te&&T.normalMapType===$M,normalMapTangentSpace:Te&&T.normalMapType===JM,metalnessMap:ke,roughnessMap:Vt,anisotropy:Ct,anisotropyMap:q,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:y,iridescence:I,iridescenceMap:xe,iridescenceThicknessMap:ie,sheen:j,sheenColorMap:fe,sheenRoughnessMap:Ue,specularMap:Se,specularColorMap:ce,specularIntensityMap:Ie,transmission:J,transmissionMap:N,thicknessMap:ae,gradientMap:oe,opaque:T.transparent===!1&&T.blending===Zr&&T.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:Q,combine:T.combine,mapUv:vt&&S(T.map.channel),aoMapUv:ht&&S(T.aoMap.channel),lightMapUv:Re&&S(T.lightMap.channel),bumpMapUv:$e&&S(T.bumpMap.channel),normalMapUv:Te&&S(T.normalMap.channel),displacementMapUv:xt&&S(T.displacementMap.channel),emissiveMapUv:me&&S(T.emissiveMap.channel),metalnessMapUv:ke&&S(T.metalnessMap.channel),roughnessMapUv:Vt&&S(T.roughnessMap.channel),anisotropyMapUv:q&&S(T.anisotropyMap.channel),clearcoatMapUv:Me&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:re&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&S(T.sheenRoughnessMap.channel),specularMapUv:Se&&S(T.specularMap.channel),specularColorMapUv:ce&&S(T.specularColorMap.channel),specularIntensityMapUv:Ie&&S(T.specularIntensityMap.channel),transmissionMapUv:N&&S(T.transmissionMap.channel),thicknessMapUv:ae&&S(T.thicknessMap.channel),alphaMapUv:pe&&S(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Te||Ct),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(vt||pe),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:ze,decodeVideoTexture:vt&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:me&&T.emissiveMap.isVideoTexture===!0&&Je.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ti,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:_e&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&T.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function u(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const w in T.defines)M.push(w),M.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(g(M,T),_(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function g(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function _(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const M=x[T.type];let w;if(M){const F=ti[M];w=CE.clone(F.uniforms)}else w=T.uniforms;return w}function A(T,M){let w;for(let F=0,k=h.length;F<k;F++){const W=h[F];if(W.cacheKey===M){w=W,++w.usedTimes;break}}return w===void 0&&(w=new KA(t,M,T,r),h.push(w)),w}function C(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function b(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:D}}function tR(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function nR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wg(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(d,f,p,x,S,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:S,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=S,u.group=m),e++,u}function o(d,f,p,x,S,m){const u=s(d,f,p,x,S,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,f,p,x,S,m){const u=s(d,f,p,x,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||nR),i.length>1&&i.sort(f||Rg),a.length>1&&a.sort(f||Rg)}function h(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:h,sort:c}}function iR(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new wg,t.set(i,[s])):a>=r.length?(s=new wg,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function aR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new ut};break;case"SpotLight":n={position:new V,direction:new V,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":n={color:new ut,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function rR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let sR=0;function oR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lR(t){const e=new aR,n=rR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const a=new V,r=new It,s=new It;function o(c){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,S=0,m=0,u=0,g=0,_=0,v=0,A=0,C=0,b=0;c.sort(oR);for(let T=0,M=c.length;T<M;T++){const w=c[T],F=w.color,k=w.intensity,W=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=F.r*k,d+=F.g*k,f+=F.b*k;else if(w.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(w.sh.coefficients[L],k);b++}else if(w.isDirectionalLight){const L=e.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const z=w.shadow,O=n.get(w);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=w.shadow.matrix,g++}i.directional[p]=L,p++}else if(w.isSpotLight){const L=e.get(w);L.position.setFromMatrixPosition(w.matrixWorld),L.color.copy(F).multiplyScalar(k),L.distance=W,L.coneCos=Math.cos(w.angle),L.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),L.decay=w.decay,i.spot[S]=L;const z=w.shadow;if(w.map&&(i.spotLightMap[A]=w.map,A++,z.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[S]=z.matrix,w.castShadow){const O=n.get(w);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,i.spotShadow[S]=O,i.spotShadowMap[S]=Y,v++}S++}else if(w.isRectAreaLight){const L=e.get(w);L.color.copy(F).multiplyScalar(k),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=L,m++}else if(w.isPointLight){const L=e.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity),L.distance=w.distance,L.decay=w.decay,w.castShadow){const z=w.shadow,O=n.get(w);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,i.pointShadow[x]=O,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=w.shadow.matrix,_++}i.point[x]=L,x++}else if(w.isHemisphereLight){const L=e.get(w);L.skyColor.copy(w.color).multiplyScalar(k),L.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[u]=L,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==S||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==g||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==A||D.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,D.directionalLength=p,D.pointLength=x,D.spotLength=S,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=g,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=A,D.numLightProbes=b,i.version=sR++)}function l(c,h){let d=0,f=0,p=0,x=0,S=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),d++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),s.identity(),r.copy(_.matrixWorld),r.premultiply(m),s.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),x++}else if(_.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=i.hemi[S];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function Cg(t){const e=new lR(t),n=[],i=[];function a(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function s(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function cR(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Cg(t),e.set(a,[o])):r>=s.length?(o=new Cg(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const uR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fR=`uniform sampler2D shadow_pass;
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
}`;function dR(t,e,n){let i=new Jv;const a=new nt,r=new nt,s=new Lt,o=new FE({depthPacking:QM}),l=new HE,c={},h=n.maxTextureSize,d={[ya]:dn,[dn]:ya,[Ti]:Ti},f=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:uR,fragmentShader:fR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new sr;x.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new si(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dv;let u=this.type;this.render=function(C,b,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),F=t.state;F.setBlending(ga),F.buffers.depth.getReversed()?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=u!==Mi&&this.type===Mi,W=u===Mi&&this.type!==Mi;for(let Y=0,L=C.length;Y<L;Y++){const z=C[Y],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const Z=O.getFrameExtents();if(a.multiply(Z),r.copy(O.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/Z.x),a.x=r.x*Z.x,O.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/Z.y),a.y=r.y*Z.y,O.mapSize.y=r.y)),O.map===null||k===!0||W===!0){const de=this.type!==Mi?{minFilter:Qn,magFilter:Qn}:{};O.map!==null&&O.map.dispose(),O.map=new tr(a.x,a.y,de),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const $=O.getViewportCount();for(let de=0;de<$;de++){const Ee=O.getViewport(de);s.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),F.viewport(s),O.updateMatrices(z,de),i=O.getFrustum(),v(b,D,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Mi&&g(O,D),O.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(T,M,w)};function g(C,b){const D=e.update(S);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new tr(a.x,a.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,D,f,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,D,p,S,null)}function _(C,b,D,T){let M=null;const w=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=D.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const F=M.uuid,k=b.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let Y=W[k];Y===void 0&&(Y=M.clone(),W[k]=Y,b.addEventListener("dispose",A)),M=Y}if(M.visible=b.visible,M.wireframe=b.wireframe,T===Mi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=t.properties.get(M);F.light=D}return M}function v(C,b,D,T,M){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Mi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const k=e.update(C),W=C.material;if(Array.isArray(W)){const Y=k.groups;for(let L=0,z=Y.length;L<z;L++){const O=Y[L],Z=W[O.materialIndex];if(Z&&Z.visible){const $=_(C,Z,T,M);C.onBeforeShadow(t,C,b,D,k,$,O),t.renderBufferDirect(D,null,k,$,C,O),C.onAfterShadow(t,C,b,D,k,$,O)}}}else if(W.visible){const Y=_(C,W,T,M);C.onBeforeShadow(t,C,b,D,k,Y,null),t.renderBufferDirect(D,null,k,Y,C,null),C.onAfterShadow(t,C,b,D,k,Y,null)}}const F=C.children;for(let k=0,W=F.length;k<W;k++)v(F[k],b,D,T,M)}function A(C){C.target.removeEventListener("dispose",A);for(const D in c){const T=c[D],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const hR={[ld]:cd,[ud]:hd,[fd]:pd,[cs]:dd,[cd]:ld,[hd]:ud,[pd]:fd,[dd]:cs};function pR(t,e){function n(){let N=!1;const ae=new Lt;let oe=null;const pe=new Lt(0,0,0,0);return{setMask:function(ee){oe!==ee&&!N&&(t.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){N=ee},setClear:function(ee,Q,_e,ze,pt){pt===!0&&(ee*=ze,Q*=ze,_e*=ze),ae.set(ee,Q,_e,ze),pe.equals(ae)===!1&&(t.clearColor(ee,Q,_e,ze),pe.copy(ae))},reset:function(){N=!1,oe=null,pe.set(-1,0,0,0)}}}function i(){let N=!1,ae=!1,oe=null,pe=null,ee=null;return{setReversed:function(Q){if(ae!==Q){const _e=e.get("EXT_clip_control");Q?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ae=Q;const ze=ee;ee=null,this.setClear(ze)}},getReversed:function(){return ae},setTest:function(Q){Q?ne(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(Q){oe!==Q&&!N&&(t.depthMask(Q),oe=Q)},setFunc:function(Q){if(ae&&(Q=hR[Q]),pe!==Q){switch(Q){case ld:t.depthFunc(t.NEVER);break;case cd:t.depthFunc(t.ALWAYS);break;case ud:t.depthFunc(t.LESS);break;case cs:t.depthFunc(t.LEQUAL);break;case fd:t.depthFunc(t.EQUAL);break;case dd:t.depthFunc(t.GEQUAL);break;case hd:t.depthFunc(t.GREATER);break;case pd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=Q}},setLocked:function(Q){N=Q},setClear:function(Q){ee!==Q&&(ae&&(Q=1-Q),t.clearDepth(Q),ee=Q)},reset:function(){N=!1,oe=null,pe=null,ee=null,ae=!1}}}function a(){let N=!1,ae=null,oe=null,pe=null,ee=null,Q=null,_e=null,ze=null,pt=null;return{setTest:function(it){N||(it?ne(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(it){ae!==it&&!N&&(t.stencilMask(it),ae=it)},setFunc:function(it,hi,$n){(oe!==it||pe!==hi||ee!==$n)&&(t.stencilFunc(it,hi,$n),oe=it,pe=hi,ee=$n)},setOp:function(it,hi,$n){(Q!==it||_e!==hi||ze!==$n)&&(t.stencilOp(it,hi,$n),Q=it,_e=hi,ze=$n)},setLocked:function(it){N=it},setClear:function(it){pt!==it&&(t.clearStencil(it),pt=it)},reset:function(){N=!1,ae=null,oe=null,pe=null,ee=null,Q=null,_e=null,ze=null,pt=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],x=null,S=!1,m=null,u=null,g=null,_=null,v=null,A=null,C=null,b=new ut(0,0,0),D=0,T=!1,M=null,w=null,F=null,k=null,W=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,z=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=z>=2);let Z=null,$={};const de=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),Ne=new Lt().fromArray(de),Ve=new Lt().fromArray(Ee);function X(N,ae,oe,pe){const ee=new Uint8Array(4),Q=t.createTexture();t.bindTexture(N,Q),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<oe;_e++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,ee):t.texImage2D(ae+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ee);return Q}const se={};se[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),s.setFunc(cs),$e(!1),Te(Pm),ne(t.CULL_FACE),ht(ga);function ne(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function ye(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function be(N,ae){return d[N]!==ae?(t.bindFramebuffer(N,ae),d[N]=ae,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ae),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Oe(N,ae){let oe=p,pe=!1;if(N){oe=f.get(ae),oe===void 0&&(oe=[],f.set(ae,oe));const ee=N.textures;if(oe.length!==ee.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,_e=ee.length;Q<_e;Q++)oe[Q]=t.COLOR_ATTACHMENT0+Q;oe.length=ee.length,pe=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,pe=!0);pe&&t.drawBuffers(oe)}function vt(N){return x!==N?(t.useProgram(N),x=N,!0):!1}const Be={[Ia]:t.FUNC_ADD,[EM]:t.FUNC_SUBTRACT,[TM]:t.FUNC_REVERSE_SUBTRACT};Be[bM]=t.MIN,Be[AM]=t.MAX;const U={[RM]:t.ZERO,[wM]:t.ONE,[CM]:t.SRC_COLOR,[sd]:t.SRC_ALPHA,[PM]:t.SRC_ALPHA_SATURATE,[NM]:t.DST_COLOR,[UM]:t.DST_ALPHA,[DM]:t.ONE_MINUS_SRC_COLOR,[od]:t.ONE_MINUS_SRC_ALPHA,[OM]:t.ONE_MINUS_DST_COLOR,[LM]:t.ONE_MINUS_DST_ALPHA,[BM]:t.CONSTANT_COLOR,[zM]:t.ONE_MINUS_CONSTANT_COLOR,[IM]:t.CONSTANT_ALPHA,[FM]:t.ONE_MINUS_CONSTANT_ALPHA};function ht(N,ae,oe,pe,ee,Q,_e,ze,pt,it){if(N===ga){S===!0&&(ye(t.BLEND),S=!1);return}if(S===!1&&(ne(t.BLEND),S=!0),N!==MM){if(N!==m||it!==T){if((u!==Ia||v!==Ia)&&(t.blendEquation(t.FUNC_ADD),u=Ia,v=Ia),it)switch(N){case Zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bm:t.blendFunc(t.ONE,t.ONE);break;case zm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Im:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case zm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Im:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,_=null,A=null,C=null,b.set(0,0,0),D=0,m=N,T=it}return}ee=ee||ae,Q=Q||oe,_e=_e||pe,(ae!==u||ee!==v)&&(t.blendEquationSeparate(Be[ae],Be[ee]),u=ae,v=ee),(oe!==g||pe!==_||Q!==A||_e!==C)&&(t.blendFuncSeparate(U[oe],U[pe],U[Q],U[_e]),g=oe,_=pe,A=Q,C=_e),(ze.equals(b)===!1||pt!==D)&&(t.blendColor(ze.r,ze.g,ze.b,pt),b.copy(ze),D=pt),m=N,T=!1}function Re(N,ae){N.side===Ti?ye(t.CULL_FACE):ne(t.CULL_FACE);let oe=N.side===dn;ae&&(oe=!oe),$e(oe),N.blending===Zr&&N.transparent===!1?ht(ga):ht(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const pe=N.stencilWrite;o.setTest(pe),pe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),me(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(N){M!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),M=N)}function Te(N){N!==xM?(ne(t.CULL_FACE),N!==w&&(N===Pm?t.cullFace(t.BACK):N===SM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),w=N}function xt(N){N!==F&&(L&&t.lineWidth(N),F=N)}function me(N,ae,oe){N?(ne(t.POLYGON_OFFSET_FILL),(k!==ae||W!==oe)&&(t.polygonOffset(ae,oe),k=ae,W=oe)):ye(t.POLYGON_OFFSET_FILL)}function ke(N){N?ne(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function Vt(N){N===void 0&&(N=t.TEXTURE0+Y-1),Z!==N&&(t.activeTexture(N),Z=N)}function Ct(N,ae,oe){oe===void 0&&(Z===null?oe=t.TEXTURE0+Y-1:oe=Z);let pe=$[oe];pe===void 0&&(pe={type:void 0,texture:void 0},$[oe]=pe),(pe.type!==N||pe.texture!==ae)&&(Z!==oe&&(t.activeTexture(oe),Z=oe),t.bindTexture(N,ae||se[N]),pe.type=N,pe.texture=ae)}function R(){const N=$[Z];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{t.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{t.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{t.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(N){Ne.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ne.copy(N))}function Ue(N){Ve.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ve.copy(N))}function Se(N,ae){let oe=c.get(ae);oe===void 0&&(oe=new WeakMap,c.set(ae,oe));let pe=oe.get(N);pe===void 0&&(pe=t.getUniformBlockIndex(ae,N.name),oe.set(N,pe))}function ce(N,ae){const pe=c.get(ae).get(N);l.get(ae)!==pe&&(t.uniformBlockBinding(ae,pe,N.__bindingPointIndex),l.set(ae,pe))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Z=null,$={},d={},f=new WeakMap,p=[],x=null,S=!1,m=null,u=null,g=null,_=null,v=null,A=null,C=null,b=new ut(0,0,0),D=0,T=!1,M=null,w=null,F=null,k=null,W=null,Ne.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ne,disable:ye,bindFramebuffer:be,drawBuffers:Oe,useProgram:vt,setBlending:ht,setMaterial:Re,setFlipSided:$e,setCullFace:Te,setLineWidth:xt,setPolygonOffset:me,setScissorTest:ke,activeTexture:Vt,bindTexture:Ct,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:I,texImage2D:xe,texImage3D:ie,updateUBOMapping:Se,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:ve,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:Me,scissor:fe,viewport:Ue,reset:Ie}}function mR(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,y){return p?new OffscreenCanvas(R,y):wc("canvas")}function S(R,y,I){let j=1;const J=Ct(R);if((J.width>I||J.height>I)&&(j=I/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(j*J.width),Me=Math.floor(j*J.height);d===void 0&&(d=x(q,Me));const re=y?x(q,Me):d;return re.width=q,re.height=Me,re.getContext("2d").drawImage(R,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Me+")."),re}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,y,I,j,J=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=y;if(y===t.RED&&(I===t.FLOAT&&(q=t.R32F),I===t.HALF_FLOAT&&(q=t.R16F),I===t.UNSIGNED_BYTE&&(q=t.R8)),y===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(q=t.R8UI),I===t.UNSIGNED_SHORT&&(q=t.R16UI),I===t.UNSIGNED_INT&&(q=t.R32UI),I===t.BYTE&&(q=t.R8I),I===t.SHORT&&(q=t.R16I),I===t.INT&&(q=t.R32I)),y===t.RG&&(I===t.FLOAT&&(q=t.RG32F),I===t.HALF_FLOAT&&(q=t.RG16F),I===t.UNSIGNED_BYTE&&(q=t.RG8)),y===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(q=t.RG8UI),I===t.UNSIGNED_SHORT&&(q=t.RG16UI),I===t.UNSIGNED_INT&&(q=t.RG32UI),I===t.BYTE&&(q=t.RG8I),I===t.SHORT&&(q=t.RG16I),I===t.INT&&(q=t.RG32I)),y===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(q=t.RGB8UI),I===t.UNSIGNED_SHORT&&(q=t.RGB16UI),I===t.UNSIGNED_INT&&(q=t.RGB32UI),I===t.BYTE&&(q=t.RGB8I),I===t.SHORT&&(q=t.RGB16I),I===t.INT&&(q=t.RGB32I)),y===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),I===t.UNSIGNED_INT&&(q=t.RGBA32UI),I===t.BYTE&&(q=t.RGBA8I),I===t.SHORT&&(q=t.RGBA16I),I===t.INT&&(q=t.RGBA32I)),y===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),y===t.RGBA){const Me=J?Ac:Je.getTransfer(j);I===t.FLOAT&&(q=t.RGBA32F),I===t.HALF_FLOAT&&(q=t.RGBA16F),I===t.UNSIGNED_BYTE&&(q=Me===ot?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(R,y){let I;return R?y===null||y===er||y===So?I=t.DEPTH24_STENCIL8:y===Di?I=t.DEPTH32F_STENCIL8:y===xo&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===er||y===So?I=t.DEPTH_COMPONENT24:y===Di?I=t.DEPTH_COMPONENT32F:y===xo&&(I=t.DEPTH_COMPONENT16),I}function A(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qn&&R.minFilter!==ai?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),D(y),y.isVideoTexture&&h.delete(y)}function b(R){const y=R.target;y.removeEventListener("dispose",b),M(y)}function D(R){const y=i.get(R);if(y.__webglInit===void 0)return;const I=R.source,j=f.get(I);if(j){const J=j[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(R),Object.keys(j).length===0&&f.delete(I)}i.remove(R)}function T(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const I=R.source,j=f.get(I);delete j[y.__cacheKey],s.memory.textures--}function M(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let J=0;J<y.__webglFramebuffer[j].length;J++)t.deleteFramebuffer(y.__webglFramebuffer[j][J]);else t.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)t.deleteFramebuffer(y.__webglFramebuffer[j]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const I=R.textures;for(let j=0,J=I.length;j<J;j++){const q=i.get(I[j]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),s.memory.textures--),i.remove(I[j])}i.remove(R)}let w=0;function F(){w=0}function k(){const R=w;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),w+=1,R}function W(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Y(R,y){const I=i.get(R);if(R.isVideoTexture&&ke(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(I,R,y);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+y)}function L(R,y){const I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){se(I,R,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+y)}function z(R,y){const I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){se(I,R,y);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+y)}function O(R,y){const I=i.get(R);if(R.version>0&&I.__version!==R.version){ne(I,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+y)}const Z={[_d]:t.REPEAT,[Ha]:t.CLAMP_TO_EDGE,[vd]:t.MIRRORED_REPEAT},$={[Qn]:t.NEAREST,[ZM]:t.NEAREST_MIPMAP_NEAREST,[ll]:t.NEAREST_MIPMAP_LINEAR,[ai]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[Ga]:t.LINEAR_MIPMAP_LINEAR},de={[eE]:t.NEVER,[sE]:t.ALWAYS,[tE]:t.LESS,[Gv]:t.LEQUAL,[nE]:t.EQUAL,[rE]:t.GEQUAL,[iE]:t.GREATER,[aE]:t.NOTEQUAL};function Ee(R,y){if(y.type===Di&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ai||y.magFilter===Nu||y.magFilter===ll||y.magFilter===Ga||y.minFilter===ai||y.minFilter===Nu||y.minFilter===ll||y.minFilter===Ga)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Z[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Z[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Z[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,de[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qn||y.minFilter!==ll&&y.minFilter!==Ga||y.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ne(R,y){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const j=y.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const q=W(y);if(q!==R.__cacheKey){J[q]===void 0&&(J[q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,I=!0),J[q].usedTimes++;const Me=J[R.__cacheKey];Me!==void 0&&(J[R.__cacheKey].usedTimes--,Me.usedTimes===0&&T(y)),R.__cacheKey=q,R.__webglTexture=J[q].texture}return I}function Ve(R,y,I){return Math.floor(Math.floor(R/I)/y)}function X(R,y,I,j){const q=R.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,I,j,y.data);else{q.sort((ie,fe)=>ie.start-fe.start);let Me=0;for(let ie=1;ie<q.length;ie++){const fe=q[Me],Ue=q[ie],Se=fe.start+fe.count,ce=Ve(Ue.start,y.width,4),Ie=Ve(fe.start,y.width,4);Ue.start<=Se+1&&ce===Ie&&Ve(Ue.start+Ue.count-1,y.width,4)===ce?fe.count=Math.max(fe.count,Ue.start+Ue.count-fe.start):(++Me,q[Me]=Ue)}q.length=Me+1;const re=t.getParameter(t.UNPACK_ROW_LENGTH),ve=t.getParameter(t.UNPACK_SKIP_PIXELS),xe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let ie=0,fe=q.length;ie<fe;ie++){const Ue=q[ie],Se=Math.floor(Ue.start/4),ce=Math.ceil(Ue.count/4),Ie=Se%y.width,N=Math.floor(Se/y.width),ae=ce,oe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Ie,N,ae,oe,I,j,y.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,re),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function se(R,y,I){let j=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=t.TEXTURE_3D);const J=Ne(R,y),q=y.source;n.bindTexture(j,R.__webglTexture,t.TEXTURE0+I);const Me=i.get(q);if(q.version!==Me.__version||J===!0){n.activeTexture(t.TEXTURE0+I);const re=Je.getPrimaries(Je.workingColorSpace),ve=y.colorSpace===ia?null:Je.getPrimaries(y.colorSpace),xe=y.colorSpace===ia||re===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ie=S(y.image,!1,a.maxTextureSize);ie=Vt(y,ie);const fe=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type);let Se=_(y.internalFormat,fe,Ue,y.colorSpace,y.isVideoTexture);Ee(j,y);let ce;const Ie=y.mipmaps,N=y.isVideoTexture!==!0,ae=Me.__version===void 0||J===!0,oe=q.dataReady,pe=A(y,ie);if(y.isDepthTexture)Se=v(y.format===Mo,y.type),ae&&(N?n.texStorage2D(t.TEXTURE_2D,1,Se,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Se,ie.width,ie.height,0,fe,Ue,null));else if(y.isDataTexture)if(Ie.length>0){N&&ae&&n.texStorage2D(t.TEXTURE_2D,pe,Se,Ie[0].width,Ie[0].height);for(let ee=0,Q=Ie.length;ee<Q;ee++)ce=Ie[ee],N?oe&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ce.width,ce.height,fe,Ue,ce.data):n.texImage2D(t.TEXTURE_2D,ee,Se,ce.width,ce.height,0,fe,Ue,ce.data);y.generateMipmaps=!1}else N?(ae&&n.texStorage2D(t.TEXTURE_2D,pe,Se,ie.width,ie.height),oe&&X(y,ie,fe,Ue)):n.texImage2D(t.TEXTURE_2D,0,Se,ie.width,ie.height,0,fe,Ue,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){N&&ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Se,Ie[0].width,Ie[0].height,ie.depth);for(let ee=0,Q=Ie.length;ee<Q;ee++)if(ce=Ie[ee],y.format!==Zn)if(fe!==null)if(N){if(oe)if(y.layerUpdates.size>0){const _e=rg(ce.width,ce.height,y.format,y.type);for(const ze of y.layerUpdates){const pt=ce.data.subarray(ze*_e/ce.data.BYTES_PER_ELEMENT,(ze+1)*_e/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ze,ce.width,ce.height,1,fe,pt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ie.depth,fe,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Se,ce.width,ce.height,ie.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?oe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ie.depth,fe,Ue,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,Se,ce.width,ce.height,ie.depth,0,fe,Ue,ce.data)}else{N&&ae&&n.texStorage2D(t.TEXTURE_2D,pe,Se,Ie[0].width,Ie[0].height);for(let ee=0,Q=Ie.length;ee<Q;ee++)ce=Ie[ee],y.format!==Zn?fe!==null?N?oe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,ce.width,ce.height,fe,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,Se,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?oe&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ce.width,ce.height,fe,Ue,ce.data):n.texImage2D(t.TEXTURE_2D,ee,Se,ce.width,ce.height,0,fe,Ue,ce.data)}else if(y.isDataArrayTexture)if(N){if(ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Se,ie.width,ie.height,ie.depth),oe)if(y.layerUpdates.size>0){const ee=rg(ie.width,ie.height,y.format,y.type);for(const Q of y.layerUpdates){const _e=ie.data.subarray(Q*ee/ie.data.BYTES_PER_ELEMENT,(Q+1)*ee/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,fe,Ue,_e)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ue,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,ie.width,ie.height,ie.depth,0,fe,Ue,ie.data);else if(y.isData3DTexture)N?(ae&&n.texStorage3D(t.TEXTURE_3D,pe,Se,ie.width,ie.height,ie.depth),oe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ue,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Se,ie.width,ie.height,ie.depth,0,fe,Ue,ie.data);else if(y.isFramebufferTexture){if(ae)if(N)n.texStorage2D(t.TEXTURE_2D,pe,Se,ie.width,ie.height);else{let ee=ie.width,Q=ie.height;for(let _e=0;_e<pe;_e++)n.texImage2D(t.TEXTURE_2D,_e,Se,ee,Q,0,fe,Ue,null),ee>>=1,Q>>=1}}else if(Ie.length>0){if(N&&ae){const ee=Ct(Ie[0]);n.texStorage2D(t.TEXTURE_2D,pe,Se,ee.width,ee.height)}for(let ee=0,Q=Ie.length;ee<Q;ee++)ce=Ie[ee],N?oe&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,fe,Ue,ce):n.texImage2D(t.TEXTURE_2D,ee,Se,fe,Ue,ce);y.generateMipmaps=!1}else if(N){if(ae){const ee=Ct(ie);n.texStorage2D(t.TEXTURE_2D,pe,Se,ee.width,ee.height)}oe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Ue,ie)}else n.texImage2D(t.TEXTURE_2D,0,Se,fe,Ue,ie);m(y)&&u(j),Me.__version=q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ne(R,y,I){if(y.image.length!==6)return;const j=Ne(R,y),J=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+I);const q=i.get(J);if(J.version!==q.__version||j===!0){n.activeTexture(t.TEXTURE0+I);const Me=Je.getPrimaries(Je.workingColorSpace),re=y.colorSpace===ia?null:Je.getPrimaries(y.colorSpace),ve=y.colorSpace===ia||Me===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const xe=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,fe=[];for(let Q=0;Q<6;Q++)!xe&&!ie?fe[Q]=S(y.image[Q],!0,a.maxCubemapSize):fe[Q]=ie?y.image[Q].image:y.image[Q],fe[Q]=Vt(y,fe[Q]);const Ue=fe[0],Se=r.convert(y.format,y.colorSpace),ce=r.convert(y.type),Ie=_(y.internalFormat,Se,ce,y.colorSpace),N=y.isVideoTexture!==!0,ae=q.__version===void 0||j===!0,oe=J.dataReady;let pe=A(y,Ue);Ee(t.TEXTURE_CUBE_MAP,y);let ee;if(xe){N&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ie,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){ee=fe[Q].mipmaps;for(let _e=0;_e<ee.length;_e++){const ze=ee[_e];y.format!==Zn?Se!==null?N?oe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,ze.width,ze.height,Se,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Ie,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,ze.width,ze.height,Se,ce,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Ie,ze.width,ze.height,0,Se,ce,ze.data)}}}else{if(ee=y.mipmaps,N&&ae){ee.length>0&&pe++;const Q=Ct(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ie,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){N?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,fe[Q].width,fe[Q].height,Se,ce,fe[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ie,fe[Q].width,fe[Q].height,0,Se,ce,fe[Q].data);for(let _e=0;_e<ee.length;_e++){const pt=ee[_e].image[Q].image;N?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,pt.width,pt.height,Se,ce,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Ie,pt.width,pt.height,0,Se,ce,pt.data)}}else{N?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Se,ce,fe[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ie,Se,ce,fe[Q]);for(let _e=0;_e<ee.length;_e++){const ze=ee[_e];N?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,Se,ce,ze.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Ie,Se,ce,ze.image[Q])}}}m(y)&&u(t.TEXTURE_CUBE_MAP),q.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ye(R,y,I,j,J,q){const Me=r.convert(I.format,I.colorSpace),re=r.convert(I.type),ve=_(I.internalFormat,Me,re,I.colorSpace),xe=i.get(y),ie=i.get(I);if(ie.__renderTarget=y,!xe.__hasExternalTextures){const fe=Math.max(1,y.width>>q),Ue=Math.max(1,y.height>>q);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,q,ve,fe,Ue,y.depth,0,Me,re,null):n.texImage2D(J,q,ve,fe,Ue,0,Me,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),me(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,J,ie.__webglTexture,0,xt(y)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,J,ie.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(R,y,I){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const j=y.depthTexture,J=j&&j.isDepthTexture?j.type:null,q=v(y.stencilBuffer,J),Me=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=xt(y);me(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,q,y.width,y.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,q,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,q,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const j=y.textures;for(let J=0;J<j.length;J++){const q=j[J],Me=r.convert(q.format,q.colorSpace),re=r.convert(q.type),ve=_(q.internalFormat,Me,re,q.colorSpace),xe=xt(y);I&&me(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ve,y.width,y.height):me(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,ve,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ve,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const J=j.__webglTexture,q=xt(y);if(y.depthTexture.format===yo)me(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(y.depthTexture.format===Mo)me(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function vt(R){const y=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=j}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const j=R.texture.mipmaps;j&&j.length>0?Oe(y.__webglFramebuffer[0],R):Oe(y.__webglFramebuffer,R)}else if(I){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=t.createRenderbuffer(),be(y.__webglDepthbuffer[j],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,q)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),be(y.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(R,y,I){const j=i.get(R);y!==void 0&&ye(j.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&vt(R)}function U(R){const y=R.texture,I=i.get(R),j=i.get(y);R.addEventListener("dispose",b);const J=R.textures,q=R.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=y.version,s.memory.textures++),q){I.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[re]=[];for(let ve=0;ve<y.mipmaps.length;ve++)I.__webglFramebuffer[re][ve]=t.createFramebuffer()}else I.__webglFramebuffer[re]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)I.__webglFramebuffer[re]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Me)for(let re=0,ve=J.length;re<ve;re++){const xe=i.get(J[re]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&me(R)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const ve=J[re];I.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[re]);const xe=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),fe=_(ve.internalFormat,xe,ie,ve.colorSpace,R.isXRRenderTarget===!0),Ue=xt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,fe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,I.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),be(I.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)ye(I.__webglFramebuffer[re][ve],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve);else ye(I.__webglFramebuffer[re],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(y)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let re=0,ve=J.length;re<ve;re++){const xe=J[re],ie=i.get(xe);let fe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ie.__webglTexture),Ee(fe,xe),ye(I.__webglFramebuffer,R,xe,t.COLOR_ATTACHMENT0+re,fe,0),m(xe)&&u(fe)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,j.__webglTexture),Ee(re,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)ye(I.__webglFramebuffer[ve],R,y,t.COLOR_ATTACHMENT0,re,ve);else ye(I.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,re,0);m(y)&&u(re),n.unbindTexture()}R.depthBuffer&&vt(R)}function ht(R){const y=R.textures;for(let I=0,j=y.length;I<j;I++){const J=y[I];if(m(J)){const q=g(R),Me=i.get(J).__webglTexture;n.bindTexture(q,Me),u(q),n.unbindTexture()}}}const Re=[],$e=[];function Te(R){if(R.samples>0){if(me(R)===!1){const y=R.textures,I=R.width,j=R.height;let J=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),re=y.length>1;if(re)for(let xe=0;xe<y.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ve=R.texture.mipmaps;ve&&ve.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);const ie=i.get(y[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,I,j,0,0,I,j,J,t.NEAREST),l===!0&&(Re.length=0,$e.length=0,Re.push(t.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Re.push(q),$e.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,$e)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let xe=0;xe<y.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);const ie=i.get(y[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function xt(R){return Math.min(a.maxSamples,R.samples)}function me(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ke(R){const y=s.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Vt(R,y){const I=R.colorSpace,j=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==ds&&I!==ia&&(Je.getTransfer(I)===ot?(j!==Zn||J!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}function Ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=L,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=Be,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=me}function gR(t,e){function n(i,a=ia){let r;const s=Je.getTransfer(a);if(i===Ii)return t.UNSIGNED_BYTE;if(i===jh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Pv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Nv)return t.BYTE;if(i===Ov)return t.SHORT;if(i===xo)return t.UNSIGNED_SHORT;if(i===Yh)return t.INT;if(i===er)return t.UNSIGNED_INT;if(i===Di)return t.FLOAT;if(i===Fo)return t.HALF_FLOAT;if(i===Bv)return t.ALPHA;if(i===zv)return t.RGB;if(i===Zn)return t.RGBA;if(i===yo)return t.DEPTH_COMPONENT;if(i===Mo)return t.DEPTH_STENCIL;if(i===Iv)return t.RED;if(i===Kh)return t.RED_INTEGER;if(i===Fv)return t.RG;if(i===Qh)return t.RG_INTEGER;if(i===Jh)return t.RGBA_INTEGER;if(i===kl||i===Xl||i===Wl||i===ql)if(s===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ql)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===Sd||i===yd||i===Md)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Md)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===Td||i===bd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ed||i===Td)return s===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bd)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ad||i===Rd||i===wd||i===Cd||i===Dd||i===Ud||i===Ld||i===Nd||i===Od||i===Pd||i===Bd||i===zd||i===Id||i===Fd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ad)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wd)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cd)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ud)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ld)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nd)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Od)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pd)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bd)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Id)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===Hd||i===Gd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return s===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hv||i===Vd||i===kd||i===Xd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class sx extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const _R=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vR=`
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

}`;class xR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new sx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hi({vertexShader:_R,fragmentShader:vR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new Xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SR extends ys{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,x=null;const S=new xR,m={},u=n.getContextAttributes();let g=null,_=null;const v=[],A=[],C=new nt;let b=null;const D=new Yn;D.viewport=new Lt;const T=new Yn;T.viewport=new Lt;const M=[D,T],w=new GE;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let se=v[X];return se===void 0&&(se=new nf,v[X]=se),se.getTargetRaySpace()},this.getControllerGrip=function(X){let se=v[X];return se===void 0&&(se=new nf,v[X]=se),se.getGripSpace()},this.getHand=function(X){let se=v[X];return se===void 0&&(se=new nf,v[X]=se),se.getHandSpace()};function W(X){const se=A.indexOf(X.inputSource);if(se===-1)return;const ne=v[se];ne!==void 0&&(ne.update(X.inputSource,X.frame,c||s),ne.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",L);for(let X=0;X<v.length;X++){const se=A[X];se!==null&&(A[X]=null,v[X].disconnect(se))}F=null,k=null,S.reset();for(const X in m)delete m[X];e.setRenderTarget(g),p=null,f=null,d=null,a=null,_=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",L),u.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(a,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ye=null,be=null;u.depth&&(be=u.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=u.stencil?Mo:yo,ye=u.stencil?So:er);const Oe={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:r};f=d.createProjectionLayer(Oe),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new tr(f.textureWidth,f.textureHeight,{format:Zn,type:Ii,depthTexture:new $v(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,ne),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new tr(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Ve.setContext(a),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function L(X){for(let se=0;se<X.removed.length;se++){const ne=X.removed[se],ye=A.indexOf(ne);ye>=0&&(A[ye]=null,v[ye].disconnect(ne))}for(let se=0;se<X.added.length;se++){const ne=X.added[se];let ye=A.indexOf(ne);if(ye===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=A.length){A.push(ne),ye=Oe;break}else if(A[Oe]===null){A[Oe]=ne,ye=Oe;break}if(ye===-1)break}const be=v[ye];be&&be.connect(ne)}}const z=new V,O=new V;function Z(X,se,ne){z.setFromMatrixPosition(se.matrixWorld),O.setFromMatrixPosition(ne.matrixWorld);const ye=z.distanceTo(O),be=se.projectionMatrix.elements,Oe=ne.projectionMatrix.elements,vt=be[14]/(be[10]-1),Be=be[14]/(be[10]+1),U=(be[9]+1)/be[5],ht=(be[9]-1)/be[5],Re=(be[8]-1)/be[0],$e=(Oe[8]+1)/Oe[0],Te=vt*Re,xt=vt*$e,me=ye/(-Re+$e),ke=me*-Re;if(se.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ke),X.translateZ(me),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(se.projectionMatrix),X.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Vt=vt+me,Ct=Be+me,R=Te-ke,y=xt+(ye-ke),I=U*Be/Ct*Vt,j=ht*Be/Ct*Vt;X.projectionMatrix.makePerspective(R,y,I,j,Vt,Ct),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,se){se===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(se.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let se=X.near,ne=X.far;S.texture!==null&&(S.depthNear>0&&(se=S.depthNear),S.depthFar>0&&(ne=S.depthFar)),w.near=T.near=D.near=se,w.far=T.far=D.far=ne,(F!==w.near||k!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,k=w.far),w.layers.mask=X.layers.mask|6,D.layers.mask=w.layers.mask&3,T.layers.mask=w.layers.mask&5;const ye=X.parent,be=w.cameras;$(w,ye);for(let Oe=0;Oe<be.length;Oe++)$(be[Oe],ye);be.length===2?Z(w,D,T):w.projectionMatrix.copy(D.projectionMatrix),de(X,w,ye)};function de(X,se,ne){ne===null?X.matrix.copy(se.matrixWorld):(X.matrix.copy(ne.matrixWorld),X.matrix.invert(),X.matrix.multiply(se.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(se.projectionMatrix),X.projectionMatrixInverse.copy(se.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Wd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(w)},this.getCameraTexture=function(X){return m[X]};let Ee=null;function Ne(X,se){if(h=se.getViewerPose(c||s),x=se,h!==null){const ne=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ye=!1;ne.length!==w.cameras.length&&(w.cameras.length=0,ye=!0);for(let Be=0;Be<ne.length;Be++){const U=ne[Be];let ht=null;if(p!==null)ht=p.getViewport(U);else{const $e=d.getViewSubImage(f,U);ht=$e.viewport,Be===0&&(e.setRenderTargetTextures(_,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(_))}let Re=M[Be];Re===void 0&&(Re=new Yn,Re.layers.enable(Be),Re.viewport=new Lt,M[Be]=Re),Re.matrix.fromArray(U.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(U.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(ht.x,ht.y,ht.width,ht.height),Be===0&&(w.matrix.copy(Re.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ye===!0&&w.cameras.push(Re)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&d){const Be=d.getDepthInformation(ne[0]);Be&&Be.isValid&&Be.texture&&S.init(Be,a.renderState)}if(be&&be.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Be=0;Be<ne.length;Be++){const U=ne[Be].camera;if(U){let ht=m[U];ht||(ht=new sx,m[U]=ht);const Re=d.getCameraImage(U);ht.sourceTexture=Re}}}for(let ne=0;ne<v.length;ne++){const ye=A[ne],be=v[ne];ye!==null&&be!==void 0&&be.update(ye,se,c||s)}Ee&&Ee(X,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),x=null}const Ve=new tx;Ve.setAnimationLoop(Ne),this.setAnimationLoop=function(X){Ee=X},this.dispose=function(){}}}const La=new Fi,yR=new It;function MR(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Zv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),S(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===dn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===dn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),_=g.envMap,v=g.envMapRotation;_&&(m.envMap.value=_,La.copy(v),La.x*=-1,La.y*=-1,La.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(La.y*=-1,La.z*=-1),m.envMapRotation.value.setFromMatrix4(yR.makeRotationFromEuler(La)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===dn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function ER(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const v=_.program;i.uniformBlockBinding(g,v)}function c(g,_){let v=a[g.id];v===void 0&&(x(g),v=h(g),a[g.id]=v,g.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(g,A);const C=e.render.frame;r[g.id]!==C&&(f(g),r[g.id]=C)}function h(g){const _=d();g.__bindingPointIndex=_;const v=t.createBuffer(),A=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,v),v}function d(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=a[g.id],v=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,b=v.length;C<b;C++){const D=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,M=D.length;T<M;T++){const w=D[T];if(p(w,C,T,A)===!0){const F=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let Y=0;Y<k.length;Y++){const L=k[Y],z=S(L);typeof L=="number"||typeof L=="boolean"?(w.__data[0]=L,t.bufferSubData(t.UNIFORM_BUFFER,F+W,w.__data)):L.isMatrix3?(w.__data[0]=L.elements[0],w.__data[1]=L.elements[1],w.__data[2]=L.elements[2],w.__data[3]=0,w.__data[4]=L.elements[3],w.__data[5]=L.elements[4],w.__data[6]=L.elements[5],w.__data[7]=0,w.__data[8]=L.elements[6],w.__data[9]=L.elements[7],w.__data[10]=L.elements[8],w.__data[11]=0):(L.toArray(w.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,v,A){const C=g.value,b=_+"_"+v;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const D=A[b];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return A[b]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function x(g){const _=g.uniforms;let v=0;const A=16;for(let b=0,D=_.length;b<D;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,w=T.length;M<w;M++){const F=T[M],k=Array.isArray(F.value)?F.value:[F.value];for(let W=0,Y=k.length;W<Y;W++){const L=k[W],z=S(L),O=v%A,Z=O%z.boundary,$=O+Z;v+=Z,$!==0&&A-$<z.storage&&(v+=A-$),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=z.storage}}}const C=v%A;return C>0&&(v+=A-C),g.__size=v,g.__cache={},this}function S(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const v=s.indexOf(_.__bindingPointIndex);s.splice(v,1),t.deleteBuffer(a[_.id]),delete a[_.id],delete r[_.id]}function u(){for(const g in a)t.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class TR{constructor(e={}){const{canvas:n=lE(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const x=new Uint32Array(4),S=new Int32Array(4);let m=null,u=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=On;let C=0,b=0,D=null,T=-1,M=null;const w=new Lt,F=new Lt;let k=null;const W=new ut(0);let Y=0,L=n.width,z=n.height,O=1,Z=null,$=null;const de=new Lt(0,0,L,z),Ee=new Lt(0,0,L,z);let Ne=!1;const Ve=new Jv;let X=!1,se=!1;const ne=new It,ye=new V,be=new Lt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Be(){return D===null?O:1}let U=i;function ht(E,P){return n.getContext(E,P)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qh}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",ee,!1),U===null){const P="webgl2";if(U=ht(P,E),U===null)throw ht(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Re,$e,Te,xt,me,ke,Vt,Ct,R,y,I,j,J,q,Me,re,ve,xe,ie,fe,Ue,Se,ce,Ie;function N(){Re=new O1(U),Re.init(),Se=new gR(U,Re),$e=new R1(U,Re,e,Se),Te=new pR(U,Re),$e.reversedDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),xt=new z1(U),me=new tR,ke=new mR(U,Re,Te,me,$e,Se,xt),Vt=new C1(v),Ct=new N1(v),R=new kE(U),ce=new b1(U,R),y=new P1(U,R,xt,ce),I=new F1(U,y,R,xt),ie=new I1(U,$e,ke),re=new w1(me),j=new eR(v,Vt,Ct,Re,$e,ce,re),J=new MR(v,me),q=new iR,Me=new cR(Re),xe=new T1(v,Vt,Ct,Te,I,p,l),ve=new dR(v,I,$e),Ie=new ER(U,xt,$e,Te),fe=new A1(U,Re,xt),Ue=new B1(U,Re,xt),xt.programs=j.programs,v.capabilities=$e,v.extensions=Re,v.properties=me,v.renderLists=q,v.shadowMap=ve,v.state=Te,v.info=xt}N();const ae=new SR(v,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(L,z,!1))},this.getSize=function(E){return E.set(L,z)},this.setSize=function(E,P,H=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,z=P,n.width=Math.floor(E*O),n.height=Math.floor(P*O),H===!0&&(n.style.width=E+"px",n.style.height=P+"px"),this.setViewport(0,0,E,P)},this.getDrawingBufferSize=function(E){return E.set(L*O,z*O).floor()},this.setDrawingBufferSize=function(E,P,H){L=E,z=P,O=H,n.width=Math.floor(E*H),n.height=Math.floor(P*H),this.setViewport(0,0,E,P)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(de)},this.setViewport=function(E,P,H,G){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,P,H,G),Te.viewport(w.copy(de).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(Ee)},this.setScissor=function(E,P,H,G){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,P,H,G),Te.scissor(F.copy(Ee).multiplyScalar(O).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(E){Te.setScissorTest(Ne=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(E=!0,P=!0,H=!0){let G=0;if(E){let B=!1;if(D!==null){const te=D.texture.format;B=te===Jh||te===Qh||te===Kh}if(B){const te=D.texture.type,ue=te===Ii||te===er||te===xo||te===So||te===jh||te===Zh,ge=xe.getClearColor(),he=xe.getClearAlpha(),Ce=ge.r,Pe=ge.g,Ae=ge.b;ue?(x[0]=Ce,x[1]=Pe,x[2]=Ae,x[3]=he,U.clearBufferuiv(U.COLOR,0,x)):(S[0]=Ce,S[1]=Pe,S[2]=Ae,S[3]=he,U.clearBufferiv(U.COLOR,0,S))}else G|=U.COLOR_BUFFER_BIT}P&&(G|=U.DEPTH_BUFFER_BIT),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),xe.dispose(),q.dispose(),Me.dispose(),me.dispose(),Vt.dispose(),Ct.dispose(),I.dispose(),ce.dispose(),Ie.dispose(),j.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",$n),ae.removeEventListener("sessionend",np),Ta.stop()};function oe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=xt.autoReset,P=ve.enabled,H=ve.autoUpdate,G=ve.needsUpdate,B=ve.type;N(),xt.autoReset=E,ve.enabled=P,ve.autoUpdate=H,ve.needsUpdate=G,ve.type=B}function ee(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const P=E.target;P.removeEventListener("dispose",Q),_e(P)}function _e(E){ze(E),me.remove(E)}function ze(E){const P=me.get(E).programs;P!==void 0&&(P.forEach(function(H){j.releaseProgram(H)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,P,H,G,B,te){P===null&&(P=Oe);const ue=B.isMesh&&B.matrixWorld.determinant()<0,ge=lx(E,P,H,G,B);Te.setMaterial(G,ue);let he=H.index,Ce=1;if(G.wireframe===!0){if(he=y.getWireframeAttribute(H),he===void 0)return;Ce=2}const Pe=H.drawRange,Ae=H.attributes.position;let je=Pe.start*Ce,st=(Pe.start+Pe.count)*Ce;te!==null&&(je=Math.max(je,te.start*Ce),st=Math.min(st,(te.start+te.count)*Ce)),he!==null?(je=Math.max(je,0),st=Math.min(st,he.count)):Ae!=null&&(je=Math.max(je,0),st=Math.min(st,Ae.count));const At=st-je;if(At<0||At===1/0)return;ce.setup(B,G,ge,H,he);let gt,ft=fe;if(he!==null&&(gt=R.get(he),ft=Ue,ft.setIndex(gt)),B.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*Be()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(B.isLine){let we=G.linewidth;we===void 0&&(we=1),Te.setLineWidth(we*Be()),B.isLineSegments?ft.setMode(U.LINES):B.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else B.isPoints?ft.setMode(U.POINTS):B.isSprite&&ft.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const we=B._multiDrawStarts,Et=B._multiDrawCounts,Qe=B._multiDrawCount,gn=he?R.get(he).bytesPerElement:1,or=me.get(G).currentProgram.getUniforms();for(let _n=0;_n<Qe;_n++)or.setValue(U,"_gl_DrawID",_n),ft.render(we[_n]/gn,Et[_n])}else if(B.isInstancedMesh)ft.renderInstances(je,At,B.count);else if(H.isInstancedBufferGeometry){const we=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Et=Math.min(H.instanceCount,we);ft.renderInstances(je,At,Et)}else ft.render(je,At)};function pt(E,P,H){E.transparent===!0&&E.side===Ti&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,qo(E,P,H),E.side=ya,E.needsUpdate=!0,qo(E,P,H),E.side=Ti):qo(E,P,H)}this.compile=function(E,P,H=null){H===null&&(H=E),u=Me.get(H),u.init(P),_.push(u),H.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const G=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const te=B.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){const ge=te[ue];pt(ge,H,B),G.add(ge)}else pt(te,H,B),G.add(te)}),u=_.pop(),G},this.compileAsync=function(E,P,H=null){const G=this.compile(E,P,H);return new Promise(B=>{function te(){if(G.forEach(function(ue){me.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){B(E);return}setTimeout(te,10)}Re.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let it=null;function hi(E){it&&it(E)}function $n(){Ta.stop()}function np(){Ta.start()}const Ta=new tx;Ta.setAnimationLoop(hi),typeof self<"u"&&Ta.setContext(self),this.setAnimationLoop=function(E){it=E,ae.setAnimationLoop(E),E===null?Ta.stop():Ta.start()},ae.addEventListener("sessionstart",$n),ae.addEventListener("sessionend",np),this.render=function(E,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(P),P=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,P,D),u=Me.get(E,_.length),u.init(P),_.push(u),ne.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ve.setFromProjectionMatrix(ne,ri,P.reversedDepth),se=this.localClippingEnabled,X=re.init(this.clippingPlanes,se),m=q.get(E,g.length),m.init(),g.push(m),ae.enabled===!0&&ae.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&Kc(te,P,-1/0,v.sortObjects)}Kc(E,P,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Z,$),vt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,vt&&xe.addToRenderList(m,E),this.info.render.frame++,X===!0&&re.beginShadows();const H=u.state.shadowsArray;ve.render(H,E,P),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,B=m.transmissive;if(u.setupLights(),P.isArrayCamera){const te=P.cameras;if(B.length>0)for(let ue=0,ge=te.length;ue<ge;ue++){const he=te[ue];ap(G,B,E,he)}vt&&xe.render(E);for(let ue=0,ge=te.length;ue<ge;ue++){const he=te[ue];ip(m,E,he,he.viewport)}}else B.length>0&&ap(G,B,E,P),vt&&xe.render(E),ip(m,E,P);D!==null&&b===0&&(ke.updateMultisampleRenderTarget(D),ke.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(v,E,P),ce.resetDefaultState(),T=-1,M=null,_.pop(),_.length>0?(u=_[_.length-1],X===!0&&re.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Kc(E,P,H,G){if(E.visible===!1)return;if(E.layers.test(P.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(P);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ve.intersectsSprite(E)){G&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);const ue=I.update(E),ge=E.material;ge.visible&&m.push(E,ue,ge,H,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ve.intersectsObject(E))){const ue=I.update(E),ge=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),be.copy(ue.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(ne)),Array.isArray(ge)){const he=ue.groups;for(let Ce=0,Pe=he.length;Ce<Pe;Ce++){const Ae=he[Ce],je=ge[Ae.materialIndex];je&&je.visible&&m.push(E,ue,je,H,be.z,Ae)}}else ge.visible&&m.push(E,ue,ge,H,be.z,null)}}const te=E.children;for(let ue=0,ge=te.length;ue<ge;ue++)Kc(te[ue],P,H,G)}function ip(E,P,H,G){const B=E.opaque,te=E.transmissive,ue=E.transparent;u.setupLightsView(H),X===!0&&re.setGlobalState(v.clippingPlanes,H),G&&Te.viewport(w.copy(G)),B.length>0&&Wo(B,P,H),te.length>0&&Wo(te,P,H),ue.length>0&&Wo(ue,P,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ap(E,P,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new tr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?Fo:Ii,minFilter:Ga,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const te=u.state.transmissionRenderTarget[G.id],ue=G.viewport||w;te.setSize(ue.z*v.transmissionResolutionScale,ue.w*v.transmissionResolutionScale);const ge=v.getRenderTarget(),he=v.getActiveCubeFace(),Ce=v.getActiveMipmapLevel();v.setRenderTarget(te),v.getClearColor(W),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),vt&&xe.render(H);const Pe=v.toneMapping;v.toneMapping=_a;const Ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),X===!0&&re.setGlobalState(v.clippingPlanes,G),Wo(E,H,G),ke.updateMultisampleRenderTarget(te),ke.updateRenderTargetMipmap(te),Re.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let st=0,At=P.length;st<At;st++){const gt=P[st],ft=gt.object,we=gt.geometry,Et=gt.material,Qe=gt.group;if(Et.side===Ti&&ft.layers.test(G.layers)){const gn=Et.side;Et.side=dn,Et.needsUpdate=!0,rp(ft,H,G,we,Et,Qe),Et.side=gn,Et.needsUpdate=!0,je=!0}}je===!0&&(ke.updateMultisampleRenderTarget(te),ke.updateRenderTargetMipmap(te))}v.setRenderTarget(ge,he,Ce),v.setClearColor(W,Y),Ae!==void 0&&(G.viewport=Ae),v.toneMapping=Pe}function Wo(E,P,H){const G=P.isScene===!0?P.overrideMaterial:null;for(let B=0,te=E.length;B<te;B++){const ue=E[B],ge=ue.object,he=ue.geometry,Ce=ue.group;let Pe=ue.material;Pe.allowOverride===!0&&G!==null&&(Pe=G),ge.layers.test(H.layers)&&rp(ge,P,H,he,Pe,Ce)}}function rp(E,P,H,G,B,te){E.onBeforeRender(v,P,H,G,B,te),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,P,H,G,E,te),B.transparent===!0&&B.side===Ti&&B.forceSinglePass===!1?(B.side=dn,B.needsUpdate=!0,v.renderBufferDirect(H,P,G,B,E,te),B.side=ya,B.needsUpdate=!0,v.renderBufferDirect(H,P,G,B,E,te),B.side=Ti):v.renderBufferDirect(H,P,G,B,E,te),E.onAfterRender(v,P,H,G,B,te)}function qo(E,P,H){P.isScene!==!0&&(P=Oe);const G=me.get(E),B=u.state.lights,te=u.state.shadowsArray,ue=B.state.version,ge=j.getParameters(E,B.state,te,P,H),he=j.getProgramCacheKey(ge);let Ce=G.programs;G.environment=E.isMeshStandardMaterial?P.environment:null,G.fog=P.fog,G.envMap=(E.isMeshStandardMaterial?Ct:Vt).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?P.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",Q),Ce=new Map,G.programs=Ce);let Pe=Ce.get(he);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===ue)return op(E,ge),Pe}else ge.uniforms=j.getUniforms(E),E.onBeforeCompile(ge,v),Pe=j.acquireProgram(ge,he),Ce.set(he,Pe),G.uniforms=ge.uniforms;const Ae=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=re.uniform),op(E,ge),G.needsLights=ux(E),G.lightsStateVersion=ue,G.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMap.value=B.state.directionalShadowMap,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotShadowMap.value=B.state.spotShadowMap,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMap.value=B.state.pointShadowMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function sp(E){if(E.uniformsList===null){const P=E.currentProgram.getUniforms();E.uniformsList=jl.seqWithValue(P.seq,E.uniforms)}return E.uniformsList}function op(E,P){const H=me.get(E);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function lx(E,P,H,G,B){P.isScene!==!0&&(P=Oe),ke.resetTextureUnits();const te=P.fog,ue=G.isMeshStandardMaterial?P.environment:null,ge=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ds,he=(G.isMeshStandardMaterial?Ct:Vt).get(G.envMap||ue),Ce=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!H.morphAttributes.position,je=!!H.morphAttributes.normal,st=!!H.morphAttributes.color;let At=_a;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=v.toneMapping);const gt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=gt!==void 0?gt.length:0,we=me.get(G),Et=u.state.lights;if(X===!0&&(se===!0||E!==M)){const tn=E===M&&G.id===T;re.setState(G,E,tn)}let Qe=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Et.state.version||we.outputColorSpace!==ge||B.isBatchedMesh&&we.batching===!1||!B.isBatchedMesh&&we.batching===!0||B.isBatchedMesh&&we.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&we.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&we.instancing===!1||!B.isInstancedMesh&&we.instancing===!0||B.isSkinnedMesh&&we.skinning===!1||!B.isSkinnedMesh&&we.skinning===!0||B.isInstancedMesh&&we.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&we.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&we.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&we.instancingMorph===!1&&B.morphTexture!==null||we.envMap!==he||G.fog===!0&&we.fog!==te||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==re.numPlanes||we.numIntersection!==re.numIntersection)||we.vertexAlphas!==Ce||we.vertexTangents!==Pe||we.morphTargets!==Ae||we.morphNormals!==je||we.morphColors!==st||we.toneMapping!==At||we.morphTargetsCount!==ft)&&(Qe=!0):(Qe=!0,we.__version=G.version);let gn=we.currentProgram;Qe===!0&&(gn=qo(G,P,B));let or=!1,_n=!1,Es=!1;const Tt=gn.getUniforms(),Dn=we.uniforms;if(Te.useProgram(gn.program)&&(or=!0,_n=!0,Es=!0),G.id!==T&&(T=G.id,_n=!0),or||M!==E){Te.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Tt.setValue(U,"projectionMatrix",E.projectionMatrix),Tt.setValue(U,"viewMatrix",E.matrixWorldInverse);const on=Tt.map.cameraPosition;on!==void 0&&on.setValue(U,ye.setFromMatrixPosition(E.matrixWorld)),$e.logarithmicDepthBuffer&&Tt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,_n=!0,Es=!0)}if(B.isSkinnedMesh){Tt.setOptional(U,B,"bindMatrix"),Tt.setOptional(U,B,"bindMatrixInverse");const tn=B.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Tt.setValue(U,"boneTexture",tn.boneTexture,ke))}B.isBatchedMesh&&(Tt.setOptional(U,B,"batchingTexture"),Tt.setValue(U,"batchingTexture",B._matricesTexture,ke),Tt.setOptional(U,B,"batchingIdTexture"),Tt.setValue(U,"batchingIdTexture",B._indirectTexture,ke),Tt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&Tt.setValue(U,"batchingColorTexture",B._colorsTexture,ke));const Un=H.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ie.update(B,H,gn),(_n||we.receiveShadow!==B.receiveShadow)&&(we.receiveShadow=B.receiveShadow,Tt.setValue(U,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Dn.envMap.value=he,Dn.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&P.environment!==null&&(Dn.envMapIntensity.value=P.environmentIntensity),_n&&(Tt.setValue(U,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&cx(Dn,Es),te&&G.fog===!0&&J.refreshFogUniforms(Dn,te),J.refreshMaterialUniforms(Dn,G,O,z,u.state.transmissionRenderTarget[E.id]),jl.upload(U,sp(we),Dn,ke)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(jl.upload(U,sp(we),Dn,ke),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(U,"center",B.center),Tt.setValue(U,"modelViewMatrix",B.modelViewMatrix),Tt.setValue(U,"normalMatrix",B.normalMatrix),Tt.setValue(U,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const tn=G.uniformsGroups;for(let on=0,Qc=tn.length;on<Qc;on++){const ba=tn[on];Ie.update(ba,gn),Ie.bind(ba,gn)}}return gn}function cx(E,P){E.ambientLightColor.needsUpdate=P,E.lightProbe.needsUpdate=P,E.directionalLights.needsUpdate=P,E.directionalLightShadows.needsUpdate=P,E.pointLights.needsUpdate=P,E.pointLightShadows.needsUpdate=P,E.spotLights.needsUpdate=P,E.spotLightShadows.needsUpdate=P,E.rectAreaLights.needsUpdate=P,E.hemisphereLights.needsUpdate=P}function ux(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,P,H){const G=me.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),me.get(E.texture).__webglTexture=P,me.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,P){const H=me.get(E);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0};const fx=U.createFramebuffer();this.setRenderTarget=function(E,P=0,H=0){D=E,C=P,b=H;let G=!0,B=null,te=!1,ue=!1;if(E){const he=me.get(E);if(he.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(he.__webglFramebuffer===void 0)ke.setupRenderTarget(E);else if(he.__hasExternalTextures)ke.rebindTextures(E,me.get(E.texture).__webglTexture,me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ae=E.depthTexture;if(he.__boundDepthTexture!==Ae){if(Ae!==null&&me.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ue=!0);const Pe=me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[P])?B=Pe[P][H]:B=Pe[P],te=!0):E.samples>0&&ke.useMultisampledRTT(E)===!1?B=me.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?B=Pe[H]:B=Pe,w.copy(E.viewport),F.copy(E.scissor),k=E.scissorTest}else w.copy(de).multiplyScalar(O).floor(),F.copy(Ee).multiplyScalar(O).floor(),k=Ne;if(H!==0&&(B=fx),Te.bindFramebuffer(U.FRAMEBUFFER,B)&&G&&Te.drawBuffers(E,B),Te.viewport(w),Te.scissor(F),Te.setScissorTest(k),te){const he=me.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,he.__webglTexture,H)}else if(ue){const he=P;for(let Ce=0;Ce<E.textures.length;Ce++){const Pe=me.get(E.textures[Ce]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ce,Pe.__webglTexture,H,he)}}else if(E!==null&&H!==0){const he=me.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,H)}T=-1},this.readRenderTargetPixels=function(E,P,H,G,B,te,ue,ge=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(he=he[ue]),he){Te.bindFramebuffer(U.FRAMEBUFFER,he);try{const Ce=E.textures[ge],Pe=Ce.format,Ae=Ce.type;if(!$e.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=E.width-G&&H>=0&&H<=E.height-B&&(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ge),U.readPixels(P,H,G,B,Se.convert(Pe),Se.convert(Ae),te))}finally{const Ce=D!==null?me.get(D).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,P,H,G,B,te,ue,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(he=he[ue]),he)if(P>=0&&P<=E.width-G&&H>=0&&H<=E.height-B){Te.bindFramebuffer(U.FRAMEBUFFER,he);const Ce=E.textures[ge],Pe=Ce.format,Ae=Ce.type;if(!$e.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,je),U.bufferData(U.PIXEL_PACK_BUFFER,te.byteLength,U.STREAM_READ),E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ge),U.readPixels(P,H,G,B,Se.convert(Pe),Se.convert(Ae),0);const st=D!==null?me.get(D).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,st);const At=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await cE(U,At,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,te),U.deleteBuffer(je),U.deleteSync(At),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,P=null,H=0){const G=Math.pow(2,-H),B=Math.floor(E.image.width*G),te=Math.floor(E.image.height*G),ue=P!==null?P.x:0,ge=P!==null?P.y:0;ke.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,ue,ge,B,te),Te.unbindTexture()};const dx=U.createFramebuffer(),hx=U.createFramebuffer();this.copyTextureToTexture=function(E,P,H=null,G=null,B=0,te=null){te===null&&(B!==0?(Kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=B,B=0):te=0);let ue,ge,he,Ce,Pe,Ae,je,st,At;const gt=E.isCompressedTexture?E.mipmaps[te]:E.image;if(H!==null)ue=H.max.x-H.min.x,ge=H.max.y-H.min.y,he=H.isBox3?H.max.z-H.min.z:1,Ce=H.min.x,Pe=H.min.y,Ae=H.isBox3?H.min.z:0;else{const Un=Math.pow(2,-B);ue=Math.floor(gt.width*Un),ge=Math.floor(gt.height*Un),E.isDataArrayTexture?he=gt.depth:E.isData3DTexture?he=Math.floor(gt.depth*Un):he=1,Ce=0,Pe=0,Ae=0}G!==null?(je=G.x,st=G.y,At=G.z):(je=0,st=0,At=0);const ft=Se.convert(P.format),we=Se.convert(P.type);let Et;P.isData3DTexture?(ke.setTexture3D(P,0),Et=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(ke.setTexture2DArray(P,0),Et=U.TEXTURE_2D_ARRAY):(ke.setTexture2D(P,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const Qe=U.getParameter(U.UNPACK_ROW_LENGTH),gn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),or=U.getParameter(U.UNPACK_SKIP_PIXELS),_n=U.getParameter(U.UNPACK_SKIP_ROWS),Es=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ae);const Tt=E.isDataArrayTexture||E.isData3DTexture,Dn=P.isDataArrayTexture||P.isData3DTexture;if(E.isDepthTexture){const Un=me.get(E),tn=me.get(P),on=me.get(Un.__renderTarget),Qc=me.get(tn.__renderTarget);Te.bindFramebuffer(U.READ_FRAMEBUFFER,on.__webglFramebuffer),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qc.__webglFramebuffer);for(let ba=0;ba<he;ba++)Tt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.get(E).__webglTexture,B,Ae+ba),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.get(P).__webglTexture,te,At+ba)),U.blitFramebuffer(Ce,Pe,ue,ge,je,st,ue,ge,U.DEPTH_BUFFER_BIT,U.NEAREST);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||me.has(E)){const Un=me.get(E),tn=me.get(P);Te.bindFramebuffer(U.READ_FRAMEBUFFER,dx),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,hx);for(let on=0;on<he;on++)Tt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Un.__webglTexture,B,Ae+on):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Un.__webglTexture,B),Dn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tn.__webglTexture,te,At+on):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,tn.__webglTexture,te),B!==0?U.blitFramebuffer(Ce,Pe,ue,ge,je,st,ue,ge,U.COLOR_BUFFER_BIT,U.NEAREST):Dn?U.copyTexSubImage3D(Et,te,je,st,At+on,Ce,Pe,ue,ge):U.copyTexSubImage2D(Et,te,je,st,Ce,Pe,ue,ge);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Dn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Et,te,je,st,At,ue,ge,he,ft,we,gt.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,te,je,st,At,ue,ge,he,ft,gt.data):U.texSubImage3D(Et,te,je,st,At,ue,ge,he,ft,we,gt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,te,je,st,ue,ge,ft,we,gt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,te,je,st,gt.width,gt.height,ft,gt.data):U.texSubImage2D(U.TEXTURE_2D,te,je,st,ue,ge,ft,we,gt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Qe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,or),U.pixelStorei(U.UNPACK_SKIP_ROWS,_n),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Es),te===0&&P.generateMipmaps&&U.generateMipmap(Et),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,P,H=null,G=null,B=0){return Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,P,H,G,B)},this.initRenderTarget=function(E){me.get(E).__webglFramebuffer===void 0&&ke.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ke.setTextureCube(E,0):E.isData3DTexture?ke.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ke.setTexture2DArray(E,0):ke.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){C=0,b=0,D=null,Te.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}const bR=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,AR=`
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
`;function ox(){const t=Xe.useRef(null),e=Xe.useRef(null),n=Xe.useRef(null),i=Xe.useRef(null),a=Xe.useRef(1),r=Xe.useRef(.95),s=Xe.useRef(60),o=Xe.useRef(0),l=Xe.useRef(0),c=Xe.useRef(0),h=Xe.useRef(0);return Xe.useEffect(()=>{const d=t.current,f=new PE,p=window.innerWidth,x=window.innerHeight,S=new ex(-1,1,1,-1,.1,10);S.position.z=1;const m=new TR({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1,stencil:!1,depth:!1}),u=Math.min(window.devicePixelRatio||1,1.5);a.current=u*r.current,m.setPixelRatio(a.current),m.setSize(p,x,!0),m.setClearColor(855322,1),e.current=m,d.appendChild(m.domElement);const g=new Xo(2,2),_=new Hi({uniforms:{uResolution:{value:new nt(p,x)},uTime:{value:0}},vertexShader:bR,fragmentShader:AR,depthTest:!1,depthWrite:!1});n.current=_;const v=new si(g,_);f.add(v);const A=()=>{const T=window.innerWidth,M=window.innerHeight,w=Math.min(window.devicePixelRatio||1,1.5);a.current=w*r.current,m.setPixelRatio(a.current),m.setSize(T,M,!0);const F=new nt;m.getDrawingBufferSize(F),_.uniforms.uResolution.value.set(F.x,F.y)};window.addEventListener("resize",A);const C=performance.now();o.current=C,c.current=C;const b=()=>{const T=performance.now(),M=T-o.current,w=1e3/s.current;if(M<w){i.current=requestAnimationFrame(b);return}const F=(T-C)/1e3;if(n.current&&(n.current.uniforms.uTime.value=F),n.current){const W=new nt;m.getDrawingBufferSize(W),n.current.uniforms.uResolution.value.set(W.x,W.y)}m.render(f,S),o.current=T,l.current+=1;const k=T-c.current;if(k>=1e3){const W=k/1e3,Y=l.current/W;l.current=0,c.current=T,Y<50&&r.current>.6?(r.current=Math.max(.6,r.current-.1),A()):Y>58&&r.current<1?(h.current+=1,h.current>=2&&(r.current=Math.min(1,r.current+.05),h.current=0,A())):h.current=0,Y<28?s.current=30:Y>55&&(s.current=60)}i.current=requestAnimationFrame(b)};i.current=requestAnimationFrame(b);const D=()=>{document.hidden?(i.current&&cancelAnimationFrame(i.current),i.current=null):i.current||(o.current=performance.now(),i.current=requestAnimationFrame(b))};return document.addEventListener("visibilitychange",D),()=>{i.current&&cancelAnimationFrame(i.current),window.removeEventListener("resize",A),document.removeEventListener("visibilitychange",D),e.current&&e.current.dispose(),n.current&&n.current.dispose(),g.dispose(),m.domElement.parentElement===d&&d.removeChild(m.domElement)}},[]),De.jsx("div",{ref:t,style:{position:"fixed",inset:0,zIndex:-1,background:"#0d0d1a",pointerEvents:"none"},"aria-hidden":"true"})}const RR=()=>{const t=Xe.useRef(null);return Xe.useEffect(()=>{const e=t.current;if(!e)return;let n=.9,i=Math.min(window.devicePixelRatio||1,1.5);const a=()=>{i=Math.min(window.devicePixelRatio||1,1.5);const M=window.innerWidth,w=window.innerHeight;e.style.width=M+"px",e.style.height=w+"px",e.width=Math.floor(M*i*n),e.height=Math.floor(w*i*n)};a(),window.addEventListener("resize",a);const r=e.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance",desynchronized:!0})||e.getContext("experimental-webgl");if(!r)return console.warn("WebGL not supported, Aurora background disabled"),()=>window.removeEventListener("resize",a);const s=`
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
      }
    `,o=`
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;

      // Hash and noise helpers
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        // Reduce octaves from 5 to 4 for performance
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = p * 2.02 + vec2(37.2, 11.7);
          a *= 0.5;
        }
        return v;
      }

      // Compute a flowing aurora band intensity
      float auroraBand(vec2 uv, float t, float yBase, float thickness, float scale, float speed, float curve) {
        // Domain warp for organic motion (no horizontal drift)
        vec2 q = uv * scale;
        q.y += sin(t * 0.5) * (0.18 * speed);
        float w = fbm(q + vec2(0.0, t * 0.05));

        // Wavy baseline anchored in x; animate amplitude only (no phase scroll)
        float amp = 0.14 * (0.6 + 0.4 * sin(t * 0.4));
        float baseWave = sin(uv.x * 2.2);
        float harmonic = 0.5 * sin(uv.x * 5.1 + 0.6 * sin(t * 0.3));
        float baseline = yBase + amp * (baseWave + harmonic) + 0.14 * w;

        // Distance from baseline, shaped into a band with soft edges
        float d = (uv.y - baseline);
  // Add gentle vertical sway without lateral movement (remove extra fbm flutter for perf)
        d += 0.03 * sin(uv.y * 5.0 + t * 0.7);

        // Local thickness modulation for variation
        float localThick = thickness * mix(0.7, 1.3, fbm(uv * 3.0 + t * 0.2));
        float ridge = exp(-pow(abs(d) * curve, 2.0) / max(1e-3, localThick));
        
  // Add vertical streaks (use single noise instead of fbm for perf)
  float streaks = smoothstep(0.35, 1.0, noise(vec2(uv.x * 9.0, uv.y * 2.0 + t * 0.6)));
        ridge *= mix(0.8, 1.7, streaks);
        return ridge;
      }

      // Simple starfield using hashed pixel coords
      float stars(vec2 fragCoord) {
        float s = fract(sin(dot(floor(fragCoord), vec2(12.9898, 78.233))) * 43758.5453);
        // Sparse stars with varied brightness
        float m = step(0.9975, s) * smoothstep(0.9975, 1.0, s);
        return m * 0.8;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float t = u_time;

        // Maintain aspect-correct radial computations
        vec2 pq = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;

        // Darker midnight sky gradient (top darker)
        float skyGrad = smoothstep(1.0, -0.2, uv.y);
        vec3 skyTop = vec3(0.01, 0.02, 0.05);
        vec3 skyBottom = vec3(0.02, 0.04, 0.10);
        vec3 col = mix(skyBottom, skyTop, skyGrad);

        // Two aurora bands: green and pink, at different baselines and flows
  float bandG = auroraBand(uv, t, 0.45, 0.090, 2.0, 0.10, 3.5);
  float bandG2 = auroraBand(uv + vec2(0.05, -0.02), t, 0.58, 0.075, 1.6, 0.08, 3.0) * 0.95;
  float bandP = auroraBand(uv + vec2(0.02, 0.0), t + 10.0, 0.33, 0.085, 2.4, 0.12, 4.0);
  float bandP2 = auroraBand(uv + vec2(-0.04, 0.0), t + 20.0, 0.22, 0.070, 2.0, 0.10, 3.6) * 1.0;

        // Color ramps with altitude-based fading
        vec3 green = vec3(0.20, 0.95, 0.60);
        vec3 pink  = vec3(0.95, 0.40, 0.80);
        float altitude = smoothstep(0.1, 0.8, uv.y);

  float gI = (bandG + bandG2);
  float pI = (bandP + bandP2);
  vec3 gCol = green * gI * mix(0.7, 1.5, altitude);
  vec3 pCol = pink  * pI * mix(0.7, 1.5, altitude);

        // Slight color bleed and soft bloom
  float bloom = smoothstep(0.3, 1.2, gI + pI);
  vec3 aurora = gCol + pCol + 0.22 * bloom * (green * 0.5 + pink * 0.5);

  // Ambient top glow so it's never completely dark
  float topGlow = smoothstep(0.5, 1.0, uv.y) * 0.12;
  aurora += topGlow * (green * 0.25 + pink * 0.15);

        // Vignette to keep focus center-top
        float vig = smoothstep(1.2, 0.2, length(pq));

        // Stars (very subtle)
        float star = stars(gl_FragCoord.xy);
  col = col * 0.65 + aurora + vec3(star * 0.10);
        col *= mix(0.9, 1.0, vig);

  // Tone mapping and clamp
  col = col / (1.0 + max(vec3(0.0), col));
        col = clamp(col, 0.0, 1.0);
        gl_FragColor = vec4(col, 1.0);
      }
    `;function l(M,w){if(!r)return null;const F=r.createShader(M);return F?(r.shaderSource(F,w),r.compileShader(F),r.getShaderParameter(F,r.COMPILE_STATUS)?F:(console.error("Shader compile error:",r.getShaderInfoLog(F)),r.deleteShader(F),null)):null}const c=l(r.VERTEX_SHADER,s),h=l(r.FRAGMENT_SHADER,o);if(!c||!h){window.removeEventListener("resize",a);return}const d=r.createProgram();if(!d){window.removeEventListener("resize",a);return}if(r.attachShader(d,c),r.attachShader(d,h),r.linkProgram(d),!r.getProgramParameter(d,r.LINK_STATUS)){console.error("Program link error:",r.getProgramInfoLog(d)),window.removeEventListener("resize",a);return}r.useProgram(d),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.clearColor(0,0,0,1);const f=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,f),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const p=r.getAttribLocation(d,"a_position");r.enableVertexAttribArray(p),r.vertexAttribPointer(p,2,r.FLOAT,!1,0,0);const x=r.getUniformLocation(d,"u_time"),S=r.getUniformLocation(d,"u_resolution");if(!x||!S){window.removeEventListener("resize",a);return}let m=0;const u=performance.now();let g=u,_=0,v=60,A=60,C=u,b=0;r.viewport(0,0,e.width,e.height),r.uniform1f(x,0),r.uniform2f(S,e.width,e.height),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLES,0,6);const D=M=>{if(!e||!r)return;const w=window.innerWidth,F=window.innerHeight,k=1e3/A;if(M-g<k){m=requestAnimationFrame(D);return}const Y=Math.floor(w*i*n),L=Math.floor(F*i*n);if((e.width!==Y||e.height!==L)&&(e.width=Y,e.height=L),r.viewport(0,0,e.width,e.height),r.clear(r.COLOR_BUFFER_BIT),r.uniform1f(x,(M-u)*.001),r.uniform2f(S,e.width,e.height),r.drawArrays(r.TRIANGLES,0,6),g=M,_++,M-C>=1e3){const z=(M-C)/1e3;v=_/z,_=0,C=M,v<50&&n>.6?(n=Math.max(.6,n-.1),a()):v>58&&n<1?(b+=1,b>=2&&(n=Math.min(1,n+.05),b=0,a())):b=0,v<28?A=30:v>55&&(A=60)}m=requestAnimationFrame(D)};m=requestAnimationFrame(D);const T=()=>{document.hidden?(m&&cancelAnimationFrame(m),m=0):m||(g=performance.now(),m=requestAnimationFrame(D))};return document.addEventListener("visibilitychange",T),()=>{m&&cancelAnimationFrame(m),document.removeEventListener("visibilitychange",T),window.removeEventListener("resize",a)}},[]),De.jsx("div",{style:{position:"fixed",inset:0,zIndex:-1,background:"radial-gradient(1200px 600px at 70% 10%, rgba(51, 242, 153, 0.10), rgba(0,0,0,0)),radial-gradient(900px 500px at 30% 5%, rgba(255, 122, 203, 0.08), rgba(0,0,0,0)),linear-gradient(180deg, #04060a 0%, #03050a 50%, #02030A 100%)",pointerEvents:"none"},"aria-hidden":"true",children:De.jsx("canvas",{ref:t,style:{display:"block",width:"100%",height:"100%",backgroundColor:"transparent"}})})};function wR(){const t=Xe.useRef(null),e=Xe.useRef(null);return Xe.useEffect(()=>{const n=t.current,i=n.getContext("2d"),a=()=>{n.width=window.innerWidth,n.height=window.innerHeight};a(),window.addEventListener("resize",a);const s="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?".split(""),o=14,l=Math.floor(n.width/o),c=[];for(let p=0;p<l;p++)c[p]=Math.random()*-100;let h=0;const d=80,f=p=>{if(p-h<d){e.current=requestAnimationFrame(f);return}h=p,i.fillStyle="rgba(0, 0, 0, 0.08)",i.fillRect(0,0,n.width,n.height),i.fillStyle="#0F4",i.font=`${o}px 'Courier New', monospace`;for(let x=0;x<c.length;x++){const S=s[Math.floor(Math.random()*s.length)],m=x*o,u=c[x]*o,g=Math.random()*.5+.5;i.fillStyle=`rgba(0, 255, 68, ${g})`,i.fillText(S,m,u),u>n.height&&Math.random()>.985&&(c[x]=Math.random()*-50),c[x]+=.5}e.current=requestAnimationFrame(f)};return f(performance.now()),()=>{e.current&&cancelAnimationFrame(e.current),window.removeEventListener("resize",a)}},[]),De.jsx("div",{style:{position:"fixed",inset:0,zIndex:-1,background:"#000000",pointerEvents:"none"},"aria-hidden":"true",children:De.jsx("canvas",{ref:t,style:{display:"block",width:"100%",height:"100%"}})})}function CR(){const t=Xe.useRef(null),e=Xe.useRef(null),n=Xe.useRef(null),i=Xe.useRef(null);return Xe.useEffect(()=>{const a=t.current,r=e.current,s=n.current,o=r.getContext("2d"),l=s.getContext("2d");let c=0,h=0,d=1,f=-1,p=-1,x=!1,S=26,m=Math.sqrt(3)*S,u=1.5*S,g=m,_=[],v=null;function A(L,z){return getComputedStyle(document.documentElement).getPropertyValue(L).trim()||z}function C(L){const z=new Path2D,O=Math.PI/3;for(let Z=0;Z<6;Z++){const $=O*Z-Math.PI/6,de=L*Math.cos($),Ee=L*Math.sin($);Z===0?z.moveTo(de,Ee):z.lineTo(de,Ee)}return z.closePath(),z}function b(L){let z=L>>>0;return()=>{z+=1831565813;let O=Math.imul(z^z>>>15,1|z);return O^=O+Math.imul(O^O>>>7,61|O),((O^O>>>14)>>>0)/4294967296}}function D(L,z){L.width=Math.floor(c*d),L.height=Math.floor(h*d),L.style.width=`${c}px`,L.style.height=`${h}px`,z.setTransform(d,0,0,d,0,0)}let T=-1e9;function M(){var Ee;const L=a.getBoundingClientRect();c=Math.max(1,Math.floor(L.width)),h=Math.max(1,Math.floor(L.height)),d=Math.min(window.devicePixelRatio||1,1.25),D(r,o),D(s,l),S=Math.max(28,Math.min(44,Math.floor(c/36))),m=Math.sqrt(3)*S,u=1.5*S,g=m,v=C(S),_=[];const O=Math.floor((((Ee=window.performance)==null?void 0:Ee.timeOrigin)||Date.now())%2147483647),Z=b(2654435761^O),$=Math.ceil(c/u)+2,de=Math.ceil(h/(g*.75))+2;for(let Ne=0;Ne<de;Ne++){const Ve=Ne*(g*.75),X=Ne%2===0?0:u*.5;for(let se=0;se<$;se++){const ne=se*u+X,ye=Z()*Math.PI*2,be=(Z()-.5)*.35,Oe=Z()*Math.PI*2,vt=.05+.03*Z(),Be=.05+.1*Z();_.push({cx:ne,cy:Ve,phase:ye,jitter:be,ampPhase:Oe,ampSpeed:vt,driftSpeed:Be})}}o.clearRect(0,0,c,h),o.save(),o.strokeStyle=A("--terminal-border","#2b2442"),o.globalAlpha=.12,o.lineWidth=1,o.lineJoin="round";for(const Ne of _)o.save(),o.translate(Ne.cx,Ne.cy),o.stroke(v),o.restore();o.restore(),w(performance.now())}function w(L){if(L<T&&(T=L-1e3/30),L-T<1e3/30)return;T=L;const z=A("--terminal-command","#8fbafc");l.clearRect(0,0,c,h),l.strokeStyle=z,l.lineJoin="round";const O=L*.001,Z=Math.PI*2*.25,$=S*4,de=1/Math.max(.001,$);for(let Ee=0;Ee<_.length;Ee++){const Ne=_[Ee],Ve=Math.sin(Z*O+Ne.phase+Ne.driftSpeed*O)*.5+.5,X=Math.sin(Math.PI*2*Ne.ampSpeed*O+Ne.ampPhase)*.5+.5,se=.5+.9*X;let ne=.1+.7*Ve*Math.min(se,1.4),ye=X;if(x){const be=Ne.cx-f,Oe=Ne.cy-p;let Be=1-Math.hypot(be,Oe)*de;Be>0&&(Be=Be*Be,ne=ne*(1-Be)+1*Be,ye=ye*(1-Be)+1*Be)}l.save(),l.globalAlpha=Math.min(1,ne*(.35+.3*ye)),l.lineWidth=1.7+1.3*ye,l.translate(Ne.cx,Ne.cy),l.stroke(v),l.restore(),l.save(),l.globalAlpha=Math.min(1,ne),l.lineWidth=.95,l.translate(Ne.cx,Ne.cy),l.stroke(v),l.restore()}}function F(L){w(L),i.current=requestAnimationFrame(F)}function k(L){const z=a.getBoundingClientRect(),O=L.clientX-z.left,Z=L.clientY-z.top;O>=0&&Z>=0&&O<=z.width&&Z<=z.height?(f=O,p=Z,x=!0):x=!1}function W(){x=!1}M(),F(0),window.addEventListener("mousemove",k,{passive:!0}),window.addEventListener("mouseleave",W);const Y=()=>M();return window.addEventListener("resize",Y),()=>{i.current&&cancelAnimationFrame(i.current),window.removeEventListener("mousemove",k),window.removeEventListener("mouseleave",W),window.removeEventListener("resize",Y)}},[]),De.jsxs("div",{ref:t,style:{position:"absolute",inset:0,pointerEvents:"none"},children:[De.jsx("canvas",{ref:e,style:{position:"absolute",inset:0}}),De.jsx("canvas",{ref:n,style:{position:"absolute",inset:0}})]})}const DR=()=>{const t=Xe.useRef(null);return Xe.useEffect(()=>{const e=t.current;if(!e)return;let n=.9,i=Math.min(window.devicePixelRatio||1,1.5);const a=()=>{i=Math.min(window.devicePixelRatio||1,1.5);const M=window.innerWidth,w=window.innerHeight;e.style.width=M+"px",e.style.height=w+"px",e.width=Math.floor(M*i*n),e.height=Math.floor(w*i*n)};a(),window.addEventListener("resize",a);const r=e.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance",desynchronized:!0})||e.getContext("experimental-webgl");if(!r)return console.warn("WebGL not supported, Kelp background disabled"),()=>window.removeEventListener("resize",a);const s=`
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `,o=`
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;

      float hash(float n) { return fract(sin(n) * 43758.5453123); }
      float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        float a = hash2(i);
        float b = hash2(i + vec2(1.0, 0.0));
        float c = hash2(i + vec2(0.0, 1.0));
        float d = hash2(i + vec2(1.0, 1.0));
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = p * 2.02 + vec2(37.2, 11.7);
          a *= 0.5;
        }
        return v;
      }

      float sdSegment(vec2 p, vec2 a, vec2 b, vec2 resolution) {
        vec2 rp = p * resolution;
        vec2 ra = a * resolution;
        vec2 rb = b * resolution;
        vec2 pa = rp - ra;
        vec2 ba = rb - ra;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        float d = length(pa - ba * h);
        return d / min(resolution.x, resolution.y);
      }

      mat2 rot2(float a) {
        float c = cos(a), s = sin(a);
        return mat2(c, -s, s, c);
      }

      float trunk(vec2 uv, float x0, float t, vec2 res) {
        float sway = 0.035 * sin(t * 0.6 + x0 * 13.0) * smoothstep(0.0, 1.0, uv.y);
        float curl = 0.02 * sin(uv.y * 10.0 + 2.0 * t + x0 * 21.0);
        float center = x0 + sway + curl * pow(uv.y, 1.2);
        float baseThickness = 0.010;
        float thickness = baseThickness * (1.3 - 0.9 * uv.y);
        float dist = abs(uv.x - center);
        float line = exp(-pow(dist / max(1e-4, thickness), 2.0));
        return line;
      }

      // Branches disabled
      float branches(vec2 uv, float x0, float t, float seed, vec2 res) {
        return 0.0;
      }

      float canopy(vec2 uv, float t) {
        float n = fbm(uv * vec2(6.0, 10.0) + vec2(0.0, t * 0.07));
        float mask = smoothstep(0.25, 0.95, uv.y) * smoothstep(1.05, 0.35, uv.y + 0.35 * fbm(uv * 3.0));
        return n * mask;
      }

      float fireflies(vec2 uv, float t) {
        vec2 p = uv * 6.0;
        float f = 0.0;
        for (int i = 0; i < 3; i++) {
          vec2 cell = floor(p + float(i) * 13.37);
          float rnd = hash2(cell + vec2(3.1 * float(i), 7.7));
          vec2 pos = cell + vec2(hash(rnd * 10.0), hash(rnd * 20.0));
          pos += 0.25 * vec2(sin(t * (0.3 + rnd) + rnd * 6.0), cos(t * (0.37 + rnd) + rnd * 4.0));
          vec2 d = (p - pos);
          float dist = length(d);
          f += smoothstep(0.12, 0.0, dist) * (0.5 + 0.5 * sin(t * 3.0 + rnd * 20.0));
        }
        return f * 0.6;
      }

      void main() {
        vec2 res = u_resolution;
        vec2 uv = gl_FragCoord.xy / res;
        float t = u_time;

        // Underwater-ish gradient
        vec3 top = vec3(0.02, 0.08, 0.12);
        vec3 bottom = vec3(0.00, 0.02, 0.06);
        vec3 col = mix(bottom, top, smoothstep(0.0, 1.0, uv.y));

        float haze = smoothstep(0.0, 0.35, uv.y);
        col *= mix(vec3(0.82, 0.9, 0.95), vec3(1.0), haze);

        const int N = 10;
        float forestI = 0.0;
        float branchI = 0.0;
        for (int i = 0; i < N; i++) {
          float fi = float(i);
          float xBase = (fi + 0.5) / float(N);
          float jitter = (hash(fi * 17.31) - 0.5) * 0.14;
          float par = 0.02 * sin(t * 0.3 + fi * 3.1);
          float x0 = xBase + jitter + par;
          float ti = trunk(uv, x0, t, res);
          forestI += ti;
          branchI += branches(uv, x0, t, fi * 13.7 + 2.3, res);
        }

        float leaf = canopy(uv, t) * 0.6;
        float flies = fireflies(uv, t) * smoothstep(0.25, 1.0, uv.y);

        vec3 trunkCol = vec3(0.06, 0.14, 0.12);
        vec3 branchCol = vec3(0.08, 0.18, 0.16);
        vec3 leafCol = vec3(0.08, 0.35, 0.28);
        vec3 glowCol = vec3(0.2, 0.9, 0.8);

        col = mix(col, trunkCol, clamp(forestI * 0.9, 0.0, 1.0));
        col = mix(col, branchCol, clamp(branchI * 0.7, 0.0, 1.0));
        col += leafCol * leaf * 0.7;
        col += glowCol * flies * 0.15;

        vec2 pq = (gl_FragCoord.xy - 0.5 * res.xy) / res.y;
        float vig = smoothstep(1.25, 0.2, length(pq));
        col *= mix(0.9, 1.0, vig);

        col = col / (1.0 + col);
        gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
      }
    `;function l(M,w){if(!r)return null;const F=r.createShader(M);return F?(r.shaderSource(F,w),r.compileShader(F),r.getShaderParameter(F,r.COMPILE_STATUS)?F:(console.error("Shader compile error:",r.getShaderInfoLog(F)),r.deleteShader(F),null)):null}const c=l(r.VERTEX_SHADER,s),h=l(r.FRAGMENT_SHADER,o);if(!c||!h){window.removeEventListener("resize",a);return}const d=r.createProgram();if(!d){window.removeEventListener("resize",a);return}if(r.attachShader(d,c),r.attachShader(d,h),r.linkProgram(d),!r.getProgramParameter(d,r.LINK_STATUS)){console.error("Program link error:",r.getProgramInfoLog(d)),window.removeEventListener("resize",a);return}r.useProgram(d),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.clearColor(0,0,0,1);const f=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,f),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const p=r.getAttribLocation(d,"a_position");r.enableVertexAttribArray(p),r.vertexAttribPointer(p,2,r.FLOAT,!1,0,0);const x=r.getUniformLocation(d,"u_time"),S=r.getUniformLocation(d,"u_resolution");if(!x||!S){window.removeEventListener("resize",a);return}r.viewport(0,0,e.width,e.height),r.uniform1f(x,0),r.uniform2f(S,e.width,e.height),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLES,0,6);let m=0;const u=performance.now();let g=u,_=0,v=60,A=60,C=u,b=0;const D=M=>{const w=window.innerWidth,F=window.innerHeight,k=1e3/A;if(M-g<k){m=requestAnimationFrame(D);return}const Y=Math.floor(w*i*n),L=Math.floor(F*i*n);if((e.width!==Y||e.height!==L)&&(e.width=Y,e.height=L),r.viewport(0,0,e.width,e.height),r.clear(r.COLOR_BUFFER_BIT),r.uniform1f(x,(M-u)*.001),r.uniform2f(S,e.width,e.height),r.drawArrays(r.TRIANGLES,0,6),g=M,_++,M-C>=1e3){const z=(M-C)/1e3;v=_/z,_=0,C=M,v<50&&n>.6?(n=Math.max(.6,n-.1),a()):v>58&&n<1?(b+=1,b>=2&&(n=Math.min(1,n+.05),b=0,a())):b=0,v<28?A=30:v>55&&(A=60)}m=requestAnimationFrame(D)};m=requestAnimationFrame(D);const T=()=>{document.hidden?(m&&cancelAnimationFrame(m),m=0):m||(g=performance.now(),m=requestAnimationFrame(D))};return document.addEventListener("visibilitychange",T),()=>{m&&cancelAnimationFrame(m),document.removeEventListener("visibilitychange",T),window.removeEventListener("resize",a)}},[]),De.jsx("div",{style:{position:"fixed",inset:0,zIndex:-1,background:"radial-gradient(1000px 600px at 50% 0%, rgba(20, 120, 120, 0.08), rgba(0,0,0,0)),radial-gradient(800px 500px at 20% 10%, rgba(30, 160, 160, 0.06), rgba(0,0,0,0)),linear-gradient(180deg, #02050a 0%, #05141A 60%, #03060b 100%)",pointerEvents:"none"},"aria-hidden":"true",children:De.jsx("canvas",{ref:t,style:{display:"block",width:"100%",height:"100%",backgroundColor:"transparent"}})})},UR={line:ox,matrix:wR,hex:CR,aurora:RR,kelp:DR};function LR(){const{currentTheme:t}=Cv(),e=UR[t]??ox;return De.jsxs("main",{className:"relative w-full h-screen overflow-hidden",children:[De.jsx("div",{className:"fixed inset-0 z-0",children:De.jsx(e,{})}),De.jsx("div",{className:"relative z-10 h-full",children:De.jsx(vM,{})})]})}function NR(){return De.jsx(_M,{children:De.jsx(LR,{})})}uM.createRoot(document.getElementById("root")).render(De.jsx(Hg.StrictMode,{children:De.jsx(NR,{})}));
