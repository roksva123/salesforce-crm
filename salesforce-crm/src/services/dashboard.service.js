import api from "./api";

const dashboardService = {
  getRevenue: async () => {
    try {
      const response = await api.get("/dashboard/revenue");
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getDeals: async () => {
    try {
      const response = await api.get("/dashboard/deals");
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getLeads: async () => {
    try {
      const response = await api.get("/dashboard/leads");
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getTeamPerformance: async () => {
    try {
      const response = await api.get("/dashboard/team-performance");
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getDashboardData: async () => {
    try {
      const response = await api.get("/dashboard");
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default dashboardService;
