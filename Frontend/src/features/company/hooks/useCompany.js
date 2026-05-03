import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerCompany as registerCompanyAPI,
  getCompany as getCompanyAPI,
  updateCompany as updateCompanyAPI,
  deleteCompany as deleteCompanyAPI,
  getCompanyUsers as getCompanyUsersAPI,
  getCompanyAgents as getCompanyAgentsAPI,
  getCompanyTickets as getCompanyTicketsAPI,
  getCompanyMessages as getCompanyMessagesAPI,
} from "../services/company.api";
import {
  setCurrentCompany,
  setCompanyUsers,
  setCompanyAgents,
  setCompanyTickets,
  setCompanyMessages,
  setLoading,
  setError,
} from "../state/company.slice";

export const useCompany = () => {
  const dispatch = useDispatch();
  const {
    currentCompany,
    companyUsers,
    companyAgents,
    companyTickets,
    companyMessages,
    loading,
    error,
  } = useSelector((state) => state.company);

  const handleRequest = async (apiFunc, data = null, onSuccess = null) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const response = await (data ? apiFunc(data) : apiFunc());
      if (onSuccess) onSuccess(response);
      return response;
    } catch (err) {
      dispatch(
        setError(
          err.response?.data?.message || err.message || "An error occurred"
        )
      );
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const registerCompany = useCallback(
    async (companyData) => {
      return handleRequest(registerCompanyAPI, companyData);
    },
    [dispatch]
  );

  const getCompany = useCallback(
    async (id) => {
      return handleRequest(getCompanyAPI, id, (res) => {
        dispatch(setCurrentCompany(res.data));
      });
    },
    [dispatch]
  );

  const updateCompany = useCallback(
    async (updateData) => {
      return handleRequest(updateCompanyAPI, updateData, (res) => {
        dispatch(setCurrentCompany(res.data));
      });
    },
    [dispatch]
  );

  const deleteCompany = useCallback(
    async (id) => {
      return handleRequest(deleteCompanyAPI, id, () => {
        dispatch(setCurrentCompany(null));
      });
    },
    [dispatch]
  );

  const getCompanyUsers = useCallback(
    async (companyId) => {
      return handleRequest(getCompanyUsersAPI, companyId, (res) => {
        dispatch(setCompanyUsers(res.data));
      });
    },
    [dispatch]
  );

  const getCompanyAgents = useCallback(
    async (companyId) => {
      return handleRequest(getCompanyAgentsAPI, companyId, (res) => {
        dispatch(setCompanyAgents(res.data));
      });
    },
    [dispatch]
  );

  const getCompanyTickets = useCallback(
    async (companyId) => {
      return handleRequest(getCompanyTicketsAPI, companyId, (res) => {
        dispatch(setCompanyTickets(res.data));
      });
    },
    [dispatch]
  );

  const getCompanyMessages = useCallback(
    async (companyId) => {
      return handleRequest(getCompanyMessagesAPI, companyId, (res) => {
        dispatch(setCompanyMessages(res.data));
      });
    },
    [dispatch]
  );

  return {
    currentCompany,
    companyUsers,
    companyAgents,
    companyTickets,
    companyMessages,
    loading,
    error,
    registerCompany,
    getCompany,
    updateCompany,
    deleteCompany,
    getCompanyUsers,
    getCompanyAgents,
    getCompanyTickets,
    getCompanyMessages,
  };
};
