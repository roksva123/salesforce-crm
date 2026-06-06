import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import LoginPage from "../pages/auth/LoginPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import authService from "../services/auth.service";

const ProtectedRoute = ({ element }) => {
  return authService.isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<DashboardPage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
