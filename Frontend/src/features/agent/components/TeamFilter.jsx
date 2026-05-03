const filters = ["All Agents", "Online", "Offline", "Pending"];

const TeamFilter = ({ active, onChange, search, onSearch }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between p-[16px] border-b border-neutral-200 gap-4">
    <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg w-fit">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
            active === f
              ? "bg-white border border-neutral-200 shadow-sm text-black"
              : "text-neutral-500 hover:text-black"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
    <div className="relative flex-1 max-w-sm">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[20px]">
        search
      </span>
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 bg-neutral-100 border border-neutral-200 rounded-lg text-sm focus:ring-1 focus:ring-black outline-none transition-all"
        placeholder="Search agents by name or ID..."
        type="text"
      />
    </div>
  </div>
);

export default TeamFilter;
