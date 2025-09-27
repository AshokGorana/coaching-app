import { useState, useCallback, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { navItems, allenStyleMenuItems } from "./navConfig";
import NavItem from "../navigation/NavItem";
import MenuItem from "../navigation/MenuItem";
import MobileMenu from "../navigation/MobileMenu";
import ProfileDropdown from "../../pages/profileDropdown";

interface NavItemType {
  id: string;
  label: string;
  items?: string[];
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

          {/* Desktop Navigation - Allen Style */}
          <div className="hidden cursor-pointer lg:flex items-center gap-1" role="menubar">
            {allenStyleMenuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                className="relative"
              />
            ))}
          </div>

          {/* Fallback for smaller screens - Original Style */}
          <ul className="hidden md:flex lg:hidden items-center gap-2" role="menubar">
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
        <div className="flex items-center cursor-pointer gap-4">
          <ProfileDropdown />
        </div>
      </nav>
    </header>
  );
}


