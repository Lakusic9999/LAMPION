import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'sr', flag: '🇷🇸', name: 'Српски' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  ];

  return (
    <div className="relative group text-accent">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-md hover:border border-border transition-colors">
        <span>{languages.find(l => l.code === language)?.flag}</span>
        <span className="text-sm font-medium">{languages.find(l => l.code === language)?.name}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 bg-secondary rounded-md shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center space-x-3 px-4 py-2 text-sm  hover:bg-primary hover:text-secondary w-full text-left transition-colors first:rounded-t-md last:rounded-b-md ${
              language === lang.code ? 'border border-border text-primary' : 'text-text'
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitch;