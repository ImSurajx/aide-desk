const GeneralSection = () => (
  <section className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
    <div className="px-[24px] py-[16px] border-b border-neutral-100">
      <h3 className="text-[18px] font-semibold text-black">
        General Workspace
      </h3>
    </div>
    <div className="p-[24px] space-y-[24px]">
      {/* Workspace Name */}
      <div className="grid grid-cols-12 gap-[24px] items-center">
        <div className="col-span-4">
          <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500 block">
            Workspace Name
          </label>
          <p className="text-xs text-neutral-400 mt-1">
            Visible to all team members.
          </p>
        </div>
        <div className="col-span-8">
          <input
            type="text"
            defaultValue="AideDesk Corp"
            className="w-full px-[16px] py-[8px] bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:border-black focus:ring-0 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Logo */}
      <div className="grid grid-cols-12 gap-[24px] items-center">
        <div className="col-span-4">
          <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500 block">
            Workspace Logo
          </label>
          <p className="text-xs text-neutral-400 mt-1">
            Max 2MB. Recommended 512×512.
          </p>
        </div>
        <div className="col-span-8 flex items-center gap-[16px]">
          <div className="w-16 h-16 bg-neutral-100 border border-dashed border-neutral-300 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-neutral-400">
              upload_file
            </span>
          </div>
          <button className="px-[16px] py-[8px] border border-neutral-200 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors">
            Update Logo
          </button>
          <button className="text-xs font-medium text-red-600 hover:underline">
            Remove
          </button>
        </div>
      </div>

      {/* Timezone */}
      <div className="grid grid-cols-12 gap-[24px] items-center">
        <div className="col-span-4">
          <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500 block">
            Timezone
          </label>
        </div>
        <div className="col-span-8">
          <select className="w-full px-[16px] py-[8px] bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:border-black focus:ring-0 outline-none transition-colors">
            <option>(GMT-08:00) Pacific Time (US & Canada)</option>
            <option>(GMT-05:00) Eastern Time (US & Canada)</option>
            <option>(GMT+00:00) UTC</option>
          </select>
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end pt-[8px]">
        <button className="bg-black text-white px-[24px] py-[8px] rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors active:scale-95">
          Save Changes
        </button>
      </div>
    </div>
  </section>
);

export default GeneralSection;
