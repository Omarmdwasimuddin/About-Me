import React from "react";
import { cvData } from "@/data/cv";

export const Summary: React.FC = () => {
  return (
    <p className="text-sm text-gray-700 text-justify leading-relaxed">
      {cvData.summary}
    </p>
  );
};
