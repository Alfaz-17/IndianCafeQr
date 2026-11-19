import type { MenuItem } from "./types";

export const items: MenuItem[] = [
  // === PIZZA ===
  { id: "pizza-margherita", categoryId: "pizza", name: "Margherita Pizza", nameGu: "માર્ગરીટા પિઝા", price: 100, jain: true, available: true },
  { id: "pizza-onion", categoryId: "pizza", name: "Onion Pizza", nameGu: "ઓનિયન પિઝા", price: 120, jain: false, available: true },
  { id: "pizza-tomato", categoryId: "pizza", name: "Tomato Pizza", nameGu: "ટોમેટો પિઝા", price: 120, jain: true, available: true },
  { id: "pizza-sweet-corn", categoryId: "pizza", name: "Sweet Corn Pizza", nameGu: "સ્વીટ કોર્ન પિઝા", price: 120, jain: true, available: true },
  { id: "pizza-veg-cheese", categoryId: "pizza", name: "Veg Cheese Pizza", nameGu: "વેજ ચીઝ પિઝા", price: 130, jain: true, available: true },
  { id: "pizza-italian", categoryId: "pizza", name: "Italian Pizza", nameGu: "ઇટાલિયન પિઝા", price: 130, jain: true, available: true },
  { id: "pizza-mexican", categoryId: "pizza", name: "Mexican Pizza", nameGu: "મેક્સિકન પિઝા", price: 130, jain: false, available: true },
  { id: "pizza-schezwan", categoryId: "pizza", name: "Schezwan Pizza", nameGu: "શેઝવાન પિઝા", price: 140, jain: false, available: true },
  { id: "pizza-paneer-tandoori", categoryId: "pizza", name: "Paneer Tandoori Pizza", nameGu: "પનીર તંદૂરી પિઝા", price: 150, jain: false, available: true },
  { id: "pizza-special-indian", categoryId: "pizza", name: "Special Indian Pizza", nameGu: "સ્પેશ્યલ ઇન્ડિયન પિઝા", price: 160, jain: false, available: true },

  // === GARLIC BREAD ===
  { id: "gb-cheese", categoryId: "garlic-bread", name: "Cheese Garlic Bread", nameGu: "ચીઝ ગાર્લિક બ્રેડ", price: 120, jain: false, available: true },
  { id: "gb-corn", categoryId: "garlic-bread", name: "Corn Garlic Bread", nameGu: "કોર્ન ગાર્લિક બ્રેડ", price: 130, jain: false, available: true },
  { id: "gb-veg-cheese", categoryId: "garlic-bread", name: "Veg Cheese Garlic Bread", nameGu: "વેજ ચીઝ ગાર્લિક બ્રેડ", price: 140, jain: false, available: true },
  { id: "gb-paneer-tikka", categoryId: "garlic-bread", name: "Paneer Tikka Garlic Bread", nameGu: "પનીર ટિક્કા ગાર્લિક બ્રેડ", price: 150, jain: false, available: true },
  { id: "gb-stuff", categoryId: "garlic-bread", name: "Stuff Garlic Bread", nameGu: "સ્ટફ્ડ ગાર્લિક બ્રેડ", price: 150, jain: false, available: true },

  // === SANDWICH ===
  { id: "sw-bread-butter", categoryId: "sandwich", name: "Bread Butter Sandwich", nameGu: "બ્રેડ બટર સેન્ડવિચ", price: 50, jain: false, available: true },
  { id: "sw-bread-butter-jam", categoryId: "sandwich", name: "Bread Butter Jam Sandwich", nameGu: "બ્રેડ બટર જામ સેન્ડવિચ", price: 60, jain: false, available: true },
  { id: "sw-cheese-chutney", categoryId: "sandwich", name: "Cheese Chutney Sandwich", nameGu: "ચીઝ ચટણી સેન્ડવિચ", price: 60, jain: false, available: true },
  { id: "sw-veg", categoryId: "sandwich", name: "Veg Sandwich", nameGu: "વેજ સેન્ડવિચ", price: 70, jain: false, available: true },
  { id: "sw-chocolate", categoryId: "sandwich", name: "Chocolate Sandwich", nameGu: "ચોકલેટ સેન્ડવિચ", price: 60, jain: false, available: true },
  { id: "sw-pineapple", categoryId: "sandwich", name: "Pineapple Sandwich", nameGu: "પાઇનેપલ સેન્ડવિચ", price: 60, jain: false, available: true },
  { id: "sw-veg-cheese", categoryId: "sandwich", name: "Veg Cheese Sandwich", nameGu: "વેજ ચીઝ સેન્ડવિચ", price: 90, jain: false, available: true },

  // === GRILL SANDWICH ===
  { id: "gs-bread-butter", categoryId: "grill-sandwich", name: "Bread Butter Grill", nameGu: "બ્રેડ બટર ગ્રિલ", price: 60, jain: true, available: true },
  { id: "gs-chocolate", categoryId: "grill-sandwich", name: "Chocolate Grill", nameGu: "ચોકલેટ ગ્રિલ", price: 70, jain: false, available: true },
  { id: "gs-only-cheese", categoryId: "grill-sandwich", name: "Only Cheese Grill", nameGu: "ઓન્લી ચીઝ ગ્રિલ", price: 80, jain: false, available: true },
  { id: "gs-cheese-jam", categoryId: "grill-sandwich", name: "Cheese Jam Grill", nameGu: "ચીઝ જામ ગ્રિલ", price: 80, jain: true, available: true },
  { id: "gs-corn-cream", categoryId: "grill-sandwich", name: "Corn Cream Grill", nameGu: "કોર્ન ક્રીમ ગ્રિલ", price: 90, jain: true, available: true },
  { id: "gs-veg-cheese", categoryId: "grill-sandwich", name: "Veg Cheese Grill", nameGu: "વેજ ચીઝ ગ્રિલ", price: 120, jain: true, available: true },
  { id: "gs-pizza-sandwich", categoryId: "grill-sandwich", name: "Pizza Sandwich", nameGu: "પિઝા સેન્ડવિચ", price: 120, jain: true, available: true },
  { id: "gs-paneer", categoryId: "grill-sandwich", name: "Paneer Grill", nameGu: "પનીર ગ્રિલ", price: 130, jain: false, available: true },
  { id: "gs-aloo-tikki", categoryId: "grill-sandwich", name: "Aloo Tikki Grill", nameGu: "આલૂ ટિક્કી ગ્રિલ", price: 130, jain: false, available: true },
  { id: "gs-club", categoryId: "grill-sandwich", name: "Club Grill", nameGu: "ક્લબ ગ્રિલ", price: 150, jain: false, available: true },

  // === FRENCH FRIES ===
  { id: "ff-salted-masala", categoryId: "french-fries", name: "Salted Masala French Fries", nameGu: "સોલ્ટેડ મસાલા ફ્રેંચ ફ્રાઈસ", price: 80, jain: true, jainPrice: 100, available: true },
  { id: "ff-peri-peri", categoryId: "french-fries", name: "Peri Peri French Fries", nameGu: "પેરી પેરી ફ્રેંચ ફ્રાઈસ", price: 90, jain: false, available: true },
  { id: "ff-peri-peri-cheese", categoryId: "french-fries", name: "Peri Peri Cheese French Fries", nameGu: "પેરી પેરી ચીઝ ફ્રેંચ ફ્રાઈસ", price: 110, jain: false, available: true },
  { id: "ff-salsa", categoryId: "french-fries", name: "Salsa French Fries", nameGu: "સાલસા ફ્રેંચ ફ્રાઈસ", price: 120, jain: false, available: true },
  { id: "ff-double-cheese", categoryId: "french-fries", name: "Double Cheese French Fries", nameGu: "ડબલ ચીઝ ફ્રેંચ ફ્રાઈસ", price: 120, jain: true, available: true },
  { id: "ff-pizza-fry", categoryId: "french-fries", name: "Pizza Fry French Fries", nameGu: "પિઝા ફ્રાય ફ્રેંચ ફ્રાઈસ", price: 140, jain: true, jainPrice: 150, available: true },

  // === FRANKIE ===
  { id: "fk-veg-cheese", categoryId: "frankie", name: "Veg Cheese Frankie", nameGu: "વેજ ચીઝ ફ્રેન્કી", price: 100, jain: true, available: true },
  { id: "fk-cheese-corn", categoryId: "frankie", name: "Cheese Corn Frankie", nameGu: "ચીઝ કોર્ન ફ્રેન્કી", price: 120, jain: false, available: true },
  { id: "fk-mexican", categoryId: "frankie", name: "Mexican Frankie", nameGu: "મેક્સિકન ફ્રેન્કી", price: 120, jain: false, available: true },
  { id: "fk-aloo-tikki", categoryId: "frankie", name: "Aloo Tikki Frankie", nameGu: "આલૂ ટિક્કી ફ્રેન્કી", price: 130, jain: false, available: true },
  { id: "fk-paneer-tandoori", categoryId: "frankie", name: "Paneer Tandoori Frankie", nameGu: "પનીર તંદૂરી ફ્રેન્કી", price: 140, jain: false, available: true },
  { id: "fk-paneer-jain", categoryId: "frankie", name: "Paneer Frankie", nameGu: "પનીર ફ્રેન્કી", price: 140, jain: true, available: true },

  // === MAGGI ===
  { id: "mg-masala", categoryId: "maggi", name: "Masala Maggi", nameGu: "મસાલા મેગી", price: 60, jain: false, available: true },
  { id: "mg-masala-cheese", categoryId: "maggi", name: "Masala Cheese Maggi", nameGu: "મસાલા ચીઝ મેગી", price: 80, jain: false, available: true },
  { id: "mg-veg-classic", categoryId: "maggi", name: "Veg Classic Maggi", nameGu: "વેજ ક્લાસિક મેગી", price: 80, jain: false, available: true },
  { id: "mg-bhel", categoryId: "maggi", name: "Maggi Bhel (Fry)", nameGu: "મેગી ભેલ (ફ્રાય)", price: 80, jain: false, available: true },
  { id: "mg-veg-schezwan", categoryId: "maggi", name: "Veg Schezwan Maggi", nameGu: "વેજ શેઝવાન મેગી", price: 90, jain: false, available: true },
  { id: "mg-peri-peri-corn", categoryId: "maggi", name: "Peri Peri Corn Maggi", nameGu: "પેરી પેરી કોર્ન મેગી", price: 90, jain: false, available: true },
  { id: "mg-veg-cheese", categoryId: "maggi", name: "Veg Cheese Maggi", nameGu: "વેજ ચીઝ મેગી", price: 100, jain: false, available: true },
  { id: "mg-cheese-tadka", categoryId: "maggi", name: "Cheese Tadka Maggi", nameGu: "ચીઝ તડકા મેગી", price: 120, jain: false, available: true },
  { id: "mg-jain", categoryId: "maggi", name: "Jain Maggi", nameGu: "જૈન મેગી", price: 70, jain: true, available: true },
  { id: "mg-veg-jain", categoryId: "maggi", name: "Veg Maggi", nameGu: "વેજ મેગી", price: 80, jain: true, available: true },

  // === TOAST ===
  { id: "to-cheese-chilli", categoryId: "toast", name: "Cheese Chilli Toast", nameGu: "ચીઝ ચીલી ટોસ્ટ", price: 120, jain: false, available: true },
  { id: "to-american-garden", categoryId: "toast", name: "American Garden", nameGu: "અમેરિકન ગાર્ડન ટોસ્ટ", price: 140, jain: false, available: true },

  // === PASTA ===
  { id: "pa-red", categoryId: "pasta", name: "Red Pasta", nameGu: "રેડ સોસ પાસ્તા", price: 130, jain: true, jainPrice: 130, available: true },
  { id: "pa-white", categoryId: "pasta", name: "White Pasta", nameGu: "વ્હાઇટ સોસ પાસ્તા", price: 140, jain: true, jainPrice: 140, available: true },
  { id: "pa-pink", categoryId: "pasta", name: "Pink Sauce Pasta", nameGu: "પિંક સોસ પાસ્તા", price: 150, jain: true, available: true },

  // === BURGER ===
  { id: "bg-aloo-tikki", categoryId: "burger", name: "Aloo Tikki Burger", nameGu: "આલૂ ટિક્કી બર્ગર", price: 90, jain: false, available: true },
  { id: "bg-veg-cheese", categoryId: "burger", name: "Veg Cheese Burger", nameGu: "વેજ ચીઝ બર્ગર", price: 110, jain: false, available: true },
  { id: "bg-mexican", categoryId: "burger", name: "Mexican Burger", nameGu: "મેક્સિકન બર્ગર", price: 130, jain: false, available: true },
  { id: "bg-special-indian", categoryId: "burger", name: "Special Indian Burger", nameGu: "સ્પેશ્યલ ઇન્ડિયન બર્ગર", price: 150, jain: false, available: true },

  // === BROWNIE ===
  { id: "br-brownie", categoryId: "brownie", name: "Brownie", nameGu: "બ્રાઉની", price: 120, jain: false, available: true },
  { id: "br-choco-cup", categoryId: "brownie", name: "Choco Brownie Cup", nameGu: "ચોકો બ્રાઉની કપ", price: 150, jain: false, available: true },

  // === MOMOS ===
  { id: "mo-plain", categoryId: "momos", name: "Plain Momos", nameGu: "પ્લેઈન મોમોસ", price: 90, jain: false, available: true },
  { id: "mo-peri-peri-cheese", categoryId: "momos", name: "Peri Peri with Cheese Momos", nameGu: "પેરી પેરી વિથ ચીઝ મોમોસ", price: 100, jain: false, available: true },
  { id: "mo-schezwan-cheese", categoryId: "momos", name: "Schezwan with Cheese Momos", nameGu: "શેઝવાન વિથ ચીઝ મોમોસ", price: 120, jain: false, available: true },

  // === SHAKE ===
  { id: "sh-cold-coco", categoryId: "shake", name: "Cold Coco", nameGu: "કોલ્ડ કોકો", price: 100, jain: false, available: true },
  { id: "sh-strawberry", categoryId: "shake", name: "Strawberry Shake", nameGu: "સ્ટ્રોબેરી શેક", price: 120, jain: false, available: true },
  { id: "sh-mango", categoryId: "shake", name: "Mango Shake", nameGu: "મેંગો શેક", price: 120, jain: false, available: true },
  { id: "sh-kiwi", categoryId: "shake", name: "Kiwi Shake", nameGu: "કીવી શેક", price: 120, jain: false, available: true },
  { id: "sh-black-currant", categoryId: "shake", name: "Black Currant Shake", nameGu: "બ્લેક કરન્ટ શેક", price: 120, jain: false, available: true },
  { id: "sh-butterscotch", categoryId: "shake", name: "Butterscotch Shake", nameGu: "બટરસ્કોચ શેક", price: 120, jain: false, available: true },
  { id: "sh-oreo", categoryId: "shake", name: "Oreo Shake", nameGu: "ઓરિઓ શેક", price: 130, jain: false, available: true },
  { id: "sh-choco-chips", categoryId: "shake", name: "Chocolate Chips Shake", nameGu: "ચોકો ચિપ્સ શેક", price: 130, jain: false, available: true },
  { id: "sh-kitkat", categoryId: "shake", name: "Kit Kat Shake", nameGu: "કિટકેટ શેક", price: 130, jain: false, available: true },
  { id: "sh-choco-brownie", categoryId: "shake", name: "Choco Brownie Shake", nameGu: "ચોકો બ્રાઉની શેક", price: 140, jain: false, available: true },

  // === WAFFLE ===
  { id: "wf-red-velvet", categoryId: "waffle", name: "Red Velvet Waffle", nameGu: "રેડ વેલ્વેટ વેફલ", price: 180, jain: false, available: true },
  { id: "wf-kitkat", categoryId: "waffle", name: "KitKat Waffle", nameGu: "કિટકેટ વેફલ", price: 150, jain: false, available: true },
  { id: "wf-oreo", categoryId: "waffle", name: "Oreo Waffle", nameGu: "ઓરિઓ વેફલ", price: 150, jain: false, available: true },
  { id: "wf-choco-chips", categoryId: "waffle", name: "Choco Chips Waffle", nameGu: "ચોકો ચિપ્સ વેફલ", price: 150, jain: false, available: true },

  // === CAFE SNACKS ===
  { id: "cs-smiley", categoryId: "cafe-snacks", name: "Smiley", nameGu: "સ્માઇલી", price: 80, jain: false, available: true },
  { id: "cs-cheese-hot-dog", categoryId: "cafe-snacks", name: "Cheese Hot Dog", nameGu: "ચીઝ હોટ ડોગ", price: 80, jain: false, available: true },
  { id: "cs-veggie-fingers", categoryId: "cafe-snacks", name: "Veggie Fingers", nameGu: "વેજી ફિંગર્સ", price: 80, jain: false, available: true },
  { id: "cs-mexican-nachos", categoryId: "cafe-snacks", name: "Mexican Nachos", nameGu: "મેક્સિકન નાચોસ", price: 120, jain: false, available: true },
  { id: "cs-spring-roll", categoryId: "cafe-snacks", name: "Spring Roll", nameGu: "સ્પ્રિંગ રોલ", price: 100, jain: false, available: true },

  // === COFFEE ===
  { id: "cf-black", categoryId: "coffee", name: "Black Coffee", nameGu: "બ્લેક કોફી", price: 30, jain: false, available: true },
  { id: "cf-cold-brew", categoryId: "coffee", name: "Cold Brew", nameGu: "કોલ્ડ બ્રૂ", price: 50, jain: false, available: true },
  { id: "cf-hot", categoryId: "coffee", name: "Hot Coffee", nameGu: "હોટ કોફી", price: 50, jain: false, available: true },
  { id: "cf-hot-chocolate", categoryId: "coffee", name: "Hot Chocolate Coffee", nameGu: "હોટ ચોકલેટ કોફી", price: 60, jain: false, available: true },
  { id: "cf-hazelnut", categoryId: "coffee", name: "Cold Coffee (Hazelnut)", nameGu: "કોલ્ડ કોફી (હેઝલનટ)", price: 120, jain: false, available: true },
  { id: "cf-cold-chocolate", categoryId: "coffee", name: "Cold Chocolate Coffee", nameGu: "કોલ્ડ ચોકલેટ કોફી", price: 130, jain: false, available: true },

  // === TEA ===
  { id: "te-masala", categoryId: "tea", name: "Masala Tea", nameGu: "મસાલા ચા", price: 20, jain: false, available: true },
  { id: "te-non-sugar", categoryId: "tea", name: "Non Sugar Tea", nameGu: "ફીકી ચા (Non Sugar)", price: 30, jain: false, available: true },
  { id: "te-hot-chocolate", categoryId: "tea", name: "Hot Chocolate Tea", nameGu: "હોટ ચોકલેટ ચા", price: 40, jain: false, available: true },
  { id: "te-lemon-green", categoryId: "tea", name: "Lemon (Green) Tea", nameGu: "લેમન ગ્રીન ટી", price: 50, jain: false, available: true },
  { id: "te-ice", categoryId: "tea", name: "Ice Tea", nameGu: "આઇસ ટી", price: 100, jain: false, available: true },

  // === MOCKTAIL ===
  { id: "mk-lemon-mint", categoryId: "mocktail", name: "Lemon Mint", nameGu: "લેમન મિન્ટ મોકટેલ", price: 100, jain: false, available: true },
  { id: "mk-strawberry", categoryId: "mocktail", name: "Strawberry", nameGu: "સ્ટ્રોબેરી મોકટેલ", price: 100, jain: false, available: true },
  { id: "mk-blue-lagoon", categoryId: "mocktail", name: "Blue Lagoon", nameGu: "બ્લૂ લગૂન", price: 100, jain: false, available: true },
  { id: "mk-kiwi", categoryId: "mocktail", name: "Kiwi", nameGu: "કીવી મોકટેલ", price: 100, jain: false, available: true },
  { id: "mk-orange", categoryId: "mocktail", name: "Orange", nameGu: "ઓરેન્જ મોકટેલ", price: 100, jain: false, available: true },
  { id: "mk-black-currant", categoryId: "mocktail", name: "Black Currant", nameGu: "બ્લેક કરન્ટ મોકટેલ", price: 100, jain: false, available: true },
  { id: "mk-pina-colada", categoryId: "mocktail", name: "Pina Colada", nameGu: "પીના કોલાડા", price: 100, jain: false, available: true },

  // === BOURNVITA & BOOST ===
  { id: "bb-hot-chocolate", categoryId: "bournvita-boost", name: "Hot Chocolate", nameGu: "હોટ ચોકલેટ", price: 60, jain: false, available: true },
  { id: "bb-hot-bournvita", categoryId: "bournvita-boost", name: "Hot Bournvita", nameGu: "હોટ બોર્નવિટા", price: 60, jain: false, available: true },
  { id: "bb-cold-bournvita", categoryId: "bournvita-boost", name: "Cold Bournvita", nameGu: "કોલ્ડ બોર્નવિટા", price: 100, jain: false, available: true },
  { id: "bb-hot-boost", categoryId: "bournvita-boost", name: "Hot Boost", nameGu: "હોટ બૂસ્ટ", price: 60, jain: false, available: true },
  { id: "bb-cold-boost", categoryId: "bournvita-boost", name: "Cold Boost", nameGu: "કોલ્ડ બૂસ્ટ", price: 100, jain: false, available: true },

  // === COLD DRINKS ===
  { id: "cd-pepsi", categoryId: "cold-drinks", name: "Pepsi", nameGu: "પેપ્સી", price: null, jain: false, available: true },
  { id: "cd-sting", categoryId: "cold-drinks", name: "Sting", nameGu: "સ્ટિંગ", price: null, jain: false, available: true },
  { id: "cd-dew", categoryId: "cold-drinks", name: "Dew", nameGu: "માઉન્ટેન ડ્યૂ", price: null, jain: false, available: true },
  { id: "cd-thums-up", categoryId: "cold-drinks", name: "Thums Up", nameGu: "થમ્સ અપ", price: null, jain: false, available: true },
  { id: "cd-coke", categoryId: "cold-drinks", name: "Coke", nameGu: "કોકા કોલા", price: null, jain: false, available: true },
  { id: "cd-fanta", categoryId: "cold-drinks", name: "Fanta", nameGu: "ફેન્ટા", price: null, jain: false, available: true },
  { id: "cd-hell", categoryId: "cold-drinks", name: "Hell", nameGu: "હેલ એનર્જી", price: null, jain: false, available: true },
  { id: "cd-monster", categoryId: "cold-drinks", name: "Monster", nameGu: "મોન્સ્ટર એનર્જી", price: null, jain: false, available: true },
  { id: "cd-red-bull", categoryId: "cold-drinks", name: "Red Bull", nameGu: "રેડ બુલ", price: null, jain: false, available: true },
  { id: "cd-coolberg", categoryId: "cold-drinks", name: "Coolberg", nameGu: "કુલબર્ગ (0.0% બિયર)", price: null, jain: false, available: true },
];
