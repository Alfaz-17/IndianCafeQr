import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchOverlay } from "@/components/SearchOverlay";
import { Leaf, Menu as MenuIcon } from "lucide-react";

export default function MenuCategoriesPage() {
  return (
    <div className="min-h-screen bg-[#F5E9DA] pb-24 text-[#2A2118]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between bg-[#F5E9DA]/95 px-5 py-3.5 backdrop-blur-md border-b border-[#EAD7BE]/60">
        <Link href="/info" className="flex h-9 w-9 items-center justify-center rounded-full text-[#5B3A29] hover:bg-[#EAD7BE]/50 transition">
          <MenuIcon size={22} strokeWidth={2} />
        </Link>

        {/* Center Logo Badge */}
        <Link href="/" className="flex flex-col items-center">
          <div className="flex items-center gap-1.5">
            <span
              className="text-sm font-bold tracking-widest text-[#5B3A29]"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              THE INDIAN
            </span>
          </div>
          <span
            className="text-base font-bold text-[#C8793A] -mt-1 leading-none"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            Cafe
          </span>
        </Link>

        {/* Search */}
        <SearchOverlay />
      </header>

      {/* Decorative Wavy Photo Banner */}
      <div className="relative h-44 w-full overflow-hidden shadow-sm">
        <Image
          src="/images/hero-day.png"
          alt="The Indian Cafe Ambiance"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E27]/80 via-transparent to-black/20" />

        {/* Banner text & Pure Veg Badge */}
        <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between text-white">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#EAD7BE] uppercase">
              Lake View, Bhavnagar
            </span>
            <p
              className="text-2xl font-bold text-white leading-tight drop-shadow-md"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              Fresh Flavors & Vibes
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-[#2F3E27]/90 px-3 py-1 border border-[#EAD7BE]/30 backdrop-blur-sm">
            <div className="h-3 w-3 rounded-sm border border-green-400 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
            </div>
            <span className="text-[11px] font-bold text-[#EAD7BE]">100% Veg</span>
          </div>
        </div>

        {/* Wavy bottom divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 48"
            className="w-full h-4 text-[#F5E9DA]"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C320,40 420,40 720,20 C1020,0 1120,40 1440,10 L1440,48 L0,48 Z"
            />
          </svg>
        </div>
      </div>

      {/* Heading "Our Menu" */}
      <div className="px-5 pt-4 pb-3 flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <h2
            className="text-2xl font-bold text-[#2A2118]"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            Our
          </h2>
          <span
            className="text-3xl text-[#C8793A]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            Menu
          </span>
        </div>
        <span className="text-xs font-medium text-[#5B3A29]/70">20 Categories</span>
      </div>

      {/* Jain Special Banner */}
      <div className="px-5 mb-4">
        <Link
          href="/jain"
          className="group flex items-center justify-between rounded-2xl bg-[#2F3E27] p-3.5 text-[#F5E9DA] shadow-md transition-all duration-200 active:scale-[0.98] hover:bg-[#1F2B1A]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700/40 text-green-300">
              <Leaf size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-wide">Jain Food Menu</span>
                <span className="rounded-full bg-green-600/30 px-2 py-0.5 text-[10px] font-semibold text-green-300">
                  Special
                </span>
              </div>
              <p className="text-xs text-[#EAD7BE]/80">Explore dedicated Jain alternatives</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-[#C8793A] group-hover:translate-x-1 transition-transform">
            View →
          </span>
        </Link>
      </div>

      {/* 4x5 Category Cards Grid (20 Categories) */}
      <div className="px-4">
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
          {categories.map((c, index) => (
            <CategoryCard key={c.id} c={c} index={index} />
          ))}
        </div>
      </div>

      {/* Footer Flourish */}
      <div className="mt-8 text-center">
        <p
          className="text-lg text-[#C8793A]"
          style={{ fontFamily: "var(--font-script-var)" }}
        >
          — Taste the Difference —
        </p>
        <p className="text-[11px] text-[#5B3A29]/60 mt-0.5">The Indian Cafe • Lake View, Bhavnagar</p>
      </div>
    </div>
  );
}
