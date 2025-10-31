export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export function html(strings, ...vals) {
  const str = strings.reduce((acc, s, i) => acc + s + (vals[i] ?? ""), "");
  const template = document.createElement("template");
  template.innerHTML = str.trim();
  return template.content;
}

export function mount(el, content) {
  el.replaceChildren(content);
}

export function delegate(root, event, selector, handler) {
  root.addEventListener(event, (e) => {
    const target = e.target.closest(selector);
    if (target && root.contains(target)) handler(e, target);
  });
}
