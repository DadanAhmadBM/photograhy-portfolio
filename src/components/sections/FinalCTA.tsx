import React from 'react';
import { FadeUp } from '../ui/FadeUp';
import { Button } from '../ui/Button';

export const FinalCTA = () => {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden bg-background-primary">
      {/* Deep Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-background-primary" />
      
      {/* Luxurious Glow Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Left Gold Glow */}
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[100%] bg-accent-gold/5 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* Center Spotlight */}
        <div className="absolute top-[10%] left-[20%] w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-soft-gold/10 via-transparent to-transparent blur-[80px]" />

        {/* Bottom Right Deep Glow */}
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[100%] bg-accent-gold/10 rounded-full blur-[150px] mix-blend-screen" />
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
