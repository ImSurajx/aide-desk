import ChatAvatar from "./ChatAvatar";

const formatTime = (date) => {
  if (!date) return "";
  const diff = Date.now() - new Date(date).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "now";
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
};

const STATUS_TAG = {
  active: { label: "Active", color: "bg-emerald-100 text-emerald-700" },
  waiting: { label: "Waiting", color: "bg-amber-100 text-amber-700" },
  closed: { label: "Closed", color: "bg-neutral-100 text-neutral-600" },
};

const ChatConversationList = ({ conversations = [], activeId, onSelect }) => {
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
        {conversations.length === 0 && (
          <div className="px-4 py-8 text-center text-[12px] text-neutral-400">
            No conversations yet.
          </div>
        )}
        {conversations.map((conv, idx) => {
          const isActive = conv._id === activeId;
          const customerName =
            conv.user?.name || conv.user?.email || "Customer";
          const lastText =
            conv.latestMessage?.content || "No messages yet";
          const tag = STATUS_TAG[conv.status] || STATUS_TAG.active;
          return (
            <button
              key={conv._id}
              onClick={() => onSelect(conv)}
              className={`w-full text-left flex items-start gap-[10px] px-[16px] py-[12px] transition-all border-b border-neutral-50 relative
                ${isActive ? "bg-neutral-100" : "hover:bg-neutral-50"}
              `}
              style={{
                animation: `listIn 0.25s ease-out both`,
                animationDelay: `${idx * 0.04}s`,
              }}
            >
              <ChatAvatar
                name={customerName}
                role="customer"
                status={conv.user?.status || "online"}
                size="md"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-[2px]">
                  <span
                    className={`text-[13px] font-semibold truncate ${isActive ? "text-black" : "text-neutral-800"}`}
                  >
                    {customerName}
                  </span>
                  <span className="text-[10px] text-neutral-400 shrink-0 ml-[4px]">
                    {formatTime(conv.lastActivity || conv.updatedAt)}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 truncate leading-tight">
                  {lastText}
                </p>
                <div className="flex items-center gap-[6px] mt-[5px]">
                  <span
                    className={`text-[9px] font-bold px-[6px] py-[2px] rounded-full uppercase tracking-wide ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                </div>
              </div>
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
