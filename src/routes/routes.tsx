import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";

import { mainLayoutRoutes } from "./MainLayoutRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: mainLayoutRoutes,
  },
]);

export default router;
