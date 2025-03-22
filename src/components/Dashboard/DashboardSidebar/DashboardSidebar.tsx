import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { dashboardSidebar } from "@/routes/DashboardRoutes";
import { mainLayoutNavigation } from "@/routes/MainLayoutRoutes";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { logout, selectUser } from "@/redux/features/auth/authSlice";
import {
  Home,
  Users,
  Settings,
  LogOut,
  CarFront,
  Sparkles,
  ShoppingCart,
  Calendar,
} from "lucide-react";

// Map of icons to use for each sidebar item
const iconMap: Record<string, React.ElementType> = {
  Dashboard: Home,
  "Create Admin": Users,
  Services: CarFront,
  Bookings: Calendar,
  Packages: Sparkles,
  Orders: ShoppingCart,
  Settings: Settings,
  "Admin Home": Home,
  Home: Home,
};

const DashboardSidebar = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Sidebar className="min-h-screen border-r border-gray-700 overflow-hidden">
      <SidebarContent className="bg-gray-800 text-gray-200 flex flex-col h-full">
        {/* Header with logo */}
        <div className="p-4 flex items-center gap-3">
          <div className="bg-blue-500 text-white p-2 rounded-md">
            <CarFront className="h-5 w-5" />
          </div>
          <div className="flex items-center">
            <span className="text-blue-400 font-bold text-lg">Car</span>
            <span className="text-white font-bold text-lg">Wash</span>
          </div>
        </div>

        <SidebarSeparator className="bg-gray-700 my-2" />

        {/* Dashboard navigation section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-xs font-semibold tracking-wider uppercase px-4 py-2">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent className="mb-4">
            <SidebarMenu>
              {dashboardSidebar.map((item) => {
                const Icon = iconMap[item.title] || Settings;
                return (
                  <SidebarMenuItem key={item.title}>
                    <NavLink
                      className={({ isActive }) =>
                        `flex items-center gap-3 py-2 px-4 rounded-md transition-colors ${
                          isActive
                            ? "bg-blue-500/20 text-blue-400 font-medium"
                            : "text-gray-300 hover:bg-gray-700/70 hover:text-gray-100"
                        }`
                      }
                      to={item.url}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-gray-700 my-2" />

        {/* Main navigation section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-xs font-semibold tracking-wider uppercase px-4 py-2">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainLayoutNavigation.slice(0, 1).map((item) => {
                const Icon = iconMap[item.label] || Home;
                return (
                  <SidebarMenuItem key={item.label}>
                    <NavLink
                      className={({ isActive }) =>
                        `flex items-center gap-3 py-2 px-4 rounded-md transition-colors ${
                          isActive
                            ? "bg-blue-500/20 text-blue-400 font-medium"
                            : "text-gray-300 hover:bg-gray-700/70 hover:text-gray-100"
                        }`
                      }
                      to={item.to}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User section and logout at the bottom */}
        <SidebarFooter className="mt-auto pb-4">
          <SidebarSeparator className="bg-gray-700 my-2" />
          {user && (
            <div className="px-4 py-2 mb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-500 text-white p-2 rounded-full">
                  <span className="font-medium text-sm">
                    {user.email.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-medium text-gray-200 truncate">
                    {user.email}
                  </p>
                  <p className="text-xs text-gray-400">
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </p>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 py-2 px-4 w-full text-left rounded-md transition-colors text-red-400 hover:bg-red-500/20"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
