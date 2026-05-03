const KpiCard = ({ icon, label, value, badge, badgeType = "success" }) => {
  const badgeStyles = {
    success: "text-emerald-600 bg-emerald-50",
    neutral: "text-neutral-400 bg-neutral-50",
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-[24px] transition-all hover:border-black/20">
      <div className="flex justify-between items-start mb-[16px]">
        <div className="p-[8px] bg-neutral-50 rounded-lg text-black">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span
          className={`text-[11px] font-semibold px-[8px] py-[4px] rounded-full ${badgeStyles[badgeType]}`}
        >
          {badge}
        </span>
      </div>
      <p className="text-neutral-500 text-[13px] font-medium">{label}</p>
      <h3 className="text-[30px] font-bold mt-[4px] tracking-tight">{value}</h3>
    </div>
  );
};

export default KpiCard;
