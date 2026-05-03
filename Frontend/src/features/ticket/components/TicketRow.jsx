const statusStyle = {
  "In Progress": "bg-yellow-50 text-yellow-700",
  New: "bg-blue-50 text-blue-700",
  Resolved: "bg-green-50 text-green-700",
  Overdue: "bg-red-50 text-red-700",
};

const priorityStyle = {
  High: "bg-black text-white",
  Normal: "bg-neutral-100 text-neutral-700",
  Low: "bg-neutral-100 text-neutral-700",
};

const TicketRow = ({
  status,
  subject,
  ticketId,
  category,
  requester,
  company,
  priority,
  time,
  created,
  timeColor,
}) => (
  <tr className="hover:bg-neutral-50 transition-colors group">
    <td className="py-4 px-6">
      <span
        className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${statusStyle[status]}`}
      >
        {status}
      </span>
    </td>
    <td className="py-4 px-6">
      <div className="flex flex-col">
        <span className="font-semibold text-black text-sm">{subject}</span>
        <span className="text-xs text-neutral-400">
          {ticketId} • {category}
        </span>
      </div>
    </td>
    <td className="py-4 px-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-neutral-400 text-[16px]">
            person
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-sm">{requester}</span>
          <span className="text-[10px] text-neutral-500">{company}</span>
        </div>
      </div>
    </td>
    <td className="py-4 px-6">
      <span
        className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${priorityStyle[priority]}`}
      >
        {priority}
      </span>
    </td>
    <td className="py-4 px-6">
      <div className="flex flex-col text-[11px]">
        <span className={`font-medium ${timeColor || "text-neutral-900"}`}>
          {time}
        </span>
        <span className="text-neutral-400">Created: {created}</span>
      </div>
    </td>
    <td className="py-4 px-6 text-right">
      <button className="text-neutral-400 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="material-symbols-outlined">more_horiz</span>
      </button>
    </td>
  </tr>
);

export default TicketRow;
