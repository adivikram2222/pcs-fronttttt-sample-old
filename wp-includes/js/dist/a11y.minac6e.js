/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.a11y=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="jncB")}({Y8OO:function(t,e){t.exports=window.wp.domReady},jncB:function(t,e,n){"use strict";n.r(e),n.d(e,"setup",(function(){return u})),n.d(e,"speak",(function(){return d}));var i=n("Y8OO"),o=n.n(i),r=n("l3Sj");function a(t="polite"){const e=document.createElement("div");e.id="a11y-speak-"+t,e.className="a11y-speak-region",e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("aria-live",t),e.setAttribute("aria-relevant","additions text"),e.setAttribute("aria-atomic","true");const{body:n}=document;return n&&n.appendChild(e),e}let p="";function u(){const t=document.getElementById("a11y-speak-intro-text"),e=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===t&&function(){const t=document.createElement("p");t.id="a11y-speak-intro-text",t.className="a11y-speak-intro-text",t.textContent=Object(r.__)("Notifications"),t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("hidden","hidden");const{body:e}=document;e&&e.appendChild(t)}(),null===e&&a("assertive"),null===n&&a("polite")}function d(t,e){!function(){const t=document.getElementsByClassName("a11y-speak-region"),e=document.getElementById("a11y-speak-intro-text");for(let e=0;e<t.length;e++)t[e].textContent="";e&&e.setAttribute("hidden","hidden")}(),t=function(t){return t=t.replace(/<[^<>]+>/g," "),p===t&&(t+=" "),p=t,t}(t);const n=document.getElementById("a11y-speak-intro-text"),i=document.getElementById("a11y-speak-assertive"),o=document.getElementById("a11y-speak-polite");i&&"assertive"===e?i.textContent=t:o&&(o.textContent=t),n&&n.removeAttribute("hidden")}o()(u)},l3Sj:function(t,e){t.exports=window.wp.i18n}});