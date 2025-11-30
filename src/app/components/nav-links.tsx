"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useSession } from "next-auth/react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/pages/about" },
  { name: "Service", href: "/pages/service" },
  { name: "Dashboard", href: "/pages/dashboard" },
  { name: "Destinations", href: "/pages/destinations" },
  { name: "FAQ", href: "/pages/faq" },
  { name: "Contact", href: "/pages/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const { data: sessionData, status } = useSession();
  return (
    <>
      {links.map((link) => {
        if (link.name === "Dashboard" && status !== "authenticated")
          return null;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center justify-center gap-2 p-3 text-sm font-medium",
              {
                "text-orange-600": pathname === link.href,
              }
            )}
          >
            <p className="hidden md:block text-xl">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
