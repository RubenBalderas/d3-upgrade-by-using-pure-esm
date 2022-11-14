(function(e){let n=e.performance;function i(L){n&&n.mark&&n.mark(L)}function o(L,E){n&&n.measure&&n.measure(L,E)}i("Zone");let c=e.__Zone_symbol_prefix||"__zone_symbol__";function a(L){return c+L}let y=e[a("forceDuplicateZoneCheck")]===!0;if(e.Zone){if(y||typeof e.Zone.__symbol__!="function")throw new Error("Zone already loaded.");return e.Zone}let d=(()=>{class L{constructor(t,r){this._parent=t,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}static assertZonePatched(){if(e.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=L.current;for(;t.parent;)t=t.parent;return t}static get current(){return U.zone}static get currentTask(){return ne}static __load_patch(t,r,k=!1){if(oe.hasOwnProperty(t)){if(!k&&y)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){let C="Zone:"+t;i(C),oe[t]=r(e,L,z),o(C,C)}}get parent(){return this._parent}get name(){return this._name}get(t){let r=this.getZoneWith(t);if(r)return r._properties[t]}getZoneWith(t){let r=this;for(;r;){if(r._properties.hasOwnProperty(t))return r;r=r._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,r){if(typeof t!="function")throw new Error("Expecting function got: "+t);let k=this._zoneDelegate.intercept(this,t,r),C=this;return function(){return C.runGuarded(k,this,arguments,r)}}run(t,r,k,C){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,t,r,k,C)}finally{U=U.parent}}runGuarded(t,r=null,k,C){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,t,r,k,C)}catch(Y){if(this._zoneDelegate.handleError(this,Y))throw Y}}finally{U=U.parent}}runTask(t,r,k){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(t.state===x&&(t.type===Q||t.type===w))return;let C=t.state!=m;C&&t._transitionTo(m,j),t.runCount++;let Y=ne;ne=t,U={parent:U,zone:this};try{t.type==w&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,r,k)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{t.state!==x&&t.state!==h&&(t.type==Q||t.data&&t.data.isPeriodic?C&&t._transitionTo(j,m):(t.runCount=0,this._updateTaskCount(t,-1),C&&t._transitionTo(x,m,x))),U=U.parent,ne=Y}}scheduleTask(t){if(t.zone&&t.zone!==this){let k=this;for(;k;){if(k===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);k=k.parent}}t._transitionTo(X,x);let r=[];t._zoneDelegates=r,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(k){throw t._transitionTo(h,X,x),this._zoneDelegate.handleError(this,k),k}return t._zoneDelegates===r&&this._updateTaskCount(t,1),t.state==X&&t._transitionTo(j,X),t}scheduleMicroTask(t,r,k,C){return this.scheduleTask(new p(I,t,r,k,C,void 0))}scheduleMacroTask(t,r,k,C,Y){return this.scheduleTask(new p(w,t,r,k,C,Y))}scheduleEventTask(t,r,k,C,Y){return this.scheduleTask(new p(Q,t,r,k,C,Y))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");t._transitionTo(G,j,m);try{this._zoneDelegate.cancelTask(this,t)}catch(r){throw t._transitionTo(h,G),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(t,-1),t._transitionTo(x,G),t.runCount=0,t}_updateTaskCount(t,r){let k=t._zoneDelegates;r==-1&&(t._zoneDelegates=null);for(let C=0;C<k.length;C++)k[C]._updateTaskCount(t.type,r)}}return L.__symbol__=a,L})(),P={name:"",onHasTask:(L,E,t,r)=>L.hasTask(t,r),onScheduleTask:(L,E,t,r)=>L.scheduleTask(t,r),onInvokeTask:(L,E,t,r,k,C)=>L.invokeTask(t,r,k,C),onCancelTask:(L,E,t,r)=>L.cancelTask(t,r)};class v{constructor(E,t,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=E,this._parentDelegate=t,this._forkZS=r&&(r&&r.onFork?r:t._forkZS),this._forkDlgt=r&&(r.onFork?t:t._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:t._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:t._interceptZS),this._interceptDlgt=r&&(r.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:t._invokeZS),this._invokeDlgt=r&&(r.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:t._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:t._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:t._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:t._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let k=r&&r.onHasTask,C=t&&t._hasTaskZS;(k||C)&&(this._hasTaskZS=k?r:P,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=E,r.onScheduleTask||(this._scheduleTaskZS=P,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=P,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=P,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(E,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,E,t):new d(E,t)}intercept(E,t,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,E,t,r):t}invoke(E,t,r,k,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,E,t,r,k,C):t.apply(r,k)}handleError(E,t){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,E,t):!0}scheduleTask(E,t){let r=t;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,E,t),r||(r=t);else if(t.scheduleFn)t.scheduleFn(t);else if(t.type==I)R(t);else throw new Error("Task is missing scheduleFn.");return r}invokeTask(E,t,r,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,E,t,r,k):t.callback.apply(r,k)}cancelTask(E,t){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,E,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");r=t.cancelFn(t)}return r}hasTask(E,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,E,t)}catch(r){this.handleError(E,r)}}_updateTaskCount(E,t){let r=this._taskCounts,k=r[E],C=r[E]=k+t;if(C<0)throw new Error("More tasks executed then were scheduled.");if(k==0||C==0){let Y={microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:E};this.hasTask(this.zone,Y)}}}class p{constructor(E,t,r,k,C,Y){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=E,this.source=t,this.data=k,this.scheduleFn=C,this.cancelFn=Y,!r)throw new Error("callback is not defined");this.callback=r;let l=this;E===Q&&k&&k.useG?this.invoke=p.invokeTask:this.invoke=function(){return p.invokeTask.call(e,l,this,arguments)}}static invokeTask(E,t,r){E||(E=this),ee++;try{return E.runCount++,E.zone.runTask(E,t,r)}finally{ee==1&&_(),ee--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,X)}_transitionTo(E,t,r){if(this._state===t||this._state===r)this._state=E,E==x&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${E}', expecting state '${t}'${r?" or '"+r+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId!="undefined"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let M=a("setTimeout"),Z=a("Promise"),N=a("then"),B=[],A=!1,K;function q(L){if(K||e[Z]&&(K=e[Z].resolve(0)),K){let E=K[N];E||(E=K.then),E.call(K,L)}else e[M](L,0)}function R(L){ee===0&&B.length===0&&q(_),L&&B.push(L)}function _(){if(!A){for(A=!0;B.length;){let L=B;B=[];for(let E=0;E<L.length;E++){let t=L[E];try{t.zone.runTask(t,null,null)}catch(r){z.onUnhandledError(r)}}}z.microtaskDrainDone(),A=!1}}let J={name:"NO ZONE"},x="notScheduled",X="scheduling",j="scheduled",m="running",G="canceling",h="unknown",I="microTask",w="macroTask",Q="eventTask",oe={},z={symbol:a,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:R,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:q},U={parent:null,zone:new d(null,null)},ne=null,ee=0;function W(){}return o("Zone","Zone"),e.Zone=d})(typeof window!="undefined"&&window||typeof self!="undefined"&&self||global);var me=Object.getOwnPropertyDescriptor,Ne=Object.defineProperty,Ie=Object.getPrototypeOf,it=Object.create,ct=Array.prototype.slice,Le="addEventListener",Me="removeEventListener",Se=Zone.__symbol__(Le),De=Zone.__symbol__(Me),ie="true",ce="false",pe=Zone.__symbol__("");function je(e,n){return Zone.current.wrap(e,n)}function Ae(e,n,i,o,c){return Zone.current.scheduleMacroTask(e,n,i,o,c)}var H=Zone.__symbol__,Pe=typeof window!="undefined",Te=Pe?window:void 0,$=Pe&&Te||typeof self=="object"&&self||global,at="removeAttribute";function He(e,n){for(let i=e.length-1;i>=0;i--)typeof e[i]=="function"&&(e[i]=je(e[i],n+"_"+i));return e}function lt(e,n){let i=e.constructor.name;for(let o=0;o<n.length;o++){let c=n[o],a=e[c];if(a){let y=me(e,c);if(!Ye(y))continue;e[c]=(d=>{let P=function(){return d.apply(this,He(arguments,i+"."+c))};return ae(P,d),P})(a)}}}function Ye(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set=="undefined"):!0}var $e=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope,we=!("nw"in $)&&typeof $.process!="undefined"&&{}.toString.call($.process)==="[object process]",xe=!we&&!$e&&!!(Pe&&Te.HTMLElement),Je=typeof $.process!="undefined"&&{}.toString.call($.process)==="[object process]"&&!$e&&!!(Pe&&Te.HTMLElement),be={},We=function(e){if(e=e||$.event,!e)return;let n=be[e.type];n||(n=be[e.type]=H("ON_PROPERTY"+e.type));let i=this||e.target||$,o=i[n],c;if(xe&&i===Te&&e.type==="error"){let a=e;c=o&&o.call(this,a.message,a.filename,a.lineno,a.colno,a.error),c===!0&&e.preventDefault()}else c=o&&o.apply(this,arguments),c!=null&&!c&&e.preventDefault();return c};function qe(e,n,i){let o=me(e,n);if(!o&&i&&me(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;let c=H("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete o.writable,delete o.value;let a=o.get,y=o.set,d=n.slice(2),P=be[d];P||(P=be[d]=H("ON_PROPERTY"+d)),o.set=function(v){let p=this;if(!p&&e===$&&(p=$),!p)return;typeof p[P]=="function"&&p.removeEventListener(d,We),y&&y.call(p,null),p[P]=v,typeof v=="function"&&p.addEventListener(d,We,!1)},o.get=function(){let v=this;if(!v&&e===$&&(v=$),!v)return null;let p=v[P];if(p)return p;if(a){let M=a.call(this);if(M)return o.set.call(this,M),typeof v[at]=="function"&&v.removeAttribute(n),M}return null},Ne(e,n,o),e[c]=!0}function Ke(e,n,i){if(n)for(let o=0;o<n.length;o++)qe(e,"on"+n[o],i);else{let o=[];for(let c in e)c.slice(0,2)=="on"&&o.push(c);for(let c=0;c<o.length;c++)qe(e,o[c],i)}}var re=H("originalInstance");function ge(e){let n=$[e];if(!n)return;$[H(e)]=n,$[e]=function(){let c=He(arguments,e);switch(c.length){case 0:this[re]=new n;break;case 1:this[re]=new n(c[0]);break;case 2:this[re]=new n(c[0],c[1]);break;case 3:this[re]=new n(c[0],c[1],c[2]);break;case 4:this[re]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},ae($[e],n);let i=new n(function(){}),o;for(o in i)e==="XMLHttpRequest"&&o==="responseBlob"||function(c){typeof i[c]=="function"?$[e].prototype[c]=function(){return this[re][c].apply(this[re],arguments)}:Ne($[e].prototype,c,{set:function(a){typeof a=="function"?(this[re][c]=je(a,e+"."+c),ae(this[re][c],a)):this[re][c]=a},get:function(){return this[re][c]}})}(o);for(o in n)o!=="prototype"&&n.hasOwnProperty(o)&&($[e][o]=n[o])}function le(e,n,i){let o=e;for(;o&&!o.hasOwnProperty(n);)o=Ie(o);!o&&e[n]&&(o=e);let c=H(n),a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))){a=o[c]=o[n];let y=o&&me(o,n);if(Ye(y)){let d=i(a,c,n);o[n]=function(){return d(this,arguments)},ae(o[n],a)}}return a}function ut(e,n,i){let o=null;function c(a){let y=a.data;return y.args[y.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(y.target,y.args),a}o=le(e,n,a=>function(y,d){let P=i(y,d);return P.cbIdx>=0&&typeof d[P.cbIdx]=="function"?Ae(P.name,d[P.cbIdx],P,c):a.apply(y,d)})}function ae(e,n){e[H("OriginalDelegate")]=n}var Xe=!1,Oe=!1;function ft(){try{let e=Te.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch(e){}return!1}function ht(){if(Xe)return Oe;Xe=!0;try{let e=Te.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Oe=!0)}catch(e){}return Oe}Zone.__load_patch("ZoneAwarePromise",(e,n,i)=>{let o=Object.getOwnPropertyDescriptor,c=Object.defineProperty;function a(l){if(l&&l.toString===Object.prototype.toString){let u=l.constructor&&l.constructor.name;return(u||"")+": "+JSON.stringify(l)}return l?l.toString():Object.prototype.toString.call(l)}let y=i.symbol,d=[],P=e[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]===!0,v=y("Promise"),p=y("then"),M="__creationTrace__";i.onUnhandledError=l=>{if(i.showUncaughtError()){let u=l&&l.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;d.length;){let l=d.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(u){N(u)}}};let Z=y("unhandledPromiseRejectionHandler");function N(l){i.onUnhandledError(l);try{let u=n[Z];typeof u=="function"&&u.call(this,l)}catch(u){}}function B(l){return l&&l.then}function A(l){return l}function K(l){return t.reject(l)}let q=y("state"),R=y("value"),_=y("finally"),J=y("parentPromiseValue"),x=y("parentPromiseState"),X="Promise.then",j=null,m=!0,G=!1,h=0;function I(l,u){return s=>{try{z(l,u,s)}catch(f){z(l,!1,f)}}}let w=function(){let l=!1;return function(s){return function(){l||(l=!0,s.apply(null,arguments))}}},Q="Promise resolved with itself",oe=y("currentTaskTrace");function z(l,u,s){let f=w();if(l===s)throw new TypeError(Q);if(l[q]===j){let g=null;try{(typeof s=="object"||typeof s=="function")&&(g=s&&s.then)}catch(b){return f(()=>{z(l,!1,b)})(),l}if(u!==G&&s instanceof t&&s.hasOwnProperty(q)&&s.hasOwnProperty(R)&&s[q]!==j)ne(s),z(l,s[q],s[R]);else if(u!==G&&typeof g=="function")try{g.call(s,f(I(l,u)),f(I(l,!1)))}catch(b){f(()=>{z(l,!1,b)})()}else{l[q]=u;let b=l[R];if(l[R]=s,l[_]===_&&u===m&&(l[q]=l[x],l[R]=l[J]),u===G&&s instanceof Error){let T=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];T&&c(s,oe,{configurable:!0,enumerable:!1,writable:!0,value:T})}for(let T=0;T<b.length;)ee(l,b[T++],b[T++],b[T++],b[T++]);if(b.length==0&&u==G){l[q]=h;let T=s;try{throw new Error("Uncaught (in promise): "+a(s)+(s&&s.stack?`
`+s.stack:""))}catch(S){T=S}P&&(T.throwOriginal=!0),T.rejection=s,T.promise=l,T.zone=n.current,T.task=n.currentTask,d.push(T),i.scheduleMicroTask()}}}return l}let U=y("rejectionHandledHandler");function ne(l){if(l[q]===h){try{let u=n[U];u&&typeof u=="function"&&u.call(this,{rejection:l[R],promise:l})}catch(u){}l[q]=G;for(let u=0;u<d.length;u++)l===d[u].promise&&d.splice(u,1)}}function ee(l,u,s,f,g){ne(l);let b=l[q],T=b?typeof f=="function"?f:A:typeof g=="function"?g:K;u.scheduleMicroTask(X,()=>{try{let S=l[R],D=!!s&&_===s[_];D&&(s[J]=S,s[x]=b);let O=u.run(T,void 0,D&&T!==K&&T!==A?[]:[S]);z(s,!0,O)}catch(S){z(s,!1,S)}},s)}let W="function ZoneAwarePromise() { [native code] }",L=function(){},E=e.AggregateError;class t{static toString(){return W}static resolve(u){return z(new this(null),m,u)}static reject(u){return z(new this(null),G,u)}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new E([],"All promises were rejected"));let s=[],f=0;try{for(let T of u)f++,s.push(t.resolve(T))}catch(T){return Promise.reject(new E([],"All promises were rejected"))}if(f===0)return Promise.reject(new E([],"All promises were rejected"));let g=!1,b=[];return new t((T,S)=>{for(let D=0;D<s.length;D++)s[D].then(O=>{g||(g=!0,T(O))},O=>{b.push(O),f--,f===0&&(g=!0,S(new E(b,"All promises were rejected")))})})}static race(u){let s,f,g=new this((S,D)=>{s=S,f=D});function b(S){s(S)}function T(S){f(S)}for(let S of u)B(S)||(S=this.resolve(S)),S.then(b,T);return g}static all(u){return t.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof t?this:t).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,g,b=new this((O,V)=>{f=O,g=V}),T=2,S=0,D=[];for(let O of u){B(O)||(O=this.resolve(O));let V=S;try{O.then(F=>{D[V]=s?s.thenCallback(F):F,T--,T===0&&f(D)},F=>{s?(D[V]=s.errorCallback(F),T--,T===0&&f(D)):g(F)})}catch(F){g(F)}T++,S++}return T-=2,T===0&&f(D),b}constructor(u){let s=this;if(!(s instanceof t))throw new Error("Must be an instanceof Promise.");s[q]=j,s[R]=[];try{let f=w();u&&u(f(I(s,m)),f(I(s,G)))}catch(f){z(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(u,s){var f;let g=(f=this.constructor)===null||f===void 0?void 0:f[Symbol.species];(!g||typeof g!="function")&&(g=this.constructor||t);let b=new g(L),T=n.current;return this[q]==j?this[R].push(T,b,u,s):ee(this,T,b,u,s),b}catch(u){return this.then(null,u)}finally(u){var s;let f=(s=this.constructor)===null||s===void 0?void 0:s[Symbol.species];(!f||typeof f!="function")&&(f=t);let g=new f(L);g[_]=_;let b=n.current;return this[q]==j?this[R].push(b,g,u,u):ee(this,b,g,u,u),g}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;let r=e[v]=e.Promise;e.Promise=t;let k=y("thenPatched");function C(l){let u=l.prototype,s=o(u,"then");if(s&&(s.writable===!1||!s.configurable))return;let f=u.then;u[p]=f,l.prototype.then=function(g,b){return new t((S,D)=>{f.call(this,S,D)}).then(g,b)},l[k]=!0}i.patchThen=C;function Y(l){return function(u,s){let f=l.apply(u,s);if(f instanceof t)return f;let g=f.constructor;return g[k]||C(g),f}}return r&&(C(r),le(e,"fetch",l=>Y(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,t});Zone.__load_patch("toString",e=>{let n=Function.prototype.toString,i=H("OriginalDelegate"),o=H("Promise"),c=H("Error"),a=function(){if(typeof this=="function"){let v=this[i];if(v)return typeof v=="function"?n.call(v):Object.prototype.toString.call(v);if(this===Promise){let p=e[o];if(p)return n.call(p)}if(this===Error){let p=e[c];if(p)return n.call(p)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;let y=Object.prototype.toString,d="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?d:y.call(this)}});var _e=!1;if(typeof window!="undefined")try{let e=Object.defineProperty({},"passive",{get:function(){_e=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){_e=!1}var dt={useG:!0},te={},Qe={},et=new RegExp("^"+pe+"(\\w+)(true|false)$"),tt=H("propagationStopped");function nt(e,n){let i=(n?n(e):e)+ce,o=(n?n(e):e)+ie,c=pe+i,a=pe+o;te[e]={},te[e][ce]=c,te[e][ie]=a}function _t(e,n,i,o){let c=o&&o.add||Le,a=o&&o.rm||Me,y=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",P=H(c),v="."+c+":",p="prependListener",M="."+p+":",Z=function(R,_,J){if(R.isRemoved)return;let x=R.callback;typeof x=="object"&&x.handleEvent&&(R.callback=m=>x.handleEvent(m),R.originalDelegate=x);let X;try{R.invoke(R,_,[J])}catch(m){X=m}let j=R.options;if(j&&typeof j=="object"&&j.once){let m=R.originalDelegate?R.originalDelegate:R.callback;_[a].call(_,J.type,m,j)}return X};function N(R,_,J){if(_=_||e.event,!_)return;let x=R||_.target||e,X=x[te[_.type][J?ie:ce]];if(X){let j=[];if(X.length===1){let m=Z(X[0],x,_);m&&j.push(m)}else{let m=X.slice();for(let G=0;G<m.length&&!(_&&_[tt]===!0);G++){let h=Z(m[G],x,_);h&&j.push(h)}}if(j.length===1)throw j[0];for(let m=0;m<j.length;m++){let G=j[m];n.nativeScheduleMicroTask(()=>{throw G})}}}let B=function(R){return N(this,R,!1)},A=function(R){return N(this,R,!0)};function K(R,_){if(!R)return!1;let J=!0;_&&_.useG!==void 0&&(J=_.useG);let x=_&&_.vh,X=!0;_&&_.chkDup!==void 0&&(X=_.chkDup);let j=!1;_&&_.rt!==void 0&&(j=_.rt);let m=R;for(;m&&!m.hasOwnProperty(c);)m=Ie(m);if(!m&&R[c]&&(m=R),!m||m[P])return!1;let G=_&&_.eventNameToString,h={},I=m[P]=m[c],w=m[H(a)]=m[a],Q=m[H(y)]=m[y],oe=m[H(d)]=m[d],z;_&&_.prepend&&(z=m[H(_.prepend)]=m[_.prepend]);function U(s,f){return!_e&&typeof s=="object"&&s?!!s.capture:!_e||!f?s:typeof s=="boolean"?{capture:s,passive:!0}:s?typeof s=="object"&&s.passive!==!1?Object.assign(Object.assign({},s),{passive:!0}):s:{passive:!0}}let ne=function(s){if(!h.isExisting)return I.call(h.target,h.eventName,h.capture?A:B,h.options)},ee=function(s){if(!s.isRemoved){let f=te[s.eventName],g;f&&(g=f[s.capture?ie:ce]);let b=g&&s.target[g];if(b){for(let T=0;T<b.length;T++)if(b[T]===s){b.splice(T,1),s.isRemoved=!0,b.length===0&&(s.allRemoved=!0,s.target[g]=null);break}}}if(!!s.allRemoved)return w.call(s.target,s.eventName,s.capture?A:B,s.options)},W=function(s){return I.call(h.target,h.eventName,s.invoke,h.options)},L=function(s){return z.call(h.target,h.eventName,s.invoke,h.options)},E=function(s){return w.call(s.target,s.eventName,s.invoke,s.options)},t=J?ne:W,r=J?ee:E,k=function(s,f){let g=typeof f;return g==="function"&&s.callback===f||g==="object"&&s.originalDelegate===f},C=_&&_.diff?_.diff:k,Y=Zone[H("UNPATCHED_EVENTS")],l=e[H("PASSIVE_EVENTS")],u=function(s,f,g,b,T=!1,S=!1){return function(){let D=this||e,O=arguments[0];_&&_.transferEventName&&(O=_.transferEventName(O));let V=arguments[1];if(!V)return s.apply(this,arguments);if(we&&O==="uncaughtException")return s.apply(this,arguments);let F=!1;if(typeof V!="function"){if(!V.handleEvent)return s.apply(this,arguments);F=!0}if(x&&!x(s,V,D,arguments))return;let ue=_e&&!!l&&l.indexOf(O)!==-1,se=U(arguments[2],ue);if(Y){for(let he=0;he<Y.length;he++)if(O===Y[he])return ue?s.call(D,O,V,se):s.apply(this,arguments)}let Re=se?typeof se=="boolean"?!0:se.capture:!1,Ge=se&&typeof se=="object"?se.once:!1,st=Zone.current,Ce=te[O];Ce||(nt(O,G),Ce=te[O]);let Ve=Ce[Re?ie:ce],de=D[Ve],Fe=!1;if(de){if(Fe=!0,X){for(let he=0;he<de.length;he++)if(C(de[he],V))return}}else de=D[Ve]=[];let ke,Be=D.constructor.name,Ue=Qe[Be];Ue&&(ke=Ue[O]),ke||(ke=Be+f+(G?G(O):O)),h.options=se,Ge&&(h.options.once=!1),h.target=D,h.capture=Re,h.eventName=O,h.isExisting=Fe;let ye=J?dt:void 0;ye&&(ye.taskData=h);let fe=st.scheduleEventTask(ke,V,ye,g,b);if(h.target=null,ye&&(ye.taskData=null),Ge&&(se.once=!0),!_e&&typeof fe.options=="boolean"||(fe.options=se),fe.target=D,fe.capture=Re,fe.eventName=O,F&&(fe.originalDelegate=V),S?de.unshift(fe):de.push(fe),T)return D}};return m[c]=u(I,v,t,r,j),z&&(m[p]=u(z,M,L,r,j,!0)),m[a]=function(){let s=this||e,f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));let g=arguments[2],b=g?typeof g=="boolean"?!0:g.capture:!1,T=arguments[1];if(!T)return w.apply(this,arguments);if(x&&!x(w,T,s,arguments))return;let S=te[f],D;S&&(D=S[b?ie:ce]);let O=D&&s[D];if(O)for(let V=0;V<O.length;V++){let F=O[V];if(C(F,T)){if(O.splice(V,1),F.isRemoved=!0,O.length===0&&(F.allRemoved=!0,s[D]=null,typeof f=="string")){let ue=pe+"ON_PROPERTY"+f;s[ue]=null}return F.zone.cancelTask(F),j?s:void 0}}return w.apply(this,arguments)},m[y]=function(){let s=this||e,f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));let g=[],b=rt(s,G?G(f):f);for(let T=0;T<b.length;T++){let S=b[T],D=S.originalDelegate?S.originalDelegate:S.callback;g.push(D)}return g},m[d]=function(){let s=this||e,f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));let g=te[f];if(g){let b=g[ce],T=g[ie],S=s[b],D=s[T];if(S){let O=S.slice();for(let V=0;V<O.length;V++){let F=O[V],ue=F.originalDelegate?F.originalDelegate:F.callback;this[a].call(this,f,ue,F.options)}}if(D){let O=D.slice();for(let V=0;V<O.length;V++){let F=O[V],ue=F.originalDelegate?F.originalDelegate:F.callback;this[a].call(this,f,ue,F.options)}}}}else{let g=Object.keys(s);for(let b=0;b<g.length;b++){let T=g[b],S=et.exec(T),D=S&&S[1];D&&D!=="removeListener"&&this[d].call(this,D)}this[d].call(this,"removeListener")}if(j)return this},ae(m[c],I),ae(m[a],w),oe&&ae(m[d],oe),Q&&ae(m[y],Q),!0}let q=[];for(let R=0;R<i.length;R++)q[R]=K(i[R],o);return q}function rt(e,n){if(!n){let a=[];for(let y in e){let d=et.exec(y),P=d&&d[1];if(P&&(!n||P===n)){let v=e[y];if(v)for(let p=0;p<v.length;p++)a.push(v[p])}}return a}let i=te[n];i||(nt(n),i=te[n]);let o=e[i[ce]],c=e[i[ie]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function Et(e,n){let i=e.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[tt]=!0,o&&o.apply(c,a)})}function Tt(e,n,i,o,c){let a=Zone.__symbol__(o);if(n[a])return;let y=n[a]=n[o];n[o]=function(d,P,v){return P&&P.prototype&&c.forEach(function(p){let M=`${i}.${o}::`+p,Z=P.prototype;try{if(Z.hasOwnProperty(p)){let N=e.ObjectGetOwnPropertyDescriptor(Z,p);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,M),e._redefineProperty(P.prototype,p,N)):Z[p]&&(Z[p]=e.wrapWithCurrentZone(Z[p],M))}else Z[p]&&(Z[p]=e.wrapWithCurrentZone(Z[p],M))}catch(N){}}),y.call(n,d,P,v)},e.attachOriginToPatched(n[o],y)}function ot(e,n,i){if(!i||i.length===0)return n;let o=i.filter(a=>a.target===e);if(!o||o.length===0)return n;let c=o[0].ignoreProperties;return n.filter(a=>c.indexOf(a)===-1)}function ze(e,n,i,o){if(!e)return;let c=ot(e,n,i);Ke(e,c,o)}function Ze(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}function yt(e,n){if(we&&!Je||Zone[e.symbol("patchEvents")])return;let i=n.__Zone_ignore_on_properties,o=[];if(xe){let c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let a=ft()?[{target:c,ignoreProperties:["error"]}]:[];ze(c,Ze(c),i&&i.concat(a),Ie(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){let a=n[o[c]];a&&a.prototype&&ze(a.prototype,Ze(a.prototype),i)}}Zone.__load_patch("util",(e,n,i)=>{let o=Ze(e);i.patchOnProperties=Ke,i.patchMethod=le,i.bindArguments=He,i.patchMacroTask=ut;let c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");e[a]&&(e[c]=e[a]),e[c]&&(n[c]=n[a]=e[c]),i.patchEventPrototype=Et,i.patchEventTarget=_t,i.isIEOrEdge=ht,i.ObjectDefineProperty=Ne,i.ObjectGetOwnPropertyDescriptor=me,i.ObjectCreate=it,i.ArraySlice=ct,i.patchClass=ge,i.wrapWithCurrentZone=je,i.filterProperties=ot,i.attachOriginToPatched=ae,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Tt,i.getGlobalObjects=()=>({globalSources:Qe,zoneSymbolEventNames:te,eventNames:o,isBrowser:xe,isMix:Je,isNode:we,TRUE_STR:ie,FALSE_STR:ce,ZONE_SYMBOL_PREFIX:pe,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:Me})});var ve=H("zoneTask");function Ee(e,n,i,o){let c=null,a=null;n+=o,i+=o;let y={};function d(v){let p=v.data;return p.args[0]=function(){return v.invoke.apply(this,arguments)},p.handleId=c.apply(e,p.args),v}function P(v){return a.call(e,v.data.handleId)}c=le(e,n,v=>function(p,M){if(typeof M[0]=="function"){let Z={isPeriodic:o==="Interval",delay:o==="Timeout"||o==="Interval"?M[1]||0:void 0,args:M},N=M[0];M[0]=function(){try{return N.apply(this,arguments)}finally{Z.isPeriodic||(typeof Z.handleId=="number"?delete y[Z.handleId]:Z.handleId&&(Z.handleId[ve]=null))}};let B=Ae(n,M[0],Z,d,P);if(!B)return B;let A=B.data.handleId;return typeof A=="number"?y[A]=B:A&&(A[ve]=B),A&&A.ref&&A.unref&&typeof A.ref=="function"&&typeof A.unref=="function"&&(B.ref=A.ref.bind(A),B.unref=A.unref.bind(A)),typeof A=="number"||A?A:B}else return v.apply(e,M)}),a=le(e,i,v=>function(p,M){let Z=M[0],N;typeof Z=="number"?N=y[Z]:(N=Z&&Z[ve],N||(N=Z)),N&&typeof N.type=="string"?N.state!=="notScheduled"&&(N.cancelFn&&N.data.isPeriodic||N.runCount===0)&&(typeof Z=="number"?delete y[Z]:Z&&(Z[ve]=null),N.zone.cancelTask(N)):v.apply(e,M)})}function mt(e,n){let{isBrowser:i,isMix:o}=n.getGlobalObjects();if(!i&&!o||!e.customElements||!("customElements"in e))return;let c=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"];n.patchCallbacks(n,e.customElements,"customElements","define",c)}function pt(e,n){if(Zone[n.symbol("patchEventTarget")])return;let{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:y}=n.getGlobalObjects();for(let P=0;P<i.length;P++){let v=i[P],p=v+a,M=v+c,Z=y+p,N=y+M;o[v]={},o[v][a]=Z,o[v][c]=N}let d=e.EventTarget;if(!(!d||!d.prototype))return n.patchEventTarget(e,n,[d&&d.prototype]),!0}function gt(e,n){n.patchEventPrototype(e,n)}Zone.__load_patch("legacy",e=>{let n=e[Zone.__symbol__("legacyPatch")];n&&n()});Zone.__load_patch("queueMicrotask",(e,n,i)=>{i.patchMethod(e,"queueMicrotask",o=>function(c,a){n.current.scheduleMicroTask("queueMicrotask",a[0])})});Zone.__load_patch("timers",e=>{let n="set",i="clear";Ee(e,n,i,"Timeout"),Ee(e,n,i,"Interval"),Ee(e,n,i,"Immediate")});Zone.__load_patch("requestAnimationFrame",e=>{Ee(e,"request","cancel","AnimationFrame"),Ee(e,"mozRequest","mozCancel","AnimationFrame"),Ee(e,"webkitRequest","webkitCancel","AnimationFrame")});Zone.__load_patch("blocking",(e,n)=>{let i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++){let c=i[o];le(e,c,(a,y,d)=>function(P,v){return n.current.run(a,e,v,d)})}});Zone.__load_patch("EventTarget",(e,n,i)=>{gt(e,i),pt(e,i);let o=e.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(e,i,[o.prototype])});Zone.__load_patch("MutationObserver",(e,n,i)=>{ge("MutationObserver"),ge("WebKitMutationObserver")});Zone.__load_patch("IntersectionObserver",(e,n,i)=>{ge("IntersectionObserver")});Zone.__load_patch("FileReader",(e,n,i)=>{ge("FileReader")});Zone.__load_patch("on_property",(e,n,i)=>{yt(i,e)});Zone.__load_patch("customElements",(e,n,i)=>{mt(e,i)});Zone.__load_patch("XHR",(e,n)=>{P(e);let i=H("xhrTask"),o=H("xhrSync"),c=H("xhrListener"),a=H("xhrScheduled"),y=H("xhrURL"),d=H("xhrErrorBeforeScheduled");function P(v){let p=v.XMLHttpRequest;if(!p)return;let M=p.prototype;function Z(h){return h[i]}let N=M[Se],B=M[De];if(!N){let h=v.XMLHttpRequestEventTarget;if(h){let I=h.prototype;N=I[Se],B=I[De]}}let A="readystatechange",K="scheduled";function q(h){let I=h.data,w=I.target;w[a]=!1,w[d]=!1;let Q=w[c];N||(N=w[Se],B=w[De]),Q&&B.call(w,A,Q);let oe=w[c]=()=>{if(w.readyState===w.DONE)if(!I.aborted&&w[a]&&h.state===K){let U=w[n.__symbol__("loadfalse")];if(w.status!==0&&U&&U.length>0){let ne=h.invoke;h.invoke=function(){let ee=w[n.__symbol__("loadfalse")];for(let W=0;W<ee.length;W++)ee[W]===h&&ee.splice(W,1);!I.aborted&&h.state===K&&ne.call(h)},U.push(h)}else h.invoke()}else!I.aborted&&w[a]===!1&&(w[d]=!0)};return N.call(w,A,oe),w[i]||(w[i]=h),m.apply(w,I.args),w[a]=!0,h}function R(){}function _(h){let I=h.data;return I.aborted=!0,G.apply(I.target,I.args)}let J=le(M,"open",()=>function(h,I){return h[o]=I[2]==!1,h[y]=I[1],J.apply(h,I)}),x="XMLHttpRequest.send",X=H("fetchTaskAborting"),j=H("fetchTaskScheduling"),m=le(M,"send",()=>function(h,I){if(n.current[j]===!0||h[o])return m.apply(h,I);{let w={target:h,url:h[y],isPeriodic:!1,args:I,aborted:!1},Q=Ae(x,R,w,q,_);h&&h[d]===!0&&!w.aborted&&Q.state===K&&Q.invoke()}}),G=le(M,"abort",()=>function(h,I){let w=Z(h);if(w&&typeof w.type=="string"){if(w.cancelFn==null||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(n.current[X]===!0)return G.apply(h,I)})}});Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&lt(e.navigator.geolocation,["getCurrentPosition","watchPosition"])});Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function i(o){return function(c){rt(e,o).forEach(y=>{let d=e.PromiseRejectionEvent;if(d){let P=new d(o,{promise:c.promise,reason:c.rejection});y.invoke(P)}})}}e.PromiseRejectionEvent&&(n[H("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[H("rejectionHandledHandler")]=i("rejectionhandled"))});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license Angular v14.2.0-next.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */
