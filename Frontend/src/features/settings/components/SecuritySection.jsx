import { useState } from "react";

const sessions = [
  {
    icon: "laptop_mac",
    device: 'MacBook Pro 16" • San Francisco, USA',
    detail: "Chrome • Current Session",
    current: true,
  },
  {
    icon: "phone_iphone",
    device: "iPhone 15 Pro • London, UK",
    detail: "AideDesk App • 2 hours ago",
    current: false,
  },
];

const SecuritySection = () => {
  const [twoFa, setTwoFa] = useState(true);

  return (
    <section className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
      <div className="px-[24px] py-[16px] border-b border-neutral-100 flex justify-between items-center">
        <h3 className="text-[18px] font-semibold text-black">
          Security & Access
        </h3>
        <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase tracking-wider">
          Secure
        </span>
      </div>
      <div className="p-[24px] space-y-[32px]">
        {/* 2FA */}
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-sm font-semibold text-black">
              Two-Factor Authentication
            </h4>
            <p className="text-xs text-neutral-500">
              Add an extra layer of security to your account.
            </p>
          </div>
          <button
            onClick={() => setTwoFa(!twoFa)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${twoFa ? "bg-black" : "bg-neutral-200"}`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white border border-neutral-200 transition-transform ${twoFa ? "translate-x-5" : "translate-x-0.5"}`}
            />
          </button>
        </div>

        {/* Sessions */}
        <div className="border-t border-neutral-100 pt-[24px]">
          <h4 className="text-sm font-semibold text-black mb-[16px]">
            Active Sessions
          </h4>
          <div className="space-y-[12px]">
            {sessions.map((s) => (
              <div
                key={s.device}
                className={`flex items-center justify-between p-[16px] border border-neutral-100 rounded-xl ${s.current ? "bg-neutral-50" : ""}`}
              >
                <div className="flex items-center gap-[16px]">
                  <span className="material-symbols-outlined text-neutral-400">
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-black">{s.device}</p>
                    <p className="text-xs text-neutral-500">{s.detail}</p>
                  </div>
                </div>
                {s.current ? (
                  <span className="text-xs font-medium text-neutral-400">
                    Current
                  </span>
                ) : (
                  <button className="text-xs font-semibold text-red-600 hover:bg-red-50 px-[8px] py-1 rounded transition-colors">
                    Revoke
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
