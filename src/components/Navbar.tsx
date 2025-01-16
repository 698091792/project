import React, { useState } from 'react';
import { Menu, X} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 gap-">
          <div className="">
            <div className='w-[15%] '>
             <img src={logo} alt="jpteks logo" />
            </div> 
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-600 hover:text-yellow-800 transition-colors">{t('home')}</a>
            <a href="#mission" className="text-gray-600 hover:text-yellow-800 transition-colors">{t('mission')}</a>
            <a href="#vision" className="text-gray-600 hover:text-yellow-800 transition-colors">{t('vision')}</a>
            <a href="#about" className="text-gray-600 hover:text-yellow-800 transition-colors">{t('about')}</a>
            <a href="#team" className="text-gray-600 hover:text-yellow-800 transition-colors">{t('team')}</a>
            <a href="#gallery" className="text-gray-600 hover:text-yellow-800 transition-colors">{t('gallery')}</a>
            <LanguageSwitcher />
            <button className="bg-yellow-800 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
              {t('joinUs')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-yellow-800">{t('home')}</a>
            <a href="#mission" className="block px-3 py-2 text-gray-600 hover:text-yellow-800">{t('mission')}</a>
            <a href="#vision" className="block px-3 py-2 text-gray-600 hover:text-yellow-800">{t('vision')}</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-yellow-800">{t('about')}</a>
            <a href="#team" className="block px-3 py-2 text-gray-600 hover:text-yellow-800">{t('team')}</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-600 hover:text-yellow-800">{t('gallery')}</a>
            <button className="w-full text-left px-3 py-2 bg-yellow-800 text-white rounded-md hover:bg-yellow-600">
              {t('joinUs')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;