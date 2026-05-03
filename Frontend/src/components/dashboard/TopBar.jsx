const TopBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md flex justify-between items-center h-16 px-[32px]">
      {/* Search */}
      <div className="flex items-center bg-surface-container-low border border-neutral-200 rounded-lg px-[12px] py-[6px] w-96 transition-all focus-within:border-black gap-[8px]">
        <span className="material-symbols-outlined text-neutral-400 text-[20px]">
          search
        </span>
        <input
          className="bg-transparent border-none focus:ring-0 text-[13px] w-full font-['Inter'] outline-none placeholder:text-neutral-400"
          placeholder="Search tickets, agents, or knowledge..."
          type="text"
        />
        <span className="text-[10px] bg-white border border-neutral-200 px-[6px] py-[2px] rounded text-neutral-400 font-mono shrink-0">
          ⌘K
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-[16px]">
        <div className="flex items-center gap-[4px]">
          <button className="p-[8px] text-neutral-500 hover:bg-neutral-100 rounded-lg transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-[8px] right-[8px] w-2 h-2 bg-black rounded-full border-2 border-white" />
          </button>
          <button className="p-[8px] text-neutral-500 hover:bg-neutral-100 rounded-lg transition-colors">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          <button className="p-[8px] text-neutral-500 hover:bg-neutral-100 rounded-lg transition-colors">
            <span className="material-symbols-outlined">
              chat_bubble_outline
            </span>
          </button>
        </div>

        <div className="h-8 w-[1px] bg-neutral-200" />

        {/* User */}
        <div className="flex items-center gap-[12px] cursor-pointer group">
          <div className="text-right">
            <p className="text-[13px] font-semibold leading-tight">
              Alex Sterling
            </p>
            <p className="text-[11px] text-neutral-500 leading-tight">
              Administrator
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-neutral-200 group-hover:border-black transition-colors">
            <span className="text-[13px] font-bold text-white">AS</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
