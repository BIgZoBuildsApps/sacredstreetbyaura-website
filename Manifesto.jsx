import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const Manifesto = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
      text: "Repent? Nah. Rebuild.",
      author: "Sacred Street Manifesto"
    },
    {
      text: "Faith without fear is fashion without purpose.",
      author: "The Sacred Street Code"
    },
    {
      text: "We don't follow trends. We start revolutions.",
      author: "Sacred Street Philosophy"
    },
    {
      text: "Where sacred meets street, legends are born.",
      author: "Sacred Street Vision"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="manifesto" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 sacred-gradient opacity-95"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/5 rounded-full animate-sacred-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 20}px`,
                height: `${Math.random() * 100 + 20}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Manifesto Text */}
          <div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold mb-8 text-white">
              OUR <span className="sacred-text-gradient">MANIFESTO</span>
            </h2>
            
            <div className="space-y-6 text-lg lg:text-xl text-white/90 leading-relaxed">
              <p>
                We are the intersection of the sacred and the street. Where ancient wisdom 
                meets modern rebellion. Where faith finds its voice in fabric and thread.
              </p>
              
              <p>
                Sacred Street isn't just clothing—it's a movement. A declaration that 
                spirituality and street culture aren't opposites, but partners in the 
                dance of authentic expression.
              </p>
              
              <p>
                Every stitch tells a story. Every design challenges convention. 
                Every piece worn is a statement that faith and fashion can coexist, 
                can challenge, can inspire.
              </p>
              
              <p className="text-[var(--divine-gold)] font-semibold">
                This isn't fashion. This is theological warfare in cotton and code.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { title: "AUTHENTIC", desc: "Real faith, real street" },
                { title: "PROVOCATIVE", desc: "Challenging conventions" },
                { title: "PREMIUM", desc: "Luxury meets rebellion" },
                { title: "PURPOSEFUL", desc: "Every piece has meaning" }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold text-[var(--divine-gold)] mb-2 uppercase tracking-wider">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Rotating Quotes */}
          <div className="relative">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 lg:p-12 sacred-border">
              <Quote className="h-12 w-12 text-[var(--divine-gold)] mb-6" />
              
              <div className="relative h-32 overflow-hidden">
                {quotes.map((quote, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentQuote 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-8'
                    }`}
                  >
                    <blockquote className="text-2xl lg:text-3xl font-display font-bold text-white mb-4 leading-tight">
                      "{quote.text}"
                    </blockquote>
                    <cite className="text-[var(--divine-gold)] font-medium uppercase tracking-wider text-sm">
                      — {quote.author}
                    </cite>
                  </div>
                ))}
              </div>

              {/* Quote indicators */}
              <div className="flex space-x-2 mt-8">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentQuote 
                        ? 'bg-[var(--divine-gold)]' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

