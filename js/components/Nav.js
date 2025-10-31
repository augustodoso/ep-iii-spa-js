import { html, mount } from "../utils/dom.js";
import { state } from "../state.js";

export function renderNav(container) {
  const view = html`
    <nav class="nav container">
      <a href="#home" data-nav="home">Início</a>
      <a href="#cadastro" data-nav="cadastro">Cadastro</a>
      <span class="badge">SPA</span>
    </nav>
  `;
  mount(container, view);
  // marca ativo
  const active = container.querySelector(`[data-nav="${state.route || "home"}"]`);
  if (active) active.classList.add("active");
}
