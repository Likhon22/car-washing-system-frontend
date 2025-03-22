import LoginModal from "@/components/Modal/LoginModal/LoginModal";
import { Button } from "@/components/ui/button";
import { logout, selectUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { mainLayoutNavigation } from "@/routes/MainLayoutRoutes";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const navigationItems = [...mainLayoutNavigation];

  if (user) {
    navigationItems.push({
      label: "Dashboard",
      to: "/dashboard/create-admin",
    });
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-800/10   text-white shadow-md backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <HiX className="block h-6 w-6" />
                ) : (
                  <HiMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
            <Link
              to="/"
              className="flex items-center text-xl font-semibold text-white transition-transform duration-200 hover:scale-105"
            >
              <span className="text-blue-400">Car</span>
              <span>Wash</span>
            </Link>
          </div>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center space-x-8">
              {navigationItems.map((navItem, index: number) => {
                const isActive = location.pathname === navItem.to;

                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={navItem.to}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
                        isActive
                          ? "text-blue-400 bg-gray-700/50"
                          : "text-gray-800"
                      }`}
                    >
                      {navItem.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center">
            {user ? (
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white border-none rounded-md px-4 py-2 transition-all  hover:scale-105 cursor-pointer duration-200"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>
            ) : (
              <LoginModal />
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 shadow-lg">
            {navigationItems.map((navItem, index) => {
              const isActive = location.pathname === navItem.to;

              return (
                <Link
                  key={index}
                  to={navItem.to}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navItem.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
