import { TLayoutPath } from "@/interface/routes";
import AdminHome from "@/pages/Dashboard/AdminHome/AdminHome";
import CreateAdmin from "@/pages/Dashboard/CreateAdmin/CreateAdmin";
import { routesGenerator } from "@/utils/routesGenerator";
import { sidebarGenerator } from "@/utils/sidebarGenerator";

const dashboardLayoutPath: TLayoutPath[] = [
  {
    name: "Admin Home",
    path: "admin-home",
    element: <AdminHome />,
  },
  {
    name: "Create Admin",
    path: "create-admin",
    element: <CreateAdmin />,
  },
];

export const dashboardRoutes = routesGenerator(dashboardLayoutPath);
export const dashboardSidebar = sidebarGenerator(dashboardLayoutPath);
