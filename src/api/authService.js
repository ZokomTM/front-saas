const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    console.log(userData);
    console.log(JSON.stringify(userData));

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao registrar");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Erro na rede");
  }
};

export const loginUser = async (userData) => {
  try {
    // Verifique se userData contém username e password
    if (!userData.username || !userData.password) {
      throw new Error("Username e password são obrigatórios");
    }

    console.log(userData);

    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao fazer login");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);

    console.log(data.token);

    return data;
  } catch (error) {
    throw new Error(error.message || "Erro na rede");
  }
};
