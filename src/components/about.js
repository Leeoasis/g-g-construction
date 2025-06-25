// src/pages/About.jsx
import React from 'react';
import AboutHero from '../assets/images/about.png';
import WhoWeAreImg from '../assets/images/us.png'; // ✅ The new image
import { FaTools, FaCheckDouble, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <main>
      
      {/* Hero Banner with Background Image */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat text-white relative"
        style={{ backgroundImage: `url(${AboutHero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-40 pb-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About G&G Construction</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Passionate about craftsmanship. Committed to excellence. Serving South African homes with quality builds and honest work.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full bg-white text-gray-900 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Block */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              G&G Construction is a proudly South African company specializing in custom cabinetry, woodwork, and full-service Nutec/log home builds. We bring over a decade of hands-on experience to every project, combining artistic craftsmanship with practical durability. Whether it’s a sleek kitchen or a turnkey Nutec home, we treat every project like our own.
            </p>
          </div>

          {/* Better Image Block */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-4 rounded-xl shadow-xl max-w-md w-full">
              <img
                src={ WhoWeAreImg }
                alt="Who We Are"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full bg-gray-100 text-gray-900 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaTools className="text-yellow-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Craftsmanship</h3>
              <p className="text-gray-700 text-sm">
                Every build is a reflection of our pride, attention to detail, and commitment to perfection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaCheckDouble className="text-yellow-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-700 text-sm">
                We show up when we say we will. We quote fairly, work transparently, and finish strong.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaUsers className="text-yellow-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
              <p className="text-gray-700 text-sm">
                Your goals are our mission. We listen, advise, and build to your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="w-full bg-gray-900 text-white py-24 px-6 md:px-16 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Build Something Beautiful
          </h2>
          <p className="text-lg text-gray-300">
            Have a project in mind? From woodwork to whole-home solutions, we’re ready to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
