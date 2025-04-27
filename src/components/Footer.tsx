import { Link } from "react-router-dom";
import { Mail, Facebook, MapPin } from "lucide-react";

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-2">
                <span className="font-bold text-white text-lg">I</span>
              </div>
              <div className="text-xl font-bold bg-clip-text text-transparent text-indigo-600 dark:text-indigo-400">
                Icodechs
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Creating exceptional digital experiences with innovative design
              and powerful development.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                icon={<Mail className="w-5 h-5" />}
                href="mailto:anyajb014@gmail.com"
              />
              <SocialLink
                icon={<Facebook className="w-5 h-5" />}
                href="https://facebook.com"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-100">
              Services
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/services">
                Web Application Development
              </FooterLink>
              <FooterLink to="/services/">School Projects</FooterLink>
              <FooterLink to="/services">POS System Development</FooterLink>
              <FooterLink to="/services">Business Solutions</FooterLink>
              <FooterLink to="/services">Any Management System</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-100">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  Quezon City, Philippines
                  <br />
                  Iloilo City, Philippines
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  anyajb014@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {year} Icodechs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-indigo-500 dark:hover:text-indigo-400"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-indigo-500 dark:hover:text-indigo-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: FooterLinkProps) {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ icon, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
    >
      {icon}
    </a>
  );
}
