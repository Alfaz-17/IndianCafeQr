"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { items } from "@/data/menu";
import { categories } from "@/data/categories";
import { formatPriceShort } from "@/lib/format";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { language } = useLanguage();
  const isGu = language === "gu";

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
    const cat = categories.find((c) => c.id === categoryId);
    if (!cat) return categoryId;
    return isGu && cat.nameGu ? cat.nameGu : cat.name;
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55 shadow active:scale-95"
        aria-label="Search menu"
      >
        <Search size={18} strokeWidth={2.2} />
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
                    placeholder={isGu ? "શોધો: પિઝા, પનીર, કોફી..." : "Search for paneer, pizza, coffee..."}
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
                    {isGu ? `"${query}" માટે કશું મળ્યું નથી` : `No items found for "${query}"`}
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
                          <p className="text-sm font-semibold text-[#2A2118]">
                            {isGu && item.nameGu ? item.nameGu : item.name}
                          </p>
                          <p className="text-xs text-[#C8793A] font-medium">
                            {getCategoryName(item.categoryId)}
                            {isGu && item.nameGu && (
                              <span className="text-[#2A2118]/40 ml-2">({item.name})</span>
                            )}
                          </p>
                        </div>
                        <span className="text-sm font-bold text-[#2D4027] tabular-nums">
                          {formatPriceShort(item.price)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {!query && (
                  <p className="py-12 text-center text-sm text-[#2A2118]/40">
                    {isGu ? "તમામ વાનગીઓ શોધવા માટે લખો" : "Type to search across all categories"}
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
