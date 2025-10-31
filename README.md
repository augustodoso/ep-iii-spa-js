# EP III – SPA em JavaScript
SPA com JS modular, templates, roteador por hash, validação de consistência em formulário e `localStorage`. Framework integrado: Alpine.js (CDN).

## Rodar local
- VS Code + Live Server (Open with Live Server no `index.html`) **ou**
- `python -m http.server 5500` e abra `http://localhost:5500/`.

## Requisitos cobertos
- SPA (hash routing) – `js/router.js`, `js/main.js`
- Templates JS – `js/templates.js` (+ `js/utils/dom.js`)
- DOM & eventos – `FormCadastro.js`
- Validação de consistência – `validators.js` (e-mail único, senha=confirmação, idade mínima, mentor ≥ 18)
- Armazenamento local – `storage.js`
- Framework – Alpine.js (contador/toggle na Home)
