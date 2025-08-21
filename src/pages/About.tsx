import React from 'react';
import { Shield, Award, Clock, Users, CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import CenteredSection from "../components/CenteredSection";

const About: React.FC = () => {
  const { language } = useLanguage();

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '100%', label: 'Customer Satisfaction' },
  ];

  const team = [
    {
      name: 'Nikola Kalezić',
      role: 'Lead Electrician',
      experience: '10+ years',
    },
    {
      name: 'Lazar Lakusić',
      role: 'Smart Home Specialist',
      experience: '8+ years',
    },
    {
      name: 'Stefan Nikolić',
      role: 'Industrial Systems Expert',
      experience: '12+ years',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <CenteredSection>
        <div className="max-w-7xl py-10 mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in backdrop-blur-md border border-1 border-primary p-4">
          <div className="text-center mb-12">
            <div className="flex flex-row justify-center items-center space-x-4 my-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-0">
                {getTranslation(language, 'about')}
              </h2>
              <h2 className="text-3xl sm:text-5xl font-bold text-primary font-lampion mb-0">
                LAMPION
              </h2>
            </div>
            <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed">
              {getTranslation(language, 'heroDescription')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-accent font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </CenteredSection>

      {/* Why Choose Us */}
      <section className="py-20 backdrop-blur-sm border-y border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              {getTranslation(language, 'whyChooseUs')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            <div>
              <div className="space-y-6 ">
                <div className="flex items-start space-x-4  border-primary border-b-2 border-dashed pb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      {getTranslation(language, 'professional')}
                    </h3>
                    <p className="text-accent">Our certified electricians provide fast, professional service with attention to detail and safety.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 border-primary border-b-2 border-dashed pb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2 ">
                      {getTranslation(language, 'warranty')}
                    </h3>
                    <p className="text-accent">We stand behind our work with comprehensive warranties on all electrical installations and repairs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 border-primary border-b-2 border-dashed pb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      {getTranslation(language, 'safetyQuality')}
                    </h3>
                    <p className="text-accent">All work meets or exceeds industry standards and local electrical codes for maximum safety.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      {getTranslation(language, 'emergency')}
                    </h3>
                    <p className="text-accent">Available 24/7 for emergency electrical services when you need us most.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent p-8 rounded-2xl border border-primary border-2">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                At LAMPION, our mission is to provide safe, reliable, and innovative electrical solutions that exceed our customers' expectations. We combine traditional electrical expertise with cutting-edge smart home technology to create installations that are not only functional but future-ready.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-secondary">Certified and licensed electricians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-secondary">Latest tools and equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-secondary">Transparent pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-secondary">Environmental responsibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary border-y border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-accent max-w-3xl mx-auto">
              Meet our experienced professionals who bring expertise and dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="border border-2 border-primary p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-primary">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;