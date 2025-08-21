import React from 'react';
import { Zap, Shield, Smartphone, Lightbulb, Factory, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import CenteredSection from "../components/CenteredSection";

const Services: React.FC = () => {
  const { language } = useLanguage();

  const services = [
    {
      key: 'basicElectrical',
      icon: Zap,
      details: [
        'Installation of new electrical systems',
        'Modifications and reconstruction of old installations',
        'Replacement and renewal of wiring',
        'Electrical system upgrades',
      ]
    },
    {
      key: 'electricalPanels',
      icon: Shield,
      details: [
        'Installation of new distribution panels with fuses',
        'Replacement of old panels and automatic breakers',
        'Expansion and modernization of electrical systems',
        'Circuit protection upgrades',
      ]
    },
    {
      key: 'smartHome',
      icon: Smartphone,
      details: [
        'Installation of smart switches and sockets',
        'Control of lighting, heating, and devices via mobile phone',
        'Home automation systems',
        'Energy efficiency optimization',
      ]
    },
    {
      key: 'lighting',
      icon: Lightbulb,
      details: [
        'Installation of chandeliers, ceiling lights, LED strips',
        'Outdoor lighting and motion sensors',
        'Replacement and installation of switches and sockets',
        'Decorative and accent lighting',
      ]
    },
    {
      key: 'industrial',
      icon: Factory,
      details: [
        'Three-phase connections and industrial machine installations',
        'Electrical installations for offices, warehouses, workshops',
        'Installation and maintenance of electrical cabinets',
        'Power distribution systems',
      ]
    },
    {
      key: 'safety',
      icon: CheckCircle,
      details: [
        'Electrical system inspection and testing',
        'Measurement of resistance and grounding',
        'Preventive checks and thermographic inspections',
        'Consulting and optimization of electrical systems',
      ]
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <CenteredSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <div></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in backdrop-blur-md border border-1 border-primary p-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            {getTranslation(language, 'servicesTitle')}
          </h1>
          <p className="text-xl text-primary max-w-3xl mx-auto ">
            {getTranslation(language, 'heroDescription')}
          </p>
        </div>
        </div>
      </CenteredSection>

      {/* Services Grid */}
      <section className="py-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.key}
                  className="bg-accent p-8 rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {getTranslation(language, service.key)}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {getTranslation(language, `${service.key}Desc`)}
                      </p>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Additional Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Appliance Installation</h3>
              <p className="text-gray-600">Installation and connection of water heaters, ovens, air conditioners, and other electrical appliances.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Security Systems</h3>
              <p className="text-gray-600">Installation of intercoms and video surveillance systems for enhanced security.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Emergency Service</h3>
              <p className="text-gray-600">24/7 emergency electrical service for urgent repairs and maintenance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;