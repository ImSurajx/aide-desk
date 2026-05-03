import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppRoutes from "./app.route";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useSocket } from "../features/socket/hooks/useSocket";
import "./App.css";

const App = () => {
  const { getMe } = useAuth();

  // Hydrate session from cookie on app mount
  useEffect(() => {
    getMe({ silent: true }).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
