import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { MapPin, Clock, ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Cafe Information | The Indian Cafe",
  description: "Location, timings, vegetarian pledge, and story of The Indian Cafe, Lake View, Bhavnagar.",
};

export default function InfoPage() {
  const galleryImages = [
    { src: "/images/lake-sunset.jpg", title: "Golden Lake Sunset", subtitle: "Evening views across the water" },
    { src: "/images/lake-view-tree.jpg", title: "Lantern Tree & Seating", subtitle: "Lakeside garden ambiance" },
    { src: "/images/lake-panorama.jpg", title: "Lake View by Dusk", subtitle: "Peaceful water reflections" },
    { src: "/images/cafe-exterior.jpg", title: "Evening Entrance", subtitle: "Open garden cafe entrance" },
  ];

  return (
    <div className="min-h-screen bg-[#F5E8D6] pb-12 text-[#2A2118]">
      {/* 01. Top Brand Header */}
      <div className="relative mx-3 mt-3 overflow-hidden rounded-3xl bg-[#2D4027] px-6 pt-5 pb-6 text-center text-[#F5E8D6] shadow-md">
        {/* Top bar back button */}
        <div className="flex items-center justify-between mb-2">
          <Link
            href="/menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-[#F5E8D6] backdrop-blur-sm transition hover:bg-white/25 active:scale-95"
            aria-label="Back to menu"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </Link>
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#EEDFC9]/70 uppercase">
            ESTD 2021
          </span>
          <div className="w-9" />
        </div>

        {/* TIC Coffee Cup Logo */}
        <div className="mx-auto mb-2.5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1F2B1A]/60 border border-[#C97836]/40 shadow-inner">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C97836"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        </div>

        {/* Cafe Name */}
        <h1
          className="text-2xl font-black tracking-wider text-white"
          style={{ fontFamily: "var(--font-display-var)" }}
        >
          THE INDIAN CAFE
        </h1>
        <p
          className="mt-0.5 text-base text-[#C97836]"
          style={{ fontFamily: "var(--font-script-var)" }}
        >
          Good Food • Great Vibes
        </p>
      </div>

      <div className="px-5 pt-5 space-y-5">
        {/* 02. Location and Timings */}
        <div className="rounded-2xl bg-[#EEDFC9] p-5 shadow-sm border border-[#EEDFC9]">
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D4027] text-[#F5E8D6] flex-shrink-0 shadow-sm">
                <MapPin size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#C97836]">
                  Location
                </p>
                <p className="text-sm font-semibold text-[#2A2118]">
                  {siteConfig.location}
                </p>
                <p className="text-xs text-[#2A2118]/65 mt-0.5 leading-snug">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-3.5 pt-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D4027] text-[#F5E8D6] flex-shrink-0 shadow-sm">
                <Clock size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#C97836]">
                  Timings
                </p>
                <p className="text-sm font-semibold text-[#2A2118]">
                  {siteConfig.hours}
                </p>
                <p className="text-xs text-[#2D4027] font-medium mt-0.5">
                  Open All 7 Days
                </p>
              </div>
            </div>
          </div>

          {/* Equal-sized Action Buttons */}
          <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-[#2A2118]/10">
            <a
              href={siteConfig.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#2D4027] py-2.5 px-3 text-xs font-semibold text-[#F5E8D6] shadow transition hover:bg-[#1F2B1A] active:scale-95"
            >
              <MapPin size={14} />
              Directions
            </a>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#C97836] py-2.5 px-3 text-xs font-semibold text-white shadow transition hover:bg-[#b0652d] active:scale-95"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* 03. Pure Vegetarian Banner */}
        <div className="rounded-2xl bg-[#2D4027]/10 p-4 border border-[#2D4027]/20 flex items-center gap-3.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D4027] text-white flex-shrink-0 shadow-sm">
            <div className="h-4 w-4 rounded-sm border-2 border-white flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-[#2D4027]">100% Pure Vegetarian</p>
            <p className="text-xs text-[#2A2118]/70 mt-0.5 leading-snug">
              Every dish is thoughtfully prepared pure vegetarian with the highest standards of taste and hygiene.
            </p>
          </div>
        </div>

        {/* 04. Lake View Ambiance (Real Cafe Gallery) */}
        <div>
          <div className="flex items-baseline justify-between mb-3">
            <h3
              className="text-lg font-bold text-[#2A2118]"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              Lake View Ambiance
            </h3>
            <span className="text-[11px] font-medium text-[#C97836]">
              Real Cafe Photos
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group flex flex-col overflow-hidden rounded-2xl bg-[#EEDFC9] border border-[#EEDFC9] shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-semibold text-[#2A2118] leading-tight">
                    {img.title}
                  </p>
                  <p className="text-[10px] text-[#2A2118]/60 mt-0.5 leading-tight">
                    {img.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 05. A Little About Us */}
        <div className="rounded-2xl bg-[#EEDFC9] p-5 shadow-sm border border-[#EEDFC9]">
          <h3
            className="text-base font-bold text-[#2A2118] mb-2"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            A little about us
          </h3>
          <p className="text-xs text-[#2A2118]/80 leading-relaxed">
            The Indian Cafe is a tranquil lakeside open-air garden cafe nestled in Lake View, Bhavnagar. Surrounded by nature, glowing lights, and scenic water views, we serve wholesome 100% pure vegetarian bites, artisanal beverages, and delightful desserts. A serene retreat for great conversations, evening chai, and memorable moments.
          </p>
        </div>

        {/* Flourish */}
        <div className="text-center pt-2 pb-4">
          <p
            className="text-lg text-[#C97836]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            — Taste the Difference —
          </p>
          <p className="text-[11px] text-[#2A2118]/50 mt-0.5">
            The Indian Cafe • Lake View, Bhavnagar
          </p>
        </div>
      </div>
    </div>
  );
}
