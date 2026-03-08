import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-amber-500/50 hidden md:block transition-all duration-500 group-hover:-top-4 group-hover:-left-4"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://i.ibb.co/Qv7Bnhk4/1000445281-Picsart-Ai-Image-Enhancer.png" 
                alt="Haveli Solan Interior" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-amber-500/50 hidden md:block transition-all duration-500 group-hover:-bottom-4 group-hover:-right-4"></div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-amber-100 hidden md:block"
            >
              <div className="text-center">
                <span className="block text-4xl font-bold text-amber-600 font-serif">10+</span>
                <span className="text-sm text-stone-500 font-medium uppercase tracking-wider">Years of<br/>Excellence</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-4">Our Story</h3>
            <h2 className="text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Traditional Flavors,<br />
              <span className="text-amber-600">Modern Luxury</span>
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              Located in the heart of Solan at Centre Prime Mall, Haveli Solan brings you the rich heritage of Indian cuisine. 
              We believe in preserving the authenticity of traditional recipes while serving them in a modern, luxurious setting.
            </p>
            <p className="text-stone-600 mb-10 leading-relaxed text-lg">
              Our chefs use age-old techniques and the finest spices to create dishes that tell a story. From our signature Dal Makhani 
              to our aromatic Biryanis, every bite is a journey through the culinary landscape of India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                "Authentic North Indian Cuisine",
                "Luxury Dining Ambience",
                "Buffet Specials",
                "Hygienic & Fresh Ingredients"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="flex items-center gap-3 group"
                >
                  <div className="bg-amber-100 p-1 rounded-full group-hover:bg-amber-600 transition-colors duration-300">
                    <CheckCircle className="text-amber-600 h-5 w-5 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-stone-700 font-medium group-hover:text-amber-700 transition-colors duration-300">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <span className="block text-4xl font-bold text-amber-600">4.1</span>
                <div className="flex flex-col">
                  <span className="font-bold text-stone-900">Star Rating</span>
                  <span className="text-xs text-stone-500">on Google Reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
