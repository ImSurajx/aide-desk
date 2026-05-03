const roleStyle = {
  Lead: "bg-black text-white",
  Agent: "bg-neutral-100 text-neutral-700",
  Admin: "bg-neutral-200 text-black border border-neutral-300",
};

const statusConfig = {
  Online: { dot: "bg-green-500", label: "Online", text: "text-black" },
  Offline: {
    dot: "bg-neutral-300",
    label: "Offline",
    text: "text-neutral-500",
  },
  Pending: { dot: "bg-amber-400", label: "Pending", text: "text-black" },
};

const TeamRow = ({
  name,
  agentId,
  email,
  role,
  status,
  assigned,
  lastActive,
  pending,
}) => {
  const s = statusConfig[status];

  return (
    <tr className="hover:bg-neutral-50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {pending ? (
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center border border-dashed border-neutral-300">
              <span className="material-symbols-outlined text-neutral-400 text-[20px]">
                person
              </span>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-[12px] font-bold text-black border border-neutral-200">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
          <div>
            <p
              className={`text-sm font-semibold ${pending ? "text-neutral-400 italic" : "text-black"}`}
            >
              {pending ? "Invitation Sent" : name}
            </p>
            <p className="text-xs text-neutral-400 font-mono">
              {pending ? email : agentId}
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${roleStyle[role]}`}
        >
          {role}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${s.dot}`} />
          <span className={`text-sm ${s.text}`}>{s.label}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className={`text-sm font-medium ${pending ? "text-neutral-400" : "text-black"}`}
        >
          {assigned}
        </span>
      </td>
      <td className="px-6 py-4 text-sm text-neutral-500">{lastActive}</td>
      <td className="px-6 py-4 text-right">
        {pending ? (
          <button className="px-3 py-1 text-xs font-semibold text-black border border-neutral-200 rounded hover:bg-neutral-50 transition-colors">
            Resend
          </button>
        ) : (
          <button className="p-2 text-neutral-400 hover:text-black transition-colors">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        )}
      </td>
    </tr>
  );
};

export default TeamRow;
