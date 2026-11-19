"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WelcomePage() {
  // Day mode is active from 6:00 AM to 6:00 PM (18:00)
  const [isDay, setIsDay] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const istHour = parseInt(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          hour12: false,
        }).format(new Date()),
        10
      );
      setIsDay(istHour >= 6 && istHour < 18);
    } catch {
      const localHour = new Date().getHours();
      setIsDay(localHour >= 6 && localHour < 18);
    }
  }, []);

  return (
    <div className="relative flex h-dvh w-full flex-col justify-end overflow-hidden bg-[#2D4027]">
      {/* Daytime Hero (6:00 AM – 6:00 PM) */}
      <Image
        src="/images/hero-day.webp"
        alt="The Indian Cafe - Lake View, Bhavnagar (Daytime)"
        fill
        unoptimized
        className={`object-cover object-center transition-opacity duration-700 ${
          isMounted && isDay ? "opacity-100 z-0" : "opacity-0 -z-10"
        }`}
        priority={isDay}
      />

      {/* Nighttime Hero (6:00 PM – 6:00 AM) */}
      <Image
        src="/images/hero-night.webp"
        alt="The Indian Cafe - Lake View, Bhavnagar (Evening & Night)"
        fill
        unoptimized
        className={`object-cover object-center transition-opacity duration-700 ${
          !isMounted || !isDay ? "opacity-100 z-0" : "opacity-0 -z-10"
        }`}
        priority={!isDay}
      />

      {/* Protective Dark Scrim Gradient at bottom: Guarantees 100% button contrast on both Day and Night */}
      <div 
        className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[5]" 
        aria-hidden="true"
      />

      {/* Explore Menu button with engaging pulse, shimmer & arrow bounce */}
      <div className="relative z-10 flex flex-col items-center pb-12 px-6">
        <Link
          href="/menu"
          className="explore-btn-animated group relative flex items-center justify-between gap-4 overflow-hidden rounded-full bg-[#EEDFC9] py-3.5 pl-7 pr-4 text-[17px] font-bold text-[#2A2118] transition-transform duration-200 active:scale-95 shadow-2xl"
          style={{ fontFamily: "var(--font-sans-var)" }}
        >
          {/* Shimmer light beam */}
          <div className="explore-shimmer-effect" aria-hidden="true" />

          <span className="relative z-10 tracking-wide">Explore Menu</span>

          <div className="explore-arrow-animated relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#2D4027] text-[#F5E8D6] shadow-md">
            <ArrowRight size={18} strokeWidth={2.8} />
          </div>
        </Link>
      </div>

      {/* Subtle bottom curve matching warm cream background */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-10 text-[#F5E8D6]/20"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
}
