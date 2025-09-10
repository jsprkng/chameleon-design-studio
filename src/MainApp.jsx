import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Phone } from 'lucide-react';
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function MainApp() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
          className="font-sans relative"
          style={{ backgroundColor: isDarkMode ? '#161616' : '#EFE9E1' }}
        >
          {/* Fixed Header */}
          <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md"
          >
            <nav className="flex justify-between items-center px-8 py-6">
              {/* Logo */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-lg font-medium"
                style={{ color: isDarkMode ? '#EFE9E1' : '#161616' }}
              >
                🎯
              </motion.div>
    
              {/* Navigation */}
              <div className="flex space-x-8 ml-14">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  className="transition-colors cursor-pointer flex items-center space-x-2"
                  onClick={() => scrollToSection('home')}
                  style={{ 
                    fontFamily: 'owners, sans-serif',
                    fontWeight: '300',
                    color: activeSection === 'home' ? '#1260DD' : (isDarkMode ? '#EFE9E1' : '#161616')
                  }}
                >
                  <span>HOME</span>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  className="transition-colors cursor-pointer flex items-center space-x-2"
                  onClick={() => scrollToSection('portfolio')}
                  style={{ 
                    fontFamily: 'owners, sans-serif',
                    fontWeight: '300',
                    color: activeSection === 'portfolio' ? '#1260DD' : (isDarkMode ? '#EFE9E1' : '#161616')
                  }}
                >
                  <span>PORTFOLIO</span>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  className="transition-colors cursor-pointer flex items-center space-x-2"
                  onClick={() => scrollToSection('contact')}
                  style={{ 
                    fontFamily: 'owners, sans-serif',
                    fontWeight: '300',
                    color: activeSection === 'contact' ? '#1260DD' : (isDarkMode ? '#EFE9E1' : '#161616')
                  }}
                >
                  <span>CONTACT</span>
                </motion.a>
              </div>
    
              {/* Copyright & Toggle */}
              <div className="flex items-center space-x-4">
                {/* Dark/Light Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="bg-transparent border-2 border-[#686868] rounded-full p-1 transition-colors relative w-18 h-9"
                  aria-label="Toggle dark/light mode"
                >
                  <div className="absolute inset-0 flex items-center justify-between pl-1">
                    <i className="bi bi-brightness-low text-[#686868] text-[26px] pl-1"></i>
                    <i className="bi bi-moon text-[#686868] text-[18px] pr-2"></i>
                  </div>
                  
                  <div 
                    className={`w-6 h-6 bg-[#686868] rounded-full transition-transform duration-300 ease-in-out relative z-10 ${
                      isDarkMode ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  >
                  </div>
                </button>
              </div>
            </nav>
          </motion.header>

      {/* Home Section */}
      <HomePage isDarkMode={isDarkMode} />

      {/* Portfolio Section */}
      <Portfolio isDarkMode={isDarkMode} />

      {/* Contact Section */}
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}

export default MainApp;
