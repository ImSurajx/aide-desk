import ChatAvatar from "./ChatAvatar";

const conversations = [
  {
    id: "c1",
    customer: { name: "Priya Sharma", status: "online" },
    lastMessage: "Is there any update on my refund?",
    time: "2m",
    unread: 3,
    tag: "Billing",
    tagColor: "bg-amber-100 text-amber-700",
    priority: "high",
  },
  {
    id: "c2",
    customer: { name: "James Holloway", status: "online" },
    lastMessage: "Thanks, that worked perfectly!",
    time: "14m",
    unread: 0,
    tag: "Technical",
    tagColor: "bg-blue-100 text-blue-700",
    priority: "normal",
  },
  {
    id: "c3",
    customer: { name: "Sofia Martínez", status: "away" },
    lastMessage: "I can't log into my account since yesterday",
    time: "28m",
    unread: 1,
    tag: "Auth",
    tagColor: "bg-red-100 text-red-700",
    priority: "high",
  },
  {
    id: "c4",
    customer: { name: "David Chen", status: "offline" },
    lastMessage: "Okay let me try that and get back to you.",
    time: "1h",
    unread: 0,
    tag: "General",
    tagColor: "bg-neutral-100 text-neutral-600",
    priority: "normal",
  },
  {
    id: "c5",
    customer: { name: "Emma Walsh", status: "online" },
    lastMessage: "Can you help me upgrade my plan?",
    time: "2h",
    unread: 2,
    tag: "Billing",
    tagColor: "bg-amber-100 text-amber-700",
    priority: "normal",
  },
];

const ChatConversationList = ({ activeId, onSelect }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-[16px] pt-[20px] pb-[12px] border-b border-neutral-100">
        <div className="flex items-center justify-between mb-[12px]">
          <h2 className="text-[15px] font-bold text-black">Conversations</h2>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors">
            <span className="material-symbols-outlined text-[18px] text-neutral-400">
              edit_square
            </span>
          </button>
        </div>
        {/* Search */}
        <div className="flex items-center bg-neutral-50 border border-neutral-200 rounded-lg px-[10px] py-[6px] gap-[6px] focus-within:border-black transition-all">
          <span className="material-symbols-outlined text-neutral-400 text-[16px]">
            search
          </span>
          <input
            className="bg-transparent text-[12px] outline-none placeholder:text-neutral-400 w-full"
            placeholder="Search conversations..."
          />
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex gap-[6px] px-[16px] py-[10px] border-b border-neutral-100 overflow-x-auto scrollbar-none">
        {["All", "Mine", "Unread", "Priority"].map((f, i) => (
          <button
            key={f}
            className={`shrink-0 text-[11px] font-semibold px-[10px] py-[4px] rounded-full transition-all ${
              i === 0
                ? "bg-black text-white"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv, idx) => {
          const isActive = conv.id === activeId;
          return (
            <button
              key={conv.id}
              onClick={() => onSelect(conv)}
              className={`w-full text-left flex items-start gap-[10px] px-[16px] py-[12px] transition-all border-b border-neutral-50 relative
                ${isActive ? "bg-neutral-100" : "hover:bg-neutral-50"}
              `}
              style={{
                animation: `listIn 0.25s ease-out both`,
                animationDelay: `${idx * 0.04}s`,
              }}
            >
              {/* Priority bar */}
              {conv.priority === "high" && (
                <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-black rounded-r-full" />
              )}

              <ChatAvatar
                name={conv.customer.name}
                role="customer"
                status={conv.customer.status}
                size="md"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-[2px]">
                  <span
                    className={`text-[13px] font-semibold truncate ${isActive ? "text-black" : "text-neutral-800"}`}
                  >
                    {conv.customer.name}
                  </span>
                  <span className="text-[10px] text-neutral-400 shrink-0 ml-[4px]">
                    {conv.time}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 truncate leading-tight">
                  {conv.lastMessage}
                </p>
                <div className="flex items-center gap-[6px] mt-[5px]">
                  <span
                    className={`text-[9px] font-bold px-[6px] py-[2px] rounded-full uppercase tracking-wide ${conv.tagColor}`}
                  >
                    {conv.tag}
                  </span>
                </div>
              </div>

              {conv.unread > 0 && (
                <div className="w-[18px] h-[18px] rounded-full bg-black flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="text-white text-[9px] font-bold">
                    {conv.unread}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <style>{`
        @keyframes listIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .scrollbar-none { scrollbar-width: none; }
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default ChatConversationList;
