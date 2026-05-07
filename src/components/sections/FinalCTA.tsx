import React from 'react';
import { FadeUp } from '../ui/FadeUp';
import { Button } from '../ui/Button';

export const FinalCTA = () => {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background-primary/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" 
          alt="CTA Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <FadeUp>
          <span className="text-accent-gold text-sm tracking-widest uppercase mb-6 block">Ready to start?</span>
          <h2 className="text-5xl md:text-7xl font-heading text-text-primary mb-10 max-w-4xl mx-auto">
            Let’s create unforgettable visuals together.
          </h2>
          <Button size="lg" className="px-12">
            Inquire Now
          </Button>
        </FadeUp>
      </div>
    </section>
  );
};
