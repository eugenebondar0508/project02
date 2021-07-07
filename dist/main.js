(()=>{"use strict";(e=>{let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds");function n(){let e=function(){let e=(new Date("21 july 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60),r=Math.floor(e/60/60);return e<=0&&(r="00",o="00",t="00"),{timeRemaining:e,hours:r,minutes:o,seconds:t}}();e.hours<10?t.textContent=("0"+e.hours).slice(-2):t.textContent=e.hours,e.minutes<10?o.textContent=("0"+e.minutes).slice(-2):o.textContent=e.minutes,e.seconds<10?r.textContent=("0"+e.seconds).slice(-2):r.textContent=e.seconds}setInterval((function(){n()}),1e3),n()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=(document.querySelector("body"),()=>{t.classList.toggle("active-menu")});e.addEventListener("click",o),t.addEventListener("click",(()=>{"A"===event.target.tagName&&o(event)}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),t.forEach((e=>{e.addEventListener("click",(()=>{let e=Date.now();if(document.documentElement.clientWidth>768){let t=setInterval((()=>{let r=Date.now()-e;o.style.top=r/5+"px",r>1e3&&clearInterval(t)}),20)}}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))})(),(()=>{const e=[document.querySelector('a[href*="service-block"]'),document.querySelector('a[href*="portfolio"]'),document.querySelector('a[href*="calc"]'),document.querySelector('a[href*="command"]'),document.querySelector('a[href*="connect"]')];for(let t of e)t.addEventListener("click",(e=>{e.preventDefault();const o=t.getAttribute("href");document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let r=e.target;r=r.closest(".service-header-tab"),r&&t.forEach(((e,n)=>{e===r&&(e=>{for(let r=0;r<o.length;r++)e===r?(t[r].classList.add("active"),o[r].classList.remove("d-none")):(t[r].classList.remove("active"),o[r].classList.add("d-none"))})(n)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content"));let o,r=document.querySelector(".portfolio-dots"),n=0;(()=>{for(let t=0;t<e.length;t++){let e=document.createElement("li");e.classList.add("dot"),r.append(e)}})();let a=document.querySelectorAll(".dot");a.forEach((()=>{a[0].classList.add("dot-active")}));const c=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{c(e,n,"portfolio-item-active"),c(a,n,"dot-active"),n++,n>=e.length&&(n=0),l(e,n,"portfolio-item-active"),l(a,n,"dot-active")},d=(e=3e3)=>{o=setInterval(s,e)};t.addEventListener("click",(t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(c(e,n,"portfolio-item-active"),c(a,n,"dot-active"),o.matches("#arrow-right")?n++:o.matches("#arrow-left")?n--:o.matches(".dot")&&a.forEach(((e,t)=>{e===o&&(n=t)})),n>=e.length&&(n=0),n<0&&(n=e.length-1),l(e,n,"portfolio-item-active"),l(a,n,"dot-active"))})),t.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(o)})),t.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&d()})),d(1500)})(),(()=>{let e,t=document.querySelector(".command");t.addEventListener("mouseover",(()=>{event.target.closest(".command__photo")&&(e=event.target.src,event.target.src=event.target.dataset.img)})),t.addEventListener("mouseout",(()=>{event.target.closest(".command__photo")&&(event.target.src=e)}))})(),(()=>{const e=document.querySelectorAll(".calc-item");function t(e){return e.replace(/\s+/g," ").replace(/^\s*/,"").replace(/\s*$/,"")}document.addEventListener("input",(()=>{event.target.matches(".form-name")||event.target.matches("#form2-name")?event.target.value=event.target.value.replace(/[^А-Яа-яЁё\ '']/g,"").toLowerCase():event.target.matches(".form-email")?event.target.value=event.target.value.replace(/([^A-Za-z\- _ @ . ! ~ * '])/g,""):event.target.matches(".form-phone")?event.target.value=event.target.value.replace(/[^0-9\+ ]/g,""):event.target.matches(".mess")&&(event.target.value=event.target.value.replace(/[^?!,.а-яА-ЯёЁ0-9\s]+$/g,""))})),document.addEventListener("blur",(()=>{event.target.matches(".form-name")||event.target.matches("#form2-name")?(event.target.value=t(event.target.value),event.target.value=event.target.value.replace(/(^|\s)\S/g,(function(e){return e.toUpperCase()}))):(event.target.matches(".form-email")||event.target.matches(".form-phone")||event.target.matches(".mess"))&&(event.target.value=t(event.target.value))}),!0),e.forEach((e=>{(e.matches(".calc-day")||e.matches(".calc-square")||e.matches(".calc-count"))&&e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")}))}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),n=document.querySelector(".calc-day"),a=document.getElementById("total"),c=document.querySelector(".calc-count");t.addEventListener("change",(t=>{const l=t.target;(l.matches(".calc-type")||l.matches(".calc-square")||l.matches(".calc-day")||l.matches(".calc-count"))&&(()=>{let t=0,l=1,s=1,d=o.options[o.selectedIndex].value,m=+r.value;c.value>1&&(l+=(c.value-1)/10),n.value&&n.value<5?s*=2:n.value&&n.value>5&&n.value<10&&(s*=1.5),d&&m&&(t=e*d*m*l*s),a.textContent=t})()}))})(100),(()=>{const e="Загрузка...",t=document.getElementById("form1"),o=document.getElementById("form2"),r=document.getElementById("form3"),n=document.getElementById("form1-email"),a=document.getElementById("form2-email"),c=document.getElementById("form3-email"),l=document.createElement("div");l.style.cssText="font-size: 2rem",document.addEventListener("submit",(d=>{if(d.preventDefault(),d.target.matches("form")){if(d.target.matches("#form1")){if(!n.value)return void(n.style.border="solid red");n.style.border="none",t.appendChild(l),l.textContent=e}else if(d.target.matches("#form2")){if(!a.value)return void(a.style.border="solid red");a.style.border="none",o.appendChild(l),l.textContent=e}else if(d.target.matches("#form3")){if(!c.value)return void(c.style.border="solid red");r.appendChild(l),l.textContent=e,c.style.border="none",l.style.color="white"}if(l.textContent=e,d.target.matches("form")){const e=new FormData(d.target);let t={};e.forEach(((e,o)=>{t[o]=e})),s(t).then((()=>{l.textContent="Спасибо! Мы скоро с вами свяжемся"})).catch((e=>{l.textContent="Что-то пошло не так... ",console.log(e)}))}}}));const s=e=>new Promise(((n,a)=>{const c=new XMLHttpRequest;c.addEventListener("readystatechange",(()=>{4===c.readyState&&(200===c.status?(n(),t.reset(),ы,o.reset(),r.reset()):(a(c.status),t.reset(),o.reset(),r.reset()))})),c.open("POST","./server.php"),c.setRequestHeader("Content-Type","application/json"),c.send(JSON.stringify(e))}))})()})();