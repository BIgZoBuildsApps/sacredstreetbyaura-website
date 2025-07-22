import { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tshirtDesign from '../assets/sacred_street_tshirt_design_1.png';
import hoodieDesign from '../assets/sacred_street_hoodie_design_1.png';
import capDesign from '../assets/sacred_street_cap_design_1.png';
import lifestyle1 from '../assets/lifestyle_1.png';
import lifestyle2 from '../assets/lifestyle_2.png';

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  const products = [
    {
      id: 1,
      name: "The Last Supper Tee",
      collection: "Glitch Eucharist Collection",
      price: 85,
      originalPrice: 95,
      rating: 4.9,
      reviews: 127,
      description: "A provocative reinterpretation of Leonardo da Vinci's masterpiece, where the apostles are reimagined as modern skateboarders. This piece challenges conventional religious imagery while maintaining deep respect for the sacred narrative.",
      features: [
        "100% Premium Cotton",
        "Oversized Fit",
        "Digital Print Technology",
        "Pre-shrunk Fabric",
        "Reinforced Seams"
      ],
      story: "The Last Supper Tee represents the core of Sacred Street's philosophy: that sacred stories can find new life in contemporary contexts. The pixelated, glitch-style treatment of the classic painting suggests that even the most revered images can be transformed while retaining their essential meaning.",
      images: [tshirtDesign, lifestyle1],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Charcoal', 'Vintage White'],
      category: "Statement Pieces",
      inStock: true,
      limitedEdition: false
    },
    {
      id: 2,
      name: "Cathedral Hoodie",
      collection: "Sacred Architecture Series",
      price: 165,
      originalPrice: 185,
      rating: 4.8,
      reviews: 89,
      description: "Gothic cathedral architecture meets skateboard culture in this striking hoodie design. The cathedral is constructed entirely from skateboard ramps, creating a powerful metaphor for finding the sacred in unexpected places.",
      features: [
        "Premium Heavyweight Cotton Blend",
        "Fleece-Lined Interior",
        "Kangaroo Pocket",
        "Adjustable Hood",
        "Ribbed Cuffs and Hem"
      ],
      story: "The Cathedral Hoodie explores the idea that sacred spaces can be found anywhere—even in the concrete landscapes of urban skateboarding. The design suggests that the act of creation, whether building cathedrals or skateboard ramps, is itself a sacred endeavor.",
      images: [hoodieDesign, lifestyle2],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Charcoal', 'Deep Red'],
      category: "Core Collection",
      inStock: true,
      limitedEdition: false
    },
    {
      id: 3,
      name: "Cross Wheels Cap",
      collection: "Subtle Rebellion Line",
      price: 65,
      originalPrice: 75,
      rating: 4.7,
      reviews: 203,
      description: "A sophisticated take on religious symbolism, featuring an embroidered cross integrated with skateboard wheels. This piece allows for subtle expression of the Sacred Street philosophy in everyday wear.",
      features: [
        "Structured 6-Panel Design",
        "Premium Wool Blend",
        "Embroidered Logo",
        "Adjustable Snapback",
        "Curved Brim"
      ],
      story: "The Cross Wheels Cap represents the more subtle side of Sacred Street's aesthetic. It's designed for those who want to carry the brand's message without making a bold statement, proving that revolution can be quiet but still powerful.",
      images: [capDesign, lifestyle1],
      sizes: ['One Size'],
      colors: ['Black', 'Charcoal', 'Navy'],
      category: "Accessories",
      inStock: true,
      limitedEdition: true
    }
  ];

  const currentProduct = products[selectedProduct];

  const benefits = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100"
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Hassle-free returns"
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "On manufacturing defects"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[var(--void-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-[var(--card)] rounded-lg p-2">
            {products.map((product, index) => (
              <Button
                key={product.id}
                variant={selectedProduct === index ? "default" : "ghost"}
                onClick={() => setSelectedProduct(index)}
                className={`px-6 py-2 text-sm font-medium ${
                  selectedProduct === index
                    ? 'bg-[var(--sacrificial-red)] text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {product.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-lg bg-[var(--card)]">
              <img
                src={currentProduct.images[0]}
                alt={currentProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {currentProduct.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {currentProduct.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg bg-[var(--card)]">
                    <img
                      src={image}
                      alt={`${currentProduct.name} lifestyle ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-[var(--sacrificial-red)] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded">
                  {currentProduct.category}
                </span>
                {currentProduct.limitedEdition && (
                  <span className="bg-[var(--divine-gold)] text-black px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded">
                    Limited Edition
                  </span>
                )}
              </div>
              
              <p className="text-[var(--divine-gold)] text-sm font-medium uppercase tracking-wider mb-2">
                {currentProduct.collection}
              </p>
              
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                {currentProduct.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(currentProduct.rating)
                          ? 'text-[var(--divine-gold)] fill-current'
                          : 'text-white/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white/70 text-sm">
                  {currentProduct.rating} ({currentProduct.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-[var(--divine-gold)]">
                  ${currentProduct.price}
                </span>
                {currentProduct.originalPrice > currentProduct.price && (
                  <span className="text-xl text-white/50 line-through">
                    ${currentProduct.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-white/80 leading-relaxed mb-4">
                {currentProduct.description}
              </p>
            </div>

            {/* Size Selection */}
            {currentProduct.sizes.length > 1 && (
              <div>
                <h3 className="text-white font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 ${
                        selectedSize === size
                          ? 'bg-[var(--sacrificial-red)] text-white'
                          : 'border-white/30 text-white hover:border-[var(--divine-gold)] hover:text-[var(--divine-gold)]'
                      }`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            <div>
              <h3 className="text-white font-semibold mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {currentProduct.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 ${
                      selectedColor === color
                        ? 'bg-[var(--sacrificial-red)] text-white'
                        : 'border-white/30 text-white hover:border-[var(--divine-gold)] hover:text-[var(--divine-gold)]'
                    }`}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="flex-1 bg-[var(--sacrificial-red)] hover:bg-[var(--sacrificial-red)]/80 text-white font-semibold uppercase tracking-wider"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[var(--divine-gold)] text-[var(--divine-gold)] hover:bg-[var(--divine-gold)] hover:text-black"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[var(--divine-gold)] text-[var(--divine-gold)] hover:bg-[var(--divine-gold)] hover:text-black"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <benefit.icon className="h-6 w-6 text-[var(--divine-gold)] mx-auto mb-2" />
                    <h4 className="text-white text-sm font-semibold mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-white/60 text-xs">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {currentProduct.features.map((feature, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-center">
                    <span className="w-2 h-2 bg-[var(--divine-gold)] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Story */}
            <div className="bg-[var(--card)] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">The Story</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {currentProduct.story}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

