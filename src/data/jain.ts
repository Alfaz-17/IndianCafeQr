import type { JainItem } from "./types";

export const jainItems: JainItem[] = [
  // Pizza
  { id: "jain-pizza-margherita", categoryId: "pizza", name: "Margherita Pizza", price: 100 },
  { id: "jain-pizza-veg-cheese", categoryId: "pizza", name: "Veg Cheese Pizza", price: 130 },
  { id: "jain-pizza-sweet-corn", categoryId: "pizza", name: "Sweet Corn Pizza", price: 120 },
  { id: "jain-pizza-tomato", categoryId: "pizza", name: "Tomato Pizza", price: 120 },
  { id: "jain-pizza-italian", categoryId: "pizza", name: "Italian Pizza", price: 130 },

  // Pasta
  { id: "jain-pasta-red", categoryId: "pasta", name: "Red Sauce Pasta", price: 130 },
  { id: "jain-pasta-white", categoryId: "pasta", name: "White Sauce Pasta", price: 140 },
  { id: "jain-pasta-pink", categoryId: "pasta", name: "Pink Sauce Pasta", price: 150 },

  // Grill Sandwich
  { id: "jain-gs-bread-butter", categoryId: "grill-sandwich", name: "Bread Butter Grill", price: 60 },
  { id: "jain-gs-cheese-jam", categoryId: "grill-sandwich", name: "Cheese Jam Grill", price: 80 },
  { id: "jain-gs-corn-cream", categoryId: "grill-sandwich", name: "Corn Cream Grill", price: 90 },
  { id: "jain-gs-veg-cheese", categoryId: "grill-sandwich", name: "Veg Cheese Grill", price: 120 },
  { id: "jain-gs-pizza-sandwich", categoryId: "grill-sandwich", name: "Pizza Sandwich", price: 120 },

  // French Fries
  { id: "jain-ff-salted-masala", categoryId: "french-fries", name: "Salted Masala French Fries", price: 100 },
  { id: "jain-ff-double-cheese", categoryId: "french-fries", name: "Double Cheese French Fries", price: 120 },
  { id: "jain-ff-pizza-fry", categoryId: "french-fries", name: "Pizza Fry French Fries", price: 150 },

  // Frankie
  { id: "jain-fk-veg-cheese", categoryId: "frankie", name: "Veg Cheese Frankie", price: 100 },
  { id: "jain-fk-paneer", categoryId: "frankie", name: "Paneer Frankie", price: 140 },

  // Maggi
  { id: "jain-mg-jain", categoryId: "maggi", name: "Jain Maggi", price: 70 },
  { id: "jain-mg-veg", categoryId: "maggi", name: "Veg Maggi", price: 80 },
];

// Group jain items by category for display
export function getJainItemsByCategory() {
  const grouped: Record<string, JainItem[]> = {};
  for (const item of jainItems) {
    if (!grouped[item.categoryId]) {
      grouped[item.categoryId] = [];
    }
    grouped[item.categoryId].push(item);
  }
  return grouped;
}
