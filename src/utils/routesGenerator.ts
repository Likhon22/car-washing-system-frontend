import { TLayoutPath, TRoutes } from "@/interface/routes";

export const routesGenerator = (routes: TLayoutPath[]):TRoutes[] => {
  const layoutRoutes = routes.map((path) => {
    return {
      path: path.path,
      element: path.element,
    };
  });
  return layoutRoutes;
};
