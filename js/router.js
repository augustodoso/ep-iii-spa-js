import { mount } from "./utils/dom.js";
import { Templates } from "./templates.js";
import { state } from "./state.js";

export function startRouter(root, afterRender = () => {}) {
  function render() {
    const route = location.hash.replace("#", "") || "home";
    state.setRoute(route);

    let view;
    switch (route) {
      case "home": view = Templates.Home(); break;
      case "cadastro": view = Templates.Cadastro(); break;
      default: view = Templates.NotFound();
    }

    mount(root, view);
    afterRender(route, root);
  }

  addEventListener("hashchange", render);
  render();
}
