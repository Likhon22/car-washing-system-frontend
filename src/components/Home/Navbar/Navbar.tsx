import LoginModal from "@/components/Modal/LoginModal/LoginModal";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <nav className="p-4 bg-gray-800 text-white flex  justify-between items-center">
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <h1>Car Wash</h1>
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex items-center gap-4 ">
          {mainLayoutNavigation.map((navItem, index: number) => {
            const isActive = location.pathname === navItem.to; // Check if the current path matches the nav item

            return (
              <NavigationMenuItem key={index}>
                <Link to={navItem.to}>
                  <NavigationMenuLink
                    className={`${isActive ? "text-blue-400" : "text-white"}`}
                  >
                    {navItem.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      {isMenuOpen && (
        <div
          className={`absolute top-16 left-0 w-full bg-gray-800/95 md:hidden z-50 transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          {mainLayoutNavigation.map((navItem, index) => {
            const isActive = location.pathname === navItem.to;

            return (
              <Link
                key={index}
                to={navItem.to}
                className={`block px-4 py-2 ${
                  isActive ? "bg-blue-600" : "hover:bg-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.label}
              </Link>
            );
          })}
        </div>
      )}
      <LoginModal />
    </nav>
  );
};

export default Navbar;
