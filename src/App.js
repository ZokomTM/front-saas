import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/geral/components/Home.js";
import About from "./pages/geral/components/About";
import Register from "./pages/auth/components/Register";
import Login from "./pages/auth/components/Login";
import Menu from "./pages/menu/components/Menu";
import SelectTenant from "./pages/tenant/components/SelectTenant.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/select-tenant" element={<SelectTenant />} />
      </Routes>
    </Router>
  );
}

export default App;
