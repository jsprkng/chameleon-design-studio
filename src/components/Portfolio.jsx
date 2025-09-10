import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = ({ isDarkMode }) => {
  return (
    <section id="portfolio" className="min-h-screen flex flex-col items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 
          className="text-6xl md:text-8xl font-black text-[#1260DD] mb-8"
          style={{ fontFamily: 'owners-wide' }}
        >
          PORTFOLIO
        </h2>
        <p 
          className="text-xl max-w-2xl mx-auto"
          style={{ 
            fontFamily: 'owners, sans-serif',
            fontWeight: '500',
            color: isDarkMode ? '#EFE9E1' : '#161616'
          }}
        >
          Explore our creative works and design solutions that bring brands to life.
        </p>
        
        {/* Add your portfolio items here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Portfolio items will go here */}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
