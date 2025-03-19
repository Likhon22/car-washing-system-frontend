import { ReactNode } from "react";

export type TLayoutPath = {
  name: string;
  path: string;
  element: ReactNode;
};

export type TRoutes = {
  path: string;
  element: ReactNode;
};

export type TNavigation = {
  label: string;
  to: string;
};
