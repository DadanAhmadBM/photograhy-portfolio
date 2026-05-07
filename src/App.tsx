import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Portfolio } from './components/sections/Portfolio';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { InstagramPreview } from './components/sections/InstagramPreview';
import { FinalCTA } from './components/sections/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary selection:bg-accent-gold/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Testimonials />
        <InstagramPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
