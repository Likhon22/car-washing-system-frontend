import Home from "@/pages/Home/Home";
import { ReactNode } from "react";

type TMainlayoutPath = {
  name: string;
  path: string;
  element: ReactNode;
};
const mainLayoutPath: TMainlayoutPath[] = [
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
export const mainLayoutRoutes = mainLayoutPath.map((path) => {
  return {
    path: path.path,
    element: path.element,
  };
});
export const mainLayoutNavigation = mainLayoutPath.map((path) => {
  return {
    label: path.name,
    to: path.path,
  };
});
