import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/TopBar";
import TicketMetrics from "../components/tickets/TicketMetrics";
import TicketTabs from "../components/tickets/TicketTabs";
import TicketTable from "../components/tickets/TicketTable";
import CreateTicketModal from "../components/tickets/CreateTicketModal";
import PageWrapper from "../App/Components/ui/PageWrapper";

const Tickets = () => {
  const [activeTab, setActiveTab] = useState("All Tickets");
  const [showModal, setShowModal] = useState(false);

  return (
    <PageWrapper>
      <div className="bg-white text-on-surface min-h-screen font-['Poppins']">
        <Sidebar />
        <div className="ml-64 min-h-screen flex flex-col">
          <TopBar />
          <main className="pl-8 pr-8 pt-8 pb-12 flex flex-col gap-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-end justify-between mb-8"
            >
              <div>
                <h2 className="text-[32px] font-bold text-black tracking-tight mb-2">
                  Ticket Management
                </h2>
                <p className="text-neutral-500 text-[14px]">
                  Review and manage support requests across all channels.
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-black text-white px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-neutral-800 transition-colors font-medium text-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                Create New Ticket
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.08, ease: "easeOut" }}
            >
              <TicketMetrics />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.16, ease: "easeOut" }}
            >
              <TicketTabs active={activeTab} onChange={setActiveTab} />
              <TicketTable />
            </motion.div>
          </main>
        </div>
        {showModal && <CreateTicketModal onClose={() => setShowModal(false)} />}
      </div>
    </PageWrapper>
  );
};

export default Tickets;
