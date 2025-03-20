import { TLayoutPath } from "@/interface/routes";
import CreateAdmin from "@/pages/Dashboard/CreateAdmin/CreateAdmin";
import { routesGenerator } from "@/utils/routesGenerator";

const dashboardLayoutPath: TLayoutPath[] = [
  {
    name: "create-admin",
    path: "create-admin",
    element: <CreateAdmin />,
  },
];

export const dashboardRoutes = routesGenerator(dashboardLayoutPath);
