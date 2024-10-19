import React, { useState } from "react";
import "../styles/Register.css";
import Footer from "../../geral/components/Footer";
import { registerUser } from "../../../api/authService";

const Register = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    nickname: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username.includes(" ")) {
      alert("Por favor, nome de usuário não pode conter espaços.");
      return;
    }

    if (!formData.username && formData.username !== "") {
      alert("Por favor, informe o nome de usuário.");
      return;
    }

    if (!formData.email && formData.email !== "") {
      alert("Por favor, informe o e-mail.");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    setLoading(true); // Inicia o carregamento

    registerUser(formData)
      .then((data) => {
        alert("Usuário registrado com sucesso!");
        resetForm();
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false); // Termina o carregamento
      });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="register-form">
      {loading && <div className="loading-spinner"></div>}{" "}
      {/* Animação de carregamento */}
      <div className={`register-box ${loading ? "loading" : ""}`}>
        <h2 className="text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="register-form__label">
            Nome de Usuário
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Ex: joao123"
            value={formData.username}
            onChange={handleChange}
            className="register-form__input"
          />
          <label htmlFor="email" className="register-form__label">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ex: joao@example.com"
            value={formData.email}
            onChange={handleChange}
            className="register-form__input"
          />
          <label htmlFor="phone" className="register-form__label">
            Telefone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="(99) 99999-9999"
            value={formData.phone}
            onChange={handleChange}
            className="register-form__input"
          />
          <label htmlFor="nickname" className="register-form__label">
            Nome Utilizador
          </label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            placeholder="Ex: João Silva"
            value={formData.nickname}
            onChange={handleChange}
            className="register-form__input"
          />
          <label htmlFor="password" className="register-form__label">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            className="register-form__input"
          />
          <label htmlFor="confirmPassword" className="register-form__label">
            Confirmar Senha
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirmar Senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="register-form__input"
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="text-center">
          Se você já tiver uma conta, <a href="/login">logue aqui</a>.
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
