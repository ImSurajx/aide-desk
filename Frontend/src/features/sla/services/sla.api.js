import apiClient from "../../../lib/axios";

const PREFIX = "/sla-config";

export const getSLAConfig = async () => {
  const response = await apiClient.get(`${PREFIX}/`);
  return response.data;
};

export const updateSLAConfig = async (config) => {
  const response = await apiClient.put(`${PREFIX}/`, config);
  return response.data;
};
