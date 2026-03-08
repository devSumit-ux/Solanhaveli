import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-stone-900/95 backdrop-blur-md border-b border-amber-500/20 py-2 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2">
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <img 
                src="https://i.ibb.co/mr59n32c/1000445325-Picsart-Ai-Image-Enhancer.png" 
                alt="Maharaja Haveli" 
                className="h-12 md:h-16 w-auto object-contain -ml-2"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/200x80/transparent/red?text=MAHARAJA+HAVELI";
                }}
              />
            </motion.a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative group transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider ${
                    isScrolled 
                      ? 'text-stone-100 hover:text-amber-500' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${isScrolled ? 'bg-amber-500' : 'bg-white'}`}></span>
                </a>
              ))}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#order" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-amber-900/20"
              >
                Order Online
              </motion.a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-stone-400 hover:text-amber-500' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-900 border-b border-amber-500/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-stone-300 hover:text-amber-500 block px-3 py-3 rounded-md text-base font-medium border-b border-stone-800 last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                href="#order"
                onClick={() => setIsOpen(false)}
                className="bg-amber-600 text-white block px-3 py-3 rounded-md text-base font-medium mt-4 text-center mx-3 shadow-lg"
              >
                Order Online
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
