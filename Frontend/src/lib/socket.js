import { io } from "socket.io-client";

let socket = null;

export const getSocket = () => socket;

export const connectSocket = () => {
  if (socket && socket.connected) return socket;

  const url =
    import.meta.env.VITE_SOCKET_URL || window.location.origin;

  socket = io(url, {
    withCredentials: true,
    autoConnect: true,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    transports: ["websocket", "polling"],
  });

  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.removeAllListeners();
    socket.disconnect();
    socket = null;
  }
};

export const joinChat = (chatId) => {
  if (socket && socket.connected) socket.emit("chat:join", { chatId });
};

export const leaveChat = (chatId) => {
  if (socket && socket.connected) socket.emit("chat:leave", { chatId });
};

export const emitTyping = (chatId, isTyping) => {
  if (socket && socket.connected)
    socket.emit("chat:typing", { chatId, isTyping });
};
