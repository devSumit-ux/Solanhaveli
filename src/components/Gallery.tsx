import { motion } from 'motion/react';

const images = [
  {
    src: "https://i.ibb.co/KcRHdYRJ/1000445285-Picsart-Ai-Image-Enhancer.png",
    alt: "Haveli Ambience",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://i.ibb.co/Qv7Bnhk4/1000445281-Picsart-Ai-Image-Enhancer.png",
    alt: "Restaurant Interior",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    src: "https://i.ibb.co/N6s18bgy/1000445287-Picsart-Ai-Image-Enhancer.png",
    alt: "Fine Dining",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://i.ibb.co/4w9ncWHX/1000445283-Picsart-Ai-Image-Enhancer.png",
    alt: "Delicious Cuisine",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://i.ibb.co/qLYYyCv8/1000445293-Picsart-Ai-Image-Enhancer.png",
    alt: "Elegant Setting",
    span: "col-span-1 row-span-1"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-amber-500 font-medium tracking-widest uppercase mb-2">Atmosphere</h3>
          <h2 className="text-4xl font-serif font-bold text-white">Our Gallery</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg group ${img.span} cursor-pointer`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                <div className="w-12 h-1 bg-amber-500 mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                <span className="text-white font-serif text-2xl tracking-wide font-bold">{img.alt}</span>
                <p className="text-stone-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">Experience the ambience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
