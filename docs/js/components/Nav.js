import{html as t,mount as a}from"../utils/dom.js";import{state as e}from"../state.js";export function renderNav(r){const o=t`
    <nav class="nav container" aria-label="Navegação principal">
      <!-- já temos skip-link no body -->
      <a href="#home" data-nav="home">Início</a>
      <a href="#cadastro" data-nav="cadastro">Cadastro</a>
      <button id="btn-contraste" type="button" class="badge" aria-pressed="false">
        Alto contraste
      </button>
      <span class="badge">SPA</span>
    </nav>
  `;a(r,o);const s=r.querySelector(`[data-nav="${e.route||"home"}"]`);r.querySelectorAll("[data-nav]").forEach(t=>t.removeAttribute("aria-current")),s&&(s.classList.add("active"),s.setAttribute("aria-current","page"));const n=r.querySelector("#btn-contraste");"1"===localStorage.getItem("hc")&&(document.body.classList.add("alto-contraste"),n.setAttribute("aria-pressed","true")),n.addEventListener("click",()=>{const t=document.body.classList.toggle("alto-contraste");n.setAttribute("aria-pressed",t?"true":"false"),localStorage.setItem("hc",t?"1":"0")})}