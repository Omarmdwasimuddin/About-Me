import React from "react";
import { cvData } from "@/data/cv";

export const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      {cvData.skills.map((skillGroup) => (
        <div key={skillGroup.category}>
          <h3 className="font-bold text-gray-900 text-sm mb-3 uppercase tracking-wider">
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <span 
                key={skill} 
                className="px-2.5 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-md border border-gray-200 print:border-none print:bg-transparent print:px-0 print:py-0 print:text-sm print:after:content-[',_'] last:print:after:content-['']"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
