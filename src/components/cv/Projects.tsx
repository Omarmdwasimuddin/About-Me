import React from "react";
import { cvData } from "@/data/cv";

export const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {cvData.projects.map((project, index) => (
        <div key={`${project.name}-${index}`}>
          <div className="flex flex-col sm:flex-row justify-between items-baseline mb-1 gap-2">
            <h3 className="text-md font-bold text-gray-900">
              {project.name}
            </h3>
            {/* @ts-ignore - status exists in data but not in original interface if inferred strictly */}
            {project.status && (
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100 print:border-gray-200 print:text-gray-700 print:bg-white">
                {/* @ts-ignore */}
                {project.status}
              </span>
            )}
          </div>
          
          {/* @ts-ignore */}
          {project.liveUrl && (
            <a 
              //@ts-ignore
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline mb-2 inline-block print:text-gray-600"
            >
              {/* @ts-ignore */}
              {project.liveUrl.replace("https://", "")}
            </a>
          )}

          <p className="text-sm text-gray-700 mb-3 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-semibold px-2 py-0.5 bg-gray-50 text-gray-600 rounded border border-gray-100 print:border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
