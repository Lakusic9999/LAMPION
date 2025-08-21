import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import LanguageSwitch from './LanguageSwitch';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'services', path: '/services' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black/40 backdrop-blur-lg shadow-lg fixed w-full top-0 z-50 border-b border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <img src='/logo/v0.png' className="h-12 w-12 text-primary" /> */}
              <span className="text-4xl font-bold text-primary font-lampion">LAMPION</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors border ${
                  isActive(item.path)
                    ? 'text-primary border-primary'
                    : 'text-text hover:text-primary border-0'
                }`}
              >
                {getTranslation(language, item.key)}
              </Link>
            ))}
            <LanguageSwitch />
            <Link
              to="/contact"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              {getTranslation(language, 'getQuote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-secondary border-x border-border">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'text-primary border border-primary'
                      : 'text-text hover:text-primary hover:border border-primary '
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {getTranslation(language, item.key)}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block bg-primary text-white px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {getTranslation(language, 'getQuote')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;