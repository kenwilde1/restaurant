(()=>{"use strict";const e=((()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="nav-bar";const n=document.createElement("a");n.innerHTML="Home",n.id="home-tab";const c=document.createElement("a");c.innerHTML="Menu",c.id="menu-tab";const o=document.createElement("a");o.innerHTML="Contact",o.id="contact-tab",t.appendChild(n),t.appendChild(c),t.appendChild(o),e.appendChild(t)})(),()=>{(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("img");n.src="images/restaurant.jpeg",t.appendChild(n),e.appendChild(t)})(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h2"),c=document.createElement("p");n.innerHTML="Sophie's",c.innerHTML="Sophie’s is a beautiful and modern glasshouse restaurant, boasting stunning 360 degree views of Dublin, from cityscape to countryside, it has an outlook like no other – Dublin’s weather is our wallpaper!",t.appendChild(n),t.appendChild(c),e.appendChild(t)})()});(()=>{e();const t=document.querySelector("#content");document.querySelector("#nav-bar").querySelectorAll("a").forEach((n=>n.addEventListener("click",(c=>{switch((()=>{for(;t.childElementCount>1;)t.removeChild(t.lastChild)})(),n.id){case"home-tab":e();break;case"contact-tab":(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("form"),c=document.createElement("br");n.id="contact-form";const o=document.createElement("label");o.for="email",o.innerHTML="Email:";const a=document.createElement("input");a.type="text",a.name=o.for;const d=document.createElement("label");d.for="message",d.innerHTML="Message:";const r=document.createElement("textarea");r.setAttribute("form",n.id),n.appendChild(o),n.appendChild(a),n.appendChild(c),n.appendChild(d),n.appendChild(r),t.appendChild(n),e.appendChild(t),console.log(e)})();break;case"menu-tab":(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("li"),c=document.createElement("ul");c.innerHTML="<a href='https://sophies.ie/menus'> Menu </a>",n.appendChild(c),t.appendChild(n),e.appendChild(t)})()}})))),console.log(t)})()})();