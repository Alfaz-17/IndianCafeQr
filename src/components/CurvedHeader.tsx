import type { Category } from "@/data/types";
import { 
  Pizza, Sandwich, Flame, CookingPot, Soup, 
  Coffee, CupSoda, Wine, GlassWater, Milk,
  UtensilsCrossed, Cake, Popcorn
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  "pizza": Pizza,
  "sandwich": Sandwich,
  "flame": Flame,
  "french-fries": CookingPot,
  "wrap": UtensilsCrossed,
  "soup": Soup,
  "toast": Sandwich,
  "utensils": UtensilsCrossed,
  "hamburger": UtensilsCrossed,
  "cake-slice": Cake,
  "dumpling": Soup,
  "cup-soda": CupSoda,
  "waffle": Cake,
  "popcorn": Popcorn,
  "coffee": Coffee,
  "wine": Wine,
  "glass-water": GlassWater,
  "milk": Milk,
};

export function CurvedHeader({ category }: { category: Category }) {
  const IconComponent = iconMap[category.icon] || UtensilsCrossed;

  return (
    <div className="relative overflow-hidden">
      {/* Green curved background */}
      <div className="bg-[#2F3E27] px-6 pt-14 pb-16 text-center relative">
        {/* Leaf decorations */}
        <div className="absolute top-4 left-4 opacity-20 text-[#F5E9DA]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
          </svg>
        </div>
        <div className="absolute top-4 right-4 opacity-20 text-[#F5E9DA] transform scale-x-[-1]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
          </svg>
        </div>
        
        <div className="flex items-center justify-center gap-3 mb-2">
          <IconComponent size={28} strokeWidth={1.8} className="text-[#C8793A]" />
          <h1 className="text-2xl font-bold text-[#F5E9DA]" style={{ fontFamily: 'var(--font-display)' }}>
            {category.name}
          </h1>
        </div>
        {category.tagline && (
          <p className="text-sm text-[#C8793A] italic" style={{ fontFamily: 'var(--font-script)' }}>
            {category.tagline}
          </p>
        )}
      </div>
      {/* Curved bottom edge */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full text-[#F5E9DA]"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: '30px' }}
      >
        <path
          fill="currentColor"
          d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
        />
      </svg>
    </div>
  );
}
