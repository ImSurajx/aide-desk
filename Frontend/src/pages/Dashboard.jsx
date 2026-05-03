import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/TopBar";
import KpiCard from "../components/dashboard/KpiCard";
import TicketVolumeChart from "../components/dashboard/TicketVolumeChart";
import CsatBreakdown from "../components/dashboard/CsatBreakdown";
import RecentTicketsTable from "../components/dashboard/RecentTicketsTable";
import QuickActions from "../components/dashboard/QuickActions";
import GenerateReportModal from "../components/dashboard/GenerateReportModal";
import PageWrapper from "../components/ui/PageWrapper";
import { useState } from "react";

const kpis = [
  {
    icon: "confirmation_number",
    label: "Total Tickets",
    value: "1,284",
    badge: "+12%",
    badgeType: "success",
  },
  {
    icon: "psychology",
    label: "AI Resolution Rate",
    value: "94.2%",
    badge: "+1.2%",
    badgeType: "success",
  },
  {
    icon: "timer",
    label: "Avg. Response Time",
    value: "14m",
    badge: "-8%",
    badgeType: "success",
  },
  {
    icon: "support_agent",
    label: "Active Agents",
    value: "24/42",
    badge: "Live",
    badgeType: "neutral",
  },
];

const Dashboard = () => {
  const [showReport, setShowReport] = useState(false);

  return (
    <div className="bg-surface text-on-surface min-h-screen font-['Poppins']">
      <Sidebar />

      <div className="ml-64 min-h-screen flex flex-col">
        <TopBar />

        <main className="p-[32px] flex flex-col gap-[32px] flex-1">
          {/* Header */}
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-[32px] font-bold text-black tracking-tight">
                Dashboard
              </h2>
              <p className="text-[14px] text-neutral-500">
                Welcome back, here's what's happening today.
              </p>
            </div>
            <button
              onClick={() => setShowReport(true)}
              className="flex items-center gap-[8px] bg-black text-white px-[20px] py-[10px] rounded-xl font-medium text-[13px] transition-transform active:scale-95 hover:opacity-90"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Create Report
            </button>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {kpis.map((k) => (
              <KpiCard key={k.label} {...k} />
            ))}
          </div>

          {/* Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
            <TicketVolumeChart />
            <CsatBreakdown />
          </div>

          {/* Bottom */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-[24px]">
            <RecentTicketsTable />
            <QuickActions />
          </div>
        </main>
      </div>
      {showReport && (
        <GenerateReportModal onClose={() => setShowReport(false)} />
      )}
    </div>
  );
};

export default Dashboard;
