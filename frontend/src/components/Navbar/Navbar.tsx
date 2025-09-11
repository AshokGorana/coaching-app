import { useState, useCallback, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "./navConfig";
import NavItem from "../navigation/NavItem";
import NavButton from "./NavButton";
import MobileMenu from "../navigation/MobileMenu";

// agar navConfig me ye structure hai to uska type define kar lo
interface NavItemType {
  id: string;
  label: string;
  items?: string[]; // agar submenu string[] hai, warna type ko adjust karo
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);

  const handleDropdownToggle = useCallback((itemId: string) => {
    setActiveDropdown((prev) => (prev === itemId ? "" : itemId));
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown("");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeDropdown]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f1824] shadow-lg">
      <nav
        ref={navRef}
        className="flex items-center justify-between px-6 py-4 w-full mx-auto"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Left Section */}
        <div className="leftNavbar flex items-center gap-8">
          <button
            onClick={() => setMenuOpen(true)}
            className="manuBarIcon text-white hover:text-blue-400 cursor-pointer transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

          <div className="text-white font-bold text-3xl tracking-wider cursor-pointer">
            TSG
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2" role="menubar">
            {navItems.map((item: NavItemType) => (
              <NavItem
                key={item.id}
                id={item.id}
                label={item.label}
                items={item.items ?? []}
                isActive={activeDropdown === item.id}
                onToggle={handleDropdownToggle}
              />
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <NavButton variant="primary">Talk to us</NavButton>
          <NavButton className="cursor-pointer" variant="secondary">
            <Link to="/login">Login</Link>
          </NavButton>
        </div>
      </nav>
    </header>
  );
}
