import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import AppRoutes from "./app.route";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useSocket } from "../features/socket/hooks/useSocket";
import "./App.css";

const App = () => {
  const { getMe } = useAuth();
  const themeMode = useSelector((s) => s.theme.mode);

  // Hydrate session from cookie on app mount
  useEffect(() => {
    getMe({ silent: true }).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Apply dark class to <html> for Tailwind dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode === "dark");
  }, [themeMode]);

  // Manage socket lifecycle based on auth state
  useSocket();

  return (
    <AnimatePresence mode="wait">
      <RouterProvider
        router={AppRoutes}
        future={{ v7_startTransition: true }}
      />
    </AnimatePresence>
  );
};

export default App;
