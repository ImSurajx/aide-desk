import axios from "axios";

const userAPI = axios.create({
  baseURL: "/api/users",
  withCredentials: true,
});

// ─── Public Routes (Customer Login) ──────────────────────────────────────────

export const loginUser = async (credentials) => {
  const response = await userAPI.post("/login", credentials);
  return response.data;
};

export const logoutUser = async () => {
  const response = await userAPI.post("/logout");
  return response.data;
};

export const forgotUserPassword = async (emailData) => {
  const response = await userAPI.post("/forgot-password", emailData);
  return response.data;
};

export const resetUserPassword = async ({ token, ...passwordData }) => {
  const response = await userAPI.post(`/reset-password/${token}`, passwordData);
  return response.data;
};

// ─── Customer Self-Service ───────────────────────────────────────────────────

export const getMe = async () => {
  const response = await userAPI.get("/me");
  return response.data;
};

export const updateMe = async (updateData) => {
  const response = await userAPI.patch("/me", updateData);
  return response.data;
};

export const changeUserPassword = async (passwordData) => {
  const response = await userAPI.patch("/me/password", passwordData);
  return response.data;
};

// ─── Admin Manages Customers ─────────────────────────────────────────────────

export const createUser = async (userData) => {
  const response = await userAPI.post("/register", userData);
  return response.data;
};

export const getUsers = async (params) => {
  const response = await userAPI.get("/getAll", { params });
  return response.data;
};

export const getUserById = async (id) => {
  const response = await userAPI.get(`/${id}`);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await userAPI.delete(`/remove/${id}`);
  return response.data;
};
