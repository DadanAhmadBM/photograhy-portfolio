import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '../ui/FadeUp';
import { Maximize2, X } from 'lucide-react';
import portfolio1 from '../../assets/portfolio-1.jpg';
import portfolio2 from '../../assets/portfolio-2.jpg';
import portfolio3 from '../../assets/portfolio-3.jpg';
import portfolio4 from '../../assets/portfolio-4.jpg';
import portfolio5 from '../../assets/portfolio-5.jpg';
import portfolio6 from '../../assets/portfolio-6.jpg';

const categories = ['All', 'Wedding', 'Portrait', 'Fashion', 'Travel', 'Event'];

const portfolioItems = [
  { id: 1, category: 'Wedding', src: portfolio1, title: 'Elegance in White' },
  { id: 2, category: 'Fashion', src: portfolio2, title: 'Editorial Chic' },
  { id: 3, category: 'Portrait', src: portfolio3, title: 'Shadows & Light' },
  { id: 4, category: 'Travel', src: portfolio4, title: 'Mountain Peaks' },
  { id: 5, category: 'Wedding', src: portfolio5, title: 'Golden Hour Vows' },
  { id: 6, category: 'Event', src: portfolio6, title: 'Symphony Lights' },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-background-primary relative">
      <div className="container mx-auto px-6">
        <FadeUp>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">Selected Works</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category 
                      ? 'bg-text-primary text-background-primary' 
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Masonry Grid Simulation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(item.src)}
              >
                <div className="aspect-[3/4] relative">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-background-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-accent-gold text-sm font-medium tracking-wider uppercase mb-2">{item.category}</span>
                    <h3 className="text-2xl font-heading text-text-primary">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background-primary/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-text-primary hover:text-accent-gold transition-colors focus:outline-none"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
