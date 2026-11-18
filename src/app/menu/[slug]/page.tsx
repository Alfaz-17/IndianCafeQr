import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { items } from "@/data/menu";
import { CategoryChips } from "@/components/CategoryChips";
import { MenuItemRow } from "@/components/MenuItemRow";
import { ChevronLeft, Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-[#F5E8D6] pb-12 text-[#2A2118]">
      {/* Top Bar with Back Button and Branding */}
      <div className="relative px-4 pt-4 pb-3 flex items-center justify-between">
        <Link
          href="/menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#2D4027] shadow-sm backdrop-blur-sm transition hover:bg-white active:scale-95"
          aria-label="Back to categories"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </Link>

        {/* Centered TIC Logo Badge */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[9px] font-bold tracking-[0.25em] text-[#2D4027]/70 uppercase">
            ESTD 2021
          </span>
          <span
            className="text-sm font-black tracking-wider text-[#2D4027] leading-tight"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            THE INDIAN
          </span>
          <span
            className="text-base font-bold text-[#C97836] -mt-1 leading-none"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            Cafe
          </span>
        </div>

        <div className="w-10" />
      </div>

      {/* Curved Dark Green Banner with Real Food Pic and Tagline */}
      <div className="relative mx-3 overflow-hidden rounded-3xl bg-[#2D4027] px-6 pt-5 pb-6 text-white shadow-md">
        <div className="flex items-center gap-4">
          {/* Real Category Food Cutout Image */}
          <div className="relative h-16 w-16 flex-shrink-0 drop-shadow-md">
            <Image
              src={currentCategory.icon}
              alt={currentCategory.name}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div>
            <h1
              className="text-2xl font-black tracking-wide text-[#F5E8D6]"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              {currentCategory.name}
            </h1>
            {currentCategory.tagline && (
              <p
                className="mt-0.5 text-sm text-[#C97836]"
                style={{ fontFamily: "var(--font-script-var)" }}
              >
                {currentCategory.tagline}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Horizontal Sticky Category Selector Chips */}
      <div className="mt-3">
        <CategoryChips categories={categories} activeSlug={currentCategory.slug} />
      </div>

      {/* Menu Items List */}
      <div className="px-5 pt-2 pb-6">
        <ul className="divide-y divide-[#2A2118]/8">
          {categoryItems.map((item, index) => (
            <MenuItemRow key={item.id} item={item} index={index} />
          ))}
        </ul>

        {/* Add-on Note */}
        {currentCategory.addOnNote && (
          <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#EEDFC9] p-3 text-xs font-medium text-[#2D4027]">
            <span>Add-ons: <strong>{currentCategory.addOnNote}</strong></span>
          </div>
        )}

        {/* Cold Drinks Note */}
        {currentCategory.id === "cold-drinks" && (
          <div className="mt-4 rounded-xl bg-[#EEDFC9]/70 p-3 text-center text-xs text-[#2A2118]/80">
            All cold drinks are sold at MRP (Maximum Retail Price).
          </div>
        )}

        {/* "Taste the Difference" flourish */}
        <div className="mt-10 text-center">
          <p
            className="text-xl text-[#C97836]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            — Taste the Difference —
          </p>
          <p className="mt-1 text-[11px] text-[#2A2118]/50">100% Pure Vegetarian Cafe</p>
        </div>
      </div>
    </div>
  );
}
