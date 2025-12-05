export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  halfPrice?: string;
  fullPrice?: string;
  sizes?: string[];
}

export interface MenuCategory {
  title: string;
  icon?: string;
  items: MenuItem[];
}

export interface MenuSection {
  title: string;
  categories: MenuCategory[];
}

export const snacksAndStarters: MenuSection = {
  title: "SNACKS & STARTERS",
  categories: [
    {
      title: "VEG",
      items: [
        { name: "Fried Peanuts", price: "₹199", description: "Crispy salted peanuts roasted to golden perfection" },
        { name: "Fried Papad", price: "₹149", description: "Traditional crispy lentil wafers, lightly spiced" },
        { name: "Masala Papad", price: "₹169", description: "Topped with fresh onions, tomatoes & tangy chaat masala" },
        { name: "Veg Pakoda", price: "₹249", description: "Assorted vegetables in chickpea batter, golden fried" },
        { name: "Veg Crispie", price: "₹219", description: "Crunchy vegetable fritters with house-made green chutney" },
        { name: "Paneer Pakoda", price: "₹299", description: "Cottage cheese cubes in spiced gram flour coating" },
        { name: "Veg Cutlet", price: "₹249", description: "Hand-pressed mixed vegetable patties, herb-crusted" },
        { name: "Cheese Pakoda", price: "₹329", description: "Melting cheese encased in crispy golden batter" },
        { name: "Cheese Balls", price: "₹299", description: "Creamy cheese spheres with a crunchy breadcrumb shell" },
        { name: "French Fries", price: "₹229", description: "Hand-cut potatoes, twice-fried for extra crispiness" },
        { name: "Corn Crisipie", price: "₹199", description: "Sweet corn kernels flash-fried with aromatic spices" },
        { name: "Matki Fry", price: "₹219", description: "Sprouted moth beans sautéed with fresh herbs" },
        { name: "Vajri Fry", price: "₹239", description: "Crispy lotus stem chips with signature seasoning" },
      ],
    },
    {
      title: "NON-VEG",
      items: [
        { name: "Fried Chicken", price: "₹329", description: "Succulent pieces marinated overnight, deep-fried crispy" },
        { name: "Chicken Lollypop", price: "₹379", description: "Frenched drumettes in spicy Indo-Chinese glaze" },
        { name: "Veg Crispie", price: "₹219", description: "Garden fresh vegetables in light tempura batter" },
        { name: "Chicken Cutlet", price: "₹359", description: "Minced chicken patties with caramelized onions" },
        { name: "Tandoori Chicken (Full)", price: "₹549", description: "Whole bird marinated in yogurt & 24 spices, clay-oven roasted" },
        { name: "Tandoori Chicken (Half)", price: "₹299", description: "Half portion of our signature clay-oven specialty" },
        { name: "Chicken Tikka", price: "₹399", description: "Boneless chunks in saffron-kissed tikka marinade" },
        { name: "Chicken Kabab", price: "₹379", description: "Hand-ground seekh kababs with fresh mint" },
        { name: "Chicken Chatpata", price: "₹349", description: "Tangy spiced chicken bites with tamarind drizzle" },
        { name: "Chicken Rara", price: "₹369", description: "Keema-coated chicken in rich tomato gravy" },
        { name: "Chicken Khara", price: "₹349", description: "Dry-rubbed with crushed peppercorns & whole spices" },
        { name: "Chicken Tawa", price: "₹399", description: "Griddle-seared with bell peppers & onions" },
        { name: "Paneer 65", price: "₹329", description: "Cottage cheese in fiery Hyderabadi-style batter" },
        { name: "Paneer & Chillie", price: "₹339", description: "Wok-tossed with fresh chilies & soy glaze" },
      ],
    },
  ],
};

