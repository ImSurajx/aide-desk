import apiClient from "../../../lib/axios";

const PREFIX = "/messages";

export const sendMessage = async (messageData) => {
  const response = await apiClient.post(`${PREFIX}/`, messageData);
  return response.data;
};

export const getMessages = async ({ chatId, ...params }) => {
  const response = await apiClient.get(`${PREFIX}/${chatId}`, { params });
  return response.data;
};

export const markMessagesRead = async (chatId) => {
  const response = await apiClient.patch(`${PREFIX}/${chatId}/read`);
  return response.data;
};

export const getUnreadCount = async (chatId) => {
  const response = await apiClient.get(`${PREFIX}/${chatId}/unread-count`);
  return response.data;
};

export const requestAiSuggestions = async (messageId) => {
  const response = await apiClient.post(`${PREFIX}/${messageId}/suggest`);
  return response.data;
};
