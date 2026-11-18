import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/categories";
import { items } from "@/data/menu";
import { CategoryChips } from "@/components/CategoryChips";
import { MenuItemRow } from "@/components/MenuItemRow";
import { ChevronLeft, Sparkles } from "lucide-react";
import { SearchOverlay } from "@/components/SearchOverlay";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryItemsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentCategory = categories.find((c) => c.slug === slug);

  if (!currentCategory) {
    notFound();
  }

  const categoryItems = items.filter((i) => i.categoryId === currentCategory.id);

  return (
    <div className="min-h-screen bg-[#F5E9DA] pb-24 text-[#2A2118]">
      {/* Top Header with Back button and Branding */}
      <header className="sticky top-0 z-40 flex items-center justify-between bg-[#2F3E27] px-4 py-3 text-[#F5E9DA] shadow-sm">
        <Link
          href="/menu"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F2B1A]/60 text-[#F5E9DA] transition hover:bg-[#1F2B1A] active:scale-95"
          aria-label="Back to categories"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </Link>

        <div className="flex flex-col items-center">
          <span
            className="text-xs font-bold tracking-widest text-[#EAD7BE]"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            THE INDIAN
          </span>
          <span
            className="text-sm font-bold text-[#C8793A] -mt-1 leading-none"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            Cafe
          </span>
        </div>

        <SearchOverlay />
      </header>

      {/* Curved Green Category Banner */}
      <div className="relative overflow-hidden bg-[#2F3E27] px-6 pt-5 pb-8 text-center text-[#F5E9DA]">
        {/* Subtle decorative leaves in background */}
        <div className="pointer-events-none absolute -top-4 -left-4 text-white/5">
          <svg width="90" height="90" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </div>
        <div className="pointer-events-none absolute -top-4 -right-4 text-white/5 transform scale-x-[-1]">
          <svg width="90" height="90" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </div>

        <h1
          className="text-3xl font-extrabold tracking-wide text-[#F5E9DA]"
          style={{ fontFamily: "var(--font-display-var)" }}
        >
          {currentCategory.name}
        </h1>

        {currentCategory.tagline && (
          <p
            className="mt-1 text-base text-[#C8793A]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            {currentCategory.tagline}
          </p>
        )}

        {/* Curved bottom transition wave */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            className="w-full h-4 text-[#F5E9DA]"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C480,50 960,50 1440,0 L1440,60 L0,60 Z"
            />
          </svg>
        </div>
      </div>

      {/* Horizontal Sticky Category Chips */}
      <CategoryChips categories={categories} activeSlug={currentCategory.slug} />

      {/* Menu Items List */}
      <div className="px-5 pt-3 pb-6">
        <ul className="divide-y divide-[#2A2118]/8">
          {categoryItems.map((item, index) => (
            <MenuItemRow key={item.id} item={item} index={index} />
          ))}
        </ul>

        {/* Add-on Note */}
        {currentCategory.addOnNote && (
          <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#EAD7BE]/70 p-3 text-xs font-medium text-[#5B3A29]">
            <Sparkles size={14} className="text-[#C8793A]" />
            <span>Add-ons: <strong>{currentCategory.addOnNote}</strong></span>
          </div>
        )}

        {/* Special note for Cold Drinks if applicable */}
        {currentCategory.id === "cold-drinks" && (
          <div className="mt-4 rounded-xl bg-[#EAD7BE]/50 p-3 text-center text-xs text-[#5B3A29]">
            All cold drinks are sold at MRP (Maximum Retail Price).
          </div>
        )}

        {/* "Taste the Difference" flourish */}
        <div className="mt-10 text-center">
          <p
            className="text-xl text-[#C8793A]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            — Taste the Difference —
          </p>
          <p className="mt-1 text-[11px] text-[#5B3A29]/60">100% Pure Vegetarian Cafe</p>
        </div>
      </div>
    </div>
  );
}
