"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect?: (value: string) => void;
}

export default function Dropdown({ label, options, onSelect }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none">
        {label}
        <ChevronDown className="ml-2 w-4 h-4" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white rounded-md shadow-md py-1 w-full"
          sideOffset={4}
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 outline-none"
              onSelect={() => onSelect?.(option)}
            >
              {option}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
