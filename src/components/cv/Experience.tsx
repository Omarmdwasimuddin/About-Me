import React from "react";
import { cvData } from "@/data/cv";

export const Experience: React.FC = () => {
  return (
    <div className="space-y-6">
      {cvData.experience.map((exp, index) => (
        <div key={`${exp.company}-${index}`}>
          <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2">
            <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
            <span className="text-sm font-semibold text-gray-600 italic">
              {exp.duration}
            </span>
          </div>
          <div className="text-sm font-bold text-gray-700 mb-3">{exp.company}</div>
          <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-gray-700">
            {exp.description.map((bullet, idx) => (
              <li key={idx} className="pl-1">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
