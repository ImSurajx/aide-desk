import { useState } from "react";
import StepBadge from "./StepBadge";
import OnboardingFooter from "./OnboardingFooter";

const Step3 = ({ onNext, onBack }) => {
  const [copied, setCopied] = useState({ url: false, email: false });

  const testUrl = "https://aidedesk.ai/t/test-v3-9912";
  const testEmail = "test-agent-9912@aidedesk.ai";

  const handleCopy = (type, value) => {
    navigator.clipboard.writeText(value);
    setCopied((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 2000);
  };

  return (
    <>
      {/* Content */}
      <div className="px-[32px] pt-[32px] pb-[24px] flex flex-col gap-[24px]">
        {/* Badge */}
        <StepBadge current={3} total={4} />

        {/* Header */}
        <div className="flex flex-col gap-[4px]">
          <h1 className="text-[24px] font-bold text-primary tracking-tight">
            Test your AI
          </h1>
          <p className="text-[14px] text-on-surface-variant leading-relaxed">
            Share these links with your team to see the agent in action.
          </p>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-[24px]">
          {/* Website URL */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
              Website URL
            </label>
            <div className="flex gap-[8px]">
              <input
                readOnly
                type="text"
                value={testUrl}
                className="flex-1 h-12 px-[16px] bg-surface-container-low border border-surface-container-highest rounded-lg text-[13px] font-mono text-primary focus:outline-none"
              />
              <button
                onClick={() => handleCopy("url", testUrl)}
                className="w-12 h-12 flex items-center justify-center bg-surface-container-lowest border border-surface-container-highest rounded-lg hover:bg-surface-container-low transition-colors group"
              >
                <span className="material-symbols-outlined text-[20px] text-primary group-active:scale-90 transition-transform">
                  {copied.url ? "check" : "content_copy"}
                </span>
              </button>
            </div>
          </div>

          {/* Test Email */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
              Test Email
            </label>
            <div className="flex gap-[8px]">
              <input
                readOnly
                type="text"
                value={testEmail}
                className="flex-1 h-12 px-[16px] bg-surface-container-low border border-surface-container-highest rounded-lg text-[13px] font-mono text-primary focus:outline-none"
              />
              <button
                onClick={() => handleCopy("email", testEmail)}
                className="w-12 h-12 flex items-center justify-center bg-surface-container-lowest border border-surface-container-highest rounded-lg hover:bg-surface-container-low transition-colors group"
              >
                <span className="material-symbols-outlined text-[20px] text-primary group-active:scale-90 transition-transform">
                  {copied.email ? "check" : "content_copy"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="rounded-lg border border-surface-container-highest bg-surface-container-low overflow-hidden aspect-video relative">
          {/* Mock UI */}
          <div className="absolute inset-0 flex flex-col">
            {/* Mock top bar */}
            <div className="h-10 border-b border-surface-container-highest bg-surface-container-lowest flex items-center px-[16px] gap-[8px]">
              <div className="w-2 h-2 rounded-full bg-surface-container-highest" />
              <div className="w-2 h-2 rounded-full bg-surface-container-highest" />
              <div className="w-2 h-2 rounded-full bg-surface-container-highest" />
              <div className="ml-[8px] flex-1 h-5 bg-surface-container-high rounded-full max-w-[200px]" />
            </div>
            {/* Mock content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Mock page */}
              <div className="flex-1 p-[16px] flex flex-col gap-[12px]">
                <div className="w-1/3 h-3 bg-surface-container-high rounded-full" />
                <div className="w-full h-2 bg-surface-container-highest rounded-full" />
                <div className="w-5/6 h-2 bg-surface-container-highest rounded-full" />
                <div className="w-4/6 h-2 bg-surface-container-highest rounded-full" />
                <div className="mt-[8px] w-1/4 h-8 bg-surface-container-high rounded-lg" />
              </div>
              {/* Mock chat widget */}
              <div className="w-[160px] m-[12px] bg-surface-container-lowest border border-surface-container-highest rounded-xl flex flex-col overflow-hidden shadow-sm">
                <div className="h-8 bg-primary flex items-center px-[10px] gap-[6px]">
                  <span className="material-symbols-outlined text-on-primary text-[14px]">
                    support_agent
                  </span>
                  <span className="text-on-primary text-[10px] font-semibold">
                    AideBot
                  </span>
                </div>
                <div className="flex-1 p-[8px] flex flex-col gap-[6px]">
                  <div className="self-start bg-surface-container-low rounded-lg px-[8px] py-[4px] max-w-[80%]">
                    <div className="w-16 h-2 bg-surface-container-high rounded-full" />
                  </div>
                  <div className="self-end bg-primary rounded-lg px-[8px] py-[4px] max-w-[80%]">
                    <div className="w-12 h-2 bg-on-primary/30 rounded-full" />
                  </div>
                  <div className="self-start bg-surface-container-low rounded-lg px-[8px] py-[4px] max-w-[80%]">
                    <div className="w-14 h-2 bg-surface-container-high rounded-full" />
                    <div className="w-10 h-2 bg-surface-container-high rounded-full mt-[3px]" />
                  </div>
                </div>
                <div className="h-7 border-t border-surface-container-highest flex items-center px-[8px] gap-[4px]">
                  <div className="flex-1 h-4 bg-surface-container-low rounded-full" />
                  <span className="material-symbols-outlined text-primary text-[14px]">
                    send
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/40 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Footer */}
      <OnboardingFooter onBack={onBack} onNext={onNext} />
    </>
  );
};

export default Step3;
