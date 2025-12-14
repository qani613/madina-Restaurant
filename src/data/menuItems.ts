export interface MenuItem {
    id: number;
    name: string;
    price: string;
    desc: string;
    fullDesc: string;
    category: string;
    image: string;
    stats: {
        heat: string;
        time: string;
        chef: string;
    };
    popular: boolean;
}

export const CATEGORIES = [

    { id: 'mains', label: 'Mains' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'starters', label: 'Starters' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'sides', label: 'Sides' },
];

export const MENU_ITEMS: MenuItem[] = [
    // Entrées (Mapped to Mains)
    {
        id: 1,
        name: "King Fish",
        price: "16.99",
        desc: "Fresh King Fish steak, seasoned and grilled to perfection.",
        fullDesc: "Fresh King Fish steak, seasoned with our house spice blend and grilled to perfection. Served with your choice of Rice or Pasta.",
        category: "mains",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a3a2720?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Mild", time: "20m", chef: "Hassan" },
        popular: true
    },
    // Main
    {
        id: 2,
        name: "Beef Steak",
        price: "18.99",
        desc: "Tender beef steak grilled to your liking.",
        fullDesc: "Juicy beef steak, marinated in aromatic herbs and grilled to your preferred doneness. A hearty meal for meat lovers. Served with your choice of Rice or Pasta.",
        category: "mains",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Medium", time: "25m", chef: "Ayan" },
        popular: true
    },
    {
        id: 3,
        name: "Chicken Steak",
        price: "16.99",
        desc: "Grilled chicken steak with savory spices.",
        fullDesc: "Succulent chicken steak, marinated and grilled. A classic favorite served with fresh vegetables and your choice of Rice or Pasta.",
        category: "mains",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Mild", time: "20m", chef: "Hassan" },
        popular: false
    },
    {
        id: 4,
        name: "Breakfast With Liver",
        price: "14.49",
        desc: "Traditional breakfast served with sautéed liver.",
        fullDesc: "Start your day with our hearty breakfast platter featuring tender sautéed liver, fresh vegetables, and warm flatbread.",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Medium", time: "15m", chef: "Ayan" },
        popular: false
    },
    {
        id: 5,
        name: "Chicken Steak (Special)",
        price: "14.99",
        desc: "Grilled chicken steak special offer.",
        fullDesc: "Our delicious chicken steak at a special price. Perfectly grilled and seasoned. Served with your choice of Rice or Pasta.",
        category: "mains",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Mild", time: "20m", chef: "Hassan" },
        popular: false
    },
    {
        id: 6,
        name: "Breakfast With Liver (Large)",
        price: "16.89",
        desc: "Large portion of our traditional liver breakfast.",
        fullDesc: "A generous serving of our popular liver breakfast. Sautéed liver with onions, peppers, and spices.",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Medium", time: "15m", chef: "Ayan" },
        popular: false
    },
    // Drinks
    {
        id: 7,
        name: "Cafe Latte",
        price: "4.00",
        desc: "Rich espresso with steamed milk.",
        fullDesc: "Smooth and creamy cafe latte, made with freshly brewed espresso and steamed milk.",
        category: "drinks",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Hot", time: "5m", chef: "Barista" },
        popular: false
    },
    {
        id: 8,
        name: "Bottled Soda",
        price: "2.00",
        desc: "Chilled bottled soda of your choice.",
        fullDesc: "Refreshing bottled soda. Choose from a variety of flavors.",
        category: "drinks",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Cold", time: "0m", chef: "Server" },
        popular: false
    },
    // Sides
    {
        id: 9,
        name: "Beef Sambusa (2 Pieces)",
        price: "3.00",
        desc: "Crispy pastry triangles filled with spiced beef.",
        fullDesc: "Two pieces of our famous Beef Sambusa. Crispy, golden pastry filled with savory spiced ground beef and onions.",
        category: "sides",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Medium", time: "10m", chef: "Ayan" },
        popular: true
    },
    {
        id: 15,
        name: "Chicken Sambusa (2 Pieces)",
        price: "3.00",
        desc: "Crispy pastry triangles filled with spiced chicken.",
        fullDesc: "Two pieces of our delicious Chicken Sambusa. Golden pastry pockets stuffed with seasoned chicken and herbs.",
        category: "sides",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Mild", time: "10m", chef: "Ayan" },
        popular: true
    },
    {
        id: 16,
        name: "Vegetable Sambusa (2 Pieces)",
        price: "3.00",
        desc: "Crispy pastry triangles filled with mixed vegetables.",
        fullDesc: "Two pieces of our Vegetable Sambusa. A vegetarian delight filled with a spiced mix of potatoes, peas, and carrots.",
        category: "sides",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Mild", time: "10m", chef: "Ayan" },
        popular: false
    },
    {
        id: 17,
        name: "Fish Sambusa (2 Pieces)",
        price: "3.00",
        desc: "Crispy pastry triangles filled with spiced fish.",
        fullDesc: "Two pieces of our unique Fish Sambusa. Flaky pastry filled with seasoned fish, a coastal favorite.",
        category: "sides",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Medium", time: "10m", chef: "Ayan" },
        popular: false
    },
    {
        id: 18,
        name: "House Salad",
        price: "5.99",
        desc: "Fresh mix of garden greens and vegetables.",
        fullDesc: "A refreshing blend of crisp lettuce, tomatoes, cucumbers, and onions, tossed in our house vinaigrette.",
        category: "sides",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Cold", time: "5m", chef: "Ayan" },
        popular: false
    },
    {
        id: 19,
        name: "Somali-Style Fries",
        price: "4.99",
        desc: "Crispy fries seasoned with special spices.",
        fullDesc: "Golden crispy fries dusted with our signature spice blend. A perfect side to any meal.",
        category: "sides",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Mild", time: "10m", chef: "Ayan" },
        popular: true
    },
    // Food (Mains with descriptions)
    {
        id: 10,
        name: "Beef Suqaar",
        price: "16.99",
        desc: "Tender beef and fresh vegetables stew/stir-fry fusion.",
        fullDesc: "Accompanied by your choice of Rice or Pasta, tender beef and fresh vegetables come together in a delightful fusion of stew and stir-fry. Aromatic spices and herbs add an enticing twist, creating a cross-cultural culinary delight.",
        category: "mains",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Medium", time: "25m", chef: "Hassan" },
        popular: true
    },
    {
        id: 11,
        name: "Goat Plate/ Drink",
        price: "21.99",
        desc: "Traditional goat plate served with a drink.",
        fullDesc: "A complete meal featuring our tender goat meat, served with your choice of Rice or Pasta and a drink of your choice.",
        category: "mains",
        image: "https://images.unsplash.com/photo-1606850780554-b55ea2ce9855?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Medium", time: "30m", chef: "Ayan" },
        popular: false
    },
    {
        id: 12,
        name: "Lamb Shank",
        price: "21.99",
        desc: "Succulent lamb shank slow-cooked to perfection.",
        fullDesc: "Introducing our heavenly lamb shank - a succulent masterpiece that will take your taste buds on a captivating journey juicy and tender lamb shanks, slow-cooked to perfection, deliver an explosion of flavors in every delightful bite. Accompanied with your choice of Rice or Pasta, indulge in the irresistible aroma of fragrant herbs and spices, harmoniously infusing the lamb with a rich and satisfying taste.",
        category: "mains",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Medium", time: "45m", chef: "Hassan" },
        popular: true
    },
    {
        id: 13,
        name: "Chicken Suqaar",
        price: "15.99",
        desc: "Cubed chicken tossed with vegetables and rice.",
        fullDesc: "Succulent cubed chicken, expertly tossed with an assortment of fresh, vibrant vegetables and accompanied by your choice of Rice or Pasta. Brings you the perfect harmony of flavors in every delightful bite.",
        category: "mains",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Medium", time: "20m", chef: "Ayan" },
        popular: false
    },
    {
        id: 14,
        name: "Goat",
        price: "21.99",
        desc: "Tender goat meat slow-cooked in aromatic spices.",
        fullDesc: "Savor our tender and succulent goat meat, slow-cooked to perfection in a rich medley of aromatic spices and herbs. Each delectable bite bursts with a harmonious blend of flavors. Served with your choice of Rice or Pasta.",
        category: "mains",
        image: "https://images.unsplash.com/photo-1606850780554-b55ea2ce9855?q=80&w=1000&auto=format&fit=crop",
        stats: { heat: "Medium", time: "30m", chef: "Hassan" },
        popular: true
    }
];
