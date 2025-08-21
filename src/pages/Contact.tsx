import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import CenteredSection from "../components/CenteredSection";

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <CenteredSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <div></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in backdrop-blur-md border border-1 border-primary p-4 py-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              {getTranslation(language, 'contactTitle')}
            </h1>
            <p className="text-xl text-accent max-w-3xl mx-auto">
              {getTranslation(language, 'contactSubtitle')}
            </p>
          </div>
        </div>
      </CenteredSection>

      {/* Contact Form & Info */}
      <section className="py-20 backdrop-blur-md border-y border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    {getTranslation(language, 'name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-primary bg-transparent text-accent px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      {getTranslation(language, 'email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-primary bg-transparent text-accent px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      {getTranslation(language, 'phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-primary bg-transparent text-accent px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    {getTranslation(language, 'message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-primary bg-transparent text-accent px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{getTranslation(language, 'send')}</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
                    <p className="text-accent">+381 60 123 4567</p>
                    <p className="text-accent">+381 11 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                    <p className="text-accent">info@lampion.rs</p>
                    <p className="text-accent">services@lampion.rs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Address</h3>
                    <p className="text-accent">Knez Mihailova 42</p>
                    <p className="text-accent">11000 Belgrade, Serbia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Working Hours</h3>
                    <p className="text-accent">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-accent">Sat: 9:00 AM - 4:00 PM</p>
                    <p className="text-accent">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>


            </div>

          </div>
          <div className="mt-12 p-6 rounded-xl border-primary border-2 bg-secondary text-center">
            <h3 className="text-xl font-semibold text-primary mb-4">Emergency Service</h3>
            <p className="text-accent mb-4">
              Need immediate electrical assistance? Our emergency service is available 24/7 for urgent electrical issues.
            </p>
            <a
              href="tel:+381601234567"
              className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Emergency Line
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;