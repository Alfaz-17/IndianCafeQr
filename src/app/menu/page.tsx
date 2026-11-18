import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchOverlay } from "@/components/SearchOverlay";
import { ArrowRight, Leaf } from "lucide-react";

export default function MenuCategoriesPage() {
  return (
    <div className="min-h-screen bg-[#F5E8D6] pb-12 text-[#2A2118]">
      {/* Screen 02 Top Banner using the authentic 2-Screen.png artwork */}
      <div className="relative w-full aspect-[1182/845] overflow-hidden">
        <Image
          src="/images/2-screen.webp"
          alt="The Indian Cafe - Lake View, Bhavnagar"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 448px) 100vw, 448px"
          quality={85}
        />

        {/* Floating Top Controls (Info hamburger & Search overlay) */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <Link
            href="/info"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55 shadow"
            aria-label="Cafe Information"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Link>

          <SearchOverlay />
        </div>
      </div>

      {/* "Our Menu" Heading & Jain Food Link */}
      <div className="px-5 pt-3 pb-2 flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <h2
            className="text-2xl font-bold text-[#2A2118]"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            Our
          </h2>
          <span
            className="text-3xl text-[#C97836]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            Menu
          </span>
        </div>

        <Link
          href="/jain"
          className="flex items-center gap-1.5 rounded-full bg-[#2D4027]/10 px-3.5 py-1 text-xs font-semibold text-[#2D4027] border border-[#2D4027]/20 active:scale-95 transition shadow-sm hover:bg-[#2D4027]/20"
        >
          <Leaf size={13} className="text-[#2D4027]" />
          <span>Jain Food</span>
          <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>

      {/* 4x5 Category Cards Grid with Category Photos */}
      <div className="px-4 mt-2">
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
          {categories.map((c, index) => (
            <CategoryCard key={c.id} c={c} index={index} />
          ))}
        </div>
      </div>

      {/* Footer Flourish */}
      <div className="mt-8 text-center pb-6">
        <p
          className="text-lg text-[#C97836]"
          style={{ fontFamily: "var(--font-script-var)" }}
        >
          — Taste the Difference —
        </p>
        <p className="text-[11px] text-[#2A2118]/60 mt-0.5">
          The Indian Cafe • Lake View, Bhavnagar
        </p>
      </div>
    </div>
  );
}
