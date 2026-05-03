const DangerZone = () => (
  <section className="border border-red-200 bg-red-50/30 rounded-xl p-[24px]">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm font-bold text-red-600">Danger Zone</h3>
        <p className="text-xs text-neutral-500 mt-1">
          Permanently delete this workspace and all associated data.
        </p>
      </div>
      <button className="px-[24px] py-[8px] border border-red-500 text-red-600 text-sm font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all">
        Delete Workspace
      </button>
    </div>
  </section>
);

export default DangerZone;
