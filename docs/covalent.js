!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){i(1),t.exports=i(2)},function(t,e,i){t.exports=i.p+"covalent-theme.css"},function(t,e,i){"use strict";i.r(e),i.d(e,"CovalentActionRibbon",(function(){return Ct})),i.d(e,"CovalentAppShell",(function(){return St}));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,r=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function o(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):r(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=({finisher:t,descriptor:e})=>(i,n)=>{var r;if(void 0===n){const n=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(o.finisher=function(e){t(e,n)}),o}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(r,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function a(t,e){return s({descriptor:i=>{const n={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[e]&&(this[e]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const c=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),l=new Map;class h{constructor(t,e){if(this._$cssResult$=!0,e!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=l.get(this.cssText);return c&&void 0===t&&(l.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const m=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new h(i,d)},p=c?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new h("string"==typeof t?t:t+"",d))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var u;const v=window.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:b};class _ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(p(t))}else void 0!==t&&e.push(p(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,n=this.constructor.elementStyles,c?i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(t=>{const e=document.createElement("style"),n=window.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=t.cssText,i.appendChild(e)}),e;var i,n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=g){var n,r;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const s=(null!==(r=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==r?r:f.toAttribute)(e,i.type);this._$Ei=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(t,e){var i,n,r;const o=this.constructor,s=o._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=o.getPropertyOptions(s),a=t.converter,c=null!==(r=null!==(n=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==r?r:f.fromAttribute;this._$Ei=s,this[s]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||b)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,e)=>this[e]=t),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach((t,e)=>this._$Eg(e,this[e],t)),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:_}),(null!==(u=globalThis.reactiveElementVersions)&&void 0!==u?u:globalThis.reactiveElementVersions=[]).push("1.0.1");const x=globalThis.trustedTypes,$=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,A="?"+w,C=`<${A}>`,E=document,S=(t="")=>E.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,O=t=>{var e;return P(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,U=/>/g,N=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,H=/"/g,I=/^(?:script|style|textarea)$/i,z=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),j=z(1),F=(z(2),Symbol.for("lit-noChange")),D=Symbol.for("lit-nothing"),L=new WeakMap,V=E.createTreeWalker(E,129,null,!1),B=(t,e)=>{const i=t.length-1,n=[];let r,o=2===e?"<svg>":"",s=R;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,l=0;for(;l<i.length&&(s.lastIndex=l,c=s.exec(i),null!==c);)l=s.lastIndex,s===R?"!--"===c[1]?s=T:void 0!==c[1]?s=U:void 0!==c[2]?(I.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=N):void 0!==c[3]&&(s=N):s===N?">"===c[0]?(s=null!=r?r:R,d=-1):void 0===c[1]?d=-2:(d=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?N:'"'===c[3]?H:M):s===H||s===M?s=N:s===T||s===U?s=R:(s=N,r=void 0);const h=s===N&&t[e+1].startsWith("/>")?" ":"";o+=s===R?i+C:d>=0?(n.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+w+h):i+w+(-2===d?(n.push(void 0),e):h)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==$?$.createHTML(a):a,n]};class Y{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[c,d]=B(t,e);if(this.el=Y.createElement(c,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=V.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const i=d[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Z:"@"===e[1]?Q:K})}else a.push({type:6,index:r})}for(const e of t)n.removeAttribute(e)}if(I.test(n.tagName)){const t=n.textContent.split(w),e=t.length-1;if(e>0){n.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],S()),V.nextNode(),a.push({type:2,index:++r});n.append(t[e],S())}}}else if(8===n.nodeType)if(n.data===A)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(w,t+1));)a.push({type:7,index:r}),t+=w.length-1}r++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,n){var r,o,s,a;if(e===F)return e;let c=void 0!==n?null===(r=i._$Cl)||void 0===r?void 0:r[n]:i._$Cu;const d=k(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==d&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===d?c=void 0:(c=new d(t),c._$AT(t,i,n)),void 0!==n?(null!==(s=(a=i)._$Cl)&&void 0!==s?s:a._$Cl=[])[n]=c:i._$Cu=c),void 0!==c&&(e=q(t,c._$AS(t,e.values),c,n)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);V.currentNode=r;let o=V.nextNode(),s=0,a=0,c=n[0];for(;void 0!==c;){if(s===c.index){let e;2===c.type?e=new G(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new X(o,this,t)),this.v.push(e),c=n[++a]}s!==(null==c?void 0:c.index)&&(o=V.nextNode(),s++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,n){var r;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),k(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==F&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):O(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==D&&k(this._$AH)?this._$AA.nextSibling.data=t:this.S(E.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=Y.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new W(r,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new Y(t)),e}M(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new G(this.A(S()),this.A(S()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,n,r){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(void 0===r)t=q(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const n=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=q(this,n[i+s],e,s),a===F&&(a=this._$AH[s]),o||(o=!k(a)||a!==this._$AH[s]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!n&&this.k(t)}k(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends K{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===D?void 0:t}}class Z extends K{constructor(){super(...arguments),this.type=4}k(t){t&&t!==D?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Q extends K{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:D)===F)return;const n=this._$AH,r=t===D&&n!==D||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==D&&(n===D||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const tt=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et,it;null==tt||tt(Y,G),(null!==(y=globalThis.litHtmlVersions)&&void 0!==y?y:globalThis.litHtmlVersions=[]).push("2.0.1");class nt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,r;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let s=o._$litPart$;if(void 0===s){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new G(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return F}}nt.finalized=!0,nt._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt});(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.0.1"),
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");let ot=!1;const st=()=>{},at={get passive(){return ot=!0,!1}};document.addEventListener("x",st,at),document.removeEventListener("x",st);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ct extends nt{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var dt,lt=250,ht=300;!function(t){t[t.PRIMARY=0]="PRIMARY",t[t.SECONDARY=1]="SECONDARY",t[t.UNSPECIFIED=2]="UNSPECIFIED"}(dt||(dt={}));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var mt=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const{OPENING:pt,OPEN:ut,CLOSING:vt}={CLOSING:"mdc-banner--closing",OPEN:"mdc-banner--open",OPENING:"mdc-banner--opening"};class ft extends mt{constructor(t){super(Object.assign(Object.assign({},ft.defaultAdapter),t)),this.isOpened=!1,this.animationFrame=0,this.animationTimer=0}static get defaultAdapter(){return{addClass:()=>{},getContentHeight:()=>0,notifyClosed:()=>{},notifyClosing:()=>{},notifyOpened:()=>{},notifyOpening:()=>{},releaseFocus:()=>{},removeClass:()=>{},setStyleProperty:()=>{},trapFocus:()=>{}}}destroy(){cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0}open(){this.isOpened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(vt),this.adapter.addClass(pt);const t=this.adapter.getContentHeight();this.animationFrame=requestAnimationFrame(()=>{this.adapter.addClass(ut),this.adapter.setStyleProperty("height",t+"px"),this.animationTimer=setTimeout(()=>{this.handleAnimationTimerEnd(),this.adapter.trapFocus(),this.adapter.notifyOpened()},ht)})}close(t){this.isOpened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.isOpened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(vt),this.adapter.setStyleProperty("height","0"),this.adapter.removeClass(ut),this.adapter.removeClass(pt),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(()=>{this.adapter.releaseFocus(),this.handleAnimationTimerEnd(),this.adapter.notifyClosed(t)},lt))}isOpen(){return this.isOpened}handlePrimaryActionClick(){this.close(dt.PRIMARY)}handleSecondaryActionClick(){this.close(dt.SECONDARY)}layout(){const t=this.adapter.getContentHeight();console.log("he",t),this.adapter.setStyleProperty("height",t+"px")}handleAnimationTimerEnd(){this.animationTimer=0,this.adapter.removeClass(pt),this.adapter.removeClass(vt)}}var bt=ft;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _t=(yt=class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),t.type!==gt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(i=this.et)||void 0===i?void 0:i.has(t))&&this.st.add(t);return this.render(e)}const r=t.element.classList;this.st.forEach(t=>{t in e||(r.remove(t),this.st.delete(t))});for(const t in e){const i=!!e[t];i===this.st.has(t)||(null===(n=this.et)||void 0===n?void 0:n.has(t))||(i?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return F}},(...t)=>({_$litDirective$:yt,values:t}));var yt,xt=function(t,e,i,n){var r,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};class $t extends ct{constructor(){super(...arguments),this.mdcFoundationClass=bt,this.open=!1,this.labelText="",this.icon="",this.centered=!0,this.state="",this.reason=dt.UNSPECIFIED}render(){const t={"mdc-banner":!0,negative:"negative"===this.state,positive:"positive"===this.state,caution:"caution"===this.state,active:"active"===this.state,"mdc-banner--centered":this.centered};return j`
      <div class="${_t(t)}" role="banner">
      <div class="mdc-banner__content"
          role="alertdialog"
          aria-live="assertive">

        <div class="mdc-banner__graphic-text-wrapper">
          ${this.icon?this.renderIcon():""}
          <div class="mdc-banner__text">
            ${this.labelText}
          </div>
        </div>
        <div class="mdc-banner__actions">
            <slot name="action-items"></slot>
        </div>
      </div>
    </div>`}renderIcon(){return j`
    <div class="mdc-banner__graphic" role="img" alt="">
      <slot name="icon">
        <mwc-icon class="mdc-banner__icon">
        ${this.icon}
        </mwc-icon>        
      </slot>
    </div>`}createAdapter(){return Object.assign(Object.assign({},(t=this.mdcRoot,{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)})),{getContentHeight:()=>this.mdcContent.offsetHeight,setStyleProperty:(t,e)=>{this.mdcRoot.style.setProperty(t,e)},trapFocus:()=>{},releaseFocus:()=>{},notifyClosed:t=>{},notifyClosing:t=>{this.open=!1},notifyOpened:()=>{},notifyOpening:()=>{this.open=!0}});var t}show(){this.open=!0}close(t=dt.UNSPECIFIED){this.reason=t,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}}xt([a(".mdc-banner")],$t.prototype,"mdcRoot",void 0),xt([a(".mdc-banner__content")],$t.prototype,"mdcContent",void 0),xt([o({type:Boolean,reflect:!0}),(t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,i)=>e.constructor._observers.set(i,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)})}}e.constructor._observers.set(i,t)})((function(t){this.mdcFoundation&&(t?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=dt.UNSPECIFIED))}))],$t.prototype,"open",void 0),xt([o({type:String})],$t.prototype,"labelText",void 0),xt([o({type:String})],$t.prototype,"icon",void 0),xt([o({type:Boolean})],$t.prototype,"centered",void 0),xt([o()],$t.prototype,"state",void 0);var wt=m`.mdc-banner__graphic{color:#fff;color:var(--mdc-theme-surface,#fff)}.mdc-banner__graphic{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}.mdc-banner__content,.mdc-banner__fixed{min-width:344px}@media(max-width:480px),(max-width:344px){.mdc-banner__content,.mdc-banner__fixed{min-width:100%}}.mdc-banner__content{max-width:720px}.mdc-banner{z-index:1;border-bottom-style:solid;box-sizing:border-box;display:none;flex-shrink:0;height:0;position:relative;width:100%}@media(max-width:480px){.mdc-banner .mdc-banner__fixed{left:0;right:0}.mdc-banner .mdc-banner__text{margin-left:16px;margin-right:36px}.mdc-banner .mdc-banner__text[dir=rtl],[dir=rtl] .mdc-banner .mdc-banner__text{margin-left:36px;margin-right:16px}}@media(max-width:480px){.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__content{flex-wrap:wrap}.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__graphic{margin-bottom:12px}.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text{margin-left:16px;margin-right:8px;padding-bottom:4px}.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text[dir=rtl],[dir=rtl] .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text{margin-left:8px;margin-right:16px}.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__actions{margin-left:auto}}.mdc-banner--closing,.mdc-banner--open,.mdc-banner--opening{display:flex}.mdc-banner--open{transition:height .3s ease}.mdc-banner--open .mdc-banner__content{transition:transform .3s ease;transform:translateY(0)}.mdc-banner--closing{transition:height 250ms ease}.mdc-banner--closing .mdc-banner__content{transition:transform 250ms ease}.mdc-banner--centered .mdc-banner__content{left:0;margin-left:auto;margin-right:auto;right:0}.mdc-banner__fixed{border-bottom-style:solid;box-sizing:border-box;height:inherit;position:fixed;width:100%}.mdc-banner__content{display:flex;min-height:52px;position:absolute;transform:translateY(-100%);width:100%}.mdc-banner__graphic-text-wrapper{display:flex;width:100%}.mdc-banner__graphic{margin-left:16px;margin-right:0;flex-shrink:0;margin-top:16px;margin-bottom:16px;text-align:center}.mdc-banner__graphic[dir=rtl],[dir=rtl] .mdc-banner__graphic{margin-left:0;margin-right:16px}.mdc-banner__icon{position:relative;top:50%;transform:translateY(-50%)}.mdc-banner__text{margin-left:24px;margin-right:90px;align-self:center;flex-grow:1;padding-top:16px;padding-bottom:16px}.mdc-banner__text[dir=rtl],[dir=rtl] .mdc-banner__text{margin-left:90px;margin-right:24px}.mdc-banner__actions{padding-left:0;padding-right:8px;align-self:flex-end;display:flex;flex-shrink:0;padding-bottom:8px;padding-top:8px}.mdc-banner__actions[dir=rtl],[dir=rtl] .mdc-banner__actions{padding-left:8px;padding-right:0}.mdc-banner__secondary-action{margin-left:0;margin-right:8px}.mdc-banner__secondary-action[dir=rtl],[dir=rtl] .mdc-banner__secondary-action{margin-left:8px;margin-right:0}.mdc-banner{background-color:#fff;border-bottom-color:rgba(0,0,0,.12);border-bottom-width:1px;border-radius:0}.mdc-banner .mdc-banner__text{color:#000}.mdc-banner .mdc-banner__text{letter-spacing:.0178571429em;font-size:.875rem;font-family:Roboto,sans-serif;font-weight:400;line-height:1.25rem}.mdc-banner .mdc-banner__graphic{border-radius:50%}.mdc-banner .mdc-banner__graphic{height:40px;width:40px}.mdc-banner .mdc-banner__fixed{background-color:#fff}.mdc-banner .mdc-banner__fixed{border-bottom-color:rgba(0,0,0,.12)}.mdc-banner .mdc-banner__fixed{border-bottom-width:1px}.mdc-banner .mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-text-button-label-text-color,#6200ee)}.mdc-banner .mdc-button .mdc-button__ripple::after,.mdc-banner .mdc-button .mdc-button__ripple::before{background-color:#6200ee;background-color:var(--mdc-text-button-hover-state-layer-color,#6200ee)}.mdc-banner .mdc-button.mdc-ripple-surface--hover .mdc-button__ripple::before,.mdc-banner .mdc-button:hover .mdc-button__ripple::before{opacity:.04;opacity:var(--mdc-text-button-hover-state-layer-opacity,.04)}.mdc-banner .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-banner .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-text-button-focus-state-layer-opacity,.12)}.mdc-banner .mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-banner .mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.1;opacity:var(--mdc-text-button-pressed-state-layer-opacity,.1)}.mdc-banner .mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-text-button-pressed-state-layer-opacity, 0.1)}.mdc-banner__secondary-action{margin-left:0;margin-right:8px}.mdc-banner__secondary-action[dir=rtl],[dir=rtl] .mdc-banner__secondary-action{margin-left:8px;margin-right:0}.mdc-banner{background-color:var(--mdc-theme-surface);border-bottom-color:var(--mdc-theme-border);overflow:hidden}.mdc-banner .mdc-banner__content{max-width:inherit}.mdc-banner .mdc-banner__graphic,.mdc-banner .mdc-banner__text{--mdc-theme-primary:var(--mdc-theme-surface-neutral-highlight-hover);--mdc-theme-on-surface:var(--mdc-theme-text-icon-on-background);color:var(--mdc-theme-on-surface)}.mdc-banner .mdc-banner__text{--mdc-theme-on-surface:var(--mdc-theme-text-disabled-on-background);margin-left:16px}.mdc-banner.caution{--mdc-theme-surface:var(--mdc-theme-surface-caution-highlight)}.mdc-banner.caution .mdc-banner__graphic,.mdc-banner.caution .mdc-banner__text{--mdc-theme-primary:var(--mdc-theme-surface-caution-highlight-hover);--mdc-theme-on-surface:var(--mdc-theme-caution)}.mdc-banner.negative{--mdc-theme-surface:var(--mdc-theme-surface-negative-highlight)}.mdc-banner.negative .mdc-banner__graphic,.mdc-banner.negative .mdc-banner__text{--mdc-theme-primary:var(--mdc-theme-surface-negative-highlight-hover);--mdc-theme-on-surface:var(--mdc-theme-error)}.mdc-banner.active{--mdc-theme-surface:var(--mdc-theme-surface-secondary-highlight)}.mdc-banner.active .mdc-banner__graphic,.mdc-banner.active .mdc-banner__text{--mdc-theme-primary:var(--mdc-theme-surface-secondary-highlight-hover);--mdc-theme-on-surface:var(--mdc-theme-secondary)}.mdc-banner.positive{--mdc-theme-surface:var(--mdc-theme-surface-positive-highlight)}.mdc-banner.positive .mdc-banner__graphic,.mdc-banner.positive .mdc-banner__text{--mdc-theme-primary:var(--mdc-theme-surface-positive-highlight-hover);--mdc-theme-on-surface:var(--mdc-theme-positive)}::slotted(*){margin-left:8px}`,At=function(t,e,i,n){var r,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let Ct=class extends $t{};Ct.styles=[wt],Ct=At([n("td-action-ribbon")],Ct);var Et=function(t,e,i,n){var r,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let St=class extends nt{constructor(){super(),this.appName="",this.type="modal",this.navItems=[{label:"Vantage",icon:"teradata",iconCls:"covalent-icon"},{label:"Editor",icon:"product_editor",iconCls:"covalent-icon"},{label:"Sites",icon:"server",iconCls:"covalent-icon"},{label:"Data Protections",icon:"settings_backup_restore"},{label:"Identity",icon:"contacts"}],this.resizeEvent()}resizeEvent(){const t=window.matchMedia("(max-width: 800px)");t.matches&&"modal"!==this.type?(this.type="modal",this.requestUpdate()):t.matches||"dismissible"===this.type||(this.type="dismissible",this.requestUpdate())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",()=>{this.resizeEvent()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeEvent)}renderNavItem(t,e){return e?j`<mwc-list-item class="home-item" @click=${this._onClickItem} graphic="avatar">
                <span>${t.label}</span>
                <mwc-icon slot="graphic" class="covalent-icon" >teradata_nocircle</mwc-icon>
                <mwc-icon slot="graphic" class="home-icon">home</mwc-icon>
              </mwc-list-item>`:j`<mwc-list-item @click=${this._onClickItem} graphic="avatar">
                  <span>${t.label}</span>
                  <mwc-icon class="${t.iconCls}" slot="graphic">${t.icon}</mwc-icon>
              </mwc-list-item>`}render(){return j`
       <mwc-drawer id="drawer" type="${this.type}" @MDCDrawer:closed="${this._drawerClosed}">
     
        <div class="drawer-content">
            <mwc-top-app-bar-fixed id="drawer-app-bar" >
            <mwc-icon-button slot="navigationIcon" @click=${this._onClick} class="toggle-drawer" onClick="" icon="menu"></mwc-icon-button>
            <svg slot="title" class="logo-light" style="width:100px;" viewBox="0 0 696 133" fit=""  preserveAspectRatio="xMidYMid meet" focusable="false">
                <path class="logo-text" fill="#354145" d="M78.882 72.796h45.059c-3.178-11.966-12.153-17.201-22.063-17.201-9.348 0-20.005 5.609-22.996 17.201zm70.3 17.388H78.134c2.43 13.462 11.965 21.689 23.37 21.689 7.292 0 16.453-.936 23.185-12.34l22.062 4.673C138.524 123.652 121.884 133 101.504 133c-26.362 0-47.864-20.006-47.864-49.36s21.502-49.547 48.238-49.547c24.867 0 46.368 19.258 47.304 47.678v8.413zM387.843 83.64c0-17.201-13.275-28.045-26.549-28.045-14.958 0-26.176 10.844-26.176 28.045s11.218 27.858 26.176 27.858c13.274 0 26.549-10.657 26.549-27.858zm24.68 46.555h-24.68v-8.039c-7.479 6.918-17.762 10.844-30.85 10.844-23.745 0-45.807-20.006-45.807-49.36s22.062-49.547 45.807-49.547c13.088 0 23.371 3.926 30.85 10.844v-44h24.68v129.258zM630.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.892-4.488-15.892-11.406 0-6.356 5.234-10.656 13.088-10.656H630.3v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.536 0 15.893 4.107 15.893 13.455v1.497h-26.923c-23.559 0-37.021 11.966-37.021 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.615-31.627-39.451-32.127zM484.378 92.427c0 11.966-11.405 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.235-10.656 13.088-10.656h27.298v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.535 0 15.893 4.107 15.893 13.455v1.497h-26.924c-23.559 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.524 30.476 12.714 0 22.062-4.3 28.42-10.47v7.665h23.557V69.244c0-22.162-15.614-31.627-39.45-32.127zM279.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.236-10.656 13.089-10.656H279.3v1.121zm-15.892-55.31v-.024h-34.109v20.565h34.109c9.535 0 15.892 4.107 15.892 13.455v1.497h-26.924c-23.558 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.614-31.627-39.45-32.127zM216.11 37.026c-15.144 0-25.989 6.043-33.467 16.887V36.899h-24.68v93.298h24.68v-30.102c0-25.989 10.47-42.319 33.28-42.319h1.121V37.029a141.28 141.28 0 00-.934-.003"></path>
                <path class="logo-text" fill="#354145" d="M48.982 107.707c-3.753 1.408-7.691 2.295-10.654 2.295-8.226 0-13.648-4.86-13.648-16.079V57.09h25.302V36.898H24.68V14.007H0v81.786C0 121.408 14.584 133 36.646 133c7.792 0 15.233-1.662 24.835-6.801-5.117-5.076-9.814-11.399-12.499-18.492M558.509 109.788c-.988.138-1.923.214-2.776.214-8.226 0-13.648-4.86-13.648-16.079V57.09h25.983V36.898h-25.983V14.007h-24.681v81.786c0 25.615 14.584 37.207 36.647 37.207 5.389 0 10.251-.794 15.913-2.983-7.319-5.243-10.165-13.736-11.455-20.229"></path>
                <path class="logo-dot" fill="#e46c42" d="M695.029 116.028c0 8.825-6.772 15.596-16.212 15.596s-16.212-6.771-16.212-15.596c0-8.413 6.772-15.801 16.212-15.801s16.212 7.388 16.212 15.801"></path>
            </svg> 
            </mwc-top-app-bar-fixed>
            <mwc-list activatable>
              ${this.navItems.map(t=>this.renderNavItem(t,!1))}
            </mwc-list>

            <div style="display:flex; flex:1;"></div>
            <div divider></div>

            <slot name="user-menu"></slot>
        </div>
      
        <div slot="appContent" style="display: flex; flex-direction: row; height: 100%;">
        <navigation-rail>
            <mwc-icon-button @click=${this._onClick} class="toggle-drawer" onClick="" icon="menu"></mwc-icon-button>
            <mwc-list activatable>
            ${this.navItems.map(t=>this.renderNavItem(t,"teradata"===t.icon))}
            </mwc-list>
            <div style="display:flex; flex:1;"></div>

            <slot name="user-menu-rail"></slot>
        </navigation-rail>
        <div id="mini-menu-content" style="height:100%; overflow:auto">
           <slot name="mini-menu"></slot>
        </div>
        <div id="drawer-content" style="height:100%; overflow-x:auto; flex:1;">
            <mwc-top-app-bar-fixed centerTitle>
                <mwc-icon-button @click=${this._onClick} slot="navigationIcon" icon="menu"></mwc-icon-button>
                <span slot="title">${this.appName}</span>
            </mwc-top-app-bar-fixed>
            <div style="overflow:hidden;">
              <slot></slot>  
            </div>
            </div>
        </div>
    </mwc-drawer>`}_drawerClosed(){var t;null===(t=this.navigationRail)||void 0===t||t.classList.remove("drawer-open")}_onClick(){var t,e,i,n;this.drawer.open=!(null===(t=this.drawer)||void 0===t?void 0:t.open),(null===(e=this.drawer)||void 0===e?void 0:e.open)?null===(i=this.navigationRail)||void 0===i||i.classList.add("drawer-open"):null===(n=this.navigationRail)||void 0===n||n.classList.remove("drawer-open"),this.dispatchEvent(new CustomEvent("count-changed"))}_onClickItem(){this.dispatchEvent(new CustomEvent("navigation-item-click"))}};St.styles=m`
   :host {
      --mdc-typography-subtitle1-font-weight: 700;
      --mdc-typography-subtitle2-font-weight: 700;
   }

   .logo-text {
     fill: var(--covalent-theme-text-logo-on-background);
   }


   .covalent-icon {
        --mdc-icon-font: "covalent-icons";
    }
   mwc-drawer {
        --mdc-theme-surface: var(--mdc-theme-background);
        --mdc-typography-subtitle1-font-weight: 700;
        --mdc-typography-subtitle2-font-weight: 700;
        --mdc-list-vertical-padding: 0;
    }

    mwc-top-app-bar-fixed {
      /* Default width of drawer is 256px. See CSS Custom Properties below */
      --mdc-top-app-bar-width: calc(100vw);
    }

    .drawer-content {
      display:flex;
      flex-direction:column;
      height:100%;
    }

    #drawer-app-bar {
      --mdc-top-app-bar-width: 255px;

    }

    mwc-top-app-bar-fixed {
      --mdc-theme-primary: var(--mdc-theme-surface);
      --mdc-theme-on-primary: var(--mdc-theme-on-surface);
    }

    mwc-list-item {
        border-radius: 0 28px 28px 0;
        margin-right:16px;
        height: 48px;
    }

    mwc-list-item[activated] mwc-icon {
        --mdc-theme-text-icon-on-background: --mdc-theme-text-icon-on-primary;
    }

    .mdc-top-app-bar__title {
      padding-left:0;
    }

    #drawer-content mwc-top-app-bar-fixed {
        display:none;
    }

    .home-item {
        background-color: #f3753f;
        --mdc-ripple-color: #fff;
    }
    .home-item .covalent-icon {
        --mdc-list-item-graphic-size: 40px; 
        --mdc-icon-size: 40px;
        --mdc-theme-text-icon-on-background: #f3753f;
        --mdc-theme-text-icon-on-background: #fff;

        height: 40px;
    }

    .home-item .covalent-icon::after  {
        background: #fff;
        --mdc-theme-text-icon-on-background: #fff;
    }

    .home-item .home-icon {
        --mdc-theme-text-icon-on-background: #fff;
        --mdc-list-item-graphic-size: 35px;
        margin-left: 8px;
        margin-top: 4px;

    }
    .home-item mwc-icon {
        position: relative;
        border-radius: 100px;
    }

    .home-item .home-icon, .home-item:hover .covalent-icon {
        display:none;
    }

    .home-item:hover .home-icon {
        display:block;
    }

    html.dark .logo-light, .logo-dark { display:none; }
    html.dark .logo-dark { display:block; }

    navigation-rail {
        display:flex;
        overflow:auto;
        flex-direction: column;
        max-width: 71px;
        min-width: 71px;
        border-left: 1px solid transparent;
        text-align:center;
        height:100%;
        margin-left:0;

    }
    mwc-drawer:not([type="modal"]) navigation-rail.drawer-open {
        display:none;
    }
    navigation-rail mwc-list-item {
        border-radius: 100%;
        margin: 0 auto 8px;
        padding: 0;
        width: 48px;
    }

    navigation-rail .toggle-drawer {
      margin-top: 8px;
      margin-bottom: 8px;
    }

    navigation-rail mwc-list-item mwc-icon {
        margin-left: 8px
    }

    #mini-menu-content {
      width: 320px;
      height: 100%;
      margin-left: -1px;
      border-left: 1px solid;
      border-right: 1px solid;
      border-color: var(--mdc-theme-border, rgba(black, 0.12));
    }

    #mini-menu-content mwc-icon {
        background-color: gray;
        color: white;
    }

    @media only screen and (max-width: 800px) {
        #drawer-content mwc-top-app-bar-fixed {
            display:block;
        }
        navigation-rail, #mini-menu-content {
            display: none;
        }
    }
   `,Et([o()],St.prototype,"appName",void 0),Et([o()],St.prototype,"type",void 0),Et([o()],St.prototype,"navItems",void 0),Et([a("mwc-drawer")],St.prototype,"drawer",void 0),Et([a("navigation-rail")],St.prototype,"navigationRail",void 0),St=Et([n("td-app-shell")],St)}]);