import axios from "axios";
import { store } from "../App/app.store";

const apiClient = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

apiClient.interceptors.request.use((cfg) => {
  const state = store.getState();
  const role = state?.auth?.role;
  const workspaceId =
    state?.auth?.user?.workspaceId ||
    state?.company?.activeWorkspaceId ||
    null;

  if (role === "admin" && workspaceId) {
    cfg.headers["x-workspace-id"] = workspaceId;
  }
  return cfg;
});

export default apiClient;
