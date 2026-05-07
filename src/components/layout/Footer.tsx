import { Mail } from 'lucide-react';
import { InstagramIcon, TwitterIcon } from '../ui/Icons';

export const Footer = () => {
  return (
    <footer className="bg-background-primary pt-20 pb-10 border-t border-border-color">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-heading text-3xl font-bold tracking-wider text-text-primary block mb-6">
              OBSCURA
            </a>
            <p className="text-text-secondary font-light max-w-sm mb-8">
              A premium photography studio dedicated to capturing the most beautiful and emotional moments of your life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full border border-border-color text-text-secondary hover:text-accent-gold hover:border-accent-gold transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="p-2 rounded-full border border-border-color text-text-secondary hover:text-accent-gold hover:border-accent-gold transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="mailto:hello@obscurastudios.com" className="p-2 rounded-full border border-border-color text-text-secondary hover:text-accent-gold hover:border-accent-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#portfolio" className="text-text-secondary hover:text-accent-gold transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-text-secondary hover:text-accent-gold transition-colors">About</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-accent-gold transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-text-secondary hover:text-accent-gold transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-text-secondary font-light">
              <li>hello@obscurastudios.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Los Angeles, CA</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-color flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Obscura Studios. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
