import Link from "next/link";
import { SearchOverlay } from "./SearchOverlay";

export function MenuHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#F5E9DA] border-b border-[#EAD7BE]">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest text-[#5B3A29]" style={{ fontFamily: 'var(--font-display)' }}>
            THE INDIAN
          </span>
          <span className="text-sm text-[#C8793A] -mt-1" style={{ fontFamily: 'var(--font-script)' }}>
            Cafe
          </span>
        </div>
      </Link>
      <SearchOverlay />
    </header>
  );
}