export const foodMenu: MenuSection = {
  title: "FOOD MENU",
  categories: [
    {
      title: "Non-Vegetarian Handi & Firepot",
      icon: "🍲",
      items: [
        { name: "Chicken Kolhapuri Firepot", price: "₹549", description: "Intensely spiced with dried red chilies & coconut" },
        { name: "Solapuri Chicken Handi", halfPrice: "₹629", fullPrice: "₹1,099", description: "Rustic preparation with black stone flower & wild spices" },
        { name: "Slow-Cooked Butter Chicken Handi", halfPrice: "₹699", fullPrice: "₹1,199", description: "Velvety tomato-cream gravy with charred chicken" },
        { name: "Royal Murgh Musallam Handi", halfPrice: "₹749", fullPrice: "₹1,299", description: "Whole chicken stuffed with aromatic rice & eggs" },
      ],
    },
    {
      title: "Slow-Cooked Mutton Specialities",
      icon: "🍖",
      items: [
        { name: "Mutton Ukkad Handi", halfPrice: "₹899", fullPrice: "₹1,599", description: "Traditional bone-in curry simmered for 6 hours" },
        { name: "Solapuri Mutton Handi", halfPrice: "₹949", fullPrice: "₹1,699", description: "Authentic Solapur-style with kala masala" },
        { name: "Kolhapuri Mutton Handi", halfPrice: "₹949", fullPrice: "₹1,699", description: "Fiery red gravy with freshly ground masala" },
        { name: "Rustic Mutton Curry", price: "₹549", description: "Home-style preparation with caramelized onions" },
        { name: "Signature Mutton Masala", price: "₹579", description: "Chef's special blend of 18 hand-roasted spices" },
      ],
    },
    {
      title: "The Live Thali Experience",
      icon: "🍽️",
      items: [
        { name: "Luxe Veg Thali", price: "₹349", description: "Seasonal vegetables, signature gravy, dal fry, rice, salad, papad & assorted breads" },
        { name: "Egg Thali", price: "₹399", description: "Masala egg preparation, rassa, dal, rice, salad & assorted breads" },
        { name: "Classic Chicken Thali", price: "₹479", description: "Chicken fry, rassa, soup, rice, salad & assorted breads" },
        { name: "Royal Mutton Thali", price: "₹699", description: "Mutton fry, Solapuri rassa, soup, wajdi, rice, salad & assorted breads" },
      ],
    },
    {
      title: "Vegetarian Chef's Mains",
      icon: "🥗",
      items: [
        { name: "Paneer Patiyala Royal", price: "₹459", description: "Creamy cottage cheese in rich cashew-tomato gravy" },
        { name: "Paneer Handi Signature", price: "₹449", description: "Slow-cooked in earthen pot with whole spices" },
        { name: "Paneer Tikka Masala / Lajawab Masala", price: "₹469", description: "Charred paneer cubes in smoky tomato sauce" },
        { name: "Classic Paneer Butter Masala", price: "₹479", description: "Silky makhani gravy with farm-fresh paneer" },
        { name: "Paneer Kadai Karari", price: "₹459", description: "Bell peppers & cottage cheese with kadai spices" },
        { name: "Diwani Paneer Handi", price: "₹489", description: "Mixed vegetables & paneer in aromatic curry" },
        { name: "Homestyle Paneer Masala", price: "₹429", description: "Simple, comforting preparation with onion-tomato base" },
        { name: "Paneer Bhurji Scramble", price: "₹419", description: "Crumbled cottage cheese with peppers & fresh herbs" },
        { name: "Kaju Rich Masala", price: "₹529", description: "Premium cashews in velvety saffron cream" },
        { name: "Kaju Cream Curry", price: "₹529", description: "Whole cashews swimming in delicate white gravy" },
        { name: "Veg Patiyala", price: "₹419", description: "Garden vegetables in royal Punjabi-style sauce" },
        { name: "Veg Kolhapuri Pot", price: "₹429", description: "Seasonal vegetables in spicy Kolhapuri masala" },
      ],
    },
  ],
};

