const EmailProviderButton = ({ icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-full h-12 flex items-center px-[16px] border border-outline-variant rounded-lg bg-surface-container-lowest hover:bg-surface-container-low transition-colors group"
  >
    <span className="material-symbols-outlined mr-[12px] text-primary group-hover:scale-110 transition-transform">
      {icon}
    </span>
    <span className="text-[14px] font-medium text-primary">{label}</span>
  </a>
);

export default EmailProviderButton;
