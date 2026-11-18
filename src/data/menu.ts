import type { MenuItem } from "./types";

export const items: MenuItem[] = [
  // === PIZZA ===
  { id: "pizza-margherita", categoryId: "pizza", name: "Margherita Pizza", price: 100, jain: true, available: true },
  { id: "pizza-onion", categoryId: "pizza", name: "Onion Pizza", price: 120, jain: false, available: true },
  { id: "pizza-tomato", categoryId: "pizza", name: "Tomato Pizza", price: 120, jain: true, available: true },
  { id: "pizza-sweet-corn", categoryId: "pizza", name: "Sweet Corn Pizza", price: 120, jain: true, available: true },
  { id: "pizza-veg-cheese", categoryId: "pizza", name: "Veg Cheese Pizza", price: 130, jain: true, available: true },
  { id: "pizza-italian", categoryId: "pizza", name: "Italian Pizza", price: 130, jain: true, available: true },
  { id: "pizza-mexican", categoryId: "pizza", name: "Mexican Pizza", price: 130, jain: false, available: true },
  { id: "pizza-schezwan", categoryId: "pizza", name: "Schezwan Pizza", price: 140, jain: false, available: true },
  { id: "pizza-paneer-tandoori", categoryId: "pizza", name: "Paneer Tandoori Pizza", price: 150, jain: false, available: true },
  { id: "pizza-special-indian", categoryId: "pizza", name: "Special Indian Pizza", price: 160, jain: false, available: true },

  // === GARLIC BREAD ===
  { id: "gb-cheese", categoryId: "garlic-bread", name: "Cheese Garlic Bread", price: 120, jain: false, available: true },
  { id: "gb-corn", categoryId: "garlic-bread", name: "Corn Garlic Bread", price: 130, jain: false, available: true },
  { id: "gb-veg-cheese", categoryId: "garlic-bread", name: "Veg Cheese Garlic Bread", price: 140, jain: false, available: true },
  { id: "gb-paneer-tikka", categoryId: "garlic-bread", name: "Paneer Tikka Garlic Bread", price: 150, jain: false, available: true },
  { id: "gb-stuff", categoryId: "garlic-bread", name: "Stuff Garlic Bread", price: 150, jain: false, available: true },

  // === SANDWICH ===
  { id: "sw-bread-butter", categoryId: "sandwich", name: "Bread Butter Sandwich", price: 50, jain: false, available: true },
  { id: "sw-bread-butter-jam", categoryId: "sandwich", name: "Bread Butter Jam Sandwich", price: 60, jain: false, available: true },
  { id: "sw-cheese-chutney", categoryId: "sandwich", name: "Cheese Chutney Sandwich", price: 60, jain: false, available: true },
  { id: "sw-veg", categoryId: "sandwich", name: "Veg Sandwich", price: 70, jain: false, available: true },
  { id: "sw-chocolate", categoryId: "sandwich", name: "Chocolate Sandwich", price: 60, jain: false, available: true },
  { id: "sw-pineapple", categoryId: "sandwich", name: "Pineapple Sandwich", price: 60, jain: false, available: true },
  { id: "sw-veg-cheese", categoryId: "sandwich", name: "Veg Cheese Sandwich", price: 90, jain: false, available: true },

  // === GRILL SANDWICH ===
  { id: "gs-bread-butter", categoryId: "grill-sandwich", name: "Bread Butter Grill", price: 60, jain: true, available: true },
  { id: "gs-chocolate", categoryId: "grill-sandwich", name: "Chocolate Grill", price: 70, jain: false, available: true },
  { id: "gs-only-cheese", categoryId: "grill-sandwich", name: "Only Cheese Grill", price: 80, jain: false, available: true },
  { id: "gs-cheese-jam", categoryId: "grill-sandwich", name: "Cheese Jam Grill", price: 80, jain: true, available: true },
  { id: "gs-corn-cream", categoryId: "grill-sandwich", name: "Corn Cream Grill", price: 90, jain: true, available: true },
  { id: "gs-veg-cheese", categoryId: "grill-sandwich", name: "Veg Cheese Grill", price: 120, jain: true, available: true },
  { id: "gs-pizza-sandwich", categoryId: "grill-sandwich", name: "Pizza Sandwich", price: 120, jain: true, available: true },
  { id: "gs-paneer", categoryId: "grill-sandwich", name: "Paneer Grill", price: 130, jain: false, available: true },
  { id: "gs-aloo-tikki", categoryId: "grill-sandwich", name: "Aloo Tikki Grill", price: 130, jain: false, available: true },
  { id: "gs-club", categoryId: "grill-sandwich", name: "Club Grill", price: 150, jain: false, available: true },

  // === FRENCH FRIES ===
  { id: "ff-salted-masala", categoryId: "french-fries", name: "Salted Masala French Fries", price: 80, jain: true, jainPrice: 100, available: true },
  { id: "ff-peri-peri", categoryId: "french-fries", name: "Peri Peri French Fries", price: 90, jain: false, available: true },
  { id: "ff-peri-peri-cheese", categoryId: "french-fries", name: "Peri Peri Cheese French Fries", price: 110, jain: false, available: true },
  { id: "ff-salsa", categoryId: "french-fries", name: "Salsa French Fries", price: 120, jain: false, available: true },
  { id: "ff-double-cheese", categoryId: "french-fries", name: "Double Cheese French Fries", price: 120, jain: true, available: true },
  { id: "ff-pizza-fry", categoryId: "french-fries", name: "Pizza Fry French Fries", price: 140, jain: true, jainPrice: 150, available: true },

  // === FRANKIE ===
  { id: "fk-veg-cheese", categoryId: "frankie", name: "Veg Cheese Frankie", price: 100, jain: true, available: true },
  { id: "fk-cheese-corn", categoryId: "frankie", name: "Cheese Corn Frankie", price: 120, jain: false, available: true },
  { id: "fk-mexican", categoryId: "frankie", name: "Mexican Frankie", price: 120, jain: false, available: true },
  { id: "fk-aloo-tikki", categoryId: "frankie", name: "Aloo Tikki Frankie", price: 130, jain: false, available: true },
  { id: "fk-paneer-tandoori", categoryId: "frankie", name: "Paneer Tandoori Frankie", price: 140, jain: false, available: true },
  { id: "fk-paneer-jain", categoryId: "frankie", name: "Paneer Frankie", price: 140, jain: true, available: true },

  // === MAGGI ===
  { id: "mg-masala", categoryId: "maggi", name: "Masala Maggi", price: 60, jain: false, available: true },
  { id: "mg-masala-cheese", categoryId: "maggi", name: "Masala Cheese Maggi", price: 80, jain: false, available: true },
  { id: "mg-veg-classic", categoryId: "maggi", name: "Veg Classic Maggi", price: 80, jain: false, available: true },
  { id: "mg-bhel", categoryId: "maggi", name: "Maggi Bhel (Fry)", price: 80, jain: false, available: true },
  { id: "mg-veg-schezwan", categoryId: "maggi", name: "Veg Schezwan Maggi", price: 90, jain: false, available: true },
  { id: "mg-peri-peri-corn", categoryId: "maggi", name: "Peri Peri Corn Maggi", price: 90, jain: false, available: true },
  { id: "mg-veg-cheese", categoryId: "maggi", name: "Veg Cheese Maggi", price: 100, jain: false, available: true },
  { id: "mg-cheese-tadka", categoryId: "maggi", name: "Cheese Tadka Maggi", price: 120, jain: false, available: true },
  { id: "mg-jain", categoryId: "maggi", name: "Jain Maggi", price: 70, jain: true, available: true },
  { id: "mg-veg-jain", categoryId: "maggi", name: "Veg Maggi", price: 80, jain: true, available: true },

  // === TOAST ===
  { id: "to-cheese-chilli", categoryId: "toast", name: "Cheese Chilli Toast", price: 120, jain: false, available: true },
  { id: "to-american-garden", categoryId: "toast", name: "American Garden", price: 140, jain: false, available: true },

  // === PASTA ===
  { id: "pa-red", categoryId: "pasta", name: "Red Pasta", price: 130, jain: true, jainPrice: 130, available: true },
  { id: "pa-white", categoryId: "pasta", name: "White Pasta", price: 140, jain: true, jainPrice: 140, available: true },
  { id: "pa-pink", categoryId: "pasta", name: "Pink Sauce Pasta", price: 150, jain: true, available: true },

  // === BURGER ===
  { id: "bg-aloo-tikki", categoryId: "burger", name: "Aloo Tikki Burger", price: 90, jain: false, available: true },
  { id: "bg-veg-cheese", categoryId: "burger", name: "Veg Cheese Burger", price: 110, jain: false, available: true },
  { id: "bg-mexican", categoryId: "burger", name: "Mexican Burger", price: 130, jain: false, available: true },
  { id: "bg-special-indian", categoryId: "burger", name: "Special Indian Burger", price: 150, jain: false, available: true },

  // === BROWNIE ===
  { id: "br-brownie", categoryId: "brownie", name: "Brownie", price: 120, jain: false, available: true },
  { id: "br-choco-cup", categoryId: "brownie", name: "Choco Brownie Cup", price: 150, jain: false, available: true },

  // === MOMOS ===
  { id: "mo-plain", categoryId: "momos", name: "Plain Momos", price: 90, jain: false, available: true },
  { id: "mo-peri-peri-cheese", categoryId: "momos", name: "Peri Peri with Cheese Momos", price: 100, jain: false, available: true },
  { id: "mo-schezwan-cheese", categoryId: "momos", name: "Schezwan with Cheese Momos", price: 120, jain: false, available: true },

  // === SHAKE ===
  { id: "sh-cold-coco", categoryId: "shake", name: "Cold Coco", price: 100, jain: false, available: true },
  { id: "sh-strawberry", categoryId: "shake", name: "Strawberry Shake", price: 120, jain: false, available: true },
  { id: "sh-mango", categoryId: "shake", name: "Mango Shake", price: 120, jain: false, available: true },
  { id: "sh-kiwi", categoryId: "shake", name: "Kiwi Shake", price: 120, jain: false, available: true },
  { id: "sh-black-currant", categoryId: "shake", name: "Black Currant Shake", price: 120, jain: false, available: true },
  { id: "sh-butterscotch", categoryId: "shake", name: "Butterscotch Shake", price: 120, jain: false, available: true },
  { id: "sh-oreo", categoryId: "shake", name: "Oreo Shake", price: 130, jain: false, available: true },
  { id: "sh-choco-chips", categoryId: "shake", name: "Chocolate Chips Shake", price: 130, jain: false, available: true },
  { id: "sh-kitkat", categoryId: "shake", name: "Kit Kat Shake", price: 130, jain: false, available: true },
  { id: "sh-choco-brownie", categoryId: "shake", name: "Choco Brownie Shake", price: 140, jain: false, available: true },

  // === WAFFLE ===
  { id: "wf-red-velvet", categoryId: "waffle", name: "Red Velvet Waffle", price: 180, jain: false, available: true },
  { id: "wf-kitkat", categoryId: "waffle", name: "KitKat Waffle", price: 150, jain: false, available: true },
  { id: "wf-oreo", categoryId: "waffle", name: "Oreo Waffle", price: 150, jain: false, available: true },
  { id: "wf-choco-chips", categoryId: "waffle", name: "Choco Chips Waffle", price: 150, jain: false, available: true },

  // === CAFE SNACKS ===
  { id: "cs-smiley", categoryId: "cafe-snacks", name: "Smiley", price: 80, jain: false, available: true },
  { id: "cs-cheese-hot-dog", categoryId: "cafe-snacks", name: "Cheese Hot Dog", price: 80, jain: false, available: true },
  { id: "cs-veggie-fingers", categoryId: "cafe-snacks", name: "Veggie Fingers", price: 80, jain: false, available: true },
  { id: "cs-mexican-nachos", categoryId: "cafe-snacks", name: "Mexican Nachos", price: 120, jain: false, available: true },
  { id: "cs-spring-roll", categoryId: "cafe-snacks", name: "Spring Roll", price: 100, jain: false, available: true },

  // === COFFEE ===
  { id: "cf-black", categoryId: "coffee", name: "Black Coffee", price: 30, jain: false, available: true },
  { id: "cf-cold-brew", categoryId: "coffee", name: "Cold Brew", price: 50, jain: false, available: true },
  { id: "cf-hot", categoryId: "coffee", name: "Hot Coffee", price: 50, jain: false, available: true },
  { id: "cf-hot-chocolate", categoryId: "coffee", name: "Hot Chocolate Coffee", price: 60, jain: false, available: true },
  { id: "cf-hazelnut", categoryId: "coffee", name: "Cold Coffee (Hazelnut)", price: 120, jain: false, available: true },
  { id: "cf-cold-chocolate", categoryId: "coffee", name: "Cold Chocolate Coffee", price: 130, jain: false, available: true },

  // === TEA ===
  { id: "te-masala", categoryId: "tea", name: "Masala Tea", price: 20, jain: false, available: true },
  { id: "te-non-sugar", categoryId: "tea", name: "Non Sugar Tea", price: 30, jain: false, available: true },
  { id: "te-hot-chocolate", categoryId: "tea", name: "Hot Chocolate Tea", price: 40, jain: false, available: true },
  { id: "te-lemon-green", categoryId: "tea", name: "Lemon (Green) Tea", price: 50, jain: false, available: true },
  { id: "te-ice", categoryId: "tea", name: "Ice Tea", price: 100, jain: false, available: true },

  // === MOCKTAIL ===
  { id: "mk-lemon-mint", categoryId: "mocktail", name: "Lemon Mint", price: 100, jain: false, available: true },
  { id: "mk-strawberry", categoryId: "mocktail", name: "Strawberry", price: 100, jain: false, available: true },
  { id: "mk-blue-lagoon", categoryId: "mocktail", name: "Blue Lagoon", price: 100, jain: false, available: true },
  { id: "mk-kiwi", categoryId: "mocktail", name: "Kiwi", price: 100, jain: false, available: true },
  { id: "mk-orange", categoryId: "mocktail", name: "Orange", price: 100, jain: false, available: true },
  { id: "mk-black-currant", categoryId: "mocktail", name: "Black Currant", price: 100, jain: false, available: true },
  { id: "mk-pina-colada", categoryId: "mocktail", name: "Pina Colada", price: 100, jain: false, available: true },

  // === BOURNVITA & BOOST ===
  { id: "bb-hot-chocolate", categoryId: "bournvita-boost", name: "Hot Chocolate", price: 60, jain: false, available: true },
  { id: "bb-hot-bournvita", categoryId: "bournvita-boost", name: "Hot Bournvita", price: 60, jain: false, available: true },
  { id: "bb-cold-bournvita", categoryId: "bournvita-boost", name: "Cold Bournvita", price: 100, jain: false, available: true },
  { id: "bb-hot-boost", categoryId: "bournvita-boost", name: "Hot Boost", price: 60, jain: false, available: true },
  { id: "bb-cold-boost", categoryId: "bournvita-boost", name: "Cold Boost", price: 100, jain: false, available: true },

  // === COLD DRINKS ===
  { id: "cd-pepsi", categoryId: "cold-drinks", name: "Pepsi", price: null, jain: false, available: true },
  { id: "cd-sting", categoryId: "cold-drinks", name: "Sting", price: null, jain: false, available: true },
  { id: "cd-dew", categoryId: "cold-drinks", name: "Dew", price: null, jain: false, available: true },
  { id: "cd-thums-up", categoryId: "cold-drinks", name: "Thums Up", price: null, jain: false, available: true },
  { id: "cd-coke", categoryId: "cold-drinks", name: "Coke", price: null, jain: false, available: true },
  { id: "cd-fanta", categoryId: "cold-drinks", name: "Fanta", price: null, jain: false, available: true },
  { id: "cd-hell", categoryId: "cold-drinks", name: "Hell", price: null, jain: false, available: true },
  { id: "cd-monster", categoryId: "cold-drinks", name: "Monster", price: null, jain: false, available: true },
  { id: "cd-red-bull", categoryId: "cold-drinks", name: "Red Bull", price: null, jain: false, available: true },
  { id: "cd-coolberg", categoryId: "cold-drinks", name: "Coolberg", price: null, jain: false, available: true },
];
