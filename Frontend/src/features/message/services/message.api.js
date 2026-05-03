import axios from "axios";

const messageAPI = axios.create({
  baseURL: "/api/messages",
  withCredentials: true,
});

/**
 * POST /api/messages
 * Send a message in a chat session
 */
export const sendMessage = async (messageData) => {
  const response = await messageAPI.post("/", messageData);
  return response.data;
};

/**
 * GET /api/messages/:chatId
 * Paginated message history for a chat
 */
export const getMessages = async ({ chatId, ...params }) => {
  const response = await messageAPI.get(`/${chatId}`, { params });
  return response.data;
};

/**
 * PATCH /api/messages/:chatId/read
 * Mark all unread messages in a chat as read
 */
export const markMessagesRead = async (chatId) => {
  const response = await messageAPI.patch(`/${chatId}/read`);
  return response.data;
};

/**
 * GET /api/messages/:chatId/unread-count
 * Count unread messages in a chat
 */
export const getUnreadCount = async (chatId) => {
  const response = await messageAPI.get(`/${chatId}/unread-count`);
  return response.data;
};

/**
 * POST /api/messages/:messageId/suggest
 * Agent requests AI co-pilot suggestions for a customer message
 */
export const requestAiSuggestions = async (messageId) => {
  const response = await messageAPI.post(`/${messageId}/suggest`);
  return response.data;
};
