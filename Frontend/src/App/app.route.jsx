import { createBrowserRouter, Outlet } from "react-router-dom";
import ScrollToTop from "../components/ui/ScrollToTop";
import Home from "./Pages/Home";
import Login from "../features/auth/Pages/Login";
import Signup from "../features/auth/Pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import Platform from "./Pages/Platform";
import Pricing from "./Pages/Pricing";
import Privacy from "./Pages/Privacy";
import Solutions from "./Pages/Solutions";
import Support from "./Pages/Support";
import Integrations from "./Pages/Integrations";
import Product from "./Pages/Product";
import Demo from "./Pages/Demo";
import Docs from "./Pages/Docs";
import VerifyEmail from "../pages/VerifyEmail";
import ProtectedRoute from "../components/ui/ProtectedRoute";
import Onboarding from "../pages/Onboarding";
import OnboardingSuccess from "../pages/OnboardingSuccess";
import Dashboard from "../features/auth/Pages/Dashboard";
import Customers from "../pages/Customers";
import Tickets from "../pages/Tickets";
import Team from "../pages/Team";
import Settings from "../features/auth/Pages/Settings";
import ChatScreen from "../components/chat/ChatScreen";

const RootLayout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const AppRoutes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/platform", element: <Platform /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/solutions", element: <Solutions /> },
      { path: "/support", element: <Support /> },
      { path: "/integrations", element: <Integrations /> },
      { path: "/product", element: <Product /> },
      { path: "/demo", element: <Demo /> },
      { path: "/docs", element: <Docs /> },
      { path: "/verify-email", element: <VerifyEmail /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/customers", element: <Customers /> },
      { path: "/dashboard/tickets", element: <Tickets /> },
      { path: "/dashboard/team", element: <Team /> },
      { path: "/dashboard/settings", element: <Settings /> },
      { path: "/dashboard/chat", element: <ChatScreen /> },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/onboarding/success",
        element: (
          <ProtectedRoute>
            <OnboardingSuccess />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default AppRoutes;
