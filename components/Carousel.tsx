// components/Carousel.tsx
import React, { useRef } from 'react';

interface CarouselItem {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
    }
  };

  return (
    <div className="relative overflow-hidden">
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-md" onClick={scrollLeft}>
        {'<'}
      </button>
      <div ref={carouselRef} className="flex overflow-x-auto p-4" style={{ overflowX: 'hidden' }}>
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-64 p-4">
            {/* Your carousel item content */}
            <div className="flex items-center justify-center mb-2">
              <img src={item.image} alt={item.alt} className="w-8 h-8 rounded-full" />
            </div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-md" onClick={scrollRight}>
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
