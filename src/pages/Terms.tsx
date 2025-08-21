import React from 'react';
import { FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Terms: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <section className="py-20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              {getTranslation(language, 'termsTitle')}
            </h1>
            <p className="text-accent border-b border-primary">
              {getTranslation(language, 'termsLastUpdated')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-accent mb-8">
              {getTranslation(language, 'termsIntro')}
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Acceptance of Terms</h2>
            <p className="text-accent mb-8">
              By accessing and using LAMPION's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Services Description</h2>
            <p className="text-accent mb-6">
              LAMPION provides electrical installation and maintenance services including:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-accent">
              <li>Basic electrical installations and repairs</li>
              <li>Smart home automation systems</li>
              <li>Industrial and commercial electrical work</li>
              <li>Safety inspections and testing</li>
              <li>Emergency electrical services</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Service Terms</h2>
            <h3 className="text-xl font-semibold text-primary mb-3">Scheduling and Availability</h3>
            <p className="text-accent mb-6">
              All services are provided by appointment. Emergency services are available 24/7 with additional charges for after-hours work.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3">Payment Terms</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-accent">
              <li>Payment is due upon completion of work unless other arrangements are made</li>
              <li>We accept cash, bank transfers, and credit cards</li>
              <li>Late payments may incur additional charges</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">Warranties</h3>
            <p className="text-accent mb-8">
              We provide warranties on our workmanship and materials used. Warranty terms vary by service type and will be specified in your service agreement.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Liability and Insurance</h2>
            <p className="text-accent mb-8">
              LAMPION is fully licensed and insured. Our liability is limited to the value of the work performed. We are not responsible for pre-existing conditions or damage caused by factors beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Safety Requirements</h2>
            <p className="text-accent mb-8">
              All electrical work will be performed in compliance with local electrical codes and safety standards. Customers are responsible for providing safe working conditions and access to work areas.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Modification of Terms</h2>
            <p className="text-accent mb-8">
              LAMPION reserves the right to modify these terms at any time. Changes will be posted on our website and take effect immediately upon posting.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
            <p className="text-accent mb-4">
              For questions regarding these terms, please contact us:
            </p>
            <div className="border-2 border-primary p-6 rounded-lg">
              <p className="text-accent mb-2"><strong>Email:</strong> legal@lampion.rs</p>
              <p className="text-accent mb-2"><strong>Phone:</strong> +381 60 123 4567</p>
              <p className="text-accent"><strong>Address:</strong> Knez Mihailova 42, 11000 Belgrade, Serbia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;