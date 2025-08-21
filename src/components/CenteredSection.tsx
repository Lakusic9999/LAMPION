// src/components/CenteredSection.tsx
import React from "react";

interface CenteredSectionProps {
  children: React.ReactNode;
  className?: string; // opcionalno za dodatne stilove
}

const CenteredSection: React.FC<CenteredSectionProps> = ({ children, className = "" }) => {
  return (
    <section className={`min-h-screen flex items-center justify-center ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </div>
    </section>
  );
};

export default CenteredSection;
