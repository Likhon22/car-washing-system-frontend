import { TLayoutPath, TSidebar } from "@/interface/routes";

const sidebarGenerator = (items: TLayoutPath[]): TSidebar[] => {
  const sidebar = items.map((path) => {
    return {
      title: path.name,
      url: `/dashboard/${path.path}`,
    };
  });
  return sidebar;
};

export { sidebarGenerator };
