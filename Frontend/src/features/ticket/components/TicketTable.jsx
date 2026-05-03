import { useState } from "react";
import TicketRow from "./TicketRow";

const tickets = [
  {
    status: "In Progress",
    subject: "Enterprise API Connectivity Issue",
    ticketId: "TKT-8291",
    category: "System Architecture",
    requester: "Marcus Sterling",
    company: "Global Tech Inc.",
    priority: "High",
    time: "12 mins ago",
    created: "09:42 AM",
    timeColor: "text-neutral-900",
  },
  {
    status: "New",
    subject: "Billing Inquiry: Subscription Tier Update",
    ticketId: "TKT-8290",
    category: "Finance",
    requester: "Elena Rodriguez",
    company: "Creatix Studio",
    priority: "Normal",
    time: "1 hour ago",
    created: "08:30 AM",
    timeColor: "text-neutral-900",
  },
  {
    status: "Resolved",
    subject: "Password Reset Request",
    ticketId: "TKT-8288",
    category: "Security",
    requester: "David Chen",
    company: "Loom Systems",
    priority: "Low",
    time: "2 hours ago",
    created: "07:15 AM",
    timeColor: "text-neutral-900",
  },
  {
    status: "Overdue",
    subject: "SLA Alert: Database Latency Spike",
    ticketId: "TKT-8285",
    category: "Infrastructure",
    requester: "Sarah Jenkins",
    company: "CloudFlow",
    priority: "High",
    time: "3 hours ago",
    created: "06:10 AM",
    timeColor: "text-red-600",
  },
  {
    status: "In Progress",
    subject: "UI Glitch in Dashboard Theme Toggle",
    ticketId: "TKT-8281",
    category: "Product/UI",
    requester: "James Wilson",
    company: "Design Systems Co",
    priority: "Normal",
    time: "4 hours ago",
    created: "05:45 AM",
    timeColor: "text-neutral-900",
  },
];

const TicketTable = () => (
  <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
    <table className="w-full text-left">
      <thead>
        <tr className="bg-neutral-50 border-b border-neutral-200">
          {["Status", "Subject", "Requester", "Priority", "Time", ""].map(
            (h) => (
              <th
                key={h}
                className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-neutral-500"
              >
                {h}
              </th>
            ),
          )}
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-200">
        {tickets.map((t) => (
          <TicketRow key={t.ticketId} {...t} />
        ))}
      </tbody>
    </table>

    {/* Pagination — reusing same pattern as CustomerTable */}
    <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-200 flex items-center justify-between">
      <span className="text-[11px] text-neutral-500 font-medium">
        Showing 1 to 5 of 1,284 tickets
      </span>
      <div className="flex gap-2">
        <button className="px-3 py-1 border border-neutral-200 rounded text-[11px] bg-white text-neutral-400 cursor-not-allowed">
          Previous
        </button>
        <button className="px-3 py-1 border border-neutral-200 rounded text-[11px] bg-white text-black font-semibold hover:bg-neutral-50 transition-colors">
          Next
        </button>
      </div>
    </div>
  </div>
);

export default TicketTable;
