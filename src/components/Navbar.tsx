import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      if (isOpen && nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300   hover:scale-105">
            <a href="#home" className="block">
              <img
                src={logo}
                alt="JPTEKS Logo"
                className="h-[95px] w-[110px] sm:h-14 object-cover "
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 ">
            {['home', 'mission', 'vision', 'about', 'team', 'gallery'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-gray-600 hover:text-yellow-800 transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {t(link)}
              </a>
            ))}
            
          </div>
          <div className='md:flex gap-4 hidden'>
          <LanguageSwitcher />
            <a
              href="https://wa.me/651118070?text=Hello!%20I%27d%20like%20to%20join%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 text-white px-6 py-2.5 rounded-md hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-sm uppercase tracking-wider font-medium"
            >
              {t('joinUs')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-yellow-800 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed inset-x-0 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out border-b border-gray-200 ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {['home', 'mission', 'vision', 'about', 'team', 'gallery'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-600 hover:text-yellow-800 hover:bg-gray-50 rounded-lg transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {t(link)}
              </a>
            ))}
            <div className="pt-2 pb-3">
              <a
                href="https://wa.me/651118070?text=Hello!%20I%27d%20like%20to%20join%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 bg-yellow-800 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {t('joinUs')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;