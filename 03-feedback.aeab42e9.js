!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,f=setTimeout(T,t),s?y(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=p();if(j(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?y(e):(i=o=void 0,u)}function w(){var e=p(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(T,t),y(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=O(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var S,j=document.querySelector(".feedback-form"),T="feedback-form-state";(S=JSON.parse(localStorage.getItem(T)))?(j.email.value=S.email,j.message.value=S.message):(j.email.value="",j.message.value=""),j.addEventListener("input",e(t)((function(e){var t=e.target.elements,n=t.email,i=t.message,r={email:n.value,message:i.value};console.log(JSON.stringify(r)),localStorage.setItem(T,JSON.stringify(r))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(T))),localStorage.removeItem(T),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.aeab42e9.js.map
