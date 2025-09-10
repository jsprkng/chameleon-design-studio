import React from 'react';
import { motion } from 'framer-motion';
import contactDP from '../assets/Contact-DP.jpg';

const Contact = ({ isDarkMode }) => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-8 py-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Panel - All Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-opacity-0 p-8 rounded-lg space-y-8 ml-8"
        >
          {/* Title Section */}
          <div className="space-y-2 mt-8">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-normal"
              style={{
                fontFamily: 'owners, sans-serif',
                fontWeight: '400',
                color: isDarkMode ? '#EFE9E1' : '#161616'
              }}
            >
              Hello there,
            </h2>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-normal"
              style={{
                fontFamily: 'owners, sans-serif',
                fontWeight: '400',
                color: isDarkMode ? '#EFE9E1' : '#161616'
              }}
            >
              I'm Warren Rivera
            </h1>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md leading-relaxed max-w-3xl"
            style={{ 
              fontFamily: 'owners, sans-serif',
              fontWeight: '400',
              color: isDarkMode ? '#686868' : '#666666',
              lineHeight: '1.6'
            }}
          >
            FOUNDER OF CHAMELEON DESIGN STUDIO, ESTABLISHED IN NOVEMBER 2024. A MULTI-PASSIONATE DESIGNER SPECIALIZING IN VERSATILITY—FINDING THE PERFECT BALANCE BETWEEN FREEDOM AND CONSTRAINTS. EVERY DESIGN I CREATE IS CRAFTED WITH INTENTION, ROOTED IN A DEEP UNDERSTANDING OF ITS ESSENCE, CRAFTING BRANDS WITH A DISTINCT LOOK AND FEEL THAT TRULY REFLECT THEIR STORY AND PERSONALITY—WITHOUT CONFORMING TO FLEETING TRENDS, STRIVING TO BREAK AWAY FROM DULL, REPETITIVE DESIGNS, BRINGING PASSION, CREATIVITY, AND BEAUTY BACK INTO BRANDING.
          </motion.p>

          {/* Inquire Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="https://www.instagram.com/warrenrvr/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1260DD] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 inline-block text-center"
            style={{ fontFamily: 'owners, sans-serif' }}
          >
            Inquire Now
          </motion.a>

          {/* Services and Clients */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24"
          >
            <div>
              <h3 
                className="text-sm font-medium mb-3 tracking-wider"
                style={{ 
                  fontFamily: 'owners, sans-serif',
                  color: isDarkMode ? '#B8B8B8' : '#666666'
                }}
              >
                SERVICES
              </h3>
              <div 
                className="space-y-1 text-sm mt-6"
                style={{ 
                  fontFamily: 'owners, sans-serif',
                  fontWeight: '400',
                  color: isDarkMode ? '#CCCCCC' : '#161616'
                }}
              >
                <p>GRAPHIC DESIGN</p>
                <p>PACKAGING</p>
                <p>BRAND STRATEGY</p>
                <p>SOCIAL MEDIA MANAGEMENT</p>
              </div>
            </div>

            <div>
              <h3 
                className="text-sm font-medium mb-3 tracking-wider"
                style={{ 
                  fontFamily: 'owners, sans-serif',
                  color: isDarkMode ? '#B8B8B8' : '#666666'
                }}
              >
                CLIENTS
              </h3>
              <div 
                className="space-y-1 text-sm mt-6"
                style={{ 
                  fontFamily: 'owners, sans-serif',
                  fontWeight: '400',
                  color: isDarkMode ? '#CCCCCC' : '#161616'
                }}
              >
                <p>CENTRO COFFEE</p>
                <p>BUBBLE BASH LAUNDRY</p>
                <p>CASA V FARM RESORT</p>
                <p>LAZY MATCHA CLUB</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Panel - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-center mt-8"
        >
          <div className="w-[550px] h-[700px] rounded-lg overflow-hidden contact-dp mt-8 ml-16">
            <img 
              src={contactDP}
              alt="Warren Rivera - Founder of Chameleon Design Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
