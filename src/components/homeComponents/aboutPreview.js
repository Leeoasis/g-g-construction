// src/components/home/AboutPreview.jsx
import React, { useEffect, useRef, useState } from 'react';
import AboutImg from '../../assets/images/gg3.jpg'; // ✅ Your new image

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current; // ✅ Safe reference copy

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-white text-gray-800 py-24 px-6 md:px-16 lg:px-24 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About G&G Construction
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            G&G Construction is a trusted name in precision carpentry and Nutec home building. We specialize in turning ordinary spaces into functional works of art — from custom kitchen cabinets and TV units to fully finished Nutec houses with electrical, plumbing, and paintwork included.
          </p>
          <a
            href="/about"
            className="inline-block bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Image Section */}
        <div className="relative group">
          <img
            src={AboutImg}
            alt="Team or project"
            className="w-full rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-xl bg-yellow-400 opacity-10 group-hover:opacity-20 transition duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
