import api from "./api";

export const saasService = {
  dashboard() {
    return api.get("/saas/dashboard");
  },

  tenants() {
    return api.get("/saas/tenants");
  },

  subscriptions() {
    return api.get("/saas/subscriptions");
  },
};