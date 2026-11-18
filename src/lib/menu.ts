import { categories } from "@/data/categories";
import { items } from "@/data/menu";
import type { Category, MenuItem } from "@/data/types";

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getItemsByCategory(categoryId: string): MenuItem[] {
  return items.filter((i) => i.categoryId === categoryId);
}

export function getAllCategories(): Category[] {
  return [...categories].sort((a, b) => a.order - b.order);
}

export function searchItems(query: string): MenuItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      (item.nameGu && item.nameGu.includes(q)) ||
      item.categoryId.includes(q)
  );
}
