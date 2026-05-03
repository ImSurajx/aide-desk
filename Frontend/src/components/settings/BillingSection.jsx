const invoices = [
  { date: "Sep 01, 2023", amount: "$499.00" },
  { date: "Aug 01, 2023", amount: "$499.00" },
];

const features = [
  "Unlimited team members",
  "Custom domain and branding",
  "Priority 24/7 support",
];

const BillingSection = () => (
  <section className="grid grid-cols-12 gap-[24px]">
    {/* Current plan */}
    <div className="col-span-12 md:col-span-8 bg-white border border-neutral-200 rounded-xl p-[24px]">
      <div className="flex justify-between items-start mb-[24px]">
        <div>
          <h3 className="text-[18px] font-semibold text-black mb-1">
            Current Plan
          </h3>
          <p className="text-xs text-neutral-500">
            Your next billing cycle starts Oct 1, 2023.
          </p>
        </div>
        <span className="px-[8px] py-1 bg-black text-white text-[10px] font-bold rounded-full uppercase">
          Enterprise
        </span>
      </div>
      <div className="flex items-end gap-[4px] mb-[24px]">
        <span className="text-[36px] font-bold text-black">$499</span>
        <span className="text-neutral-400 mb-1 text-sm">/per month</span>
      </div>
      <div className="space-y-[8px] mb-[24px]">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-[8px] text-sm">
            <span className="material-symbols-outlined text-neutral-400 text-[18px]">
              check_circle
            </span>
            <span>{f}</span>
          </div>
        ))}
      </div>
      <div className="pt-[24px] border-t border-neutral-100 flex gap-[16px]">
        <button className="bg-black text-white px-[24px] py-[8px] rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors active:scale-95">
          Change Plan
        </button>
        <button className="border border-neutral-200 px-[24px] py-[8px] rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors">
          Manage Billing
        </button>
      </div>
    </div>

    {/* Payment card */}
    <div className="col-span-12 md:col-span-4 bg-black text-white rounded-xl p-[24px] flex flex-col justify-between overflow-hidden relative">
      <div className="relative z-10">
        <p className="text-[10px] uppercase tracking-widest opacity-60 font-semibold mb-[24px]">
          Default Payment Method
        </p>
        <div className="flex items-center gap-[16px]">
          <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white">
              credit_card
            </span>
          </div>
          <div>
            <p className="text-sm font-medium">Visa •••• 4242</p>
            <p className="text-xs opacity-60">Expires 12/26</p>
          </div>
        </div>
      </div>
      <div className="mt-[32px] relative z-10">
        <button className="w-full py-[8px] bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold transition-colors">
          Update Card
        </button>
      </div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
    </div>

    {/* Billing history */}
    <div className="col-span-12 bg-white border border-neutral-200 rounded-xl overflow-hidden">
      <div className="px-[24px] py-[16px] border-b border-neutral-100">
        <h3 className="text-[18px] font-semibold text-black">
          Billing History
        </h3>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-neutral-50 text-neutral-500 font-medium">
            {["Date", "Amount", "Status", "Invoice"].map((h) => (
              <th
                key={h}
                className={`px-[24px] py-[8px] text-[11px] font-bold uppercase tracking-wider ${h === "Invoice" ? "text-right" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {invoices.map((inv) => (
            <tr
              key={inv.date}
              className="hover:bg-neutral-50 transition-colors"
            >
              <td className="px-[24px] py-[16px] font-medium text-black">
                {inv.date}
              </td>
              <td className="px-[24px] py-[16px] text-neutral-700">
                {inv.amount}
              </td>
              <td className="px-[24px] py-[16px]">
                <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">
                  Paid
                </span>
              </td>
              <td className="px-[24px] py-[16px] text-right">
                <button className="text-neutral-400 hover:text-black transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    download
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default BillingSection;
