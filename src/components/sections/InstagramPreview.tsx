import { FadeUp } from '../ui/FadeUp';
import { Button } from '../ui/Button';
import { InstagramIcon } from '../ui/Icons';
import insta1 from '../../assets/insta-1.jpg';
import insta2 from '../../assets/insta-2-new.jpg';
import insta3 from '../../assets/insta-3.jpg';
import insta4 from '../../assets/insta-4.jpg';

const posts = [
  insta1,
  insta2,
  insta3,
  insta4,
];

export const InstagramPreview = () => {
  return (
    <section className="py-24 bg-background-primary">
      <div className="container mx-auto px-6">
        <FadeUp>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-2">Follow the Journey</h2>
              <p className="text-text-secondary font-light">@obscurastudios on Instagram</p>
            </div>
            <Button variant="outline" className="gap-2">
              <InstagramIcon size={18} />
              Follow Us
            </Button>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((src, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <a href="#" className="block relative group aspect-square overflow-hidden rounded-xl">
                <img 
                  src={src} 
                  alt={`Instagram Post ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon size={32} className="text-white" />
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
