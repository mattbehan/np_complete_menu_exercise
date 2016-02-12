/*!
 * Materialize v0.97.4 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
!function(){function t(t){return t.split("").reverse().join("")}function n(t,n,e){if((t[n]||t[e])&&t[n]===t[e])throw Error(n)}function e(n,e,r,i,o,a,s,u,c,l,f,d){s=d;var p,h=f="";return a&&(d=a(d)),"number"==typeof d&&isFinite(d)?(n&&0===parseFloat(d.toFixed(n))&&(d=0),0>d&&(p=!0,d=Math.abs(d)),n&&(a=Math.pow(10,n),d=(Math.round(d*a)/a).toFixed(n)),d=d.toString(),-1!==d.indexOf(".")&&(n=d.split("."),d=n[0],r&&(f=r+n[1])),e&&(d=t(d).match(/.{1,3}/g),d=t(d.join(t(e)))),p&&u&&(h+=u),i&&(h+=i),p&&c&&(h+=c),h=h+d+f,o&&(h+=o),l&&(h=l(h,s)),h):!1}function r(t,n,e,r,i,o,a,s,u,c,l,f){var d;return t="",l&&(f=l(f)),f&&"string"==typeof f?(s&&f.substring(0,s.length)===s&&(f=f.replace(s,""),d=!0),r&&f.substring(0,r.length)===r&&(f=f.replace(r,"")),u&&f.substring(0,u.length)===u&&(f=f.replace(u,""),d=!0),i&&f.slice(-1*i.length)===i&&(f=f.slice(0,-1*i.length)),n&&(f=f.split(n).join("")),e&&(f=f.replace(e,".")),d&&(t+="-"),t=Number((t+f).replace(/[^0-9\.\-.]/g,"")),a&&(t=a(t)),"number"==typeof t&&isFinite(t)?t:!1):!1}function i(t){var e,r,i,o={};for(e=0;e<s.length;e+=1)r=s[e],i=t[r],void 0===i?o[r]="negative"!==r||o.negativeBefore?"mark"===r&&"."!==o.thousand?".":!1:"-":"decimals"===r?i>0&&8>i&&(o[r]=i):"encoder"===r||"decoder"===r||"edit"===r||"undo"===r?"function"==typeof i&&(o[r]=i):"string"==typeof i&&(o[r]=i);return n(o,"mark","thousand"),n(o,"prefix","negative"),n(o,"prefix","negativeBefore"),o}function o(t,n,e){var r,i=[];for(r=0;r<s.length;r+=1)i.push(t[s[r]]);return i.push(e),n.apply("",i)}function a(t){return this instanceof a?void("object"==typeof t&&(t=i(t),this.to=function(n){return o(t,e,n)},this.from=function(n){return o(t,r,n)})):new a(t)}var s="decimals thousand mark prefix postfix encoder decoder negativeBefore negative edit undo".split(" ");window.wNumb=a}(),function(t){if("function"==typeof define&&define.amd)define([],t);else if("object"==typeof exports){var n=require("fs");module.exports=t(),module.exports.css=function(){return n.readFileSync(__dirname+"/nouislider.min.css","utf8")}}else window.noUiSlider=t()}(function(){"use strict";function t(t){return t.filter(function(t){return this[t]?!1:this[t]=!0},{})}function n(t,n){return Math.round(t/n)*n}function e(t){var n=t.getBoundingClientRect(),e=t.ownerDocument,r=e.defaultView||e.parentWindow,i=e.documentElement,o=r.pageXOffset;return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o=0),{top:n.top+r.pageYOffset-i.clientTop,left:n.left+o-i.clientLeft}}function r(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function i(t){var n=Math.pow(10,7);return Number((Math.round(t*n)/n).toFixed(7))}function o(t,n,e){c(t,n),setTimeout(function(){l(t,n)},e)}function a(t){return Math.max(Math.min(t,100),0)}function s(t){return Array.isArray(t)?t:[t]}function u(t){var n=t.split(".");return n.length>1?n[1].length:0}function c(t,n){t.classList?t.classList.add(n):t.className+=" "+n}function l(t,n){t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")}function f(t,n){t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className)}function d(t,n){return 100/(n-t)}function p(t,n){return 100*n/(t[1]-t[0])}function h(t,n){return p(t,t[0]<0?n+Math.abs(t[0]):n-t[0])}function m(t,n){return n*(t[1]-t[0])/100+t[0]}function g(t,n){for(var e=1;t>=n[e];)e+=1;return e}function v(t,n,e){if(e>=t.slice(-1)[0])return 100;var r,i,o,a,s=g(e,t);return r=t[s-1],i=t[s],o=n[s-1],a=n[s],o+h([r,i],e)/d(o,a)}function b(t,n,e){if(e>=100)return t.slice(-1)[0];var r,i,o,a,s=g(e,n);return r=t[s-1],i=t[s],o=n[s-1],a=n[s],m([r,i],(e-o)*d(o,a))}function w(t,e,r,i){if(100===i)return i;var o,a,s=g(i,t);return r?(o=t[s-1],a=t[s],i-o>(a-o)/2?a:o):e[s-1]?t[s-1]+n(i-t[s-1],e[s-1]):i}function x(t,n,e){var i;if("number"==typeof n&&(n=[n]),"[object Array]"!==Object.prototype.toString.call(n))throw new Error("noUiSlider: 'range' contains invalid value.");if(i="min"===t?0:"max"===t?100:parseFloat(t),!r(i)||!r(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");e.xPct.push(i),e.xVal.push(n[0]),i?e.xSteps.push(isNaN(n[1])?!1:n[1]):isNaN(n[1])||(e.xSteps[0]=n[1])}function y(t,n,e){return n?void(e.xSteps[t]=p([e.xVal[t],e.xVal[t+1]],n)/d(e.xPct[t],e.xPct[t+1])):!0}function S(t,n,e,r){this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=n,this.direction=e;var i,o=[];for(i in t)t.hasOwnProperty(i)&&o.push([t[i],i]);for(o.sort(function(t,n){return t[0]-n[0]}),i=0;i<o.length;i++)x(o[i][1],o[i][0],this);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)y(i,this.xNumSteps[i],this)}function E(t,n){if(!r(n))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=n}function U(t,n){if("object"!=typeof n||Array.isArray(n))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===n.min||void 0===n.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new S(n,t.snap,t.dir,t.singleStep)}function M(t,n){if(n=s(n),!Array.isArray(n)||!n.length||n.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=n.length,t.start=n}function N(t,n){if(t.snap=n,"boolean"!=typeof n)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function O(t,n){if(t.animate=n,"boolean"!=typeof n)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function P(t,n){if("lower"===n&&1===t.handles)t.connect=1;else if("upper"===n&&1===t.handles)t.connect=2;else if(n===!0&&2===t.handles)t.connect=3;else{if(n!==!1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");t.connect=0}}function L(t,n){switch(n){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function k(t,n){if(!r(n))throw new Error("noUiSlider: 'margin' option must be numeric.");if(t.margin=t.spectrum.getMargin(n),!t.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function j(t,n){if(!r(n))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(n),!t.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function F(t,n){switch(n){case"ltr":t.dir=0;break;case"rtl":t.dir=1,t.connect=[0,2,1,3][t.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function A(t,n){if("string"!=typeof n)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var e=n.indexOf("tap")>=0,r=n.indexOf("drag")>=0,i=n.indexOf("fixed")>=0,o=n.indexOf("snap")>=0;t.events={tap:e||o,drag:r,fixed:i,snap:o}}function V(t,n){if(t.format=n,"function"==typeof n.to&&"function"==typeof n.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function C(t){var n,e={margin:0,limit:0,animate:!0,format:$};n={step:{r:!1,t:E},start:{r:!0,t:M},connect:{r:!0,t:P},direction:{r:!0,t:F},snap:{r:!1,t:N},animate:{r:!1,t:O},range:{r:!0,t:U},orientation:{r:!1,t:L},margin:{r:!1,t:k},limit:{r:!1,t:j},behaviour:{r:!0,t:A},format:{r:!1,t:V}};var r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"};return Object.keys(r).forEach(function(n){void 0===t[n]&&(t[n]=r[n])}),Object.keys(n).forEach(function(r){var i=n[r];if(void 0===t[r]){if(i.r)throw new Error("noUiSlider: '"+r+"' is required.");return!0}i.t(e,t[r])}),e.pips=t.pips,e.style=e.ort?"top":"left",e}function T(t,n,e){var r=t+n[0],i=t+n[1];return e?(0>r&&(i+=Math.abs(r)),i>100&&(r-=i-100),[a(r),a(i)]):[r,i]}function B(t){t.preventDefault();var n,e,r=0===t.type.indexOf("touch"),i=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),a=t;return 0===t.type.indexOf("MSPointer")&&(o=!0),r&&(n=t.changedTouches[0].pageX,e=t.changedTouches[0].pageY),(i||o)&&(n=t.clientX+window.pageXOffset,e=t.clientY+window.pageYOffset),a.points=[n,e],a.cursor=i||o,a}function z(t,n){var e=document.createElement("div"),r=document.createElement("div"),i=["-lower","-upper"];return t&&i.reverse(),c(r,W[3]),c(r,W[3]+i[n]),c(e,W[2]),e.appendChild(r),e}function H(t,n,e){switch(t){case 1:c(n,W[7]),c(e[0],W[6]);break;case 3:c(e[1],W[6]);case 2:c(e[0],W[7]);case 0:c(n,W[6])}}function q(t,n,e){var r,i=[];for(r=0;t>r;r+=1)i.push(e.appendChild(z(n,r)));return i}function X(t,n,e){c(e,W[0]),c(e,W[8+t]),c(e,W[4+n]);var r=document.createElement("div");return c(r,W[1]),e.appendChild(r),r}function Y(n,r){function i(t,n,e){if("range"===t||"steps"===t)return z.xVal;if("count"===t){var r,i=100/(n-1),o=0;for(n=[];(r=o++*i)<=100;)n.push(r);t="positions"}return"positions"===t?n.map(function(t){return z.fromStepping(e?z.getStep(t):t)}):"values"===t?e?n.map(function(t){return z.fromStepping(z.getStep(z.toStepping(t)))}):n:void 0}function d(n,e,r){var i=z.direction,o={},a=z.xVal[0],s=z.xVal[z.xVal.length-1],u=!1,c=!1,l=0;return z.direction=0,r=t(r.slice().sort(function(t,n){return t-n})),r[0]!==a&&(r.unshift(a),u=!0),r[r.length-1]!==s&&(r.push(s),c=!0),r.forEach(function(t,i){var a,s,f,d,p,h,m,g,v,b,w=t,x=r[i+1];if("steps"===e&&(a=z.xNumSteps[i]),a||(a=x-w),w!==!1&&void 0!==x)for(s=w;x>=s;s+=a){for(d=z.toStepping(s),p=d-l,g=p/n,v=Math.round(g),b=p/v,f=1;v>=f;f+=1)h=l+f*b,o[h.toFixed(5)]=["x",0];m=r.indexOf(s)>-1?1:"steps"===e?2:0,!i&&u&&(m=0),s===x&&c||(o[d.toFixed(5)]=[s,m]),l=d}}),z.direction=i,o}function p(t,n,e){function i(t){return["-normal","-large","-sub"][t]}function o(t,n,e){return'class="'+n+" "+n+"-"+s+" "+n+i(e[1])+'" style="'+r.style+": "+t+'%"'}function a(t,r){z.direction&&(t=100-t),r[1]=r[1]&&n?n(r[0],r[1]):r[1],u.innerHTML+="<div "+o(t,"noUi-marker",r)+"></div>",r[1]&&(u.innerHTML+="<div "+o(t,"noUi-value",r)+">"+e.to(r[0])+"</div>")}var s=["horizontal","vertical"][r.ort],u=document.createElement("div");return c(u,"noUi-pips"),c(u,"noUi-pips-"+s),Object.keys(t).forEach(function(n){a(n,t[n])}),u}function h(t){var n=t.mode,e=t.density||1,r=t.filter||!1,o=t.values||!1,a=t.stepped||!1,s=i(n,o,a),u=d(e,n,s),c=t.format||{to:Math.round};return V.appendChild(p(u,r,c))}function m(){return F["offset"+["Width","Height"][r.ort]]}function g(t,n){void 0!==n&&(n=Math.abs(n-r.dir)),Object.keys(D).forEach(function(e){var r=e.split(".")[0];t===r&&D[e].forEach(function(t){t(s(O()),n,v(Array.prototype.slice.call(Y)))})})}function v(t){return 1===t.length?t[0]:r.dir?t.reverse():t}function b(t,n,e,i){var o=function(n){return V.hasAttribute("disabled")?!1:f(V,W[14])?!1:(n=B(n),t===R.start&&void 0!==n.buttons&&n.buttons>1?!1:(n.calcPoint=n.points[r.ort],void e(n,i)))},a=[];return t.split(" ").forEach(function(t){n.addEventListener(t,o,!1),a.push([t,o])}),a}function w(t,n){var e,r,i=n.handles||A,o=!1,a=100*(t.calcPoint-n.start)/m(),s=i[0]===A[0]?0:1;if(e=T(a,n.positions,i.length>1),o=U(i[0],e[s],1===i.length),i.length>1){if(o=U(i[1],e[s?0:1],!1)||o)for(r=0;r<n.handles.length;r++)g("slide",r)}else o&&g("slide",s)}function x(t,n){var e=F.getElementsByClassName(W[15]),r=n.handles[0]===A[0]?0:1;e.length&&l(e[0],W[15]),t.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener));var i=document.documentElement;i.noUiListeners.forEach(function(t){i.removeEventListener(t[0],t[1])}),l(V,W[12]),g("set",r),g("change",r)}function y(t,n){var e=document.documentElement;if(1===n.handles.length&&(c(n.handles[0].children[0],W[15]),n.handles[0].hasAttribute("disabled")))return!1;t.stopPropagation();var r=b(R.move,e,w,{start:t.calcPoint,handles:n.handles,positions:[C[0],C[A.length-1]]}),i=b(R.end,e,x,{handles:n.handles});if(e.noUiListeners=r.concat(i),t.cursor){document.body.style.cursor=getComputedStyle(t.target).cursor,A.length>1&&c(V,W[12]);var o=function(){return!1};document.body.noUiListener=o,document.body.addEventListener("selectstart",o,!1)}}function S(t){var n,i,a=t.calcPoint,s=0;return t.stopPropagation(),A.forEach(function(t){s+=e(t)[r.style]}),n=s/2>a||1===A.length?0:1,a-=e(F)[r.style],i=100*a/m(),r.events.snap||o(V,W[14],300),A[n].hasAttribute("disabled")?!1:(U(A[n],i),g("slide",n),g("set",n),g("change",n),void(r.events.snap&&y(t,{handles:[A[s]]})))}function E(t){var n,e;if(!t.fixed)for(n=0;n<A.length;n+=1)b(R.start,A[n].children[0],y,{handles:[A[n]]});t.tap&&b(R.start,F,S,{handles:A}),t.drag&&(e=[F.getElementsByClassName(W[7])[0]],c(e[0],W[10]),t.fixed&&e.push(A[e[0]===A[0]?1:0].children[0]),e.forEach(function(t){b(R.start,t,y,{handles:A})}))}function U(t,n,e){var i=t!==A[0]?1:0,o=C[0]+r.margin,s=C[1]-r.margin,u=C[0]+r.limit,f=C[1]-r.limit;return A.length>1&&(n=i?Math.max(n,o):Math.min(n,s)),e!==!1&&r.limit&&A.length>1&&(n=i?Math.min(n,u):Math.max(n,f)),n=z.getStep(n),n=a(parseFloat(n.toFixed(7))),n===C[i]?!1:(t.style[r.style]=n+"%",t.previousSibling||(l(t,W[17]),n>50&&c(t,W[17])),C[i]=n,Y[i]=z.fromStepping(n),g("update",i),!0)}function M(t,n){var e,i,o;for(r.limit&&(t+=1),e=0;t>e;e+=1)i=e%2,o=n[i],null!==o&&o!==!1&&("number"==typeof o&&(o=String(o)),o=r.format.from(o),(o===!1||isNaN(o)||U(A[i],z.toStepping(o),e===3-r.dir)===!1)&&g("update",i))}function N(t){var n,e,i=s(t);for(r.dir&&r.handles>1&&i.reverse(),r.animate&&-1!==C[0]&&o(V,W[14],300),n=A.length>1?3:1,1===i.length&&(n=1),M(n,i),e=0;e<A.length;e++)g("set",e)}function O(){var t,n=[];for(t=0;t<r.handles;t+=1)n[t]=r.format.to(Y[t]);return v(n)}function P(){W.forEach(function(t){t&&l(V,t)}),V.innerHTML="",delete V.noUiSlider}function L(){var t=C.map(function(t,n){var e=z.getApplicableStep(t),r=u(String(e[2])),i=Y[n],o=100===t?null:e[2],a=Number((i-e[2]).toFixed(r)),s=0===t?null:a>=e[1]?e[2]:e[0]||!1;return[s,o]});return v(t)}function k(t,n){D[t]=D[t]||[],D[t].push(n),"update"===t.split(".")[0]&&A.forEach(function(t,n){g("update",n)})}function j(t){var n=t.split(".")[0],e=t.substring(n.length);Object.keys(D).forEach(function(t){var r=t.split(".")[0],i=t.substring(r.length);n&&n!==r||e&&e!==i||delete D[t]})}var F,A,V=n,C=[-1,-1],z=r.spectrum,Y=[],D={};if(V.noUiSlider)throw new Error("Slider was already initialized.");return F=X(r.dir,r.ort,V),A=q(r.handles,r.dir,F),H(r.connect,V,A),E(r.events),r.pips&&h(r.pips),{destroy:P,steps:L,on:k,off:j,get:O,set:N}}function D(t,n){if(!t.nodeName)throw new Error("noUiSlider.create requires a single element.");var e=C(n,t),r=Y(t,e);if(r.set(e.start),t.noUiSlider=r,n.tooltips===!0||void 0===n.tooltips){for(var i=t.getElementsByClassName("noUi-handle"),o=[],a=0;a<i.length;a++)o[a]=document.createElement("div"),i[a].appendChild(o[a]),o[a].className+="range-label",o[a].innerHTML="<span></span>",o[a]=o[a].getElementsByTagName("span")[0];t.noUiSlider.on("update",function(t,n){o[n].innerHTML=t[n]})}}var R=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},W=["noUi-target","noUi-base","noUi-origin","noUi-handle","noUi-horizontal","noUi-vertical","noUi-background","noUi-connect","noUi-ltr","noUi-rtl","noUi-dragable","","noUi-state-drag","","noUi-state-tap","noUi-active","","noUi-stacking"];S.prototype.getMargin=function(t){return 2===this.xPct.length?p(this.xVal,t):!1},S.prototype.toStepping=function(t){return t=v(this.xVal,this.xPct,t),this.direction&&(t=100-t),t},S.prototype.fromStepping=function(t){return this.direction&&(t=100-t),i(b(this.xVal,this.xPct,t))},S.prototype.getStep=function(t){return this.direction&&(t=100-t),t=w(this.xPct,this.xSteps,this.snap,t),this.direction&&(t=100-t),t},S.prototype.getApplicableStep=function(t){var n=g(t,this.xPct),e=100===t?2:1;return[this.xNumSteps[n-2],this.xVal[n-e],this.xNumSteps[n-e]]},S.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var $={to:function(t){return t.toFixed(2)},from:Number};return{create:D}});