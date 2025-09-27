"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import { LogOut, User, Settings, Book } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileDropdown() {
  return (
    <DropdownMenu.Root modal={false}>
      {/* Avatar Trigger */}
      <DropdownMenu.Trigger asChild>
        <button className="rounded-full bg-[#111c2e] border border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#111c2e] transition-all duration-200 cursor-pointer">
          <Avatar.Root className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600">
            <User className="w-5 h-5 text-white" />
          </Avatar.Root>
        </button>
      </DropdownMenu.Trigger>

      {/* Dropdown Content */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="end"
          className="w-64 profile-dropdown-content rounded-xl shadow-2xl border border-gray-600 p-2 animate-in fade-in-80 slide-in-from-top-2 duration-200"
          style={{
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-gray-600 mb-2">
            <div className="flex items-center gap-3">
              <Avatar.Root className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600">
                <User className="w-5 h-5 text-white" />
              </Avatar.Root>
              <div>
                <p className="text-white text-sm font-medium">Ashok Gorana</p>
                <p className="text-gray-400 text-xs">ashokgorana9001@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <DropdownMenu.Item asChild>
            <Link 
              to="/profile" 
              className="profile-dropdown-item flex items-center gap-3 px-3 py-2.5 text-sm text-gray-200 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:outline-none focus:bg-gray-700"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="profile-dropdown-item flex items-center gap-3 px-3 py-2.5 text-sm text-gray-200 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:outline-none focus:bg-gray-700">
            <Book className="w-4 h-4" />
            <span>My Courses</span>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="profile-dropdown-item flex items-center gap-3 px-3 py-2.5 text-sm text-gray-200 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:outline-none focus:bg-gray-700">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </DropdownMenu.Item>

          {/* Separator */}
          <DropdownMenu.Separator className="my-2 h-px bg-gray-600" />

          {/* Logout */}
          <DropdownMenu.Item className="profile-dropdown-item flex items-center gap-3 px-3 py-2.5 text-sm text-red-400 rounded-lg cursor-pointer hover:bg-red-900/20 hover:text-red-300 transition-colors duration-200 focus:outline-none focus:bg-red-900/20">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </DropdownMenu.Item>

          {/* Arrow */}
          <DropdownMenu.Arrow className="fill-[#111c2e] border-gray-600" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
