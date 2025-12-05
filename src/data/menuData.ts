export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  halfPrice?: string;
  fullPrice?: string;
  sizes?: string[];
  available?: boolean; // Track if item is available (default: true)
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
        { name: "Fried Peanuts", price: "₹149", description: "Crispy salted peanuts roasted to golden perfection" },
        { name: "Fried Papad", price: "₹99", description: "Traditional crispy lentil wafers, lightly spiced" },
        { name: "Masala Papad", price: "₹129", description: "Topped with fresh onions, tomatoes & tangy chaat masala" },
        { name: "Veg Pakoda", price: "₹199", description: "Assorted vegetables in chickpea batter, golden fried" },
        { name: "Veg Crispie", price: "₹189", description: "Crunchy vegetable fritters with house-made green chutney" },
        { name: "Paneer Pakoda", price: "₹249", description: "Cottage cheese cubes in spiced gram flour coating" },
        { name: "Veg Cutlet", price: "₹199", description: "Hand-pressed mixed vegetable patties, herb-crusted" },
        { name: "Cheese Pakoda", price: "₹269", description: "Melting cheese encased in crispy golden batter" },
        { name: "Cheese Balls", price: "₹259", description: "Creamy cheese spheres with a crunchy breadcrumb shell" },
        { name: "French Fries", price: "₹179", description: "Hand-cut potatoes, twice-fried for extra crispiness" },
        { name: "Corn Crisipie", price: "₹189", description: "Sweet corn kernels flash-fried with aromatic spices" },
        { name: "Matki Fry", price: "₹169", description: "Sprouted moth beans sautéed with fresh herbs" },
        { name: "Vajri Fry", price: "₹179", description: "Crispy lotus stem chips with signature seasoning" },
      ],
    },
    {
      title: "NON-VEG",
      items: [
        { name: "Fried Chicken", price: "₹269", description: "Succulent pieces marinated overnight, deep-fried crispy" },
        { name: "Chicken Lollypop", price: "₹299", description: "Frenched drumettes in spicy Indo-Chinese glaze" },
        { name: "Veg Crispie", price: "₹189", description: "Garden fresh vegetables in light tempura batter" },
        { name: "Chicken Cutlet", price: "₹279", description: "Minced chicken patties with caramelized onions" },
        { name: "Tandoori Chicken (Full)", price: "₹499", description: "Whole bird marinated in yogurt & 24 spices, clay-oven roasted" },
        { name: "Tandoori Chicken (Half)", price: "₹269", description: "Half portion of our signature clay-oven specialty" },
        { name: "Chicken Tikka", price: "₹329", description: "Boneless chunks in saffron-kissed tikka marinade" },
        { name: "Chicken Kabab", price: "₹319", description: "Hand-ground seekh kababs with fresh mint" },
        { name: "Chicken Chatpata", price: "₹289", description: "Tangy spiced chicken bites with tamarind drizzle" },
        { name: "Chicken Rara", price: "₹299", description: "Keema-coated chicken in rich tomato gravy" },
        { name: "Chicken Khara", price: "₹289", description: "Dry-rubbed with crushed peppercorns & whole spices" },
        { name: "Chicken Tawa", price: "₹319", description: "Griddle-seared with bell peppers & onions" },
        { name: "Paneer 65", price: "₹279", description: "Cottage cheese in fiery Hyderabadi-style batter" },
        { name: "Paneer & Chillie", price: "₹289", description: "Wok-tossed with fresh chilies & soy glaze" },
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
        { name: "Chicken Kolhapuri Firepot", price: "₹449", description: "Intensely spiced with dried red chilies & coconut" },
        { name: "Solapuri Chicken Handi", halfPrice: "₹499", fullPrice: "₹899", description: "Rustic preparation with black stone flower & wild spices" },
        { name: "Slow-Cooked Butter Chicken Handi", halfPrice: "₹549", fullPrice: "₹949", description: "Velvety tomato-cream gravy with charred chicken" },
        { name: "Royal Murgh Musallam Handi", halfPrice: "₹599", fullPrice: "₹999", description: "Whole chicken stuffed with aromatic rice & eggs" },
      ],
    },
    {
      title: "Slow-Cooked Mutton Specialities",
      icon: "🍖",
      items: [
        { name: "Mutton Ukkad Handi", halfPrice: "₹749", fullPrice: "₹1,299", description: "Traditional bone-in curry simmered for 6 hours" },
        { name: "Solapuri Mutton Handi", halfPrice: "₹799", fullPrice: "₹1,349", description: "Authentic Solapur-style with kala masala" },
        { name: "Kolhapuri Mutton Handi", halfPrice: "₹799", fullPrice: "₹1,349", description: "Fiery red gravy with freshly ground masala" },
        { name: "Rustic Mutton Curry", price: "₹429", description: "Home-style preparation with caramelized onions" },
        { name: "Signature Mutton Masala", price: "₹459", description: "Chef's special blend of 18 hand-roasted spices" },
      ],
    },
    {
      title: "The Live Thali Experience",
      icon: "🍽️",
      items: [
        { name: "Luxe Veg Thali", price: "₹279", description: "Seasonal vegetables, signature gravy, dal fry, rice, salad, papad & assorted breads" },
        { name: "Egg Thali", price: "₹319", description: "Masala egg preparation, rassa, dal, rice, salad & assorted breads" },
        { name: "Classic Chicken Thali", price: "₹389", description: "Chicken fry, rassa, soup, rice, salad & assorted breads" },
        { name: "Royal Mutton Thali", price: "₹549", description: "Mutton fry, Solapuri rassa, soup, wajdi, rice, salad & assorted breads" },
      ],
    },
    {
      title: "Vegetarian Chef's Mains",
      icon: "🥗",
      items: [
        { name: "Paneer Patiyala Royal", price: "₹379", description: "Creamy cottage cheese in rich cashew-tomato gravy" },
        { name: "Paneer Handi Signature", price: "₹369", description: "Slow-cooked in earthen pot with whole spices" },
        { name: "Paneer Tikka Masala / Lajawab Masala", price: "₹379", description: "Charred paneer cubes in smoky tomato sauce" },
        { name: "Classic Paneer Butter Masala", price: "₹389", description: "Silky makhani gravy with farm-fresh paneer" },
        { name: "Paneer Kadai Karari", price: "₹369", description: "Bell peppers & cottage cheese with kadai spices" },
        { name: "Diwani Paneer Handi", price: "₹399", description: "Mixed vegetables & paneer in aromatic curry" },
        { name: "Homestyle Paneer Masala", price: "₹349", description: "Simple, comforting preparation with onion-tomato base" },
        { name: "Paneer Bhurji Scramble", price: "₹339", description: "Crumbled cottage cheese with peppers & fresh herbs" },
        { name: "Kaju Rich Masala", price: "₹419", description: "Premium cashews in velvety saffron cream" },
        { name: "Kaju Cream Curry", price: "₹419", description: "Whole cashews swimming in delicate white gravy" },
        { name: "Veg Patiyala", price: "₹339", description: "Garden vegetables in royal Punjabi-style sauce" },
        { name: "Veg Kolhapuri Pot", price: "₹339", description: "Seasonal vegetables in spicy Kolhapuri masala" },
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
        { name: "Kingfisher Premium (650 ml)", price: "₹289", description: "India's favorite crisp, refreshing lager" },
        { name: "Budweiser Mild (650 ml)", price: "₹319", description: "Smooth American-style pale lager" },
        { name: "Budweiser Magnum Strong (650 ml)", price: "₹349", description: "Bold & full-bodied with rich malt character" },
        { name: "Tuborg Strong (650 ml)", price: "₹279", description: "Danish heritage with robust flavor profile" },
        { name: "Carlsberg Smooth (650 ml)", price: "₹299", description: "Exceptionally smooth Scandinavian brew" },
        { name: "Heineken (650 ml)", price: "₹329", description: "Iconic Dutch pilsner with balanced bitterness" },
        { name: "Breezer Cranberry (275 ml)", price: "₹269", description: "Light & fruity with tart cranberry notes" },
        { name: "Breezer Blackberry (275 ml)", price: "₹269", description: "Sweet berry refreshment, perfectly chilled" },
      ],
    },
    {
      title: "Crystal Clear Vodkas",
      icon: "🍸",
      items: [
        { name: "Magic Moments (Plain)", sizes: ["₹120", "₹200", "₹300", "₹600"], description: "Triple-distilled smoothness with clean finish" },
        { name: "Magic Moments Apple / Orange", sizes: ["₹120", "₹200", "₹300", "₹600"], description: "Fruit-infused with natural flavor essences" },
        { name: "Romanov Vodka (Plain / Apple)", sizes: ["₹110", "₹200", "₹280", "₹560"], description: "Classic Russian-style with subtle sweetness" },
        { name: "Smirnoff", sizes: ["₹150", "₹290", "₹420", "₹840"], description: "World-renowned purity, filtered ten times" },
      ],
    },
    {
      title: "Aged & Spiced Rums",
      icon: "🥃",
      items: [
        { name: "Old Monk", sizes: ["₹80", "₹150", "₹220", "₹375"], description: "Legendary 7-year aged dark rum with vanilla notes" },
        { name: "Bacardi White", sizes: ["₹199", "₹379", "₹549", "₹999"], description: "Light & crisp, perfect for cocktails" },
        { name: "Bacardi Black", sizes: ["₹209", "₹399", "₹569", "₹1,049"], description: "Rich molasses flavor with oak undertones" },
        { name: "Bacardi Lemon", sizes: ["₹219", "₹419", "₹599", "₹1,099"], description: "Zesty citrus twist on classic rum" },
        { name: "McDowell's Rum", sizes: ["₹149", "₹279", "₹399", "₹749"], description: "Smooth Caribbean-inspired blend" },
      ],
    },
    {
      title: "Indian Reserve Whiskies",
      icon: "🥃",
      items: [
        { name: "Imperial Blue", sizes: ["₹100", "₹190", "₹280"], description: "Smooth blend with hints of oak & spice" },
        { name: "Royal Challenge", sizes: ["₹189", "₹349", "₹499", "₹899"], description: "Premium grain whisky with mellow character" },
        { name: "Royal Green", sizes: ["₹199", "₹369", "₹529", "₹949"], description: "Distinctively smooth with herbal notes" },
      ],
    },
    {
      title: "Scotch & Blended Whiskies",
      icon: "🥃",
      items: [
        // Entry Premium
        { name: "Johnnie Walker Red Label", sizes: ["₹140", "₹280", "₹420", "₹840"], description: "Vibrant & spicy with a hint of smoke" },
        { name: "Ballantine's Finest", sizes: ["₹140", "₹280", "₹420", "₹840"], description: "Soft, sweet & complex with vanilla notes" },
        { name: "Dewar's White Label", sizes: ["₹140", "₹280", "₹420", "₹840"], description: "Honeyed heather and floral notes" },
        { name: "Bushmills Original", sizes: ["₹140", "₹280", "₹420", "₹840"], description: "Grain whiskey matured in American oak" },
        { name: "Vat 69", sizes: ["₹145", "₹290", "₹435", "₹870"], description: "Famous blend with a sweet & rounded finish" },
        { name: "Jim Beam White", sizes: ["₹160", "₹320", "₹480", "₹960"], description: "Classic Kentucky Straight Bourbon" },
        { name: "100 Pipers", sizes: ["₹160", "₹320", "₹480", "₹960"], description: "Smooth blend with woody & fruity notes" },
        { name: "Black & White", sizes: ["₹165", "₹330", "₹495", "₹990"], description: "Smooth light blend with citrus checks" },
        { name: "Teacher's Highland Cream", sizes: ["₹165", "₹330", "₹495", "₹990"], description: "High malt content with peaty depth" },
        { name: "Black Dog Centenary", sizes: ["₹165", "₹330", "₹495", "₹990"], description: "Aged 8 years, rich & rounded" },

        // Mid Range
        { name: "Teacher's 50", sizes: ["₹190", "₹380", "₹570", "₹1,140"], description: "Golden blend commemorating 50 years of independence" },
        { name: "Black Dog Scotch Reserve", sizes: ["₹195", "₹390", "₹585", "₹1,170"], description: "Triple Gold Reserve, luxurious & smooth" },
        { name: "Jack Daniel's Old No.7", sizes: ["₹220", "₹440", "₹660", "₹1,320"], description: "Tennessee sour mash charcoal mellowed" },
        { name: "Chivas Regal 12 YO", sizes: ["₹240", "₹480", "₹720", "₹1,440"], description: "Rich & generous blend with honey & hazelnut" },
        { name: "Johnnie Walker Black Label", sizes: ["₹240", "₹480", "₹720", "₹1,440"], description: "Iconic blend of 12+ year whiskies, smoky & smooth" },
        { name: "Monkey Shoulder", sizes: ["₹250", "₹500", "₹750", "₹1,500"], description: "Blended malt scotch, creamy & supple" },

        // Top Shelf
        { name: "Jameson Irish Whiskey", sizes: ["₹300", "₹600", "₹900", "₹1,800"], description: "Triple distilled, twice as smooth" },
        { name: "Johnnie Walker Double Black", sizes: ["₹310", "₹620", "₹930", "₹1,860"], description: "Intense, deep & smoky character" },
        { name: "Talisker 10 YO", sizes: ["₹360", "₹720", "₹1,080", "₹2,160"], description: "Single malt from Isle of Skye, sea-salt & peat" },
        { name: "The Glenlivet 12 YO", sizes: ["₹375", "₹750", "₹1,125", "₹2,250"], description: "Definitive Speyside single malt, delicate & fruity" },
        { name: "Glenfiddich 12 YO", sizes: ["₹380", "₹760", "₹1,140", "₹2,280"], description: "World's most awarded single malt, pear & oak notes" },
      ],
    },
    {
      title: "Tequila Shots",
      icon: "🌵",
      items: [
        { name: "Don Angel Blanco", sizes: ["₹229", "₹429"], description: "Crisp & fresh classic tequila" },
        { name: "Camino Real Gold", sizes: ["₹249", "₹449"], description: "Golden amber with gentle oak notes" },
        { name: "Sauza Silver", sizes: ["₹279", "₹499"], description: "Double distilled for extra smoothness" },
        { name: "Jose Cuervo Silver", sizes: ["₹299", "₹549"], description: "Clean, crisp with agave notes" },
        { name: "Jose Cuervo Gold / Reposado", sizes: ["₹319", "₹599"], description: "Aged in oak, smooth vanilla finish" },
        { name: "Corralejo Blanco", sizes: ["₹399", "₹749"], description: "Premium 100% blue agave" },
      ],
    },
    {
      title: "Liqueurs & Shooters",
      icon: "🍹",
      items: [
        { name: "Blue Curacao / Triple Sec", price: "₹199", description: "Vibrant citrus-flavored liqueur" },
        { name: "Kahlúa Coffee Liqueur", price: "₹299", description: "Rich roast coffee & sugarcane spirit" },
        { name: "Sambuca Molinari", price: "₹329", description: "Classic Italian anise-flavored shooter" },
        { name: "Baileys Irish Cream", price: "₹349", description: "Decadent cream, cocoa & irish whiskey blend" },
        { name: "Jägermeister", price: "₹399", description: "Served ice cold (-18°C), herbal digestif" },
        { name: "Cointreau", price: "₹379", description: "Premium crystal clear orange liqueur" },
        { name: "Kamikaze Shot", price: "₹299", description: "Vodka, fresh lime & triple sec" },
        { name: "B-52 Layered Shooter", price: "₹449", description: "Kahlúa, Baileys & Cointreau layered perfection" },
      ],
    },
    {
      title: "Celebration Bottles (750 ml)",
      icon: "🍾",
      items: [
        { name: "Blender's Pride", price: "₹3,199", description: "Rare malt whisky for special occasions" },
        { name: "Antiquity Blue", price: "₹3,399", description: "Ultra-premium blend with distinguished character" },
        { name: "Royal Challenge", price: "₹2,799", description: "Full bottle of our refined grain whisky" },
        { name: "Royal Green", price: "₹2,999", description: "Complete bottle for sharing with friends" },
        { name: "Oak Smith Gold", price: "₹3,299", description: "Japanese-inspired craft with delicate oak finish" },
        { name: "Old Monk", price: "₹2,299", description: "Full bottle of the iconic dark rum" },
        { name: "Magic Moments (Plain / Apple)", price: "₹2,599", description: "Party-sized premium vodka" },
        { name: "Smirnoff", price: "₹3,699", description: "Celebration-ready international vodka" },
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
        { name: "Premium Packaged Water", price: "₹49", description: "Purified mineral water, ice-cold" },
        { name: "Fresh Lime Soda (Sweet/Salted)", price: "₹129", description: "Hand-squeezed lime with sparkling soda" },
        { name: "Iced Tea (Lemon/Peach)", price: "₹159", description: "Freshly brewed, served over crushed ice" },
      ],
    },
    {
      title: "Gourmet Bar Bites",
      icon: "🍿",
      items: [
        { name: "Veg Manchow Bowl", price: "₹229", description: "Hearty Indo-Chinese soup with crispy noodles" },
        { name: "Chicken Lollipop", price: "₹319", description: "Classic drumettes with spicy Schezwan glaze" },
        { name: "Crispy Corn Kernels", price: "₹219", description: "Flash-fried with garlic butter & herbs" },
      ],
    },
    {
      title: "Artisanal Rice & Grains",
      icon: "🍚",
      items: [
        { name: "Egg Dum Biryani", halfPrice: "₹199", fullPrice: "₹299", description: "Slow-cooked with boiled eggs & fragrant basmati" },
        { name: "Chicken Biryani", halfPrice: "₹279", fullPrice: "₹449", description: "Layered dum-style with saffron & caramelized onions" },
        { name: "Veg Pulao", price: "₹219", description: "Aromatic rice studded with seasonal vegetables" },
      ],
    },
  ],
};