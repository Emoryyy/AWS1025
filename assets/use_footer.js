!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=20)}({20:function(e,t,o){e.exports=o("ycno")},ycno:function(e,t){for(var o=["/coin_ad_pay_info","/job_ad_pay_info","/job/create","edit/","/credit_card_payment","/payment_success"],r=!1,n=0;n<o.length;n++)if(location.pathname.includes(o[n])){r=!0;break}var c=document.querySelector(".simple_wrap-footer"),a=document.querySelector(".wrap-footer");r&&c?c.style.display="block":a&&(a.style.display="block")}});