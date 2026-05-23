import React from "react";
import { cvData } from "@/data/cv";

export const Certifications: React.FC = () => {
  return (
    <div className="space-y-6">
      {cvData.certifications.map((cert, index) => (
        <div key={`${cert.name}-${index}`}>
          <div className="flex flex-col sm:flex-row justify-between items-baseline mb-1">
            <h3 className="text-md font-bold text-gray-900">{cert.name}</h3>
            <span className="text-sm font-semibold text-gray-600 italic">
              {cert.institution}
            </span>
          </div>
          <p className="text-sm text-gray-700 font-medium mb-1">{cert.duration}</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {cert.details}
          </p>
        </div>
      ))}
    </div>
  );
};
