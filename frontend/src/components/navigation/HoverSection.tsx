// src/components/HoverSection.jsx
import type { JSX } from 'react';

interface HoverSectionProps {
  items: string[];
  isVisible: boolean;
}

const HoverSection = ({ items, isVisible }: HoverSectionProps): JSX.Element | null => {
  if (!isVisible || items.length === 0) return null;

  return (
    <div 
      className="absolute top-full left-0 z-10 mt-2 w-64 rounded-xl bg-white text-black p-4 shadow-xl border border-gray-100 transition-all duration-200 ease-in-out animate-in slide-in-from-top-2"
      role="menu"
      aria-label="Dropdown menu"
    >
      <ul className="flex flex-col gap-2">
        {items.map((item: string, index: number) => (
          <li key={index}>
            <button
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              role="menuitem"
              tabIndex={0}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HoverSection;
