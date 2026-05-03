import { useState } from "react";

const priorities = ["Low", "Normal", "High"];

const resources = [
  { title: "Resetting user passwords", meta: "Technical • 2m read" },
  { title: "Billing FAQ", meta: "Finance • 5m read" },
];

const history = [
  { id: "TICKET-2041", date: "Oct 24", status: "Closed", active: true },
  { id: "TICKET-1982", date: "Aug 05", status: "Resolved", active: false },
];

const CreateTicketModal = ({ onClose }) => {
  const [priority, setPriority] = useState("Normal");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-[32px] bg-black/40 backdrop-blur-sm">
      <div className="max-w-[840px] w-full bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="px-[32px] py-[24px] border-b border-neutral-200 flex justify-between items-center">
          <div>
            <h1 className="text-[24px] font-semibold text-black tracking-tight">
              Create New Ticket
            </h1>
            <p className="text-[13px] text-neutral-500 mt-1">
              Fill in the details below to log a new support request.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-neutral-500">
              close
            </span>
          </button>
        </div>

        <div className="flex">
          {/* Main form */}
          <div className="flex-1 p-[32px] space-y-[24px] border-r border-neutral-200">
            <div className="grid grid-cols-2 gap-[24px]">
              {/* Customer search */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500">
                  Customer
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search customer..."
                    className="w-full h-11 pl-10 pr-[16px] bg-neutral-50 border border-neutral-200 rounded-lg text-[14px] focus:outline-none focus:border-black transition-colors"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[20px]">
                    search
                  </span>
                </div>
              </div>

              {/* Channel */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500">
                  Channel
                </label>
                <div className="relative">
                  <select className="w-full h-11 px-[16px] bg-neutral-50 border border-neutral-200 rounded-lg text-[14px] focus:outline-none focus:border-black appearance-none transition-colors">
                    <option>Email</option>
                    <option>Chat</option>
                    <option>Phone</option>
                    <option>Portal</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500">
                Subject
              </label>
              <input
                type="text"
                placeholder="Brief summary of the issue"
                className="w-full h-11 px-[16px] bg-neutral-50 border border-neutral-200 rounded-lg text-[14px] focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Priority pills */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500">
                Priority
              </label>
              <div className="flex gap-[16px]">
                {priorities.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`flex-1 py-2 px-4 border rounded-lg text-[13px] font-medium transition-all ${
                      priority === p
                        ? "border-black bg-black text-white"
                        : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-black"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500">
                Description
              </label>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <div className="flex items-center gap-4 px-4 py-2 border-b border-neutral-200 bg-neutral-50">
                  {[
                    "format_bold",
                    "format_italic",
                    "format_list_bulleted",
                    "link",
                    "image",
                  ].map((icon) => (
                    <span
                      key={icon}
                      className="material-symbols-outlined text-[18px] text-neutral-400 cursor-pointer hover:text-black transition-colors"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
                <textarea
                  className="w-full px-[16px] py-[16px] bg-neutral-50 text-[14px] focus:outline-none resize-none min-h-[140px] border-none"
                  placeholder="Provide detailed information about the request..."
                />
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="w-64 bg-neutral-50 p-[16px] space-y-[24px]">
            {/* Resources */}
            <div className="space-y-[12px]">
              <h2 className="text-[12px] font-semibold uppercase tracking-widest text-black border-b border-neutral-200 pb-2 flex items-center justify-between">
                Resources
                <span className="material-symbols-outlined text-[16px] text-neutral-400">
                  auto_awesome
                </span>
              </h2>
              <div className="space-y-[8px]">
                {resources.map((r) => (
                  <div
                    key={r.title}
                    className="p-3 bg-white border border-neutral-200 rounded-lg cursor-pointer hover:border-black transition-colors"
                  >
                    <p className="text-[13px] font-semibold text-black">
                      {r.title}
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      {r.meta}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* History */}
            <div className="space-y-[12px] pt-[16px] border-t border-neutral-200">
              <h2 className="text-[12px] font-semibold uppercase tracking-widest text-black border-b border-neutral-200 pb-2">
                History
              </h2>
              <div className="space-y-[16px]">
                {history.map((h) => (
                  <div
                    key={h.id}
                    className="relative pl-6 border-l border-neutral-200"
                  >
                    <div
                      className={`absolute -left-[5px] top-1 w-2 h-2 rounded-full ${h.active ? "bg-black" : "bg-neutral-300"}`}
                    />
                    <p className="text-[12px] font-semibold text-black">
                      {h.id}
                    </p>
                    <p className="text-[10px] text-neutral-400">
                      {h.date} • {h.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <div className="px-[32px] py-[24px] bg-neutral-50 border-t border-neutral-200 flex justify-end items-center gap-[16px]">
          <button
            onClick={onClose}
            className="px-[24px] py-[12px] text-[12px] font-semibold uppercase tracking-widest text-black hover:bg-neutral-100 transition-colors rounded-lg"
          >
            Cancel
          </button>
          <button className="px-[24px] py-[12px] text-[12px] font-semibold uppercase tracking-widest bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-2 active:scale-95">
            Create Ticket
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTicketModal;
