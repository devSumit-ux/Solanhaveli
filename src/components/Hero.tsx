import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section ref={ref} id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/fGCFsx39/1000445289-Picsart-Ai-Image-Enhancer.png" 
          alt="Haveli Solan Ambience" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-amber-500 font-medium tracking-[0.3em] uppercase mb-6 text-sm md:text-base"
          >
            Welcome to
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-4 drop-shadow-2xl"
          >
            Haveli Solan
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl md:text-4xl text-amber-500 font-serif mb-8"
          >
            हवेली सोलन
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-stone-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the Authentic Taste of India in a Luxury Ambience
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a 
              href="#menu" 
              className="group relative px-8 py-4 bg-amber-600 text-white rounded-full font-medium tracking-wide overflow-hidden shadow-lg shadow-amber-900/30 transition-all hover:scale-105 hover:shadow-amber-600/40"
            >
              <span className="relative z-10">VIEW MENU</span>
              <div className="absolute inset-0 bg-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a 
              href="#order" 
              className="group px-8 py-4 border border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-stone-900 rounded-full font-medium tracking-wide transition-all hover:scale-105"
            >
              ORDER ONLINE
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
