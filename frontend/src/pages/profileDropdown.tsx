"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import { LogOut, User, Settings, Book } from "lucide-react";

export default function ProfileDropdown() {
  return (
    <DropdownMenu.Root>
      {/* Avatar Trigger */}
      <DropdownMenu.Trigger asChild>
        <button className="rounded-full focus:outline-none cursor-pointer">
          <Avatar.Root className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4985ed]">
            < User />
            <Avatar.Fallback className="text-sm font-medium text-gray-600">
            </Avatar.Fallback>
          </Avatar.Root>
        </button>
      </DropdownMenu.Trigger>

      {/* Dropdown Content */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          className="w-48 bg-user-menu rounded-lg shadow-lg border-1 border-[#282c34] p-1 animate-in fade-in-80 mt-2 mr-2"
        >
          <DropdownMenu.Label className="px-2 py-1 text-xs text-white">
            My Account
          </DropdownMenu.Label>

          <DropdownMenu.Item className="flex items-center gap-2 px-2 py-2 text-sm text-white rounded-md cursor-pointer hover:bg-[#23272f] hover:outline-none">
          <a className="flex gap-2" href="/profile"> <User className="w-4 h-4" /> Profile </a>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="flex items-center gap-2 px-2 py-2 text-sm text-white rounded-md cursor-pointer hover:bg-[#23272f] hover:outline-none">
            <Book className="w-4 h-4" /> My Courses
          </DropdownMenu.Item>

          <DropdownMenu.Item className="flex items-center gap-2 px-2 py-2 text-sm text-white rounded-md cursor-pointer hover:bg-[#23272f] hover:outline-none">
            <Settings className="w-4 h-4" /> Settings
          </DropdownMenu.Item>


          <DropdownMenu.Separator className="my-1 h-px bg-[#282c34]" />

          <DropdownMenu.Item className="flex items-center gap-2 px-2 py-2 text-sm text-red-600 rounded-md cursor-pointer hover:bg-[#23272f] hover:outline-none">
            <LogOut className="w-4 h-4" /> Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
