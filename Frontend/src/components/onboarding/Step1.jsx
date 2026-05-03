import { useState } from "react";
import StepBadge from "./StepBadge";
import OnboardingFooter from "./OnboardingFooter";

const suggestions = [
  "How do I reset my password?",
  "What are your hours?",
  "Track my order",
];

const Step1 = ({ onNext, onBack }) => {
  const [question, setQuestion] = useState("");

  return (
    <>
      {/* Content */}
      <div className="px-[32px] pt-[32px] pb-[16px] flex flex-col flex-grow">
        <div className="mb-[16px]">
          <StepBadge current={1} total={4} />
        </div>

        <h1 className="text-[24px] font-bold text-primary mb-[8px] tracking-tight">
          Ask your AI agent questions
        </h1>
        <p className="text-[14px] text-on-surface-variant mb-[32px] leading-relaxed">
          Test how your AI responds to common customer queries before going
          live.
        </p>

        {/* Suggested pills */}
        <div className="flex flex-wrap gap-[8px] mb-[32px]">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setQuestion(s)}
              className="px-[16px] py-[8px] border border-surface-variant rounded-full text-[13px] font-medium text-on-surface hover:bg-surface-container-low transition-colors active:opacity-70"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Textarea */}
        <div className="relative">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask something..."
            className="w-full h-32 p-[16px] bg-surface-container-low border border-surface-variant rounded-lg text-[14px] text-on-surface focus:outline-none focus:border-primary resize-none placeholder:text-on-surface-variant transition-all"
          />
          <div className="mt-[12px] flex items-center gap-[12px]">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
              auto_awesome
            </span>
            <span className="text-[12px] text-on-surface-variant uppercase tracking-widest">
              AideDesk 1.0 is live with improved AI capabilities!
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <OnboardingFooter onBack={onBack} onNext={onNext} hideBack={true} />
    </>
  );
};

export default Step1;
