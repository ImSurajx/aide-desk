import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendMessage as sendMessageAPI,
  getMessages as getMessagesAPI,
  markMessagesRead as markMessagesReadAPI,
  getUnreadCount as getUnreadCountAPI,
  requestAiSuggestions as requestAiSuggestionsAPI,
} from "../services/message.api";
import {
  setMessages,
  addMessage,
  setUnreadCount,
  setLoading,
  setError,
  clearMessages,
} from "../state/message.slice";

export const useMessage = () => {
  const dispatch = useDispatch();
  const { messages, unreadCount, loading, error, pagination } = useSelector(
    (state) => state.message
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

  const sendMessage = useCallback(
    async (messageData) => {
      return handleRequest(sendMessageAPI, messageData, (res) => {
        dispatch(addMessage(res.data));
      });
    },
    [dispatch]
  );

  const getMessages = useCallback(
    async (params) => {
      return handleRequest(getMessagesAPI, params, (res) => {
        dispatch(setMessages(res.data));
      });
    },
    [dispatch]
  );

  const markMessagesRead = useCallback(
    async (chatId) => {
      return handleRequest(markMessagesReadAPI, chatId, () => {
        // Option: fetch unread count again or just set it to 0
        dispatch(setUnreadCount(0));
      });
    },
    [dispatch]
  );

  const getUnreadCount = useCallback(
    async (chatId) => {
      return handleRequest(getUnreadCountAPI, chatId, (res) => {
        dispatch(setUnreadCount(res.data?.count || 0));
      });
    },
    [dispatch]
  );

  const requestAiSuggestions = useCallback(
    async (messageId) => {
      return handleRequest(requestAiSuggestionsAPI, messageId);
    },
    [dispatch]
  );

  return {
    messages,
    unreadCount,
    loading,
    error,
    pagination,
    sendMessage,
    getMessages,
    markMessagesRead,
    getUnreadCount,
    requestAiSuggestions,
    clearMessages: () => dispatch(clearMessages()),
  };
};
