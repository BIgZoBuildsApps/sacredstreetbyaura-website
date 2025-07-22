import { useState, useEffect } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo1 from '../assets/sacred_street_logo_concept_1.png';
import logo2 from '../assets/sacred_street_logo_concept_2.png';
import logo3 from '../assets/sacred_street_logo_concept_3.png';

const Hero = () => {
  const [currentLogo, setCurrentLogo] = useState(0);
  const logos = [logo1, logo2, logo3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('collections');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 sacred-gradient opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--sacrificial-red)] rounded-full opacity-10 animate-sacred-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[var(--divine-gold)] rounded-full opacity-10 animate-sacred-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-5 animate-sacred-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 lg:w-48 lg:h-48">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Sacred Street Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                  index === currentLogo ? 'opacity-100' : 'opacity-0'
                } animate-sacred-glow`}
              />
            ))}
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-white">SACRED</span>
          <span className="block sacred-text-gradient">STREET</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 font-light">
          WHERE SACRED MEETS STREET
        </p>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Theological warfare in cotton and code. Premium streetwear that challenges conventions 
          and sparks discourse through provocative design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-[var(--sacrificial-red)] hover:bg-[var(--sacrificial-red)]/80 text-white px-8 py-4 text-lg font-semibold sacred-hover uppercase tracking-wider"
          >
            EXPLORE COLLECTIONS
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-[var(--divine-gold)] text-[var(--divine-gold)] hover:bg-[var(--divine-gold)] hover:text-black px-8 py-4 text-lg font-semibold sacred-hover uppercase tracking-wider"
          >
            <Play className="mr-2 h-5 w-5" />
            WATCH MANIFESTO
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="text-white/70 hover:text-[var(--divine-gold)] transition-colors duration-300 animate-bounce"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Quote overlay */}
      <div className="absolute bottom-20 left-8 right-8 text-center">
        <blockquote className="text-white/60 text-sm sm:text-base italic font-light">
          "Repent? Nah. Rebuild."
        </blockquote>
      </div>
    </section>
  );
};

export default Hero;

