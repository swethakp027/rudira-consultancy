"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { User } from "../lib/definition";


const links = [
  { name: "Home", href: "/" },
  {name: "Service",href: "/pages/service"},
  { name: "About", href: "/pages/about" },
  { name: "Dashboard", href: "/pages/dashboard" },
  { name: "Contact", href: "/pages/contact" },
    {name: "Destinations",href: "/pages/destinations"},
  { name: "FAQ", href: "/pages/faq" },
];

export default function NavLinks() {
  const pathname = usePathname();
    const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
      getSession().then((session:any) => {
        if (session?.user) {
          setUser(session.user)
        } else{
          setUser(null)
        }
      })
    }, [0]);
  return (
    <>
      {links.map((link) => {
        if (link.name === "Dashboard" && !user?.name) return null;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center justify-center gap-2 p-3 text-sm font-medium",
              {
                "text-orange-600": (pathname === link.href),
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
