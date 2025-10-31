# EP III – SPA em JavaScript (DOM, Eventos, LocalStorage e Framework)

Projeto de Single Page Application (SPA) com JavaScript modular, templates, roteamento por hash e validação de consistência de dados em formulário. Integração com framework leve (Alpine.js via CDN) e persistência com `localStorage`.

## ✅ Requisitos atendidos
- **Manipulação do DOM:** montagem de views com templates JS e helpers de DOM.
- **SPA básico:** `js/router.js` (hash routing) + `js/main.js`.
- **Sistema de templates JavaScript:** `js/templates.js` com função `html()` (`js/utils/dom.js`).
- **Validação de consistência (formulários):** `js/validators.js` + `js/components/FormCadastro.js`
  - Campos obrigatórios, e-mail válido e **único**.
  - **Senha = confirmação.**
  - **Idade mínima 16** (e se perfil = *mentor*, **mínimo 18**).
- **Armazenamento local:** usuários salvos e listados via `localStorage` (`js/storage.js`).
- **Integração com framework:** Alpine.js (contador e toggle demonstrativos na Home).

## Estrutura de pastas
