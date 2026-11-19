export type Category = {
  id: string;
  slug: string;
  name: string;
  nameGu?: string;
  tagline?: string;
  taglineGu?: string;
  icon: string;
  order: number;
  addOnNote?: string;
  addOnNoteGu?: string;
};

export type MenuItem = {
  id: string;
  categoryId: string;
  name: string;
  nameGu?: string;
  price: number | null; // null = price not listed (e.g. cold drinks)
  jain: boolean;
  jainPrice?: number; // if different from normal price
  available: boolean;
  tags?: string[];
  description?: string;
};

export type JainItem = {
  id: string;
  categoryId: string;
  name: string;
  nameGu?: string;
  price: number;
};
