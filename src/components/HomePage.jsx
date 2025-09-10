import React from 'react';
import { motion } from 'framer-motion';

const HomePage = ({ isDarkMode }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-64">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[120px] md:text-[150px] lg:text-[180px] font-black text-[#1260DD] tracking-[0.2em]"
        style={{ 
          fontFamily: 'owners-wide',
          fontWeight: '900',
          letterSpacing: '0.03em'
        }}
      >
        CHAMELEON
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-[18px] max-w-[800px] text-center mt-64"
        style={{ 
          fontFamily: 'owners, sans-serif',
          fontWeight: '500',
          color: isDarkMode ? '#EFE9E1' : '#161616'
        }}
      >
        <p>A DESIGN STUDIO BY A MULTI-PASSIONATE MULTIMEDIA ARTIST</p>
        <p>BASED IN ANGELES CITY FOCUSING ON BRANDING</p>
        <p>AND GRAPHIC DESIGN</p>
      </motion.div>
    </section>
  );
};

export default HomePage;
