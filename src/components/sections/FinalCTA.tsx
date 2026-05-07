import React from 'react';
import { FadeUp } from '../ui/FadeUp';
import { Button } from '../ui/Button';

export const FinalCTA = () => {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-gold/10 via-background-primary to-background-primary">
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
