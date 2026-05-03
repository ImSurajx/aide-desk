import EmailProviderButton from "./EmailProviderButton";
import { useLocation, useNavigate } from "react-router-dom"; // For dynamic email display and navigation

const providers = [
  { icon: "mail", label: "Open Gmail", href: "https://mail.google.com" },
  {
    icon: "alternate_email",
    label: "Open Outlook",
    href: "https://outlook.live.com",
  },
  {
    icon: "mark_as_unread",
    label: "Open Yahoo",
    href: "https://mail.yahoo.com",
  },
  { icon: "apps", label: "Open Mail App", href: "mailto:" },
];

const VerifyEmailCard = ({ email = "user@example.com" }) => {
  const navigate = useNavigate();

  const simulateVerification = () => {
    navigate("/onboarding", { state: { verified: true, email } });
  };

  return (
    <main className="w-full max-w-[520px] bg-surface-container-lowest border border-outline-variant rounded-xl p-[32px] flex flex-col items-center">
      {/* Icon */}
      <div className="mb-[24px] w-16 h-16 flex items-center justify-center bg-surface-container-low rounded-full">
        <span className="material-symbols-outlined text-[36px] text-primary">
          mail
        </span>
      </div>

      {/* Title */}
      <h1 className="text-[32px] font-bold text-primary mb-[8px]">
        Check your email
      </h1>

      {/* Subtext */}
      <p className="text-center text-[14px] text-on-surface-variant leading-relaxed mb-[32px]">
        We sent a verification link to your email address
        <br />
        <span className="font-semibold text-primary">{email}</span>
      </p>

      {/* Provider buttons */}
      <div className="w-full flex flex-col gap-[8px] mb-[32px]">
        {providers.map((p) => (
          <EmailProviderButton key={p.label} {...p} />
        ))}
      </div>

      {/* Secondary actions */}
      <div className="flex flex-col items-center gap-[8px] mb-[24px]">
        <button className="text-[14px] text-on-surface-variant hover:text-primary hover:underline transition-all">
          Resend email
        </button>
        <button className="text-[14px] text-on-surface-variant hover:text-primary hover:underline transition-all">
          Change email
        </button>
      </div>

      {/* Divider + spam notice */}
      <div className="w-full pt-[24px] border-t border-outline-variant text-center">
        <p className="text-[13px] text-on-surface-variant">
          Didn't receive the email?{" "}
          <span className="font-semibold text-on-surface">
            Check your spam folder
          </span>
        </p>
      </div>

      {/* Waiting spinner */}
      <div className="mt-[32px] flex items-center gap-[8px]">
        <div className="w-4 h-4 border-2 border-outline-variant border-t-primary rounded-full animate-spin" />
        <p className="text-[12px] text-on-surface-variant uppercase tracking-widest">
          Waiting for verification...
        </p>
      </div>
      {/* TEMP — remove when real auth connected */}
      <button
        onClick={simulateVerification}
        className="mt-[16px] text-[12px] text-on-surface-variant underline hover:text-primary transition-colors"
      >
        Simulate email verified →
      </button>
    </main>
  );
};

export default VerifyEmailCard;
