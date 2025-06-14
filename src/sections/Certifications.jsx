import React, { useEffect, useState } from 'react';

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
];

const CertificateCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) =>
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 px-4" id="certifications">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#22D3EE]">My Certifications</h2>

      <div className="overflow-hidden relative w-full max-w-3xl mx-auto">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 100 + 45}%)`,
            width: `${certificates.length * 100}%`,
          }}
        >
          {certificates.map((src, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full h-[400px] object-contain rounded-xl shadow-lg "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateCarousel;