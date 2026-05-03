import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AuthLeftPanel from "../components/auth/AuthLeftPanel";
import AuthTabToggle from "../components/auth/AuthTabToggle";
import AuthFormField from "../components/auth/AuthFormField";
import AuthDivider from "../components/auth/AuthDivider";
import GoogleAuthButton from "../components/auth/GoogleAuthButton";
import BackLink from "../components/auth/BackLink";
import PageWrapper from "../components/ui/PageWrapper";

const Signup = () => {
  const [companySize, setCompanySize] = useState("");
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    jobTitle: "",
  });

  const set = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const newErrors = {};

    if (!form.email.includes("@") || !form.email.includes(".")) {
      newErrors.email = "Enter a valid email address";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!/[A-Z]/.test(form.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    }

    if (!/[0-9]/.test(form.password)) {
      newErrors.password = "Password must contain at least one number";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return (
    <PageWrapper>
      <div className="bg-surface-container-lowest text-primary antialiased min-h-screen flex selection:bg-primary selection:text-on-primary">
        <AuthLeftPanel />

        <motion.div
          className="w-full lg:w-1/2 flex flex-col bg-surface-container-lowest justify-center items-center px-6 py-12 relative"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="w-full max-w-[400px] flex flex-col relative z-10">
            <BackLink to="/" />
            <AuthTabToggle activeTab="signup" />

            <div className="flex flex-col gap-5">
              <AuthFormField
                id="fullName"
                label="Full Name"
                type="text"
                placeholder="Jane Doe"
                value={form.fullName}
                onChange={set("fullName")}
              />
              <AuthFormField
                id="email"
                label="Email"
                type="email"
                placeholder="name@company.com"
                value={form.email}
                onChange={set("email")}
              />
              {errors.email && (
                <p className="text-[12px] text-error -mt-[12px]">
                  {errors.email}
                </p>
              )}
              <AuthFormField
                id="password"
                label="Password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={set("password")}
              />
              {errors.password && (
                <p className="text-[12px] text-error -mt-[12px]">
                  {errors.password}
                </p>
              )}
              <AuthFormField
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={set("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-[12px] text-error -mt-[12px]">
                  {errors.confirmPassword}
                </p>
              )}
              <AuthFormField
                id="jobTitle"
                label="Job Title"
                type="text"
                placeholder="e.g. Head of Support"
                value={form.jobTitle}
                onChange={set("jobTitle")}
              />
              {/* Company Size */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
                  Company Size
                </label>
                <div className="flex flex-wrap gap-[8px]">
                  {["0–9", "10–49", "50–100", "101–500", "500+"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setCompanySize(s)}
                      className={`px-[12px] py-[6px] rounded-lg text-[12px] font-medium border transition-all ${
                        companySize === s
                          ? "bg-primary text-on-primary border-primary"
                          : "bg-surface-container-low text-on-surface-variant border-surface-variant hover:border-primary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => validate() && console.log("submit")}
                className="w-full bg-primary text-on-primary rounded-xl py-3 text-[14px] font-semibold mt-4 hover:opacity-90 transition-opacity"
              >
                Sign Up
              </button>
            </div>

            <AuthDivider />
            <GoogleAuthButton />

            <p className="mt-[32px] text-center text-[13px] text-on-surface-variant">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Signup;