export const beveragesMenu: MenuSection = {
  title: "BEVERAGES & SPIRITS",
  categories: [
    {
      title: "Craft & Classic Brews",
      icon: "🍺",
      items: [
        { name: "Kingfisher Premium (650 ml)", price: "₹349", description: "India's favorite crisp, refreshing lager" },
        { name: "Budweiser Mild (650 ml)", price: "₹399", description: "Smooth American-style pale lager" },
        { name: "Budweiser Magnum Strong (650 ml)", price: "₹449", description: "Bold & full-bodied with rich malt character" },
        { name: "Tuborg Strong (650 ml)", price: "₹329", description: "Danish heritage with robust flavor profile" },
        { name: "Carlsberg Smooth (650 ml)", price: "₹369", description: "Exceptionally smooth Scandinavian brew" },
        { name: "Heineken (650 ml)", price: "₹429", description: "Iconic Dutch pilsner with balanced bitterness" },
        { name: "Breezer Cranberry (275 ml)", price: "₹319", description: "Light & fruity with tart cranberry notes" },
        { name: "Breezer Blackberry (275 ml)", price: "₹319", description: "Sweet berry refreshment, perfectly chilled" },
      ],
    },
    {
      title: "Crystal Clear Vodkas",
      icon: "🍸",
      items: [
        { name: "Magic Moments (Plain)", sizes: ["₹199", "₹349", "₹499", "₹949"], description: "Triple-distilled smoothness with clean finish" },
        { name: "Magic Moments Apple / Orange", sizes: ["₹219", "₹379", "₹549", "₹1,049"], description: "Fruit-infused with natural flavor essences" },
        { name: "Romanov Vodka (Plain / Apple)", sizes: ["₹179", "₹299", "₹429", "₹799"], description: "Classic Russian-style with subtle sweetness" },
        { name: "Smirnoff", sizes: ["₹279", "₹499", "₹749", "₹1,399"], description: "World-renowned purity, filtered ten times" },
      ],
    },
    {
      title: "Aged & Spiced Rums",
      icon: "🥃",
      items: [
        { name: "Old Monk", sizes: ["₹219", "₹369", "₹529", "₹999"], description: "Legendary 7-year aged dark rum with vanilla notes" },
        { name: "Bacardi White", sizes: ["₹249", "₹429", "₹619", "₹1,179"], description: "Light & crisp, perfect for cocktails" },
        { name: "Bacardi Black", sizes: ["₹269", "₹459", "₹659", "₹1,249"], description: "Rich molasses flavor with oak undertones" },
        { name: "Bacardi Lemon", sizes: ["₹279", "₹489", "₹699", "₹1,329"], description: "Zesty citrus twist on classic rum" },
        { name: "McDowell's Rum", sizes: ["₹189", "₹329", "₹469", "₹899"], description: "Smooth Caribbean-inspired blend" },
      ],
    },
    {
      title: "Indian Reserve Whiskies",
      icon: "🥃",
      items: [
        { name: "Imperial Blue", sizes: ["₹199", "₹349", "₹499", "₹949"], description: "Smooth blend with hints of oak & spice" },
        { name: "Royal Challenge", sizes: ["₹249", "₹429", "₹619", "₹1,179"], description: "Premium grain whisky with mellow character" },
        { name: "Royal Green", sizes: ["₹269", "₹459", "₹659", "₹1,249"], description: "Distinctively smooth with herbal notes" },
      ],
    },
    {
      title: "World Whisky Collection",
      icon: "🥃",
      items: [
        { name: "Ballantine's Finest", sizes: ["₹499", "₹949", "₹1,399"], description: "Scottish blend with honey & apple notes" },
        { name: "Black & White", sizes: ["₹449", "₹849", "₹1,249"], description: "Smoky Highland character with gentle peat" },
        { name: "Black Dog", sizes: ["₹499", "₹949", "₹1,399"], description: "Triple gold matured for exceptional smoothness" },
        { name: "Jameson Irish Whiskey", sizes: ["₹599", "₹1,149", "₹1,699"], description: "Triple-distilled with signature Irish smoothness" },
        { name: "Johnnie Walker Red Label", sizes: ["₹549", "₹1,049", "₹1,549"], description: "Bold & vibrant with cinnamon spice" },
      ],
    },
    {
      title: "Celebration Bottles (750 ml)",
      icon: "🍾",
      items: [
        { name: "Blender's Pride", price: "₹3,799", description: "Rare malt whisky for special occasions" },
        { name: "Antiquity Blue", price: "₹3,999", description: "Ultra-premium blend with distinguished character" },
        { name: "Royal Challenge", price: "₹3,399", description: "Full bottle of our refined grain whisky" },
        { name: "Royal Green", price: "₹3,599", description: "Complete bottle for sharing with friends" },
        { name: "Oak Smith Gold", price: "₹3,899", description: "Japanese-inspired craft with delicate oak finish" },
        { name: "Old Monk", price: "₹2,799", description: "Full bottle of the iconic dark rum" },
        { name: "Magic Moments (Plain / Apple)", price: "₹3,199", description: "Party-sized premium vodka" },
        { name: "Smirnoff", price: "₹4,499", description: "Celebration-ready international vodka" },
      ],
    },
  ],
};

export const sideItems: MenuSection = {
  title: "SIDE ITEMS & REFRESHMENTS",
  categories: [
    {
      title: "Refresh & Rehydrate",
      icon: "💧",
      items: [
        { name: "Premium Packaged Water", price: "₹79", description: "Purified mineral water, ice-cold" },
        { name: "Fresh Lime Soda (Sweet/Salted)", price: "₹159", description: "Hand-squeezed lime with sparkling soda" },
        { name: "Iced Tea (Lemon/Peach)", price: "₹199", description: "Freshly brewed, served over crushed ice" },
      ],
    },
    {
      title: "Gourmet Bar Bites",
      icon: "🍿",
      items: [
        { name: "Veg Manchow Bowl", price: "₹289", description: "Hearty Indo-Chinese soup with crispy noodles" },
        { name: "Chicken Lollipop", price: "₹399", description: "Classic drumettes with spicy Schezwan glaze" },
        { name: "Crispy Corn Kernels", price: "₹269", description: "Flash-fried with garlic butter & herbs" },
      ],
    },
    {
      title: "Artisanal Rice & Grains",
      icon: "🍚",
      items: [
        { name: "Egg Dum Biryani", halfPrice: "₹239", fullPrice: "₹349", description: "Slow-cooked with boiled eggs & fragrant basmati" },
        { name: "Chicken Biryani", halfPrice: "₹339", fullPrice: "₹549", description: "Layered dum-style with saffron & caramelized onions" },
        { name: "Veg Pulao", price: "₹259", description: "Aromatic rice studded with seasonal vegetables" },
      ],
    },
  ],
};