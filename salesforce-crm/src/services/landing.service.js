import api from "./api";

export const landingService = {
  getHero() {
    return api.get("/landing/hero");
  },

  getFeatures() {
    return api.get("/landing/features");
  },

  getSolutions() {
    return api.get("/landing/solutions");
  },

  getTestimonials() {
    return api.get("/landing/testimonials");
  },

  getClients() {
    return api.get("/landing/clients");
  },

  getPricing() {
    return api.get("/landing/pricing");
  },

  getTrial() {
    return api.get("/landing/trial");
  },
};