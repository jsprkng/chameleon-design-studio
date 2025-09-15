import React from 'react';
import { motion } from 'framer-motion';
import LazyMatcha from '../assets/LazyMatcha.png';
import NYCheese from '../assets/NYCheese.png';
import Ouvre from '../assets/Ouvre.png';
import Puma from '../assets/Puma.png';
import LionOfJudah from '../assets/LionOfJudah.jpg';

const Portfolio = ({ isDarkMode }) => {
  // Sample portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Lazy Matcha",
      category: "Brand Identity & Packaging",
      image: LazyMatcha,
      description: "Trendy matcha brand for young professionals"
    },
    {
      id: 2,
      title: "NY Cheese",
      category: "Brand Strategy & Design",
      image: NYCheese,
      description: "Fresh branding for artisanal cheese company"
    },
    {
      id: 3,
      title: "Ouvre",
      category: "Website & Branding",
      image: Ouvre,
      description: "Modern brand identity for creative studio"
    },
    {
      id: 4,
      title: "Puma",
      category: "Brand Implementation",
      image: Puma,
      description: "Athletic brand redesign and implementation"
    },
    {
      id: 5,
      title: "Lion Of Judah",
      category: "Brand Identity & Strategy",
      image: LionOfJudah,
      description: "Powerful branding for spiritual organization"
    }
  ];

  return (
    <div className="py-20">
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-6xl md:text-8xl font-black text-[#1260DD] mb-8"
            style={{ fontFamily: 'owners-wide' }}
          >
            SERVICES
          </h2>
          <p 
            className="text-xl max-w-4xl mx-auto"
            style={{ 
              fontFamily: 'owners, sans-serif',
              fontWeight: '400',
              color: isDarkMode ? '#EFE9E1' : '#161616'
            }}
          >
            We offer comprehensive design services focused on three core disciplines. Using our expertise to help you uncover your business needs and accelerate growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-opacity-10 p-8 rounded-lg border border-gray-200"
            style={{ 
              backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
              borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
            }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ 
                fontFamily: 'owners, sans-serif',
                color: isDarkMode ? '#EFE9E1' : '#161616'
              }}
            >
              Brand Identity
            </h3>
            <ul 
              className="space-y-2 text-sm mb-6"
              style={{ 
                fontFamily: 'owners, sans-serif',
                fontWeight: '300',
                color: isDarkMode ? '#B8B8B8' : '#666666'
              }}
            >
              <li>• Audience Research</li>
              <li>• Brand Strategy</li>
              <li>• Logo Design</li>
              <li>• Brand Guidelines</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-opacity-10 p-8 rounded-lg border border-gray-200"
            style={{ 
              backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
              borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
            }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ 
                fontFamily: 'owners, sans-serif',
                color: isDarkMode ? '#EFE9E1' : '#161616'
              }}
            >
              Website Creation
            </h3>
            <ul 
              className="space-y-2 text-sm mb-6"
              style={{ 
                fontFamily: 'owners, sans-serif',
                fontWeight: '300',
                color: isDarkMode ? '#B8B8B8' : '#666666'
              }}
            >
              <li>• Web Strategy</li>
              <li>• UI/UX Design</li>
              <li>• Development</li>
              <li>• Optimization</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-opacity-10 p-8 rounded-lg border border-gray-200"
            style={{ 
              backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
              borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
            }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ 
                fontFamily: 'owners, sans-serif',
                color: isDarkMode ? '#EFE9E1' : '#161616'
              }}
            >
              Brand Implementation
            </h3>
            <ul 
              className="space-y-2 text-sm mb-6"
              style={{ 
                fontFamily: 'owners, sans-serif',
                fontWeight: '300',
                color: isDarkMode ? '#B8B8B8' : '#666666'
              }}
            >
              <li>• Print Media</li>
              <li>• Social Templates</li>
              <li>• Marketing Materials</li>
              <li>• Signage</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section with Horizontal Scroll */}
      <section id="portfolio" className="max-w-8xl mx-auto ml-8 px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 
            className="text-6xl md:text-8xl font-black text-[#1260DD] mb-8 text-center"
            style={{ fontFamily: 'owners-wide' }}
          >
            PORTFOLIO
          </h2>
          <p 
            className="text-xl max-w-4xl mx-auto text-center"
            style={{ 
              fontFamily: 'owners, sans-serif',
              fontWeight: '400',
              color: isDarkMode ? '#EFE9E1' : '#161616'
            }}
          >
            Explore my latest projects and creative solutions that have helped brands stand out in their respective markets.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Projects */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 pb-6" style={{ width: 'max-content' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 h-106 group cursor-pointer relative overflow-hidden rounded-2xl"
              >
                {/* Full Image Background */}
                <img 
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-all duration-300">
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    {/* Top Section with Title */}
                    <div className="flex items-start justify-between">
                      <h3 
                        className="text-2xl font-bold text-white mb-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm"
                        style={{ 
                          fontFamily: 'owners, sans-serif',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                        }}
                      >
                        {project.title}
                      </h3>
                      <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center bg-black/60 backdrop-blur-sm">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Section with Service Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.category.includes('Brand Identity') && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30" style={{ fontFamily: 'owners, sans-serif' }}>
                          Brand Identity
                        </span>
                      )}
                      {project.category.includes('Website') && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30" style={{ fontFamily: 'owners, sans-serif' }}>
                          Website
                        </span>
                      )}
                      {project.category.includes('Packaging') && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30" style={{ fontFamily: 'owners, sans-serif' }}>
                          Packaging
                        </span>
                      )}
                      {project.category.includes('Brand Strategy') && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30" style={{ fontFamily: 'owners, sans-serif' }}>
                          Brand Strategy
                        </span>
                      )}
                      {project.category.includes('Social Media') && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30" style={{ fontFamily: 'owners, sans-serif' }}>
                          Social Media
                        </span>
                      )}
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30" style={{ fontFamily: 'owners, sans-serif' }}>
                        Brand Implementation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
