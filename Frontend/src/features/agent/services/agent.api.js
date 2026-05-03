import axios from "axios";

const agentAPI = axios.create({
  baseURL: "/api/agents",
  withCredentials: true,
});

/**
 * PATCH /api/agents/status
 * Agent updates their own online/offline/away status
 */
export const updateOwnStatus = async (statusData) => {
  const response = await agentAPI.patch("/status", statusData);
  return response.data;
};

/**
 * PATCH /api/agents/:id/password
 * Agent changes their own password
 */
export const changePassword = async ({ id, ...passwordData }) => {
  const response = await agentAPI.patch(`/${id}/password`, passwordData);
  return response.data;
};

/**
 * POST /api/agents/register
 * Admin creates a new agent
 */
export const createAgent = async (agentData) => {
  const response = await agentAPI.post("/register", agentData);
  return response.data;
};

/**
 * GET /api/agents/getAll
 * Admin lists all agents
 */
export const getAgents = async (params) => {
  const response = await agentAPI.get("/getAll", { params });
  return response.data;
};

/**
 * GET /api/agents/:id
 * Get a single agent
 */
export const getAgent = async (id) => {
  const response = await agentAPI.get(`/${id}`);
  return response.data;
};

/**
 * PATCH /api/agents/:id
 * Update agent
 */
export const updateAgent = async ({ id, ...updateData }) => {
  const response = await agentAPI.patch(`/${id}`, updateData);
  return response.data;
};

/**
 * DELETE /api/agents/:id
 * Admin removes an agent
 */
export const deleteAgent = async (id) => {
  const response = await agentAPI.delete(`/${id}`);
  return response.data;
};
