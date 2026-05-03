const StepBadge = ({ current, total }) => (
  <span className="inline-flex w-fit items-center px-[8px] py-[4px] bg-surface-container-low text-on-surface-variant rounded-lg text-[12px] font-semibold uppercase tracking-widest">
    Step {current} of {total}
  </span>
);

export default StepBadge;
