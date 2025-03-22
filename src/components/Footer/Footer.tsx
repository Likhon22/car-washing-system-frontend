import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link
              to="/"
              className="flex items-center text-2xl font-semibold mb-4"
            >
              <span className="text-blue-400">Car</span>
              <span className="text-white">Wash</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Professional car washing services with attention to detail and
              customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/exterior"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Exterior Washing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/interior"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Interior Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/premium"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Premium Detailing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/subscription"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Monthly Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-400 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Washing Street, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-400 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-400">+880 1712-345678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-400 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-400">info@carwash.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} CarWash. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="/privacy"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/refund"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
