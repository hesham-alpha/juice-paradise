const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./shell-PN3sp6ph.js","./shell-VfJiyEuO.css"])))=>i.map(i=>d[i]);
import{g as $,S as R,i as G,B as C,b as U,L as M,C as N,c as V,e as D,a as W,f as F,h as O,k as X,l as Y,F as T,m as h,P as v,p as K,u as Q,d as z,q as J}from"./shell-PN3sp6ph.js";import{s as Z,c as tt}from"./ui-Bv-ay5QI.js";const et="modulepreload",at=function(e,t){return new URL(e,t).href},B={},st=function(t,s,r){let b=Promise.resolve();if(s&&s.length>0){const p=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),w=c?.nonce||c?.getAttribute("nonce");b=Promise.allSettled(s.map(u=>{if(u=at(u,r),u in B)return;B[u]=!0;const a=u.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!r)for(let y=p.length-1;y>=0;y--){const g=p[y];if(g.href===u&&(!a||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${i}`))return;const n=document.createElement("link");if(n.rel=a?"stylesheet":et,a||(n.as="script"),n.crossOrigin="",n.href=u,w&&n.setAttribute("nonce",w),document.head.appendChild(n),a)return new Promise((y,g)=>{n.addEventListener("load",y),n.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function d(p){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=p,window.dispatchEvent(c),!c.defaultPrevented)throw p}return b.then(p=>{for(const c of p||[])c.status==="rejected"&&d(c.reason);return t().catch(d)})};$.registerPlugin(R);const l=(e,t=document)=>t.querySelector(e),x=window.matchMedia("(prefers-reduced-motion: reduce)").matches;G("shop");document.title="Shop | "+C.name;U({...N,links:M});const L=N.shop;let S="all";const A=l("[data-filters]");A.innerHTML=L.filters.map(([e,t])=>`<button type="button" role="tab" class="flt" data-f="${e}" aria-selected="${e==="all"}">${t}</button>`).join("");const E=l("[data-grid]");function it(e,t){return`<article class="ptile" data-kind="${e.id}" style="--c:${e.bg};--cf:${e.fg}">
    <a class="ptile-link" href="#${e.id}" aria-label="${e.name}: details"></a>
    <div class="ptile-stage"><span class="num" aria-hidden="true">0${t+1}</span><div class="card-bottle"><img src="./media/bottle-${e.id}.webp" alt="${e.name} bottle" loading="lazy" decoding="async"></div></div>
    <div class="ptile-info"><div><h3>${e.name}</h3><p>${e.notes}</p></div>
      <div class="card-row"><span class="price">${h(v.single)}<small> / 330 ml</small></span><button type="button" class="pill add" data-add="${e.id}">Add to cart</button></div></div>
  </article>`}function nt(e){const t=Z(e.mix);return`<article class="ptile box" data-kind="boxes">
    <div class="ptile-stage box-stage">${tt(t,6)}</div>
    <div class="ptile-info"><div><h3>${e.name}</h3><p>${e.note}</p></div>
      <div class="card-row"><span class="price">${h(v.pack6)}<small> / 6 × 330 ml</small></span><button type="button" class="pill add" data-box="${e.id}">Add box</button></div></div>
  </article>`}function j(){const e=[];T.forEach((t,s)=>{(S==="all"||S===t.id)&&e.push(it(t,s))}),(S==="all"||S==="boxes")&&L.boxes.forEach(t=>e.push(nt(t))),E.innerHTML=e.join(""),(S==="all"||S==="boxes")&&E.insertAdjacentHTML("beforeend",`<a class="ptile build-tile" href="${M.primary}"><span>Build your own 6-pack</span><i aria-hidden="true">&rarr;</i></a>`),ot(),x||$.fromTo(E.children,{y:26,opacity:0},{y:0,opacity:1,duration:.6,stagger:.06,ease:"power3.out",clearProps:"transform,opacity"})}function ot(){E.querySelectorAll(".ptile:not(.box):not(.build-tile)").forEach(e=>{const t=l(".card-bottle",e);$.set(t,{transformOrigin:"50% 92%"}),e.addEventListener("pointerenter",()=>$.to(t,{y:-22,rotation:8,duration:.55,ease:"back.out(2.2)",overwrite:"auto"})),e.addEventListener("pointerleave",()=>$.to(t,{y:0,rotation:0,duration:.6,ease:"elastic.out(1,.6)",overwrite:"auto"}))})}A.addEventListener("click",e=>{const t=e.target.closest("[data-f]");t&&(S=t.dataset.f,A.querySelectorAll("[data-f]").forEach(s=>s.setAttribute("aria-selected",String(s===t))),j())});document.addEventListener("click",e=>{const t=e.target,s=t.closest(".ptile [data-add]");if(s){e.preventDefault(),V(s,s.dataset.add,1,!1);return}const r=t.closest("[data-box]");if(r){e.preventDefault();const b=L.boxes.find(p=>p.id===r.dataset.box),d=r.getBoundingClientRect();D(d.left+d.width/2,d.top+d.height/2,W().confetti,80),F(b.mix,6,!1),setTimeout(()=>O(r),650)}});const I=l("[data-list-head]"),_=l("[data-list]"),o=l("[data-detail]");function rt(e){const t=K(e);Q(t.id),I.hidden=!0,_.hidden=!0,o.hidden=!1,document.title=`${t.name} | ${C.name}`;const s=L.detail;let r="once",b=1,d=1;const p=T.filter(a=>a.id!==t.id);o.innerHTML=`
  <div class="container detail-grid">
    <div class="gallery" data-gallery>
      <a class="crumb" href="#" data-back>&larr; ${s.back}</a>
      <div class="g-main" data-g-main>
        <div class="g-pane on" data-pane="photo"><img src="./media/photo-${t.id}.webp" alt="${t.name} bottle with ${t.notes.toLowerCase()} floating around it" width="880" height="1100" decoding="async"></div>
        <div class="g-pane" data-pane="cut" style="--c:${t.bg}" data-cut><div class="cut-rig"><img class="cut-b" src="./media/bottle-${t.id}.webp" alt=""></div></div>
        <span class="g-badge" aria-hidden="true">${h(v.single)}</span>
      </div>
      <div class="g-thumbs" role="tablist" aria-label="Gallery">
        <button type="button" role="tab" class="on" data-tab="photo" aria-selected="true"><img src="./media/photo-${t.id}.webp" alt="" loading="lazy">${s.tabs[0]}</button>
        <button type="button" role="tab" data-tab="cut" aria-selected="false" style="--c:${t.bg}"><span class="th-cut">${z(t.id)}</span>${s.tabs[1]}</button>
      </div>
    </div>
    <div class="info">
      <p class="eyebrow">${t.kind}</p>
      <h1 class="pd-title">${t.name}</h1>
      <p class="pd-notes">${t.notes}</p>
      <p class="pd-blurb">${t.blurb}</p>
      <div class="pd-price"><b data-price></b><s data-was></s><small data-per></small></div>

      <fieldset class="opt"><legend>${s.size}</legend>
        <div class="seg" role="radiogroup" aria-label="${s.size}">
          <button type="button" role="radio" data-size="1" aria-checked="true">${s.single}<b>${h(v.single)}</b></button>
          <button type="button" role="radio" data-size="6" aria-checked="false">${s.six}<b>${h(v.pack6)}</b></button>
        </div></fieldset>
      <fieldset class="opt"><legend>Purchase</legend>
        <div class="seg" role="radiogroup" aria-label="Purchase type">
          <button type="button" role="radio" data-mode="once" aria-checked="true">${s.once}</button>
          <button type="button" role="radio" data-mode="sub" aria-checked="false">${s.sub}</button>
        </div>
        <div class="freq" data-freq-wrap hidden><label for="pd-freq">Delivery</label><select id="pd-freq">${v.frequencies.map(a=>`<option value="${a.id}"${a.id==="fortnight"?" selected":""}>${a.label}</option>`).join("")}</select></div>
      </fieldset>
      <div class="pd-buy">
        <div class="qty big" role="group" aria-label="Quantity"><button type="button" data-q="-1" aria-label="Fewer">&minus;</button><output data-qty>1</output><button type="button" data-q="1" aria-label="More">+</button></div>
        <button type="button" class="pill solid big" data-buy><span data-buy-label>${s.add}</span><span class="arrow" aria-hidden="true">&rarr;</span></button>
      </div>
      <ul class="pd-perks"><li>Pressed within 12 hours of picking</li><li>Free delivery over ${h(v.freeShipOver)} and on every subscription</li><li>Glass bottle, 12 days fresh, fridge-ready</li></ul>

      <div class="acc">
        <details open><summary>Ingredients</summary><p>${t.ingredients}</p></details>
        <details><summary>Nutrition per 330 ml</summary><table class="facts-table"><tbody>${t.facts.map(([a,i])=>`<tr><th scope="row">${a}</th><td>${i}</td></tr>`).join("")}</tbody></table></details>
        <details><summary>Shipping &amp; returns</summary><p>Ships Monday to Thursday in an insulated, recyclable box. Not happy? Tell us within 7 days and we will replace or refund, no return needed.</p></details>
      </div>
    </div>
  </div>
  <div class="container pairs"><h2>${s.pairs}</h2><div class="pairs-row">${p.map(a=>`
    <a class="pair" href="#${a.id}" style="--c:${a.bg};--cf:${a.fg}"><span class="sw">${z(a.id)}</span><span><b>${a.name}</b><small>${a.notes}</small></span><i aria-hidden="true">&rarr;</i></a>`).join("")}</div></div>`;const c=()=>{const a=b===6?v.pack6:v.single,i=r==="sub"?J(a):a;l("[data-price]",o).textContent=h(i);const m=l("[data-was]",o);m.textContent=r==="sub"?h(a):"",m.hidden=r!=="sub",l("[data-per]",o).textContent=b===6?`${h(i/6)} a bottle`:"330 ml",l("[data-buy-label]",o).textContent=`${s.add}, ${h(i*d)}`,l("[data-qty]",o).textContent=String(d),l("[data-freq-wrap]",o).hidden=r!=="sub",o.querySelectorAll("[data-size]").forEach(n=>n.setAttribute("aria-checked",String(n.dataset.size===String(b)))),o.querySelectorAll("[data-mode]").forEach(n=>n.setAttribute("aria-checked",String(n.dataset.mode===r)))};c(),o.onclick=a=>{const i=a.target,m=i.closest("[data-size]");if(m){b=+m.dataset.size,c();return}const n=i.closest("[data-mode]");if(n){r=n.dataset.mode,c();return}const y=i.closest("[data-q]");if(y){d=Math.max(1,Math.min(20,d+ +y.dataset.q)),c();return}const g=i.closest("[data-tab]");if(g){o.querySelectorAll("[data-tab]").forEach(f=>{f.classList.toggle("on",f===g),f.setAttribute("aria-selected",String(f===g))}),o.querySelectorAll(".g-pane").forEach(f=>f.classList.toggle("on",f.dataset.pane===g.dataset.tab));return}if(i.closest("[data-back]")){a.preventDefault(),location.hash="";return}if(i.closest("[data-buy]")){const f=i.closest("[data-buy]"),P=l("#pd-freq",o).value,q=f.getBoundingClientRect();if(D(q.left+q.width/2,q.top+q.height/2,t.confetti,90),b===6)for(let k=0;k<d;k++)F({[t.id]:6},6,r==="sub",P);else st(()=>import("./shell-PN3sp6ph.js").then(k=>k.w),__vite__mapDeps([0,1]),import.meta.url).then(k=>k.addBottle(t.id,d,r==="sub",P));setTimeout(()=>O(f),650)}};const w=l("[data-cut]",o),u=l(".cut-rig",w);x||(w.addEventListener("pointermove",a=>{const i=w.getBoundingClientRect(),m=(a.clientX-i.left)/i.width-.5,n=(a.clientY-i.top)/i.height-.5;$.to(u,{rotationY:m*14,rotationX:-n*8,x:m*14,duration:.6,ease:"power3.out",overwrite:"auto"})}),w.addEventListener("pointerleave",()=>$.to(u,{rotationY:0,rotationX:0,x:0,duration:.8,ease:"elastic.out(1,.6)"}))),window.scrollTo(0,0),x||$.from(o.querySelectorAll(".g-main, .info > *"),{y:24,opacity:0,duration:.7,stagger:.05,ease:"power3.out",clearProps:"transform,opacity"})}function H(){const e=location.hash.slice(1);T.some(t=>t.id===e)?rt(e):(I.hidden=!1,_.hidden=!1,o.hidden=!0,document.title="Shop | "+C.name)}addEventListener("hashchange",()=>{H(),R.refresh()});j();H();X();Y();
