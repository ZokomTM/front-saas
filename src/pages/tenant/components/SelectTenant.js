import React, { useState, useEffect } from "react";
import { getTenantsByUser, selectTenant } from "../../../api/tenantService";
import "../styles/SelectTenant.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../geral/components/Footer";

const Select = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await getTenantsByUser();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    getItems();
  }, []);

  const handleProceed = async () => {
    try {
      const selectedTenant = items.find((item) => item.id === selectedItem);
      const data = await selectTenant(selectedTenant.id);
      navigate("/menu");
    } catch (error) {
      console.error("Error selecting tenant:", error);
    }
  };

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    const selectedTenant = items.find((item) => item.id == selectedId);
    setSelectedItem(selectedTenant ? selectedTenant.id : "");
  };

  const selectedTenant = items.find((item) => item.id === selectedItem);

  return (
    <div className="container">
      <div className="message">Selecione a empresa</div>
      <select value={selectedItem} onChange={handleSelectChange}>
        <option value="">Selecione a empresa</option>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.id} - {item.name}
          </option>
        ))}
      </select>

      {selectedTenant && (
        <div className="info-bubble">
          <p>Servidor: {selectedTenant.servidor}</p>
          <p>Usuário Responsável: {selectedTenant.usuario_responsavel}</p>
        </div>
      )}

      {selectedTenant && (
        <div className="button-container">
          <button onClick={handleProceed}>Prosseguir</button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Select;
