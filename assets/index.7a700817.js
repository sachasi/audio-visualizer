var Ce=Object.defineProperty;var $e=(e,t,n)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>($e(e,typeof t!="symbol"?t+"":t,n),n);const Se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Se();var E,u,_e,ie,S,le,Y,ce,U={},se=[],Pe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(e,t){for(var n in t)e[n]=t[n];return e}function ue(e){var t=e.parentNode;t&&t.removeChild(e)}function j(e,t,n){var o,i,r,l={};for(r in t)r=="key"?o=t[r]:r=="ref"?i=t[r]:l[r]=t[r];if(arguments.length>2&&(l.children=arguments.length>3?E.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return P(e,l,o,i,null)}function P(e,t,n,o,i){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++_e:i};return i==null&&u.vnode!=null&&u.vnode(r),r}function Ee(){return{current:null}}function H(e){return e.children}function C(e,t){this.props=e,this.context=t}function $(e,t){if(t==null)return e.__?$(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?$(e):null}function ae(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ae(e)}}function W(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!F.__r++||Y!==u.debounceRendering)&&((Y=u.debounceRendering)||le)(F)}function F(){for(var e;F.__r=S.length;)e=S.sort(function(t,n){return t.__v.__b-n.__v.__b}),S=[],e.some(function(t){var n,o,i,r,l,s;t.__d&&(l=(r=(n=t).__v).__e,(s=n.__P)&&(o=[],(i=x({},r)).__v=r.__v+1,R(s,r,i,n.__n,s.ownerSVGElement!==void 0,r.__h!=null?[l]:null,o,l==null?$(r):l,r.__h),me(o,r),r.__e!=l&&ae(r)))})}function fe(e,t,n,o,i,r,l,s,f,h){var _,p,a,c,d,A,m,v=o&&o.__k||se,b=v.length;for(n.__k=[],_=0;_<t.length;_++)if((c=n.__k[_]=(c=t[_])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?P(null,c,null,null,c):Array.isArray(c)?P(H,{children:c},null,null,null):c.__b>0?P(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(a=v[_])===null||a&&c.key==a.key&&c.type===a.type)v[_]=void 0;else for(p=0;p<b;p++){if((a=v[p])&&c.key==a.key&&c.type===a.type){v[p]=void 0;break}a=null}R(e,c,a=a||U,i,r,l,s,f,h),d=c.__e,(p=c.ref)&&a.ref!=p&&(m||(m=[]),a.ref&&m.push(a.ref,null,c),m.push(p,c.__c||d,c)),d!=null?(A==null&&(A=d),typeof c.type=="function"&&c.__k===a.__k?c.__d=f=de(c,f,e):f=pe(e,c,a,v,d,f),typeof n.type=="function"&&(n.__d=f)):f&&a.__e==f&&f.parentNode!=e&&(f=$(a))}for(n.__e=A,_=b;_--;)v[_]!=null&&(typeof n.type=="function"&&v[_].__e!=null&&v[_].__e==n.__d&&(n.__d=$(o,_+1)),ye(v[_],v[_]));if(m)for(_=0;_<m.length;_++)ve(m[_],m[++_],m[++_])}function de(e,t,n){for(var o,i=e.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=e,t=typeof o.type=="function"?de(o,t,n):pe(n,o,o,i,o.__e,t));return t}function he(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){he(n,t)}):t.push(e)),t}function pe(e,t,n,o,i,r){var l,s,f;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),l=null;else{for(s=r,f=0;(s=s.nextSibling)&&f<o.length;f+=2)if(s==i)break e;e.insertBefore(i,r),l=r}return l!==void 0?l:i.nextSibling}function He(e,t,n,o,i){var r;for(r in n)r==="children"||r==="key"||r in t||N(e,r,null,n[r],o);for(r in t)i&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||N(e,r,t[r],n[r],o)}function V(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Pe.test(t)?n:n+"px"}function N(e,t,n,o,i){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||V(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||V(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?K:G,r):e.removeEventListener(t,r?K:G,r);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function G(e){this.l[e.type+!1](u.event?u.event(e):e)}function K(e){this.l[e.type+!0](u.event?u.event(e):e)}function R(e,t,n,o,i,r,l,s,f){var h,_,p,a,c,d,A,m,v,b,T,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,s=t.__e=n.__e,t.__h=null,r=[s]),(h=u.__b)&&h(t);try{e:if(typeof k=="function"){if(m=t.props,v=(h=k.contextType)&&o[h.__c],b=h?v?v.props.value:h.__:o,n.__c?A=(_=t.__c=n.__c).__=_.__E:("prototype"in k&&k.prototype.render?t.__c=_=new k(m,b):(t.__c=_=new C(m,b),_.constructor=k,_.render=De),v&&v.sub(_),_.props=m,_.state||(_.state={}),_.context=b,_.__n=o,p=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),k.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=x({},_.__s)),x(_.__s,k.getDerivedStateFromProps(m,_.__s))),a=_.props,c=_.state,p)k.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(k.getDerivedStateFromProps==null&&m!==a&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(m,b),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(m,_.__s,b)===!1||t.__v===n.__v){_.props=m,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(D){D&&(D.__=t)}),_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(m,_.__s,b),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(a,c,d)})}_.context=b,_.props=m,_.state=_.__s,(h=u.__r)&&h(t),_.__d=!1,_.__v=t,_.__P=e,h=_.render(_.props,_.state,_.context),_.state=_.__s,_.getChildContext!=null&&(o=x(x({},o),_.getChildContext())),p||_.getSnapshotBeforeUpdate==null||(d=_.getSnapshotBeforeUpdate(a,c)),T=h!=null&&h.type===H&&h.key==null?h.props.children:h,fe(e,Array.isArray(T)?T:[T],t,n,o,i,r,l,s,f),_.base=t.__e,t.__h=null,_.__h.length&&l.push(_),A&&(_.__E=_.__=null),_.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Te(n.__e,t,n,o,i,r,l,f);(h=u.diffed)&&h(t)}catch(D){t.__v=null,(f||r!=null)&&(t.__e=s,t.__h=!!f,r[r.indexOf(s)]=null),u.__e(D,t,n)}}function me(e,t){u.__c&&u.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){u.__e(o,n.__v)}})}function Te(e,t,n,o,i,r,l,s){var f,h,_,p=n.props,a=t.props,c=t.type,d=0;if(c==="svg"&&(i=!0),r!=null){for(;d<r.length;d++)if((f=r[d])&&"setAttribute"in f==!!c&&(c?f.localName===c:f.nodeType===3)){e=f,r[d]=null;break}}if(e==null){if(c===null)return document.createTextNode(a);e=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,a.is&&a),r=null,s=!1}if(c===null)p===a||s&&e.data===a||(e.data=a);else{if(r=r&&E.call(e.childNodes),h=(p=n.props||U).dangerouslySetInnerHTML,_=a.dangerouslySetInnerHTML,!s){if(r!=null)for(p={},d=0;d<e.attributes.length;d++)p[e.attributes[d].name]=e.attributes[d].value;(_||h)&&(_&&(h&&_.__html==h.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(He(e,a,p,i,s),_)t.__k=[];else if(d=t.props.children,fe(e,Array.isArray(d)?d:[d],t,n,o,i&&c!=="foreignObject",r,l,r?r[0]:n.__k&&$(n,0),s),r!=null)for(d=r.length;d--;)r[d]!=null&&ue(r[d]);s||("value"in a&&(d=a.value)!==void 0&&(d!==e.value||c==="progress"&&!d||c==="option"&&d!==p.value)&&N(e,"value",d,p.value,!1),"checked"in a&&(d=a.checked)!==void 0&&d!==e.checked&&N(e,"checked",d,p.checked,!1))}return e}function ve(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){u.__e(o,n)}}function ye(e,t,n){var o,i;if(u.unmount&&u.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||ve(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){u.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&ye(o[i],t,typeof e.type!="function");n||e.__e==null||ue(e.__e),e.__e=e.__d=void 0}function De(e,t,n){return this.constructor(e,n)}function B(e,t,n){var o,i,r;u.__&&u.__(e,t),i=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],R(t,e=(!o&&n||t).__k=j(H,null,[e]),i||U,U,t.ownerSVGElement!==void 0,!o&&n?[n]:i?null:t.firstChild?E.call(t.childNodes):null,r,!o&&n?n:i?i.__e:t.firstChild,o),me(r,e)}function ge(e,t){B(e,t,ge)}function Me(e,t,n){var o,i,r,l=x({},e.props);for(r in t)r=="key"?o=t[r]:r=="ref"?i=t[r]:l[r]=t[r];return arguments.length>2&&(l.children=arguments.length>3?E.call(arguments,2):n),P(e.type,l,o||e.key,i||e.ref,null)}function Ue(e,t){var n={__c:t="__cC"+ce++,__:e,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(W)},this.sub=function(l){i.push(l);var s=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),s&&s.call(l)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}E=se.slice,u={__e:function(e,t,n,o){for(var i,r,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),l=i.__d),l)return i.__E=i}catch(s){e=s}throw e}},_e=0,ie=function(e){return e!=null&&e.constructor===void 0},C.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},n),this.props)),e&&x(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),W(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),W(this))},C.prototype.render=H,S=[],le=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F.__r=0,ce=0;var Fe=Object.freeze(Object.defineProperty({__proto__:null,render:B,hydrate:ge,createElement:j,h:j,Fragment:H,createRef:Ee,get isValidElement(){return ie},Component:C,cloneElement:Me,createContext:Ue,toChildArray:he,get options(){return u}},Symbol.toStringTag,{value:"Module"})),L,g,J,O=0,be=[],Q=u.__b,X=u.__r,Z=u.diffed,ee=u.__c,te=u.unmount;function z(e,t){u.__h&&u.__h(g,e,O||t),O=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Ne(e){return O=1,Oe(xe,e)}function Oe(e,t,n){var o=z(L++,2);return o.t=e,o.__c||(o.__=[n?n(t):xe(void 0,t),function(i){var r=o.t(o.__[0],i);o.__[0]!==r&&(o.__=[r,o.__[1]],o.__c.setState({}))}],o.__c=g),o.__}function Le(e,t){var n=z(L++,3);!u.__s&&ke(n.__H,t)&&(n.__=e,n.__H=t,g.__H.__h.push(n))}function je(e){return O=5,We(function(){return{current:e}},[])}function We(e,t){var n=z(L++,7);return ke(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function qe(){for(var e;e=be.shift();)if(e.__P)try{e.__H.__h.forEach(M),e.__H.__h.forEach(q),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){g=null,Q&&Q(e)},u.__r=function(e){X&&X(e),L=0;var t=(g=e.__c).__H;t&&(t.__h.forEach(M),t.__h.forEach(q),t.__h=[])},u.diffed=function(e){Z&&Z(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(be.push(t)!==1&&J===u.requestAnimationFrame||((J=u.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(r),ne&&cancelAnimationFrame(o),setTimeout(n)},r=setTimeout(i,100);ne&&(o=requestAnimationFrame(i))})(qe)),g=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(M),n.__h=n.__h.filter(function(o){return!o.__||q(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],u.__e(o,n.__v)}}),ee&&ee(e,t)},u.unmount=function(e){te&&te(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{M(o)}catch(i){t=i}}),t&&u.__e(t,n.__v))};var ne=typeof requestAnimationFrame=="function";function M(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function q(e){var t=g;e.__c=e.__(),g=t}function ke(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function xe(e,t){return typeof t=="function"?t(e):t}function Ie(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),t}var Re=Ie(Fe),Ae,we,re=Re,Be=0;function oe(e,t,n,o,i){var r,l,s={};for(l in t)l=="ref"?r=t[l]:s[l]=t[l];var f={type:e,props:s,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Be,__source:i,__self:o};if(typeof e=="function"&&(r=e.defaultProps))for(l in r)s[l]===void 0&&(s[l]=r[l]);return re.options.vnode&&re.options.vnode(f),f}we=oe,Ae=oe;const y=we,I=Ae;function ze({classes:e,audioData:t,width:n=300,height:o=300}){const i=je();return Le(()=>{const l=i.current,s=l.getContext("2d"),{height:f,width:h}=l,_=h/t.length;s.lineWidth=2,s.strokeStyle="#000000",s.clearRect(0,0,h,f),s.beginPath(),s.moveTo(0,f/2);let p=0;for(const a of t){const c=a/255*f;s.lineTo(p,c),p+=_}s.lineTo(p,f/2),s.stroke()}),y("canvas",{class:e,width:n,height:o,ref:i})}class Ye extends C{constructor(n){super(n);w(this,"audioContext");w(this,"analyser");w(this,"dataArray");w(this,"source");w(this,"rafId");this.state={audioData:new Uint8Array(0)},this.tick=this.tick.bind(this)}componentDidMount(){this.audioContext=new AudioContext,this.analyser=this.audioContext.createAnalyser(),this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaStreamSource(this.props.audio),this.source.connect(this.analyser),this.rafId=requestAnimationFrame(this.tick)}tick(){this.analyser.getByteTimeDomainData(this.dataArray),this.setState({audioData:this.dataArray}),this.rafId=requestAnimationFrame(this.tick)}componentWillUnmount(){cancelAnimationFrame(this.rafId),this.analyser.disconnect(),this.source.disconnect()}render(){return y(ze,{width:this.props.width,height:this.props.height,classes:this.props.classses,audioData:this.state.audioData})}}const Ve=({microphone:e,onClick:t})=>y("section",{children:y("button",{onClick:t,class:"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",children:e?"Stop microphone":"Get microphone input"})}),Ge=()=>{const t=new Date().getFullYear(),n=t===2022?2022:`${2022} - ${t}`;return I("footer",{children:[I("p",{children:["\xA9 ",n," Eliaz Bobadilla"]}),y("a",{className:"text-blue-900 underline",href:"https://github.com/UltiRequiem/audio-visualizer",children:"Source Code"})]})};function Ke(){const[e,t]=Ne(),n=async()=>{const r=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});t(r)},o=()=>{for(const r of e.getAudioTracks())r.stop();t(void 0)},i=()=>{e?o():n()};return I("main",{class:"bg-green-300 min-h-screen flex flex-col items-center p-6",children:[y("h1",{class:"text-3xl underline m-3",children:"Audio Visualizer"}),y(Ve,{onClick:i,microphone:e}),y("section",{class:"bg-blue-400 rounded-3xl m-2 min-h-[350px] min-w-[350px]",children:e&&y(Ye,{classses:"bg-green-500 m-5 rounded-3xl",width:310,height:310,audio:e})}),y("section",{class:"bg-green-400 p-4 rounded-xl m-1 text-center",children:y(Ge,{})})]})}B(y(Ke,{}),document.querySelector("#app"));