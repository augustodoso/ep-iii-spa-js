const KEY = "spa_ep3_users_v1";

export const storage = {
  getAll() {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  },
  saveAll(list) {
    localStorage.setItem(KEY, JSON.stringify(list));
  },
  add(user) {
    const list = storage.getAll();
    list.push(user);
    storage.saveAll(list);
  },
  emailExists(email) {
    return storage.getAll().some(u => u.email.toLowerCase() === email.toLowerCase());
  }
};
