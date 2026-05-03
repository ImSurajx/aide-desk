import { useState } from "react";
import TeamFilter from "./TeamFilter";
import TeamRow from "./TeamRow";

const agents = [
  {
    name: "Sarah Jenkins",
    agentId: "#AD-0921",
    role: "Lead",
    status: "Online",
    assigned: "12 Tickets",
    lastActive: "Just now",
  },
  {
    name: "Michael Chen",
    agentId: "#AD-0842",
    role: "Agent",
    status: "Online",
    assigned: "5 Tickets",
    lastActive: "4m ago",
  },
  {
    name: "Emma Watson",
    agentId: "#AD-0115",
    role: "Admin",
    status: "Offline",
    assigned: "0 Tickets",
    lastActive: "2h ago",
  },
  {
    name: "",
    agentId: "",
    email: "d.roberts@aidedesk.com",
    role: "Agent",
    status: "Pending",
    assigned: "-",
    lastActive: "Sent 1h ago",
    pending: true,
  },
];

const TeamTable = () => {
  const [filter, setFilter] = useState("All Agents");
  const [search, setSearch] = useState("");

  const filtered = agents.filter((a) => {
    const matchStatus =
      filter === "All Agents" ||
      (filter === "Pending" && a.pending) ||
      (!a.pending && a.status === filter);
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      (a.email || "").toLowerCase().includes(search.toLowerCase()) ||
      (a.agentId || "").toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
      <TeamFilter
        active={filter}
        onChange={setFilter}
        search={search}
        onSearch={setSearch}
      />

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-50">
              {[
                "Agent",
                "Role",
                "Status",
                "Assigned",
                "Last Active",
                "Actions",
              ].map((h) => (
                <th
                  key={h}
                  className={`px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-neutral-400 ${h === "Actions" ? "text-right" : ""}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {filtered.map((a, i) => (
              <TeamRow key={i} {...a} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-[16px] bg-white border-t border-neutral-200">
        <p className="text-sm text-neutral-500">
          Showing 1 to {filtered.length} of 42 agents
        </p>
        <div className="flex items-center gap-2">
          <button
            disabled
            className="p-2 border border-neutral-200 rounded-lg text-neutral-400 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-sm">
              chevron_left
            </span>
          </button>
          <button className="px-3 py-1 text-sm font-semibold border border-black rounded-lg bg-black text-white">
            1
          </button>
          <button className="px-3 py-1 text-sm font-medium text-neutral-500 hover:text-black">
            2
          </button>
          <button className="px-3 py-1 text-sm font-medium text-neutral-500 hover:text-black">
            3
          </button>
          <button className="p-2 border border-neutral-200 rounded-lg text-neutral-400 hover:text-black hover:border-black transition-all">
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamTable;
