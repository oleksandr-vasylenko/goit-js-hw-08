function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var r,o,i,a,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,f=setTimeout(j,t),c?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function j(){var e=v();if(T(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?d(n,i-(e-l)):n}(e))}function w(e){return f=void 0,g&&r?y(e):(r=o=void 0,a)}function O(){var e=v(),n=T(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=p(t)||0,b(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(p(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=o=f=void 0},O.flush=function(){return void 0===f?a:w(v())},O}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y={submit:document.querySelector(".feedback-form"),form:document.querySelector(".feedback-form")},h=JSON.parse(localStorage.getItem("feedback-form-state"))||{};y.submit.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=e.currentTarget.elements;if(""===t.value||""===n.value)return void alert("🚫 The form has not been submitted. Please make sure you filled in the email and the message fields");console.log("Form has been submitted!"),console.log(h),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.form.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),h&&(y.form.email.value=h.email||"",y.form.message.value=h.message||"");
//# sourceMappingURL=03-feedback.0f661b9c.js.map