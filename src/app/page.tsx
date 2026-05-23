"use client";

import React, { useState } from "react";
import { Header } from "@/components/cv/Header";
import { Section } from "@/components/cv/Section";
import { Summary } from "@/components/cv/Summary";
import { Skills } from "@/components/cv/Skills";
import { Experience } from "@/components/cv/Experience";
import { Projects } from "@/components/cv/Projects";
import { Education } from "@/components/cv/Education";
import { Certifications } from "@/components/cv/Certifications";

export default function Home() {
  const [showPrintImage, setShowPrintImage] = useState(false);

  const handlePrint = (withImage: boolean) => {
    setShowPrintImage(withImage);
    // Use a small timeout to ensure the state update is reflected in the DOM before printing
    setTimeout(() => {
      window.print();
    }, 50);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 print:shadow-none print:border-none print:max-w-none">
        
        {/* Print Buttons - Hidden on Print */}
        <div className="flex flex-wrap justify-end gap-3 p-4 bg-gray-50 border-b border-gray-200 print:hidden">
          <button 
            onClick={() => handlePrint(false)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
            Export PDF
          </button>
          
          <button 
            onClick={() => handlePrint(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><polyline points="16 5 21 5 21 10"/><line x1="12" y1="12" x2="21" y2="3"/></svg>
            With Image
          </button>
        </div>

        {/* Print-friendly Layout using Table for repeating margins */}
        <table className="w-full border-collapse">
          <thead className="print:table-header-group hidden print:table-header-group">
            <tr>
              <td>
                <div className="page-header-space" />
              </td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <main className="p-8 sm:p-12 md:p-16 print:p-0 print:px-16 print:-mt-[1cm]">
                  {/* Full Header with Image */}
                  <Header showPrintImage={showPrintImage} />
                  
                  <div className="mt-10 space-y-10">
                    <Section title="Professional Summary">
                      <Summary />
                    </Section>

                    <Section title="Technical Skills">
                      <Skills />
                    </Section>

                    <Section title="Work Experience">
                      <Experience />
                    </Section>

                    <Section title="Key Projects">
                      <Projects />
                    </Section>

                    <Section title="Education">
                      <Education />
                    </Section>

                    <Section title="Certifications & Courses">
                      <Certifications />
                    </Section>
                  </div>

                  <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-xs text-gray-500 print:hidden">
                    <p>© {new Date().getFullYear()} Md. Wasim Uddin. Built with Next.js & Tailwind CSS.</p>
                  </footer>
                </main>
              </td>
            </tr>
          </tbody>

          <tfoot className="print:table-footer-group hidden print:table-footer-group">
            <tr>
              <td>
                <div className="page-footer-space" />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
