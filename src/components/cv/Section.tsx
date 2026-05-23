import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`mb-8 last:mb-0 ${className}`}>
      <h2 className="mb-3 text-lg font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 pb-1">
        {title}
      </h2>
      <div className="text-gray-800 leading-relaxed">{children}</div>
    </section>
  );
};
