import { html, mount } from "../utils/dom.js";
import { state } from "../state.js";

export function renderNav(container) {
  const view = html`
    <nav class="nav container" aria-label="Navegação principal">
      <!-- já temos skip-link no body -->
      <a href="#home" data-nav="home">Início</a>
      <a href="#cadastro" data-nav="cadastro">Cadastro</a>
      <button id="btn-contraste" type="button" class="badge" aria-pressed="false">
        Alto contraste
      </button>
      <span class="badge">SPA</span>
    </nav>
  `;
  mount(container, view);

  // marca ativo e aria-current
  const active = container.querySelector(`[data-nav="${state.route || "home"}"]`);
  container.querySelectorAll("[data-nav]").forEach(a => a.removeAttribute("aria-current"));
  if (active) {
    active.classList.add("active");
    active.setAttribute("aria-current", "page");
  }

  // toggle de alto contraste com persistência
  const btn = container.querySelector("#btn-contraste");
  const saved = localStorage.getItem("hc") === "1";
  if (saved) document.body.classList.add("alto-contraste"), btn.setAttribute("aria-pressed", "true");

  btn.addEventListener("click", () => {
    const on = document.body.classList.toggle("alto-contraste");
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    localStorage.setItem("hc", on ? "1" : "0");
  });
}

