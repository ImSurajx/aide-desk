import axios from "axios";

const companyAPI = axios.create({
  baseURL: "/api/company",
  withCredentials: true,
});

/**
 * POST /api/company/register
 * Register a new company (admin only)
 */
export const registerCompany = async (companyData) => {
  const response = await companyAPI.post("/register", companyData);
  return response.data;
};

/**
 * GET /api/company/:id
 * Get a company by ID
 */
export const getCompany = async (id) => {
  const response = await companyAPI.get(`/${id}`);
  return response.data;
};

/**
 * PUT /api/company/:id
 * Update company details
 */
export const updateCompany = async ({ id, ...updateData }) => {
  const response = await companyAPI.put(`/${id}`, updateData);
  return response.data;
};

/**
 * DELETE /api/company/:id
 * Delete a company
 */
export const deleteCompany = async (id) => {
  const response = await companyAPI.delete(`/${id}`);
  return response.data;
};

/**
 * GET /api/company/:companyId/users
 * Get all users belonging to a company
 */
export const getCompanyUsers = async (companyId) => {
  const response = await companyAPI.get(`/${companyId}/users`);
  return response.data;
};

/**
 * GET /api/company/:companyId/agents
 * Get all agents assigned to a company
 */
export const getCompanyAgents = async (companyId) => {
  const response = await companyAPI.get(`/${companyId}/agents`);
  return response.data;
};

/**
 * GET /api/company/:companyId/tickets
 * Get all tickets raised under a company
 */
export const getCompanyTickets = async (companyId) => {
  const response = await companyAPI.get(`/${companyId}/tickets`);
  return response.data;
};

/**
 * GET /api/company/:companyId/messages
 * Get all messages under a company
 */
export const getCompanyMessages = async (companyId) => {
  const response = await companyAPI.get(`/${companyId}/messages`);
  return response.data;
};
