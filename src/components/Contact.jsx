import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ isDarkMode }) => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-8">
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
          CONTACT
        </h2>
        <p 
          className="text-xl max-w-2xl mx-auto mb-12"
          style={{ 
            fontFamily: 'owners, sans-serif',
            fontWeight: '500',
            color: isDarkMode ? '#EFE9E1' : '#161616'
          }}
        >
          Let's collaborate and create something amazing together.
        </p>

        {/* Contact Form or Information */}
        <div className="max-w-lg mx-auto">
          <div 
            className="space-y-6"
            style={{ 
              fontFamily: 'owners, sans-serif',
              fontWeight: '300',
              color: isDarkMode ? '#EFE9E1' : '#161616'
            }}
          >
            <div className="text-lg">
              <p>Email: hello@chameleon.design</p>
            </div>
            <div className="text-lg">
              <p>Phone: +63 123 456 7890</p>
            </div>
            <div className="text-lg">
              <p>Location: Angeles City, Philippines</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
