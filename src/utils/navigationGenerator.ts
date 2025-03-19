import { TLayoutPath, TNavigation } from "@/interface/routes";

export const navigationGenerator = (routes: TLayoutPath[]): TNavigation[] => {
  const navigation = routes.map((path) => {
    return {
      label: path.name,
      to: path.path,
    };
  });
  return navigation;
};
