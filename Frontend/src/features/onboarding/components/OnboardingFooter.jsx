const OnboardingFooter = ({
  onBack,
  onNext,
  nextLabel = "Next",
  backLabel = "Back",
  hideBack = false,
}) => (
  <footer className="border-t border-surface-variant p-[24px] flex justify-between items-center bg-surface-container-lowest">
    {!hideBack ? (
      <button
        onClick={onBack}
        className="flex items-center gap-[8px] px-[24px] py-[12px] text-on-surface-variant font-medium transition-all hover:text-primary active:scale-95"
      >
        <span className="material-symbols-outlined text-[18px]">
          arrow_back
        </span>
        <span>{backLabel}</span>
      </button>
    ) : (
      <div />
    )}

    <button
      onClick={onNext}
      className="flex items-center gap-[8px] px-[32px] py-[12px] bg-primary text-on-primary rounded-lg font-medium transition-all hover:opacity-90 active:scale-95"
    >
      <span>{nextLabel}</span>
      <span className="material-symbols-outlined text-[18px]">
        arrow_forward
      </span>
    </button>
  </footer>
);

export default OnboardingFooter;
