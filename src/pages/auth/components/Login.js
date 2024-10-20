import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/authService";
import "../styles/Login.css"; // Importando o arquivo de estilos
import Footer from "../../geral/components/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");
    setLoading(true); // Inicia o carregamento

    const userData = {
      username: username,
      password: password,
    };

    try {
      const data = await loginUser(userData);
      navigate("/select-tenant");
    } catch (error) {
      setMessage(`Erro: ${error.message}`);
    } finally {
      setLoading(false); // Termina o carregamento
    }
  };

  return (
    <div className="login-container">
      {loading && <div className="loading-spinner"></div>}{" "}
      {/* Animação de carregamento */}
      <div className={`login-box ${loading ? "loading" : ""}`}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="confirmPassword" className="login-form__label">
            Usuário/E-mail
          </label>
          <div className="input-group">
            <input
              type="text"
              placeholder="Nome de Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <label htmlFor="confirmPassword" className="login-form__label">
            Senha
          </label>
          <div className="input-group">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            Logar
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="register-prompt">
          Não tem uma conta? <a href="/register">Registre-se</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
