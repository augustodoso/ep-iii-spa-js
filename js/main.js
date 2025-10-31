// Importa a barra de navegação e o roteador
import { renderNav } from "./components/Nav.js";
import { startRouter } from "./router.js";

// Seleciona os elementos principais do HTML
const $header = document.getElementById("app-header");
const $app = document.getElementById("app");

// Teste rápido
console.log("main.js carregado ✅");

// Renderiza o cabeçalho (navbar)
renderNav($header);

// Inicia o roteador SPA
startRouter($app, (route, root) => {
  console.log("Rota atual:", route); // para depuração

  // "Hidrata" componentes específicos após renderizar o template
  if (route === "cadastro") {
    // Import dinâmico para dividir por funcionalidade
    import("./components/FormCadastro.js")
      .then((mod) => {
        mod.initFormCadastro(root);
        console.log("FormCadastro inicializado ✅");
      })
      .catch((err) => console.error("Erro ao carregar FormCadastro.js:", err));
  }
});
