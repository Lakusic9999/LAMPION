import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Clock, Award, Users, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
// import ThreeScene from '../components/ThreeScene';
import CenteredSection from "../components/CenteredSection";


const Home: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    { key: 'professional', icon: Users },
    { key: 'warranty', icon: Shield },
    { key: 'safetyQuality', icon: Award },
    { key: 'affordable', icon: Star },
    { key: 'emergency', icon: Clock },
  ];

  const services = [
    { key: 'basicElectrical', icon: Zap },
    { key: 'electricalPanels', icon: Shield },
    { key: 'smartHome', icon: Users },
    { key: 'lighting', icon: Star },
    { key: 'industrial', icon: Award },
    { key: 'safety', icon: Clock },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <CenteredSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <div className="animate-fade-in backdrop-blur-md border border-1 border-primary p-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 font-lampion">
              {getTranslation(language, 'heroTitle')}
            </h1>
            <h2 className="text-xl sm:text-2xl text-text mb-6 font-medium">
              {getTranslation(language, 'heroSubtitle')}
            </h2>
            <p className="text-lg text-accent/60 mb-8 leading-relaxed">
              {getTranslation(language, 'heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center"
              >
                {getTranslation(language, 'getQuote')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                {getTranslation(language, 'learnMore')}
              </Link>
            </div>
          </div>

          <div className="animate-float">
            {/* <ThreeScene /> */}
          </div>
        </div>
      </CenteredSection>

      {/* Services Preview */}
      <section className="py-20 backdrop-blur-md border-y border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {getTranslation(language, 'servicesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.key}
                  className="bg-accent border-2 border-primary p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {getTranslation(language, service.key)}
                  </h3>
                  <p className="text-primary">
                    {getTranslation(language, `${service.key}Desc`)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-dark transition-colors inline-flex items-center"
            >
              {getTranslation(language, 'learnMore')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary border-y border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-center items-center space-x-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-0">
              {getTranslation(language, 'whyChooseUs')}
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-lampion mb-0">
              LAMPION?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.key}
                  className="bg-accent border-2 border-primary p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {getTranslation(language, feature.key)}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="backdrop-blur-md flex justify-center items-center border-b border-primary">
        <div className="inline-block py-40 text-center p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {getTranslation(language, 'contactTitle')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {getTranslation(language, 'contactSubtitle')}
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-secondary border border-primary transition-colors inline-flex items-center"
          >
            {getTranslation(language, 'contactUs')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;