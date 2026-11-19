import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="relative flex h-dvh w-full flex-col justify-end overflow-hidden bg-[#2D4027]">
      {/* Hero photo containing authentic TIC branding & entrance */}
      <Image
        src="/images/hero-night.webp"
        alt="The Indian Cafe - Lake View, Bhavnagar"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* Explore Menu button positioned cleanly over the ground near bottom */}
      <div className="relative z-10 flex flex-col items-center pb-12 px-6">
        <Link
          href="/menu"
          className="menu-cta-micro group flex items-center justify-between gap-4 rounded-full bg-[#EEDFC9] py-3.5 pl-7 pr-4 text-[17px] font-semibold text-[#2A2118] shadow-2xl transition-all duration-300 hover:bg-[#F5E8D6] hover:scale-105 active:scale-95"
          style={{ fontFamily: "var(--font-sans-var)" }}
        >
          <span>Explore Menu</span>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2D4027] text-[#F5E8D6] transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={18} strokeWidth={2.5} />
          </div>
        </Link>
      </div>

      {/* Subtle bottom curve matching warm cream background */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-12 text-[#F5E8D6]/30"
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
