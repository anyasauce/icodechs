import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

interface MobileNavLinkProps {
  to: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Type the 'path' parameter as a string
  const isActive = (path: string): boolean => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
            <span className="font-bold text-white text-lg">I</span>
          </div>
          <div
            className={`text-2xl font-bold bg-clip-text text-indigo-600 dark:text-indigo-400 ${
              isScrolled ? "dark:text-indigo-600" : "dark:text-indigo-400"
            }`}
          >
            Icodechs
          </div>
        </Link>

        <nav className="space-x-1 hidden md:flex">
          <NavLink to="/" active={isActive("/")}>
            Home
          </NavLink>
          <NavLink to="/about" active={isActive("/about")}>
            About
          </NavLink>
          <NavLink to="/services" active={isActive("/services")}>
            Services
          </NavLink>
          <NavLink to="/projects" active={isActive("/projects")}>
            Projects
          </NavLink>
          <NavLink to="/contact" active={isActive("/contact")}>
            Contact
          </NavLink>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl animate-fade-in-down">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <MobileNavLink
              to="/"
              active={isActive("/")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              to="/about"
              active={isActive("/about")}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              to="/projects"
              active={isActive("/projects")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </MobileNavLink>
            <MobileNavLink
              to="/contact"
              active={isActive("/contact")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}

// Add types to props
function NavLink({ to, active, children }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all relative ${
        active 
          ? 'text-indigo-600 dark:text-indigo-400' 
          : 'text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400'
      }`}
    >
      {children}
      {active && <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-indigo-500 rounded-full"></span>}
    </Link>
  );
}

// Add types to props
function MobileNavLink({ to, active, onClick, children }: MobileNavLinkProps) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
        active 
          ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
      }`}
    >
      {children}
    </Link>
  );
}
