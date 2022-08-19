(()=>{var qx=Object.create;var ya=Object.defineProperty;var Xx=Object.getOwnPropertyDescriptor;var jx=Object.getOwnPropertyNames;var Yx=Object.getPrototypeOf,$x=Object.prototype.hasOwnProperty;var fp=(n,e)=>()=>(n&&(e=n(n=0)),e);var Et=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),Zx=(n,e)=>{for(var t in e)ya(n,t,{get:e[t],enumerable:!0})},dp=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of jx(e))!$x.call(n,r)&&r!==t&&ya(n,r,{get:()=>e[r],enumerable:!(i=Xx(e,r))||i.enumerable});return n};var Br=(n,e,t)=>(t=n!=null?qx(Yx(n)):{},dp(e||!n||!n.__esModule?ya(t,"default",{value:n,enumerable:!0}):t,n)),Jx=n=>dp(ya({},"__esModule",{value:!0}),n);var bp=Et(Le=>{"use strict";var Qs=Symbol.for("react.element"),Kx=Symbol.for("react.portal"),Qx=Symbol.for("react.fragment"),e_=Symbol.for("react.strict_mode"),t_=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),r_=Symbol.for("react.forward_ref"),s_=Symbol.for("react.suspense"),o_=Symbol.for("react.memo"),a_=Symbol.for("react.lazy"),pp=Symbol.iterator;function l_(n){return n===null||typeof n!="object"?null:(n=pp&&n[pp]||n["@@iterator"],typeof n=="function"?n:null)}var yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vp=Object.assign,xp={};function Ur(n,e,t){this.props=n,this.context=e,this.refs=xp,this.updater=t||yp}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ur.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function _p(){}_p.prototype=Ur.prototype;function iu(n,e,t){this.props=n,this.context=e,this.refs=xp,this.updater=t||yp}var ru=iu.prototype=new _p;ru.constructor=iu;vp(ru,Ur.prototype);ru.isPureReactComponent=!0;var mp=Array.isArray,wp=Object.prototype.hasOwnProperty,su={current:null},Mp={key:!0,ref:!0,__self:!0,__source:!0};function Sp(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)wp.call(e,i)&&!Mp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qs,type:n,key:s,ref:o,props:r,_owner:su.current}}function c_(n,e){return{$$typeof:Qs,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function ou(n){return typeof n=="object"&&n!==null&&n.$$typeof===Qs}function u_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var gp=/\/+/g;function nu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?u_(""+n.key):e.toString(36)}function xa(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Qs:case Kx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+nu(o,0):i,mp(r)?(t="",n!=null&&(t=n.replace(gp,"$&/")+"/"),xa(r,e,t,"",function(c){return c})):r!=null&&(ou(r)&&(r=c_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(gp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",mp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+nu(s,a);o+=xa(s,e,t,l,r)}else if(l=l_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+nu(s,a++),o+=xa(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function va(n,e,t){if(n==null)return n;var i=[],r=0;return xa(n,i,"","",function(s){return e.call(t,s,r++)}),i}function h_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Nt={current:null},_a={transition:null},f_={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:_a,ReactCurrentOwner:su};Le.Children={map:va,forEach:function(n,e,t){va(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return va(n,function(){e++}),e},toArray:function(n){return va(n,function(e){return e})||[]},only:function(n){if(!ou(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Le.Component=Ur;Le.Fragment=Qx;Le.Profiler=t_;Le.PureComponent=iu;Le.StrictMode=e_;Le.Suspense=s_;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f_;Le.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=vp({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=su.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)wp.call(e,l)&&!Mp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Qs,type:n.type,key:r,ref:s,props:i,_owner:o}};Le.createContext=function(n){return n={$$typeof:i_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:n_,_context:n},n.Consumer=n};Le.createElement=Sp;Le.createFactory=function(n){var e=Sp.bind(null,n);return e.type=n,e};Le.createRef=function(){return{current:null}};Le.forwardRef=function(n){return{$$typeof:r_,render:n}};Le.isValidElement=ou;Le.lazy=function(n){return{$$typeof:a_,_payload:{_status:-1,_result:n},_init:h_}};Le.memo=function(n,e){return{$$typeof:o_,type:n,compare:e===void 0?null:e}};Le.startTransition=function(n){var e=_a.transition;_a.transition={};try{n()}finally{_a.transition=e}};Le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Le.useCallback=function(n,e){return Nt.current.useCallback(n,e)};Le.useContext=function(n){return Nt.current.useContext(n)};Le.useDebugValue=function(){};Le.useDeferredValue=function(n){return Nt.current.useDeferredValue(n)};Le.useEffect=function(n,e){return Nt.current.useEffect(n,e)};Le.useId=function(){return Nt.current.useId()};Le.useImperativeHandle=function(n,e,t){return Nt.current.useImperativeHandle(n,e,t)};Le.useInsertionEffect=function(n,e){return Nt.current.useInsertionEffect(n,e)};Le.useLayoutEffect=function(n,e){return Nt.current.useLayoutEffect(n,e)};Le.useMemo=function(n,e){return Nt.current.useMemo(n,e)};Le.useReducer=function(n,e,t){return Nt.current.useReducer(n,e,t)};Le.useRef=function(n){return Nt.current.useRef(n)};Le.useState=function(n){return Nt.current.useState(n)};Le.useSyncExternalStore=function(n,e,t){return Nt.current.useSyncExternalStore(n,e,t)};Le.useTransition=function(){return Nt.current.useTransition()};Le.version="18.1.0"});var Vr=Et((V3,Ep)=>{"use strict";Ep.exports=bp()});var Np=Et(Ge=>{"use strict";function uu(n,e){var t=n.length;n.push(e);e:for(;0<t;){var i=t-1>>>1,r=n[i];if(0<wa(r,e))n[i]=e,n[t]=r,t=i;else break e}}function An(n){return n.length===0?null:n[0]}function Sa(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;e:for(var i=0,r=n.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=n[o],l=o+1,c=n[l];if(0>wa(a,t))l<r&&0>wa(c,a)?(n[i]=c,n[l]=t,i=l):(n[i]=a,n[o]=t,i=o);else if(l<r&&0>wa(c,t))n[i]=c,n[l]=t,i=l;else break e}}return e}function wa(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Tp=performance,Ge.unstable_now=function(){return Tp.now()}):(au=Date,Ap=au.now(),Ge.unstable_now=function(){return au.now()-Ap});var Tp,au,Ap,$n=[],Ci=[],d_=1,hn=null,Tt=3,ba=!1,rr=!1,to=!1,Rp=typeof setTimeout=="function"?setTimeout:null,Lp=typeof clearTimeout=="function"?clearTimeout:null,Cp=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function hu(n){for(var e=An(Ci);e!==null;){if(e.callback===null)Sa(Ci);else if(e.startTime<=n)Sa(Ci),e.sortIndex=e.expirationTime,uu($n,e);else break;e=An(Ci)}}function fu(n){if(to=!1,hu(n),!rr)if(An($n)!==null)rr=!0,pu(du);else{var e=An(Ci);e!==null&&mu(fu,e.startTime-n)}}function du(n,e){rr=!1,to&&(to=!1,Lp(no),no=-1),ba=!0;var t=Tt;try{for(hu(e),hn=An($n);hn!==null&&(!(hn.expirationTime>e)||n&&!kp());){var i=hn.callback;if(typeof i=="function"){hn.callback=null,Tt=hn.priorityLevel;var r=i(hn.expirationTime<=e);e=Ge.unstable_now(),typeof r=="function"?hn.callback=r:hn===An($n)&&Sa($n),hu(e)}else Sa($n);hn=An($n)}if(hn!==null)var s=!0;else{var o=An(Ci);o!==null&&mu(fu,o.startTime-e),s=!1}return s}finally{hn=null,Tt=t,ba=!1}}var Ea=!1,Ma=null,no=-1,Dp=5,Ip=-1;function kp(){return!(Ge.unstable_now()-Ip<Dp)}function lu(){if(Ma!==null){var n=Ge.unstable_now();Ip=n;var e=!0;try{e=Ma(!0,n)}finally{e?eo():(Ea=!1,Ma=null)}}else Ea=!1}var eo;typeof Cp=="function"?eo=function(){Cp(lu)}:typeof MessageChannel<"u"?(cu=new MessageChannel,Pp=cu.port2,cu.port1.onmessage=lu,eo=function(){Pp.postMessage(null)}):eo=function(){Rp(lu,0)};var cu,Pp;function pu(n){Ma=n,Ea||(Ea=!0,eo())}function mu(n,e){no=Rp(function(){n(Ge.unstable_now())},e)}Ge.unstable_IdlePriority=5;Ge.unstable_ImmediatePriority=1;Ge.unstable_LowPriority=4;Ge.unstable_NormalPriority=3;Ge.unstable_Profiling=null;Ge.unstable_UserBlockingPriority=2;Ge.unstable_cancelCallback=function(n){n.callback=null};Ge.unstable_continueExecution=function(){rr||ba||(rr=!0,pu(du))};Ge.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Dp=0<n?Math.floor(1e3/n):5};Ge.unstable_getCurrentPriorityLevel=function(){return Tt};Ge.unstable_getFirstCallbackNode=function(){return An($n)};Ge.unstable_next=function(n){switch(Tt){case 1:case 2:case 3:var e=3;break;default:e=Tt}var t=Tt;Tt=e;try{return n()}finally{Tt=t}};Ge.unstable_pauseExecution=function(){};Ge.unstable_requestPaint=function(){};Ge.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=Tt;Tt=n;try{return e()}finally{Tt=t}};Ge.unstable_scheduleCallback=function(n,e,t){var i=Ge.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?i+t:i):t=i,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:d_++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>i?(n.sortIndex=t,uu(Ci,n),An($n)===null&&n===An(Ci)&&(to?(Lp(no),no=-1):to=!0,mu(fu,t-i))):(n.sortIndex=r,uu($n,n),rr||ba||(rr=!0,pu(du))),n};Ge.unstable_shouldYield=kp;Ge.unstable_wrapCallback=function(n){var e=Tt;return function(){var t=Tt;Tt=e;try{return n.apply(this,arguments)}finally{Tt=t}}}});var Fp=Et((W3,zp)=>{"use strict";zp.exports=Np()});var q0=Et(nn=>{"use strict";var jm=Vr(),en=Fp();function Z(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ym=new Set,To={};function gr(n,e){ls(n,e),ls(n+"Capture",e)}function ls(n,e){for(To[n]=e,n=0;n<e.length;n++)Ym.add(e[n])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,p_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Bp={};function m_(n){return Fu.call(Bp,n)?!0:Fu.call(Op,n)?!1:p_.test(n)?Bp[n]=!0:(Op[n]=!0,!1)}function g_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function y_(n,e,t,i){if(e===null||typeof e>"u"||g_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Mt[n]=new Ot(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Mt[e]=new Ot(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Mt[n]=new Ot(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Mt[n]=new Ot(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Mt[n]=new Ot(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Mt[n]=new Ot(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Mt[n]=new Ot(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Mt[n]=new Ot(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Mt[n]=new Ot(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function Ph(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ch,Ph);Mt[e]=new Ot(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ch,Ph);Mt[e]=new Ot(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ch,Ph);Mt[e]=new Ot(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Mt[n]=new Ot(n,1,!1,n.toLowerCase(),null,!1,!1)});Mt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Mt[n]=new Ot(n,1,!1,n.toLowerCase(),null,!0,!0)});function Rh(n,e,t,i){var r=Mt.hasOwnProperty(e)?Mt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(y_(e,t,r,i)&&(t=null),i||r===null?m_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var mi=jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),$m=Symbol.for("react.provider"),Zm=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),Ih=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Jm=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Up=Symbol.iterator;function io(n){return n===null||typeof n!="object"?null:(n=Up&&n[Up]||n["@@iterator"],typeof n=="function"?n:null)}var Je=Object.assign,gu;function fo(n){if(gu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);gu=e&&e[1]||""}return`
`+gu+n}var yu=!1;function vu(n,e){if(!n||yu)return"";yu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?fo(n):""}function v_(n){switch(n.tag){case 5:return fo(n.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return n=vu(n.type,!1),n;case 11:return n=vu(n.type.render,!1),n;case 1:return n=vu(n.type,!0),n;default:return""}}function Vu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case qr:return"Fragment";case Gr:return"Portal";case Ou:return"Profiler";case Lh:return"StrictMode";case Bu:return"Suspense";case Uu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Zm:return(n.displayName||"Context")+".Consumer";case $m:return(n._context.displayName||"Context")+".Provider";case Dh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ih:return e=n.displayName||null,e!==null?e:Vu(n.type)||"Memo";case Ri:e=n._payload,n=n._init;try{return Vu(n(e))}catch{}}return null}function x_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(e);case 8:return e===Lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Km(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function __(n){var e=Km(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Aa(n){n._valueTracker||(n._valueTracker=__(n))}function Qm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Km(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function tl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Hu(n,e){var t=e.checked;return Je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Vp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Hi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eg(n,e){e=e.checked,e!=null&&Rh(n,"checked",e,!1)}function Wu(n,e){eg(n,e);var t=Hi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Gu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Gu(n,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Hp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Gu(n,e,t){(e!=="number"||tl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var po=Array.isArray;function ns(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Hi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function qu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return Je({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Wp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Z(92));if(po(t)){if(1<t.length)throw Error(Z(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Hi(t)}}function tg(n,e){var t=Hi(e.value),i=Hi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Gp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ng(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ng(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ca,ig=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ao(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w_=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(n){w_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),yo[e]=yo[n]})});function rg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||yo.hasOwnProperty(n)&&yo[n]?(""+e).trim():e+"px"}function sg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=rg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var M_=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(n,e){if(e){if(M_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Yu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function kh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Zu=null,is=null,rs=null;function qp(n){if(n=qo(n)){if(typeof Zu!="function")throw Error(Z(280));var e=n.stateNode;e&&(e=Rl(e),Zu(n.stateNode,n.type,e))}}function og(n){is?rs?rs.push(n):rs=[n]:is=n}function ag(){if(is){var n=is,e=rs;if(rs=is=null,qp(n),e)for(n=0;n<e.length;n++)qp(e[n])}}function lg(n,e){return n(e)}function cg(){}var xu=!1;function ug(n,e,t){if(xu)return n(e,t);xu=!0;try{return lg(n,e,t)}finally{xu=!1,(is!==null||rs!==null)&&(cg(),ag())}}function Co(n,e){var t=n.stateNode;if(t===null)return null;var i=Rl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Z(231,e,typeof t));return t}var Ju=!1;if(fi)try{Hr={},Object.defineProperty(Hr,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Ju=!1}var Hr;function S_(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var vo=!1,nl=null,il=!1,Ku=null,b_={onError:function(n){vo=!0,nl=n}};function E_(n,e,t,i,r,s,o,a,l){vo=!1,nl=null,S_.apply(b_,arguments)}function T_(n,e,t,i,r,s,o,a,l){if(E_.apply(this,arguments),vo){if(vo){var c=nl;vo=!1,nl=null}else throw Error(Z(198));il||(il=!0,Ku=c)}}function yr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function hg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Xp(n){if(yr(n)!==n)throw Error(Z(188))}function A_(n){var e=n.alternate;if(!e){if(e=yr(n),e===null)throw Error(Z(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Xp(r),n;if(s===i)return Xp(r),e;s=s.sibling}throw Error(Z(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(t.alternate!==i)throw Error(Z(190))}if(t.tag!==3)throw Error(Z(188));return t.stateNode.current===t?n:e}function fg(n){return n=A_(n),n!==null?dg(n):null}function dg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=dg(n);if(e!==null)return e;n=n.sibling}return null}var pg=en.unstable_scheduleCallback,jp=en.unstable_cancelCallback,C_=en.unstable_shouldYield,P_=en.unstable_requestPaint,nt=en.unstable_now,R_=en.unstable_getCurrentPriorityLevel,Nh=en.unstable_ImmediatePriority,mg=en.unstable_UserBlockingPriority,rl=en.unstable_NormalPriority,L_=en.unstable_LowPriority,gg=en.unstable_IdlePriority,Tl=null,Qn=null;function D_(n){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Tl,n,void 0,(n.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:N_,I_=Math.log,k_=Math.LN2;function N_(n){return n>>>=0,n===0?32:31-(I_(n)/k_|0)|0}var Pa=64,Ra=4194304;function mo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function sl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=mo(a):(s&=o,s!==0&&(i=mo(s)))}else o=t&~r,o!==0?i=mo(o):s!==0&&(i=mo(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-In(e),r=1<<t,i|=n[t],e&=~r;return i}function z_(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F_(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=z_(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Qu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yg(){var n=Pa;return Pa<<=1,(Pa&4194240)===0&&(Pa=64),n}function _u(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Wo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-In(e),n[e]=t}function O_(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-In(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function zh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-In(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var He=0;function vg(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var xg,Fh,_g,wg,Mg,eh=!1,La=[],zi=null,Fi=null,Oi=null,Po=new Map,Ro=new Map,Di=[],B_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yp(n,e){switch(n){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":Po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function ro(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qo(e),e!==null&&Fh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function U_(n,e,t,i,r){switch(e){case"focusin":return zi=ro(zi,n,e,t,i,r),!0;case"dragenter":return Fi=ro(Fi,n,e,t,i,r),!0;case"mouseover":return Oi=ro(Oi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Po.set(s,ro(Po.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ro.set(s,ro(Ro.get(s)||null,n,e,t,i,r)),!0}return!1}function Sg(n){var e=ar(n.target);if(e!==null){var t=yr(e);if(t!==null){if(e=t.tag,e===13){if(e=hg(t),e!==null){n.blockedOn=e,Mg(n.priority,function(){_g(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Xa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=th(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);$u=i,t.target.dispatchEvent(i),$u=null}else return e=qo(t),e!==null&&Fh(e),n.blockedOn=t,!1;e.shift()}return!0}function $p(n,e,t){Xa(n)&&t.delete(e)}function V_(){eh=!1,zi!==null&&Xa(zi)&&(zi=null),Fi!==null&&Xa(Fi)&&(Fi=null),Oi!==null&&Xa(Oi)&&(Oi=null),Po.forEach($p),Ro.forEach($p)}function so(n,e){n.blockedOn===e&&(n.blockedOn=null,eh||(eh=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,V_)))}function Lo(n){function e(r){return so(r,n)}if(0<La.length){so(La[0],n);for(var t=1;t<La.length;t++){var i=La[t];i.blockedOn===n&&(i.blockedOn=null)}}for(zi!==null&&so(zi,n),Fi!==null&&so(Fi,n),Oi!==null&&so(Oi,n),Po.forEach(e),Ro.forEach(e),t=0;t<Di.length;t++)i=Di[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Di.length&&(t=Di[0],t.blockedOn===null);)Sg(t),t.blockedOn===null&&Di.shift()}var ss=mi.ReactCurrentBatchConfig,ol=!0;function H_(n,e,t,i){var r=He,s=ss.transition;ss.transition=null;try{He=1,Oh(n,e,t,i)}finally{He=r,ss.transition=s}}function W_(n,e,t,i){var r=He,s=ss.transition;ss.transition=null;try{He=4,Oh(n,e,t,i)}finally{He=r,ss.transition=s}}function Oh(n,e,t,i){if(ol){var r=th(n,e,t,i);if(r===null)Au(n,e,i,al,t),Yp(n,i);else if(U_(r,n,e,t,i))i.stopPropagation();else if(Yp(n,i),e&4&&-1<B_.indexOf(n)){for(;r!==null;){var s=qo(r);if(s!==null&&xg(s),s=th(n,e,t,i),s===null&&Au(n,e,i,al,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Au(n,e,i,null,t)}}var al=null;function th(n,e,t,i){if(al=null,n=kh(i),n=ar(n),n!==null)if(e=yr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=hg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return al=n,null}function bg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R_()){case Nh:return 1;case mg:return 4;case rl:case L_:return 16;case gg:return 536870912;default:return 16}default:return 16}}var ki=null,Bh=null,ja=null;function Eg(){if(ja)return ja;var n,e=Bh,t=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ja=r.slice(n,1<i?1-i:void 0)}function Ya(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Da(){return!0}function Zp(){return!1}function tn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:Zp,this.isPropagationStopped=Zp,this}return Je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=tn(ps),Go=Je({},ps,{view:0,detail:0}),G_=tn(Go),wu,Mu,oo,Al=Je({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oo&&(oo&&n.type==="mousemove"?(wu=n.screenX-oo.screenX,Mu=n.screenY-oo.screenY):Mu=wu=0,oo=n),wu)},movementY:function(n){return"movementY"in n?n.movementY:Mu}}),Jp=tn(Al),q_=Je({},Al,{dataTransfer:0}),X_=tn(q_),j_=Je({},Go,{relatedTarget:0}),Su=tn(j_),Y_=Je({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=tn(Y_),Z_=Je({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),J_=tn(Z_),K_=Je({},ps,{data:0}),Kp=tn(K_),Q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=t1[n])?!!e[n]:!1}function Vh(){return n1}var i1=Je({},Go,{key:function(n){if(n.key){var e=Q_[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ya(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?e1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vh,charCode:function(n){return n.type==="keypress"?Ya(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ya(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),r1=tn(i1),s1=Je({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=tn(s1),o1=Je({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vh}),a1=tn(o1),l1=Je({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),c1=tn(l1),u1=Je({},Al,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),h1=tn(u1),f1=[9,13,27,32],Hh=fi&&"CompositionEvent"in window,xo=null;fi&&"documentMode"in document&&(xo=document.documentMode);var d1=fi&&"TextEvent"in window&&!xo,Tg=fi&&(!Hh||xo&&8<xo&&11>=xo),em=String.fromCharCode(32),tm=!1;function Ag(n,e){switch(n){case"keyup":return f1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Xr=!1;function p1(n,e){switch(n){case"compositionend":return Cg(e);case"keypress":return e.which!==32?null:(tm=!0,em);case"textInput":return n=e.data,n===em&&tm?null:n;default:return null}}function m1(n,e){if(Xr)return n==="compositionend"||!Hh&&Ag(n,e)?(n=Eg(),ja=Bh=ki=null,Xr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tg&&e.locale!=="ko"?null:e.data;default:return null}}var g1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!g1[n.type]:e==="textarea"}function Pg(n,e,t,i){og(i),e=ll(e,"onChange"),0<e.length&&(t=new Uh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var _o=null,Do=null;function y1(n){Ug(n,0)}function Cl(n){var e=$r(n);if(Qm(e))return n}function v1(n,e){if(n==="change")return e}var Rg=!1;fi&&(fi?(ka="oninput"in document,ka||(bu=document.createElement("div"),bu.setAttribute("oninput","return;"),ka=typeof bu.oninput=="function"),Ia=ka):Ia=!1,Rg=Ia&&(!document.documentMode||9<document.documentMode));var Ia,ka,bu;function im(){_o&&(_o.detachEvent("onpropertychange",Lg),Do=_o=null)}function Lg(n){if(n.propertyName==="value"&&Cl(Do)){var e=[];Pg(e,Do,n,kh(n)),ug(y1,e)}}function x1(n,e,t){n==="focusin"?(im(),_o=e,Do=t,_o.attachEvent("onpropertychange",Lg)):n==="focusout"&&im()}function _1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Cl(Do)}function w1(n,e){if(n==="click")return Cl(e)}function M1(n,e){if(n==="input"||n==="change")return Cl(e)}function S1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var kn=typeof Object.is=="function"?Object.is:S1;function Io(n,e){if(kn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Fu.call(e,r)||!kn(n[r],e[r]))return!1}return!0}function rm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sm(n,e){var t=rm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=rm(t)}}function Dg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Dg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ig(){for(var n=window,e=tl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=tl(n.document)}return e}function Wh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function b1(n){var e=Ig(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Dg(t.ownerDocument.documentElement,t)){if(i!==null&&Wh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=sm(t,s);var o=sm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var E1=fi&&"documentMode"in document&&11>=document.documentMode,jr=null,nh=null,wo=null,ih=!1;function om(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ih||jr==null||jr!==tl(i)||(i=jr,"selectionStart"in i&&Wh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wo&&Io(wo,i)||(wo=i,i=ll(nh,"onSelect"),0<i.length&&(e=new Uh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=jr)))}function Na(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Yr={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Eu={},kg={};fi&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Pl(n){if(Eu[n])return Eu[n];if(!Yr[n])return n;var e=Yr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in kg)return Eu[n]=e[t];return n}var Ng=Pl("animationend"),zg=Pl("animationiteration"),Fg=Pl("animationstart"),Og=Pl("transitionend"),Bg=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(n,e){Bg.set(n,e),gr(e,[n])}for(za=0;za<am.length;za++)Fa=am[za],lm=Fa.toLowerCase(),cm=Fa[0].toUpperCase()+Fa.slice(1),qi(lm,"on"+cm);var Fa,lm,cm,za;qi(Ng,"onAnimationEnd");qi(zg,"onAnimationIteration");qi(Fg,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(Og,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T1=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function um(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,T_(i,e,void 0,n),n.currentTarget=null}function Ug(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;um(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;um(r,a,c),s=l}}}if(il)throw n=Ku,il=!1,Ku=null,n}function Xe(n,e){var t=e[lh];t===void 0&&(t=e[lh]=new Set);var i=n+"__bubble";t.has(i)||(Vg(e,n,2,!1),t.add(i))}function Tu(n,e,t){var i=0;e&&(i|=4),Vg(t,n,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function ko(n){if(!n[Oa]){n[Oa]=!0,Ym.forEach(function(t){t!=="selectionchange"&&(T1.has(t)||Tu(t,!1,n),Tu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,Tu("selectionchange",!1,e))}}function Vg(n,e,t,i){switch(bg(e)){case 1:var r=H_;break;case 4:r=W_;break;default:r=Oh}t=r.bind(null,e,t,n),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Au(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ar(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ug(function(){var c=s,u=kh(t),f=[];e:{var h=Bg.get(n);if(h!==void 0){var g=Uh,y=n;switch(n){case"keypress":if(Ya(t)===0)break e;case"keydown":case"keyup":g=r1;break;case"focusin":y="focus",g=Su;break;case"focusout":y="blur",g=Su;break;case"beforeblur":case"afterblur":g=Su;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=X_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=a1;break;case Ng:case zg:case Fg:g=$_;break;case Og:g=c1;break;case"scroll":g=G_;break;case"wheel":g=h1;break;case"copy":case"cut":case"paste":g=J_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qp}var p=(e&4)!==0,d=!p&&n==="scroll",m=p?h!==null?h+"Capture":null:h;p=[];for(var v=c,x;v!==null;){x=v;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,m!==null&&(_=Co(v,m),_!=null&&p.push(No(v,_,x)))),d)break;v=v.return}0<p.length&&(h=new g(h,y,null,t,u),f.push({event:h,listeners:p}))}}if((e&7)===0){e:{if(h=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",h&&t!==$u&&(y=t.relatedTarget||t.fromElement)&&(ar(y)||y[di]))break e;if((g||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=t.relatedTarget||t.toElement,g=c,y=y?ar(y):null,y!==null&&(d=yr(y),y!==d||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(p=Jp,_="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(p=Qp,_="onPointerLeave",m="onPointerEnter",v="pointer"),d=g==null?h:$r(g),x=y==null?h:$r(y),h=new p(_,v+"leave",g,t,u),h.target=d,h.relatedTarget=x,_=null,ar(u)===c&&(p=new p(m,v+"enter",y,t,u),p.target=x,p.relatedTarget=d,_=p),d=_,g&&y)t:{for(p=g,m=y,v=0,x=p;x;x=Wr(x))v++;for(x=0,_=m;_;_=Wr(_))x++;for(;0<v-x;)p=Wr(p),v--;for(;0<x-v;)m=Wr(m),x--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=Wr(p),m=Wr(m)}p=null}else p=null;g!==null&&hm(f,h,g,p,!1),y!==null&&d!==null&&hm(f,d,y,p,!0)}}e:{if(h=c?$r(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var M=v1;else if(nm(h))if(Rg)M=M1;else{M=_1;var A=x1}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=w1);if(M&&(M=M(n,c))){Pg(f,M,t,u);break e}A&&A(n,h,c),n==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Gu(h,"number",h.value)}switch(A=c?$r(c):window,n){case"focusin":(nm(A)||A.contentEditable==="true")&&(jr=A,nh=c,wo=null);break;case"focusout":wo=nh=jr=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,om(f,t,u);break;case"selectionchange":if(E1)break;case"keydown":case"keyup":om(f,t,u)}var R;if(Hh)e:{switch(n){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Xr?Ag(n,t)&&(w="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(w="onCompositionStart");w&&(Tg&&t.locale!=="ko"&&(Xr||w!=="onCompositionStart"?w==="onCompositionEnd"&&Xr&&(R=Eg()):(ki=u,Bh="value"in ki?ki.value:ki.textContent,Xr=!0)),A=ll(c,w),0<A.length&&(w=new Kp(w,n,null,t,u),f.push({event:w,listeners:A}),R?w.data=R:(R=Cg(t),R!==null&&(w.data=R)))),(R=d1?p1(n,t):m1(n,t))&&(c=ll(c,"onBeforeInput"),0<c.length&&(u=new Kp("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=R))}Ug(f,e)})}function No(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ll(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Co(n,t),s!=null&&i.unshift(No(n,s,r)),s=Co(n,e),s!=null&&i.push(No(n,s,r))),n=n.return}return i}function Wr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Co(t,s),l!=null&&o.unshift(No(t,l,a))):r||(l=Co(t,s),l!=null&&o.push(No(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var A1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function fm(n){return(typeof n=="string"?n:""+n).replace(A1,`
`).replace(C1,"")}function Ba(n,e,t){if(e=fm(e),fm(n)!==e&&t)throw Error(Z(425))}function cl(){}var rh=null,sh=null;function oh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,R1=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(n){return dm.resolve(null).then(n).catch(L1)}:ah;function L1(n){setTimeout(function(){throw n})}function Cu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Lo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Lo(e)}function li(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function pm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),Kn="__reactFiber$"+ms,zo="__reactProps$"+ms,di="__reactContainer$"+ms,lh="__reactEvents$"+ms,D1="__reactListeners$"+ms,I1="__reactHandles$"+ms;function ar(n){var e=n[Kn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[di]||t[Kn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=pm(n);n!==null;){if(t=n[Kn])return t;n=pm(n)}return e}n=t,t=n.parentNode}return null}function qo(n){return n=n[Kn]||n[di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $r(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Z(33))}function Rl(n){return n[zo]||null}var ch=[],Zr=-1;function Xi(n){return{current:n}}function je(n){0>Zr||(n.current=ch[Zr],ch[Zr]=null,Zr--)}function qe(n,e){Zr++,ch[Zr]=n.current,n.current=e}var Wi={},Rt=Xi(Wi),Xt=Xi(!1),hr=Wi;function cs(n,e){var t=n.type.contextTypes;if(!t)return Wi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function jt(n){return n=n.childContextTypes,n!=null}function ul(){je(Xt),je(Rt)}function mm(n,e,t){if(Rt.current!==Wi)throw Error(Z(168));qe(Rt,e),qe(Xt,t)}function Hg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,x_(n)||"Unknown",r));return Je({},t,i)}function hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Wi,hr=Rt.current,qe(Rt,n),qe(Xt,Xt.current),!0}function gm(n,e,t){var i=n.stateNode;if(!i)throw Error(Z(169));t?(n=Hg(n,e,hr),i.__reactInternalMemoizedMergedChildContext=n,je(Xt),je(Rt),qe(Rt,n)):je(Xt),qe(Xt,t)}var ai=null,Ll=!1,Pu=!1;function Wg(n){ai===null?ai=[n]:ai.push(n)}function k1(n){Ll=!0,Wg(n)}function ji(){if(!Pu&&ai!==null){Pu=!0;var n=0,e=He;try{var t=ai;for(He=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ai=null,Ll=!1}catch(r){throw ai!==null&&(ai=ai.slice(n+1)),pg(Nh,ji),r}finally{He=e,Pu=!1}}return null}var N1=mi.ReactCurrentBatchConfig;function Pn(n,e){if(n&&n.defaultProps){e=Je({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var fl=Xi(null),dl=null,Jr=null,Gh=null;function qh(){Gh=Jr=dl=null}function Xh(n){var e=fl.current;je(fl),n._currentValue=e}function uh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function os(n,e){dl=n,Gh=Jr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(qt=!0),n.firstContext=null)}function yn(n){var e=n._currentValue;if(Gh!==n)if(n={context:n,memoizedValue:e,next:null},Jr===null){if(dl===null)throw Error(Z(308));Jr=n,dl.dependencies={lanes:0,firstContext:n}}else Jr=Jr.next=n;return e}var Dn=null,Li=!1;function jh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(n,e){var t=n.updateQueue;t!==null&&(t=t.shared,I0(n)?(n=t.interleaved,n===null?(e.next=e,Dn===null?Dn=[t]:Dn.push(t)):(e.next=n.next,n.next=e),t.interleaved=e):(n=t.pending,n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e))}function $a(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,zh(n,t)}}function ym(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function pl(n,e,t,i){var r=n.updateQueue;Li=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=n,p=a;switch(h=e,g=t,p.tag){case 1:if(y=p.payload,typeof y=="function"){f=y.call(g,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=p.payload,h=typeof y=="function"?y.call(g,f,h):y,h==null)break e;f=Je({},f,h);break e;case 2:Li=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=f):u=u.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);pr|=o,n.lanes=o,n.memoizedState=f}}function vm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var qg=new jm.Component().refs;function hh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Je({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Dl={isMounted:function(n){return(n=n._reactInternals)?yr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Ft(),r=Vi(n),s=hi(i,r);s.payload=e,t!=null&&(s.callback=t),Bi(n,s),e=gn(n,r,i),e!==null&&$a(e,n,r)},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Ft(),r=Vi(n),s=hi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),Bi(n,s),e=gn(n,r,i),e!==null&&$a(e,n,r)},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Ft(),i=Vi(n),r=hi(t,i);r.tag=2,e!=null&&(r.callback=e),Bi(n,r),e=gn(n,i,t),e!==null&&$a(e,n,i)}};function xm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Io(t,i)||!Io(r,s):!0}function Xg(n,e,t){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=yn(s):(r=jt(e)?hr:Rt.current,i=e.contextTypes,s=(i=i!=null)?cs(n,r):Wi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function _m(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Dl.enqueueReplaceState(e,e.state,null)}function fh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=qg,jh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=yn(s):(s=jt(e)?hr:Rt.current,r.context=cs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Dl.enqueueReplaceState(r,r.state,null),pl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}var Kr=[],Qr=0,ml=null,gl=0,fn=[],dn=0,fr=null,ci=1,ui="";function sr(n,e){Kr[Qr++]=gl,Kr[Qr++]=ml,ml=n,gl=e}function jg(n,e,t){fn[dn++]=ci,fn[dn++]=ui,fn[dn++]=fr,fr=n;var i=ci;n=ui;var r=32-In(i)-1;i&=~(1<<r),t+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ci=1<<32-In(e)+r|t<<r|i,ui=s+n}else ci=1<<s|t<<r|i,ui=n}function Yh(n){n.return!==null&&(sr(n,1),jg(n,1,0))}function $h(n){for(;n===ml;)ml=Kr[--Qr],Kr[Qr]=null,gl=Kr[--Qr],Kr[Qr]=null;for(;n===fr;)fr=fn[--dn],fn[dn]=null,ui=fn[--dn],fn[dn]=null,ci=fn[--dn],fn[dn]=null}var Qt=null,Gt=null,Ye=!1,Ln=null;function Yg(n,e){var t=pn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function wm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Qt=n,Gt=li(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Qt=n,Gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=fr!==null?{id:ci,overflow:ui}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=pn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Qt=n,Gt=null,!0):!1;default:return!1}}function dh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ph(n){if(Ye){var e=Gt;if(e){var t=e;if(!wm(n,e)){if(dh(n))throw Error(Z(418));e=li(t.nextSibling);var i=Qt;e&&wm(n,e)?Yg(i,t):(n.flags=n.flags&-4097|2,Ye=!1,Qt=n)}}else{if(dh(n))throw Error(Z(418));n.flags=n.flags&-4097|2,Ye=!1,Qt=n}}}function Mm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qt=n}function ao(n){if(n!==Qt)return!1;if(!Ye)return Mm(n),Ye=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!oh(n.type,n.memoizedProps)),e&&(e=Gt)){if(dh(n)){for(n=Gt;n;)n=li(n.nextSibling);throw Error(Z(418))}for(;e;)Yg(n,e),e=li(e.nextSibling)}if(Mm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Z(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Gt=li(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Gt=null}}else Gt=Qt?li(n.stateNode.nextSibling):null;return!0}function us(){Gt=Qt=null,Ye=!1}function Zh(n){Ln===null?Ln=[n]:Ln.push(n)}function lo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Z(309));var i=t.stateNode}if(!i)throw Error(Z(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===qg&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Z(284));if(!t._owner)throw Error(Z(290,n))}return n}function Ua(n,e){throw n=Object.prototype.toString.call(e),Error(Z(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Sm(n){var e=n._init;return e(n._payload)}function $g(n){function e(m,v){if(n){var x=m.deletions;x===null?(m.deletions=[v],m.flags|=16):x.push(v)}}function t(m,v){if(!n)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Gi(m,v),m.index=0,m.sibling=null,m}function s(m,v,x){return m.index=x,n?(x=m.alternate,x!==null?(x=x.index,x<v?(m.flags|=2,v):x):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,v,x,_){return v===null||v.tag!==6?(v=Nu(x,m.mode,_),v.return=m,v):(v=r(v,x),v.return=m,v)}function l(m,v,x,_){var M=x.type;return M===qr?u(m,v,x.props.children,_,x.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ri&&Sm(M)===v.type)?(_=r(v,x.props),_.ref=lo(m,v,x),_.return=m,_):(_=el(x.type,x.key,x.props,null,m.mode,_),_.ref=lo(m,v,x),_.return=m,_)}function c(m,v,x,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=zu(x,m.mode,_),v.return=m,v):(v=r(v,x.children||[]),v.return=m,v)}function u(m,v,x,_,M){return v===null||v.tag!==7?(v=ur(x,m.mode,_,M),v.return=m,v):(v=r(v,x),v.return=m,v)}function f(m,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nu(""+v,m.mode,x),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ta:return x=el(v.type,v.key,v.props,null,m.mode,x),x.ref=lo(m,null,v),x.return=m,x;case Gr:return v=zu(v,m.mode,x),v.return=m,v;case Ri:var _=v._init;return f(m,_(v._payload),x)}if(po(v)||io(v))return v=ur(v,m.mode,x,null),v.return=m,v;Ua(m,v)}return null}function h(m,v,x,_){var M=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:a(m,v,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ta:return x.key===M?l(m,v,x,_):null;case Gr:return x.key===M?c(m,v,x,_):null;case Ri:return M=x._init,h(m,v,M(x._payload),_)}if(po(x)||io(x))return M!==null?null:u(m,v,x,_,null);Ua(m,x)}return null}function g(m,v,x,_,M){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(x)||null,a(v,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ta:return m=m.get(_.key===null?x:_.key)||null,l(v,m,_,M);case Gr:return m=m.get(_.key===null?x:_.key)||null,c(v,m,_,M);case Ri:var A=_._init;return g(m,v,x,A(_._payload),M)}if(po(_)||io(_))return m=m.get(x)||null,u(v,m,_,M,null);Ua(v,_)}return null}function y(m,v,x,_){for(var M=null,A=null,R=v,w=v=0,C=null;R!==null&&w<x.length;w++){R.index>w?(C=R,R=null):C=R.sibling;var D=h(m,R,x[w],_);if(D===null){R===null&&(R=C);break}n&&R&&D.alternate===null&&e(m,R),v=s(D,v,w),A===null?M=D:A.sibling=D,A=D,R=C}if(w===x.length)return t(m,R),Ye&&sr(m,w),M;if(R===null){for(;w<x.length;w++)R=f(m,x[w],_),R!==null&&(v=s(R,v,w),A===null?M=R:A.sibling=R,A=R);return Ye&&sr(m,w),M}for(R=i(m,R);w<x.length;w++)C=g(R,m,w,x[w],_),C!==null&&(n&&C.alternate!==null&&R.delete(C.key===null?w:C.key),v=s(C,v,w),A===null?M=C:A.sibling=C,A=C);return n&&R.forEach(function(z){return e(m,z)}),Ye&&sr(m,w),M}function p(m,v,x,_){var M=io(x);if(typeof M!="function")throw Error(Z(150));if(x=M.call(x),x==null)throw Error(Z(151));for(var A=M=null,R=v,w=v=0,C=null,D=x.next();R!==null&&!D.done;w++,D=x.next()){R.index>w?(C=R,R=null):C=R.sibling;var z=h(m,R,D.value,_);if(z===null){R===null&&(R=C);break}n&&R&&z.alternate===null&&e(m,R),v=s(z,v,w),A===null?M=z:A.sibling=z,A=z,R=C}if(D.done)return t(m,R),Ye&&sr(m,w),M;if(R===null){for(;!D.done;w++,D=x.next())D=f(m,D.value,_),D!==null&&(v=s(D,v,w),A===null?M=D:A.sibling=D,A=D);return Ye&&sr(m,w),M}for(R=i(m,R);!D.done;w++,D=x.next())D=g(R,m,w,D.value,_),D!==null&&(n&&D.alternate!==null&&R.delete(D.key===null?w:D.key),v=s(D,v,w),A===null?M=D:A.sibling=D,A=D);return n&&R.forEach(function(Q){return e(m,Q)}),Ye&&sr(m,w),M}function d(m,v,x,_){if(typeof x=="object"&&x!==null&&x.type===qr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ta:e:{for(var M=x.key,A=v;A!==null;){if(A.key===M){if(M=x.type,M===qr){if(A.tag===7){t(m,A.sibling),v=r(A,x.props.children),v.return=m,m=v;break e}}else if(A.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ri&&Sm(M)===A.type){t(m,A.sibling),v=r(A,x.props),v.ref=lo(m,A,x),v.return=m,m=v;break e}t(m,A);break}else e(m,A);A=A.sibling}x.type===qr?(v=ur(x.props.children,m.mode,_,x.key),v.return=m,m=v):(_=el(x.type,x.key,x.props,null,m.mode,_),_.ref=lo(m,v,x),_.return=m,m=_)}return o(m);case Gr:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(m,v.sibling),v=r(v,x.children||[]),v.return=m,m=v;break e}else{t(m,v);break}else e(m,v);v=v.sibling}v=zu(x,m.mode,_),v.return=m,m=v}return o(m);case Ri:return A=x._init,d(m,v,A(x._payload),_)}if(po(x))return y(m,v,x,_);if(io(x))return p(m,v,x,_);Ua(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(m,v.sibling),v=r(v,x),v.return=m,m=v):(t(m,v),v=Nu(x,m.mode,_),v.return=m,m=v),o(m)):t(m,v)}return d}var hs=$g(!0),Zg=$g(!1),Xo={},ei=Xi(Xo),Fo=Xi(Xo),Oo=Xi(Xo);function lr(n){if(n===Xo)throw Error(Z(174));return n}function Jh(n,e){switch(qe(Oo,e),qe(Fo,n),qe(ei,Xo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Xu(e,n)}je(ei),qe(ei,e)}function fs(){je(ei),je(Fo),je(Oo)}function Jg(n){lr(Oo.current);var e=lr(ei.current),t=Xu(e,n.type);e!==t&&(qe(Fo,n),qe(ei,t))}function Kh(n){Fo.current===n&&(je(ei),je(Fo))}var $e=Xi(0);function yl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function Qh(){for(var n=0;n<Ru.length;n++)Ru[n]._workInProgressVersionPrimary=null;Ru.length=0}var Za=mi.ReactCurrentDispatcher,Lu=mi.ReactCurrentBatchConfig,dr=0,Ze=null,lt=null,mt=null,vl=!1,Mo=!1,Bo=0,z1=0;function At(){throw Error(Z(321))}function ef(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!kn(n[t],e[t]))return!1;return!0}function tf(n,e,t,i,r,s){if(dr=s,Ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=n===null||n.memoizedState===null?U1:V1,n=t(i,r),Mo){s=0;do{if(Mo=!1,Bo=0,25<=s)throw Error(Z(301));s+=1,mt=lt=null,e.updateQueue=null,Za.current=H1,n=t(i,r)}while(Mo)}if(Za.current=xl,e=lt!==null&&lt.next!==null,dr=0,mt=lt=Ze=null,vl=!1,e)throw Error(Z(300));return n}function nf(){var n=Bo!==0;return Bo=0,n}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ze.memoizedState=mt=n:mt=mt.next=n,mt}function vn(){if(lt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=lt.next;var e=mt===null?Ze.memoizedState:mt.next;if(e!==null)mt=e,lt=n;else{if(n===null)throw Error(Z(310));lt=n,n={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},mt===null?Ze.memoizedState=mt=n:mt=mt.next=n}return mt}function Uo(n,e){return typeof e=="function"?e(n):e}function Du(n){var e=vn(),t=e.queue;if(t===null)throw Error(Z(311));t.lastRenderedReducer=n;var i=lt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((dr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ze.lanes|=u,pr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ze.lanes|=s,pr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Iu(n){var e=vn(),t=e.queue;if(t===null)throw Error(Z(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Kg(){}function Qg(n,e){var t=Ze,i=vn(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,qt=!0),i=i.queue,rf(n0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||mt!==null&&mt.memoizedState.tag&1){if(t.flags|=2048,Vo(9,t0.bind(null,t,i,r,e),void 0,null),ut===null)throw Error(Z(349));(dr&30)!==0||e0(t,e,r)}return r}function e0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function t0(n,e,t,i){e.value=t,e.getSnapshot=i,i0(e)&&gn(n,1,-1)}function n0(n,e,t){return t(function(){i0(e)&&gn(n,1,-1)})}function i0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!kn(n,t)}catch{return!0}}function bm(n){var e=Jn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:n},e.queue=n,n=n.dispatch=B1.bind(null,Ze,n),[e.memoizedState,n]}function Vo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function r0(){return vn().memoizedState}function Ja(n,e,t,i){var r=Jn();Ze.flags|=n,r.memoizedState=Vo(1|e,t,void 0,i===void 0?null:i)}function Il(n,e,t,i){var r=vn();i=i===void 0?null:i;var s=void 0;if(lt!==null){var o=lt.memoizedState;if(s=o.destroy,i!==null&&ef(i,o.deps)){r.memoizedState=Vo(e,t,s,i);return}}Ze.flags|=n,r.memoizedState=Vo(1|e,t,s,i)}function Em(n,e){return Ja(8390656,8,n,e)}function rf(n,e){return Il(2048,8,n,e)}function s0(n,e){return Il(4,2,n,e)}function o0(n,e){return Il(4,4,n,e)}function a0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function l0(n,e,t){return t=t!=null?t.concat([n]):null,Il(4,4,a0.bind(null,e,n),t)}function sf(){}function c0(n,e){var t=vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ef(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function u0(n,e){var t=vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ef(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function h0(n,e,t){return(dr&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=t):(kn(t,e)||(t=yg(),Ze.lanes|=t,pr|=t,n.baseState=!0),e)}function F1(n,e){var t=He;He=t!==0&&4>t?t:4,n(!0);var i=Lu.transition;Lu.transition={};try{n(!1),e()}finally{He=t,Lu.transition=i}}function f0(){return vn().memoizedState}function O1(n,e,t){var i=Vi(n);t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},d0(n)?p0(e,t):(m0(n,e,t),t=Ft(),n=gn(n,i,t),n!==null&&g0(n,e,i))}function B1(n,e,t){var i=Vi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(d0(n))p0(e,r);else{m0(n,e,r);var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o))return}catch{}finally{}t=Ft(),n=gn(n,i,t),n!==null&&g0(n,e,i)}}function d0(n){var e=n.alternate;return n===Ze||e!==null&&e===Ze}function p0(n,e){Mo=vl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function m0(n,e,t){I0(n)?(n=e.interleaved,n===null?(t.next=t,Dn===null?Dn=[e]:Dn.push(e)):(t.next=n.next,n.next=t),e.interleaved=t):(n=e.pending,n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t)}function g0(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,zh(n,t)}}var xl={readContext:yn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},U1={readContext:yn,useCallback:function(n,e){return Jn().memoizedState=[n,e===void 0?null:e],n},useContext:yn,useEffect:Em,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ja(4194308,4,a0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ja(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ja(4,2,n,e)},useMemo:function(n,e){var t=Jn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Jn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=O1.bind(null,Ze,n),[i.memoizedState,n]},useRef:function(n){var e=Jn();return n={current:n},e.memoizedState=n},useState:bm,useDebugValue:sf,useDeferredValue:function(n){return Jn().memoizedState=n},useTransition:function(){var n=bm(!1),e=n[0];return n=F1.bind(null,n[1]),Jn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ze,r=Jn();if(Ye){if(t===void 0)throw Error(Z(407));t=t()}else{if(t=e(),ut===null)throw Error(Z(349));(dr&30)!==0||e0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Em(n0.bind(null,i,s,n),[n]),i.flags|=2048,Vo(9,t0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Jn(),e=ut.identifierPrefix;if(Ye){var t=ui,i=ci;t=(i&~(1<<32-In(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Bo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=z1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},V1={readContext:yn,useCallback:c0,useContext:yn,useEffect:rf,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:u0,useReducer:Du,useRef:r0,useState:function(){return Du(Uo)},useDebugValue:sf,useDeferredValue:function(n){var e=vn();return h0(e,lt.memoizedState,n)},useTransition:function(){var n=Du(Uo)[0],e=vn().memoizedState;return[n,e]},useMutableSource:Kg,useSyncExternalStore:Qg,useId:f0,unstable_isNewReconciler:!1},H1={readContext:yn,useCallback:c0,useContext:yn,useEffect:rf,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:u0,useReducer:Iu,useRef:r0,useState:function(){return Iu(Uo)},useDebugValue:sf,useDeferredValue:function(n){var e=vn();return lt===null?e.memoizedState=n:h0(e,lt.memoizedState,n)},useTransition:function(){var n=Iu(Uo)[0],e=vn().memoizedState;return[n,e]},useMutableSource:Kg,useSyncExternalStore:Qg,useId:f0,unstable_isNewReconciler:!1};function of(n,e){try{var t="",i=e;do t+=v_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r}}function mh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var W1=typeof WeakMap=="function"?WeakMap:Map;function y0(n,e,t){t=hi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){wl||(wl=!0,bh=i),mh(n,e)},t}function v0(n,e,t){t=hi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){mh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){mh(n,e),typeof i!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Tm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new W1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=nw.bind(null,n,e,t),e.then(n,n))}function Am(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Cm(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=hi(-1,1),e.tag=2,Bi(t,e))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var x0,gh,_0,w0;x0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};gh=function(){};_0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,lr(ei.current);var s=null;switch(t){case"input":r=Hu(n,r),i=Hu(n,i),s=[];break;case"select":r=Je({},r,{value:void 0}),i=Je({},i,{value:void 0}),s=[];break;case"textarea":r=qu(n,r),i=qu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=cl)}ju(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(To.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(To.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Xe("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};w0=function(n,e,t,i){t!==i&&(e.flags|=4)};function co(n,e){if(!Ye)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Ct(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function G1(n,e,t){var i=e.pendingProps;switch($h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return jt(e.type)&&ul(),Ct(e),null;case 3:return i=e.stateNode,fs(),je(Xt),je(Rt),Qh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ao(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ln!==null&&(Ah(Ln),Ln=null))),gh(n,e),Ct(e),null;case 5:Kh(e);var r=lr(Oo.current);if(t=e.type,n!==null&&e.stateNode!=null)_0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Ct(e),null}if(n=lr(ei.current),ao(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[zo]=s,n=(e.mode&1)!==0,t){case"dialog":Xe("cancel",i),Xe("close",i);break;case"iframe":case"object":case"embed":Xe("load",i);break;case"video":case"audio":for(r=0;r<go.length;r++)Xe(go[r],i);break;case"source":Xe("error",i);break;case"img":case"image":case"link":Xe("error",i),Xe("load",i);break;case"details":Xe("toggle",i);break;case"input":Vp(i,s),Xe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Xe("invalid",i);break;case"textarea":Wp(i,s),Xe("invalid",i)}ju(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,n),r=["children",""+a]):To.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Xe("scroll",i)}switch(t){case"input":Aa(i),Hp(i,s,!0);break;case"textarea":Aa(i),Gp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ng(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Kn]=e,n[zo]=i,x0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Yu(t,i),t){case"dialog":Xe("cancel",n),Xe("close",n),r=i;break;case"iframe":case"object":case"embed":Xe("load",n),r=i;break;case"video":case"audio":for(r=0;r<go.length;r++)Xe(go[r],n);r=i;break;case"source":Xe("error",n),r=i;break;case"img":case"image":case"link":Xe("error",n),Xe("load",n),r=i;break;case"details":Xe("toggle",n),r=i;break;case"input":Vp(n,i),r=Hu(n,i),Xe("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Je({},i,{value:void 0}),Xe("invalid",n);break;case"textarea":Wp(n,i),r=qu(n,i),Xe("invalid",n);break;default:r=i}ju(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?sg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ig(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ao(n,l):typeof l=="number"&&Ao(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Xe("scroll",n):l!=null&&Rh(n,s,l,o))}switch(t){case"input":Aa(n),Hp(n,i,!1);break;case"textarea":Aa(n),Gp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Hi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ns(n,!!i.multiple,s,!1):i.defaultValue!=null&&ns(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=cl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(n&&e.stateNode!=null)w0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(t=lr(Oo.current),lr(ei.current),ao(e)){if(i=e.stateNode,t=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==t)&&(n=Qt,n!==null))switch(n.tag){case 3:Ba(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ba(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return Ct(e),null;case 13:if(je($e),i=e.memoizedState,Ye&&Gt!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(i=Gt;i;)i=li(i.nextSibling);return us(),e.flags|=98560,e}if(i!==null&&i.dehydrated!==null){if(i=ao(e),n===null){if(!i)throw Error(Z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Z(317));i[Kn]=e}else us(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return Ct(e),null}return Ln!==null&&(Ah(Ln),Ln=null),(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,t=!1,n===null?ao(e):t=n.memoizedState!==null,i!==t&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||($e.current&1)!==0?ct===0&&(ct=3):ff())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return fs(),gh(n,e),n===null&&ko(e.stateNode.containerInfo),Ct(e),null;case 10:return Xh(e.type._context),Ct(e),null;case 17:return jt(e.type)&&ul(),Ct(e),null;case 19:if(je($e),s=e.memoizedState,s===null)return Ct(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)co(s,!1);else{if(ct!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=yl(n),o!==null){for(e.flags|=128,co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return qe($e,$e.current&1|2),e.child}n=n.sibling}s.tail!==null&&nt()>ds&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304)}else{if(!i)if(n=yl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ye)return Ct(e),null}else 2*nt()-s.renderingStartTime>ds&&t!==1073741824&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,t=$e.current,qe($e,i?t&1|2:t&1),e):(Ct(e),null);case 22:case 23:return hf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Kt&1073741824)!==0&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}var q1=mi.ReactCurrentOwner,qt=!1;function zt(n,e,t,i){e.child=n===null?Zg(e,null,t,i):hs(e,n.child,t,i)}function Pm(n,e,t,i,r){t=t.render;var s=e.ref;return os(e,r),i=tf(n,e,t,i,s,r),t=nf(),n!==null&&!qt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,pi(n,e,r)):(Ye&&t&&Yh(e),e.flags|=1,zt(n,e,i,r),e.child)}function Rm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!df(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,M0(n,e,s,i,r)):(n=el(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Io,t(o,i)&&n.ref===e.ref)return pi(n,e,r)}return e.flags|=1,n=Gi(s,i),n.ref=e.ref,n.return=e,e.child=n}function M0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Io(s,i)&&n.ref===e.ref)if(qt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(qt=!0);else return e.lanes=n.lanes,pi(n,e,r)}return yh(n,e,t,i,r)}function S0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(ts,Kt),Kt|=t;else if((t&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,qe(ts,Kt),Kt|=i;else return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,qe(ts,Kt),Kt|=n,null;else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,qe(ts,Kt),Kt|=i;return zt(n,e,r,t),e.child}function b0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function yh(n,e,t,i,r){var s=jt(t)?hr:Rt.current;return s=cs(e,s),os(e,r),t=tf(n,e,t,i,s,r),i=nf(),n!==null&&!qt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,pi(n,e,r)):(Ye&&i&&Yh(e),e.flags|=1,zt(n,e,t,r),e.child)}function Lm(n,e,t,i,r){if(jt(t)){var s=!0;hl(e)}else s=!1;if(os(e,r),e.stateNode===null)n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),Xg(e,t,i),fh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=yn(c):(c=jt(t)?hr:Rt.current,c=cs(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_m(e,o,i,c),Li=!1;var h=e.memoizedState;o.state=h,pl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Xt.current||Li?(typeof u=="function"&&(hh(e,t,u,i),l=e.memoizedState),(a=Li||xm(e,t,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Gg(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=jt(t)?hr:Rt.current,l=cs(e,l));var g=t.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&_m(e,o,i,l),Li=!1,h=e.memoizedState,o.state=h,pl(e,i,o,r);var y=e.memoizedState;a!==f||h!==y||Xt.current||Li?(typeof g=="function"&&(hh(e,t,g,i),y=e.memoizedState),(c=Li||xm(e,t,c,i,h,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return vh(n,e,t,i,s,r)}function vh(n,e,t,i,r,s){b0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&gm(e,t,!1),pi(n,e,s);i=e.stateNode,q1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=hs(e,n.child,null,s),e.child=hs(e,null,a,s)):zt(n,e,a,s),e.memoizedState=i.state,r&&gm(e,t,!0),e.child}function E0(n){var e=n.stateNode;e.pendingContext?mm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&mm(n,e.context,!1),Jh(n,e.containerInfo)}function Dm(n,e,t,i,r){return us(),Zh(r),e.flags|=256,zt(n,e,t,i),e.child}var Va={dehydrated:null,treeContext:null,retryLane:0};function Ha(n){return{baseLanes:n,cachePool:null,transitions:null}}function Im(n,e){return{baseLanes:n.baseLanes|e,cachePool:null,transitions:n.transitions}}function T0(n,e,t){var i=e.pendingProps,r=$e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),qe($e,r&1),n===null)return ph(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(r=i.children,n=i.fallback,s?(i=e.mode,s=e.child,r={mode:"hidden",children:r},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=r):s=bl(r,i,0,null),n=ur(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ha(t),e.memoizedState=Va,n):xh(e,r));if(r=n.memoizedState,r!==null){if(a=r.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,Wa(n,e,t,Error(Z(422)))):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bl({mode:"visible",children:i.children},r,0,null),s=ur(s,r,t,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&hs(e,n.child,null,t),e.child.memoizedState=Ha(t),e.memoizedState=Va,s);if((e.mode&1)===0)e=Wa(n,e,t,null);else if(a.data==="$!")e=Wa(n,e,t,Error(Z(419)));else if(i=(t&n.childLanes)!==0,qt||i){if(i=ut,i!==null){switch(t&-t){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}i=(s&(i.suspendedLanes|t))!==0?0:s,i!==0&&i!==r.retryLane&&(r.retryLane=i,gn(n,i,-1))}ff(),e=Wa(n,e,t,Error(Z(421)))}else a.data==="$?"?(e.flags|=128,e.child=n.child,e=iw.bind(null,n),a._reactRetry=e,e=null):(t=r.treeContext,Gt=li(a.nextSibling),Qt=e,Ye=!0,Ln=null,t!==null&&(fn[dn++]=ci,fn[dn++]=ui,fn[dn++]=fr,ci=t.id,ui=t.overflow,fr=e),e=xh(e,e.pendingProps.children),e.flags|=4096);return e}return s?(i=Nm(n,e,i.children,i.fallback,t),s=e.child,r=n.child.memoizedState,s.memoizedState=r===null?Ha(t):Im(r,t),s.childLanes=n.childLanes&~t,e.memoizedState=Va,i):(t=km(n,e,i.children,t),e.memoizedState=null,t)}return s?(i=Nm(n,e,i.children,i.fallback,t),s=e.child,r=n.child.memoizedState,s.memoizedState=r===null?Ha(t):Im(r,t),s.childLanes=n.childLanes&~t,e.memoizedState=Va,i):(t=km(n,e,i.children,t),e.memoizedState=null,t)}function xh(n,e){return e=bl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function km(n,e,t,i){var r=n.child;return n=r.sibling,t=Gi(r,{mode:"visible",children:t}),(e.mode&1)===0&&(t.lanes=i),t.return=e,t.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=t}function Nm(n,e,t,i,r){var s=e.mode;n=n.child;var o=n.sibling,a={mode:"hidden",children:t};return(s&1)===0&&e.child!==n?(t=e.child,t.childLanes=0,t.pendingProps=a,e.deletions=null):(t=Gi(n,a),t.subtreeFlags=n.subtreeFlags&14680064),o!==null?i=Gi(o,i):(i=ur(i,s,r,null),i.flags|=2),i.return=e,t.return=e,t.sibling=i,e.child=t,i}function Wa(n,e,t,i){return i!==null&&Zh(i),hs(e,n.child,null,t),n=xh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function zm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),uh(n.return,e,t)}function ku(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function A0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(zt(n,e,i.children,t),i=$e.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zm(n,t,e);else if(n.tag===19)zm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(qe($e,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&yl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ku(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&yl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ku(e,!0,t,null,s);break;case"together":ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),pr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(Z(153));if(e.child!==null){for(n=e.child,t=Gi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Gi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function X1(n,e,t){switch(e.tag){case 3:E0(e),us();break;case 5:Jg(e);break;case 1:jt(e.type)&&hl(e);break;case 4:Jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;qe(fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(qe($e,$e.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?T0(n,e,t):(qe($e,$e.current&1),n=pi(n,e,t),n!==null?n.sibling:null);qe($e,$e.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return A0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),qe($e,$e.current),i)break;return null;case 22:case 23:return e.lanes=0,S0(n,e,t)}return pi(n,e,t)}function j1(n,e){switch($h(e),e.tag){case 1:return jt(e.type)&&ul(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return fs(),je(Xt),je(Rt),Qh(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Kh(e),null;case 13:if(je($e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));us()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return je($e),null;case 4:return fs(),null;case 10:return Xh(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Ga=!1,Pt=!1,Y1=typeof WeakSet=="function"?WeakSet:Set,de=null;function es(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){tt(n,e,i)}else t.current=null}function _h(n,e,t){try{t()}catch(i){tt(n,e,i)}}var Fm=!1;function $1(n,e){if(rh=ol,n=Ig(),Wh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=n,h=null;t:for(;;){for(var g;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(sh={focusedElem:n,selectionRange:t},ol=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var p=y.memoizedProps,d=y.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:Pn(e.type,p),d);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;if(x.nodeType===1)x.textContent="";else if(x.nodeType===9){var _=x.body;_!=null&&(_.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(M){tt(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return y=Fm,Fm=!1,y}function So(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&_h(e,t,s)}r=r.next}while(r!==i)}}function kl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function wh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function C0(n){var e=n.alternate;e!==null&&(n.alternate=null,C0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Kn],delete e[zo],delete e[lh],delete e[D1],delete e[I1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function P0(n){return n.tag===5||n.tag===3||n.tag===4}function Om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||P0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=cl));else if(i!==4&&(n=n.child,n!==null))for(Mh(n,e,t),n=n.sibling;n!==null;)Mh(n,e,t),n=n.sibling}function Sh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Sh(n,e,t),n=n.sibling;n!==null;)Sh(n,e,t),n=n.sibling}var _t=null,Rn=!1;function Pi(n,e,t){for(t=t.child;t!==null;)R0(n,e,t),t=t.sibling}function R0(n,e,t){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Tl,t)}catch{}switch(t.tag){case 5:Pt||es(t,e);case 6:var i=_t,r=Rn;_t=null,Pi(n,e,t),_t=i,Rn=r,_t!==null&&(Rn?(n=_t,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_t.removeChild(t.stateNode));break;case 18:_t!==null&&(Rn?(n=_t,t=t.stateNode,n.nodeType===8?Cu(n.parentNode,t):n.nodeType===1&&Cu(n,t),Lo(n)):Cu(_t,t.stateNode));break;case 4:i=_t,r=Rn,_t=t.stateNode.containerInfo,Rn=!0,Pi(n,e,t),_t=i,Rn=r;break;case 0:case 11:case 14:case 15:if(!Pt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&_h(t,e,o),r=r.next}while(r!==i)}Pi(n,e,t);break;case 1:if(!Pt&&(es(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){tt(t,e,a)}Pi(n,e,t);break;case 21:Pi(n,e,t);break;case 22:t.mode&1?(Pt=(i=Pt)||t.memoizedState!==null,Pi(n,e,t),Pt=i):Pi(n,e,t);break;default:Pi(n,e,t)}}function Bm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Y1),e.forEach(function(i){var r=rw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Cn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_t=a.stateNode,Rn=!1;break e;case 3:_t=a.stateNode.containerInfo,Rn=!0;break e;case 4:_t=a.stateNode.containerInfo,Rn=!0;break e}a=a.return}if(_t===null)throw Error(Z(160));R0(s,o,r),_t=null,Rn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L0(e,n),e=e.sibling}function L0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(e,n),Zn(n),i&4){try{So(3,n,n.return),kl(3,n)}catch(y){tt(n,n.return,y)}try{So(5,n,n.return)}catch(y){tt(n,n.return,y)}}break;case 1:Cn(e,n),Zn(n),i&512&&t!==null&&es(t,t.return);break;case 5:if(Cn(e,n),Zn(n),i&512&&t!==null&&es(t,t.return),n.flags&32){var r=n.stateNode;try{Ao(r,"")}catch(y){tt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&eg(r,s),Yu(a,o);var c=Yu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?sg(r,f):u==="dangerouslySetInnerHTML"?ig(r,f):u==="children"?Ao(r,f):Rh(r,u,f,c)}switch(a){case"input":Wu(r,s);break;case"textarea":tg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ns(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ns(r,!!s.multiple,s.defaultValue,!0):ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[zo]=s}catch(y){tt(n,n.return,y)}}break;case 6:if(Cn(e,n),Zn(n),i&4){if(n.stateNode===null)throw Error(Z(162));c=n.stateNode,u=n.memoizedProps;try{c.nodeValue=u}catch(y){tt(n,n.return,y)}}break;case 3:if(Cn(e,n),Zn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(y){tt(n,n.return,y)}break;case 4:Cn(e,n),Zn(n);break;case 13:Cn(e,n),Zn(n),c=n.child,c.flags&8192&&c.memoizedState!==null&&(c.alternate===null||c.alternate.memoizedState===null)&&(cf=nt()),i&4&&Bm(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Pt=(u=Pt)||c,Cn(e,n),Pt=u):Cn(e,n),Zn(n),i&8192){u=n.memoizedState!==null;e:for(f=null,h=n;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rg("display",o))}catch(y){tt(n,n.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){tt(n,n.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}if(u&&!c&&(n.mode&1)!==0)for(de=n,n=n.child;n!==null;){for(c=de=n;de!==null;){switch(u=de,f=u.child,u.tag){case 0:case 11:case 14:case 15:So(4,u,u.return);break;case 1:if(es(u,u.return),s=u.stateNode,typeof s.componentWillUnmount=="function"){h=u,g=u.return;try{r=h,s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(y){tt(h,g,y)}}break;case 5:es(u,u.return);break;case 22:if(u.memoizedState!==null){Vm(c);continue}}f!==null?(f.return=u,de=f):Vm(c)}n=n.sibling}}break;case 19:Cn(e,n),Zn(n),i&4&&Bm(n);break;case 21:break;default:Cn(e,n),Zn(n)}}function Zn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(P0(t)){var i=t;break e}t=t.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ao(r,""),i.flags&=-33);var s=Om(n);Sh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Om(n);Mh(n,a,o);break;default:throw Error(Z(161))}}catch(l){tt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Z1(n,e,t){de=n,D0(n,e,t)}function D0(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pt;a=Ga;var c=Pt;if(Ga=o,(Pt=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Hm(r):l!==null?(l.return=o,de=l):Hm(r);for(;s!==null;)de=s,D0(s,e,t),s=s.sibling;de=r,Ga=a,Pt=c}Um(n,e,t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,de=s):Um(n,e,t)}}function Um(n){for(;de!==null;){var e=de;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Pt||kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Pn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}vm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Lo(f)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(Z(163))}Pt||e.flags&512&&wh(e)}catch(h){tt(e,e.return,h)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function Vm(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function Hm(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{kl(4,e)}catch(l){tt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){tt(e,r,l)}}var s=e.return;try{wh(e)}catch(l){tt(e,s,l)}break;case 5:var o=e.return;try{wh(e)}catch(l){tt(e,o,l)}}}catch(l){tt(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var J1=Math.ceil,_l=mi.ReactCurrentDispatcher,af=mi.ReactCurrentOwner,mn=mi.ReactCurrentBatchConfig,Ie=0,ut=null,rt=null,wt=0,Kt=0,ts=Xi(0),ct=0,Ho=null,pr=0,Nl=0,lf=0,bo=null,Wt=null,cf=0,ds=1/0,oi=null,wl=!1,bh=null,Ui=null,qa=!1,Ni=null,Ml=0,Eo=0,Eh=null,Ka=-1,Qa=0;function Ft(){return(Ie&6)!==0?nt():Ka!==-1?Ka:Ka=nt()}function Vi(n){return(n.mode&1)===0?1:(Ie&2)!==0&&wt!==0?wt&-wt:N1.transition!==null?(Qa===0&&(Qa=yg()),Qa):(n=He,n!==0||(n=window.event,n=n===void 0?16:bg(n.type)),n)}function gn(n,e,t){if(50<Eo)throw Eo=0,Eh=null,Error(Z(185));var i=zl(n,e);return i===null?null:(Wo(i,e,t),((Ie&2)===0||i!==ut)&&(i===ut&&((Ie&2)===0&&(Nl|=e),ct===4&&Ii(i,wt)),Yt(i,t),e===1&&Ie===0&&(n.mode&1)===0&&(ds=nt()+500,Ll&&ji())),i)}function zl(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}function I0(n){return(ut!==null||Dn!==null)&&(n.mode&1)!==0&&(Ie&2)===0}function Yt(n,e){var t=n.callbackNode;F_(n,e);var i=sl(n,n===ut?wt:0);if(i===0)t!==null&&jp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&jp(t),e===1)n.tag===0?k1(Wm.bind(null,n)):Wg(Wm.bind(null,n)),R1(function(){Ie===0&&ji()}),t=null;else{switch(vg(i)){case 1:t=Nh;break;case 4:t=mg;break;case 16:t=rl;break;case 536870912:t=gg;break;default:t=rl}t=V0(t,k0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function k0(n,e){if(Ka=-1,Qa=0,(Ie&6)!==0)throw Error(Z(327));var t=n.callbackNode;if(as()&&n.callbackNode!==t)return null;var i=sl(n,n===ut?wt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Sl(n,i);else{e=i;var r=Ie;Ie|=2;var s=z0();(ut!==n||wt!==e)&&(oi=null,ds=nt()+500,cr(n,e));do try{ew();break}catch(a){N0(n,a)}while(1);qh(),_l.current=s,Ie=r,rt!==null?e=0:(ut=null,wt=0,e=ct)}if(e!==0){if(e===2&&(r=Qu(n),r!==0&&(i=r,e=Th(n,r))),e===1)throw t=Ho,cr(n,0),Ii(n,i),Yt(n,nt()),t;if(e===6)Ii(n,i);else{if(r=n.current.alternate,(i&30)===0&&!K1(r)&&(e=Sl(n,i),e===2&&(s=Qu(n),s!==0&&(i=s,e=Th(n,s))),e===1))throw t=Ho,cr(n,0),Ii(n,i),Yt(n,nt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:or(n,Wt,oi);break;case 3:if(Ii(n,i),(i&130023424)===i&&(e=cf+500-nt(),10<e)){if(sl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Ft(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ah(or.bind(null,n,Wt,oi),e);break}or(n,Wt,oi);break;case 4:if(Ii(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*J1(i/1960))-i,10<i){n.timeoutHandle=ah(or.bind(null,n,Wt,oi),i);break}or(n,Wt,oi);break;case 5:or(n,Wt,oi);break;default:throw Error(Z(329))}}}return Yt(n,nt()),n.callbackNode===t?k0.bind(null,n):null}function Th(n,e){var t=bo;return n.current.memoizedState.isDehydrated&&(cr(n,e).flags|=256),n=Sl(n,e),n!==2&&(e=Wt,Wt=t,e!==null&&Ah(e)),n}function Ah(n){Wt===null?Wt=n:Wt.push.apply(Wt,n)}function K1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(n,e){for(e&=~lf,e&=~Nl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-In(e),i=1<<t;n[t]=-1,e&=~i}}function Wm(n){if((Ie&6)!==0)throw Error(Z(327));as();var e=sl(n,0);if((e&1)===0)return Yt(n,nt()),null;var t=Sl(n,e);if(n.tag!==0&&t===2){var i=Qu(n);i!==0&&(e=i,t=Th(n,i))}if(t===1)throw t=Ho,cr(n,0),Ii(n,e),Yt(n,nt()),t;if(t===6)throw Error(Z(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,or(n,Wt,oi),Yt(n,nt()),null}function uf(n,e){var t=Ie;Ie|=1;try{return n(e)}finally{Ie=t,Ie===0&&(ds=nt()+500,Ll&&ji())}}function mr(n){Ni!==null&&Ni.tag===0&&(Ie&6)===0&&as();var e=Ie;Ie|=1;var t=mn.transition,i=He;try{if(mn.transition=null,He=1,n)return n()}finally{He=i,mn.transition=t,Ie=e,(Ie&6)===0&&ji()}}function hf(){Kt=ts.current,je(ts)}function cr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,P1(t)),rt!==null)for(t=rt.return;t!==null;){var i=t;switch($h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ul();break;case 3:fs(),je(Xt),je(Rt),Qh();break;case 5:Kh(i);break;case 4:fs();break;case 13:je($e);break;case 19:je($e);break;case 10:Xh(i.type._context);break;case 22:case 23:hf()}t=t.return}if(ut=n,rt=n=Gi(n.current,null),wt=Kt=e,ct=0,Ho=null,lf=Nl=pr=0,Wt=bo=null,Dn!==null){for(e=0;e<Dn.length;e++)if(t=Dn[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Dn=null}return n}function N0(n,e){do{var t=rt;try{if(qh(),Za.current=xl,vl){for(var i=Ze.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}vl=!1}if(dr=0,mt=lt=Ze=null,Mo=!1,Bo=0,af.current=null,t===null||t.return===null){ct=1,Ho=e,rt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Am(o);if(g!==null){g.flags&=-257,Cm(g,o,a,s,e),g.mode&1&&Tm(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var p=new Set;p.add(l),e.updateQueue=p}else y.add(l);break e}else{if((e&1)===0){Tm(s,c,e),ff();break e}l=Error(Z(426))}}else if(Ye&&a.mode&1){var d=Am(o);if(d!==null){(d.flags&65536)===0&&(d.flags|=256),Cm(d,o,a,s,e),Zh(l);break e}}s=l,ct!==4&&(ct=2),bo===null?bo=[s]:bo.push(s),l=of(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var m=y0(a,l,e);ym(a,m);break e;case 1:s=l;var v=a.type,x=a.stateNode;if((a.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ui===null||!Ui.has(x)))){a.flags|=65536,e&=-e,a.lanes|=e;var _=v0(a,s,e);ym(a,_);break e}}a=a.return}while(a!==null)}O0(t)}catch(M){e=M,rt===t&&t!==null&&(rt=t=t.return);continue}break}while(1)}function z0(){var n=_l.current;return _l.current=xl,n===null?xl:n}function ff(){(ct===0||ct===3||ct===2)&&(ct=4),ut===null||(pr&268435455)===0&&(Nl&268435455)===0||Ii(ut,wt)}function Sl(n,e){var t=Ie;Ie|=2;var i=z0();(ut!==n||wt!==e)&&(oi=null,cr(n,e));do try{Q1();break}catch(r){N0(n,r)}while(1);if(qh(),Ie=t,_l.current=i,rt!==null)throw Error(Z(261));return ut=null,wt=0,ct}function Q1(){for(;rt!==null;)F0(rt)}function ew(){for(;rt!==null&&!C_();)F0(rt)}function F0(n){var e=U0(n.alternate,n,Kt);n.memoizedProps=n.pendingProps,e===null?O0(n):rt=e,af.current=null}function O0(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=G1(t,e,Kt),t!==null){rt=t;return}}else{if(t=j1(t,e),t!==null){t.flags&=32767,rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ct=6,rt=null;return}}if(e=e.sibling,e!==null){rt=e;return}rt=e=n}while(e!==null);ct===0&&(ct=5)}function or(n,e,t){var i=He,r=mn.transition;try{mn.transition=null,He=1,tw(n,e,t,i)}finally{mn.transition=r,He=i}return null}function tw(n,e,t,i){do as();while(Ni!==null);if((Ie&6)!==0)throw Error(Z(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Z(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(O_(n,s),n===ut&&(rt=ut=null,wt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||qa||(qa=!0,V0(rl,function(){return as(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=mn.transition,mn.transition=null;var o=He;He=1;var a=Ie;Ie|=4,af.current=null,$1(n,t),L0(t,n),b1(sh),ol=!!rh,sh=rh=null,n.current=t,Z1(t,n,r),P_(),Ie=a,He=o,mn.transition=s}else n.current=t;if(qa&&(qa=!1,Ni=n,Ml=r),s=n.pendingLanes,s===0&&(Ui=null),D_(t.stateNode,i),Yt(n,nt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)i(e[t]);if(wl)throw wl=!1,n=bh,bh=null,n;return(Ml&1)!==0&&n.tag!==0&&as(),s=n.pendingLanes,(s&1)!==0?n===Eh?Eo++:(Eo=0,Eh=n):Eo=0,ji(),null}function as(){if(Ni!==null){var n=vg(Ml),e=mn.transition,t=He;try{if(mn.transition=null,He=16>n?16:n,Ni===null)var i=!1;else{if(n=Ni,Ni=null,Ml=0,(Ie&6)!==0)throw Error(Z(331));var r=Ie;for(Ie|=4,de=n.current;de!==null;){var s=de,o=s.child;if((de.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var u=de;switch(u.tag){case 0:case 11:case 15:So(8,u,s)}var f=u.child;if(f!==null)f.return=u,de=f;else for(;de!==null;){u=de;var h=u.sibling,g=u.return;if(C0(u),u===c){de=null;break}if(h!==null){h.return=g,de=h;break}de=g}}}var y=s.alternate;if(y!==null){var p=y.child;if(p!==null){y.child=null;do{var d=p.sibling;p.sibling=null,p=d}while(p!==null)}}de=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,de=m;break e}de=s.return}}var v=n.current;for(de=v;de!==null;){o=de;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,de=x;else e:for(o=v;de!==null;){if(a=de,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:kl(9,a)}}catch(M){tt(a,a.return,M)}if(a===o){de=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,de=_;break e}de=a.return}}if(Ie=r,ji(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Tl,n)}catch{}i=!0}return i}finally{He=t,mn.transition=e}}return!1}function Gm(n,e,t){e=of(t,e),e=y0(n,e,1),Bi(n,e),e=Ft(),n=zl(n,1),n!==null&&(Wo(n,1,e),Yt(n,e))}function tt(n,e,t){if(n.tag===3)Gm(n,n,t);else for(;e!==null;){if(e.tag===3){Gm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ui===null||!Ui.has(i))){n=of(t,n),n=v0(e,n,1),Bi(e,n),n=Ft(),e=zl(e,1),e!==null&&(Wo(e,1,n),Yt(e,n));break}}e=e.return}}function nw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Ft(),n.pingedLanes|=n.suspendedLanes&t,ut===n&&(wt&t)===t&&(ct===4||ct===3&&(wt&130023424)===wt&&500>nt()-cf?cr(n,0):lf|=t),Yt(n,e)}function B0(n,e){e===0&&((n.mode&1)===0?e=1:(e=Ra,Ra<<=1,(Ra&130023424)===0&&(Ra=4194304)));var t=Ft();n=zl(n,e),n!==null&&(Wo(n,e,t),Yt(n,t))}function iw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),B0(n,t)}function rw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),B0(n,t)}var U0;U0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Xt.current)qt=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return qt=!1,X1(n,e,t);qt=(n.flags&131072)!==0}else qt=!1,Ye&&(e.flags&1048576)!==0&&jg(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),n=e.pendingProps;var r=cs(e,Rt.current);os(e,t),r=tf(null,e,i,n,r,t);var s=nf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jh(e),r.updater=Dl,e.stateNode=r,r._reactInternals=e,fh(e,i,n,t),e=vh(null,e,i,!0,s,t)):(e.tag=0,Ye&&s&&Yh(e),zt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ow(i),n=Pn(i,n),r){case 0:e=yh(null,e,i,n,t);break e;case 1:e=Lm(null,e,i,n,t);break e;case 11:e=Pm(null,e,i,n,t);break e;case 14:e=Rm(null,e,i,Pn(i.type,n),t);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),yh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Lm(n,e,i,r,t);case 3:e:{if(E0(e),n===null)throw Error(Z(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gg(n,e),pl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Error(Z(423)),e=Dm(n,e,i,t,r);break e}else if(i!==r){r=Error(Z(424)),e=Dm(n,e,i,t,r);break e}else for(Gt=li(e.stateNode.containerInfo.firstChild),Qt=e,Ye=!0,Ln=null,t=Zg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(us(),i===r){e=pi(n,e,t);break e}zt(n,e,i,t)}e=e.child}return e;case 5:return Jg(e),n===null&&ph(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,oh(i,r)?o=null:s!==null&&oh(i,s)&&(e.flags|=32),b0(n,e),zt(n,e,o,t),e.child;case 6:return n===null&&ph(e),null;case 13:return T0(n,e,t);case 4:return Jh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=hs(e,null,i,t):zt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Pm(n,e,i,r,t);case 7:return zt(n,e,e.pendingProps,t),e.child;case 8:return zt(n,e,e.pendingProps.children,t),e.child;case 12:return zt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,qe(fl,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!Xt.current){e=pi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),uh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),uh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,os(e,t),r=yn(r),i=i(r),e.flags|=1,zt(n,e,i,t),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),Rm(n,e,i,r,t);case 15:return M0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,jt(i)?(n=!0,hl(e)):n=!1,os(e,t),Xg(e,i,r),fh(e,i,r,t),vh(null,e,i,!0,n,t);case 19:return A0(n,e,t);case 22:return S0(n,e,t)}throw Error(Z(156,e.tag))};function V0(n,e){return pg(n,e)}function sw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,e,t,i){return new sw(n,e,t,i)}function df(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ow(n){if(typeof n=="function")return df(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Dh)return 11;if(n===Ih)return 14}return 2}function Gi(n,e){var t=n.alternate;return t===null?(t=pn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function el(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")df(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case qr:return ur(t.children,r,s,e);case Lh:o=8,r|=8;break;case Ou:return n=pn(12,t,e,r|2),n.elementType=Ou,n.lanes=s,n;case Bu:return n=pn(13,t,e,r),n.elementType=Bu,n.lanes=s,n;case Uu:return n=pn(19,t,e,r),n.elementType=Uu,n.lanes=s,n;case Jm:return bl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case $m:o=10;break e;case Zm:o=9;break e;case Dh:o=11;break e;case Ih:o=14;break e;case Ri:o=16,i=null;break e}throw Error(Z(130,n==null?n:typeof n,""))}return e=pn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ur(n,e,t,i){return n=pn(7,n,i,e),n.lanes=t,n}function bl(n,e,t,i){return n=pn(22,n,i,e),n.elementType=Jm,n.lanes=t,n.stateNode={},n}function Nu(n,e,t){return n=pn(6,n,null,e),n.lanes=t,n}function zu(n,e,t){return e=pn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function aw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_u(0),this.expirationTimes=_u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pf(n,e,t,i,r,s,o,a,l){return n=new aw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},jh(s),n}function lw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function H0(n){if(!n)return Wi;n=n._reactInternals;e:{if(yr(n)!==n||n.tag!==1)throw Error(Z(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(n.tag===1){var t=n.type;if(jt(t))return Hg(n,t,e)}return e}function W0(n,e,t,i,r,s,o,a,l){return n=pf(t,i,!0,n,r,s,o,a,l),n.context=H0(null),t=n.current,i=Ft(),r=Vi(t),s=hi(i,r),s.callback=e??null,Bi(t,s),n.current.lanes=r,Wo(n,r,i),Yt(n,i),n}function Fl(n,e,t,i){var r=e.current,s=Ft(),o=Vi(r);return t=H0(t),e.context===null?e.context=t:e.pendingContext=t,e=hi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),Bi(r,e),n=gn(r,o,s),n!==null&&$a(n,r,o),o}function El(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function qm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function mf(n,e){qm(n,e),(n=n.alternate)&&qm(n,e)}function cw(){return null}var G0=typeof reportError=="function"?reportError:function(n){console.error(n)};function gf(n){this._internalRoot=n}Ol.prototype.render=gf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Z(409));Fl(n,e,null,null)};Ol.prototype.unmount=gf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;mr(function(){Fl(null,n,null,null)}),e[di]=null}};function Ol(n){this._internalRoot=n}Ol.prototype.unstable_scheduleHydration=function(n){if(n){var e=wg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Di.length&&e!==0&&e<Di[t].priority;t++);Di.splice(t,0,n),t===0&&Sg(n)}};function yf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xm(){}function uw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=El(o);s.call(c)}}var o=W0(e,i,n,0,null,!1,!1,"",Xm);return n._reactRootContainer=o,n[di]=o.current,ko(n.nodeType===8?n.parentNode:n),mr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=El(l);a.call(c)}}var l=pf(n,0,!1,null,null,!1,!1,"",Xm);return n._reactRootContainer=l,n[di]=l.current,ko(n.nodeType===8?n.parentNode:n),mr(function(){Fl(e,l,t,i)}),l}function Ul(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=El(o);a.call(l)}}Fl(e,o,n,r)}else o=uw(t,e,n,r,i);return El(o)}xg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=mo(e.pendingLanes);t!==0&&(zh(e,t|1),Yt(e,nt()),(Ie&6)===0&&(ds=nt()+500,ji()))}break;case 13:var i=Ft();mr(function(){return gn(n,1,i)}),mf(n,1)}};Fh=function(n){if(n.tag===13){var e=Ft();gn(n,134217728,e),mf(n,134217728)}};_g=function(n){if(n.tag===13){var e=Ft(),t=Vi(n);gn(n,t,e),mf(n,t)}};wg=function(){return He};Mg=function(n,e){var t=He;try{return He=n,e()}finally{He=t}};Zu=function(n,e,t){switch(e){case"input":if(Wu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Rl(i);if(!r)throw Error(Z(90));Qm(i),Wu(i,r)}}}break;case"textarea":tg(n,t);break;case"select":e=t.value,e!=null&&ns(n,!!t.multiple,e,!1)}};lg=uf;cg=mr;var hw={usingClientEntryPoint:!1,Events:[qo,$r,Rl,og,ag,uf]},uo={findFiberByHostInstance:ar,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},fw={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fg(n),n===null?null:n.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ho=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ho.isDisabled&&ho.supportsFiber))try{Tl=ho.inject(fw),Qn=ho}catch{}var ho;nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hw;nn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(Z(200));return lw(n,e,null,t)};nn.createRoot=function(n,e){if(!yf(n))throw Error(Z(299));var t=!1,i="",r=G0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pf(n,1,!1,null,null,t,!1,i,r),n[di]=e.current,ko(n.nodeType===8?n.parentNode:n),new gf(e)};nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Z(188)):(n=Object.keys(n).join(","),Error(Z(268,n)));return n=fg(e),n=n===null?null:n.stateNode,n};nn.flushSync=function(n){return mr(n)};nn.hydrate=function(n,e,t){if(!Bl(e))throw Error(Z(200));return Ul(null,n,e,!0,t)};nn.hydrateRoot=function(n,e,t){if(!yf(n))throw Error(Z(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=G0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=W0(e,null,n,1,t??null,r,!1,s,o),n[di]=e.current,ko(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ol(e)};nn.render=function(n,e,t){if(!Bl(e))throw Error(Z(200));return Ul(null,n,e,!1,t)};nn.unmountComponentAtNode=function(n){if(!Bl(n))throw Error(Z(40));return n._reactRootContainer?(mr(function(){Ul(null,null,n,!1,function(){n._reactRootContainer=null,n[di]=null})}),!0):!1};nn.unstable_batchedUpdates=uf;nn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Bl(t))throw Error(Z(200));if(n==null||n._reactInternals===void 0)throw Error(Z(38));return Ul(n,e,t,!1,i)};nn.version="18.1.0-next-22edb9f77-20220426"});var Y0=Et((q3,j0)=>{"use strict";function X0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X0)}catch(n){console.error(n)}}X0(),j0.exports=q0()});var Z0=Et(vf=>{"use strict";var $0=Y0();vf.createRoot=$0.createRoot,vf.hydrateRoot=$0.hydrateRoot;var X3});var ey=Et((nT,Q0)=>{"use strict";Q0.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}});var xf=Et((iT,ny)=>{var jo=ey(),ty={};for(let n of Object.keys(jo))ty[jo[n]]=n;var me={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};ny.exports=me;for(let n of Object.keys(me)){if(!("channels"in me[n]))throw new Error("missing channels property: "+n);if(!("labels"in me[n]))throw new Error("missing channel labels property: "+n);if(me[n].labels.length!==me[n].channels)throw new Error("channel and label counts mismatch: "+n);let{channels:e,labels:t}=me[n];delete me[n].channels,delete me[n].labels,Object.defineProperty(me[n],"channels",{value:e}),Object.defineProperty(me[n],"labels",{value:t})}me.rgb.hsl=function(n){let e=n[0]/255,t=n[1]/255,i=n[2]/255,r=Math.min(e,t,i),s=Math.max(e,t,i),o=s-r,a,l;s===r?a=0:e===s?a=(t-i)/o:t===s?a=2+(i-e)/o:i===s&&(a=4+(e-t)/o),a=Math.min(a*60,360),a<0&&(a+=360);let c=(r+s)/2;return s===r?l=0:c<=.5?l=o/(s+r):l=o/(2-s-r),[a,l*100,c*100]};me.rgb.hsv=function(n){let e,t,i,r,s,o=n[0]/255,a=n[1]/255,l=n[2]/255,c=Math.max(o,a,l),u=c-Math.min(o,a,l),f=function(h){return(c-h)/6/u+1/2};return u===0?(r=0,s=0):(s=u/c,e=f(o),t=f(a),i=f(l),o===c?r=i-t:a===c?r=1/3+e-i:l===c&&(r=2/3+t-e),r<0?r+=1:r>1&&(r-=1)),[r*360,s*100,c*100]};me.rgb.hwb=function(n){let e=n[0],t=n[1],i=n[2],r=me.rgb.hsl(n)[0],s=1/255*Math.min(e,Math.min(t,i));return i=1-1/255*Math.max(e,Math.max(t,i)),[r,s*100,i*100]};me.rgb.cmyk=function(n){let e=n[0]/255,t=n[1]/255,i=n[2]/255,r=Math.min(1-e,1-t,1-i),s=(1-e-r)/(1-r)||0,o=(1-t-r)/(1-r)||0,a=(1-i-r)/(1-r)||0;return[s*100,o*100,a*100,r*100]};function gw(n,e){return(n[0]-e[0])**2+(n[1]-e[1])**2+(n[2]-e[2])**2}me.rgb.keyword=function(n){let e=ty[n];if(e)return e;let t=1/0,i;for(let r of Object.keys(jo)){let s=jo[r],o=gw(n,s);o<t&&(t=o,i=r)}return i};me.keyword.rgb=function(n){return jo[n]};me.rgb.xyz=function(n){let e=n[0]/255,t=n[1]/255,i=n[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,i=i>.04045?((i+.055)/1.055)**2.4:i/12.92;let r=e*.4124+t*.3576+i*.1805,s=e*.2126+t*.7152+i*.0722,o=e*.0193+t*.1192+i*.9505;return[r*100,s*100,o*100]};me.rgb.lab=function(n){let e=me.rgb.xyz(n),t=e[0],i=e[1],r=e[2];t/=95.047,i/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,i=i>.008856?i**(1/3):7.787*i+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;let s=116*i-16,o=500*(t-i),a=200*(i-r);return[s,o,a]};me.hsl.rgb=function(n){let e=n[0]/360,t=n[1]/100,i=n[2]/100,r,s,o;if(t===0)return o=i*255,[o,o,o];i<.5?r=i*(1+t):r=i+t-i*t;let a=2*i-r,l=[0,0,0];for(let c=0;c<3;c++)s=e+1/3*-(c-1),s<0&&s++,s>1&&s--,6*s<1?o=a+(r-a)*6*s:2*s<1?o=r:3*s<2?o=a+(r-a)*(2/3-s)*6:o=a,l[c]=o*255;return l};me.hsl.hsv=function(n){let e=n[0],t=n[1]/100,i=n[2]/100,r=t,s=Math.max(i,.01);i*=2,t*=i<=1?i:2-i,r*=s<=1?s:2-s;let o=(i+t)/2,a=i===0?2*r/(s+r):2*t/(i+t);return[e,a*100,o*100]};me.hsv.rgb=function(n){let e=n[0]/60,t=n[1]/100,i=n[2]/100,r=Math.floor(e)%6,s=e-Math.floor(e),o=255*i*(1-t),a=255*i*(1-t*s),l=255*i*(1-t*(1-s));switch(i*=255,r){case 0:return[i,l,o];case 1:return[a,i,o];case 2:return[o,i,l];case 3:return[o,a,i];case 4:return[l,o,i];case 5:return[i,o,a]}};me.hsv.hsl=function(n){let e=n[0],t=n[1]/100,i=n[2]/100,r=Math.max(i,.01),s,o;o=(2-t)*i;let a=(2-t)*r;return s=t*r,s/=a<=1?a:2-a,s=s||0,o/=2,[e,s*100,o*100]};me.hwb.rgb=function(n){let e=n[0]/360,t=n[1]/100,i=n[2]/100,r=t+i,s;r>1&&(t/=r,i/=r);let o=Math.floor(6*e),a=1-i;s=6*e-o,(o&1)!==0&&(s=1-s);let l=t+s*(a-t),c,u,f;switch(o){default:case 6:case 0:c=a,u=l,f=t;break;case 1:c=l,u=a,f=t;break;case 2:c=t,u=a,f=l;break;case 3:c=t,u=l,f=a;break;case 4:c=l,u=t,f=a;break;case 5:c=a,u=t,f=l;break}return[c*255,u*255,f*255]};me.cmyk.rgb=function(n){let e=n[0]/100,t=n[1]/100,i=n[2]/100,r=n[3]/100,s=1-Math.min(1,e*(1-r)+r),o=1-Math.min(1,t*(1-r)+r),a=1-Math.min(1,i*(1-r)+r);return[s*255,o*255,a*255]};me.xyz.rgb=function(n){let e=n[0]/100,t=n[1]/100,i=n[2]/100,r,s,o;return r=e*3.2406+t*-1.5372+i*-.4986,s=e*-.9689+t*1.8758+i*.0415,o=e*.0557+t*-.204+i*1.057,r=r>.0031308?1.055*r**(1/2.4)-.055:r*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,r=Math.min(Math.max(0,r),1),s=Math.min(Math.max(0,s),1),o=Math.min(Math.max(0,o),1),[r*255,s*255,o*255]};me.xyz.lab=function(n){let e=n[0],t=n[1],i=n[2];e/=95.047,t/=100,i/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,i=i>.008856?i**(1/3):7.787*i+16/116;let r=116*t-16,s=500*(e-t),o=200*(t-i);return[r,s,o]};me.lab.xyz=function(n){let e=n[0],t=n[1],i=n[2],r,s,o;s=(e+16)/116,r=t/500+s,o=s-i/200;let a=s**3,l=r**3,c=o**3;return s=a>.008856?a:(s-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,o=c>.008856?c:(o-16/116)/7.787,r*=95.047,s*=100,o*=108.883,[r,s,o]};me.lab.lch=function(n){let e=n[0],t=n[1],i=n[2],r;r=Math.atan2(i,t)*360/2/Math.PI,r<0&&(r+=360);let o=Math.sqrt(t*t+i*i);return[e,o,r]};me.lch.lab=function(n){let e=n[0],t=n[1],r=n[2]/360*2*Math.PI,s=t*Math.cos(r),o=t*Math.sin(r);return[e,s,o]};me.rgb.ansi16=function(n,e=null){let[t,i,r]=n,s=e===null?me.rgb.hsv(n)[2]:e;if(s=Math.round(s/50),s===0)return 30;let o=30+(Math.round(r/255)<<2|Math.round(i/255)<<1|Math.round(t/255));return s===2&&(o+=60),o};me.hsv.ansi16=function(n){return me.rgb.ansi16(me.hsv.rgb(n),n[2])};me.rgb.ansi256=function(n){let e=n[0],t=n[1],i=n[2];return e===t&&t===i?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(i/255*5)};me.ansi16.rgb=function(n){let e=n%10;if(e===0||e===7)return n>50&&(e+=3.5),e=e/10.5*255,[e,e,e];let t=(~~(n>50)+1)*.5,i=(e&1)*t*255,r=(e>>1&1)*t*255,s=(e>>2&1)*t*255;return[i,r,s]};me.ansi256.rgb=function(n){if(n>=232){let s=(n-232)*10+8;return[s,s,s]}n-=16;let e,t=Math.floor(n/36)/5*255,i=Math.floor((e=n%36)/6)/5*255,r=e%6/5*255;return[t,i,r]};me.rgb.hex=function(n){let t=(((Math.round(n[0])&255)<<16)+((Math.round(n[1])&255)<<8)+(Math.round(n[2])&255)).toString(16).toUpperCase();return"000000".substring(t.length)+t};me.hex.rgb=function(n){let e=n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let t=e[0];e[0].length===3&&(t=t.split("").map(a=>a+a).join(""));let i=parseInt(t,16),r=i>>16&255,s=i>>8&255,o=i&255;return[r,s,o]};me.rgb.hcg=function(n){let e=n[0]/255,t=n[1]/255,i=n[2]/255,r=Math.max(Math.max(e,t),i),s=Math.min(Math.min(e,t),i),o=r-s,a,l;return o<1?a=s/(1-o):a=0,o<=0?l=0:r===e?l=(t-i)/o%6:r===t?l=2+(i-e)/o:l=4+(e-t)/o,l/=6,l%=1,[l*360,o*100,a*100]};me.hsl.hcg=function(n){let e=n[1]/100,t=n[2]/100,i=t<.5?2*e*t:2*e*(1-t),r=0;return i<1&&(r=(t-.5*i)/(1-i)),[n[0],i*100,r*100]};me.hsv.hcg=function(n){let e=n[1]/100,t=n[2]/100,i=e*t,r=0;return i<1&&(r=(t-i)/(1-i)),[n[0],i*100,r*100]};me.hcg.rgb=function(n){let e=n[0]/360,t=n[1]/100,i=n[2]/100;if(t===0)return[i*255,i*255,i*255];let r=[0,0,0],s=e%1*6,o=s%1,a=1-o,l=0;switch(Math.floor(s)){case 0:r[0]=1,r[1]=o,r[2]=0;break;case 1:r[0]=a,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=o;break;case 3:r[0]=0,r[1]=a,r[2]=1;break;case 4:r[0]=o,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=a}return l=(1-t)*i,[(t*r[0]+l)*255,(t*r[1]+l)*255,(t*r[2]+l)*255]};me.hcg.hsv=function(n){let e=n[1]/100,t=n[2]/100,i=e+t*(1-e),r=0;return i>0&&(r=e/i),[n[0],r*100,i*100]};me.hcg.hsl=function(n){let e=n[1]/100,i=n[2]/100*(1-e)+.5*e,r=0;return i>0&&i<.5?r=e/(2*i):i>=.5&&i<1&&(r=e/(2*(1-i))),[n[0],r*100,i*100]};me.hcg.hwb=function(n){let e=n[1]/100,t=n[2]/100,i=e+t*(1-e);return[n[0],(i-e)*100,(1-i)*100]};me.hwb.hcg=function(n){let e=n[1]/100,t=n[2]/100,i=1-t,r=i-e,s=0;return r<1&&(s=(i-r)/(1-r)),[n[0],r*100,s*100]};me.apple.rgb=function(n){return[n[0]/65535*255,n[1]/65535*255,n[2]/65535*255]};me.rgb.apple=function(n){return[n[0]/255*65535,n[1]/255*65535,n[2]/255*65535]};me.gray.rgb=function(n){return[n[0]/100*255,n[0]/100*255,n[0]/100*255]};me.gray.hsl=function(n){return[0,0,n[0]]};me.gray.hsv=me.gray.hsl;me.gray.hwb=function(n){return[0,100,n[0]]};me.gray.cmyk=function(n){return[0,0,0,n[0]]};me.gray.lab=function(n){return[n[0],0,0]};me.gray.hex=function(n){let e=Math.round(n[0]/100*255)&255,i=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(i.length)+i};me.rgb.gray=function(n){return[(n[0]+n[1]+n[2])/3/255*100]}});var ry=Et((rT,iy)=>{var Vl=xf();function yw(){let n={},e=Object.keys(Vl);for(let t=e.length,i=0;i<t;i++)n[e[i]]={distance:-1,parent:null};return n}function vw(n){let e=yw(),t=[n];for(e[n].distance=0;t.length;){let i=t.pop(),r=Object.keys(Vl[i]);for(let s=r.length,o=0;o<s;o++){let a=r[o],l=e[a];l.distance===-1&&(l.distance=e[i].distance+1,l.parent=i,t.unshift(a))}}return e}function xw(n,e){return function(t){return e(n(t))}}function _w(n,e){let t=[e[n].parent,n],i=Vl[e[n].parent][n],r=e[n].parent;for(;e[r].parent;)t.unshift(e[r].parent),i=xw(Vl[e[r].parent][r],i),r=e[r].parent;return i.conversion=t,i}iy.exports=function(n){let e=vw(n),t={},i=Object.keys(e);for(let r=i.length,s=0;s<r;s++){let o=i[s];e[o].parent!==null&&(t[o]=_w(o,e))}return t}});var oy=Et((sT,sy)=>{var _f=xf(),ww=ry(),gs={},Mw=Object.keys(_f);function Sw(n){let e=function(...t){let i=t[0];return i==null?i:(i.length>1&&(t=i),n(t))};return"conversion"in n&&(e.conversion=n.conversion),e}function bw(n){let e=function(...t){let i=t[0];if(i==null)return i;i.length>1&&(t=i);let r=n(t);if(typeof r=="object")for(let s=r.length,o=0;o<s;o++)r[o]=Math.round(r[o]);return r};return"conversion"in n&&(e.conversion=n.conversion),e}Mw.forEach(n=>{gs[n]={},Object.defineProperty(gs[n],"channels",{value:_f[n].channels}),Object.defineProperty(gs[n],"labels",{value:_f[n].labels});let e=ww(n);Object.keys(e).forEach(i=>{let r=e[i];gs[n][i]=bw(r),gs[n][i].raw=Sw(r)})});sy.exports=gs});var fy=Et((oT,hy)=>{"use strict";var ay=(n,e)=>(...t)=>`\x1B[${n(...t)+e}m`,ly=(n,e)=>(...t)=>{let i=n(...t);return`\x1B[${38+e};5;${i}m`},cy=(n,e)=>(...t)=>{let i=n(...t);return`\x1B[${38+e};2;${i[0]};${i[1]};${i[2]}m`},Hl=n=>n,uy=(n,e,t)=>[n,e,t],ys=(n,e,t)=>{Object.defineProperty(n,e,{get:()=>{let i=t();return Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0}),i},enumerable:!0,configurable:!0})},wf,vs=(n,e,t,i)=>{wf===void 0&&(wf=oy());let r=i?10:0,s={};for(let[o,a]of Object.entries(wf)){let l=o==="ansi16"?"ansi":o;o===e?s[l]=n(t,r):typeof a=="object"&&(s[l]=n(a[e],r))}return s};function Ew(){let n=new Map,e={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};e.color.gray=e.color.blackBright,e.bgColor.bgGray=e.bgColor.bgBlackBright,e.color.grey=e.color.blackBright,e.bgColor.bgGrey=e.bgColor.bgBlackBright;for(let[t,i]of Object.entries(e)){for(let[r,s]of Object.entries(i))e[r]={open:`\x1B[${s[0]}m`,close:`\x1B[${s[1]}m`},i[r]=e[r],n.set(s[0],s[1]);Object.defineProperty(e,t,{value:i,enumerable:!1})}return Object.defineProperty(e,"codes",{value:n,enumerable:!1}),e.color.close="\x1B[39m",e.bgColor.close="\x1B[49m",ys(e.color,"ansi",()=>vs(ay,"ansi16",Hl,!1)),ys(e.color,"ansi256",()=>vs(ly,"ansi256",Hl,!1)),ys(e.color,"ansi16m",()=>vs(cy,"rgb",uy,!1)),ys(e.bgColor,"ansi",()=>vs(ay,"ansi16",Hl,!0)),ys(e.bgColor,"ansi256",()=>vs(ly,"ansi256",Hl,!0)),ys(e.bgColor,"ansi16m",()=>vs(cy,"rgb",uy,!0)),e}Object.defineProperty(hy,"exports",{enumerable:!0,get:Ew})});var py=Et((aT,dy)=>{"use strict";dy.exports={stdout:!1,stderr:!1}});var gy=Et((lT,my)=>{"use strict";var Tw=(n,e,t)=>{let i=n.indexOf(e);if(i===-1)return n;let r=e.length,s=0,o="";do o+=n.substr(s,i-s)+e+t,s=i+r,i=n.indexOf(e,s);while(i!==-1);return o+=n.substr(s),o},Aw=(n,e,t,i)=>{let r=0,s="";do{let o=n[i-1]==="\r";s+=n.substr(r,(o?i-1:i)-r)+e+(o?`\r
`:`
`)+t,r=i+1,i=n.indexOf(`
`,r)}while(i!==-1);return s+=n.substr(r),s};my.exports={stringReplaceAll:Tw,stringEncaseCRLFWithFirstIndex:Aw}});var wy=Et((cT,_y)=>{"use strict";var Cw=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,yy=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,Pw=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,Rw=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,Lw=new Map([["n",`
`],["r","\r"],["t","	"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e","\x1B"],["a","\x07"]]);function xy(n){let e=n[0]==="u",t=n[1]==="{";return e&&!t&&n.length===5||n[0]==="x"&&n.length===3?String.fromCharCode(parseInt(n.slice(1),16)):e&&t?String.fromCodePoint(parseInt(n.slice(2,-1),16)):Lw.get(n)||n}function Dw(n,e){let t=[],i=e.trim().split(/\s*,\s*/g),r;for(let s of i){let o=Number(s);if(!Number.isNaN(o))t.push(o);else if(r=s.match(Pw))t.push(r[2].replace(Rw,(a,l,c)=>l?xy(l):c));else throw new Error(`Invalid Chalk template style argument: ${s} (in style '${n}')`)}return t}function Iw(n){yy.lastIndex=0;let e=[],t;for(;(t=yy.exec(n))!==null;){let i=t[1];if(t[2]){let r=Dw(i,t[2]);e.push([i].concat(r))}else e.push([i])}return e}function vy(n,e){let t={};for(let r of e)for(let s of r.styles)t[s[0]]=r.inverse?null:s.slice(1);let i=n;for(let[r,s]of Object.entries(t))if(!!Array.isArray(s)){if(!(r in i))throw new Error(`Unknown Chalk style: ${r}`);i=s.length>0?i[r](...s):i[r]}return i}_y.exports=(n,e)=>{let t=[],i=[],r=[];if(e.replace(Cw,(s,o,a,l,c,u)=>{if(o)r.push(xy(o));else if(l){let f=r.join("");r=[],i.push(t.length===0?f:vy(n,t)(f)),t.push({inverse:a,styles:Iw(l)})}else if(c){if(t.length===0)throw new Error("Found extraneous } in Chalk template literal");i.push(vy(n,t)(r.join(""))),r=[],t.pop()}else r.push(u)}),i.push(r.join("")),t.length>0){let s=`Chalk template literal is missing ${t.length} closing bracket${t.length===1?"":"s"} (\`}\`)`;throw new Error(s)}return i.join("")}});var Cy=Et((uT,Ay)=>{"use strict";var Yo=fy(),{stdout:Sf,stderr:bf}=py(),{stringReplaceAll:kw,stringEncaseCRLFWithFirstIndex:Nw}=gy(),{isArray:Wl}=Array,Sy=["ansi","ansi","ansi256","ansi16m"],xs=Object.create(null),zw=(n,e={})=>{if(e.level&&!(Number.isInteger(e.level)&&e.level>=0&&e.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");let t=Sf?Sf.level:0;n.level=e.level===void 0?t:e.level},Ef=class{constructor(e){return by(e)}},by=n=>{let e={};return zw(e,n),e.template=(...t)=>Ty(e.template,...t),Object.setPrototypeOf(e,Gl.prototype),Object.setPrototypeOf(e.template,e),e.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},e.template.Instance=Ef,e.template};function Gl(n){return by(n)}for(let[n,e]of Object.entries(Yo))xs[n]={get(){let t=ql(this,Tf(e.open,e.close,this._styler),this._isEmpty);return Object.defineProperty(this,n,{value:t}),t}};xs.visible={get(){let n=ql(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:n}),n}};var Ey=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(let n of Ey)xs[n]={get(){let{level:e}=this;return function(...t){let i=Tf(Yo.color[Sy[e]][n](...t),Yo.color.close,this._styler);return ql(this,i,this._isEmpty)}}};for(let n of Ey){let e="bg"+n[0].toUpperCase()+n.slice(1);xs[e]={get(){let{level:t}=this;return function(...i){let r=Tf(Yo.bgColor[Sy[t]][n](...i),Yo.bgColor.close,this._styler);return ql(this,r,this._isEmpty)}}}}var Fw=Object.defineProperties(()=>{},{...xs,level:{enumerable:!0,get(){return this._generator.level},set(n){this._generator.level=n}}}),Tf=(n,e,t)=>{let i,r;return t===void 0?(i=n,r=e):(i=t.openAll+n,r=e+t.closeAll),{open:n,close:e,openAll:i,closeAll:r,parent:t}},ql=(n,e,t)=>{let i=(...r)=>Wl(r[0])&&Wl(r[0].raw)?My(i,Ty(i,...r)):My(i,r.length===1?""+r[0]:r.join(" "));return Object.setPrototypeOf(i,Fw),i._generator=n,i._styler=e,i._isEmpty=t,i},My=(n,e)=>{if(n.level<=0||!e)return n._isEmpty?"":e;let t=n._styler;if(t===void 0)return e;let{openAll:i,closeAll:r}=t;if(e.indexOf("\x1B")!==-1)for(;t!==void 0;)e=kw(e,t.close,t.open),t=t.parent;let s=e.indexOf(`
`);return s!==-1&&(e=Nw(e,r,i,s)),i+e+r},Mf,Ty=(n,...e)=>{let[t]=e;if(!Wl(t)||!Wl(t.raw))return e.join(" ");let i=e.slice(1),r=[t.raw[0]];for(let s=1;s<t.length;s++)r.push(String(i[s-1]).replace(/[{}\\]/g,"\\$&"),String(t.raw[s]));return Mf===void 0&&(Mf=wy()),Mf(n,r.join(""))};Object.defineProperties(Gl.prototype,xs);var Xl=Gl();Xl.supportsColor=Sf;Xl.stderr=Gl({level:bf?bf.level:0});Xl.stderr.supportsColor=bf;Ay.exports=Xl});function pa(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function FM(n,e){return(n%e+e)%e}function Nf(n,e,t){return(1-t)*n+t*e}function pv(n){return(n&n-1)===0&&n!==0}function md(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ox(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Ec(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Ff(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Jl(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}function Of(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tc.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Vf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wr.fromArray(n,s);let a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),u=i.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}function YM(n,e,t,i,r,s,o,a){let l;if(e.side===Vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Us,a),l===null)return null;fc.copy(a),fc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(fc);return c<t.near||c>t.far?null:{distance:c,point:fc.clone(),object:n}}function dc(n,e,t,i,r,s,o,a,l,c,u,f){Ki.fromBufferAttribute(r,c),Qi.fromBufferAttribute(r,u),er.fromBufferAttribute(r,f);let h=n.morphTargetInfluences;if(s&&h){oc.set(0,0,0),ac.set(0,0,0),lc.set(0,0,0);for(let y=0,p=s.length;y<p;y++){let d=h[y],m=s[y];d!==0&&(Kf.fromBufferAttribute(m,c),Qf.fromBufferAttribute(m,u),ed.fromBufferAttribute(m,f),o?(oc.addScaledVector(Kf,d),ac.addScaledVector(Qf,d),lc.addScaledVector(ed,d)):(oc.addScaledVector(Kf.sub(Ki),d),ac.addScaledVector(Qf.sub(Qi),d),lc.addScaledVector(ed.sub(er),d)))}Ki.add(oc),Qi.add(ac),er.add(lc)}n.isSkinnedMesh&&(n.boneTransform(c,Ki),n.boneTransform(u,Qi),n.boneTransform(f,er));let g=YM(n,e,t,i,Ki,Qi,er,td);if(g){a&&(cc.fromBufferAttribute(a,c),uc.fromBufferAttribute(a,u),hc.fromBufferAttribute(a,f),g.uv=wn.getUV(td,Ki,Qi,er,cc,uc,hc,new _e)),l&&(cc.fromBufferAttribute(l,c),uc.fromBufferAttribute(l,u),hc.fromBufferAttribute(l,f),g.uv2=wn.getUV(td,Ki,Qi,er,cc,uc,hc,new _e));let y={a:c,b:u,c:f,normal:new L,materialIndex:0};wn.getNormal(Ki,Qi,er,y.normal),g.face=y}return g}function qs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){let e={};for(let t=0;t<n.length;t++){let i=qs(n[t]);for(let r in i)e[r]=i[r]}return e}function lx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function eS(n,e){let t=e.isWebGL2,i=new WeakMap;function r(c,u){let f=c.array,h=c.usage,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(f instanceof Int16Array)y=5122;else if(f instanceof Uint32Array)y=5125;else if(f instanceof Int32Array)y=5124;else if(f instanceof Int8Array)y=5120;else if(f instanceof Uint8Array)y=5121;else if(f instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){let h=u.array,g=u.updateRange;n.bindBuffer(f,c),g.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):n.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}function R2(n,e,t,i,r,s){let o=new pe(0),a=r===!0?0:1,l,c,u=null,f=0,h=null;function g(p,d){let m=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=e.get(v));let x=n.xr,_=x.getSession&&x.getSession();_&&_.environmentBlendMode==="additive"&&(v=null),v===null?y(o,a):v&&v.isColor&&(y(v,1),m=!0),(n.autoClear||m)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Wc)?(c===void 0&&(c=new Sn(new bi(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:qs(ii.cube.uniforms),vertexShader:ii.cube.vertexShader,fragmentShader:ii.cube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Sn(new aa(2,2),new Hn({name:"BackgroundMaterial",uniforms:qs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:na,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),a=d,y(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,y(o,a)},render:g}}function L2(n,e,t,i){let r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null),c=l,u=!1;function f(I,q,B,Y,X){let U=!1;if(o){let W=p(Y,B,q);c!==W&&(c=W,g(c.object)),U=m(I,Y,B,X),U&&v(I,Y,B,X)}else{let W=q.wireframe===!0;(c.geometry!==Y.id||c.program!==B.id||c.wireframe!==W)&&(c.geometry=Y.id,c.program=B.id,c.wireframe=W,U=!0)}X!==null&&t.update(X,34963),(U||u)&&(u=!1,w(I,q,B,Y),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function y(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,q,B){let Y=B.wireframe===!0,X=a[I.id];X===void 0&&(X={},a[I.id]=X);let U=X[q.id];U===void 0&&(U={},X[q.id]=U);let W=U[Y];return W===void 0&&(W=d(h()),U[Y]=W),W}function d(I){let q=[],B=[],Y=[];for(let X=0;X<r;X++)q[X]=0,B[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:B,attributeDivisors:Y,object:I,attributes:{},index:null}}function m(I,q,B,Y){let X=c.attributes,U=q.attributes,W=0,V=B.getAttributes();for(let N in V)if(V[N].location>=0){let ue=X[N],ge=U[N];if(ge===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;W++}return c.attributesNum!==W||c.index!==Y}function v(I,q,B,Y){let X={},U=q.attributes,W=0,V=B.getAttributes();for(let N in V)if(V[N].location>=0){let ue=U[N];ue===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor));let ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),X[N]=ge,W++}c.attributes=X,c.attributesNum=W,c.index=Y}function x(){let I=c.newAttributes;for(let q=0,B=I.length;q<B;q++)I[q]=0}function _(I){M(I,0)}function M(I,q){let B=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;B[I]=1,Y[I]===0&&(n.enableVertexAttribArray(I),Y[I]=1),X[I]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,q),X[I]=q)}function A(){let I=c.newAttributes,q=c.enabledAttributes;for(let B=0,Y=q.length;B<Y;B++)q[B]!==I[B]&&(n.disableVertexAttribArray(B),q[B]=0)}function R(I,q,B,Y,X,U){i.isWebGL2===!0&&(B===5124||B===5125)?n.vertexAttribIPointer(I,q,B,X,U):n.vertexAttribPointer(I,q,B,Y,X,U)}function w(I,q,B,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let X=Y.attributes,U=B.getAttributes(),W=q.defaultAttributeValues;for(let V in U){let N=U[V];if(N.location>=0){let K=X[V];if(K===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){let ue=K.normalized,ge=K.itemSize,G=t.get(K);if(G===void 0)continue;let We=G.buffer,Ee=G.type,be=G.bytesPerElement;if(K.isInterleavedBufferAttribute){let fe=K.data,Ne=fe.stride,Pe=K.offset;if(fe.isInstancedInterleavedBuffer){for(let Me=0;Me<N.locationSize;Me++)M(N.location+Me,fe.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<N.locationSize;Me++)_(N.location+Me);n.bindBuffer(34962,We);for(let Me=0;Me<N.locationSize;Me++)R(N.location+Me,ge/N.locationSize,Ee,ue,Ne*be,(Pe+ge/N.locationSize*Me)*be)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<N.locationSize;fe++)M(N.location+fe,K.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<N.locationSize;fe++)_(N.location+fe);n.bindBuffer(34962,We);for(let fe=0;fe<N.locationSize;fe++)R(N.location+fe,ge/N.locationSize,Ee,ue,ge*be,ge/N.locationSize*fe*be)}}else if(W!==void 0){let ue=W[V];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(N.location,ue);break;case 3:n.vertexAttrib3fv(N.location,ue);break;case 4:n.vertexAttrib4fv(N.location,ue);break;default:n.vertexAttrib1fv(N.location,ue)}}}}A()}function C(){Q();for(let I in a){let q=a[I];for(let B in q){let Y=q[B];for(let X in Y)y(Y[X].object),delete Y[X];delete q[B]}delete a[I]}}function D(I){if(a[I.id]===void 0)return;let q=a[I.id];for(let B in q){let Y=q[B];for(let X in Y)y(Y[X].object),delete Y[X];delete q[B]}delete a[I.id]}function z(I){for(let q in a){let B=a[q];if(B[I.id]===void 0)continue;let Y=B[I.id];for(let X in Y)y(Y[X].object),delete Y[X];delete B[I.id]}}function Q(){se(),u=!0,c!==l&&(c=l,g(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:se,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:_,disableUnusedAttributes:A}}function D2(n,e,t,i){let r=i.isWebGL2,s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,g;if(r)h=n,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function I2(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),g=n.getParameter(3379),y=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),x=h>0,_=o||e.has("OES_texture_float"),M=x&&_,A=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:d,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:A}}function k2(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Mi,a=new Mn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,g){let y=f.length!==0||h||i!==0||r;return r=h,t=u(f,g,0),i=f.length,y},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,g){let y=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,m=n.get(f);if(!r||y===null||y.length===0||s&&!d)s?u(null):c();else{let v=s?0:i,x=v*4,_=m.clippingState||null;l.value=_,_=u(y,h,x,g);for(let M=0;M!==x;++M)_[M]=t[M];m.clippingState=_,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,g,y){let p=f!==null?f.length:0,d=null;if(p!==0){if(d=l.value,y!==!0||d===null){let m=g+p*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<m)&&(d=new Float32Array(m));for(let x=0,_=g;x!==p;++x,_+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(d,_),d[_+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function N2(n){let e=new WeakMap;function t(o,a){return a===ud?o.mapping=Vs:a===hd&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===ud||a===hd)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new vd(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function z2(n){let e=[],t=[],i=[],r=n,s=n-Ns+1+Tv.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ns?l=Tv[o-n+Ns-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,y=6,p=3,d=2,m=1,v=new Float32Array(p*y*g),x=new Float32Array(d*y*g),_=new Float32Array(m*y*g);for(let A=0;A<g;A++){let R=A%3*2/3-1,w=A>2?0:-1,C=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];v.set(C,p*y*A),x.set(h,d*y*A);let D=[A,A,A,A,A,A];_.set(D,m*y*A)}let M=new En;M.setAttribute("position",new on(v,p)),M.setAttribute("uv",new on(x,d)),M.setAttribute("faceIndex",new on(_,m)),e.push(M),r>Ns&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pv(n,e,t){let i=new ri(n,e,t);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function F2(n,e,t){let i=new Float32Array(Sr),r=new L(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Rv(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Lv(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Qd(){return`

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
	`}function O2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ud||l===hd,u=l===Vs||l===Hs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new kc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new kc(n));let h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function B2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function U2(n,e,t,i){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",o),delete r[h.id];let g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let y in h)e.update(h[y],34962);let g=f.morphAttributes;for(let y in g){let p=g[y];for(let d=0,m=p.length;d<m;d++)e.update(p[d],34962)}}function c(f){let h=[],g=f.index,y=f.attributes.position,p=0;if(g!==null){let v=g.array;p=g.version;for(let x=0,_=v.length;x<_;x+=3){let M=v[x+0],A=v[x+1],R=v[x+2];h.push(M,A,A,R,R,M)}}else{let v=y.array;p=y.version;for(let x=0,_=v.length/3-1;x<_;x+=3){let M=x+0,A=x+1,R=x+2;h.push(M,A,A,R,R,M)}}let d=new(ox(h)?Rc:Pc)(h,1);d.version=p;let m=s.get(f);m&&e.remove(m),s.set(f,d)}function u(f){let h=s.get(f);if(h){let g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function V2(n,e,t,i){let r=i.isWebGL2,s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,g){n.drawElements(s,g,a,h*l),t.update(g,s,1)}function f(h,g,y){if(y===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,a,h*l,y),t.update(g,s,y)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function H2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function W2(n,e){return n[0]-e[0]}function G2(n,e){return Math.abs(e[1])-Math.abs(n[1])}function sd(n,e){let t=1,i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function q2(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){let g=c.morphTargetInfluences;if(e.isWebGL2===!0){let y=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=y!==void 0?y.length:0,d=s.get(u);if(d===void 0||d.count!==p){let q=function(){se.dispose(),s.delete(u),u.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();let x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],w=u.morphAttributes.color||[],C=0;x===!0&&(C=1),_===!0&&(C=2),M===!0&&(C=3);let D=u.attributes.position.count*C,z=1;D>e.maxTextureSize&&(z=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let Q=new Float32Array(D*z*4*p),se=new Cc(Q,D,z,p);se.type=Er,se.needsUpdate=!0;let I=C*4;for(let B=0;B<p;B++){let Y=A[B],X=R[B],U=w[B],W=D*z*4*B;for(let V=0;V<Y.count;V++){let N=V*I;x===!0&&(o.fromBufferAttribute(Y,V),Y.normalized===!0&&sd(o,Y),Q[W+N+0]=o.x,Q[W+N+1]=o.y,Q[W+N+2]=o.z,Q[W+N+3]=0),_===!0&&(o.fromBufferAttribute(X,V),X.normalized===!0&&sd(o,X),Q[W+N+4]=o.x,Q[W+N+5]=o.y,Q[W+N+6]=o.z,Q[W+N+7]=0),M===!0&&(o.fromBufferAttribute(U,V),U.normalized===!0&&sd(o,U),Q[W+N+8]=o.x,Q[W+N+9]=o.y,Q[W+N+10]=o.z,Q[W+N+11]=U.itemSize===4?o.w:1)}}d={count:p,texture:se,size:new _e(D,z)},s.set(u,d),u.addEventListener("dispose",q)}let m=0;for(let x=0;x<g.length;x++)m+=g[x];let v=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",g),h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{let y=g===void 0?0:g.length,p=i[u.id];if(p===void 0||p.length!==y){p=[];for(let _=0;_<y;_++)p[_]=[_,0];i[u.id]=p}for(let _=0;_<y;_++){let M=p[_];M[0]=_,M[1]=g[_]}p.sort(G2);for(let _=0;_<8;_++)_<y&&p[_][1]?(a[_][0]=p[_][0],a[_][1]=p[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(W2);let d=u.morphAttributes.position,m=u.morphAttributes.normal,v=0;for(let _=0;_<8;_++){let M=a[_],A=M[0],R=M[1];A!==Number.MAX_SAFE_INTEGER&&R?(d&&u.getAttribute("morphTarget"+_)!==d[A]&&u.setAttribute("morphTarget"+_,d[A]),m&&u.getAttribute("morphNormal"+_)!==m[A]&&u.setAttribute("morphNormal"+_,m[A]),r[_]=R,v+=R):(d&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}let x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function X2(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}function $s(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Dv[r];if(s===void 0&&(s=new Float32Array(r),Dv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qc(n,e){let t=Iv[e];t===void 0&&(t=new Int32Array(e),Iv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Y2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function $2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function Z2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function J2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,i))return;zv.set(i),n.uniformMatrix2fv(this.addr,!1,zv),Ht(t,i)}}function K2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,i))return;Nv.set(i),n.uniformMatrix3fv(this.addr,!1,Nv),Ht(t,i)}}function Q2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,i))return;kv.set(i),n.uniformMatrix4fv(this.addr,!1,kv),Ht(t,i)}}function eE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tE(n,e){let t=this.cache;Vt(t,e)||(n.uniform2iv(this.addr,e),Ht(t,e))}function nE(n,e){let t=this.cache;Vt(t,e)||(n.uniform3iv(this.addr,e),Ht(t,e))}function iE(n,e){let t=this.cache;Vt(t,e)||(n.uniform4iv(this.addr,e),Ht(t,e))}function rE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sE(n,e){let t=this.cache;Vt(t,e)||(n.uniform2uiv(this.addr,e),Ht(t,e))}function oE(n,e){let t=this.cache;Vt(t,e)||(n.uniform3uiv(this.addr,e),Ht(t,e))}function aE(n,e){let t=this.cache;Vt(t,e)||(n.uniform4uiv(this.addr,e),Ht(t,e))}function lE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||cx,r)}function cE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||hx,r)}function uE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||fx,r)}function hE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ux,r)}function fE(n){switch(n){case 5126:return j2;case 35664:return Y2;case 35665:return $2;case 35666:return Z2;case 35674:return J2;case 35675:return K2;case 35676:return Q2;case 5124:case 35670:return eE;case 35667:case 35671:return tE;case 35668:case 35672:return nE;case 35669:case 35673:return iE;case 5125:return rE;case 36294:return sE;case 36295:return oE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return lE;case 35679:case 36299:case 36307:return cE;case 35680:case 36300:case 36308:case 36293:return uE;case 36289:case 36303:case 36311:case 36292:return hE}}function dE(n,e){n.uniform1fv(this.addr,e)}function pE(n,e){let t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function mE(n,e){let t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function gE(n,e){let t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function yE(n,e){let t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vE(n,e){let t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xE(n,e){let t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _E(n,e){n.uniform1iv(this.addr,e)}function wE(n,e){n.uniform2iv(this.addr,e)}function ME(n,e){n.uniform3iv(this.addr,e)}function SE(n,e){n.uniform4iv(this.addr,e)}function bE(n,e){n.uniform1uiv(this.addr,e)}function EE(n,e){n.uniform2uiv(this.addr,e)}function TE(n,e){n.uniform3uiv(this.addr,e)}function AE(n,e){n.uniform4uiv(this.addr,e)}function CE(n,e,t){let i=e.length,r=qc(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||cx,r[s])}function PE(n,e,t){let i=e.length,r=qc(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||hx,r[s])}function RE(n,e,t){let i=e.length,r=qc(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||fx,r[s])}function LE(n,e,t){let i=e.length,r=qc(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||ux,r[s])}function DE(n){switch(n){case 5126:return dE;case 35664:return pE;case 35665:return mE;case 35666:return gE;case 35674:return yE;case 35675:return vE;case 35676:return xE;case 5124:case 35670:return _E;case 35667:case 35671:return wE;case 35668:case 35672:return ME;case 35669:case 35673:return SE;case 5125:return bE;case 36294:return EE;case 36295:return TE;case 36296:return AE;case 35678:case 36198:case 36298:case 36306:case 35682:return CE;case 35679:case 36299:case 36307:return PE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return LE}}function Fv(n,e){n.seq.push(e),n.map[e.id]=e}function IE(n,e,t){let i=n.name,r=i.length;for(od.lastIndex=0;;){let s=od.exec(i),o=od.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fv(t,c===void 0?new _d(a,n,e):new wd(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Md(a),Fv(t,f)),t=f}}}function Ov(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function NE(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function zE(n){switch(n){case Rr:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Bv(n,e,t){let i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+NE(n.getShaderSource(e),o)}else return r}function FE(n,e){let t=zE(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function OE(n,e){let t;switch(e){case hM:t="Linear";break;case fM:t="Reinhard";break;case dM:t="OptimizedCineon";break;case pM:t="ACESFilmic";break;case mM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function BE(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ea).join(`
`)}function UE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VE(n,e){let t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ea(n){return n!==""}function Uv(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Sd(n){return n.replace(HE,WE)}function WE(n,e){let t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sd(t)}function Hv(n){return n.replace(qE,dx).replace(GE,XE)}function XE(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),dx(n,e,t,i)}function dx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wv(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qo&&(e="SHADOWMAP_TYPE_VSM"),e}function YE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $E(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function ZE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hc:e="ENVMAP_BLENDING_MULTIPLY";break;case cM:e="ENVMAP_BLENDING_MIX";break;case uM:e="ENVMAP_BLENDING_ADD";break}return e}function JE(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function KE(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=jE(t),c=YE(t),u=$E(t),f=ZE(t),h=JE(t),g=t.isWebGL2?"":BE(t),y=UE(s),p=r.createProgram(),d,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[y].filter(ea).join(`
`),d.length>0&&(d+=`
`),m=[g,y].filter(ea).join(`
`),m.length>0&&(m+=`
`)):(d=[Wv(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),m=[g,Wv(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Re.tonemapping_pars_fragment:"",t.toneMapping!==Si?OE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,FE("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=Sd(o),o=Uv(o,t),o=Vv(o,t),a=Sd(a),a=Uv(a,t),a=Vv(a,t),o=Hv(o),a=Hv(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",t.glslVersion===fv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=v+d+o,_=v+m+a,M=Ov(r,35633,x),A=Ov(r,35632,_);if(r.attachShader(p,M),r.attachShader(p,A),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){let C=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(M).trim(),z=r.getShaderInfoLog(A).trim(),Q=!0,se=!0;if(r.getProgramParameter(p,35714)===!1){Q=!1;let I=Bv(r,M,"vertex"),q=Bv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+I+`
`+q)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||z==="")&&(se=!1);se&&(this.diagnostics={runnable:Q,programLog:C,vertexShader:{log:D,prefix:d},fragmentShader:{log:z,prefix:m}})}r.deleteShader(M),r.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new Bs(r,p)),R};let w;return this.getAttributes=function(){return w===void 0&&(w=VE(r,p)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=kE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=A,this}function e3(n,e,t,i,r,s,o){let a=new sa,l=new bd,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures,g=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,C,D,z,Q){let se=z.fog,I=Q.geometry,q=w.isMeshStandardMaterial?z.environment:null,B=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),Y=!!B&&B.mapping===Wc?B.image.height:null,X=y[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));let U=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,W=U!==void 0?U.length:0,V=0;I.morphAttributes.position!==void 0&&(V=1),I.morphAttributes.normal!==void 0&&(V=2),I.morphAttributes.color!==void 0&&(V=3);let N,K,ue,ge;if(X){let Ne=ii[X];N=Ne.vertexShader,K=Ne.fragmentShader}else N=w.vertexShader,K=w.fragmentShader,l.update(w),ue=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);let G=n.getRenderTarget(),We=w.alphaTest>0,Ee=w.clearcoat>0,be=w.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:w.type,vertexShader:N,fragmentShader:K,defines:w.defines,customVertexShaderID:ue,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:G===null?n.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Rr,map:!!w.map,matcap:!!w.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:Y,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===NM,tangentSpaceNormalMap:w.normalMapType===Ys,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===Ke,clearcoat:Ee,clearcoatMap:Ee&&!!w.clearcoatMap,clearcoatRoughnessMap:Ee&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!w.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!w.iridescenceMap,iridescenceThicknessMap:be&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Fs,alphaMap:!!w.alphaMap,alphaTest:We,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!I.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!se,useFog:w.fog===!0,fogExp2:se&&se.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:V,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:w.toneMapped?n.toneMapping:Si,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Us,flipSided:w.side===Vn,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function d(w){let C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)C.push(D),C.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(m(C,w),v(C,w),C.push(n.outputEncoding)),C.push(w.customProgramCacheKey),C.join()}function m(w,C){w.push(C.precision),w.push(C.outputEncoding),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.combine),w.push(C.vertexUvs),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function v(w,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),C.fog&&a.enable(33),w.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),w.push(a.mask)}function x(w){let C=y[w.type],D;if(C){let z=ii[C];D=$M.clone(z.uniforms)}else D=w.uniforms;return D}function _(w,C){let D;for(let z=0,Q=c.length;z<Q;z++){let se=c[z];if(se.cacheKey===C){D=se,++D.usedTimes;break}}return D===void 0&&(D=new KE(n,C,w,s),c.push(D)),D}function M(w){if(--w.usedTimes===0){let C=c.indexOf(w);c[C]=c[c.length-1],c.pop(),w.destroy()}}function A(w){l.remove(w)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:_,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:R}}function t3(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function n3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qv(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,g,y,p,d){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:g,groupOrder:y,renderOrder:f.renderOrder,z:p,group:d},n[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=g,m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=p,m.group=d),e++,m}function a(f,h,g,y,p,d){let m=o(f,h,g,y,p,d);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(f,h,g,y,p,d){let m=o(f,h,g,y,p,d);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||n3),i.length>1&&i.sort(h||Gv),r.length>1&&r.sort(h||Gv)}function u(){for(let f=e,h=n.length;f<h;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function i3(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new qv,n.set(i,[s])):r>=n.get(i).length?(s=new qv,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function r3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new pe};break;case"SpotLight":t={position:new L,direction:new L,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function s3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function a3(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function l3(n,e){let t=new r3,i=s3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new L);let s=new L,o=new Qe,a=new Qe;function l(u,f){let h=0,g=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let p=0,d=0,m=0,v=0,x=0,_=0,M=0,A=0;u.sort(a3);let R=f!==!0?Math.PI:1;for(let C=0,D=u.length;C<D;C++){let z=u[C],Q=z.color,se=z.intensity,I=z.distance,q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=Q.r*se*R,g+=Q.g*se*R,y+=Q.b*se*R;else if(z.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(z.sh.coefficients[B],se);else if(z.isDirectionalLight){let B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*R),z.castShadow){let Y=z.shadow,X=i.get(z);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.directionalShadow[p]=X,r.directionalShadowMap[p]=q,r.directionalShadowMatrix[p]=z.shadow.matrix,_++}r.directional[p]=B,p++}else if(z.isSpotLight){let B=t.get(z);if(B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(Q).multiplyScalar(se*R),B.distance=I,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,z.castShadow){let Y=z.shadow,X=i.get(z);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.spotShadow[m]=X,r.spotShadowMap[m]=q,r.spotShadowMatrix[m]=z.shadow.matrix,A++}r.spot[m]=B,m++}else if(z.isRectAreaLight){let B=t.get(z);B.color.copy(Q).multiplyScalar(se),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),r.rectArea[v]=B,v++}else if(z.isPointLight){let B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*R),B.distance=z.distance,B.decay=z.decay,z.castShadow){let Y=z.shadow,X=i.get(z);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,r.pointShadow[d]=X,r.pointShadowMap[d]=q,r.pointShadowMatrix[d]=z.shadow.matrix,M++}r.point[d]=B,d++}else if(z.isHemisphereLight){let B=t.get(z);B.skyColor.copy(z.color).multiplyScalar(se*R),B.groundColor.copy(z.groundColor).multiplyScalar(se*R),r.hemi[x]=B,x++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=y;let w=r.hash;(w.directionalLength!==p||w.pointLength!==d||w.spotLength!==m||w.rectAreaLength!==v||w.hemiLength!==x||w.numDirectionalShadows!==_||w.numPointShadows!==M||w.numSpotShadows!==A)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=d,r.hemi.length=x,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=A,w.directionalLength=p,w.pointLength=d,w.spotLength=m,w.rectAreaLength=v,w.hemiLength=x,w.numDirectionalShadows=_,w.numPointShadows=M,w.numSpotShadows=A,r.version=o3++)}function c(u,f){let h=0,g=0,y=0,p=0,d=0,m=f.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){let _=u[v];if(_.isDirectionalLight){let M=r.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(_.isSpotLight){let M=r.spot[y];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),y++}else if(_.isRectAreaLight){let M=r.rectArea[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(_.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){let M=r.point[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),g++}else if(_.isHemisphereLight){let M=r.hemi[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),d++}}}return{setup:l,setupView:c,state:r}}function Xv(n,e){let t=new l3(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function c3(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Xv(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Xv(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}function f3(n,e,t){let i=new Ic,r=new _e,s=new _e,o=new vt,a=new Nc({depthPacking:kM}),l=new zc,c={},u=t.maxTextureSize,f={0:Vn,1:na,2:Us},h=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:u3,fragmentShader:h3}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let y=new En;y.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Sn(y,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tx,this.render=function(_,M,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;let R=n.getRenderTarget(),w=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(tr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let z=0,Q=_.length;z<Q;z++){let se=_[z],I=se.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let q=I.getFrameExtents();if(r.multiply(q),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,I.mapSize.y=s.y)),I.map===null&&!I.isPointLightShadow&&this.type===Qo&&(I.map=new ri(r.x,r.y),I.map.texture.name=se.name+".shadowMap",I.mapPass=new ri(r.x,r.y),I.camera.updateProjectionMatrix()),I.map===null){let Y={minFilter:$t,magFilter:$t,format:Un};I.map=new ri(r.x,r.y,Y),I.map.texture.name=se.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();let B=I.getViewportCount();for(let Y=0;Y<B;Y++){let X=I.getViewport(Y);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),D.viewport(o),I.updateMatrices(se,Y),i=I.getFrustum(),x(M,A,I.camera,se,this.type)}!I.isPointLightShadow&&this.type===Qo&&m(I,A),I.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(R,w,C)};function m(_,M){let A=e.update(p);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,g.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),h.uniforms.shadow_pass.value=_.map.texture,h.uniforms.resolution.value=_.mapSize,h.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(M,null,A,h,p,null),g.uniforms.shadow_pass.value=_.mapPass.texture,g.uniforms.resolution.value=_.mapSize,g.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(M,null,A,g,p,null)}function v(_,M,A,R,w,C){let D=null,z=A.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(z!==void 0?D=z:D=A.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){let Q=D.uuid,se=M.uuid,I=c[Q];I===void 0&&(I={},c[Q]=I);let q=I[se];q===void 0&&(q=D.clone(),I[se]=q),D=q}return D.visible=M.visible,D.wireframe=M.wireframe,C===Qo?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:f[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=R,D.farDistance=w),D}function x(_,M,A,R,w){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&w===Qo)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,_.matrixWorld);let z=e.update(_),Q=_.material;if(Array.isArray(Q)){let se=z.groups;for(let I=0,q=se.length;I<q;I++){let B=se[I],Y=Q[B.materialIndex];if(Y&&Y.visible){let X=v(_,Y,R,A.near,A.far,w);n.renderBufferDirect(A,null,z,X,_,B)}}}else if(Q.visible){let se=v(_,Q,R,A.near,A.far,w);n.renderBufferDirect(A,null,z,se,_,null)}}let D=_.children;for(let z=0,Q=D.length;z<Q;z++)x(D[z],M,A,R,w)}}function d3(n,e,t){let i=t.isWebGL2;function r(){let P=!1,ne=new vt,ee=null,ve=new vt(0,0,0,0);return{setMask:function(ce){ee!==ce&&!P&&(n.colorMask(ce,ce,ce,ce),ee=ce)},setLocked:function(ce){P=ce},setClear:function(ce,ye,ie,Se,Be){Be===!0&&(ce*=Se,ye*=Se,ie*=Se),ne.set(ce,ye,ie,Se),ve.equals(ne)===!1&&(n.clearColor(ce,ye,ie,Se),ve.copy(ne))},reset:function(){P=!1,ee=null,ve.set(-1,0,0,0)}}}function s(){let P=!1,ne=null,ee=null,ve=null;return{setTest:function(ce){ce?ge(2929):G(2929)},setMask:function(ce){ne!==ce&&!P&&(n.depthMask(ce),ne=ce)},setFunc:function(ce){if(ee!==ce){if(ce)switch(ce){case nM:n.depthFunc(512);break;case iM:n.depthFunc(519);break;case rM:n.depthFunc(513);break;case cd:n.depthFunc(515);break;case sM:n.depthFunc(514);break;case oM:n.depthFunc(518);break;case aM:n.depthFunc(516);break;case lM:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);ee=ce}},setLocked:function(ce){P=ce},setClear:function(ce){ve!==ce&&(n.clearDepth(ce),ve=ce)},reset:function(){P=!1,ne=null,ee=null,ve=null}}}function o(){let P=!1,ne=null,ee=null,ve=null,ce=null,ye=null,ie=null,Se=null,Be=null;return{setTest:function(Ue){P||(Ue?ge(2960):G(2960))},setMask:function(Ue){ne!==Ue&&!P&&(n.stencilMask(Ue),ne=Ue)},setFunc:function(Ue,It,qn){(ee!==Ue||ve!==It||ce!==qn)&&(n.stencilFunc(Ue,It,qn),ee=Ue,ve=It,ce=qn)},setOp:function(Ue,It,qn){(ye!==Ue||ie!==It||Se!==qn)&&(n.stencilOp(Ue,It,qn),ye=Ue,ie=It,Se=qn)},setLocked:function(Ue){P=Ue},setClear:function(Ue){Be!==Ue&&(n.clearStencil(Ue),Be=Ue)},reset:function(){P=!1,ne=null,ee=null,ve=null,ce=null,ye=null,ie=null,Se=null,Be=null}}}let a=new r,l=new s,c=new o,u={},f={},h=new WeakMap,g=[],y=null,p=!1,d=null,m=null,v=null,x=null,_=null,M=null,A=null,R=!1,w=null,C=null,D=null,z=null,Q=null,se=n.getParameter(35661),I=!1,q=0,B=n.getParameter(7938);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),I=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),I=q>=2);let Y=null,X={},U=n.getParameter(3088),W=n.getParameter(2978),V=new vt().fromArray(U),N=new vt().fromArray(W);function K(P,ne,ee){let ve=new Uint8Array(4),ce=n.createTexture();n.bindTexture(P,ce),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let ye=0;ye<ee;ye++)n.texImage2D(ne+ye,0,6408,1,1,0,6408,5121,ve);return ce}let ue={};ue[3553]=K(3553,3553,1),ue[34067]=K(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(2929),l.setFunc(cd),ot(!1),pt(Iy),ge(2884),Pe(tr);function ge(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function G(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function We(P,ne){return f[P]!==ne?(n.bindFramebuffer(P,ne),f[P]=ne,i&&(P===36009&&(f[36160]=ne),P===36160&&(f[36009]=ne)),!0):!1}function Ee(P,ne){let ee=g,ve=!1;if(P)if(ee=h.get(ne),ee===void 0&&(ee=[],h.set(ne,ee)),P.isWebGLMultipleRenderTargets){let ce=P.texture;if(ee.length!==ce.length||ee[0]!==36064){for(let ye=0,ie=ce.length;ye<ie;ye++)ee[ye]=36064+ye;ee.length=ce.length,ve=!0}}else ee[0]!==36064&&(ee[0]=36064,ve=!0);else ee[0]!==1029&&(ee[0]=1029,ve=!0);ve&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function be(P){return y!==P?(n.useProgram(P),y=P,!0):!1}let fe={[ks]:32774,[qw]:32778,[Xw]:32779};if(i)fe[Fy]=32775,fe[Oy]=32776;else{let P=e.get("EXT_blend_minmax");P!==null&&(fe[Fy]=P.MIN_EXT,fe[Oy]=P.MAX_EXT)}let Ne={[jw]:0,[Yw]:1,[$w]:768,[nx]:770,[tM]:776,[Qw]:774,[Jw]:772,[Zw]:769,[ix]:771,[eM]:775,[Kw]:773};function Pe(P,ne,ee,ve,ce,ye,ie,Se){if(P===tr){p===!0&&(G(3042),p=!1);return}if(p===!1&&(ge(3042),p=!0),P!==Gw){if(P!==d||Se!==R){if((m!==ks||_!==ks)&&(n.blendEquation(32774),m=ks,_=ks),Se)switch(P){case Fs:n.blendFuncSeparate(1,771,1,771);break;case ky:n.blendFunc(1,1);break;case Ny:n.blendFuncSeparate(0,769,0,1);break;case zy:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Fs:n.blendFuncSeparate(770,771,1,771);break;case ky:n.blendFunc(770,1);break;case Ny:n.blendFuncSeparate(0,769,0,1);break;case zy:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,x=null,M=null,A=null,d=P,R=Se}return}ce=ce||ne,ye=ye||ee,ie=ie||ve,(ne!==m||ce!==_)&&(n.blendEquationSeparate(fe[ne],fe[ce]),m=ne,_=ce),(ee!==v||ve!==x||ye!==M||ie!==A)&&(n.blendFuncSeparate(Ne[ee],Ne[ve],Ne[ye],Ne[ie]),v=ee,x=ve,M=ye,A=ie),d=P,R=null}function Me(P,ne){P.side===Us?G(2884):ge(2884);let ee=P.side===Vn;ne&&(ee=!ee),ot(ee),P.blending===Fs&&P.transparent===!1?Pe(tr):Pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let ve=P.stencilWrite;c.setTest(ve),ve&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Jt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ge(32926):G(32926)}function ot(P){w!==P&&(P?n.frontFace(2304):n.frontFace(2305),w=P)}function pt(P){P!==Uw?(ge(2884),P!==C&&(P===Iy?n.cullFace(1029):P===Vw?n.cullFace(1028):n.cullFace(1032))):G(2884),C=P}function xt(P){P!==D&&(I&&n.lineWidth(P),D=P)}function Jt(P,ne,ee){P?(ge(32823),(z!==ne||Q!==ee)&&(n.polygonOffset(ne,ee),z=ne,Q=ee)):G(32823)}function at(P){P?ge(3089):G(3089)}function Oe(P){P===void 0&&(P=33984+se-1),Y!==P&&(n.activeTexture(P),Y=P)}function cn(P,ne){Y===null&&Oe();let ee=X[Y];ee===void 0&&(ee={type:void 0,texture:void 0},X[Y]=ee),(ee.type!==P||ee.texture!==ne)&&(n.bindTexture(P,ne||ue[P]),ee.type=P,ee.texture=ne)}function un(){let P=X[Y];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function T(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function S(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function b(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(P){V.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),V.copy(P))}function oe(P){N.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),N.copy(P))}function te(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Y=null,X={},f={},h=new WeakMap,g=[],y=null,p=!1,d=null,m=null,v=null,x=null,_=null,M=null,A=null,R=!1,w=null,C=null,D=null,z=null,Q=null,V.set(0,0,n.canvas.width,n.canvas.height),N.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ge,disable:G,bindFramebuffer:We,drawBuffers:Ee,useProgram:be,setBlending:Pe,setMaterial:Me,setFlipSided:ot,setCullFace:pt,setLineWidth:xt,setPolygonOffset:Jt,setScissorTest:at,activeTexture:Oe,bindTexture:cn,unbindTexture:un,compressedTexImage2D:T,texImage2D:xe,texImage3D:b,texStorage2D:re,texStorage3D:he,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:J,scissor:$,viewport:oe,reset:te}}function p3(n,e,t,i,r,s,o){let a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap,p,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,S){return m?new OffscreenCanvas(T,S):Ec("canvas")}function x(T,S,H,J){let re=1;if((T.width>J||T.height>J)&&(re=J/Math.max(T.width,T.height)),re<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let he=S?md:Math.floor,xe=he(re*T.width),b=he(re*T.height);p===void 0&&(p=v(xe,b));let $=H?v(xe,b):p;return $.width=xe,$.height=b,$.getContext("2d").drawImage(T,0,0,xe,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+b+")."),$}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function _(T){return pv(T.width)&&pv(T.height)}function M(T){return a?!1:T.wrapS!==Bn||T.wrapT!==Bn||T.minFilter!==$t&&T.minFilter!==_n}function A(T,S){return T.generateMipmaps&&S&&T.minFilter!==$t&&T.minFilter!==_n}function R(T){n.generateMipmap(T)}function w(T,S,H,J,re=!1){if(a===!1)return S;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he=S;return S===6403&&(H===5126&&(he=33326),H===5131&&(he=33325),H===5121&&(he=33321)),S===33319&&(H===5126&&(he=33328),H===5131&&(he=33327),H===5121&&(he=33323)),S===6408&&(H===5126&&(he=34836),H===5131&&(he=34842),H===5121&&(he=J===Ke&&re===!1?35907:32856),H===32819&&(he=32854),H===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function C(T,S,H){return A(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==$t&&T.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function D(T){return T===$t||T===By||T===Uy?9728:9729}function z(T){let S=T.target;S.removeEventListener("dispose",z),se(S),S.isVideoTexture&&y.delete(S)}function Q(T){let S=T.target;S.removeEventListener("dispose",Q),q(S)}function se(T){let S=i.get(T);if(S.__webglInit===void 0)return;let H=T.source,J=d.get(H);if(J){let re=J[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&I(T),Object.keys(J).length===0&&d.delete(H)}i.remove(T)}function I(T){let S=i.get(T);n.deleteTexture(S.__webglTexture);let H=T.source,J=d.get(H);delete J[S.__cacheKey],o.memory.textures--}function q(T){let S=T.texture,H=i.get(T),J=i.get(S);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(H.__webglFramebuffer[re]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let re=0;re<H.__webglColorRenderbuffer.length;re++)H.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[re]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let re=0,he=S.length;re<he;re++){let xe=i.get(S[re]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(S[re])}i.remove(S),i.remove(T)}let B=0;function Y(){B=0}function X(){let T=B;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),B+=1,T}function U(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function W(T,S){let H=i.get(T);if(T.isVideoTexture&&cn(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(H,T,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,H.__webglTexture)}function V(T,S){let H=i.get(T);if(T.version>0&&H.__version!==T.version){Ee(H,T,S);return}t.activeTexture(33984+S),t.bindTexture(35866,H.__webglTexture)}function N(T,S){let H=i.get(T);if(T.version>0&&H.__version!==T.version){Ee(H,T,S);return}t.activeTexture(33984+S),t.bindTexture(32879,H.__webglTexture)}function K(T,S){let H=i.get(T);if(T.version>0&&H.__version!==T.version){be(H,T,S);return}t.activeTexture(33984+S),t.bindTexture(34067,H.__webglTexture)}let ue={[fd]:10497,[Bn]:33071,[dd]:33648},ge={[$t]:9728,[By]:9984,[Uy]:9986,[_n]:9729,[gM]:9985,[Gc]:9987};function G(T,S,H){if(H?(n.texParameteri(T,10242,ue[S.wrapS]),n.texParameteri(T,10243,ue[S.wrapT]),(T===32879||T===35866)&&n.texParameteri(T,32882,ue[S.wrapR]),n.texParameteri(T,10240,ge[S.magFilter]),n.texParameteri(T,10241,ge[S.minFilter])):(n.texParameteri(T,10242,33071),n.texParameteri(T,10243,33071),(T===32879||T===35866)&&n.texParameteri(T,32882,33071),(S.wrapS!==Bn||S.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,10240,D(S.magFilter)),n.texParameteri(T,10241,D(S.minFilter)),S.minFilter!==$t&&S.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(S.type===Er&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ia&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function We(T,S){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",z));let J=S.source,re=d.get(J);re===void 0&&(re={},d.set(J,re));let he=U(S);if(he!==T.__cacheKey){re[he]===void 0&&(re[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),re[he].usedTimes++;let xe=re[T.__cacheKey];xe!==void 0&&(re[T.__cacheKey].usedTimes--,xe.usedTimes===0&&I(S)),T.__cacheKey=he,T.__webglTexture=re[he].texture}return H}function Ee(T,S,H){let J=3553;S.isDataArrayTexture&&(J=35866),S.isData3DTexture&&(J=32879);let re=We(T,S),he=S.source;if(t.activeTexture(33984+H),t.bindTexture(J,T.__webglTexture),he.version!==he.__currentVersion||re===!0){n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);let xe=M(S)&&_(S.image)===!1,b=x(S.image,xe,!1,u);b=un(S,b);let $=_(b)||a,oe=s.convert(S.format,S.encoding),te=s.convert(S.type),P=w(S.internalFormat,oe,te,S.encoding,S.isVideoTexture);G(J,S,$);let ne,ee=S.mipmaps,ve=a&&S.isVideoTexture!==!0,ce=he.__currentVersion===void 0||re===!0,ye=C(S,b,$);if(S.isDepthTexture)P=6402,a?S.type===Er?P=36012:S.type===br?P=33190:S.type===Os?P=35056:P=33189:S.type===Er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ar&&P===6402&&S.type!==sx&&S.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=br,te=s.convert(S.type)),S.format===Ws&&P===6402&&(P=34041,S.type!==Os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Os,te=s.convert(S.type))),ce&&(ve?t.texStorage2D(3553,1,P,b.width,b.height):t.texImage2D(3553,0,P,b.width,b.height,0,oe,te,null));else if(S.isDataTexture)if(ee.length>0&&$){ve&&ce&&t.texStorage2D(3553,ye,P,ee[0].width,ee[0].height);for(let ie=0,Se=ee.length;ie<Se;ie++)ne=ee[ie],ve?t.texSubImage2D(3553,ie,0,0,ne.width,ne.height,oe,te,ne.data):t.texImage2D(3553,ie,P,ne.width,ne.height,0,oe,te,ne.data);S.generateMipmaps=!1}else ve?(ce&&t.texStorage2D(3553,ye,P,b.width,b.height),t.texSubImage2D(3553,0,0,0,b.width,b.height,oe,te,b.data)):t.texImage2D(3553,0,P,b.width,b.height,0,oe,te,b.data);else if(S.isCompressedTexture){ve&&ce&&t.texStorage2D(3553,ye,P,ee[0].width,ee[0].height);for(let ie=0,Se=ee.length;ie<Se;ie++)ne=ee[ie],S.format!==Un?oe!==null?ve?t.compressedTexSubImage2D(3553,ie,0,0,ne.width,ne.height,oe,ne.data):t.compressedTexImage2D(3553,ie,P,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage2D(3553,ie,0,0,ne.width,ne.height,oe,te,ne.data):t.texImage2D(3553,ie,P,ne.width,ne.height,0,oe,te,ne.data)}else if(S.isDataArrayTexture)ve?(ce&&t.texStorage3D(35866,ye,P,b.width,b.height,b.depth),t.texSubImage3D(35866,0,0,0,0,b.width,b.height,b.depth,oe,te,b.data)):t.texImage3D(35866,0,P,b.width,b.height,b.depth,0,oe,te,b.data);else if(S.isData3DTexture)ve?(ce&&t.texStorage3D(32879,ye,P,b.width,b.height,b.depth),t.texSubImage3D(32879,0,0,0,0,b.width,b.height,b.depth,oe,te,b.data)):t.texImage3D(32879,0,P,b.width,b.height,b.depth,0,oe,te,b.data);else if(S.isFramebufferTexture){if(ce)if(ve)t.texStorage2D(3553,ye,P,b.width,b.height);else{let ie=b.width,Se=b.height;for(let Be=0;Be<ye;Be++)t.texImage2D(3553,Be,P,ie,Se,0,oe,te,null),ie>>=1,Se>>=1}}else if(ee.length>0&&$){ve&&ce&&t.texStorage2D(3553,ye,P,ee[0].width,ee[0].height);for(let ie=0,Se=ee.length;ie<Se;ie++)ne=ee[ie],ve?t.texSubImage2D(3553,ie,0,0,oe,te,ne):t.texImage2D(3553,ie,P,oe,te,ne);S.generateMipmaps=!1}else ve?(ce&&t.texStorage2D(3553,ye,P,b.width,b.height),t.texSubImage2D(3553,0,0,0,oe,te,b)):t.texImage2D(3553,0,P,oe,te,b);A(S,$)&&R(J),he.__currentVersion=he.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function be(T,S,H){if(S.image.length!==6)return;let J=We(T,S),re=S.source;if(t.activeTexture(33984+H),t.bindTexture(34067,T.__webglTexture),re.version!==re.__currentVersion||J===!0){n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);let he=S.isCompressedTexture||S.image[0].isCompressedTexture,xe=S.image[0]&&S.image[0].isDataTexture,b=[];for(let ie=0;ie<6;ie++)!he&&!xe?b[ie]=x(S.image[ie],!1,!0,c):b[ie]=xe?S.image[ie].image:S.image[ie],b[ie]=un(S,b[ie]);let $=b[0],oe=_($)||a,te=s.convert(S.format,S.encoding),P=s.convert(S.type),ne=w(S.internalFormat,te,P,S.encoding),ee=a&&S.isVideoTexture!==!0,ve=re.__currentVersion===void 0||J===!0,ce=C(S,$,oe);G(34067,S,oe);let ye;if(he){ee&&ve&&t.texStorage2D(34067,ce,ne,$.width,$.height);for(let ie=0;ie<6;ie++){ye=b[ie].mipmaps;for(let Se=0;Se<ye.length;Se++){let Be=ye[Se];S.format!==Un?te!==null?ee?t.compressedTexSubImage2D(34069+ie,Se,0,0,Be.width,Be.height,te,Be.data):t.compressedTexImage2D(34069+ie,Se,ne,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?t.texSubImage2D(34069+ie,Se,0,0,Be.width,Be.height,te,P,Be.data):t.texImage2D(34069+ie,Se,ne,Be.width,Be.height,0,te,P,Be.data)}}}else{ye=S.mipmaps,ee&&ve&&(ye.length>0&&ce++,t.texStorage2D(34067,ce,ne,b[0].width,b[0].height));for(let ie=0;ie<6;ie++)if(xe){ee?t.texSubImage2D(34069+ie,0,0,0,b[ie].width,b[ie].height,te,P,b[ie].data):t.texImage2D(34069+ie,0,ne,b[ie].width,b[ie].height,0,te,P,b[ie].data);for(let Se=0;Se<ye.length;Se++){let Ue=ye[Se].image[ie].image;ee?t.texSubImage2D(34069+ie,Se+1,0,0,Ue.width,Ue.height,te,P,Ue.data):t.texImage2D(34069+ie,Se+1,ne,Ue.width,Ue.height,0,te,P,Ue.data)}}else{ee?t.texSubImage2D(34069+ie,0,0,0,te,P,b[ie]):t.texImage2D(34069+ie,0,ne,te,P,b[ie]);for(let Se=0;Se<ye.length;Se++){let Be=ye[Se];ee?t.texSubImage2D(34069+ie,Se+1,0,0,te,P,Be.image[ie]):t.texImage2D(34069+ie,Se+1,ne,te,P,Be.image[ie])}}}A(S,oe)&&R(34067),re.__currentVersion=re.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function fe(T,S,H,J,re){let he=s.convert(H.format,H.encoding),xe=s.convert(H.type),b=w(H.internalFormat,he,xe,H.encoding);i.get(S).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,b,S.width,S.height,S.depth,0,he,xe,null):t.texImage2D(re,0,b,S.width,S.height,0,he,xe,null)),t.bindFramebuffer(36160,T),Oe(S)?h.framebufferTexture2DMultisampleEXT(36160,J,re,i.get(H).__webglTexture,0,at(S)):n.framebufferTexture2D(36160,J,re,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(T,S,H){if(n.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let J=33189;if(H||Oe(S)){let re=S.depthTexture;re&&re.isDepthTexture&&(re.type===Er?J=36012:re.type===br&&(J=33190));let he=at(S);Oe(S)?h.renderbufferStorageMultisampleEXT(36161,he,J,S.width,S.height):n.renderbufferStorageMultisample(36161,he,J,S.width,S.height)}else n.renderbufferStorage(36161,J,S.width,S.height);n.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){let J=at(S);H&&Oe(S)===!1?n.renderbufferStorageMultisample(36161,J,35056,S.width,S.height):Oe(S)?h.renderbufferStorageMultisampleEXT(36161,J,35056,S.width,S.height):n.renderbufferStorage(36161,34041,S.width,S.height),n.framebufferRenderbuffer(36160,33306,36161,T)}else{let J=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let re=0;re<J.length;re++){let he=J[re],xe=s.convert(he.format,he.encoding),b=s.convert(he.type),$=w(he.internalFormat,xe,b,he.encoding),oe=at(S);H&&Oe(S)===!1?n.renderbufferStorageMultisample(36161,oe,$,S.width,S.height):Oe(S)?h.renderbufferStorageMultisampleEXT(36161,oe,$,S.width,S.height):n.renderbufferStorage(36161,$,S.width,S.height)}}n.bindRenderbuffer(36161,null)}function Pe(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);let J=i.get(S.depthTexture).__webglTexture,re=at(S);if(S.depthTexture.format===Ar)Oe(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,re):n.framebufferTexture2D(36160,36096,3553,J,0);else if(S.depthTexture.format===Ws)Oe(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,re):n.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function Me(T){let S=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Pe(S.__webglFramebuffer,T)}else if(H){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=n.createRenderbuffer(),Ne(S.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Ne(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function ot(T,S,H){let J=i.get(T);S!==void 0&&fe(J.__webglFramebuffer,T,T.texture,36064,3553),H!==void 0&&Me(T)}function pt(T){let S=T.texture,H=i.get(T),J=i.get(S);T.addEventListener("dispose",Q),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=S.version,o.memory.textures++);let re=T.isWebGLCubeRenderTarget===!0,he=T.isWebGLMultipleRenderTargets===!0,xe=_(T)||a;if(re){H.__webglFramebuffer=[];for(let b=0;b<6;b++)H.__webglFramebuffer[b]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),he)if(r.drawBuffers){let b=T.texture;for(let $=0,oe=b.length;$<oe;$++){let te=i.get(b[$]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Oe(T)===!1){let b=he?S:[S];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let $=0;$<b.length;$++){let oe=b[$];H.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(36161,H.__webglColorRenderbuffer[$]);let te=s.convert(oe.format,oe.encoding),P=s.convert(oe.type),ne=w(oe.internalFormat,te,P,oe.encoding),ee=at(T);n.renderbufferStorageMultisample(36161,ee,ne,T.width,T.height),n.framebufferRenderbuffer(36160,36064+$,36161,H.__webglColorRenderbuffer[$])}n.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,J.__webglTexture),G(34067,S,xe);for(let b=0;b<6;b++)fe(H.__webglFramebuffer[b],T,S,36064,34069+b);A(S,xe)&&R(34067),t.unbindTexture()}else if(he){let b=T.texture;for(let $=0,oe=b.length;$<oe;$++){let te=b[$],P=i.get(te);t.bindTexture(3553,P.__webglTexture),G(3553,te,xe),fe(H.__webglFramebuffer,T,te,36064+$,3553),A(te,xe)&&R(3553)}t.unbindTexture()}else{let b=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?b=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(b,J.__webglTexture),G(b,S,xe),fe(H.__webglFramebuffer,T,S,36064,b),A(S,xe)&&R(b),t.unbindTexture()}T.depthBuffer&&Me(T)}function xt(T){let S=_(T)||a,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,re=H.length;J<re;J++){let he=H[J];if(A(he,S)){let xe=T.isWebGLCubeRenderTarget?34067:3553,b=i.get(he).__webglTexture;t.bindTexture(xe,b),R(xe),t.unbindTexture()}}}function Jt(T){if(a&&T.samples>0&&Oe(T)===!1){let S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,J=T.height,re=16384,he=[],xe=T.stencilBuffer?33306:36096,b=i.get(T),$=T.isWebGLMultipleRenderTargets===!0;if($)for(let oe=0;oe<S.length;oe++)t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,b.__webglFramebuffer),n.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);for(let oe=0;oe<S.length;oe++){he.push(36064+oe),T.depthBuffer&&he.push(xe);let te=b.__ignoreDepthValues!==void 0?b.__ignoreDepthValues:!1;if(te===!1&&(T.depthBuffer&&(re|=256),T.stencilBuffer&&(re|=1024)),$&&n.framebufferRenderbuffer(36008,36064,36161,b.__webglColorRenderbuffer[oe]),te===!0&&(n.invalidateFramebuffer(36008,[xe]),n.invalidateFramebuffer(36009,[xe])),$){let P=i.get(S[oe]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,P,0)}n.blitFramebuffer(0,0,H,J,0,0,H,J,re,9728),g&&n.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let oe=0;oe<S.length;oe++){t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+oe,36161,b.__webglColorRenderbuffer[oe]);let te=i.get(S[oe]).__webglTexture;t.bindFramebuffer(36160,b.__webglFramebuffer),n.framebufferTexture2D(36009,36064+oe,3553,te,0)}t.bindFramebuffer(36009,b.__webglMultisampledFramebuffer)}}function at(T){return Math.min(f,T.samples)}function Oe(T){let S=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function cn(T){let S=o.render.frame;y.get(T)!==S&&(y.set(T,S),T.update())}function un(T,S){let H=T.encoding,J=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===pd||H!==Rr&&(H===Ke?a===!1?e.has("EXT_sRGB")===!0&&J===Un?(T.format=pd,T.minFilter=_n,T.generateMipmaps=!1):S=Tc.sRGBToLinear(S):(J!==Un||re!==Pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=K,this.rebindTextures=ot,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Oe}function m3(n,e,t){let i=t.isWebGL2;function r(s,o=null){let a;if(s===Pr)return 5121;if(s===_M)return 32819;if(s===wM)return 32820;if(s===yM)return 5120;if(s===vM)return 5122;if(s===sx)return 5123;if(s===xM)return 5124;if(s===br)return 5125;if(s===Er)return 5126;if(s===ia)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===MM)return 6406;if(s===Un)return 6408;if(s===bM)return 6409;if(s===EM)return 6410;if(s===Ar)return 6402;if(s===Ws)return 34041;if(s===TM)return 6403;if(s===SM)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===pd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===AM)return 36244;if(s===CM)return 33319;if(s===PM)return 33320;if(s===RM)return 36249;if(s===Pf||s===Rf||s===Lf||s===Df)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Pf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Df)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Pf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Df)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vy||s===Hy||s===Wy||s===Gy)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vy)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hy)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wy)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gy)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===LM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qy||s===Xy)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qy)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xy)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jy||s===Yy||s===$y||s===Zy||s===Jy||s===Ky||s===Qy||s===ev||s===tv||s===nv||s===iv||s===rv||s===sv||s===ov)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jy)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yy)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$y)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zy)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jy)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ky)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qy)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ev)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tv)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nv)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===iv)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rv)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sv)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ov)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===av)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===av)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Os?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}function y3(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,m,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,x)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),y(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,m,v):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Vn&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Vn&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let m=e.get(d).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let _=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*_}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let x;d.aoMap?x=d.aoMap:d.lightMap&&(x=d.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,m,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*m,p.scale.value=v*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let m;d.map?m=d.map:d.alphaMap&&(m=d.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,m){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Vn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function v3(){let n=Ec("canvas");return n.style.display="block",n}function ep(n={}){this.isWebGLRenderer=!0;let e=n.canvas!==void 0?n.canvas:v3(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1,u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null,g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rr,this.physicallyCorrectLights=!1,this.toneMapping=Si,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let p=this,d=!1,m=0,v=0,x=null,_=-1,M=null,A=new vt,R=new vt,w=null,C=e.width,D=e.height,z=1,Q=null,se=null,I=new vt(0,0,C,D),q=new vt(0,0,C,D),B=!1,Y=new Ic,X=!1,U=!1,W=null,V=new Qe,N=new _e,K=new L,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return x===null?z:1}let G=t;function We(E,k){for(let O=0;O<E.length;O++){let F=E[O],j=e.getContext(F,k);if(j!==null)return j}return null}try{let E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kd}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",ee,!1),G===null){let k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),G=We(k,E),G===null)throw We(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,be,fe,Ne,Pe,Me,ot,pt,xt,Jt,at,Oe,cn,un,T,S,H,J,re,he,xe,b,$;function oe(){Ee=new B2(G),be=new I2(G,Ee,n),Ee.init(be),b=new m3(G,Ee,be),fe=new d3(G,Ee,be),Ne=new H2(G),Pe=new t3,Me=new p3(G,Ee,fe,Pe,be,b,Ne),ot=new N2(p),pt=new O2(p),xt=new eS(G,be),$=new L2(G,Ee,xt,be),Jt=new U2(G,xt,Ne,$),at=new X2(G,Jt,xt,Ne),re=new q2(G,be,Me),S=new k2(Pe),Oe=new e3(p,ot,pt,Ee,be,$,S),cn=new y3(p,Pe),un=new i3,T=new c3(Ee,be),J=new R2(p,ot,fe,at,u,o),H=new f3(p,at,be),he=new D2(G,Ee,Ne,be),xe=new V2(G,Ee,Ne,be),Ne.programs=Oe.programs,p.capabilities=be,p.extensions=Ee,p.properties=Pe,p.renderLists=un,p.shadowMap=H,p.state=fe,p.info=Ne}oe();let te=new Cd(p,G);this.xr=te,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(C,D,!1))},this.getSize=function(E){return E.set(C,D)},this.setSize=function(E,k,O){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,D=k,e.width=Math.floor(E*z),e.height=Math.floor(k*z),O!==!1&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(C*z,D*z).floor()},this.setDrawingBufferSize=function(E,k,O){C=E,D=k,z=O,e.width=Math.floor(E*O),e.height=Math.floor(k*O),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,k,O,F){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,k,O,F),fe.viewport(A.copy(I).multiplyScalar(z).floor())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,k,O,F){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,k,O,F),fe.scissor(R.copy(q).multiplyScalar(z).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(E){fe.setScissorTest(B=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(E=!0,k=!0,O=!0){let F=0;E&&(F|=16384),k&&(F|=256),O&&(F|=1024),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),un.dispose(),T.dispose(),Pe.dispose(),ot.dispose(),pt.dispose(),at.dispose(),$.dispose(),Oe.dispose(),te.dispose(),te.removeEventListener("sessionstart",Be),te.removeEventListener("sessionend",Ue),W&&(W.dispose(),W=null),It.stop()};function P(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;let E=Ne.autoReset,k=H.enabled,O=H.autoUpdate,F=H.needsUpdate,j=H.type;oe(),Ne.autoReset=E,H.enabled=k,H.autoUpdate=O,H.needsUpdate=F,H.type=j}function ee(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ve(E){let k=E.target;k.removeEventListener("dispose",ve),ce(k)}function ce(E){ye(E),Pe.remove(E)}function ye(E){let k=Pe.get(E).programs;k!==void 0&&(k.forEach(function(O){Oe.releaseProgram(O)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,O,F,j,we){k===null&&(k=ue);let Te=j.isMesh&&j.matrixWorld.determinant()<0,Ce=Hx(E,k,O,F,j);fe.setMaterial(F,Te);let Ae=O.index,Ve=O.attributes.position;if(Ae===null){if(Ve===void 0||Ve.count===0)return}else if(Ae.count===0)return;let De=1;F.wireframe===!0&&(Ae=Jt.getWireframeAttribute(O),De=2),$.setup(j,F,Ce,O,Ae);let ke,et=he;Ae!==null&&(ke=xt.get(Ae),et=xe,et.setIndex(ke));let ir=Ae!==null?Ae.count:Ve.count,zr=O.drawRange.start*De,Fr=O.drawRange.count*De,Xn=we!==null?we.start*De:0,ze=we!==null?we.count*De:1/0,Or=Math.max(zr,Xn),it=Math.min(ir,zr+Fr,Xn+ze)-1,jn=Math.max(0,it-Or+1);if(jn!==0){if(j.isMesh)F.wireframe===!0?(fe.setLineWidth(F.wireframeLinewidth*ge()),et.setMode(1)):et.setMode(4);else if(j.isLine){let Ai=F.linewidth;Ai===void 0&&(Ai=1),fe.setLineWidth(Ai*ge()),j.isLineSegments?et.setMode(1):j.isLineLoop?et.setMode(2):et.setMode(3)}else j.isPoints?et.setMode(0):j.isSprite&&et.setMode(4);if(j.isInstancedMesh)et.renderInstances(Or,jn,j.count);else if(O.isInstancedBufferGeometry){let Ai=Math.min(O.instanceCount,O._maxInstanceCount);et.renderInstances(Or,jn,Ai)}else et.render(Or,jn)}},this.compile=function(E,k){h=T.get(E),h.init(),y.push(h),E.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights(p.physicallyCorrectLights),E.traverse(function(O){let F=O.material;if(F)if(Array.isArray(F))for(let j=0;j<F.length;j++){let we=F[j];Qc(we,E,O)}else Qc(F,E,O)}),y.pop(),h=null};let ie=null;function Se(E){ie&&ie(E)}function Be(){It.stop()}function Ue(){It.start()}let It=new lx;It.setAnimationLoop(Se),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(E){ie=E,te.setAnimationLoop(E),E===null?It.stop():It.start()},te.addEventListener("sessionstart",Be),te.addEventListener("sessionend",Ue),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(k),k=te.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,k,x),h=T.get(E,y.length),h.init(),y.push(h),V.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(V),U=this.localClippingEnabled,X=S.init(this.clippingPlanes,U,k),f=un.get(E,g.length),f.init(),g.push(f),qn(E,k,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(Q,se),X===!0&&S.beginShadows();let O=h.state.shadowsArray;if(H.render(O,E,k),X===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(f,E),h.setupLights(p.physicallyCorrectLights),k.isArrayCamera){let F=k.cameras;for(let j=0,we=F.length;j<we;j++){let Te=F[j];up(f,E,Te,Te.viewport)}}else up(f,E,k);x!==null&&(Me.updateMultisampleRenderTarget(x),Me.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(p,E,k),$.resetDefaultState(),_=-1,M=null,y.pop(),y.length>0?h=y[y.length-1]:h=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function qn(E,k,O,F){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){F&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);let Te=at.update(E),Ce=E.material;Ce.visible&&f.push(E,Te,Ce,O,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ne.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ne.render.frame),!E.frustumCulled||Y.intersectsObject(E))){F&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);let Te=at.update(E),Ce=E.material;if(Array.isArray(Ce)){let Ae=Te.groups;for(let Ve=0,De=Ae.length;Ve<De;Ve++){let ke=Ae[Ve],et=Ce[ke.materialIndex];et&&et.visible&&f.push(E,Te,et,O,K.z,ke)}}else Ce.visible&&f.push(E,Te,Ce,O,K.z,null)}}let we=E.children;for(let Te=0,Ce=we.length;Te<Ce;Te++)qn(we[Te],k,O,F)}function up(E,k,O,F){let j=E.opaque,we=E.transmissive,Te=E.transparent;h.setupLightsView(O),we.length>0&&Ux(j,k,O),F&&fe.viewport(A.copy(F)),j.length>0&&ga(j,k,O),we.length>0&&ga(we,k,O),Te.length>0&&ga(Te,k,O),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ux(E,k,O){let F=be.isWebGL2;W===null&&(W=new ri(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ia:Pr,minFilter:Gc,samples:F&&s===!0?4:0})),p.getDrawingBufferSize(N),F?W.setSize(N.x,N.y):W.setSize(md(N.x),md(N.y));let j=p.getRenderTarget();p.setRenderTarget(W),p.clear();let we=p.toneMapping;p.toneMapping=Si,ga(E,k,O),p.toneMapping=we,Me.updateMultisampleRenderTarget(W),Me.updateRenderTargetMipmap(W),p.setRenderTarget(j)}function ga(E,k,O){let F=k.isScene===!0?k.overrideMaterial:null;for(let j=0,we=E.length;j<we;j++){let Te=E[j],Ce=Te.object,Ae=Te.geometry,Ve=F===null?Te.material:F,De=Te.group;Ce.layers.test(O.layers)&&Vx(Ce,k,O,Ae,Ve,De)}}function Vx(E,k,O,F,j,we){E.onBeforeRender(p,k,O,F,j,we),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(p,k,O,F,E,we),j.transparent===!0&&j.side===Us?(j.side=Vn,j.needsUpdate=!0,p.renderBufferDirect(O,k,F,j,E,we),j.side=na,j.needsUpdate=!0,p.renderBufferDirect(O,k,F,j,E,we),j.side=Us):p.renderBufferDirect(O,k,F,j,E,we),E.onAfterRender(p,k,O,F,j,we)}function Qc(E,k,O){k.isScene!==!0&&(k=ue);let F=Pe.get(E),j=h.state.lights,we=h.state.shadowsArray,Te=j.state.version,Ce=Oe.getParameters(E,j.state,we,k,O),Ae=Oe.getProgramCacheKey(Ce),Ve=F.programs;F.environment=E.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(E.isMeshStandardMaterial?pt:ot).get(E.envMap||F.environment),Ve===void 0&&(E.addEventListener("dispose",ve),Ve=new Map,F.programs=Ve);let De=Ve.get(Ae);if(De!==void 0){if(F.currentProgram===De&&F.lightsStateVersion===Te)return hp(E,Ce),De}else Ce.uniforms=Oe.getUniforms(E),E.onBuild(O,Ce,p),E.onBeforeCompile(Ce,p),De=Oe.acquireProgram(Ce,Ae),Ve.set(Ae,De),F.uniforms=Ce.uniforms;let ke=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=S.uniform),hp(E,Ce),F.needsLights=Gx(E),F.lightsStateVersion=Te,F.needsLights&&(ke.ambientLightColor.value=j.state.ambient,ke.lightProbe.value=j.state.probe,ke.directionalLights.value=j.state.directional,ke.directionalLightShadows.value=j.state.directionalShadow,ke.spotLights.value=j.state.spot,ke.spotLightShadows.value=j.state.spotShadow,ke.rectAreaLights.value=j.state.rectArea,ke.ltc_1.value=j.state.rectAreaLTC1,ke.ltc_2.value=j.state.rectAreaLTC2,ke.pointLights.value=j.state.point,ke.pointLightShadows.value=j.state.pointShadow,ke.hemisphereLights.value=j.state.hemi,ke.directionalShadowMap.value=j.state.directionalShadowMap,ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ke.spotShadowMap.value=j.state.spotShadowMap,ke.spotShadowMatrix.value=j.state.spotShadowMatrix,ke.pointShadowMap.value=j.state.pointShadowMap,ke.pointShadowMatrix.value=j.state.pointShadowMatrix);let et=De.getUniforms(),ir=Bs.seqWithValue(et.seq,ke);return F.currentProgram=De,F.uniformsList=ir,De}function hp(E,k){let O=Pe.get(E);O.outputEncoding=k.outputEncoding,O.instancing=k.instancing,O.skinning=k.skinning,O.morphTargets=k.morphTargets,O.morphNormals=k.morphNormals,O.morphColors=k.morphColors,O.morphTargetsCount=k.morphTargetsCount,O.numClippingPlanes=k.numClippingPlanes,O.numIntersection=k.numClipIntersection,O.vertexAlphas=k.vertexAlphas,O.vertexTangents=k.vertexTangents,O.toneMapping=k.toneMapping}function Hx(E,k,O,F,j){k.isScene!==!0&&(k=ue),Me.resetTextureUnits();let we=k.fog,Te=F.isMeshStandardMaterial?k.environment:null,Ce=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Rr,Ae=(F.isMeshStandardMaterial?pt:ot).get(F.envMap||Te),Ve=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,De=!!F.normalMap&&!!O.attributes.tangent,ke=!!O.morphAttributes.position,et=!!O.morphAttributes.normal,ir=!!O.morphAttributes.color,zr=F.toneMapped?p.toneMapping:Si,Fr=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Xn=Fr!==void 0?Fr.length:0,ze=Pe.get(F),Or=h.state.lights;if(X===!0&&(U===!0||E!==M)){let Yn=E===M&&F.id===_;S.setState(F,E,Yn)}let it=!1;F.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Or.state.version||ze.outputEncoding!==Ce||j.isInstancedMesh&&ze.instancing===!1||!j.isInstancedMesh&&ze.instancing===!0||j.isSkinnedMesh&&ze.skinning===!1||!j.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Ae||F.fog===!0&&ze.fog!==we||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==S.numPlanes||ze.numIntersection!==S.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==De||ze.morphTargets!==ke||ze.morphNormals!==et||ze.morphColors!==ir||ze.toneMapping!==zr||be.isWebGL2===!0&&ze.morphTargetsCount!==Xn)&&(it=!0):(it=!0,ze.__version=F.version);let jn=ze.currentProgram;it===!0&&(jn=Qc(F,k,j));let Ai=!1,Js=!1,eu=!1,kt=jn.getUniforms(),Ks=ze.uniforms;if(fe.useProgram(jn.program)&&(Ai=!0,Js=!0,eu=!0),F.id!==_&&(_=F.id,Js=!0),Ai||M!==E){if(kt.setValue(G,"projectionMatrix",E.projectionMatrix),be.logarithmicDepthBuffer&&kt.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,Js=!0,eu=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){let Yn=kt.map.cameraPosition;Yn!==void 0&&Yn.setValue(G,K.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&kt.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&kt.setValue(G,"viewMatrix",E.matrixWorldInverse)}if(j.isSkinnedMesh){kt.setOptional(G,j,"bindMatrix"),kt.setOptional(G,j,"bindMatrixInverse");let Yn=j.skeleton;Yn&&(be.floatVertexTextures?(Yn.boneTexture===null&&Yn.computeBoneTexture(),kt.setValue(G,"boneTexture",Yn.boneTexture,Me),kt.setValue(G,"boneTextureSize",Yn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let tu=O.morphAttributes;return(tu.position!==void 0||tu.normal!==void 0||tu.color!==void 0&&be.isWebGL2===!0)&&re.update(j,O,F,jn),(Js||ze.receiveShadow!==j.receiveShadow)&&(ze.receiveShadow=j.receiveShadow,kt.setValue(G,"receiveShadow",j.receiveShadow)),Js&&(kt.setValue(G,"toneMappingExposure",p.toneMappingExposure),ze.needsLights&&Wx(Ks,eu),we&&F.fog===!0&&cn.refreshFogUniforms(Ks,we),cn.refreshMaterialUniforms(Ks,F,z,D,W),Bs.upload(G,ze.uniformsList,Ks,Me)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Bs.upload(G,ze.uniformsList,Ks,Me),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&kt.setValue(G,"center",j.center),kt.setValue(G,"modelViewMatrix",j.modelViewMatrix),kt.setValue(G,"normalMatrix",j.normalMatrix),kt.setValue(G,"modelMatrix",j.matrixWorld),jn}function Wx(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Gx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,k,O){Pe.get(E.texture).__webglTexture=k,Pe.get(E.depthTexture).__webglTexture=O;let F=Pe.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){let O=Pe.get(E);O.__webglFramebuffer=k,O.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,O=0){x=E,m=k,v=O;let F=!0;if(E){let Ae=Pe.get(E);Ae.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),F=!1):Ae.__webglFramebuffer===void 0?Me.setupRenderTarget(E):Ae.__hasExternalTextures&&Me.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture)}let j=null,we=!1,Te=!1;if(E){let Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture)&&(Te=!0);let Ve=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=Ve[k],we=!0):be.isWebGL2&&E.samples>0&&Me.useMultisampledRTT(E)===!1?j=Pe.get(E).__webglMultisampledFramebuffer:j=Ve,A.copy(E.viewport),R.copy(E.scissor),w=E.scissorTest}else A.copy(I).multiplyScalar(z).floor(),R.copy(q).multiplyScalar(z).floor(),w=B;if(fe.bindFramebuffer(36160,j)&&be.drawBuffers&&F&&fe.drawBuffers(E,j),fe.viewport(A),fe.scissor(R),fe.setScissorTest(w),we){let Ae=Pe.get(E.texture);G.framebufferTexture2D(36160,36064,34069+k,Ae.__webglTexture,O)}else if(Te){let Ae=Pe.get(E.texture),Ve=k||0;G.framebufferTextureLayer(36160,36064,Ae.__webglTexture,O||0,Ve)}_=-1},this.readRenderTargetPixels=function(E,k,O,F,j,we,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){fe.bindFramebuffer(36160,Ce);try{let Ae=E.texture,Ve=Ae.format,De=Ae.type;if(Ve!==Un&&b.convert(Ve)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ke=De===ia&&(Ee.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(De!==Pr&&b.convert(De)!==G.getParameter(35738)&&!(De===Er&&(be.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-F&&O>=0&&O<=E.height-j&&G.readPixels(k,O,F,j,b.convert(Ve),b.convert(De),we)}finally{let Ae=x!==null?Pe.get(x).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(E,k,O=0){let F=Math.pow(2,-O),j=Math.floor(k.image.width*F),we=Math.floor(k.image.height*F);Me.setTexture2D(k,0),G.copyTexSubImage2D(3553,O,0,0,E.x,E.y,j,we),fe.unbindTexture()},this.copyTextureToTexture=function(E,k,O,F=0){let j=k.image.width,we=k.image.height,Te=b.convert(O.format),Ce=b.convert(O.type);Me.setTexture2D(O,0),G.pixelStorei(37440,O.flipY),G.pixelStorei(37441,O.premultiplyAlpha),G.pixelStorei(3317,O.unpackAlignment),k.isDataTexture?G.texSubImage2D(3553,F,E.x,E.y,j,we,Te,Ce,k.image.data):k.isCompressedTexture?G.compressedTexSubImage2D(3553,F,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Te,k.mipmaps[0].data):G.texSubImage2D(3553,F,E.x,E.y,Te,Ce,k.image),F===0&&O.generateMipmaps&&G.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,k,O,F,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=E.max.x-E.min.x+1,Te=E.max.y-E.min.y+1,Ce=E.max.z-E.min.z+1,Ae=b.convert(F.format),Ve=b.convert(F.type),De;if(F.isData3DTexture)Me.setTexture3D(F,0),De=32879;else if(F.isDataArrayTexture)Me.setTexture2DArray(F,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,F.flipY),G.pixelStorei(37441,F.premultiplyAlpha),G.pixelStorei(3317,F.unpackAlignment);let ke=G.getParameter(3314),et=G.getParameter(32878),ir=G.getParameter(3316),zr=G.getParameter(3315),Fr=G.getParameter(32877),Xn=O.isCompressedTexture?O.mipmaps[0]:O.image;G.pixelStorei(3314,Xn.width),G.pixelStorei(32878,Xn.height),G.pixelStorei(3316,E.min.x),G.pixelStorei(3315,E.min.y),G.pixelStorei(32877,E.min.z),O.isDataTexture||O.isData3DTexture?G.texSubImage3D(De,j,k.x,k.y,k.z,we,Te,Ce,Ae,Ve,Xn.data):O.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(De,j,k.x,k.y,k.z,we,Te,Ce,Ae,Xn.data)):G.texSubImage3D(De,j,k.x,k.y,k.z,we,Te,Ce,Ae,Ve,Xn),G.pixelStorei(3314,ke),G.pixelStorei(32878,et),G.pixelStorei(3316,ir),G.pixelStorei(3315,zr),G.pixelStorei(32877,Fr),j===0&&F.generateMipmaps&&G.generateMipmap(De),fe.unbindTexture()},this.initTexture=function(E){Me.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){m=0,v=0,x=null,fe.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function tp(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,g=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,g*=u,r(o,a,h,g)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}function ex(n,e){return n.distance-e.distance}function Jd(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,o=r.length;s<o;s++)Jd(r[s],e,t,!0)}}var Kd,Ei,Ti,Uw,Iy,Vw,tx,Hw,Qo,na,Vn,Us,Ww,tr,Fs,ky,Ny,zy,Gw,ks,qw,Xw,Fy,Oy,jw,Yw,$w,Zw,nx,ix,Jw,Kw,Qw,eM,tM,nM,iM,rM,cd,sM,oM,aM,lM,Hc,cM,uM,Si,hM,fM,dM,pM,mM,rx,Vs,Hs,ud,hd,Wc,fd,Bn,dd,$t,By,Uy,_n,gM,Gc,Pr,yM,vM,sx,xM,br,Er,ia,_M,wM,Os,MM,SM,Un,bM,EM,Ar,Ws,TM,AM,CM,PM,RM,Pf,Rf,Lf,Df,Vy,Hy,Wy,Gy,LM,qy,Xy,jy,Yy,$y,Zy,Jy,Ky,Qy,ev,tv,nv,iv,rv,sv,ov,av,Sc,bc,If,lv,cv,uv,DM,Rr,Ke,IM,kM,Ys,NM,wi,Tr,kf,zM,hv,fv,pd,si,bt,wc,dv,_e,Mn,zf,Nn,ax,ht,zn,Zl,pe,_s,Tc,Ac,OM,an,vt,ri,Cc,gd,ln,L,Bf,mv,Lr,gi,xr,Uf,ws,Ms,Ss,Yi,$i,_r,$o,Kl,Ql,wr,BM,gv,ec,Hf,Gs,yi,Wf,tc,Zi,Gf,nc,qf,ra,Qe,bs,Fn,UM,VM,Ji,ic,rn,yv,vv,Dr,sa,HM,xv,Es,vi,rc,Zo,WM,GM,_v,wv,Mv,qM,Sv,Dt,On,xi,Xf,_i,Ts,As,bv,jf,Yf,$f,wn,XM,dt,oa,st,sc,on,Pc,Rc,bn,jM,xn,Zf,Cs,sn,Jo,yt,En,Ev,Ps,Jf,Ki,Qi,er,Kf,Qf,ed,oc,ac,lc,cc,uc,hc,td,fc,Sn,bi,$M,ZM,JM,Hn,Lc,Ut,Rs,Ls,yd,Dc,vd,nd,KM,QM,Mi,Ds,pc,Ic,aa,tS,nS,iS,rS,sS,oS,aS,lS,cS,uS,hS,fS,dS,pS,mS,gS,yS,vS,xS,_S,wS,MS,SS,bS,ES,TS,AS,CS,PS,RS,LS,DS,IS,kS,NS,zS,FS,OS,BS,US,VS,HS,WS,GS,qS,XS,jS,YS,$S,ZS,JS,KS,QS,eb,tb,nb,ib,rb,sb,ob,ab,lb,cb,ub,hb,fb,db,pb,mb,gb,yb,vb,xb,_b,wb,Mb,Sb,bb,Eb,Tb,Ab,Cb,Pb,Rb,Lb,Db,Ib,kb,Nb,zb,Fb,Ob,Bb,Ub,Vb,Hb,Wb,Gb,qb,Xb,jb,Yb,$b,Zb,Jb,Kb,Qb,e2,t2,n2,i2,r2,s2,o2,a2,l2,c2,u2,h2,f2,d2,p2,m2,g2,y2,v2,x2,_2,w2,M2,S2,b2,E2,T2,A2,C2,P2,Re,le,ii,xd,Ns,Tv,Sr,id,Av,rd,Mr,Is,Cv,kc,cx,ux,hx,fx,Dv,Iv,kv,Nv,zv,_d,wd,Md,od,Bs,kE,HE,GE,qE,QE,bd,Ed,o3,Nc,zc,u3,h3,Td,zs,g3,ta,Ad,Cd,Pd,Fc,Rd,Xs,jv,Yv,gc,Ko,Oc,Ir,$v,Zv,Jv,ad,yc,Ld,Kv,Qv,la,Dd,yT,vT,xT,_T,vc,xc,ld,_c,ca,Id,kd,Bc,Nd,ua,zd,Fd,Od,Bd,Ud,x3,ft,js,Vd,Hd,Wd,Wn,kr,Gd,qd,Xd,ha,Nr,jd,Yd,wT,$d,Uc,fa,np,_3,ip,w3,M3,S3,b3,E3,T3,A3,Zd,Fe,Vc,da,px,MT,ST,ti,ni,mx,ma,C3,Xc=fp(()=>{Kd="141",Ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uw=0,Iy=1,Vw=2,tx=1,Hw=2,Qo=3,na=0,Vn=1,Us=2,Ww=1,tr=0,Fs=1,ky=2,Ny=3,zy=4,Gw=5,ks=100,qw=101,Xw=102,Fy=103,Oy=104,jw=200,Yw=201,$w=202,Zw=203,nx=204,ix=205,Jw=206,Kw=207,Qw=208,eM=209,tM=210,nM=0,iM=1,rM=2,cd=3,sM=4,oM=5,aM=6,lM=7,Hc=0,cM=1,uM=2,Si=0,hM=1,fM=2,dM=3,pM=4,mM=5,rx=300,Vs=301,Hs=302,ud=303,hd=304,Wc=306,fd=1e3,Bn=1001,dd=1002,$t=1003,By=1004,Uy=1005,_n=1006,gM=1007,Gc=1008,Pr=1009,yM=1010,vM=1011,sx=1012,xM=1013,br=1014,Er=1015,ia=1016,_M=1017,wM=1018,Os=1020,MM=1021,SM=1022,Un=1023,bM=1024,EM=1025,Ar=1026,Ws=1027,TM=1028,AM=1029,CM=1030,PM=1031,RM=1033,Pf=33776,Rf=33777,Lf=33778,Df=33779,Vy=35840,Hy=35841,Wy=35842,Gy=35843,LM=36196,qy=37492,Xy=37496,jy=37808,Yy=37809,$y=37810,Zy=37811,Jy=37812,Ky=37813,Qy=37814,ev=37815,tv=37816,nv=37817,iv=37818,rv=37819,sv=37820,ov=37821,av=36492,Sc=2300,bc=2301,If=2302,lv=2400,cv=2401,uv=2402,DM=2501,Rr=3e3,Ke=3001,IM=3200,kM=3201,Ys=0,NM=1,wi="srgb",Tr="srgb-linear",kf=7680,zM=519,hv=35044,fv="300 es",pd=1035,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},bt=[];for(let n=0;n<256;n++)bt[n]=(n<16?"0":"")+n.toString(16);wc=Math.PI/180,dv=180/Math.PI;_e=class{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mn=class{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],g=i[5],y=i[8],p=r[0],d=r[3],m=r[6],v=r[1],x=r[4],_=r[7],M=r[2],A=r[5],R=r[8];return s[0]=o*p+a*v+l*M,s[3]=o*d+a*x+l*A,s[6]=o*m+a*_+l*R,s[1]=c*p+u*v+f*M,s[4]=c*d+u*x+f*A,s[7]=c*m+u*_+f*R,s[2]=h*p+g*v+y*M,s[5]=h*d+g*x+y*A,s[8]=h*m+g*_+y*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,g=c*s-o*l,y=t*f+i*h+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/y;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(a*i-r*o)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=g*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){let t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zf={[wi]:{[Tr]:Cr},[Tr]:{[wi]:Mc}},Nn={legacyMode:!0,get workingColorSpace(){return Tr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(zf[e]&&zf[e][t]!==void 0){let i=zf[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},zn={h:0,s:0,l:0},Zl={h:0,s:0,l:0};pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Tr){return this.r=e,this.g=t,this.b=i,Nn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Tr){if(e=FM(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ff(o,s,e+1/3),this.g=Ff(o,s,e),this.b=Ff(o,s,e-1/3)}return Nn.toWorkingColorSpace(this,r),this}setStyle(e,t=wi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Nn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Nn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Nn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Nn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=wi){let i=ax[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=Mc(e.r),this.g=Mc(e.g),this.b=Mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return Nn.fromWorkingColorSpace(Jl(this,ht),e),Bt(ht.r*255,0,255)<<16^Bt(ht.g*255,0,255)<<8^Bt(ht.b*255,0,255)<<0}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tr){Nn.fromWorkingColorSpace(Jl(this,ht),t);let i=ht.r,r=ht.g,s=ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Tr){return Nn.fromWorkingColorSpace(Jl(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=wi){return Nn.fromWorkingColorSpace(Jl(this,ht),e),e!==wi?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(zn),zn.h+=e,zn.s+=t,zn.l+=i,this.setHSL(zn.h,zn.s,zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Zl);let i=Nf(zn.h,Zl.h,t),r=Nf(zn.s,Zl.s,t),s=Nf(zn.l,Zl.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};pe.NAMES=ax;Tc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Ec("canvas")),_s.width=e.width,_s.height=e.height;let i=_s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ec("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cr(t[i]/255)*255):t[i]=Cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ac=class{constructor(e=null){this.isSource=!0,this.uuid=pa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Of(r[o].image)):s.push(Of(r[o]))}else s=Of(r);i.url=s}return t||(e.images[this.uuid]=i),i}};OM=0,an=class extends si{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,i=Bn,r=Bn,s=_n,o=Gc,a=Un,l=Pr,c=1,u=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=pa(),this.name="",this.source=new Ac(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fd:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fd:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=rx;vt=class{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],g=l[5],y=l[9],p=l[2],d=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(y-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(y+d)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(g+1)/2,M=(m+1)/2,A=(u+h)/4,R=(f+p)/4,w=(y+d)/4;return x>_&&x>M?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=R/i):_>M?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=A/r,s=w/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=R/s,r=w/s),this.set(i,r,s,t),this}let v=Math.sqrt((d-y)*(d-y)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(d-y)/v,this.y=(f-p)/v,this.z=(h-u)/v,this.w=Math.acos((c+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ri=class extends si{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let r={width:e,height:t,depth:1};this.texture=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_n,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ac(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cc=class extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gd=class extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ln=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],g=s[o+1],y=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=g,e[t+2]=y,e[t+3]=p;return}if(f!==p||l!==h||c!==g||u!==y){let d=1-a,m=l*h+c*g+u*y+f*p,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let M=Math.sqrt(x),A=Math.atan2(M,m*v);d=Math.sin(d*A)/M,a=Math.sin(a*A)/M}let _=a*v;if(l=l*d+h*_,c=c*d+g*_,u=u*d+y*_,f=f*d+p*_,d===1-a){let M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],g=s[o+2],y=s[o+3];return e[t]=a*y+u*f+l*g-c*h,e[t+1]=l*y+u*h+c*f-a*g,e[t+2]=c*y+u*g+a*h-l*f,e[t+3]=u*y-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*g*y,this._y=c*g*f-h*u*y,this._z=c*u*y+h*g*f,this._w=c*u*f-h*g*y;break;case"YXZ":this._x=h*u*f+c*g*y,this._y=c*g*f-h*u*y,this._z=c*u*y-h*g*f,this._w=c*u*f+h*g*y;break;case"ZXY":this._x=h*u*f-c*g*y,this._y=c*g*f+h*u*y,this._z=c*u*y+h*g*f,this._w=c*u*f-h*g*y;break;case"ZYX":this._x=h*u*f-c*g*y,this._y=c*g*f+h*u*y,this._z=c*u*y-h*g*f,this._w=c*u*f+h*g*y;break;case"YZX":this._x=h*u*f+c*g*y,this._y=c*g*f+h*u*y,this._z=c*u*y-h*g*f,this._w=c*u*f-h*g*y;break;case"XZY":this._x=h*u*f-c*g*y,this._y=c*g*f-h*u*y,this._z=c*u*y+h*g*f,this._w=c*u*f+h*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){let g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){let g=2*Math.sqrt(1+i-a-f);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){let g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(mv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mv.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bf=new L,mv=new ln,Lr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){let s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)xr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(xr)}else i.boundingBox===null&&i.computeBoundingBox(),Uf.copy(i.boundingBox),Uf.applyMatrix4(e.matrixWorld),this.union(Uf);let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xr),xr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Kl.subVectors(this.max,$o),ws.subVectors(e.a,$o),Ms.subVectors(e.b,$o),Ss.subVectors(e.c,$o),Yi.subVectors(Ms,ws),$i.subVectors(Ss,Ms),_r.subVectors(ws,Ss);let t=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-_r.z,_r.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,_r.z,0,-_r.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-_r.y,_r.x,0];return!Vf(t,ws,Ms,Ss,Kl)||(t=[1,0,0,0,1,0,0,0,1],!Vf(t,ws,Ms,Ss,Kl))?!1:(Ql.crossVectors(Yi,$i),t=[Ql.x,Ql.y,Ql.z],Vf(t,ws,Ms,Ss,Kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(xr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new L,new L,new L,new L,new L,new L,new L,new L],xr=new L,Uf=new Lr,ws=new L,Ms=new L,Ss=new L,Yi=new L,$i=new L,_r=new L,$o=new L,Kl=new L,Ql=new L,wr=new L;BM=new Lr,gv=new L,ec=new L,Hf=new L,Gs=class{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):BM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Hf.subVectors(e,this.center);let t=Hf.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Hf.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?ec.set(0,0,1).multiplyScalar(e.radius):ec.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(gv.copy(e.center).add(ec)),this.expandByPoint(gv.copy(e.center).sub(ec)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new L,Wf=new L,tc=new L,Zi=new L,Gf=new L,nc=new L,qf=new L,ra=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.direction).multiplyScalar(t).add(this.origin),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wf.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Wf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(tc),a=Zi.dot(this.direction),l=-Zi.dot(tc),c=Zi.lengthSq(),u=Math.abs(1-o*o),f,h,g,y;if(u>0)if(f=o*l-a,h=o*a-l,y=s*u,f>=0)if(h>=-y)if(h<=y){let p=1/u;f*=p,h*=p,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(tc).multiplyScalar(h).add(Wf),g}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,s){Gf.subVectors(t,e),nc.subVectors(i,e),qf.crossVectors(Gf,nc);let o=this.direction.dot(qf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);let l=a*this.direction.dot(nc.crossVectors(Zi,nc));if(l<0)return null;let c=a*this.direction.dot(Gf.cross(Zi));if(c<0||l+c>o)return null;let u=-a*Zi.dot(qf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c,u,f,h,g,y,p,d){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=g,m[7]=y,m[11]=p,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/bs.setFromMatrixColumn(e,0).length(),s=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,g=o*f,y=a*u,p=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=g+y*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=y+g*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,g=l*f,y=c*u,p=c*f;t[0]=h+p*a,t[4]=y*a-g,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=g*a-y,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,g=l*f,y=c*u,p=c*f;t[0]=h-p*a,t[4]=-o*f,t[8]=y+g*a,t[1]=g+y*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,g=o*f,y=a*u,p=a*f;t[0]=l*u,t[4]=y*c-g,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=g*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,g=o*c,y=a*l,p=a*c;t[0]=l*u,t[4]=p-h*f,t[8]=y*f+g,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=g*f+y,t[10]=h-p*f}else if(e.order==="XZY"){let h=o*l,g=o*c,y=a*l,p=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=o*u,t[9]=g*f-y,t[2]=y*f-g,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UM,e,VM)}lookAt(e,t,i){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ji.crossVectors(i,rn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ji.crossVectors(i,rn)),Ji.normalize(),ic.crossVectors(rn,Ji),r[0]=Ji.x,r[4]=ic.x,r[8]=rn.x,r[1]=Ji.y,r[5]=ic.y,r[9]=rn.y,r[2]=Ji.z,r[6]=ic.z,r[10]=rn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],g=i[13],y=i[2],p=i[6],d=i[10],m=i[14],v=i[3],x=i[7],_=i[11],M=i[15],A=r[0],R=r[4],w=r[8],C=r[12],D=r[1],z=r[5],Q=r[9],se=r[13],I=r[2],q=r[6],B=r[10],Y=r[14],X=r[3],U=r[7],W=r[11],V=r[15];return s[0]=o*A+a*D+l*I+c*X,s[4]=o*R+a*z+l*q+c*U,s[8]=o*w+a*Q+l*B+c*W,s[12]=o*C+a*se+l*Y+c*V,s[1]=u*A+f*D+h*I+g*X,s[5]=u*R+f*z+h*q+g*U,s[9]=u*w+f*Q+h*B+g*W,s[13]=u*C+f*se+h*Y+g*V,s[2]=y*A+p*D+d*I+m*X,s[6]=y*R+p*z+d*q+m*U,s[10]=y*w+p*Q+d*B+m*W,s[14]=y*C+p*se+d*Y+m*V,s[3]=v*A+x*D+_*I+M*X,s[7]=v*R+x*z+_*q+M*U,s[11]=v*w+x*Q+_*B+M*W,s[15]=v*C+x*se+_*Y+M*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],g=e[14],y=e[3],p=e[7],d=e[11],m=e[15];return y*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*g-i*l*g)+p*(+t*l*g-t*c*h+s*o*h-r*o*g+r*c*u-s*l*u)+d*(+t*c*f-t*a*g-s*o*f+i*o*g+s*a*u-i*c*u)+m*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],g=e[11],y=e[12],p=e[13],d=e[14],m=e[15],v=f*d*c-p*h*c+p*l*g-a*d*g-f*l*m+a*h*m,x=y*h*c-u*d*c-y*l*g+o*d*g+u*l*m-o*h*m,_=u*p*c-y*f*c+y*a*g-o*p*g-u*a*m+o*f*m,M=y*f*l-u*p*l-y*a*h+o*p*h+u*a*d-o*f*d,A=t*v+i*x+r*_+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=v*R,e[1]=(p*h*s-f*d*s-p*r*g+i*d*g+f*r*m-i*h*m)*R,e[2]=(a*d*s-p*l*s+p*r*c-i*d*c-a*r*m+i*l*m)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*g-i*l*g)*R,e[4]=x*R,e[5]=(u*d*s-y*h*s+y*r*g-t*d*g-u*r*m+t*h*m)*R,e[6]=(y*l*s-o*d*s-y*r*c+t*d*c+o*r*m-t*l*m)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*g+t*l*g)*R,e[8]=_*R,e[9]=(y*f*s-u*p*s-y*i*g+t*p*g+u*i*m-t*f*m)*R,e[10]=(o*p*s-y*a*s+y*i*c-t*p*c-o*i*m+t*a*m)*R,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*g-t*a*g)*R,e[12]=M*R,e[13]=(u*p*r-y*f*r+y*i*h-t*p*h-u*i*d+t*f*d)*R,e[14]=(y*a*r-o*p*r-y*i*l+t*p*l+o*i*d-t*a*d)*R,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,g=s*u,y=s*f,p=o*u,d=o*f,m=a*f,v=l*c,x=l*u,_=l*f,M=i.x,A=i.y,R=i.z;return r[0]=(1-(p+m))*M,r[1]=(g+_)*M,r[2]=(y-x)*M,r[3]=0,r[4]=(g-_)*A,r[5]=(1-(h+m))*A,r[6]=(d+v)*A,r[7]=0,r[8]=(y+x)*R,r[9]=(d-v)*R,r[10]=(1-(h+p))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=bs.set(r[0],r[1],r[2]).length(),o=bs.set(r[4],r[5],r[6]).length(),a=bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);let c=1/s,u=1/o,f=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,t.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){let a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,h=(i+r)*c,g=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},bs=new L,Fn=new Qe,UM=new L(0,0,0),VM=new L(1,1,1),Ji=new L,ic=new L,rn=new L,yv=new Qe,vv=new ln,Dr=class{constructor(e=0,t=0,i=0,r=Dr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vv.setFromEuler(this),this.setFromQuaternion(vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};Dr.DefaultOrder="XYZ";Dr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},HM=0,xv=new L,Es=new ln,vi=new Qe,rc=new L,Zo=new L,WM=new L,GM=new ln,_v=new L(1,0,0),wv=new L(0,1,0),Mv=new L(0,0,1),qM={type:"added"},Sv={type:"removed"},Dt=class extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DefaultUp.clone();let e=new L,t=new Dr,i=new ln,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Mn}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Dt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(_v,e)}rotateY(e){return this.rotateOnAxis(wv,e)}rotateZ(e){return this.rotateOnAxis(Mv,e)}translateOnAxis(e,t){return xv.copy(e).applyQuaternion(this.quaternion),this.position.add(xv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_v,e)}translateY(e){return this.translateOnAxis(wv,e)}translateZ(e){return this.translateOnAxis(Mv,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rc.copy(e):rc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Zo,rc,this.up):vi.lookAt(rc,Zo,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(vi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sv)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Sv)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,WM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,GM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Dt.DefaultUp=new L(0,1,0);Dt.DefaultMatrixAutoUpdate=!0;On=new L,xi=new L,Xf=new L,_i=new L,Ts=new L,As=new L,bv=new L,jf=new L,Yf=new L,$f=new L,wn=class{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),On.subVectors(e,t),r.cross(On);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){On.subVectors(r,t),xi.subVectors(i,t),Xf.subVectors(e,t);let o=On.dot(On),a=On.dot(xi),l=On.dot(Xf),c=xi.dot(xi),u=xi.dot(Xf),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);let h=1/f,g=(c*l-a*u)*h,y=(o*u-a*l)*h;return s.set(1-g-y,y,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_i),_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,_i),l.set(0,0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l}static isFrontFacing(e,t,i,r){return On.subVectors(i,t),xi.subVectors(e,t),On.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),On.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return wn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Ts.subVectors(r,i),As.subVectors(s,i),jf.subVectors(e,i);let l=Ts.dot(jf),c=As.dot(jf);if(l<=0&&c<=0)return t.copy(i);Yf.subVectors(e,r);let u=Ts.dot(Yf),f=As.dot(Yf);if(u>=0&&f<=u)return t.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ts,o);$f.subVectors(e,s);let g=Ts.dot($f),y=As.dot($f);if(y>=0&&g<=y)return t.copy(s);let p=g*c-l*y;if(p<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(i).addScaledVector(As,a);let d=u*y-g*f;if(d<=0&&f-u>=0&&g-y>=0)return bv.subVectors(s,r),a=(f-u)/(f-u+(g-y)),t.copy(r).addScaledVector(bv,a);let m=1/(d+p+h);return o=p*m,a=h*m,t.copy(i).addScaledVector(Ts,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},XM=0,dt=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=Fs,this.side=na,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=nx,this.blendDst=ix,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kf,this.stencilZFail=kf,this.stencilZPass=kf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Ww;continue}let r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==na&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}};dt.fromType=function(){return null};oa=class extends dt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},st=new L,sc=new _e,on=class{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=hv,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new pe),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new _e),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new L),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new vt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sc.fromBufferAttribute(this,t),sc.applyMatrix3(e),this.setXY(t,sc.x,sc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hv&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}},Pc=class extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Rc=class extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}},bn=class extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}},jM=0,xn=new Qe,Zf=new Dt,Cs=new L,sn=new Lr,Jo=new Lr,yt=new L,En=class extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ox(e)?Rc:Pc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Mn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(sn.min,Jo.min),sn.expandByPoint(yt),yt.addVectors(sn.max,Jo.max),sn.expandByPoint(yt)):(sn.expandByPoint(Jo.min),sn.expandByPoint(Jo.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),yt.add(Cs)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new L,u[D]=new L;let f=new L,h=new L,g=new L,y=new _e,p=new _e,d=new _e,m=new L,v=new L;function x(D,z,Q){f.fromArray(r,D*3),h.fromArray(r,z*3),g.fromArray(r,Q*3),y.fromArray(o,D*2),p.fromArray(o,z*2),d.fromArray(o,Q*2),h.sub(f),g.sub(f),p.sub(y),d.sub(y);let se=1/(p.x*d.y-d.x*p.y);!isFinite(se)||(m.copy(h).multiplyScalar(d.y).addScaledVector(g,-p.y).multiplyScalar(se),v.copy(g).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(se),c[D].add(m),c[z].add(m),c[Q].add(m),u[D].add(v),u[z].add(v),u[Q].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let D=0,z=_.length;D<z;++D){let Q=_[D],se=Q.start,I=Q.count;for(let q=se,B=se+I;q<B;q+=3)x(i[q+0],i[q+1],i[q+2])}let M=new L,A=new L,R=new L,w=new L;function C(D){R.fromArray(s,D*3),w.copy(R);let z=c[D];M.copy(z),M.sub(R.multiplyScalar(R.dot(z))).normalize(),A.crossVectors(w,z);let se=A.dot(u[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=se}for(let D=0,z=_.length;D<z;++D){let Q=_[D],se=Q.start,I=Q.count;for(let q=se,B=se+I;q<B;q+=3)C(i[q+0]),C(i[q+1]),C(i[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let h=0,g=e.count;h<g;h+=3){let y=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let i=this.attributes;for(let r in i){if(e.attributes[r]===void 0)continue;let o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let f=0,h=c;f<u;f++,h++)o[h]=l[f]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),g=0,y=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*u;for(let m=0;m<u;m++)h[y++]=c[g++]}return new on(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new En,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],g=e(h,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let g=c[f];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,g=f.length;h<g;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Ev=new Qe,Ps=new ra,Jf=new Gs,Ki=new L,Qi=new L,er=new L,Kf=new L,Qf=new L,ed=new L,oc=new L,ac=new L,lc=new L,cc=new _e,uc=new _e,hc=new _e,td=new L,fc=new L,Sn=class extends Dt{constructor(e=new En,t=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Jf.copy(i.boundingSphere),Jf.applyMatrix4(s),e.ray.intersectsSphere(Jf)===!1)||(Ev.copy(s).invert(),Ps.copy(e.ray).applyMatrix4(Ev),i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1))return;let o,a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,g=i.groups,y=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,d=g.length;p<d;p++){let m=g[p],v=r[m.materialIndex],x=Math.max(m.start,y.start),_=Math.min(a.count,Math.min(m.start+m.count,y.start+y.count));for(let M=x,A=_;M<A;M+=3){let R=a.getX(M),w=a.getX(M+1),C=a.getX(M+2);o=dc(this,v,e,Ps,l,c,u,f,h,R,w,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{let p=Math.max(0,y.start),d=Math.min(a.count,y.start+y.count);for(let m=p,v=d;m<v;m+=3){let x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);o=dc(this,r,e,Ps,l,c,u,f,h,x,_,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=g.length;p<d;p++){let m=g[p],v=r[m.materialIndex],x=Math.max(m.start,y.start),_=Math.min(l.count,Math.min(m.start+m.count,y.start+y.count));for(let M=x,A=_;M<A;M+=3){let R=M,w=M+1,C=M+2;o=dc(this,v,e,Ps,l,c,u,f,h,R,w,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{let p=Math.max(0,y.start),d=Math.min(l.count,y.start+y.count);for(let m=p,v=d;m<v;m+=3){let x=m,_=m+1,M=m+2;o=dc(this,r,e,Ps,l,c,u,f,h,x,_,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}};bi=class extends En{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,g=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(f,2));function y(p,d,m,v,x,_,M,A,R,w,C){let D=_/R,z=M/w,Q=_/2,se=M/2,I=A/2,q=R+1,B=w+1,Y=0,X=0,U=new L;for(let W=0;W<B;W++){let V=W*z-se;for(let N=0;N<q;N++){let K=N*D-Q;U[p]=K*v,U[d]=V*x,U[m]=I,c.push(U.x,U.y,U.z),U[p]=0,U[d]=0,U[m]=A>0?1:-1,u.push(U.x,U.y,U.z),f.push(N/R),f.push(1-W/w),Y+=1}}for(let W=0;W<w;W++)for(let V=0;V<R;V++){let N=h+V+q*W,K=h+V+q*(W+1),ue=h+(V+1)+q*(W+1),ge=h+(V+1)+q*W;l.push(N,K,ge),l.push(K,ue,ge),X+=6}a.addGroup(g,X,C),g+=X,h+=Y}}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};$M={clone:qs,merge:Lt},ZM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends dt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=ZM,this.fragmentShader=JM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Lc=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ut=class extends Lc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dv*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dv*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rs=90,Ls=1,yd=class extends Dt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let r=new Ut(Rs,Ls,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(1,0,0)),this.add(r);let s=new Ut(Rs,Ls,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);let o=new Ut(Rs,Ls,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);let a=new Ut(Rs,Ls,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);let l=new Ut(Rs,Ls,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);let c=new Ut(Rs,Ls,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Si,e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}},Dc=class extends an{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vd=class extends ri{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bi(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:tr});s.uniforms.tEquirect.value=t;let o=new Sn(r,s),a=t.minFilter;return t.minFilter===Gc&&(t.minFilter=_n),new yd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},nd=new L,KM=new L,QM=new Mn,Mi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=nd.subVectors(i,t).cross(KM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let i=e.delta(nd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||QM.getNormalMatrix(e),r=this.coplanarPoint(nd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ds=new Gs,pc=new L,Ic=class{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,s=new Mi,o=new Mi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],g=i[9],y=i[10],p=i[11],d=i[12],m=i[13],v=i[14],x=i[15];return t[0].setComponents(a-r,f-l,p-h,x-d).normalize(),t[1].setComponents(a+r,f+l,p+h,x+d).normalize(),t[2].setComponents(a+s,f+c,p+g,x+m).normalize(),t[3].setComponents(a-s,f-c,p-g,x-m).normalize(),t[4].setComponents(a-o,f-u,p-y,x-v).normalize(),t[5].setComponents(a+o,f+u,p+y,x+v).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(pc.x=r.normal.x>0?e.max.x:e.min.x,pc.y=r.normal.y>0?e.max.y:e.min.y,pc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};aa=class extends En{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,g=[],y=[],p=[],d=[];for(let m=0;m<u;m++){let v=m*h-o;for(let x=0;x<c;x++){let _=x*f-s;y.push(_,-v,0),p.push(0,0,1),d.push(x/a),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let x=v+c*m,_=v+c*(m+1),M=v+1+c*(m+1),A=v+1+c*m;g.push(x,_,A),g.push(_,M,A)}this.setIndex(g),this.setAttribute("position",new bn(y,3)),this.setAttribute("normal",new bn(p,3)),this.setAttribute("uv",new bn(d,2))}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}},tS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,nS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS="vec3 transformed = vec3( position );",lS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cS=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,uS=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,hS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_S=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,MS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AS="gl_FragColor = linearToOutputTexel( gl_FragColor );",CS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,RS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
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
#endif`,kS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,BS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,US=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,HS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,WS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,GS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,XS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,YS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,$S=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,ZS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,QS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,pb=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,_b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Db=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ib=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,kb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Fb=`#ifdef USE_SKINNING
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
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Gb=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qb=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xb=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jb=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$b=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Zb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qb=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,n2=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,i2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,r2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,s2=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,l2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u2=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d2=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,m2=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,x2=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,w2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,S2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,E2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,C2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,P2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:tS,alphamap_pars_fragment:nS,alphatest_fragment:iS,alphatest_pars_fragment:rS,aomap_fragment:sS,aomap_pars_fragment:oS,begin_vertex:aS,beginnormal_vertex:lS,bsdfs:cS,iridescence_fragment:uS,bumpmap_pars_fragment:hS,clipping_planes_fragment:fS,clipping_planes_pars_fragment:dS,clipping_planes_pars_vertex:pS,clipping_planes_vertex:mS,color_fragment:gS,color_pars_fragment:yS,color_pars_vertex:vS,color_vertex:xS,common:_S,cube_uv_reflection_fragment:wS,defaultnormal_vertex:MS,displacementmap_pars_vertex:SS,displacementmap_vertex:bS,emissivemap_fragment:ES,emissivemap_pars_fragment:TS,encodings_fragment:AS,encodings_pars_fragment:CS,envmap_fragment:PS,envmap_common_pars_fragment:RS,envmap_pars_fragment:LS,envmap_pars_vertex:DS,envmap_physical_pars_fragment:WS,envmap_vertex:IS,fog_vertex:kS,fog_pars_vertex:NS,fog_fragment:zS,fog_pars_fragment:FS,gradientmap_pars_fragment:OS,lightmap_fragment:BS,lightmap_pars_fragment:US,lights_lambert_vertex:VS,lights_pars_begin:HS,lights_toon_fragment:GS,lights_toon_pars_fragment:qS,lights_phong_fragment:XS,lights_phong_pars_fragment:jS,lights_physical_fragment:YS,lights_physical_pars_fragment:$S,lights_fragment_begin:ZS,lights_fragment_maps:JS,lights_fragment_end:KS,logdepthbuf_fragment:QS,logdepthbuf_pars_fragment:eb,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:nb,map_fragment:ib,map_pars_fragment:rb,map_particle_fragment:sb,map_particle_pars_fragment:ob,metalnessmap_fragment:ab,metalnessmap_pars_fragment:lb,morphcolor_vertex:cb,morphnormal_vertex:ub,morphtarget_pars_vertex:hb,morphtarget_vertex:fb,normal_fragment_begin:db,normal_fragment_maps:pb,normal_pars_fragment:mb,normal_pars_vertex:gb,normal_vertex:yb,normalmap_pars_fragment:vb,clearcoat_normal_fragment_begin:xb,clearcoat_normal_fragment_maps:_b,clearcoat_pars_fragment:wb,iridescence_pars_fragment:Mb,output_fragment:Sb,packing:bb,premultiplied_alpha_fragment:Eb,project_vertex:Tb,dithering_fragment:Ab,dithering_pars_fragment:Cb,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:Rb,shadowmap_pars_fragment:Lb,shadowmap_pars_vertex:Db,shadowmap_vertex:Ib,shadowmask_pars_fragment:kb,skinbase_vertex:Nb,skinning_pars_vertex:zb,skinning_vertex:Fb,skinnormal_vertex:Ob,specularmap_fragment:Bb,specularmap_pars_fragment:Ub,tonemapping_fragment:Vb,tonemapping_pars_fragment:Hb,transmission_fragment:Wb,transmission_pars_fragment:Gb,uv_pars_fragment:qb,uv_pars_vertex:Xb,uv_vertex:jb,uv2_pars_fragment:Yb,uv2_pars_vertex:$b,uv2_vertex:Zb,worldpos_vertex:Jb,background_vert:Kb,background_frag:Qb,cube_vert:e2,cube_frag:t2,depth_vert:n2,depth_frag:i2,distanceRGBA_vert:r2,distanceRGBA_frag:s2,equirect_vert:o2,equirect_frag:a2,linedashed_vert:l2,linedashed_frag:c2,meshbasic_vert:u2,meshbasic_frag:h2,meshlambert_vert:f2,meshlambert_frag:d2,meshmatcap_vert:p2,meshmatcap_frag:m2,meshnormal_vert:g2,meshnormal_frag:y2,meshphong_vert:v2,meshphong_frag:x2,meshphysical_vert:_2,meshphysical_frag:w2,meshtoon_vert:M2,meshtoon_frag:S2,points_vert:b2,points_frag:E2,shadow_vert:T2,shadow_frag:A2,sprite_vert:C2,sprite_frag:P2},le={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Mn},uv2Transform:{value:new Mn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mn}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mn}}},ii={basic:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new pe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Lt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Lt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new pe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Lt([le.points,le.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Lt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Lt([le.common,le.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Lt([le.sprite,le.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Mn},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:Lt([le.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Lt([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Lt([le.lights,le.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};ii.physical={uniforms:Lt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _e(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};xd=class extends Lc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ns=4,Tv=[.125,.215,.35,.446,.526,.582],Sr=20,id=new xd,Av=new pe,rd=null,Mr=(1+Math.sqrt(5))/2,Is=1/Mr,Cv=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Mr,Is),new L(0,Mr,-Is),new L(Is,0,Mr),new L(-Is,0,Mr),new L(Mr,Is,0),new L(-Mr,Is,0)],kc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){rd=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rd),e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rd=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:ia,format:Un,encoding:Rr,depthBuffer:!1},r=Pv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pv(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z2(s)),this._blurMaterial=F2(s,e,t)}return r}_compileMaterial(e){let t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,id)}_sceneToCubeUV(e,t,i,r){let a=new Ut(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Av),u.toneMapping=Si,u.autoClear=!1;let g=new oa({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),y=new Sn(new bi,g),p=!1,d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,p=!0):(g.color.copy(Av),p=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let x=this._cubeSize;mc(r,v*x,m>2?x:0,x,x),u.setRenderTarget(r),p&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Vs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;mc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,id)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cv[(r-1)%Cv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Sn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Sr-1),p=s/y,d=isFinite(s)?1+Math.floor(u*p):Sr;d>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Sr}`);let m=[],v=0;for(let R=0;R<Sr;++R){let w=R/p,C=Math.exp(-w*w/2);m.push(C),R===0?v+=C:R<d&&(v+=2*C)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:x}=this;h.dTheta.value=y,h.mipInt.value=x-i;let _=this._sizeLods[r],M=3*_*(r>x-Ns?r-x+Ns:0),A=4*(this._cubeSize-_);mc(t,M,A,3*_,2*_),l.setRenderTarget(t),l.render(f,id)}};cx=new an,ux=new Cc,hx=new gd,fx=new Dc,Dv=[],Iv=[],kv=new Float32Array(16),Nv=new Float32Array(9),zv=new Float32Array(4);_d=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=fE(t.type)}},wd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=DE(t.type)}},Md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},od=/(\w+)(\])?(\[|\.)?/g;Bs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);IE(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};kE=0;HE=/^[ \t]*#include +<([\w\d./]+)>/gm;GE=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,qE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;QE=0,bd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(t.has(e)===!1){let i=new Ed(e);t.set(e,i)}return t.get(e)}},Ed=class{constructor(e){this.id=QE++,this.code=e,this.usedTimes=0}};o3=0;Nc=class extends dt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zc=class extends dt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},u3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h3=`uniform sampler2D shadow_pass;
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
}`;Td=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zs=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},g3={type:"move"},ta=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g3))),c&&e.hand){o=!0;for(let p of e.hand.values()){let d=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){let v=new zs;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[p.jointName]=v,c.add(v)}let m=c.joints[p.jointName];d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=d.radius),m.visible=d!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),g=.02,y=.005;c.inputState.pinching&&h>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}},Ad=class extends an{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ar,u!==Ar&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ar&&(i=br),i===void 0&&u===Ws&&(i=Os),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1}},Cd=class extends si{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,g=null,y=t.getContextAttributes(),p=null,d=null,m=[],v=new Map,x=new Ut;x.layers.enable(1),x.viewport=new vt;let _=new Ut;_.layers.enable(2),_.viewport=new vt;let M=[x,_],A=new Td;A.layers.enable(1),A.layers.enable(2);let R=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let W=m[U];return W===void 0&&(W=new ta,m[U]=W),W.getTargetRaySpace()},this.getControllerGrip=function(U){let W=m[U];return W===void 0&&(W=new ta,m[U]=W),W.getGripSpace()},this.getHand=function(U){let W=m[U];return W===void 0&&(W=new ta,m[U]=W),W.getHandSpace()};function C(U){let W=v.get(U.inputSource);W!==void 0&&W.dispatchEvent({type:U.type,data:U.inputSource})}function D(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",z),v.forEach(function(U,W){U!==void 0&&U.disconnect(W)}),v.clear(),R=null,w=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",D),r.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let W={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:h}),d=new ri(h.framebufferWidth,h.framebufferHeight,{format:Un,type:Pr,encoding:e.outputEncoding})}else{let W=null,V=null,N=null;y.depth&&(N=y.stencil?35056:33190,W=y.stencil?Ws:Ar,V=y.stencil?Os:br);let K={colorFormat:e.outputEncoding===Ke?35907:32856,depthFormat:N,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(K),r.updateRenderState({layers:[f]}),d=new ri(f.textureWidth,f.textureHeight,{format:Un,type:Pr,depthTexture:new Ad(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});let ue=e.properties.get(d);ue.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),X.setContext(r),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(U){let W=r.inputSources;for(let V=0;V<W.length;V++){let N=W[V].handedness==="right"?1:0;v.set(W[V],m[N])}for(let V=0;V<U.removed.length;V++){let N=U.removed[V],K=v.get(N);K&&(K.dispatchEvent({type:"disconnected",data:N}),v.delete(N))}for(let V=0;V<U.added.length;V++){let N=U.added[V],K=v.get(N);K&&K.dispatchEvent({type:"connected",data:N})}}let Q=new L,se=new L;function I(U,W,V){Q.setFromMatrixPosition(W.matrixWorld),se.setFromMatrixPosition(V.matrixWorld);let N=Q.distanceTo(se),K=W.projectionMatrix.elements,ue=V.projectionMatrix.elements,ge=K[14]/(K[10]-1),G=K[14]/(K[10]+1),We=(K[9]+1)/K[5],Ee=(K[9]-1)/K[5],be=(K[8]-1)/K[0],fe=(ue[8]+1)/ue[0],Ne=ge*be,Pe=ge*fe,Me=N/(-be+fe),ot=Me*-be;W.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ot),U.translateZ(Me),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();let pt=ge+Me,xt=G+Me,Jt=Ne-ot,at=Pe+(N-ot),Oe=We*G/xt*pt,cn=Ee*G/xt*pt;U.projectionMatrix.makePerspective(Jt,at,Oe,cn,pt,xt)}function q(U,W){W===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(W.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;A.near=_.near=x.near=U.near,A.far=_.far=x.far=U.far,(R!==A.near||w!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,w=A.far);let W=U.parent,V=A.cameras;q(A,W);for(let K=0;K<V.length;K++)q(V[K],W);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),U.position.copy(A.position),U.quaternion.copy(A.quaternion),U.scale.copy(A.scale),U.matrix.copy(A.matrix),U.matrixWorld.copy(A.matrixWorld);let N=U.children;for(let K=0,ue=N.length;K<ue;K++)N[K].updateMatrixWorld(!0);V.length===2?I(A,x,_):A.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(U){f!==null&&(f.fixedFoveation=U),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=U)};let B=null;function Y(U,W){if(c=W.getViewerPose(l||o),g=W,c!==null){let N=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let K=!1;N.length!==A.cameras.length&&(A.cameras.length=0,K=!0);for(let ue=0;ue<N.length;ue++){let ge=N[ue],G=null;if(h!==null)G=h.getViewport(ge);else{let Ee=u.getViewSubImage(f,ge);G=Ee.viewport,ue===0&&(e.setRenderTargetTextures(d,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(d))}let We=M[ue];We===void 0&&(We=new Ut,We.layers.enable(ue),We.viewport=new vt,M[ue]=We),We.matrix.fromArray(ge.transform.matrix),We.projectionMatrix.fromArray(ge.projectionMatrix),We.viewport.set(G.x,G.y,G.width,G.height),ue===0&&A.matrix.copy(We.matrix),K===!0&&A.cameras.push(We)}}let V=r.inputSources;for(let N=0;N<m.length;N++){let K=V[N],ue=v.get(K);ue!==void 0&&ue.update(K,W,l||o)}B&&B(U,W),g=null}let X=new lx;X.setAnimationLoop(Y),this.setAnimationLoop=function(U){B=U},this.dispose=function(){}}};Pd=class extends ep{};Pd.prototype.isWebGL1Renderer=!0;Fc=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}},Rd=class extends dt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xs=class extends on{constructor(e,t,i,r=1){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},jv=new Qe,Yv=new Qe,gc=[],Ko=new Sn,Oc=class extends Sn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,jv),Yv.multiplyMatrices(i,jv),Ko.matrixWorld=Yv,Ko.raycast(e,gc);for(let o=0,a=gc.length;o<a;o++){let l=gc[o];l.instanceId=s,l.object=this,t.push(l)}gc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Ir=class extends dt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$v=new L,Zv=new L,Jv=new Qe,ad=new ra,yc=new Gs,Ld=class extends Dt{constructor(e=new En,t=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)$v.fromBufferAttribute(t,r-1),Zv.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=$v.distanceTo(Zv);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(r),yc.radius+=s,e.ray.intersectsSphere(yc)===!1)return;Jv.copy(r).invert(),ad.copy(e.ray).applyMatrix4(Jv);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,f=new L,h=new L,g=this.isLineSegments?2:1,y=i.index,d=i.attributes.position;if(y!==null){let m=Math.max(0,o.start),v=Math.min(y.count,o.start+o.count);for(let x=m,_=v-1;x<_;x+=g){let M=y.getX(x),A=y.getX(x+1);if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,A),ad.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=m,_=v-1;x<_;x+=g){if(c.fromBufferAttribute(d,x),u.fromBufferAttribute(d,x+1),ad.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},Kv=new L,Qv=new L,la=class extends Ld{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Kv.fromBufferAttribute(t,r),Qv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Kv.distanceTo(Qv);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Dd=class extends dt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};yT=new L,vT=new tp,xT=new tp,_T=new tp,vc=new L,xc=new L,ld=new L,_c=new wn,ca=class extends En{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(wc*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},g=[];for(let y=0;y<l;y+=3){o?(c[0]=o.getX(y),c[1]=o.getX(y+1),c[2]=o.getX(y+2)):(c[0]=y,c[1]=y+1,c[2]=y+2);let{a:p,b:d,c:m}=_c;if(p.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),_c.getNormal(ld),f[0]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,f[1]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,f[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let v=0;v<3;v++){let x=(v+1)%3,_=f[v],M=f[x],A=_c[u[v]],R=_c[u[x]],w=`${_}_${M}`,C=`${M}_${_}`;C in h&&h[C]?(ld.dot(h[C].normal)<=s&&(g.push(A.x,A.y,A.z),g.push(R.x,R.y,R.z)),h[C]=null):w in h||(h[w]={index0:c[v],index1:c[x],normal:ld.clone()})}}for(let y in h)if(h[y]){let{index0:p,index1:d}=h[y];vc.fromBufferAttribute(a,p),xc.fromBufferAttribute(a,d),g.push(vc.x,vc.y,vc.z),g.push(xc.x,xc.y,xc.z)}this.setAttribute("position",new bn(g,3))}}},Id=class extends dt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},kd=class extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bc=class extends dt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nd=class extends Bc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ua=class extends dt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zd=class extends dt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fd=class extends dt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Od=class extends dt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bd=class extends dt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ud=class extends Ir{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}},x3={ShadowMaterial:Id,SpriteMaterial:Rd,RawShaderMaterial:kd,ShaderMaterial:Hn,PointsMaterial:Dd,MeshPhysicalMaterial:Nd,MeshStandardMaterial:Bc,MeshPhongMaterial:ua,MeshToonMaterial:zd,MeshNormalMaterial:Fd,MeshLambertMaterial:Od,MeshDepthMaterial:Nc,MeshDistanceMaterial:zc,MeshBasicMaterial:oa,MeshMatcapMaterial:Bd,LineDashedMaterial:Ud,LineBasicMaterial:Ir,Material:dt};dt.fromType=function(n){return new x3[n]};ft={arraySlice:function(n,e,t){return ft.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){let s=n.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],u=c.getValueSize(),f=[],h=[];for(let g=0;g<c.times.length;++g){let y=c.times[g]*r;if(!(y<t||y>=i)){f.push(c.times[g]);for(let p=0;p<u;++p)h.push(c.values[g*u+p])}}f.length!==0&&(c.times=ft.convertArray(f,c.times.constructor),c.values=ft.convertArray(h,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);let r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=n.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0,f=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let h=0,g=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=g/3);let y=a.times.length-1,p;if(s<=a.times[0]){let m=u,v=f-u;p=ft.arraySlice(a.values,m,v)}else if(s>=a.times[y]){let m=y*f+u,v=m+f-u;p=ft.arraySlice(a.values,m,v)}else{let m=a.createInterpolant(),v=u,x=f-u;m.evaluate(s),p=ft.arraySlice(m.resultBuffer,v,x)}l==="quaternion"&&new ln().fromArray(p).normalize().conjugate().toArray(p);let d=c.times.length;for(let m=0;m<d;++m){let v=m*g+h;if(l==="quaternion")ln.multiplyQuaternionsFlat(c.values,v,p,0,c.values,v);else{let x=g-h*2;for(let _=0;_<x;++_)c.values[v+_]-=p[_]}}}return n.blendMode=DM,n}},js=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vd=class extends js{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lv,endingEnd:lv}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case cv:s=e,a=2*t-i;break;case uv:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case cv:o=e,l=2*i-t;break;case uv:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,g=this._weightNext,y=(i-t)/(r-t),p=y*y,d=p*y,m=-h*d+2*h*p-h*y,v=(1+h)*d+(-1.5-2*h)*p+(-.5+h)*y+1,x=(-1-g)*d+(1.5+g)*p+.5*y,_=g*d-g*p;for(let M=0;M!==a;++M)s[M]=m*o[u+M]+v*o[c+M]+x*o[l+M]+_*o[f+M];return s}},Hd=class extends js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},Wd=class extends js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ft.convertArray(t,this.TimeBufferType),this.values=ft.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ft.convertArray(e.times,Array),values:ft.convertArray(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sc:t=this.InterpolantFactoryMethodDiscrete;break;case bc:t=this.InterpolantFactoryMethodLinear;break;case If:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sc;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return If}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=ft.arraySlice(i,s,o),this.values=ft.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&ft.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=ft.arraySlice(this.times),t=ft.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===If,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,h=f-i,g=f+i;for(let y=0;y!==i;++y){let p=t[f+y];if(p!==t[h+y]||p!==t[g+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,h=o*i;for(let g=0;g!==i;++g)t[h+g]=t[f+g]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ft.arraySlice(e,0,o),this.values=ft.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){let e=ft.arraySlice(this.times,0),t=ft.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=bc;kr=class extends Wn{};kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=Sc;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;Gd=class extends Wn{};Gd.prototype.ValueTypeName="color";qd=class extends Wn{};qd.prototype.ValueTypeName="number";Xd=class extends js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)ln.slerpFlat(s,0,o,c-a,o,c,l);return s}},ha=class extends Wn{InterpolantFactoryMethodLinear(e){return new Xd(this.times,this.values,this.getValueSize(),e)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.DefaultInterpolation=bc;ha.prototype.InterpolantFactoryMethodSmooth=void 0;Nr=class extends Wn{};Nr.prototype.ValueTypeName="string";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=Sc;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;jd=class extends Wn{};jd.prototype.ValueTypeName="vector";Yd=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let g=c[f],y=c[f+1];if(g.global&&(g.lastIndex=0),g.test(u))return y}return null}}},wT=new Yd,$d=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Uc=class extends $d{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DefaultUp),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fa=class extends En{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},np="\\[\\]\\.:\\/",_3=new RegExp("["+np+"]","g"),ip="[^"+np+"]",w3="[^"+np.replace("\\.","")+"]",M3=/((?:WC+[\/:])*)/.source.replace("WC",ip),S3=/(WCOD+)?/.source.replace("WCOD",w3),b3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ip),E3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ip),T3=new RegExp("^"+M3+S3+b3+E3+"$"),A3=["material","materials","bones"],Zd=class{constructor(e,t,i){let r=i||Fe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Fe=class{constructor(e,t,i){this.path=t,this.parsedPath=i||Fe.parseTrackName(t),this.node=Fe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Fe.Composite(e,t,i):new Fe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_3,"")}static parseTrackName(e){let t=T3.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);A3.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=Fe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Zd;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Vc=class{constructor(e,t,i=0,r=1/0){this.ray=new ra(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Jd(e,this,i,t),i.sort(ex),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Jd(e[r],this,i,t);return i.sort(ex),i}};da=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},px=new ArrayBuffer(4),MT=new Float32Array(px),ST=new Uint32Array(px),ti=new Uint32Array(512),ni=new Uint32Array(512);for(let n=0;n<256;++n){let e=n-127;e<-27?(ti[n]=0,ti[n|256]=32768,ni[n]=24,ni[n|256]=24):e<-14?(ti[n]=1024>>-e-14,ti[n|256]=1024>>-e-14|32768,ni[n]=-e-1,ni[n|256]=-e-1):e<=15?(ti[n]=e+15<<10,ti[n|256]=e+15<<10|32768,ni[n]=13,ni[n|256]=13):e<128?(ti[n]=31744,ti[n|256]=64512,ni[n]=24,ni[n|256]=24):(ti[n]=31744,ti[n|256]=64512,ni[n]=13,ni[n|256]=13)}mx=new Uint32Array(2048),ma=new Uint32Array(64),C3=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,mx[n]=e|t}for(let n=1024;n<2048;++n)mx[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)ma[n]=n<<23;ma[31]=1199570944;ma[32]=2147483648;for(let n=33;n<63;++n)ma[n]=2147483648+(n-32<<23);ma[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(C3[n]=1024);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd)});var xx={};Zx(xx,{MapControls:()=>sp,OrbitControls:()=>Yc});var yx,rp,vx,Yc,sp,_x=fp(()=>{Xc();yx={type:"change"},rp={type:"start"},vx={type:"end"},Yc=class extends si{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",un),this._domElementKeyEvents=b},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(yx),i.update(),s=r.NONE},this.update=function(){let b=new L,$=new ln().setFromUnitVectors(e.up,new L(0,1,0)),oe=$.clone().invert(),te=new L,P=new ln,ne=2*Math.PI;return function(){let ve=i.object.position;b.copy(ve).sub(i.target),b.applyQuaternion($),a.setFromVector3(b),i.autoRotate&&s===r.NONE&&C(R()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ce=i.minAzimuthAngle,ye=i.maxAzimuthAngle;return isFinite(ce)&&isFinite(ye)&&(ce<-Math.PI?ce+=ne:ce>Math.PI&&(ce-=ne),ye<-Math.PI?ye+=ne:ye>Math.PI&&(ye-=ne),ce<=ye?a.theta=Math.max(ce,Math.min(ye,a.theta)):a.theta=a.theta>(ce+ye)/2?Math.max(ce,a.theta):Math.min(ye,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),b.setFromSpherical(a),b.applyQuaternion(oe),ve.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||te.distanceToSquared(i.object.position)>o||8*(1-P.dot(i.object.quaternion))>o?(i.dispatchEvent(yx),te.copy(i.object.position),P.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",ot),i.domElement.removeEventListener("pointercancel",Jt),i.domElement.removeEventListener("wheel",cn),i.domElement.removeEventListener("pointermove",pt),i.domElement.removeEventListener("pointerup",xt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",un)};let i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=r.NONE,o=1e-6,a=new da,l=new da,c=1,u=new L,f=!1,h=new _e,g=new _e,y=new _e,p=new _e,d=new _e,m=new _e,v=new _e,x=new _e,_=new _e,M=[],A={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function C(b){l.theta-=b}function D(b){l.phi-=b}let z=function(){let b=new L;return function(oe,te){b.setFromMatrixColumn(te,0),b.multiplyScalar(-oe),u.add(b)}}(),Q=function(){let b=new L;return function(oe,te){i.screenSpacePanning===!0?b.setFromMatrixColumn(te,1):(b.setFromMatrixColumn(te,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(oe),u.add(b)}}(),se=function(){let b=new L;return function(oe,te){let P=i.domElement;if(i.object.isPerspectiveCamera){let ne=i.object.position;b.copy(ne).sub(i.target);let ee=b.length();ee*=Math.tan(i.object.fov/2*Math.PI/180),z(2*oe*ee/P.clientHeight,i.object.matrix),Q(2*te*ee/P.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(oe*(i.object.right-i.object.left)/i.object.zoom/P.clientWidth,i.object.matrix),Q(te*(i.object.top-i.object.bottom)/i.object.zoom/P.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function I(b){i.object.isPerspectiveCamera?c/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(b){i.object.isPerspectiveCamera?c*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(b){h.set(b.clientX,b.clientY)}function Y(b){v.set(b.clientX,b.clientY)}function X(b){p.set(b.clientX,b.clientY)}function U(b){g.set(b.clientX,b.clientY),y.subVectors(g,h).multiplyScalar(i.rotateSpeed);let $=i.domElement;C(2*Math.PI*y.x/$.clientHeight),D(2*Math.PI*y.y/$.clientHeight),h.copy(g),i.update()}function W(b){x.set(b.clientX,b.clientY),_.subVectors(x,v),_.y>0?I(w()):_.y<0&&q(w()),v.copy(x),i.update()}function V(b){d.set(b.clientX,b.clientY),m.subVectors(d,p).multiplyScalar(i.panSpeed),se(m.x,m.y),p.copy(d),i.update()}function N(b){b.deltaY<0?q(w()):b.deltaY>0&&I(w()),i.update()}function K(b){let $=!1;switch(b.code){case i.keys.UP:se(0,i.keyPanSpeed),$=!0;break;case i.keys.BOTTOM:se(0,-i.keyPanSpeed),$=!0;break;case i.keys.LEFT:se(i.keyPanSpeed,0),$=!0;break;case i.keys.RIGHT:se(-i.keyPanSpeed,0),$=!0;break}$&&(b.preventDefault(),i.update())}function ue(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{let b=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);h.set(b,$)}}function ge(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{let b=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);p.set(b,$)}}function G(){let b=M[0].pageX-M[1].pageX,$=M[0].pageY-M[1].pageY,oe=Math.sqrt(b*b+$*$);v.set(0,oe)}function We(){i.enableZoom&&G(),i.enablePan&&ge()}function Ee(){i.enableZoom&&G(),i.enableRotate&&ue()}function be(b){if(M.length==1)g.set(b.pageX,b.pageY);else{let oe=xe(b),te=.5*(b.pageX+oe.x),P=.5*(b.pageY+oe.y);g.set(te,P)}y.subVectors(g,h).multiplyScalar(i.rotateSpeed);let $=i.domElement;C(2*Math.PI*y.x/$.clientHeight),D(2*Math.PI*y.y/$.clientHeight),h.copy(g)}function fe(b){if(M.length===1)d.set(b.pageX,b.pageY);else{let $=xe(b),oe=.5*(b.pageX+$.x),te=.5*(b.pageY+$.y);d.set(oe,te)}m.subVectors(d,p).multiplyScalar(i.panSpeed),se(m.x,m.y),p.copy(d)}function Ne(b){let $=xe(b),oe=b.pageX-$.x,te=b.pageY-$.y,P=Math.sqrt(oe*oe+te*te);x.set(0,P),_.set(0,Math.pow(x.y/v.y,i.zoomSpeed)),I(_.y),v.copy(x)}function Pe(b){i.enableZoom&&Ne(b),i.enablePan&&fe(b)}function Me(b){i.enableZoom&&Ne(b),i.enableRotate&&be(b)}function ot(b){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",pt),i.domElement.addEventListener("pointerup",xt)),J(b),b.pointerType==="touch"?T(b):at(b))}function pt(b){i.enabled!==!1&&(b.pointerType==="touch"?S(b):Oe(b))}function xt(b){re(b),M.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",pt),i.domElement.removeEventListener("pointerup",xt)),i.dispatchEvent(vx),s=r.NONE}function Jt(b){re(b)}function at(b){let $;switch(b.button){case 0:$=i.mouseButtons.LEFT;break;case 1:$=i.mouseButtons.MIDDLE;break;case 2:$=i.mouseButtons.RIGHT;break;default:$=-1}switch($){case Ei.DOLLY:if(i.enableZoom===!1)return;Y(b),s=r.DOLLY;break;case Ei.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;X(b),s=r.PAN}else{if(i.enableRotate===!1)return;B(b),s=r.ROTATE}break;case Ei.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;B(b),s=r.ROTATE}else{if(i.enablePan===!1)return;X(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(rp)}function Oe(b){if(i.enabled!==!1)switch(s){case r.ROTATE:if(i.enableRotate===!1)return;U(b);break;case r.DOLLY:if(i.enableZoom===!1)return;W(b);break;case r.PAN:if(i.enablePan===!1)return;V(b);break}}function cn(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(rp),N(b),i.dispatchEvent(vx))}function un(b){i.enabled===!1||i.enablePan===!1||K(b)}function T(b){switch(he(b),M.length){case 1:switch(i.touches.ONE){case Ti.ROTATE:if(i.enableRotate===!1)return;ue(),s=r.TOUCH_ROTATE;break;case Ti.PAN:if(i.enablePan===!1)return;ge(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ti.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;We(),s=r.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ee(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(rp)}function S(b){switch(he(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;fe(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pe(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Me(b),i.update();break;default:s=r.NONE}}function H(b){i.enabled!==!1&&b.preventDefault()}function J(b){M.push(b)}function re(b){delete A[b.pointerId];for(let $=0;$<M.length;$++)if(M[$].pointerId==b.pointerId){M.splice($,1);return}}function he(b){let $=A[b.pointerId];$===void 0&&($=new _e,A[b.pointerId]=$),$.set(b.pageX,b.pageY)}function xe(b){let $=b.pointerId===M[0].pointerId?M[1]:M[0];return A[$.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",ot),i.domElement.addEventListener("pointercancel",Jt),i.domElement.addEventListener("wheel",cn,{passive:!1}),this.update()}},sp=class extends Yc{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=Ei.PAN,this.mouseButtons.RIGHT=Ei.ROTATE,this.touches.ONE=Ti.PAN,this.touches.TWO=Ti.DOLLY_ROTATE}}});var Ox=Br(Vr()),Bx=Br(Z0());var Zt=Br(Vr());function K0(n,e=!0){let t=[],i={};for(let r of n){if(r.toLowerCase().startsWith("union")||r.toLowerCase().startsWith("symbol")){let[,...s]=r.split(" ");if(!s.length)continue;let[o,a]=s.join("").split("=").map(l=>l.replace(/\s/g,""));if(!o||!a)continue;if(o.length>1&&e)throw new Error("Invalid union symbol: Must be only one character. ({SYMBOL}={UNION})");i[o]=new Set(a.split(""));continue}t.push(dw(r,e))}return{sequences:t,unions:i}}function dw(n,e=!0){let t={type:"standard",rules:[]};n.toLowerCase().startsWith("one")&&(t.type="one",n=n.slice(3).trim()),n.toLowerCase().startsWith("random")&&(t.type="random",n=n.slice(6).trim());for(let i of pw(n)){let[r,s]=i.replace(/\s+/g," ").replace(/(\s*)=(\s*)/,"=").split(" "),o=r.replace(/\s/g,"").split("=");if(o[0]===o[1])continue;if(o.length!==2){if(e)throw new Error("Rules must follow format: {FROM}={TO}");o.push("")}let a={type:"one",from:o[0],to:o[1],steps:mw(s,e)};if(a.steps.all&&(a.type="all"),o[0].length!==o[1].length&&e)throw new Error(`{FROM} and {TO} patterns must be equal in length: ${r}`);for(let l=0;l<o[0].length;l++)if((o[0][l]==="/"&&o[1][l]!=="/"||o[0][l]!=="/"&&o[1][l]==="/")&&e)throw new Error(`Step characters (/) must occur in the same positions: ${r}`);t.rules.push(a)}return t}function pw(n){return n.split(",").map(e=>e.trim())}function mw(n,e=!0){let t={count:0};if(!n)return t;if(n.startsWith("#")===!1){if(e)throw new Error(`Steps must start with '#', (${n})`);return t}if(n==="#ALL")return t.all=!0,t;if(n.includes("..")){let r=n.split(".."),[s,o]=[Number(r[0]),Number(r[1])];if(isNaN(s)||isNaN(o)){if(e)throw new Error("Step range must be formatted: #{FROM}..{TO}");return t}if(s>o||s<0||o<0){if(e)throw new Error("Invalid step range: {FROM} must be below {TO} and both values must be above 0");return t}return t.max=J0(s,o),t.seed=()=>J0(s,o),t}let i=Number(n.slice(1));if(isNaN(i)){if(e)throw new Error("Invalid step: Must follow be one of: #ALL, #{int}, #{from}..{to}");return t}return t.max=i,t}function J0(n,e){return Math.floor(Math.random()*(e-n+1)+n)}var St=Br(Cy()),Af={B:St.default.bgBlack,I:St.default.bgBlue,P:St.default.bgMagenta,E:St.default.bgGreen,N:St.default.bgHex("#A95238"),D:St.default.bgGray,A:St.default.bgHex("#E6E6E6"),W:St.default.bgWhite,R:St.default.bgRed,O:St.default.bgHex("#FFA108"),Y:St.default.bgYellow,G:St.default.bgGreenBright,U:St.default.bgCyan,S:St.default.bgHex("#82759A"),K:St.default.bgHex("#FF76A6"),F:St.default.bgHex("#FFCAA8")},gt={B:0,I:2240083,P:8202579,E:34129,N:11096632,D:6248272,A:15132390,W:16773608,R:16713550,O:16752904,Y:16706348,G:58169,U:2927614,S:8549786,K:16742054,F:16763560},Cf=Object.entries(gt).reduce((n,[e,t])=>(n[e]="#"+t.toString(16).padStart(6,"0"),n),{});if(typeof window<"u"){let n=Object.keys(Af).sort((e,t)=>e>t?1:-1);for(let e of n){let t=Af[e](Cf[e]);console.log(`${e}: %c           `,`background: ${t};`)}}function jl(n,e){for(let t=0;t<n.grid.input.length;t++)for(let i=0;i<n.grid.input[0].length;i++)e(i,t,n.grid.input[t][i]);return n}function Yl(n,e){for(let t=0;t<n.grid.input.length;t++)for(let i=0;i<n.grid.input[0].length;i++)for(let r=0;r<n.grid.input[0][0].length;r++)e(r,i,t,n.grid.input[t][i][r]);return n}function vr(n){let{start:e=[0,0],size:t=[40,20],char:i="B"}=n,[r,s]=e,[o,a]=t,l=[];for(let c=0;c<a;c++)c===s?l.push("B".repeat(r)+i+"B".repeat(o-r-1)):l.push("B".repeat(o));return{input:l}}function Py(n){let{start:e=[0,0,0],size:t=[40,40,40],char:i="B"}=n,[r,s,o]=e,[a,l,c]=t,u=[];for(let f=0;f<c;f++){let h=[];for(let g=0;g<l;g++)f===o&&g===s?h.push("B".repeat(r)+i+"B".repeat(a-r-1)):h.push("B".repeat(a));u.push(h)}return{input:u}}function $l(){return{type:"2d",grid:vr({size:[50,50]}),rules:["B=P #1","PBB=**P #ALL","BPBPBPBPB/BBBBBBBBB/BPBPBPBPB/BBBBBBBBB/BPBPBPBPB=BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB #10","RBP=GGR, GGR=RWW, P=R","R=G #1","R=W #ALL","GWW=**G, GBW=*WG","GBG=*W* #5","G=W #ALL","BBB/BWB=BBB/BBB"]}}function Ry(){return{type:"2d",grid:vr({size:[20,20]}),rules:["B=W #1","WBB=WAW"]}}function Ly(){return{type:"3d",grid:Py({size:[40,40,40],start:[1,1,1],char:"I"}),rules:["IBBBB=IUUUI","I=U #ALL"]}}function Dy(){return{type:"2d",grid:vr({size:[40,40],char:"B"}),rules:["B=W #1","B=R #1","ONE RB=RR, WB=WW","RW=UU","W=B #ALL","R=B #ALL","UB=UU #1","BU/UB=U*/** #ALL","UB=*G","B=E #13","ONE EB=*E, GB=*G"]}}var Zc=Br(Vr());Xc();Xc();var jc=new _e(1,1);document.addEventListener("mousemove",P3);function P3(n){n.preventDefault(),jc.x=n.clientX/window.innerWidth*2-1,jc.y=-(n.clientY/window.innerHeight)*2+1}var{OrbitControls:R3}=(_x(),Jx(xx)),Tn=1,Zs,ap,Gn;function Sx(){return{...ap}}var op=new bi(Tn,Tn,Tn),L3=new ua({color:16777215}),bx=new Ir({color:0,onBeforeCompile:n=>{n.vertexShader=`
    attribute vec3 offset;
    ${n.vertexShader}
  `.replace("#include <begin_vertex>",`
    #include <begin_vertex>
    transformed += offset;
    `)}}),$c=new Qe,wx={B:new pe(gt.B),I:new pe(gt.I),P:new pe(gt.P),E:new pe(gt.E),N:new pe(gt.N),D:new pe(gt.D),A:new pe(gt.A),W:new pe(gt.W),R:new pe(gt.R),O:new pe(gt.O),Y:new pe(gt.Y),G:new pe(gt.G),U:new pe(gt.U),S:new pe(gt.S),K:new pe(gt.K),F:new pe(gt.F)};function Ex(){let n=new ep({antialias:!0});n.setPixelRatio(window.devicePixelRatio);let{width:e,height:t}=Px();n.setSize(e,t);let i=new Ut(60,window.innerWidth/window.innerHeight,1,5e3);i.aspect=e/t;let r=new Fc;r.background=new pe(10921638);let s=new Uc(16777215,8947848,1);s.position.set(0,500,2e3),r.add(s);let o=new Vc,a=new R3(i,n.domElement);a.enableDamping=!0,a.enableZoom=!0,a.enablePan=!0;let l={scene:r,camera:i,raycaster:o,renderer:n,controls:a};return Cx(l),ap=l,l}function lp(n,e=!1){Gn&&Gn.scene.remove(Gn.cubes);let{count:t}=Tx(n),i=new fa().copy(new ca(op)),r=new Oc(op,L3,t),s=new la(i,bx);return r.position.set(0,0,0),Gn={cubes:r,lines:s,scene:ap.scene,borders:e},cp(n),Gn.scene.add(r),Gn}function cp(n){let{scene:e,cubes:t,borders:i}=Gn,{count:r,transparent:s}=Tx(n),o=Gn.lines;i&&e.remove(Gn.lines),t.count=r-s;let a=[],l=0;if(n.type==="2d"?jl(n,(c,u,f)=>{let h=Mx(n,c,u,0);$c.setPosition(h.x,h.y,h.z),i&&a.push(h.x,h.y,h.z),t.setMatrixAt(l,$c),t.setColorAt(l,wx[f]),f!=="B"&&l++}):Yl(n,(c,u,f,h)=>{let g=Mx(n,c,u,f);$c.setPosition(g.x,g.y,g.z),i&&a.push(g.x,g.y,g.z),t.setMatrixAt(l,$c),t.setColorAt(l,wx[h]),h!=="B"&&l++}),t.instanceColor&&(t.instanceColor.needsUpdate=!0),t.instanceMatrix.needsUpdate=!0,i){let c=new fa().copy(new ca(op));c.setAttribute("offset",new Xs(new Float32Array(a),3)),c.instanceCount=1/0,o=new la(c,bx),e.add(o)}return Gn={scene:e,cubes:t,lines:o,borders:i},Gn}function Tx(n){let e=n.type==="3d"?n.grid.input.length*n.grid.input[0].length*n.grid.input[0][0].length:n.grid.input.length*n.grid.input[0].length,t=0;return n.type==="2d"?jl(n,(i,r,s)=>{s==="B"&&t++}):Yl(n,(i,r,s,o)=>{o==="B"&&t++}),{count:e,transparent:t}}function Mx(n,e,t,i){return Zs||(n.type==="2d"?Zs=new L(n.grid.input[0].length*Tn,n.grid.input.length*Tn,Tn):Zs=new L(n.grid.input[0][0].length*Tn,n.grid.input[0].length*Tn,n.grid.input.length*Tn)),{x:e*Tn-Zs.x/2,y:t*Tn-Zs.y/2,z:i*Tn-Zs.z/2}}function Ax(n){return()=>{let{width:e,height:t}=Px();n.camera.aspect=e/t,n.camera.updateProjectionMatrix(),n.renderer?.setSize(e,t)}}function Cx(n){requestAnimationFrame(()=>Cx(n)),n.controls?.update(),n.raycaster.setFromCamera(jc,n.camera),D3(n)}function D3(n){n.renderer?.render(n.scene,n.camera)}function Px(){let n=document.querySelector("#viewport"),e=n.clientWidth,t=n.clientHeight;return{width:e,height:t}}var I3=location.host.toLowerCase().includes("github.io")?"markovjr/grids.js":"dist/grids.js",Rx=new Worker(I3);function Lx(n,e){let[t,i]=k3(n),r=(s,o)=>{t(s,o)};return(0,Zc.useEffect)(()=>{!i||(cp(i),e?.(i))},[i]),{model:i,generate:r}}function k3(n){let[e,t]=(0,Zc.useState)();return Rx.onmessage=r=>{t(r.data)},[(r,s)=>Rx.postMessage({type:r,model:s||n}),e]}var ae=Br(Vr());var Jc="models",nr={};function Kc(){let n=localStorage.getItem(Jc);return n?(nr=JSON.parse(n),nr):(nr={},localStorage.setItem(Jc,JSON.stringify(nr)),{})}function Dx(n,e){nr[n]=e,localStorage.setItem(Jc,JSON.stringify(nr))}function Ix(n){delete nr[n],localStorage.setItem(Jc,JSON.stringify(nr))}var zx=({generate:n,mode:e,setMode:t,current:i,initialModel:r,outcome:s})=>{let[o,a]=ae.useState(Kc()),[l,c]=ae.useState(r.grid.input[0].length),[u,f]=ae.useState(r.grid.input.length),[h,g]=ae.useState(r.rules),[y,p]=ae.useState(""),[d,m]=ae.useState(-1),[v,x]=ae.useState(h.map(()=>20)),[_,M]=ae.useState("B"),A=(V,N,K)=>{x(v.map((ue,ge)=>{if(V!==ge)return ue;let G=Number(K.replace("px","").trim());return G<N&&N-G>=5?N:N-ue<5?ue:N}))};ae.useEffect(()=>{v.length!==h.length&&x(h.map((V,N)=>v[N]||20))},[h]);let R=h[d],w=Object.keys(o),C=()=>{Dx(y,{width:l,height:u,rules:h,start:_}),a(Kc())},D=()=>{Ix(y),a(Kc())},z=V=>{let N=V.rules.map(K=>Array.isArray(K)?K.join(", "):K);g(N),X(V),c(V.grid.input[0].length),f(V.grid.input.length)},Q=V=>{let N=o[V];g(N.rules),c(N.width),f(N.height),M(N.start),p(V),X({type:"2d",grid:vr({size:[N.width,N.height],char:N.start}),rules:N.rules})},se=V=>{let N=h.filter((K,ue)=>V!==ue);g(N)},I=V=>{let N=h.slice(0,V).concat([""],h.slice(V));g(N)},q=V=>N=>{A(V,N.target.scrollHeight,N.target.style.height);let K=h.map((ue,ge)=>V!==ge?ue:N.target.value);g(K)},B=()=>({type:"2d",grid:vr({size:[l,u],char:_}),rules:h.filter(N=>!!N).filter(N=>N.split("=")[0]!==N.split("=")[1])}),Y=()=>({type:"2d",grid:[l,u],rules:h.filter(V=>!!V).filter(V=>V.split("=")[0]!==V.split("=")[1]),start:_}),X=V=>{if(V)return n(V);let N=B();n(N)},U=l>0&&u>0&&h.length>0&&h.some(V=>V.trim()!==""),W=V=>K=>{let ue=Number(K.target.value);if(!K.target.value||isNaN(ue))return V(0);V(ue)};return ae.createElement(ae.Fragment,null,ae.createElement("div",{className:"form"},ae.createElement("div",{className:"dimensions"},ae.createElement("div",null,ae.createElement("button",{onClick:()=>z(Dy())},"River"),ae.createElement("button",{onClick:()=>z($l())},"Dungeon 2D"),ae.createElement("button",{onClick:()=>z(Ry())},"Maze 2D"),ae.createElement("button",{onClick:()=>z(Ly())},"Maze 3D")),ae.createElement("div",{className:"dim"},ae.createElement("div",{className:"label"},"Slow?"),ae.createElement("input",{type:"checkbox",defaultChecked:e==="slow",onChange:V=>t(V.target.checked?"slow":"fast")})),ae.createElement("div",{className:"dim"},ae.createElement("div",{className:"label"},"W"),ae.createElement("input",{className:"dimension",type:"text",value:l,onChange:W(c)})),ae.createElement("div",{className:"dim"},ae.createElement("div",{className:"label"},"H"),ae.createElement("input",{className:"dimension",type:"text",value:u,onChange:W(f)})),ae.createElement("div",{className:"dim"},ae.createElement("div",{className:"label"},"Char"),ae.createElement("input",{className:"dimension",type:"text",value:_,onChange:V=>M(V.target.value.slice(0,1)),maxLength:1})),ae.createElement("div",null,ae.createElement("button",{disabled:!U,onClick:()=>X()},"Generate")),ae.createElement("div",null,ae.createElement("div",null,"Saved Model"),w.map(V=>ae.createElement("button",{key:V,onClick:()=>Q(V)},V)))),ae.createElement("div",{className:"rules"},ae.createElement("div",null,ae.createElement("div",null,"Rules - Separate nested rules using commas. See console for colors"," ",ae.createElement("button",{onClick:()=>g(h.concat([""]))},"Add")),ae.createElement("div",{style:{display:"flex",flexDirection:"row",gap:"4px"}},"Save Model",ae.createElement("input",{type:"text",value:y,onChange:V=>p(V.target.value)}),ae.createElement("button",{onClick:C},"Save"),ae.createElement("button",{onClick:D},"Delete Model"))),h.map((V,N)=>ae.createElement("div",{key:N,style:{display:"flex",alignItems:"center"}},ae.createElement("button",{onClick:()=>se(N)},"-"),ae.createElement("button",{onClick:()=>I(N)},"insert"),ae.createElement("textarea",{className:`rule ${i===N?"current":""}`,style:{height:v[N]},value:V,onChange:q(N),onFocus:K=>{m(N),A(N,K.target.scrollHeight,K.target.style.height)}}))),ae.createElement(z3,{rules:R}),ae.createElement(N3,{model:Y(),outcome:s,onImport:V=>{let N=JSON.parse(V);c(N.grid[0]),f(N.grid[1]),g(N.rules)}}))))},N3=({model:n,onImport:e,outcome:t})=>{let i=JSON.stringify({type:n.type,rules:n.rules,grid:[n.grid[0]??0,n.grid[1]??0],start:n.start},null,2),[r,s]=ae.useState("");return ae.createElement("div",null,ae.createElement("div",null,ae.createElement("button",{onClick:()=>e(r)},"Import"),ae.createElement("input",{defaultValue:"",onChange:o=>s(o.target.value)})),ae.createElement("div",null,ae.createElement("pre",null,i)),ae.createElement("textarea",{readOnly:!0,value:t,style:{minHeight:"60px",width:"100%",marginBottom:"60px"}}))},z3=({rules:n})=>{if(!n)return null;let{sequences:e,unions:t}=K0([n],!1),[i]=e,r=Object.entries(t);if(!i&&!r.length)return null;if(r.length){let[s,o]=r[0];return ae.createElement(ae.Fragment,null,ae.createElement(kx,{from:s,to:Array.from(o.keys()).join("")}))}return ae.createElement(ae.Fragment,null,i.rules.map(({from:s,to:o},a)=>ae.createElement(kx,{key:a,from:s,to:o})))},kx=({from:n,to:e})=>{let t=n.split("/"),i=e.split("/");return ae.createElement("div",{className:"color-grid"},ae.createElement("div",{className:"color-rows"},t.map((r,s)=>ae.createElement(Nx,{key:s,chars:r}))),ae.createElement("div",{style:{display:"flex",alignItems:"center"}},ae.createElement("code",null,"=>")),ae.createElement("div",{className:"color-rows"},i.map((r,s)=>ae.createElement(Nx,{key:s,chars:r}))))},Nx=({chars:n})=>ae.createElement("div",{className:"color-row"},n.split("").map((e,t)=>{let i=Cf[e];return i?ae.createElement("span",{key:t,className:"square",style:{backgroundColor:i,border:"1px solid black"}}):ae.createElement("span",{key:t,className:"square"},e)}));var Fx=({borders:n})=>{let e=$l(),[t,i]=Zt.default.useState("slow"),[r,s]=Zt.default.useState(!0),[o,a]=Zt.default.useState(),[l,c]=Zt.default.useState(""),u=(0,Zt.useRef)(null);Zt.default.useEffect(()=>{if(!u.current)return;let y=Ex();lp(e,n);let p=Ax(y);window.addEventListener("resize",p),s(!0),y.camera.translateZ(75),a(y)},[u]);let f=Lx(e,y=>{c(y.grid.input.join(`
`))}),h=y=>{let p=Sx().camera;p.lookAt(0,0,0),p.updateProjectionMatrix()},g=y=>{lp(y),h(y),f.generate(t,y)};return(0,Zt.useEffect)(()=>{if(!o||!o.renderer||!u.current||!r)return;let y=document.createElement("div");u.current.appendChild(y),y.appendChild(o.renderer.domElement),g(e)},[o,u]),Zt.default.createElement(Zt.default.Fragment,null,Zt.default.createElement("div",{className:"viewport",id:"viewport",ref:u}),Zt.default.createElement(zx,{initialModel:e,generate:g,mode:t,setMode:i,current:f.model?.rule||-1,outcome:l}))};var F3=document.querySelector("#app"),O3=(0,Bx.createRoot)(F3);O3.render(Ox.default.createElement(Fx,null));})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.js.map
