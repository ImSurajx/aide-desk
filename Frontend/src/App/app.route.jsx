import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Platform from "../pages/Platform";
import Pricing from "../pages/Pricing";
import Privacy from "../pages/Privacy";
import Solutions from "../pages/Solutions";
import Support from "../pages/Support";
import Integrations from "../pages/Integrations";
import Product from "../pages/Product";

const AppRoutes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/platform", element: <Platform /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/solutions", element: <Solutions /> },
  { path: "/support", element: <Support /> },
  { path: "/integrations", element: <Integrations /> },
  { path: "/product", element: <Product /> },
]);

export default AppRoutes;
