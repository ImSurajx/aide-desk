import apiClient from "../../../lib/axios";

const PREFIX = "/company";

export const registerCompany = async (companyData) => {
  const response = await apiClient.post(`${PREFIX}/register`, companyData);
  return response.data;
};

export const getCompany = async (id) => {
  const response = await apiClient.get(`${PREFIX}/${id}`);
  return response.data;
};

export const updateCompany = async ({ id, ...updateData }) => {
  const response = await apiClient.put(`${PREFIX}/${id}`, updateData);
  return response.data;
};

export const deleteCompany = async (id) => {
  const response = await apiClient.delete(`${PREFIX}/${id}`);
  return response.data;
};

export const getCompanyUsers = async (companyId) => {
  const response = await apiClient.get(`${PREFIX}/${companyId}/users`);
  return response.data;
};

export const getCompanyAgents = async (companyId) => {
  const response = await apiClient.get(`${PREFIX}/${companyId}/agents`);
  return response.data;
};

export const getCompanyTickets = async (companyId) => {
  const response = await apiClient.get(`${PREFIX}/${companyId}/tickets`);
  return response.data;
};

export const getCompanyMessages = async (companyId) => {
  const response = await apiClient.get(`${PREFIX}/${companyId}/messages`);
  return response.data;
};

// Workspaces (admin)
export const createWorkspace = async (data) => {
  const response = await apiClient.post(`/workspaces/create`, data);
  return response.data;
};

export const getWorkspaces = async () => {
  const response = await apiClient.get(`/workspaces/getAll`);
  return response.data;
};

export const getWorkspace = async (id) => {
  const response = await apiClient.get(`/workspaces/${id}`);
  return response.data;
};

export const updateWorkspace = async ({ id, ...data }) => {
  const response = await apiClient.patch(`/workspaces/${id}`, data);
  return response.data;
};

export const deleteWorkspace = async (id) => {
  const response = await apiClient.delete(`/workspaces/${id}`);
  return response.data;
};
