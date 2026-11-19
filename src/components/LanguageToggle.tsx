"use client";

import { useLanguage } from "@/context/LanguageContext";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export function LanguageToggle({
  className,
  variant = "glass",
}: {
  className?: string;
  variant?: "glass" | "light";
}) {
  const { language, setLanguage } = useLanguage();

  const isLight = variant === "light";

  return (
    <div
      className={clsx(
        "inline-flex h-8 items-center rounded-full p-0.5 shadow-sm transition-all",
        isLight
          ? "bg-[#EEDFC9] border border-[#2D4027]/20"
          : "bg-black/40 backdrop-blur-md border border-white/25",
        className
      )}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={clsx(
          "relative h-full flex items-center justify-center rounded-full px-2 text-[11px] font-bold tracking-tight transition-colors duration-150 select-none",
          language === "en"
            ? "text-[#F5E8D6]"
            : isLight
            ? "text-[#2A2118]/70 hover:text-[#2A2118]"
            : "text-white/70 hover:text-white"
        )}
      >
        {language === "en" && (
          <motion.div
            layoutId={`lang-pill-${variant}`}
            className="absolute inset-0 rounded-full bg-[#2D4027] shadow"
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("gu")}
        className={clsx(
          "relative h-full flex items-center justify-center rounded-full px-2 text-[11px] font-bold tracking-tight transition-colors duration-150 select-none",
          language === "gu"
            ? "text-[#F5E8D6]"
            : isLight
            ? "text-[#2A2118]/70 hover:text-[#2A2118]"
            : "text-white/70 hover:text-white"
        )}
      >
        {language === "gu" && (
          <motion.div
            layoutId={`lang-pill-${variant}`}
            className="absolute inset-0 rounded-full bg-[#2D4027] shadow"
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
          />
        )}
        <span className="relative z-10 font-semibold">ગુજ</span>
      </button>
    </div>
  );
}
