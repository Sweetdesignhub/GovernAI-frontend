import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import page components
import DashboardPage from "./pages/Dashboard";
import UseCaseRegistryPage from "./pages/UseCaseRegistry";
import Newcase from './pages/Newcase/NewCase.jsx'


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/use-case-registry" element={<UseCaseRegistryPage />} />
        <Route path="/NewCase" element={<Newcase />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
