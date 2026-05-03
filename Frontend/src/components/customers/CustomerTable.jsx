import { useState } from "react";

const customers = [
  {
    name: "Marcus Chen",
    id: "#C-9021",
    email: "m.chen@nebula.io",
    tags: [{ label: "Enterprise", dark: true }, { label: "Priority" }],
    timezone: "PST (UTC-8)",
    updated: "2 mins ago",
    initials: "MC",
    suspended: false,
  },
  {
    name: "Elena Rodriguez",
    id: "#C-4412",
    email: "elena.rod@vortex.com",
    tags: [{ label: "Pro Plan" }, { label: "API Access" }],
    timezone: "EST (UTC-5)",
    updated: "14 hours ago",
    initials: "ER",
    suspended: false,
  },
  {
    name: "Samuel Jenkins",
    id: "#C-1288",
    email: "sam.j@logix.org",
    tags: [{ label: "Suspended", error: true }, { label: "Trial" }],
    timezone: "GMT (UTC+0)",
    updated: "Oct 24, 2023",
    initials: "SJ",
    suspended: true,
  },
  {
    name: "Liam Thorne",
    id: "#C-5561",
    email: "thor@nordic.dev",
    tags: [{ label: "Enterprise", dark: true }, { label: "Beta Tester" }],
    timezone: "CET (UTC+1)",
    updated: "Oct 22, 2023",
    initials: "LT",
    suspended: false,
  },
  {
    name: "Avery Simmons",
    id: "#C-3301",
    email: "avery@simms.co",
    tags: [{ label: "Churn Risk" }],
    timezone: "HKT (UTC+8)",
    updated: "Yesterday",
    initials: "AS",
    suspended: false,
  },
];

const Tag = ({ label, dark, error }) => {
  if (dark) return (
    <span className="text-[10px] font-bold px-[8px] py-[2px] bg-black text-white rounded-full">
      {label}
    </span>
  );
  if (error) return (
    <span className="text-[10px] font-bold px-[8px] py-[2px] bg-error text-white rounded-full">
      {label}
    </span>
  );
  return (
    <span className="text-[10px] font-bold px-[8px] py-[2px] bg-neutral-100 text-neutral-600 rounded-full">
      {label}
    </span>
  );
};

const CustomerTable = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-100">
              {["Name", "Email", "Tags", "Timezone", "Last Updated", ""].map((h) => (
                <th key={h} className="px-[24px] py-[16px] text-[11px] font-semibold text-neutral-400 uppercase tracking-widest">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-50">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-neutral-50/50 transition-colors group">
                {/* Name */}
                <td className="px-[24px] py-[16px]">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-100 flex items-center justify-center text-[11px] font-bold text-neutral-500 shrink-0">
                      {c.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-[6px]">
                        <span className="text-[13px] font-semibold text-black hover:underline cursor-pointer">
                          {c.name}
                        </span>
                        {c.suspended && (
                          <span className="material-symbols-outlined text-error text-[14px]">
                            block
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400">{c.id}</p>
                    </div>
                  </div>
                </td>
                {/* Email */}
                <td className="px-[24px] py-[16px] text-[13px] text-neutral-600">
                  {c.email}
                </td>
                {/* Tags */}
                <td className="px-[24px] py-[16px]">
                  <div className="flex flex-wrap gap-[4px]">
                    {c.tags.map((t) => <Tag key={t.label} {...t} />)}
                  </div>
                </td>
                {/* Timezone */}
                <td className="px-[24px] py-[16px] text-[12px] text-neutral-500 font-mono">
                  {c.timezone}
                </td>
                {/* Updated */}
                <td className="px-[24px] py-[16px] text-[13px] text-neutral-500">
                  {c.updated}
                </td>
                {/* Actions */}
                <td className="px-[24px] py-[16px] text-right">
                  <button className="text-neutral-400 hover:text-black transition-colors p-[4px] rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-[24px] py-[16px] bg-neutral-50/30 border-t border-neutral-100 flex items-center justify-between">
        <p className="text-[11px] font-mono text-neutral-400">
          Showing 1 to 5 of 12,842 customers
        </p>
        <div className="flex items-center gap-[8px]">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="p-[6px] border border-neutral-200 rounded-lg hover:bg-white transition-all disabled:opacity-30"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <div className="flex items-center gap-[4px]">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`px-[12px] py-[4px] text-[11px] font-bold rounded-lg transition-colors ${
                  page === n
                    ? "bg-black text-white"
                    : "text-neutral-400 hover:text-black"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="p-[6px] border border-neutral-200 rounded-lg hover:bg-white transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;