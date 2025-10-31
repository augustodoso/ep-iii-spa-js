export const state = {
  route: location.hash.replace("#", "") || "home",
  setRoute(r) { this.route = r; }
};
