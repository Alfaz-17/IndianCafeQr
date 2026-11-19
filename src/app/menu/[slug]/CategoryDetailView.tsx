"use client";

import Link from "next/link";
import Image from "next/image";
import type { Category, MenuItem } from "@/data/types";
import { CategoryChips } from "@/components/CategoryChips";
import { MenuItemRow } from "@/components/MenuItemRow";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft } from "lucide-react";

export function CategoryDetailView({
  categories,
  currentCategory,
  categoryItems,
}: {
  categories: Category[];
  currentCategory: Category;
  categoryItems: MenuItem[];
}) {
  const { language } = useLanguage();
  const isGu = language === "gu";

  const catName = isGu && currentCategory.nameGu ? currentCategory.nameGu : currentCategory.name;
  const catSubName = isGu && currentCategory.nameGu ? currentCategory.name : null;
  const tagline = isGu && currentCategory.taglineGu ? currentCategory.taglineGu : currentCategory.tagline;
  const addOn = isGu && currentCategory.addOnNoteGu ? currentCategory.addOnNoteGu : currentCategory.addOnNote;

  return (
    <div className="min-h-screen bg-[#F5E8D6] pb-12 text-[#2A2118]">
      {/* 100% Solid Sticky Navbar & Category Chips (Zero overlap, Back button always accessible) */}
      <div className="sticky top-0 z-50 bg-[#F5E8D6] border-b border-[#2A2118]/10 shadow-xs">
        {/* Top Header: Back Button, Brand, Language Toggle */}
        <header className="px-4 py-2 flex items-center justify-between">
          <Link
            href="/menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2D4027] shadow-sm transition hover:bg-white/90 active:scale-95 border border-[#2D4027]/15"
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

          {/* Language switch */}
          <LanguageToggle variant="light" />
        </header>

        {/* Horizontal Category Selector Chips */}
        <div className="border-t border-[#EEDFC9]/90 bg-[#F5E8D6]">
          <CategoryChips categories={categories} activeSlug={currentCategory.slug} />
        </div>
      </div>

      {/* Curved Dark Green Banner with Real Food Pic and Tagline */}
      <div className="mx-3 mt-3 overflow-hidden rounded-3xl bg-[#2D4027] px-6 pt-5 pb-6 text-white shadow-md">
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
              className="text-2xl font-black tracking-wide text-[#F5E8D6] leading-tight"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              {catName}
            </h1>
            {catSubName && (
              <p className="text-xs text-[#F5E8D6]/70 font-medium">
                {catSubName}
              </p>
            )}
            {tagline && (
              <p
                className="mt-0.5 text-sm text-[#C97836]"
                style={{ fontFamily: "var(--font-script-var)" }}
              >
                {tagline}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Menu Items List */}
      <div className="px-5 pt-3 pb-6">
        <ul className="divide-y divide-[#2A2118]/8">
          {categoryItems.map((item, index) => (
            <MenuItemRow key={item.id} item={item} index={index} />
          ))}
        </ul>

        {/* Add-on Note */}
        {addOn && (
          <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#EEDFC9] p-3 text-xs font-medium text-[#2D4027]">
            <span>
              {isGu ? "એડ-ઓન્સ:" : "Add-ons:"} <strong>{addOn}</strong>
            </span>
          </div>
        )}

        {/* Cold Drinks Note */}
        {currentCategory.id === "cold-drinks" && (
          <div className="mt-4 rounded-xl bg-[#EEDFC9]/70 p-3 text-center text-xs text-[#2A2118]/80">
            {isGu
              ? "તમામ કોલ્ડ ડ્રિંક્સ છાપેલી કિંમત (MRP) મુજબ મળશે."
              : "All cold drinks are sold at MRP (Maximum Retail Price)."}
          </div>
        )}

        {/* "Taste the Difference" flourish */}
        <div className="mt-10 text-center">
          <p
            className="text-xl text-[#C97836]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            {isGu ? "— અસલ સ્વાદની મજા —" : "— Taste the Difference —"}
          </p>
          <p className="mt-1 text-[11px] text-[#2A2118]/50">
            {isGu ? "૧૦૦% શુદ્ધ શાકાહારી કેફે" : "100% Pure Vegetarian Cafe"}
          </p>
        </div>
      </div>
    </div>
  );
}
