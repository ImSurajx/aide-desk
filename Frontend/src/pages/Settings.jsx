import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/TopBar";
import SettingsTabs from "../components/settings/SettingsTabs";
import GeneralSection from "../components/settings/GeneralSection";
import SecuritySection from "../components/settings/SecuritySection";
import BillingSection from "../components/settings/BillingSection";
import DangerZone from "../components/settings/DangerZone";
import PageWrapper from "../components/ui/PageWrapper";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <PageWrapper>
      <div className="bg-neutral-50 text-on-surface min-h-screen font-['Poppins']">
        <Sidebar />

        <div className="ml-64 min-h-screen flex flex-col">
          <TopBar />

          {/* 🔥 FIX: removed max-w-5xl and added full-width layout */}
          <main className="p-[32px] flex flex-col gap-[32px] flex-1 w-full">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-[8px]"
            >
              <h2 className="text-[32px] font-bold text-black tracking-tight">
                Settings
              </h2>
              <p className="text-neutral-500 text-[14px] mt-1">
                Manage your workspace configuration, security, and billing
                preferences.
              </p>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.08, ease: "easeOut" }}
            >
              <SettingsTabs active={activeTab} onChange={setActiveTab} />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.16, ease: "easeOut" }}
              className="space-y-[32px]"
            >
              {activeTab === "General" && (
                <>
                  <GeneralSection />
                  <DangerZone />
                </>
              )}
              {activeTab === "Security" && <SecuritySection />}
              {activeTab === "Billing" && <BillingSection />}
              {activeTab === "API & Integrations" && (
                <div className="bg-white border border-neutral-200 rounded-xl p-[24px] text-center py-[64px]">
                  <span className="material-symbols-outlined text-neutral-300 text-[48px] block mb-[16px]">
                    api
                  </span>
                  <h3 className="text-[18px] font-semibold text-black mb-[8px]">
                    API & Integrations
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    Coming soon — manage your API keys and third-party
                    integrations.
                  </p>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Settings;
