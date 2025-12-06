"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  width: string;
  label: string;
  options: string[];
  onSelect?: (value: string) => void;
}

export default function Dropdown({
  width,
  label,
  options,
  onSelect,
}: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="inline-flex items-center p-4 bg-sky-100 rounded-md focus:outline-none relative"
        style={{ width }}
      >
        {label}
        <ChevronDown className="w-4 h-4 absolute top-5 right-2" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white rounded-md shadow-md py-1"
          style={{ width }}
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
