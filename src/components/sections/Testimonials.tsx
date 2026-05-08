import React, { useState } from 'react';
import { FadeUp } from '../ui/FadeUp';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonial1 from '../../assets/testimonial-1.jpg';
import testimonial2 from '../../assets/testimonial-2.jpg';
import testimonial3 from '../../assets/testimonial-3.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "The photos captured the essence of our day perfectly. Every time we look at them, we are transported back to those incredible moments. Truly cinematic and breathtaking.",
    author: "Elena & Marcus",
    role: "Wedding Clients",
    image: testimonial1,
  },
  {
    id: 2,
    quote: "Working with this studio elevated our brand's visual identity completely. The attention to detail, lighting, and mood is unmatched in the industry.",
    author: "Sarah Jenkins",
    role: "Creative Director, Vogue",
    image: testimonial2,
  },
  {
    id: 3,
    quote: "An absolute masterclass in visual storytelling. The portraits they took for my personal branding are striking, moody, and deeply authentic.",
    author: "David Chen",
    role: "Entrepreneur",
    image: testimonial3,
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 bg-background-secondary relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <Quote size={48} className="mx-auto text-accent-gold/50 mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading">Kind Words</h2>
          </div>
        </FadeUp>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <p className="text-xl md:text-2xl font-heading text-text-primary leading-relaxed mb-10">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author}
                    className="w-14 h-14 rounded-full object-cover border border-border-color"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="text-left">
                    <h4 className="font-medium text-text-primary">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-text-secondary">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-border-color hover:border-accent-gold text-text-secondary hover:text-accent-gold transition-colors focus:outline-none"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-border-color hover:border-accent-gold text-text-secondary hover:text-accent-gold transition-colors focus:outline-none"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
