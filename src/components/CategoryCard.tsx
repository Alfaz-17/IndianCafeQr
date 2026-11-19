"use client";

import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/data/types";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function CategoryCard({ c, index }: { c: Category; index: number }) {
  const { language } = useLanguage();
  const isGu = language === "gu";
  const primaryName = isGu && c.nameGu ? c.nameGu : c.name;
  const secondaryName = isGu && c.nameGu ? c.name : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.3) }}
    >
      <Link
        href={`/menu/${c.slug}`}
        className="flex aspect-square flex-col items-center justify-center gap-1 rounded-2xl bg-[#EEDFC9] p-2 text-center shadow-sm transition-all duration-200 active:scale-95 hover:shadow-md hover:bg-[#e6d5bd]"
      >
        {/* Real Cutout Food Image */}
        <div className="relative flex h-11 w-11 items-center justify-center drop-shadow-sm">
          <Image
            src={c.icon}
            alt={c.name}
            width={44}
            height={44}
            className="object-contain"
            priority={index < 8}
          />
        </div>
        <div className="flex flex-col items-center justify-center leading-tight px-0.5">
          <span className="text-[11px] font-bold text-[#2A2118] line-clamp-1">
            {primaryName}
          </span>
          {secondaryName && (
            <span className="text-[9px] font-medium text-[#2A2118]/60 line-clamp-1 -mt-0.5">
              {secondaryName}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
