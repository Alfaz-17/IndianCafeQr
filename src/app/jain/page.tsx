import Link from "next/link";
import { jainItems } from "@/data/jain";
import { categories } from "@/data/categories";
import { formatPriceShort } from "@/lib/format";
import { Leaf, ChevronLeft, Sparkles } from "lucide-react";
import { SearchOverlay } from "@/components/SearchOverlay";

export const metadata = {
  title: "Jain Food Menu | The Indian Cafe",
  description: "Special pure Jain menu items at The Indian Cafe, Lake View, Bhavnagar.",
};

export default function JainMenuPage() {
  // Group jain items by category
  const categoryOrder = ["pizza", "pasta", "grill-sandwich", "french-fries", "frankie", "maggi"];
  
  const groupedItems = categoryOrder.map((catId) => {
    const cat = categories.find((c) => c.id === catId);
    const items = jainItems.filter((item) => item.categoryId === catId);
    return { category: cat, items };
  }).filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen bg-[#F5E9DA] pb-24 text-[#2A2118]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between bg-[#2F3E27] px-4 py-3 text-[#F5E9DA] shadow-sm">
        <Link
          href="/menu"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F2B1A]/60 text-[#F5E9DA] transition hover:bg-[#1F2B1A] active:scale-95"
          aria-label="Back to menu"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </Link>

        <div className="flex flex-col items-center">
          <span
            className="text-xs font-bold tracking-widest text-[#EAD7BE]"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            THE INDIAN CAFE
          </span>
          <span
            className="text-xs text-[#C8793A] font-semibold"
            style={{ fontFamily: "var(--font-sans-var)" }}
          >
            Special Menu
          </span>
        </div>

        <SearchOverlay />
      </header>

      {/* Hero Green Curved Header */}
      <div className="relative overflow-hidden bg-[#2F3E27] px-6 pt-5 pb-8 text-center text-[#F5E9DA]">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-700/40 text-green-300">
          <Leaf size={26} />
        </div>
        <h1
          className="text-3xl font-extrabold tracking-wide text-[#F5E9DA]"
          style={{ fontFamily: "var(--font-display-var)" }}
        >
          Jain Food
        </h1>
        <p
          className="mt-1 text-base text-[#C8793A]"
          style={{ fontFamily: "var(--font-script-var)" }}
        >
          100% Satvik & Root-Vegetable Free
        </p>

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

      {/* Info Banner */}
      <div className="mx-4 mt-4 rounded-2xl bg-[#EAD7BE]/60 p-4 border border-[#EAD7BE]">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#5B3A29]">
          <Leaf size={16} className="text-green-700 flex-shrink-0" />
          <span>Prepared strictly following Jain dietary guidelines without onion, garlic, or potatoes.</span>
        </div>
      </div>

      {/* Grouped Lists */}
      <div className="px-5 pt-4 space-y-6">
        {groupedItems.map(({ category, items }) => (
          <div key={category?.id} className="rounded-2xl bg-[#EAD7BE]/30 p-4 border border-[#EAD7BE]/50">
            <div className="flex items-center justify-between border-b border-[#2A2118]/10 pb-2 mb-2">
              <h2
                className="text-lg font-bold text-[#5B3A29]"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                {category?.name}
              </h2>
              <span className="text-[11px] font-semibold text-green-700 bg-green-100/80 px-2 py-0.5 rounded-full">
                Jain Spec
              </span>
            </div>

            <ul className="divide-y divide-[#2A2118]/8">
              {items.map((item) => (
                <li key={item.id} className="flex min-h-[46px] items-center justify-between py-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-3.5 w-3.5 rounded-sm border-2 border-green-600 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                    </div>
                    <span className="text-[15px] font-medium text-[#2A2118]">{item.name}</span>
                  </div>
                  <span className="text-[15px] font-bold tabular-nums text-[#5B3A29]">
                    {formatPriceShort(item.price)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Add-on Note */}
        <div className="flex items-center justify-center gap-2 rounded-xl bg-[#EAD7BE]/80 p-3 text-xs font-medium text-[#5B3A29]">
          <Sparkles size={14} className="text-[#C8793A]" />
          <span>Add-ons: <strong>Cheese +₹20 · Mayo +₹20</strong></span>
        </div>

        {/* Flourish */}
        <div className="pt-4 text-center">
          <p
            className="text-lg text-[#C8793A]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            — Pure Flavors, Pure Vibes —
          </p>
        </div>
      </div>
    </div>
  );
}
