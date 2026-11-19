import type { JainItem } from "./types";

export const jainItems: JainItem[] = [
  // Pizza
  { id: "jain-pizza-margherita", categoryId: "pizza", name: "Margherita Pizza", nameGu: "માર્ગરીટા પિઝા (જૈન)", price: 100 },
  { id: "jain-pizza-veg-cheese", categoryId: "pizza", name: "Veg Cheese Pizza", nameGu: "વેજ ચીઝ પિઝા (જૈન)", price: 130 },
  { id: "jain-pizza-sweet-corn", categoryId: "pizza", name: "Sweet Corn Pizza", nameGu: "સ્વીટ કોર્ન પિઝા (જૈન)", price: 120 },
  { id: "jain-pizza-tomato", categoryId: "pizza", name: "Tomato Pizza", nameGu: "ટોમેટો પિઝા (જૈન)", price: 120 },
  { id: "jain-pizza-italian", categoryId: "pizza", name: "Italian Pizza", nameGu: "ઇટાલિયન પિઝા (જૈન)", price: 130 },

  // Pasta
  { id: "jain-pasta-red", categoryId: "pasta", name: "Red Sauce Pasta", nameGu: "રેડ સોસ પાસ્તા (જૈન)", price: 130 },
  { id: "jain-pasta-white", categoryId: "pasta", name: "White Sauce Pasta", nameGu: "વ્હાઇટ સોસ પાસ્તા (જૈન)", price: 140 },
  { id: "jain-pasta-pink", categoryId: "pasta", name: "Pink Sauce Pasta", nameGu: "પિંક સોસ પાસ્તા (જૈન)", price: 150 },

  // Grill Sandwich
  { id: "jain-gs-bread-butter", categoryId: "grill-sandwich", name: "Bread Butter Grill", nameGu: "બ્રેડ બટર ગ્રિલ (જૈન)", price: 60 },
  { id: "jain-gs-cheese-jam", categoryId: "grill-sandwich", name: "Cheese Jam Grill", nameGu: "ચીઝ જામ ગ્રિલ (જૈન)", price: 80 },
  { id: "jain-gs-corn-cream", categoryId: "grill-sandwich", name: "Corn Cream Grill", nameGu: "કોર્ન ક્રીમ ગ્રિલ (જૈન)", price: 90 },
  { id: "jain-gs-veg-cheese", categoryId: "grill-sandwich", name: "Veg Cheese Grill", nameGu: "વેજ ચીઝ ગ્રિલ (જૈન)", price: 120 },
  { id: "jain-gs-pizza-sandwich", categoryId: "grill-sandwich", name: "Pizza Sandwich", nameGu: "પિઝા સેન્ડવિચ (જૈન)", price: 120 },

  // French Fries
  { id: "jain-ff-salted-masala", categoryId: "french-fries", name: "Salted Masala French Fries", nameGu: "સોલ્ટેડ મસાલા ફ્રેંચ ફ્રાઈસ (જૈન)", price: 100 },
  { id: "jain-ff-double-cheese", categoryId: "french-fries", name: "Double Cheese French Fries", nameGu: "ડબલ ચીઝ ફ્રેંચ ફ્રાઈસ (જૈન)", price: 120 },
  { id: "jain-ff-pizza-fry", categoryId: "french-fries", name: "Pizza Fry French Fries", nameGu: "પિઝા ફ્રાય ફ્રેંચ ફ્રાઈસ (જૈન)", price: 150 },

  // Frankie
  { id: "jain-fk-veg-cheese", categoryId: "frankie", name: "Veg Cheese Frankie", nameGu: "વેજ ચીઝ ફ્રેન્કી (જૈન)", price: 100 },
  { id: "jain-fk-paneer", categoryId: "frankie", name: "Paneer Frankie", nameGu: "પનીર ફ્રેન્કી (જૈન)", price: 140 },

  // Maggi
  { id: "jain-mg-jain", categoryId: "maggi", name: "Jain Maggi", nameGu: "જૈન મેગી", price: 70 },
  { id: "jain-mg-veg", categoryId: "maggi", name: "Veg Maggi", nameGu: "વેજ મેગી (જૈન)", price: 80 },
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
