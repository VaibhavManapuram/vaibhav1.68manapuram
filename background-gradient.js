(window.wpJsonpTemplateSections=window.wpJsonpTemplateSections||[]).push([[9],{152:function(t,e,n){"use strict";n(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function t(e,n){if(e===n)return!0;if(r(e)!==r(n)||"object"!==r(e)||null===e||null===n)return!1;var o=Object.keys(e),c=Object.keys(n);if(o.length!==c.length||o.find((function(t){return c.indexOf(t)<0})))return!1;for(var u in e)if(!t(e[u],n[u]))return!1;return!0};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){return t&&t.constructor&&"Object"===t.constructor.name}function i(t,e){return!t&&!e||Array.isArray(t)&&Array.isArray(e)||u(t)&&u(e)||"string"==typeof t&&"string"==typeof e||!isNaN(t)&&!isNaN(e)}function f(t){var e=t.newPointer,n=t.oldPointer,r=new Set;return e.forEach((function(t){n.includes(t)||r.add(t)})),Array.isArray(n)&&n.forEach((function(t){e.includes(t)||r.add(t)})),Array.from(r)}e.a=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if("object"!==c(e)||"object"!==c(n))throw new Error("".concat(t.name," parameters must be Arrays or Objects, received: ").concat(e," and ").concat(n));if(!o(e,n)){if(Array.isArray(e)&&Array.isArray(n))return f({newPointer:e,oldPointer:n});var a=Object.keys(e),s=a.map((function(c){var a=e[c],s=n[c];if(!i(a,s))return"".concat(r).concat(c);if(u(a)&&u(s))return t(a,s,"".concat(r).concat(c,"."));if(Array.isArray(a)){if(o(a,s))return null;var l=f({newPointer:a,oldPointer:s});return"".concat(r).concat(c,"[").concat(l,"]")}return o(a,s)?null:"".concat(r).concat(c)})).filter((function(t){return!!t})),l=f({newPointer:Object.keys(e),oldPointer:Object.keys(n)});return l.forEach((function(t){s.includes("".concat(r).concat(t))||s.push("".concat(r).concat(t))})),s.flat()}return[]}},181:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));n(0);var r=n(376),o=n(4),c=n(7),u=n(152);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){return"SITE_PALETTE_COLOR"===(null==t?void 0:t.type)?function(t,e){return e.find((function(e){return e.id===t}))}(t.sitePaletteColor.id,e).value:"CUSTOM_COLOR"===(null==t?void 0:t.type)?t.customColor:void 0}var l=n(35),p="squarespace-bgfx-prefer-paused";function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var u,i=t[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,c=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?S(t):e}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=[],_=["startColor","endColor","baseColor","backgroundColor","imageTint","patternColor"],C=new Map,E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(a,t);var e,n,o,i=O(a);function a(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),j(S(n=i.call(this)),"shouldCacheComponent",!1),j(S(n),"isDestroyed",!1),j(S(n),"onPauseButtonClick",(function(){var t;n.component.togglePaused(),(t=n.component.isPaused)?localStorage.setItem(p,t):localStorage.removeItem(p),n.component.isPaused&&P.forEach((function(t){t!==S(n)&&t.forcePaused()})),n.updateButtons()})),j(S(n),"getResolvedGenerativeContext",(function(t,e){var n,r,o=e?null==e||null===(n=e.colors)||void 0===n||null===(r=n.palette)||void 0===r?void 0:r.colors:window.__INITIAL_SQUARESPACE_7_1_SITE_PALETTE__;return function(t,e,n){for(var r={},o=0,c=Object.keys(t);o<c.length;o++){var u=c[o];e.includes(u)&&(r[u]=s(t[u],n))}return f(f({},t),r)}(t,_,o)})),j(S(n),"onSectionDataChange",(function(t){var e=t.styles;if(n.shouldCacheComponent=!1,"generative"!==e.backgroundMode)return!1;var r=e.generative,o=Object(u.a)(r,n.currentGenerative);if(n.currentGenerative=r,-1!==o.indexOf("type")||-1!==o.indexOf("customImageId"))return!1;if(n.shouldCacheComponent="none"!==r.type,o.length){var c=n.getResolvedGenerativeContext(r);n.component.setProps(c),n.updateButtons()}return n.component.refresh(),!0})),j(S(n),"destroy",(function(){n.isDestroyed||(n.isDestroyed=!0,n.playButton&&(n.pauseButton.removeEventListener("click",n.onPauseButtonClick),n.playButton.removeEventListener("click",n.onPauseButtonClick)),n.component&&(n.shouldCacheComponent?(C.set(n.sectionId,n.component),n.component.detach()):(C.delete(n.sectionId),n.component.destroy())),n.keepAlive=!1,Object(c.a)().then((function(t){t.disconnectBackground(n.sectionId,n.onSectionDataChange)})),"function"==typeof n.unsubscribeFromSiteAestheticValuesObserver&&n.unsubscribeFromSiteAestheticValuesObserver(),P.splice(P.indexOf(S(n)),1))})),n.section=t.closest("section");var r=n.section.dataset,o=r.sectionId,l=r.currentStyles;return n.sectionId=o,n.currentStyles=JSON.parse(l||{}),n.currentGenerative=n.currentStyles.generative||{},e?(n.initComponent(t,e),n.component.isSupported?(n.initButtons(),Object(c.a)().then((function(t){t.watchBackground(n.sectionId,n.onSectionDataChange)})),n.unsubscribeFromSiteAestheticValuesObserver=Object(c.b)().then((function(t){t.subscribe((function(t,e){if(t.colors.palette!==e.colors.palette){var r=n.getResolvedGenerativeContext(n.currentGenerative,t);n.component.setProps(r)}}))})),P.push(S(n)),n):g(n)):(Object(c.a)().then((function(t){t.watchBackground(n.sectionId,n.onSectionDataChange)})),g(n))}return e=a,(n=[{key:"initComponent",value:function(t,e){var n=t.querySelector(".background-fx-canvas"),o=this.getResolvedGenerativeContext(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({reduceMotion:l.b||!!localStorage.getItem(p),pixelRatio:Math.min(1.5,devicePixelRatio)},this.currentGenerative));if(C.has(this.sectionId))return this.component=C.get(this.sectionId),this.component.attach(n),this.component.setProps(o),void this.component.refresh();this.component=new r.a(e,n,o)}},{key:"initButtons",value:function(){var t=b(this.section.querySelectorAll(".background-pause-button"),2),e=t[0],n=t[1];this.pauseButton=e,this.playButton=n,this.pauseButton.addEventListener("click",this.onPauseButtonClick),this.playButton.addEventListener("click",this.onPauseButtonClick),this.updateButtons()}},{key:"forcePaused",value:function(){this.component.setPaused(!0),this.updateButtons()}},{key:"updateButtons",value:function(){var t=this.component,e=t.autoUpdate,n=t.isPaused,r=this.pauseButton===document.activeElement,o=this.playButton===document.activeElement,c=e&&!n,u=e&&n;this.pauseButton.classList.toggle("visible",c),this.playButton.classList.toggle("visible",u),r&&u?this.playButton.focus():o&&c&&this.pauseButton.focus()}}])&&m(e.prototype,n),o&&m(e,o),a}(o.a)},939:function(t,e,n){"use strict";n.r(e);n(0);var r=n(977);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,t);var e=u(n);function n(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e.call(this,t,r.a)}return n}(n(181).a);e.default=function(t){return new a(t)}},940:function(t,e,n){"use strict";n.r(e);n(0);var r=n(978);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,t);var e=u(n);function n(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e.call(this,t,r.a)}return n}(n(181).a);e.default=function(t){return new a(t)}},949:function(t,e,n){"use strict";n.r(e);n(0);var r=n(974);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,t);var e=u(n);function n(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e.call(this,t,r.a)}return n}(n(181).a);e.default=function(t){return new a(t)}},950:function(t,e,n){"use strict";n.r(e);n(0);var r=n(975);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,t);var e=u(n);function n(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e.call(this,t,r.a)}return n}(n(181).a);e.default=function(t){return new a(t)}}}]);