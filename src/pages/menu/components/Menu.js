import React, { useState } from "react";
import "../styles/Menu.css";
import { Link } from "react-router-dom";
import Footer from "../../geral/components/Footer";

const Menu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="menu-container">
      <div className="sidebar">
        <ul>
          <li>Opção 1</li>
          <li>Opção 2</li>
          <li>Opção 3</li>
          <li>Opção 4</li>
        </ul>
      </div>
      <div className="top-right">
        <div className="status-ball" onClick={toggleDropdown}></div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>Ajuda</li>
              <li>Configurações</li>
              <li>Bater Ponto</li>
              <li>Fechar Ponto</li>
              <li>
                <Link to="/select-tenant">Tenant</Link>
              </li>
              <li>
                <Link to="/">Sair</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
