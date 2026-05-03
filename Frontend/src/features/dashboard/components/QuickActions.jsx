const actions = [
  { label: "Invite Agent", icon: "person_add" },
  { label: "Upload KB", icon: "menu_book" },
];

const QuickActions = () => {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-[24px] flex flex-col">
      <h4 className="font-bold text-black mb-[24px]">Quick Actions</h4>

      <div className="flex flex-col gap-[12px]">
        {actions.map((a) => (
          <button
            key={a.label}
            className="w-full flex items-center justify-between p-[16px] bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-100 transition-all duration-200 group active:scale-[0.98]"
          >
            <div className="flex items-center gap-[12px]">
              <span className="material-symbols-outlined text-neutral-400 group-hover:text-black transition-colors">
                {a.icon}
              </span>
              <span className="text-[13px] font-semibold">{a.label}</span>
            </div>
            <span className="material-symbols-outlined text-[18px] text-neutral-300">
              chevron_right
            </span>
          </button>
        ))}
      </div>

      {/* Upgrade card */}
      <div className="mt-auto pt-[24px]">
        <div className="bg-neutral-900 text-white rounded-xl p-[16px] relative overflow-hidden">
          <div className="relative z-10">
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-[4px]">
              Support Tier
            </h5>
            <p className="text-[17px] font-bold mb-[12px]">Enterprise Plus</p>
            <button className="text-[10px] font-bold bg-white text-black px-[12px] py-[6px] rounded-lg uppercase hover:opacity-90 transition-opacity active:scale-95">
              Upgrade
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
