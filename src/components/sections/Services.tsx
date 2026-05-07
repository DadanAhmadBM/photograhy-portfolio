import React from 'react';
import { FadeUp } from '../ui/FadeUp';
import { Camera, Video, Sparkles, Image as ImageIcon } from 'lucide-react';

const services = [
  {
    icon: <Camera size={32} />,
    title: 'Wedding Photography',
    description: 'Cinematic documentation of your special day, capturing raw emotions and elegant details.',
  },
  {
    icon: <ImageIcon size={32} />,
    title: 'Fashion & Editorial',
    description: 'High-end stylized shoots with dramatic lighting for brands and individual portfolios.',
  },
  {
    icon: <Video size={32} />,
    title: 'Event Coverage',
    description: 'Discreet, documentary-style photography for corporate and private luxury events.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Personal Branding',
    description: 'Elevated portraits that communicate your professional identity and unique aura.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-background-primary relative">
      <div className="container mx-auto px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">Expertise</h2>
            <p className="text-text-secondary font-light">
              Tailored visual solutions crafted with a meticulous eye for detail and a passion for storytelling.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FadeUp key={index} delay={index * 0.1} className="h-full">
              <div className="group relative p-10 rounded-3xl bg-card-surface border border-border-color hover:border-accent-gold/50 transition-colors duration-500 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-accent-soft-gold mb-8 w-fit origin-left group-hover:scale-110 group-hover:text-accent-gold transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-normal mb-4 text-text-primary">{service.title}</h3>
                  <p className="text-text-secondary font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
