import React from "react";
import { cvData } from "@/data/cv";

export const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
      {cvData.skills.map((skillGroup) => (
        <div key={skillGroup.category} className="mb-2">
          <h3 className="font-bold text-gray-900 text-sm mb-1 uppercase tracking-tight">
            {skillGroup.category}
          </h3>
          <p className="text-gray-700 text-sm">
            {skillGroup.items.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
};
