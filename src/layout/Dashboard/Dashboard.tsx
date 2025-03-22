import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home, Users, Settings, LogOut } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { logout } from "@/redux/features/auth/authSlice";

const Dashboard = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Create Admin", path: "/dashboard/create-admin" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-xl font-semibold">Admin Dashboard</span>
          </div>
          <div className="flex flex-col flex-grow px-4 mt-5">
            <nav className="flex-1 space-y-1">
              {sidebarItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`group flex items-center px-4 py-2 text-sm rounded-md ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon
                      className={`mr-3 h-5 w-5 ${
                        isActive ? "text-blue-500" : "text-gray-400"
                      }`}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto pb-6">
              <button
                onClick={() => dispatch(logout())}
                className="group flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:bg-red-100 hover:text-red-700 rounded-md"
              >
                <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar for mobile */}
        <div className="md:hidden bg-white shadow-sm py-2 px-4 flex items-center justify-between">
          <span className="text-xl font-semibold">Dashboard</span>
          <div className="relative">{/* Mobile menu button here */}</div>
        </div>

        {/* Content area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
