import ChatAvatar from "./ChatAvatar";

const ChatHeader = ({ conversation, onClose }) => {
  if (!conversation) return null;

  const { customer, tag, tagColor } = conversation;

  const actions = [
    { icon: "call", label: "Call" },
    { icon: "videocam", label: "Video" },
    { icon: "info", label: "Info" },
    { icon: "more_vert", label: "More" },
  ];

  return (
    <div
      className="flex items-center justify-between px-[20px] py-[14px] border-b border-neutral-200 bg-white"
      style={{ animation: "headerIn 0.2s ease-out both" }}
    >
      {/* Left: avatar + name */}
      <div className="flex items-center gap-[12px]">
        {onClose && (
          <button
            onClick={onClose}
            className="p-[6px] hover:bg-neutral-100 rounded-lg transition-colors mr-[2px]"
          >
            <span className="material-symbols-outlined text-[18px] text-neutral-400">
              arrow_back
            </span>
          </button>
        )}

        <ChatAvatar
          name={customer.name}
          role="customer"
          status={customer.status}
          size="md"
          showStatus
        />

        <div>
          <div className="flex items-center gap-[8px]">
            <h3 className="text-[14px] font-semibold text-black">
              {customer.name}
            </h3>
            <span
              className={`text-[9px] font-bold px-[6px] py-[2px] rounded-full uppercase tracking-wide ${tagColor}`}
            >
              {tag}
            </span>
          </div>
          <p className="text-[11px] text-neutral-500 mt-[1px] flex items-center gap-[4px]">
            <span
              className={`w-[6px] h-[6px] rounded-full inline-block ${
                customer.status === "online"
                  ? "bg-emerald-500"
                  : customer.status === "away"
                    ? "bg-amber-400"
                    : "bg-neutral-300"
              }`}
            />
            {customer.status === "online"
              ? "Active now"
              : customer.status === "away"
                ? "Away"
                : "Offline"}
          </p>
        </div>
      </div>

      {/* Right: action buttons */}
      <div className="flex items-center gap-[2px]">
        {actions.map((a) => (
          <button
            key={a.icon}
            title={a.label}
            className="p-[8px] rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {a.icon}
            </span>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes headerIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ChatHeader;
