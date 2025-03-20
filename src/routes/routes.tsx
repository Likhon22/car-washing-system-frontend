import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";

import { mainLayoutRoutes } from "./MainLayoutRoutes";
import Dashboard from "@/layout/Dashboard/Dashboard";
import { dashboardRoutes } from "./DashboardRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: mainLayoutRoutes,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: dashboardRoutes,
  },
]);

export default router;
