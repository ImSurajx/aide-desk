import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../dashboard/Sidebar";
import TopBar from "../dashboard/TopBar";
import ChatConversationList from "./ChatConversationList";
import ChatWindow from "./ChatWindow";
import ChatCustomerInfo from "./ChatCustomerInfo";
import PageWrapper from "../ui/PageWrapper";

const ChatScreen = () => {
  const [activeConversation, setActiveConversation] = useState(null);
  const [showInfo, setShowInfo] = useState(true);

  return (
    <PageWrapper>
      <div className="bg-white text-on-surface min-h-screen font-['Poppins'] flex">
        <Sidebar />

        <div className="ml-64 flex-1 flex flex-col min-h-screen overflow-hidden">
          <TopBar />

          {/* Chat layout */}
          <div
            className="flex flex-1 overflow-hidden"
            style={{ height: "calc(100vh - 64px)" }}
          >
            {/* Left: Conversation list */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-[300px] shrink-0 border-r border-neutral-200 bg-white flex flex-col overflow-hidden"
            >
              <ChatConversationList
                activeId={activeConversation?.id}
                onSelect={(conv) => {
                  setActiveConversation(conv);
                  setShowInfo(true);
                }}
              />
            </motion.div>

            {/* Center: Message thread */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeConversation?.id || "empty"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex overflow-hidden"
              >
                <ChatWindow
                  conversation={activeConversation}
                  onClose={() => setActiveConversation(null)}
                />
              </motion.div>
            </AnimatePresence>

            {/* Right: Customer info panel */}
            <AnimatePresence>
              {activeConversation && showInfo && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="w-[260px] shrink-0 border-l border-neutral-200 bg-white overflow-hidden flex flex-col"
                >
                  {/* Panel header */}
                  <div className="flex items-center justify-between px-[20px] py-[14px] border-b border-neutral-100">
                    <span className="text-[12px] font-bold uppercase tracking-widest text-neutral-500">
                      Customer
                    </span>
                    <button
                      onClick={() => setShowInfo(false)}
                      className="p-[4px] rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px] text-neutral-400">
                        chevron_right
                      </span>
                    </button>
                  </div>
                  <ChatCustomerInfo conversation={activeConversation} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Show info toggle when hidden */}
            {activeConversation && !showInfo && (
              <button
                onClick={() => setShowInfo(true)}
                className="w-[36px] border-l border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors shrink-0"
                title="Show customer info"
              >
                <span className="material-symbols-outlined text-[18px] text-neutral-400">
                  chevron_left
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ChatScreen;
