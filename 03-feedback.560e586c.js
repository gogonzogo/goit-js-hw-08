function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(x,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function x(){var e=p();if(j(e))return T(e);u=setTimeout(x,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function T(e){return u=void 0,v&&o?b(e):(o=r=void 0,a)}function h(){var e=p(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(x,t),b(f)}return void 0===u&&(u=setTimeout(x,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},h.flush=function(){return void 0===u?a:T(p())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector("form"),email:document.querySelector("input"),message:document.querySelector("textarea")};b.form.addEventListener("input",e(t)((function(e){let t={input:`${b.email.value}`,textarea:`${b.message.value}`};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),b.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage),e.currentTarget.reset(),localStorage.clear()})),function(){const e=localStorage.getItem("feedback-form-state");if(null!==e){const t=JSON.parse(e);b.email.value=t.input,b.message.value=t.textarea}}();
//# sourceMappingURL=03-feedback.560e586c.js.map
