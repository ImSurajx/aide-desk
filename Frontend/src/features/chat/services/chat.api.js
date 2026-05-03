import axios from "axios";

const chatAPI = axios.create({
  baseURL: "/api/chats",
  withCredentials: true,
});

/**
 * GET /api/chats/stats
 * Dashboard overview: total, active, waiting, closed, unassigned counts
 */
export const getChatStats = async () => {
  const response = await chatAPI.get("/stats");
  return response.data;
};

/**
 * POST /api/chats
 * Customer starts a new chat session
 */
export const createChat = async () => {
  const response = await chatAPI.post("/");
  return response.data;
};

/**
 * GET /api/chats
 * List chats scoped by role
 */
export const getChats = async (params) => {
  const response = await chatAPI.get("/", { params });
  return response.data;
};

/**
 * GET /api/chats/:id
 * Get a single chat + last 50 messages
 */
export const getChat = async (id) => {
  const response = await chatAPI.get(`/${id}`);
  return response.data;
};

/**
 * PATCH /api/chats/:id/assign
 * Admin assigns or reassigns an agent to a chat
 */
export const assignAgent = async ({ id, agentId }) => {
  const response = await chatAPI.patch(`/${id}/assign`, { agentId });
  return response.data;
};

/**
 * PATCH /api/chats/:id/status
 * Update chat status (active, waiting, closed)
 */
export const updateChatStatus = async ({ id, status }) => {
  const response = await chatAPI.patch(`/${id}/status`, { status });
  return response.data;
};
