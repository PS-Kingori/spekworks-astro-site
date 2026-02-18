import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
  'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1169&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1171&auto=format&fit=crop',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0.85, y: 50 }}   // starting state
      animate={{ opacity: 1, y: 0 }}    // target state
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="relative h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}

      {/* Dark overlay (optional but recommended) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text content */}
      <div className="relative z-19 flex h-full items-center  px-6">
        <div className="max-w-2xl px-8 md:px-16 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Innovative Design
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
          At Spekworks we are Transforming spaces and Elevating lives.
          </p>
          <button className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            <a href="/about">Learn More</a>
          </button>
        </div>
      </div>
    </section>

    </motion.div>
    
  );
};

export default Slider;
