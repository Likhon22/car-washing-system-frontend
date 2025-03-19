import { TLayoutPath } from "@/interface/routes";
import Home from "@/pages/Home/Home";
import { navigationGenerator } from "@/utils/navigationGenerator";
import { routesGenerator } from "@/utils/routesGenerator";

const mainLayoutPath: TLayoutPath[] = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About",
    path: "/about",
    element: "About",
  },
];
export const mainLayoutRoutes = routesGenerator(mainLayoutPath);
export const mainLayoutNavigation = navigationGenerator(mainLayoutPath);
