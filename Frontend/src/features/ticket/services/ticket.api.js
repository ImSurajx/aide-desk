import axios from "axios";

const ticketAPI = axios.create({
  baseURL: "/api/tickets",
  withCredentials: true,
});

/**
 * GET /api/tickets/stats
 * Dashboard counts: total, open, in_progress, resolved, closed, urgent, slaBreached
 */
export const getTicketStats = async () => {
  const response = await ticketAPI.get("/stats");
  return response.data;
};

/**
 * POST /api/tickets
 * Create ticket.
 */
export const createTicket = async (ticketData) => {
  const response = await ticketAPI.post("/", ticketData);
  return response.data;
};

/**
 * GET /api/tickets
 * List tickets scoped by role.
 */
export const getTickets = async (params) => {
  const response = await ticketAPI.get("/", { params });
  return response.data;
};

/**
 * GET /api/tickets/:id
 * Single ticket + linked chat messages
 */
export const getTicket = async (id) => {
  const response = await ticketAPI.get(`/${id}`);
  return response.data;
};

/**
 * PATCH /api/tickets/:id
 * Update title, description, category, priority, tags
 */
export const updateTicket = async ({ id, ...updateData }) => {
  const response = await ticketAPI.patch(`/${id}`, updateData);
  return response.data;
};

/**
 * PATCH /api/tickets/:id/assign
 * Assign agent to ticket
 */
export const assignAgent = async ({ id, agentId }) => {
  const response = await ticketAPI.patch(`/${id}/assign`, { agentId });
  return response.data;
};

/**
 * PATCH /api/tickets/:id/status
 * Update ticket status
 */
export const updateTicketStatus = async ({ id, status }) => {
  const response = await ticketAPI.patch(`/${id}/status`, { status });
  return response.data;
};

/**
 * POST /api/tickets/:id/escalate
 * Escalate ticket
 */
export const escalateTicket = async (id) => {
  const response = await ticketAPI.post(`/${id}/escalate`);
  return response.data;
};

/**
 * DELETE /api/tickets/:id
 * Soft close or hard delete depending on role
 */
export const deleteTicket = async (id) => {
  const response = await ticketAPI.delete(`/${id}`);
  return response.data;
};
