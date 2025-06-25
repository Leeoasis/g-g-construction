// src/pages/Services.jsx
import React from 'react';
import CabinetImg from '../assets/images/cabinet.png';
import NutecImg from '../assets/images/nutec.png';
import Hero from '../assets/images/services-hero.png'; // ✅ Update this path

const services = [
  {
    title: 'Cabinet Making & Carpentry',
    image: CabinetImg,
    description: [
      'Custom kitchen cabinets and elegant vanities',
      'Wall paneling and headboards',
      'TV units and dressing tables tailored to your space',
      'High-quality finishes with long-lasting durability',
    ],
  },
  {
    title: 'Nutec & Log Homes',
    image: NutecImg,
    description: [
      'Turnkey Nutec and log home construction',
      'Interior electrical wiring and certified plumbing',
      'Exterior and interior painting and finishes',
      'Durable, affordable, and professionally managed',
    ],
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero Section */}
        <section
        className="w-full bg-cover bg-center bg-no-repeat text-white relative"
        style={{ backgroundImage: `url(${Hero})` }} // ✅ Update this path
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-40 pb-32">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            From finely crafted cabinetry to fully built Nutec homes — we deliver exceptional results with precision and pride.
            </p>
        </div>
        </section>


      {/* Service Cards */}
      <section className="w-full bg-white text-gray-900 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1">
                  {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Need Help with a Custom Build?
          </h2>
          <p className="text-lg text-gray-300">
            We’re here to discuss your project and bring your vision to life — from first cut to final polish.
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

export default Services;
