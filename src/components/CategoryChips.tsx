"use client";

import Link from "next/link";
import { clsx } from "clsx";
import type { Category } from "@/data/types";

export function CategoryChips({
  categories,
  activeSlug,
}: {
  categories: Category[];
  activeSlug: string;
}) {
  return (
    <div className="sticky top-0 z-30 bg-[#F5E9DA]/95 backdrop-blur-sm border-b border-[#EAD7BE]">
      <div className="flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/menu/${c.slug}`}
            className={clsx(
              "flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all whitespace-nowrap",
              c.slug === activeSlug
                ? "bg-[#2F3E27] text-[#F5E9DA] shadow-md"
                : "bg-[#EAD7BE]/70 text-[#5B3A29] hover:bg-[#EAD7BE]"
            )}
          >
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
