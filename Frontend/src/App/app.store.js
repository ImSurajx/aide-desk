import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth.slice";
import ticketReducer from "../features/ticket/state/ticket.slice";
import chatReducer from "../features/chat/state/chat.slice";
import messageReducer from "../features/message/state/message.slice";
import agentReducer from "../features/agent/state/agent.slice";
import companyReducer from "../features/company/state/company.slice";
import userReducer from "../features/user/state/user.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ticket: ticketReducer,
    chat: chatReducer,
    message: messageReducer,
    agent: agentReducer,
    company: companyReducer,
    user: userReducer,
  },
});
