import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../../../App/Components/ui/PageWrapper";

const checks = ["Content added", "Personality set", "Ready for testing"];

const OnboardingSuccess = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="min-h-screen bg-surface-container-lowest flex items-center justify-center p-[24px]">
        <motion.div
          className="w-full max-w-[650px] bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="px-[32px] py-[64px] flex flex-col items-center text-center">
            {/* Icon */}
            <motion.div
              className="mb-[24px] w-20 h-20 bg-primary rounded-full flex items-center justify-center"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
            >
              <span
                className="material-symbols-outlined text-on-primary text-[48px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-[32px] font-bold text-primary tracking-tight mb-[16px]">
              You built your AI agent
            </h1>
            <p className="text-[14px] text-on-surface-variant leading-relaxed max-w-md mb-[48px]">
              Your support ecosystem is now powered by intelligence. AideDesk
              has processed your data and initialized your custom assistant.
            </p>

            {/* Checklist */}
            <div className="w-full bg-surface-container-low border border-surface-container-highest rounded-lg p-[24px] mb-[48px] text-left">
              {checks.map((item, i) => (
                <div key={item}>
                  <div className="flex items-center gap-[16px] py-[4px]">
                    <span
                      className="material-symbols-outlined text-primary text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check
                    </span>
                    <span className="text-[14px] font-medium text-on-surface">
                      {item}
                    </span>
                  </div>
                  {i < checks.length - 1 && (
                    <div className="border-t border-surface-container-highest my-[12px]" />
                  )}
                </div>
              ))}
            </div>

            {/* Decorative panel */}
            <div className="relative w-full h-28 mb-[32px] bg-surface-container rounded-lg overflow-hidden flex items-center justify-center">
              {/* Grid bg */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              {/* Dot nodes */}
              {[
                { top: "30%", left: "15%" },
                { top: "60%", left: "35%" },
                { top: "25%", left: "55%" },
                { top: "55%", left: "72%" },
                { top: "35%", left: "88%" },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary opacity-20"
                  style={{ top: pos.top, left: pos.left }}
                />
              ))}
              <span className="material-symbols-outlined text-primary opacity-20 text-[56px] relative z-10">
                auto_awesome
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full bg-primary text-on-primary py-[14px] px-[32px] rounded-lg font-bold text-[15px] hover:opacity-90 transition-all active:scale-[0.98]"
            >
              Go to Dashboard
            </button>

            <button
              onClick={() => navigate("/docs")}
              className="mt-[16px] text-[13px] text-on-surface-variant hover:text-primary transition-colors"
            >
              View Agent Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default OnboardingSuccess;
