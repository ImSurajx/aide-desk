import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/TopBar";
import CustomerMetrics from "../components/customers/CustomerMetrics";
import CustomerTabs from "../components/customers/CustomerTabs";
import CustomerTable from "../components/customers/CustomerTable";
import CustomerInsights from "../components/customers/CustomerInsights";
import CreateCustomerModal from "../components/customers/CreateCustomerModal";
import PageWrapper from "../components/ui/PageWrapper";

const Customers = () => {
  const [activeTab, setActiveTab] = useState("All Customers");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-surface text-on-surface min-h-screen font-['Poppins']">
      <Sidebar />

      <div className="ml-64 min-h-screen flex flex-col">
        <TopBar />

        <main className="p-[32px] flex flex-col gap-[32px] flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-[16px]">
            <div>
              <nav className="flex items-center gap-[8px] mb-[8px]">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Enterprise
                </span>
                <span className="text-neutral-300">/</span>
                <span className="text-[10px] font-mono text-black font-semibold uppercase tracking-widest">
                  Management
                </span>
              </nav>
              <h2 className="text-[32px] font-bold text-black tracking-tight">
                Customers
              </h2>
            </div>
            <div className="flex items-center gap-[12px]">
              <button className="flex items-center gap-[8px] px-[16px] py-[8px] bg-white border border-neutral-200 text-black text-[13px] font-medium rounded-xl hover:bg-neutral-50 transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  file_download
                </span>
                Bulk Import
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-[8px] px-[16px] py-[8px] bg-black text-white text-[13px] font-medium rounded-xl hover:opacity-90 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>
                Add Customer
              </button>
            </div>
          </div>

          {/* Metrics */}
          <CustomerMetrics />

          {/* Tabs + Table */}
          <div className="flex flex-col gap-[24px]">
            <CustomerTabs active={activeTab} onChange={setActiveTab} />
            <CustomerTable />
          </div>

          {/* Insights */}
          <CustomerInsights />
        </main>
      </div>
      {showModal && <CreateCustomerModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Customers;
