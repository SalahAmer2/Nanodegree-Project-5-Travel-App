var Client=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){const n=(t,e,n)=>{const r=document.createElement("div");r.classList.add(t);const o=document.createElement("div");o.classList.add("entry-name"),o.innerHTML=e,r.appendChild(o);const i=document.createElement("div");return i.classList.add("entry-value"),i.innerHTML=n,r.appendChild(i),r};t.exports={createTrip:(t,e,r,o,i,a,c,u,s,l,d,p)=>{const h=document.createElement("div");h.classList.add("entryHolder"),h.setAttribute("id",p);const f=`<button class=deleteXbtn onclick=Client.deleteTrip("${p}") >X</button>`;h.innerHTML=f;const y=document.createElement("br");h.appendChild(y);const m=document.createElement("div");h.appendChild(m);const v=document.createElement("img");v.setAttribute("alt","City Photo"),v.src=t,m.appendChild(v);const g=n("date","Today's Date: ",e);h.appendChild(g);const w=n("country","Country of Destination: ",r);h.appendChild(w);const E=n("depDate","Departure date: ",o);h.appendChild(E);const L=n("retDate","Return date: ",i);h.appendChild(L);const b=n("daysLeft","Days left: ",a);h.appendChild(b);const x=n("weather","Weather Description: ",c);if(h.appendChild(x),d){const t=n("low_temp","Lowest Temperature Forecasted: ",u+"&#8451;");h.appendChild(t);const e=n("max_temp","Highest Temperature Forecasted: ",s+"&#8451;");h.appendChild(e)}else{const t=n("temp","Temperature: ",l+"&#8451;");h.appendChild(t)}return h}}},function(t,e){t.exports={timeDiff:(t,e,n)=>{const r=new Date(t),o=new Date(e),i=new Date(n),a=r.getTime(),c=o.getTime(),u=i.getTime();return c<a||c>=u?"Error: invalid dates":(c-a)/864e5}}},function(t,e,n){},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new b(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=w(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function l(){}function d(){}function p(){}var h={};h[o]=function(){return this};var f=Object.getPrototypeOf,y=f&&f(f(x([])));y&&y!==e&&n.call(y,o)&&(h=y);var m=p.prototype=l.prototype=Object.create(h);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=m.constructor=p,p.constructor=d,p[a]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},v(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new g(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(m),m[a]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e),n.d(e,"init",(function(){return u})),n.d(e,"deleteTrip",(function(){return c}));const{createTrip:r}=n(0),{timeDiff:o}=n(1),i=async(t="",e={})=>{const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{const t=await n.json();return console.log(t),t}catch(t){console.log("error",t)}},a=async t=>{const e=Object.values(t),n=document.getElementById("allEntryHolders");n.innerHTML="",e.forEach(t=>{n.appendChild(r(t.cityPhoto,t.date,t.country,t.depDate,t.retDate,t.daysLeft,t.weather,t.temp.low_temp,t.temp.max_temp,t.temp.temp,t.temp.trueOrFalse,t.tripId))}),$(".entryHolder")[0]?document.getElementById("to-display-or-not").style.display="block":document.getElementById("to-display-or-not").style.display="none",savetripBtn.textContent="Save trip"};function c(t){document.getElementById(t).classList.add("entryHolder-drop"),setTimeout(()=>{i("/deleteTrip",{tripId:t}).then(t=>{a(t)})},1e3)}const u=()=>{$(document).ready((function(){$(".exit").click(()=>{document.getElementById("pop-up-1").classList.add("pop-up-swing"),document.getElementById("pop-up-2").classList.add("pop-up-swing"),document.getElementById("pop-up-3").classList.add("pop-up-swing"),setTimeout(()=>{document.getElementById("pop-up-1").style.display="none",document.getElementById("pop-up-2").style.display="none",document.getElementById("pop-up-3").style.display="none"},1e3)})}));document.getElementById("savetripBtn").addEventListener("click",t=>{t.preventDefault();const e=document.getElementById("city").value,n=new Date,r=n.getMonth()+1+"/"+n.getDate()+"/"+n.getFullYear(),c=document.getElementById("departureDate").value,u=document.getElementById("returnDate").value,s=document.getElementById("pop-up-1"),l=document.getElementById("pop-up-2"),d=document.getElementById("pop-up-3");if(""===e||null===e||""===c||null===c||""===u||null===u)l.classList.remove("pop-up-swing"),l.style.display="block";else{const t=document.getElementById("savetripBtn");if("Error: invalid dates"===o(r,c,u))return s.classList.remove("pop-up-swing"),void(s.style.display="block");t.textContent="Fetching data. Please wait...",i("/postAndGetFunc",{baseURLGeo:"http://api.geonames.org/searchJSON?q=",baseURLWeatherCurrent:"https://api.weatherbit.io/v2.0/current?",baseURLWeatherForecast:"https://api.weatherbit.io/v2.0/forecast/daily?",baseURLPixabay:"https://pixabay.com/api/?",newDate:r,city:e,depDateFromUser:c,returnDateFromUser:u}).then(e=>{e?a(e):(t.textContent="Save trip",d.classList.remove("pop-up-swing"),d.style.display="block")})}})};n(2),n(3);window.addEventListener("DOMContentLoaded",u)}]);
//# sourceMappingURL=main.js.map