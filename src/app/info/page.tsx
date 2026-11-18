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
    { src: "/images/lake-sunset.webp", alt: "Sunset over the lake beside the cafe" },
    { src: "/images/lake-view-tree.webp", alt: "Warm lights among the lakeside trees" },
    { src: "/images/lake-panorama.webp", alt: "The lake at dusk" },
    { src: "/images/cafe-exterior.webp", alt: "The cafe entrance in the evening" },
  ];

  return (
    <div className="min-h-screen bg-[#F5E8D6] pb-12 text-[#2A2118]">
      <header
        className="relative w-full overflow-hidden bg-[#2D4027]"
        style={{ height: "clamp(160px, 47.4vw, 212px)" }}
      >
        <Image
          src="/images/info-banner.png"
          alt="The Indian Cafe at Lake View, Bhavnagar — Our Info"
          fill
          priority
          sizes="(max-width: 448px) 100vw, 448px"
          className="object-cover"
        />
        <Link
          href="/menu"
          aria-label="Back to menu"
          className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#2D4027]/75 text-[#F5E8D6] shadow backdrop-blur-sm transition hover:bg-[#2D4027] active:scale-95"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </Link>
      </header>

      <div className="px-5 pt-5 space-y-5">
        {/* 02. Location and Timings */}
        <div className="rounded-none bg-[#EEDFC9] p-5 shadow-sm border border-[#EEDFC9]">
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
                aria-hidden="true"
                width="18"
                height="18"
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
        <div className="rounded-none bg-[#2D4027]/10 p-4 border border-[#2D4027]/20 flex items-center gap-3.5">
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

          <div className="grid grid-cols-2 items-start gap-x-3 gap-y-1">
            {galleryImages.map((img, i) => (
              <figure
                key={i}
                className={`group min-w-0 overflow-hidden rounded-none bg-[#EEDFC9] shadow-sm ${i % 2 === 1 ? "mt-7" : ""}`}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: i % 2 === 0 ? "1 / 1" : "4 / 5" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 448px) 48vw, 210px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* 05. A Little About Us */}
        <div className="rounded-none bg-[#EEDFC9] p-5 shadow-sm border border-[#EEDFC9]">
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
