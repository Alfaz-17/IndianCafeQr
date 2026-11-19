"use client";

import Link from "next/link";
import { jainItems } from "@/data/jain";
import { categories } from "@/data/categories";
import { formatPriceShort } from "@/lib/format";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { Leaf, ChevronLeft } from "lucide-react";

export default function JainMenuPage() {
  const { language } = useLanguage();
  const isGu = language === "gu";

  const categoryOrder = ["pizza", "pasta", "grill-sandwich", "french-fries", "frankie", "maggi"];
  
  const groupedItems = categoryOrder.map((catId) => {
    const cat = categories.find((c) => c.id === catId);
    const items = jainItems.filter((item) => item.categoryId === catId);
    return { category: cat, items };
  }).filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen bg-[#F5E8D6] pb-12 text-[#2A2118]">
      {/* Sticky Top Header with Back, Brand, and Language Toggle */}
      <header className="sticky top-0 z-50 bg-[#F5E8D6] px-4 py-2 flex items-center justify-between border-b border-[#2A2118]/10 shadow-xs">
        <Link
          href="/menu"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#2D4027] shadow-sm backdrop-blur-sm transition hover:bg-white active:scale-95 border border-[#2D4027]/10"
          aria-label="Back to menu"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </Link>

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

        <LanguageToggle variant="light" />
      </header>

      {/* Hero Green Curved Header */}
      <div className="relative mx-3 mt-3 overflow-hidden rounded-3xl bg-[#2D4027] px-6 pt-5 pb-6 text-center text-[#F5E8D6] shadow-md">
        <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-emerald-300">
          <Leaf size={24} />
        </div>
        <h1
          className="text-2xl font-black tracking-wide text-[#F5E8D6]"
          style={{ fontFamily: "var(--font-display-var)" }}
        >
          {isGu ? "જૈન ફૂડ મેનૂ" : "Jain Food Menu"}
        </h1>
        <p
          className="mt-0.5 text-sm text-[#C97836]"
          style={{ fontFamily: "var(--font-script-var)" }}
        >
          {isGu
            ? "૧૦૦% સાત્વિક અને કંદમૂળ મુક્ત"
            : "100% Satvik & Root-Vegetable Free"}
        </p>
      </div>

      {/* Info Banner */}
      <div className="mx-4 mt-4 rounded-2xl bg-[#EEDFC9] p-3.5 border border-[#EEDFC9]">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#2D4027]">
          <Leaf size={16} className="text-[#2D4027] flex-shrink-0" />
          <span>
            {isGu
              ? "ડુંગળી, લસણ અને બટાકા વગર સંપૂર્ણ સાત્વિક રીતે બનાવેલ."
              : "Prepared strictly without onion, garlic, or potatoes."}
          </span>
        </div>
      </div>

      {/* Grouped Lists */}
      <div className="px-5 pt-4 space-y-5">
        {groupedItems.map(({ category, items }) => {
          const catName = isGu && category?.nameGu ? category.nameGu : category?.name;
          return (
            <div key={category?.id} className="rounded-2xl bg-[#EEDFC9] p-4 border border-[#EEDFC9]">
              <div className="flex items-center justify-between border-b border-[#2A2118]/10 pb-2 mb-2">
                <h2
                  className="text-base font-bold text-[#2A2118]"
                  style={{ fontFamily: "var(--font-display-var)" }}
                >
                  {catName}
                </h2>
                <span className="text-[10px] font-semibold text-[#2D4027] bg-[#2D4027]/10 px-2.5 py-0.5 rounded-full">
                  {isGu ? "જૈન સ્પેશ્યલ" : "Jain Special"}
                </span>
              </div>

              <ul className="divide-y divide-[#2A2118]/8">
                {items.map((item) => {
                  const primaryName = isGu && item.nameGu ? item.nameGu : item.name;
                  const secondaryName = isGu ? item.name : item.nameGu;
                  return (
                    <li key={item.id} className="flex min-h-[44px] items-center justify-between py-2.5">
                      <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                        <div className="h-3.5 w-3.5 rounded-sm border-2 border-green-700 flex items-center justify-center flex-shrink-0">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-700" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[14px] font-semibold text-[#2A2118] leading-tight">
                            {primaryName}
                          </p>
                          {secondaryName && secondaryName !== primaryName && (
                            <p className="text-[11px] text-[#2A2118]/50 mt-0.5">
                              {secondaryName}
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="text-[14px] font-bold tabular-nums text-[#2D4027] flex-shrink-0">
                        {formatPriceShort(item.price)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        {/* Add-on Note */}
        <div className="flex items-center justify-center gap-2 rounded-xl bg-[#EEDFC9] p-3 text-xs font-medium text-[#2D4027]">
          <span>
            {isGu
              ? "એડ-ઓન્સ: ચીઝ +₹20 · મેયો +₹20"
              : "Add-ons: Cheese +₹20 · Mayo +₹20"}
          </span>
        </div>

        {/* Flourish */}
        <div className="pt-4 text-center">
          <p
            className="text-lg text-[#C97836]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            {isGu ? "— સાત્વિક સ્વાદ, શાંત વાતાવરણ —" : "— Pure Flavors, Pure Vibes —"}
          </p>
        </div>
      </div>
    </div>
  );
}
