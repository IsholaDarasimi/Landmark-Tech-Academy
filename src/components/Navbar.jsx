import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/landmark.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/partners", label: "Partners" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cisco-midnight/98 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-cisco-midnight/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group pl-10">
            <div className="h-10 lg:h-12 flex items-center">
  <img
    src={logo}
    alt="Landmark Tech Academy"
    className="h-full w-auto object-contain"
  />
</div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-white text-base lg:text-lg leading-tight">
                
              </div>
              <div className="text-cisco-blue text-xs font-mono tracking-widest uppercase">
               
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
               className={({ isActive }) =>
  `nav-link px-4 py-2 text-sm font-body font-medium transition-colors duration-200 rounded-md ${
    isActive
      ? scrolled
        ? "text-cisco-blue"
        : "text-cisco-blue"
      : scrolled
        ? "text-gray-800 hover:text-cisco-blue"
        : "text-gray-200 hover:text-white"
  }`
}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-cisco-blue hover:bg-cisco-accent text-white text-sm font-display font-semibold rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-cisco-blue/30"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cisco-midnight border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
  `nav-link px-4 py-2 text-sm font-body font-medium transition-colors duration-200 rounded-md ${
    isActive
      ? scrolled
        ? "text-cisco-blue"
        : "text-cisco-blue"
      : scrolled
        ? "text-gray-800 hover:text-cisco-blue"
        : "text-gray-200 hover:text-white"
  }`
}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-cisco-blue text-white text-sm font-display font-semibold rounded-md hover:bg-cisco-accent transition-colors duration-200"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
