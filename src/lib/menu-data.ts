export type MenuSection = { title: string; items: string[] };
export type MenuCategory = { key: string; label: string; sections: MenuSection[] };

export const vegMenu: MenuSection[] = [
  { title: "Platters", items: ["Downtown Veg Platter"] },
  { title: "Sizzlers", items: ["Indian Vegetarian Sizzler","Chinese Vegetarian Sizzler","Italian Vegetarian Sizzler"] },
  { title: "Soups", items: ["Cream of Mushroom Soup","Cream of Tomato Soup","Hot and Sour Soup","Sweet Corn Soup","Veg Manchow Soup","Veg Clear Soup","Lemon Coriander Soup","Dal Dhaniya Shorba","Veg Talumein Soup"] },
  { title: "Starters", items: ["Hara Bhara Kebab","Dahi Kebab","Peanut Kebab","Paneer Tikka","Paneer Hariyali Tikka","Paneer Afghani Tikka","Paneer Achari Tikka","Tandoori Aloo","Tandoori Mushroom","Baby Corn Mushroom Tikka","Paneer Rangeen","Crispy Veg","Veg Lollipop","Chilli Chana","Chilli Gobi","Chilli Potato","Chilli Paneer","Chilli Corn","Chilli Baby Corn","Chilli Mushroom","Potato 65","Paneer 65","Veg Manchurian","Gobi Manchurian","Paneer Manchurian","Honey Chilli Potato"] },
  { title: "Main Course", items: ["Dal Fry","Dal Tadka","Dal Handi","Dal Makhani","Dal Punjabi","Downtown Special Dal","Dum Aloo Kashmiri","Jeera Aloo","Aloo Gobi","Dum Aloo Punjabi","Palak Aloo","Dum Aloo Banarasi","Veg Keema Matar","Veg Jalfrezi","Methi Malai Matar","Veg Handi","Veg Kofta","Malai Kofta","Palak Corn","Baby Corn Mushroom Masala","Mushroom Masala","Matar Masala","Mushroom Kaju Masala","Mix Veg","Navratan Korma","Chana Masala","Chana Pindi","Matar Paneer","Shahi Paneer","Paneer Butter Masala","Paneer Lababdar","Paneer Pasanda","Paneer Kaju Masala","Paneer Corn Masala","Paneer Do Pyaza","Paneer Handi","Paneer Punjabi","Kadhai Paneer","Paneer Bhurji","Palak Paneer","Paneer Tikka Masala"] },
  { title: "Rice & Biryani", items: ["Plain Rice","Jeera Rice","Green Peas Pulao","Veg Pulao","Paneer Pulao","Navratan Pulao","Kashmiri Pulao","Downtown Special Veg Biryani"] },
];

export const nonVegMenu: MenuSection[] = [
  { title: "Platters", items: ["Downtown Special Non Veg Platter"] },
  { title: "Sizzlers", items: ["Indian Non Vegetarian Sizzler","Chinese Non Vegetarian Sizzler","Downtown Special Non Vegetarian Sizzler"] },
  { title: "Soups", items: ["Chicken Hot and Sour Soup","Chicken Manchow Soup","Chicken Sweet Corn Soup","Chicken Coriander Soup","Cream of Chicken Soup","Chicken Talumein Soup"] },
  { title: "Starters", items: ["Chilli Egg","Shami Kebab","Chicken Salt and Pepper","Tandoori Chicken","Chicken Tikka","Chicken Seekh Kebab","Chicken Noorani Kebab","Chicken Sholay Kebab","Chicken Angara","Chicken Achari Tikka","Chicken Hyderabadi Tikka","Chicken Rajol Kebab","Chicken Malai Tikka","Chilli Chicken","Chicken Manchurian","Chicken 65","Chicken Crispy","Chicken Satay","Southern Fried Chicken","Chicken Lollipop","Mutton Seekh Kebab"] },
  { title: "Main Course", items: ["Egg Masala","Egg Curry","Egg Kadhai","Egg Bhurji","Chicken Masala","Chicken Curry","Chicken Korma","Chicken Kadhai","Chicken Adraki","Chicken Bhuna","Chicken Kolhapuri","Chicken Motwani","Chicken Tikka Masala","Chicken Hyderabadi"] },
  { title: "Biryani", items: ["Chicken Biryani","Downtown Special Chicken Biryani","Mutton Biryani","Downtown Special Mutton Biryani"] },
];

export const beverages: MenuSection[] = [
  { title: "Coffee", items: ["Espresso","Americano","Cappuccino","Cafe Latte","Mocha","Hot Chocolate"] },
  { title: "Cold Coffee", items: ["Classic Cold Coffee","Cold Coffee with Ice Cream","Hazelnut Cold Coffee","Caramel Cold Coffee"] },
  { title: "Frappes", items: ["Downtown Special Frappe","Oreo Frappe","Chocolate Frappe","Caramel Frappe","Mocha Frappe"] },
  { title: "Mocktails", items: ["Virgin Mojito","Blue Lagoon","Green Apple Cooler","Watermelon Cooler","Strawberry Crush","Pina Colada"] },
  { title: "Shakes", items: ["Chocolate Shake","Strawberry Shake","Vanilla Shake","Oreo Shake","KitKat Shake","Brownie Shake"] },
  { title: "Fresh Juices", items: ["Orange","Watermelon","Pineapple","Mosambi","Mixed Fruit"] },
  { title: "Tea", items: ["Masala Chai","Ginger Tea","Lemon Tea","Green Tea","Kashmiri Kahwa"] },
  { title: "Soft Drinks", items: ["Coke","Sprite","Fanta","Mineral Water"] },
  { title: "Special Cafe Drinks", items: ["Downtown Signature Latte","Affogato","Iced Mocha","Spanish Latte"] },
];

export const categories = [
  "North Indian","Chinese","Pizza","Burgers","Sandwiches","Cafe Specials","Desserts","Beverages",
];
