import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { mobileMenuItems } from '../Navbar/navConfig';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MobileMenuItemProps {
  item: {
    id: string;
    label: string;
    href?: string;
    children?: MobileMenuItemProps['item'][];
  };
  level?: number;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ item, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasChildren = item.children && item.children.length > 0;
  
  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else if (item.href) {
      // Handle navigation
      window.location.href = item.href;
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className={`
          w-full flex items-center justify-between py-3 px-4 text-left transition-colors duration-200 mobile-menu-item cursor-pointer
          ${level === 0 ? 'text-white font-medium' : 'text-gray-300 font-normal'}
          ${level === 1 ? 'pl-8' : ''}
          ${level === 2 ? 'pl-12' : ''}
          hover:bg-gray-700 active:bg-gray-600
        `}
      >
        <span className={`${level === 0 ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
          {item.label}
        </span>
        {hasChildren && (
          <div className="ml-2">
            {isExpanded ? (
              <ChevronUpIcon className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 text-gray-400" />
            )}
          </div>
        )}
      </button>
      
      {hasChildren && isExpanded && (
        <div className="bg-gray-25">
          {item.children?.map((child) => (
            <MobileMenuItem
              key={child.id}
              item={child}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 cursor-pointer"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 w-80 bg-[#111c2e] shadow-xl z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-600">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-blue-400">TSG</span>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-200 cursor-pointer"
            aria-label="Close menu"
          >
            <IoClose className="w-6 h-6 text-gray-300" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          <div className="py-2">
            {mobileMenuItems.map((item) => (
              <MobileMenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-600">
          <button className="w-full bg-blue-600 text-white py-2 px-4 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
