"use client";

import { formatPriceShort } from "@/lib/format";
import type { MenuItem } from "@/data/types";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function MenuItemRow({ item, index }: { item: MenuItem; index: number }) {
  const { language } = useLanguage();
  const isGu = language === "gu";

  const primaryName = isGu && item.nameGu ? item.nameGu : item.name;
  const secondaryName = isGu ? item.name : item.nameGu;

  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.4) }}
      className="flex min-h-[52px] items-center justify-between border-b border-[#2A2118]/8 py-3 px-1"
    >
      <div className="flex items-center gap-2.5 flex-1 min-w-0">
        {/* 100% Veg green square badge */}
        <div className="flex-shrink-0 h-4 w-4 rounded-sm border-2 border-green-700 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-green-700" />
        </div>
        <div className="min-w-0 pr-2">
          <p className="text-[15px] text-[#2A2118] font-semibold leading-snug">
            {primaryName}
          </p>
          {secondaryName && secondaryName !== primaryName && (
            <p className="text-xs text-[#2A2118]/55 mt-0.5 leading-tight">
              {secondaryName}
            </p>
          )}
        </div>
      </div>
      <span className="flex-shrink-0 ml-3 text-[15px] font-bold tabular-nums text-[#2D4027]">
        {formatPriceShort(item.price)}
      </span>
    </motion.li>
  );
}
