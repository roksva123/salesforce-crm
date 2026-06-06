import api from "./api";

export const tenantService = {
  dashboard() {
    return api.get("/tenant/dashboard");
  },

  activities() {
    return api.get("/tenant/activities");
  },

  customers() {
    return api.get("/tenant/customers");
  },

  products() {
    return api.get("/tenant/products");
  },
};