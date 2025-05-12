import{a as m,S as p,i}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="37268355-594f825c6dd88f3f995ae87db",g="https://pixabay.com/api/";async function h(s){const t={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:t})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let L=new p(".gallery a",{captoinsData:"alt",captionsDelay:250});function b(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:a,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes: ${r}</p>
          <p>Views: ${a}</p>
          <p>Comments: ${f}</p>
          <p>Downloads: ${d}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),L.refresh()}function v(){c.innerHTML=""}function w(){l.classList.add("visible")}function S(){l.classList.remove("visible")}const u=document.querySelector(".form"),q=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const t=q.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query!"});return}v(),w();try{const o=await h(t);o.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!"}):b(o.hits)}catch(o){i.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(o)}finally{S()}});
//# sourceMappingURL=index.js.map
