"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { items } from "@/data/menu";
import { categories } from "@/data/categories";
import { formatPriceShort } from "@/lib/format";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return items
      .filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.nameGu && item.nameGu.includes(q))
      )
      .slice(0, 20);
  }, [query]);

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || categoryId;
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAD7BE]/60 text-[#5B3A29] transition hover:bg-[#EAD7BE]"
        aria-label="Search menu"
      >
        <Search size={18} strokeWidth={2} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F5E9DA]"
          >
            <div className="mx-auto max-w-md">
              {/* Search header */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-[#EAD7BE]">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B3A29]/50" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search for paneer, pizza, coffee..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-full bg-[#EAD7BE]/50 py-2.5 pl-10 pr-4 text-sm text-[#2A2118] placeholder:text-[#2A2118]/40 outline-none focus:ring-2 focus:ring-[#C8793A]/30"
                  />
                </div>
                <button
                  onClick={() => { setIsOpen(false); setQuery(""); }}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[#5B3A29] hover:bg-[#EAD7BE]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Results */}
              <div className="overflow-y-auto px-4 py-2" style={{ maxHeight: "calc(100vh - 72px)" }}>
                {query && results.length === 0 && (
                  <p className="py-12 text-center text-sm text-[#2A2118]/50">
                    No items found for &ldquo;{query}&rdquo;
                  </p>
                )}
                <ul>
                  {results.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/menu/${item.categoryId}`}
                        onClick={() => { setIsOpen(false); setQuery(""); }}
                        className="flex items-center justify-between py-3 border-b border-[#2A2118]/5"
                      >
                        <div>
                          <p className="text-sm font-medium text-[#2A2118]">{item.name}</p>
                          <p className="text-xs text-[#C8793A]">{getCategoryName(item.categoryId)}</p>
                        </div>
                        <span className="text-sm font-bold text-[#5B3A29] tabular-nums">
                          {formatPriceShort(item.price)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {!query && (
                  <p className="py-12 text-center text-sm text-[#2A2118]/40">
                    Type to search across all categories
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
