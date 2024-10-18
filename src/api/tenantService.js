const API_URL = process.env.REACT_APP_API_URL;

export const getTenantsByUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/tenant/list`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const selectTenant = async (selectedItem) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/tenant/select/${selectedItem}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    localStorage.setItem("token_empresa", data.token);

    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};
