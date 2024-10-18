import React, { useState } from "react";
import "../styles/Register.css";
import Footer from "../../geral/components/Footer";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para registrar o usuário
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="register-form">
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="register-form__input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="register-form__input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="register-form__input"
        />
        <button type="submit" className="register-form__button">
          Register
        </button>
      </form>
      <p className="text-center">
        Se você já tiver uma conta, <a href="/login">logue aqui</a>.
      </p>
      <Footer />
    </div>
  );
};

export default Register;
