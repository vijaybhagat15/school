import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons
import MobilenavLinks from "./Mobilenavelinks";
import SearchInput from "./SearchInput";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="flex items-center justify-between px-4 md:px-6 bg-white shadow-md w-full sticky top-0 z-10 h-16 md:h-20">
      {/* Logo and Name */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="NovaStar Academy" className="h-10 md:h-14" />
        <span className="text-base md:text-xl font-bold text-blue-900">
          NovaStar Academy
        </span>
      </Link>

      {/* Search Input (Hidden on Mobile) */}
      <div className="hidden lg:block">
        <SearchInput />
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6 text-blue-900 font-semibold pr-10">
        {[ 
          { name: "Home", path: "/" },
          { name: "Schools", path: "/Schools" },
          { name: "About", path: "/About" },
          { name: "Contact", path: "/Contact" },
          { name: "Enroll", path: "/Enroll" },
          { name: "Careers", path: "/Careers" },
          { name: "News", path: "/News" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`hover:text-blue-600 transition ${
              location.pathname === item.path ? "text-red-600 underline" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-blue-900 focus:outline-none"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden">
          <MobilenavLinks setMenuOpen={setMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;
