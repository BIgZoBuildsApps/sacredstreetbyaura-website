import { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tshirtDesign from '../assets/sacred_street_tshirt_design_1.png';
import hoodieDesign from '../assets/sacred_street_hoodie_design_1.png';
import capDesign from '../assets/sacred_street_cap_design_1.png';

const Collections = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const collections = [
    {
      id: 1,
      title: "THE LAST SUPPER TEE",
      subtitle: "GLITCH EUCHARIST COLLECTION",
      price: "$85",
      image: tshirtDesign,
      description: "Pixelated sacred art meets street culture. The apostles reimagined as skateboarders in this provocative digital interpretation.",
      category: "STATEMENT PIECES"
    },
    {
      id: 2,
      title: "CATHEDRAL HOODIE",
      subtitle: "SACRED ARCHITECTURE SERIES",
      price: "$165",
      image: hoodieDesign,
      description: "Gothic cathedral constructed from skateboard ramps. Where divine architecture meets street infrastructure.",
      category: "CORE COLLECTION"
    },
    {
      id: 3,
      title: "CROSS WHEELS CAP",
      subtitle: "SUBTLE REBELLION LINE",
      price: "$65",
      image: capDesign,
      description: "Embroidered cross with skateboard wheels. Subtle yet provocative statement piece for the discerning rebel.",
      category: "ACCESSORIES"
    }
  ];

  return (
    <section id="collections" className="py-20 lg:py-32 bg-[var(--void-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6">
            <span className="sacred-text-gradient">COLLECTIONS</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Each piece is a statement. Each design challenges conventions. 
            Welcome to theological warfare in premium streetwear.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Product Card */}
              <div className="relative overflow-hidden bg-[var(--card)] rounded-lg sacred-hover">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-[var(--divine-gold)] text-[var(--divine-gold)] hover:bg-[var(--divine-gold)] hover:text-black"
                      >
                        <Eye className="mr-2 h-5 w-5" />
                        VIEW DETAILS
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--sacrificial-red)] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <p className="text-[var(--divine-gold)] text-sm font-medium uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[var(--divine-gold)]">
                      {item.price}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:text-[var(--divine-gold)] p-0"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-[var(--divine-gold)] text-[var(--divine-gold)] hover:bg-[var(--divine-gold)] hover:text-black px-8 py-4 text-lg font-semibold sacred-hover uppercase tracking-wider"
          >
            VIEW ALL COLLECTIONS
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collections;

