import React from "react";

const Academics = () => {
  // Simulates a real file download for the presentation
  const handleDownload = () => {
    alert("Downloading B.Tech Curriculum PDF (2025-2026)...");
  };

  // Opens a realistic academic resource portal in a new tab
  const handlePortal = () => {
    window.open("https://krmuopac.icloudems.com/", "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-black text-[#113b69] mb-10">
        Academics Overview
      </h1>

      {/* Top Academic Calendar Section */}
      <div className="bg-[#eaeef2] p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Academic Calendar 2026
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between border-b border-slate-300 pb-2 text-slate-700">
            <span>Commencement of Classes (Even Semester)</span>
            <span className="font-semibold">Jan 15, 2026</span>
          </div>
          <div className="flex justify-between border-b border-slate-300 pb-2 text-slate-700">
            <span>Mid-Semester Examinations</span>
            <span className="font-semibold">Mar 10 - Mar 15, 2026</span>
          </div>
          <div className="flex justify-between border-b border-slate-300 pb-2 text-slate-700">
            <span>End-Semester Examinations</span>
            <span className="font-semibold">May 15 - May 30, 2026</span>
          </div>
        </div>
      </div>

      {/* Bottom Two Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Curriculum Card */}
        <div className="bg-[#eaeef2] p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start">
          <h3 className="text-xl font-bold text-[#113b69] mb-3">
            Curriculum & Syllabus
          </h3>
          <p className="text-slate-600 mb-6 flex-grow">
            Download the latest CBCS curriculum structure for all B.Tech
            programs.
          </p>
          <button
            onClick={handleDownload}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2 rounded transition-colors shadow-sm active:scale-95"
          >
            Download PDF
          </button>
        </div>

        {/* Library Card */}
        <div className="bg-[#eaeef2] p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start">
          <h3 className="text-xl font-bold text-[#113b69] mb-3">
            Library Resources
          </h3>
          <p className="text-slate-600 mb-6 flex-grow">
            Access e-journals, research papers, and the university digital
            catalog.
          </p>
          <button
            onClick={handlePortal}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2 rounded transition-colors shadow-sm active:scale-95"
          >
            Access Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Academics;
