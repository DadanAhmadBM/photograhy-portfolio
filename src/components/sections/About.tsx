import { useEffect, useRef } from 'react';
import { FadeUp } from '../ui/FadeUp';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import aboutImage from '../../assets/about-portrait-valid.jpg';

const AnimatedCounter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    duration: 2500,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => Math.round(current) + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

export const About = () => {
  return (
    <section id="about" className="py-32 bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center justify-center">
          
          <div className="w-full lg:w-1/2 relative">
            <FadeUp delay={0.2}>
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto lg:mr-0 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutImage} 
                  alt="Photographer Portrait" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-border-color rounded-2xl" />
              </div>
            </FadeUp>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-accent-gold/20 rounded-full blur-2xl z-0" />
          </div>

          <div className="w-full lg:w-1/2">
            <FadeUp delay={0.3}>
              <span className="text-accent-gold text-sm tracking-widest uppercase mb-4 block">The Artist</span>
              <h2 className="text-4xl md:text-5xl font-heading mb-8">Crafting light and shadow into timeless narratives.</h2>
              <div className="space-y-6 text-text-secondary font-light">
                <p>
                  With over a decade of experience behind the lens, my philosophy is simple: capture the authentic, the raw, and the beautifully imperfect moments that tell a story.
                </p>
                <p>
                  I believe that every frame should evoke an emotion, transporting you back to that exact second in time. My approach blends editorial precision with a documentary style, ensuring your memories are preserved with an artistic, cinematic touch.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.5} className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border-color">
              <div>
                <div className="text-4xl font-heading text-text-primary mb-2"><AnimatedCounter value={12} suffix="+" /></div>
                <div className="text-xs uppercase tracking-wider text-text-secondary">Years Exp.</div>
              </div>
              <div>
                <div className="text-4xl font-heading text-text-primary mb-2"><AnimatedCounter value={400} suffix="+" /></div>
                <div className="text-xs uppercase tracking-wider text-text-secondary">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-heading text-text-primary mb-2"><AnimatedCounter value={15} /></div>
                <div className="text-xs uppercase tracking-wider text-text-secondary">Awards Won</div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
};
