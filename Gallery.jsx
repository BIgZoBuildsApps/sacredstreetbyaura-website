import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tshirtDesign from '../assets/sacred_street_tshirt_design_1.png';
import hoodieDesign from '../assets/sacred_street_hoodie_design_1.png';
import capDesign from '../assets/sacred_street_cap_design_1.png';
import logo1 from '../assets/sacred_street_logo_concept_1.png';
import logo2 from '../assets/sacred_street_logo_concept_2.png';
import logo3 from '../assets/sacred_street_logo_concept_3.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: tshirtDesign,
      title: "The Last Supper Tee",
      category: "Product",
      description: "Glitch Eucharist Collection - Where sacred art meets street culture"
    },
    {
      id: 2,
      src: hoodieDesign,
      title: "Cathedral Hoodie",
      category: "Product",
      description: "Sacred Architecture Series - Gothic meets skateboard culture"
    },
    {
      id: 3,
      src: capDesign,
      title: "Cross Wheels Cap",
      category: "Product",
      description: "Subtle Rebellion Line - Embroidered statement piece"
    },
    {
      id: 4,
      src: logo1,
      title: "Sacred Street Logo",
      category: "Brand",
      description: "Gothic cathedral spire piercing broken skateboard"
    },
    {
      id: 5,
      src: logo2,
      title: "Cathedral Skateboard",
      category: "Brand",
      description: "Minimalist interpretation of sacred-street fusion"
    },
    {
      id: 6,
      src: logo3,
      title: "Stained Glass Explosion",
      category: "Brand",
      description: "Breaking through traditional boundaries"
    }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const categories = ['All', 'Product', 'Brand'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-[var(--void-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6">
            <span className="sacred-text-gradient">GALLERY</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Visual storytelling through provocative design. Each image captures the essence 
            of where sacred meets street.
          </p>

          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 uppercase tracking-wider font-semibold ${
                  activeCategory === category
                    ? 'bg-[var(--sacrificial-red)] text-white'
                    : 'border-[var(--divine-gold)] text-[var(--divine-gold)] hover:bg-[var(--divine-gold)] hover:text-black'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer sacred-hover"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <Camera className="h-8 w-8 text-[var(--divine-gold)] mb-4" />
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-[var(--sacrificial-red)] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6">
            <Instagram className="h-8 w-8 text-white" />
            <div className="text-left">
              <h3 className="font-bold text-white text-lg">Follow @SacredStreet</h3>
              <p className="text-white/80">See more behind-the-scenes content</p>
            </div>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Follow
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-[var(--divine-gold)] bg-black/50 hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-[var(--divine-gold)] bg-black/50 hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-[var(--divine-gold)] bg-black/50 hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center bg-black/70 rounded-lg p-4">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/80">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

