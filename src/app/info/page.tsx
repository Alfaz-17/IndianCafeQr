import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { MapPin, Clock, ChevronLeft } from "lucide-react";

export const metadata = {
  title: "About The Indian Cafe | Lake View, Bhavnagar",
  description: "Find location, timings, contact, and gallery for The Indian Cafe, Lake View, Bhavnagar.",
};

export default function InfoPage() {
  const galleryImages = [
    { src: "/images/lake-sunset.jpg", title: "Golden Lake Sunset" },
    { src: "/images/lake-view-tree.jpg", title: "Lake View Seating" },
    { src: "/images/lake-panorama.jpg", title: "Lake View by Dusk" },
    { src: "/images/cafe-exterior.jpg", title: "Evening Entrance" },
  ];

  return (
    <div className="min-h-screen bg-[#F5E9DA] pb-24 text-[#2A2118]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between bg-[#2F3E27] px-4 py-3 text-[#F5E9DA] shadow-sm">
        <Link
          href="/menu"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F2B1A]/60 text-[#F5E9DA] transition hover:bg-[#1F2B1A] active:scale-95"
          aria-label="Back to menu"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </Link>

        <span
          className="text-base font-bold tracking-wider text-[#EAD7BE]"
          style={{ fontFamily: "var(--font-display-var)" }}
        >
          Cafe Information
        </span>

        <div className="w-9" />
      </header>

      {/* Hero Branding */}
      <div className="relative overflow-hidden bg-[#2F3E27] px-6 pt-5 pb-8 text-center text-[#F5E9DA]">
        <h1
          className="text-3xl font-extrabold text-[#F5E9DA]"
          style={{ fontFamily: "var(--font-display-var)" }}
        >
          THE INDIAN CAFE
        </h1>
        <p
          className="mt-1 text-base text-[#C8793A]"
          style={{ fontFamily: "var(--font-script-var)" }}
        >
          Good Food • Great Vibes
        </p>

        {/* Curved bottom transition wave */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            className="w-full h-4 text-[#F5E9DA]"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C480,50 960,50 1440,0 L1440,60 L0,60 Z"
            />
          </svg>
        </div>
      </div>

      <div className="px-5 pt-5 space-y-5">
        {/* Quick Details Card */}
        <div className="rounded-2xl bg-[#EAD7BE]/50 p-5 shadow-sm border border-[#EAD7BE]">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F3E27] text-[#F5E9DA] flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#5B3A29]">Location</p>
                <p className="text-sm font-semibold text-[#2A2118]">{siteConfig.location}</p>
                <p className="text-xs text-[#2A2118]/70">{siteConfig.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F3E27] text-[#F5E9DA] flex-shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#5B3A29]">Timings</p>
                <p className="text-sm font-semibold text-[#2A2118]">{siteConfig.hours}</p>
                <p className="text-xs text-green-700 font-medium">Open All 7 Days</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-[#2A2118]/10">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#2F3E27] py-2.5 px-3 text-xs font-bold text-[#F5E9DA] shadow transition hover:bg-[#1F2B1A] active:scale-95"
            >
              <MapPin size={15} />
              Directions
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#C8793A] py-2.5 px-3 text-xs font-bold text-white shadow transition hover:bg-[#b0652d] active:scale-95"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* 100% Pure Veg Commitment */}
        <div className="rounded-2xl bg-green-950/10 p-4 border border-green-800/20 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white flex-shrink-0">
            <div className="h-4 w-4 rounded-sm border-2 border-white flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-green-900">100% Pure Vegetarian</p>
            <p className="text-xs text-green-800/80">Every single dish is prepared strictly vegetarian with love and hygiene.</p>
          </div>
        </div>

        {/* Lake View Gallery */}
        <div>
          <h3
            className="text-lg font-bold text-[#5B3A29] mb-3"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            Lake View Ambiance
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm border border-[#EAD7BE]">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-white">
                  <p className="text-[11px] font-medium leading-tight">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-4">
          <p
            className="text-lg text-[#C8793A]"
            style={{ fontFamily: "var(--font-script-var)" }}
          >
            — Established 2021 —
          </p>
          <p className="text-xs text-[#5B3A29]/60">Lake View, Bhavnagar</p>
        </div>
      </div>
    </div>
  );
}
