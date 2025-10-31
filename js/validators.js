const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isRequired(v) {
  return v?.toString().trim().length ? null : "Campo obrigatório.";
}
export function isEmail(v) {
  return EMAIL_RX.test(v) ? null : "E-mail inválido.";
}
export function minLen(n) {
  return (v) => (v && v.length >= n ? null : `Mínimo de ${n} caracteres.`);
}
export function equals(getOther, label = "valor") {
  return (v) => (v === getOther() ? null : `Deve ser igual a ${label}.`);
}
export function minAge(years) {
  return (dateStr) => {
    if (!dateStr) return "Campo obrigatório.";
    const d = new Date(dateStr);
    if (isNaN(d)) return "Data inválida.";
    const today = new Date();
    const age = today.getFullYear() - d.getFullYear()
      - ((today.getMonth() < d.getMonth() || (today.getMonth() === d.getMonth() && today.getDate() < d.getDate())) ? 1 : 0);
    return age >= years ? null : `Idade mínima: ${years} anos.`;
  };
}
export function uniqueEmail(checkFn) {
  return (v) => (checkFn(v) ? "E-mail já cadastrado." : null);
}

/** Executa uma lista de validadores e retorna a 1ª mensagem de erro ou null */
export function runValidators(value, validators = []) {
  for (const fn of validators) {
    const msg = fn?.(value);
    if (msg) return msg;
  }
  return null;
}
