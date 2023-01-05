function RI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function AI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Tw(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var ra={},PI={get exports(){return ra},set exports(t){ra=t}},Fc={},S={},$I={get exports(){return S},set exports(t){S=t}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),NI=Symbol.for("react.portal"),DI=Symbol.for("react.fragment"),OI=Symbol.for("react.strict_mode"),LI=Symbol.for("react.profiler"),MI=Symbol.for("react.provider"),UI=Symbol.for("react.context"),FI=Symbol.for("react.forward_ref"),zI=Symbol.for("react.suspense"),jI=Symbol.for("react.memo"),VI=Symbol.for("react.lazy"),Qy=Symbol.iterator;function BI(t){return t===null||typeof t!="object"?null:(t=Qy&&t[Qy]||t["@@iterator"],typeof t=="function"?t:null)}var Iw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bw=Object.assign,xw={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=xw,this.updater=n||Iw}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rw(){}Rw.prototype=Ys.prototype;function rm(t,e,n){this.props=t,this.context=e,this.refs=xw,this.updater=n||Iw}var im=rm.prototype=new Rw;im.constructor=rm;bw(im,Ys.prototype);im.isPureReactComponent=!0;var Yy=Array.isArray,Aw=Object.prototype.hasOwnProperty,sm={current:null},Pw={key:!0,ref:!0,__self:!0,__source:!0};function $w(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Aw.call(e,r)&&!Pw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fa,type:t,key:s,ref:o,props:i,_owner:sm.current}}function HI(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function om(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function WI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xy=/\/+/g;function od(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WI(""+t.key):e.toString(36)}function hu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case NI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+od(o,0):r,Yy(i)?(n="",t!=null&&(n=t.replace(Xy,"$&/")+"/"),hu(i,e,n,"",function(u){return u})):i!=null&&(om(i)&&(i=HI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+od(s,a);o+=hu(s,e,n,l,i)}else if(l=BI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+od(s,a++),o+=hu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Dl(t,e,n){if(t==null)return t;var r=[],i=0;return hu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ot={current:null},du={transition:null},KI={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:du,ReactCurrentOwner:sm};re.Children={map:Dl,forEach:function(t,e,n){Dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Dl(t,function(){e++}),e},toArray:function(t){return Dl(t,function(e){return e})||[]},only:function(t){if(!om(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ys;re.Fragment=DI;re.Profiler=LI;re.PureComponent=rm;re.StrictMode=OI;re.Suspense=zI;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KI;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Aw.call(e,l)&&!Pw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fa,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:UI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:MI,_context:t},t.Consumer=t};re.createElement=$w;re.createFactory=function(t){var e=$w.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:FI,render:t}};re.isValidElement=om;re.lazy=function(t){return{$$typeof:VI,_payload:{_status:-1,_result:t},_init:qI}};re.memo=function(t,e){return{$$typeof:jI,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=du.transition;du.transition={};try{t()}finally{du.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return Ot.current.useCallback(t,e)};re.useContext=function(t){return Ot.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Ot.current.useDeferredValue(t)};re.useEffect=function(t,e){return Ot.current.useEffect(t,e)};re.useId=function(){return Ot.current.useId()};re.useImperativeHandle=function(t,e,n){return Ot.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Ot.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Ot.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Ot.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Ot.current.useReducer(t,e,n)};re.useRef=function(t){return Ot.current.useRef(t)};re.useState=function(t){return Ot.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Ot.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Ot.current.useTransition()};re.version="18.2.0";(function(t){t.exports=re})($I);const pn=AI(S),Is=RI({__proto__:null,default:pn},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GI=S,QI=Symbol.for("react.element"),YI=Symbol.for("react.fragment"),XI=Object.prototype.hasOwnProperty,JI=GI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZI={key:!0,ref:!0,__self:!0,__source:!0};function Nw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XI.call(e,r)&&!ZI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:QI,type:t,key:s,ref:o,props:i,_owner:JI.current}}Fc.Fragment=YI;Fc.jsx=Nw;Fc.jsxs=Nw;(function(t){t.exports=Fc})(PI);const bs=ra.Fragment,C=ra.jsx,te=ra.jsxs,eb=Object.freeze(Object.defineProperty({__proto__:null,Fragment:bs,jsx:C,jsxs:te},Symbol.toStringTag,{value:"Module"}));var ff={},pf={},tb={get exports(){return pf},set exports(t){pf=t}},tn={},mf={},nb={get exports(){return mf},set exports(t){mf=t}},Dw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,H){var K=$.length;$.push(H);e:for(;0<K;){var we=K-1>>>1,D=$[we];if(0<i(D,H))$[we]=H,$[K]=D,K=we;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var H=$[0],K=$.pop();if(K!==H){$[0]=K;e:for(var we=0,D=$.length,L=D>>>1;we<L;){var M=2*(we+1)-1,G=$[M],E=M+1,ie=$[E];if(0>i(G,K))E<D&&0>i(ie,G)?($[we]=ie,$[E]=K,we=E):($[we]=G,$[M]=K,we=M);else if(E<D&&0>i(ie,K))$[we]=ie,$[E]=K,we=E;else break e}}return H}function i($,H){var K=$.sortIndex-H.sortIndex;return K!==0?K:$.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,y=!1,g=!1,m=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v($){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=$)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function _($){if(m=!1,v($),!g)if(n(l)!==null)g=!0,Kn(k);else{var H=n(u);H!==null&&Rt(_,H.startTime-$)}}function k($,H){g=!1,m&&(m=!1,p(P),P=-1),y=!0;var K=d;try{for(v(H),h=n(l);h!==null&&(!(h.expirationTime>H)||$&&!ce());){var we=h.callback;if(typeof we=="function"){h.callback=null,d=h.priorityLevel;var D=we(h.expirationTime<=H);H=t.unstable_now(),typeof D=="function"?h.callback=D:h===n(l)&&r(l),v(H)}else r(l);h=n(l)}if(h!==null)var L=!0;else{var M=n(u);M!==null&&Rt(_,M.startTime-H),L=!1}return L}finally{h=null,d=K,y=!1}}var b=!1,T=null,P=-1,q=5,O=-1;function ce(){return!(t.unstable_now()-O<q)}function ve(){if(T!==null){var $=t.unstable_now();O=$;var H=!0;try{H=T(!0,$)}finally{H?De():(b=!1,T=null)}}else b=!1}var De;if(typeof f=="function")De=function(){f(ve)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,Ve=xt.port2;xt.port1.onmessage=ve,De=function(){Ve.postMessage(null)}}else De=function(){w(ve,0)};function Kn($){T=$,b||(b=!0,De())}function Rt($,H){P=w(function(){$(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,Kn(k))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var K=d;d=H;try{return $()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,H){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var K=d;d=$;try{return H()}finally{d=K}},t.unstable_scheduleCallback=function($,H,K){var we=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?we+K:we):K=we,$){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=K+D,$={id:c++,callback:H,priorityLevel:$,startTime:K,expirationTime:D,sortIndex:-1},K>we?($.sortIndex=K,e(u,$),n(l)===null&&$===n(u)&&(m?(p(P),P=-1):m=!0,Rt(_,K-we))):($.sortIndex=D,e(l,$),g||y||(g=!0,Kn(k))),$},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function($){var H=d;return function(){var K=d;d=H;try{return $.apply(this,arguments)}finally{d=K}}}})(Dw);(function(t){t.exports=Dw})(nb);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ow=S,Jt=mf;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lw=new Set,ia={};function Mi(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ia[t]=e,t=0;t<e.length;t++)Lw.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gf=Object.prototype.hasOwnProperty,rb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jy={},Zy={};function ib(t){return gf.call(Zy,t)?!0:gf.call(Jy,t)?!1:rb.test(t)?Zy[t]=!0:(Jy[t]=!0,!1)}function sb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ob(t,e,n,r){if(e===null||typeof e>"u"||sb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var am=/[\-:]([a-z])/g;function lm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(am,lm);ft[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(am,lm);ft[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(am,lm);ft[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function um(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ob(e,n,i,r)&&(n=null),r||i===null?ib(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gr=Ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ol=Symbol.for("react.element"),Zi=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),cm=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),Mw=Symbol.for("react.provider"),Uw=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),dm=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),Fw=Symbol.for("react.offscreen"),e0=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=e0&&t[e0]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,ad;function xo(t){if(ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ad=e&&e[1]||""}return`
`+ad+t}var ld=!1;function ud(t,e){if(!t||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xo(t):""}function ab(t){switch(t.tag){case 5:return xo(t.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return t=ud(t.type,!1),t;case 11:return t=ud(t.type.render,!1),t;case 1:return t=ud(t.type,!0),t;default:return""}}function _f(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Zi:return"Portal";case yf:return"Profiler";case cm:return"StrictMode";case vf:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uw:return(t.displayName||"Context")+".Consumer";case Mw:return(t._context.displayName||"Context")+".Provider";case hm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dm:return e=t.displayName||null,e!==null?e:_f(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return _f(t(e))}catch{}}return null}function lb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _f(e);case 8:return e===cm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ub(t){var e=zw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=ub(t))}function jw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=zw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sf(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function t0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vw(t,e){e=e.checked,e!=null&&um(t,"checked",e,!1)}function Ef(t,e){Vw(t,e);var n=Kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kf(t,e.type,n):e.hasOwnProperty("defaultValue")&&kf(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function n0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kf(t,e,n){(e!=="number"||Lu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function ms(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function r0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Ro(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function Bw(t,e){var n=Kr(e.value),r=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function i0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,Ww=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cb=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(t){cb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Uo[e]=Uo[t]})});function qw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Uo.hasOwnProperty(t)&&Uo[t]?(""+e).trim():e+"px"}function Kw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hb=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function If(t,e){if(e){if(hb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function bf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function fm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rf=null,gs=null,ys=null;function s0(t){if(t=Va(t)){if(typeof Rf!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Hc(e),Rf(t.stateNode,t.type,e))}}function Gw(t){gs?ys?ys.push(t):ys=[t]:gs=t}function Qw(){if(gs){var t=gs,e=ys;if(ys=gs=null,s0(t),e)for(t=0;t<e.length;t++)s0(e[t])}}function Yw(t,e){return t(e)}function Xw(){}var cd=!1;function Jw(t,e,n){if(cd)return t(e,n);cd=!0;try{return Yw(t,e,n)}finally{cd=!1,(gs!==null||ys!==null)&&(Xw(),Qw())}}function oa(t,e){var n=t.stateNode;if(n===null)return null;var r=Hc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Af=!1;if(ar)try{var go={};Object.defineProperty(go,"passive",{get:function(){Af=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Af=!1}function db(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fo=!1,Mu=null,Uu=!1,Pf=null,fb={onError:function(t){Fo=!0,Mu=t}};function pb(t,e,n,r,i,s,o,a,l){Fo=!1,Mu=null,db.apply(fb,arguments)}function mb(t,e,n,r,i,s,o,a,l){if(pb.apply(this,arguments),Fo){if(Fo){var u=Mu;Fo=!1,Mu=null}else throw Error(x(198));Uu||(Uu=!0,Pf=u)}}function Ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function o0(t){if(Ui(t)!==t)throw Error(x(188))}function gb(t){var e=t.alternate;if(!e){if(e=Ui(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return o0(i),t;if(s===r)return o0(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function e_(t){return t=gb(t),t!==null?t_(t):null}function t_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t_(t);if(e!==null)return e;t=t.sibling}return null}var n_=Jt.unstable_scheduleCallback,a0=Jt.unstable_cancelCallback,yb=Jt.unstable_shouldYield,vb=Jt.unstable_requestPaint,ze=Jt.unstable_now,wb=Jt.unstable_getCurrentPriorityLevel,pm=Jt.unstable_ImmediatePriority,r_=Jt.unstable_UserBlockingPriority,Fu=Jt.unstable_NormalPriority,_b=Jt.unstable_LowPriority,i_=Jt.unstable_IdlePriority,zc=null,Un=null;function Sb(t){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(zc,t,void 0,(t.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:Cb,Eb=Math.log,kb=Math.LN2;function Cb(t){return t>>>=0,t===0?32:31-(Eb(t)/kb|0)|0}var Ul=64,Fl=4194304;function Ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ao(a):(s&=o,s!==0&&(r=Ao(s)))}else o=n&~i,o!==0?r=Ao(o):s!==0&&(r=Ao(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_n(e),i=1<<n,r|=t[n],e&=~i;return r}function Tb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ib(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_n(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Tb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s_(){var t=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),t}function hd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_n(e),t[e]=n}function bb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function mm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function o_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var a_,gm,l_,u_,c_,Nf=!1,zl=[],Dr=null,Or=null,Lr=null,aa=new Map,la=new Map,kr=[],xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function l0(t,e){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(e.pointerId)}}function yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Va(e),e!==null&&gm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Rb(t,e,n,r,i){switch(e){case"focusin":return Dr=yo(Dr,t,e,n,r,i),!0;case"dragenter":return Or=yo(Or,t,e,n,r,i),!0;case"mouseover":return Lr=yo(Lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return aa.set(s,yo(aa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,la.set(s,yo(la.get(s)||null,t,e,n,r,i)),!0}return!1}function h_(t){var e=hi(t.target);if(e!==null){var n=Ui(e);if(n!==null){if(e=n.tag,e===13){if(e=Zw(n),e!==null){t.blockedOn=e,c_(t.priority,function(){l_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xf=r,n.target.dispatchEvent(r),xf=null}else return e=Va(n),e!==null&&gm(e),t.blockedOn=n,!1;e.shift()}return!0}function u0(t,e,n){fu(t)&&n.delete(e)}function Ab(){Nf=!1,Dr!==null&&fu(Dr)&&(Dr=null),Or!==null&&fu(Or)&&(Or=null),Lr!==null&&fu(Lr)&&(Lr=null),aa.forEach(u0),la.forEach(u0)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nf||(Nf=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,Ab)))}function ua(t){function e(i){return vo(i,t)}if(0<zl.length){vo(zl[0],t);for(var n=1;n<zl.length;n++){var r=zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dr!==null&&vo(Dr,t),Or!==null&&vo(Or,t),Lr!==null&&vo(Lr,t),aa.forEach(e),la.forEach(e),n=0;n<kr.length;n++)r=kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)h_(n),n.blockedOn===null&&kr.shift()}var vs=gr.ReactCurrentBatchConfig,ju=!0;function Pb(t,e,n,r){var i=ge,s=vs.transition;vs.transition=null;try{ge=1,ym(t,e,n,r)}finally{ge=i,vs.transition=s}}function $b(t,e,n,r){var i=ge,s=vs.transition;vs.transition=null;try{ge=4,ym(t,e,n,r)}finally{ge=i,vs.transition=s}}function ym(t,e,n,r){if(ju){var i=Df(t,e,n,r);if(i===null)Sd(t,e,r,Vu,n),l0(t,r);else if(Rb(i,t,e,n,r))r.stopPropagation();else if(l0(t,r),e&4&&-1<xb.indexOf(t)){for(;i!==null;){var s=Va(i);if(s!==null&&a_(s),s=Df(t,e,n,r),s===null&&Sd(t,e,r,Vu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sd(t,e,r,null,n)}}var Vu=null;function Df(t,e,n,r){if(Vu=null,t=fm(r),t=hi(t),t!==null)if(e=Ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vu=t,null}function d_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wb()){case pm:return 1;case r_:return 4;case Fu:case _b:return 16;case i_:return 536870912;default:return 16}default:return 16}}var Ar=null,vm=null,pu=null;function f_(){if(pu)return pu;var t,e=vm,n=e.length,r,i="value"in Ar?Ar.value:Ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return pu=i.slice(t,1<r?1-r:void 0)}function mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jl(){return!0}function c0(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?jl:c0,this.isPropagationStopped=c0,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wm=nn(Xs),ja=Ne({},Xs,{view:0,detail:0}),Nb=nn(ja),dd,fd,wo,jc=Ne({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_m,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(dd=t.screenX-wo.screenX,fd=t.screenY-wo.screenY):fd=dd=0,wo=t),dd)},movementY:function(t){return"movementY"in t?t.movementY:fd}}),h0=nn(jc),Db=Ne({},jc,{dataTransfer:0}),Ob=nn(Db),Lb=Ne({},ja,{relatedTarget:0}),pd=nn(Lb),Mb=Ne({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ub=nn(Mb),Fb=Ne({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zb=nn(Fb),jb=Ne({},Xs,{data:0}),d0=nn(jb),Vb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hb[t])?!!e[t]:!1}function _m(){return Wb}var qb=Ne({},ja,{key:function(t){if(t.key){var e=Vb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_m,charCode:function(t){return t.type==="keypress"?mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kb=nn(qb),Gb=Ne({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f0=nn(Gb),Qb=Ne({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_m}),Yb=nn(Qb),Xb=Ne({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jb=nn(Xb),Zb=Ne({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=nn(Zb),tx=[9,13,27,32],Sm=ar&&"CompositionEvent"in window,zo=null;ar&&"documentMode"in document&&(zo=document.documentMode);var nx=ar&&"TextEvent"in window&&!zo,p_=ar&&(!Sm||zo&&8<zo&&11>=zo),p0=String.fromCharCode(32),m0=!1;function m_(t,e){switch(t){case"keyup":return tx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function rx(t,e){switch(t){case"compositionend":return g_(e);case"keypress":return e.which!==32?null:(m0=!0,p0);case"textInput":return t=e.data,t===p0&&m0?null:t;default:return null}}function ix(t,e){if(ts)return t==="compositionend"||!Sm&&m_(t,e)?(t=f_(),pu=vm=Ar=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p_&&e.locale!=="ko"?null:e.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function g0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sx[t.type]:e==="textarea"}function y_(t,e,n,r){Gw(r),e=Bu(e,"onChange"),0<e.length&&(n=new wm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,ca=null;function ox(t){x_(t,0)}function Vc(t){var e=is(t);if(jw(e))return t}function ax(t,e){if(t==="change")return e}var v_=!1;if(ar){var md;if(ar){var gd="oninput"in document;if(!gd){var y0=document.createElement("div");y0.setAttribute("oninput","return;"),gd=typeof y0.oninput=="function"}md=gd}else md=!1;v_=md&&(!document.documentMode||9<document.documentMode)}function v0(){jo&&(jo.detachEvent("onpropertychange",w_),ca=jo=null)}function w_(t){if(t.propertyName==="value"&&Vc(ca)){var e=[];y_(e,ca,t,fm(t)),Jw(ox,e)}}function lx(t,e,n){t==="focusin"?(v0(),jo=e,ca=n,jo.attachEvent("onpropertychange",w_)):t==="focusout"&&v0()}function ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vc(ca)}function cx(t,e){if(t==="click")return Vc(e)}function hx(t,e){if(t==="input"||t==="change")return Vc(e)}function dx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Cn=typeof Object.is=="function"?Object.is:dx;function ha(t,e){if(Cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gf.call(e,i)||!Cn(t[i],e[i]))return!1}return!0}function w0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _0(t,e){var n=w0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=w0(n)}}function __(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?__(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S_(){for(var t=window,e=Lu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lu(t.document)}return e}function Em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fx(t){var e=S_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&__(n.ownerDocument.documentElement,n)){if(r!==null&&Em(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_0(n,s);var o=_0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var px=ar&&"documentMode"in document&&11>=document.documentMode,ns=null,Of=null,Vo=null,Lf=!1;function S0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||ns==null||ns!==Lu(r)||(r=ns,"selectionStart"in r&&Em(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&ha(Vo,r)||(Vo=r,r=Bu(Of,"onSelect"),0<r.length&&(e=new wm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ns)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},yd={},E_={};ar&&(E_=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Bc(t){if(yd[t])return yd[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in E_)return yd[t]=e[n];return t}var k_=Bc("animationend"),C_=Bc("animationiteration"),T_=Bc("animationstart"),I_=Bc("transitionend"),b_=new Map,E0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,e){b_.set(t,e),Mi(e,[t])}for(var vd=0;vd<E0.length;vd++){var wd=E0[vd],mx=wd.toLowerCase(),gx=wd[0].toUpperCase()+wd.slice(1);Zr(mx,"on"+gx)}Zr(k_,"onAnimationEnd");Zr(C_,"onAnimationIteration");Zr(T_,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(I_,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function k0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mb(r,e,void 0,t),t.currentTarget=null}function x_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;k0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;k0(i,a,u),s=l}}}if(Uu)throw t=Pf,Uu=!1,Pf=null,t}function Ce(t,e){var n=e[jf];n===void 0&&(n=e[jf]=new Set);var r=t+"__bubble";n.has(r)||(R_(e,t,2,!1),n.add(r))}function _d(t,e,n){var r=0;e&&(r|=4),R_(n,t,r,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function da(t){if(!t[Bl]){t[Bl]=!0,Lw.forEach(function(n){n!=="selectionchange"&&(yx.has(n)||_d(n,!1,t),_d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,_d("selectionchange",!1,e))}}function R_(t,e,n,r){switch(d_(e)){case 1:var i=Pb;break;case 4:i=$b;break;default:i=ym}n=i.bind(null,e,n,t),i=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Jw(function(){var u=s,c=fm(n),h=[];e:{var d=b_.get(t);if(d!==void 0){var y=wm,g=t;switch(t){case"keypress":if(mu(n)===0)break e;case"keydown":case"keyup":y=Kb;break;case"focusin":g="focus",y=pd;break;case"focusout":g="blur",y=pd;break;case"beforeblur":case"afterblur":y=pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=h0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ob;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Yb;break;case k_:case C_:case T_:y=Ub;break;case I_:y=Jb;break;case"scroll":y=Nb;break;case"wheel":y=ex;break;case"copy":case"cut":case"paste":y=zb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=f0}var m=(e&4)!==0,w=!m&&t==="scroll",p=m?d!==null?d+"Capture":null:d;m=[];for(var f=u,v;f!==null;){v=f;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,p!==null&&(_=oa(f,p),_!=null&&m.push(fa(f,_,v)))),w)break;f=f.return}0<m.length&&(d=new y(d,g,null,n,c),h.push({event:d,listeners:m}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==xf&&(g=n.relatedTarget||n.fromElement)&&(hi(g)||g[lr]))break e;if((y||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?hi(g):null,g!==null&&(w=Ui(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(m=h0,_="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(m=f0,_="onPointerLeave",p="onPointerEnter",f="pointer"),w=y==null?d:is(y),v=g==null?d:is(g),d=new m(_,f+"leave",y,n,c),d.target=w,d.relatedTarget=v,_=null,hi(c)===u&&(m=new m(p,f+"enter",g,n,c),m.target=v,m.relatedTarget=w,_=m),w=_,y&&g)t:{for(m=y,p=g,f=0,v=m;v;v=Hi(v))f++;for(v=0,_=p;_;_=Hi(_))v++;for(;0<f-v;)m=Hi(m),f--;for(;0<v-f;)p=Hi(p),v--;for(;f--;){if(m===p||p!==null&&m===p.alternate)break t;m=Hi(m),p=Hi(p)}m=null}else m=null;y!==null&&C0(h,d,y,m,!1),g!==null&&w!==null&&C0(h,w,g,m,!0)}}e:{if(d=u?is(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var k=ax;else if(g0(d))if(v_)k=hx;else{k=ux;var b=lx}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=cx);if(k&&(k=k(t,u))){y_(h,k,n,c);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&kf(d,"number",d.value)}switch(b=u?is(u):window,t){case"focusin":(g0(b)||b.contentEditable==="true")&&(ns=b,Of=u,Vo=null);break;case"focusout":Vo=Of=ns=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,S0(h,n,c);break;case"selectionchange":if(px)break;case"keydown":case"keyup":S0(h,n,c)}var T;if(Sm)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ts?m_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(p_&&n.locale!=="ko"&&(ts||P!=="onCompositionStart"?P==="onCompositionEnd"&&ts&&(T=f_()):(Ar=c,vm="value"in Ar?Ar.value:Ar.textContent,ts=!0)),b=Bu(u,P),0<b.length&&(P=new d0(P,t,null,n,c),h.push({event:P,listeners:b}),T?P.data=T:(T=g_(n),T!==null&&(P.data=T)))),(T=nx?rx(t,n):ix(t,n))&&(u=Bu(u,"onBeforeInput"),0<u.length&&(c=new d0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}x_(h,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=oa(t,n),s!=null&&r.unshift(fa(t,s,i)),s=oa(t,e),s!=null&&r.push(fa(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function C0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=oa(n,s),l!=null&&o.unshift(fa(n,l,a))):i||(l=oa(n,s),l!=null&&o.push(fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vx=/\r\n?/g,wx=/\u0000|\uFFFD/g;function T0(t){return(typeof t=="string"?t:""+t).replace(vx,`
`).replace(wx,"")}function Hl(t,e,n){if(e=T0(e),T0(t)!==e&&n)throw Error(x(425))}function Hu(){}var Mf=null,Uf=null;function Ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zf=typeof setTimeout=="function"?setTimeout:void 0,_x=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(t){return I0.resolve(null).then(t).catch(Ex)}:zf;function Ex(t){setTimeout(function(){throw t})}function Ed(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ua(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function b0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Dn="__reactFiber$"+Js,pa="__reactProps$"+Js,lr="__reactContainer$"+Js,jf="__reactEvents$"+Js,kx="__reactListeners$"+Js,Cx="__reactHandles$"+Js;function hi(t){var e=t[Dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[Dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=b0(t);t!==null;){if(n=t[Dn])return n;t=b0(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[Dn]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Hc(t){return t[pa]||null}var Vf=[],ss=-1;function ei(t){return{current:t}}function Ie(t){0>ss||(t.current=Vf[ss],Vf[ss]=null,ss--)}function Ee(t,e){ss++,Vf[ss]=t.current,t.current=e}var Gr={},Tt=ei(Gr),Bt=ei(!1),ki=Gr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return Gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function Wu(){Ie(Bt),Ie(Tt)}function x0(t,e,n){if(Tt.current!==Gr)throw Error(x(168));Ee(Tt,e),Ee(Bt,n)}function A_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,lb(t)||"Unknown",i));return Ne({},n,r)}function qu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,ki=Tt.current,Ee(Tt,t),Ee(Bt,Bt.current),!0}function R0(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=A_(t,e,ki),r.__reactInternalMemoizedMergedChildContext=t,Ie(Bt),Ie(Tt),Ee(Tt,t)):Ie(Bt),Ee(Bt,n)}var Qn=null,Wc=!1,kd=!1;function P_(t){Qn===null?Qn=[t]:Qn.push(t)}function Tx(t){Wc=!0,P_(t)}function ti(){if(!kd&&Qn!==null){kd=!0;var t=0,e=ge;try{var n=Qn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qn=null,Wc=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(t+1)),n_(pm,ti),i}finally{ge=e,kd=!1}}return null}var os=[],as=0,Ku=null,Gu=0,sn=[],on=0,Ci=null,Yn=1,Xn="";function li(t,e){os[as++]=Gu,os[as++]=Ku,Ku=t,Gu=e}function $_(t,e,n){sn[on++]=Yn,sn[on++]=Xn,sn[on++]=Ci,Ci=t;var r=Yn;t=Xn;var i=32-_n(r)-1;r&=~(1<<i),n+=1;var s=32-_n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yn=1<<32-_n(e)+i|n<<i|r,Xn=s+t}else Yn=1<<s|n<<i|r,Xn=t}function km(t){t.return!==null&&(li(t,1),$_(t,1,0))}function Cm(t){for(;t===Ku;)Ku=os[--as],os[as]=null,Gu=os[--as],os[as]=null;for(;t===Ci;)Ci=sn[--on],sn[on]=null,Xn=sn[--on],sn[on]=null,Yn=sn[--on],sn[on]=null}var Yt=null,Gt=null,xe=!1,wn=null;function N_(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function A0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,Gt=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,Gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Yn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,Gt=null,!0):!1;default:return!1}}function Bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hf(t){if(xe){var e=Gt;if(e){var n=e;if(!A0(t,e)){if(Bf(t))throw Error(x(418));e=Mr(n.nextSibling);var r=Yt;e&&A0(t,e)?N_(r,n):(t.flags=t.flags&-4097|2,xe=!1,Yt=t)}}else{if(Bf(t))throw Error(x(418));t.flags=t.flags&-4097|2,xe=!1,Yt=t}}}function P0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function Wl(t){if(t!==Yt)return!1;if(!xe)return P0(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ff(t.type,t.memoizedProps)),e&&(e=Gt)){if(Bf(t))throw D_(),Error(x(418));for(;e;)N_(t,e),e=Mr(e.nextSibling)}if(P0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gt=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gt=null}}else Gt=Yt?Mr(t.stateNode.nextSibling):null;return!0}function D_(){for(var t=Gt;t;)t=Mr(t.nextSibling)}function As(){Gt=Yt=null,xe=!1}function Tm(t){wn===null?wn=[t]:wn.push(t)}var Ix=gr.ReactCurrentBatchConfig;function yn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Qu=ei(null),Yu=null,ls=null,Im=null;function bm(){Im=ls=Yu=null}function xm(t){var e=Qu.current;Ie(Qu),t._currentValue=e}function Wf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Yu=t,Im=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function dn(t){var e=t._currentValue;if(Im!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(Yu===null)throw Error(x(308));ls=t,Yu.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var di=null;function Rm(t){di===null?di=[t]:di.push(t)}function O_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rm(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function Am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,Rm(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function gu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,mm(t,n)}}function $0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xu(t,e,n,r){var i=t.updateQueue;Er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,y=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,m=a;switch(d=e,y=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){h=g.call(y,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,d=typeof g=="function"?g.call(y,h,d):g,d==null)break e;h=Ne({},h,d);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else y={eventTime:y,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ii|=o,t.lanes=o,t.memoizedState=h}}function N0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var M_=new Ow.Component().refs;function qf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qc={isMounted:function(t){return(t=t._reactInternals)?Ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=zr(t),s=tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(Sn(e,t,i,r),gu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=zr(t),s=tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(Sn(e,t,i,r),gu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=zr(t),i=tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(t,i,r),e!==null&&(Sn(e,t,r,n),gu(e,t,r))}};function D0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ha(n,r)||!ha(i,s):!0}function U_(t,e,n){var r=!1,i=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=dn(s):(i=Ht(e)?ki:Tt.current,r=e.contextTypes,s=(r=r!=null)?Rs(t,i):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function O0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qc.enqueueReplaceState(e,e.state,null)}function Kf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=M_,Am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dn(s):(s=Ht(e)?ki:Tt.current,i.context=Rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qc.enqueueReplaceState(i,i.state,null),Xu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===M_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function ql(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function L0(t){var e=t._init;return e(t._payload)}function F_(t){function e(p,f){if(t){var v=p.deletions;v===null?(p.deletions=[f],p.flags|=16):v.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=jr(p,f),p.index=0,p.sibling=null,p}function s(p,f,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<f?(p.flags|=2,f):v):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,v,_){return f===null||f.tag!==6?(f=Ad(v,p.mode,_),f.return=p,f):(f=i(f,v),f.return=p,f)}function l(p,f,v,_){var k=v.type;return k===es?c(p,f,v.props.children,_,v.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Sr&&L0(k)===f.type)?(_=i(f,v.props),_.ref=_o(p,f,v),_.return=p,_):(_=Eu(v.type,v.key,v.props,null,p.mode,_),_.ref=_o(p,f,v),_.return=p,_)}function u(p,f,v,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Pd(v,p.mode,_),f.return=p,f):(f=i(f,v.children||[]),f.return=p,f)}function c(p,f,v,_,k){return f===null||f.tag!==7?(f=vi(v,p.mode,_,k),f.return=p,f):(f=i(f,v),f.return=p,f)}function h(p,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ad(""+f,p.mode,v),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ol:return v=Eu(f.type,f.key,f.props,null,p.mode,v),v.ref=_o(p,null,f),v.return=p,v;case Zi:return f=Pd(f,p.mode,v),f.return=p,f;case Sr:var _=f._init;return h(p,_(f._payload),v)}if(Ro(f)||mo(f))return f=vi(f,p.mode,v,null),f.return=p,f;ql(p,f)}return null}function d(p,f,v,_){var k=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(p,f,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ol:return v.key===k?l(p,f,v,_):null;case Zi:return v.key===k?u(p,f,v,_):null;case Sr:return k=v._init,d(p,f,k(v._payload),_)}if(Ro(v)||mo(v))return k!==null?null:c(p,f,v,_,null);ql(p,v)}return null}function y(p,f,v,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(v)||null,a(f,p,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ol:return p=p.get(_.key===null?v:_.key)||null,l(f,p,_,k);case Zi:return p=p.get(_.key===null?v:_.key)||null,u(f,p,_,k);case Sr:var b=_._init;return y(p,f,v,b(_._payload),k)}if(Ro(_)||mo(_))return p=p.get(v)||null,c(f,p,_,k,null);ql(f,_)}return null}function g(p,f,v,_){for(var k=null,b=null,T=f,P=f=0,q=null;T!==null&&P<v.length;P++){T.index>P?(q=T,T=null):q=T.sibling;var O=d(p,T,v[P],_);if(O===null){T===null&&(T=q);break}t&&T&&O.alternate===null&&e(p,T),f=s(O,f,P),b===null?k=O:b.sibling=O,b=O,T=q}if(P===v.length)return n(p,T),xe&&li(p,P),k;if(T===null){for(;P<v.length;P++)T=h(p,v[P],_),T!==null&&(f=s(T,f,P),b===null?k=T:b.sibling=T,b=T);return xe&&li(p,P),k}for(T=r(p,T);P<v.length;P++)q=y(T,p,P,v[P],_),q!==null&&(t&&q.alternate!==null&&T.delete(q.key===null?P:q.key),f=s(q,f,P),b===null?k=q:b.sibling=q,b=q);return t&&T.forEach(function(ce){return e(p,ce)}),xe&&li(p,P),k}function m(p,f,v,_){var k=mo(v);if(typeof k!="function")throw Error(x(150));if(v=k.call(v),v==null)throw Error(x(151));for(var b=k=null,T=f,P=f=0,q=null,O=v.next();T!==null&&!O.done;P++,O=v.next()){T.index>P?(q=T,T=null):q=T.sibling;var ce=d(p,T,O.value,_);if(ce===null){T===null&&(T=q);break}t&&T&&ce.alternate===null&&e(p,T),f=s(ce,f,P),b===null?k=ce:b.sibling=ce,b=ce,T=q}if(O.done)return n(p,T),xe&&li(p,P),k;if(T===null){for(;!O.done;P++,O=v.next())O=h(p,O.value,_),O!==null&&(f=s(O,f,P),b===null?k=O:b.sibling=O,b=O);return xe&&li(p,P),k}for(T=r(p,T);!O.done;P++,O=v.next())O=y(T,p,P,O.value,_),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?P:O.key),f=s(O,f,P),b===null?k=O:b.sibling=O,b=O);return t&&T.forEach(function(ve){return e(p,ve)}),xe&&li(p,P),k}function w(p,f,v,_){if(typeof v=="object"&&v!==null&&v.type===es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ol:e:{for(var k=v.key,b=f;b!==null;){if(b.key===k){if(k=v.type,k===es){if(b.tag===7){n(p,b.sibling),f=i(b,v.props.children),f.return=p,p=f;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Sr&&L0(k)===b.type){n(p,b.sibling),f=i(b,v.props),f.ref=_o(p,b,v),f.return=p,p=f;break e}n(p,b);break}else e(p,b);b=b.sibling}v.type===es?(f=vi(v.props.children,p.mode,_,v.key),f.return=p,p=f):(_=Eu(v.type,v.key,v.props,null,p.mode,_),_.ref=_o(p,f,v),_.return=p,p=_)}return o(p);case Zi:e:{for(b=v.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(p,f.sibling),f=i(f,v.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Pd(v,p.mode,_),f.return=p,p=f}return o(p);case Sr:return b=v._init,w(p,f,b(v._payload),_)}if(Ro(v))return g(p,f,v,_);if(mo(v))return m(p,f,v,_);ql(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,v),f.return=p,p=f):(n(p,f),f=Ad(v,p.mode,_),f.return=p,p=f),o(p)):n(p,f)}return w}var Ps=F_(!0),z_=F_(!1),Ba={},Fn=ei(Ba),ma=ei(Ba),ga=ei(Ba);function fi(t){if(t===Ba)throw Error(x(174));return t}function Pm(t,e){switch(Ee(ga,e),Ee(ma,t),Ee(Fn,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tf(e,t)}Ie(Fn),Ee(Fn,e)}function $s(){Ie(Fn),Ie(ma),Ie(ga)}function j_(t){fi(ga.current);var e=fi(Fn.current),n=Tf(e,t.type);e!==n&&(Ee(ma,t),Ee(Fn,n))}function $m(t){ma.current===t&&(Ie(Fn),Ie(ma))}var Pe=ei(0);function Ju(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cd=[];function Nm(){for(var t=0;t<Cd.length;t++)Cd[t]._workInProgressVersionPrimary=null;Cd.length=0}var yu=gr.ReactCurrentDispatcher,Td=gr.ReactCurrentBatchConfig,Ti=0,$e=null,Ge=null,Ze=null,Zu=!1,Bo=!1,ya=0,bx=0;function gt(){throw Error(x(321))}function Dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Cn(t[n],e[n]))return!1;return!0}function Om(t,e,n,r,i,s){if(Ti=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yu.current=t===null||t.memoizedState===null?Px:$x,t=n(r,i),Bo){s=0;do{if(Bo=!1,ya=0,25<=s)throw Error(x(301));s+=1,Ze=Ge=null,e.updateQueue=null,yu.current=Nx,t=n(r,i)}while(Bo)}if(yu.current=ec,e=Ge!==null&&Ge.next!==null,Ti=0,Ze=Ge=$e=null,Zu=!1,e)throw Error(x(300));return t}function Lm(){var t=ya!==0;return ya=0,t}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?$e.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function fn(){if(Ge===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Ze===null?$e.memoizedState:Ze.next;if(e!==null)Ze=e,Ge=t;else{if(t===null)throw Error(x(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ze===null?$e.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function va(t,e){return typeof e=="function"?e(t):e}function Id(t){var e=fn(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ti&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,$e.lanes|=c,Ii|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Cn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,$e.lanes|=s,Ii|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bd(t){var e=fn(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Cn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function V_(){}function B_(t,e){var n=$e,r=fn(),i=e(),s=!Cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,Mm(q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,wa(9,W_.bind(null,n,r,i,e),void 0,null),et===null)throw Error(x(349));Ti&30||H_(n,e,i)}return i}function H_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function W_(t,e,n,r){e.value=n,e.getSnapshot=r,K_(e)&&G_(t)}function q_(t,e,n){return n(function(){K_(e)&&G_(t)})}function K_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Cn(t,n)}catch{return!0}}function G_(t){var e=ur(t,1);e!==null&&Sn(e,t,1,-1)}function M0(t){var e=Pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},e.queue=t,t=t.dispatch=Ax.bind(null,$e,t),[e.memoizedState,t]}function wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q_(){return fn().memoizedState}function vu(t,e,n,r){var i=Pn();$e.flags|=t,i.memoizedState=wa(1|e,n,void 0,r===void 0?null:r)}function Kc(t,e,n,r){var i=fn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&Dm(r,o.deps)){i.memoizedState=wa(e,n,s,r);return}}$e.flags|=t,i.memoizedState=wa(1|e,n,s,r)}function U0(t,e){return vu(8390656,8,t,e)}function Mm(t,e){return Kc(2048,8,t,e)}function Y_(t,e){return Kc(4,2,t,e)}function X_(t,e){return Kc(4,4,t,e)}function J_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z_(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,4,J_.bind(null,e,t),n)}function Um(){}function eS(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tS(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nS(t,e,n){return Ti&21?(Cn(n,e)||(n=s_(),$e.lanes|=n,Ii|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function xx(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=Td.transition;Td.transition={};try{t(!1),e()}finally{ge=n,Td.transition=r}}function rS(){return fn().memoizedState}function Rx(t,e,n){var r=zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iS(t))sS(e,n);else if(n=O_(t,e,n,r),n!==null){var i=Dt();Sn(n,t,r,i),oS(n,e,r)}}function Ax(t,e,n){var r=zr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iS(t))sS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Cn(a,o)){var l=e.interleaved;l===null?(i.next=i,Rm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=O_(t,e,i,r),n!==null&&(i=Dt(),Sn(n,t,r,i),oS(n,e,r))}}function iS(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function sS(t,e){Bo=Zu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function oS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,mm(t,n)}}var ec={readContext:dn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},Px={readContext:dn,useCallback:function(t,e){return Pn().memoizedState=[t,e===void 0?null:e],t},useContext:dn,useEffect:U0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vu(4194308,4,J_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vu(4194308,4,t,e)},useInsertionEffect:function(t,e){return vu(4,2,t,e)},useMemo:function(t,e){var n=Pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Rx.bind(null,$e,t),[r.memoizedState,t]},useRef:function(t){var e=Pn();return t={current:t},e.memoizedState=t},useState:M0,useDebugValue:Um,useDeferredValue:function(t){return Pn().memoizedState=t},useTransition:function(){var t=M0(!1),e=t[0];return t=xx.bind(null,t[1]),Pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$e,i=Pn();if(xe){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),et===null)throw Error(x(349));Ti&30||H_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,U0(q_.bind(null,r,s,t),[t]),r.flags|=2048,wa(9,W_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pn(),e=et.identifierPrefix;if(xe){var n=Xn,r=Yn;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$x={readContext:dn,useCallback:eS,useContext:dn,useEffect:Mm,useImperativeHandle:Z_,useInsertionEffect:Y_,useLayoutEffect:X_,useMemo:tS,useReducer:Id,useRef:Q_,useState:function(){return Id(va)},useDebugValue:Um,useDeferredValue:function(t){var e=fn();return nS(e,Ge.memoizedState,t)},useTransition:function(){var t=Id(va)[0],e=fn().memoizedState;return[t,e]},useMutableSource:V_,useSyncExternalStore:B_,useId:rS,unstable_isNewReconciler:!1},Nx={readContext:dn,useCallback:eS,useContext:dn,useEffect:Mm,useImperativeHandle:Z_,useInsertionEffect:Y_,useLayoutEffect:X_,useMemo:tS,useReducer:bd,useRef:Q_,useState:function(){return bd(va)},useDebugValue:Um,useDeferredValue:function(t){var e=fn();return Ge===null?e.memoizedState=t:nS(e,Ge.memoizedState,t)},useTransition:function(){var t=bd(va)[0],e=fn().memoizedState;return[t,e]},useMutableSource:V_,useSyncExternalStore:B_,useId:rS,unstable_isNewReconciler:!1};function Ns(t,e){try{var n="",r=e;do n+=ab(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function aS(t,e,n){n=tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nc||(nc=!0,ip=r),Gf(t,e)},n}function lS(t,e,n){n=tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gf(t,e),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function F0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Dx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Gx.bind(null,t,e,n),e.then(t,t))}function z0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function j0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tr(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var Ox=gr.ReactCurrentOwner,Vt=!1;function Pt(t,e,n,r){e.child=t===null?z_(e,null,n,r):Ps(e,t.child,n,r)}function V0(t,e,n,r,i){n=n.render;var s=e.ref;return ws(e,i),r=Om(t,e,n,r,s,i),n=Lm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(xe&&n&&km(e),e.flags|=1,Pt(t,e,r,i),e.child)}function B0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,uS(t,e,s,r,i)):(t=Eu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function uS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ha(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,cr(t,e,i)}return Qf(t,e,n,r,i)}function cS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(cs,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(cs,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(cs,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(cs,Kt),Kt|=r;return Pt(t,e,i,n),e.child}function hS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qf(t,e,n,r,i){var s=Ht(n)?ki:Tt.current;return s=Rs(e,s),ws(e,i),n=Om(t,e,n,r,s,i),r=Lm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(xe&&r&&km(e),e.flags|=1,Pt(t,e,n,i),e.child)}function H0(t,e,n,r,i){if(Ht(n)){var s=!0;qu(e)}else s=!1;if(ws(e,i),e.stateNode===null)wu(t,e),U_(e,n,r),Kf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dn(u):(u=Ht(n)?ki:Tt.current,u=Rs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&O0(e,o,r,u),Er=!1;var d=e.memoizedState;o.state=d,Xu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Bt.current||Er?(typeof c=="function"&&(qf(e,n,c,r),l=e.memoizedState),(a=Er||D0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,L_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:yn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dn(l):(l=Ht(n)?ki:Tt.current,l=Rs(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&O0(e,o,r,l),Er=!1,d=e.memoizedState,o.state=d,Xu(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||Bt.current||Er?(typeof y=="function"&&(qf(e,n,y,r),g=e.memoizedState),(u=Er||D0(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Yf(t,e,n,r,s,i)}function Yf(t,e,n,r,i,s){hS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&R0(e,n,!1),cr(t,e,s);r=e.stateNode,Ox.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&R0(e,n,!0),e.child}function dS(t){var e=t.stateNode;e.pendingContext?x0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&x0(t,e.context,!1),Pm(t,e.containerInfo)}function W0(t,e,n,r,i){return As(),Tm(i),e.flags|=256,Pt(t,e,n,r),e.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function Jf(t){return{baseLanes:t,cachePool:null,transitions:null}}function fS(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Pe,i&1),t===null)return Hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yc(o,r,0,null),t=vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jf(n),e.memoizedState=Xf,t):Fm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Lx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=jr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jr(a,s):(s=vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xf,r}return s=t.child,t=s.sibling,r=jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fm(t,e){return e=Yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Kl(t,e,n,r){return r!==null&&Tm(r),Ps(e,t.child,null,n),t=Fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xd(Error(x(422))),Kl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yc({mode:"visible",children:r.children},i,0,null),s=vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ps(e,t.child,null,o),e.child.memoizedState=Jf(o),e.memoizedState=Xf,s);if(!(e.mode&1))return Kl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=xd(s,r,void 0),Kl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(t,i),Sn(r,t,i,-1))}return Wm(),r=xd(Error(x(421))),Kl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Qx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Gt=Mr(i.nextSibling),Yt=e,xe=!0,wn=null,t!==null&&(sn[on++]=Yn,sn[on++]=Xn,sn[on++]=Ci,Yn=t.id,Xn=t.overflow,Ci=e),e=Fm(e,r.children),e.flags|=4096,e)}function q0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wf(t.return,e,n)}function Rd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function pS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&q0(t,n,e);else if(t.tag===19)q0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ju(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ju(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rd(e,!0,n,null,s);break;case"together":Rd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ii|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mx(t,e,n){switch(e.tag){case 3:dS(e),As();break;case 5:j_(e);break;case 1:Ht(e.type)&&qu(e);break;case 4:Pm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(Qu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?fS(t,e,n):(Ee(Pe,Pe.current&1),t=cr(t,e,n),t!==null?t.sibling:null);Ee(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return pS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,cS(t,e,n)}return cr(t,e,n)}var mS,Zf,gS,yS;mS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zf=function(){};gS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fi(Fn.current);var s=null;switch(n){case"input":i=Sf(t,i),r=Sf(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Cf(t,i),r=Cf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Hu)}If(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ia.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ia.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};yS=function(t,e,n,r){n!==r&&(e.flags|=4)};function So(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ux(t,e,n){var r=e.pendingProps;switch(Cm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Ht(e.type)&&Wu(),yt(e),null;case 3:return r=e.stateNode,$s(),Ie(Bt),Ie(Tt),Nm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wn!==null&&(ap(wn),wn=null))),Zf(t,e),yt(e),null;case 5:$m(e);var i=fi(ga.current);if(n=e.type,t!==null&&e.stateNode!=null)gS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return yt(e),null}if(t=fi(Fn.current),Wl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dn]=e,r[pa]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Po.length;i++)Ce(Po[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":t0(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":r0(r,s),Ce("invalid",r)}If(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,a,t),i=["children",""+a]):ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Ll(r),n0(r,s,!0);break;case"textarea":Ll(r),i0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dn]=e,t[pa]=r,mS(t,e,!1,!1),e.stateNode=t;e:{switch(o=bf(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Po.length;i++)Ce(Po[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":t0(t,r),i=Sf(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":r0(t,r),i=Cf(t,r),Ce("invalid",t);break;default:i=r}If(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Kw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ww(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&sa(t,l):typeof l=="number"&&sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ia.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ce("scroll",t):l!=null&&um(t,s,l,o))}switch(n){case"input":Ll(t),n0(t,r,!1);break;case"textarea":Ll(t),i0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ms(t,!!r.multiple,s,!1):r.defaultValue!=null&&ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)yS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=fi(ga.current),fi(Fn.current),Wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dn]=e,(s=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:Hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=e,e.stateNode=r}return yt(e),null;case 13:if(Ie(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Gt!==null&&e.mode&1&&!(e.flags&128))D_(),As(),e.flags|=98560,s=!1;else if(s=Wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Dn]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else wn!==null&&(ap(wn),wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Qe===0&&(Qe=3):Wm())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return $s(),Zf(t,e),t===null&&da(e.stateNode.containerInfo),yt(e),null;case 10:return xm(e.type._context),yt(e),null;case 17:return Ht(e.type)&&Wu(),yt(e),null;case 19:if(Ie(Pe),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)So(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ju(t),o!==null){for(e.flags|=128,So(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>Ds&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ju(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return yt(e),null}else 2*ze()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=Pe.current,Ee(Pe,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return Hm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function Fx(t,e){switch(Cm(e),e.tag){case 1:return Ht(e.type)&&Wu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),Ie(Bt),Ie(Tt),Nm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $m(e),null;case 13:if(Ie(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Pe),null;case 4:return $s(),null;case 10:return xm(e.type._context),null;case 22:case 23:return Hm(),null;case 24:return null;default:return null}}var Gl=!1,_t=!1,zx=typeof WeakSet=="function"?WeakSet:Set,U=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function ep(t,e,n){try{n()}catch(r){Le(t,e,r)}}var K0=!1;function jx(t,e){if(Mf=ju,t=S_(),Em(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:t,selectionRange:n},ju=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,w=g.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?m:yn(e.type,m),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(_){Le(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return g=K0,K0=!1,g}function Ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ep(e,n,s)}i=i.next}while(i!==r)}}function Gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function tp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vS(t){var e=t.alternate;e!==null&&(t.alternate=null,vS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dn],delete e[pa],delete e[jf],delete e[kx],delete e[Cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wS(t){return t.tag===5||t.tag===3||t.tag===4}function G0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hu));else if(r!==4&&(t=t.child,t!==null))for(np(t,e,n),t=t.sibling;t!==null;)np(t,e,n),t=t.sibling}function rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}var lt=null,vn=!1;function wr(t,e,n){for(n=n.child;n!==null;)_S(t,e,n),n=n.sibling}function _S(t,e,n){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(zc,n)}catch{}switch(n.tag){case 5:_t||us(n,e);case 6:var r=lt,i=vn;lt=null,wr(t,e,n),lt=r,vn=i,lt!==null&&(vn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(vn?(t=lt,n=n.stateNode,t.nodeType===8?Ed(t.parentNode,n):t.nodeType===1&&Ed(t,n),ua(t)):Ed(lt,n.stateNode));break;case 4:r=lt,i=vn,lt=n.stateNode.containerInfo,vn=!0,wr(t,e,n),lt=r,vn=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ep(n,e,o),i=i.next}while(i!==r)}wr(t,e,n);break;case 1:if(!_t&&(us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}wr(t,e,n);break;case 21:wr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,wr(t,e,n),_t=r):wr(t,e,n);break;default:wr(t,e,n)}}function Q0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zx),e.forEach(function(r){var i=Yx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:lt=a.stateNode,vn=!1;break e;case 3:lt=a.stateNode.containerInfo,vn=!0;break e;case 4:lt=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(lt===null)throw Error(x(160));_S(s,o,i),lt=null,vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)SS(e,t),e=e.sibling}function SS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),An(t),r&4){try{Ho(3,t,t.return),Gc(3,t)}catch(m){Le(t,t.return,m)}try{Ho(5,t,t.return)}catch(m){Le(t,t.return,m)}}break;case 1:gn(e,t),An(t),r&512&&n!==null&&us(n,n.return);break;case 5:if(gn(e,t),An(t),r&512&&n!==null&&us(n,n.return),t.flags&32){var i=t.stateNode;try{sa(i,"")}catch(m){Le(t,t.return,m)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Vw(i,s),bf(a,o);var u=bf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Kw(i,h):c==="dangerouslySetInnerHTML"?Ww(i,h):c==="children"?sa(i,h):um(i,c,h,u)}switch(a){case"input":Ef(i,s);break;case"textarea":Bw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?ms(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?ms(i,!!s.multiple,s.defaultValue,!0):ms(i,!!s.multiple,s.multiple?[]:"",!1))}i[pa]=s}catch(m){Le(t,t.return,m)}}break;case 6:if(gn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(m){Le(t,t.return,m)}}break;case 3:if(gn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ua(e.containerInfo)}catch(m){Le(t,t.return,m)}break;case 4:gn(e,t),An(t);break;case 13:gn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Vm=ze())),r&4&&Q0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(u=_t)||c,gn(e,t),_t=u):gn(e,t),An(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,y=d.child,d.tag){case 0:case 11:case 14:case 15:Ho(4,d,d.return);break;case 1:us(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(m){Le(r,n,m)}}break;case 5:us(d,d.return);break;case 22:if(d.memoizedState!==null){X0(h);continue}}y!==null?(y.return=d,U=y):X0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qw("display",o))}catch(m){Le(t,t.return,m)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(m){Le(t,t.return,m)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gn(e,t),An(t),r&4&&Q0(t);break;case 21:break;default:gn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wS(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(sa(i,""),r.flags&=-33);var s=G0(t);rp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=G0(t);np(t,a,o);break;default:throw Error(x(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vx(t,e,n){U=t,ES(t)}function ES(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_t;a=Gl;var u=_t;if(Gl=o,(_t=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?J0(i):l!==null?(l.return=o,U=l):J0(i);for(;s!==null;)U=s,ES(s),s=s.sibling;U=i,Gl=a,_t=u}Y0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):Y0(t)}}function Y0(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||Gc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&N0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}N0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ua(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}_t||e.flags&512&&tp(e)}catch(d){Le(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function X0(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function J0(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gc(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{tp(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{tp(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var Bx=Math.ceil,tc=gr.ReactCurrentDispatcher,zm=gr.ReactCurrentOwner,ln=gr.ReactCurrentBatchConfig,oe=0,et=null,qe=null,ht=0,Kt=0,cs=ei(0),Qe=0,_a=null,Ii=0,Qc=0,jm=0,Wo=null,zt=null,Vm=0,Ds=1/0,Gn=null,nc=!1,ip=null,Fr=null,Ql=!1,Pr=null,rc=0,qo=0,sp=null,_u=-1,Su=0;function Dt(){return oe&6?ze():_u!==-1?_u:_u=ze()}function zr(t){return t.mode&1?oe&2&&ht!==0?ht&-ht:Ix.transition!==null?(Su===0&&(Su=s_()),Su):(t=ge,t!==0||(t=window.event,t=t===void 0?16:d_(t.type)),t):1}function Sn(t,e,n,r){if(50<qo)throw qo=0,sp=null,Error(x(185));za(t,n,r),(!(oe&2)||t!==et)&&(t===et&&(!(oe&2)&&(Qc|=n),Qe===4&&Cr(t,ht)),Wt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ds=ze()+500,Wc&&ti()))}function Wt(t,e){var n=t.callbackNode;Ib(t,e);var r=zu(t,t===et?ht:0);if(r===0)n!==null&&a0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&a0(n),e===1)t.tag===0?Tx(Z0.bind(null,t)):P_(Z0.bind(null,t)),Sx(function(){!(oe&6)&&ti()}),n=null;else{switch(o_(r)){case 1:n=pm;break;case 4:n=r_;break;case 16:n=Fu;break;case 536870912:n=i_;break;default:n=Fu}n=AS(n,kS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kS(t,e){if(_u=-1,Su=0,oe&6)throw Error(x(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var r=zu(t,t===et?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ic(t,r);else{e=r;var i=oe;oe|=2;var s=TS();(et!==t||ht!==e)&&(Gn=null,Ds=ze()+500,yi(t,e));do try{qx();break}catch(a){CS(t,a)}while(1);bm(),tc.current=s,oe=i,qe!==null?e=0:(et=null,ht=0,e=Qe)}if(e!==0){if(e===2&&(i=$f(t),i!==0&&(r=i,e=op(t,i))),e===1)throw n=_a,yi(t,0),Cr(t,r),Wt(t,ze()),n;if(e===6)Cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Hx(i)&&(e=ic(t,r),e===2&&(s=$f(t),s!==0&&(r=s,e=op(t,s))),e===1))throw n=_a,yi(t,0),Cr(t,r),Wt(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:ui(t,zt,Gn);break;case 3:if(Cr(t,r),(r&130023424)===r&&(e=Vm+500-ze(),10<e)){if(zu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zf(ui.bind(null,t,zt,Gn),e);break}ui(t,zt,Gn);break;case 4:if(Cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bx(r/1960))-r,10<r){t.timeoutHandle=zf(ui.bind(null,t,zt,Gn),r);break}ui(t,zt,Gn);break;case 5:ui(t,zt,Gn);break;default:throw Error(x(329))}}}return Wt(t,ze()),t.callbackNode===n?kS.bind(null,t):null}function op(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=ic(t,e),t!==2&&(e=zt,zt=n,e!==null&&ap(e)),t}function ap(t){zt===null?zt=t:zt.push.apply(zt,t)}function Hx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(t,e){for(e&=~jm,e&=~Qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_n(e),r=1<<n;t[n]=-1,e&=~r}}function Z0(t){if(oe&6)throw Error(x(327));_s();var e=zu(t,0);if(!(e&1))return Wt(t,ze()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var r=$f(t);r!==0&&(e=r,n=op(t,r))}if(n===1)throw n=_a,yi(t,0),Cr(t,e),Wt(t,ze()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ui(t,zt,Gn),Wt(t,ze()),null}function Bm(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ds=ze()+500,Wc&&ti())}}function bi(t){Pr!==null&&Pr.tag===0&&!(oe&6)&&_s();var e=oe;oe|=1;var n=ln.transition,r=ge;try{if(ln.transition=null,ge=1,t)return t()}finally{ge=r,ln.transition=n,oe=e,!(oe&6)&&ti()}}function Hm(){Kt=cs.current,Ie(cs)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_x(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Cm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wu();break;case 3:$s(),Ie(Bt),Ie(Tt),Nm();break;case 5:$m(r);break;case 4:$s();break;case 13:Ie(Pe);break;case 19:Ie(Pe);break;case 10:xm(r.type._context);break;case 22:case 23:Hm()}n=n.return}if(et=t,qe=t=jr(t.current,null),ht=Kt=e,Qe=0,_a=null,jm=Qc=Ii=0,zt=Wo=null,di!==null){for(e=0;e<di.length;e++)if(n=di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}di=null}return t}function CS(t,e){do{var n=qe;try{if(bm(),yu.current=ec,Zu){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zu=!1}if(Ti=0,Ze=Ge=$e=null,Bo=!1,ya=0,zm.current=null,n===null||n.return===null){Qe=1,_a=e,qe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=z0(o);if(y!==null){y.flags&=-257,j0(y,o,a,s,e),y.mode&1&&F0(s,u,e),e=y,l=u;var g=e.updateQueue;if(g===null){var m=new Set;m.add(l),e.updateQueue=m}else g.add(l);break e}else{if(!(e&1)){F0(s,u,e),Wm();break e}l=Error(x(426))}}else if(xe&&a.mode&1){var w=z0(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),j0(w,o,a,s,e),Tm(Ns(l,a));break e}}s=l=Ns(l,a),Qe!==4&&(Qe=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=aS(s,l,e);$0(s,p);break e;case 1:a=l;var f=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fr===null||!Fr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=lS(s,a,e);$0(s,_);break e}}s=s.return}while(s!==null)}bS(n)}catch(k){e=k,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(1)}function TS(){var t=tc.current;return tc.current=ec,t===null?ec:t}function Wm(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),et===null||!(Ii&268435455)&&!(Qc&268435455)||Cr(et,ht)}function ic(t,e){var n=oe;oe|=2;var r=TS();(et!==t||ht!==e)&&(Gn=null,yi(t,e));do try{Wx();break}catch(i){CS(t,i)}while(1);if(bm(),oe=n,tc.current=r,qe!==null)throw Error(x(261));return et=null,ht=0,Qe}function Wx(){for(;qe!==null;)IS(qe)}function qx(){for(;qe!==null&&!yb();)IS(qe)}function IS(t){var e=RS(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?bS(t):qe=e,zm.current=null}function bS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Fx(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,qe=null;return}}else if(n=Ux(n,e,Kt),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Qe===0&&(Qe=5)}function ui(t,e,n){var r=ge,i=ln.transition;try{ln.transition=null,ge=1,Kx(t,e,n,r)}finally{ln.transition=i,ge=r}return null}function Kx(t,e,n,r){do _s();while(Pr!==null);if(oe&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bb(t,s),t===et&&(qe=et=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ql||(Ql=!0,AS(Fu,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ln.transition,ln.transition=null;var o=ge;ge=1;var a=oe;oe|=4,zm.current=null,jx(t,n),SS(n,t),fx(Uf),ju=!!Mf,Uf=Mf=null,t.current=n,Vx(n),vb(),oe=a,ge=o,ln.transition=s}else t.current=n;if(Ql&&(Ql=!1,Pr=t,rc=i),s=t.pendingLanes,s===0&&(Fr=null),Sb(n.stateNode),Wt(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nc)throw nc=!1,t=ip,ip=null,t;return rc&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===sp?qo++:(qo=0,sp=t):qo=0,ti(),null}function _s(){if(Pr!==null){var t=o_(rc),e=ln.transition,n=ge;try{if(ln.transition=null,ge=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,rc=0,oe&6)throw Error(x(331));var i=oe;for(oe|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Ho(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,y=c.return;if(vS(c),c===u){U=null;break}if(d!==null){d.return=y,U=d;break}U=y}}}var g=s.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var w=m.sibling;m.sibling=null,m=w}while(m!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,U=p;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,U=v;else e:for(o=f;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gc(9,a)}}catch(k){Le(a,a.return,k)}if(a===o){U=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,U=_;break e}U=a.return}}if(oe=i,ti(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(zc,t)}catch{}r=!0}return r}finally{ge=n,ln.transition=e}}return!1}function ev(t,e,n){e=Ns(n,e),e=aS(t,e,1),t=Ur(t,e,1),e=Dt(),t!==null&&(za(t,1,e),Wt(t,e))}function Le(t,e,n){if(t.tag===3)ev(t,t,n);else for(;e!==null;){if(e.tag===3){ev(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){t=Ns(n,t),t=lS(e,t,1),e=Ur(e,t,1),t=Dt(),e!==null&&(za(e,1,t),Wt(e,t));break}}e=e.return}}function Gx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(ht&n)===n&&(Qe===4||Qe===3&&(ht&130023424)===ht&&500>ze()-Vm?yi(t,0):jm|=n),Wt(t,e)}function xS(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=Dt();t=ur(t,e),t!==null&&(za(t,e,n),Wt(t,n))}function Qx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xS(t,n)}function Yx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),xS(t,n)}var RS;RS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,Mx(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,xe&&e.flags&1048576&&$_(e,Gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wu(t,e),t=e.pendingProps;var i=Rs(e,Tt.current);ws(e,n),i=Om(null,e,r,t,i,n);var s=Lm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(s=!0,qu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Am(e),i.updater=qc,e.stateNode=i,i._reactInternals=e,Kf(e,r,t,n),e=Yf(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&km(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Jx(r),t=yn(r,t),i){case 0:e=Qf(null,e,r,t,n);break e;case 1:e=H0(null,e,r,t,n);break e;case 11:e=V0(null,e,r,t,n);break e;case 14:e=B0(null,e,r,yn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Qf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),H0(t,e,r,i,n);case 3:e:{if(dS(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,L_(t,e),Xu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ns(Error(x(423)),e),e=W0(t,e,r,n,i);break e}else if(r!==i){i=Ns(Error(x(424)),e),e=W0(t,e,r,n,i);break e}else for(Gt=Mr(e.stateNode.containerInfo.firstChild),Yt=e,xe=!0,wn=null,n=z_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),r===i){e=cr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return j_(e),t===null&&Hf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ff(r,i)?o=null:s!==null&&Ff(r,s)&&(e.flags|=32),hS(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Hf(e),null;case 13:return fS(t,e,n);case 4:return Pm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ps(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),V0(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(Qu,r._currentValue),r._currentValue=o,s!==null)if(Cn(s.value,o)){if(s.children===i.children&&!Bt.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=tr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ws(e,n),i=dn(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=yn(r,e.pendingProps),i=yn(r.type,i),B0(t,e,r,i,n);case 15:return uS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),wu(t,e),e.tag=1,Ht(r)?(t=!0,qu(e)):t=!1,ws(e,n),U_(e,r,i),Kf(e,r,i,n),Yf(null,e,r,!0,t,n);case 19:return pS(t,e,n);case 22:return cS(t,e,n)}throw Error(x(156,e.tag))};function AS(t,e){return n_(t,e)}function Xx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new Xx(t,e,n,r)}function qm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jx(t){if(typeof t=="function")return qm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hm)return 11;if(t===dm)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Eu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case es:return vi(n.children,i,s,e);case cm:o=8,i|=8;break;case yf:return t=an(12,n,e,i|2),t.elementType=yf,t.lanes=s,t;case vf:return t=an(13,n,e,i),t.elementType=vf,t.lanes=s,t;case wf:return t=an(19,n,e,i),t.elementType=wf,t.lanes=s,t;case Fw:return Yc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mw:o=10;break e;case Uw:o=9;break e;case hm:o=11;break e;case dm:o=14;break e;case Sr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vi(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function Yc(t,e,n,r){return t=an(22,t,r,e),t.elementType=Fw,t.lanes=n,t.stateNode={isHidden:!1},t}function Ad(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function Pd(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Zx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hd(0),this.expirationTimes=hd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Km(t,e,n,r,i,s,o,a,l){return t=new Zx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Am(s),t}function eR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function PS(t){if(!t)return Gr;t=t._reactInternals;e:{if(Ui(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Ht(n))return A_(t,n,e)}return e}function $S(t,e,n,r,i,s,o,a,l){return t=Km(n,r,!0,t,i,s,o,a,l),t.context=PS(null),n=t.current,r=Dt(),i=zr(n),s=tr(r,i),s.callback=e??null,Ur(n,s,i),t.current.lanes=i,za(t,i,r),Wt(t,r),t}function Xc(t,e,n,r){var i=e.current,s=Dt(),o=zr(i);return n=PS(n),e.context===null?e.context=n:e.pendingContext=n,e=tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(i,e,o),t!==null&&(Sn(t,i,o,s),gu(t,i,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gm(t,e){tv(t,e),(t=t.alternate)&&tv(t,e)}function tR(){return null}var NS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qm(t){this._internalRoot=t}Jc.prototype.render=Qm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Xc(t,e,null,null)};Jc.prototype.unmount=Qm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bi(function(){Xc(null,t,null,null)}),e[lr]=null}};function Jc(t){this._internalRoot=t}Jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=u_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kr.length&&e!==0&&e<kr[n].priority;n++);kr.splice(n,0,t),n===0&&h_(t)}};function Ym(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nv(){}function nR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=sc(o);s.call(u)}}var o=$S(e,r,t,0,null,!1,!1,"",nv);return t._reactRootContainer=o,t[lr]=o.current,da(t.nodeType===8?t.parentNode:t),bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=sc(l);a.call(u)}}var l=Km(t,0,!1,null,null,!1,!1,"",nv);return t._reactRootContainer=l,t[lr]=l.current,da(t.nodeType===8?t.parentNode:t),bi(function(){Xc(e,l,n,r)}),l}function eh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=sc(o);a.call(l)}}Xc(e,o,t,i)}else o=nR(n,e,t,i,r);return sc(o)}a_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ao(e.pendingLanes);n!==0&&(mm(e,n|1),Wt(e,ze()),!(oe&6)&&(Ds=ze()+500,ti()))}break;case 13:bi(function(){var r=ur(t,1);if(r!==null){var i=Dt();Sn(r,t,1,i)}}),Gm(t,1)}};gm=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Dt();Sn(e,t,134217728,n)}Gm(t,134217728)}};l_=function(t){if(t.tag===13){var e=zr(t),n=ur(t,e);if(n!==null){var r=Dt();Sn(n,t,e,r)}Gm(t,e)}};u_=function(){return ge};c_=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Rf=function(t,e,n){switch(e){case"input":if(Ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hc(r);if(!i)throw Error(x(90));jw(r),Ef(r,i)}}}break;case"textarea":Bw(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};Yw=Bm;Xw=bi;var rR={usingClientEntryPoint:!1,Events:[Va,is,Hc,Gw,Qw,Bm]},Eo={findFiberByHostInstance:hi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iR={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e_(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||tR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{zc=Yl.inject(iR),Un=Yl}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rR;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ym(e))throw Error(x(200));return eR(t,e,null,n)};tn.createRoot=function(t,e){if(!Ym(t))throw Error(x(299));var n=!1,r="",i=NS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Km(t,1,!1,null,null,n,!1,r,i),t[lr]=e.current,da(t.nodeType===8?t.parentNode:t),new Qm(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=e_(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return bi(t)};tn.hydrate=function(t,e,n){if(!Zc(e))throw Error(x(200));return eh(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!Ym(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=NS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$S(e,null,t,1,n??null,i,!1,s,o),t[lr]=e.current,da(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jc(e)};tn.render=function(t,e,n){if(!Zc(e))throw Error(x(200));return eh(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!Zc(t))throw Error(x(40));return t._reactRootContainer?(bi(function(){eh(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};tn.unstable_batchedUpdates=Bm;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zc(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return eh(t,e,n,!1,r)};tn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=tn})(tb);var rv=pf;ff.createRoot=rv.createRoot,ff.hydrateRoot=rv.hydrateRoot;var oc={},sR={get exports(){return oc},set exports(t){oc=t}},Se={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th=60103,nh=60106,Ha=60107,Wa=60108,qa=60114,Ka=60109,Ga=60110,Qa=60112,Ya=60113,Xm=60120,Xa=60115,Ja=60116,DS=60121,OS=60122,LS=60117,MS=60129,US=60131;if(typeof Symbol=="function"&&Symbol.for){var ot=Symbol.for;th=ot("react.element"),nh=ot("react.portal"),Ha=ot("react.fragment"),Wa=ot("react.strict_mode"),qa=ot("react.profiler"),Ka=ot("react.provider"),Ga=ot("react.context"),Qa=ot("react.forward_ref"),Ya=ot("react.suspense"),Xm=ot("react.suspense_list"),Xa=ot("react.memo"),Ja=ot("react.lazy"),DS=ot("react.block"),OS=ot("react.server.block"),LS=ot("react.fundamental"),MS=ot("react.debug_trace_mode"),US=ot("react.legacy_hidden")}function In(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case th:switch(t=t.type,t){case Ha:case qa:case Wa:case Ya:case Xm:return t;default:switch(t=t&&t.$$typeof,t){case Ga:case Qa:case Ja:case Xa:case Ka:return t;default:return e}}case nh:return e}}}var oR=Ka,aR=th,lR=Qa,uR=Ha,cR=Ja,hR=Xa,dR=nh,fR=qa,pR=Wa,mR=Ya;Se.ContextConsumer=Ga;Se.ContextProvider=oR;Se.Element=aR;Se.ForwardRef=lR;Se.Fragment=uR;Se.Lazy=cR;Se.Memo=hR;Se.Portal=dR;Se.Profiler=fR;Se.StrictMode=pR;Se.Suspense=mR;Se.isAsyncMode=function(){return!1};Se.isConcurrentMode=function(){return!1};Se.isContextConsumer=function(t){return In(t)===Ga};Se.isContextProvider=function(t){return In(t)===Ka};Se.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===th};Se.isForwardRef=function(t){return In(t)===Qa};Se.isFragment=function(t){return In(t)===Ha};Se.isLazy=function(t){return In(t)===Ja};Se.isMemo=function(t){return In(t)===Xa};Se.isPortal=function(t){return In(t)===nh};Se.isProfiler=function(t){return In(t)===qa};Se.isStrictMode=function(t){return In(t)===Wa};Se.isSuspense=function(t){return In(t)===Ya};Se.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ha||t===qa||t===MS||t===Wa||t===Ya||t===Xm||t===US||typeof t=="object"&&t!==null&&(t.$$typeof===Ja||t.$$typeof===Xa||t.$$typeof===Ka||t.$$typeof===Ga||t.$$typeof===Qa||t.$$typeof===LS||t.$$typeof===DS||t[0]===OS)};Se.typeOf=In;(function(t){t.exports=Se})(sR);function gR(t){function e(D,L,M,G,E){for(var ie=0,N=0,Oe=0,he=0,me,Z,rt=0,Mt=0,ae,mt=ae=me=0,de=0,it=0,fo=0,st=0,Nl=M.length,po=Nl-1,mn,Y="",Fe="",id="",sd="",vr;de<Nl;){if(Z=M.charCodeAt(de),de===po&&N+he+Oe+ie!==0&&(N!==0&&(Z=N===47?10:47),he=Oe=ie=0,Nl++,po++),N+he+Oe+ie===0){if(de===po&&(0<it&&(Y=Y.replace(d,"")),0<Y.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:Y+=M.charAt(de)}Z=59}switch(Z){case 123:for(Y=Y.trim(),me=Y.charCodeAt(0),ae=1,st=++de;de<Nl;){switch(Z=M.charCodeAt(de)){case 123:ae++;break;case 125:ae--;break;case 47:switch(Z=M.charCodeAt(de+1)){case 42:case 47:e:{for(mt=de+1;mt<po;++mt)switch(M.charCodeAt(mt)){case 47:if(Z===42&&M.charCodeAt(mt-1)===42&&de+2!==mt){de=mt+1;break e}break;case 10:if(Z===47){de=mt+1;break e}}de=mt}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;de++<po&&M.charCodeAt(de)!==Z;);}if(ae===0)break;de++}switch(ae=M.substring(st,de),me===0&&(me=(Y=Y.replace(h,"").trim()).charCodeAt(0)),me){case 64:switch(0<it&&(Y=Y.replace(d,"")),Z=Y.charCodeAt(1),Z){case 100:case 109:case 115:case 45:it=L;break;default:it=Kn}if(ae=e(L,it,ae,Z,E+1),st=ae.length,0<$&&(it=n(Kn,Y,fo),vr=a(3,ae,it,L,De,ve,st,Z,E,G),Y=it.join(""),vr!==void 0&&(st=(ae=vr.trim()).length)===0&&(Z=0,ae="")),0<st)switch(Z){case 115:Y=Y.replace(b,o);case 100:case 109:case 45:ae=Y+"{"+ae+"}";break;case 107:Y=Y.replace(f,"$1 $2"),ae=Y+"{"+ae+"}",ae=Ve===1||Ve===2&&s("@"+ae,3)?"@-webkit-"+ae+"@"+ae:"@"+ae;break;default:ae=Y+ae,G===112&&(ae=(Fe+=ae,""))}else ae="";break;default:ae=e(L,n(L,Y,fo),ae,G,E+1)}id+=ae,ae=fo=it=mt=me=0,Y="",Z=M.charCodeAt(++de);break;case 125:case 59:if(Y=(0<it?Y.replace(d,""):Y).trim(),1<(st=Y.length))switch(mt===0&&(me=Y.charCodeAt(0),me===45||96<me&&123>me)&&(st=(Y=Y.replace(" ",":")).length),0<$&&(vr=a(1,Y,L,D,De,ve,Fe.length,G,E,G))!==void 0&&(st=(Y=vr.trim()).length)===0&&(Y="\0\0"),me=Y.charCodeAt(0),Z=Y.charCodeAt(1),me){case 0:break;case 64:if(Z===105||Z===99){sd+=Y+M.charAt(de);break}default:Y.charCodeAt(st-1)!==58&&(Fe+=i(Y,me,Z,Y.charCodeAt(2)))}fo=it=mt=me=0,Y="",Z=M.charCodeAt(++de)}}switch(Z){case 13:case 10:N===47?N=0:1+me===0&&G!==107&&0<Y.length&&(it=1,Y+="\0"),0<$*K&&a(0,Y,L,D,De,ve,Fe.length,G,E,G),ve=1,De++;break;case 59:case 125:if(N+he+Oe+ie===0){ve++;break}default:switch(ve++,mn=M.charAt(de),Z){case 9:case 32:if(he+ie+N===0)switch(rt){case 44:case 58:case 9:case 32:mn="";break;default:Z!==32&&(mn=" ")}break;case 0:mn="\\0";break;case 12:mn="\\f";break;case 11:mn="\\v";break;case 38:he+N+ie===0&&(it=fo=1,mn="\f"+mn);break;case 108:if(he+N+ie+xt===0&&0<mt)switch(de-mt){case 2:rt===112&&M.charCodeAt(de-3)===58&&(xt=rt);case 8:Mt===111&&(xt=Mt)}break;case 58:he+N+ie===0&&(mt=de);break;case 44:N+Oe+he+ie===0&&(it=1,mn+="\r");break;case 34:case 39:N===0&&(he=he===Z?0:he===0?Z:he);break;case 91:he+N+Oe===0&&ie++;break;case 93:he+N+Oe===0&&ie--;break;case 41:he+N+ie===0&&Oe--;break;case 40:if(he+N+ie===0){if(me===0)switch(2*rt+3*Mt){case 533:break;default:me=1}Oe++}break;case 64:N+Oe+he+ie+mt+ae===0&&(ae=1);break;case 42:case 47:if(!(0<he+ie+Oe))switch(N){case 0:switch(2*Z+3*M.charCodeAt(de+1)){case 235:N=47;break;case 220:st=de,N=42}break;case 42:Z===47&&rt===42&&st+2!==de&&(M.charCodeAt(st+2)===33&&(Fe+=M.substring(st,de+1)),mn="",N=0)}}N===0&&(Y+=mn)}Mt=rt,rt=Z,de++}if(st=Fe.length,0<st){if(it=L,0<$&&(vr=a(2,Fe,it,D,De,ve,st,G,E,G),vr!==void 0&&(Fe=vr).length===0))return sd+Fe+id;if(Fe=it.join(",")+"{"+Fe+"}",Ve*xt!==0){switch(Ve!==2||s(Fe,2)||(xt=0),xt){case 111:Fe=Fe.replace(_,":-moz-$1")+Fe;break;case 112:Fe=Fe.replace(v,"::-webkit-input-$1")+Fe.replace(v,"::-moz-$1")+Fe.replace(v,":-ms-input-$1")+Fe}xt=0}}return sd+Fe+id}function n(D,L,M){var G=L.trim().split(w);L=G;var E=G.length,ie=D.length;switch(ie){case 0:case 1:var N=0;for(D=ie===0?"":D[0]+" ";N<E;++N)L[N]=r(D,L[N],M).trim();break;default:var Oe=N=0;for(L=[];N<E;++N)for(var he=0;he<ie;++he)L[Oe++]=r(D[he]+" ",G[N],M).trim()}return L}function r(D,L,M){var G=L.charCodeAt(0);switch(33>G&&(G=(L=L.trim()).charCodeAt(0)),G){case 38:return L.replace(p,"$1"+D.trim());case 58:return D.trim()+L.replace(p,"$1"+D.trim());default:if(0<1*M&&0<L.indexOf("\f"))return L.replace(p,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+L}function i(D,L,M,G){var E=D+";",ie=2*L+3*M+4*G;if(ie===944){D=E.indexOf(":",9)+1;var N=E.substring(D,E.length-1).trim();return N=E.substring(0,D).trim()+N+";",Ve===1||Ve===2&&s(N,1)?"-webkit-"+N+N:N}if(Ve===0||Ve===2&&!s(E,1))return E;switch(ie){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(ce,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return N=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+E+"-ms-flex-pack"+N+E;case 1005:return g.test(E)?E.replace(y,":-webkit-")+E.replace(y,":-moz-")+E:E;case 1e3:switch(N=E.substring(13).trim(),L=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(L)){case 226:N=E.replace(k,"tb");break;case 232:N=E.replace(k,"tb-rl");break;case 220:N=E.replace(k,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+N+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(L=(E=D).length-10,N=(E.charCodeAt(L)===33?E.substring(0,L):E).substring(D.indexOf(":",7)+1).trim(),ie=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:E=E.replace(N,"-webkit-"+N)+";"+E;break;case 207:case 102:E=E.replace(N,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+E.replace(N,"-webkit-"+N)+";"+E.replace(N,"-ms-"+N+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return N=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+N+"-ms-flex-"+N+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(P,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(P,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(O.test(D)===!0)return(N=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?i(D.replace("stretch","fill-available"),L,M,G).replace(":fill-available",":stretch"):E.replace(N,"-webkit-"+N)+E.replace(N,"-moz-"+N.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,M+G===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+E}return E}function s(D,L){var M=D.indexOf(L===1?":":"{"),G=D.substring(0,L!==3?M:10);return M=D.substring(M+1,D.length-1),H(L!==2?G:G.replace(q,"$1"),M,L)}function o(D,L){var M=i(L,L.charCodeAt(0),L.charCodeAt(1),L.charCodeAt(2));return M!==L+";"?M.replace(T," or ($1)").substring(4):"("+L+")"}function a(D,L,M,G,E,ie,N,Oe,he,me){for(var Z=0,rt=L,Mt;Z<$;++Z)switch(Mt=Rt[Z].call(c,D,rt,M,G,E,ie,N,Oe,he,me)){case void 0:case!1:case!0:case null:break;default:rt=Mt}if(rt!==L)return rt}function l(D){switch(D){case void 0:case null:$=Rt.length=0;break;default:if(typeof D=="function")Rt[$++]=D;else if(typeof D=="object")for(var L=0,M=D.length;L<M;++L)l(D[L]);else K=!!D|0}return l}function u(D){return D=D.prefix,D!==void 0&&(H=null,D?typeof D!="function"?Ve=1:(Ve=2,H=D):Ve=0),u}function c(D,L){var M=D;if(33>M.charCodeAt(0)&&(M=M.trim()),we=M,M=[we],0<$){var G=a(-1,L,M,M,De,ve,0,0,0,0);G!==void 0&&typeof G=="string"&&(L=G)}var E=e(Kn,M,L,0,0);return 0<$&&(G=a(-2,E,M,M,De,ve,E.length,0,0,0),G!==void 0&&(E=G)),we="",xt=0,ve=De=1,E}var h=/^\0+/g,d=/[\0\r\f]/g,y=/: */g,g=/zoo|gra/,m=/([,: ])(transform)/g,w=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,_=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,P=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,ve=1,De=1,xt=0,Ve=1,Kn=[],Rt=[],$=0,H=null,K=0,we="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var yR={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function FS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var vR=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,lp=FS(function(t){return vR.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),up={},wR={get exports(){return up},set exports(t){up=t}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,Jm=nt?Symbol.for("react.element"):60103,Zm=nt?Symbol.for("react.portal"):60106,rh=nt?Symbol.for("react.fragment"):60107,ih=nt?Symbol.for("react.strict_mode"):60108,sh=nt?Symbol.for("react.profiler"):60114,oh=nt?Symbol.for("react.provider"):60109,ah=nt?Symbol.for("react.context"):60110,eg=nt?Symbol.for("react.async_mode"):60111,lh=nt?Symbol.for("react.concurrent_mode"):60111,uh=nt?Symbol.for("react.forward_ref"):60112,ch=nt?Symbol.for("react.suspense"):60113,_R=nt?Symbol.for("react.suspense_list"):60120,hh=nt?Symbol.for("react.memo"):60115,dh=nt?Symbol.for("react.lazy"):60116,SR=nt?Symbol.for("react.block"):60121,ER=nt?Symbol.for("react.fundamental"):60117,kR=nt?Symbol.for("react.responder"):60118,CR=nt?Symbol.for("react.scope"):60119;function rn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Jm:switch(t=t.type,t){case eg:case lh:case rh:case sh:case ih:case ch:return t;default:switch(t=t&&t.$$typeof,t){case ah:case uh:case dh:case hh:case oh:return t;default:return e}}case Zm:return e}}}function zS(t){return rn(t)===lh}ye.AsyncMode=eg;ye.ConcurrentMode=lh;ye.ContextConsumer=ah;ye.ContextProvider=oh;ye.Element=Jm;ye.ForwardRef=uh;ye.Fragment=rh;ye.Lazy=dh;ye.Memo=hh;ye.Portal=Zm;ye.Profiler=sh;ye.StrictMode=ih;ye.Suspense=ch;ye.isAsyncMode=function(t){return zS(t)||rn(t)===eg};ye.isConcurrentMode=zS;ye.isContextConsumer=function(t){return rn(t)===ah};ye.isContextProvider=function(t){return rn(t)===oh};ye.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jm};ye.isForwardRef=function(t){return rn(t)===uh};ye.isFragment=function(t){return rn(t)===rh};ye.isLazy=function(t){return rn(t)===dh};ye.isMemo=function(t){return rn(t)===hh};ye.isPortal=function(t){return rn(t)===Zm};ye.isProfiler=function(t){return rn(t)===sh};ye.isStrictMode=function(t){return rn(t)===ih};ye.isSuspense=function(t){return rn(t)===ch};ye.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===rh||t===lh||t===sh||t===ih||t===ch||t===_R||typeof t=="object"&&t!==null&&(t.$$typeof===dh||t.$$typeof===hh||t.$$typeof===oh||t.$$typeof===ah||t.$$typeof===uh||t.$$typeof===ER||t.$$typeof===kR||t.$$typeof===CR||t.$$typeof===SR)};ye.typeOf=rn;(function(t){t.exports=ye})(wR);var tg=up,TR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},IR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ng={};ng[tg.ForwardRef]=bR;ng[tg.Memo]=jS;function iv(t){return tg.isMemo(t)?jS:ng[t.$$typeof]||TR}var xR=Object.defineProperty,RR=Object.getOwnPropertyNames,sv=Object.getOwnPropertySymbols,AR=Object.getOwnPropertyDescriptor,PR=Object.getPrototypeOf,ov=Object.prototype;function VS(t,e,n){if(typeof e!="string"){if(ov){var r=PR(e);r&&r!==ov&&VS(t,r,n)}var i=RR(e);sv&&(i=i.concat(sv(e)));for(var s=iv(t),o=iv(e),a=0;a<i.length;++a){var l=i[a];if(!IR[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=AR(e,l);try{xR(t,l,u)}catch{}}}}return t}var $R=VS;function Ln(){return(Ln=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var av=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},cp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!oc.typeOf(t)},ac=Object.freeze([]),Vr=Object.freeze({});function Os(t){return typeof t=="function"}function lv(t){return t.displayName||t.name||"Component"}function rg(t){return t&&typeof t.styledComponentId=="string"}var Ls=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ig=typeof window<"u"&&"HTMLElement"in window,NR=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function xi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var DR=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&xi(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),ku=new Map,lc=new Map,Ko=1,Xl=function(t){if(ku.has(t))return ku.get(t);for(;lc.has(Ko);)Ko++;var e=Ko++;return ku.set(t,e),lc.set(e,t),e},OR=function(t){return lc.get(t)},LR=function(t,e){e>=Ko&&(Ko=e+1),ku.set(t,e),lc.set(e,t)},MR="style["+Ls+'][data-styled-version="5.3.6"]',UR=new RegExp("^"+Ls+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),FR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},zR=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(UR);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(LR(u,l),FR(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},jR=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},BS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ls))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ls,"active"),r.setAttribute("data-styled-version","5.3.6");var o=jR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},VR=function(){function t(n){var r=this.element=BS(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}xi(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),BR=function(){function t(n){var r=this.element=BS(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),HR=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),uv=ig,WR={isServer:!ig,useCSSOMInjection:!NR},HS=function(){function t(n,r,i){n===void 0&&(n=Vr),r===void 0&&(r={}),this.options=Ln({},WR,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ig&&uv&&(uv=!1,function(s){for(var o=document.querySelectorAll(MR),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ls)!=="active"&&(zR(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Xl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Ln({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new HR(o):s?new VR(o):new BR(o),new DR(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Xl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Xl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Xl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=OR(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ls+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),qR=/(a)(d)/gi,cv=function(t){return String.fromCharCode(t+(t>25?39:97))};function hp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=cv(e%52)+n;return(cv(e%52)+n).replace(qR,"$1-$2")}var hs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},WS=function(t){return hs(5381,t)};function KR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Os(n)&&!rg(n))return!1}return!0}var GR=WS("5.3.6"),QR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&KR(e),this.componentId=n,this.baseHash=hs(GR,n),this.baseStyle=r,HS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ms(this.rules,e,n,r).join(""),a=hp(hs(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=hs(this.baseHash,r.hash),h="",d=0;d<u;d++){var y=this.rules[d];if(typeof y=="string")h+=y;else if(y){var g=Ms(y,e,n,r),m=Array.isArray(g)?g.join(""):g;c=hs(c,m+d),h+=m}}if(h){var w=hp(c>>>0);if(!n.hasNameForId(i,w)){var p=r(h,"."+w,void 0,i);n.insertRules(i,w,p)}s.push(w)}}return s.join(" ")},t}(),YR=/^\s*\/\/.*$/gm,XR=[":","[",".","#"];function JR(t){var e,n,r,i,s=t===void 0?Vr:t,o=s.options,a=o===void 0?Vr:o,l=s.plugins,u=l===void 0?ac:l,c=new gR(a),h=[],d=function(m){function w(p){if(p)try{m(p+"}")}catch{}}return function(p,f,v,_,k,b,T,P,q,O){switch(p){case 1:if(q===0&&f.charCodeAt(0)===64)return m(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return m(v[0]+f),"";default:return f+(O===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(m){h.push(m)}),y=function(m,w,p){return w===0&&XR.indexOf(p[n.length])!==-1||p.match(i)?m:"."+e};function g(m,w,p,f){f===void 0&&(f="&");var v=m.replace(YR,""),_=w&&p?p+" "+w+" { "+v+" }":v;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!w?"":w,_)}return c.use([].concat(u,[function(m,w,p){m===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,y))},d,function(m){if(m===-2){var w=h;return h=[],w}}])),g.hash=u.length?u.reduce(function(m,w){return w.name||xi(15),hs(m,w.name)},5381).toString():"",g}var qS=pn.createContext();qS.Consumer;var KS=pn.createContext(),ZR=(KS.Consumer,new HS),dp=JR();function eA(){return S.useContext(qS)||ZR}function tA(){return S.useContext(KS)||dp}var GS=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=dp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return xi(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=dp),this.name+e.hash},t}(),nA=/([A-Z])/,rA=/([A-Z])/g,iA=/^ms-/,sA=function(t){return"-"+t.toLowerCase()};function hv(t){return nA.test(t)?t.replace(rA,sA).replace(iA,"-ms-"):t}var dv=function(t){return t==null||t===!1||t===""};function Ms(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Ms(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(dv(t))return"";if(rg(t))return"."+t.styledComponentId;if(Os(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Ms(l,e,n,r)}var u;return t instanceof GS?n?(t.inject(n,r),t.getName(r)):t:cp(t)?function c(h,d){var y,g,m=[];for(var w in h)h.hasOwnProperty(w)&&!dv(h[w])&&(Array.isArray(h[w])&&h[w].isCss||Os(h[w])?m.push(hv(w)+":",h[w],";"):cp(h[w])?m.push.apply(m,c(h[w],w)):m.push(hv(w)+": "+(y=w,(g=h[w])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||y in yR?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(m,["}"]):m}(t):t.toString()}var fv=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function fh(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Os(t)||cp(t)?fv(Ms(av(ac,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:fv(Ms(av(t,n)))}var oA=function(t,e,n){return n===void 0&&(n=Vr),t.theme!==n.theme&&t.theme||e||n.theme},aA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lA=/(^-|-$)/g;function $d(t){return t.replace(aA,"-").replace(lA,"")}var QS=function(t){return hp(WS(t)>>>0)};function Jl(t){return typeof t=="string"&&!0}var fp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},uA=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function cA(t,e,n){var r=t[n];fp(e)&&fp(r)?YS(r,e):t[n]=e}function YS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(fp(o))for(var a in o)uA(a)&&cA(t,o[a],a)}return t}var uc=pn.createContext();uc.Consumer;function hA(t){var e=S.useContext(uc),n=S.useMemo(function(){return function(r,i){if(!r)return xi(14);if(Os(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?xi(8):i?Ln({},i,{},r):r}(t.theme,e)},[t.theme,e]);return t.children?pn.createElement(uc.Provider,{value:n},t.children):null}var Nd={};function XS(t,e,n){var r=rg(t),i=!Jl(t),s=e.attrs,o=s===void 0?ac:s,a=e.componentId,l=a===void 0?function(f,v){var _=typeof f!="string"?"sc":$d(f);Nd[_]=(Nd[_]||0)+1;var k=_+"-"+QS("5.3.6"+_+Nd[_]);return v?v+"-"+k:k}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Jl(f)?"styled."+f:"Styled("+lv(f)+")"}(t):u,h=e.displayName&&e.componentId?$d(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,y=e.shouldForwardProp;r&&t.shouldForwardProp&&(y=e.shouldForwardProp?function(f,v,_){return t.shouldForwardProp(f,v,_)&&e.shouldForwardProp(f,v,_)}:t.shouldForwardProp);var g,m=new QR(n,h,r?t.componentStyle:void 0),w=m.isStatic&&o.length===0,p=function(f,v){return function(_,k,b,T){var P=_.attrs,q=_.componentStyle,O=_.defaultProps,ce=_.foldedComponentIds,ve=_.shouldForwardProp,De=_.styledComponentId,xt=_.target,Ve=function(G,E,ie){G===void 0&&(G=Vr);var N=Ln({},E,{theme:G}),Oe={};return ie.forEach(function(he){var me,Z,rt,Mt=he;for(me in Os(Mt)&&(Mt=Mt(N)),Mt)N[me]=Oe[me]=me==="className"?(Z=Oe[me],rt=Mt[me],Z&&rt?Z+" "+rt:Z||rt):Mt[me]}),[N,Oe]}(oA(k,S.useContext(uc),O)||Vr,k,P),Kn=Ve[0],Rt=Ve[1],$=function(G,E,ie,N){var Oe=eA(),he=tA(),me=E?G.generateAndInjectStyles(Vr,Oe,he):G.generateAndInjectStyles(ie,Oe,he);return me}(q,T,Kn),H=b,K=Rt.$as||k.$as||Rt.as||k.as||xt,we=Jl(K),D=Rt!==k?Ln({},k,{},Rt):k,L={};for(var M in D)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?L.as=D[M]:(ve?ve(M,lp,K):!we||lp(M))&&(L[M]=D[M]));return k.style&&Rt.style!==k.style&&(L.style=Ln({},k.style,{},Rt.style)),L.className=Array.prototype.concat(ce,De,$!==De?$:null,k.className,Rt.className).filter(Boolean).join(" "),L.ref=H,S.createElement(K,L)}(g,f,v,w)};return p.displayName=c,(g=pn.forwardRef(p)).attrs=d,g.componentStyle=m,g.displayName=c,g.shouldForwardProp=y,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):ac,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(f){var v=e.componentId,_=function(b,T){if(b==null)return{};var P,q,O={},ce=Object.keys(b);for(q=0;q<ce.length;q++)P=ce[q],T.indexOf(P)>=0||(O[P]=b[P]);return O}(e,["componentId"]),k=v&&v+"-"+(Jl(f)?f:$d(lv(f)));return XS(f,Ln({},_,{attrs:d,componentId:k}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?YS({},t.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&$R(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var pp=function(t){return function e(n,r,i){if(i===void 0&&(i=Vr),!oc.isValidElementType(r))return xi(1,String(r));var s=function(){return n(r,i,fh.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Ln({},i,{},o))},s.attrs=function(o){return e(n,r,Ln({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(XS,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){pp[t]=pp(t)});function Za(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=fh.apply(void 0,[t].concat(n)).join(""),s=QS(i);return new GS(s,i)}const A=pp;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cc(){return cc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cc.apply(this,arguments)}var $r;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($r||($r={}));const pv="popstate";function dA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return mp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gp(i)}return pA(e,n,null,t)}function fA(){return Math.random().toString(36).substr(2,8)}function mv(t){return{usr:t.state,key:t.key}}function mp(t,e,n,r){return n===void 0&&(n=null),cc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zs(e):e,{state:n,key:e&&e.key||r||fA()})}function gp(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function pA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=$r.Pop,l=null;function u(){a=$r.Pop,l&&l({action:a,location:d.location})}function c(y,g){a=$r.Push;let m=mp(d.location,y,g);n&&n(m,y);let w=mv(m),p=d.createHref(m);try{o.pushState(w,"",p)}catch{i.location.assign(p)}s&&l&&l({action:a,location:m})}function h(y,g){a=$r.Replace;let m=mp(d.location,y,g);n&&n(m,y);let w=mv(m),p=d.createHref(m);o.replaceState(w,"",p),s&&l&&l({action:a,location:m})}let d={get action(){return a},get location(){return t(i,o)},listen(y){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(pv,u),l=y,()=>{i.removeEventListener(pv,u),l=null}},createHref(y){return e(i,y)},push:c,replace:h,go(y){return o.go(y)}};return d}var gv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gv||(gv={}));function mA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Zs(e):e,i=ZS(r.pathname||"/",n);if(i==null)return null;let s=JS(t);gA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=TA(s[a],i);return o}function JS(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Ke(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=Br([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Ke(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),JS(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:kA(a,i.index),routesMeta:l})}),e}function gA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:CA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yA=/^:\w+$/,vA=3,wA=2,_A=1,SA=10,EA=-2,yv=t=>t==="*";function kA(t,e){let n=t.split("/"),r=n.length;return n.some(yv)&&(r+=EA),e&&(r+=wA),n.filter(i=>!yv(i)).reduce((i,s)=>i+(yA.test(s)?vA:s===""?_A:SA),r)}function CA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function TA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=sg({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Br([i,c.pathname]),pathnameBase:AA(Br([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Br([i,c.pathnameBase]))}return s}function sg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=IA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=bA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function IA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),eE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bA(t,e){try{return decodeURIComponent(t)}catch(n){return eE(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ZS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zs(t):t;return{pathname:n?n.startsWith("/")?n:RA(n,e):e,search:PA(r),hash:$A(i)}}function RA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zs(t):(i=cc({},t),Ke(!i.pathname||!i.pathname.includes("?"),Dd("?","pathname","search",i)),Ke(!i.pathname||!i.pathname.includes("#"),Dd("#","pathname","hash",i)),Ke(!i.search||!i.search.includes("#"),Dd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=xA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Br=t=>t.join("/").replace(/\/\/+/g,"/"),AA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),PA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$A=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class NA{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function DA(t){return t instanceof NA}/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yp(){return yp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yp.apply(this,arguments)}function OA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const LA=typeof Object.is=="function"?Object.is:OA,{useState:MA,useEffect:UA,useLayoutEffect:FA,useDebugValue:zA}=Is;function jA(t,e,n){const r=e(),[{inst:i},s]=MA({inst:{value:r,getSnapshot:e}});return FA(()=>{i.value=r,i.getSnapshot=e,Od(i)&&s({inst:i})},[t,r,e]),UA(()=>(Od(i)&&s({inst:i}),t(()=>{Od(i)&&s({inst:i})})),[t]),zA(r),r}function Od(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!LA(n,r)}catch{return!0}}function VA(t,e,n){return e()}const BA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HA=!BA,WA=HA?VA:jA;"useSyncExternalStore"in Is&&(t=>t.useSyncExternalStore)(Is);const qA=S.createContext(null),KA=S.createContext(null),ph=S.createContext(null),og=S.createContext(null),mh=S.createContext(null),el=S.createContext({outlet:null,matches:[]}),nE=S.createContext(null);function GA(t,e){let{relative:n}=e===void 0?{}:e;Fi()||Ke(!1);let{basename:r,navigator:i}=S.useContext(og),{hash:s,pathname:o,search:a}=hc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Br([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Fi(){return S.useContext(mh)!=null}function tl(){return Fi()||Ke(!1),S.useContext(mh).location}function QA(t){Fi()||Ke(!1);let{pathname:e}=tl();return S.useMemo(()=>sg(t,e),[e,t])}function rE(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function gh(){Fi()||Ke(!1);let{basename:t,navigator:e}=S.useContext(og),{matches:n}=S.useContext(el),{pathname:r}=tl(),i=JSON.stringify(rE(n).map(a=>a.pathnameBase)),s=S.useRef(!1);return S.useEffect(()=>{s.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=tE(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Br([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function hc(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(el),{pathname:i}=tl(),s=JSON.stringify(rE(r).map(o=>o.pathnameBase));return S.useMemo(()=>tE(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function YA(t,e){Fi()||Ke(!1);let n=S.useContext(ph),{matches:r}=S.useContext(el),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=tl(),l;if(e){var u;let g=typeof e=="string"?Zs(e):e;o==="/"||(u=g.pathname)!=null&&u.startsWith(o)||Ke(!1),l=g}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=mA(t,{pathname:h}),y=e2(d&&d.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:Br([o,g.pathname]),pathnameBase:g.pathnameBase==="/"?o:Br([o,g.pathnameBase])})),r,n||void 0);return e?S.createElement(mh.Provider,{value:{location:yp({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:$r.Pop}},y):y}function XA(){let t=n2(),e=DA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unhandled Thrown Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:s},"errorElement")," props on ",S.createElement("code",{style:s},"<Route>")))}class JA extends S.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(nE.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function ZA(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(qA);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),S.createElement(el.Provider,{value:e},r)}function e2(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ke(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||S.createElement(XA,null):null,c=()=>S.createElement(ZA,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?S.createElement(JA,{location:n.location,component:u,error:l,children:c()}):c()},null)}var vv;(function(t){t.UseRevalidator="useRevalidator"})(vv||(vv={}));var vp;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(vp||(vp={}));function t2(t){let e=S.useContext(ph);return e||Ke(!1),e}function n2(){var t;let e=S.useContext(nE),n=t2(vp.UseRouteError),r=S.useContext(el),i=r.matches[r.matches.length-1];return e||(r||Ke(!1),i.route.id||Ke(!1),(t=n.errors)==null?void 0:t[i.route.id])}function wp(t){let{to:e,replace:n,state:r,relative:i}=t;Fi()||Ke(!1);let s=S.useContext(ph),o=gh();return S.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function Nr(t){Ke(!1)}function r2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$r.Pop,navigator:s,static:o=!1}=t;Fi()&&Ke(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Zs(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:y="default"}=r,g=S.useMemo(()=>{let m=ZS(u,a);return m==null?null:{pathname:m,search:c,hash:h,state:d,key:y}},[a,u,c,h,d,y]);return g==null?null:S.createElement(og.Provider,{value:l},S.createElement(mh.Provider,{children:n,value:{location:g,navigationType:i}}))}function iE(t){let{children:e,location:n}=t,r=S.useContext(KA),i=r&&!e?r.router.routes:_p(e);return YA(i,n)}var wv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(wv||(wv={}));new Promise(()=>{});function _p(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;if(r.type===S.Fragment){n.push.apply(n,_p(r.props.children,e));return}r.type!==Nr&&Ke(!1),!r.props.index||!r.props.children||Ke(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=_p(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dc(){return dc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dc.apply(this,arguments)}function sE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function i2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function s2(t,e){return t.button===0&&(!e||e==="_self")&&!i2(t)}const o2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],a2=["aria-current","caseSensitive","className","end","style","to","children"];function l2(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=dA({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(r2,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const oE=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=sE(e,o2),d=GA(u,{relative:i}),y=c2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(m){r&&r(m),m.defaultPrevented||y(m)}return S.createElement("a",dc({},h,{href:d,onClick:s?r:g,ref:n,target:l}))}),u2=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=sE(e,a2),h=hc(l),d=QA({path:h.pathname,end:o,caseSensitive:i}),y=S.useContext(ph),g=y==null?void 0:y.navigation.location,m=hc(g||""),p=S.useMemo(()=>g?sg({path:h.pathname,end:o,caseSensitive:i},m.pathname):null,[g,h.pathname,i,o,m.pathname])!=null,f=d!=null,v=f?r:void 0,_;typeof s=="function"?_=s({isActive:f,isPending:p}):_=[s,f?"active":null,p?"pending":null].filter(Boolean).join(" ");let k=typeof a=="function"?a({isActive:f,isPending:p}):a;return S.createElement(oE,dc({},c,{"aria-current":v,className:_,ref:n,style:k,to:l}),typeof u=="function"?u({isActive:f,isPending:p}):u)});var _v;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(_v||(_v={}));var Sv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sv||(Sv={}));function c2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=gh(),l=tl(),u=hc(t,{relative:o});return S.useCallback(c=>{if(s2(c,n)){c.preventDefault();let h=r!==void 0?r:gp(l)===gp(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 */const aE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},h2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},lE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(d=64)),r.push(n[c],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):h2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},d2=function(t){const e=aE(t);return lE.encodeByteArray(e,!0)},fc=function(t){return d2(t).replace(/\./g,"")},uE=function(t){try{return lE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function p2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g2(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y2(){return typeof indexedDB=="object"}function v2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function w2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _2=()=>w2().__FIREBASE_DEFAULTS__,S2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},E2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uE(t[1]);return e&&JSON.parse(e)},ag=()=>{try{return _2()||S2()||E2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cE=t=>{var e,n;return(n=(e=ag())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hE=t=>{const e=cE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},k2=()=>{var t;return(t=ag())===null||t===void 0?void 0:t.config},dE=t=>{var e;return(e=ag())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class C2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fc(JSON.stringify(n)),fc(JSON.stringify(o)),a].join(".")}/**
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
 */const T2="FirebaseError";class qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=T2,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?I2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qn(i,a,r)}}function I2(t,e){return t.replace(b2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const b2=/\{\$([^}]+)}/g;function x2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ev(s)&&Ev(o)){if(!pc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ev(t){return t!==null&&typeof t=="object"}/**
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
 */function rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function No(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function R2(t,e){const n=new A2(t,e);return n.subscribe.bind(n)}class A2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");P2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ld),i.error===void 0&&(i.error=Ld),i.complete===void 0&&(i.complete=Ld);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ld(){}/**
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
 */function Ae(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ci="[DEFAULT]";/**
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
 */class $2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new C2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(D2(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:N2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function N2(t){return t===ci?void 0:t}function D2(t){return t.instantiationMode==="EAGER"}/**
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
 */class O2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const L2={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},M2=ue.INFO,U2={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},F2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=U2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lg{constructor(e){this.name=e,this._logLevel=M2,this._logHandler=F2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const z2=(t,e)=>e.some(n=>t instanceof n);let kv,Cv;function j2(){return kv||(kv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V2(){return Cv||(Cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pE=new WeakMap,Sp=new WeakMap,mE=new WeakMap,Md=new WeakMap,ug=new WeakMap;function B2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pE.set(n,t)}).catch(()=>{}),ug.set(e,t),e}function H2(t){if(Sp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sp.set(t,e)}let Ep={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function W2(t){Ep=t(Ep)}function q2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ud(this),e,...n);return mE.set(r,e.sort?e.sort():[e]),Hr(r)}:V2().includes(t)?function(...e){return t.apply(Ud(this),e),Hr(pE.get(this))}:function(...e){return Hr(t.apply(Ud(this),e))}}function K2(t){return typeof t=="function"?q2(t):(t instanceof IDBTransaction&&H2(t),z2(t,j2())?new Proxy(t,Ep):t)}function Hr(t){if(t instanceof IDBRequest)return B2(t);if(Md.has(t))return Md.get(t);const e=K2(t);return e!==t&&(Md.set(t,e),ug.set(e,t)),e}const Ud=t=>ug.get(t);function G2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hr(o.result),l.oldVersion,l.newVersion,Hr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Q2=["get","getKey","getAll","getAllKeys","count"],Y2=["put","add","delete","clear"],Fd=new Map;function Tv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fd.get(e))return Fd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Y2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Q2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Fd.set(e,s),s}W2(t=>({...t,get:(e,n,r)=>Tv(e,n)||t.get(e,n,r),has:(e,n)=>!!Tv(e,n)||t.has(e,n)}));/**
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
 */class X2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kp="@firebase/app",Iv="0.8.2";/**
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
 */const Ri=new lg("@firebase/app"),Z2="@firebase/app-compat",eP="@firebase/analytics-compat",tP="@firebase/analytics",nP="@firebase/app-check-compat",rP="@firebase/app-check",iP="@firebase/auth",sP="@firebase/auth-compat",oP="@firebase/database",aP="@firebase/database-compat",lP="@firebase/functions",uP="@firebase/functions-compat",cP="@firebase/installations",hP="@firebase/installations-compat",dP="@firebase/messaging",fP="@firebase/messaging-compat",pP="@firebase/performance",mP="@firebase/performance-compat",gP="@firebase/remote-config",yP="@firebase/remote-config-compat",vP="@firebase/storage",wP="@firebase/storage-compat",_P="@firebase/firestore",SP="@firebase/firestore-compat",EP="firebase",kP="9.12.1";/**
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
 */const Cp="[DEFAULT]",CP={[kp]:"fire-core",[Z2]:"fire-core-compat",[tP]:"fire-analytics",[eP]:"fire-analytics-compat",[rP]:"fire-app-check",[nP]:"fire-app-check-compat",[iP]:"fire-auth",[sP]:"fire-auth-compat",[oP]:"fire-rtdb",[aP]:"fire-rtdb-compat",[lP]:"fire-fn",[uP]:"fire-fn-compat",[cP]:"fire-iid",[hP]:"fire-iid-compat",[dP]:"fire-fcm",[fP]:"fire-fcm-compat",[pP]:"fire-perf",[mP]:"fire-perf-compat",[gP]:"fire-rc",[yP]:"fire-rc-compat",[vP]:"fire-gcs",[wP]:"fire-gcs-compat",[_P]:"fire-fst",[SP]:"fire-fst-compat","fire-js":"fire-js",[EP]:"fire-js-all"};/**
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
 */const mc=new Map,Tp=new Map;function TP(t,e){try{t.container.addComponent(e)}catch(n){Ri.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ai(t){const e=t.name;if(Tp.has(e))return Ri.debug(`There were multiple attempts to register component ${e}.`),!1;Tp.set(e,t);for(const n of mc.values())TP(n,t);return!0}function yh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const IP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new nl("app","Firebase",IP);/**
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
 */class bP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const eo=kP;function gE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=k2()),!n)throw Wr.create("no-options");const s=mc.get(i);if(s){if(pc(n,s.options)&&pc(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new O2(i);for(const l of Tp.values())o.addComponent(l);const a=new bP(n,r,o);return mc.set(i,a),a}function cg(t=Cp){const e=mc.get(t);if(!e&&t===Cp)return gE();if(!e)throw Wr.create("no-app",{appName:t});return e}function zn(t,e,n){var r;let i=(r=CP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ri.warn(a.join(" "));return}Ai(new Qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const xP="firebase-heartbeat-database",RP=1,Sa="firebase-heartbeat-store";let zd=null;function yE(){return zd||(zd=G2(xP,RP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sa)}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),zd}async function AP(t){var e;try{return(await yE()).transaction(Sa).objectStore(Sa).get(vE(t))}catch(n){if(n instanceof qn)Ri.warn(n.message);else{const r=Wr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ri.warn(r.message)}}}async function bv(t,e){var n;try{const i=(await yE()).transaction(Sa,"readwrite");return await i.objectStore(Sa).put(e,vE(t)),i.done}catch(r){if(r instanceof qn)Ri.warn(r.message);else{const i=Wr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ri.warn(i.message)}}}function vE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PP=1024,$P=30*24*60*60*1e3;class NP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=$P}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xv(),{heartbeatsToSend:n,unsentEntries:r}=DP(this._heartbeatsCache.heartbeats),i=fc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xv(){return new Date().toISOString().substring(0,10)}function DP(t,e=PP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return y2()?v2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rv(t){return fc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function LP(t){Ai(new Qr("platform-logger",e=>new X2(e),"PRIVATE")),Ai(new Qr("heartbeat",e=>new NP(e),"PRIVATE")),zn(kp,Iv,t),zn(kp,Iv,"esm2017"),zn("fire-js","")}LP("");var MP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,hg=hg||{},Q=MP||self;function gc(){}function vh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function il(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UP(t){return Object.prototype.hasOwnProperty.call(t,jd)&&t[jd]||(t[jd]=++FP)}var jd="closure_uid_"+(1e9*Math.random()>>>0),FP=0;function zP(t,e,n){return t.call.apply(t.bind,arguments)}function jP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=zP:Et=jP,Et.apply(null,arguments)}function Zl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function pt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ni(){this.s=this.s,this.o=this.o}var VP=0;ni.prototype.s=!1;ni.prototype.na=function(){!this.s&&(this.s=!0,this.M(),VP!=0)&&UP(this)};ni.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Av(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(vh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var BP=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",gc,e),Q.removeEventListener("test",gc,e)}catch{}return t}();function yc(t){return/^[\s\xa0]*$/.test(t)}var Pv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Vd(t,e){return t<e?-1:t>e?1:0}function wh(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function On(t){return wh().indexOf(t)!=-1}function fg(t){return fg[" "](t),t}fg[" "]=gc;function HP(t){var e=KP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var WP=On("Opera"),Us=On("Trident")||On("MSIE"),_E=On("Edge"),Ip=_E||Us,SE=On("Gecko")&&!(wh().toLowerCase().indexOf("webkit")!=-1&&!On("Edge"))&&!(On("Trident")||On("MSIE"))&&!On("Edge"),qP=wh().toLowerCase().indexOf("webkit")!=-1&&!On("Edge");function EE(){var t=Q.document;return t?t.documentMode:void 0}var vc;e:{var Bd="",Hd=function(){var t=wh();if(SE)return/rv:([^\);]+)(\)|;)/.exec(t);if(_E)return/Edge\/([\d\.]+)/.exec(t);if(Us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qP)return/WebKit\/(\S+)/.exec(t);if(WP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hd&&(Bd=Hd?Hd[1]:""),Us){var Wd=EE();if(Wd!=null&&Wd>parseFloat(Bd)){vc=String(Wd);break e}}vc=Bd}var KP={};function GP(){return HP(function(){let t=0;const e=Pv(String(vc)).split("."),n=Pv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Vd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Vd(i[2].length==0,s[2].length==0)||Vd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var bp;if(Q.document&&Us){var $v=EE();bp=$v||parseInt(vc,10)||void 0}else bp=void 0;var QP=bp;function Ea(t,e){if(kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(SE){e:{try{fg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ea.X.h.call(this)}}pt(Ea,kt);var YP={2:"touch",3:"pen",4:"mouse"};Ea.prototype.h=function(){Ea.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var sl="closure_listenable_"+(1e6*Math.random()|0),XP=0;function JP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++XP,this.ba=this.ea=!1}function _h(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function pg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function kE(t){const e={};for(const n in t)e[n]=t[n];return e}const Nv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function CE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Nv.length;s++)n=Nv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Sh(t){this.src=t,this.g={},this.h=0}Sh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Rp(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new JP(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function xp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=wE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_h(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var mg="closure_lm_"+(1e6*Math.random()|0),qd={};function TE(t,e,n,r,i){if(r&&r.once)return bE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)TE(t,e[s],n,r,i);return null}return n=vg(n),t&&t[sl]?t.N(e,n,il(r)?!!r.capture:!!r,i):IE(t,e,n,!1,r,i)}function IE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=il(i)?!!i.capture:!!i,a=yg(t);if(a||(t[mg]=a=new Sh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ZP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)BP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(RE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZP(){function t(n){return e.call(t.src,t.listener,n)}const e=e$;return t}function bE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)bE(t,e[s],n,r,i);return null}return n=vg(n),t&&t[sl]?t.O(e,n,il(r)?!!r.capture:!!r,i):IE(t,e,n,!0,r,i)}function xE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)xE(t,e[s],n,r,i);else r=il(r)?!!r.capture:!!r,n=vg(n),t&&t[sl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Rp(s,n,r,i),-1<n&&(_h(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=yg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rp(e,n,r,i)),(n=-1<t?e[t]:null)&&gg(n))}function gg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[sl])xp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(RE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yg(e))?(xp(n,t),n.h==0&&(n.src=null,e[mg]=null)):_h(t)}}}function RE(t){return t in qd?qd[t]:qd[t]="on"+t}function e$(t,e){if(t.ba)t=!0;else{e=new Ea(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&gg(t),t=n.call(r,e)}return t}function yg(t){return t=t[mg],t instanceof Sh?t:null}var Kd="__closure_events_fn_"+(1e9*Math.random()>>>0);function vg(t){return typeof t=="function"?t:(t[Kd]||(t[Kd]=function(e){return t.handleEvent(e)}),t[Kd])}function tt(){ni.call(this),this.i=new Sh(this),this.P=this,this.I=null}pt(tt,ni);tt.prototype[sl]=!0;tt.prototype.removeEventListener=function(t,e,n,r){xE(this,t,e,n,r)};function dt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new kt(e,t);else if(e instanceof kt)e.target=e.target||t;else{var i=e;e=new kt(r,t),CE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=eu(o,r,!0,e)&&i}if(o=e.g=t,i=eu(o,r,!0,e)&&i,i=eu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=eu(o,r,!1,e)&&i}tt.prototype.M=function(){if(tt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)_h(n[r]);delete t.g[e],t.h--}}this.I=null};tt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function eu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&xp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var wg=Q.JSON.stringify;function t$(){var t=$E;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class n${constructor(){this.h=this.g=null}add(e,n){const r=AE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var AE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new r$,t=>t.reset());class r${constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function i$(t){Q.setTimeout(()=>{throw t},0)}function PE(t,e){Ap||s$(),Pp||(Ap(),Pp=!0),$E.add(t,e)}var Ap;function s$(){var t=Q.Promise.resolve(void 0);Ap=function(){t.then(o$)}}var Pp=!1,$E=new n$;function o$(){for(var t;t=t$();){try{t.h.call(t.g)}catch(n){i$(n)}var e=AE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pp=!1}function Eh(t,e){tt.call(this),this.h=t||1,this.g=e||Q,this.j=Et(this.lb,this),this.l=Date.now()}pt(Eh,tt);j=Eh.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),dt(this,"tick"),this.ca&&(_g(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _g(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}j.M=function(){Eh.X.M.call(this),_g(this),delete this.g};function Sg(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function NE(t){t.g=Sg(()=>{t.g=null,t.i&&(t.i=!1,NE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class a$ extends ni{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:NE(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ka(t){ni.call(this),this.h=t,this.g={}}pt(ka,ni);var Dv=[];function DE(t,e,n,r){Array.isArray(n)||(n&&(Dv[0]=n.toString()),n=Dv);for(var i=0;i<n.length;i++){var s=TE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function OE(t){pg(t.g,function(e,n){this.g.hasOwnProperty(n)&&gg(e)},t),t.g={}}ka.prototype.M=function(){ka.X.M.call(this),OE(this)};ka.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function kh(){this.g=!0}kh.prototype.Aa=function(){this.g=!1};function l$(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function u$(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ds(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+h$(t,n)+(r?" "+r:"")})}function c$(t,e){t.info(function(){return"TIMEOUT: "+e})}kh.prototype.info=function(){};function h$(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wg(n)}catch{return e}}var zi={},Ov=null;function Ch(){return Ov=Ov||new tt}zi.Pa="serverreachability";function LE(t){kt.call(this,zi.Pa,t)}pt(LE,kt);function Ca(t){const e=Ch();dt(e,new LE(e))}zi.STAT_EVENT="statevent";function ME(t,e){kt.call(this,zi.STAT_EVENT,t),this.stat=e}pt(ME,kt);function $t(t){const e=Ch();dt(e,new ME(e,t))}zi.Qa="timingevent";function UE(t,e){kt.call(this,zi.Qa,t),this.size=e}pt(UE,kt);function ol(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Th={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},FE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Eg(){}Eg.prototype.h=null;function Lv(t){return t.h||(t.h=t.i())}function zE(){}var al={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function kg(){kt.call(this,"d")}pt(kg,kt);function Cg(){kt.call(this,"c")}pt(Cg,kt);var $p;function Ih(){}pt(Ih,Eg);Ih.prototype.g=function(){return new XMLHttpRequest};Ih.prototype.i=function(){return{}};$p=new Ih;function ll(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ka(this),this.O=d$,t=Ip?125:void 0,this.T=new Eh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new jE}function jE(){this.i=null,this.g="",this.h=!1}var d$=45e3,Np={},wc={};j=ll.prototype;j.setTimeout=function(t){this.O=t};function Dp(t,e,n){t.K=1,t.v=xh(hr(e)),t.s=n,t.P=!0,VE(t,null)}function VE(t,e){t.F=Date.now(),ul(t),t.A=hr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),YE(n.i,"t",r),t.C=0,n=t.l.H,t.h=new jE,t.g=yk(t.l,n?e:null,!t.s),0<t.N&&(t.L=new a$(Et(t.La,t,t.g),t.N)),DE(t.S,t.g,"readystatechange",t.ib),e=t.H?kE(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ca(),l$(t.j,t.u,t.A,t.m,t.U,t.s)}j.ib=function(t){t=t.target;const e=this.L;e&&Jn(t)==3?e.l():this.La(t)};j.La=function(t){try{if(t==this.g)e:{const c=Jn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Ip||this.g&&(this.h.h||this.g.fa()||zv(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ca(3):Ca(2)),bh(this);var n=this.g.aa();this.Y=n;t:if(BE(this)){var r=zv(this.g);t="";var i=r.length,s=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pi(this),Go(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,u$(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yc(a)){var u=a;break t}}u=null}if(n=u)ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Op(this,n);else{this.i=!1,this.o=3,$t(12),pi(this),Go(this);break e}}this.P?(HE(this,c,o),Ip&&this.i&&c==3&&(DE(this.S,this.T,"tick",this.hb),this.T.start())):(ds(this.j,this.m,o,null),Op(this,o)),c==4&&pi(this),this.i&&!this.I&&(c==4?fk(this.l,this):(this.i=!1,ul(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$t(12)):(this.o=0,$t(13)),pi(this),Go(this)}}}catch{}finally{}};function BE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function HE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=f$(t,n),i==wc){e==4&&(t.o=4,$t(14),r=!1),ds(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Np){t.o=4,$t(15),ds(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ds(t.j,t.m,i,null),Op(t,i);BE(t)&&i!=wc&&i!=Np&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pg(e),e.K=!0,$t(11))):(ds(t.j,t.m,n,"[Invalid Chunked Response]"),pi(t),Go(t))}j.hb=function(){if(this.g){var t=Jn(this.g),e=this.g.fa();this.C<e.length&&(bh(this),HE(this,t,e),this.i&&t!=4&&ul(this))}};function f$(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?wc:(n=Number(e.substring(n,r)),isNaN(n)?Np:(r+=1,r+n>e.length?wc:(e=e.substr(r,n),t.C=r+n,e)))}j.cancel=function(){this.I=!0,pi(this)};function ul(t){t.V=Date.now()+t.O,WE(t,t.O)}function WE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ol(Et(t.gb,t),e)}function bh(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}j.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(c$(this.j,this.A),this.K!=2&&(Ca(),$t(17)),pi(this),this.o=2,Go(this)):WE(this,this.V-t)};function Go(t){t.l.G==0||t.I||fk(t.l,t)}function pi(t){bh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_g(t.T),OE(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Op(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Lp(n.h,t))){if(!t.J&&Lp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ec(n),Ph(n);else break e;Ag(n),$t(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ol(Et(n.cb,n),6e3));if(1>=ZE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else mi(n,11)}else if((t.J||n.g==t)&&Ec(n),!yc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const g=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Tg(s,s.h),s.h=null))}if(r.D){const m=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.za=m,Re(r.F,r.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=gk(r,r.H?r.ka:null,r.V),o.J){ek(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(bh(a),ul(a)),r.g=o}else hk(r);0<n.i.length&&$h(n)}else u[0]!="stop"&&u[0]!="close"||mi(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?mi(n,7):Rg(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ca(4)}catch{}}function p$(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function m$(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function qE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=m$(t),r=p$(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var KE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function g$(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wi){this.h=e!==void 0?e:t.h,_c(this,t.j),this.s=t.s,this.g=t.g,Sc(this,t.m),this.l=t.l,e=t.i;var n=new Ta;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Mv(this,n),this.o=t.o}else t&&(n=String(t).match(KE))?(this.h=!!e,_c(this,n[1]||"",!0),this.s=Do(n[2]||""),this.g=Do(n[3]||"",!0),Sc(this,n[4]),this.l=Do(n[5]||"",!0),Mv(this,n[6]||"",!0),this.o=Do(n[7]||"")):(this.h=!!e,this.i=new Ta(null,this.h))}wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Oo(e,Uv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Oo(e,Uv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Oo(n,n.charAt(0)=="/"?w$:v$,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Oo(n,S$)),t.join("")};function hr(t){return new wi(t)}function _c(t,e,n){t.j=n?Do(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Sc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mv(t,e,n){e instanceof Ta?(t.i=e,E$(t.i,t.h)):(n||(e=Oo(e,_$)),t.i=new Ta(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function xh(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Do(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Oo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,y$),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function y$(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Uv=/[#\/\?@]/g,v$=/[#\?:]/g,w$=/[#\?]/g,_$=/[#\?@]/g,S$=/#/g;function Ta(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ri(t){t.g||(t.g=new Map,t.h=0,t.i&&g$(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=Ta.prototype;j.add=function(t,e){ri(this),this.i=null,t=to(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function GE(t,e){ri(t),e=to(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function QE(t,e){return ri(t),e=to(t,e),t.g.has(e)}j.forEach=function(t,e){ri(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};j.oa=function(){ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};j.W=function(t){ri(this);let e=[];if(typeof t=="string")QE(this,t)&&(e=e.concat(this.g.get(to(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return ri(this),this.i=null,t=to(this,t),QE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function YE(t,e,n){GE(t,e),0<n.length&&(t.i=null,t.g.set(to(t,e),dg(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function to(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function E$(t,e){e&&!t.j&&(ri(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(GE(this,r),YE(this,i,n))},t)),t.j=e}var k$=class{constructor(t,e){this.h=t,this.g=e}};function XE(t){this.l=t||C$,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var C$=10;function JE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ZE(t){return t.h?1:t.g?t.g.size:0}function Lp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Tg(t,e){t.g?t.g.add(e):t.h=e}function ek(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}XE.prototype.cancel=function(){if(this.i=tk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function tk(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return dg(t.i)}function Ig(){}Ig.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};Ig.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function T$(){this.g=new Ig}function I$(t,e,n){const r=n||"";try{qE(t,function(i,s){let o=i;il(i)&&(o=wg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function b$(t,e){const n=new kh;if(Q.Image){const r=new Image;r.onload=Zl(tu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zl(tu,n,r,"TestLoadImage: error",!1,e),r.onabort=Zl(tu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zl(tu,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function tu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function cl(t){this.l=t.ac||null,this.j=t.jb||!1}pt(cl,Eg);cl.prototype.g=function(){return new Rh(this.l,this.j)};cl.prototype.i=function(t){return function(){return t}}({});function Rh(t,e){tt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=bg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pt(Rh,tt);var bg=0;j=Rh.prototype;j.open=function(t,e){if(this.readyState!=bg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ia(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hl(this)),this.readyState=bg};j.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nk(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function nk(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}j.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hl(this):Ia(this),this.readyState==3&&nk(this)}};j.Va=function(t){this.g&&(this.response=this.responseText=t,hl(this))};j.Ua=function(t){this.g&&(this.response=t,hl(this))};j.ga=function(){this.g&&hl(this)};function hl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ia(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ia(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Rh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var x$=Q.JSON.parse;function Me(t){tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rk,this.K=this.L=!1}pt(Me,tt);var rk="",R$=/^https?$/i,A$=["POST","PUT"];j=Me.prototype;j.Ka=function(t){this.L=t};j.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$p.g(),this.C=this.u?Lv(this.u):Lv($p),this.g.onreadystatechange=Et(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Fv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=wE(A$,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ok(this),0<this.B&&((this.K=P$(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.qa,this)):this.A=Sg(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Fv(this,s)}};function P$(t){return Us&&GP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.qa=function(){typeof hg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function Fv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ik(t),Ah(t)}function ik(t){t.D||(t.D=!0,dt(t,"complete"),dt(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),Ah(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ah(this,!0)),Me.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?sk(this):this.fb())};j.fb=function(){sk(this)};function sk(t){if(t.h&&typeof hg<"u"&&(!t.C[1]||Jn(t)!=4||t.aa()!=2)){if(t.v&&Jn(t)==4)Sg(t.Ha,0,t);else if(dt(t,"readystatechange"),Jn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(KE)[1]||null;if(!i&&Q.self&&Q.self.location){var s=Q.self.location.protocol;i=s.substr(0,s.length-1)}r=!R$.test(i?i.toLowerCase():"")}n=r}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ik(t)}}finally{Ah(t)}}}}function Ah(t,e){if(t.g){ok(t);const n=t.g,r=t.C[0]?gc:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=r}catch{}}}function ok(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}j.aa=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),x$(e)}};function zv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case rk:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ak(t){let e="";return pg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function xg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ak(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function ko(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function lk(t){this.Ca=0,this.i=[],this.j=new kh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ko("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ko("baseRetryDelayMs",5e3,t),this.bb=ko("retryDelaySeedMs",1e4,t),this.$a=ko("forwardChannelMaxRetries",2,t),this.ta=ko("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new XE(t&&t.concurrentRequestLimit),this.Fa=new T$,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=lk.prototype;j.ma=8;j.G=1;function Rg(t){if(uk(t),t.G==3){var e=t.U++,n=hr(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),dl(t,n),e=new ll(t,t.j,e,void 0),e.K=2,e.v=xh(hr(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=yk(e.l,null),e.g.da(e.v)),e.F=Date.now(),ul(e)}mk(t)}function Ph(t){t.g&&(Pg(t),t.g.cancel(),t.g=null)}function uk(t){Ph(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Ec(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function $h(t){JE(t.h)||t.m||(t.m=!0,PE(t.Ja,t),t.C=0)}function $$(t,e){return ZE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ol(Et(t.Ja,t,e),pk(t,t.C)),t.C++,!0)}j.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ll(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=kE(s),CE(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ck(this,i,e),n=hr(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),dl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(ak(s)))+"&"+e:this.o&&xg(n,this.o,s)),Tg(this.h,i),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),i.Z=!0,Dp(i,n,null)):Dp(i,n,e),this.G=2}}else this.G==3&&(t?jv(this,t):this.i.length==0||JE(this.h)||jv(this))};function jv(t,e){var n;e?n=e.m:n=t.U++;const r=hr(t.F);Re(r,"SID",t.I),Re(r,"RID",n),Re(r,"AID",t.T),dl(t,r),t.o&&t.s&&xg(r,t.o,t.s),n=new ll(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ck(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Tg(t.h,n),Dp(n,r,e)}function dl(t,e){t.ia&&pg(t.ia,function(n,r){Re(e,r,n)}),t.l&&qE({},function(n,r){Re(e,r,n)})}function ck(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Et(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{I$(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function hk(t){t.g||t.u||(t.Z=1,PE(t.Ia,t),t.A=0)}function Ag(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ol(Et(t.Ia,t),pk(t,t.A)),t.A++,!0)}j.Ia=function(){if(this.u=null,dk(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ol(Et(this.eb,this),t)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,$t(10),Ph(this),dk(this))};function Pg(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function dk(t){t.g=new ll(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=hr(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),dl(t,e),t.o&&t.s&&xg(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=xh(hr(e)),n.s=null,n.P=!0,VE(n,t)}j.cb=function(){this.v!=null&&(this.v=null,Ph(this),Ag(this),$t(19))};function Ec(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function fk(t,e){var n=null;if(t.g==e){Ec(t),Pg(t),t.g=null;var r=2}else if(Lp(t.h,e))n=e.D,ek(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ch(),dt(r,new UE(r,n)),$h(t)}else hk(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&$$(t,e)||r==2&&Ag(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:mi(t,5);break;case 4:mi(t,10);break;case 3:mi(t,6);break;default:mi(t,2)}}}function pk(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function mi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Et(t.kb,t);n||(n=new wi("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||_c(n,"https"),xh(n)),b$(n.toString(),r)}else $t(2);t.G=0,t.l&&t.l.va(e),mk(t),uk(t)}j.kb=function(t){t?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function mk(t){if(t.G=0,t.la=[],t.l){const e=tk(t.h);(e.length!=0||t.i.length!=0)&&(Av(t.la,e),Av(t.la,t.i),t.h.i.length=0,dg(t.i),t.i.length=0),t.l.ua()}}function gk(t,e,n){var r=n instanceof wi?hr(n):new wi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Sc(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new wi(null,void 0);r&&_c(s,r),e&&(s.g=e),i&&Sc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Re(r,n,e),Re(r,"VER",t.ma),dl(t,r),r}function yk(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Me(new cl({jb:!0})):new Me(t.ra),e.Ka(t.H),e}function vk(){}j=vk.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function kc(){if(Us&&!(10<=Number(QP)))throw Error("Environmental error: no available transport.")}kc.prototype.g=function(t,e){return new Zt(t,e)};function Zt(t,e){tt.call(this),this.g=new lk(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!yc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new no(this)}pt(Zt,tt);Zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;$t(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=gk(t,null,t.V),$h(t)};Zt.prototype.close=function(){Rg(this.g)};Zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wg(t),t=n);e.i.push(new k$(e.ab++,t)),e.G==3&&$h(e)};Zt.prototype.M=function(){this.g.l=null,delete this.j,Rg(this.g),delete this.g,Zt.X.M.call(this)};function wk(t){kg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}pt(wk,kg);function _k(){Cg.call(this),this.status=1}pt(_k,Cg);function no(t){this.g=t}pt(no,vk);no.prototype.xa=function(){dt(this.g,"a")};no.prototype.wa=function(t){dt(this.g,new wk(t))};no.prototype.va=function(t){dt(this.g,new _k)};no.prototype.ua=function(){dt(this.g,"b")};kc.prototype.createWebChannel=kc.prototype.g;Zt.prototype.send=Zt.prototype.u;Zt.prototype.open=Zt.prototype.m;Zt.prototype.close=Zt.prototype.close;Th.NO_ERROR=0;Th.TIMEOUT=8;Th.HTTP_ERROR=6;FE.COMPLETE="complete";zE.EventType=al;al.OPEN="a";al.CLOSE="b";al.ERROR="c";al.MESSAGE="d";tt.prototype.listen=tt.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.Oa;Me.prototype.getLastErrorCode=Me.prototype.Ea;Me.prototype.getStatus=Me.prototype.aa;Me.prototype.getResponseJson=Me.prototype.Sa;Me.prototype.getResponseText=Me.prototype.fa;Me.prototype.send=Me.prototype.da;Me.prototype.setWithCredentials=Me.prototype.Ka;var N$=function(){return new kc},D$=function(){return Ch()},Gd=Th,O$=FE,L$=zi,Vv={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},M$=cl,nu=zE,U$=Me;const Bv="@firebase/firestore";/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let ro="9.12.1";/**
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
 */const Pi=new lg("@firebase/firestore");function Hv(){return Pi.logLevel}function V(t,...e){if(Pi.logLevel<=ue.DEBUG){const n=e.map($g);Pi.debug(`Firestore (${ro}): ${t}`,...n)}}function dr(t,...e){if(Pi.logLevel<=ue.ERROR){const n=e.map($g);Pi.error(`Firestore (${ro}): ${t}`,...n)}}function Mp(t,...e){if(Pi.logLevel<=ue.WARN){const n=e.map($g);Pi.warn(`Firestore (${ro}): ${t}`,...n)}}function $g(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: `+t;throw dr(e),new Error(e)}function ke(t,e){t||X()}function J(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Sk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class F${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class z${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class j${constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new Sk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new wt(e)}}class V${constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ke(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class B${constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new V$(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class H${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W${constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.A=n.token,new H$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function q$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ek{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=q$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new je(0,0))}static max(){return new ee(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ba{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ba.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ba?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends ba{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const K$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends ba{construct(e,n,r){return new St(e,n,r)}static isValidIdentifier(e){return K$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Te.fromString(e))}static fromName(e){return new B(Te.fromString(e).popFirst(5))}static empty(){return new B(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Te(e.slice()))}}function G$(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Yr(i,B.empty(),e)}function Q$(t){return new Yr(t.readTime,t.key,-1)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(ee.min(),B.empty(),-1)}static max(){return new Yr(ee.max(),B.empty(),-1)}}function Y$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const X$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fl(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==X$)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function pl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ng{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Wv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Ng.at=-1;class Xe{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ru(this.root,e,this.comparator,!0)}}class ru{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=s??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ut(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qv(this.data.getIterator())}getIteratorFrom(e){return new qv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class qv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new un([])}unionWith(e){let n=new Ye(St.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new bt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const Z$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=Z$.exec(t);if(ke(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zs(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
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
 */function Ck(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tk(t){const e=t.mapValue.fields.__previous_value__;return Ck(e)?Tk(e):e}function xa(t){const e=Xr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class eN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}function Nh(t){return t==null}function Cc(t){return t===0&&1/t==-1/0}function tN(t){return typeof t=="number"&&Number.isInteger(t)&&!Cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const iu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ck(t)?4:nN(t)?9007199254740991:10:X()}function Wn(t,e){if(t===e)return!0;const n=$i(t);if(n!==$i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xa(t).isEqual(xa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Xr(r.timestampValue),o=Xr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return zs(r.bytesValue).isEqual(zs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return He(r.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(r.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return He(r.integerValue)===He(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=He(r.doubleValue),o=He(i.doubleValue);return s===o?Cc(s)===Cc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Wv(s)!==Wv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Wn(s[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Aa(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=$i(t),r=$i(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=He(i.integerValue||i.doubleValue),a=He(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Kv(t.timestampValue,e.timestampValue);case 4:return Kv(xa(t),xa(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=zs(i),a=zs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=pe(o[l],a[l]);if(u!==0)return u}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=pe(He(i.latitude),He(s.latitude));return o!==0?o:pe(He(i.longitude),He(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=js(o[l],a[l]);if(u)return u}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===iu.mapValue&&s===iu.mapValue)return 0;if(i===iu.mapValue)return 1;if(s===iu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=pe(a[c],u[c]);if(h!==0)return h;const d=js(o[a[c]],l[u[c]]);if(d!==0)return d}return pe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function Kv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Xr(t),r=Xr(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function Ss(t){return Up(t)}function Up(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Xr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Up(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Up(r.fields[a])}`;return s+"}"}(t.mapValue):X();var e,n}function Gv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fp(t){return!!t&&"integerValue"in t}function Dg(t){return!!t&&"arrayValue"in t}function Qv(t){return!!t&&"nullValue"in t}function Yv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cu(t){return!!t&&"mapValue"in t}function Qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ji(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Cu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qo(n)}setAll(e){let n=St.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Qo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Cu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Cu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ji(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(Qo(this.value))}}function Ik(t){const e=[];return ji(t.fields,(n,r)=>{const i=new St([n]);if(Cu(r)){const s=Ik(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new un(e)}/**
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
 */class ct{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ct(e,0,ee.min(),ee.min(),jt.empty(),0)}static newFoundDocument(e,n,r){return new ct(e,1,n,ee.min(),r,0)}static newNoDocument(e,n){return new ct(e,2,n,ee.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,ee.min(),jt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Xv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rN(t,e,n,r,i,s,o)}function Og(t){const e=J(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ss(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Nh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.ht=n}return e.ht}function iN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ss(r.value)}`;var r}).join(", ")}]`),Nh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ss(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ss(n)).join(",")),`Target(${e})`}function Lg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!dN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Wn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zv(t.startAt,e.startAt)&&Zv(t.endAt,e.endAt)}function zp(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Nt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new sN(e,n,r):n==="array-contains"?new lN(e,r):n==="in"?new uN(e,r):n==="not-in"?new cN(e,r):n==="array-contains-any"?new hN(e,r):new Nt(e,n,r)}static lt(e,n,r){return n==="in"?new oN(e,r):new aN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(js(n,this.value)):n!==null&&$i(this.value)===$i(n)&&this.ft(js(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class sN extends Nt{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.ft(n)}}class oN extends Nt{constructor(e,n){super(e,"in",n),this.keys=bk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aN extends Nt{constructor(e,n){super(e,"not-in",n),this.keys=bk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class lN extends Nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dg(n)&&Aa(n.arrayValue,this.value)}}class uN extends Nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class cN extends Nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Aa(this.value.arrayValue,n)}}class hN extends Nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Aa(this.value.arrayValue,r))}}class Tc{constructor(e,n){this.position=e,this.inclusive=n}}class Yo{constructor(e,n="asc"){this.field=e,this.dir=n}}function dN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Jv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ml{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function fN(t,e,n,r,i,s,o,a){return new ml(t,e,n,r,i,s,o,a)}function Dh(t){return new ml(t)}function e1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Rk(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Ak(t){return t.collectionGroup!==null}function Pa(t){const e=J(t);if(e._t===null){e._t=[];const n=Rk(e),r=xk(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Yo(n)),e._t.push(new Yo(St.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Yo(St.keyField(),s))}}}return e._t}function fr(t){const e=J(t);if(!e.wt)if(e.limitType==="F")e.wt=Xv(e.path,e.collectionGroup,Pa(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Pa(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Yo(s.field,o))}const r=e.endAt?new Tc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Tc(e.startAt.position,e.startAt.inclusive):null;e.wt=Xv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function jp(t,e,n){return new ml(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oh(t,e){return Lg(fr(t),fr(e))&&t.limitType===e.limitType}function Pk(t){return`${Og(fr(t))}|lt:${t.limitType}`}function Vp(t){return`Query(target=${iN(fr(t))}; limitType=${t.limitType})`}function Mg(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Jv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Pa(n),r)||n.endAt&&!function(i,s,o){const a=Jv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Pa(n),r))}(t,e)}function pN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $k(t){return(e,n)=>{let r=!1;for(const i of Pa(t)){const s=mN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function mN(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?js(a,l):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */function Nk(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cc(e)?"-0":e}}function Dk(t){return{integerValue:""+t}}function gN(t,e){return tN(e)?Dk(e):Nk(t,e)}/**
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
 */class Lh{constructor(){this._=void 0}}function yN(t,e,n){return t instanceof Ic?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Vs?Lk(t,e):t instanceof $a?Mk(t,e):function(r,i){const s=Ok(r,i),o=t1(s)+t1(r.yt);return Fp(s)&&Fp(r.yt)?Dk(o):Nk(r.It,o)}(t,e)}function vN(t,e,n){return t instanceof Vs?Lk(t,e):t instanceof $a?Mk(t,e):n}function Ok(t,e){return t instanceof bc?Fp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ic extends Lh{}class Vs extends Lh{constructor(e){super(),this.elements=e}}function Lk(t,e){const n=Uk(e);for(const r of t.elements)n.some(i=>Wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class $a extends Lh{constructor(e){super(),this.elements=e}}function Mk(t,e){let n=Uk(e);for(const r of t.elements)n=n.filter(i=>!Wn(i,r));return{arrayValue:{values:n}}}class bc extends Lh{constructor(e,n){super(),this.It=e,this.yt=n}}function t1(t){return He(t.integerValue||t.doubleValue)}function Uk(t){return Dg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class wN{constructor(e,n){this.field=e,this.transform=n}}function _N(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Vs&&r instanceof Vs||n instanceof $a&&r instanceof $a?Fs(n.elements,r.elements,Wn):n instanceof bc&&r instanceof bc?Wn(n.yt,r.yt):n instanceof Ic&&r instanceof Ic}(t.transform,e.transform)}class SN{constructor(e,n){this.version=e,this.transformResults=n}}class jn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jn}static exists(e){return new jn(void 0,e)}static updateTime(e){return new jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mh{}function Fk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jk(t.key,jn.none()):new gl(t.key,t.data,jn.none());{const n=t.data,r=jt.empty();let i=new Ye(St.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ii(t.key,r,new un(i.toArray()),jn.none())}}function EN(t,e,n){t instanceof gl?function(r,i,s){const o=r.value.clone(),a=r1(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ii?function(r,i,s){if(!Tu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=r1(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(zk(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,r){return t instanceof gl?function(i,s,o,a){if(!Tu(i.precondition,s))return o;const l=i.value.clone(),u=i1(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ii?function(i,s,o,a){if(!Tu(i.precondition,s))return o;const l=i1(i.fieldTransforms,a,s),u=s.data;return u.setAll(zk(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Tu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function kN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Ok(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function n1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Fs(n,r,(i,s)=>_N(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gl extends Mh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ii extends Mh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function r1(t,e,n){const r=new Map;ke(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vN(o,a,n[i]))}return r}function i1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yN(s,o,e))}return r}class jk extends Mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CN extends Mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TN{constructor(e){this.count=e}}/**
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
 */var Be,se;function IN(t){switch(t){default:return X();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Vk(t){if(t===void 0)return dr("GRPC error has no .code"),I.UNKNOWN;switch(t){case Be.OK:return I.OK;case Be.CANCELLED:return I.CANCELLED;case Be.UNKNOWN:return I.UNKNOWN;case Be.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Be.INTERNAL:return I.INTERNAL;case Be.UNAVAILABLE:return I.UNAVAILABLE;case Be.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Be.NOT_FOUND:return I.NOT_FOUND;case Be.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Be.ABORTED:return I.ABORTED;case Be.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Be.DATA_LOSS:return I.DATA_LOSS;default:return X()}}(se=Be||(Be={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class io{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kk(this.inner)}size(){return this.innerSize}}/**
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
 */const bN=new Xe(B.comparator);function pr(){return bN}const Bk=new Xe(B.comparator);function Lo(...t){let e=Bk;for(const n of t)e=e.insert(n.key,n);return e}function Hk(t){let e=Bk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gi(){return Jo()}function Wk(){return Jo()}function Jo(){return new io(t=>t.toString(),(t,e)=>t.isEqual(e))}const xN=new Xe(B.comparator),RN=new Ye(B.comparator);function ne(...t){let e=RN;for(const n of t)e=e.add(n);return e}const AN=new Ye(pe);function qk(){return AN}/**
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
 */class Uh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,yl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uh(ee.min(),i,qk(),pr(),ne())}}class yl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yl(r,n,ne(),ne(),ne())}}/**
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
 */class Iu{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class Kk{constructor(e,n){this.targetId=e,this.At=n}}class Gk{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class s1{constructor(){this.Rt=0,this.bt=a1(),this.Pt=bt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ne(),n=ne(),r=ne();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new yl(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=a1()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class PN{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=pr(),this.qt=o1(),this.Kt=new Ye(pe)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(zp(s))if(r===0){const o=new B(s.path);this.jt(n,o,ct.newNoDocument(o,ee.min()))}else ke(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&zp(a.target)){const l=new B(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,ct.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=ne();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Uh(e,n,this.Kt,this.Ut,r);return this.Ut=pr(),this.qt=o1(),this.Kt=new Ye(pe),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new s1,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ye(pe),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new s1),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function o1(){return new Xe(B.comparator)}function a1(){return new Xe(B.comparator)}/**
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
 */const $N=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),NN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class DN{constructor(e,n){this.databaseId=e,this.gt=n}}function xc(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qk(t,e){return t.gt?e.toBase64():e.toUint8Array()}function ON(t,e){return xc(t,e.toTimestamp())}function rr(t){return ke(!!t),ee.fromTimestamp(function(e){const n=Xr(e);return new je(n.seconds,n.nanos)}(t))}function Ug(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Yk(t){const e=Te.fromString(t);return ke(Zk(e)),e}function Bp(t,e){return Ug(t.databaseId,e.path)}function Qd(t,e){const n=Yk(e);if(n.get(1)!==t.databaseId.projectId)throw new z(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Xk(n))}function Hp(t,e){return Ug(t.databaseId,e)}function LN(t){const e=Yk(t);return e.length===4?Te.emptyPath():Xk(e)}function Wp(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xk(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function l1(t,e,n){return{name:Bp(t,e),fields:n.value.mapValue.fields}}function MN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(ke(u===void 0||typeof u=="string"),bt.fromBase64String(u||"")):(ke(u===void 0||u instanceof Uint8Array),bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:Vk(l.code);return new z(u,l.message||"")}(o);n=new Gk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qd(t,r.document.name),s=rr(r.document.updateTime),o=new jt({mapValue:{fields:r.document.fields}}),a=ct.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Iu(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qd(t,r.document),s=r.readTime?rr(r.readTime):ee.min(),o=ct.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Iu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qd(t,r.document),s=r.removedTargetIds||[];n=new Iu([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new TN(i),o=r.targetId;n=new Kk(o,s)}}return n}function UN(t,e){let n;if(e instanceof gl)n={update:l1(t,e.key,e.value)};else if(e instanceof jk)n={delete:Bp(t,e.key)};else if(e instanceof ii)n={update:l1(t,e.key,e.data),updateMask:GN(e.fieldMask)};else{if(!(e instanceof CN))return X();n={verify:Bp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ic)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $a)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof bc)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:ON(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function FN(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?rr(r.updateTime):rr(i);return s.isEqual(ee.min())&&(s=rr(i)),new SN(s,r.transformResults||[])}(n,e))):[]}function zN(t,e){return{documents:[Hp(t,e.path)]}}function jN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Hp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Yv(h.value))return{unaryFilter:{field:Wi(h.field),op:"IS_NAN"}};if(Qv(h.value))return{unaryFilter:{field:Wi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Yv(h.value))return{unaryFilter:{field:Wi(h.field),op:"IS_NOT_NAN"}};if(Qv(h.value))return{unaryFilter:{field:Wi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(h.field),op:WN(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Wi(c.field),direction:HN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Nh(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function VN(t){let e=LN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ke(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Jk(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Yo(fs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Nh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Tc(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Tc(d,h)}(n.endAt)),fN(e,i,o,s,a,"F",l,u)}function BN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jk(t){return t?t.unaryFilter!==void 0?[KN(t)]:t.fieldFilter!==void 0?[qN(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Jk(e)).reduce((e,n)=>e.concat(n)):X():[]}function HN(t){return $N[t]}function WN(t){return NN[t]}function Wi(t){return{fieldPath:t.canonicalString()}}function fs(t){return St.fromServerFormat(t.fieldPath)}function qN(t){return Nt.create(fs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}function KN(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fs(t.unaryFilter.field);return Nt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fs(t.unaryFilter.field);return Nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fs(t.unaryFilter.field);return Nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fs(t.unaryFilter.field);return Nt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return X()}}function GN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class QN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&EN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Wk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Fk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,r)=>n1(n,r))&&Fs(this.baseMutations,e.baseMutations,(n,r)=>n1(n,r))}}class Fg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ke(e.mutations.length===r.length);let i=xN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fg(e,n,r,i)}}/**
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
 */class YN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _i{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=bt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new _i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class XN{constructor(e){this.re=e}}function JN(t){const e=VN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jp(e,e.limit,"L"):e}/**
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
 */class ZN{constructor(){this.Ye=new eD}addToCollectionParentIndex(e,n){return this.Ye.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Yr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class eD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(Te.comparator)).toArray()}}/**
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
 */class Bs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Bs(0)}static vn(){return new Bs(-1)}}/**
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
 */class tD{constructor(){this.changes=new io(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class rD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Xo(r.mutation,i,un.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Lo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=pr();const o=Jo(),a=Jo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ii)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Xo(c.mutation,u,c.mutation.getFieldMask(),je.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new nD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Jo();let i=new Xe((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||un.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Wk();c.forEach(d=>{if(!s.has(d)){const y=Fk(n.get(d),r.get(d));y!==null&&h.set(d,y),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ak(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(gi());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ne())).next(c=>({batchId:a,changes:Hk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=Lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Lo();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(u,c){return new ml(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,ct.newInvalidDocument(u)))});let o=Lo();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Xo(u.mutation,l,un.empty(),je.now()),Mg(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):R.resolve(ct.newInvalidDocument(n))}}/**
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
 */class iD{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:rr(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:JN(r.bundledQuery),readTime:rr(r.readTime)}}(n)),R.resolve()}}/**
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
 */class sD{constructor(){this.overlays=new Xe(B.comparator),this.es=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gi();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=gi(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Xe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=gi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=gi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YN(n,r));let s=this.es.get(n);s===void 0&&(s=ne(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class zg{constructor(){this.ns=new Ye(Je.ss),this.rs=new Ye(Je.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Je(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Je(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new B(new Te([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new B(new Te([])),r=new Je(n,e),i=new Je(n,e+1);let s=ne();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return B.comparator(e.key,n.key)||pe(e._s,n._s)}static os(e,n){return pe(e._s,n._s)||B.comparator(e.key,n.key)}}/**
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
 */class oD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ye(Je.ss)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(pe);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),R.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Je(new B(s),0);let a=new Ye(pe);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),R.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ke(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return R.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Je(n,0),i=this.gs.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class aD{constructor(e){this.Es=e,this.docs=new Xe(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=pr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),R.resolve(r)}getAllFromCollection(e,n,r){let i=pr();const s=new B(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Y$(Q$(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,i){X()}As(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lD(this)}getSize(e){return R.resolve(this.size)}}class lD extends tD{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class uD{constructor(e){this.persistence=e,this.Rs=new io(n=>Og(n),Lg),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.bs=0,this.Ps=new zg,this.targetCount=0,this.vs=Bs.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),R.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Dn(n),R.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Ps.containsKey(n))}}/**
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
 */class cD{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ng(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new uD(this),this.indexManager=new ZN,this.remoteDocumentCache=function(r){return new aD(r)}(r=>this.referenceDelegate.xs(r)),this.It=new XN(n),this.Ns=new iD(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new oD(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new hD(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return R.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class hD extends J${constructor(e){super(),this.currentSequenceNumber=e}}class jg{constructor(e){this.persistence=e,this.Fs=new zg,this.$s=null}static Bs(e){return new jg(e)}get Ls(){if(this.$s)return this.$s;throw X()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),R.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ls,r=>{const i=B.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return R.or([()=>R.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Vg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vg(e,n.fromCache,r,i)}}/**
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
 */class dD{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(e1(n))return R.resolve(null);let r=fr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=jp(n,null,"F"),r=fr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,jp(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return e1(n)||i.isEqual(ee.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Hv()<=ue.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vp(n)),this.Bi(e,o,n,G$(i,-1)))})}Fi(e,n){let r=new Ye($k(e));return n.forEach((i,s)=>{Mg(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Hv()<=ue.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Vp(n)),this.Ni.getDocumentsMatchingQuery(e,n,Yr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class fD{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Xe(pe),this.qi=new io(s=>Og(s),Lg),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rD(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function pD(t,e,n,r){return new fD(t,e,n,r)}async function eC(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ne();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function mD(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=R.resolve();return h.forEach(y=>{d=d.next(()=>u.getEntry(a,y)).next(g=>{const m=l.docVersions.get(y);ke(m!==null),g.version.compareTo(m)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ne();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tC(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function gD(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let y=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?y=y.withResumeToken(bt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(h,y),function(g,m,w){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,y,c)&&a.push(n.Cs.updateTargetData(s,y))});let l=pr(),u=ne();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(yD(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(ee.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function yD(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=pr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function vD(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wD(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new _i(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function qp(t,e,n){const r=J(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pl(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function u1(t,e,n){const r=J(t);let i=ee.min(),s=ne();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=J(a),h=c.qi.get(u);return h!==void 0?R.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,fr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ne())).next(a=>(_D(r,pN(e),a),{documents:a,Hi:s})))}function _D(t,e,n){let r=t.Ki.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class c1{constructor(){this.activeTargetIds=qk()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SD{constructor(){this.Lr=new c1,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new c1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ED{qr(e){}shutdown(){}}/**
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
 */class h1{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const kD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class CD{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class TD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);V("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(V("RestConnection","Received: ",l),l),l=>{throw Mp("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ro,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=kD[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new U$;a.setWithCredentials(!0),a.listenOnce(O$.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Gd.NO_ERROR:const u=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Gd.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new z(I.DEADLINE_EXCEEDED,"Request time out"));break;case Gd.HTTP_ERROR:const c=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(y){const g=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(h.status);o(new z(d,h.message))}else o(new z(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(I.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=N$(),o=D$(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new M$({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");V("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new CD({Hr:g=>{h?V("Connection","Not sending because WebChannel is closed:",g):(c||(V("Connection","Opening WebChannel transport."),u.open(),c=!0),V("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),y=(g,m,w)=>{g.listen(m,p=>{try{w(p)}catch(f){setTimeout(()=>{throw f},0)}})};return y(u,nu.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),y(u,nu.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),d.io())}),y(u,nu.EventType.ERROR,g=>{h||(h=!0,Mp("Connection","WebChannel transport errored:",g),d.io(new z(I.UNAVAILABLE,"The operation could not be completed")))}),y(u,nu.EventType.MESSAGE,g=>{var m;if(!h){const w=g.data[0];ke(!!w);const p=w,f=p.error||((m=p[0])===null||m===void 0?void 0:m.error);if(f){V("Connection","WebChannel received error:",f);const v=f.status;let _=function(b){const T=Be[b];if(T!==void 0)return Vk(T)}(v),k=f.message;_===void 0&&(_=I.INTERNAL,k="Unknown error status: "+v+" with message "+f.message),h=!0,d.io(new z(_,k)),u.close()}else V("Connection","WebChannel received:",w),d.ro(w)}}),y(o,L$.STAT_EVENT,g=>{g.stat===Vv.PROXY?V("Connection","Detected buffering proxy"):g.stat===Vv.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Yd(){return typeof document<"u"?document:null}/**
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
 */function Fh(t){return new DN(t,!0)}class nC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class rC{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new nC(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new z(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ID extends rC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=MN(this.It,e),r=function(i){if(!("targetChange"in i))return ee.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?rr(s.readTime):ee.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=Wp(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=zp(a)?{documents:zN(i,a)}:{query:jN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Qk(i,s.resumeToken):s.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=xc(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=BN(this.It,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=Wp(this.It),n.removeTarget=e,this.Lo(n)}}class bD extends rC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=FN(e.writeResults,e.commitTime),r=rr(e.commitTime);return this.listener.tu(r,n)}return ke(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Wp(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UN(this.It,r))};this.Lo(n)}}/**
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
 */class xD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new z(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(I.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(I.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class RD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(dr(n),this.uu=!1):V("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class AD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{Vi(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=J(a);l.wu.add(4),await vl(l),l.yu.set("Unknown"),l.wu.delete(4),await zh(l)}(this))})}),this.yu=new RD(r,i)}}async function zh(t){if(Vi(t))for(const e of t.mu)await e(!0)}async function vl(t){for(const e of t.mu)await e(!1)}function iC(t,e){const n=J(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Wg(n)?Hg(n):so(n).Oo()&&Bg(n,e))}function sC(t,e){const n=J(t),r=so(n);n._u.delete(e),r.Oo()&&oC(n,e),n._u.size===0&&(r.Oo()?r.$o():Vi(n)&&n.yu.set("Unknown"))}function Bg(t,e){t.pu.Mt(e.targetId),so(t).Ho(e)}function oC(t,e){t.pu.Mt(e),so(t).Jo(e)}function Hg(t){t.pu=new PN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),so(t).start(),t.yu.cu()}function Wg(t){return Vi(t)&&!so(t).ko()&&t._u.size>0}function Vi(t){return J(t).wu.size===0}function aC(t){t.pu=void 0}async function PD(t){t._u.forEach((e,n)=>{Bg(t,e)})}async function $D(t,e){aC(t),Wg(t)?(t.yu.lu(e),Hg(t)):t.yu.set("Unknown")}async function ND(t,e,n){if(t.yu.set("Online"),e instanceof Gk&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rc(t,r)}else if(e instanceof Iu?t.pu.Gt(e):e instanceof Kk?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(ee.min()))try{const r=await tC(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(bt.EMPTY_BYTE_STRING,l.snapshotVersion)),oC(i,a);const u=new _i(l.target,a,1,l.sequenceNumber);Bg(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Rc(t,r)}}async function Rc(t,e,n){if(!pl(e))throw e;t.wu.add(1),await vl(t),t.yu.set("Offline"),n||(n=()=>tC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await zh(t)})}function lC(t,e){return e().catch(n=>Rc(t,n,e))}async function jh(t){const e=J(t),n=Jr(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;DD(e);)try{const i=await vD(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,OD(e,i)}catch(i){await Rc(e,i)}uC(e)&&cC(e)}function DD(t){return Vi(t)&&t.du.length<10}function OD(t,e){t.du.push(e);const n=Jr(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function uC(t){return Vi(t)&&!Jr(t).ko()&&t.du.length>0}function cC(t){Jr(t).start()}async function LD(t){Jr(t).nu()}async function MD(t){const e=Jr(t);for(const n of t.du)e.Zo(n.mutations)}async function UD(t,e,n){const r=t.du.shift(),i=Fg.from(r,e,n);await lC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jh(t)}async function FD(t,e){e&&Jr(t).Xo&&await async function(n,r){if(i=r.code,IN(i)&&i!==I.ABORTED){const s=n.du.shift();Jr(n).Fo(),await lC(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await jh(n)}var i}(t,e),uC(t)&&cC(t)}async function d1(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Vi(n);n.wu.add(3),await vl(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await zh(n)}async function zD(t,e){const n=J(t);e?(n.wu.delete(2),await zh(n)):e||(n.wu.add(2),await vl(n),n.yu.set("Unknown"))}function so(t){return t.Iu||(t.Iu=function(e,n,r){const i=J(e);return i.iu(),new ID(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:PD.bind(null,t),Zr:$D.bind(null,t),zo:ND.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Wg(t)?Hg(t):t.yu.set("Unknown")):(await t.Iu.stop(),aC(t))})),t.Iu}function Jr(t){return t.Tu||(t.Tu=function(e,n,r){const i=J(e);return i.iu(),new bD(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:LD.bind(null,t),Zr:FD.bind(null,t),eu:MD.bind(null,t),tu:UD.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await jh(t)):(await t.Tu.stop(),t.du.length>0&&(V("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class qg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new qg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kg(t,e){if(dr("AsyncQueue",`${e}: ${t}`),pl(t))return new z(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Lo(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new Es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class f1{constructor(){this.Eu=new Xe(B.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):X():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hs(e,n,Es.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jD{constructor(){this.Ru=void 0,this.listeners=[]}}class VD{constructor(){this.queries=new io(e=>Pk(e),Oh),this.onlineState="Unknown",this.bu=new Set}}async function Gg(t,e){const n=J(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jD),i)try{s.Ru=await n.onListen(r)}catch(o){const a=Kg(o,`Initialization of query '${Vp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&Yg(n)}async function Qg(t,e){const n=J(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function BD(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&Yg(n)}function HD(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Yg(t){t.bu.forEach(e=>{e.next()})}class Xg{constructor(e,n,r){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class hC{constructor(e){this.key=e}}class dC{constructor(e){this.key=e}}class WD{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ne(),this.mutatedKeys=ne(),this.Gu=$k(e),this.Qu=new Es(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new f1,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),y=Mg(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let w=!1;d&&y?d.data.isEqual(y.data)?g!==m&&(r.track({type:3,doc:y}),w=!0):this.Hu(d,y)||(r.track({type:2,doc:y}),w=!0,(l&&this.Gu(y,l)>0||u&&this.Gu(y,u)<0)&&(a=!0)):!d&&y?(r.track({type:0,doc:y}),w=!0):d&&!y&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(y?(o=o.add(y),s=m?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((u,c)=>function(h,d){const y=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return y(h)-y(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Hs(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new f1,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ne(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new dC(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new hC(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=ne();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Hs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class qD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KD{constructor(e){this.key=e,this.nc=!1}}class GD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new io(a=>Pk(a),Oh),this.rc=new Map,this.oc=new Set,this.uc=new Xe(B.comparator),this.cc=new Map,this.ac=new zg,this.hc={},this.lc=new Map,this.fc=Bs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function QD(t,e){const n=sO(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await wD(n.localStore,fr(e));n.isPrimaryClient&&iC(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await YD(n,e,r,a==="current",o.resumeToken)}return i}async function YD(t,e,n,r,i){t._c=(h,d,y)=>async function(g,m,w,p){let f=m.view.Wu(w);f.$i&&(f=await u1(g.localStore,m.query,!1).then(({documents:k})=>m.view.Wu(k,f)));const v=p&&p.targetChanges.get(m.targetId),_=m.view.applyChanges(f,g.isPrimaryClient,v);return m1(g,m.targetId,_.Xu),_.snapshot}(t,h,d,y);const s=await u1(t.localStore,e,!0),o=new WD(e,s.Hi),a=o.Wu(s.documents),l=yl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);m1(t,n,u.Xu);const c=new qD(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function XD(t,e){const n=J(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Oh(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sC(n.remoteStore,r.targetId),Kp(n,r.targetId)}).catch(fl)):(Kp(n,r.targetId),await qp(n.localStore,r.targetId,!0))}async function JD(t,e,n){const r=oO(t);try{const i=await function(s,o){const a=J(s),l=je.now(),u=o.reduce((d,y)=>d.add(y.key),ne());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let y=pr(),g=ne();return a.Gi.getEntries(d,u).next(m=>{y=m,y.forEach((w,p)=>{p.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,y)).next(m=>{c=m;const w=[];for(const p of o){const f=kN(p,c.get(p.key).overlayedDocument);f!=null&&w.push(new ii(p.key,f,Ik(f.value.mapValue),jn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(m=>{h=m;const w=m.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,m.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Hk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Xe(pe)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await wl(r,i.changes),await jh(r.remoteStore)}catch(i){const s=Kg(i,"Failed to persist write");n.reject(s)}}async function fC(t,e){const n=J(t);try{const r=await gD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ke(o.nc):i.removedDocuments.size>0&&(ke(o.nc),o.nc=!1))}),await wl(n,r,e)}catch(r){await fl(r)}}function p1(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=J(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&Yg(a)}(r.eventManager,e),i.length&&r.sc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZD(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Xe(B.comparator);o=o.insert(s,ct.newNoDocument(s,ee.min()));const a=ne().add(s),l=new Uh(ee.min(),new Map,new Ye(pe),o,a);await fC(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Jg(r)}else await qp(r.localStore,e,!1).then(()=>Kp(r,e,n)).catch(fl)}async function eO(t,e){const n=J(t),r=e.batch.batchId;try{const i=await mD(n.localStore,e);mC(n,r,null),pC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wl(n,i)}catch(i){await fl(i)}}async function tO(t,e,n){const r=J(t);try{const i=await function(s,o){const a=J(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ke(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);mC(r,e,n),pC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wl(r,i)}catch(i){await fl(i)}}function pC(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function mC(t,e,n){const r=J(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Kp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||gC(t,r)})}function gC(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(sC(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Jg(t))}function m1(t,e,n){for(const r of n)r instanceof hC?(t.ac.addReference(r.key,e),nO(t,r)):r instanceof dC?(V("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||gC(t,r.key)):X()}function nO(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.oc.add(r),Jg(t))}function Jg(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new B(Te.fromString(e)),r=t.fc.next();t.cc.set(r,new KD(n)),t.uc=t.uc.insert(n,r),iC(t.remoteStore,new _i(fr(Dh(n.path)),r,2,Ng.at))}}async function wl(t,e,n){const r=J(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Vg.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,l){const u=J(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>R.forEach(l,h=>R.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>R.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!pl(c))throw c;V("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),y=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(y);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function rO(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await eC(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new z(I.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wl(n,r.ji)}}function iO(t,e){const n=J(t),r=n.cc.get(e);if(r&&r.nc)return ne().add(r.key);{let i=ne();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function sO(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZD.bind(null,e),e.sc.zo=BD.bind(null,e.eventManager),e.sc.wc=HD.bind(null,e.eventManager),e}function oO(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tO.bind(null,e),e}class aO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Fh(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return pD(this.persistence,new dD,e.initialUser,this.It)}yc(e){return new cD(jg.Bs,this.It)}gc(e){return new SD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>p1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rO.bind(null,this.syncEngine),await zD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new VD}createDatastore(e){const n=Fh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new TD(i));var i;return function(s,o,a,l){return new xD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>p1(this.syncEngine,a,0),o=h1.C()?new h1:new ED,new AD(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new GD(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);V("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await vl(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function yC(t,e,n){if(!n)throw new z(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uO(t,e,n,r){if(e===!0&&r===!0)throw new z(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function g1(t){if(!B.isDocumentKey(t))throw new z(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function y1(t){if(B.isDocumentKey(t))throw new z(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vh(t);throw new z(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const v1=new Map;class w1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,uO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Bh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new w1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new w1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new F$;switch(n.type){case"gapi":const r=n.client;return new B$(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=v1.get(e);n&&(V("ComponentProvider","Removing Datastore"),v1.delete(e),n.terminate())}(this),Promise.resolve()}}function cO(t,e,n,r={}){var i;const s=(t=cn(t,Bh))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Mp("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=wt.MOCK_USER;else{o=fE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new wt(l)}t._authCredentials=new z$(new Sk(o,a))}}/**
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
 */class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class oo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oo(this.firestore,e,this._query)}}class qr extends oo{constructor(e,n,r){super(e,n,Dh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new B(e))}withConverter(e){return new qr(this.firestore,e,this._path)}}function vC(t,e,...n){if(t=Ae(t),yC("collection","path",e),t instanceof Bh){const r=Te.fromString(e,...n);return y1(r),new qr(t,null,r)}{if(!(t instanceof Ct||t instanceof qr))throw new z(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return y1(r),new qr(t.firestore,null,r)}}function En(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=Ek.R()),yC("doc","path",e),t instanceof Bh){const r=Te.fromString(e,...n);return g1(r),new Ct(t,null,new B(r))}{if(!(t instanceof Ct||t instanceof qr))throw new z(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return g1(r),new Ct(t.firestore,t instanceof qr?t.converter:null,new B(r))}}/**
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
 */class Zg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class hO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=Ek.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Kg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dO(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function fO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pO(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>d1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>d1(e.remoteStore,s)),t.onlineComponents=e}async function pO(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await dO(t,new aO)),t.offlineComponents}async function wC(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await fO(t,new lO)),t.onlineComponents}function mO(t){return wC(t).then(e=>e.syncEngine)}async function Ac(t){const e=await wC(t),n=e.eventManager;return n.onListen=QD.bind(null,e.syncEngine),n.onUnlisten=XD.bind(null,e.syncEngine),n}function gO(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Zg({next:h=>{s.enqueueAndForget(()=>Qg(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new z(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new z(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Xg(Dh(o.path),u,{includeMetadataChanges:!0,ku:!0});return Gg(i,c)}(await Ac(t),t.asyncQueue,e,n,r)),r.promise}function yO(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Zg({next:h=>{s.enqueueAndForget(()=>Qg(i,c)),h.fromCache&&a.source==="server"?l.reject(new z(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Xg(o,u,{includeMetadataChanges:!0,ku:!0});return Gg(i,c)}(await Ac(t),t.asyncQueue,e,n,r)),r.promise}class vO{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new nC(this,"async_queue_retry"),this.Wc=()=>{const n=Yd();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Yd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Yd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new nr;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!pl(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw dr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=qg.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&X()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function _1(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ni extends Bh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new vO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_C(this),this._firestoreClient.terminate()}}function wO(t,e){const n=typeof t=="object"?t:cg(),r=typeof t=="string"?t:e||"(default)",i=yh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hE("firestore");s&&cO(i,...s)}return i}function Hh(t){return t._firestoreClient||_C(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _C(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new eN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new hO(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ws(bt.fromBase64String(e))}catch(n){throw new z(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ws(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qh{constructor(e){this._methodName=e}}/**
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
 */class ey{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */const _O=/^__.*__$/;class SO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new gl(e,this.data,n,this.fieldTransforms)}}class SC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ii(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function EC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Kh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Kh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Pc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(EC(this.sa)&&_O.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class EO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Fh(e)}da(e,n,r,i=!1){return new Kh({sa:e,methodName:n,fa:r,path:St.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ty(t){const e=t._freezeSettings(),n=Fh(t._databaseId);return new EO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kO(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);ny("Data must be an object, but it was:",o,r);const a=kC(r,o);let l,u;if(s.merge)l=new un(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Gp(e,h,n);if(!o.contains(d))throw new z(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);TC(c,d)||c.push(d)}l=new un(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new SO(new jt(a),l,u)}class _l extends qh{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _l}}function CO(t,e,n){return new Kh({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class TO extends qh{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=CO(this,e,!0),r=this._a.map(s=>ao(s,n)),i=new Vs(r);return new wN(e.path,i)}isEqual(e){return this===e}}function IO(t,e,n,r){const i=t.da(1,e,n);ny("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();ji(r,(l,u)=>{const c=ry(e,l,n);u=Ae(u);const h=i.ca(c);if(u instanceof _l)s.push(c);else{const d=ao(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new un(s);return new SC(o,a,i.fieldTransforms)}function bO(t,e,n,r,i,s){const o=t.da(1,e,n),a=[Gp(e,r,n)],l=[i];if(s.length%2!=0)throw new z(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Gp(e,s[d])),l.push(s[d+1]);const u=[],c=jt.empty();for(let d=a.length-1;d>=0;--d)if(!TC(u,a[d])){const y=a[d];let g=l[d];g=Ae(g);const m=o.ca(y);if(g instanceof _l)u.push(y);else{const w=ao(g,m);w!=null&&(u.push(y),c.set(y,w))}}const h=new un(u);return new SC(c,h,o.fieldTransforms)}function xO(t,e,n,r=!1){return ao(n,t.da(r?4:3,e))}function ao(t,e){if(CC(t=Ae(t)))return ny("Unsupported field value:",e,t),kC(t,e);if(t instanceof qh)return function(n,r){if(!EC(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ao(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gN(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=je.fromDate(n);return{timestampValue:xc(r.It,i)}}if(n instanceof je){const i=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xc(r.It,i)}}if(n instanceof ey)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ws)return{bytesValue:Qk(r.It,n._byteString)};if(n instanceof Ct){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ug(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Vh(n)}`)}(t,e)}function kC(t,e){const n={};return kk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(t,(r,i)=>{const s=ao(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function CC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof ey||t instanceof Ws||t instanceof Ct||t instanceof qh)}function ny(t,e,n){if(!CC(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Vh(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Gp(t,e,n){if((e=Ae(e))instanceof Wh)return e._internalPath;if(typeof e=="string")return ry(t,e);throw Pc("Field path arguments must be of type string or ",t,!1,void 0,n)}const RO=new RegExp("[~\\*/\\[\\]]");function ry(t,e,n){if(e.search(RO)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wh(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(I.INVALID_ARGUMENT,a+t+l)}function TC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class IC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AO extends IC{data(){return super.data()}}function iy(t,e){return typeof e=="string"?ry(t,e):e instanceof Wh?e._internalPath:e._delegate._internalPath}/**
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
 */function bC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class PO{}function $O(t,...e){for(const n of e)t=n._apply(t);return t}class NO extends PO{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=ty(e.firestore),r=function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new z(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){E1(c,u);const y=[];for(const g of c)y.push(S1(a,i,g));h={arrayValue:{values:y}}}else h=S1(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||E1(c,u),h=xO(o,s,c,u==="in"||u==="not-in");const d=Nt.create(l,u,h);return function(y,g){if(g.dt()){const w=Rk(y);if(w!==null&&!w.isEqual(g.field))throw new z(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${g.field.toString()}'`);const p=xk(y);p!==null&&OO(y,g.field,p)}const m=function(w,p){for(const f of w.filters)if(p.indexOf(f.op)>=0)return f.op;return null}(y,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(m!==null)throw m===g.op?new z(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new z(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${m.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new oo(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new ml(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function DO(t,e,n){const r=e,i=iy("where",t);return new NO(i,r,n)}function S1(t,e,n){if(typeof(n=Ae(n))=="string"){if(n==="")throw new z(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ak(e)&&n.indexOf("/")!==-1)throw new z(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!B.isDocumentKey(r))throw new z(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gv(t,new B(r))}if(n instanceof Ct)return Gv(t,n._key);throw new z(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vh(n)}.`)}function E1(t,e){if(!Array.isArray(t)||t.length===0)throw new z(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new z(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function OO(t,e,n){if(!n.isEqual(e))throw new z(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class LO{convertValue(e,n="none"){switch($i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const r={};return ji(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ey(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Tk(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xa(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ke(Zk(r));const i=new Ra(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||dr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function MO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xC extends IC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(iy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bu extends xC{data(e={}){return super.data(e)}}class RC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bu(this._firestore,this._userDataWriter,r.key,r,new Mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new bu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Mo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new bu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Mo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:UO(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function UO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function k1(t){t=cn(t,Ct);const e=cn(t.firestore,Ni);return gO(Hh(e),t._key).then(n=>$C(e,t,n))}class sy extends LO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function FO(t){t=cn(t,oo);const e=cn(t.firestore,Ni),n=Hh(e),r=new sy(e);return bC(t._query),yO(n,t._query).then(i=>new RC(e,r,t,i))}function Qp(t,e,n){t=cn(t,Ct);const r=cn(t.firestore,Ni),i=MO(t.converter,e,n);return PC(r,[kO(ty(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,jn.none())])}function $c(t,e,n,...r){t=cn(t,Ct);const i=cn(t.firestore,Ni),s=ty(i);let o;return o=typeof(e=Ae(e))=="string"||e instanceof Wh?bO(s,"updateDoc",t._key,e,n,r):IO(s,"updateDoc",t._key,e),PC(i,[o.toMutation(t._key,jn.exists(!0))])}function AC(t,...e){var n,r,i;t=Ae(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||_1(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(_1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Ct)u=cn(t.firestore,Ni),c=Dh(t._key.path),l={next:h=>{e[o]&&e[o]($C(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=cn(t,oo);u=cn(h.firestore,Ni),c=h._query;const d=new sy(u);l={next:y=>{e[o]&&e[o](new RC(u,d,h,y))},error:e[o+1],complete:e[o+2]},bC(t._query)}return function(h,d,y,g){const m=new Zg(g),w=new Xg(d,m,y);return h.asyncQueue.enqueueAndForget(async()=>Gg(await Ac(h),w)),()=>{m.bc(),h.asyncQueue.enqueueAndForget(async()=>Qg(await Ac(h),w))}}(Hh(u),c,a,l)}function PC(t,e){return function(n,r){const i=new nr;return n.asyncQueue.enqueueAndForget(async()=>JD(await mO(n),r,i)),i.promise}(Hh(t),e)}function $C(t,e,n){const r=n.docs.get(e._key),i=new sy(t);return new xC(t,i,e._key,r,new Mo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function zO(){return new _l("deleteField")}function C1(...t){return new TO("arrayUnion",t)}(function(t,e=!0){(function(n){ro=n})(eo),Ai(new Qr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ni(new j$(n.getProvider("auth-internal")),new W$(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),zn(Bv,"3.7.1",t),zn(Bv,"3.7.1","esm2017")})();function oy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function NC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jO=NC,DC=new nl("auth","Firebase",NC());/**
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
 */const T1=new lg("@firebase/auth");function xu(t,...e){T1.logLevel<=ue.ERROR&&T1.error(`Auth (${eo}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw ay(t,...e)}function Vn(t,...e){return ay(t,...e)}function VO(t,e,n){const r=Object.assign(Object.assign({},jO()),{[e]:n});return new nl("auth","Firebase",r).create(e,{appName:t.name})}function ay(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return DC.create(t,...e)}function W(t,e,...n){if(!t)throw ay(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xu(e),new Error(e)}function mr(t,e){t||Zn(e)}/**
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
 */const I1=new Map;function er(t){mr(t instanceof Function,"Expected a class definition");let e=I1.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,I1.set(t,e),e)}/**
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
 */function BO(t,e){const n=yh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pc(s,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function HO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Yp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WO(){return b1()==="http:"||b1()==="https:"}function b1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function qO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WO()||p2()||"connection"in navigator)?navigator.onLine:!0}function KO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=f2()||m2()}get(){return qO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ly(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class OC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const QO=new Sl(3e4,6e4);function El(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lo(t,e,n,r,i={}){return LC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=rl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),OC.fetch()(MC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function LC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GO),e);try{const i=new YO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw su(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw su(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw su(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw su(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw VO(t,c,u);Tn(t,c)}}catch(i){if(i instanceof qn)throw i;Tn(t,"network-request-failed")}}async function kl(t,e,n,r,i={}){const s=await lo(t,e,n,r,i);return"mfaPendingCredential"in s&&Tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function MC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ly(t.config,i):`${t.config.apiScheme}://${i}`}class YO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vn(this.auth,"network-request-failed")),QO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function XO(t,e){return lo(t,"POST","/v1/accounts:delete",e)}async function JO(t,e){return lo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZO(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),i=uy(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zo(Xd(i.auth_time)),issuedAtTime:Zo(Xd(i.iat)),expirationTime:Zo(Xd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xd(t){return Number(t)*1e3}function uy(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return xu("JWT malformed, contained fewer than 3 sections"),null;try{const s=uE(r);return s?JSON.parse(s):(xu("Failed to decode base64 JWT payload"),null)}catch(s){return xu("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function eL(t){const e=uy(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qn&&tL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class UC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zo(this.lastLoginAt),this.creationTime=Zo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qs(t,JO(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sL(s.providerUserInfo):[],a=iL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new UC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function rL(t){const e=Ae(t);await Nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sL(t){return t.map(e=>{var{providerId:n}=e,r=oy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function oL(t,e){const n=await LC(t,{},async()=>{const r=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=MC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",OC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await oL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Na;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Na,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
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
 */function _r(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Si{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=oy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new UC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZO(this,e)}reload(){return rL(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Si(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qs(this,XO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:_,isAnonymous:k,providerData:b,stsTokenManager:T}=n;W(v&&T,e,"internal-error");const P=Na.fromJSON(this.name,T);W(typeof v=="string",e,"internal-error"),_r(h,e.name),_r(d,e.name),W(typeof _=="boolean",e,"internal-error"),W(typeof k=="boolean",e,"internal-error"),_r(y,e.name),_r(g,e.name),_r(m,e.name),_r(w,e.name),_r(p,e.name),_r(f,e.name);const q=new Si({uid:v,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:k,photoURL:g,phoneNumber:y,tenantId:m,stsTokenManager:P,createdAt:p,lastLoginAt:f});return b&&Array.isArray(b)&&(q.providerData=b.map(O=>Object.assign({},O))),w&&(q._redirectEventId=w),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Na;i.updateFromServerResponse(n);const s=new Si({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nc(s),s}}/**
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
 */class FC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FC.type="NONE";const x1=FC;/**
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
 */function Ru(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ru(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ru("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Si._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks(er(x1),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||er(x1);const o=Ru(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Si._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ks(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ks(s,e,r))}}/**
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
 */function R1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HC(e))return"Blackberry";if(WC(e))return"Webos";if(cy(e))return"Safari";if((e.includes("chrome/")||jC(e))&&!e.includes("edge/"))return"Chrome";if(BC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zC(t=It()){return/firefox\//i.test(t)}function cy(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jC(t=It()){return/crios\//i.test(t)}function VC(t=It()){return/iemobile/i.test(t)}function BC(t=It()){return/android/i.test(t)}function HC(t=It()){return/blackberry/i.test(t)}function WC(t=It()){return/webos/i.test(t)}function Gh(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aL(t=It()){var e;return Gh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lL(){return g2()&&document.documentMode===10}function qC(t=It()){return Gh(t)||BC(t)||WC(t)||HC(t)||/windows phone/i.test(t)||VC(t)}function uL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function KC(t,e=[]){let n;switch(t){case"Browser":n=R1(It());break;case"Worker":n=`${R1(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${r}`}/**
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
 */class cL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class hL{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A1(this),this.idTokenSubscription=new A1(this),this.beforeStateQueue=new cL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DC,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Nc(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Cl(t){return Ae(t)}class A1{constructor(e){this.auth=e,this.observer=null,this.addObserver=R2(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function dL(t,e,n){const r=Cl(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=GC(e),{host:o,port:a}=fL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||pL()}function GC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fL(t){const e=GC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:P1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:P1(o)}}}function P1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function mL(t,e){return lo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gL(t,e){return kl(t,"POST","/v1/accounts:signInWithPassword",El(t,e))}/**
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
 */async function yL(t,e){return kl(t,"POST","/v1/accounts:signInWithEmailLink",El(t,e))}async function vL(t,e){return kl(t,"POST","/v1/accounts:signInWithEmailLink",El(t,e))}/**
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
 */class Da extends hy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Da(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Da(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return gL(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yL(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return mL(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vL(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cs(t,e){return kl(t,"POST","/v1/accounts:signInWithIdp",El(t,e))}/**
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
 */const wL="http://localhost";class Di extends hy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=oy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Di(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:wL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rl(n)}return e}}/**
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
 */function _L(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SL(t){const e=$o(No(t)).link,n=e?$o(No(e)).deep_link_id:null,r=$o(No(t)).deep_link_id;return(r?$o(No(r)).link:null)||r||n||e||t}class dy{constructor(e){var n,r,i,s,o,a;const l=$o(No(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=_L((i=l.mode)!==null&&i!==void 0?i:null);W(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=SL(e);try{return new dy(n)}catch{return null}}}/**
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
 */class uo{constructor(){this.providerId=uo.PROVIDER_ID}static credential(e,n){return Da._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dy.parseLink(n);return W(r,"argument-error"),Da._fromEmailAndCode(e,r.code,r.tenantId)}}uo.PROVIDER_ID="password";uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class QC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tl extends QC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tr extends Tl{constructor(){super("facebook.com")}static credential(e){return Di._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
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
 */class Ir extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Di._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
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
 */class br extends Tl{constructor(){super("github.com")}static credential(e){return Di._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.GITHUB_SIGN_IN_METHOD="github.com";br.PROVIDER_ID="github.com";/**
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
 */class xr extends Tl{constructor(){super("twitter.com")}static credential(e,n){return Di._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
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
 */async function EL(t,e){return kl(t,"POST","/v1/accounts:signUp",El(t,e))}/**
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
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Si._fromIdTokenResponse(e,r,i),o=$1(r);return new Oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$1(r);return new Oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Dc extends qn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Dc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Dc(e,n,r,i)}}function YC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Dc._fromErrorAndOperation(t,s,e,r):s})}async function kL(t,e,n=!1){const r=await qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",r)}/**
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
 */async function CL(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await qs(t,YC(i,s,e,t),n);W(o.idToken,i,"internal-error");const a=uy(o.idToken);W(a,i,"internal-error");const{sub:l}=a;return W(t.uid===l,i,"user-mismatch"),Oi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Tn(i,"user-mismatch"),o}}/**
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
 */async function XC(t,e,n=!1){const r="signIn",i=await YC(t,r,e),s=await Oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function TL(t,e){return XC(Cl(t),e)}async function IL(t,e,n){const r=Cl(t),i=await EL(r,{returnSecureToken:!0,email:e,password:n}),s=await Oi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function bL(t,e,n){return TL(Ae(t),uo.credential(e,n))}/**
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
 */async function xL(t,e){return lo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function RL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ae(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qs(r,xL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function AL(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function PL(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function $L(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}function NL(t){return Ae(t).signOut()}const Oc="__sak";/**
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
 */class JC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oc,"1"),this.storage.removeItem(Oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function DL(){const t=It();return cy(t)||Gh(t)}const OL=1e3,LL=10;class ZC extends JC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DL()&&uL(),this.fallbackToPolling=qC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZC.type="LOCAL";const ML=ZC;/**
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
 */class eT extends JC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eT.type="SESSION";const tT=eT;/**
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
 */function UL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await UL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qh.receivers=[];/**
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
 */function fy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */let FL=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=fy("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};/**
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
 */function Bn(){return window}function zL(t){Bn().location.href=t}/**
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
 */function nT(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function jL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BL(){return nT()?self:null}/**
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
 */const rT="firebaseLocalStorageDb",HL=1,Lc="firebaseLocalStorage",iT="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yh(t,e){return t.transaction([Lc],e?"readwrite":"readonly").objectStore(Lc)}function WL(){const t=indexedDB.deleteDatabase(rT);return new Il(t).toPromise()}function Xp(){const t=indexedDB.open(rT,HL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lc,{keyPath:iT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lc)?e(r):(r.close(),await WL(),e(await Xp()))})})}async function N1(t,e,n){const r=Yh(t,!0).put({[iT]:e,value:n});return new Il(r).toPromise()}async function qL(t,e){const n=Yh(t,!1).get(e),r=await new Il(n).toPromise();return r===void 0?null:r.value}function D1(t,e){const n=Yh(t,!0).delete(e);return new Il(n).toPromise()}const KL=800,GL=3;class sT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qh._getInstance(BL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jL(),!this.activeServiceWorker)return;this.sender=new FL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xp();return await N1(e,Oc,"1"),await D1(e,Oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>N1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>D1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yh(i,!1).getAll();return new Il(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sT.type="LOCAL";const QL=sT;/**
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
 */function YL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function XL(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YL().appendChild(r)})}function JL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Sl(3e4,6e4);/**
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
 */function ZL(t,e){return e?er(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class py extends hy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eM(t){return XC(t.auth,new py(t),t.bypassAuthState)}function tM(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),CL(n,new py(t),t.bypassAuthState)}async function nM(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),kL(n,new py(t),t.bypassAuthState)}/**
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
 */class oT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eM;case"linkViaPopup":case"linkViaRedirect":return nM;case"reauthViaPopup":case"reauthViaRedirect":return tM;default:Tn(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rM=new Sl(2e3,1e4);class ps extends oT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=fy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,rM.get())};e()}}ps.currentPopupAction=null;/**
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
 */const iM="pendingRedirect",Au=new Map;class sM extends oT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const r=await oM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oM(t,e){const n=uM(e),r=lM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function aM(t,e){Au.set(t._key(),e)}function lM(t){return er(t._redirectPersistence)}function uM(t){return Ru(iM,t.config.apiKey,t.name)}async function cM(t,e,n=!1){const r=Cl(t),i=ZL(r,e),o=await new sM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hM=10*60*1e3;class dM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hM&&this.cachedEventUids.clear(),this.cachedEventUids.has(O1(e))}saveEventToCache(e){this.cachedEventUids.add(O1(e)),this.lastProcessedEventTime=Date.now()}}function O1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aT(t);default:return!1}}/**
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
 */async function pM(t,e={}){return lo(t,"GET","/v1/projects",e)}/**
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
 */const mM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gM=/^https?/;async function yM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pM(t);for(const n of e)try{if(vM(n))return}catch{}Tn(t,"unauthorized-domain")}function vM(t){const e=Yp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gM.test(n))return!1;if(mM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wM=new Sl(3e4,6e4);function L1(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _M(t){return new Promise((e,n)=>{var r,i,s;function o(){L1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L1(),n(Vn(t,"network-request-failed"))},timeout:wM.get()})}if(!((i=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bn().gapi)===null||s===void 0)&&s.load)o();else{const a=JL("iframefcb");return Bn()[a]=()=>{gapi.load?o():n(Vn(t,"network-request-failed"))},XL(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function SM(t){return Pu=Pu||_M(t),Pu}/**
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
 */const EM=new Sl(5e3,15e3),kM="__/auth/iframe",CM="emulator/auth/iframe",TM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bM(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ly(e,CM):`https://${t.config.authDomain}/${kM}`,r={apiKey:e.apiKey,appName:t.name,v:eo},i=IM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${rl(r).slice(1)}`}async function xM(t){const e=await SM(t),n=Bn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:bM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vn(t,"network-request-failed"),a=Bn().setTimeout(()=>{s(o)},EM.get());function l(){Bn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const RM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AM=500,PM=600,$M="_blank",NM="http://localhost";class M1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DM(t,e,n,r=AM,i=PM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},RM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=It().toLowerCase();n&&(a=jC(u)?$M:n),zC(u)&&(e=e||NM,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[y,g])=>`${d}${y}=${g},`,"");if(aL(u)&&a!=="_self")return OM(e||"",a),new M1(null);const h=window.open(e||"",a,c);W(h,t,"popup-blocked");try{h.focus()}catch{}return new M1(h)}function OM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const LM="__/auth/handler",MM="emulator/auth/handler";function U1(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:eo,eventId:i};if(e instanceof QC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",x2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Tl){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${UM(t)}?${rl(a).slice(1)}`}function UM({config:t}){return t.emulator?ly(t,MM):`https://${t.authDomain}/${LM}`}/**
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
 */const Jd="webStorageSupport";class FM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tT,this._completeRedirectFn=cM,this._overrideRedirectResult=aM}async _openPopup(e,n,r,i){var s;mr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=U1(e,n,r,Yp(),i);return DM(e,o,fy())}async _openRedirect(e,n,r,i){return await this._originValidation(e),zL(U1(e,n,r,Yp(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xM(e),r=new dM(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jd,{type:Jd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jd];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qC()||cy()||Gh()}}const zM=FM;var F1="@firebase/auth",z1="0.20.10";/**
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
 */class jM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function BM(t){Ai(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{W(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KC(t)},c=new hL(a,l,u);return HO(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ai(new Qr("auth-internal",e=>{const n=Cl(e.getProvider("auth").getImmediate());return(r=>new jM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(F1,z1,VM(t)),zn(F1,z1,"esm2017")}/**
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
 */const HM=5*60,WM=dE("authIdTokenMaxAge")||HM;let j1=null;const qM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WM)return;const i=n==null?void 0:n.token;j1!==i&&(j1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function KM(t=cg()){const e=yh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BO(t,{popupRedirectResolver:zM,persistence:[QL,ML,tT]}),r=dE("authTokenSyncURL");if(r){const s=qM(r);PL(n,s,()=>s(n.currentUser)),AL(n,o=>s(o))}const i=cE("auth");return i&&dL(n,`http://${i}`),n}BM("Browser");var GM="firebase",QM="9.12.1";/**
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
 */zn(GM,QM,"app");/**
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
 */const lT="firebasestorage.googleapis.com",uT="storageBucket",YM=2*60*1e3,XM=10*60*1e3,JM=1e3;/**
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
 */class Ue extends qn{constructor(e,n,r=0){super(Zd(e),`Firebase Storage: ${n} (${Zd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Zd(t){return"storage/"+t}function my(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue("unknown",t)}function ZM(t){return new Ue("object-not-found","Object '"+t+"' does not exist.")}function e3(t){return new Ue("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function t3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue("unauthenticated",t)}function n3(){return new Ue("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function r3(t){return new Ue("unauthorized","User does not have permission to access '"+t+"'.")}function cT(){return new Ue("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function hT(){return new Ue("canceled","User canceled the upload/download.")}function i3(t){return new Ue("invalid-url","Invalid URL '"+t+"'.")}function s3(t){return new Ue("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function o3(){return new Ue("no-default-bucket","No default bucket found. Did you set the '"+uT+"' property when initializing the app?")}function dT(){return new Ue("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function a3(){return new Ue("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function l3(){return new Ue("no-download-url","The given file does not have any download URLs.")}function Jp(t){return new Ue("invalid-argument",t)}function fT(){return new Ue("app-deleted","The Firebase app was deleted.")}function u3(t){return new Ue("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ea(t,e){return new Ue("invalid-format","String does not match format '"+t+"': "+e)}function Co(t){throw new Ue("internal-error","Internal error: "+t)}/**
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
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(r.path==="")return r;throw s3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",y=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},m=n===lT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",p=new RegExp(`^https?://${m}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:y,indices:g,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<v.length;_++){const k=v[_],b=k.regex.exec(e);if(b){const T=b[k.indices.bucket];let P=b[k.indices.path];P||(P=""),r=new Qt(T,P),k.postModify(r);break}}if(r==null)throw i3(e);return r}}class c3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function h3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(y,l())},w)}function d(){s&&clearTimeout(s)}function y(w,...p){if(u){d();return}if(w){d(),c.call(null,w,...p);return}if(l()||o){d(),c.call(null,w,...p);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let g=!1;function m(w){g||(g=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function d3(t){t(!1)}/**
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
 */function f3(t){return t!==void 0}function p3(t){return typeof t=="function"}function m3(t){return typeof t=="object"&&!Array.isArray(t)}function Xh(t){return typeof t=="string"||t instanceof String}function V1(t){return gy()&&t instanceof Blob}function gy(){return typeof Blob<"u"}function B1(t,e,n,r){if(r<e)throw Jp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function bl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function pT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Ei;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ei||(Ei={}));/**
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
 */function mT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class g3{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,g)=>{this.resolve_=y,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ou(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ei.NO_ERROR,l=s.getStatus();if((!a||mT(l,this.additionalRetryCodes_))&&this.retry){const c=s.getErrorCode()===Ei.ABORT;r(!1,new ou(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ou(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());f3(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=my();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?fT():hT();o(l)}else{const l=cT();o(l)}};this.canceled_?n(!1,new ou(!1,null,!0)):this.backoffId_=h3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&d3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ou{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function y3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function v3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function w3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function S3(t,e,n,r,i,s,o=!0){const a=pT(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return w3(u,e),y3(u,n),v3(u,s),_3(u,r),new g3(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function E3(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function k3(...t){const e=E3();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(gy())return new Blob(t);throw new Ue("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function C3(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function T3(t){return atob(t)}/**
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
 */const Mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ef{constructor(e,n){this.data=e,this.contentType=n||null}}function I3(t,e){switch(t){case Mn.RAW:return new ef(gT(e));case Mn.BASE64:case Mn.BASE64URL:return new ef(yT(t,e));case Mn.DATA_URL:return new ef(x3(e),R3(e))}throw my()}function gT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function b3(t){let e;try{e=decodeURIComponent(t)}catch{throw ea(Mn.DATA_URL,"Malformed data URL.")}return gT(e)}function yT(t,e){switch(t){case Mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ea(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ea(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=T3(e)}catch{throw ea(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class vT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ea(Mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=A3(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function x3(t){const e=new vT(t);return e.base64?yT(Mn.BASE64,e.rest):b3(e.rest)}function R3(t){return new vT(t).contentType}function A3(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Rr{constructor(e,n){let r=0,i="";V1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(V1(this.data_)){const r=this.data_,i=C3(r,e,n);return i===null?null:new Rr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Rr(r,!0)}}static getBlob(...e){if(gy()){const n=e.map(r=>r instanceof Rr?r.data_:r);return new Rr(k3.apply(null,n))}else{const n=e.map(o=>Xh(o)?I3(Mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Rr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function wT(t){let e;try{e=JSON.parse(t)}catch{return null}return m3(e)?e:null}/**
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
 */function P3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $3(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function _T(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function N3(t,e){return e}class At{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||N3}}let au=null;function D3(t){return!Xh(t)||t.length<2?t:_T(t)}function ST(){if(au)return au;const t=[];t.push(new At("bucket")),t.push(new At("generation")),t.push(new At("metageneration")),t.push(new At("name","fullPath",!0));function e(s,o){return D3(o)}const n=new At("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new At("size");return i.xform=r,t.push(i),t.push(new At("timeCreated")),t.push(new At("updated")),t.push(new At("md5Hash",null,!0)),t.push(new At("cacheControl",null,!0)),t.push(new At("contentDisposition",null,!0)),t.push(new At("contentEncoding",null,!0)),t.push(new At("contentLanguage",null,!0)),t.push(new At("contentType",null,!0)),t.push(new At("metadata","customMetadata",!0)),au=t,au}function O3(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Qt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function L3(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return O3(r,t),r}function ET(t,e,n){const r=wT(e);return r===null?null:L3(t,r,n)}function M3(t,e,n,r){const i=wT(e);if(i===null||!Xh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),y=bl(d,n,r),g=pT({alt:"media",token:u});return y+g})[0]}function kT(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class co{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ir(t){if(!t)throw my()}function yy(t,e){function n(r,i){const s=ET(t,i,e);return ir(s!==null),s}return n}function U3(t,e){function n(r,i){const s=ET(t,i,e);return ir(s!==null),M3(s,i,t.host,t._protocol)}return n}function xl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=n3():i=t3():n.getStatus()===402?i=e3(t.bucket):n.getStatus()===403?i=r3(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function CT(t){const e=xl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=ZM(t.path)),s.serverResponse=i.serverResponse,s}return n}function F3(t,e,n){const r=e.fullServerUrl(),i=bl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new co(i,s,yy(t,n),o);return a.errorHandler=CT(e),a}function z3(t,e,n){const r=e.fullServerUrl(),i=bl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new co(i,s,U3(t,n),o);return a.errorHandler=CT(e),a}function j3(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function TT(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=j3(null,e)),r}function V3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let _=0;_<2;_++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=TT(e,r,i),c=kT(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",y=Rr.getBlob(h,r,d);if(y===null)throw dT();const g={name:u.fullPath},m=bl(s,t.host,t._protocol),w="POST",p=t.maxUploadRetryTime,f=new co(m,w,yy(t,n),p);return f.urlParams=g,f.headers=o,f.body=y.uploadData(),f.errorHandler=xl(e),f}class Mc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function vy(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{ir(!1)}return ir(!!n&&(e||["active"]).indexOf(n)!==-1),n}function B3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=TT(e,r,i),a={name:o.fullPath},l=bl(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=kT(o,n),d=t.maxUploadRetryTime;function y(m){vy(m);let w;try{w=m.getResponseHeader("X-Goog-Upload-URL")}catch{ir(!1)}return ir(Xh(w)),w}const g=new co(l,u,y,d);return g.urlParams=a,g.headers=c,g.body=h,g.errorHandler=xl(e),g}function H3(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=vy(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ir(!1)}h||ir(!1);const d=Number(h);return ir(!isNaN(d)),new Mc(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new co(n,o,s,a);return l.headers=i,l.errorHandler=xl(e),l}const H1=256*1024;function W3(t,e,n,r,i,s,o,a){const l=new Mc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw a3();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let y="";c===0?y="finalize":u===c?y="upload, finalize":y="upload";const g={"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":`${l.current}`},m=r.slice(h,d);if(m===null)throw dT();function w(_,k){const b=vy(_,["active","final"]),T=l.current+c,P=r.size();let q;return b==="final"?q=yy(e,s)(_,k):q=null,new Mc(T,P,b==="final",q)}const p="POST",f=e.maxUploadRetryTime,v=new co(n,p,w,f);return v.headers=g,v.body=m.uploadData(),v.progressCallback=a||null,v.errorHandler=xl(t),v}const Ut={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function tf(t){switch(t){case"running":case"pausing":case"canceling":return Ut.RUNNING;case"paused":return Ut.PAUSED;case"success":return Ut.SUCCESS;case"canceled":return Ut.CANCELED;case"error":return Ut.ERROR;default:return Ut.ERROR}}/**
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
 */class q3{constructor(e,n,r){if(p3(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function qi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class K3{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ei.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ei.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ei.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Co("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Co("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Co("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Co("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Co("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class G3 extends K3{initXhr(){this.xhr_.responseType="text"}}function Ji(){return new G3}/**
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
 */class Q3{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=ST(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(mT(i.status,[]))if(s)i=cT();else{this.sleepTime=Math.max(this.sleepTime*2,JM),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=B3(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ji,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=H3(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Ji,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=H1*this._chunkMultiplier,n=new Mc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=W3(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Ji,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){H1*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=F3(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Ji,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=V3(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ji,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=hT(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=tf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new q3(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(tf(this._state)){case Ut.SUCCESS:qi(this._resolve.bind(null,this.snapshot))();break;case Ut.CANCELED:case Ut.ERROR:const n=this._reject;qi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(tf(this._state)){case Ut.RUNNING:case Ut.PAUSED:e.next&&qi(e.next.bind(e,this.snapshot))();break;case Ut.SUCCESS:e.complete&&qi(e.complete.bind(e))();break;case Ut.CANCELED:case Ut.ERROR:e.error&&qi(e.error.bind(e,this._error))();break;default:e.error&&qi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Li{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Li(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _T(this._location.path)}get storage(){return this._service}get parent(){const e=P3(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new Li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw u3(e)}}function Y3(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Q3(t,new Rr(e),n)}function X3(t){t._throwIfRoot("getDownloadURL");const e=z3(t.storage,t._location,ST());return t.storage.makeRequestWithTokens(e,Ji).then(n=>{if(n===null)throw l3();return n})}function J3(t,e){const n=$3(t._location.path,e),r=new Qt(t._location.bucket,n);return new Li(t.storage,r)}/**
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
 */function Z3(t){return/^[A-Za-z]+:\/\//.test(t)}function e4(t,e){return new Li(t,e)}function IT(t,e){if(t instanceof wy){const n=t;if(n._bucket==null)throw o3();const r=new Li(n,n._bucket);return e!=null?IT(r,e):r}else return e!==void 0?J3(t,e):t}function t4(t,e){if(e&&Z3(e)){if(t instanceof wy)return e4(t,e);throw Jp("To use ref(service, url), the first argument must be a Storage instance.")}else return IT(t,e)}function W1(t,e){const n=e==null?void 0:e[uT];return n==null?null:Qt.makeFromBucketSpec(n,t)}function n4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:fE(i,t.app.options.projectId))}class wy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=lT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YM,this._maxUploadRetryTime=XM,this._requests=new Set,i!=null?this._bucket=Qt.makeFromBucketSpec(i,this._host):this._bucket=W1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=W1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){B1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){B1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Li(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new c3(fT());{const o=S3(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const q1="@firebase/storage",K1="0.9.12";/**
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
 */const bT="storage";function r4(t,e,n){return t=Ae(t),Y3(t,e,n)}function i4(t){return t=Ae(t),X3(t)}function s4(t,e){return t=Ae(t),t4(t,e)}function o4(t=cg(),e){t=Ae(t);const r=yh(t,bT).getImmediate({identifier:e}),i=hE("storage");return i&&a4(r,...i),r}function a4(t,e,n,r={}){n4(t,e,n,r)}function l4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new wy(n,r,i,e,eo)}function u4(){Ai(new Qr(bT,l4,"PUBLIC").setMultipleInstances(!0)),zn(q1,K1,""),zn(q1,K1,"esm2017")}u4();const c4={apiKey:"AIzaSyBjsYLrkOqjUQEIrKTNbrwyJam-rpM2_YY",authDomain:"chat-a51c7.firebaseapp.com",projectId:"chat-a51c7",storageBucket:"chat-a51c7.appspot.com",messagingSenderId:"1038905275687",appId:"1:1038905275687:web:aa4cd4bc48db5c263c2502"};gE(c4);const Jh=KM(),h4=o4(),hn=wO(),yr=S.createContext({}),d4=({children:t})=>{const[e,n]=S.useState(null),[r,i]=S.useState(null);return S.useEffect(()=>{const s=$L(Jh,o=>{o&&n(o),i(!!o)});return()=>{s()}},[]),C(yr.Provider,{value:{currentUser:e,isAuthorized:r},children:t})};var _y={},en={},f4={get exports(){return en},set exports(t){en=t}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(f4);var nf={};function _e(){return _e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_e.apply(this,arguments)}function lu(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function sr(t,e,n={clone:!0}){const r=n.clone?_e({},t):t;return lu(t)&&lu(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(lu(e[i])&&i in t&&lu(t[i])?r[i]=sr(t[i],e[i],n):r[i]=e[i])}),r}function Ks(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function or(t){if(typeof t!="string")throw new Error(Ks(7));return t.charAt(0).toUpperCase()+t.slice(1)}function p4(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function m4(t,e=166){let n;function r(...i){const s=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(s,e)}return r.clear=()=>{clearTimeout(n)},r}function g4(t,e){return()=>null}function y4(t,e){return S.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}function xT(t){return t&&t.ownerDocument||document}function v4(t){return xT(t).defaultView||window}function w4(t,e){return()=>null}function RT(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const _4=typeof window<"u"?S.useLayoutEffect:S.useEffect,AT=_4;let G1=0;function S4(t){const[e,n]=S.useState(t),r=t||e;return S.useEffect(()=>{e==null&&(G1+=1,n(`mui-${G1}`))},[e]),r}const Q1=Is["useId"];function E4(t){if(Q1!==void 0){const e=Q1();return t??e}return S4(t)}function k4(t,e,n,r,i){return null}function C4({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=S.useRef(t!==void 0),[s,o]=S.useState(e),a=i?t:s,l=S.useCallback(u=>{i||o(u)},[]);return[a,l]}function T4(t){const e=S.useRef(t);return AT(()=>{e.current=t}),S.useCallback((...n)=>(0,e.current)(...n),[])}function I4(...t){return S.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{RT(n,e)})},t)}let Zh=!0,Zp=!1,Y1;const b4={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function x4(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&b4[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function R4(t){t.metaKey||t.altKey||t.ctrlKey||(Zh=!0)}function rf(){Zh=!1}function A4(){this.visibilityState==="hidden"&&Zp&&(Zh=!0)}function P4(t){t.addEventListener("keydown",R4,!0),t.addEventListener("mousedown",rf,!0),t.addEventListener("pointerdown",rf,!0),t.addEventListener("touchstart",rf,!0),t.addEventListener("visibilitychange",A4,!0)}function $4(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return Zh||x4(e)}function N4(){const t=S.useCallback(i=>{i!=null&&P4(i.ownerDocument)},[]),e=S.useRef(!1);function n(){return e.current?(Zp=!0,window.clearTimeout(Y1),Y1=window.setTimeout(()=>{Zp=!1},100),e.current=!1,!0):!1}function r(i){return $4(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function D4(t,e){const n=_e({},e);return Object.keys(t).forEach(r=>{n[r]===void 0&&(n[r]=t[r])}),n}function O4(t,e,n){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((s,o)=>(o&&(s.push(e(o)),n&&n[o]&&s.push(n[o])),s),[]).join(" ")}),r}const X1=t=>t,L4=()=>{let t=X1;return{configure(e){t=e},generate(e){return t(e)},reset(){t=X1}}},M4=L4(),PT=M4,U4={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function $T(t,e,n="Mui"){const r=U4[e];return r?`${n}-${r}`:`${PT.generate(t)}-${e}`}function F4(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=$T(t,i,n)}),r}function kn(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function NT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=NT(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function z4(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=NT(t))&&(r&&(r+=" "),r+=e);return r}function j4(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function V4(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var B4=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(V4(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=j4(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),vt="-ms-",Uc="-moz-",le="-webkit-",DT="comm",Sy="rule",Ey="decl",H4="@import",OT="@keyframes",W4=Math.abs,ed=String.fromCharCode,q4=Object.assign;function K4(t,e){return(((e<<2^Ft(t,0))<<2^Ft(t,1))<<2^Ft(t,2))<<2^Ft(t,3)}function LT(t){return t.trim()}function G4(t,e){return(t=e.exec(t))?t[0]:t}function fe(t,e,n){return t.replace(e,n)}function em(t,e){return t.indexOf(e)}function Ft(t,e){return t.charCodeAt(e)|0}function Oa(t,e,n){return t.slice(e,n)}function $n(t){return t.length}function ky(t){return t.length}function uu(t,e){return e.push(t),t}function Q4(t,e){return t.map(e).join("")}var td=1,Gs=1,MT=0,qt=0,We=0,ho="";function nd(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:td,column:Gs,length:o,return:""}}function To(t,e){return q4(nd("",null,null,"",null,null,0),t,{length:-t.length},e)}function Y4(){return We}function X4(){return We=qt>0?Ft(ho,--qt):0,Gs--,We===10&&(Gs=1,td--),We}function Xt(){return We=qt<MT?Ft(ho,qt++):0,Gs++,We===10&&(Gs=1,td++),We}function Hn(){return Ft(ho,qt)}function $u(){return qt}function Rl(t,e){return Oa(ho,t,e)}function La(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function UT(t){return td=Gs=1,MT=$n(ho=t),qt=0,[]}function FT(t){return ho="",t}function Nu(t){return LT(Rl(qt-1,tm(t===91?t+2:t===40?t+1:t)))}function J4(t){for(;(We=Hn())&&We<33;)Xt();return La(t)>2||La(We)>3?"":" "}function Z4(t,e){for(;--e&&Xt()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Rl(t,$u()+(e<6&&Hn()==32&&Xt()==32))}function tm(t){for(;Xt();)switch(We){case t:return qt;case 34:case 39:t!==34&&t!==39&&tm(We);break;case 40:t===41&&tm(t);break;case 92:Xt();break}return qt}function e5(t,e){for(;Xt()&&t+We!==47+10;)if(t+We===42+42&&Hn()===47)break;return"/*"+Rl(e,qt-1)+"*"+ed(t===47?t:Xt())}function t5(t){for(;!La(Hn());)Xt();return Rl(t,qt)}function n5(t){return FT(Du("",null,null,null,[""],t=UT(t),0,[0],t))}function Du(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,y=0,g=0,m=1,w=1,p=1,f=0,v="",_=i,k=s,b=r,T=v;w;)switch(g=f,f=Xt()){case 40:if(g!=108&&T.charCodeAt(h-1)==58){em(T+=fe(Nu(f),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:T+=Nu(f);break;case 9:case 10:case 13:case 32:T+=J4(g);break;case 92:T+=Z4($u()-1,7);continue;case 47:switch(Hn()){case 42:case 47:uu(r5(e5(Xt(),$u()),e,n),l);break;default:T+="/"}break;case 123*m:a[u++]=$n(T)*p;case 125*m:case 59:case 0:switch(f){case 0:case 125:w=0;case 59+c:y>0&&$n(T)-h&&uu(y>32?Z1(T+";",r,n,h-1):Z1(fe(T," ","")+";",r,n,h-2),l);break;case 59:T+=";";default:if(uu(b=J1(T,e,n,u,c,i,a,v,_=[],k=[],h),s),f===123)if(c===0)Du(T,e,b,b,_,s,h,a,k);else switch(d){case 100:case 109:case 115:Du(t,b,b,r&&uu(J1(t,b,b,0,0,i,a,v,i,_=[],h),k),i,k,h,a,r?_:k);break;default:Du(T,b,b,b,[""],k,0,a,k)}}u=c=y=0,m=p=1,v=T="",h=o;break;case 58:h=1+$n(T),y=g;default:if(m<1){if(f==123)--m;else if(f==125&&m++==0&&X4()==125)continue}switch(T+=ed(f),f*m){case 38:p=c>0?1:(T+="\f",-1);break;case 44:a[u++]=($n(T)-1)*p,p=1;break;case 64:Hn()===45&&(T+=Nu(Xt())),d=Hn(),c=h=$n(v=T+=t5($u())),f++;break;case 45:g===45&&$n(T)==2&&(m=0)}}return s}function J1(t,e,n,r,i,s,o,a,l,u,c){for(var h=i-1,d=i===0?s:[""],y=ky(d),g=0,m=0,w=0;g<r;++g)for(var p=0,f=Oa(t,h+1,h=W4(m=o[g])),v=t;p<y;++p)(v=LT(m>0?d[p]+" "+f:fe(f,/&\f/g,d[p])))&&(l[w++]=v);return nd(t,e,n,i===0?Sy:a,l,u,c)}function r5(t,e,n){return nd(t,e,n,DT,ed(Y4()),Oa(t,2,-2),0)}function Z1(t,e,n,r){return nd(t,e,n,Ey,Oa(t,0,r),Oa(t,r+1,-1),r)}function zT(t,e){switch(K4(t,e)){case 5103:return le+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return le+t+Uc+t+vt+t+t;case 6828:case 4268:return le+t+vt+t+t;case 6165:return le+t+vt+"flex-"+t+t;case 5187:return le+t+fe(t,/(\w+).+(:[^]+)/,le+"box-$1$2"+vt+"flex-$1$2")+t;case 5443:return le+t+vt+"flex-item-"+fe(t,/flex-|-self/,"")+t;case 4675:return le+t+vt+"flex-line-pack"+fe(t,/align-content|flex-|-self/,"")+t;case 5548:return le+t+vt+fe(t,"shrink","negative")+t;case 5292:return le+t+vt+fe(t,"basis","preferred-size")+t;case 6060:return le+"box-"+fe(t,"-grow","")+le+t+vt+fe(t,"grow","positive")+t;case 4554:return le+fe(t,/([^-])(transform)/g,"$1"+le+"$2")+t;case 6187:return fe(fe(fe(t,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),t,"")+t;case 5495:case 3959:return fe(t,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return fe(fe(t,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+t+t;case 4095:case 3583:case 4068:case 2532:return fe(t,/(.+)-inline(.+)/,le+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($n(t)-1-e>6)switch(Ft(t,e+1)){case 109:if(Ft(t,e+4)!==45)break;case 102:return fe(t,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+Uc+(Ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~em(t,"stretch")?zT(fe(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Ft(t,e+1)!==115)break;case 6444:switch(Ft(t,$n(t)-3-(~em(t,"!important")&&10))){case 107:return fe(t,":",":"+le)+t;case 101:return fe(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+le+(Ft(t,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+vt+"$2box$3")+t}break;case 5936:switch(Ft(t,e+11)){case 114:return le+t+vt+fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return le+t+vt+fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return le+t+vt+fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return le+t+vt+t+t}return t}function Ts(t,e){for(var n="",r=ky(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function i5(t,e,n,r){switch(t.type){case H4:case Ey:return t.return=t.return||t.value;case DT:return"";case OT:return t.return=t.value+"{"+Ts(t.children,r)+"}";case Sy:t.value=t.props.join(",")}return $n(n=Ts(t.children,r))?t.return=t.value+"{"+n+"}":""}function s5(t){var e=ky(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function o5(t){return function(e){e.root||(e=e.return)&&t(e)}}function a5(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Ey:t.return=zT(t.value,t.length);break;case OT:return Ts([To(t,{value:fe(t.value,"@","@"+le)})],r);case Sy:if(t.length)return Q4(t.props,function(i){switch(G4(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ts([To(t,{props:[fe(i,/:(read-\w+)/,":"+Uc+"$1")]})],r);case"::placeholder":return Ts([To(t,{props:[fe(i,/:(plac\w+)/,":"+le+"input-$1")]}),To(t,{props:[fe(i,/:(plac\w+)/,":"+Uc+"$1")]}),To(t,{props:[fe(i,/:(plac\w+)/,vt+"input-$1")]})],r)}return""})}}var l5=function(e,n,r){for(var i=0,s=0;i=s,s=Hn(),i===38&&s===12&&(n[r]=1),!La(s);)Xt();return Rl(e,qt)},u5=function(e,n){var r=-1,i=44;do switch(La(i)){case 0:i===38&&Hn()===12&&(n[r]=1),e[r]+=l5(qt-1,n,r);break;case 2:e[r]+=Nu(i);break;case 4:if(i===44){e[++r]=Hn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=ed(i)}while(i=Xt());return e},c5=function(e,n){return FT(u5(UT(e),n))},ew=new WeakMap,h5=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!ew.get(r))&&!i){ew.set(e,!0);for(var s=[],o=c5(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},d5=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}},f5=[a5],p5=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var w=m.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=e.stylisPlugins||f5,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var w=m.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)s[w[p]]=!0;a.push(m)});var l,u=[h5,d5];{var c,h=[i5,o5(function(m){c.insert(m)})],d=s5(u.concat(i,h)),y=function(w){return Ts(n5(w),d)};l=function(w,p,f,v){c=f,y(w?w+"{"+p.styles+"}":p.styles),v&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new B4({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return g.sheet.hydrate(a),g},m5=!0;function g5(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var jT=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||m5===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},y5=function(e,n,r){jT(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function v5(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var w5={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_5=/[A-Z]|^ms/g,S5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,VT=function(e){return e.charCodeAt(1)===45},tw=function(e){return e!=null&&typeof e!="boolean"},sf=FS(function(t){return VT(t)?t:t.replace(_5,"-$&").toLowerCase()}),nw=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(S5,function(r,i,s){return Nn={name:i,styles:s,next:Nn},i})}return w5[e]!==1&&!VT(e)&&typeof n=="number"&&n!==0?n+"px":n};function Ma(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Nn={name:n.name,styles:n.styles,next:Nn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Nn={name:r.name,styles:r.styles,next:Nn},r=r.next;var i=n.styles+";";return i}return E5(t,e,n)}case"function":{if(t!==void 0){var s=Nn,o=n(t);return Nn=s,Ma(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function E5(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ma(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":tw(o)&&(r+=sf(s)+":"+nw(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)tw(o[a])&&(r+=sf(s)+":"+nw(s,o[a])+";");else{var l=Ma(t,e,o);switch(s){case"animation":case"animationName":{r+=sf(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var rw=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Nn,k5=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";Nn=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Ma(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Ma(r,n,e[a]),i&&(s+=o[a]);rw.lastIndex=0;for(var l="",u;(u=rw.exec(s))!==null;)l+="-"+u[1];var c=v5(s)+l;return{name:c,styles:s,next:Nn}},C5=function(e){return e()},T5=Is["useInsertionEffect"]?Is["useInsertionEffect"]:!1,I5=T5||C5,BT=S.createContext(typeof HTMLElement<"u"?p5({key:"css"}):null);BT.Provider;var b5=function(e){return S.forwardRef(function(n,r){var i=S.useContext(BT);return e(n,i,r)})},x5=S.createContext({}),R5=lp,A5=function(e){return e!=="theme"},iw=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?R5:A5},sw=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},P5=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return jT(n,r,i),I5(function(){return y5(n,r,i)}),null},$5=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=sw(e,n,r),l=a||iw(i),u=!l("as");return function(){var c=arguments,h=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&h.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)h.push.apply(h,c);else{h.push(c[0][0]);for(var d=c.length,y=1;y<d;y++)h.push(c[y],c[0][y])}var g=b5(function(m,w,p){var f=u&&m.as||i,v="",_=[],k=m;if(m.theme==null){k={};for(var b in m)k[b]=m[b];k.theme=S.useContext(x5)}typeof m.className=="string"?v=g5(w.registered,_,m.className):m.className!=null&&(v=m.className+" ");var T=k5(h.concat(_),w.registered,k);v+=w.key+"-"+T.name,o!==void 0&&(v+=" "+o);var P=u&&a===void 0?iw(f):l,q={};for(var O in m)u&&O==="as"||P(O)&&(q[O]=m[O]);return q.className=v,q.ref=p,S.createElement(S.Fragment,null,S.createElement(P5,{cache:w,serialized:T,isStringTag:typeof f=="string"}),S.createElement(f,q))});return g.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=e.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=h,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(m,w){return t(m,_e({},n,w,{shouldForwardProp:sw(g,w,!0)})).apply(void 0,h)},g}},N5=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],nm=$5.bind();N5.forEach(function(t){nm[t]=nm(t)});const D5=nm;/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function O5(t,e){return D5(t,e)}const L5=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))};function ta(t,e){return e?sr(t,e,{clone:!1}):t}const Cy={xs:0,sm:600,md:900,lg:1200,xl:1536},ow={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Cy[t]}px)`};function si(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||ow;return e.reduce((o,a,l)=>(o[s.up(s.keys[l])]=n(e[l]),o),{})}if(typeof e=="object"){const s=r.breakpoints||ow;return Object.keys(e).reduce((o,a)=>{if(Object.keys(s.values||Cy).indexOf(a)!==-1){const l=s.up(a);o[l]=n(e[a],a)}else{const l=a;o[l]=e[l]}return o},{})}return n(e)}function M5(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function U5(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function Ty(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function aw(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Ty(t,n)||r,e&&(i=e(i,r)),i}function F(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],l=o.theme,u=Ty(l,r)||{};return si(o,a,h=>{let d=aw(u,i,h);return h===d&&typeof h=="string"&&(d=aw(u,i,`${e}${h==="default"?"":or(h)}`,h)),n===!1?d:{[n]:d}})};return s.propTypes={},s.filterProps=[e],s}function oi(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?ta(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function F5(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const z5={m:"margin",p:"padding"},j5={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},lw={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},V5=F5(t=>{if(t.length>2)if(lw[t])t=lw[t];else return[t];const[e,n]=t.split(""),r=z5[e],i=j5[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),B5=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],H5=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],HT=[...B5,...H5];function Al(t,e,n,r){var i;const s=(i=Ty(t,e,!1))!=null?i:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function WT(t){return Al(t,"spacing",8)}function Pl(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function W5(t,e){return n=>t.reduce((r,i)=>(r[i]=Pl(e,n),r),{})}function q5(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=V5(n),s=W5(i,r),o=t[n];return si(t,o,s)}function K5(t,e){const n=WT(t.theme);return Object.keys(t).map(r=>q5(t,e,r,n)).reduce(ta,{})}function rd(t){return K5(t,HT)}rd.propTypes={};rd.filterProps=HT;function $l(t){return typeof t!="number"?t:`${t}px solid`}const G5=F({prop:"border",themeKey:"borders",transform:$l}),Q5=F({prop:"borderTop",themeKey:"borders",transform:$l}),Y5=F({prop:"borderRight",themeKey:"borders",transform:$l}),X5=F({prop:"borderBottom",themeKey:"borders",transform:$l}),J5=F({prop:"borderLeft",themeKey:"borders",transform:$l}),Z5=F({prop:"borderColor",themeKey:"palette"}),eU=F({prop:"borderTopColor",themeKey:"palette"}),tU=F({prop:"borderRightColor",themeKey:"palette"}),nU=F({prop:"borderBottomColor",themeKey:"palette"}),rU=F({prop:"borderLeftColor",themeKey:"palette"}),Iy=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Al(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Pl(e,r)});return si(t,t.borderRadius,n)}return null};Iy.propTypes={};Iy.filterProps=["borderRadius"];const iU=oi(G5,Q5,Y5,X5,J5,Z5,eU,tU,nU,rU,Iy),qT=iU,sU=F({prop:"displayPrint",cssProperty:!1,transform:t=>({"@media print":{display:t}})}),oU=F({prop:"display"}),aU=F({prop:"overflow"}),lU=F({prop:"textOverflow"}),uU=F({prop:"visibility"}),cU=F({prop:"whiteSpace"}),KT=oi(sU,oU,aU,lU,uU,cU),hU=F({prop:"flexBasis"}),dU=F({prop:"flexDirection"}),fU=F({prop:"flexWrap"}),pU=F({prop:"justifyContent"}),mU=F({prop:"alignItems"}),gU=F({prop:"alignContent"}),yU=F({prop:"order"}),vU=F({prop:"flex"}),wU=F({prop:"flexGrow"}),_U=F({prop:"flexShrink"}),SU=F({prop:"alignSelf"}),EU=F({prop:"justifyItems"}),kU=F({prop:"justifySelf"}),CU=oi(hU,dU,fU,pU,mU,gU,yU,vU,wU,_U,SU,EU,kU),GT=CU,by=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Al(t.theme,"spacing",8),n=r=>({gap:Pl(e,r)});return si(t,t.gap,n)}return null};by.propTypes={};by.filterProps=["gap"];const xy=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Al(t.theme,"spacing",8),n=r=>({columnGap:Pl(e,r)});return si(t,t.columnGap,n)}return null};xy.propTypes={};xy.filterProps=["columnGap"];const Ry=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Al(t.theme,"spacing",8),n=r=>({rowGap:Pl(e,r)});return si(t,t.rowGap,n)}return null};Ry.propTypes={};Ry.filterProps=["rowGap"];const TU=F({prop:"gridColumn"}),IU=F({prop:"gridRow"}),bU=F({prop:"gridAutoFlow"}),xU=F({prop:"gridAutoColumns"}),RU=F({prop:"gridAutoRows"}),AU=F({prop:"gridTemplateColumns"}),PU=F({prop:"gridTemplateRows"}),$U=F({prop:"gridTemplateAreas"}),NU=F({prop:"gridArea"}),DU=oi(by,xy,Ry,TU,IU,bU,xU,RU,AU,PU,$U,NU),QT=DU;function Ay(t,e){return e==="grey"?e:t}const OU=F({prop:"color",themeKey:"palette",transform:Ay}),LU=F({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ay}),MU=F({prop:"backgroundColor",themeKey:"palette",transform:Ay}),UU=oi(OU,LU,MU),YT=UU,FU=F({prop:"position"}),zU=F({prop:"zIndex",themeKey:"zIndex"}),jU=F({prop:"top"}),VU=F({prop:"right"}),BU=F({prop:"bottom"}),HU=F({prop:"left"}),XT=oi(FU,zU,jU,VU,BU,HU),WU=F({prop:"boxShadow",themeKey:"shadows"}),JT=WU;function ai(t){return t<=1&&t!==0?`${t*100}%`:t}const qU=F({prop:"width",transform:ai}),ZT=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i,s;return{maxWidth:((r=t.theme)==null||(i=r.breakpoints)==null||(s=i.values)==null?void 0:s[n])||Cy[n]||ai(n)}};return si(t,t.maxWidth,e)}return null};ZT.filterProps=["maxWidth"];const KU=F({prop:"minWidth",transform:ai}),GU=F({prop:"height",transform:ai}),QU=F({prop:"maxHeight",transform:ai}),YU=F({prop:"minHeight",transform:ai});F({prop:"size",cssProperty:"width",transform:ai});F({prop:"size",cssProperty:"height",transform:ai});const XU=F({prop:"boxSizing"}),JU=oi(qU,ZT,KU,GU,QU,YU,XU),eI=JU,ZU=F({prop:"fontFamily",themeKey:"typography"}),eF=F({prop:"fontSize",themeKey:"typography"}),tF=F({prop:"fontStyle",themeKey:"typography"}),nF=F({prop:"fontWeight",themeKey:"typography"}),rF=F({prop:"letterSpacing"}),iF=F({prop:"textTransform"}),sF=F({prop:"lineHeight"}),oF=F({prop:"textAlign"}),aF=F({prop:"typography",cssProperty:!1,themeKey:"typography"}),lF=oi(aF,ZU,eF,tF,nF,rF,sF,oF,iF),tI=lF,uw={borders:qT.filterProps,display:KT.filterProps,flexbox:GT.filterProps,grid:QT.filterProps,positions:XT.filterProps,palette:YT.filterProps,shadows:JT.filterProps,sizing:eI.filterProps,spacing:rd.filterProps,typography:tI.filterProps},nI={borders:qT,display:KT,flexbox:GT,grid:QT,positions:XT,palette:YT,shadows:JT,sizing:eI,spacing:rd,typography:tI};Object.keys(uw).reduce((t,e)=>(uw[e].forEach(n=>{t[n]=nI[e]}),t),{});function uF(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function cF(t,e){return typeof t=="function"?t(e):t}function hF(t=nI){const e=Object.keys(t).reduce((i,s)=>(t[s].filterProps.forEach(o=>{i[o]=t[s]}),i),{});function n(i,s,o){const a={[i]:s,theme:o},l=e[i];return l?l(a):{[i]:s}}function r(i){const{sx:s,theme:o={}}=i||{};if(!s)return null;function a(l){let u=l;if(typeof l=="function")u=l(o);else if(typeof l!="object")return l;if(!u)return null;const c=M5(o.breakpoints),h=Object.keys(c);let d=c;return Object.keys(u).forEach(y=>{const g=cF(u[y],o);if(g!=null)if(typeof g=="object")if(e[y])d=ta(d,n(y,g,o));else{const m=si({theme:o},g,w=>({[y]:w}));uF(m,g)?d[y]=r({sx:g,theme:o}):d=ta(d,m)}else d=ta(d,n(y,g,o))}),U5(h,d)}return Array.isArray(s)?s.map(a):a(s)}return r}const rI=hF();rI.filterProps=["sx"];const dF=rI,fF=["values","unit","step"],pF=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>_e({},n,{[r.key]:r.val}),{})};function mF(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=kn(t,fF),s=pF(e),o=Object.keys(s);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-r/100}${n})`}function u(d,y){const g=o.indexOf(y);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(g!==-1&&typeof e[o[g]]=="number"?e[o[g]]:y)-r/100}${n})`}function c(d){return o.indexOf(d)+1<o.length?u(d,o[o.indexOf(d)+1]):a(d)}function h(d){const y=o.indexOf(d);return y===0?a(o[1]):y===o.length-1?l(o[y]):u(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return _e({keys:o,values:s,up:a,down:l,between:u,only:c,not:h,unit:n},i)}const gF={borderRadius:4},yF=gF;function vF(t=8){if(t.mui)return t;const e=WT({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}const wF=["breakpoints","palette","spacing","shape"];function Py(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=t,o=kn(t,wF),a=mF(n),l=vF(i);let u=sr({breakpoints:a,direction:"ltr",components:{},palette:_e({mode:"light"},r),spacing:l,shape:_e({},yF,s)},o);return u=e.reduce((c,h)=>sr(c,h),u),u}const _F=S.createContext(null),SF=_F;function EF(){return S.useContext(SF)}function kF(t){return Object.keys(t).length===0}function CF(t=null){const e=EF();return!e||kF(e)?t:e}const TF=Py();function IF(t=TF){return CF(t)}const bF=["variant"];function cw(t){return t.length===0}function iI(t){const{variant:e}=t,n=kn(t,bF);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=cw(r)?t[i]:or(t[i]):r+=`${cw(r)?i:or(i)}${or(t[i].toString())}`}),r}const xF=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],RF=["theme"],AF=["theme"];function Io(t){return Object.keys(t).length===0}function PF(t){return typeof t=="string"&&t.charCodeAt(0)>96}const $F=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,NF=(t,e)=>{let n=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants);const r={};return n.forEach(i=>{const s=iI(i.props);r[s]=i.style}),r},DF=(t,e,n,r)=>{var i,s;const{ownerState:o={}}=t,a=[],l=n==null||(i=n.components)==null||(s=i[r])==null?void 0:s.variants;return l&&l.forEach(u=>{let c=!0;Object.keys(u.props).forEach(h=>{o[h]!==u.props[h]&&t[h]!==u.props[h]&&(c=!1)}),c&&a.push(e[iI(u.props)])}),a};function Ou(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const OF=Py();function LF(t={}){const{defaultTheme:e=OF,rootShouldForwardProp:n=Ou,slotShouldForwardProp:r=Ou,styleFunctionSx:i=dF}=t,s=o=>{const a=Io(o.theme)?e:o.theme;return i(_e({},o,{theme:a}))};return s.__mui_systemSx=!0,(o,a={})=>{L5(o,_=>_.filter(k=>!(k!=null&&k.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:h,overridesResolver:d}=a,y=kn(a,xF),g=c!==void 0?c:u&&u!=="Root"||!1,m=h||!1;let w,p=Ou;u==="Root"?p=n:u?p=r:PF(o)&&(p=void 0);const f=O5(o,_e({shouldForwardProp:p,label:w},y)),v=(_,...k)=>{const b=k?k.map(O=>typeof O=="function"&&O.__emotion_real!==O?ce=>{let{theme:ve}=ce,De=kn(ce,RF);return O(_e({theme:Io(ve)?e:ve},De))}:O):[];let T=_;l&&d&&b.push(O=>{const ce=Io(O.theme)?e:O.theme,ve=$F(l,ce);if(ve){const De={};return Object.entries(ve).forEach(([xt,Ve])=>{De[xt]=typeof Ve=="function"?Ve(_e({},O,{theme:ce})):Ve}),d(O,De)}return null}),l&&!g&&b.push(O=>{const ce=Io(O.theme)?e:O.theme;return DF(O,NF(l,ce),ce,l)}),m||b.push(s);const P=b.length-k.length;if(Array.isArray(_)&&P>0){const O=new Array(P).fill("");T=[..._,...O],T.raw=[..._.raw,...O]}else typeof _=="function"&&_.__emotion_real!==_&&(T=O=>{let{theme:ce}=O,ve=kn(O,AF);return _(_e({theme:Io(ce)?e:ce},ve))});return f(T,...b)};return f.withConfig&&(v.withConfig=f.withConfig),v}}function MF(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:D4(e.components[n].defaultProps,r)}function UF({props:t,name:e,defaultTheme:n}){const r=IF(n);return MF({theme:r,name:e,props:t})}function sI(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function FF(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Qs(t){if(t.type)return t;if(t.charAt(0)==="#")return Qs(FF(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Ks(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Ks(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}function $y(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function zF(t){t=Qs(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(u,c=(u+n/30)%12)=>i-s*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),$y({type:a,values:l})}function hw(t){t=Qs(t);let e=t.type==="hsl"||t.type==="hsla"?Qs(zF(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function jF(t,e){const n=hw(t),r=hw(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function VF(t,e){if(t=Qs(t),e=sI(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return $y(t)}function BF(t,e){if(t=Qs(t),e=sI(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return $y(t)}function HF(t,e){return _e({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const WF={black:"#000",white:"#fff"},Ua=WF,qF={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},KF=qF,GF={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Ki=GF,QF={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Gi=QF,YF={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},bo=YF,XF={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Qi=XF,JF={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Yi=JF,ZF={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Xi=ZF,ez=["mode","contrastThreshold","tonalOffset"],dw={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ua.white,default:Ua.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},of={text:{primary:Ua.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Ua.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function fw(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=BF(t.main,i):e==="dark"&&(t.dark=VF(t.main,s)))}function tz(t="light"){return t==="dark"?{main:Qi[200],light:Qi[50],dark:Qi[400]}:{main:Qi[700],light:Qi[400],dark:Qi[800]}}function nz(t="light"){return t==="dark"?{main:Ki[200],light:Ki[50],dark:Ki[400]}:{main:Ki[500],light:Ki[300],dark:Ki[700]}}function rz(t="light"){return t==="dark"?{main:Gi[500],light:Gi[300],dark:Gi[700]}:{main:Gi[700],light:Gi[400],dark:Gi[800]}}function iz(t="light"){return t==="dark"?{main:Yi[400],light:Yi[300],dark:Yi[700]}:{main:Yi[700],light:Yi[500],dark:Yi[900]}}function sz(t="light"){return t==="dark"?{main:Xi[400],light:Xi[300],dark:Xi[700]}:{main:Xi[800],light:Xi[500],dark:Xi[900]}}function oz(t="light"){return t==="dark"?{main:bo[400],light:bo[300],dark:bo[700]}:{main:"#ed6c02",light:bo[500],dark:bo[900]}}function az(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=kn(t,ez),s=t.primary||tz(e),o=t.secondary||nz(e),a=t.error||rz(e),l=t.info||iz(e),u=t.success||sz(e),c=t.warning||oz(e);function h(m){return jF(m,of.text.primary)>=n?of.text.primary:dw.text.primary}const d=({color:m,name:w,mainShade:p=500,lightShade:f=300,darkShade:v=700})=>{if(m=_e({},m),!m.main&&m[p]&&(m.main=m[p]),!m.hasOwnProperty("main"))throw new Error(Ks(11,w?` (${w})`:"",p));if(typeof m.main!="string")throw new Error(Ks(12,w?` (${w})`:"",JSON.stringify(m.main)));return fw(m,"light",f,r),fw(m,"dark",v,r),m.contrastText||(m.contrastText=h(m.main)),m},y={dark:of,light:dw};return sr(_e({common:_e({},Ua),mode:e,primary:d({color:s,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:u,name:"success"}),grey:KF,contrastThreshold:n,getContrastText:h,augmentColor:d,tonalOffset:r},y[e]),i)}const lz=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function uz(t){return Math.round(t*1e5)/1e5}const pw={textTransform:"uppercase"},mw='"Roboto", "Helvetica", "Arial", sans-serif';function cz(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=mw,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:h}=n,d=kn(n,lz),y=i/14,g=h||(p=>`${p/u*y}rem`),m=(p,f,v,_,k)=>_e({fontFamily:r,fontWeight:p,fontSize:g(f),lineHeight:v},r===mw?{letterSpacing:`${uz(_/f)}em`}:{},k,c),w={h1:m(s,96,1.167,-1.5),h2:m(s,60,1.2,-.5),h3:m(o,48,1.167,0),h4:m(o,34,1.235,.25),h5:m(o,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(o,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(o,16,1.5,.15),body2:m(o,14,1.43,.15),button:m(a,14,1.75,.4,pw),caption:m(o,12,1.66,.4),overline:m(o,12,2.66,1,pw)};return sr(_e({htmlFontSize:u,pxToRem:g,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:l},w),d,{clone:!1})}const hz=.2,dz=.14,fz=.12;function be(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${hz})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${dz})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${fz})`].join(",")}const pz=["none",be(0,2,1,-1,0,1,1,0,0,1,3,0),be(0,3,1,-2,0,2,2,0,0,1,5,0),be(0,3,3,-2,0,3,4,0,0,1,8,0),be(0,2,4,-1,0,4,5,0,0,1,10,0),be(0,3,5,-1,0,5,8,0,0,1,14,0),be(0,3,5,-1,0,6,10,0,0,1,18,0),be(0,4,5,-2,0,7,10,1,0,2,16,1),be(0,5,5,-3,0,8,10,1,0,3,14,2),be(0,5,6,-3,0,9,12,1,0,3,16,2),be(0,6,6,-3,0,10,14,1,0,4,18,3),be(0,6,7,-4,0,11,15,1,0,4,20,3),be(0,7,8,-4,0,12,17,2,0,5,22,4),be(0,7,8,-4,0,13,19,2,0,5,24,4),be(0,7,9,-4,0,14,21,2,0,5,26,4),be(0,8,9,-5,0,15,22,2,0,6,28,5),be(0,8,10,-5,0,16,24,2,0,6,30,5),be(0,8,11,-5,0,17,26,2,0,6,32,5),be(0,9,11,-5,0,18,28,2,0,7,34,6),be(0,9,12,-6,0,19,29,2,0,7,36,6),be(0,10,13,-6,0,20,31,3,0,8,38,7),be(0,10,13,-6,0,21,33,3,0,8,40,7),be(0,10,14,-6,0,22,35,3,0,8,42,7),be(0,11,14,-7,0,23,36,3,0,9,44,8),be(0,11,15,-7,0,24,38,3,0,9,46,8)],mz=pz,gz=["duration","easing","delay"],yz={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},vz={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function gw(t){return`${Math.round(t)}ms`}function wz(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function _z(t){const e=_e({},yz,t.easing),n=_e({},vz,t.duration);return _e({getAutoHeightDuration:wz,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:l=0}=s;return kn(s,gz),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof o=="string"?o:gw(o)} ${a} ${typeof l=="string"?l:gw(l)}`).join(",")}},t,{easing:e,duration:n})}const Sz={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Ez=Sz,kz=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Cz(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=t,o=kn(t,kz);if(t.vars)throw new Error(Ks(18));const a=az(r),l=Py(t);let u=sr(l,{mixins:HF(l.breakpoints,n),palette:a,shadows:mz.slice(),typography:cz(a,s),transitions:_z(i),zIndex:_e({},Ez)});return u=sr(u,o),u=e.reduce((c,h)=>sr(c,h),u),u}const Tz=Cz(),oI=Tz;function Iz({props:t,name:e}){return UF({props:t,name:e,defaultTheme:oI})}const bz=t=>Ou(t)&&t!=="classes",xz=LF({defaultTheme:oI,rootShouldForwardProp:bz}),Rz=xz;function Az(t){return $T("MuiSvgIcon",t)}F4("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Pz=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],$z=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${or(e)}`,`fontSize${or(n)}`]};return O4(i,Az,r)},Nz=Rz("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${or(n.color)}`],e[`fontSize${or(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,s,o,a,l,u,c,h,d,y,g,m,w,p,f;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(s=i.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((o=t.typography)==null||(a=o.pxToRem)==null?void 0:a.call(o,20))||"1.25rem",medium:((l=t.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((c=t.typography)==null||(h=c.pxToRem)==null?void 0:h.call(c,35))||"2.1875rem"}[e.fontSize],color:(d=(y=(t.vars||t).palette)==null||(g=y[e.color])==null?void 0:g.main)!=null?d:{action:(m=(t.vars||t).palette)==null||(w=m.action)==null?void 0:w.active,disabled:(p=(t.vars||t).palette)==null||(f=p.action)==null?void 0:f.disabled,inherit:void 0}[e.color]}}),aI=S.forwardRef(function(e,n){const r=Iz({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:h,viewBox:d="0 0 24 24"}=r,y=kn(r,Pz),g=_e({},r,{color:o,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:d}),m={};c||(m.viewBox=d);const w=$z(g);return te(Nz,_e({as:a,className:z4(w.root,s),focusable:"false",color:u,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},m,y,{ownerState:g,children:[i,h?C("title",{children:h}):null]}))});aI.muiName="SvgIcon";const yw=aI;function Dz(t,e){function n(r,i){return C(yw,_e({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=yw.muiName,S.memo(S.forwardRef(n))}const Oz={configure:t=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),PT.configure(t)}},Lz=Object.freeze(Object.defineProperty({__proto__:null,capitalize:or,createChainedFunction:p4,createSvgIcon:Dz,debounce:m4,deprecatedPropType:g4,isMuiElement:y4,ownerDocument:xT,ownerWindow:v4,requirePropFactory:w4,setRef:RT,unstable_ClassNameGenerator:Oz,unstable_useEnhancedEffect:AT,unstable_useId:E4,unsupportedProp:k4,useControlled:C4,useEventCallback:T4,useForkRef:I4,useIsFocusVisible:N4},Symbol.toStringTag,{value:"Module"})),Mz=Tw(Lz);var vw;function bn(){return vw||(vw=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=Mz}(nf)),nf}const xn=Tw(eb);var Uz=en;Object.defineProperty(_y,"__esModule",{value:!0});var lI=_y.default=void 0,Fz=Uz(bn()),zz=xn,jz=(0,Fz.default)((0,zz.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");lI=_y.default=jz;var Ny={},Vz=en;Object.defineProperty(Ny,"__esModule",{value:!0});var uI=Ny.default=void 0,Bz=Vz(bn()),Hz=xn,Wz=(0,Bz.default)((0,Hz.jsx)("path",{fillRule:"evenodd",d:"m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"}),"HowToReg");uI=Ny.default=Wz;const Dy=A.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 50px;
`;var Oy={},qz=en;Object.defineProperty(Oy,"__esModule",{value:!0});var Ly=Oy.default=void 0,Kz=qz(bn()),Gz=xn,Qz=(0,Kz.default)((0,Gz.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");Ly=Oy.default=Qz;const af=A(Ly)`
  font-size: 2.2rem !important;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transform: scale(0.9);
  }
`,My=A.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({theme:t})=>t.primaryColor};
  letter-spacing: 0.5px;
`,Yz=A.div`
  position: relative;
  z-index: 10;
  display: flex;
  padding: 2rem 2rem 2rem 1rem;
  background-color: #fff;
  color: #bbb;
  gap: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 0.5rem #d9d9d9;
  backface-visibility: hidden;
  transition: all 0.2s;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0rem 0rem #d9d9d9;
  }

  &:has(${af}:active) {
    transform: translateY(0);
    box-shadow: 0 0.2rem 0.5rem #d9d9d9;
  }

  ${({isActive:t,theme:e})=>t&&`
     background-color: ${e.primaryColor};
     color: #fff; 
     border: 1px solid ${e.primaryColor};
     transform: translateY(0);
     box-shadow: 0 0 0 #d9d9d9;

     &:has(${af}:active) {
      box-shadow: 0 0 0 #d9d9d9;
    }

    ${My}, ${af}{
      color: #fff;
    }
    ${cI}{
      background-color: #fff;
    }
    ${hI}{
      border-top: 1px solid rgba(255,255,255,.5);
    }
    
    `}

  &:hover {
    filter: brightness(95%);
  }

  @media only screen and (min-width: 501px) and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 6rem;
    height: 6rem;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`,Xz=A.span`
  font-size: 1.1rem;
  margin-right: auto;
  font-weight: 400;
`,Jz=A(Dy)`
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  @media only screen and (min-width: 501px) and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`,Zz=A.div`
  height: 50%;
  align-self: flex-start;
  display: grid;
  align-items: center;
`,ej=A.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`,cI=A.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: #bbb;
  border-radius: 2rem;
`,tj=A.div`
  flex: 1;
  gap: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 501px) and (max-width: 900px) {
    display: none;
  }
`,hI=A.span`
  font-size: 1.6rem;
  width: 100%;
  padding-top: 1rem;
  border-top: 2px solid #eee;
  word-wrap: break-word;
  word-break: break-word;
`;A.div`
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #bbb;
  border-radius: 20rem;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    content: "";
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
  }

  &::before {
    left: -7px;
  }

  &::after {
    right: -7px;
  }
`;const nj=A.div`
  @media only screen and (min-width: 501px) and (max-width: 900px) {
    display: none;
  }
`,rj=A.form`
  position: relative;
  width: 100%;
`,ij=A.div`
  position: absolute;
  background-color: #fff;
  z-index: 9;
  top: 4.6rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.7);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
`,dI=A(uI)`
  transition: all 0.2s;
  color: #34aa44;
  font-size: 2rem !important;
`,sj=A.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #1565c0;
  border-radius: 1rem;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: inherit;
  transition: all 0.2s;

  &:hover {
    background-color: #34aa44;

    ${dI} {
      color: #fff;
    }

    span {
      color: #fff;
    }
  }
`,oj=A.input`
  width: 100%;
  font-size: 1.8rem;
  padding: 1rem 4rem 1rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.2);
  transition: all 0.2s;

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.7);
    color: rgba(0, 0, 0, 0.7);

    &::placeholder {
      color: rgba(0, 0, 0, 0.7) !important;
    }

    + svg {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  &::placeholder {
    transition: all 0.2s;
    color: rgba(0, 0, 0, 0.3) !important;
  }
`,aj=A(lI)`
  position: absolute;
  top: 2.5rem;
  right: 1rem;
  font-size: 2.5rem !important;
  transform: translateY(-54%);
  cursor: pointer;
  transition: color 0.2s !important;
  color: rgba(0, 0, 0, 0.3);
`,lj=A(My)`
  margin-right: auto;
`,uj=(t,e)=>{switch(e.type){case"CHANGE_USER_CHAT":return t.user.uid===e.payload.user.uid?{...t}:{user:e.payload.user,chatID:e.payload.combinedID};case"SHOW_STATE":return console.log(t),t;case"CLEAR_STATE":return{chatID:"null",user:{displayName:"",photoURL:"",uid:""}};default:throw new Error("CHAT REDUCER: TYPE NOT FOUND",e)}},Rn=S.createContext({}),cj=({children:t})=>{const e={chatID:null,user:{displayName:"",photoURL:"",uid:""}},[n,r]=S.useReducer(uj,e);return C(Rn.Provider,{value:{chat:n,chatDispatch:r},children:t})},hj=(t,e)=>{var n,r,i;switch(e.type){case"SET_STATE":console.log(e.payload);const s=Object.entries(e.payload).sort((u,c)=>c[1].date.toDate().getTime()-u[1].date.toDate().getTime());return{...t,chats:s};case"FILTER_CHATS":const o=(n=t.chats)==null?void 0:n.filter(u=>e.chatType!=="all"?u[1].chatType===e.chatType:u);return{...t,filter:e.chatType,filteredChats:o};case"DELETE_CHAT":const a=(r=t.chats)==null?void 0:r.filter(u=>u[0]!==e.chatId),l=(i=t.filteredChats)==null?void 0:i.filter(u=>u[0]!==e.chatId);return{...t,filteredChats:l,chats:a};case"ADD_USER":return{...t};case"CLEAR_STATE":return{filter:"all",chats:[],filteredChats:[]};default:throw new Error("CHATS REDUCER: TYPE NOT FOUND",e)}},Bi=S.createContext({}),dj={filter:"all",chats:[],filteredChats:[]},fj=({children:t})=>{const{currentUser:e}=S.useContext(yr),[n,r]=S.useReducer(hj,dj);return S.useEffect(()=>{if(!e)return;const i=AC(En(hn,"userChats",e.uid),s=>{const o=s.data()||{};r({type:"SET_STATE",payload:o})});return()=>{i(),r({type:"CLEAR_STATE"})}},[e]),C(Bi.Provider,{value:{chatsState:n,dispatch:r},children:t})},Uy=(t,e)=>t>e?t+e:e+t,na=async(t,e,n,r="Start your new chat!")=>{$c(En(hn,"userChats",t),{[n+".userInfo"]:{uid:e==null?void 0:e.uid,displayName:e==null?void 0:e.displayName,photoURL:e==null?void 0:e.photoURL},[n+".date"]:je.now(),[n+".lastMessage"]:{text:r},[n+".chatType"]:"user"})},pj=async({currentUser:t,user:e,chatDispatch:n})=>{const r=Uy(t.uid,e.uid),i=En(hn,"chats",r),s=En(hn,"userChats",t.uid),o=await k1(s),a=Object.keys(o.data()),l=await k1(i);try{if(l.exists())n({type:"CHANGE_USER_CHAT",payload:{user:e,combinedID:r}}),!a.includes(r)&&await na(t==null?void 0:t.uid,e,r);else{const u=vC(hn,"chats");await Qp(En(u,r),{messages:[]}),await na(t==null?void 0:t.uid,e,r),await na(e.uid,t,r)}}catch(u){console.log(u)}},fI=()=>{var d;const{currentUser:t}=S.useContext(yr),[e,n]=S.useState(""),[r,i]=S.useState(null),{chatDispatch:s}=S.useContext(Rn),{chatsState:o}=S.useContext(Bi),a=S.useRef(null),l=!!r&&((d=o.filteredChats)==null?void 0:d.map(y=>y[0]).includes(Uy(t.uid,r.uid)));return S.useEffect(()=>{const y=g=>{var m;(m=a.current)!=null&&m.contains(g.target)||i(null)};return document.addEventListener("click",y),()=>{document.removeEventListener("click",y)}},[]),C(nj,{ref:a,children:te(rj,{onSubmit:async y=>{var m;if(y.preventDefault(),(t==null?void 0:t.displayName)===e)return;const g=$O(vC(hn,"users"),DO("displayName","==",e));try{(await FO(g)).forEach(p=>{i(p.data())})}catch(w){console.log(w)}(m=a.current)==null||m.focus()},children:[C(oj,{type:"text",placeholder:"Search...",onChange:y=>{n(y.target.value)},value:e}),C(aj,{}),!!r&&C(ij,{children:te(sj,{onClick:()=>{!r||!t||(i(null),n(""),pj({currentUser:t,user:r,chatDispatch:s}))},children:[C(Dy,{src:r.photoURL,alt:"friend"}),C(lj,{children:r.displayName}),l&&C(dI,{})]})})]})})};var Fy={},mj=en;Object.defineProperty(Fy,"__esModule",{value:!0});var pI=Fy.default=void 0,gj=mj(bn()),yj=xn,vj=(0,gj.default)((0,yj.jsx)("path",{d:"M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"}),"ChatOutlined");pI=Fy.default=vj;var zy={},wj=en;Object.defineProperty(zy,"__esModule",{value:!0});var mI=zy.default=void 0,_j=wj(bn()),Sj=xn,Ej=(0,_j.default)((0,Sj.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"}),"PersonAddOutlined");mI=zy.default=Ej;var jy={},kj=en;Object.defineProperty(jy,"__esModule",{value:!0});var gI=jy.default=void 0,Cj=kj(bn()),Tj=xn,Ij=(0,Cj.default)((0,Tj.jsx)("path",{d:"M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"}),"PeopleOutlined");gI=jy.default=Ij;const bj=A.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 0;
  background-color: #34aa44;

  @media only screen and (max-width: 900px) {
    grid-area: 1/1/2/3;
    flex-direction: row;
    padding: 0 2rem;
  }
`,xj=A.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 900px) {
    flex-direction: row;
  }
`,Rj=A.img`
  width: 5rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50px;
`,Aj=A.span`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
`,Vy=A.svg`
  font-size: 5rem !important;
  padding: 1.3rem;
  border-radius: 0.5rem;
  color: #fff;
  background-color: #34aa44;
  cursor: pointer;
  transition: filter 0.2s, scale 0.1s !important;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    scale: 0.96;
  }
`,lf=A(u2)`
  &.active {
    svg {
      background-color: #21960f;
      &:hover {
        filter: brightness(100%);
      }
    }
  }
`,Pj=Vy.withComponent(pI),$j=Vy.withComponent(mI),Nj=Vy.withComponent(gI),ww=()=>window.innerWidth<=500,yI=()=>{const[t,e]=S.useState(ww());return S.useEffect(()=>{const n=()=>{e(ww())};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),t},Dj=()=>{const{currentUser:t}=S.useContext(yr),{chatDispatch:e}=S.useContext(Rn),{dispatch:n}=S.useContext(Bi),r=yI(),i=()=>{n({type:"CLEAR_STATE"}),e({type:"CLEAR_STATE"}),NL(Jh)};return te(bj,{children:[C(Aj,{children:"LOGO"}),te(xj,{children:[C("li",{children:C(lf,{to:"/",end:!0,children:C(Pj,{})})}),C("li",{children:C(lf,{to:"/search",children:C($j,{})})}),r&&C("li",{children:C(lf,{to:"/chats",children:C(Nj,{})})})]}),C(Rj,{src:t.photoURL,alt:"imgdsa",onClick:i})]})};var By={},Oj=en;Object.defineProperty(By,"__esModule",{value:!0});var Hy=By.default=void 0,Lj=Oj(bn()),Mj=xn,Uj=(0,Lj.default)((0,Mj.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");Hy=By.default=Uj;const Fj=A(Dy)`
  align-self: flex-start;
`,zj=A.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`,vI=A.span`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  gap: 1rem;
  padding: 0.5rem 0 0 0;
`,jj=A.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: #606060;
`,wI=A.div`
  display: none;
  align-self: center;
  font-size: 1rem;
  color: #b0b0b0;
`,_I=A.span`
  padding: 1rem;
  background-color: #e0e0e0;
  font-size: 1.5rem;
  border-radius: 1rem;
  hyphens: auto;
  word-wrap: break-word;
  word-break: break-word;
  padding: 1.5rem;
`,SI=A.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
`,Vj=A.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;A.img`
  max-width: 20rem;
  max-height: 20rem;
`;const EI=A(Hy)`
  visibility: hidden;
  font-size: 3rem !important;
  align-self: center;
  color: #bfbfbf;
  cursor: pointer;
  transition: color 0.2s !important;

  &:hover {
    color: #34aa44;
  }

  &:active {
    scale: 0.95;
  }
`,Bj=A.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 70%;
  margin: 0 auto 0 0;
  gap: 1rem;

  ${({isOwner:t,theme:e})=>t&&`
      margin: 0 0 0 auto;
      flex-direction: row-reverse;
      justify-content: flex-start;


      ${_I}{
        background-color: ${e.primaryColor};
        color: #fff;
      }

      ${vI}{
        flex-direction: row-reverse;
      }

      ${SI}{
        flex-direction: row;
      }

  `}

  &:hover {
    ${wI} {
      display: block !important;
    }
    ${EI} {
      visibility: visible;
    }
  }

  @media only screen and (max-width: 1200px) {
    max-width: 100%;
  }
`,kI=t=>{const n=new Date().getTime()-t.toDate().getTime(),r={hour:"numeric",minute:"numeric"},i={month:"numeric",day:"numeric",year:"2-digit"};return n<=1e3?"Now":n>864e5?new Intl.DateTimeFormat("en-US",i).format(t.toDate()):new Intl.DateTimeFormat("en-US",r).format(t.toDate())},Hj=A.img`
  max-width: 20rem;
  max-height: 20rem;
`,Wj=A.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`,qj=A.img`
  max-width: 160rem;
  max-height: 100rem;
`,Kj=({src:t,id:e,onClick:n})=>C(Wj,{onClick:n,children:C(qj,{src:t,alt:`modal${e}`})}),Gj=({src:t,id:e})=>{const[n,r]=S.useState(!1),i=()=>{r(s=>!s)};return te(bs,{children:[C(Hj,{src:t,alt:e,onClick:i}),n&&C(Kj,{src:t,id:e,onClick:i})]})},Qj=({message:t})=>{const{currentUser:e}=S.useContext(yr),{chat:n}=S.useContext(Rn),r=S.useRef(),i=t.senderId===(e==null?void 0:e.uid),s=kI(t.date);return S.useEffect(()=>{r.current.scrollIntoView({behavior:"smooth"})},[t]),te(Bj,{ref:r,isOwner:i,children:[C(Fj,{src:t.senderId===(e==null?void 0:e.uid)?e.photoURL:n.user.photoURL,alt:"Profile Picture"}),te(zj,{isOwner:i,children:[te(vI,{children:[C(jj,{children:t.senderName}),C(wI,{children:s})]}),te(SI,{children:[C(EI,{}),te(Vj,{children:[!!t.image&&C(Gj,{src:t.image,id:t.id}),!!t.text&&C(_I,{children:t.text})]})]})]})]})},Yj=A.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 3rem 3rem 3rem;

  @media only screen and (max-width: 900px) {
    padding: 1rem;
  }
`,Xj=A.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  background-color: ${({theme:t})=>t.secondaryColor};
  height: calc(100% - 18rem);
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;

  @media only screen and (max-width: 900px) {
    height: calc(100% - 16rem);
  }
`,Jj=()=>{const{chat:t}=S.useContext(Rn),[e,n]=S.useState([]),r=e==null?void 0:e.map((i,s)=>C(Qj,{message:i},s));return S.useEffect(()=>{const i=AC(En(hn,"chats",t.chatID),s=>{var o;console.log(s.data()),s.exists()&&n((o=s.data())==null?void 0:o.messages)});return()=>{i()}},[t.chatID]),C(Xj,{children:C(Yj,{children:r})})};var Wy={},Zj=en;Object.defineProperty(Wy,"__esModule",{value:!0});var CI=Wy.default=void 0,e6=Zj(bn()),t6=xn,n6=(0,e6.default)((0,t6.jsx)("path",{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"}),"AddPhotoAlternate");CI=Wy.default=n6;let cu;const r6=new Uint8Array(16);function i6(){if(!cu&&(cu=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!cu))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return cu(r6)}const at=[];for(let t=0;t<256;++t)at.push((t+256).toString(16).slice(1));function s6(t,e=0){return(at[t[e+0]]+at[t[e+1]]+at[t[e+2]]+at[t[e+3]]+"-"+at[t[e+4]]+at[t[e+5]]+"-"+at[t[e+6]]+at[t[e+7]]+"-"+at[t[e+8]]+at[t[e+9]]+"-"+at[t[e+10]]+at[t[e+11]]+at[t[e+12]]+at[t[e+13]]+at[t[e+14]]+at[t[e+15]]).toLowerCase()}const o6=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_w={randomUUID:o6};function uf(t,e,n){if(_w.randomUUID&&!e&&!t)return _w.randomUUID();t=t||{};const r=t.random||(t.rng||i6)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return s6(r)}const a6=async({chat:t,currentUser:e,image:n,text:r})=>{const i=je.now();try{if(n){r=r==null?void 0:r.trim();const s=s4(h4,uf()),o=r4(s,n);o.on("state_changed",()=>{},a=>{console.log(a)},()=>{i4(o.snapshot.ref).then(async a=>{await $c(En(hn,"chats",t.chatID),{messages:C1({id:uf(),text:r,senderId:e==null?void 0:e.uid,date:i,image:a,unread:!0})})})})}else r&&await $c(En(hn,"chats",t.chatID),{messages:C1({id:uf(),text:r.trim(),senderId:e==null?void 0:e.uid,senderName:e==null?void 0:e.displayName,date:i,unread:!0})});na(e.uid,t.user,t.chatID,r),na(t.user.uid,e,t.chatID,r)}catch(s){throw alert(`Error from sendMessage.ts: ${s}`),new Error}},l6=A.form`
  width: 100%;
  height: 9rem;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  background-color: ${({theme:t})=>t.secondaryColor};
  color: white;

  label {
    color: #adb5bd;

    svg {
      font-size: 3rem !important;
      cursor: pointer;
      color: inherit;
      transition: all 0.2s;

      &:hover {
        filter: brightness(90%);
      }

      &:active {
        scale: 0.95;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    gap: 1rem;
    padding: 1rem;
  }
`,u6=A.input`
  font-size: 2rem;
  flex: 1;
  height: 100%;
  word-wrap: break-word;
  word-break: break-all;
  border: none;
  color: black;
  background-color: inherit;
  resize: none;
  vertical-align: middle;
  z-index: 4;

  &:focus {
    outline: none;
    border: none;

    ~ label {
      color: ${({theme:t})=>t.primaryColor};
    }
  }

  @media only screen and (max-width: 500px) {
    font-size: 1.75rem;
  }
`,c6=A.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`,h6=A.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  border-radius: 1rem;
  box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${({theme:t})=>t.primaryColor};

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0);
  }

  &:disabled {
    background-color: #adb5bd;

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.3);
    }
  }
`;var qy={},d6=en;Object.defineProperty(qy,"__esModule",{value:!0});var TI=qy.default=void 0,f6=d6(bn()),p6=xn,m6=(0,f6.default)((0,p6.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");TI=qy.default=m6;const g6=Za`
  0%{
    bottom:0%;
  }
  100%{
    bottom: 100%;
  }
`,y6=A.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 2rem 3rem;
  margin: 0 0 1rem 2rem;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 2rem;
  background-color: ${({theme:t})=>t.primaryColor};
  animation-name: ${g6};
  animation-duration: 1s;
  animation-fillmode: forwards;
  z-index: 1;
`,v6=A.button`
  background-color: transparent;
  color: white;
  display: flex;
  border: none;
`,w6=A(TI)`
  font-size: 2rem !important;
`,_6=({image:t,handleRemove:e})=>te(y6,{children:[t.name,C(v6,{onClick:e,children:C(w6,{})})]}),S6=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(void 0),{currentUser:i}=S.useContext(yr),{chat:s}=S.useContext(Rn),o=!(n||t.trim()),a=async h=>{h.preventDefault(),e(""),r(void 0),a6({chat:s,currentUser:i,image:n,text:t})};return te(l6,{onSubmit:a,children:[!!n&&C(_6,{image:n,handleRemove:()=>{r(void 0)}}),C(u6,{placeholder:"Type a message here...",onChange:h=>{e(h.target.value)},value:t}),te("label",{htmlFor:"sendImg",children:[C(c6,{name:"sendImg",type:"file",id:"sendImg",multiple:!0,onChange:h=>{console.log(h.target.files),r(h.target.files[0])}}),C(CI,{})]}),C(h6,{onClick:a,disabled:o,children:"Send"})]})},E6=A.div`
  width: 100%;
  height: 100%;
  color: #34aa44;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f3f4;
`,k6=A.div`
  flex: 3 1;
  max-height: 100vh;
  border-left: 1px solid #d3d3d3;
`,C6=A.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 4rem;
  gap: 1rem;
  height: 9rem;
  background-color: #f5f3f4;

  // #f5f3f4;

  @media only screen and (max-width: 900px) {
    padding: 0 2rem;
    height: 7rem;
  }
`,T6=A.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
`,I6=A.span`
  color: #34aa44;
  font-size: 2.3rem;
  font-weight: 700;
  margin-right: auto;
`,b6=A.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  backface-visibility: hidden;
  position: relative;

  svg {
    font-size: 3.5rem !important;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: color 0.2s;
    backface-visibility: hidden;

    &:hover {
      color: #34aa44;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;var Ky={},x6=en;Object.defineProperty(Ky,"__esModule",{value:!0});var II=Ky.default=void 0,R6=x6(bn()),A6=xn,P6=(0,R6.default)((0,A6.jsx)("path",{d:"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"CameraAltOutlined");II=Ky.default=P6;const $6=Za`
    0%{
        max-height:0;
    }

    100%{
        max-height:20rem;
    }
`,N6=Za`
    0%{
      max-height:20rem;
    }

    100%{
      max-height:0;
    }
`,D6=fh`
  ${N6} .2s linear;
`,O6=fh`
  ${$6} .2s linear;
`,L6=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 100%;
  width: max-content;
  // max-height: ${({hide:t})=>t?"0":"100%"};
  background-color: ${({theme:t})=>t.secondaryColor};
  border-radius: 1px;
  border: 1px solid ${({theme:t})=>t.borderColor};
  overflow: hidden;
  animation: ${({hide:t})=>t?D6:O6};\
  animation-fill-mode: both;

`,M6=A.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
`,Sw=A.li`
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;

  svg {
    font-size: 2rem !important;
  }
`;var Gy={},U6=en;Object.defineProperty(Gy,"__esModule",{value:!0});var bI=Gy.default=void 0,F6=U6(bn()),z6=xn,j6=(0,F6.default)((0,z6.jsx)("path",{d:"M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"}),"PushPinOutlined");bI=Gy.default=j6;const V6=({hide:t,setShowModal:e})=>{const{currentUser:n}=S.useContext(yr),{chat:r,chatDispatch:i}=S.useContext(Rn),{dispatch:s}=S.useContext(Bi),o=async l=>{const u=En(hn,"userChats",n.uid);try{await $c(u,{[l]:zO()}),i({type:"CLEAR_STATE"}),s({type:"DELETE_CHAT",chatId:l})}catch(c){alert(c)}};return C(L6,{hide:t,onAnimationEnd:()=>{t&&e(!1)},children:te(M6,{children:[te(Sw,{onClick:()=>o(r.chatID),children:[C(Ly,{}),C("span",{children:"Delete Chat"})]}),te(Sw,{children:[C(bI,{}),C("span",{children:"Pin Chat"})]})]})})},B6=()=>{const{chat:t}=S.useContext(Rn),[e,n]=S.useState(!1),[r,i]=S.useState(!0),s=()=>{r&&n(!0),i(o=>!o)};return te(C6,{children:[C(T6,{src:t.user.photoURL,alt:"friend"}),C(I6,{children:t.user.displayName}),te(b6,{children:[C(II,{}),C(Hy,{onClick:s,onBlur:s}),e&&C(V6,{hide:r,setShowModal:n})]})]})},Ew=()=>{const{chat:t}=S.useContext(Rn);return C(k6,{children:!t.chatID||t.chatID==="null"?C(E6,{children:"Start chatting with your friend!"}):te(bs,{children:[C(B6,{}),C(Jj,{}),C(S6,{})]})})},H6=()=>{const{dispatch:t,chatsState:e}=S.useContext(Bi),[n,r]=S.useState({all:!0,user:!1,group:!1});S.useEffect(()=>{t({type:"FILTER_CHATS",chatType:e.filter})},[e.chats]);const i=s=>{n[s]||(r(o=>({all:!1,group:!1,user:!1,[s]:!o[s]})),t({type:"FILTER_CHATS",chatType:s}))};return te(W6,{children:[C(cf,{activeFilter:n.all,onClick:()=>i("all"),children:"All Chats"}),C(cf,{activeFilter:n.user,onClick:()=>i("user"),children:"User Chats"}),C(cf,{activeFilter:n.group,onClick:()=>i("group"),children:"Group Chats"})]})},W6=A.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 501px) and (max-width: 900px) {
    display: none;
  }
`,cf=A.a`
  color: rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -1rem;
    height: 0.3rem;
    width: 0%;
    border-radius: 2rem;
    background-color: transparent;
    transition: all 0.2s;
  }

  ${({activeFilter:t})=>t?`
     color: #34aa44;
     &::before {
      width: 90%;
      background-color: #34aa44;
    }
  `:`
  &:hover{
    color: #34aa44;
  }
  `}
`,q6=({date:t,lastMessage:e,userInfo:n,isActive:r,chatId:i})=>{const{currentUser:s}=S.useContext(yr),{chatDispatch:o}=S.useContext(Rn);S.useContext(Bi);const a=(e==null?void 0:e.text.length)<78?e==null?void 0:e.text:`${e==null?void 0:e.text.slice(0,70)}...`,l=kI(t);return te(Yz,{onClick:()=>{const c=Uy(s.uid,n.uid);o({type:"CHANGE_USER_CHAT",payload:{user:n,combinedID:c}})},isActive:r,children:[C(Zz,{children:C(Jz,{src:n.photoURL,alt:"friend"})}),te(tj,{children:[te(ej,{children:[C(My,{children:n.displayName}),C(cI,{}),C(Xz,{children:l})]}),C(hI,{children:a})]})]})},K6=A.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:t})=>t.secondaryColor};
  gap: 3rem;
  padding: 3rem;
  overflow: auto;

  @media only screen and (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 2rem;
  }
`,G6=A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Q6=A.h2`
  font-size: 2.7rem;
  color: ${({theme:t})=>t.primaryColor};
`,Y6=A.div`
  cursor: pointer;
  padding: 1rem;
  transform: translateX(1rem);

  &:active {
    div {
      scale: 0.92;
    }
  }
`,X6=A.div`
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({theme:t})=>t.primaryColor};
  border-radius: 20rem;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    content: "";
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
  }

  &::before {
    top: -7px;
  }

  &::after {
    top: 7px;
  }
`,J6=A.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: 900px) {
    align-items: center;
  }
`,kw=()=>{const{chat:t}=S.useContext(Rn),{chatsState:e}=S.useContext(Bi),n=!!e.filteredChats&&e.filteredChats.map(r=>C(q6,{...r[1],chatId:r[0],isActive:r[0]===t.chatID},r[0]));return te(K6,{children:[C(fI,{}),te(G6,{children:[C(Q6,{children:"Chats"}),C(Y6,{children:C(X6,{})})]}),C(H6,{}),C(J6,{children:n})]})};function Z6(){const t=yI();return te(eV,{children:[C(Dj,{}),te(iE,{children:[C(Nr,{path:"/",element:te(bs,{children:[!t&&C(kw,{}),C(Ew,{})]})}),C(Nr,{path:"/search",element:te(bs,{children:[C(fI,{}),C(Ew,{})]})}),t&&C(Nr,{path:"/chats",element:C(kw,{})}),C(Nr,{path:"/*",element:C(wp,{to:"/"})})]})]})}const eV=A.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(7rem, 10rem) minmax(12rem, 40rem) 1fr;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 10rem 1fr;
    grid-template-rows: 7rem minmax(20rem, 1fr);
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 7rem minmax(20rem, 1fr);
  }
`,tV="modulepreload",nV=function(t){return"/"+t},Cw={},rV=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=nV(s),s in Cw)return;Cw[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":tV,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},iV=t=>{t&&t instanceof Function&&rV(()=>import("./web-vitals-60d3425a.js"),[]).then(({getCLS:e,getFID:n,getFCP:r,getLCP:i,getTTFB:s})=>{e(t),n(t),r(t),i(t),s(t)})},sV=t=>{const{errorMessage:e,inputDetail:n,...r}=t,[i,s]=S.useState(!1);return te(aV,{children:[C(lV,{...r,required:!0,isValid:i,onBlur:()=>{s(!0)}}),n&&C(hV,{children:C(uV,{children:n})}),C(dV,{children:e})]})},oV=pn.memo(sV),aV=A.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`,lV=A.input`
  width: 100%;
  padding: 1rem 4rem 1rem 2rem;
  font-size: 2rem;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    border-bottom: 1px solid #ffc611;
  }

  &:invalid {
    ${({isValid:t})=>t&&`border-bottom: 1px solid #ff033e;

    ~ span {
      display: block;
    }`}
  }

  &:valid {
    border-bottom: 1px solid #68de59;
  }
`,uV=A.span`
  position: absolute;
  bottom: 3.5rem;
  transform: translate(-40%, 0);
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  width: 20rem;
  background-color: #34aa44;
  color: #fff;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
`,cV=Za`
  0%{
    visibility: visible;
  }
  100%{
    visibility: visible;
    opacity: 1;
  }
  
`,hV=A.div`
  position: absolute;
  top: 1rem;
  right: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 100rem;
  border: 3px solid #34aa44;
  background-color: #fff;

  &::after {
    content: "i";
    font-size: 1.6rem;
    font-weight: 700;
    position: absolute;
    color: #34aa44;
    top: 0;
    left: 40%;
  }

  &:hover {
    span {
      animation-name: ${cV};
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    }
  }
`,dV=A.span`
  color: red;
  font-size: 1.5rem;
  display: none;
`,fV=A.form`
  width: 50rem;
  padding: 6rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  font-size: 2rem;
`,pV=A.h2`
  font-size: 5rem;
  color: #34aa44;
  text-transform: uppercase;
`,mV=A.span`
  text-transform: uppercase;
`,gV=A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`,yV=pn.memo(A.span`
  color: red;
  font-size: 1.5rem;
`),vV=pn.memo(A.button`
  position: relative;
  width: 100%;
  padding: 1rem 0;
  letter-spacing: 1px;
  font-size: 2.1rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #34aa44;
  border-radius: 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    transform: translateY(1px);
  }

  ${({isLoading:t})=>t&&`
    cursor: default;
    color: #d0d0d0;
    background-color: #d0d0d0;

    &:active {
      transform: translateY(1px);
    }

    > div > div{
      display:block;
    }
`}
`),wV=A.span`
  font-size: 1.5rem;

  > a {
    color: #34aa44;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.2s;

    &:hover {
      color: #107dac;
    }
  }
`,_V=A.div`
  position: absolute;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 3rem;
`,SV=Za`
0%{
    height:1rem;
    background-color: rgba(255,255,255,.5);
}
50%{
    height: 3rem;
    background-color: rgba(255,255,255,1);
}
100%{
    height: 1rem;
    background-color: rgba(255,255,255,.5);
}
`,hf=A.div`
  display: none;
  align-self: center;
  width: 1rem;
  height: 3rem;
  background-color: white;
  animation-name: ${SV};
  animation-duration: 1s;
  animation-delay: ${({delay:t})=>t*.2}s;
  animation-iteration-count: infinite;
`,EV=()=>te(_V,{children:[C(hf,{delay:0}),C(hf,{delay:1}),C(hf,{delay:2})]}),kV=pn.memo(EV),CV=t=>{const e={};return t.forEach(n=>{e[n.name]=""}),e},xI=({formType:t,inputs:e,reminder:n,reminderAnchor:r,linkTo:i,handleSubmitCallback:s,errorMessage:o,error:a})=>{const l=S.useMemo(()=>CV(e),[e]),[u,c]=S.useState(l),[h,d]=S.useState(!1),y=S.useCallback(m=>{const{name:w,value:p}=m.target;c(f=>({...f,[w]:p}))},[]);S.useEffect(()=>{a&&d(!1)},[a]);const g=(m,w)=>{m.preventDefault(),d(!0),s(w)};return te(fV,{onSubmit:m=>g(m,u),children:[C(pV,{children:"Chat app"}),C(mV,{children:"LOGIN"}),C(gV,{children:e.map((m,w)=>{const{pattern:p,...f}=m;return C(oV,{...f,onChange:y,value:u[m.name],pattern:m.name==="confirmPassword"?u.password:p},w)})}),a&&C(yV,{children:o}),te(vV,{isLoading:h,children:[t,C(kV,{})]}),te(wV,{children:[n," ",C(oE,{to:`/${i}`,children:r})]})]})},TV=()=>{const[t,e]=S.useState(!1),[n,r]=S.useState(""),i=gh();return C(xI,{...{formType:"Login",errorMessage:n,inputs:[{type:"text",name:"email",placeholder:"email",errorMessage:"Email is not valid!"},{type:"password",name:"password",placeholder:"password"}],reminder:"You do not have an account?",reminderAnchor:"Sign up",linkTo:"register"},handleSubmitCallback:async a=>{const l=a.email,u=a.password;e(!1);try{await bL(Jh,l,u),i("/")}catch(c){c instanceof Error&&(r("Invalid email or password!"),e(!0))}},error:t})},IV=pn.memo(TV),bV=()=>{gh();const[t,e]=S.useState(!1),[n,r]=S.useState("");return C(xI,{handleSubmitCallback:async o=>{const a=o.name,l=o.password,u=o.email;e(!1);try{const c=await IL(Jh,u,l);await RL(c.user,{displayName:a,photoURL:"https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"}),await Qp(En(hn,"users",c.user.uid),{uid:c.user.uid,displayName:a,email:u,photoURL:"https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"}),await Qp(En(hn,"userChats",c.user.uid),{})}catch(c){c instanceof Error&&(c.message==="Firebase: Error (auth/email-already-in-use)."&&r("There is account with this email already!"),e(!0))}},...{formType:"Register",errorMessage:n,inputs:[{type:"text",placeholder:"name",name:"name",errorMessage:"Name is not 3-16 characters or special letters!",inputDetail:"Name should be 3-16 characters and should not include any special letters",pattern:"^[A-Za-z0-9]{3,16}"},{type:"email",placeholder:"email",name:"email",errorMessage:"Email is not valid!"},{type:"password",placeholder:"password",name:"password",errorMessage:"Password is not 8-20 characters or does not include 1 letter, 1 number and 1 special character!",inputDetail:"Password should be 8-20 characters and include 1 letter, 1 number and 1 special character!",pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"},{type:"password",placeholder:"confirm password",name:"confirmPassword",errorMessage:"Passwords are not the same!"}],reminder:"Have you got an account?",reminderAnchor:"Sign in",linkTo:"login"},error:t})},df=({children:t,passedFrom:e})=>{const{isAuthorized:n}=S.useContext(yr);return n===!1&&e==="home"?C(wp,{to:"/login",replace:!0}):n===!0&&(e==="login"||e==="register")?C(wp,{to:"/",replace:!0}):C(bs,{children:n!==null&&t})},xV={borderColor:"#d3d3d3",primaryColor:"#34aa44",secondaryColor:"#f5f3f4"},RV=ff.createRoot(document.getElementById("root"));RV.render(C(pn.StrictMode,{children:C(d4,{children:C(fj,{children:C(cj,{children:C(hA,{theme:xV,children:C(l2,{children:te(iE,{children:[C(Nr,{path:"/*",element:C(df,{passedFrom:"home",children:C(Z6,{})})}),C(Nr,{path:"/login",element:C(df,{passedFrom:"login",children:C(IV,{})})}),C(Nr,{path:"/register",element:C(df,{passedFrom:"register",children:C(bV,{})})})]})})})})})})}));iV();
