import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const certificates = [
  '/certificates/c1.png',
  '/certificates/c2.png',
  '/certificates/c3.png',
  '/certificates/c4.png',
  '/certificates/c5.png',
  '/certificates/c6.png',
  '/certificates/c7.png',
  '/certificates/c8.png',
  '/certificates/c9.png',
  '/certificates/c10.png',
  '/certificates/c11.png',
  '/certificates/c12.png',
  '/certificates/c13.png',
  '/certificates/c14.png',
  '/certificates/c15.png',
  '/certificates/c16.png',
  '/certificates/c17.png',
];

const CertificateCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) =>
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-10 px-4" id="certifications">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#22D3EE]">My Certifications</h2>

      <div className="relative w-full max-w-3xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100 + 47 }%)`,
              width: `${certificates.length * 100}%`,
            }}
          >
            {certificates.map((src, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2 sm:px-4"
              >
                <img
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-contain rounded-xl shadow-lg border-2 border-[#22D3EE]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#22D3EE] hover:text-[#1E3A8A] p-2 rounded-full bg-[#F5F5F5] bg-opacity-80 hover:bg-opacity-100 transition duration-300"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#22D3EE] hover:text-[#1E3A8A] p-2 rounded-full bg-[#F5F5F5] bg-opacity-80 hover:bg-opacity-100 transition duration-300"
        >
          <FaArrowRight size={20} />
        </button>

        {/* Dots for Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full ${
                current === index ? 'bg-[#22D3EE]' : 'bg-[#F5F5F5] bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateCarousel;