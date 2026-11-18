import Link from "next/link";
import { jainItems } from "@/data/jain";
import { categories } from "@/data/categories";
import { formatPriceShort } from "@/lib/format";
import { Leaf, ChevronLeft, Sparkles } from "lucide-react";

export const metadata = {
  title: "Jain Food Menu | The Indian Cafe",
  description: "Special pure Jain menu items at The Indian Cafe, Lake View, Bhavnagar.",
};

export default function JainMenuPage() {
  const categoryOrder = ["pizza", "pasta", "grill-sandwich", "french-fries", "frankie", "maggi"];
  
  const groupedItems = categoryOrder.map((catId) => {
    const cat = categories.find((c) => c.id === catId);
    const items = jainItems.filter((item) => item.categoryId === catId);
    return { category: cat, items };
  }).filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen bg-[#F5E8D6] pb-12 text-[#2A2118]">
      {/* Top Header */}
      <div className="relative px-4 pt-4 pb-3 flex items-center justify-between">
        <Link
          href="/menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#2D4027] shadow-sm backdrop-blur-sm transition hover:bg-white active:scale-95"
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

        <div className="w-10" />
      </div>

      {/* Hero Green Curved Header */}
      <div className="relative mx-3 overflow-hidden rounded-3xl bg-[#2D4027] px-6 pt-5 pb-6 text-center text-[#F5E8D6] shadow-md">
        <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-emerald-300">
          <Leaf size={24} />
        </div>
        <h1
          className="text-2xl font-black tracking-wide text-[#F5E8D6]"
          style={{ fontFamily: "var(--font-display-var)" }}
        >
          Jain Food Menu
        </h1>
        <p
          className="mt-0.5 text-sm text-[#C97836]"
          style={{ fontFamily: "var(--font-script-var)" }}
        >
          100% Satvik & Root-Vegetable Free
        </p>
      </div>

      {/* Info Banner */}
      <div className="mx-4 mt-4 rounded-2xl bg-[#EEDFC9] p-3.5 border border-[#EEDFC9]">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#2D4027]">
          <Leaf size={16} className="text-[#2D4027] flex-shrink-0" />
          <span>Prepared strictly without onion, garlic, or potatoes.</span>
        </div>
      </div>

      {/* Grouped Lists */}
      <div className="px-5 pt-4 space-y-5">
        {groupedItems.map(({ category, items }) => (
          <div key={category?.id} className="rounded-2xl bg-[#EEDFC9] p-4 border border-[#EEDFC9]">
            <div className="flex items-center justify-between border-b border-[#2A2118]/10 pb-2 mb-2">
              <h2
                className="text-base font-bold text-[#2A2118]"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                {category?.name}
              </h2>
              <span className="text-[10px] font-semibold text-[#2D4027] bg-[#2D4027]/10 px-2.5 py-0.5 rounded-full">
                Jain Special
              </span>
            </div>

            <ul className="divide-y divide-[#2A2118]/8">
              {items.map((item) => (
                <li key={item.id} className="flex min-h-[44px] items-center justify-between py-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-3.5 w-3.5 rounded-sm border-2 border-green-600 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                    </div>
                    <span className="text-[14px] font-medium text-[#2A2118]">{item.name}</span>
                  </div>
                  <span className="text-[14px] font-bold tabular-nums text-[#2D4027]">
                    {formatPriceShort(item.price)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Add-on Note */}
        <div className="flex items-center justify-center gap-2 rounded-xl bg-[#EEDFC9] p-3 text-xs font-medium text-[#2D4027]">
          <Sparkles size={14} className="text-[#C97836]" />
          <span>Add-ons: <strong>Cheese +₹20 · Mayo +₹20</strong></span>
        </div>

        {/* Flourish */}
        <div className="pt-4 text-center">
          <p
            className="text-lg text-[#C97836]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            — Pure Flavors, Pure Vibes —
          </p>
        </div>
      </div>
    </div>
  );
}
