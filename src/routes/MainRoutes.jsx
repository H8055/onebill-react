import { lazy } from "react";

// project imports
import MainLayout from "../layout/MainLayout";
import AdminDashboard from "../pages/AdminDashboard";
import Loadable from "../ui-component/Loadable";

// dashboard routing
const Home = Loadable(lazy(() => import("../pages/Dashboard")));
const Tenants = Loadable(lazy(() => import("../pages/Tenants")));
const Users = Loadable(lazy(() => import("../pages/Users")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <AdminDashboard />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <AdminDashboard />,
        },
      ],
    },
    {
      path: "tenant",
      children: [
        {
          path: "default",
          element: <Tenants />,
        },
      ],
    },
    {
      path: "user",
      children: [
        {
          path: "default",
          element: <Users />,
        },
      ],
    },
  ],
};

export default MainRoutes;
