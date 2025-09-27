import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export interface MenuItemProps {
  id: string;
  label: string;
  href?: string;
  children?: MenuItemProps[];
  icon?: React.ReactNode;
  description?: string;
  isExternal?: boolean;
}

interface MenuItemComponentProps {
  item: MenuItemProps;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

const MenuItem: React.FC<MenuItemComponentProps> = ({
  item,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave?.();
  };

  const renderSubMenu = (children: MenuItemProps[], level: number = 0) => {
    return (
      <div
        className={`
          absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-lg py-2 z-50 allen-dropdown
          ${level === 0 ? 'min-w-64' : 'min-w-48'}
          ${level > 0 ? 'left-full top-0 ml-1' : ''}
        `}
        style={{ zIndex: 1000 + level }}
      >
        {children.map((child) => (
          <div key={child.id} className="relative group">
            <a
              href={child.href}
              className={`
                flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 
                transition-colors duration-200 border-b border-gray-100 last:border-b-0 allen-dropdown-item
                ${child.children ? 'pr-8' : ''}
              `}
              target={child.isExternal ? '_blank' : undefined}
              rel={child.isExternal ? 'noopener noreferrer' : undefined}
            >
              {child.icon && (
                <span className="mr-3 text-gray-400 group-hover:text-blue-500">
                  {child.icon}
                </span>
              )}
              <div className="flex-1">
                <div className="font-medium text-sm">{child.label}</div>
                {child.description && (
                  <div className="text-xs text-gray-500 mt-1">{child.description}</div>
                )}
              </div>
              {child.children && (
                <ChevronDownIcon className="w-4 h-4 text-gray-400 transform -rotate-90" />
              )}
            </a>
            
            {/* Multi-level dropdown support */}
            {child.children && (
              <div className="absolute left-full top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {renderSubMenu(child.children, level + 1)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={menuItemRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={item.href}
        className={`
          flex items-center px-4 py-3 text-white hover:text-blue-200 transition-colors duration-200 allen-menu-item
          ${isActive ? 'text-blue-400' : ''}
          ${item.children ? 'pr-8' : ''}
        `}
        target={item.isExternal ? '_blank' : undefined}
        rel={item.isExternal ? 'noopener noreferrer' : undefined}
      >
        {item.icon && (
          <span className="mr-2 text-gray-300 hover:text-blue-300">
            {item.icon}
          </span>
        )}
        <span className="font-medium">{item.label}</span>
        {item.children && (
          <ChevronDownIcon 
            className={`w-4 h-4 ml-1 transition-transform duration-200 ${
              isHovered ? 'rotate-180' : ''
            }`} 
          />
        )}
      </a>

      {/* Dropdown Menu */}
      {item.children && isHovered && (
        <div ref={dropdownRef}>
          {renderSubMenu(item.children)}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
