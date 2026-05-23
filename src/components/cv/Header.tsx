import React from "react";
import { cvData } from "@/data/cv";
import Image from "next/image";

export const Header: React.FC = () => {
  const { personalInfo } = cvData;

  return (
    <header className="mb-10 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 print:opacity-100 print:transform-none">
      
      {/* Profile Image - Only visible in Print */}
      {personalInfo.imageSrc && (
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-none hidden print:block">
          <Image
            src={personalInfo.imageSrc}
            alt={personalInfo.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Name and Basic Info */}
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-1">
          {personalInfo.name}
        </h1>
        <p className="text-xl font-medium text-gray-600 mb-4">{personalInfo.title}</p>
        
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm text-gray-600">
          {personalInfo.location && (
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {personalInfo.location}
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              {personalInfo.email}
            </a>
          )}
          {/* Portfolio link - Show on web, but we can hide in print right side if we want */}
          {personalInfo.website && (
            <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors print:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Portfolio
            </a>
          )}
        </div>
      </div>

      {/* Social Links - Right side on Web, Hidden or Restructured on Print */}
      <div className="flex flex-col gap-2 text-sm text-gray-600 sm:text-right w-full sm:w-auto print:items-end">
        {personalInfo.linkedin && (
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 justify-center sm:justify-end hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
        )}
        {personalInfo.github && (
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 justify-center sm:justify-end hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </a>
        )}
        {/* Portfolio link for print - only shows in this right column when printing */}
        {personalInfo.website && (
          <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hidden print:flex items-center gap-1.5 justify-end hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            Portfolio
          </a>
        )}
      </div>
    </header>
  );
};
