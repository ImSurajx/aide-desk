import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getChatStats as getChatStatsAPI,
  createChat as createChatAPI,
  getChats as getChatsAPI,
  getChat as getChatAPI,
  assignAgent as assignAgentAPI,
  updateChatStatus as updateChatStatusAPI,
} from "../services/chat.api";
import {
  setChats,
  setCurrentChat,
  setStats,
  setLoading,
  setError,
  updateChatInList,
  addChatToList,
} from "../state/chat.slice";

export const useChat = () => {
  const dispatch = useDispatch();
  const { chats, currentChat, stats, loading, error, pagination } = useSelector(
    (state) => state.chat
  );

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

  const getChatStats = useCallback(async () => {
    return handleRequest(getChatStatsAPI, null, (res) => {
      dispatch(setStats(res.data));
    });
  }, [dispatch]);

  const createChat = useCallback(async () => {
    return handleRequest(createChatAPI, null, (res) => {
      dispatch(addChatToList(res.data));
      dispatch(setCurrentChat(res.data));
    });
  }, [dispatch]);

  const getChats = useCallback(
    async (params) => {
      return handleRequest(getChatsAPI, params, (res) => {
        dispatch(setChats(res.data));
      });
    },
    [dispatch]
  );

  const getChat = useCallback(
    async (id) => {
      return handleRequest(getChatAPI, id, (res) => {
        dispatch(setCurrentChat(res.data));
      });
    },
    [dispatch]
  );

  const assignAgent = useCallback(
    async (data) => {
      return handleRequest(assignAgentAPI, data, (res) => {
        dispatch(updateChatInList(res.data));
      });
    },
    [dispatch]
  );

  const updateChatStatus = useCallback(
    async (data) => {
      return handleRequest(updateChatStatusAPI, data, (res) => {
        dispatch(updateChatInList(res.data));
      });
    },
    [dispatch]
  );

  return {
    chats,
    currentChat,
    stats,
    loading,
    error,
    pagination,
    getChatStats,
    createChat,
    getChats,
    getChat,
    assignAgent,
    updateChatStatus,
  };
};
