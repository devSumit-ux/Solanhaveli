import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-4">Visit Us</h3>
            <h2 className="text-5xl font-serif font-bold text-stone-900 mb-10">Contact Information</h2>
            
            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 group p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all"
              >
                <div className="bg-amber-100 p-4 rounded-full text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-xl mb-2">Location</h4>
                  <p className="text-stone-600 text-lg leading-relaxed">Centre Prime Mall, Solan,<br />Himachal Pradesh 173213</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 group p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all"
              >
                <div className="bg-amber-100 p-4 rounded-full text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-xl mb-2">Phone</h4>
                  <p className="text-stone-600 text-lg font-medium">+91 98728 23930</p>
                  <p className="text-stone-500 text-sm mt-1">Available for booking & orders</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 group p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all"
              >
                <div className="bg-amber-100 p-4 rounded-full text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-xl mb-2">Opening Hours</h4>
                  <p className="text-stone-600 text-lg">Monday - Sunday</p>
                  <p className="text-stone-600 font-medium">11:00 AM – 11:30 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[500px] bg-stone-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Haveli%20Solan%2C%20Centre%20Prime%20Mall%2C%20Solan&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Haveli Solan Location"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
