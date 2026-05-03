import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthTabToggle from "../../../components/auth/AuthTabToggle";
import AuthFormField from "../../../components/auth/AuthFormField";
import AuthDivider from "../../../components/auth/AuthDivider";
import GoogleAuthButton from "../../../components/auth/GoogleAuthButton";
import BackLink from "../../../components/auth/BackLink";
import PageWrapper from "../../../App/Components/ui/PageWrapper";
import Logo from "../../../components/ui/Logo";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const set = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await handleLogin({ email: form.email, password: form.password });
      if (!error) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <PageWrapper>
      <div className="bg-background text-on-surface antialiased min-h-screen flex selection:bg-primary selection:text-on-primary">
        <AuthLeftPanel />

        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center items-center p-[24px] sm:p-[48px] bg-surface"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="lg:hidden mb-[48px] self-start w-full max-w-[400px]">
            <Logo size="md" linkTo="/" />
          </div>

          <div className="w-full max-w-[400px] flex flex-col">
            <BackLink to="/" />
            <AuthTabToggle activeTab="login" />

            <div className="mb-[32px]">
              <h2
                className="text-primary"
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  letterSpacing: "-0.01em",
                }}
              >
                Welcome back
              </h2>
              <p
                className="text-on-surface-variant mt-[4px]"
                style={{ fontSize: "13px", lineHeight: "1.5" }}
              >
                Enter your details to access your workspace.
              </p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col w-full">
              <AuthFormField
                id="email"
                label="Email"
                type="email"
                placeholder="name@company.com"
                value={form.email}
                onChange={set("email")}
              />
              {errors.email && (
                <p className="text-[12px] text-error -mt-[12px] mb-[12px]">
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
                <p className="text-[12px] text-error -mt-[12px] mb-[12px]">
                  {errors.password}
                </p>
              )}

              <div className="flex justify-end mb-[24px]">
                <Link
                  to="/forgot-password"
                  className="text-[13px] text-on-surface-variant hover:text-primary transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {error && (
                <p className="text-[13px] text-error font-medium p-3 bg-error/10 rounded-lg mb-[16px]">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary text-on-primary rounded-xl text-[14px] font-semibold hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-70"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <AuthDivider />
              <GoogleAuthButton />
            </form>

            <div className="mt-[32px] text-center text-[13px] text-on-surface-variant">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-primary font-medium hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Login;
