import { useState } from "react";
import StepBadge from "./StepBadge";
import OnboardingFooter from "./OnboardingFooter";

const tones = [
  {
    value: "informal",
    label: "Informal",
    desc: "Casual, friendly, and approachable language.",
    icon: "sentiment_satisfied",
  },
  {
    value: "professional",
    label: "Professional",
    desc: "Efficient, formal, and strictly business-oriented.",
    icon: "business_center",
  },
  {
    value: "enthusiastic",
    label: "Enthusiastic",
    desc: "High energy, positive, and exceptionally proactive.",
    icon: "bolt",
  },
];

const Step2 = ({ onNext, onBack }) => {
  const [agentName, setAgentName] = useState("AideBot");
  const [selectedTone, setSelectedTone] = useState("professional");

  return (
    <>
      {/* Content */}
      <div className="px-[32px] pt-[32px] pb-[24px] flex flex-col gap-[24px]">
        {/* Badge */}
        <StepBadge current={2} total={4} />

        {/* Header */}
        <div className="flex flex-col gap-[4px]">
          <h1 className="text-[24px] font-bold text-primary tracking-tight">
            Give it some personality
          </h1>
          <p className="text-[14px] text-on-surface-variant leading-relaxed">
            Define how your AI agent should interact with customers.
          </p>
        </div>

        {/* Agent name input */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
            AI Agent Name
          </label>
          <input
            type="text"
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
            className="w-full h-12 px-[16px] bg-surface-container-low border border-surface-container-highest rounded-lg text-[14px] text-on-surface focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Tone selection */}
        <div className="flex flex-col gap-[8px]">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
            Select Tone
          </p>
          <div className="flex flex-col gap-[8px]">
            {tones.map((tone) => {
              const isActive = selectedTone === tone.value;
              return (
                <button
                  key={tone.value}
                  type="button"
                  onClick={() => setSelectedTone(tone.value)}
                  className={`flex items-center gap-[16px] p-[16px] rounded-lg border text-left transition-all ${
                    isActive
                      ? "border-primary ring-1 ring-primary bg-surface-container-lowest"
                      : "border-surface-container-highest hover:bg-surface-container-low"
                  }`}
                >
                  {/* Icon box */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded border transition-colors ${
                      isActive
                        ? "bg-primary border-primary"
                        : "bg-surface-container-low border-surface-container-highest"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${isActive ? "text-on-primary" : "text-primary"}`}
                    >
                      {tone.icon}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-[14px] font-semibold text-primary">
                      {tone.label}
                    </h3>
                    <p className="text-[13px] text-on-surface-variant">
                      {tone.desc}
                    </p>
                  </div>

                  {/* Radio indicator */}
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      isActive
                        ? "border-primary border-4"
                        : "border-surface-container-highest"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <OnboardingFooter onBack={onBack} onNext={onNext} />
    </>
  );
};

export default Step2;
