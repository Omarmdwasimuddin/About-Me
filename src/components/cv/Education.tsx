import React from "react";
import { cvData } from "@/data/cv";

export const Education: React.FC = () => {
  return (
    <div className="space-y-4">
      {cvData.education.map((edu, index) => (
        <div key={`${edu.institution}-${index}`} className="flex flex-col sm:flex-row justify-between items-baseline">
          <div>
            <h3 className="text-md font-bold text-gray-900">{edu.degree}</h3>
            <p className="text-sm text-gray-700">{edu.institution}</p>
          </div>
          <span className="text-sm font-semibold text-gray-600 italic">
            {edu.year}
          </span>
        </div>
      ))}
    </div>
  );
};
