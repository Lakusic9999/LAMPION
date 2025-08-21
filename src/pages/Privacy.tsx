import React from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Privacy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <section className="py-20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              {getTranslation(language, 'privacyTitle')}
            </h1>
            <p className="text-accent border-b border-primary">
              {getTranslation(language, 'privacyLastUpdated')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-accent mb-8">
              {getTranslation(language, 'privacyIntro')}
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
            <p className="text-accent mb-6">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-accent">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Project details and service requirements</li>
              <li>Communication preferences</li>
              <li>Payment and billing information</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
            <p className="text-accent mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-accent">
              <li>Provide and improve our electrical services</li>
              <li>Communicate with you about your projects</li>
              <li>Send you updates and promotional materials (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Information Sharing</h2>
            <p className="text-accent mb-8">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our business, conducting our services, or serving you.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
            <p className="text-accent mb-8">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
            <p className="text-accent mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-accent">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-accent mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="border border-primary p-6 rounded-lg">
              <p className="text-accent mb-2"><strong>Email:</strong> privacy@lampion.rs</p>
              <p className="text-accent mb-2"><strong>Phone:</strong> +381 60 123 4567</p>
              <p className="text-accent"><strong>Address:</strong> Knez Mihailova 42, 11000 Belgrade, Serbia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;