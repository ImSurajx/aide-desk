import { motion, AnimatePresence } from "framer-motion";

const OnboardingLayout = ({ children, step, totalSteps = 4 }) => {
  const progressPercent = ((step + 1) / totalSteps) * 100;
  return (
    <div className="min-h-screen bg-surface-container-lowest flex flex-col">
      {/* Top bar */}
      <div className="w-full h-1 bg-surface-variant fixed top-0 left-0 z-50">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
        style={{ width: `${progressPercent}%` }}
      />
    </div>

    {/* Brand bar */}
    <div className="w-full border-b border-surface-variant px-[32px] py-[14px] flex items-center justify-between mt-1">
      <div className="flex items-center gap-[8px]">
        <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[16px]">
            support_agent
          </span>
        </div>
        <span className="text-[15px] font-bold tracking-tight text-on-surface">
          AideDesk
        </span>
        <span className="ml-[4px] text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant bg-surface-container-low border border-surface-variant px-[8px] py-[2px] rounded-full">
          1.0 is live
        </span>
      </div>
    </div>

    {/* Step content */}
    <div className="flex flex-1 items-center justify-center p-[24px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          className="w-full max-w-[650px] bg-surface-container-lowest border border-surface-variant rounded-xl overflow-hidden flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
);
}
export default OnboardingLayout;
