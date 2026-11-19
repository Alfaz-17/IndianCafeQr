"use client";

import Link from "next/link";
import { clsx } from "clsx";
import type { Category } from "@/data/types";
import { useLanguage } from "@/context/LanguageContext";

export function CategoryChips({
  categories,
  activeSlug,
}: {
  categories: Category[];
  activeSlug: string;
}) {
  const { language } = useLanguage();
  const isGu = language === "gu";

  return (
    <div className="sticky top-0 z-30 bg-[#F5E8D6]/95 backdrop-blur-sm border-b border-[#EEDFC9]">
      <div className="flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/menu/${c.slug}`}
            className={clsx(
              "flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all whitespace-nowrap",
              c.slug === activeSlug
                ? "bg-[#2D4027] text-[#F5E8D6] shadow-sm"
                : "bg-[#EEDFC9] text-[#2A2118] hover:bg-[#e6d5bd]"
            )}
          >
            {isGu && c.nameGu ? c.nameGu : c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
