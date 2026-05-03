import { useState, useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";

const agent = { name: "Alex Sterling", role: "agent", status: "online" };
const customer = (conv) => ({
  name: conv?.customer?.name || "Customer",
  role: "customer",
  status: conv?.customer?.status || "online",
});

const buildInitialMessages = (conv) => {
  if (!conv) return [];
  return [
    {
      id: "m1",
      sender: customer(conv),
      text: conv.lastMessage,
      time: conv.time,
      status: "read",
    },
    {
      id: "m2",
      sender: agent,
      text: "Hi! Thanks for reaching out. Let me look into this for you right away.",
      time: conv.time,
      status: "read",
    },
    {
      id: "m3",
      sender: customer(conv),
      text: "I've been waiting for a while. This is quite urgent for me.",
      time: "1m",
      status: "read",
    },
    {
      id: "m4",
      sender: agent,
      text: "I completely understand, and I apologize for the delay. Could you share your order ID so I can pull up the details?",
      time: "Just now",
      status: "delivered",
    },
  ];
};

const DateDivider = ({ label }) => (
  <div className="flex items-center gap-[10px] my-[8px] px-[4px]">
    <div className="flex-1 h-px bg-neutral-100" />
    <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-widest shrink-0">
      {label}
    </span>
    <div className="flex-1 h-px bg-neutral-100" />
  </div>
);

const ChatWindow = ({ conversation, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef(null);

  // Reset + load on conversation change
  useEffect(() => {
    if (!conversation) return;
    setMessages([]);
    setLoading(true);

    const t = setTimeout(() => {
      setMessages(buildInitialMessages(conversation));
      setLoading(false);
    }, 600);

    return () => clearTimeout(t);
  }, [conversation?.id]);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text) => {
    const newMsg = {
      id: `m${Date.now()}`,
      sender: agent,
      text,
      time: "Just now",
      status: "sent",
    };
    setMessages((prev) => [...prev, newMsg]);

    // Simulate customer typing reply
    setTimeout(() => setIsTyping(true), 1200);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `m${Date.now() + 1}`,
          sender: customer(conversation),
          text: getAutoReply(text),
          time: "Just now",
          status: "read",
        },
      ]);
    }, 3200);
  };

  if (!conversation) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-neutral-50 gap-[12px]">
        <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center">
          <span className="material-symbols-outlined text-[32px] text-neutral-300">
            chat_bubble_outline
          </span>
        </div>
        <p className="text-[14px] font-semibold text-neutral-500">
          Select a conversation
        </p>
        <p className="text-[12px] text-neutral-400">
          Choose a chat from the list to get started
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <ChatHeader conversation={conversation} onClose={onClose} />

      {/* Messages area */}
      <div
        className="flex-1 overflow-y-auto px-[20px] py-[20px] flex flex-col gap-[2px] bg-neutral-50"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#e5e5e5 transparent",
        }}
      >
        {loading ? (
          <div className="flex-1 flex flex-col gap-[16px] pt-[8px]">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flex items-end gap-[8px] ${i % 2 === 0 ? "flex-row-reverse" : ""}`}
              >
                <div className="w-7 h-7 rounded-xl bg-neutral-200 animate-pulse shrink-0" />
                <div
                  className={`h-[40px] rounded-2xl bg-neutral-200 animate-pulse ${i % 2 === 0 ? "rounded-br-[4px]" : "rounded-bl-[4px]"}`}
                  style={{
                    width: `${120 + i * 40}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            <DateDivider label="Today" />

            {messages.map((msg, idx) => {
              const prevMsg = messages[idx - 1];
              const showAvatar =
                !prevMsg || prevMsg.sender.role !== msg.sender.role;
              const isOwn = msg.sender.role === "agent";

              return (
                <div
                  key={msg.id}
                  className={showAvatar ? "mt-[10px]" : "mt-[2px]"}
                >
                  <ChatBubble
                    message={msg}
                    isOwn={isOwn}
                    showAvatar={showAvatar}
                    animate={true}
                  />
                </div>
              );
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="mt-[10px]">
                <ChatBubble
                  message={{
                    sender: customer(conversation),
                    text: "",
                    time: "",
                  }}
                  isOwn={false}
                  isTyping={true}
                  showAvatar={true}
                  animate={true}
                />
              </div>
            )}

            <div ref={bottomRef} />
          </>
        )}
      </div>

      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
};

// Simple auto-reply pool
const replies = [
  "Got it, thank you! Let me check on that.",
  "Okay, I'll wait. Please take your time.",
  "Sure, my order ID is #ORD-88231.",
  "That makes sense. Do you need anything else from my side?",
  "Thank you so much for the quick response!",
];
let replyIdx = 0;
const getAutoReply = () => {
  const r = replies[replyIdx % replies.length];
  replyIdx++;
  return r;
};

export default ChatWindow;
