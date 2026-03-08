import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function OrderOnline() {
  return (
    <section id="order" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Animated background blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"
      />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-500">Hungry? Order Now</h2>
          <p className="text-stone-300 mb-12 text-xl max-w-2xl mx-auto font-light">
            Enjoy the authentic taste of Haveli Solan at home. We offer contactless delivery and takeaway services for your safety and convenience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.a 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            href="https://zomato.onelink.me/xqzv/92od5oxh" 
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white p-8 rounded-2xl hover:bg-red-600 hover:border-red-500 transition-all duration-300 flex flex-col items-center gap-6 shadow-xl"
          >
            <div className="w-20 h-20 bg-white text-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="font-bold text-3xl font-serif">Z</span>
            </div>
            <div>
              <span className="font-bold text-xl block mb-1">Zomato</span>
              <span className="text-sm text-stone-400 group-hover:text-red-100">Order Online</span>
            </div>
          </motion.a>

          <motion.a 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            href="https://www.swiggy.com/menu/714629?source=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white p-8 rounded-2xl hover:bg-orange-500 hover:border-orange-400 transition-all duration-300 flex flex-col items-center gap-6 shadow-xl"
          >
            <div className="w-20 h-20 bg-white text-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="font-bold text-3xl font-serif">S</span>
            </div>
            <div>
              <span className="font-bold text-xl block mb-1">Swiggy</span>
              <span className="text-sm text-stone-400 group-hover:text-orange-100">Order Online</span>
            </div>
          </motion.a>

          <motion.a 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            href="tel:+919872823930" 
            className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white p-8 rounded-2xl hover:bg-amber-600 hover:border-amber-500 transition-all duration-300 flex flex-col items-center gap-6 shadow-xl"
          >
            <div className="w-20 h-20 bg-white text-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <span className="font-bold text-xl block mb-1">Call Us</span>
              <span className="text-sm text-stone-400 group-hover:text-amber-100">+91 98728 23930</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
