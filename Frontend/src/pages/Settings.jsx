import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/TopBar";
import SettingsTabs from "../components/settings/SettingsTabs";
import GeneralSection from "../components/settings/GeneralSection";
import SecuritySection from "../components/settings/SecuritySection";
import BillingSection from "../components/settings/BillingSection";
import DangerZone from "../components/settings/DangerZone";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="bg-neutral-50 text-on-surface min-h-screen font-['Poppins']">
      <Sidebar />

      <div className="ml-64 min-h-screen flex flex-col">
        <TopBar />

        <main className="p-[32px] max-w-5xl">
          <div className="mb-[24px]">
            <h2 className="text-[32px] font-bold text-black tracking-tight">
              Settings
            </h2>
            <p className="text-neutral-500 text-[14px] mt-1">
              Manage your workspace configuration, security, and billing
              preferences.
            </p>
          </div>

          <SettingsTabs active={activeTab} onChange={setActiveTab} />

          <div className="space-y-[32px]">
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
