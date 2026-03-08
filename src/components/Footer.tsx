import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://i.ibb.co/mr59n32c/1000445325-Picsart-Ai-Image-Enhancer.png" 
              alt="Maharaja Haveli" 
              className="h-20 w-auto mb-6 opacity-90 -ml-2"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/200x80/transparent/red?text=MAHARAJA+HAVELI";
              }}
            />
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Experience the authentic taste of India in a luxury ambience. 
              We serve the best North Indian cuisine in Solan.
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5, color: '#d4af37' }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/havelisolan/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-stone-900 p-3 rounded-full hover:bg-stone-800 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: -5, color: '#d4af37' }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/haveli_solan/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-stone-900 p-3 rounded-full hover:bg-stone-800 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'Menu', 'Gallery', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`} 
                    className="hover:text-amber-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{item === 'Home' ? 'Home' : item === 'Contact Us' ? 'Contact' : item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h3>
            <p className="text-sm mb-6">Subscribe for latest updates and offers.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors shadow-lg shadow-amber-900/20"
              >
                Join
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-stone-900 pt-8 text-center text-xs text-stone-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Haveli Solan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
