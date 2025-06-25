// src/pages/Projects.jsx
import React, { useState } from 'react';
import Hero from '../assets/images/projects-hero.png'; // Adjust path as needed
import Project1 from '../assets/images/gg1.jpg';
import Project2 from '../assets/images/gg2.jpg';
import Project3 from '../assets/images/gg6.jpg';
import Project4 from '../assets/images/gg12.jpg';
import Project5 from '../assets/images/gg17.jpg';
import Project6 from '../assets/images/gg18.jpg';

const projects = [
  {
    title: 'Modern Kitchen Cabinetry',
    thumbnail: Project1,
    gallery: [Project1, Project2],
    description: 'A sleek, modern kitchen setup featuring custom-built cabinetry, elegant finishes, and seamless appliance integration.'
  },
  {
    title: 'Nutec House – Full Build',
    thumbnail: Project2,
    gallery: [Project2, Project3],
    description: 'A full Nutec home construction project including structure, plumbing, wiring, and final painting with clean detailing.'
  },
  {
    title: 'Wall Paneling & Storage Unit',
    thumbnail: Project3,
    gallery: [Project3, Project4],
    description: 'Beautiful wall paneling with built-in storage, offering both function and aesthetic enhancement for interior spaces.'
  },
  {
    title: 'TV Stand & Entertainment Wall',
    thumbnail: Project4,
    gallery: [Project4, Project5],
    description: 'Custom entertainment unit combining media functionality with premium carpentry and integrated lighting.'
  },
  {
    title: 'Exterior Finishing – Log Home',
    thumbnail: Project5,
    gallery: [Project5, Project6],
    description: 'Exterior finishing on a log-style home with Nutec cladding, porch details, and durable paintwork.'
  },
  {
    title: 'Bathroom Vanity Installation',
    thumbnail: Project6,
    gallery: [Project6, Project1],
    description: 'Installation of a stylish bathroom vanity with storage, crafted for both beauty and moisture resistance.'
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main>
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat text-white relative"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-40 pb-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Explore some of the finished projects we're proud to have delivered — where quality craftsmanship meets client vision.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full bg-white text-gray-900 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{project.description}</p>
                <button
                  onClick={() => setActiveProject(project)}
                  className="mt-2 w-fit self-start bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-4 text-gray-700 hover:text-black text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{activeProject.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeProject.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-lg text-gray-300">
            Get in touch to bring your vision to life. From first consultation to final finish, we’re here for you.
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

export default Projects;
