"use client";

import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/data/types";
import { motion } from "framer-motion";

export function CategoryCard({ c, index }: { c: Category; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.3) }}
    >
      <Link
        href={`/menu/${c.slug}`}
        className="flex aspect-square flex-col items-center justify-center gap-1.5 rounded-2xl bg-[#EAD7BE]/60 p-2 text-center shadow-sm transition-all duration-200 active:scale-95 hover:shadow-md hover:bg-[#EAD7BE]/80"
      >
        {/* Real Food Category Image */}
        <div className="relative flex h-12 w-12 items-center justify-center drop-shadow-sm">
          <Image
            src={c.icon}
            alt={c.name}
            width={48}
            height={48}
            className="object-contain"
            priority={index < 8}
          />
        </div>
        <span className="text-[11px] font-semibold leading-tight text-[#2A2118] line-clamp-2 px-0.5">
          {c.name}
        </span>
      </Link>
    </motion.div>
  );
}
