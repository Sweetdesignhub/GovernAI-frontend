import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import page components
import DashboardPage from "./pages/Dashboard";
import UseCaseRegistryPage from "./pages/UseCaseRegistry";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/use-case-registry" element={<UseCaseRegistryPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
