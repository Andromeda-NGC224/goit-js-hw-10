import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");n.disabled=!0;m(r,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),t[0]<=new Date?f.error({message:"Please, choose a date in the future!",position:"topRight"}):n.disabled=!1}});n.addEventListener("click",b);function b(){n.disabled=!0,r.disabled=!0;const t=setInterval(()=>{let e=new Date(r.value)-new Date;if(e<=0){clearInterval(t),n.disabled=!1,r.disabled=!1;return}const{days:o,hours:u,minutes:c,seconds:d}=D(e);q(o,u,c,d)},1e3)}function D(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:i,seconds:l}}function a(t){return String(t).padStart(2,"0")}function q(t,s,e,o){h.textContent=a(t),y.textContent=a(s),S.textContent=a(e),p.textContent=a(o)}
//# sourceMappingURL=commonHelpers.js.map