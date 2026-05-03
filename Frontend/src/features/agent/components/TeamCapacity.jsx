const TeamCapacity = () => (
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-[24px]">
    {/* Capacity panel */}
    <div className="md:col-span-2 bg-white border border-neutral-200 p-[24px] rounded-xl flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h4 className="text-[18px] font-semibold text-black">Team Capacity</h4>
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          Live Updates
        </span>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="font-medium">Active Bandwidth</span>
            <span className="text-neutral-500">82%</span>
          </div>
          <div className="h-1.5 w-full bg-neutral-100 rounded-full">
            <div
              className="h-full bg-black rounded-full"
              style={{ width: "82%" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-[16px] bg-neutral-50 rounded-xl border border-neutral-100">
            <p className="text-xs text-neutral-500 mb-1">Peak Online</p>
            <p className="text-[18px] font-bold text-black">24 Agents</p>
          </div>
          <div className="p-[16px] bg-neutral-50 rounded-xl border border-neutral-100">
            <p className="text-xs text-neutral-500 mb-1">Current Backlog</p>
            <p className="text-[18px] font-bold text-black">142 Tickets</p>
          </div>
        </div>
      </div>
    </div>

    {/* AI hire card */}
    <div className="bg-black text-white p-[24px] rounded-xl flex flex-col justify-between">
      <div>
        <span className="material-symbols-outlined text-[32px] mb-4 block">
          auto_awesome
        </span>
        <h4 className="text-[18px] font-bold mb-2">Hire with AI</h4>
        <p className="text-sm text-neutral-400 leading-relaxed">
          Let AideDesk analyze your ticket trends to recommend the optimal
          staffing levels for next quarter.
        </p>
      </div>
      <button className="mt-6 w-full py-2 bg-white text-black font-semibold rounded-lg text-sm hover:bg-neutral-100 transition-colors">
        Start Analysis
      </button>
    </div>
  </div>
);

export default TeamCapacity;
