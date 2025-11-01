import{html as a}from"./utils/dom.js";export const Templates={Home:()=>a`
      <div class="container">
        <div class="card">
          <h1>Bem-vindo(a) 👋</h1>
          <p>Esta é uma Single Page Application (SPA) feita com JavaScript modular.</p>
          <a class="badge" href="#cadastro">Ir para Cadastro →</a>
        </div>
      </div>
    `,Cadastro:()=>a`
      <div class="container">
        <div class="card">
          <h1>Novo cadastro</h1>
          <form id="form-cadastro" novalidate>
            <div class="grid">
              <div>
                <label for="nome">Nome completo</label>
                <input id="nome" name="nome" autocomplete="name" />
                <div class="hint">Informe seu nome e sobrenome.</div>
                <div class="error" data-error-for="nome"></div>
              </div>

              <div>
                <label for="email">E-mail</label>
                <input id="email" name="email" type="email" autocomplete="email" />
                <div class="error" data-error-for="email"></div>
              </div>

              <div class="row">
                <div style="flex:1">
                  <label for="nasc">Data de nascimento</label>
                  <input id="nasc" name="nasc" type="date" />
                  <div class="error" data-error-for="nasc"></div>
                </div>
                <div style="flex:1">
                  <label for="perfil">Perfil</label>
                  <select id="perfil" name="perfil">
                    <option value="">Selecione…</option>
                    <option value="aluno">Aluno</option>
                    <option value="mentor">Mentor</option>
                  </select>
                  <div class="error" data-error-for="perfil"></div>
                </div>
              </div>

              <div>
                <label for="senha">Senha</label>
                <input id="senha" name="senha" type="password" autocomplete="new-password" />
                <div class="hint">Mínimo 8 caracteres.</div>
                <div class="error" data-error-for="senha"></div>
              </div>

              <div>
                <label for="confirm">Confirmar senha</label>
                <input id="confirm" name="confirm" type="password" autocomplete="new-password" />
                <div class="error" data-error-for="confirm"></div>
              </div>

              <div class="row">
                <button type="submit">Cadastrar</button>
                <button type="button" id="limpar">Limpar</button>
              </div>

              <div id="form-status" class="hint"></div>
            </div>
          </form>
        </div>

        <div class="card" style="margin-top:16px">
          <h2>Usuários armazenados (localStorage)</h2>
          <div id="lista-usuarios" class="grid"></div>
        </div>
      </div>
    `,NotFound:()=>a`
      <div class="container">
        <div class="card"><h1>404</h1><p>Rota não encontrada.</p></div>
      </div>
    `};