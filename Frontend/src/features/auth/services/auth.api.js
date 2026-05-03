import axios from "axios";

const authAPI = axios.create({
  baseURL: "/api/auth",
  withCredentials: true,
});

// ─── Public Routes ───────────────────────────────────────────────────────────

/**
 * POST /api/auth/register
 * Register a new Admin account
 */
export const register = async (userData) => {
  try {
    const response = await authAPI.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * POST /api/auth/login
 * Login for Admin or Agent
 */
export const login = async (userData) => {
  try {
    const response = await authAPI.post("/login", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * POST /api/auth/forgot-password
 * Send password reset link to email
 */
export const forgotPassword = async (userData) => {
  try {
    const response = await authAPI.post("/forgot-password", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * POST /api/auth/reset-password/:token
 * Verify reset token and update password
 */
export const resetPassword = async ({ token, ...data }) => {
  try {
    const response = await authAPI.post(`/reset-password/${token}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * POST /api/auth/resend-verification
 * Resend the email verification link
 */
export const resendVerification = async (userData) => {
  try {
    const response = await authAPI.post("/resend-verification", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * GET /api/auth/verify/:token
 * Verify email address via token
 */
export const verifyEmail = async (token) => {
  try {
    const response = await authAPI.get(`/verify/${token}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ─── Protected Routes ─────────────────────────────────────────────────────────

/**
 * POST /api/auth/logout
 * Clear auth cookie and log out
 */
export const logout = async () => {
  try {
    const response = await authAPI.post("/logout");
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * GET /api/auth/get-me
 * Get the currently authenticated user's profile
 */
export const getMe = async () => {
  try {
    const response = await authAPI.get("/get-me");
    return response.data;
  } catch (error) {
    throw error;
  }
};
