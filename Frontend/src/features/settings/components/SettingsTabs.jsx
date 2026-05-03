const tabs = ["General", "Security", "Billing", "API & Integrations"];

const SettingsTabs = ({ active, onChange }) => (
  <div className="flex gap-[24px] border-b border-neutral-200 mb-[32px]">
    {tabs.map((t) => (
      <button
        key={t}
        onClick={() => onChange(t)}
        className={`pb-[16px] text-sm font-medium transition-colors ${
          active === t
            ? "border-b-2 border-black text-black font-semibold"
            : "text-neutral-500 hover:text-black"
        }`}
      >
        {t}
      </button>
    ))}
  </div>
);

export default SettingsTabs;
