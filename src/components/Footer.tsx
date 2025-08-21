import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold font-lampion text-primary">LAMPION</span>
            </div>
            <p className="text-accent mb-4">
              {getTranslation(language, 'footerDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{getTranslation(language, 'quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-accent hover:text-primary transition-colors">{getTranslation(language, 'home')}</Link></li>
              <li><Link to="/services" className="text-accent hover:text-primary transition-colors">{getTranslation(language, 'services')}</Link></li>
              <li><Link to="/about" className="text-accent hover:text-primary transition-colors">{getTranslation(language, 'about')}</Link></li>
              <li><Link to="/contact" className="text-accent hover:text-primary transition-colors">{getTranslation(language, 'contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{getTranslation(language, 'contactInfo')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-accent">+381 60 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-accent">info@lampion.rs</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-accent">Belgrade, Serbia</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{getTranslation(language, 'followUs')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-accent hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-accent hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-accent hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-accent text-sm">
            © 2025 LAMPION. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 space-x-4">
            <Link to="/privacy" className="text-accent hover:text-primary text-sm transition-colors">
              {getTranslation(language, 'privacy')}
            </Link>
            <Link to="/terms" className="text-accent hover:text-primary text-sm transition-colors">
              {getTranslation(language, 'terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;