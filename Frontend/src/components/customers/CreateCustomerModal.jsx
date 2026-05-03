import { useState } from "react";
import { motion } from "framer-motion";

const CreateCustomerModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    plan: "Starter",
  });
  const set = (f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-[32px] bg-black/40 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="max-w-[640px] w-full bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xl"
      >
        {/* Header */}
        <div className="px-[32px] py-[24px] border-b border-neutral-200 flex justify-between items-center">
          <div>
            <h1 className="text-[24px] font-semibold text-black tracking-tight">
              Create Customer
            </h1>
            <p className="text-[13px] text-neutral-500 mt-1">
              Add a new customer to your workspace.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-neutral-500">
              close
            </span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.25 }}
          className="p-[32px] space-y-[24px]"
        >
          {/* Avatar row */}
          <div className="flex items-center gap-[24px]">
            <div className="w-[48px] h-[48px] rounded-full bg-neutral-100 border-2 border-dashed border-neutral-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-neutral-400 text-[24px]">
                person_add
              </span>
            </div>
            <div>
              <button className="text-[12px] font-semibold uppercase tracking-widest text-black border border-neutral-200 px-[16px] py-[8px] rounded-lg hover:bg-neutral-50 transition-colors">
                Upload Avatar
              </button>
              <p className="text-[12px] text-neutral-400 mt-1">
                Optional. Square JPG or PNG, max 2MB.
              </p>
            </div>
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-2 gap-[24px]">
            {[
              {
                label: "Full Name",
                field: "name",
                type: "text",
                placeholder: "e.g. Jane Doe",
              },
              {
                label: "Email Address",
                field: "email",
                type: "email",
                placeholder: "jane@company.com",
              },
            ].map((f) => (
              <div key={f.field} className="flex flex-col gap-[8px]">
                <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.field]}
                  onChange={set(f.field)}
                  className="w-full h-11 px-[16px] bg-neutral-50 border border-neutral-200 rounded-lg text-[14px] focus:outline-none focus:border-black transition-colors"
                />
              </div>
            ))}
          </div>

          {/* Company + Phone */}
          <div className="grid grid-cols-2 gap-[24px]">
            {[
              {
                label: "Company",
                field: "company",
                type: "text",
                placeholder: "Acme Inc.",
              },
              {
                label: "Phone",
                field: "phone",
                type: "tel",
                placeholder: "+1 (555) 000-0000",
              },
            ].map((f) => (
              <div key={f.field} className="flex flex-col gap-[8px]">
                <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.field]}
                  onChange={set(f.field)}
                  className="w-full h-11 px-[16px] bg-neutral-50 border border-neutral-200 rounded-lg text-[14px] focus:outline-none focus:border-black transition-colors"
                />
              </div>
            ))}
          </div>

          {/* Plan */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500">
              Plan
            </label>
            <div className="flex gap-[12px]">
              {["Starter", "Growth", "Enterprise"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, plan: p }))}
                  className={`flex-1 py-2 px-4 border rounded-lg text-[13px] font-medium transition-all ${
                    form.plan === p
                      ? "border-black bg-black text-white"
                      : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-black"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[12px] font-semibold uppercase tracking-widest text-neutral-500">
              Notes{" "}
              <span className="normal-case tracking-normal text-neutral-400 font-normal">
                (optional)
              </span>
            </label>
            <textarea
              placeholder="Any additional context about this customer..."
              rows={3}
              className="w-full px-[16px] py-[12px] bg-neutral-50 border border-neutral-200 rounded-lg text-[14px] focus:outline-none focus:border-black transition-colors resize-none"
            />
          </div>

          {/* Info notice */}
          <div className="p-[16px] bg-neutral-50 rounded-xl border border-neutral-200 flex gap-[8px]">
            <span className="material-symbols-outlined text-neutral-400 text-[20px] shrink-0">
              info
            </span>
            <p className="text-[13px] text-neutral-500">
              A welcome email will be sent to the customer once their profile is
              created.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="px-[32px] py-[24px] bg-neutral-50 border-t border-neutral-200 flex justify-end items-center gap-[16px]">
          <button
            onClick={onClose}
            className="px-[24px] py-[12px] text-[12px] font-semibold uppercase tracking-widest text-black hover:bg-neutral-100 transition-colors rounded-lg"
          >
            Cancel
          </button>
          <button className="px-[24px] py-[12px] text-[12px] font-semibold uppercase tracking-widest bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-2 active:scale-95">
            Create Customer
            <span className="material-symbols-outlined text-sm">
              person_add
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CreateCustomerModal;
