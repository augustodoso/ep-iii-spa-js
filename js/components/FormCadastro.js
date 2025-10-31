import { $, $$ } from "../utils/dom.js";
import { storage } from "../storage.js";
import { isRequired, isEmail, minLen, equals, minAge, uniqueEmail, runValidators } from "../validators.js";

export function initFormCadastro(root) {
  const form = $("#form-cadastro", root);
  if (!form) return;

  const nome = $("#nome", form);
  const email = $("#email", form);
  const nasc = $("#nasc", form);
  const perfil = $("#perfil", form);
  const senha = $("#senha", form);
  const confirm = $("#confirm", form);
  const limpar = $("#limpar", form);
  const status = $("#form-status", form);
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");

  const rules = {
    nome: [isRequired],
    email: [isRequired, isEmail, uniqueEmail(storage.emailExists)],
    nasc: [minAge(16)],
    perfil: [isRequired],
    senha: [isRequired, minLen(8)],
    confirm: [equals(() => senha.value, "a senha")]
  };

  function showError(input, msg) {
    const box = root.querySelector(`[data-error-for="${input.id}"]`);
    if (box) {
      box.textContent = msg || "";
      box.id = `${input.id}-error`;
    }
    if (msg) {
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", `${input.id}-error`);
    } else {
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
    }
  }

  function validateField(input) {
    const fns = rules[input.name] || [];
    const msg = runValidators(input.value, fns);
    showError(input, msg);
    return !msg;
  }

  ["input", "change", "blur"].forEach(evt => {
    form.addEventListener(evt, (e) => {
      const target = e.target;
      if (target.name in rules) validateField(target);
      if (target === senha && confirm.value) validateField(confirm);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = [nome, email, nasc, perfil, senha, confirm];
    const results = fields.map(inp => ({ inp, ok: validateField(inp) }));
    const allOk = results.every(r => r.ok);

    // regra extra mentor >= 18
    if (allOk && perfil.value === "mentor") {
      const d = new Date(nasc.value);
      const today = new Date();
      const age = today.getFullYear() - d.getFullYear()
        - ((today.getMonth() < d.getMonth() || (today.getMonth() === d.getMonth() && today.getDate() < d.getDate())) ? 1 : 0);
      if (age < 18) {
        showError(nasc, "Para perfil Mentor, idade mínima é 18 anos.");
        results.find(r => r.inp === nasc).ok = false;
      }
    }

    if (!results.every(r => r.ok)) {
      const firstInvalid = results.find(r => !r.ok)?.inp;
      firstInvalid?.focus(); // foco no primeiro erro
      status.textContent = "Há campos com erro. Corrija-os para continuar.";
      return;
    }

    const user = {
      id: crypto.randomUUID(),
      nome: nome.value.trim(),
      email: email.value.trim(),
      nasc: nasc.value,
      perfil: perfil.value,
      createdAt: new Date().toISOString()
    };
    storage.add(user);
    status.textContent = "Cadastro realizado com sucesso!";
    form.reset();
    $$("#form-cadastro [data-error-for]").forEach(el => el.textContent = "");
  });

  limpar.addEventListener("click", () => {
    form.reset();
    status.textContent = "Campos limpos.";
    $$("#form-cadastro [data-error-for]").forEach(el => el.textContent = "");
  });
}
