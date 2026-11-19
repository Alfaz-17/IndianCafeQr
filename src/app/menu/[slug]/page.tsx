import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { items } from "@/data/menu";
import { CategoryDetailView } from "./CategoryDetailView";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryItemsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentCategory = categories.find((c) => c.slug === slug);

  if (!currentCategory) {
    notFound();
  }

  const categoryItems = items.filter((i) => i.categoryId === currentCategory.id);

  return (
    <CategoryDetailView
      categories={categories}
      currentCategory={currentCategory}
      categoryItems={categoryItems}
    />
  );
}
