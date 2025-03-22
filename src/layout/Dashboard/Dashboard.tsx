import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarProvider>
        <DashboardSidebar />
        <main>
          <SidebarTrigger className="md:hidden cursor-pointer " />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
