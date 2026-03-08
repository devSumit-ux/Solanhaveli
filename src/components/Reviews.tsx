import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    text: "The best North Indian food in Solan! The ambience is truly royal and the service is impeccable. Highly recommend the Dal Makhani.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Priya Verma",
    rating: 4,
    text: "Great place for family dinners. The buffet spread is huge and very tasty. A bit crowded on weekends but worth the wait.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Amit Singh",
    rating: 5,
    text: "Authentic taste and luxury vibes. The staff is very courteous. Loved the Paneer Tikka and Lassi.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Suresh Kumar",
    rating: 5,
    text: "Visited Haveli Solan at Centre Prime Mall last night. The vibe is luxurious and the staff is very polite.",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Anjali Gupta",
    rating: 5,
    text: "If you are looking for authentic North Indian food in Himachal, this is the place. 5/5 stars.",
    date: "2 days ago"
  },
  {
    id: 6,
    name: "Vikram Malhotra",
    rating: 4,
    text: "The buffet is a steal deal. So many varieties and everything tastes fresh. Will visit again.",
    date: "3 weeks ago"
  },
  {
    id: 7,
    name: "Neha Kapoor",
    rating: 5,
    text: "Beautiful decor and comfortable seating. Perfect for birthday celebrations. The staff made it special.",
    date: "1 month ago"
  },
  {
    id: 8,
    name: "Rohan Das",
    rating: 5,
    text: "Fast service despite the rush. The Lassi is a must-try! Best restaurant in Solan.",
    date: "5 days ago"
  }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 relative min-w-[300px] md:min-w-[400px] mx-4 flex-shrink-0 h-full flex flex-col justify-between">
    <div>
      <Quote className="absolute top-4 right-4 text-amber-200 w-8 h-8" />
      <div className="flex text-amber-500 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} fill="currentColor" className="w-4 h-4" />
        ))}
      </div>
      <p className="text-stone-600 mb-4 italic text-sm md:text-base">"{review.text}"</p>
    </div>
    <div className="flex items-center justify-between border-t border-stone-100 pt-4 mt-auto">
      <span className="font-bold text-stone-900 text-sm">{review.name}</span>
      <span className="text-xs text-stone-400">{review.date}</span>
    </div>
  </div>
);

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h3 className="text-amber-600 font-medium tracking-widest uppercase mb-2">Testimonials</h3>
          <h2 className="text-4xl font-serif font-bold text-stone-900">What Our Guests Say</h2>
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="text-2xl font-bold text-stone-900">4.1</span>
            <div className="flex text-amber-500">
              {[1, 2, 3, 4].map((i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
              <Star className="w-5 h-5" fill="currentColor" fillOpacity={0.3} />
            </div>
            <span className="text-stone-500 text-sm">(Based on Google Reviews)</span>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee Container */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-amber-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-amber-50 to-transparent z-10"></div>
        
        <div className="flex overflow-hidden py-4">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {/* Duplicate reviews to create seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
