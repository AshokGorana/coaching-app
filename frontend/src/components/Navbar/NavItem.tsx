// import HoverSection from "./HoverSection";

interface NavItemProps {
  id: string;
  label: string;
  items: string[];
  isActive: boolean;
  onToggle: (id: string) => void;
}

export default function NavItem({
  id,
  label,
  items,
  isActive,
  onToggle,
}: NavItemProps) {
  const handleClick = () => {
    onToggle(id);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle(id);
    } else if (event.key === "Escape") {
      onToggle("");
    }
  };

  return (
    <li className="relative">
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`
          relative cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 
          hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0f1824]
          ${isActive ? "text-blue-400" : "text-white hover:text-blue-200"}
        `}
        aria-expanded={isActive}
        aria-haspopup="true"
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-full"></span>
        )}
      </button>

      {/* <HoverSection items={items} isVisible={isActive} /> */}
    </li>
  );
}
