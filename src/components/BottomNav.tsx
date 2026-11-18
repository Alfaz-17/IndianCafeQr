"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, UtensilsCrossed, Leaf, Info } from "lucide-react";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/menu", label: "Menu", icon: UtensilsCrossed },
  { href: "/jain", label: "Jain", icon: Leaf },
  { href: "/info", label: "Info", icon: Info },
];

export function BottomNav() {
  const pathname = usePathname();

  // Don't show bottom nav on welcome page
  if (pathname === "/") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#EAD7BE] bg-[#2F3E27] shadow-lg">
      <div className="mx-auto flex max-w-md items-center justify-around py-2">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex flex-col items-center gap-0.5 px-3 py-1 text-[11px] font-medium transition-colors",
                isActive
                  ? "text-[#C8793A]"
                  : "text-[#F5E9DA]/70 hover:text-[#F5E9DA]"
              )}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
      {/* Safe area for iOS notch */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
