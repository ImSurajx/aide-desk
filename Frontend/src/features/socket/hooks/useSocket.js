import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  connectSocket,
  disconnectSocket,
  getSocket,
} from "../../../lib/socket";
import {
  setConnected,
  setReconnecting,
  setError,
  setTyping,
  setCopilotTyping,
  setEscalating,
  addTicketAssignment,
  setAgentJoined,
  resetSocket,
} from "../state/socket.slice";
import { addMessage } from "../../message/state/message.slice";
import { updateChatInList } from "../../chat/state/chat.slice";

export const useSocket = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((s) => s.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      disconnectSocket();
      dispatch(resetSocket());
      return;
    }

    const socket = connectSocket();

    socket.on("connect", () => dispatch(setConnected(true)));
    socket.on("disconnect", () => dispatch(setConnected(false)));
    socket.on("reconnect_attempt", () => dispatch(setReconnecting(true)));
    socket.on("connect_error", (err) =>
      dispatch(setError(err?.message || "socket error"))
    );

    socket.on("message:new", (payload) => {
      if (payload?.message) dispatch(addMessage(payload.message));
      if (payload?.chat) dispatch(updateChatInList(payload.chat));
    });

    socket.on("chat:typing", (payload) => {
      dispatch(setTyping(payload));
    });

    socket.on("copilot:typing", (payload) => {
      dispatch(setCopilotTyping(payload));
    });

    socket.on("copilot:escalating", (payload) => {
      dispatch(setEscalating({ chatId: payload.chatId, escalating: true }));
    });

    socket.on("ticket:assigned", (payload) => {
      dispatch(addTicketAssignment(payload));
    });

    socket.on("agent:joined", (payload) => {
      dispatch(setAgentJoined(payload));
    });

    return () => {
      const s = getSocket();
      if (s) {
        s.off("connect");
        s.off("disconnect");
        s.off("reconnect_attempt");
        s.off("connect_error");
        s.off("message:new");
        s.off("chat:typing");
        s.off("copilot:typing");
        s.off("copilot:escalating");
        s.off("ticket:assigned");
        s.off("agent:joined");
      }
    };
  }, [dispatch, isAuthenticated]);
};
