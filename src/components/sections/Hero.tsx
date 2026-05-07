import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import { FadeUp } from '../ui/FadeUp';
import { ChevronDown } from 'lucide-react';
import heroImage from '../../assets/hero-mountain.jpg';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background-primary/40 via-background-primary/20 to-background-primary z-10" />
        <img 
          src={heroImage} 
          alt="Cinematic Landscape" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center mt-20">
        <FadeUp delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-text-primary max-w-5xl mx-auto leading-tight mb-6">
            Capturing timeless moments through cinematic photography.
          </h1>
        </FadeUp>
        
        <FadeUp delay={0.4}>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 font-light">
            Award-winning creative studio crafting visual stories that evoke emotion and stand the test of time.
          </p>
        </FadeUp>

        <FadeUp delay={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">View Portfolio</Button>
          <Button size="lg" variant="outline">Book a Session</Button>
        </FadeUp>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-text-secondary">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-accent-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};
