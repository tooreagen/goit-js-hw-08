function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,i,r,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function O(e){return l=e,f=setTimeout(j,t),c?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function j(){var e=g();if(S(e))return T(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,r-(e-l)):n}(e))}function T(e){return f=void 0,v&&o?y(e):(o=i=void 0,a)}function h(){var e=g(),n=S(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return O(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},h.flush=function(){return void 0===f?a:T(g())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})},console.log(100);const y=document.querySelector(".feedback-form");!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e?(y.email.value=e.email,y.message.value=e.message,console.log(e)):(y.email.value="",y.message.value="")}(),y.addEventListener("input",(e=>{const{elements:{email:t,message:n}}=e.currentTarget,o={email:t.value,message:n.value};console.log(JSON.stringify(o)),localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500),e(t)(y.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),y.reset()})),1e3);
//# sourceMappingURL=03-feedback.c522d050.js.map
