import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  "All",
  "North Indian",
  "Buffet Special",
  "Paneer Dishes",
  "Dal & Curries",
  "Beverages"
];

const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka Masala",
    category: "Paneer Dishes",
    price: "₹499",
    description: "Grilled cottage cheese cubes in a spicy tomato-based gravy.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Dal Makhani",
    category: "Dal & Curries",
    price: "₹419",
    description: "Black lentils cooked overnight with butter and cream.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Butter Chicken",
    category: "North Indian",
    price: "₹599 / ₹899",
    description: "Tender chicken in a rich, creamy tomato sauce.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Special Buffet",
    category: "Buffet Special",
    price: "₹699",
    description: "Unlimited spread of starters, main course, and desserts.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Mango Lassi",
    category: "Beverages",
    price: "₹120",
    description: "Refreshing yogurt drink blended with sweet mango pulp.",
    image: "https://i.ibb.co/mjZ1697/1000445310-Picsart-Ai-Image-Enhancer-webp.png"
  },
  {
    id: 6,
    name: "Kadai Paneer",
    category: "Paneer Dishes",
    price: "₹499",
    description: "Cottage cheese cooked with bell peppers and fresh spices.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Masala Chai",
    category: "Beverages",
    price: "₹60",
    description: "Traditional Indian spiced tea.",
    image: "https://i.ibb.co/KpDy31t2/1000445319-Picsart-Ai-Image-Enhancer-webp.png"
  },
  {
    id: 8,
    name: "Rogan Josh",
    category: "North Indian",
    price: "₹420",
    description: "Aromatic lamb dish of Persian origin, a Kashmiri staple.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-amber-600 font-medium tracking-widest uppercase mb-2">Discover</h3>
          <h2 className="text-4xl font-serif font-bold text-stone-900">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={item.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-stone-100 hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-sm">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-stone-900 font-serif group-hover:text-amber-600 transition-colors">{item.name}</h3>
                    <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm mb-6 line-clamp-2">{item.description}</p>
                  <button className="w-full py-3 border border-amber-600 text-amber-600 rounded-xl hover:bg-amber-600 hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-wide shadow-sm hover:shadow-amber-200">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-block border-b-2 border-amber-600 text-stone-900 font-medium hover:text-amber-600 transition-colors pb-1">
            View Full Menu PDF
          </a>
        </div>
      </div>
    </section>
  );
}
