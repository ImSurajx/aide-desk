import { createBrowserRouter, Outlet } from "react-router-dom";
import ScrollToTop from "../components/ui/ScrollToTop";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import Platform from "../pages/Platform";
import Pricing from "../pages/Pricing";
import Privacy from "../pages/Privacy";
import Solutions from "../pages/Solutions";
import Support from "../pages/Support";
import Integrations from "../pages/Integrations";
import Product from "../pages/Product";
import Demo from "../pages/Demo";
import Docs from "../pages/Docs";
import VerifyEmail from "../pages/VerifyEmail";
import ProtectedRoute from "../components/ui/ProtectedRoute";
import Onboarding from "../pages/Onboarding";
import OnboardingSuccess from "../pages/OnboardingSuccess";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Tickets from "../pages/Tickets";
import Team from "../pages/Team";
import Settings from "../pages/Settings";
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
